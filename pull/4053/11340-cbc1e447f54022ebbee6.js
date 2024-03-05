"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[11340],{201:function(e,t,n){var r=n(24994),a=n(73738);t.A=void 0;var l=r(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(96540)),c=r(n(5556)),i=r(n(67967)),u=n(92912),s=r(n(27166)),d=r(n(62441)),f=n(25966),m=r(n(89986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var v=i.default.bind(m.default),h={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,c=e.description,i=e.isExpanded,m=(0,o.useState)(i),p=(0,l.default)(m,2),h=p[0],y=p[1],x=(0,o.useState)(!1),g=(0,l.default)(x,2),S=g[0],E=g[1],O=o.default.useContext(u.ThemeContext),w=void 0!==r,T=function(){E(!S),h&&y(!h)},j=function(){y(!h),S&&E(!S)},I=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:v("template",O.className)},o.default.createElement("div",{className:v("header")},a&&o.default.createElement("h2",{className:v("title")},a)),o.default.createElement("div",{className:v("content")},c&&o.default.createElement("div",{className:v("description")},c),t),o.default.createElement("div",{className:v("footer")},n?o.default.createElement("div",{className:v("button-container")},w&&o.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":S}),onClick:T,onKeyDown:function(e){return I(e,T)},onBlur:b,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:v("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:v("chevron")})),o.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":h}),onClick:j,onKeyDown:function(e){return I(e,j)},onBlur:b,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:v("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:v("chevron")}))):null,o.default.createElement("div",null,S&&o.default.createElement("div",{className:v("css")},r),h&&o.default.createElement("div",{className:v("code")},n))))};y.propTypes=h,y.defaultProps={isExpanded:!1};t.A=y},11340:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(96540),a=n(36665),l=n(49954),o=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={};function s(e){var t=e.components,n=i(e,o);return(0,a.mdx)("wrapper",c({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useRef } from 'react';\nimport SearchField from 'terra-search-field';\nimport classNames from 'classnames/bind';\nimport styles from './SearchFieldInvalid.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst SearchFieldInvalid = () => {\n  const [isInvalid, setInvalid] = useState(false);\n  const [message, setMessage] = useState('');\n  const [text, setText] = useState('');\n  const inputRef = useRef(null);\n\n  const handleInvalidSearch = (value) => {\n    setText(value);\n    setInvalid(true);\n    setMessage('INVALID Search Text: ');\n    if (inputRef.current) {\n      inputRef.current.classList.add(styles['error-border']); // Add red border on invalid search\n    }\n  };\n\n  const handleChange = (event, value) => {\n    setText(value);\n    setInvalid(false);\n  };\n\n  const handleInput = (event) => {\n    setText(event.target.value);\n  };\n\n  const handleSearch = (value) => {\n    setText(value);\n    setMessage('Search Text: ');\n    if (inputRef.current) {\n      inputRef.current.classList.remove(styles['error-border']); // Remove red border on valid search\n    }\n  };\n\n  return (\n    <div>\n      <p>Minimum Search Length is 3</p>\n      <SearchField\n        id=\"searchfield\"\n        inputAttributes={{ 'aria-invalid': isInvalid, 'aria-describedby': 'search-callback-text' }}\n        onSearch={handleSearch}\n        onInvalidSearch={handleInvalidSearch}\n        onChange={handleChange}\n        onInput={handleInput}\n        minimumSearchTextLength={3}\n        value={text}\n        inputRefCallback={(ref) => { inputRef.current = ref; }}\n        searchDelay={500}\n        isLabelVisible\n        groupName=\"Find a clinic\"\n      />\n      <div id=\"search-callback-text\" className={isInvalid ? cx('error-text') : ''}>\n        {message}\n        {text}\n      </div>\n    </div>\n  );\n};\n\nexport default SearchFieldInvalid;\n\n")))}s.isMDXComponent=!0;var d=n(201),f=n(46535),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(d.A,{title:t||"Search Field Invalid",description:n,example:r.createElement(l.A,null),exampleCssSrc:r.createElement(f.A,null),exampleSrc:r.createElement(s,null),isExpanded:a})},p=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={},_="wrapper";function y(e){var t=e.components,n=h(e,p);return(0,a.mdx)(_,v({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"search-field-with-invalid-text"},"Search Field with Invalid Text"),(0,a.mdx)("h3",{id:"description"},"Description"),(0,a.mdx)("p",null,"This example demonstrates a ",(0,a.mdx)("a",{parentName:"p",href:"/terra-core/pull/4053/components/cerner-terra-core-docs/search-field/about"},"Search Field")," with Invalid Text. This example uses the 'onInvalidSearch' prop to pass in a callback and 'aria-invalid' passed in through the 'inputAttributes' prop. "),(0,a.mdx)(m,{title:"Search Field with Invalid Text",mdxType:"SearchFieldInvalid"}))}y.isMDXComponent=!0},46535:function(e,t,n){n.d(t,{A:function(){return u}});n(96540);var r=n(36665),a=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={},i="wrapper";function u(e){var t=e.components,n=o(e,a);return(0,r.mdx)(i,l({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .error-text {\n    color: var(--terra-core-docs-error-text-color, #e50000);\n    font-size: var(--terra-core-docs-error-text-font-size, 0.857rem);\n    font-weight: var(--terra-core-docs-error-text-font-weight, normal);\n    line-height: 1.25;\n    margin-top: var(--terra-core-docs-error-text-margin-top, 0.357em);\n    outline: 0;\n    text-align: left;\n  }\n\n  .error-border {\n    outline: var(--terra-core-docs-error-border-outline, 2px solid #e50000);\n  } \n}\n\n")))}u.isMDXComponent=!0},49954:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.A=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(a,o,c):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),l=i(n(43165)),o=i(n(67967)),c=i(n(30903));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,c=[],i=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=o.default.bind(c.default);t.A=function(){var e=s((0,a.useState)(!1),2),t=e[0],n=e[1],r=s((0,a.useState)(""),2),o=r[0],i=r[1],u=s((0,a.useState)(""),2),d=u[0],m=u[1],p=(0,a.useRef)(null);return a.default.createElement("div",null,a.default.createElement("p",null,"Minimum Search Length is 3"),a.default.createElement(l.default,{id:"searchfield",inputAttributes:{"aria-invalid":t,"aria-describedby":"search-callback-text"},onSearch:function(e){m(e),i("Search Text: "),p.current&&p.current.classList.remove(c.default["error-border"])},onInvalidSearch:function(e){m(e),n(!0),i("INVALID Search Text: "),p.current&&p.current.classList.add(c.default["error-border"])},onChange:function(e,t){m(t),n(!1)},onInput:function(e){m(e.target.value)},minimumSearchTextLength:3,value:d,inputRefCallback:function(e){p.current=e},searchDelay:500,isLabelVisible:!0,groupName:"Find a clinic"}),a.default.createElement("div",{id:"search-callback-text",className:t?f("error-text"):""},o,d))}},27166:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(96540)),a=l(n(56445));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},30903:function(e,t,n){n.r(t),t.default={"error-text":"SearchFieldInvalid-module__error-text___AtfDm","error-border":"SearchFieldInvalid-module__error-border___cnREZ"}}}]);