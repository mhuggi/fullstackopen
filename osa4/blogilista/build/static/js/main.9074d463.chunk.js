(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(15),l=n.n(u),o=n(2),c=n.n(o),i=n(4),s=n(3),p=function(e){var t=e.blog;return r.a.createElement("div",null,t.title," ",t.author)},f=n(5),m=n.n(f),g=null,b={getAll:function(){return m.a.get("/api/blogs").then((function(e){return e.data}))},setToken:function(e){g="bearer ".concat(e)},create:function(){var e=Object(i.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,m.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v={login:function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],u=t[1],l=Object(a.useState)([]),o=Object(s.a)(l,2),f=o[0],m=o[1],g=Object(a.useState)([]),d=Object(s.a)(g,2),E=d[0],h=d[1],O=Object(a.useState)([]),j=Object(s.a)(O,2),w=j[0],S=j[1],k=Object(a.useState)(null),y=Object(s.a)(k,2),x=(y[0],y[1]),C=Object(a.useState)(""),U=Object(s.a)(C,2),A=U[0],B=U[1],I=Object(a.useState)(""),J=Object(s.a)(I,2),T=J[0],D=J[1],L=Object(a.useState)(null),N=Object(s.a)(L,2),z=N[0],P=N[1];Object(a.useEffect)((function(){b.getAll().then((function(e){return u(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogUser");if(e){var t=JSON.parse(e);P(t),b.setToken(t.token)}}),[]);var q=function(e){e.preventDefault();var t={title:f,author:E,url:w};b.create(t).then((function(e){u(n.concat(e)),m(""),S(""),h("")}))},F=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,v.login({username:A,password:T});case 4:n=e.sent,window.localStorage.setItem("loggedBlogUser",JSON.stringify(n)),P(n),B(""),D(""),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),x("wrong credentials"),setTimeout((function(){x(null)}),5e3);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),G=function(e){m(e.target.value)},H=function(e){h(e.target.value)},K=function(e){S(e.target.value)};return null===z?r.a.createElement("div",null,r.a.createElement("h2",null,"Log in to application"),r.a.createElement("form",{onSubmit:F},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:A,name:"Username",onChange:function(e){var t=e.target;return B(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:T,name:"Password",onChange:function(e){var t=e.target;return D(t.value)}})),r.a.createElement("button",{type:"submit"},"login"))):r.a.createElement("div",null,r.a.createElement("p",null,"Logged in as ",z.name,r.a.createElement("button",{onClick:function(){return window.localStorage.removeItem("loggedBlogUser"),void window.location.reload(!1)}},"logout")),r.a.createElement("form",{onSubmit:q},r.a.createElement("p",null,"Title"),r.a.createElement("input",{value:f,onChange:G}),r.a.createElement("p",null,"Author"),r.a.createElement("input",{value:E,onChange:H}),r.a.createElement("p",null,"Url"),r.a.createElement("input",{value:w,onChange:K}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement("h2",null,"blogs"),n.map((function(e){return r.a.createElement(p,{key:e.id,blog:e})})))};l.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9074d463.chunk.js.map