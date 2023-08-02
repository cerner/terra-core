"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[60778],{68319:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var l=o(r(67294)),a=o(r(45697)),u=o(r(47166)),A=o(r(1947)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function o(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,t||"default");if("object"!==n(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=u.default.bind(A.default),q={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},m=function(e){var t=e.fitStart,r=e.fill,n=e.fitEnd,a=e.align,u=e.alignFitStart,A=e.alignFill,o=e.alignFitEnd,f=e.fitStartAttributes,d=e.fillAttributes,q=e.fitEndAttributes,m=b(e,i),O=s({},f),V=s({},d),y=s({},q);return l.default.createElement("span",c({},m,{className:p("arrange",m.className)}),l.default.createElement("span",c({},O,{className:p("fit",a||u,O.className,"fit-block")}),t),l.default.createElement("span",c({},V,{className:p("fill",a||A,V.className,"fill-block")}),r),l.default.createElement("span",c({},y,{className:p("fit",a||o,y.className)}),n))};m.propTypes=q;var O=m;t.default=O},60778:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(67294)),l=i(r(68319)),a=i(r(47166)),u=i(r(52177)),A=i(r(98326));function i(e){return e&&e.__esModule?e:{default:e}}var o=a.default.bind(A.default),c=n.default.createElement("img",{className:o("image-wrapper"),height:"150",width:"300",src:"data:image/png;base64,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",alt:"placeholder"}),f=n.default.createElement("div",{className:o("text-wrapper")},"Sample text"),s=function(){return n.default.createElement("div",null,n.default.createElement(u.default,{colorClass:o(["attention"]),visuallyHiddenText:"Status Attention"},n.default.createElement(l.default,{id:"statusArrange",fitStart:c,fill:f,alignFill:"center"})))};t.default=s},52177:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(67294)),l=o(r(45697)),a=o(r(47166)),u=o(r(74754)),A=o(r(78511)),i=["children","visuallyHiddenText","colorClass"];function o(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.default.bind(A.default),d={children:l.default.node.isRequired,visuallyHiddenText:l.default.string,colorClass:l.default.string},b=function(e){var t=e.children,r=e.visuallyHiddenText,l=e.colorClass,a=f(e,i);return n.default.createElement("div",c({},a,{className:s("status",l,a.className)}),r&&n.default.createElement(u.default,{text:r}),t)};b.propTypes=d;var p=b;t.default=p},1947:function(e,t,r){r.r(t),t.default={arrange:"Arrange-module__arrange___tayob",fill:"Arrange-module__fill___JGXgw",fit:"Arrange-module__fit___BodSy",center:"Arrange-module__center___lVVfc",bottom:"Arrange-module__bottom___TiTgB",stretch:"Arrange-module__stretch___BFg42",default:"Arrange-module__default___6XJU-"}},98326:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"colors-module__clinical-lowlight-theme___2l3J0","orion-fusion-theme":"colors-module__orion-fusion-theme___swP6I",attention:"colors-module__attention___yVjpx",success:"colors-module__success___cXrOC",info:"colors-module__info___mTXnj","image-wrapper":"colors-module__image-wrapper___SHgK0","text-wrapper":"colors-module__text-wrapper___vMcb+"}},78511:function(e,t,r){r.r(t),t.default={status:"Status-module__status___1FFzm"}}}]);