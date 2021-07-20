(this.webpackJsonppart2a_rendering_a_collection=this.webpackJsonppart2a_rendering_a_collection||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(15),r=n.n(c),o=n(6),a=n(3),i=n(2),u=n(0),s=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[e.content,Object(u.jsx)("button",{onClick:n,children:c})]})},l=n(4),j=n.n(l),d="/api/notes",f={getAll:function(){var t=j.a.get(d),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},create:function(t){return j.a.post(d,t).then((function(t){return t.data}))},update:function(t,e){return j.a.put("".concat(d,"/").concat(t),e).then((function(t){return t.data}))}};var b=function(t){var e=t.message;return null===e?null:Object(u.jsx)("div",{className:"error",children:e})};var p=function(t){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:15},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},m=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],c=e[1],r=Object(i.useState)("a new note..."),l=Object(a.a)(r,2),j=l[0],d=l[1],m=Object(i.useState)(!0),O=Object(a.a)(m,2),h=O[0],v=O[1],x=Object(i.useState)(null),g=Object(a.a)(x,2),S=g[0],k=g[1];Object(i.useEffect)((function(){f.getAll().then((function(t){c(t)}))}),[]);var w=h?n:n.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(b,{message:S}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return v(!h)},children:["show ",h?"important":"all"]})}),Object(u.jsx)("ul",{children:w.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),r=Object(o.a)(Object(o.a)({},e),{},{important:!e.important});f.update(t,r).then((function(e){c(n.map((function(n){return n.id!==t?n:e})))})).catch((function(r){k("the note ".concat(e.content," was already deleted from the server")),setTimeout((function(){k(null)}),5e3),c(n.filter((function(e){return e.id!==t})))}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:j,date:(new Date).toISOString(),important:Math.random()<.5};f.create(e).then((function(t){c(n.concat(t)),d("")}))},children:[Object(u.jsx)("input",{value:j,onChange:function(t){d(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(p,{})]})};n(39);r.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.41ab512d.chunk.js.map