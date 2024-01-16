"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[63513],{89122:function(e,t,l){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var l=i(t);if(l&&l.has(e))return l.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}(l(67294)),a=f(l(47166)),o=f(l(47319)),u=f(l(33548));function f(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(i=function(e){return e?l:t})(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,r,a,o,u=[],f=!0,i=!1;try{if(a=(l=l.call(e)).next,0===t){if(Object(l)!==l)return;f=!1}else for(;!(f=(n=a.call(l)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(e){i=!0,r=e}finally{try{if(!f&&null!=l.return&&(o=l.return(),Object(o)!==o))return}finally{if(i)throw r}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}var s=a.default.bind(u.default),p=new Array(500);t.default=function(){var e=c((0,r.useState)("default"),2),t=e[0],l=e[1];return function(){for(var e=0;e<p.length;e+=1)p[e]=r.default.createElement(o.default.Option,{value:e,display:e})}(),r.default.createElement("div",{className:s("content-wrapper")},r.default.createElement("label",{htmlFor:"variants"},"Choose a variant: "),r.default.createElement("select",{id:"variants",onChange:function(e){l(e.target.value)}},r.default.createElement("option",{value:"default"},"Default"),r.default.createElement("option",{value:"combobox"},"Combobox"),r.default.createElement("option",{value:"multiple"},"Multiple"),r.default.createElement("option",{value:"search"},"Search"),r.default.createElement("option",{value:"tag"},"Tag")),r.default.createElement("h1",null,"Variant:"," ",t),r.default.createElement(o.default,{placeholder:"Select a number",variant:t,id:"search"},p))}},47319:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=O(l(67294)),r=O(l(45697)),a=O(l(54052)),o=O(l(4626)),u=O(l(97574)),f=O(l(74854)),i=O(l(28998)),c=O(l(88220)),d=O(l(67405)),s=O(l(1358)),p=["variant"],b=["maxSelectionCount"],v=["allowClear"],m=["maxSelectionCount"],y=["noResultContent","allowClear"],h=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function O(e){return e&&e.__esModule?e:{default:e}}function S(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var C={allowClear:r.default.bool,children:r.default.node,defaultValue:r.default.oneOfType([r.default.string,r.default.number,r.default.array]),disabled:r.default.bool,dropdownAttrs:r.default.object,isIncomplete:r.default.bool,isInvalid:r.default.bool,isTouchAccessible:r.default.bool,maxHeight:r.default.number,maxSelectionCount:r.default.number,noResultContent:r.default.node,onBlur:r.default.func,onChange:r.default.func,onClick:r.default.func,onDeselect:r.default.func,onFocus:r.default.func,onSearch:r.default.func,onSelect:r.default.func,optionFilter:r.default.func,placeholder:r.default.string,required:r.default.bool,value:r.default.oneOfType([r.default.string,r.default.number,r.default.array]),variant:r.default.oneOf([a.default.COMBOBOX,a.default.DEFAULT,a.default.MULTIPLE,a.default.SEARCH,a.default.TAG])},w={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function _(e){var t=e.variant,l=S(e,p);switch(t){case a.default.COMBOBOX:l.maxSelectionCount;var r=S(l,b);return n.default.createElement(f.default,r);case a.default.MULTIPLE:l.allowClear;var o=S(l,v);return n.default.createElement(c.default,o);case a.default.SEARCH:l.maxSelectionCount;var u=S(l,m);return n.default.createElement(d.default,u);case a.default.TAG:l.noResultContent,l.allowClear;var O=S(l,y);return n.default.createElement(s.default,O);case a.default.DEFAULT:default:l.isTouchAccessible,l.maxSelectionCount,l.onSearch,l.optionFilter;var C=S(l,h);return n.default.createElement(i.default,C)}}_.Option=o.default,_.OptGroup=u.default,_.propTypes=C,_.defaultProps=w,_.isSelect=!0;t.default=_},33548:function(e,t,l){l.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}}}]);