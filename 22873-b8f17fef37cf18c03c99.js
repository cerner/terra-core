"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[22873],{55713:function(e,t,n){var r=n(24994);t.A=void 0;var l=r(n(96540)),a=r(n(5556)),o=r(n(67967)),u=r(n(25642)),d=o.default.bind(u.default),i={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,a=e.version,o=l.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(a)},l.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(a))),u=t?l.default.createElement("a",{className:d("badge"),href:t},l.default.createElement("span",{className:d("badge-name")},"github"),l.default.createElement("span",{className:d("badge-version")},"source")):void 0;return l.default.createElement("div",{className:d("badge-container")},o,u)};c.propTypes=i;t.A=c},201:function(e,t,n){var r=n(24994),l=n(73738);t.A=void 0;var a=r(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(96540)),u=r(n(5556)),d=r(n(67967)),i=n(92912),c=r(n(27166)),s=r(n(62441)),f=n(25966),p=r(n(89986));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var b=d.default.bind(p.default),_={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,l=e.title,u=e.description,d=e.isExpanded,p=(0,o.useState)(d),m=(0,a.default)(p,2),_=m[0],g=m[1],h=(0,o.useState)(!1),x=(0,a.default)(h,2),O=x[0],E=x[1],j=o.default.useContext(i.ThemeContext),T=void 0!==r,P=function(){E(!O),_&&g(!_)},w=function(){g(!_),O&&E(!O)},N=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:b("template",j.className)},o.default.createElement("div",{className:b("header")},l&&o.default.createElement("h2",{className:b("title")},l)),o.default.createElement("div",{className:b("content")},u&&o.default.createElement("div",{className:b("description")},u),t),o.default.createElement("div",{className:b("footer")},n?o.default.createElement("div",{className:b("button-container")},T&&o.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":O}),onClick:P,onKeyDown:function(e){return N(e,P)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:b("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:b("chevron")})),o.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":_}),onClick:w,onKeyDown:function(e){return N(e,w)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:b("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:b("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:b("css")},r),_&&o.default.createElement("div",{className:b("code")},n))))};g.propTypes=_,g.defaultProps={isExpanded:!1};t.A=g},12883:function(e,t,n){var r=n(24994),l=n(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return i.Row}}),t.Ay=t.$d=void 0;var a=f(n(96540)),o=r(n(5556)),u=r(n(67967)),d=n(92912),i=f(n(17568)),c=r(n(89744));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var p=u.default.bind(c.default),m={children:o.default.node},b={isRequired:o.default.bool};(t.dt=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:p("bold")},t)}).propTypes=m,(t.$d=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:p("code-block-override")},t)}).propTypes=m,(t.YZ=function(e){var t=e.isRequired;return a.default.createElement(i.Cell,{className:p([t?["required"]:[]])},t?"required":"optional")}).propTypes=b,(t.NZ=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:p("code-block-override")},t)}).propTypes=m,(t.Hd=function(e){var t=e.children;return a.default.createElement(i.Cell,null,t)}).propTypes=m;var _=function(e){var t=e.children,n=(0,a.useContext)(d.ThemeContext);return a.default.createElement(i.default,{paddingStyle:"compact",className:p("table",n.className)},a.default.createElement(i.Header,{className:p("header")},a.default.createElement(i.HeaderCell,null,"Prop"),a.default.createElement(i.HeaderCell,null,"Type"),a.default.createElement(i.HeaderCell,null,"Required"),a.default.createElement(i.HeaderCell,null,"Default"),a.default.createElement(i.HeaderCell,null,"Description")),a.default.createElement(i.Body,null,t))};_.propTypes=m;t.Ay=_},22873:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r=n(96540),l=n(36665),a=n(49898),o=n(84317),u=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c={};function s(e){var t=e.components,n=i(e,u);return(0,l.mdx)("wrapper",d({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport List, { SubsectionHeader } from 'terra-list/lib/index';\n\nconst ListSubsectionHeaderExample = () => (\n  <List>\n    <SubsectionHeader title=\"Default SubsectionHeader\" key=\"default\" />\n  </List>\n);\n\nexport default ListSubsectionHeaderExample;\n\n")))}s.isMDXComponent=!0;var f=n(201),p=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(f.A,{title:t||"List Subsection Header",description:n,example:r.createElement(o.A,null),exampleSrc:r.createElement(s,null),isExpanded:l})},m=n(12883),b=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var v={},g="wrapper";function h(e){var t=e.components,n=y(e,b);return(0,l.mdx)(g,_({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(m.Ay,{mdxType:"PropsTable"},(0,l.mdx)(m.fI,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(m.dt,{mdxType:"PropNameCell"},"level"),(0,l.mdx)(m.$d,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  2\n  3\n  4\n  5\n  6\n],\n"))),(0,l.mdx)(m.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(m.NZ,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"2\n"))),(0,l.mdx)(m.Hd,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Optionally sets the heading level. One of ",(0,l.mdx)("inlineCode",{parentName:"p"},"2"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"3"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"4"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"5"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"6"),"."))),(0,l.mdx)(m.fI,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(m.dt,{mdxType:"PropNameCell"},"refCallback"),(0,l.mdx)(m.$d,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(m.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(m.NZ,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(m.Hd,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Function callback passthrough for the ref of the section li."))),(0,l.mdx)(m.fI,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(m.dt,{mdxType:"PropNameCell"},"title"),(0,l.mdx)(m.$d,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(m.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(m.NZ,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(m.Hd,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Title text to be placed within the subsection header.")))))}h.isMDXComponent=!0;var x=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var j={},T="wrapper";function P(e){var t=e.components,n=E(e,x);return(0,l.mdx)(T,O({},j,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(a.E,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"list-subsection-header"},"List Subsection Header"),(0,l.mdx)("p",null,"The list subsection header is a sub-component of the list subsection. It provides the visual representation of the subsection, but does not provided any collapsible functionality itself, it's collapsible props are for the display of the collapse/expand indicator. The subsection header should only be consumed directly when the header is static, as the actual list item collapse is handled by the subsection."),(0,l.mdx)("p",null,"When consumed by itself as an individual list item avoid enabling the collapsible properties."),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import List, { SubsectionHeader } from 'terra-list/lib/List';\n")),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(p,{mdxType:"ListSubsectionHeaderExample"}),(0,l.mdx)("h2",{id:"list-subsection-header-props"},"List Subsection Header Props"),(0,l.mdx)(h,{mdxType:"ListSubsectionHeaderPropsTable"}))}P.isMDXComponent=!0},49898:function(e,t,n){n.d(t,{E:function(){return a}});var r=n(96540),l=n(55713),a=function(e){var t=e.url;return r.createElement(l.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-list",name:"terra-list",version:"4.73.1",url:t})}},84317:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.A=void 0;var l,a=(l=n(96540))&&l.__esModule?l:{default:l},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(l,o,d):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(79436));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}t.A=function(){return a.default.createElement(o.default,null,a.default.createElement(o.SubsectionHeader,{title:"Default SubsectionHeader",key:"default"}))}},17212:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(96540)),l=c(n(5556)),a=c(n(46942)),o=c(n(67967)),u=c(n(52103)),d=c(n(19677)),i=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=o.default.bind(d.default),m={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},b=function(e){var t=e.children,n=e.disableStripes,l=e.paddingStyle,o=f(e,i),d=r.default.useContext(u.default),c=(0,a.default)(p("table",{striped:!n},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},d.className),o.className);return r.default.createElement("table",s({},o,{className:c}),t)};b.propTypes=m,b.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=b},15460:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),l=o(n(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d={children:l.default.node},i=function(e){var t=e.children,n=u(e,a);return r.default.createElement("tbody",n,t)};i.propTypes=d,i.defaultProps={children:[]};t.default=i},59584:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),l=o(n(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d={children:l.default.node},i=function(e){var t=e.children,n=u(e,a);return r.default.createElement("td",n,t)};i.propTypes=d,i.defaultProps={children:[]};t.default=i},14281:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(96540)),l=u(n(5556)),a=u(n(93623)),o=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},c=function(e){var t=e.children,n=d(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,a.default.addScope(t,"col")))};c.propTypes=i,c.defaultProps={children:[]};t.default=c},93401:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),l=o(n(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d={children:l.default.node},i=function(e){var t=e.children,n=u(e,a);return r.default.createElement("th",n,t)};i.propTypes=d,i.defaultProps={children:[]};t.default=i},96646:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(96540)),l=i(n(5556)),a=i(n(67967)),o=i(n(19677)),u=i(n(93623)),d=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var f=a.default.bind(o.default),p={children:l.default.node},m=function(e){var t=e.children,n=s(e,d),l=f(["row"]);return r.default.createElement("tr",c({},n,{className:n.className?"".concat(l," ").concat(n.className):l}),u.default.addScope(t,"row"))};m.propTypes=p,m.defaultProps={children:[]};t.default=m},93623:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=(r=n(96540))&&r.__esModule?r:{default:r};var a={addScope:function(e,t){var n=[];return l.default.Children.forEach(e,(function(e){n.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=a},17568:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=i(n(17212)),l=i(n(15460)),a=i(n(96646)),o=i(n(59584)),u=i(n(14281)),d=i(n(93401));function i(e){return e&&e.__esModule?e:{default:e}}t.default=r.default},27166:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(96540)),l=a(n(56445));function a(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},89744:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},19677:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);