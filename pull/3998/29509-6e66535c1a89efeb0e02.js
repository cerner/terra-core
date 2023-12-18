"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[29509],{49271:function(e,t,a){var n=a(64836),r=a(18698);t.Z=void 0;var l=n(a(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e,a&&a.set(e,n);return n}(a(67294)),u=n(a(45697)),c=n(a(47166)),i=a(21538),s=n(a(13810)),d=n(a(40931)),m=a(51051),p=n(a(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var _=c.default.bind(p.default),b={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,r=e.title,u=e.description,c=e.isExpanded,p=(0,o.useState)(c),f=(0,l.default)(p,2),b=f[0],x=f[1],E=(0,o.useState)(!1),y=(0,l.default)(E,2),g=y[0],O=y[1],w=o.default.useContext(i.ThemeContext),T=void 0!==n,j=function(){O(!g),b&&x(!b)},C=function(){x(!b),g&&O(!g)},S=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",w.className)},o.default.createElement("div",{className:_("header")},r&&o.default.createElement("h2",{className:_("title")},r)),o.default.createElement("div",{className:_("content")},u&&o.default.createElement("div",{className:_("description")},u),t),o.default.createElement("div",{className:_("footer")},a?o.default.createElement("div",{className:_("button-container")},T&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:j,onKeyDown:function(e){return S(e,j)},onBlur:v,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:C,onKeyDown:function(e){return S(e,C)},onBlur:v,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:_("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:_("css")},n),b&&o.default.createElement("div",{className:_("code")},a))))};x.propTypes=b,x.defaultProps={isExpanded:!1};var E=x;t.Z=E},29509:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(67294),r=a(81254),l=a(82709),o=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i={};function s(e){var t=e.components,a=c(e,o);return(0,r.mdx)("wrapper",u({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport SearchField from 'terra-search-field';\n\nconst SearchFieldDisableAutoFormatAttrs = () => (\n  <SearchField\n    inputAttributes={{\n      autoCorrect: 'off',\n      autoComplete: 'off',\n      autoCapitalize: 'off',\n      spellCheck: 'false',\n    }}\n  />\n);\n\nexport default SearchFieldDisableAutoFormatAttrs;\n\n")))}s.isMDXComponent=!0;var d=a(49271),m=function(e){var t=e.title,a=e.description,r=e.isExpanded;return n.createElement(d.Z,{title:t||"Search Field Disable Auto Format Attrs",description:a,example:n.createElement(l.Z,null),exampleSrc:n.createElement(s,null),isExpanded:r})},p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f.apply(this,arguments)}function _(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b={},v="wrapper";function h(e){var t=e.components,a=_(e,p);return(0,r.mdx)(v,f({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"search-field-disable-autoformat-attributes"},"Search Field Disable AutoFormat Attributes"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"This example demonstrates ",(0,r.mdx)("a",{parentName:"p",href:"/terra-core/pull/3998/components/cerner-terra-core-docs/search-field/about"},"Search Field")," with disabled autoformat attributes. This example uses the 'inputAttributes' prop with various auto-formatting feature attributes."),(0,r.mdx)(m,{title:"Search Field Disable AutoFormat Attributes",mdxType:"SearchFieldDisableAutoFormatAttrs"}))}h.isMDXComponent=!0},82709:function(e,t,a){t.Z=void 0;var n=l(a(67294)),r=l(a(28669));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return n.default.createElement(r.default,{inputAttributes:{autoCorrect:"off",autoComplete:"off",autoCapitalize:"off",spellCheck:"false"}})}},13810:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(67294)),r=l(a(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);