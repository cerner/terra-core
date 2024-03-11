"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[69865],{201:function(e,t,a){var l=a(24994),n=a(73738);t.A=void 0;var r=l(a(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=r?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(l,o,c):l[o]=e[o]}return l.default=e,a&&a.set(e,l),l}(a(96540)),c=l(a(5556)),u=l(a(67967)),d=a(92912),i=l(a(27166)),s=l(a(62441)),m=a(25966),p=l(a(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var _=u.default.bind(p.default),h={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,a=e.exampleSrc,l=e.exampleCssSrc,n=e.title,c=e.description,u=e.isExpanded,p=(0,o.useState)(u),f=(0,r.default)(p,2),h=f[0],x=f[1],E=(0,o.useState)(!1),y=(0,r.default)(E,2),g=y[0],O=y[1],w=o.default.useContext(d.ThemeContext),T=void 0!==l,S=function(){O(!g),h&&x(!h)},N=function(){x(!h),g&&O(!g)},j=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",w.className)},o.default.createElement("div",{className:_("header")},n&&o.default.createElement("h2",{className:_("title")},n)),o.default.createElement("div",{className:_("content")},c&&o.default.createElement("div",{className:_("description")},c),t),o.default.createElement("div",{className:_("footer")},a?o.default.createElement("div",{className:_("button-container")},T&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:S,onKeyDown:function(e){return j(e,S)},onBlur:v,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":h}),onClick:N,onKeyDown:function(e){return j(e,N)},onBlur:v,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:_("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:_("css")},l),h&&o.default.createElement("div",{className:_("code")},a))))};x.propTypes=h,x.defaultProps={isExpanded:!1};t.A=x},69865:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var l=a(96540),n=a(36665),r=a(56676),o=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d={};function i(e){var t=e.components,a=u(e,o);return(0,n.mdx)("wrapper",c({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport SearchField from 'terra-search-field';\n\nconst SearchFieldPlaceholder = () => (\n  <SearchField placeholder=\"- Search Here -\" isLabelVisible groupName=\"Find a clinic\" />\n);\n\nexport default SearchFieldPlaceholder;\n\n")))}i.isMDXComponent=!0;var s=a(201),m=function(e){var t=e.title,a=e.description,n=e.isExpanded;return l.createElement(s.A,{title:t||"Search Field Placeholder",description:a,example:l.createElement(r.A,null),exampleSrc:l.createElement(i,null),isExpanded:n})},p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},f.apply(this,arguments)}function _(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var h={},v="wrapper";function b(e){var t=e.components,a=_(e,p);return(0,n.mdx)(v,f({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"search-field-placeholder"},"Search Field Placeholder"),(0,n.mdx)("h3",{id:"description"},"Description"),(0,n.mdx)("p",null,"This example demonstrates ",(0,n.mdx)("a",{parentName:"p",href:"/terra-core/pull/4059/components/cerner-terra-core-docs/search-field/about"},"Search Field")," with a placeholder using the 'placeholder' prop."),(0,n.mdx)(m,{title:"Search Field Placeholder",mdxType:"SearchFieldPlaceholder"}))}b.isMDXComponent=!0},56676:function(e,t,a){t.A=void 0;var l=r(a(96540)),n=r(a(43165));function r(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return l.default.createElement(n.default,{placeholder:"- Search Here -",isLabelVisible:!0,groupName:"Find a clinic"})}},27166:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(96540)),n=r(a(56445));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},89986:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);