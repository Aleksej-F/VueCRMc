(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c1056":"fb6d7f7d","chunk-2d0d05dc":"aad1fda6","chunk-2d217357":"8283657f","chunk-2d217a99":"9b36435f","chunk-2d21a3d2":"163307b5","chunk-2d2259e5":"f4f35b5e","chunk-5b3e162e":"e64a6bf7","chunk-5f4ad635":"49abcf04","chunk-c420df12":"6403f4c3"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4");var r=n("2b0e"),a=n("1dce"),o=n.n(a),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("router-view")],1)],1)},c=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grey darken-1 empty-layout"},[n("router-view")],1)},u=[],l=n("b444"),d={computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){this.$error(l["a"][e.code]||"Что-то пошло не так")}}},f=d,p=n("2877"),m=Object(p["a"])(f,s,u,!1,null,null,null),h=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?n("Loader"):n("div",{staticClass:"app-main-layout"},[n("Navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),n("Sidebar",{model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),n("main",{staticClass:"app-content",class:{full:!e.isOpen}},[n("div",{staticClass:"app-page"},[n("router-view")],1)]),n("div",{staticClass:"fixed-action-btn"},[n("router-link",{staticClass:"btn-floating btn-large blue",attrs:{to:"/record"}},[n("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)],1)},g=[],b=n("1da1"),w=(n("96cf"),n("b64b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar orange lighten-1"},[n("div",{staticClass:"nav-wrapper"},[n("div",{staticClass:"navbar-left"},[n("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[n("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),n("span",{staticClass:"black-text"},[e._v(e._s(e._f("date")(e.date,"datetime")))])]),n("ul",{staticClass:"right hide-on-small-and-down"},[n("li",[n("a",{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[e._v(" "+e._s(e.name)+" "),n("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),n("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[n("li",[n("router-link",{staticClass:"black-text",attrs:{to:"/profile"}},[n("i",{staticClass:"material-icons"},[e._v("account_circle")]),e._v("Профиль ")])],1),n("li",{staticClass:"divider",attrs:{tabindex:"-1"}}),n("li",[n("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[n("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v("Выйти ")])])])])])])])}),y=[],k=(n("b0c0"),{data:function(){return{date:new Date,interval:null,dropdown:null}},methods:{logout:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$router.push("/login?message=logout");case 3:case"end":return t.stop()}}),t)})))()}},computed:{name:function(){return this.$store.getters.info.name}},mounted:function(){var e=this;this.interval=setInterval((function(){e.date=new Date}),1e3),this.dropdown=M.Dropdown.init(this.$refs.dropdown,{constrainWidth:!1})},beforeDestroy:function(){clearInterval(this.interval),this.dropdown&&this.dropdown.destroy&&this.dropdown.destroy()}}),x=k,_=Object(p["a"])(x,w,y,!1,null,null,null),C=_.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.links,(function(t){return n("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[n("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},j=[],R={props:["value"],data:function(){return{links:[{title:"Счет",url:"/",exact:!0},{title:"История",url:"/history"},{title:"Планирование",url:"/planning"},{title:"Новая запись",url:"/record"},{title:"Категории",url:"/categories"}]}}},E=R,$=Object(p["a"])(E,O,j,!1,null,null,null),I=$.exports,U={name:"main-layout",data:function(){return{isOpen:!0,loading:!0}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Object.keys(e.$store.getters.info).length){t.next=3;break}return t.next=3,e.$store.dispatch("fetchInfo");case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},components:{Navbar:C,Sidebar:I}},S=U,P=Object(p["a"])(S,v,g,!1,null,null,null),A=P.exports,D={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:h,MainLayout:A}},N=D,L=(n("5c0b"),Object(p["a"])(N,i,c,!1,null,null,null)),T=L.exports,B=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(B["a"]);var z=new B["a"]({mode:"history",base:"/",routes:[{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return n.e("chunk-5f4ad635").then(n.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{layout:"empty"},component:function(){return n.e("chunk-c420df12").then(n.bind(null,"73cf"))}},{path:"/",name:"home",meta:{layout:"main"},component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/categories",name:"categories",meta:{layout:"main"},component:function(){return n.e("chunk-5b3e162e").then(n.bind(null,"58c2"))}},{path:"/detail/:id",name:"detail",meta:{layout:"main"},component:function(){return n.e("chunk-2d217a99").then(n.bind(null,"c84b"))}},{path:"/history",name:"history",meta:{layout:"main"},component:function(){return n.e("chunk-2d2259e5").then(n.bind(null,"e4bb"))}},{path:"/planning",name:"planning",meta:{layout:"main"},component:function(){return n.e("chunk-2d0d05dc").then(n.bind(null,"6859"))}},{path:"/profile",name:"profile",meta:{layout:"main"},component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))}},{path:"/record",name:"record",meta:{layout:"main"},component:function(){return n.e("chunk-2d0c1056").then(n.bind(null,"43ef"))}}]}),F=n("2f62"),W=n("260b"),q={actions:{login:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.dispatch,r=e.commit,a=t.email,o=t.password,n.prev=2,n.next=5,W["a"].auth().signInWithEmailAndPassword(a,o);case 5:n.next=11;break;case 7:throw n.prev=7,n.t0=n["catch"](2),r("setError",n.t0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[2,7]])})))()},register:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=e.commit,o=t.email,i=t.password,c=t.name,n.prev=2,n.next=5,W["a"].auth().createUserWithEmailAndPassword(o,i);case 5:return n.next=7,r("getUid");case 7:return s=n.sent,n.next=10,W["a"].database().ref("/users/".concat(s,"/info")).set({bill:1e4,name:c});case 10:n.next=16;break;case 12:throw n.prev=12,n.t0=n["catch"](2),a("setError",n.t0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[2,12]])})))()},getUid:function(){var e=W["a"].auth().currentUser;return e?e.uid:null},logout:function(e){return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,W["a"].auth().signOut();case 3:n("clearInfo");case 4:case"end":return t.stop()}}),t)})))()}}},G={state:{info:{}},mutations:{setInfo:function(e,t){e.info=t},clearInfo:function(e){e.info={}}},actions:{fetchInfo:function(e){return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,r=e.commit,t.prev=1,t.next=4,n("getUid");case 4:return a=t.sent,t.next=7,W["a"].database().ref("/users/".concat(a,"/info")).once("value");case 7:o=t.sent.val(),r("setInfo",o),t.next=13;break;case 11:t.prev=11,t.t0=t["catch"](1);case 13:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},getters:{info:function(e){return e.info}}},J=n("5530"),K=(n("d81d"),{actions:{fetchCategories:function(e){return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,W["a"].database().ref("/users/".concat(a,"/categories")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return o=t.t0,t.abrupt("return",Object.keys(o).map((function(e){return Object(J["a"])(Object(J["a"])({},o[e]),{},{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),n("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},updateCategory:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,o=t.title,i=t.limit,c=t.id,n.prev=2,n.next=5,a("getUid");case 5:return s=n.sent,n.next=8,W["a"].database().ref("/users/".concat(s,"/categories")).child(c).update({title:o,limit:i});case 8:n.next=14;break;case 10:throw n.prev=10,n.t0=n["catch"](2),r("setError",n.t0),n.t0;case 14:case"end":return n.stop()}}),n,null,[[2,10]])})))()},createCategory:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,o=t.title,i=t.limit,n.prev=2,n.next=5,a("getUid");case 5:return c=n.sent,n.next=8,W["a"].database().ref("/users/".concat(c,"/categories")).push({title:o,limit:i});case 8:return s=n.sent,n.abrupt("return",{title:o,limit:i,id:s.key});case 12:throw n.prev=12,n.t0=n["catch"](2),r("setError",n.t0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[2,12]])})))()}}});r["a"].use(F["a"]);var Q=new F["a"].Store({state:{error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},actions:{fetchCurrency:function(){return Object(b["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="daae1d470b0c54e5e9c93c66907e6015",e.next=3,fetch("http://data.fixer.io/api/latest?access_key=".concat(t,"&symbols=USD,EUR,RUB"));case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))()}},getters:{error:function(e){return e.error}},modules:{auth:q,info:G,category:K}});n("caad"),n("2532");function Y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",n={};return t.includes("date")&&(n.day="2-digit",n.month="long",n.year="numeric"),t.includes("time")&&(n.hour="2-digit",n.minute="2-digit",n.second="2-digit"),new Intl.DateTimeFormat("ru-RU",n).format(new Date(e))}function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"RUB";return new Intl.NumberFormat("ru-RU",{style:"currency",currency:t}).format(e)}var V={install:function(e,t){e.prototype.$message=function(e){M.toast({html:e})},e.prototype.$error=function(e){M.toast({html:"[Ошибка]: ".concat(e)})}}},X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-loader"},[n("div",{staticClass:"preloader-wrapper active"},[n("div",{staticClass:"spinner-layer",class:e.color},[e._m(0),e._m(1),e._m(2)])])])},Z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"circle-clipper left"},[n("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gap-patch"},[n("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"circle-clipper right"},[n("div",{staticClass:"circle"})])}],ee={computed:{color:function(){var e=["spinner-red-only","spinner-blue-only","spinner-green-only"];return e[Math.floor(3*Math.random())]}}},te=ee,ne=Object(p["a"])(te,X,Z,!1,null,null,null),re=ne.exports,ae=n("9483");Object(ae["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var oe;n("6885"),n("ea7b"),n("66ce");r["a"].config.productionTip=!1,r["a"].use(V),r["a"].use(o.a),r["a"].filter("date",Y),r["a"].filter("currency",H),r["a"].component("Loader",re),W["a"].initializeApp({apiKey:"AIzaSyB6xfKN_W0a0zfeE6sQwASq5pI-iN5PbTE",authDomain:"diary-64427.firebaseapp.com",databaseURL:"https://diary-64427-default-rtdb.firebaseio.com",projectId:"diary-64427",storageBucket:"diary-64427.appspot.com",messagingSenderId:"173254307942",appId:"1:173254307942:web:204505cf2a7cbc8e2d3da7",measurementId:"G-RYGRQ3GP54"}),W["a"].auth().onAuthStateChanged((function(){oe||(oe=new r["a"]({router:z,store:Q,render:function(e){return e(T)}}).$mount("#app"))}))},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},b444:function(e,t,n){"use strict";t["a"]={logout:"Вы вышли из системы","auth/user-not-found":"Пользователя с таким email не существует","auth/wrong-password":"Неверный пароль","auth/email-already-in-use":"Email уже занят"}}});
//# sourceMappingURL=app.aa03b65a.js.map