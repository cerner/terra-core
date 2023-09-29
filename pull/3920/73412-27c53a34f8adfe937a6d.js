"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[73412],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var l=r(n(67294)),a=r(n(45697)),o=r(n(47166)),d=r(n(17422)),u=o.default.bind(d.default),i={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,a=e.version,o=l.default.createElement("a",{className:u("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(a)},l.default.createElement("span",{className:u("badge-name")},r?"package":"npm"),l.default.createElement("span",{className:u("badge-version")},"v".concat(a))),d=t?l.default.createElement("a",{className:u("badge"),href:t},l.default.createElement("span",{className:u("badge-name")},"github"),l.default.createElement("span",{className:u("badge-version")},"source")):void 0;return l.default.createElement("div",{className:u("badge-container")},o,d)};c.propTypes=i;var s=c;t.Z=s},49271:function(e,t,n){var r=n(64836),l=n(18698);t.Z=void 0;var a=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),d=r(n(45697)),u=r(n(47166)),i=n(21538),c=r(n(13810)),s=r(n(40931)),p=n(51051),f=r(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var b=u.default.bind(f.default),y={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,l=e.title,d=e.description,u=e.isExpanded,f=(0,o.useState)(u),m=(0,a.default)(f,2),y=m[0],g=m[1],x=(0,o.useState)(!1),h=(0,a.default)(x,2),O=h[0],E=h[1],j=o.default.useContext(i.ThemeContext),T=void 0!==r,P=function(){E(!O),y&&g(!y)},w=function(){g(!y),O&&E(!O)},N=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:b("template",j.className)},o.default.createElement("div",{className:b("header")},l&&o.default.createElement("h2",{className:b("title")},l)),o.default.createElement("div",{className:b("content")},d&&o.default.createElement("div",{className:b("description")},d),t),o.default.createElement("div",{className:b("footer")},n?o.default.createElement("div",{className:b("button-container")},T&&o.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":O}),onClick:P,onKeyDown:function(e){return N(e,P)},onBlur:_,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:b("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:b("chevron")})),o.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":y}),onClick:w,onKeyDown:function(e){return N(e,w)},onBlur:_,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:b("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:b("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:b("css")},r),y&&o.default.createElement("div",{className:b("code")},n))))};g.propTypes=y,g.defaultProps={isExpanded:!1};var x=g;t.Z=x},78530:function(e,t,n){var r=n(64836),l=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return i.Row}}),t.ZP=t.Di=void 0;var a=p(n(67294)),o=r(n(45697)),d=r(n(47166)),u=n(21538),i=p(n(37515)),c=r(n(54931));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var f=d.default.bind(c.default),m={children:o.default.node},b={isRequired:o.default.bool},y=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:f("bold")},t)};t.O=y,y.propTypes=m;var _=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:f("code-block-override")},t)};t.Di=_,_.propTypes=m;var v=function(e){var t=e.isRequired;return a.default.createElement(i.Cell,{className:f([t?["required"]:[]])},t?"required":"optional")};t.dS=v,v.propTypes=b;var g=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:f("code-block-override")},t)};t.mW=g,g.propTypes=m;var x=function(e){var t=e.children;return a.default.createElement(i.Cell,null,t)};t.Ex=x,x.propTypes=m;var h=function(e){var t=e.children,n=(0,a.useContext)(u.ThemeContext);return a.default.createElement(i.default,{paddingStyle:"compact",className:f("table",n.className)},a.default.createElement(i.Header,{className:f("header")},a.default.createElement(i.HeaderCell,null,"Prop"),a.default.createElement(i.HeaderCell,null,"Type"),a.default.createElement(i.HeaderCell,null,"Required"),a.default.createElement(i.HeaderCell,null,"Default"),a.default.createElement(i.HeaderCell,null,"Description")),a.default.createElement(i.Body,null,t))};h.propTypes=m;var O=h;t.ZP=O},73412:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r=n(67294),l=n(81254),a=n(85525),o=n(9262),d=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c={};function s(e){var t=e.components,n=i(e,d);return(0,l.mdx)("wrapper",u({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport List, { SectionHeader } from 'terra-list/lib/index';\n\nconst ListSectionHeaderExample = () => (\n  <List>\n    <SectionHeader title=\"Default SectionHeader\" key=\"default\" />\n  </List>\n);\n\nexport default ListSectionHeaderExample;\n\n")))}s.isMDXComponent=!0;var p=n(49271),f=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(p.Z,{title:t||"List Section Header",description:n,example:r.createElement(o.Z,null),exampleSrc:r.createElement(s,null),isExpanded:l})},m=n(78530),b=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var v={},g="wrapper";function x(e){var t=e.components,n=_(e,b);return(0,l.mdx)(g,y({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(m.ZP,{mdxType:"PropsTable"},(0,l.mdx)(m.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(m.O,{mdxType:"PropNameCell"},"level"),(0,l.mdx)(m.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  1\n  2\n  3\n  4\n  5\n  6\n],\n"))),(0,l.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"2\n"))),(0,l.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Optionally sets the heading level. One of ",(0,l.mdx)("inlineCode",{parentName:"p"},"1"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"2"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"3"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"4"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"5"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"6"),".\n",(0,l.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nReplace value ",(0,l.mdx)("inlineCode",{parentName:"p"},"1")," of ",(0,l.mdx)("inlineCode",{parentName:"p"},"level")," prop with other level values. Do Not use level as 1 as there should be only one H1 in a page.\nHeading value ",(0,l.mdx)("inlineCode",{parentName:"p"},"1")," will be converted as heading level ",(0,l.mdx)("inlineCode",{parentName:"p"},"2")," until it is removed in the next MVB release."))),(0,l.mdx)(m.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(m.O,{mdxType:"PropNameCell"},"refCallback"),(0,l.mdx)(m.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Function callback passthrough for the ref of the section li."))),(0,l.mdx)(m.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(m.O,{mdxType:"PropNameCell"},"title"),(0,l.mdx)(m.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(m.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Title text to be placed within the section header.")))))}x.isMDXComponent=!0;var h=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var j={},T="wrapper";function P(e){var t=e.components,n=E(e,h);return(0,l.mdx)(T,O({},j,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(a.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"list-section-header"},"List Section Header"),(0,l.mdx)("p",null,"The list section header is a sub-component of the list section. It provides the visual representation of the section, but does not provided any collapsible functionality itself, it's collapsible props are for the display of the collapse/expand indicator. The section header should only be consumed directly when the header is static, as the actual list item collapse is handled by the section."),(0,l.mdx)("p",null,"When consumed by itself as an individual list item avoid enabling the collapsible properties."),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import List, { SectionHeader } from 'terra-list/lib/List';\n")),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(f,{mdxType:"ListSectionHeaderExample"}),(0,l.mdx)("h2",{id:"list-section-header-props"},"List Section Header Props"),(0,l.mdx)(x,{mdxType:"ListSectionHeaderPropsTable"}))}P.isMDXComponent=!0},85525:function(e,t,n){n.d(t,{C:function(){return a}});var r=n(67294),l=n(22863),a=function(e){var t=e.url;return r.createElement(l.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-list",name:"terra-list",version:"4.61.0",url:t})}},9262:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var l,a=(l=n(67294))&&l.__esModule?l:{default:l},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(l,o,u):l[o]=e[o]}l.default=e,n&&n.set(e,l);return l}(n(1893));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}t.Z=function(){return a.default.createElement(o.default,null,a.default.createElement(o.SectionHeader,{title:"Default SectionHeader",key:"default"}))}},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),l=c(n(45697)),a=c(n(94184)),o=c(n(47166)),d=c(n(50026)),u=c(n(16749)),i=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var f=o.default.bind(u.default),m={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},b=function(e){var t=e.children,n=e.disableStripes,l=e.paddingStyle,o=p(e,i),u=r.default.useContext(d.default),c=(0,a.default)(f("table",{striped:!n},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},u.className),o.className);return r.default.createElement("table",s({},o,{className:c}),t)};b.propTypes=m,b.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=b},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={children:l.default.node},i=function(e){var t=e.children,n=d(e,a);return r.default.createElement("tbody",n,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={children:l.default.node},i=function(e){var t=e.children,n=d(e,a);return r.default.createElement("td",n,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),l=d(n(45697)),a=d(n(29805)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},c=function(e){var t=e.children,n=u(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,a.default.addScope(t,"col")))};c.propTypes=i,c.defaultProps={children:[]};t.default=c},80876:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={children:l.default.node},i=function(e){var t=e.children,n=d(e,a);return r.default.createElement("th",n,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),l=i(n(45697)),a=i(n(47166)),o=i(n(16749)),d=i(n(29805)),u=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.default.bind(o.default),f={children:l.default.node},m=function(e){var t=e.children,n=s(e,u),l=p(["row"]);return r.default.createElement("tr",c({},n,{className:n.className?"".concat(l," ").concat(n.className):l}),d.default.addScope(t,"row"))};m.propTypes=f,m.defaultProps={children:[]};t.default=m},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=(r=n(67294))&&r.__esModule?r:{default:r};var a={addScope:function(e,t){var n=[];return l.default.Children.forEach(e,(function(e){n.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=a},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=i(n(32634)),l=i(n(80196)),a=i(n(70829)),o=i(n(8685)),d=i(n(19852)),u=i(n(80876));function i(e){return e&&e.__esModule?e:{default:e}}t.default=r.default},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(21969));function a(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var d=function(e){var t=o({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=d},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);