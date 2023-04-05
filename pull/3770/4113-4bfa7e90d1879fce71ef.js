"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[4113],{4113:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(i(67294)),n=r(i(85445));function r(e){return e&&e.__esModule?e:{default:e}}var a=function(){return l.default.createElement("div",null,l.default.createElement(n.default,{id:"heading-weight-700",level:1,weight:700},"700 Weight"),l.default.createElement(n.default,{id:"heading-weight-400",level:1,weight:400},"400 Weight"),l.default.createElement(n.default,{id:"heading-weight-200",level:1,weight:200},"200 Weight"))};t.default=a},85445:function(e,t,i){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.HeadingWeight=t.HeadingSize=t.HeadingLevel=void 0;var n=d(i(67294)),r=d(i(45697)),a=d(i(47166)),o=d(i(13209)),u=["level","children","isVisuallyHidden","isItalic","size","weight","colorClass"];function d(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},_.apply(this,arguments)}function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function s(e,t,i){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function f(e,t){if(null==e)return{};var i,l,n=function(e,t){if(null==e)return{};var i,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)i=r[l],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)i=r[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var g=a.default.bind(o.default);t.HeadingLevel={1:1,2:2,3:3,4:4,5:5,6:6};t.HeadingSize={MINI:"mini",TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};t.HeadingWeight={200:200,400:400,700:700};var m={children:r.default.node.isRequired,level:r.default.oneOf([1,2,3,4,5,6]).isRequired,isItalic:r.default.bool,isVisuallyHidden:r.default.bool,size:r.default.oneOf(["mini","tiny","small","medium","large","huge"]),weight:r.default.oneOf([200,400,700]),colorClass:r.default.string},v=function(e){var t=e.level,i=e.children,l=e.isVisuallyHidden,r=e.isItalic,a=e.size,o=e.weight,d=e.colorClass,m=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},f(e,u)),v=g(["heading",{italic:r},{"visually-hidden":l},s({},"level-".concat(t),t),s({},"size-".concat(a),a),s({},"weight-".concat(o),o),d,m.className]),h="h".concat(t);return n.default.createElement(h,_({},m,{className:v}),i)};v.propTypes=m,v.defaultProps={isItalic:!1,isVisuallyHidden:!1,weight:700};var h=v;t.default=h},13209:function(e,t,i){i.r(t),t.default={heading:"Heading-module__heading___hVNCG",italic:"Heading-module__italic___UBJcf","level-1":"Heading-module__level-1___tlUDs","level-2":"Heading-module__level-2___qKMbC","level-3":"Heading-module__level-3___v7cG-","level-4":"Heading-module__level-4___jl+xM","level-5":"Heading-module__level-5___x9Rpz","level-6":"Heading-module__level-6___ZzHFY","size-huge":"Heading-module__size-huge___DpN3-","size-large":"Heading-module__size-large___ilzJw","size-medium":"Heading-module__size-medium___SNQc5","size-small":"Heading-module__size-small___VFZjh","size-tiny":"Heading-module__size-tiny___JKH38","size-mini":"Heading-module__size-mini___XGXdZ","weight-200":"Heading-module__weight-200___BNjDD","weight-400":"Heading-module__weight-400___bdSJY","weight-700":"Heading-module__weight-700___NQoBX","visually-hidden":"Heading-module__visually-hidden___-QFkc"}}}]);