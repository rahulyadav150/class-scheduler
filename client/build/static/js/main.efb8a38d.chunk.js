(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(22),r=a.n(c),s=(a(43),a(18)),i=a(5),l=a(3),o=a(4),d=a.n(o),u=a(8),j=a(21),h=a.n(j),b=function(){var e=Object(u.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/".concat(t),a);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("/api/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.patch("/api/".concat(t),a);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),m="GET_TEACHERS",x=a(12),y=function(e){return["january","february","march","april","may","june","july","august","september","october","november","december"].indexOf(e)},v=function(e){return["january","february","march","april","may","june","july","august","september","october","november","december"][e]},g=function(e){var t=e.month,a=e.day,n=y(t);return new Date(2021,n,a).toLocaleDateString("en-GB")},w=function(e){var t=e.split("/");return parseInt(t[0],10)},S=a(15),C=a(17),N="CREATE_CLASS",k="UPDATE_CLASS",D="GET_CLASSES",I="DELETE_CLASS",E="INITIAZE",_=a(0);var A=function(e){var t=e.day,a=e.setShowAdd,c=Object(l.b)(),r=Object(l.c)((function(e){return e})).teachers,s=Object(i.g)().month;t&&(t=g({month:s,day:t}));var o={topic:"",teacherName:"",teacherId:"",month:"",day:t,starts_at:"",ends_at:""},j=Object(n.useState)(o),h=Object(x.a)(j,2),b=h[0],O=h[1],f=function(e){var t=e.target.name,a=e.target.value;O(Object(C.a)(Object(C.a)({},b),{},Object(S.a)({},t,a)))};return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:"addClass",children:Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(!1),b.day=w(b.day),b.month=s,r.map((function(e){return e.teacherName===b.teacherName?b.teacherId=e.teacherId:b})),c(function(e){var t=e.inputData;return function(){var e=Object(u.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("classes/".concat(t.month),t);case 3:n=e.sent,a({type:N,payload:n.data.class}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({type:"ALERT",payload:{err:e.t0.response.data.msg}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}({inputData:b}))},children:[Object(_.jsx)("label",{htmlFor:"topic",children:"Topic"}),Object(_.jsx)("input",{id:"topic",name:"topic",value:b.topic,onChange:f,required:!0}),Object(_.jsx)("br",{}),Object(_.jsx)("label",{htmlFor:"teacher",children:"Teacher's name"}),Object(_.jsxs)("select",{name:"teacherName",value:b.teacher,id:"teacher",onChange:f,children:[Object(_.jsx)("option",{value:"none",selected:!0,hidden:!0,disabled:!0,children:"Select an Option"}),r.map((function(e){return Object(_.jsxs)("option",{value:e.teacherName,index:e.teacherId,children:[e.teacherName," "]})}))]}),Object(_.jsx)("br",{}),Object(_.jsx)("label",{htmlFor:"day",children:"Date"}),Object(_.jsx)("input",{type:"text",id:"day",name:"day",style:{marginBottom:"0"},value:b.day,onChange:f,placeholder:"23/06/21",required:!0}),Object(_.jsx)("span",{style:{fontSize:".7rem",color:"red",display:"block",marginBottom:"15px",marginTop:"2px"},children:"DD/MM/YYYY "}),Object(_.jsxs)("label",{htmlFor:"starts_at",children:["Starts at ",Object(_.jsx)("small",{children:"(HH:MM:SS)"})]}),Object(_.jsx)("input",{type:"text",id:"starts_at",name:"starts_at",value:b.starts_at,onChange:f,placeholder:"08:30:00",required:!0}),Object(_.jsxs)("label",{htmlFor:"ends_at",children:["Ends at ",Object(_.jsx)("small",{children:"(HH:MM:SS)"})]}),Object(_.jsx)("input",{type:"text",id:"ends_at",name:"ends_at",value:b.ends_at,onChange:f,placeholder:"13:30:00",required:!0}),Object(_.jsx)("br",{}),Object(_.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(_.jsx)("button",{className:"canclebtn",onClick:function(){return a(!1)},children:"Cancel"}),Object(_.jsx)("button",{type:"submit",className:"addbtn",children:"ADD"})]})]})})})};var F=function(e){var t=e.name,a=e.handleNext,c=e.handleBack,r=e.daysInMonth;t=function(e){var t=e.toLowerCase();return e.charAt(0).toUpperCase()+t.slice(1)}(t);var s=Object(l.b)(),i=Object(l.c)((function(e){return e})).teachers,o=Object(n.useState)(!1),j=Object(x.a)(o,2),h=j[0],p=j[1];return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"header",children:[Object(_.jsxs)("div",{className:" heading headerItems",children:[Object(_.jsx)("i",{onClick:c,class:"fas fa-arrow-left fa-2x "}),Object(_.jsxs)("h3",{style:{fontSize:"2.3rem",fontWeight:300},children:[t,", 2021"]}),Object(_.jsx)("i",{onClick:a,class:"fas fa-arrow-right fa-2x"})]}),Object(_.jsxs)("div",{className:"headerItems",children:[Object(_.jsx)("div",{style:{marginLeft:"5px"},children:Object(_.jsxs)("select",{name:"teacherName",onChange:function(e){var a=i.filter((function(t){return t.teacherName===e.target.value}));s(function(e,t,a){return function(){var n=Object(u.a)(d.a.mark((function n(c){var r,s,i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(n.prev=0,r=[],s=0;s<a;s++)r.push([]);return c({type:E,payload:r}),n.next=6,b("classes/".concat(e,"/").concat(t));case 6:i=n.sent,c({type:D,payload:i.data.classes}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),c({type:"ALERT",payload:{err:n.t0.response.data.msg}});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(t,a[0].teacherId,r))},className:"filter",children:[Object(_.jsx)("option",{value:"none",selected:!0,hidden:!0,disabled:!0,children:"Select a teacher"}),i.map((function(e){return Object(_.jsx)("option",{value:e.teacherName,children:e.teacherName},e.teacherId)}))]})}),Object(_.jsx)("div",{children:Object(_.jsxs)("select",{name:"teacherName",className:"view",children:[Object(_.jsx)("option",{value:"A",children:"Month "}),Object(_.jsx)("option",{value:"B",children:"Week "})]})}),Object(_.jsx)("i",{class:"fas fa-plus-circle fa-3x",onClick:function(){return p(!0)},style:{margin:"0 10px"}})]}),h?Object(_.jsx)(A,{setShowAdd:p}):null]})})};var T=function(e){var t=e.classInfo,a=e.setShowUpdate,c=Object(l.b)(),r=Object(l.c)((function(e){return e})).teachers;t.date=g({month:t.month,day:t.day});var s=Object(n.useState)(t),i=Object(x.a)(s,2),o=i[0],j=i[1],h=function(e){var t=e.target.name,a=e.target.value;j(Object(C.a)(Object(C.a)({},o),{},Object(S.a)({},t,a)))};return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:"addClass",children:Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(!1),o.day=w(o.date),r.map((function(e){return e.teacherName===o.teacherName?o.teacherId=e.teacherId:o})),c(function(e){var t=e.inputData;return function(){var e=Object(u.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{f("classes/".concat(t.classId),t),window.location.href="/".concat(t.month)}catch(a){window.location.href="/".concat(t.month)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({inputData:o}))},children:[Object(_.jsx)("label",{htmlFor:"topic",children:"Topic"}),Object(_.jsx)("input",{id:"topic",name:"topic",value:o.topic,onChange:h,required:!0}),Object(_.jsx)("br",{}),Object(_.jsx)("label",{htmlFor:"teacher",children:"Teacher's name"}),Object(_.jsx)("select",{name:"teacherName",value:o.teacherName,id:"teacher",onChange:h,children:r.map((function(e){return Object(_.jsxs)("option",{value:e.teacherName,index:e.teacherId,children:[e.teacherName," "]})}))}),Object(_.jsx)("br",{}),Object(_.jsx)("label",{htmlFor:"date",children:"Date"}),Object(_.jsx)("input",{type:"text",id:"date",name:"date",style:{marginBottom:"0"},value:o.date,onChange:h,placeholder:"23/06/21",required:!0}),Object(_.jsx)("span",{style:{fontSize:".7rem",color:"red",display:"block",marginBottom:"15px",marginTop:"2px"},children:"DD/MM/YYYY "}),Object(_.jsxs)("label",{htmlFor:"starts_at",children:["Starts at ",Object(_.jsx)("small",{children:"(HH:MM:SS)"})]}),Object(_.jsx)("input",{type:"text",id:"starts_at",name:"starts_at",value:o.starts_at,onChange:h,placeholder:"08:30:00",required:!0}),Object(_.jsxs)("label",{htmlFor:"ends_at",children:["Ends at ",Object(_.jsx)("small",{children:"(HH:MM:SS)"})]}),Object(_.jsx)("input",{type:"text",id:"ends_at",name:"ends_at",value:o.ends_at,onChange:h,placeholder:"13:30:00",required:!0}),Object(_.jsx)("br",{}),Object(_.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(_.jsx)("button",{className:"canclebtn",onClick:function(){return a(!1)},children:"Cancel"}),Object(_.jsx)("button",{type:"submit",className:"addbtn",children:"Update"})]})]})})})};var M=function(e){var t=e.classInfo,a=Object(n.useState)(!1),c=Object(x.a)(a,2),r=c[0],s=c[1],i=Object(l.b)();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:"classCard",children:[Object(_.jsxs)("div",{className:"info",children:[Object(_.jsxs)("h5",{style:{margin:"0"},children:[t.topic," "]}),Object(_.jsxs)("span",{style:{fontSize:".7rem",display:"block"},children:[" by ",t.teacherName]}),Object(_.jsxs)("small",{style:{fontSize:"1.2rem",fontWeight:"300"},children:[t.starts_at," : ",t.ends_at," "]})]}),Object(_.jsxs)("div",{className:"Editingitems",style:{marginTop:"10px"},children:[Object(_.jsx)("i",{class:"far fa-edit ",style:{marginRight:"5px"},onClick:function(){return s(!0)}}),Object(_.jsx)("i",{class:"fas fa-trash",onClick:function(){console.log(t),i(function(e){var t=e.day,a=e.id;return function(){var e=Object(u.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{O("classes/".concat(a)),n({type:I,payload:{day:t,id:a}})}catch(c){n({type:"ALERT",payload:{err:c.response.data.msg}})}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({day:t.day,id:t.classId}))}})]})]}),r&&Object(_.jsx)(T,{classInfo:t,setShowUpdate:s})]})};var L=function(e){var t=e.day,a=e.setShowClasses,n=Object(l.c)((function(e){return e})).daysArr,c=Object(i.g)().month,r=y(c),s=new Date(2021,r,t),o=s.toLocaleDateString(s,{weekday:"long",day:"numeric",month:"long"}),d=n[t-1];return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:"classContainer",children:Object(_.jsxs)("div",{className:"card",children:[Object(_.jsxs)("div",{className:"classHeader",children:[Object(_.jsx)("button",{onClick:function(){return a(!1)},id:"close",children:"\xd7"}),o]}),Object(_.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:d.map((function(e,t){return Object(_.jsx)(M,{classInfo:e},t)}))})]})})})};var H=function(e){var t=e.firstDay,a=e.day,c=e.skippedDays,r=e.todayClasses,s=Object(n.useState)(!1),i=Object(x.a)(s,2),l=i[0],o=i[1],d=Object(n.useState)(!1),u=Object(x.a)(d,2),j=u[0],h=u[1];return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"day",style:{gridColumnStart:"true"===t?c:null},children:[Object(_.jsx)("h5",{children:a}),r.length>0?Object(_.jsxs)("button",{onClick:function(){return h(!0)},children:[r.length," Class scheduled"]}):null,Object(_.jsx)("i",{class:"fas fa-plus-circle fa-2x addIcon",onClick:function(){return o(!0)}}),l?Object(_.jsx)(A,{day:a,setShowAdd:o}):null,j&&Object(_.jsx)(L,{day:a,setShowClasses:h})]})})};var R=function(){var e=Object(l.c)((function(e){return e})).daysArr,t=Object(l.b)(),a=Object(i.f)(),c=Object(i.g)().month,r=(new Date).getFullYear(),s=y(c),o=new Date(r,s+1,0).getDate(),j=new Date(r,s,1).getDay();return Object(n.useEffect)((function(){for(var e=[],a=0;a<o;a++)e.push([]);t({type:E,payload:e})}),[c,t,o]),Object(n.useEffect)((function(){t(function(e,t){return function(){var t=Object(u.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b("classes/".concat(e));case 3:n=t.sent,a({type:D,payload:n.data.classes}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"ALERT",payload:{err:t.t0.response.data.msg}});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(c))}),[c,t]),Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"calender_container",children:[Object(_.jsx)(F,{name:c,daysInMonth:o,handleNext:function(){var e=v((s+1)%12);a.push("/".concat(e))},handleBack:function(){var e=v((12+s-1)%12);a.push("/".concat(e))}}),Object(_.jsxs)("div",{className:"calendar",children:[Object(_.jsxs)("div",{className:"weekDays",children:[Object(_.jsx)("div",{children:"Sunday"}),Object(_.jsx)("div",{children:"Monday"}),Object(_.jsx)("div",{children:"Tuesday"}),Object(_.jsx)("div",{children:"Wedenesday"}),Object(_.jsx)("div",{children:"Thursday"}),Object(_.jsx)("div",{children:"Friday"}),Object(_.jsx)("div",{children:"Saturday"})]}),Object(_.jsx)("div",{className:"days",children:e.map((function(e,t){return 0===t?Object(_.jsx)(H,{firstDay:"true",day:t+1,skippedDays:j,todayClasses:e},t):Object(_.jsx)(H,{day:t+1,todayClasses:e},t)}))})]})]})})};var B=function(e){return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"alert",children:[Object(_.jsxs)("strong",{children:[e.msg," "]}),e.info,Object(_.jsx)("button",{onClick:e.handleShow,type:"button",children:"\xd7"})]})})};var Y=function(){var e=Object(l.c)((function(e){return e})).Alert,t=Object(l.b)();return Object(_.jsx)(_.Fragment,{children:e.err&&Object(_.jsx)(B,{msg:"Error!",info:e.err,handleShow:function(){return t({type:"ALERT",payload:{}})}})})};var q=function(){var e=(new Date).getMonth(),t=v(e);return window.location.href="/".concat(t),Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{})})};var z=function(){var e=Object(l.b)();return Object(n.useEffect)((function(){e(function(){var e=Object(u.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b("teachers");case 3:a=e.sent,t({type:m,payload:a.data.teachers}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(s.a,{children:[Object(_.jsx)(Y,{}),Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)(i.c,{children:[Object(_.jsx)(i.a,{exact:!0,path:"/:month",component:R}),Object(_.jsx)(i.a,{exact:!0,path:"/",component:q})]})})]})})},U=a(16),W=a(37),G=a(38),J=a(13),P=[],Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(J.a)(t.payload);case D:return t.payload.map((function(t){return e[t.day-1].push(t)})),Object(J.a)(e);case N:return e[t.payload.day-1].push(t.payload),Object(J.a)(e);case I:var a=e.splice(t.payload.day-1,1);console.log(a);var n=a.filter((function(e){return e.classId!==t.payloadId}));return e.splice(t.payload.day-1,0,n),Object(J.a)(e);case k:n=(a=e.splice(t.payload.day-1,1)).filter((function(e){return e.classId!==t.payload.classId}));return e.splice(t.payload.day-1,0,n),e[t.payload.day-1].push(t.payload),Object(J.a)(e);default:return e}},K=[],Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(J.a)(t.payload);default:return e}},V={};var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ALERT":return t.payload;default:return e}},$=Object(U.combineReducers)({daysArr:Z,teachers:Q,Alert:X}),ee=Object(U.createStore)($,Object(G.composeWithDevTools)(Object(U.applyMiddleware)(W.a))),te=function(e){var t=e.children;return Object(_.jsx)(l.a,{store:ee,children:t})};r.a.render(Object(_.jsx)(te,{children:Object(_.jsx)(z,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.efb8a38d.chunk.js.map