(this["webpackJsonprecipe-of-the-day"]=this["webpackJsonprecipe-of-the-day"]||[]).push([[0],{27:function(e,r,t){},28:function(e,r,t){},55:function(e,r,t){},56:function(e,r,t){"use strict";t.r(r);var n=t(0),c=t.n(n),a=t(20),s=t.n(a),i=(t(27),t(28),t(22)),u=t.p+"static/media/logo.45b79692.png",o=t(1);var l=function(e){var r=e.title,t=e.subtitle;return Object(o.jsxs)("h1",{children:[r,Object(o.jsx)("span",{children:t})]})};function j(){return Object(o.jsxs)("section",{className:"home-page-banner",children:[Object(o.jsx)("img",{src:u,alt:"Recipes of the day logo"}),Object(o.jsx)(l,{title:"Recipes of the Day"})]})}var d,b,h,p,O=t(3),f=t.n(O),v=t(7),x=t(4),g=t(10),m=t.n(g),E=t(8),C=function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return[e,t]},I=function(e,r){var t=Object(x.a)(e,2),n=t[0],c=t[1];return n.map((function(e,t){var n=e;return r&&(n=e.length?n+r[c[t]]:""),n})).join("")},y={API:{RANDOM_RECIPE:C(d||(d=Object(E.a)(["/random"]))),SEARCH_RECIPE:C(b||(b=Object(E.a)(["/search?s=",""])),"searchTerm")},APPLICATION:{HOME:C(h||(h=Object(E.a)(["/"]))),RECIPE_DETAILS:C(p||(p=Object(E.a)(["/recipes/",""])),"recipeId")}};function N(e,r){return e.then((function(e){return[null,e]})).catch((function(e){return r&&Object.assign(e,r),[e,void 0]}))}var R=m.a.create({baseURL:"/api"}),w=function(){var e=Object(v.a)(f.a.mark((function e(r){var t,n,c,a,s,i,u,o,l,j,d,b,h,p,O,v,g;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.calls,n=r.loading,c=r.error,a=r.resource,s=r.repeatCalls,i=r.previousValue,u=r.skipUpdate,o=[],n(!0),s)for(l=t[0],j=0;j<s;j++)o.push(R.get(l.path,l.config||{}));else t.forEach((function(e){return o.push(R.get(e.path,e.config||{}))}));return e.next=6,N(m.a.all(o));case 6:if(d=e.sent,b=Object(x.a)(d,2),h=b[0],p=b[1],O=A({err:h,error:c}),v=p.map((function(e){return e.data.meals[0]})),s){e.next=15;break}return n(!1),e.abrupt("return",[O,v]);case 15:return g=P({previousValue:i,err:h,response:{data:v},resource:a,skipUpdate:u}),n(!1),e.abrupt("return",[O,g]);case 18:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),A=function(e){var r=e.err,t=e.error,n=null===r||void 0===r?void 0:r.response;return t(n),n},P=function(e){var r=e.previousValue,t=e.err,n=e.response,c=e.resource,a=(e.skipUpdate,t?r:null===n||void 0===n?void 0:n.data);return c(a),a};var k=t(5);var T=function(e){var r=e.src,t=e.alt;return Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:r,alt:t})})};function M(e){var r=e.children;return Object(o.jsx)("section",{className:"card-body",children:r})}var L=function(e){var r=e.contentText,t=e.contentTitle,n=e.contentContainer,c=e.children,a=n||M;return Object(o.jsxs)(a,{children:[Object(o.jsx)("header",{children:t}),Object(o.jsx)("p",{children:r}),c]})};var S=function(e){var r=e.title,t=e.subtitle,n=e.children;return Object(o.jsxs)("header",{className:"card-header",children:[Object(o.jsxs)("h4",{children:[r,Object(o.jsx)("span",{children:t})]}),n]})};var D=function(e){var r=e.image,t=e.header,n=e.body,c=e.children;return Object(o.jsxs)("section",{className:"card",children:[r?Object(o.jsx)(T,Object(k.a)({},r)):null,t?Object(o.jsx)(S,Object(k.a)({},t)):null,Object(o.jsx)(L,Object(k.a)(Object(k.a)({},n),{},{children:c}))]})};t(55);var F=function(e){var r=e.title,t=e.image;return Object(o.jsx)("div",{className:"recipe-card",children:Object(o.jsxs)(D,{children:[Object(o.jsx)(S,{title:r}),Object(o.jsx)(T,Object(k.a)({},t))]})})};var U=function(e){var r=e.recipes,t=void 0===r?[]:r;return Object(o.jsx)("div",{children:t.map((function(e){var r={src:e.strMealThumb,alt:e.strMeal};return Object(o.jsx)(F,{image:r,title:e.strMeal},e.idMeal)}))})};var V=function(){var e=function(){var e=Object(n.useState)(!0),r=Object(x.a)(e,2),t=r[0],c=r[1],a=Object(n.useState)([]),s=Object(x.a)(a,2),i=s[0],u=s[1],o=Object(n.useState)(void 0),l=Object(x.a)(o,2),j=l[0],d=l[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w({calls:[{path:I(y.API.RANDOM_RECIPE)}],repeatCalls:5,previousValue:i,error:d,loading:c,resource:u});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!function(){var r=Object(v.a)(f.a.mark((function r(){return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e();case 2:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()()}),[]),{loading:t,resources:i,error:j,setResources:u,setError:d,setLoading:c}}(),r=e.loading,t=e.error;return Object(o.jsxs)("main",{className:"home-page",children:[Object(o.jsx)(j,{}),Object(o.jsx)("div",{children:t?Object(o.jsx)("h2",{children:"There was an error loading the data"}):null}),r?Object(o.jsx)("h2",{children:"Loading..."}):Object(o.jsx)(U,{recipes:e.resources})]})};var _=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(i.a,{children:Object(o.jsx)(V,{path:"/"})})})},B=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(r){var t=r.getCLS,n=r.getFID,c=r.getFCP,a=r.getLCP,s=r.getTTFB;t(e),n(e),c(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root")),B()}},[[56,1,2]]]);
//# sourceMappingURL=main.b69498c3.chunk.js.map