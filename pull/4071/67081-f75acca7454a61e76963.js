"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[67081],{201:function(e,t,n){var r=n(24994),a=n(73738);t.A=void 0;var l=r(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(96540)),c=r(n(5556)),u=r(n(67967)),i=n(92912),s=r(n(27166)),d=r(n(62441)),f=n(25966),m=r(n(89986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var _=u.default.bind(m.default),y={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,c=e.description,u=e.isExpanded,m=(0,o.useState)(u),p=(0,l.default)(m,2),y=p[0],v=p[1],x=(0,o.useState)(!1),E=(0,l.default)(x,2),g=E[0],S=E[1],O=o.default.useContext(i.ThemeContext),w=void 0!==r,T=function(){S(!g),y&&v(!y)},j=function(){v(!y),g&&S(!g)},N=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",O.className)},o.default.createElement("div",{className:_("header")},a&&o.default.createElement("h2",{className:_("title")},a)),o.default.createElement("div",{className:_("content")},c&&o.default.createElement("div",{className:_("description")},c),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},w&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:T,onKeyDown:function(e){return N(e,T)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":y}),onClick:j,onKeyDown:function(e){return N(e,j)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:_("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:_("css")},r),y&&o.default.createElement("div",{className:_("code")},n))))};v.propTypes=y,v.defaultProps={isExpanded:!1};t.A=v},67081:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});n(96540);var r=n(36665),a=n(37706),l=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={},i="wrapper";function s(e){var t=e.components,n=c(e,l);return(0,r.mdx)(i,o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"basic-search-field"},"Basic Search Field"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"This example demonstrates a basic ",(0,r.mdx)("a",{parentName:"p",href:"/terra-core/pull/4071/components/cerner-terra-core-docs/search-field/about"},"Search Field"),"."),(0,r.mdx)(a.A,{title:"Basic Search Field",mdxType:"SearchFieldBasic"}))}s.isMDXComponent=!0},37706:function(e,t,n){n.d(t,{A:function(){return f}});var r=n(96540),a=n(30103),l=n(36665),o=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={};function s(e){var t=e.components,n=u(e,o);return(0,l.mdx)("wrapper",c({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport SearchField from 'terra-search-field';\n\nconst INVALID_MESSAGE = 'The default minimum search length is 2.';\n\nconst SearchFieldBasic = () => {\n  const [searchText, setSearchText] = useState('');\n\n  const message = searchText.length >= 2 ? `Search text: ${searchText}` : INVALID_MESSAGE;\n\n  return (\n    <div>\n      <p>{message}</p>\n      <SearchField isLabelVisible groupName=\"Find a clinic\" onSearch={setSearchText} onInvalidSearch={setSearchText} />\n    </div>\n  );\n};\n\nexport default SearchFieldBasic;\n\n")))}s.isMDXComponent=!0;var d=n(201),f=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(d.A,{title:t||"Search Field Basic",description:n,example:r.createElement(a.A,null),exampleSrc:r.createElement(s,null),isExpanded:l})}},30103:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.A=void 0;var a,l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),o=(a=n(43165))&&a.__esModule?a:{default:a};function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,c=[],u=!0,i=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){i=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(i)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.A=function(){var e=u((0,l.useState)(""),2),t=e[0],n=e[1],r=t.length>=2?"Search text: ".concat(t):"The default minimum search length is 2.";return l.default.createElement("div",null,l.default.createElement("p",null,r),l.default.createElement(o.default,{isLabelVisible:!0,groupName:"Find a clinic",onSearch:n,onInvalidSearch:n}))}},27166:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(96540)),a=l(n(56445));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);