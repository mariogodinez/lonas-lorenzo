webpackJsonp([12],{116:function(t,n,e){"use strict";var r=e(66),o=e.n(r),a=e(119),i=a.keys(),s={},u=!0,c=!1,f=void 0;try{for(var l,d=o()(i);!(u=(l=d.next()).done);u=!0){var p=l.value;s[p.replace(/^\.\//,"").replace(/\.(js|ts)$/,"")]=function(t){var n=a(t);return n.default?n.default:n}(p)}}catch(t){c=!0,f=t}finally{try{!u&&d.return&&d.return()}finally{if(c)throw f}}n.a=s},119:function(t,n){function e(t){throw new Error("Cannot find module '"+t+"'.")}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=119},120:function(t,n,e){"use strict";e.d(n,"b",function(){return _});var r=e(57),o=e.n(r),a=e(26),i=e.n(a),s=e(67),u=e.n(s),c=e(16),f=(e.n(c),e(64)),l=e.n(f),d=e(121),p=(e.n(d),e(3)),h=e(44),m=e.n(h),v=e(123),A=e(68),x=e(125),g=e(69),b=e(130),C=e(133),y=e(70),w=e(143);e.d(n,"a",function(){return g.a});var _=function(){var t=l()(o.a.mark(function t(n){var e,r,a,s,c,f,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=Object(v.a)(),r=Object(w.a)(),t.next=5;break;case 5:return window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),a=u()({router:e,store:r,_nuxt:{defaultTransition:$,transitions:[$],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?i()({},$,{name:t}):i()({},$,t):$}),this.$options._nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){"string"==typeof(t=t||null)&&(t={statusCode:500,message:t});var n=this._nuxt||this.$options._nuxt;return n.dateErr=Date.now(),n.err=t,t}}},C.a),s=n?n.next:function(t){return a.router.push(t)},c=e.currentRoute,n||(f=Object(y.e)(e.options.base),c=e.resolve(f).route),l=Object(y.d)({isServer:!!n,isClient:!n,route:c,next:s,error:a._nuxt.error.bind(a),store:r,req:n?n.req:void 0,res:n?n.res:void 0,beforeRenderFns:n?n.beforeRenderFns:void 0},a),t.abrupt("return",{app:a,router:e,store:r});case 12:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}();p.default.component(A.a.name,A.a),p.default.component(x.a.name,x.a),p.default.component(b.a.name,b.a),p.default.use(m.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var $={name:"page",mode:"out-in"}},123:function(t,n,e){"use strict";function r(){return new a.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:v,routes:[{path:"/",component:i,name:"index"},{path:"/industrial",component:s,name:"industrial"},{path:"/arquitectura",component:u,name:"arquitectura"},{path:"/arquitectura/servicios",component:c,name:"arquitectura-servicios"},{path:"/arquitectura/premios",component:f,name:"arquitectura-premios"},{path:"/arquitectura/clientes",component:l,name:"arquitectura-clientes"},{path:"/arquitectura/alianzas",component:d,name:"arquitectura-alianzas"},{path:"/arquitectura/contacto",component:p,name:"arquitectura-contacto"},{path:"/arquitectura/nosotros",component:h,name:"arquitectura-nosotros"},{path:"/arquitectura/proyectos",component:m,name:"arquitectura-proyectos"}],fallback:!1})}n.a=r;var o=e(3),a=e(43);o.default.use(a.default);var i=function(){return e.e(9).then(e.bind(null,145)).then(function(t){return t.default||t})},s=function(){return e.e(8).then(e.bind(null,146)).then(function(t){return t.default||t})},u=function(){return e.e(7).then(e.bind(null,147)).then(function(t){return t.default||t})},c=function(){return e.e(0).then(e.bind(null,148)).then(function(t){return t.default||t})},f=function(){return e.e(2).then(e.bind(null,149)).then(function(t){return t.default||t})},l=function(){return e.e(5).then(e.bind(null,150)).then(function(t){return t.default||t})},d=function(){return e.e(6).then(e.bind(null,151)).then(function(t){return t.default||t})},p=function(){return e.e(4).then(e.bind(null,152)).then(function(t){return t.default||t})},h=function(){return e.e(3).then(e.bind(null,153)).then(function(t){return t.default||t})},m=function(){return e.e(1).then(e.bind(null,154)).then(function(t){return t.default||t})},v=function(t,n,e){if(e)return e;var r={};return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),t.hash&&(r={selector:t.hash}),r}},125:function(t,n,e){"use strict";e(3);n.a={name:"nuxt-link",functional:!0,render:function(t,n){return t("router-link",n.data,n.children)}}},126:function(t,n,e){var r=e(127);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(42)("575c8d86",r,!0)},127:function(t,n,e){n=t.exports=e(41)(!0),n.push([t.i,".error-page[data-v-3db4b429]{color:#000;background:#fff;top:0;bottom:0;left:0;right:0;position:absolute;font-family:SF UI Text,Helvetica Neue,Lucida Grande;text-align:center;padding-top:20%}.error-code[data-v-3db4b429]{display:inline-block;font-size:24px;font-weight:500;vertical-align:top;border-right:1px solid rgba(0,0,0,.298039);margin:0 20px 0 0;padding:10px 23px}.error-wrapper-message[data-v-3db4b429]{display:inline-block;text-align:left;line-height:49px;height:49px;vertical-align:middle}.error-message[data-v-3db4b429]{font-size:14px;font-weight:400;margin:0;padding:0}.error-link[data-v-3db4b429]{color:#00bcd4;font-weight:400;text-decoration:none;font-size:14px}","",{version:3,sources:["/Users/mario/Desktop/lonas-lorenzo/.nuxt/components/nuxt-error.vue"],names:[],mappings:"AACA,6BACE,WAAY,AACZ,gBAAiB,AACjB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,kBAAmB,AACnB,oDAA6D,AAC7D,kBAAmB,AACnB,eAAiB,CAClB,AACD,6BACE,qBAAsB,AACtB,eAAgB,AAChB,gBAAiB,AACjB,mBAAoB,AACpB,2CAAgD,AAChD,kBAAyB,AACzB,iBAAmB,CACpB,AACD,wCACE,qBAAsB,AACtB,gBAAiB,AACjB,iBAAkB,AAClB,YAAa,AACb,qBAAuB,CACxB,AACD,gCACE,eAAgB,AAChB,gBAAoB,AACpB,SAAY,AACZ,SAAa,CACd,AACD,6BACE,cAAe,AACf,gBAAoB,AACpB,qBAAsB,AACtB,cAAgB,CACjB",file:"nuxt-error.vue",sourcesContent:['\n.error-page[data-v-3db4b429] {\n  color: #000;\n  background: #fff;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  font-family: "SF UI Text", "Helvetica Neue", "Lucida Grande";\n  text-align: center;\n  padding-top: 20%;\n}\n.error-code[data-v-3db4b429] {\n  display: inline-block;\n  font-size: 24px;\n  font-weight: 500;\n  vertical-align: top;\n  border-right: 1px solid rgba(0, 0, 0, 0.298039);\n  margin: 0px 20px 0px 0px;\n  padding: 10px 23px;\n}\n.error-wrapper-message[data-v-3db4b429] {\n  display: inline-block;\n  text-align: left;\n  line-height: 49px;\n  height: 49px;\n  vertical-align: middle;\n}\n.error-message[data-v-3db4b429] {\n  font-size: 14px;\n  font-weight: normal;\n  margin: 0px;\n  padding: 0px;\n}\n.error-link[data-v-3db4b429] {\n  color: #00BCD4;\n  font-weight: normal;\n  text-decoration: none;\n  font-size: 14px;\n}\n'],sourceRoot:""}])},128:function(t,n,e){"use strict";n.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.error.message||"An error occured"}}}},129:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"error-page"},[e("div",[e("h1",{staticClass:"error-code"},[t._v(t._s(t.error.statusCode))]),e("div",{staticClass:"error-wrapper-message"},[e("h2",{staticClass:"error-message"},[t._v(t._s(t.error.message))])]),404===t.error.statusCode?e("p",[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e()])])},o=[],a={render:r,staticRenderFns:o};n.a=a},130:function(t,n,e){"use strict";var r=e(131),o=e(132),a=e(17),i=a(r.a,o.a,null,null,null);n.a=i.exports},131:function(t,n,e){"use strict";var r=e(3),o=e(68),a=e(69);n.a={name:"nuxt",props:["nuxtChildKey"],beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options._nuxt)},created:function(){r.default.prototype.$nuxt=this,this.$root.$nuxt=this,this.setLayout=this.$root.setLayout.bind(this.$root),"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.$root.error},mounted:function(){this.$root.$loading&&this.$root.$loading.start&&(this.$loading=this.$root.$loading)},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())}},computed:{routerViewKey:function(){return void 0!==this.nuxtChildKey||this.$route.matched.length>1?this.nuxtChildKey||"":this.$route.fullPath.split("#")[0]}},components:{NuxtChild:o.a,NuxtError:a.a}}},132:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.nuxt.err?e("nuxt-error",{attrs:{error:t.nuxt.err}}):e("nuxt-child",{key:t.routerViewKey})},o=[],a={render:r,staticRenderFns:o};n.a=a},133:function(t,n,e){"use strict";var r=e(134),o=e(140),a=e(17),i=a(r.a,o.a,null,null,null);n.a=i.exports},134:function(t,n,e){"use strict";var r=e(16),o=e.n(r),a=e(135),i={_default:function(){return e.e(10).then(e.bind(null,155)).then(function(t){return t.default||t})}};n.a={head:{title:"starter",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},data:function(){return{layout:null,layoutName:""}},mounted:function(){this.$loading=this.$refs.loading,this.$nuxt.$loading=this.$loading},methods:{setLayout:function(t){t&&i["_"+t]||(t="default"),this.layoutName=t;var n="_"+t;return this.layout=i[n],this.layout},loadLayout:function(t){var n=this;t&&i["_"+t]||(t="default");var e="_"+t;return"function"!=typeof i[e]?o.a.resolve(i[e]):i[e]().then(function(t){return i[e]=t,i[e]}).catch(function(t){if(n.$nuxt)return n.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:a.a}}},135:function(t,n,e){"use strict";function r(t){e(136)}var o=e(138),a=e(139),i=e(17),s=r,u=i(o.a,a.a,s,"data-v-19af4b1d",null);n.a=u.exports},136:function(t,n,e){var r=e(137);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(42)("1b68804a",r,!0)},137:function(t,n,e){n=t.exports=e(41)(!0),n.push([t.i,".progress[data-v-19af4b1d]{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;-o-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}","",{version:3,sources:["/Users/mario/Desktop/lonas-lorenzo/.nuxt/components/nuxt-loading.vue"],names:[],mappings:"AACA,2BACE,eAAgB,AAChB,MAAS,AACT,OAAU,AACV,QAAW,AACX,WAAY,AACZ,QAAU,AACV,yCAA6C,AAC7C,oCAAwC,AACxC,iCAAqC,AACrC,UAAW,AACX,yBAA0B,AAC1B,cAAgB,CACjB",file:"nuxt-loading.vue",sourcesContent:["\n.progress[data-v-19af4b1d] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: width 0.2s, opacity 0.4s;\n  -o-transition: width 0.2s, opacity 0.4s;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n"],sourceRoot:""}])},138:function(t,n,e){"use strict";var r=e(3);n.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},139:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},o=[],a={render:r,staticRenderFns:o};n.a=a},140:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"__nuxt"}},[e("nuxt-loading",{ref:"loading"}),t.layout?e(t.layout,{tag:"component"}):t._e()],1)},o=[],a={render:r,staticRenderFns:o};n.a=a},143:function(t,n,e){"use strict";function r(t){var n=l(t),e=n.default||n;if(e.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(e.state&&"function"!=typeof e.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return e}function o(t,n){if(1===n.length)return t.modules;var e=n.shift();return t.modules[e]=t.modules[e]||{},t.modules[e].namespaced=!0,t.modules[e].modules=t.modules[e].modules||{},o(t.modules[e],n)}e.d(n,"a",function(){return w});var a=e(26),i=e.n(a),s=e(66),u=e.n(s),c=e(3),f=e(45);c.default.use(f.default);var l=e(144),d=l.keys(),p={},h=void 0;if(d.forEach(function(t){-1!==t.indexOf("./index.")&&(h=t)}),h&&(p=r(h)),"function"!=typeof p){p.modules||(p.modules={});var m=!0,v=!1,A=void 0;try{for(var x,g=u()(d);!(m=(x=g.next()).done);m=!0){var b=x.value,C=b.replace(/^\.\//,"").replace(/\.(js|ts)$/,"");if("index"!==C){var y=C.split(/\//),t=o(p,y);C=y.pop(),t[C]=r(b),t[C].namespaced=!0}}}catch(t){v=!0,A=t}finally{try{!m&&g.return&&g.return()}finally{if(v)throw A}}}var w=p instanceof Function?p:function(){return new f.default.Store(i()({},p,{state:p.state instanceof Function?p.state():{}}))}},144:function(t,n){function e(t){throw new Error("Cannot find module '"+t+"'.")}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=144},68:function(t,n,e){"use strict";var r=(e(3),["name","mode","css","type","duration","enterClass","leaveClass","enterActiveClass","enterActiveClass","leaveActiveClass","enterToClass","leaveToClass"]),o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled"];n.a={name:"nuxt-child",functional:!0,render:function(t,n){var e=n.parent,a=n.data;a.nuxtChild=!0;for(var i=e,s=e.$nuxt.nuxt.transitions,u=e.$nuxt.nuxt.defaultTransition,c=0;e;)e.$vnode&&e.$vnode.data.nuxtChild&&c++,e=e.$parent;a.nuxtChildDepth=c;var f=s[c]||u,l={};r.forEach(function(t){void 0!==f[t]&&(l[t]=f[t])});var d={};return o.forEach(function(t){"function"==typeof f[t]&&(d[t]=f[t].bind(i))}),t("transition",{props:l,on:d},[t("router-view",a)])}}},69:function(t,n,e){"use strict";function r(t){e(126)}var o=e(128),a=e(129),i=e(17),s=r,u=i(o.a,a.a,s,"data-v-3db4b429",null);n.a=u.exports},70:function(t,n,e){"use strict";function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.options.data||R;!n&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=e.call(this);return this.$ssrContext&&(n=this.$ssrContext.asyncData[t.options.name]),E()({},r,n)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function o(t){return t.options?(t._Ctor=t,t.extendOptions=t.options):(t=j.default.extend(t),t._Ctor=t),!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t}function a(t){return[].concat.apply([],t.matched.map(function(t){return B()(t.components).map(function(n){return t.components[n]})}))}function i(t){return[].concat.apply([],t.matched.map(function(t){return B()(t.instances).map(function(n){return t.instances[n]})}))}function s(t,n){return Array.prototype.concat.apply([],t.matched.map(function(t,e){return B()(t.components).map(function(r){return n(t.components[r],t.instances[r],t,r,e)})}))}function u(t,n){var e={isServer:!!t.isServer,isClient:!!t.isClient,isDev:!1,app:n,store:t.store,route:t.to?t.to:t.route,payload:t.payload,error:t.error,base:"/",env:{},hotReload:t.hotReload||!1},r=t.next;return e.params=e.route.params||{},e.query=e.route.query||{},e.redirect=function(t,n,o){t&&(e._redirected=!0,"string"!=typeof t||void 0!==n&&"object"!==(void 0===n?"undefined":_()(n))||(o=n||{},n=t,t=302),r({path:n,query:o,status:t}))},t.req&&(e.req=t.req),t.res&&(e.res=t.res),t.from&&(e.from=t.from),e.isServer&&t.beforeRenderFns&&(e.beforeNuxtRender=function(n){return t.beforeRenderFns.push(n)}),e}function c(t,n){return!t.length||n._redirected?y.a.resolve():f(t[0],n).then(function(){return c(t.slice(1),n)})}function f(t,n){var e=void 0;return e=2===t.length?new y.a(function(e){t(n,function(t,r){t&&n.error(t),r=r||{},e(r)})}):t(n),e&&(e instanceof y.a||"function"==typeof e.then)||(e=y.a.resolve(e)),e}function l(t){var n=window.location.pathname;return t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash}function d(t,n){return v(p(t,n))}function p(t,n){for(var e,r=[],o=0,a=0,i="",s=n&&n.delimiter||"/";null!=(e=O.exec(t));){var u=e[0],c=e[1],f=e.index;if(i+=t.slice(a,f),a=f+u.length,c)i+=c[1];else{var l=t[a],d=e[2],p=e[3],h=e[4],m=e[5],v=e[6],g=e[7];i&&(r.push(i),i="");var b=null!=d&&null!=l&&l!==d,C="+"===v||"*"===v,y="?"===v||"*"===v,w=e[2]||s,_=h||m;r.push({name:p||o++,prefix:d||"",delimiter:w,optional:y,repeat:C,partial:b,asterisk:!!g,pattern:_?x(_):g?".*":"[^"+A(w)+"]+?"})}}return a<t.length&&(i+=t.substr(a)),i&&r.push(i),r}function h(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function m(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function v(t){for(var n=new Array(t.length),e=0;e<t.length;e++)"object"===_()(t[e])&&(n[e]=new RegExp("^(?:"+t[e].pattern+")$"));return function(e,r){for(var o="",a=e||{},i=r||{},s=i.pretty?h:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var f,l=a[c.name];if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+b()(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(f=s(l[d]),!n[u].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+b()(f)+"`");o+=(0===d?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?m(l):s(l),!n[u].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');o+=c.prefix+f}}else o+=c}return o}}function A(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function x(t){return t.replace(/([=!:$\/()])/g,"\\$1")}n.a=r,n.j=o,n.f=a,n.g=i,n.c=s,n.d=u,n.h=c,n.i=f,n.e=l,n.b=d;var g=e(141),b=e.n(g),C=e(16),y=e.n(C),w=e(46),_=e.n(w),$=e(65),B=e.n($),k=e(67),E=e.n(k),j=e(3),R=function(){return{}};window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var O=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},72:function(t,n,e){"use strict";function r(t,n){if(!t||!t.options||!t.options[n])return{};var e=t.options[n];if("function"==typeof e){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return e.apply(void 0,o)}return e}function o(t,n,e){var o=function(t){var o=r(t,"transition",n,e);return"string"==typeof o?{name:o}:o};return t.map(function(t){var n=C()({},o(t));if(e&&e.matched.length&&e.matched[0].components.default){var r=o(e.matched[0].components.default);g()(r).filter(function(t){return r[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){n[t]=r[t]})}return n})}function a(t){var n=Object($.e)(t.options.base);return Object($.c)(t.match(n),function(t,n,e,r,o){if("function"!=typeof t||t.options){var a=Object($.j)(t);return e.components[r]=a,a}return t().then(function(t){var n=Object($.j)(t);return D.serverRendered&&(Object($.a)(n,D.data[o]),D.components&&(t.options.components=C()(n.options.components,D.components[o])),n._Ctor=n),e.components[r]=n,n})})}function i(t,n,e){var r=this,o=[],a=!1;if(void 0!==e&&(o=[],e.middleware&&(o=o.concat(e.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"!=typeof w.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),w.a[t]}),!a)return Object($.h)(o,n)}function s(t,n){Object($.c)(t,function(t,n,e,r){return"object"!==(void 0===t?"undefined":l()(t))||t.options||(t=y.default.extend(t),t._Ctor=t,e.components[r]=t),t})}function u(t,n){var e=this;this._hashChanged||y.default.nextTick(function(){var n=Object($.g)(t);R=n.map(function(t,n){if(!t)return"";if(j[n]===t.constructor._path&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var r in e)y.default.set(t.$data,r,e[r])}return t.constructor.options.__file}),e._hadError&&e._dateLastError===e.$options._nuxt.dateErr&&e.error();var r=e.$options._nuxt.err?_.a.layout:t.matched[0].components.default.options.layout;"function"==typeof r&&(r=r(e._context)),e.setLayout(r)})}function c(t){window._nuxtReadyCbs.forEach(function(n){"function"==typeof n&&n(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),T.afterEach(function(n,e){t.$nuxt.$emit("routeChanged",n,e)})}Object.defineProperty(n,"__esModule",{value:!0});var f=e(46),l=e.n(f),d=e(57),p=e.n(d),h=e(16),m=e.n(h),v=e(64),A=e.n(v),x=e(65),g=e.n(x),b=e(26),C=e.n(b),y=e(3),w=e(116),_=e(120),$=e(70),B=function(){var t=A()(p.a.mark(function t(n,e,r){var o,a,i;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.fullPath.split("#")[0],a=n.fullPath.split("#")[0],this._hashChanged=o===a,!this._hashChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,m.a.all(Object($.c)(n,function(t,n,e,r){if("function"!=typeof t||t.options){var o=Object($.j)(t);return e.components[r]=o,o}return t().then(function(t){var n=Object($.j)(t);return e.components[r]=n,n})}));case 7:r(),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(4),t.t0||(t.t0={}),i=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:i,message:t.t0.message}),r(!1);case 16:case"end":return t.stop()}},t,this,[[4,10]])}));return function(n,e,r){return t.apply(this,arguments)}}(),k=function(){var t=A()(p.a.mark(function t(n,e,r){var a,s,u,c,f,l,d,h,v=this;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._hashChanged){t.next=2;break}return t.abrupt("return",r());case 2:if(a=!1,s=function(t){v.$loading.finish&&v.$loading.finish(),a||(a=!0,r(t))},u=Object($.d)({to:n,from:e,store:q,isClient:!0,next:s.bind(this),error:this.error.bind(this)},O),this._context=u,this._dateLastError=this.$options._nuxt.dateErr,this._hadError=!!this.$options._nuxt.err,c=Object($.f)(n),c.length){t.next=23;break}return t.next=12,i.call(this,c,u);case 12:if(!u._redirected){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,this.loadLayout("function"==typeof _.a.layout?_.a.layout(u):_.a.layout);case 16:return f=t.sent,t.next=19,i.call(this,c,u,f);case 19:if(!u._redirected){t.next=21;break}return t.abrupt("return");case 21:return this.error({statusCode:404,message:"This page could not be found."}),t.abrupt("return",r());case 23:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(o(c,n,e)),t.prev=25,t.next=28,i.call(this,c,u);case 28:if(!u._redirected){t.next=30;break}return t.abrupt("return");case 30:return l=c[0].options.layout,"function"==typeof l&&(l=l(u)),t.next=34,this.loadLayout(l);case 34:return l=t.sent,t.next=37,i.call(this,c,u,l);case 37:if(!u._redirected){t.next=39;break}return t.abrupt("return");case 39:if(d=!0,c.forEach(function(t){d&&"function"==typeof t.options.validate&&(d=t.options.validate({params:n.params||{},query:n.query||{},store:u.store}))}),d){t.next=44;break}return this.error({statusCode:404,message:"This page could not be found."}),t.abrupt("return",r());case 44:return t.next=46,m.a.all(c.map(function(t,e){if(t._path=Object($.b)(n.matched[e].path)(n.params),!v._hadError&&t._path===j[e]&&e+1!==c.length)return m.a.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch,i=o&&a?30:45;if(o){var s=Object($.i)(t.options.asyncData,u).then(function(n){Object($.a)(t,n),v.$loading.increase&&v.$loading.increase(i)});r.push(s)}if(a){var f=t.options.fetch(u);f&&(f instanceof m.a||"function"==typeof f.then)||(f=m.a.resolve(f)),f.then(function(t){v.$loading.increase&&v.$loading.increase(i)}),r.push(f)}return m.a.all(r)}));case 46:j=c.map(function(t,e){return Object($.b)(n.matched[e].path)(n.params)}),this.$loading.finish&&this.$loading.finish(),a||r(),t.next=62;break;case 51:return t.prev=51,t.t0=t.catch(25),t.t0||(t.t0={}),j=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,h=_.a.layout,"function"==typeof h&&(h=h(u)),t.next=60,this.loadLayout(h);case 60:this.error(t.t0),r(!1);case 62:case"end":return t.stop()}},t,this,[[25,51]])}));return function(n,e,r){return t.apply(this,arguments)}}(),E=function(){var t=A()(p.a.mark(function t(n){var e,r,i,f;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return O=n.app,T=n.router,q=n.store,t.next=5,m.a.all(a(T));case 5:return e=t.sent,r=new y.default(O),i=D.layout||"default",t.next=10,r.loadLayout(i);case 10:if(r.setLayout(i),f=function(){r.$mount("#__nuxt"),y.default.nextTick(function(){c(r)})},r.setTransitions=r.$options._nuxt.setTransitions.bind(r),e.length&&(r.setTransitions(o(e,T.currentRoute)),j=T.currentRoute.matched.map(function(t){return Object($.b)(t.path)(T.currentRoute.params)}),R=e.map(function(t){return t.options.__file})),r.error=r.$options._nuxt.error.bind(r),r.$loading={},D.error&&r.error(D.error),T.beforeEach(B.bind(r)),T.beforeEach(k.bind(r)),T.afterEach(s),T.afterEach(u.bind(r)),!D.serverRendered){t.next=24;break}return f(),t.abrupt("return");case 24:k.call(r,T.currentRoute,T.currentRoute,function(t){if(!t)return s(T.currentRoute,T.currentRoute),u.call(r,T.currentRoute,T.currentRoute),void f();var n=!1;T.afterEach(function(){n||(n=!0,f())}),T.push(t)});case 25:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}(),j=[],R=[],O=void 0,T=void 0,q=void 0,D=window.__NUXT__||{};D.components=window.__COMPONENTS__||null,Object(_.b)().then(E).catch(function(t){console.error("[nuxt] Error while initializing app",t)})}},[72]);
//# sourceMappingURL=nuxt.bundle.7270c4eb0eb1bdee1c84.js.map