(function(t){function e(e){for(var n,s,c=e[0],i=e[1],u=e[2],l=0,f=[];l<c.length;l++)s=c[l],o[s]&&f.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=i;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"4faa":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("PostComponent")],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v("Lastest Posts")]),r("div",{staticClass:"create-post"},[r("label",{attrs:{for:"create-post"}},[t._v("\n      Say Something...\n    ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",id:"create-post",placeholder:"Create a post"},domProps:{value:t.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createPost(e)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),r("button",{on:{click:t.createPost}},[t._v("Post")])]),r("hr"),t.error?r("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),r("div",{staticClass:"posts-container"},t._l(t.posts,function(e,n){return r("div",{key:e._id,staticClass:"post",attrs:{item:e,index:n},on:{dblclick:function(r){return t.deletePost(e._id)}}},[t._v("\n      "+t._s(e.createdAt.getDate()+"/"+e.createdAt.getMonth()+"/"+e.createdAt.getFullYear())+"\n      "),r("p",{staticClass:"text"},[t._v(t._s(e.text))])])}),0)])},c=[],i=(r("96cf"),r("3b8d")),u=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),p=r("d225"),l=r("b0b4"),f=r("bc3a"),d=r.n(f);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(r,!0).forEach(function(e){Object(u["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var b="api/posts/",g=function(){function t(){Object(p["a"])(this,t)}return Object(l["a"])(t,null,[{key:"getPosts",value:function(){return new Promise(function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,r){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get(b);case 3:n=t.sent,o=n.data,e(o.map(function(t){return h({},t,{createdAt:new Date(t.createdAt)})})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),r(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e,r){return t.apply(this,arguments)}}())}},{key:"insertPost",value:function(t){return d.a.post(b,{text:t})}},{key:"deletePost",value:function(t){return d.a.delete("".concat(b).concat(t))}}]),t}(),m=g,y={name:"PostComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.getPosts();case 3:this.posts=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.error=t.t0.message;case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(){return t.apply(this,arguments)}return e}(),methods:{createPost:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.insertPost(this.text);case 2:return t.next=4,m.getPosts();case 4:this.posts=t.sent,this.text="";case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),deletePost:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.deletePost(e);case 2:return t.next=4,m.getPosts();case 4:this.posts=t.sent;case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},x=y,O=(r("66c2"),r("2877")),P=Object(O["a"])(x,s,c,!1,null,"438579fa",null),w=P.exports,j={name:"app",components:{PostComponent:w}},_=j,k=(r("034f"),Object(O["a"])(_,o,a,!1,null,null,null)),C=k.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(C)}}).$mount("#app")},"64a9":function(t,e,r){},"66c2":function(t,e,r){"use strict";var n=r("4faa"),o=r.n(n);o.a},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.a57d97a9.js.map