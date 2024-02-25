"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[77264],{201:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var r=a(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),u=a(n(5556)),c=a(n(67967)),i=n(92912),s=a(n(27166)),d=a(n(62441)),f=n(25966),m=a(n(89986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var _=c.default.bind(m.default),b={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,u=e.description,c=e.isExpanded,m=(0,o.useState)(c),p=(0,r.default)(m,2),b=p[0],h=p[1],E=(0,o.useState)(!1),x=(0,r.default)(E,2),g=x[0],O=x[1],w=o.default.useContext(i.ThemeContext),j=void 0!==a,S=function(){O(!g),b&&h(!b)},T=function(){h(!b),g&&O(!g)},k=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",w.className)},o.default.createElement("div",{className:_("header")},l&&o.default.createElement("h2",{className:_("title")},l)),o.default.createElement("div",{className:_("content")},u&&o.default.createElement("div",{className:_("description")},u),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},j&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:S,onKeyDown:function(e){return k(e,S)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:T,onKeyDown:function(e){return k(e,T)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:_("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:_("css")},a),b&&o.default.createElement("div",{className:_("code")},n))))};h.propTypes=b,h.defaultProps={isExpanded:!1};t.A=h},77264:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(96540),l=n(36665),r=n(63209),o=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={};function s(e){var t=e.components,n=c(e,o);return(0,l.mdx)("wrapper",u({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useRef } from 'react';\nimport SearchField from 'terra-search-field';\nimport Button from 'terra-button';\n\nconst SearchFieldFocus = () => {\n  const searchElement = useRef(null);\n\n  const handleButtonClick = () => {\n    if (searchElement) {\n      searchElement.current.focus();\n    }\n  };\n\n  return (\n    <div>\n      <Button text=\"Focus Me\" onClick={handleButtonClick} id=\"search-field-focus-button\" />\n      <SearchField\n        isLabelVisible\n        groupName=\"Find a clinic\"\n        inputRefCallback={(inputRef) => { searchElement.current = inputRef; }}\n      />\n    </div>\n  );\n};\n\nexport default SearchFieldFocus;\n\n")))}s.isMDXComponent=!0;var d=n(201),f=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(d.A,{title:t||"Search Field Focus",description:n,example:a.createElement(r.A,null),exampleSrc:a.createElement(s,null),isExpanded:l})},m=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b={},y="wrapper";function v(e){var t=e.components,n=_(e,m);return(0,l.mdx)(y,p({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"search-field-focus"},"Search Field Focus"),(0,l.mdx)("h3",{id:"description"},"Description"),(0,l.mdx)("p",null,"This example demonstrates ",(0,l.mdx)("a",{parentName:"p",href:"/terra-core/pull/4043/components/cerner-terra-core-docs/search-field/about"},"Search Field")," with focus. This example uses the 'inputRefCallback' callback ref to pass into the search input component and sets focus. "),(0,l.mdx)(f,{title:"Search Field Focus",mdxType:"SearchFieldFocus"}))}v.isMDXComponent=!0},63209:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.A=void 0;var l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(l,o,u):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(96540)),r=u(n(43165)),o=u(n(40890));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}t.A=function(){var e=(0,l.useRef)(null);return l.default.createElement("div",null,l.default.createElement(o.default,{text:"Focus Me",onClick:function(){e&&e.current.focus()},id:"search-field-focus-button"}),l.default.createElement(r.default,{isLabelVisible:!0,groupName:"Find a clinic",inputRefCallback:function(t){e.current=t}}))}},27166:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(96540)),l=r(n(56445));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);