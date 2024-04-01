"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[95459],{201:function(e,t,a){var n=a(24994),l=a(73738);t.A=void 0;var r=n(a(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=r?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}return n.default=e,a&&a.set(e,n),n}(a(96540)),c=n(a(5556)),u=n(a(67967)),i=a(92912),d=n(a(27166)),s=n(a(62441)),m=a(25966),p=n(a(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var _=u.default.bind(p.default),b={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},E=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,l=e.title,c=e.description,u=e.isExpanded,p=(0,o.useState)(u),f=(0,r.default)(p,2),b=f[0],E=f[1],x=(0,o.useState)(!1),y=(0,r.default)(x,2),g=y[0],O=y[1],S=o.default.useContext(i.ThemeContext),w=void 0!==n,T=function(){O(!g),b&&E(!b)},N=function(){E(!b),g&&O(!g)},j=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",S.className)},o.default.createElement("div",{className:_("header")},l&&o.default.createElement("h2",{className:_("title")},l)),o.default.createElement("div",{className:_("content")},c&&o.default.createElement("div",{className:_("description")},c),t),o.default.createElement("div",{className:_("footer")},a?o.default.createElement("div",{className:_("button-container")},w&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:T,onKeyDown:function(e){return j(e,T)},onBlur:h,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:N,onKeyDown:function(e){return j(e,N)},onBlur:h,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:_("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:_("css")},n),b&&o.default.createElement("div",{className:_("code")},a))))};E.propTypes=b,E.defaultProps={isExpanded:!1};t.A=E},95459:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(96540),l=a(36665),r=a(46762),o=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i={};function d(e){var t=e.components,a=u(e,o);return(0,l.mdx)("wrapper",c({},i,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport SearchField from 'terra-search-field';\n\nconst SearchFieldDisableAutoSearch = () => (\n  <div>\n    <SearchField disableAutoSearch isLabelVisible groupName=\"Find a clinic\" />\n  </div>\n);\n\nexport default SearchFieldDisableAutoSearch;\n\n")))}d.isMDXComponent=!0;var s=a(201),m=function(e){var t=e.title,a=e.description,l=e.isExpanded;return n.createElement(s.A,{title:t||"Search Field Disable Auto Search",description:a,example:n.createElement(r.A,null),exampleSrc:n.createElement(d,null),isExpanded:l})},p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f.apply(this,arguments)}function _(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var b={},h="wrapper";function v(e){var t=e.components,a=_(e,p);return(0,l.mdx)(h,f({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"search-field-disable-autosearch"},"Search Field Disable Autosearch"),(0,l.mdx)("h3",{id:"description"},"Description"),(0,l.mdx)("p",null,"This example demonstrates ",(0,l.mdx)("a",{parentName:"p",href:"/terra-core/pull/4078/components/cerner-terra-core-docs/search-field/about"},"Search Field")," with autosearch disabled using the 'disableAutoSearch' prop."),(0,l.mdx)(m,{title:"Search Field Disable Autosearch",mdxType:"SearchFieldDisableAutoSearch"}))}v.isMDXComponent=!0},46762:function(e,t,a){t.A=void 0;var n=r(a(96540)),l=r(a(43165));function r(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return n.default.createElement("div",null,n.default.createElement(l.default,{disableAutoSearch:!0,isLabelVisible:!0,groupName:"Find a clinic"}))}},27166:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(96540)),l=r(a(56445));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},89986:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);