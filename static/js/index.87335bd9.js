(function(n){function e(e){for(var o,r,u=e[0],c=e[1],s=e[2],f=0,d=[];f<u.length;f++)r=u[f],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],o=!0,u=1;u<t.length;u++){var c=t[u];0!==i[c]&&(o=!1)}o&&(a.splice(e--,1),n=r(r.s=t[0]))}return n}var o={},i={index:0},a=[];function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.e=function(n){var e=[],t=i[n];if(0!==t)if(t)e.push(t[2]);else{var o=new Promise((function(e,o){t=i[n]=[e,o]}));e.push(t[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=function(n){return r.p+"static/js/"+({"pages-index-index":"pages-index-index"}[n]||n)+"."+{"pages-index-index":"cb9d1723"}[n]+".js"}(n);var c=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(s);var t=i[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,t[1](c)}i[n]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},r.m=n,r.c=o,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/",r.oe=function(n){throw console.error(n),n};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=c;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("c101")},"15f8":function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){}));var o=function(){var n=this.$createElement,e=this._self._c||n;return e("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},i=[]},1975:function(n,e,t){"use strict";(function(n){var e=t("4ea4").default;t("13d5"),t("d3b7"),t("ddb0"),t("ac1f"),t("5319");var o=e(t("e143")),i={keys:function(){return[]}};n["____582D0B3____"]=!0,delete n["____582D0B3____"],n.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},uniIdRouter:{}},n.__uniConfig.compilerVersion="3.6.18",n.__uniConfig.darkmode=!1,n.__uniConfig.themeConfig={},n.__uniConfig.uniPlatform="h5",n.__uniConfig.appId="__UNI__582D0B3",n.__uniConfig.appName="ScreenshotCanvas",n.__uniConfig.appVersion="1.0.0",n.__uniConfig.appVersionCode="100",n.__uniConfig.router={mode:"hash",base:"/"},n.__uniConfig.publicPath="/",n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},n.__uniConfig.sdkConfigs={maps:{qqmap:{key:""}}},n.__uniConfig.qqMapKey="",n.__uniConfig.googleMapKey=void 0,n.__uniConfig.aMapKey=void 0,n.__uniConfig.aMapSecurityJsCode=void 0,n.__uniConfig.aMapServiceHost=void 0,n.__uniConfig.locale="",n.__uniConfig.fallbackLocale=void 0,n.__uniConfig.locales=i.keys().reduce((function(n,e){var t=e.replace(/\.\/(uni-app.)?(.*).json/,"$2"),o=i(e);return Object.assign(n[t]||(n[t]={}),o.common||o),n}),{}),n.__uniConfig.nvue={"flex-direction":"column"},n.__uniConfig.__webpack_chunk_load__=t.e,o.default.component("pages-index-index",(function(n){var e={component:t.e("pages-index-index").then(function(){return n(t("ec56"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),n.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"活动总结分享页面",navigationStyle:"custom"})},[n("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],n.UniApp&&new n.UniApp}).call(this,t("c8ba"))},"23f4":function(n,e,t){"use strict";t("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=o},"25a8":function(n,e,t){"use strict";var o=t("b169"),i=t.n(o);i.a},7209:function(n,e,t){"use strict";t.r(e);var o=t("23f4"),i=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(a);e["default"]=i.a},b169:function(n,e,t){var o=t("bf5d");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var i=t("4f06").default;i("7d486a12",o,!0,{sourceMap:!1,shadowMode:!1})},bf5d:function(n,e,t){var o=t("24fb");e=o(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),n.exports=e},c101:function(n,e,t){"use strict";var o=t("4ea4").default,i=o(t("5530"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("1975"),t("1c31");var a=o(t("ed28")),r=o(t("e143")),u=o(t("cbbd"));r.default.config.productionTip=!1,a.default.mpType="app",r.default.mixin(u.default);var c=new r.default((0,i.default)({},a.default));c.$mount()},cbbd:function(n,e,t){function o(n,e){return+((1e3*n-1e3*e)/1e3).toFixed(1)}t("d401"),t("d3b7"),t("25f0"),t("a9e3"),n.exports={created:function(){var n=this;this._setTransform&&(this._setTransform=function(e,t,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0;null!==e&&"NaN"!==e.toString()&&"number"===typeof e||(e=n._translateX||0),null!==t&&"NaN"!==t.toString()&&"number"===typeof t||(t=n._translateY||0),e=Number(e.toFixed(1)),t=Number(t.toFixed(1)),i=Number(i.toFixed(1)),n._translateX===e&&n._translateY===t||r||n.$trigger("change",{},{x:o(e,n._scaleOffset.x),y:o(t,n._scaleOffset.y),source:a}),n.scale||(i=n._scale),i=n._adjustScale(i),i=+i.toFixed(3),u&&i!==n._scale&&n.$trigger("scale",{},{x:e,y:t,scale:i});var c="translateX("+e+"px) translateY("+t+"px) scale("+i+")";n.$el.style.transform=c,n.$el.style.webkitTransform=c,n._translateX=e,n._translateY=t,n._scale=i})},destroyed:function(){this._FA&&this._FA.cancel(),this._SFA&&this._SFA.cancel()},methods:{}}},ed28:function(n,e,t){"use strict";t.r(e);var o=t("15f8"),i=t("7209");for(var a in i)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(a);t("25a8");var r=t("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=u.exports}});