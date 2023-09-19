"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[1956],{22863:function(e,r,t){var n=t(64836);r.Z=void 0;var a=n(t(67294)),l=n(t(45697)),d=n(t(47166)),o=n(t(17422)),i=d.default.bind(o.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},p=function(e){var r=e.src,t=e.name,n=e.url,l=e.version,d=a.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),o=r?a.default.createElement("a",{className:i("badge"),href:r},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},d,o)};p.propTypes=u;var m=p;r.Z=m},78530:function(e,r,t){var n=t(64836),a=t(18698);r.dS=r.O=r.Ex=r.mW=void 0,Object.defineProperty(r,"X2",{enumerable:!0,get:function(){return u.Row}}),r.ZP=r.Di=void 0;var l=c(t(67294)),d=n(t(45697)),o=n(t(47166)),i=t(21538),u=c(t(37515)),p=n(t(54931));function m(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(m=function(e){return e?t:r})(e)}function c(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=m(r);if(t&&t.has(e))return t.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=l?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(n,d,o):n[d]=e[d]}return n.default=e,t&&t.set(e,n),n}var s=o.default.bind(p.default),f={children:d.default.node},x={isRequired:d.default.bool},y=function(e){var r=e.children;return l.default.createElement(u.Cell,{className:s("bold")},r)};r.O=y,y.propTypes=f;var b=function(e){var r=e.children;return l.default.createElement(u.Cell,{className:s("code-block-override")},r)};r.Di=b,b.propTypes=f;var g=function(e){var r=e.isRequired;return l.default.createElement(u.Cell,{className:s([r?["required"]:[]])},r?"required":"optional")};r.dS=g,g.propTypes=x;var v=function(e){var r=e.children;return l.default.createElement(u.Cell,{className:s("code-block-override")},r)};r.mW=v,v.propTypes=f;var h=function(e){var r=e.children;return l.default.createElement(u.Cell,null,r)};r.Ex=h,h.propTypes=f;var O=function(e){var r=e.children,t=(0,l.useContext)(i.ThemeContext);return l.default.createElement(u.default,{paddingStyle:"compact",className:s("table",t.className)},l.default.createElement(u.Header,{className:s("header")},l.default.createElement(u.HeaderCell,null,"Prop"),l.default.createElement(u.HeaderCell,null,"Type"),l.default.createElement(u.HeaderCell,null,"Required"),l.default.createElement(u.HeaderCell,null,"Default"),l.default.createElement(u.HeaderCell,null,"Description")),l.default.createElement(u.Body,null,r))};O.propTypes=f;var _=O;r.ZP=_},1956:function(e,r,t){t.r(r),t.d(r,{default:function(){return b}});t(67294);var n=t(81254),a=t(76368),l=t(78530),d=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u={},p="wrapper";function m(e){var r=e.components,t=i(e,d);return(0,n.mdx)(p,o({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.mdx)(l.ZP,{mdxType:"PropsTable"},(0,n.mdx)(l.X2,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(l.O,{mdxType:"PropNameCell"},"isBidi"),(0,n.mdx)(l.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,'Should the svg mirror when dir="rtl".'))),(0,n.mdx)(l.X2,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(l.O,{mdxType:"PropNameCell"},"isSpin"),(0,n.mdx)(l.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Should the SVG rotate."))),(0,n.mdx)(l.X2,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(l.O,{mdxType:"PropNameCell"},"children"),(0,n.mdx)(l.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,n.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Child nodes."))),(0,n.mdx)(l.X2,{key:"ROW4",mdxType:"Row"},(0,n.mdx)(l.O,{mdxType:"PropNameCell"},"height"),(0,n.mdx)(l.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"'1em'\n"))),(0,n.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Height of SVG."))),(0,n.mdx)(l.X2,{key:"ROW5",mdxType:"Row"},(0,n.mdx)(l.O,{mdxType:"PropNameCell"},"width"),(0,n.mdx)(l.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"'1em'\n"))),(0,n.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Width of SVG."))),(0,n.mdx)(l.X2,{key:"ROW6",mdxType:"Row"},(0,n.mdx)(l.O,{mdxType:"PropNameCell"},"a11yLabel"),(0,n.mdx)(l.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,(0,n.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nString that labels the current element.\na11yLabel is required for informative icons to convey meaning of icon to screenreaders."))),(0,n.mdx)(l.X2,{key:"ROW7",mdxType:"Row"},(0,n.mdx)(l.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,n.mdx)(l.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,(0,n.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/prop/deprecated/red",alt:"IMPORTANT"}),"\nariaLabel has been deprecated and will be removed on next major version release.\nrename the ",(0,n.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," prop to ",(0,n.mdx)("inlineCode",{parentName:"p"},"a11yLabel"),"."))),(0,n.mdx)(l.X2,{key:"ROW8",mdxType:"Row"},(0,n.mdx)(l.O,{mdxType:"PropNameCell"},"focusable"),(0,n.mdx)(l.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"'false'\n"))),(0,n.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Focusable attribute. IE 10/11 are focusable without this attribute.")))))}m.isMDXComponent=!0;var c=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function f(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var x={},y="wrapper";function b(e){var r=e.components,t=f(e,c);return(0,n.mdx)(y,s({},x,t,{components:r,mdxType:"MDXLayout"}),(0,n.mdx)(a.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-icon"},"Terra Icon"),(0,n.mdx)("p",null,"The terra-icon component is used to visually represent a literal or symbolic object intended to initiate an action, communicate a status, or navigate the workflow.\nIcons can be ",(0,n.mdx)("inlineCode",{parentName:"p"},"meaningful")," where they used to convey a semantic meaning or ",(0,n.mdx)("inlineCode",{parentName:"p"},"decorative")," where they are are simply used for aesthetic purposes."),(0,n.mdx)("p",null,"See ",(0,n.mdx)("a",{parentName:"p",href:"#usage"},"Usage")," for more information."),(0,n.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Install with ",(0,n.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"npm install terra-icon"))))),(0,n.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,n.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,n.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"react"),(0,n.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,n.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,n.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,n.mdx)("h2",{id:"usage"},"Usage"),(0,n.mdx)("p",null,"The value for ",(0,n.mdx)("inlineCode",{parentName:"p"},"a11yLabel")," prop is required for the icons that are ",(0,n.mdx)("inlineCode",{parentName:"p"},"meaningful")," which means that they are intended to convey meaning. "),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import { IconAdd, IconEdit } from \'terra-icon\';\n\n<div>\n  <IconAdd a11yLabel="add item"/>\n  <IconEdit a11yLabel="edit item"/>\n</div>\n')),(0,n.mdx)("p",null,"If icons are intended for aesthetic purposes (",(0,n.mdx)("inlineCode",{parentName:"p"},"decorative")," icons) then ",(0,n.mdx)("inlineCode",{parentName:"p"},"a11yLabel")," can be ignored."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import IconAllergy from 'terra-icon/lib/icon/IconAllergy';\nimport IconScratchPad from 'terra-icon/lib/icon/IconScratchPad';\n\n<div>\n  <IconAllergy />\n  <IconScratchPad />\n</div>\n")),(0,n.mdx)("p",null,"Refer to ",(0,n.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/icon/AccessibilityGuide"},"Accessibility guide")," to know more about informative and decorative icons."),(0,n.mdx)("h2",{id:"component-features"},"Component Features"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,n.mdx)("h2",{id:"icon-props"},"Icon Props"),(0,n.mdx)(m,{mdxType:"IconBasePropsTable"}))}b.isMDXComponent=!0},76368:function(e,r,t){t.d(r,{C:function(){return l}});var n=t(67294),a=t(22863),l=function(e){var r=e.url;return n.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-icon",name:"terra-icon",version:"3.56.0",url:r})}},32634:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=p(t(67294)),a=p(t(45697)),l=p(t(94184)),d=p(t(47166)),o=p(t(50026)),i=p(t(16749)),u=["children","disableStripes","paddingStyle"];function p(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},m.apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=d.default.bind(i.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},x=function(e){var r=e.children,t=e.disableStripes,a=e.paddingStyle,d=c(e,u),i=n.default.useContext(o.default),p=(0,l.default)(s("table",{striped:!t},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},i.className),d.className);return n.default.createElement("table",m({},d,{className:p}),r)};x.propTypes=f,x.defaultProps={disableStripes:!1,paddingStyle:"none"};var y=x;r.default=y},80196:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=d(t(67294)),a=d(t(45697)),l=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={children:a.default.node},u=function(e){var r=e.children,t=o(e,l);return n.default.createElement("tbody",t,r)};u.propTypes=i,u.defaultProps={children:[]};var p=u;r.default=p},8685:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=d(t(67294)),a=d(t(45697)),l=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={children:a.default.node},u=function(e){var r=e.children,t=o(e,l);return n.default.createElement("td",t,r)};u.propTypes=i,u.defaultProps={children:[]};var p=u;r.default=p},19852:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=o(t(67294)),a=o(t(45697)),l=o(t(29805)),d=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u={children:a.default.node},p=function(e){var r=e.children,t=i(e,d);return n.default.createElement("thead",t,n.default.createElement("tr",null,l.default.addScope(r,"col")))};p.propTypes=u,p.defaultProps={children:[]};var m=p;r.default=m},80876:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=d(t(67294)),a=d(t(45697)),l=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={children:a.default.node},u=function(e){var r=e.children,t=o(e,l);return n.default.createElement("th",t,r)};u.propTypes=i,u.defaultProps={children:[]};var p=u;r.default=p},70829:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=u(t(67294)),a=u(t(45697)),l=u(t(47166)),d=u(t(16749)),o=u(t(29805)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(this,arguments)}function m(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=l.default.bind(d.default),s={children:a.default.node},f=function(e){var r=e.children,t=m(e,i),a=c(["row"]);return n.default.createElement("tr",p({},t,{className:t.className?"".concat(a," ").concat(t.className):a}),o.default.addScope(r,"row"))};f.propTypes=s,f.defaultProps={children:[]};var x=f;r.default=x},29805:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n,a=(n=t(67294))&&n.__esModule?n:{default:n};var l={addScope:function(e,r){var t=[];return a.default.Children.forEach(e,(function(e){t.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?r:void 0}))})),t}};r.default=l},37515:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(r,"Cell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(r,"Header",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(r,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(r,"Row",{enumerable:!0,get:function(){return l.default}}),r.default=void 0;var n=u(t(32634)),a=u(t(80196)),l=u(t(70829)),d=u(t(8685)),o=u(t(19852)),i=u(t(80876));function u(e){return e&&e.__esModule?e:{default:e}}var p=n.default;r.default=p},17422:function(e,r,t){t.r(r),r.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},54931:function(e,r,t){t.r(r),r.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},16749:function(e,r,t){t.r(r),r.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);