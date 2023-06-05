"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[38030],{38030:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=_(o(67294)),i=_(o(47166)),r=_(o(47316)),l=_(o(70618));function _(e){return e&&e.__esModule?e:{default:e}}var u=i.default.bind(l.default),f=function(){return n.default.createElement("div",null,n.default.createElement(r.default,{id:"textVisualProps",fontSize:24,colorClass:u(["info"]),isItalic:!0,weight:200},"All Visual Props Set"))};t.default=f},47316:function(e,t,o){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextWeight=t.TextFontSize=void 0;var i=a(o(67294)),r=a(o(45697)),l=a(o(94184)),_=a(o(47166)),u=a(o(50026)),f=a(o(48560)),s=["children","isVisuallyHidden","isItalic","fontSize","weight","isWordWrapped","colorClass"];function a(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},c.apply(this,arguments)}function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function m(e,t,o){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,t||"default");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var b=_.default.bind(f.default);t.TextFontSize={10:10,12:12,14:14,16:16,18:18,20:20,24:24,32:32,36:36,46:46,50:50,56:56,64:64,72:72,92:92,100:100};t.TextWeight={200:200,300:300,400:400,700:700};var h={children:r.default.node.isRequired,isItalic:r.default.bool,isVisuallyHidden:r.default.bool,isWordWrapped:r.default.bool,fontSize:r.default.oneOf([10,12,14,16,18,20,24,32,36,46,50,56,64,72,92,100]),weight:r.default.oneOf([200,300,400,700]),colorClass:r.default.string},y=function(e){var t=e.children,o=e.isVisuallyHidden,n=e.isItalic,r=e.fontSize,_=e.weight,f=e.isWordWrapped,a=e.colorClass,h=p(e,s),y=i.default.useContext(u.default),x=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach((function(t){m(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},h),g=(0,l.default)(b(["text",{"inherit-color":!a},{italic:n},{"word-wrap":f},{"visually-hidden":o},m({},"font-size-".concat(r),r),m({},"font-weight-".concat(_),_),a,y.className]),x.className);return i.default.createElement("span",c({},x,{className:g}),t)};y.propTypes=h,y.defaultProps={isItalic:!1,isVisuallyHidden:!1,isWordWrapped:!1};var x=y;t.default=x},70618:function(e,t,o){o.r(t),t.default={"clinical-lowlight-theme":"colors-module__clinical-lowlight-theme___AuKhj","orion-fusion-theme":"colors-module__orion-fusion-theme___19il2",default:"colors-module__default___boTN-",attention:"colors-module__attention___Onu3b",success:"colors-module__success___8biGQ",info:"colors-module__info___4lHUj"}},48560:function(e,t,o){o.r(t),t.default={"clinical-lowlight-theme":"Text-module__clinical-lowlight-theme___VoTxP","orion-fusion-theme":"Text-module__orion-fusion-theme___HMvWh",text:"Text-module__text___wt-Kb","inherit-color":"Text-module__inherit-color___IiGY2",italic:"Text-module__italic___xBRzs","word-wrap":"Text-module__word-wrap___4EtbQ","font-size-100":"Text-module__font-size-100___cSkmn","font-size-92":"Text-module__font-size-92___-bp31","font-size-72":"Text-module__font-size-72___GIFEX","font-size-64":"Text-module__font-size-64___jGYOW","font-size-56":"Text-module__font-size-56___K671c","font-size-50":"Text-module__font-size-50___46cw1","font-size-46":"Text-module__font-size-46___bikH8","font-size-36":"Text-module__font-size-36___hs4Ss","font-size-32":"Text-module__font-size-32___kVfBb","font-size-24":"Text-module__font-size-24___NYnua","font-size-20":"Text-module__font-size-20___ekLZ0","font-size-18":"Text-module__font-size-18___H2ZcD","font-size-16":"Text-module__font-size-16___1g+2-","font-size-14":"Text-module__font-size-14___nBMXv","font-size-12":"Text-module__font-size-12___kiM7-","font-size-10":"Text-module__font-size-10___19QaE","font-weight-200":"Text-module__font-weight-200___9G-Nm","font-weight-300":"Text-module__font-weight-300___TBSBI","font-weight-400":"Text-module__font-weight-400___K1kpT","font-weight-700":"Text-module__font-weight-700___FwUmR","visually-hidden":"Text-module__visually-hidden___cAP80","font-stack":"Text-module__font-stack___uOEX1"}}}]);