(this["webpackJsonpshri-homework-2"]=this["webpackJsonpshri-homework-2"]||[]).push([[0],{149:function(e,t,r){},151:function(e,t,r){},152:function(e,t,r){},153:function(e,t,r){},154:function(e,t,r){},156:function(e,t,r){},166:function(e,t,r){},167:function(e,t,r){},168:function(e,t,r){},169:function(e,t,r){},170:function(e,t,r){},171:function(e,t,r){},270:function(e,t,r){},271:function(e,t,r){},272:function(e,t,r){},273:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),s=r(32),a=r.n(s),c=r(14),o=r(13),l=r(44),d=r(99),u=Object(d.a)(),b=new l.Counter;b.init("25b6fb6d-fab1-457a-9297-99f01407c63f",String(Math.random()).substr(2,12),"app"),b.setAdditionalParams({browser:u?u.name:"other",os:u?u.os:"other"});var h=b,m=r(27),j=Object(m.b)({name:"settings",initialState:{repository:"",isLoading:!1,error:""},reducers:{setRepository:function(e,t){e.repository=t.payload},setIsLoading:function(e,t){e.isLoading=t.payload},setError:function(e,t){e.error=t.payload}}}),f=j.actions,p=j.reducer,O=f.setRepository,v=f.setIsLoading,y=f.setError,C=p,g=r(7),x=Object(m.b)({name:"settings",initialState:{history:[],isLoading:!1},reducers:{setHistory:function(e,t){e.history=t.payload},addHistory:function(e,t){e.history=[].concat(Object(g.a)(e.history),Object(g.a)(t.payload))},setIsLoading:function(e,t){e.isLoading=t.payload}}}),w=x.actions,N=x.reducer,P=w.setHistory,M=w.addHistory,L=w.setIsLoading,k=N,E=Object(m.a)({reducer:{settings:C,history:k}}),H=r(4),V="/settings",S=r(24),I=r.n(S),B=r(100),F=new(r.n(B).a)(I.a,{delayResponse:1e3});F.onPost("/set-repository").networkErrorOnce(),F.onPost("/set-repository").reply((function(e){return[200,{repository:JSON.parse(e.data).repository}]})),F.onPost("/get-history").reply((function(e){var t=JSON.parse(e.data),r=t.cursor,n=void 0===r?null:r,i=t.count,s=void 0===i?10:i,a={};if(null!=n){var c=R.find((function(e){return e.id===n}));a.list=R.slice(c.id,c.id+s)}else a.list=R.slice(0,s);var o=a.list.length;return a.cursor=a.list.length<s?null:a.list[o-1].id,[200,a]}));var R=[{id:1,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"success"},{id:2,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"wait"},{id:3,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"decline"},{id:4,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"success"},{id:5,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"wait"},{id:6,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"decline"},{id:7,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"success"},{id:8,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"wait"},{id:9,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"decline"},{id:10,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"decline"},{id:11,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"success"},{id:12,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"wait"},{id:13,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"decline"},{id:14,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"success"},{id:15,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"wait"},{id:16,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"decline"},{id:17,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"success"},{id:18,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"wait"},{id:19,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"decline"},{id:20,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"decline"},{id:21,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"decline"},{id:22,number:"1368",title:"add documentation for postgres scaler",branch:"master",hash:"9c9f0b9",contributor:"Philip Kirkorov",date:"21 \u044f\u043d\u0432, 03:06",time:"1 \u0447 20 \u043c\u0438\u043d",status:"decline"}],Z=r(2),K=r(101),q=Object(K.withNaming)({e:"__",m:"_"}),D=(r(149),r(1)),z=q("Header"),J=function(e){var t=e.mods,r=e.buttons,n=e.title,i=e.titleMods;return Object(D.jsx)("div",{className:z(Object(Z.a)({},t)),children:Object(D.jsx)("div",{className:z("container",["container"]),children:Object(D.jsxs)("div",{className:z("row"),children:[Object(D.jsx)("div",{className:z("col"),children:Object(D.jsx)("h1",{className:z("title",Object(Z.a)({},i)),children:n})}),r.length>0&&U(r)]})})})},U=function(e){return Object(D.jsx)("div",{className:z("col"),children:Object(D.jsx)("div",{className:z("buttons"),children:e.map((function(e){var t=e.component,r=e.id;return Object(D.jsx)("div",{className:z("button"),children:t},r)}))})})};J.defaultProps={mods:{adapt:"default"},buttons:[],title:"School CI server",titleMods:{}};var A=J,T=(r(151),q("Footer")),_=function(e){var t=e.mods;return Object(D.jsx)("div",{className:T(Object(Z.a)({},t)),children:Object(D.jsx)("div",{className:T("container",["container"]),children:Object(D.jsxs)("div",{className:T("row"),children:[Object(D.jsx)("div",{className:T("col"),children:Object(D.jsxs)("div",{className:T("links"),children:[Object(D.jsx)("a",{href:"/",className:T("link"),children:"Support"}),Object(D.jsx)("a",{href:"/",className:T("link"),children:"Learning"}),Object(D.jsx)("a",{href:"/",className:T("link"),children:"\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f"})]})}),Object(D.jsx)("div",{className:T("col"),children:Object(D.jsx)("div",{className:T("copyright"),children:"\xa9 2020 Your Name"})})]})})})};_.defaultProps={mods:{adapt:"default"}};var G=_,Y=(r(152),q("Layout")),$=function(e){var t=e.pageMods,r=e.headerComponent,n=void 0===r?Object(D.jsx)(A,{}):r,i=e.headerMods,s=e.footerComponent,a=void 0===s?Object(D.jsx)(G,{}):s,c=e.footerMods,o=e.children;return Object(D.jsx)("div",{className:Y(t),children:Object(D.jsxs)("div",{className:Y("container"),children:[n&&Object(D.jsx)("header",{className:Y("header",i),children:n}),Object(D.jsx)("div",{className:Y("content"),children:Object(D.jsx)("main",{className:Y("main"),children:o})}),a&&Object(D.jsx)("footer",{className:Y("footer",c),children:a})]})})},Q=r(28),W=(r(153),["children","icon","mods"]),X=q("Button"),ee=function(e){var t=e.children,r=e.icon,n=e.mods,i=void 0===n?{}:n,s=Object(Q.a)(e,W);return Object(D.jsxs)("button",Object(Z.a)(Object(Z.a)({className:X(Object(Z.a)({},i))},s),{},{children:[!!r&&Object(D.jsx)("span",{className:X("icon"),children:r}),!!t&&Object(D.jsx)("span",{className:X("text"),children:t})]}))};ee.defaultProps={mods:{adapt:"default"}};var te,re=ee,ne=(r(154),r.p+"static/media/tools.c319e8e3.svg"),ie=q("StartMessage"),se=function(){return Object(D.jsxs)("div",{className:ie(),children:[Object(D.jsx)("div",{className:ie("image-wrap"),children:Object(D.jsx)("img",{src:ne,alt:"tools"})}),Object(D.jsx)("div",{className:ie("text"),children:"Configure repository connection and synchronization settings"}),Object(D.jsx)("div",{className:ie("button"),children:Object(D.jsx)(c.b,{to:V,children:Object(D.jsx)(re,{mods:{theme:"yellow"},children:"Open settings"})})})]})},ae=["title","titleId"];function ce(){return ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ce.apply(this,arguments)}function oe(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function le(e,t){var r=e.title,i=e.titleId,s=oe(e,ae);return n.createElement("svg",ce({width:12,height:12,viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},s),r?n.createElement("title",{id:i},r):null,te||(te=n.createElement("path",{d:"M11.3408 7.44193L10.3102 6.84677C10.4142 6.28548 10.4142 5.70968 10.3102 5.14839L11.3408 4.55323C11.4594 4.48549 11.5126 4.34517 11.4739 4.21452C11.2053 3.35324 10.7481 2.57421 10.1505 1.92582C10.0586 1.82663 9.90858 1.80244 9.79245 1.87018L8.76181 2.46534C8.32874 2.09276 7.83036 1.80485 7.29085 1.61615V0.428247C7.29085 0.292763 7.19649 0.174216 7.06343 0.145183C6.17553 -0.0532029 5.26585 -0.0435256 4.4215 0.145183C4.28844 0.174216 4.19408 0.292763 4.19408 0.428247V1.61856C3.65699 1.80969 3.1586 2.0976 2.72312 2.46776L1.6949 1.8726C1.57635 1.80485 1.42877 1.82663 1.33684 1.92824C0.739258 2.57421 0.282002 3.35324 0.0134545 4.21694C-0.0276744 4.34759 0.0279705 4.48791 0.146518 4.55565L1.17716 5.15081C1.07313 5.7121 1.07313 6.2879 1.17716 6.84919L0.146518 7.44435C0.0279705 7.51209 -0.0252551 7.65241 0.0134545 7.78306C0.282002 8.64434 0.739258 9.42337 1.33684 10.0718C1.42877 10.171 1.57877 10.1951 1.6949 10.1274L2.72554 9.53224C3.1586 9.90482 3.65699 10.1927 4.1965 10.3814V11.5718C4.1965 11.7072 4.29086 11.8258 4.42392 11.8548C5.31182 12.0532 6.2215 12.0435 7.06585 11.8548C7.19891 11.8258 7.29327 11.7072 7.29327 11.5718V10.3814C7.83036 10.1903 8.32875 9.9024 8.76423 9.53224L9.79487 10.1274C9.91342 10.1951 10.061 10.1734 10.1529 10.0718C10.7505 9.42579 11.2078 8.64676 11.4763 7.78306C11.5126 7.64999 11.4594 7.50967 11.3408 7.44193V7.44193ZM5.74247 7.93306C4.67553 7.93306 3.80699 7.06451 3.80699 5.99758C3.80699 4.93065 4.67553 4.0621 5.74247 4.0621C6.8094 4.0621 7.67794 4.93065 7.67794 5.99758C7.67794 7.06451 6.8094 7.93306 5.74247 7.93306Z"})))}var de,ue=n.forwardRef(le),be=(r.p,function(){return[{id:"settings",component:Object(D.jsx)(c.b,{to:V,children:Object(D.jsx)(re,{icon:Object(D.jsx)(ue,{}),mods:{size:"sm",adapt:"with-icon"},children:"Settings"})})}]}),he=function(){return{headerData:{buttons:be()}}},me=(r(156),q("Start")),je=function(){var e=he().headerData;return Object(D.jsx)($,{headerComponent:Object(D.jsx)(A,Object(Z.a)({},e)),children:Object(D.jsx)("div",{className:me("",["container"]),children:Object(D.jsx)("div",{className:me("message"),children:Object(D.jsx)(se,{})})})})},fe=function(){return Object(n.useEffect)((function(){document.title="CI server"}),[]),Object(D.jsx)(je,{})},pe=r(103),Oe=r.n(pe),ve=(r(166),["children","onRequestClose","style","blockMods"]),ye=q("CustomModal"),Ce=function(){return{content:{border:"none",inset:0,paddingTop:"0",paddingBottom:"0"}}},ge=function(e){var t=e.children,r=e.onRequestClose,n=e.style,i=void 0===n?Ce():n,s=(e.blockMods,Object(Q.a)(e,ve));return Object(D.jsx)(Oe.a,Object(Z.a)(Object(Z.a)({ariaHideApp:!1,style:i,onRequestClose:r,portalClassName:ye(),overlayClassName:ye("wrapper"),className:ye("inner"),bodyOpenClassName:ye("body",{open:!0})},s),{},{children:Object(D.jsx)("div",{className:ye("content"),children:t})}))},xe=["title","titleId"];function we(){return we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},we.apply(this,arguments)}function Ne(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Pe(e,t){var r=e.title,i=e.titleId,s=Ne(e,xe);return n.createElement("svg",we({width:22,height:22,viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},s),r?n.createElement("title",{id:i},r):null,de||(de=n.createElement("path",{d:"M21.3125 10.6562C21.3125 16.5416 16.5416 21.3125 10.6562 21.3125C4.77095 21.3125 0 16.5416 0 10.6562C0 4.77095 4.77095 0 10.6562 0C16.5416 0 21.3125 4.77095 21.3125 10.6562ZM9.42365 16.2986L17.3299 8.3924C17.5984 8.12393 17.5984 7.68861 17.3299 7.42014L16.3576 6.44789C16.0892 6.17938 15.6539 6.17938 15.3853 6.44789L8.9375 12.8957L5.92715 9.88535C5.65868 9.61688 5.22337 9.61688 4.95486 9.88535L3.9826 10.8576C3.71413 11.1261 3.71413 11.5614 3.9826 11.8299L8.45135 16.2986C8.71986 16.5671 9.15514 16.5671 9.42365 16.2986V16.2986Z"})))}var Me,Le=n.forwardRef(Pe),ke=(r.p,["title","titleId"]);function Ee(){return Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ee.apply(this,arguments)}function He(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Ve(e,t){var r=e.title,i=e.titleId,s=He(e,ke);return n.createElement("svg",Ee({width:16,height:16,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},s),r?n.createElement("title",{id:i},r):null,Me||(Me=n.createElement("path",{d:"M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM12 5.12L10.88 4L8 6.88L5.12 4L4 5.12L6.88 8L4 10.88L5.12 12L8 9.12L10.88 12L12 10.88L9.12 8L12 5.12Z"})))}var Se,Ie=n.forwardRef(Ve),Be=(r.p,["title","titleId"]);function Fe(){return Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fe.apply(this,arguments)}function Re(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Ze(e,t){var r=e.title,i=e.titleId,s=Re(e,Be);return n.createElement("svg",Fe({width:22,height:22,viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},s),r?n.createElement("title",{id:i},r):null,Se||(Se=n.createElement("path",{d:"M11 0C4.92339 0 0 4.92339 0 11C0 17.0766 4.92339 22 11 22C17.0766 22 22 17.0766 22 11C22 4.92339 17.0766 0 11 0ZM15.1024 13.8831L14.2153 14.9919C14.1571 15.0647 14.0851 15.1253 14.0034 15.1703C13.9218 15.2153 13.8321 15.2437 13.7395 15.254C13.6468 15.2643 13.5531 15.2562 13.4636 15.2303C13.3741 15.2044 13.2905 15.161 13.2177 15.1028L10.246 12.8975C10.0383 12.7313 9.87072 12.5204 9.75555 12.2807C9.64039 12.0409 9.58061 11.7783 9.58064 11.5123V4.6129C9.58064 4.42468 9.65541 4.24418 9.7885 4.11109C9.9216 3.978 10.1021 3.90323 10.2903 3.90323H11.7097C11.8979 3.90323 12.0784 3.978 12.2115 4.11109C12.3446 4.24418 12.4194 4.42468 12.4194 4.6129V11L14.9919 12.8851C15.0648 12.9433 15.1254 13.0154 15.1703 13.0971C15.2153 13.1787 15.2437 13.2685 15.254 13.3612C15.2642 13.4539 15.2561 13.5477 15.2301 13.6372C15.2041 13.7268 15.1607 13.8103 15.1024 13.8831Z"})))}var Ke,qe=n.forwardRef(Ze),De=(r.p,["title","titleId"]);function ze(){return ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ze.apply(this,arguments)}function Je(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Ue(e,t){var r=e.title,i=e.titleId,s=Je(e,De);return n.createElement("svg",ze({width:16,height:8,viewBox:"0 0 16 8",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},s),r?n.createElement("title",{id:i},r):null,Ke||(Ke=n.createElement("path",{d:"M3.2 4C3.2 4.27 3.2225 4.5375 3.265 4.8H0.3C0.135 4.8 0 4.665 0 4.5V3.5C0 3.335 0.135 3.2 0.3 3.2H3.265C3.2225 3.4625 3.2 3.73 3.2 4ZM15.7 3.2H12.735C12.78 3.4625 12.8 3.73 12.8 4C12.8 4.27 12.7775 4.5375 12.735 4.8H15.7C15.865 4.8 16 4.665 16 4.5V3.5C16 3.335 15.865 3.2 15.7 3.2ZM8 1.2C7.2525 1.2 6.55 1.4925 6.02 2.02C5.49 2.55 5.2 3.2525 5.2 4C5.2 4.7475 5.49 5.45 6.02 5.98C6.55 6.5075 7.2525 6.8 8 6.8C8.7475 6.8 9.45 6.5075 9.98 5.98C10.51 5.45 10.8 4.7475 10.8 4C10.8 3.2525 10.51 2.55 9.98 2.02C9.45 1.4925 8.7475 1.2 8 1.2ZM8 0C10.21 0 12 1.79 12 4C12 6.21 10.21 8 8 8C5.79 8 4 6.21 4 4C4 1.79 5.79 0 8 0Z"})))}var Ae,Te=n.forwardRef(Ue),_e=(r.p,["title","titleId"]);function Ge(){return Ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ge.apply(this,arguments)}function Ye(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function $e(e,t){var r=e.title,i=e.titleId,s=Ye(e,_e);return n.createElement("svg",Ge({width:13,height:14,viewBox:"0 0 13 14",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},s),r?n.createElement("title",{id:i},r):null,Ae||(Ae=n.createElement("path",{d:"M6.125 7C8.0582 7 9.625 5.4332 9.625 3.5C9.625 1.5668 8.0582 0 6.125 0C4.1918 0 2.625 1.5668 2.625 3.5C2.625 5.4332 4.1918 7 6.125 7ZM8.575 7.875H8.11836C7.51133 8.15391 6.83594 8.3125 6.125 8.3125C5.41406 8.3125 4.74141 8.15391 4.13164 7.875H3.675C1.64609 7.875 0 9.52109 0 11.55V12.6875C0 13.4121 0.587891 14 1.3125 14H10.9375C11.6621 14 12.25 13.4121 12.25 12.6875V11.55C12.25 9.52109 10.6039 7.875 8.575 7.875Z"})))}var Qe,We=n.forwardRef($e),Xe=(r.p,["title","titleId"]);function et(){return et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},et.apply(this,arguments)}function tt(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function rt(e,t){var r=e.title,i=e.titleId,s=tt(e,Xe);return n.createElement("svg",et({width:14,height:16,viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},s),r?n.createElement("title",{id:i},r):null,Qe||(Qe=n.createElement("path",{d:"M4.60806 9H3.36264C3.15714 9 2.98901 8.83125 2.98901 8.625V7.375C2.98901 7.16875 3.15714 7 3.36264 7H4.60806C4.81355 7 4.98168 7.16875 4.98168 7.375V8.625C4.98168 8.83125 4.81355 9 4.60806 9ZM7.9707 8.625V7.375C7.9707 7.16875 7.80256 7 7.59707 7H6.35165C6.14615 7 5.97802 7.16875 5.97802 7.375V8.625C5.97802 8.83125 6.14615 9 6.35165 9H7.59707C7.80256 9 7.9707 8.83125 7.9707 8.625ZM10.9597 8.625V7.375C10.9597 7.16875 10.7916 7 10.5861 7H9.34066C9.13516 7 8.96703 7.16875 8.96703 7.375V8.625C8.96703 8.83125 9.13516 9 9.34066 9H10.5861C10.7916 9 10.9597 8.83125 10.9597 8.625ZM7.9707 11.625V10.375C7.9707 10.1688 7.80256 10 7.59707 10H6.35165C6.14615 10 5.97802 10.1688 5.97802 10.375V11.625C5.97802 11.8312 6.14615 12 6.35165 12H7.59707C7.80256 12 7.9707 11.8312 7.9707 11.625ZM4.98168 11.625V10.375C4.98168 10.1688 4.81355 10 4.60806 10H3.36264C3.15714 10 2.98901 10.1688 2.98901 10.375V11.625C2.98901 11.8312 3.15714 12 3.36264 12H4.60806C4.81355 12 4.98168 11.8312 4.98168 11.625ZM10.9597 11.625V10.375C10.9597 10.1688 10.7916 10 10.5861 10H9.34066C9.13516 10 8.96703 10.1688 8.96703 10.375V11.625C8.96703 11.8312 9.13516 12 9.34066 12H10.5861C10.7916 12 10.9597 11.8312 10.9597 11.625ZM13.9487 3.5V14.5C13.9487 15.3281 13.2793 16 12.4542 16H1.49451C0.669414 16 0 15.3281 0 14.5V3.5C0 2.67188 0.669414 2 1.49451 2H2.98901V0.375C2.98901 0.16875 3.15714 0 3.36264 0H4.60806C4.81355 0 4.98168 0.16875 4.98168 0.375V2H8.96703V0.375C8.96703 0.16875 9.13516 0 9.34066 0H10.5861C10.7916 0 10.9597 0.16875 10.9597 0.375V2H12.4542C13.2793 2 13.9487 2.67188 13.9487 3.5ZM12.4542 14.3125V5H1.49451V14.3125C1.49451 14.4156 1.57857 14.5 1.68132 14.5H12.2674C12.3701 14.5 12.4542 14.4156 12.4542 14.3125Z"})))}var nt,it=n.forwardRef(rt),st=(r.p,["title","titleId"]);function at(){return at=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},at.apply(this,arguments)}function ct(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function ot(e,t){var r=e.title,i=e.titleId,s=ct(e,st);return n.createElement("svg",at({width:13,height:16,viewBox:"0 0 13 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},s),r?n.createElement("title",{id:i},r):null,nt||(nt=n.createElement("path",{d:"M11.7801 5.75L12.4846 5.04375C12.6311 4.89687 12.6311 4.65937 12.4846 4.5125L11.9547 3.98125C11.8082 3.83438 11.5713 3.83438 11.4248 3.98125L10.7795 4.62813C9.81001 3.76875 8.58493 3.19375 7.23204 3.04063V1.5H8.10487C8.31061 1.5 8.47894 1.33125 8.47894 1.125V0.375C8.47894 0.16875 8.31061 0 8.10487 0H4.86292C4.65718 0 4.48885 0.16875 4.48885 0.375V1.125C4.48885 1.33125 4.65718 1.5 4.86292 1.5H5.73576V3.04375C2.50628 3.41563 0 6.1625 0 9.5C0 13.0906 2.90217 16 6.4839 16C10.0656 16 12.9678 13.0906 12.9678 9.5C12.9678 8.10312 12.5283 6.80938 11.7801 5.75ZM6.4839 14.5C3.72824 14.5 1.49628 12.2625 1.49628 9.5C1.49628 6.7375 3.72824 4.5 6.4839 4.5C9.23955 4.5 11.4715 6.7375 11.4715 9.5C11.4715 12.2625 9.23955 14.5 6.4839 14.5ZM6.85797 11H6.10983C5.90409 11 5.73576 10.8312 5.73576 10.625V6.375C5.73576 6.16875 5.90409 6 6.10983 6H6.85797C7.06371 6 7.23204 6.16875 7.23204 6.375V10.625C7.23204 10.8312 7.06371 11 6.85797 11Z"})))}var lt=n.forwardRef(ot),dt=(r.p,r(167),q("HistoryItem")),ut=function(e){var t=e.mods,r=e.item,n=r.number,i=r.title,s=r.branch,a=r.hash,c=r.contributor,o=r.date,l=r.time,d=r.status,u=bt(d);return Object(D.jsx)("div",{className:dt(Object(Z.a)(Object(Z.a)({},t),{},{status:d})),children:Object(D.jsxs)("div",{className:dt("wrap"),children:[!!u&&Object(D.jsx)("div",{className:dt("status"),children:u}),Object(D.jsxs)("div",{className:dt("row"),children:[Object(D.jsxs)("div",{className:dt("col",{type:"info"}),children:[Object(D.jsxs)("div",{className:dt("info-row"),children:[Object(D.jsxs)("span",{className:dt("info",{type:"number",col:!0}),children:["#",n]}),Object(D.jsx)("span",{className:dt("info",{type:"title",col:!0}),children:i})]}),Object(D.jsxs)("div",{className:dt("info-row"),children:[Object(D.jsxs)("span",{className:dt("info",{type:"commit",col:!0,icon:!0}),children:[Object(D.jsx)("span",{className:dt("icon"),children:Object(D.jsx)(Te,{fill:"rgba(0, 0, 0, .3)"})}),s]}),Object(D.jsx)("span",{className:dt("info",{type:"hash",col:!0}),children:a}),Object(D.jsxs)("span",{className:dt("info",{type:"contributor",col:!0,icon:!0}),children:[Object(D.jsx)("span",{className:dt("icon"),children:Object(D.jsx)(We,{fill:"rgba(0, 0, 0, .3)"})}),c]})]})]}),Object(D.jsxs)("div",{className:dt("col",{type:"time"}),children:[Object(D.jsxs)("div",{className:dt("info",{type:"date",icon:!0}),children:[Object(D.jsx)("span",{className:dt("icon"),children:Object(D.jsx)(it,{fill:"rgba(0, 0, 0, .3)"})}),o]}),Object(D.jsxs)("div",{className:dt("info",{type:"time",icon:!0}),children:[Object(D.jsx)("span",{className:dt("icon"),children:Object(D.jsx)(lt,{fill:"rgba(0, 0, 0, .3)"})}),l]})]})]})]})})},bt=function(e){switch(e){case"success":return Object(D.jsx)(Le,{width:22,height:22,fill:"#00B341"});case"decline":return Object(D.jsx)(Ie,{width:22,height:22,fill:"#FF3333"});case"wait":return Object(D.jsx)(qe,{width:22,height:22,fill:"#FF9A00"});default:return null}};ut.defaultProps={mods:{adapt:"default"}};var ht=ut,mt=(r(168),q("HistoryList")),jt=function(e){var t=e.mods,r=e.list;return Object(D.jsx)("div",{className:mt(Object(Z.a)({},t)),children:r.map((function(e){return Object(D.jsx)("div",{className:mt("item"),children:Object(D.jsx)(ht,{item:e})},e.id)}))})};jt.defaultProps={mods:{adapt:"default"}};var ft=jt,pt=r(49),Ot=(r(169),["mods","id","label","error","value","units","mask","isUseClearBtn","isRequired","resetField"]),vt=q("Input"),yt=function(e){var t=e.mods,r=e.id,n=e.label,i=e.error,s=e.value,a=e.units,c=(e.mask,e.isUseClearBtn),o=e.isRequired,l=e.resetField,d=Object(Q.a)(e,Ot),u=c&&""!==s,b=Object(Z.a)(Object(Z.a)({},t),{},{"with-clear":u,error:!!i});return Object(D.jsxs)("div",{className:vt(Object(Z.a)({},b)),children:[!!n&&Object(D.jsxs)("label",{htmlFor:r,className:vt("label"),children:[n,o&&Object(D.jsx)("span",{className:vt("required"),children:" *"})]}),Object(D.jsxs)("div",{className:vt("wrap"),children:[Object(D.jsx)("input",Object(Z.a)({id:r,className:vt("input"),value:s},d)),u&&""!==s&&Object(D.jsx)("div",{className:vt("clear"),onClick:l,children:Object(D.jsx)(Ie,{fill:"#CCC"})})]}),!!a&&Object(D.jsx)("span",{className:vt("units"),children:a}),!!i&&Object(D.jsx)("div",{className:vt("error"),children:i})]})};yt.defaultProps={mods:{adapt:"default"},isUseClearBtn:!0,resetField:function(){}};var Ct=yt,gt=(r(170),q("HistoryBuildForm")),xt=function(e){var t=e.mods,r=e.cancelHandler,n=Object(pt.a)({initialValues:{hash:""}});return Object(D.jsxs)("div",{className:gt(Object(Z.a)({},t)),children:[Object(D.jsx)("div",{className:gt("title"),children:"New build"}),Object(D.jsxs)("form",{className:gt("form"),children:[Object(D.jsx)("div",{className:gt("input"),children:Object(D.jsx)(Ct,{id:"hash",name:"hash",label:"Enter the commit hash which you want to build.",type:"text",placeholder:"Commit hash",error:n.errors.repository,onChange:n.handleChange,value:n.values.hash,resetField:function(){return n.setFieldValue("hash","")}})}),Object(D.jsxs)("div",{className:gt("buttons"),children:[Object(D.jsx)("div",{className:gt("button"),children:Object(D.jsx)(re,{type:"submit",mods:{theme:"yellow",width:"responsive"},onClick:n.handleSubmit,children:"Run build"})}),Object(D.jsx)("div",{className:gt("button"),children:Object(D.jsx)(re,{mods:{width:"responsive"},onClick:r,children:"Cancel"})})]})]})]})};xt.defaultProps={mods:{adapt:"default"},cancelHandler:function(){}};var wt=xt,Nt=r(16);function Pt(e){return I.a.post("/get-history",e)}var Mt,Lt=function(e){var t=Object(n.useState)(e),r=Object(Nt.a)(t,2),i=r[0],s=r[1];return{isOpened:i,closeModal:Object(n.useCallback)((function(){s(!1)}),[]),openModal:Object(n.useCallback)((function(){s(!0)}),[])}},kt=["title","titleId"];function Et(){return Et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Et.apply(this,arguments)}function Ht(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Vt(e,t){var r=e.title,i=e.titleId,s=Ht(e,kt);return n.createElement("svg",Et({width:9,height:10,viewBox:"0 0 9 10",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},s),r?n.createElement("title",{id:i},r):null,Mt||(Mt=n.createElement("path",{d:"M8.28873 4.19256L1.41401 0.128275C0.855434 -0.20179 0 0.11851 0 0.934883V9.06151C0 9.7939 0.79489 10.2353 1.41401 9.86811L8.28873 5.80578C8.90198 5.44447 8.90394 4.55388 8.28873 4.19256Z"})))}var St=n.forwardRef(Vt),It=(r.p,function(e){return[{id:"run-build",component:Object(D.jsx)(re,{icon:Object(D.jsx)(St,{}),mods:{size:"sm",adapt:"with-icon"},onClick:function(){return e()},children:"Run build"})},{id:"settings",component:Object(D.jsx)(c.b,{to:V,children:Object(D.jsx)(re,{icon:Object(D.jsx)(ue,{}),mods:{size:"sm","only-icon":!0,adapt:"with-icon"}})})}]}),Bt=function(){var e=Lt(!1),t=e.isOpened,r=e.closeModal,i=e.openModal,s=Object(o.c)((function(e){return e.settings.repository})),a=Object(o.c)((function(e){return e.history})),c=a.isLoading,l=a.history,d=Object(o.b)(),u=Object(n.useState)(null),b=Object(Nt.a)(u,2),m=b[0],j=b[1];Object(n.useEffect)((function(){var e=(new Date).getTime();Pt({count:10}).then((function(t){var r=t.data,n=r.list,i=r.cursor;d(P(n)),j(i),h.send("historyLoaded",(new Date).getTime()-e)}))}),[d]);return{modal:{isOpened:t,closeModal:r,openModal:i},history:l,headerData:{buttons:It(i),title:s,titleMods:{color:"black"}},isLoading:c,loadMore:function(e){d(L(!0)),Pt({cursor:e,count:10}).then((function(e){var t=e.data,r=t.list,n=t.cursor;d(M(r)),d(L(!1)),j(n)}))},cursor:m}},Ft=(r(171),q("History")),Rt=function(e){var t=e.mods,r=Bt(),n=r.modal,i=r.history,s=r.isLoading,a=r.loadMore,c=r.cursor,o=r.headerData;return Object(D.jsx)($,{headerComponent:Object(D.jsx)(A,Object(Z.a)({},o)),children:Object(D.jsxs)("div",{className:Ft(Object(Z.a)({},t),["container"]),children:[i&&i.length>0&&Object(D.jsxs)("div",{className:Ft("list"),children:[Object(D.jsx)(ft,{list:i,closeModal:n.closeModal}),null!=c&&Object(D.jsx)("div",{className:Ft("button"),children:Object(D.jsx)(re,{mods:{width:"responsive"},onClick:function(){return a(c)},disabled:s,children:"Show more"})})]}),Object(D.jsx)(ge,{isOpen:n.isOpened,onRequestClose:n.closeModal,children:Object(D.jsx)(wt,{cancelHandler:function(e){e.preventDefault(),n.closeModal()}})})]})})};Rt.defaultProps={mods:{adapt:"default"}};var Zt=Rt,Kt=function(){return Object(n.useEffect)((function(){document.title="CI server - history"}),[]),Object(D.jsx)(Zt,{})};var qt=function(){var e=Object(o.c)((function(e){return e.settings})),t=e.isLoading,r=e.error,n=e.repository,i=Object(o.b)(),s=Object(H.f)();return{isLoading:t,error:r,repository:n,setRepository:function(e){i(v(!0)),i(y("")),function(e){return I.a.post("/set-repository",e)}(e).then((function(e){var t=e.data.repository;i(O(t)),i(v(!1)),s.push("/")})).catch((function(e){i(y(e.message)),i(v(!1))}))}}},Dt=r(34),zt=(r(270),Dt.b().shape({repository:Dt.c().required("Required Field"),buildCommand:Dt.c().required("Required Field"),sync:Dt.a().typeError("Enter a number")})),Jt=q("SettingsForm"),Ut=function(e){var t=e.mods,r=e.successHandler,n=e.isLoading,i=e.error,s=e.repository,a=Object(pt.a)({initialValues:{repository:s,buildCommand:"",mainBranch:"",sync:""},validationSchema:zt,validateOnChange:!1,onSubmit:function(e){r(e)}});return Object(D.jsxs)("div",{className:Jt(Object(Z.a)({},t)),children:[Object(D.jsx)("div",{className:Jt("title"),children:"Settings"}),Object(D.jsx)("div",{className:Jt("subtitle"),children:"Configure repository connection and synchronization settings."}),Object(D.jsxs)("form",{className:Jt("form"),children:[Object(D.jsx)("div",{className:Jt("input"),children:Object(D.jsx)(Ct,{id:"repository",name:"repository",label:"GitHub repository",type:"text",isRequired:!0,placeholder:"user-name/repo-name",error:a.errors.repository,onChange:a.handleChange,value:a.values.repository,resetField:function(){return a.setFieldValue("repository","")}})}),Object(D.jsx)("div",{className:Jt("input"),children:Object(D.jsx)(Ct,{id:"buildCommand",name:"buildCommand",label:"Build command",type:"text",isRequired:!0,placeholder:"rm -rf /",error:a.errors.buildCommand,onChange:a.handleChange,value:a.values.buildCommand,resetField:function(){return a.setFieldValue("buildCommand","")}})}),Object(D.jsx)("div",{className:Jt("input"),children:Object(D.jsx)(Ct,{id:"mainBranch",name:"mainBranch",label:"Main branch",type:"text",placeholder:"master",error:a.errors.mainBranch,onChange:a.handleChange,value:a.values.mainBranch,resetField:function(){return a.setFieldValue("mainBranch","")}})}),Object(D.jsx)("div",{className:Jt("sync"),children:Object(D.jsx)(Ct,{id:"sync",name:"sync",label:"Synchronize every",type:"text",placeholder:"10",error:a.errors.sync,onChange:function(e){return function(e){e.preventDefault();var t=e.target.value;/^\d*$/.test(t.toString())&&a.setFieldValue("sync",t)}(e)},value:a.values.sync,resetField:function(){return a.setFieldValue("sync","")},mods:{"with-units":!0},units:"minutes",isUseClearBtn:!1})}),Object(D.jsxs)("div",{className:Jt("buttons"),children:[Object(D.jsx)("div",{className:Jt("button"),children:Object(D.jsx)(re,{type:"submit",mods:{theme:"yellow",width:"responsive"},onClick:a.handleSubmit,disabled:n,children:"Save"})}),Object(D.jsx)("div",{className:Jt("button"),children:Object(D.jsx)(re,{mods:{width:"responsive"},disabled:n,children:"Cancel"})})]}),!!i&&Object(D.jsx)("div",{className:Jt("error"),children:i})]})]})};Ut.defaultProps={mods:{adapt:"default"}};var At=Ut,Tt=(r(271),q("Settings")),_t=function(e){var t=e.mods,r=qt(),n=r.setRepository,i=r.error,s=r.isLoading,a=r.repository;return Object(D.jsx)($,{children:Object(D.jsx)("div",{className:Tt(Object(Z.a)({},t),["container"]),children:Object(D.jsx)("div",{className:Tt("form"),children:Object(D.jsx)(At,{successHandler:n,error:i,isLoading:s,repository:a})})})})};_t.defaultProps={mods:{adapt:"default"}};var Gt=_t,Yt=function(){return Object(n.useEffect)((function(){document.title="CI server - settings"}),[]),Object(D.jsx)(Gt,{})},$t=r(45),Qt=r.n($t),Wt=r(109),Xt=function(){return Object(n.useEffect)((function(){function e(){return(e=Object(Wt.a)(Qt.a.mark((function e(){var t;return Qt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new l.Stats({counterId:"25b6fb6d-fab1-457a-9297-99f01407c63f"}),e.next=3,t.fetchData();case 3:t.showMetricsByDate("app","2021-10-31"),t.showMetricByPeriod("app","2021-10-30","2021-11-1"),t.showMetricBySession("app","226415150422"),t.compareMetric("app","LCP","browser"),t.compareMetric("app","FID","os");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}document.title="Performance stats",function(){e.apply(this,arguments)}()}),[]),null};var er,tr=function(){var e=Object(o.c)((function(e){return e.settings.repository}));return Object(D.jsxs)(H.c,{children:[Object(D.jsx)(H.a,{exact:!0,path:V,component:Yt}),!!e&&Object(D.jsx)(H.a,{path:"/",component:Kt}),"}",Object(D.jsx)(H.a,{path:"/stats",component:Xt}),Object(D.jsx)(H.a,{path:"/",component:fe})]})};r(272);a.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(c.a,{children:Object(D.jsx)(o.a,{store:E,children:Object(D.jsx)(tr,{})})})}),document.getElementById("root")),(er=function(e){var t=e.name,r=e.value;return h.send(t,Math.round(r))})&&er instanceof Function&&r.e(3).then(r.bind(null,274)).then((function(e){var t=e.getFID,r=e.getFCP,n=e.getLCP;t(er),r(er),n(er)})),h.send("connect",performance.timing.connectEnd-performance.timing.connectStart)}},[[273,1,2]]]);
//# sourceMappingURL=main.0eb8bf70.chunk.js.map