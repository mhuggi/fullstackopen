(this.webpackJsonpaxiostraining=this.webpackJsonpaxiostraining||[]).push([[0],{15:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),u=n(4),l=n(2),i=function(e){var t=e.note,n=e.toggleImportance,a=t.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},t.content,r.a.createElement("button",{onClick:n},a))},m=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},s=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Emil Salmi"))},f=n(3),p=n.n(f),E=function(){return p.a.get("/api/notes").then((function(e){return e.data}))},b=function(e){return p.a.post("/api/notes",e).then((function(e){return e.data}))},v=function(e,t){return p.a.put("".concat("/api/notes","/").concat(e),t).then((function(e){return e.data}))},g=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),f=Object(l.a)(c,2),p=f[0],g=f[1],d=Object(a.useState)(!0),h=Object(l.a)(d,2),O=h[0],j=h[1],S=Object(a.useState)(null),w=Object(l.a)(S,2),y=w[0],k=w[1],C=Object(a.useState)(""),N=Object(l.a)(C,2),x=N[0],I=N[1],D=Object(a.useState)(""),J=Object(l.a)(D,2),z=J[0],B=J[1];Object(a.useEffect)((function(){E().then((function(e){o(e)}))}),[]);var L=O?n:n.filter((function(e){return e.important}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(m,{message:y}),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("logging in with",x,z)}},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:x,name:"Username",onChange:function(e){var t=e.target;return I(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:z,name:"Password",onChange:function(e){var t=e.target;return B(t.value)}})),r.a.createElement("button",{type:"submit"},"login")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return j(!O)}},"show ",O?"important":"all")),r.a.createElement("ul",null,L.map((function(e,t){return r.a.createElement(i,{key:t,note:e,toggleImportance:function(){return function(e){"http://localhost:3001/notes/".concat(e);var t=n.find((function(t){return t.id===e})),a=Object(u.a)(Object(u.a)({},t),{},{important:!t.important});v(e,a).then((function(t){o(n.map((function(n){return n.id!==e?n:t})))})).catch((function(e){k("Note '".concat(t.content,"' was already removed from server")),setTimeout((function(){k(null)}),5e3)}))}(e.id)}})}))),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={content:p,date:(new Date).toISOString(),important:Math.random()>.5,id:n.length+1};b(t).then((function(e){o(n.concat(e)),g("")}))}},r.a.createElement("input",{value:p,onChange:function(e){g(e.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(s,null))};c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e252d83e.chunk.js.map