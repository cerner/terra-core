"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[70749],{70749:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var u={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(u,a,l):u[a]=e[a]}u.default=e,n&&n.set(e,u);return u}(n(67294)),o=l(n(43868)),a=l(n(28669));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,u,o,a,l=[],i=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);i=!0);}catch(e){c=!0,u=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw u}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(){var e=c((0,u.useState)(""),2),t=e[0],n=e[1],r=c((0,u.useState)(""),2),l=r[0],i=r[1],f=c((0,u.useState)(""),2),s=f[0],p=f[1],d=(0,u.useRef)(null);return u.default.createElement("div",null,u.default.createElement("div",null," Minimum Search Length is 3 "),u.default.createElement(a.default,{inputRef:!0,id:"searchfield",onSearch:function(e){n(e),i("Search Text: ")},onInvalidSearch:function(e){n(e),i("INVALID Search Text: ")},onChange:function(e,t){p(t)},onInput:function(e){p(e.target.value)},minimumSearchTextLength:3,value:s,inputRefCallback:function(e){d.current=e}}),u.default.createElement(o.default,{text:"Set search field text",onClick:function(){d.current&&setTimeout((function(){var e;d.current.value="IpsumLorem","function"==typeof Event?e=new Event("input",{bubbles:!0,cancelable:!1}):(e=document.createEvent("Event")).initEvent("input",!0,!1),d.current.dispatchEvent(e)}),1e3)},id:"search-field-set-text-button"}),u.default.createElement("div",{id:"search-callback-text"},l,t))};t.default=s}}]);