"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[65197],{96054:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}(r(67294)),a=c(r(43868)),i=c(r(19845)),l=c(r(92226)),u=c(r(6892));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=i.default.bind(u.default);t.default=function(){var e=s((0,o.useState)(0),2),t=e[0],r=e[1],n=s((0,o.useState)(!1),2),i=n[0],u=n[1];return o.default.createElement(o.default.Fragment,null,o.default.createElement("p",null,"Alerts are responsive to their container width."),!i&&o.default.createElement(l.default,{id:"dismissibleAlert",type:"success",onDismiss:function(){return u(!i)}},"This is a success alert. It is configured to be dismissible. Click on the Dismiss button to dismiss the alert."),o.default.createElement(l.default,{type:"info"}),o.default.createElement("div",{className:p("content-wrapper")},o.default.createElement("p",null,"Alerts with actions in a small container that will cause the action section of the alert to render below the message instead of beside it."),o.default.createElement(l.default,{id:"actionAlert",type:"warning",action:o.default.createElement(a.default,{text:"Action",variant:"emphasis",onClick:function(){r(t+1)}})},"This is a warning. It is configured with a custom Action button."),o.default.createElement(l.default,{id:"noActionsAlert",type:"info"},"This is an info alert")))}},6892:function(e,t,r){r.r(t),t.default={"content-wrapper":"AlertTestCommon__content-wrapper___BGmNY"}}}]);