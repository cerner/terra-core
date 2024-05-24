"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[38058],{201:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var r=a(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var c=r?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(a,o,c):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),c=a(n(5556)),u=a(n(67967)),i=n(92912),d=a(n(27166)),s=a(n(62441)),m=n(25966),p=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=u.default.bind(p.default),v={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},E=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,c=e.description,u=e.isExpanded,p=(0,o.useState)(u),f=(0,r.default)(p,2),v=f[0],E=f[1],h=(0,o.useState)(!1),y=(0,r.default)(h,2),g=y[0],O=y[1],w=o.default.useContext(i.ThemeContext),T=void 0!==a,k=function(){O(!g),v&&E(!v)},N=function(){E(!v),g&&O(!g)},S=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",w.className)},o.default.createElement("div",{className:_("header")},l&&o.default.createElement("h2",{className:_("title")},l)),o.default.createElement("div",{className:_("content")},c&&o.default.createElement("div",{className:_("description")},c),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},T&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:k,onKeyDown:function(e){return S(e,k)},onBlur:b,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":v}),onClick:N,onKeyDown:function(e){return S(e,N)},onBlur:b,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:_("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:_("css")},a),v&&o.default.createElement("div",{className:_("code")},n))))};E.propTypes=v,E.defaultProps={isExpanded:!1};t.A=E},38058:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(96540),l=n(36665),r=n(2420),o=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={};function d(e){var t=e.components,n=u(e,o);return(0,l.mdx)("wrapper",c({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport SearchField from 'terra-search-field';\n\nconst SearchFieldBlock = () => (\n  <SearchField isBlock isLabelVisible groupName=\"Find a clinic\" />\n);\n\nexport default SearchFieldBlock;\n\n")))}d.isMDXComponent=!0;var s=n(201),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(s.A,{title:t||"Search Field Block",description:n,example:a.createElement(r.A,null),exampleSrc:a.createElement(d,null),isExpanded:l})},p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var v={},b="wrapper";function x(e){var t=e.components,n=_(e,p);return(0,l.mdx)(b,f({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"search-field-block"},"Search Field Block"),(0,l.mdx)("h3",{id:"description"},"Description"),(0,l.mdx)("p",null,"This example demonstrates ",(0,l.mdx)("a",{parentName:"p",href:"/terra-core/pull/4106/components/cerner-terra-core-docs/search-field/about"},"Search Field")," with block style using the 'isBlock' prop."),(0,l.mdx)(m,{title:"Search Field Block",mdxType:"SearchFieldBlock"}))}x.isMDXComponent=!0},2420:function(e,t,n){t.A=void 0;var a=r(n(96540)),l=r(n(43165));function r(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return a.default.createElement(l.default,{isBlock:!0,isLabelVisible:!0,groupName:"Find a clinic"})}},27166:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(96540)),l=r(n(56445));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);