"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[83806],{94657:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,u=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var r=l(e);if(r&&r.has(t))return r.get(t);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var i=u?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(o,a,i):o[a]=t[a]}o.default=t,r&&r.set(t,o);return o}(r(67294)),a=(o=r(44618))&&o.__esModule?o:{default:o};function l(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(l=function(t){return t?r:e})(t)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,u,a,l=[],i=!0,f=!1;try{if(u=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=u.call(r)).done)&&(l.push(n.value),l.length!==e);i=!0);}catch(t){f=!0,o=t}finally{try{if(!i&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(f)throw o}}return l}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}e.default=function(){var t=i((0,u.useState)(!1),2),e=t[0],r=t[1];return u.default.createElement(a.default,{id:"programmaticDisabledButtonGroup"},u.default.createElement(a.default.Button,{isDisabled:e,text:e?"Disabled":"Click to Disable",id:"programmaticDisabledButton",key:"test-example-button",onClick:function(){r(!e)}}))}}}]);