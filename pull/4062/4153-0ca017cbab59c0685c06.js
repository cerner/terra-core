"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[4153],{24748:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=l?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(o,u,i):o[u]=e[u]}return o.default=e,r&&r.set(e,o),o}(r(96540)),u=(o=r(22745))&&o.__esModule?o:{default:o};function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l,u,a=[],i=!0,f=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=l.call(r)).done)&&(a.push(n.value),a.length!==t);i=!0);}catch(e){f=!0,o=e}finally{try{if(!i&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(f)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(){var e=i((0,l.useState)(!1),2),t=e[0],r=e[1],n=i((0,l.useState)(!1),2),o=n[0],a=n[1];return l.default.createElement("div",{style:{width:"400px",height:"200px",background:"gray",margin:"10px",overflow:"scroll"}},l.default.createElement("div",{style:{width:"600px",height:"400px"}},l.default.createElement(u.default,{text:"Closed Section Header 1",isTitleSticky:!0,onClick:function(){r(!t)},isOpen:t,boundedWidth:"350"}),l.default.createElement("br",null),l.default.createElement(u.default,{text:"Closed Section Header 2",isTitleSticky:!0,onClick:function(){a(!o)},isOpen:o,boundedWidth:"350"}),l.default.createElement("br",null),l.default.createElement(u.default,{text:"Section Header 3",isTitleSticky:!0})))}}}]);