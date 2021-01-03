import { useDragLayer, XYCoord } from "react-dnd"
import { Card } from "./Card"
import { Column } from "./Column"
import { CustomDragLayerContainer } from "./styles"


function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
    if (!currentOffset) {
        return {
            display: "none"
        }
    }

    const { x, y } = currentOffset

    const transform = `translate(${x}px, ${y}px)`
    return {
        transform,
        WebkitTransform: transform
    }
}

const CustomDragLayer: React.FC = () => {
    const { isDragging, item, currentOffset } = useDragLayer(monitor => ({
        isDragging: monitor.isDragging(),
        item: monitor.getItem(),
        currentOffset: monitor.getSourceClientOffset()
    }))

    if (!isDragging) {
        return null
    }

    return isDragging ? (
        <CustomDragLayerContainer>
            <div style={getItemStyles(currentOffset)}>
                {item.type === "COLUMN" ? (
                    <Column
                        id={item.id}
                        text={item.text}
                        index={item.index}
                        isPreview={true}
                    />
                ) : (
                        <Card
                            id={item.id}
                            text={item.text}
                            index={0}
                            columnId={item.columnId}
                            isPreview={true}
                        />
                    )
                }
            </div>
        </CustomDragLayerContainer>
    ) : null
}

export default CustomDragLayer