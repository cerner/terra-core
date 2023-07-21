"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[53058],{89122:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),r=f(n(47166)),o=f(n(47319)),u=f(n(33548));function f(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r,o,u=[],f=!0,i=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;f=!1}else for(;!(f=(l=r.call(n)).done)&&(u.push(l.value),u.length!==t);f=!0);}catch(e){i=!0,a=e}finally{try{if(!f&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(i)throw a}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var s=r.default.bind(u.default),p=new Array(500),v=function(){var e=c((0,a.useState)("default"),2),t=e[0],n=e[1];return function(){for(var e=0;e<p.length;e+=1)p[e]=a.default.createElement(o.default.Option,{value:e,display:e})}(),a.default.createElement("div",{className:s("content-wrapper")},a.default.createElement("label",{htmlFor:"variants"},"Choose a variant: "),a.default.createElement("select",{id:"variants",onChange:function(e){n(e.target.value)}},a.default.createElement("option",{value:"default"},"Default"),a.default.createElement("option",{value:"combobox"},"Combobox"),a.default.createElement("option",{value:"multiple"},"Multiple"),a.default.createElement("option",{value:"search"},"Search"),a.default.createElement("option",{value:"tag"},"Tag")),a.default.createElement("h1",null,"Variant:"," ",t),a.default.createElement(o.default,{placeholder:"Select a number",variant:t,id:"search"},p))};t.default=v},47319:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=O(n(67294)),a=O(n(45697)),r=O(n(54052)),o=O(n(4626)),u=O(n(97574)),f=O(n(74854)),i=O(n(28998)),c=O(n(88220)),d=O(n(67405)),s=O(n(1358)),p=["variant"],v=["maxSelectionCount"],b=["allowClear"],m=["maxSelectionCount"],y=["noResultContent","allowClear"],h=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function O(e){return e&&e.__esModule?e:{default:e}}function S(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var C={allowClear:a.default.bool,children:a.default.node,defaultValue:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),disabled:a.default.bool,dropdownAttrs:a.default.object,isIncomplete:a.default.bool,isInvalid:a.default.bool,isTouchAccessible:a.default.bool,maxHeight:a.default.number,maxSelectionCount:a.default.number,noResultContent:a.default.node,onBlur:a.default.func,onChange:a.default.func,onClick:a.default.func,onDeselect:a.default.func,onFocus:a.default.func,onSearch:a.default.func,onSelect:a.default.func,optionFilter:a.default.func,placeholder:a.default.string,required:a.default.bool,value:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),variant:a.default.oneOf([r.default.COMBOBOX,r.default.DEFAULT,r.default.MULTIPLE,r.default.SEARCH,r.default.TAG])},w={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function g(e){var t=e.variant,n=S(e,p);switch(t){case r.default.COMBOBOX:n.maxSelectionCount;var a=S(n,v);return l.default.createElement(f.default,a);case r.default.MULTIPLE:n.allowClear;var o=S(n,b);return l.default.createElement(c.default,o);case r.default.SEARCH:n.maxSelectionCount;var u=S(n,m);return l.default.createElement(d.default,u);case r.default.TAG:n.noResultContent,n.allowClear;var O=S(n,y);return l.default.createElement(s.default,O);case r.default.DEFAULT:default:n.isTouchAccessible,n.maxSelectionCount,n.onSearch,n.optionFilter;var C=S(n,h);return l.default.createElement(i.default,C)}}g.Option=o.default,g.OptGroup=u.default,g.propTypes=C,g.defaultProps=w,g.isSelect=!0;var E=g;t.default=E},33548:function(e,t,n){n.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}}}]);