"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[42356],{5893:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Dave Smith"},{key:"unique-0-1",title:"123 Adams Drive"},{key:"unique-0-2",title:"123-456-7890"},{key:"unique-0-3",title:"dave.smith@gmail.com"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Michael Smith"},{key:"unique-1-1",title:"345 Raymond Road"},{key:"unique-1-2",title:"111-222-3333"},{key:"unique-1-3",title:"michael.smith@gmail.com"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Jack Smith"},{key:"unique-2-1",title:"567 Drive Street"},{key:"unique-2-2",title:"222-333-4444"},{key:"unique-2-3",title:"jack.smith@gmail.com"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Tom Smith"},{key:"unique-3-1",title:"789 Bay Road"},{key:"unique-3-2",title:"555-666-7777"},{key:"unique-3-3",title:"tom.smith@gmail.com"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Paul Smith"},{key:"unique-4-1",title:"123 Adams Drive"},{key:"unique-4-2",title:"777-888-9999"},{key:"unique-4-3",title:"paul.smith@gmail.com"}]}]},42356:function(e,t,l){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n=c(l(67294)),o=c(l(12810)),u=(i=l(5893))&&i.__esModule?i:{default:i};function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(a=function(e){return e?l:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var l=a(t);if(l&&l.has(e))return l.get(e);var i={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(i,o,u):i[o]=e[o]}return i.default=e,l&&l.set(e,i),i}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var r,i,n,o,u=[],a=!0,c=!1;try{if(n=(l=l.call(e)).next,0===t){if(Object(l)!==l)return;a=!1}else for(;!(a=(r=n.call(l)).done)&&(u.push(r.value),u.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{if(!a&&null!=l.return&&(o=l.return(),Object(o)!==o))return}finally{if(c)throw i}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,r=new Array(t);l<t;l++)r[l]=e[l];return r}t.default=function(){var e,t=y((0,n.useState)([]),2),l=t[0],r=t[1],i=function(e,t){e.preventDefault(),r(o.Utils.toggleArrayValue(l,t.key))};return n.default.createElement(o.default,{summaryId:"example-multi-select",summary:"This table shows an implementation of multiple row selection.","aria-multiselectable":!0,rowStyle:"toggle",numberOfColumns:4,cellPaddingStyle:"standard",dividerStyle:"both",headerData:{selectAllColumn:{checkLabel:"Multi Selection"},cells:[{key:"cell-0",id:"toggle-0",children:"Name"},{key:"cell-1",id:"toggle-1",children:"Address"},{key:"cell-2",id:"toggle-2",children:"Phone Number"},{key:"cell-3",id:"toggle-3",children:"Email Id"}]},bodyData:[{rows:(e=u.default,e.map((function(e){return{key:(t=e).key,cells:(r=t.cells,r.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)}))),isDisabled:!o.Utils.canToggleArrayValue(3,l,t.key),toggleAction:{metaData:{key:t.key},onToggle:i,isToggled:l.indexOf(t.key)>=0,toggleLabel:t.toggleText}};var t,r})))}]})}}}]);