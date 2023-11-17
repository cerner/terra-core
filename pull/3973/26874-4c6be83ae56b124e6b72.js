(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[26874],{26874:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(67294)),l=a(r(65318)),o=a(r(421)),u=a(r(89426));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement(u.default,{required:!0,isLegendHidden:!0},n.default.createElement(l.default,{label:"First",isInline:!0,required:!0,htmlFor:"first"},n.default.createElement(o.default,{id:"first",type:"text",name:"first",defaultValue:""})),n.default.createElement(l.default,{label:"Middle",isInline:!0,required:!0,htmlFor:"middle"},n.default.createElement(o.default,{id:"middle",type:"text",name:"middle",defaultValue:""})),n.default.createElement(l.default,{label:"Last",isInline:!0,required:!0,htmlFor:"last"},n.default.createElement(o.default,{id:"last",type:"text",name:"last",defaultValue:""})))}},89426:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(67294)),l=c(r(45697)),o=c(r(94184)),u=c(r(47166)),a=c(r(50026)),i=r(25557),d=c(r(65283)),f=["children","help","legend","legendAttrs","isLegendHidden","required"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var m=u.default.bind(d.default),b={children:l.default.node,help:l.default.node,legend:l.default.string,legendAttrs:l.default.object,required:l.default.bool,isLegendHidden:l.default.bool},y=function(e){var t,r,l=e.children,u=e.help,d=e.legend,c=e.legendAttrs,b=e.isLegendHidden,y=e.required,v=p(e,f),h=n.default.useContext(a.default),_=(0,o.default)(m(["fieldset",{"fieldset-required":y},h.className]),v.className),g=m(["legend",c.className,{"legend-visually-hidden":b}]),O="terra-fieldset-legend-".concat((0,i.v4)()),j="terra-fieldset-help-".concat((0,i.v4)());return n.default.createElement("fieldset",s({},v,{className:_}),d&&n.default.createElement("legend",s({id:O},c,{className:g}),d),u&&n.default.createElement("small",{id:j,className:m("help-text"),tabIndex:"-1"},u),n.default.createElement("div",{className:m("fieldset-children")},(u||d)&&l?(t=l,r=[],n.default.Children.forEach(t,(function(e){r.push(n.default.cloneElement(e,{"aria-labelledby":"".concat(O," ").concat(j)}))})),r):l))};y.propTypes=b,y.defaultProps={legendAttrs:{},required:!1,isLegendHidden:!1};t.default=y},421:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(r(67294)),o=c(r(45697)),u=c(r(94184)),a=c(r(47166)),i=c(r(50026)),d=c(r(95334)),f=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function v(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,t||"default");if("object"!==n(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,l=g(e);if(t){var o=g(this).constructor;r=Reflect.construct(l,arguments,o)}else r=l.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var O=a.default.bind(d.default),j={defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,isIncomplete:o.default.bool,isInvalid:o.default.bool,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,onInput:o.default.func,name:o.default.string,pattern:o.default.string,refCallback:o.default.func,required:o.default.bool,type:o.default.string,value:o.default.oneOfType([o.default.string,o.default.number]),ariaLabel:o.default.string},w={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,r,n,o=_(a);function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o.apply(this,arguments)}return t=a,r=[{key:"render",value:function(){var e,t=this.props,r=t.defaultValue,n=t.disabled,o=t.isIncomplete,a=t.isInvalid,i=t.onBlur,d=t.onChange,c=t.onFocus,y=t.onInput,v=t.name,h=t.pattern,_=t.refCallback,g=t.required,j=t.type,w=t.ariaLabel,P=t.value,E=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},b(t,f)),I=this.context,x=(void 0===j||["text","number","password","email","search","tel","url","hidden"].includes(j))&&O("form-input",{"form-error":a},{"form-incomplete":o&&g&&!a},I.className),q=(0,u.default)(x,E.className);return E&&Object.prototype.hasOwnProperty.call(E,"aria-label")?e=w||E["aria-label"]:w&&(e=w),E["aria-label"]=e,g&&(E["aria-required"]="true"),void 0!==P?E.value=P:void 0!==r&&(E.defaultValue=r),E.placeholder&&!E.showMpageFusionPlaceholder&&(E.placeholder=null),delete E.showMpageFusionPlaceholder,l.default.createElement("input",s({},E,{ref:function(e){_&&_(e)},name:v,type:j,pattern:h,onBlur:i,onChange:d,onFocus:c,onInput:y,disabled:n,required:g,className:q}))}}],r&&y(t.prototype,r),n&&y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l.default.Component);P.propTypes=j,P.defaultProps=w,P.contextType=i.default,P.isInput=!0;t.default=P},65283:function(e,t,r){"use strict";r.r(t),t.default={"clinical-lowlight-theme":"Fieldset-module__clinical-lowlight-theme___j+Wn3","orion-fusion-theme":"Fieldset-module__orion-fusion-theme___SXBiS",fieldset:"Fieldset-module__fieldset___Wlpg-","fieldset-required":"Fieldset-module__fieldset-required___59GHf",legend:"Fieldset-module__legend___Nas0D","legend-visually-hidden":"Fieldset-module__legend-visually-hidden___DRQXh","help-text":"Fieldset-module__help-text___hL4PH","fieldset-children":"Fieldset-module__fieldset-children___Js-NM"}},95334:function(e,t,r){"use strict";r.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___2+uSg","orion-fusion-theme":"Input-module__orion-fusion-theme___BNJE+","form-input":"Input-module__form-input___CHQ2i","form-error":"Input-module__form-error___0OFqM","form-incomplete":"Input-module__form-incomplete___W7v5s"}},25557:function(e,t,r){var n=r(12698),l=r(62227),o=l;o.v1=n,o.v4=l,e.exports=o},17353:function(e){for(var t=[],r=0;r<256;++r)t[r]=(r+256).toString(16).substr(1);e.exports=function(e,r){var n=r||0,l=t;return[l[e[n++]],l[e[n++]],l[e[n++]],l[e[n++]],"-",l[e[n++]],l[e[n++]],"-",l[e[n++]],l[e[n++]],"-",l[e[n++]],l[e[n++]],"-",l[e[n++]],l[e[n++]],l[e[n++]],l[e[n++]],l[e[n++]],l[e[n++]]].join("")}},90846:function(e){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var r=new Uint8Array(16);e.exports=function(){return t(r),r}}else{var n=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n}}},12698:function(e,t,r){var n,l,o=r(90846),u=r(17353),a=0,i=0;e.exports=function(e,t,r){var d=t&&r||0,f=t||[],c=(e=e||{}).node||n,s=void 0!==e.clockseq?e.clockseq:l;if(null==c||null==s){var p=o();null==c&&(c=n=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==s&&(s=l=16383&(p[6]<<8|p[7]))}var m=void 0!==e.msecs?e.msecs:(new Date).getTime(),b=void 0!==e.nsecs?e.nsecs:i+1,y=m-a+(b-i)/1e4;if(y<0&&void 0===e.clockseq&&(s=s+1&16383),(y<0||m>a)&&void 0===e.nsecs&&(b=0),b>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=m,i=b,l=s;var v=(1e4*(268435455&(m+=122192928e5))+b)%4294967296;f[d++]=v>>>24&255,f[d++]=v>>>16&255,f[d++]=v>>>8&255,f[d++]=255&v;var h=m/4294967296*1e4&268435455;f[d++]=h>>>8&255,f[d++]=255&h,f[d++]=h>>>24&15|16,f[d++]=h>>>16&255,f[d++]=s>>>8|128,f[d++]=255&s;for(var _=0;_<6;++_)f[d+_]=c[_];return t||u(f)}},62227:function(e,t,r){var n=r(90846),l=r(17353);e.exports=function(e,t,r){var o=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var u=(e=e||{}).random||(e.rng||n)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,t)for(var a=0;a<16;++a)t[o+a]=u[a];return t||l(u)}}}]);