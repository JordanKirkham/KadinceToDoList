(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),l=n(9),i=n.n(l),r=n(7),d=n(4),j=n(5),o=n(2),s=(n(14),n(0));function h(e){var t=e.newItem,n=e.handleChange,c=e.handleSubmit;return Object(s.jsx)("div",{class:"column",children:Object(s.jsxs)("form",{onSubmit:c,autocomplete:"off",children:[Object(s.jsx)("label",{for:"to-do-input"}),Object(s.jsx)("input",{type:"text",complete:"false",placeholder:"Type here",name:"entry",value:t.entry||"",onChange:n}),Object(s.jsx)("button",{type:"submit",name:"submit-button",children:"Add Item"})]})})}function u(e){var t=e.handleSort;return Object(s.jsxs)("div",{class:"column",children:[Object(s.jsx)("label",{children:"View:"}),Object(s.jsx)("hr",{}),Object(s.jsx)("button",{name:"All",onClick:t,children:"All"}),Object(s.jsx)("button",{name:"Incomplete",onClick:t,children:"Incomplete"}),Object(s.jsx)("button",{name:"Complete",onClick:t,children:"Complete"})]})}function b(e){var t=e.allPending,n=e.handleDelete,c=e.handleComp,a=e.handleEdit,l=e.handleConfirmEdit,i=e.handleEditChange;return Object(s.jsx)("ul",{children:t.map((function(e){var r=e.entry,d=e.id,j=e.editState;return Object(s.jsx)("li",{children:Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{id:d,children:r}),Object(s.jsx)("button",{name:r,onClick:function(){return c(d,r)},children:"\u2713"}),Object(s.jsx)("button",{onClick:function(){return n(t,d)},children:"X"}),Object(s.jsx)("button",{onClick:function(){return a(d)},children:"Edit"}),j?Object(s.jsxs)("div",{id:"editDiv",children:[Object(s.jsx)("input",{type:"text",name:"entryEdit",placeholder:"Edit here",onChange:i,autocomplete:"off"}),Object(s.jsx)("button",{fakeId:d,onClick:l,children:"Confirm"})]}):null]})},d)}))})}function O(e){var t=e.allComp,n=e.handleDelete;return Object(s.jsx)("ul",{children:t.map((function(e){var c=e.name,a=e.id;return Object(s.jsx)("li",{style:{textDecorationLine:"line-through"},children:Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:c}),Object(s.jsx)("button",{onClick:function(){return n(t,a)},children:"X"})]})},a)}))})}function m(e){var t=e.chosenSort,n=e.allPending,c=e.handleDelete,a=e.handleComp,l=e.allComp,i=e.handleEdit,r=e.handleConfirmEdit,d=e.handleEditChange;return"Complete"===t?Object(s.jsx)("div",{className:"list",children:Object(s.jsx)(O,{allComp:l,handleDelete:c})}):"Incomplete"===t?Object(s.jsx)("div",{className:"list",children:Object(s.jsx)(b,{allPending:n,handleDelete:c,handleComp:a,handleEdit:i,handleConfirmEdit:r,handleEditChange:d})}):"All"===t?Object(s.jsxs)("div",{className:"list",children:[Object(s.jsx)(b,{allPending:n,handleDelete:c,handleComp:a,handleEdit:i,handleConfirmEdit:r,handleEditChange:d}),Object(s.jsx)(O,{allComp:l,handleDelete:c})]}):Object(s.jsx)("p",{children:"a"})}var f=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],a=t[1],l=Object(c.useState)([]),i=Object(o.a)(l,2),b=i[0],O=i[1],f=Object(c.useState)(-1),x=Object(o.a)(f,2),p=x[0],C=x[1];Object(c.useEffect)((function(){b[p]&&(b[p].editState=!0,a({}))}),[p]);var v=Object(c.useState)("Temp"),E=Object(o.a)(v,2),g=E[0],S=E[1],y=Object(c.useState)({}),D=Object(o.a)(y,2),k=D[0],I=D[1],w=Object(c.useState)([]),A=Object(o.a)(w,2),N=A[0],P=A[1];Object(c.useEffect)((function(){k.name&&P((function(e){return[k].concat(Object(r.a)(e))}))}),[k]);var J=Object(c.useState)("All"),T=Object(o.a)(J,2),B=T[0],L=T[1],X=function(e,t){var n;e===b?n=O:e===N&&(n=P),n((function(e){return e.filter((function(e){return e.id!==t}))}))};return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("h1",{children:"To-Do List"}),Object(s.jsx)("h3",{children:"By Jordan Kirkham"})]}),Object(s.jsxs)("div",{className:"allForm",children:[Object(s.jsx)(h,{newItem:n,handleChange:function(e){var t=e.target,n=t.name,c=t.value;a((function(e){var t;return Object(j.a)(Object(j.a)({},e),{},(t={id:Date.now()},Object(d.a)(t,n,c),Object(d.a)(t,"editState",!1),t))}))},handleSubmit:function(e){e.preventDefault(),n.entry&&(O((function(e){return[].concat(Object(r.a)(e),[n])})),a({}))}}),Object(s.jsx)(u,{handleSort:function(e){var t=e.target;L(t.name)}})]}),Object(s.jsx)(m,{chosenSort:B,allPending:b,handleDelete:X,handleComp:function(e,t){I((function(e){return Object(j.a)(Object(j.a)({},e),{},{name:t,id:Date.now()})})),X(b,e)},allComp:N,handleEdit:function(e){C(b.findIndex((function(t){return t.id===e})))},handleConfirmEdit:function(e){var t=e.target;b[p].entry=g,b[p].editState=!1,O((function(e){return Object(r.a)(e)})),X(b,t.fakeId)},handleEditChange:function(e){var t=e.target;S(t.value)}})]})};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5dae965f.chunk.js.map