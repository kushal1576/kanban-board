import { nanoid } from "nanoid"
import React, { createContext, useContext, useReducer } from "react"
import { DragItem } from "./DragItem"
import { findItemIndexById, overrideItemAtIndex, moveItem, removeItemAtIndex, insertItemAtIndex } from "./utils/arrayUtils"

interface Task {
    id: string
    text: string
}

interface List {
    id: string
    text: string
    tasks: Task[]
}

export interface AppState {
    lists: List[]
    draggedItem: DragItem | undefined
}

const appData: AppState = {
    draggedItem: undefined,
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{ id: "c3", text: "Begin to use static typing" }]
        }
    ]
}

interface AppStateContextProps {
    state: AppState
    dispatch: React.Dispatch<Action>
}

type Action =
    | {
        type: "ADD_LIST"
        payload: string
    }
    | {
        type: "ADD_TASK"
        payload: { text: string, listId: string }
    }
    | {
        type: "MOVE_LIST"
        payload: {
            dragIndex: number
            hoverIndex: number
        }
    }
    | {
        type: "MOVE_TASK"
        payload: {
            dragIndex: number
            hoverIndex: number
            sourceColumn: string
            targetColumn: string
        }
    }
    | {
        type: "SET_DRAGGED_ITEM"
        payload: DragItem | undefined
    }

const appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case "ADD_LIST": {
            return {
                ...state,
                lists: [
                    ...state.lists,
                    { id: nanoid(), text: action.payload, tasks: [] }
                ]
            }
        }
        case "ADD_TASK": {
            const targetListIndex = findItemIndexById(
                state.lists,
                action.payload.listId
            )

            const targetList = state.lists[targetListIndex]

            const updatedTargetList = {
                ...targetList,
                tasks: [
                    ...targetList.tasks,
                    { id: nanoid(), text: action.payload.text }
                ]
            }
            return {
                ...state,
                lists: overrideItemAtIndex(
                    state.lists,
                    updatedTargetList,
                    targetListIndex
                )
            }
        }
        case "MOVE_LIST": {
            const { dragIndex, hoverIndex } = action.payload
            return {
                ...state,
                lists: moveItem(state.lists, dragIndex, hoverIndex)
            }
        }
        case "MOVE_TASK": {
            const { dragIndex, hoverIndex, sourceColumn, targetColumn } = action.payload
            const sourceListIndex = findItemIndexById(state.lists, sourceColumn)
            const targetListIndex = findItemIndexById(state.lists, targetColumn)
            const sourceList = state.lists[sourceListIndex]
            const task = sourceList.tasks[dragIndex]

            const updatedSourceList = {
                ...sourceList,
                tasks: removeItemAtIndex(sourceList.tasks, dragIndex)
            }

            const stateWithUpdatedSourceList = {
                ...state,
                lists: overrideItemAtIndex(
                    state.lists,
                    updatedSourceList,
                    sourceListIndex
                )
            }

            const targetList = stateWithUpdatedSourceList.lists[targetListIndex]

            const updatedTargetList = {
                ...targetList,
                tasks: insertItemAtIndex(targetList.tasks, task, hoverIndex)
            }

            return {
                ...stateWithUpdatedSourceList,
                lists: overrideItemAtIndex(
                    stateWithUpdatedSourceList.lists,
                    updatedTargetList,
                    targetListIndex
                )
            }

        }
        case "SET_DRAGGED_ITEM": {
            return { ...state, draggedItem: action.payload }
        }
        default: {
            return state
        }
    }
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(appStateReducer, appData)

    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}