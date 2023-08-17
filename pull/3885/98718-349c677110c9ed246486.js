"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[98718],{5893:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Dave Smith"},{key:"unique-0-1",title:"123 Adams Drive"},{key:"unique-0-2",title:"123-456-7890"},{key:"unique-0-3",title:"dave.smith@gmail.com"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Michael Smith"},{key:"unique-1-1",title:"345 Raymond Road"},{key:"unique-1-2",title:"111-222-3333"},{key:"unique-1-3",title:"michael.smith@gmail.com"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Jack Smith"},{key:"unique-2-1",title:"567 Drive Street"},{key:"unique-2-2",title:"222-333-4444"},{key:"unique-2-3",title:"jack.smith@gmail.com"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Tom Smith"},{key:"unique-3-1",title:"789 Bay Road"},{key:"unique-3-2",title:"555-666-7777"},{key:"unique-3-3",title:"tom.smith@gmail.com"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Paul Smith"},{key:"unique-4-1",title:"123 Adams Drive"},{key:"unique-4-2",title:"777-888-9999"},{key:"unique-4-3",title:"paul.smith@gmail.com"}]}];t.default=r},98718:function(e,t,r){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=c(r(67294)),o=c(r(12810)),u=(n=r(5893))&&n.__esModule?n:{default:n};function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var l,n,i,o,u=[],a=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(l=i.call(r)).done)&&(u.push(l.value),u.length!==t);a=!0);}catch(e){c=!0,n=e}finally{try{if(!a&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw n}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,l=new Array(t);r<t;r++)l[r]=e[r];return l}var d=function(){var e,t=y((0,i.useState)([]),2),r=t[0],l=t[1],n=y((0,i.useState)(!1),2),a=n[0],c=n[1],s=u.default.length,d=function(e,t){e.preventDefault();var n=o.Utils.toggleArrayValue(r,t.key),i=n.length===s;c(a?!i:i),l(i?[]:n)},f=function(e){if(r.length){var t=r.indexOf(e)>=0;return a?!t:t}return a},m="empty";return r.length?m="indeterminate":a&&(m="checked"),i.default.createElement(o.default,{summaryId:"check-table",summary:"This table has rows that can be batch selected with the checkbox or disclosed for further details.",numberOfColumns:4,cellPaddingStyle:"standard",rowStyle:"disclose",checkStyle:"toggle",dividerStyle:"horizontal",headerData:{selectAllColumn:{checkStatus:m,checkLabel:"Batch Selection",onCheckAction:function(){c(!!r.length||!a),l([])}},cells:[{key:"cell-0",id:"toggle-0",children:"Name"},{key:"cell-1",id:"toggle-1",children:"Address"},{key:"cell-2",id:"toggle-2",children:"Phone Number"},{key:"cell-3",id:"toggle-3",children:"Email Id"}]},bodyData:[{rows:(e=u.default,e.map((function(e){return{key:(t=e).key,cells:(r=t.cells,r.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)}))),toggleAction:{metaData:{key:t.key},onToggle:d,toggleLabel:t.toggleText,isToggled:f(t.key)},discloseAction:{discloseLabel:t.discloseText,discloseCellIndex:t.primaryIndex}};var t,r})))}]})};t.default=d}}]);