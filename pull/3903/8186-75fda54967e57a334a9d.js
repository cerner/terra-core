"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[8186],{8186:function(e,i,t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var l=r(t(67294)),n=r(t(85445));function r(e){return e&&e.__esModule?e:{default:e}}var a=function(){return l.default.createElement("div",null,l.default.createElement(n.default,{id:"heading-size-huge",level:1,size:"huge"},"Huge"),l.default.createElement(n.default,{id:"heading-size-large",level:1,size:"large"},"Large"),l.default.createElement(n.default,{id:"heading-size-medium",level:1,size:"medium"},"Medium"),l.default.createElement(n.default,{id:"heading-size-small",level:1,size:"small"},"Small"),l.default.createElement(n.default,{id:"heading-size-tiny",level:1,size:"tiny"},"Tiny"),l.default.createElement(n.default,{id:"heading-size-mini",level:1,size:"mini"},"Mini"))};i.default=a},85445:function(e,i,t){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=i.HeadingWeight=i.HeadingSize=i.HeadingLevel=void 0;var n=o(t(67294)),r=o(t(45697)),a=o(t(47166)),u=o(t(13209)),d=["level","children","isVisuallyHidden","isItalic","size","weight","colorClass"];function o(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},s.apply(this,arguments)}function _(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);i&&(l=l.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,l)}return t}function c(e,i,t){return(i=function(e){var i=function(e,i){if("object"!==l(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,i||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(e,"string");return"symbol"===l(i)?i:String(i)}(i))in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function f(e,i){if(null==e)return{};var t,l,n=function(e,i){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var g=a.default.bind(u.default);i.HeadingLevel={1:1,2:2,3:3,4:4,5:5,6:6};i.HeadingSize={MINI:"mini",TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};i.HeadingWeight={200:200,400:400,700:700};var m={children:r.default.node.isRequired,level:r.default.oneOf([1,2,3,4,5,6]).isRequired,isItalic:r.default.bool,isVisuallyHidden:r.default.bool,size:r.default.oneOf(["mini","tiny","small","medium","large","huge"]),weight:r.default.oneOf([200,400,700]),colorClass:r.default.string},v=function(e){var i=e.level,t=e.children,l=e.isVisuallyHidden,r=e.isItalic,a=e.size,u=e.weight,o=e.colorClass,m=function(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?_(Object(t),!0).forEach((function(i){c(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}({},f(e,d)),v=g(["heading",{italic:r},{"visually-hidden":l},c({},"level-".concat(i),i),c({},"size-".concat(a),a),c({},"weight-".concat(u),u),o,m.className]),y="h".concat(i);return n.default.createElement(y,s({},m,{className:v}),t)};v.propTypes=m,v.defaultProps={isItalic:!1,isVisuallyHidden:!1,weight:700};var y=v;i.default=y},13209:function(e,i,t){t.r(i),i.default={heading:"Heading-module__heading___hVNCG",italic:"Heading-module__italic___UBJcf","level-1":"Heading-module__level-1___tlUDs","level-2":"Heading-module__level-2___qKMbC","level-3":"Heading-module__level-3___v7cG-","level-4":"Heading-module__level-4___jl+xM","level-5":"Heading-module__level-5___x9Rpz","level-6":"Heading-module__level-6___ZzHFY","size-huge":"Heading-module__size-huge___DpN3-","size-large":"Heading-module__size-large___ilzJw","size-medium":"Heading-module__size-medium___SNQc5","size-small":"Heading-module__size-small___VFZjh","size-tiny":"Heading-module__size-tiny___JKH38","size-mini":"Heading-module__size-mini___XGXdZ","weight-200":"Heading-module__weight-200___BNjDD","weight-400":"Heading-module__weight-400___bdSJY","weight-700":"Heading-module__weight-700___NQoBX","visually-hidden":"Heading-module__visually-hidden___-QFkc"}}}]);