"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[79812],{49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(67294)),c=r(n(45697)),u=r(n(19845)),i=n(21538),s=r(n(13810)),d=r(n(40931)),f=n(51051),m=r(n(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var h=u.default.bind(m.default),v={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,c=e.description,u=e.isExpanded,m=(0,o.useState)(u),p=(0,l.default)(m,2),v=p[0],y=p[1],x=(0,o.useState)(!1),g=(0,l.default)(x,2),E=g[0],S=g[1],O=o.default.useContext(i.ThemeContext),T=void 0!==r,w=function(){S(!E),v&&y(!v)},j=function(){y(!v),E&&S(!E)},C=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:h("template",O.className)},o.default.createElement("div",{className:h("header")},a&&o.default.createElement("h2",{className:h("title")},a)),o.default.createElement("div",{className:h("content")},c&&o.default.createElement("div",{className:h("description")},c),t),o.default.createElement("div",{className:h("footer")},n?o.default.createElement("div",{className:h("button-container")},T&&o.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":E}),onClick:w,onKeyDown:function(e){return C(e,w)},onBlur:_,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:h("chevron")})),o.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":v}),onClick:j,onKeyDown:function(e){return C(e,j)},onBlur:_,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:h("chevron")}))):null,o.default.createElement("div",null,E&&o.default.createElement("div",{className:h("css")},r),v&&o.default.createElement("div",{className:h("code")},n))))};y.propTypes=v,y.defaultProps={isExpanded:!1};t.Z=y},79812:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(67294),a=n(81254),l=n(42880),o=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={};function s(e){var t=e.components,n=u(e,o);return(0,a.mdx)("wrapper",c({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useRef } from 'react';\nimport Button from 'terra-button/lib/Button';\nimport SearchField from 'terra-search-field';\n\nconst SearchFieldProgrammaticSet = () => {\n  const [searchText, setSearchText] = useState('');\n  const [message, setMessage] = useState('');\n  const [text, setText] = useState('');\n  const inputRef = useRef(null);\n\n  const setTextClick = () => {\n    if (inputRef.current) {\n      inputRef.current.value = 'IpsumLorem';\n      let customEvent;\n      if (typeof (Event) === 'function') {\n        customEvent = new Event('input', {\n          bubbles: true,\n          cancelable: false,\n        });\n      } else {\n        customEvent = document.createEvent('Event');\n        customEvent.initEvent('input', true, false);\n      }\n      inputRef.current.dispatchEvent(customEvent);\n    }\n  };\n\n  const handleInvalidSearch = (value) => {\n    setSearchText(value);\n    setMessage('INVALID Search Text: ');\n  };\n\n  const handleChange = (event, value) => {\n    setText(value);\n  };\n\n  const handleInput = (event) => {\n    setText(event.target.value);\n  };\n\n  const handleSearch = (value) => {\n    setSearchText(value);\n    setMessage('Search Text: ');\n  };\n\n  return (\n    <div>\n      <Button text=\"Set search field text\" onClick={setTextClick} id=\"search-field-set-text-button\" />\n      <p>Minimum Search Length is 3</p>\n      <SearchField\n        id=\"searchfield\"\n        onSearch={handleSearch}\n        onInvalidSearch={handleInvalidSearch}\n        onChange={handleChange}\n        onInput={handleInput}\n        minimumSearchTextLength={3}\n        value={text}\n        inputRefCallback={(ref) => { inputRef.current = ref; }}\n        isLabelVisible\n        groupName=\"Find a clinic\"\n      />\n      <div id=\"search-callback-text\">\n        {message}\n        {searchText}\n      </div>\n    </div>\n  );\n};\n\nexport default SearchFieldProgrammaticSet;\n\n")))}s.isMDXComponent=!0;var d=n(49271),f=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(d.Z,{title:t||"Search Field Programmatic Set",description:n,example:r.createElement(l.Z,null),exampleSrc:r.createElement(s,null),isExpanded:a})},m=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={},_="wrapper";function b(e){var t=e.components,n=h(e,m);return(0,a.mdx)(_,p({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"search-field-programmatic-set"},"Search Field Programmatic Set"),(0,a.mdx)("h3",{id:"description"},"Description"),(0,a.mdx)("p",null,"This example demonstrates ",(0,a.mdx)("a",{parentName:"p",href:"/terra-core/pull/4022/components/cerner-terra-core-docs/search-field/about"},"Search Field")," with search text set programmatically. This example uses the 'inputRefCallback' callback ref to pass into the search input component and sets the search text. "),(0,a.mdx)(f,{title:"Search Field Programmatic Set",mdxType:"SearchFieldProgrammaticSet"}))}b.isMDXComponent=!0},42880:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(a,o,c):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(67294)),l=c(n(43868)),o=c(n(28669));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,c=[],u=!0,i=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){i=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(i)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.Z=function(){var e=i((0,a.useState)(""),2),t=e[0],n=e[1],r=i((0,a.useState)(""),2),c=r[0],u=r[1],s=i((0,a.useState)(""),2),d=s[0],f=s[1],m=(0,a.useRef)(null);return a.default.createElement("div",null,a.default.createElement(l.default,{text:"Set search field text",onClick:function(){var e;m.current&&(m.current.value="IpsumLorem","function"==typeof Event?e=new Event("input",{bubbles:!0,cancelable:!1}):(e=document.createEvent("Event")).initEvent("input",!0,!1),m.current.dispatchEvent(e))},id:"search-field-set-text-button"}),a.default.createElement("p",null,"Minimum Search Length is 3"),a.default.createElement(o.default,{id:"searchfield",onSearch:function(e){n(e),u("Search Text: ")},onInvalidSearch:function(e){n(e),u("INVALID Search Text: ")},onChange:function(e,t){f(t)},onInput:function(e){f(e.target.value)},minimumSearchTextLength:3,value:d,inputRefCallback:function(e){m.current=e},isLabelVisible:!0,groupName:"Find a clinic"}),a.default.createElement("div",{id:"search-callback-text"},c,t))}},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var c=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=c},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);