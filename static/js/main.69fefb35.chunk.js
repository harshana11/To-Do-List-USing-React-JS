(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),o=(a(14),a(7)),u=a(3),s=a(1);var i=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],l=a[1];return c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),r.trim()&&(e.addTask(r),l(""))}},c.a.createElement("h2",{className:"label-wrapper"},c.a.createElement("label",{htmlFor:"new-todo-input",className:"label__lg"},"Enter Your Tasks Here")),c.a.createElement("input",{type:"text",id:"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off",value:r,onChange:function(e){l(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"btn btn__primary btn__lg"},"Add My Task"))};var m=function(e){return c.a.createElement("button",{type:"button",className:"btn toggle-btn","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)}},c.a.createElement("span",null,e.name),c.a.createElement("span",null," tasks"))};function d(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),i=u[0],m=u[1],d=Object(n.useRef)(null),b=Object(n.useRef)(null),f=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(r);var p=c.a.createElement("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),i.trim()&&(e.editTask(e.id,i),m(""),l(!1))}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"todo-label",htmlFor:e.id},"New name for ",e.name),c.a.createElement("input",{id:e.id,className:"todo-text",type:"text",value:i,onChange:function(e){m(e.target.value)},ref:d})),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",className:"btn todo-cancel",onClick:function(){return l(!1)}}," Cancel"),c.a.createElement("button",{type:"submit",className:"btn btn__primary todo-edit"},"Save"))),E=c.a.createElement("div",{className:"stack-small"},c.a.createElement("div",{className:"c-cb"},c.a.createElement("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),c.a.createElement("label",{className:"todo-label",htmlFor:e.id},e.name)),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",className:"btn",onClick:function(){return l(!0)},ref:b},"Edit"),c.a.createElement("button",{type:"button",className:"btn btn__danger",onClick:function(){return e.deleteTask(e.id)}},"Delete")));return Object(n.useEffect)((function(){!f&&r&&d.current.focus(),f&&!r&&b.current.focus()}),[f,r]),c.a.createElement("li",{className:"todo"},r?p:E)}var b=a(8);var f={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},p=Object.keys(f);var E=function(e){var t=Object(n.useState)(e.tasks),a=Object(s.a)(t,2),r=a[0],l=a[1],E=Object(n.useState)("All"),k=Object(s.a)(E,2),v=k[0],g=k[1];function j(e){var t=r.map((function(t){return e===t.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t}));l(t)}function O(e){var t=r.filter((function(t){return e!==t.id}));l(t)}function N(e,t){var a=r.map((function(a){return e===a.id?Object(u.a)(Object(u.a)({},a),{},{name:t}):a}));l(a)}var h=r.filter(f[v]).map((function(e){return c.a.createElement(d,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:j,deleteTask:O,editTask:N})})),y=p.map((function(e){return c.a.createElement(m,{key:e,name:e,isPressed:e===v,setFilter:g})})),C=1!==h.length?"tasks":"task",_="".concat(h.length," ").concat(C," remaining"),T=Object(n.useRef)(null),x=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(r.length);return Object(n.useEffect)((function(){r.length-x===-1&&T.current.focus()}),[r.length,x]),c.a.createElement("div",{className:"todoapp stack-large"},c.a.createElement(i,{addTask:function(e){var t={id:"todo-"+Object(b.a)(),name:e,completed:!1};l([].concat(Object(o.a)(r),[t]))}}),c.a.createElement("div",{className:"filters btn-group stack-exception"},y),c.a.createElement("h2",{id:"list-heading",tabIndex:"-1",ref:T},_),c.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},h))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,{tasks:[]})),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.69fefb35.chunk.js.map