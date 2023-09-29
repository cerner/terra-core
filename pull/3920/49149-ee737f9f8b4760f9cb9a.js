"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[49149],{49149:function(e,l,t){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=u(l);if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(t(67294)),a=d(t(47166)),i=d(t(65318)),o=d(t(83216));function d(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,t=new WeakMap;return(u=function(e){return e?t:l})(e)}function f(e,l){return function(e){if(Array.isArray(e))return e}(e)||function(e,l){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,n,a,i,o=[],d=!0,u=!1;try{if(a=(t=t.call(e)).next,0===l){if(Object(t)!==t)return;d=!1}else for(;!(d=(r=a.call(t)).done)&&(o.push(r.value),o.length!==l);d=!0);}catch(e){u=!0,n=e}finally{try{if(!d&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw n}}return o}}(e,l)||function(e,l){if(!e)return;if("string"==typeof e)return c(e,l);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,l)}(e,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,l){(null==l||l>e.length)&&(l=e.length);for(var t=0,r=new Array(l);t<l;t++)r[t]=e[t];return r}var s=a.default.bind(o.default);l.default=function(){var e=f((0,n.useState)(!1),2),l=e[0],t=e[1],r=n.default.createElement(i.default,{id:"default",className:s("form-field"),label:"Field Label",help:"Help Message",error:"Error Message",isInvalid:l},n.default.createElement("div",{className:s("field-content")},"Control Placeholder")),a=n.default.createElement(i.default,{id:"optional",className:s("form-field"),label:"Field Label",help:"Help Message",error:"Error Message",isInvalid:l,showOptional:!0},n.default.createElement("div",{className:s("field-content")},"Control Placeholder")),o=n.default.createElement(i.default,{id:"required",className:s("form-field"),label:"Field Label",help:"Help Message",error:"Error Message",isInvalid:l,required:!0},n.default.createElement("div",{className:s("field-content")},"Control Placeholder")),d=n.default.createElement(i.default,{id:"required-hidden",className:s("form-field"),label:"Field Label",help:"Help Message",error:"Error Message",isInvalid:l,required:!0,hideRequired:!0},n.default.createElement("div",{className:s("field-content")},"Control Placeholder")),u=n.default.createElement(i.default,{id:"label-hidden",className:s("form-field"),label:"Field Label",help:"Help Message",error:"Error Message",isInvalid:l,isLabelHidden:!0},n.default.createElement("div",{className:s("field-content")},"Control Placeholder")),c=n.default.createElement("div",null,n.default.createElement(i.default,{id:"inline-1",className:s("form-field"),label:"Field Label - Spacing POC",error:"Error Message",isInline:!0,isInvalid:l,required:!0},n.default.createElement("div",{className:s("field-content")},"Control Placeholder")),n.default.createElement(i.default,{id:"inline-2",className:s("form-field"),label:"Field Label - Spacing POC",error:"Error Message",isInline:!0,isInvalid:l,required:!0,hideRequired:!0},n.default.createElement("div",{className:s("field-content")},"Control Placeholder")),n.default.createElement(i.default,{id:"inline-3",className:s("form-field"),label:"Field Label - Spacing POC",error:"Error Message",isInline:!0,isInvalid:l,showOptional:!0},n.default.createElement("div",{className:s("field-content")},"Control Placeholder")));return n.default.createElement("div",null,n.default.createElement("button",{type:"button",id:"toggle-is-invalid",onClick:function(){t(!l)}},"Toggle In Error "),n.default.createElement("h3",null,"Field"),r,n.default.createElement("h3",null,"Field - Optional"),a,n.default.createElement("h3",null,"Field - Required"),o,n.default.createElement("h3",null,"Field - Required but Indicator Hidden"),d,n.default.createElement("h3",null,"Field - Hidden Label"),u,n.default.createElement("h3",null,"Field - Inline"),c)}},83216:function(e,l,t){t.r(l),l.default={"field-content":"FormFieldTestCommon-module__field-content___RJsmi","form-field":"FormFieldTestCommon-module__form-field___7Z6l2","field-wrapper":"FormFieldTestCommon-module__field-wrapper___l5RNf"}}}]);