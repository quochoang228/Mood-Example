!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=985)}({0:function(t,e,o){"use strict";function r(t,e,o,r,n,i,l,u,a,s){var c,d="function"==typeof t?t.options:t;if(a){d.components||(d.components={});var f=Object.prototype.hasOwnProperty;for(var p in a)f.call(a,p)&&!f.call(d.components,p)&&(d.components[p]=a[p])}if(s&&((s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(d.mixins||(d.mixins=[])).push(s)),e&&(d.render=e,d.staticRenderFns=o,d._compiled=!0),r&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),l?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},d._ssrRegister=c):n&&(c=u?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(d.functional){d._injectStyles=c;var b=d.render;d.render=function(t,e){return c.call(e),b(t,e)}}else{var _=d.beforeCreate;d.beforeCreate=_?[].concat(_,c):[c]}return{exports:t,options:d}}o.d(e,"a",(function(){return r}))},1:function(t,e){t.exports={"u-line-1":{lines:1,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-2":{lines:2,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-3":{lines:3,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-4":{lines:4,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-line-5":{lines:5,textOverflow:"ellipsis",overflow:"hidden",flex:1},"u-border":{borderWidth:"0.5",borderColor:"#dadbde",borderStyle:"solid"},"u-border-top":{borderTopWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid"},"u-border-left":{borderLeftWidth:"0.5",borderColor:"#dadbde",borderLeftStyle:"solid"},"u-border-right":{borderRightWidth:"0.5",borderColor:"#dadbde",borderRightStyle:"solid"},"u-border-bottom":{borderBottomWidth:"0.5",borderColor:"#dadbde",borderBottomStyle:"solid"},"u-border-top-bottom":{borderTopWidth:"0.5",borderBottomWidth:"0.5",borderColor:"#dadbde",borderTopStyle:"solid",borderBottomStyle:"solid"},"u-reset-button":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0},"u-hover-class":{opacity:.7},"u-primary-light":{color:"#ecf5ff"},"u-warning-light":{color:"#fdf6ec"},"u-success-light":{color:"#f5fff0"},"u-error-light":{color:"#fef0f0"},"u-info-light":{color:"#f4f4f5"},"u-primary-light-bg":{backgroundColor:"#ecf5ff"},"u-warning-light-bg":{backgroundColor:"#fdf6ec"},"u-success-light-bg":{backgroundColor:"#f5fff0"},"u-error-light-bg":{backgroundColor:"#fef0f0"},"u-info-light-bg":{backgroundColor:"#f4f4f5"},"u-primary-dark":{color:"#398ade"},"u-warning-dark":{color:"#f1a532"},"u-success-dark":{color:"#53c21d"},"u-error-dark":{color:"#e45656"},"u-info-dark":{color:"#767a82"},"u-primary-dark-bg":{backgroundColor:"#398ade"},"u-warning-dark-bg":{backgroundColor:"#f1a532"},"u-success-dark-bg":{backgroundColor:"#53c21d"},"u-error-dark-bg":{backgroundColor:"#e45656"},"u-info-dark-bg":{backgroundColor:"#767a82"},"u-primary-disabled":{color:"#9acafc"},"u-warning-disabled":{color:"#f9d39b"},"u-success-disabled":{color:"#a9e08f"},"u-error-disabled":{color:"#f7b2b2"},"u-info-disabled":{color:"#c4c6c9"},"u-primary":{color:"#3c9cff"},"u-warning":{color:"#f9ae3d"},"u-success":{color:"#5ac725"},"u-error":{color:"#f56c6c"},"u-info":{color:"#909399"},"u-primary-bg":{backgroundColor:"#3c9cff"},"u-warning-bg":{backgroundColor:"#f9ae3d"},"u-success-bg":{backgroundColor:"#5ac725"},"u-error-bg":{backgroundColor:"#f56c6c"},"u-info-bg":{backgroundColor:"#909399"},"u-main-color":{color:"#303133"},"u-content-color":{color:"#606266"},"u-tips-color":{color:"#909193"},"u-light-color":{color:"#c0c4cc"},"u-block":{paddingTop:"14",paddingRight:"14",paddingBottom:"14",paddingLeft:"14"},"u-block__section":{marginBottom:"10"},"u-block__title":{marginTop:"10",fontSize:"15",color:"#606266",marginBottom:"10"},"u-cell-icon":{width:"36rpx",height:"36rpx",marginRight:"8rpx"},"u-page":{paddingTop:"15",paddingRight:"15",paddingBottom:"40",paddingLeft:"15"},"u-demo-block":{flex:1,marginBottom:"23"},"u-demo-block__content":{flexDirection:"column"},"u-demo-block__title":{fontSize:"14",color:"#8f9ca2",marginBottom:"8",flexDirection:"row"},"@VERSION":2}},10:function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(o){return e.resolve(t()).then((function(){return o}))}),(function(o){return e.resolve(t()).then((function(){throw o}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var o=uni.requireGlobal();ArrayBuffer=o.ArrayBuffer,Int8Array=o.Int8Array,Uint8Array=o.Uint8Array,Uint8ClampedArray=o.Uint8ClampedArray,Int16Array=o.Int16Array,Uint16Array=o.Uint16Array,Int32Array=o.Int32Array,Uint32Array=o.Uint32Array,Float32Array=o.Float32Array,Float64Array=o.Float64Array,BigInt64Array=o.BigInt64Array,BigUint64Array=o.BigUint64Array}},101:function(t,e,o){"use strict";o.r(e);var r=o(64),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},116:function(t,e,o){"use strict";o.r(e);var r=o(66),n=o(62);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);var l=o(0);var u=Object(l.a)(n.default,r.b,r.c,!1,null,"0f0cb6d2","007e4b8c",!1,r.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(101).default,this.options.style):Object.assign(this.options.style,o(101).default)}).call(u),e.default=u.exports},117:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{color:{type:String,default:uni.$u.props.link.color},fontSize:{type:[String,Number],default:uni.$u.props.link.fontSize},underLine:{type:Boolean,default:uni.$u.props.link.underLine},href:{type:String,default:uni.$u.props.link.href},mpTips:{type:String,default:uni.$u.props.link.mpTips},lineColor:{type:String,default:uni.$u.props.link.lineColor},text:{type:String,default:uni.$u.props.link.text}}};e.default=r},308:function(t,e,o){"use strict";var r=o(711),n=o(427),i=o(0);var l=Object(i.a)(n.default,r.b,r.c,!1,null,null,"3d7d9db0",!1,r.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(869).default,this.options.style):Object.assign(this.options.style,o(869).default)}).call(l),e.default=l.exports},427:function(t,e,o){"use strict";var r=o(428),n=o.n(r);e.default=n.a},428:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{}},methods:{click:function(){t("log","click"," at pages/componentsA/link/link.nvue:63")}}};e.default=o}).call(this,o(51).default)},429:function(t,e){t.exports={"u-page__link-item":{marginTop:"5"},"@VERSION":2}},51:function(t,e,o){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function n(){return"string"==typeof __channelId__&&__channelId__}function i(t,e){switch(r(e)){case"Function":return"function() { [native code] }";default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];console[t].apply(console,o)},e.default=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var l=e.shift();if(n())return e.push(e.pop().replace("at ","uni-app:///")),console[l].apply(console,e);var u=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(o){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var o=r(t).toUpperCase();t="NUMBER"===o||"BOOLEAN"===o?"---BEGIN:"+o+"---"+t+"---END:"+o+"---":String(t)}return t})),a="";if(u.length>1){var s=u.pop();a=u.join("---COMMA---"),0===s.indexOf(" at ")?a+=s:a+="---COMMA---"+s}else a=u[0];console[l](a)}},62:function(t,e,o){"use strict";o.r(e);var r=o(63),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},63:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,n=(r=o(117))&&r.__esModule?r:{default:r};var i={name:"u-link",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],computed:{linkStyle:function(){return{color:this.color,fontSize:uni.$u.addUnit(this.fontSize),lineHeight:uni.$u.addUnit(uni.$u.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"}}},methods:{openLink:function(){plus.runtime.openURL(this.href),this.$emit("click")}}};e.default=i},64:function(t,e){t.exports={"u-link":{flexDirection:"row",flexWrap:"wrap",flex:1},"@VERSION":2}},66:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){}));var r=function(){var t=this.$createElement;return(this._self._c||t)("u-text",{staticClass:["u-link"],style:[this.linkStyle,this.$u.addStyle(this.customStyle)],appendAsTree:!0,attrs:{append:"tree"},on:{click:this.openLink}},[this._v(this._s(this.text))])},n=[]},711:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return r}));var r={uLink:o(116).default},n=function(){var t=this.$createElement,e=this._self._c||t;return e("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[e("view",{staticClass:["u-page"]},[e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u57fa\u672c\u6848\u4f8b")]),e("view",{staticClass:["u-demo-block__content"]},[e("view",{staticClass:["u-page__link-item"]},[e("u-link",{attrs:{href:"https://uviewui.com/",text:"\u6253\u5f00uView UI\u6587\u6863"},on:{click:this.click}})],1)])]),e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u663e\u793a\u4e0b\u5212\u7ebf")]),e("view",{staticClass:["u-demo-block__content"]},[e("view",{staticClass:["u-page__link-item"]},[e("u-link",{attrs:{href:"https://uviewui.com/",underLine:!0,text:"Go to uView doc"}})],1)])]),e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u989c\u8272")]),e("view",{staticClass:["u-demo-block__content"]},[e("view",{staticClass:["u-page__link-item"]},[e("u-link",{attrs:{href:"https://uviewui.com/",lineColor:"#19be6b",color:"#19be6b",text:"\u6253\u5f00uView UI\u6587\u6863"}})],1)])]),e("view",{staticClass:["u-demo-block"]},[e("u-text",{staticClass:["u-demo-block__title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v("\u81ea\u5b9a\u4e49\u94fe\u63a5\u5185\u5bb9")]),e("view",{staticClass:["u-demo-block__content"]},[e("view",{staticClass:["u-page__link-item"]},[e("u-link",{attrs:{href:"https://uniapp.dcloud.io/",text:"\u6253\u5f00uni-app\u6587\u6863"}})],1)])])])])},i=[]},8:function(t,e,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(9).default,Vue.prototype.__$appStyle__)},869:function(t,e,o){"use strict";o.r(e);var r=o(429),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},9:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},985:function(t,e,o){"use strict";o.r(e);o(8),o(10);var r=o(308);r.default.mpType="page",r.default.route="pages/componentsA/link/link",r.default.el="#root",new Vue(r.default)}});