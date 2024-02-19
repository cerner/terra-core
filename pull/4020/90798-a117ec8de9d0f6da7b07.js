"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[90798],{201:function(e,t,n){var r=n(24994),a=n(73738);t.A=void 0;var l=r(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(96540)),c=r(n(5556)),i=r(n(67967)),u=n(92912),s=r(n(27166)),m=r(n(62441)),d=n(25966),f=r(n(89986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var h=i.default.bind(f.default),_={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,c=e.description,i=e.isExpanded,f=(0,o.useState)(i),p=(0,l.default)(f,2),_=p[0],v=p[1],x=(0,o.useState)(!1),g=(0,l.default)(x,2),E=g[0],S=g[1],O=o.default.useContext(u.ThemeContext),T=void 0!==r,w=function(){S(!E),_&&v(!_)},j=function(){v(!_),E&&S(!E)},N=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:h("template",O.className)},o.default.createElement("div",{className:h("header")},a&&o.default.createElement("h2",{className:h("title")},a)),o.default.createElement("div",{className:h("content")},c&&o.default.createElement("div",{className:h("description")},c),t),o.default.createElement("div",{className:h("footer")},n?o.default.createElement("div",{className:h("button-container")},T&&o.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":E}),onClick:w,onKeyDown:function(e){return N(e,w)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(m.default,{className:h("chevron")})),o.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":_}),onClick:j,onKeyDown:function(e){return N(e,j)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(m.default,{className:h("chevron")}))):null,o.default.createElement("div",null,E&&o.default.createElement("div",{className:h("css")},r),_&&o.default.createElement("div",{className:h("code")},n))))};v.propTypes=_,v.defaultProps={isExpanded:!1};t.A=v},90798:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(96540),a=n(36665),l=n(981),o=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={};function s(e){var t=e.components,n=i(e,o);return(0,a.mdx)("wrapper",c({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport SearchField from 'terra-search-field';\nimport classNames from 'classnames/bind';\nimport styles from './SearchFieldInvalid.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst INVALID_MESSAGE = 'The default minimum search length is 5.';\n\nconst SearchFieldMinimumLength = () => {\n  const [searchText, setSearchText] = useState('');\n\n  const message = searchText.length >= 5 ? `Search text: ${searchText}` : INVALID_MESSAGE;\n\n  return (\n    <div>\n      <p>{message}</p>\n      <SearchField minimumSearchTextLength={5} inputAttributes={{ 'aria-label': message }} onSearch={setSearchText} onInvalidSearch={setSearchText} isLabelVisible groupName=\"Find a clinic\" />\n      {(searchText.length > 0 && searchText.length < 5) && (\n      <div id=\"search-callback-text\" className={cx('error-text')}>\n        INVALID Search Text:\n        {' '}\n        {searchText}\n      </div>\n      )}\n    </div>\n  );\n};\n\nexport default SearchFieldMinimumLength;\n\n")))}s.isMDXComponent=!0;var m=n(201),d=n(46535),f=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.A,{title:t||"Search Field Minimum Length",description:n,example:r.createElement(l.A,null),exampleCssSrc:r.createElement(d.A,null),exampleSrc:r.createElement(s,null),isExpanded:a})},p=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={},y="wrapper";function v(e){var t=e.components,n=_(e,p);return(0,a.mdx)(y,h({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"search-field-minimum-length"},"Search Field Minimum Length"),(0,a.mdx)("h3",{id:"description"},"Description"),(0,a.mdx)("p",null,"This example demonstrates ",(0,a.mdx)("a",{parentName:"p",href:"/terra-core/pull/4020/components/cerner-terra-core-docs/search-field/about"},"Search Field")," with a minimum search text length set using the 'minimumSearchTextLength' prop."),(0,a.mdx)(f,{title:"Search Field Minimum Length",mdxType:"SearchFieldMinimumLength"}))}v.isMDXComponent=!0},46535:function(e,t,n){n.d(t,{A:function(){return u}});n(96540);var r=n(36665),a=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={},i="wrapper";function u(e){var t=e.components,n=o(e,a);return(0,r.mdx)(i,l({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .error-text {\n    color: var(--terra-core-docs-error-text-color, #e50000);\n    font-size: var(--terra-core-docs-error-text-font-size, 0.857rem);\n    font-weight: var(--terra-core-docs-error-text-font-weight, normal);\n    line-height: 1.25;\n    margin-top: var(--terra-core-docs-error-text-margin-top, 0.357em);\n    outline: 0;\n    text-align: left;\n  }\n\n  .error-border {\n    outline: var(--terra-core-docs-error-border-outline, 2px solid #e50000);\n  } \n}\n\n")))}u.isMDXComponent=!0},981:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.A=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(a,o,c):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),l=i(n(43165)),o=i(n(67967)),c=i(n(30903));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,c=[],i=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=o.default.bind(c.default);t.A=function(){var e=s((0,a.useState)(""),2),t=e[0],n=e[1],r=t.length>=5?"Search text: ".concat(t):"The default minimum search length is 5.";return a.default.createElement("div",null,a.default.createElement("p",null,r),a.default.createElement(l.default,{minimumSearchTextLength:5,inputAttributes:{"aria-label":r},onSearch:n,onInvalidSearch:n,isLabelVisible:!0,groupName:"Find a clinic"}),t.length>0&&t.length<5&&a.default.createElement("div",{id:"search-callback-text",className:d("error-text")},"INVALID Search Text:"," ",t))}},27166:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(96540)),a=l(n(56445));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},30903:function(e,t,n){n.r(t),t.default={"error-text":"SearchFieldInvalid-module__error-text___AtfDm","error-border":"SearchFieldInvalid-module__error-border___cnREZ"}}}]);