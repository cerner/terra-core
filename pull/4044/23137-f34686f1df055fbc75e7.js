"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[23137],{201:function(e,t,a){var l=a(24994),n=a(73738);t.A=void 0;var r=l(a(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(l,o,u):l[o]=e[o]}return l.default=e,a&&a.set(e,l),l}(a(96540)),u=l(a(5556)),c=l(a(67967)),d=a(92912),i=l(a(27166)),s=l(a(62441)),m=a(25966),f=l(a(89986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var _=c.default.bind(f.default),v={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,a=e.exampleSrc,l=e.exampleCssSrc,n=e.title,u=e.description,c=e.isExpanded,f=(0,o.useState)(c),p=(0,r.default)(f,2),v=p[0],h=p[1],E=(0,o.useState)(!1),y=(0,r.default)(E,2),g=y[0],O=y[1],w=o.default.useContext(d.ThemeContext),T=void 0!==l,N=function(){O(!g),v&&h(!v)},S=function(){h(!v),g&&O(!g)},j=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",w.className)},o.default.createElement("div",{className:_("header")},n&&o.default.createElement("h2",{className:_("title")},n)),o.default.createElement("div",{className:_("content")},u&&o.default.createElement("div",{className:_("description")},u),t),o.default.createElement("div",{className:_("footer")},a?o.default.createElement("div",{className:_("button-container")},T&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:N,onKeyDown:function(e){return j(e,N)},onBlur:b,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":v}),onClick:S,onKeyDown:function(e){return j(e,S)},onBlur:b,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:_("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:_("css")},l),v&&o.default.createElement("div",{className:_("code")},a))))};h.propTypes=v,h.defaultProps={isExpanded:!1};t.A=h},23137:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var l=a(96540),n=a(36665),r=a(42259),o=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d={};function i(e){var t=e.components,a=c(e,o);return(0,n.mdx)("wrapper",u({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport SearchField from 'terra-search-field';\n\nconst SearchFieldDefaultValue = () => (\n  <SearchField defaultValue=\"Default\" isLabelVisible groupName=\"Find a clinic\" />\n);\n\nexport default SearchFieldDefaultValue;\n\n")))}i.isMDXComponent=!0;var s=a(201),m=function(e){var t=e.title,a=e.description,n=e.isExpanded;return l.createElement(s.A,{title:t||"Search Field Default Value",description:a,example:l.createElement(r.A,null),exampleSrc:l.createElement(i,null),isExpanded:n})},f=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},p.apply(this,arguments)}function _(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var v={},b="wrapper";function x(e){var t=e.components,a=_(e,f);return(0,n.mdx)(b,p({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"search-field-default-value"},"Search Field Default Value"),(0,n.mdx)("h3",{id:"description"},"Description"),(0,n.mdx)("p",null,"This example demonstrates ",(0,n.mdx)("a",{parentName:"p",href:"/terra-core/pull/4044/components/cerner-terra-core-docs/search-field/about"},"Search Field")," with a default search text value using the 'defaultValue' prop."),(0,n.mdx)(m,{title:"Search Field Default Value",mdxType:"SearchFieldDefaultValue"}))}x.isMDXComponent=!0},42259:function(e,t,a){t.A=void 0;var l=r(a(96540)),n=r(a(43165));function r(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return l.default.createElement(n.default,{defaultValue:"Default",isLabelVisible:!0,groupName:"Find a clinic"})}},27166:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(96540)),n=r(a(56445));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},89986:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);