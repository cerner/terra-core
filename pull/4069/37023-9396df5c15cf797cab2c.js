"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[37023],{201:function(e,t,n){var r=n(24994),a=n(73738);t.A=void 0;var l=r(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(96540)),c=r(n(5556)),u=r(n(67967)),i=n(92912),s=r(n(27166)),d=r(n(62441)),f=n(25966),m=r(n(89986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var _=u.default.bind(m.default),h={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,c=e.description,u=e.isExpanded,m=(0,o.useState)(u),p=(0,l.default)(m,2),h=p[0],x=p[1],v=(0,o.useState)(!1),g=(0,l.default)(v,2),E=g[0],O=g[1],T=o.default.useContext(i.ThemeContext),S=void 0!==r,w=function(){O(!E),h&&x(!h)},j=function(){x(!h),E&&O(!E)},N=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",T.className)},o.default.createElement("div",{className:_("header")},a&&o.default.createElement("h2",{className:_("title")},a)),o.default.createElement("div",{className:_("content")},c&&o.default.createElement("div",{className:_("description")},c),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},S&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":E}),onClick:w,onKeyDown:function(e){return N(e,w)},onBlur:y,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":h}),onClick:j,onKeyDown:function(e){return N(e,j)},onBlur:y,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:_("chevron")}))):null,o.default.createElement("div",null,E&&o.default.createElement("div",{className:_("css")},r),h&&o.default.createElement("div",{className:_("code")},n))))};x.propTypes=h,x.defaultProps={isExpanded:!1};t.A=x},37023:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(96540),a=n(36665),l=n(22892),o=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={};function s(e){var t=e.components,n=u(e,o);return(0,a.mdx)("wrapper",c({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport SearchField from 'terra-search-field';\n\nconst SearchFieldFilterNumeric = () => {\n  const [state, setSearchText] = useState({ searchText: '' });\n\n  const handleChange = (event, text) => {\n    let inputText = text;\n    if (text && text.length > 0 && /\\d/.test(text)) {\n      inputText = text.substring(0, text.length - 1);\n    }\n    setSearchText({ searchText: inputText });\n  };\n\n  const handleSearchText = (text) => {\n    setSearchText({ searchText: text });\n  };\n\n  return (\n    <SearchField onSearch={handleSearchText} onChange={handleChange} value={state.searchText} isLabelVisible groupName=\"Find a clinic\" />\n  );\n};\n\nexport default SearchFieldFilterNumeric;\n\n")))}s.isMDXComponent=!0;var d=n(201),f=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(d.A,{title:t||"Search Field Filter Numeric",description:n,example:r.createElement(l.A,null),exampleSrc:r.createElement(s,null),isExpanded:a})},m=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={},y="wrapper";function b(e){var t=e.components,n=_(e,m);return(0,a.mdx)(y,p({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"search-field-filter-numeric"},"Search Field Filter Numeric"),(0,a.mdx)("h3",{id:"description"},"Description"),(0,a.mdx)("p",null,"This example demonstrates ",(0,a.mdx)("a",{parentName:"p",href:"/terra-core/pull/4069/components/cerner-terra-core-docs/search-field/about"},"Search Field")," with numeric filtering. This example uses the 'onChange' callback prop to pass in a function which filters out numeric characters."),(0,a.mdx)(f,{title:"Search Field Filter Numeric",mdxType:"SearchFieldFilterNumeric"}))}b.isMDXComponent=!0},22892:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.A=void 0;var a,l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),o=(a=n(43165))&&a.__esModule?a:{default:a};function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,c=[],u=!0,i=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){i=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(i)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.A=function(){var e=u((0,l.useState)({searchText:""}),2),t=e[0],n=e[1];return l.default.createElement(o.default,{onSearch:function(e){n({searchText:e})},onChange:function(e,t){var r=t;t&&t.length>0&&/\d/.test(t)&&(r=t.substring(0,t.length-1)),n({searchText:r})},value:t.searchText,isLabelVisible:!0,groupName:"Find a clinic"})}},27166:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(96540)),a=l(n(56445));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);