"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[59777],{59777:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=u?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(o,l,a):o[l]=e[l]}o.default=e,r&&r.set(e,o);return o}(r(67294)),u=c(r(47166)),l=r(30420),a=c(r(83521));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u,l,a=[],c=!0,i=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=u.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b=u.default.bind(a.default),y=function(){var e=f((0,o.useState)("green"),2),t=e[0],r=e[1];return o.default.createElement("div",{className:b("background",t)},o.default.createElement(l.SplitButton,{primaryOptionLabel:"Gray",onSelect:function(){r("gray")}},o.default.createElement(l.Item,{label:"Red",onSelect:function(){r("red")},id:"red"}),o.default.createElement(l.Item,{label:"White",onSelect:function(){r("white")},id:"white"}),o.default.createElement(l.Item,{label:"Blue",onSelect:function(){r("blue")},id:"blue"})))};t.default=y},83521:function(e,t,r){r.r(t),t.default={background:"CallbackButtons-module__background___yEAg9",green:"CallbackButtons-module__green___ZzjrJ",gray:"CallbackButtons-module__gray___Suj7Y",red:"CallbackButtons-module__red___SgNez",white:"CallbackButtons-module__white___w0Uzt",blue:"CallbackButtons-module__blue___c6PxQ"}}}]);