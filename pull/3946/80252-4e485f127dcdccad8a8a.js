"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[80252],{80252:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=r(t)&&"function"!=typeof t)return{default:t};var n=c(e);if(n&&n.has(t))return n.get(t);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var i=o?Object.getOwnPropertyDescriptor(t,u):null;i&&(i.get||i.set)?Object.defineProperty(a,u,i):a[u]=t[u]}return a.default=t,n&&n.set(t,a),a}(n(67294)),o=l(n(47166)),u=n(30420),i=l(n(21651));function l(t){return t&&t.__esModule?t:{default:t}}function c(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(c=function(t){return t?n:e})(t)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o,u,i=[],l=!0,c=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(i.push(r.value),i.length!==e);l=!0);}catch(t){c=!0,a=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw a}}return i}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var y=o.default.bind(i.default);e.default=function(){var t=f((0,a.useState)(" No option clicked"),2),e=t[0],n=t[1];return a.default.createElement("div",{className:y("container-spacing-wrapper")},a.default.createElement(u.SplitButton,{primaryOptionLabel:"Split",metaData:{key:"primary-button"},onSelect:function(t,e){n(" ".concat(e.key))},id:"split"},a.default.createElement(u.Item,{id:"opt1",label:"1st",metaData:{key:"1st Option"},onSelect:function(t,e){n(" ".concat(e.key))}}),a.default.createElement(u.Item,{id:"opt2",label:"2nd",metaData:{key:"2nd Option"},onSelect:function(t,e){n(" ".concat(e.key))}}),a.default.createElement(u.Item,{id:"opt3",label:"3rd",metaData:{key:"3rd Option"},onSelect:function(t,e){n(" ".concat(e.key))}})),a.default.createElement("p",null,"MetaData of :",e))}},21651:function(t,e,n){n.r(e),e.default={"button-spacing-wrapper":"ExtraSpacing-module__button-spacing-wrapper___Nac23","container-spacing-wrapper":"ExtraSpacing-module__container-spacing-wrapper___x-wix","container-min-size":"ExtraSpacing-module__container-min-size___nT0qt"}}}]);