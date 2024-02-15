"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[62252],{62252:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=r(t(67294)),n=r(t(85445));function r(e){return e&&e.__esModule?e:{default:e}}l.default=function(){return i.default.createElement("div",null,i.default.createElement(n.default,{id:"heading-level-1",level:1},"Level 1"),i.default.createElement(n.default,{id:"heading-level-2",level:2},"Level 2"),i.default.createElement(n.default,{id:"heading-level-3",level:3},"Level 3"),i.default.createElement(n.default,{id:"heading-level-4",level:4},"Level 4"),i.default.createElement(n.default,{id:"heading-level-5",level:5},"Level 5"),i.default.createElement(n.default,{id:"heading-level-6",level:6},"Level 6"))}},85445:function(e,l,t){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=l.HeadingWeight=l.HeadingSize=l.HeadingLevel=void 0;var n=o(t(67294)),r=o(t(45697)),a=o(t(19845)),u=o(t(13209)),d=["level","children","isVisuallyHidden","isItalic","size","weight","colorClass"];function o(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},_.apply(this,arguments)}function c(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);l&&(i=i.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,i)}return t}function f(e,l,t){var n;return n=function(e,l){if("object"!=i(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,l||"default");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(e)}(l,"string"),(l="symbol"==i(n)?n:String(n))in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function s(e,l){if(null==e)return{};var t,i,n=function(e,l){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var g=a.default.bind(u.default),v=(l.HeadingLevel={1:1,2:2,3:3,4:4,5:5,6:6},l.HeadingSize={MINI:"mini",TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"},l.HeadingWeight={200:200,400:400,700:700},{children:r.default.node.isRequired,level:r.default.oneOf([1,2,3,4,5,6]).isRequired,isItalic:r.default.bool,isVisuallyHidden:r.default.bool,size:r.default.oneOf(["mini","tiny","small","medium","large","huge"]),weight:r.default.oneOf([200,400,700]),colorClass:r.default.string}),m=function(e){var l=e.level,t=e.children,i=e.isVisuallyHidden,r=e.isItalic,a=e.size,u=e.weight,o=e.colorClass,v=function(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?c(Object(t),!0).forEach((function(l){f(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}({},s(e,d)),m=g(["heading",{italic:r},{"visually-hidden":i},f({},"level-".concat(l),l),f({},"size-".concat(a),a),f({},"weight-".concat(u),u),o,v.className]),y="h".concat(l);return n.default.createElement(y,_({},v,{className:m}),t)};m.propTypes=v,m.defaultProps={isItalic:!1,isVisuallyHidden:!1,weight:700};l.default=m},13209:function(e,l,t){t.r(l),l.default={heading:"Heading-module__heading___hVNCG",italic:"Heading-module__italic___UBJcf","level-1":"Heading-module__level-1___tlUDs","level-2":"Heading-module__level-2___qKMbC","level-3":"Heading-module__level-3___v7cG-","level-4":"Heading-module__level-4___jl+xM","level-5":"Heading-module__level-5___x9Rpz","level-6":"Heading-module__level-6___ZzHFY","size-huge":"Heading-module__size-huge___DpN3-","size-large":"Heading-module__size-large___ilzJw","size-medium":"Heading-module__size-medium___SNQc5","size-small":"Heading-module__size-small___VFZjh","size-tiny":"Heading-module__size-tiny___JKH38","size-mini":"Heading-module__size-mini___XGXdZ","weight-200":"Heading-module__weight-200___BNjDD","weight-400":"Heading-module__weight-400___bdSJY","weight-700":"Heading-module__weight-700___NQoBX","visually-hidden":"Heading-module__visually-hidden___-QFkc"}}}]);