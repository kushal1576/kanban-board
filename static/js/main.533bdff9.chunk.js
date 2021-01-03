(this["webpackJsonpkanban-board"]=this["webpackJsonpkanban-board"]||[]).push([[0],{40:function(t,n,e){},44:function(t,n,e){"use strict";e.r(n);var r=e(2),i=e(0),a=e(30),c=e.n(a),o=(e(40),e(5)),d=e(6),u=e(7);function s(){var t=Object(d.a)(["\n    height: 100%;\n    left: 0;\n    pointer-events: none;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n"]);return s=function(){return t},t}function f(){var t=Object(d.a)(["\n    border-radius: 3px;\n    border: none;\n    box-shadow: #091e4240 0px 1px 0px 0px; \n    margin-bottom: 0.5rem;\n    padding: 0.5rem 1rem;\n    width: 100%;\n"]);return f=function(){return t},t}function x(){var t=Object(d.a)(["\n    background-color: #5aac44;\n    border-radius: 3px;\n    border: none;\n    box-shadow: none;\n    color: #fff;\n    padding: 6px 12px;\n    text-align: center;\n"]);return x=function(){return t},t}function l(){var t=Object(d.a)(["\n    max-width: 300px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: flex-start;\n"]);return l=function(){return t},t}function b(){var t=Object(d.a)(["\n    background-color: #ffffff3d;\n    border-radius: 3px;\n    border: none;\n    color: ",";\n    cursor: pointer;\n    max-width: 300px;\n    padding: 10px 12px;\n    text-align: left;\n    transition: background 85ms ease-in;\n    width: 100%;\n    &:hover {\n        background-color: #ffffff52;\n    }\n"]);return b=function(){return t},t}function j(){var t=Object(d.a)(["\n    background-color: #fff;\n    cursor: pointer;\n    margin-bottom: 0.5rem;\n    padding: 0.5rem 1rem;\n    max-width: 300px;\n    border-radius: 3px;\n    box-shadow: #091e4240 0px 1px 0px 0px;\n"]);return j=function(){return t},t}function p(){var t=Object(d.a)(["\n    padding: 6px 16px 12px;\n    font-weight: bold;\n"]);return p=function(){return t},t}function O(){var t=Object(d.a)(["\n    background-color: #ebecf0;\n    width: 300px;\n    min-height: 40px;\n    margin-right: 20px;\n    border-radius: 3px;\n    padding: 8px 8px;\n    flex-grow: 0;\n"]);return O=function(){return t},t}function g(){var t=Object(d.a)(["\n    transform: ",";\n    opacity: ",";\n"]);return g=function(){return t},t}function v(){var t=Object(d.a)(["\n    align-items: flex-start;\n    background-color: #3179ba;\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n    padding: 20px;\n    width: 100%;\n"]);return v=function(){return t},t}var h=u.a.div(v()),m=u.a.div(g(),(function(t){return t.isPreview?"rotate(5deg)":void 0}),(function(t){return t.isHidden?0:1})),y=Object(u.a)(m)(O()),I=u.a.div(p()),k=Object(u.a)(m)(j()),w=u.a.button(b(),(function(t){return t.dark?"#000":"#fff"})),D=u.a.div(l()),A=u.a.button(x()),C=u.a.input(f()),T=u.a.div(s()),E=function(t){var n=t.onAdd,e=Object(i.useState)(""),a=Object(o.a)(e,2),c=a[0],d=a[1],u=function(){var t=Object(i.useRef)(null);return Object(i.useEffect)((function(){var n;null===(n=t.current)||void 0===n||n.focus()}),[]),t}();return Object(r.jsxs)(D,{children:[Object(r.jsx)(C,{ref:u,value:c,onChange:function(t){return d(t.target.value)},onKeyPress:function(t){"Enter"===t.key&&n(c)}}),Object(r.jsx)(A,{onClick:function(){return n(c)},children:"Create"})]})},S=function(t){var n=Object(i.useState)(!1),e=Object(o.a)(n,2),a=e[0],c=e[1],d=t.onAdd,u=t.toggleButtonText,s=t.dark;return a?Object(r.jsx)(E,{onAdd:function(t){function n(n){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t){d(t),c(!1)}))}):Object(r.jsx)(w,{dark:s,onClick:function(){return c(!0)},children:u})},_=e(9),M=e(3),R=e(27),L=function(t,n){return t.findIndex((function(t){return t.id===n}))};function P(t,n,e){return t.map((function(t,r){return r!==e?t:n}))}var G=function(t,n,e){var r=t[n];return K(B(t,n),r,e)};function B(t,n){return[].concat(Object(_.a)(t.slice(0,n)),Object(_.a)(t.slice(n+1)))}function K(t,n,e){return[].concat(Object(_.a)(t.slice(0,e)),[n],Object(_.a)(t.slice(e)))}var N={draggedItem:void 0,lists:[{id:"0",text:"To Do",tasks:[{id:"c0",text:"Generate app scaffold"}]},{id:"1",text:"In Progress",tasks:[{id:"c2",text:"Learn Typescript"}]},{id:"2",text:"Done",tasks:[{id:"c3",text:"Begin to use static typing"}]}]},U=function(t,n){switch(n.type){case"ADD_LIST":return Object(M.a)(Object(M.a)({},t),{},{lists:[].concat(Object(_.a)(t.lists),[{id:Object(R.a)(),text:n.payload,tasks:[]}])});case"ADD_TASK":var e=L(t.lists,n.payload.listId),r=t.lists[e],i=Object(M.a)(Object(M.a)({},r),{},{tasks:[].concat(Object(_.a)(r.tasks),[{id:Object(R.a)(),text:n.payload.text}])});return Object(M.a)(Object(M.a)({},t),{},{lists:P(t.lists,i,e)});case"MOVE_LIST":var a=n.payload,c=a.dragIndex,o=a.hoverIndex;return Object(M.a)(Object(M.a)({},t),{},{lists:G(t.lists,c,o)});case"MOVE_TASK":var d=n.payload,u=d.dragIndex,s=d.hoverIndex,f=d.sourceColumn,x=d.targetColumn,l=L(t.lists,f),b=L(t.lists,x),j=t.lists[l],p=j.tasks[u],O=Object(M.a)(Object(M.a)({},j),{},{tasks:B(j.tasks,u)}),g=Object(M.a)(Object(M.a)({},t),{},{lists:P(t.lists,O,l)}),v=g.lists[b],h=Object(M.a)(Object(M.a)({},v),{},{tasks:K(v.tasks,p,s)});return Object(M.a)(Object(M.a)({},g),{},{lists:P(g.lists,h,b)});case"SET_DRAGGED_ITEM":return Object(M.a)(Object(M.a)({},t),{},{draggedItem:n.payload});default:return t}},V=Object(i.createContext)({}),H=function(t){var n=t.children,e=Object(i.useReducer)(U,N),a=Object(o.a)(e,2),c=a[0],d=a[1];return Object(r.jsx)(V.Provider,{value:{state:c,dispatch:d},children:n})},J=function(){return Object(i.useContext)(V)},z=e(49),W=e(48),q=e(29),F=function(t){var n=J().dispatch,e=Object(W.a)({item:t,begin:function(){return n({type:"SET_DRAGGED_ITEM",payload:t})},end:function(){return n({type:"SET_DRAGGED_ITEM",payload:void 0})}}),r=Object(o.a)(e,3),a=r[1],c=r[2];return Object(i.useEffect)((function(){c(Object(q.a)(),{captureDraggingState:!0})})),{drag:a}},Q=function(t,n,e,r){return Boolean(!t&&n&&n.type===e&&n.id===r)},X=function(t){var n=t.text,e=t.id,a=t.index,c=t.columnId,d=t.isPreview,u=J(),s=u.state,f=u.dispatch,x=Object(i.useRef)(null),l=F({type:"CARD",id:e,index:a,text:n,columnId:c}).drag,b=Object(z.a)({accept:"CARD",hover:function(t){if(t.id!==e){var n=t.index,r=a,i=t.columnId,o=c;f({type:"MOVE_TASK",payload:{dragIndex:n,hoverIndex:r,sourceColumn:i,targetColumn:o}}),t.index=r,t.columnId=o}}});return l((0,Object(o.a)(b,2)[1])(x)),Object(r.jsx)(k,{isHidden:Q(d,s.draggedItem,"CARD",e),isPreview:d,ref:x,children:n})},Y=function(t){var n=t.text,e=t.index,a=t.id,c=t.isPreview,d=J(),u=d.state,s=d.dispatch,f=Object(i.useRef)(null),x=F({type:"COLUMN",id:a,index:e,text:n}).drag,l=Object(z.a)({accept:["COLUMN","CARD"],hover:function(t){if("COLUMN"===t.type){var n=t.index,r=e;if(n===r)return;s({type:"MOVE_LIST",payload:{dragIndex:n,hoverIndex:r}}),t.index=r}else{var i=t.index,c=t.columnId,o=a;if(c===o)return;s({type:"MOVE_TASK",payload:{dragIndex:i,hoverIndex:0,sourceColumn:c,targetColumn:o}}),t.index=0,t.columnId=o}}});return x((0,Object(o.a)(l,2)[1])(f)),Object(r.jsxs)(y,{ref:f,isPreview:c,isHidden:Q(c,u.draggedItem,"COLUMN",a),children:[Object(r.jsx)(I,{children:n}),u.lists[e].tasks.map((function(t,n){return Object(r.jsx)(X,{id:t.id,columnId:a,text:t.text,index:n},t.id)})),Object(r.jsx)(S,{toggleButtonText:"+ Add another task",onAdd:function(t){return s({type:"ADD_TASK",payload:{text:t,listId:a}})},dark:!0})]})},Z=e(46);function $(t){if(!t)return{display:"none"};var n=t.x,e=t.y,r="translate(".concat(n,"px, ").concat(e,"px)");return{transform:r,WebkitTransform:r}}var tt=function(){var t=Object(Z.a)((function(t){return{isDragging:t.isDragging(),item:t.getItem(),currentOffset:t.getSourceClientOffset()}})),n=t.isDragging,e=t.item,i=t.currentOffset;return n&&n?Object(r.jsx)(T,{children:Object(r.jsx)("div",{style:$(i),children:"COLUMN"===e.type?Object(r.jsx)(Y,{id:e.id,text:e.text,index:e.index,isPreview:!0}):Object(r.jsx)(X,{id:e.id,text:e.text,index:0,columnId:e.columnId,isPreview:!0})})}):null},nt=function(){var t=J(),n=t.state,e=t.dispatch;return Object(r.jsxs)(h,{children:[Object(r.jsx)(tt,{}),n.lists.map((function(t,n){return Object(r.jsx)(Y,{id:t.id,text:t.text,index:n},t.id)})),Object(r.jsx)(S,{toggleButtonText:"+ Add another list",onAdd:function(t){return e({type:"ADD_LIST",payload:t})}})]})},et=e(47),rt=e(23);c.a.render(Object(r.jsx)(et.a,{backend:rt.a,children:Object(r.jsx)(H,{children:Object(r.jsx)(nt,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.533bdff9.chunk.js.map