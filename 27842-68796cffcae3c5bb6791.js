"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[27842],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),i=a(n(45697)),o=a(n(47166)),l=a(n(17422)),m=o.default.bind(l.default),d={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},p=function(e){var t=e.src,n=e.name,a=e.url,i=e.version,o=r.default.createElement("a",{className:m("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},r.default.createElement("span",{className:m("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:m("badge-version")},"v".concat(i))),l=t?r.default.createElement("a",{className:m("badge"),href:t},r.default.createElement("span",{className:m("badge-name")},"github"),r.default.createElement("span",{className:m("badge-version")},"source")):void 0;return r.default.createElement("div",{className:m("badge-container")},o,l)};p.propTypes=d;var c=p;t.Z=c},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var i=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),l=a(n(45697)),m=a(n(47166)),d=n(21538),p=a(n(13810)),c=a(n(40931)),u=n(51051),s=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var v=m.default.bind(s.default),x={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,l=e.description,m=e.isExpanded,s=(0,o.useState)(m),f=(0,i.default)(s,2),x=f[0],g=f[1],k=(0,o.useState)(!1),N=(0,i.default)(k,2),_=N[0],y=N[1],E=o.default.useContext(d.ThemeContext),w=void 0!==a,C=function(){y(!_),x&&g(!x)},O=function(){g(!x),_&&y(!_)},B=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:v("template",E.className)},o.default.createElement("div",{className:v("header")},r&&o.default.createElement("h2",{className:v("title")},r)),o.default.createElement("div",{className:v("content")},l&&o.default.createElement("div",{className:v("description")},l),t),o.default.createElement("div",{className:v("footer")},n?o.default.createElement("div",{className:v("button-container")},w&&o.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":_}),onClick:C,onKeyDown:function(e){return B(e,C)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:v("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(c.default,{className:v("chevron")})),o.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":x}),onClick:O,onKeyDown:function(e){return B(e,O)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:v("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(c.default,{className:v("chevron")}))):null,o.default.createElement("div",null,_&&o.default.createElement("div",{className:v("css")},a),x&&o.default.createElement("div",{className:v("code")},n))))};g.propTypes=x,g.defaultProps={isExpanded:!1};var k=g;t.Z=k},27842:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var a=n(67294),r=n(81254),i=n(22659),o=n(20213),l=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={};function c(e){var t=e.components,n=d(e,l);return(0,r.mdx)("wrapper",m({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ActiveBreakpointProvider, withActiveBreakpoint, ActiveBreakpointContext } from 'terra-breakpoints';\n\nconst ActiveBreakpointConsumer1 = withActiveBreakpoint(({ activeBreakpoint }) => (\n  <div>\n    <p>This component uses the withActiveBreakpoint() component generator to interface with the ActiveBreakpointProvider.</p>\n    <p>\n      The active breakpoint is:\n      {' '}\n      {activeBreakpoint}\n    </p>\n  </div>\n));\n\nconst ActiveBreakpointConsumer2 = () => (\n  <ActiveBreakpointContext.Consumer>\n    {\n      activeBreakpoint => (\n        <div>\n          <p>This component interfaces with the ActiveBreakpointContext directly.</p>\n          <p>\n            The active breakpoint is:\n            {' '}\n            {activeBreakpoint}\n          </p>\n        </div>\n      )\n    }\n  </ActiveBreakpointContext.Consumer>\n);\n\nconst ActiveBreakpointProviderExample = () => (\n  <ActiveBreakpointProvider>\n    <ActiveBreakpointConsumer1 />\n    <hr />\n    <ActiveBreakpointConsumer2 />\n  </ActiveBreakpointProvider>\n);\n\nexport default ActiveBreakpointProviderExample;\n\n")))}c.isMDXComponent=!0;var u=n(49271),s=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:t||"Active Breakpoint Provider Example",description:n,example:a.createElement(o.Z,null),exampleSrc:a.createElement(c,null),isExpanded:r})},f=n(29260),v=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},x.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h={};function g(e){var t=e.components,n=b(e,v);return(0,r.mdx)("wrapper",x({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport styles from './MixinsExample.module.scss';\n\n/**\n  MixinsExample.module.scss\n\n  @import 'terra-breakpoints/mixins';\n\n  :local {\n    .content::after {\n      content: 'The active breakpoint is: tiny';\n\n      @include terra-mq-small-up {\n        content: 'The active breakpoint is: small';\n      }\n\n      @include terra-mq-medium-up {\n        content: 'The active breakpoint is: medium';\n      }\n\n      @include terra-mq-large-up {\n        content: 'The active breakpoint is: large';\n      }\n\n      @include terra-mq-huge-up {\n        content: 'The active breakpoint is: huge';\n      }\n\n      @include terra-mq-enormous-up {\n        content: 'The active breakpoint is: enormous';\n      }\n    }\n  }\n*/\n\nconst cx = classNames.bind(styles);\n\nconst MixinsExample = () => (\n  <div>\n    <p>This example uses Sass mixins to determine the active breakpoint.</p>\n    <p className={cx('content')} />\n  </div>\n);\n\nexport default MixinsExample;\n\n")))}g.isMDXComponent=!0;var k=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},N.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y={};function E(e){var t=e.components,n=_(e,k);return(0,r.mdx)("wrapper",N({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},"@import 'terra-breakpoints/lib/media-queries';\n\n:local {\n  .content::after {\n    content: 'The active breakpoint is: tiny';\n\n    @include terra-mq-small-up {\n      content: 'The active breakpoint is: small';\n    }\n\n    @include terra-mq-medium-up {\n      content: 'The active breakpoint is: medium';\n    }\n\n    @include terra-mq-large-up {\n      content: 'The active breakpoint is: large';\n    }\n\n    @include terra-mq-huge-up {\n      content: 'The active breakpoint is: huge';\n    }\n\n    @include terra-mq-enormous-up {\n      content: 'The active breakpoint is: enormous';\n    }\n  }\n}\n\n")))}E.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:t||"Mixins Example",description:n,example:a.createElement(f.Z,null),exampleCssSrc:a.createElement(E,null),exampleSrc:a.createElement(g,null),isExpanded:r})},C=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},O.apply(this,arguments)}function B(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A={},T="wrapper";function S(e){var t=e.components,n=B(e,C);return(0,r.mdx)(T,O({},A,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(i.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-breakpoints"},"Terra Breakpoints"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"terra-breakpoints")," contains components and utilities related to Terra's supported responsive breakpoints."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-breakpoints"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("h3",{id:"breakpoints"},"Breakpoints"),(0,r.mdx)("p",null,"An object containing the named breakpoint values is the default export of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-breakpoints")," package. These named breakpoints are defined as minimum values."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Breakpoint Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Minimum Value"),(0,r.mdx)("th",{parentName:"tr",align:null},"Media Query"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"tiny")),(0,r.mdx)("td",{parentName:"tr",align:null},"0px"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 0px)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 0px and up")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"small")),(0,r.mdx)("td",{parentName:"tr",align:null},"544px"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 544px)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 544px and up")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"medium")),(0,r.mdx)("td",{parentName:"tr",align:null},"768px"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 768px)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 768px and up")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"large")),(0,r.mdx)("td",{parentName:"tr",align:null},"992px"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 992px)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 992px and up")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"huge")),(0,r.mdx)("td",{parentName:"tr",align:null},"1216px"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1216px)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 1216 and up")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"enormous")),(0,r.mdx)("td",{parentName:"tr",align:null},"1440px"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1440px)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 1440px and up")))),(0,r.mdx)("p",null,"Utility functions are also provided to help determine what breakpoint is active for a given value."),(0,r.mdx)("h4",{id:"activebreakpointforsizewidthvalue"},(0,r.mdx)("inlineCode",{parentName:"h4"},"activeBreakpointForSize(widthValue)")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"activeBreakpointForSize")," will return the closest active breakpoint that matches the given width value."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { activeBreakpointForSize } from 'terra-breakpoints';\n\nconsole.log(activeBreakpointForSize(300));  // 'tiny'\nconsole.log(activeBreakpointForSize(544));  // 'small'\nconsole.log(activeBreakpointForSize(800));  // 'medium'\nconsole.log(activeBreakpointForSize(1000)); // 'large'\nconsole.log(activeBreakpointForSize(1300)); // 'huge'\nconsole.log(activeBreakpointForSize(1500)); // 'enormous'\n")),(0,r.mdx)("h4",{id:"breakpointisactiveforsizebreakpointname-widthvalue"},(0,r.mdx)("inlineCode",{parentName:"h4"},"breakpointIsActiveForSize(breakpointName, widthValue)")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"breakpointIsActiveForSize")," will return a boolean value indicating whether or not the given breakpoint name is active for the width value."),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Note that since the breakpoints are defined as minimum values, a breakpoint will be determined to be active if the width value is larger than the defined minimum, even if the width value is included in a higher breakpoint's range.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { breakpointIsActiveForSize } from 'terra-breakpoints';\n\nconsole.log(breakpointIsActiveForSize('tiny', 300));      // true\nconsole.log(breakpointIsActiveForSize('tiny', 544));      // true\nconsole.log(breakpointIsActiveForSize('tiny', 800));      // true\nconsole.log(breakpointIsActiveForSize('tiny', 1000));     // true\n\nconsole.log(breakpointIsActiveForSize('medium', 300));    // false\nconsole.log(breakpointIsActiveForSize('medium', 544));    // false\nconsole.log(breakpointIsActiveForSize('medium', 800));    // true\nconsole.log(breakpointIsActiveForSize('medium', 1500));   // true\n\nconsole.log(breakpointIsActiveForSize('enormous', 300));  // false\nconsole.log(breakpointIsActiveForSize('enormous', 544));  // false\nconsole.log(breakpointIsActiveForSize('enormous', 800));  // false\nconsole.log(breakpointIsActiveForSize('enormous', 1500)); // true\n")),(0,r.mdx)("h3",{id:"activebreakpointprovider"},"ActiveBreakpointProvider"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"terra-breakpoints")," also provides ",(0,r.mdx)("inlineCode",{parentName:"p"},"<ActiveBreakpointProvider>"),". a component that provides the current active breakpoint to child components using a Context-based API. This can be used to minimize the number of required resize event listeners and ensure consistency across the component hierarchy."),(0,r.mdx)("p",null,"A component generator called ",(0,r.mdx)("inlineCode",{parentName:"p"},"withActiveBreakpoint()")," is included to provide simple interfacing with the ActiveBreakpointProvider. However, the ActiveBreakpointContext can also be imported and used directly, if needed."),(0,r.mdx)("h3",{id:"media-queries"},"Media Queries"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"terra-breakpoints")," includes ",(0,r.mdx)("inlineCode",{parentName:"p"},"_media-queries.scss"),", which contains a set of Sass mixins that define media queries for the supported breakpoints."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},"@import '~terra-breakpoints/lib/media-queries';\n\n.example {\n  color: blue;\n\n  @include terra-mq-small-up {\n    color: red;\n  }\n\n  @include terra-mq-medium-up {\n    color: purple;\n  }\n\n  @include terra-mq-large-up {\n    color: green;\n  }\n\n  @include terra-mq-huge-up {\n    color: yellow;\n  }\n\n  @include terra-mq-enormous-up {\n    color: orange;\n  }\n}\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(s,{mdxType:"ActiveBreakpointProviderExample"}),(0,r.mdx)(w,{mdxType:"MixinsExample"}))}S.isMDXComponent=!0},22659:function(e,t,n){n.d(t,{C:function(){return i}});var a=n(67294),r=n(22863),i=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-breakpoints",name:"terra-breakpoints",version:"2.38.0",url:t})}},20213:function(e,t,n){t.Z=void 0;var a,r=(a=n(67294))&&a.__esModule?a:{default:a},i=n(31622);var o=(0,i.withActiveBreakpoint)((function(e){var t=e.activeBreakpoint;return r.default.createElement("div",null,r.default.createElement("p",null,"This component uses the withActiveBreakpoint() component generator to interface with the ActiveBreakpointProvider."),r.default.createElement("p",null,"The active breakpoint is:"," ",t))})),l=function(){return r.default.createElement(i.ActiveBreakpointContext.Consumer,null,(function(e){return r.default.createElement("div",null,r.default.createElement("p",null,"This component interfaces with the ActiveBreakpointContext directly."),r.default.createElement("p",null,"The active breakpoint is:"," ",e))}))},m=function(){return r.default.createElement(i.ActiveBreakpointProvider,null,r.default.createElement(o,null),r.default.createElement("hr",null),r.default.createElement(l,null))};t.Z=m},29260:function(e,t,n){t.Z=void 0;var a=o(n(67294)),r=o(n(47166)),i=o(n(75046));function o(e){return e&&e.__esModule?e:{default:e}}var l=r.default.bind(i.default),m=function(){return a.default.createElement("div",null,a.default.createElement("p",null,"This example uses Sass mixins to determine the active breakpoint."),a.default.createElement("p",{className:l("content")}))};t.Z=m},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),r=i(n(21969));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var l=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var m=l;t.default=m},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},75046:function(e,t,n){n.r(t),t.default={content:"MixinsExample-module__content___mqq5O"}}}]);