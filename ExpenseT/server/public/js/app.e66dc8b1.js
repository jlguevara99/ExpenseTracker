(function(e){function t(t){for(var n,s,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},i=[];function s(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"56677aff"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(e);var u=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,r[1](u)}a[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0e51":function(e,t,r){},"10e6":function(e,t,r){"use strict";var n=r("1391"),a=r.n(n);a.a},1391:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n,a=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[r("b-container",[r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-avatar",{attrs:{variant:"info",square:"",src:"https://i.imgur.com/GPOlvgq.png"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/"}},[e._v("Home")]),e.$auth.isAuthenticated?r("b-nav-item",{attrs:{to:"/profile"}},[e._v("Profile")]):e._e()],1),r("b-navbar-nav",{staticClass:"ml-auto"},[e.$auth.loading?e._e():r("div",[e.$auth.isAuthenticated?r("b-nav-item",{attrs:{to:"/expense"}},[e._v("Today")]):e._e()],1),e.$auth.loading?e._e():r("div",[e.$auth.isAuthenticated?r("b-nav-item",{attrs:{to:"/history"}},[e._v("History")]):e._e()],1),e.$auth.loading?e._e():r("div",[e.$auth.isAuthenticated?e._e():r("b-nav-item",{on:{click:e.login}},[e._v("Log in")]),e.$auth.isAuthenticated?r("b-nav-item",{on:{click:e.logout}},[e._v("Log out")]):e._e()],1)])],1)],1)],1),r("router-view")],1)},s=[],o={name:"App",methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout({returnTo:window.location.origin})}}},c=o,u=(r("86c3"),r("2877")),l=Object(u["a"])(c,i,s,!1,null,"cb88241a",null),p=l.exports,d=(r("d3b7"),r("8c4f")),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("hr"),r("div",{staticClass:"container"},[r("b-row",[r("b-col",{attrs:{md:"4"}},[r("h1",[e._v("Expense Tracker")]),r("hr"),r("p",[e._v("Keep Track of your daily expenses with us.")]),r("p",[e._v("Add your expenses, sort them by category. ")]),r("p",[e._v("and see what you have spent on any day of the month.")])]),r("b-col",{attrs:{md:"8"}},[r("b-img",{attrs:{src:"https://i.imgur.com/vMHA3WU.jpg",thumbnail:"",fluid:"",alt:"Img"}})],1)],1)],1)])},f=[],b={name:"Home",methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout({returnTo:window.location.origin})}}},g=b,v=(r("10e6"),Object(u["a"])(g,h,f,!1,null,"36b10304",null)),m=v.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("img",{attrs:{src:e.$auth.user.picture}}),r("h2",[e._v(e._s(e.$auth.user.name))]),r("p",[e._v(e._s(e.$auth.user.email))])]),r("div",[r("pre",[e._v(e._s(JSON.stringify(e.$auth.user,null,2)))])])])},y=[],w={},_=Object(u["a"])(w,x,y,!1,null,null,null),k=_.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("h1",[e._v("Expenses")]),r("hr"),r("div",[r("b-row",{staticClass:"mt-5"},[r("b-col",{attrs:{md:"3"}}),r("b-col",{attrs:{md:"6"}},[r("b-card",{staticClass:"today",attrs:{title:"Expenses","sub-title":"Today's Expenses",align:"center"}},[r("b-card-text",[e._v("$"+e._s(e.today))]),r("b-button",{attrs:{id:"show-btn",variant:"primary"},on:{click:function(t){return e.showModal()}}},[e._v("Add Expense")])],1)],1),r("b-col",{attrs:{md:"3"}})],1),r("b-row",{staticClass:"mt-5"},[r("b-col",{attrs:{md:"4"}},[r("b-card",{attrs:{title:"Food","sub-title":"Today's Expenses",align:"center"}},[r("b-card-text",[e._v("$"+e._s(e.food))])],1)],1),r("b-col",{attrs:{md:"4"}},[r("b-card",{attrs:{title:"Health","sub-title":"Today's Expenses",align:"center"}},[r("b-card-text",[e._v("$"+e._s(e.health))])],1)],1),r("b-col",{attrs:{md:"4"}},[r("b-card",{attrs:{title:"Gifts","sub-title":"Today's Expenses",align:"center"}},[r("b-card-text",[e._v("$"+e._s(e.gifts))])],1)],1)],1),r("b-row",{staticClass:"mt-5"},[r("b-col",{attrs:{md:"4"}},[r("b-card",{attrs:{title:"Transport","sub-title":"Today's Expenses",align:"center"}},[r("b-card-text",[e._v("$"+e._s(e.transport))])],1)],1),r("b-col",{attrs:{md:"4"}},[r("b-card",{attrs:{title:"Games","sub-title":"Today's Expenses",align:"center"}},[r("b-card-text",[e._v("$"+e._s(e.games))])],1)],1),r("b-col",{attrs:{md:"4"}},[r("b-card",{attrs:{title:"Others","sub-title":"Today's Expenses",align:"center"}},[r("b-card-text",[e._v("$"+e._s(e.others))])],1)],1)],1)],1),r("div",[r("b-modal",{ref:"addExpense",attrs:{title:"Add Expense","ok-only":"","header-bg-variant":"primary"}},[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.createExpense(t)}}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Price $","label-for":"Price"}},[r("b-form-input",{attrs:{id:"input-1",type:"number",state:e.priceState,"aria-describedby":"input-live-help input-live-feedback",required:"",placeholder:"Enter Price"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}}),r("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[e._v(" Price must be greater than 0 ")]),r("b-form-text",{attrs:{id:"input-live-help"}},[e._v("Correct price")])],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Description","label-for":"Description"}},[r("b-form-input",{attrs:{id:"input-2",type:"text",required:"",placeholder:"Enter Despcription"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Category","label-for":"Category"}},[r("b-form-select",{attrs:{id:"input-3",options:e.categories,required:""},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}})],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Create")])],1)],1)],1),r("p",[e._v(e._s(e.description))])])])},C=[],O=(r("a4d3"),r("e01a"),r("4c53"),r("96cf"),r("1da1")),D=(r("d81d"),r("5530")),$=r("d4ec"),T=r("bee2"),j=r("bc3a"),R=r.n(j),P="/tasks/",S=function(){function e(){Object($["a"])(this,e)}return Object(T["a"])(e,null,[{key:"getExpenses",value:function(){return new Promise((function(e,t){R.a.get(P).then((function(t){console.log(t);var r=t.data;e(r.map((function(e){return Object(D["a"])(Object(D["a"])({},e),{},{date:new Date(e.date)})})))})).catch((function(e){t(e)}))}))}},{key:"insertExpense",value:function(e,t,r,n,a){return R.a.post(P,{description:e,price:t,date:r,userId:n,category:a})}},{key:"updateExpense",value:function(e,t,r,n,a,i){return R.a.put("".concat(P).concat(e),{description:t,price:r,date:n,userId:a,category:i})}},{key:"deleteExpense",value:function(e){return R.a.delete("".concat(P).concat(e))}}]),e}(),U=S,M={name:"Expense",computed:{priceState:function(){return this.price>0}},data:function(){return{expenses:[],err:"",text:"",description:"",price:0,category:"",categories:[{text:"Select One",value:null},"Food","Health","Gifts","Transport","Games","Other"],today:0,food:0,health:0,gifts:0,transport:0,games:0,others:0,user:""}},created:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getUser();case 2:return t.prev=2,t.next=5,U.getExpenses();case 5:e.expenses=t.sent,console.log(e.expenses),e.CalculateTotal(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),e.err=t.t0.message;case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()},methods:{createExpense:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,U.insertExpense(e.description,e.price,new Date,e.$auth.user.sub,e.category);case 2:return e.description="",e.price=0,e.category="",t.next=7,U.getExpenses();case 7:e.expenses=t.sent,e.CalculateTotal(),e.$refs["addExpense"].hide();case 10:case"end":return t.stop()}}),t)})))()},showModal:function(){this.$refs["addExpense"].show()},CalculateTotal:function(){this.today=0,this.food=0,this.health=0,this.gifts=0,this.transport=0,this.games=0,this.others=0;var e=0,t=new Date;for(e=0;e<this.expenses.length;e++)if(console.log("USUARIO: "+this.user),this.expenses[e].date.getDate()==t.getDate()&&this.expenses[e].date.getMonth()+1==t.getMonth()+1&&this.expenses[e].date.getFullYear()==t.getFullYear()&&this.expenses[e].userId==this.user)switch(this.today=this.today+this.expenses[e].price,console.log("encontró"+this.expenses[e].price),this.expenses[e].category){case"Food":this.food=this.food+this.expenses[e].price;break;case"Health":this.health=this.health+this.expenses[e].price;break;case"Gifts":this.gifts=this.gifts+this.expenses[e].price;break;case"Transport":this.transport=this.transport+this.expenses[e].price;break;case"Games":this.games=this.games+this.expenses[e].price;break;case"Other":this.others=this.others+this.expenses[e].price}console.log("Dia hoy: "+t.getDate()),console.log("Mes hoy: "+(t.getMonth()+1)),console.log("Año hoy: "+t.getFullYear()),console.log("User: "+this.user)},getUser:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.user=e.$auth.user.sub;case 1:case"end":return t.stop()}}),t)})))()}}},A=M,I=(r("ceb8"),Object(u["a"])(A,E,C,!1,null,"a3b9c20a",null)),H=I.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",[r("h1",[e._v("History")]),r("div",[r("b-button",{staticClass:"ml-auto",attrs:{size:"sm",variant:"outline-primary"},on:{click:e.setToday}},[e._v("Set Today")]),r("hr")],1),r("b-row",[r("b-col",{attrs:{md:"auto"}},[r("b-calendar",{attrs:{"value-as-date":"",locale:"en-US"},on:{context:e.onContext},model:{value:e.tdate,callback:function(t){e.tdate=t},expression:"tdate"}})],1),r("b-col",[r("div",[r("table",{staticClass:"table centered"},[r("thead",[r("tr",[r("th",[e._v("Description")]),r("th",[e._v("Price")]),r("th",[e._v("Category")]),r("th",[e._v("Modify")]),r("th",[e._v("Delete")])])]),r("tbody",{staticClass:"inf"},e._l(e.fexpenses,(function(t){return r("tr",{key:t.id},[r("td",[e._v(e._s(t.description))]),r("td",[e._v("$"+e._s(t.price))]),r("td",[e._v(e._s(t.category))]),r("td",[r("b-button",{attrs:{pill:"",variant:"primary"},on:{click:function(r){return e.showUpdateModal(t)}}},[e._v("Modify")])],1),r("td",[r("b-button",{attrs:{pill:"",variant:"danger"},on:{click:function(r){return e.deleteExpense(t._id)}}},[e._v("Delete")])],1)])})),0)])])])],1),r("div",[r("b-modal",{ref:"updateModal",attrs:{title:"Update Expense","ok-only":"","header-bg-variant":"primary"}},[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.updateExpense(e.upData)}}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Price $","label-for":"Price"}},[r("b-form-input",{attrs:{id:"input-1",type:"number",required:"",state:e.priceState,"aria-describedby":"input-live-help input-live-feedback",placeholder:"Enter Price"},model:{value:e.upData.price,callback:function(t){e.$set(e.upData,"price",t)},expression:"upData.price"}}),r("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[e._v(" Price must be greater than 0 ")]),r("b-form-text",{attrs:{id:"input-live-help"}},[e._v("Correct price")])],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Description","label-for":"Description"}},[r("b-form-input",{attrs:{id:"input-2",type:"text",required:"",placeholder:"Enter Despcription"},model:{value:e.upData.description,callback:function(t){e.$set(e.upData,"description",t)},expression:"upData.description"}})],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Category","label-for":"Category"}},[r("b-form-select",{attrs:{id:"input-3",options:e.categories,required:""},model:{value:e.upData.category,callback:function(t){e.$set(e.upData,"category",t)},expression:"upData.category"}})],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Update")])],1)],1)],1)],1)],1)},F=[],G={name:"History",computed:{priceState:function(){return this.upData.price>0}},data:function(){return{expenses:[],fexpenses:[],user:"",tdate:"",context:"",fields:["description",{key:"price",label:"Price",sortable:!0},"date"],categories:[{text:"Select One",value:null},"Food","Health","Gifts","Transport","Games","Other"],upData:{id:"",description:"",price:0,category:"",userId:"",date:new Date}}},created:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getUser();case 2:return t.prev=2,t.next=5,U.getExpenses();case 5:e.expenses=t.sent,e.setToday(),e.filterExpenses(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),e.err=t.t0.message;case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()},methods:{deleteExpense:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,U.deleteExpense(e);case 2:return r.next=4,U.getExpenses();case 4:t.expenses=r.sent,t.filterExpenses();case 6:case"end":return r.stop()}}),r)})))()},updateExpense:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,U.updateExpense(e.id,e.description,e.price,e.date,e.userId,e.category);case 2:return r.next=4,U.getExpenses();case 4:t.expenses=r.sent,t.filterExpenses(),t.$refs["updateModal"].hide();case 7:case"end":return r.stop()}}),r)})))()},onContext:function(e){this.context=e,this.filterExpenses()},setToday:function(){var e=new Date;this.tdate=new Date(e.getFullYear(),e.getMonth(),e.getDate())},getUser:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.user=e.$auth.user.sub;case 1:case"end":return t.stop()}}),t)})))()},filterExpenses:function(){this.fexpenses=[];var e=0;for(e;e<this.expenses.length;e++)this.expenses[e].date.getDate()==this.tdate.getDate()&&this.expenses[e].date.getMonth()+1==this.tdate.getMonth()+1&&this.expenses[e].date.getFullYear()==this.tdate.getFullYear()&&this.expenses[e].userId==this.user&&this.fexpenses.push(this.expenses[e])},showUpdateModal:function(e){this.upData.description=e.description,this.upData.price=e.price,this.upData.category=e.category,this.upData.date=e.date,this.upData.userId=e.userId,this.upData.id=e._id,console.log("user: "+this.upData.userId),console.log("id: "+this.upData.id),this.$refs["updateModal"].show()}}},W=G,Y=(r("8892"),Object(u["a"])(W,q,F,!1,null,"4a75d7af",null)),J=Y.exports,L=(r("caad"),r("ac1f"),r("2532"),r("841c"),r("15fd")),K=r("9767"),N=function(){return window.history.replaceState({},document.title,window.location.pathname)},Z=function(){return n},z=function(e){var t=e.onRedirectCallback,r=void 0===t?N:t,i=e.redirectUri,s=void 0===i?window.location.origin:i,o=Object(L["a"])(e,["onRedirectCallback","redirectUri"]);return n||(n=new a["default"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.popupOpen=!0,r.prev=1,r.next=4,t.auth0Client.loginWithPopup(e);case 4:r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](1),console.error(r.t0);case 9:return r.prev=9,t.popupOpen=!1,r.finish(9);case 12:return r.next=14,t.auth0Client.getUser();case 14:t.user=r.sent,t.isAuthenticated=!0;case 16:case"end":return r.stop()}}),r,null,[[1,6,9,12]])})))()},handleRedirectCallback:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.auth0Client.handleRedirectCallback();case 4:return t.next=6,e.auth0Client.getUser();case 6:e.user=t.sent,e.isAuthenticated=!0,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),e.error=t.t0;case 13:return t.prev=13,e.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})))()},loginWithRedirect:function(e){return this.auth0Client.loginWithRedirect(e)},getIdTokenClaims:function(e){return this.auth0Client.getIdTokenClaims(e)},getTokenSilently:function(e){return this.auth0Client.getTokenSilently(e)},getTokenWithPopup:function(e){return this.auth0Client.getTokenWithPopup(e)},logout:function(e){return this.auth0Client.logout(e)}},created:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(K["a"])({domain:o.domain,client_id:o.clientId,audience:o.audience,redirect_uri:s});case 2:if(e.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=10;break}return t.next=7,e.auth0Client.handleRedirectCallback();case 7:n=t.sent,a=n.appState,r(a);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](3),e.error=t.t0;case 15:return t.prev=15,t.next=18,e.auth0Client.isAuthenticated();case 18:return e.isAuthenticated=t.sent,t.next=21,e.auth0Client.getUser();case 21:return e.user=t.sent,e.loading=!1,t.finish(15);case 24:case"end":return t.stop()}}),t,null,[[3,12,15,24]])})))()}}),n)},B={install:function(e,t){e.prototype.$auth=z(t)}},V=function(e,t,r){var n=Z(),a=function(){if(n.isAuthenticated)return r();n.loginWithRedirect({appState:{targetUrl:e.fullPath}})};if(!n.loading)return a();n.$watch("loading",(function(e){if(!1===e)return a()}))};a["default"].use(d["a"]);var X=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/profile",name:"profile",component:k},{path:"/profile",name:"profile",component:k,beforeEnter:V},{path:"/expense",name:"expense",component:H},{path:"/history",name:"history",component:J}]}),Q=X,ee=r("7e05"),te=r("aa2f"),re=(r("5b3d"),r("7db1"),r("8160"));a["default"].use(ee["a"]),a["default"].use(te["a"]),a["default"].use(B,{domain:re["b"],clientId:re["a"],onRedirectCallback:function(e){Q.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}}),a["default"].config.productionTip=!1,new a["default"]({router:Q,render:function(e){return e(p)}}).$mount("#app")},8160:function(e){e.exports=JSON.parse('{"b":"dev-nbc51c2i.us.auth0.com","a":"6ZUZIxx2k9nG7i2pqB0kdOV4RsbS2YXK"}')},"86c3":function(e,t,r){"use strict";var n=r("bdd1"),a=r.n(n);a.a},8892:function(e,t,r){"use strict";var n=r("0e51"),a=r.n(n);a.a},bdd1:function(e,t,r){},ceb8:function(e,t,r){"use strict";var n=r("ed0b"),a=r.n(n);a.a},ed0b:function(e,t,r){}});
//# sourceMappingURL=app.e66dc8b1.js.map