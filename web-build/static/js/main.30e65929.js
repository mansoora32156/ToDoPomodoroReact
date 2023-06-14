(()=>{"use strict";var e={7188:(e,t,r)=>{r.r(t),r.d(t,{default:()=>H});var n=r(9226),o=r(2852),i=r(3800),a=r(885),d=r(1747),l=r(6284),u=r(7877),c=r(6309),s=r(7336),f=r(5626),h=r(7337),g=r(8767),x=r(2982),m=r(3517),p=(0,n.createContext)({todos:[],addTodo:function(){},removeTodo:function(){}}),j=function(e){var t=e.children,r=(0,n.useState)([]),o=(0,a.default)(r,2),i=o[0],d=o[1],l={todos:i,addTodo:function(e){var t={id:Math.random().toString(),text:e};d((function(e){return[].concat((0,x.default)(e),[t])}))},removeTodo:function(e){d((function(t){return t.filter((function(t){return t.id!==e}))}))}};return(0,m.jsx)("div",{style:{backgroundColor:"lightorange"},children:(0,m.jsx)(p.Provider,{value:l,children:t})})},y=r(8122),b=g.default.get("window").width,v=g.default.get("window").height,w=h.default.create({header:{backgroundColor:"#FFEFD5",padding:10,marginBottom:20,borderRadius:5},headerText:{fontSize:18,fontWeight:"bold",textAlign:"center"},iconButton:{marginRight:10},container:{flex:1,padding:20,backgroundColor:"#FFEFD5",width:b,height:v},input:{marginBottom:10,padding:10,borderColor:"#ccc",borderWidth:2,shadowColor:"#ccc"},list:{marginTop:20,borderColor:"#ccc",shadowColor:"#ccc"},taskContainer:{flexDirection:"row",alignItems:"center",marginTop:10,padding:10,borderWidth:1,borderColor:"#ccc",borderRadius:5}});const C=function(){var e=(0,n.useState)(""),t=(0,a.default)(e,2),r=t[0],o=t[1],i=(0,n.useContext)(p),h=i.todos,g=i.addTodo,x=i.removeTodo;return(0,m.jsxs)(d.default,{style:w.container,children:[(0,m.jsx)(d.default,{style:w.header,children:(0,m.jsx)(f.default,{style:w.headerText,children:"Add a New Task, and monitor to get started with your day!!"})}),(0,m.jsx)(l.default,{style:w.input,placeholder:"Enter task",value:r,onChangeText:o}),(0,m.jsx)(u.default,{title:"Add Task",onPress:function(){r.trim()&&(g(r),o(""))}}),(0,m.jsx)(c.default,{data:h,renderItem:function(e){var t=e.item;return(0,m.jsxs)(d.default,{style:w.taskContainer,children:[(0,m.jsx)(d.default,{style:{flex:1},children:(0,m.jsx)(f.default,{children:t.text})}),(0,m.jsx)(s.default,{onPress:function(){return e=t.id,void x(e);var e},style:w.iconButton,children:(0,m.jsx)(y.default,{name:"trash-o",size:24,color:"red"})}),(0,m.jsx)(s.default,{onPress:function(){return function(e){throw new Error("Function not implemented.")}(t.id)},style:w.iconButton,children:(0,m.jsx)(y.default,{name:"clock-o",size:24,color:"blue"})})]})},keyExtractor:function(e){return e.id},style:w.list})]})};var O=r(4942),T=function(e){var t=e.timerMode;return(0,m.jsx)(d.default,{style:S.timerCountDownContainer,children:(0,m.jsxs)(f.default,{style:S.timerCountDownText,children:[t," Time ","Break"===t?" \ud83e\udd66":"\ud83c\udf45"]})})},S=h.default.create({timerCountDownContainer:{alignItems:"center",width:"100%"},timerCountDownText:{fontWeight:"800",fontSize:40,color:"#fff"}}),k=r(464),P=function(e){var t=e.startCountDownHandler,r=e.stopCountDownHandler,n=e.isTimerRunning;return(0,m.jsx)(k.default,{onPress:function(){n?r():t()},style:function(e){return[{opacity:e.pressed?.6:1}]},children:(0,m.jsx)(d.default,{style:D.container,children:(0,m.jsx)(y.default,{style:D.icon,name:n?"pause":"play",size:125,color:"#fff"})})})},D=h.default.create({container:{borderWidth:5,width:250,height:250,borderRadius:125,justifyContent:"center",borderColor:"#fff",marginVertical:50},icon:{alignSelf:"center"}});function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,O.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(){var e=(0,n.useState)(1500),t=(0,a.default)(e,2),r=t[0],o=t[1],i=(0,n.useState)(null),l=(0,a.default)(i,2),u=l[0],c=l[1],s=(0,n.useState)("Focus"),h=(0,a.default)(s,2),g=h[0],x=h[1],p=(0,n.useState)(!1),j=(0,a.default)(p,2),y=j[0],b=j[1];(0,n.useEffect)((function(){0===r&&("Focus"===g?(x("Break"),o(300)):(x("Focus"),o(1500)),w())}),[r]);var v,w=function(){b(!1),u&&clearInterval(u),c(null)},C=B(B({},R.container),{},{backgroundColor:"Break"===g?"#2a9d8f":"#d95550"});return(0,m.jsx)(d.default,{style:C,children:(0,m.jsxs)(d.default,{style:R.contentContainer,children:[(0,m.jsx)(d.default,{style:R.header,children:(0,m.jsx)(f.default,{style:R.headerText,children:"Get Started to Monitor you work with this Pomodoro!!"})}),(0,m.jsx)(T,{timerMode:g}),(0,m.jsx)(d.default,{style:R.timerContainer,children:(0,m.jsx)(f.default,{style:R.timerText,children:(v=r,Math.floor(v/60).toString().padStart(2,"0")+":"+(v%60).toString().padStart(2,"0"))})}),(0,m.jsx)(P,{startCountDownHandler:function(){b(!0);var e=setInterval((function(){return o((function(e){return e-1}))}),1e3);c(e)},isTimerRunning:y,setIsTimerRunning:b,stopCountDownHandler:w})]})})}var I=g.default.get("window").width,M=g.default.get("window").height,R=h.default.create({header:{backgroundColor:"##FF0000",padding:10,marginBottom:20,borderRadius:5},headerText:{fontSize:18,fontWeight:"bold",textAlign:"center"},container:{flex:1,alignItems:"center",justifyContent:"center"},contentContainer:{width:I,height:M,alignItems:"center",justifyContent:"center"},timerContainer:{marginTop:20},timerText:{fontSize:36,color:"#fff"}}),z=(0,i.default)(),W=function(){return(0,m.jsx)(j,{children:(0,m.jsx)(C,{})})},A=function(){return(0,m.jsx)(E,{})};const H=function(){return(0,m.jsx)(o.default,{children:(0,m.jsxs)(z.Navigator,{children:[(0,m.jsx)(z.Screen,{name:"To-Do",component:W}),(0,m.jsx)(z.Screen,{name:"Pomodoro",component:A})]})})}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,o,i]=e[c],d=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(d=!1,i<a&&(a=i));if(d){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,d,l]=n,u=0;if(a.some((t=>0!==e[t]))){for(o in d)r.o(d,o)&&(r.m[o]=d[o]);if(l)var c=l(r)}for(t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[122],(()=>r(8502)));n=r.O(n)})();
//# sourceMappingURL=main.30e65929.js.map