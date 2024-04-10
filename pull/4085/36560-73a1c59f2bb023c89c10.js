"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[36560],{201:function(e,t,n){var r=n(24994),a=n(73738);t.A=void 0;var l=r(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(96540)),c=r(n(5556)),u=r(n(67967)),s=n(92912),i=r(n(27166)),d=r(n(62441)),f=n(25966),m=r(n(89986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var _=u.default.bind(m.default),b={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,c=e.description,u=e.isExpanded,m=(0,o.useState)(u),p=(0,l.default)(m,2),b=p[0],v=p[1],x=(0,o.useState)(!1),E=(0,l.default)(x,2),g=E[0],O=E[1],w=o.default.useContext(s.ThemeContext),j=void 0!==r,S=function(){O(!g),b&&v(!b)},N=function(){v(!b),g&&O(!g)},T=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",w.className)},o.default.createElement("div",{className:_("header")},a&&o.default.createElement("h2",{className:_("title")},a)),o.default.createElement("div",{className:_("content")},c&&o.default.createElement("div",{className:_("description")},c),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},j&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:S,onKeyDown:function(e){return T(e,S)},onBlur:h,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:N,onKeyDown:function(e){return T(e,N)},onBlur:h,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:_("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:_("css")},r),b&&o.default.createElement("div",{className:_("code")},n))))};v.propTypes=b,v.defaultProps={isExpanded:!1};t.A=v},36560:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var r=n(96540),a=n(36665),l=n(63209),o=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function i(e){var t=e.components,n=u(e,o);return(0,a.mdx)("wrapper",c({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useRef } from 'react';\nimport SearchField from 'terra-search-field';\nimport Button from 'terra-button';\nimport classNames from 'classnames/bind';\nimport styles from './SearchFieldFocus.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst SearchFieldFocus = () => {\n  const searchElement = useRef(null);\n\n  const handleButtonClick = () => {\n    if (searchElement) {\n      searchElement.current.focus();\n    }\n  };\n\n  return (\n    <div>\n      <Button text=\"Focus Me\" onClick={handleButtonClick} className={cx('search-field-focus-button')} id=\"search-field-focus-button\" />\n      <SearchField\n        isLabelVisible\n        groupName=\"Find a clinic\"\n        inputRefCallback={(inputRef) => { searchElement.current = inputRef; }}\n      />\n    </div>\n  );\n};\n\nexport default SearchFieldFocus;\n\n")))}i.isMDXComponent=!0;var d=n(201),f=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _={};function b(e){var t=e.components,n=p(e,f);return(0,a.mdx)("wrapper",m({},_,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n    .search-field-focus-button{\n        margin-right: var(--terra-core-docs-search-field-input-margin-right, 3px);\n      }\n  }\n")))}b.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(d.A,{title:t||"Search Field Focus",description:n,example:r.createElement(l.A,null),exampleCssSrc:r.createElement(b,null),exampleSrc:r.createElement(i,null),isExpanded:a})},y=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E={},g="wrapper";function O(e){var t=e.components,n=x(e,y);return(0,a.mdx)(g,v({},E,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"search-field-focus"},"Search Field Focus"),(0,a.mdx)("h3",{id:"description"},"Description"),(0,a.mdx)("p",null,"This example demonstrates ",(0,a.mdx)("a",{parentName:"p",href:"/terra-core/pull/4085/components/cerner-terra-core-docs/search-field/about"},"Search Field")," with focus. This example uses the 'inputRefCallback' callback ref to pass into the search input component and sets focus. "),(0,a.mdx)(h,{title:"Search Field Focus",mdxType:"SearchFieldFocus"}))}O.isMDXComponent=!0},63209:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.A=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(a,o,c):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),l=s(n(43165)),o=s(n(40890)),c=s(n(67967)),u=s(n(76546));function s(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}var d=c.default.bind(u.default);t.A=function(){var e=(0,a.useRef)(null);return a.default.createElement("div",null,a.default.createElement(o.default,{text:"Focus Me",onClick:function(){e&&e.current.focus()},className:d("search-field-focus-button"),id:"search-field-focus-button"}),a.default.createElement(l.default,{isLabelVisible:!0,groupName:"Find a clinic",inputRefCallback:function(t){e.current=t}}))}},27166:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(96540)),a=l(n(56445));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},76546:function(e,t,n){n.r(t),t.default={"search-field-focus-button":"SearchFieldFocus-module__search-field-focus-button___hq6DY"}}}]);