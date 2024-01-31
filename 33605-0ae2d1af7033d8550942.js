"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[33605],{49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(67294)),u=r(n(45697)),c=r(n(19845)),i=n(21538),s=r(n(13810)),d=r(n(40931)),f=n(51051),p=r(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var _=c.default.bind(p.default),b={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,u=e.description,c=e.isExpanded,p=(0,o.useState)(c),m=(0,l.default)(p,2),b=m[0],h=m[1],E=(0,o.useState)(!1),x=(0,l.default)(E,2),g=x[0],O=x[1],w=o.default.useContext(i.ThemeContext),j=void 0!==r,S=function(){O(!g),b&&h(!b)},T=function(){h(!b),g&&O(!g)},k=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",w.className)},o.default.createElement("div",{className:_("header")},a&&o.default.createElement("h2",{className:_("title")},a)),o.default.createElement("div",{className:_("content")},u&&o.default.createElement("div",{className:_("description")},u),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},j&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:S,onKeyDown:function(e){return k(e,S)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:T,onKeyDown:function(e){return k(e,T)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:_("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:_("css")},r),b&&o.default.createElement("div",{className:_("code")},n))))};h.propTypes=b,h.defaultProps={isExpanded:!1};t.Z=h},33605:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(67294),a=n(81254),l=n(67625),o=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={};function s(e){var t=e.components,n=c(e,o);return(0,a.mdx)("wrapper",u({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useRef } from 'react';\nimport SearchField from 'terra-search-field';\nimport Button from 'terra-button';\n\nconst SearchFieldFocus = () => {\n  const searchElement = useRef(null);\n\n  const handleButtonClick = () => {\n    if (searchElement) {\n      searchElement.current.focus();\n    }\n  };\n\n  return (\n    <div>\n      <Button text=\"Focus Me\" onClick={handleButtonClick} id=\"search-field-focus-button\" />\n      <SearchField\n        inputRefCallback={(inputRef) => { searchElement.current = inputRef; }}\n      />\n    </div>\n  );\n};\n\nexport default SearchFieldFocus;\n\n")))}s.isMDXComponent=!0;var d=n(49271),f=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(d.Z,{title:t||"Search Field Focus",description:n,example:r.createElement(l.Z,null),exampleSrc:r.createElement(s,null),isExpanded:a})},p=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={},y="wrapper";function v(e){var t=e.components,n=_(e,p);return(0,a.mdx)(y,m({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"search-field-focus"},"Search Field Focus"),(0,a.mdx)("h3",{id:"description"},"Description"),(0,a.mdx)("p",null,"This example demonstrates ",(0,a.mdx)("a",{parentName:"p",href:"/terra-core/components/cerner-terra-core-docs/search-field/about"},"Search Field")," with focus. This example uses the 'inputRefCallback' callback ref to pass into the search input component and sets focus. "),(0,a.mdx)(f,{title:"Search Field Focus",mdxType:"SearchFieldFocus"}))}v.isMDXComponent=!0},67625:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(67294)),l=u(n(28669)),o=u(n(43868));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}t.Z=function(){var e=(0,a.useRef)(null);return a.default.createElement("div",null,a.default.createElement(o.default,{text:"Focus Me",onClick:function(){e&&e.current.focus()},id:"search-field-focus-button"}),a.default.createElement(l.default,{inputRefCallback:function(t){e.current=t}}))}},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);