"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[33634],{33634:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(r(67294)),a=u(r(1893));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var c=a?Object.getOwnPropertyDescriptor(e,u):null;c&&(c.get||c.set)?Object.defineProperty(l,u,c):l[u]=e[u]}return l.default=e,r&&r.set(e,l),l}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a,o,u=[],c=!0,i=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){i=!0,l=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(i)throw l}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f=function(){var e=c((0,l.useState)({selectedKey:null}),2),t=e[0],r=e[1],n=function(e,n){t.selectedKey!==n.key&&r({selectedKey:n.key})};return l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{id:"list-help"},"Select a patient from the list to view patient details."),l.default.createElement(a.default,{ariaDescribedBy:"list-help",role:"listbox"},l.default.createElement(a.Item,{key:"1",isSelectable:!0,isSelected:"1"===t.selectedKey,metaData:{key:"1"},onSelect:n},l.default.createElement("p",null,"John Smith")),l.default.createElement(a.Item,{key:"2",isSelectable:!0,isSelected:"2"===t.selectedKey,metaData:{key:"2"},onSelect:n},l.default.createElement("p",null,"Mary Jones")),l.default.createElement(a.Item,{key:"3",isSelectable:!0,isSelected:"3"===t.selectedKey,metaData:{key:"3"},onSelect:n},l.default.createElement("p",null,"Sam Brown"))))};t.default=f}}]);