"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[56985],{56985:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(n(67294)),a=i(n(47166)),u=f(n(30420)),l=i(n(21651));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(o,u,l):o[u]=e[u]}return o.default=e,n&&n.set(e,o),o}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,u,l=[],i=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=a.default.bind(l.default);t.default=function(){var e=p((0,o.useState)(" No option clicked"),2),t=e[0],n=e[1];return o.default.createElement("div",{className:y("container-spacing-wrapper")},o.default.createElement(u.default,{label:"Dropdown",id:"dropdown"},o.default.createElement(u.Item,{id:"opt1",label:"1st",metaData:{key:"1st Option"},onSelect:function(e,t){n(" ".concat(t.key))}}),o.default.createElement(u.Item,{id:"opt2",label:"2nd",metaData:{key:"2nd Option"},onSelect:function(e,t){n(" ".concat(t.key))}}),o.default.createElement(u.Item,{id:"opt3",label:"3rd",metaData:{key:"3rd Option"},onSelect:function(e,t){n(" ".concat(t.key))}})),o.default.createElement("p",null,"MetaData of :",t))}},21651:function(e,t,n){n.r(t),t.default={"button-spacing-wrapper":"ExtraSpacing-module__button-spacing-wrapper___Nac23","container-spacing-wrapper":"ExtraSpacing-module__container-spacing-wrapper___x-wix","container-min-size":"ExtraSpacing-module__container-min-size___nT0qt"}}}]);