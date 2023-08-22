"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[24698],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),u=r(n(17422)),i=o.default.bind(u.default),c={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},s=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),u=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},o,u)};s.propTypes=c;var d=s;t.Z=d},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),u=r(n(45697)),i=r(n(47166)),c=n(21538),s=r(n(13810)),d=r(n(40931)),p=n(51051),m=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var b=i.default.bind(m.default),y={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,u=e.description,i=e.isExpanded,m=(0,o.useState)(i),f=(0,l.default)(m,2),y=f[0],_=f[1],x=(0,o.useState)(!1),h=(0,l.default)(x,2),O=h[0],j=h[1],E=o.default.useContext(c.ThemeContext),S=void 0!==r,w=function(){j(!O),y&&_(!y)},T=function(){_(!y),O&&j(!O)},N=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:b("template",E.className)},o.default.createElement("div",{className:b("header")},a&&o.default.createElement("h2",{className:b("title")},a)),o.default.createElement("div",{className:b("content")},u&&o.default.createElement("div",{className:b("description")},u),t),o.default.createElement("div",{className:b("footer")},n?o.default.createElement("div",{className:b("button-container")},S&&o.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":O}),onClick:w,onKeyDown:function(e){return N(e,w)},onBlur:v,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:b("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:b("chevron")})),o.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":y}),onClick:T,onKeyDown:function(e){return N(e,T)},onBlur:v,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:b("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:b("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:b("css")},r),y&&o.default.createElement("div",{className:b("code")},n))))};_.propTypes=y,_.defaultProps={isExpanded:!1};var x=_;t.Z=x},78530:function(e,t,n){var r=n(64836),a=n(18698);Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return c.Row}}),t.Ex=t.mW=t.dS=t.Di=t.O=t.ZP=void 0;var l=p(n(67294)),o=r(n(45697)),u=r(n(47166)),i=n(21538),c=p(n(37515)),s=r(n(54931));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var m=u.default.bind(s.default),f={children:o.default.node},b={isRequired:o.default.bool},y=function(e){var t=e.children;return l.default.createElement(c.Cell,{className:m("bold")},t)};t.O=y,y.propTypes=f;var v=function(e){var t=e.children;return l.default.createElement(c.Cell,{className:m("code-block-override")},t)};t.Di=v,v.propTypes=f;var g=function(e){var t=e.isRequired;return l.default.createElement(c.Cell,{className:m([t?["required"]:[]])},t?"required":"optional")};t.dS=g,g.propTypes=b;var _=function(e){var t=e.children;return l.default.createElement(c.Cell,{className:m("code-block-override")},t)};t.mW=_,_.propTypes=f;var x=function(e){var t=e.children;return l.default.createElement(c.Cell,null,t)};t.Ex=x,x.propTypes=f;var h=function(e){var t=e.children,n=(0,l.useContext)(i.ThemeContext);return l.default.createElement(c.default,{paddingStyle:"compact",className:m("table",n.className)},l.default.createElement(c.Header,{className:m("header")},l.default.createElement(c.HeaderCell,null,"Prop"),l.default.createElement(c.HeaderCell,null,"Type"),l.default.createElement(c.HeaderCell,null,"Required"),l.default.createElement(c.HeaderCell,null,"Default"),l.default.createElement(c.HeaderCell,null,"Description")),l.default.createElement(c.Body,null,t))};h.propTypes=f;var O=h;t.ZP=O},24698:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var r=n(67294),a=n(81254),l=n(12911),o=n(51866),u=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function d(e){var t=e.components,n=c(e,u);return(0,a.mdx)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Status from 'terra-status';\nimport classNames from 'classnames/bind';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst simpleText = <div className={cx('text-wrapper')}>Sample text</div>;\n\nconst StatusDefault = () => (\n  <div>\n    <Status colorClass={cx(['success'])} visuallyHiddenText=\"Status Success\">{simpleText}</Status>\n  </div>\n);\n\nexport default StatusDefault;\n\n")))}d.isMDXComponent=!0;var p=n(49271),m=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y={};function v(e){var t=e.components,n=b(e,m);return(0,a.mdx)("wrapper",f({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},"/* stylelint-disable terra/custom-property-namespace*/\n@import './clinical-lowlight-theme/colors.module';\n@import './orion-fusion-theme/colors.module';\n\n:root {\n  --terra-status-attention-border-left-color: #f00;\n  --terra-status-success-border-left-color: #0f0;\n  --terra-status-info-border-left-color: rgb(0, 0, 255);\n}\n\n:local {\n  .attention {\n    border-left-color: var(--terra-status-attention-border-left-color, #f00);\n  }\n\n  .success {\n    border-left-color: var(--terra-status-success-border-left-color, #0f0);\n  }\n\n  .info {\n    border-left-color: var(--terra-status-info-border-left-color, rgb(0, 0, 255));\n  }\n\n  .image-wrapper {\n    display: block;\n  }\n\n  .text-wrapper {\n    padding: 5px;\n  }\n}\n\n")))}v.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Status Default",description:n,example:r.createElement(o.Z,null),exampleCssSrc:r.createElement(v,null),exampleSrc:r.createElement(d,null),isExpanded:a})},_=n(56300),x=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={};function E(e){var t=e.components,n=O(e,x);return(0,a.mdx)("wrapper",h({},j,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Status from 'terra-status';\nimport classNames from 'classnames/bind';\nimport placeholderPic150x150 from './150x150.jpg';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst image = <img className={cx('image-wrapper')} height=\"150\" width=\"150\" src={placeholderPic150x150} alt=\"placeholder\" />;\n\nconst StatusImage = () => (\n  <Status colorClass={cx(['attention'])} visuallyHiddenText=\"Status Attention\">{image}</Status>\n);\n\nexport default StatusImage;\n\n")))}E.isMDXComponent=!0;var S=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Status Image",description:n,example:r.createElement(_.Z,null),exampleCssSrc:r.createElement(v,null),exampleSrc:r.createElement(E,null),isExpanded:a})},w=n(85993),T=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var C={};function M(e){var t=e.components,n=P(e,T);return(0,a.mdx)("wrapper",N({},C,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport IconDue from 'terra-icon/lib/icon/IconDue';\nimport Status from 'terra-status';\nimport classNames from 'classnames/bind';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst icon = <IconDue height=\"60\" width=\"60\" />;\n\nconst StatusIcon = () => (\n  <Status colorClass={cx(['info'])} visuallyHiddenText=\"Status Info\">{icon}</Status>\n);\n\nexport default StatusIcon;\n\n")))}M.isMDXComponent=!0;var D=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Status Icon",description:n,example:r.createElement(w.Z,null),exampleCssSrc:r.createElement(v,null),exampleSrc:r.createElement(M,null),isExpanded:a})},k=n(68412),A=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var H={};function Z(e){var t=e.components,n=R(e,A);return(0,a.mdx)("wrapper",I({},H,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Arrange from 'terra-arrange';\nimport Status from 'terra-status';\nimport classNames from 'classnames/bind';\nimport placeholderPic150x150 from './150x150.jpg';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst image = <img className={cx('image-wrapper')} height=\"150\" width=\"150\" src={placeholderPic150x150} alt=\"placeholder\" />;\nconst simpleText = <div className={cx('text-wrapper')}>Sample text</div>;\n\nconst StatusArrange = () => (\n  <div>\n    <Status colorClass={cx(['attention'])} visuallyHiddenText=\"Status Attention\">\n      <Arrange fitStart={image} fill={simpleText} alignFill=\"center\" />\n    </Status>\n  </div>\n);\n\nexport default StatusArrange;\n\n")))}Z.isMDXComponent=!0;var X=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Status Arrange",description:n,example:r.createElement(k.Z,null),exampleCssSrc:r.createElement(v,null),exampleSrc:r.createElement(Z,null),isExpanded:a})},q=n(78530),F=["components"];function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var L={},z="wrapper";function V(e){var t=e.components,n=W(e,F);return(0,a.mdx)(z,B({},L,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(q.ZP,{mdxType:"PropsTable"},(0,a.mdx)(q.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(q.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(q.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(q.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Child node. Component to display next to the status indicator."))),(0,a.mdx)(q.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(q.O,{mdxType:"PropNameCell"},"visuallyHiddenText"),(0,a.mdx)(q.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Visually hidden text used to convey the meaning of the status indicator to screen readers."))),(0,a.mdx)(q.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(q.O,{mdxType:"PropNameCell"},"colorClass"),(0,a.mdx)(q.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets an author defined class, to control the colors of the status indicator."),(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge//IMPORTANT/blue?icon=github",alt:"IMPORTANT"}),"\nAdding ",(0,a.mdx)("inlineCode",{parentName:"p"},"var(--my-app...")," CSS variables is required for proper re-themeability when creating custom color styles ",(0,a.mdx)("em",{parentName:"p"},"(see included examples)"),".")))))}V.isMDXComponent=!0;var K=["components"];function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function G(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Y={},U="wrapper";function Q(e){var t=e.components,n=G(e,K);return(0,a.mdx)(U,J({},Y,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-status"},"Terra Status"),(0,a.mdx)("p",null,"The status component provides a customizable color indictor to signify a specific condition."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-status"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Status from 'terra-status';\n")),(0,a.mdx)("h2",{id:"adding-custom-classname"},"Adding custom className"),(0,a.mdx)("p",null,"This component allows user to pass custom className. The variable must start with ",(0,a.mdx)("inlineCode",{parentName:"p"},"--my-app")," for proper re-themeability."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-css"},":root {\n  --my-app-status-attention-color: red;\n  --my-app-status-success-color: #00ff00;\n  --my-app-status-info-color: rgb(0,0,255);\n}\n\n.attention {\n  border-left-color: var(--my-app-status-attention-color, red);\n}\n\n.success {\n  border-left-color: var(--my-app-status-success-color, #00ff00);\n}\n\n.info {\n  border-left-color: var(--my-app-status-info-color, rgb(0,0,255));\n}\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(g,{title:"Status with text",mdxType:"StatusDefault"}),(0,a.mdx)(S,{title:"Status with Image",mdxType:"StatusImage"}),(0,a.mdx)(D,{title:"Status with Icon",mdxType:"StatusIcon"}),(0,a.mdx)(X,{title:"Status with Arrange",mdxType:"StatusArrange"}),(0,a.mdx)("h2",{id:"status-props"},"Status Props"),(0,a.mdx)(V,{mdxType:"StatusPropsTable"}))}Q.isMDXComponent=!0},12911:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-status",name:"terra-status",version:"4.56.0",url:t})}},68319:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var a=c(n(67294)),l=c(n(45697)),o=c(n(47166)),u=c(n(1947)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var b=o.default.bind(u.default),y={fitStart:l.default.element,fill:l.default.element.isRequired,fitEnd:l.default.element,align:l.default.oneOf(["center","bottom","stretch"]),alignFitStart:l.default.oneOf(["center","bottom","stretch"]),alignFitEnd:l.default.oneOf(["center","bottom","stretch"]),alignFill:l.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:l.default.object,fillAttributes:l.default.object,fitEndAttributes:l.default.object},v=function(e){var t=e.fitStart,n=e.fill,r=e.fitEnd,l=e.align,o=e.alignFitStart,u=e.alignFill,c=e.alignFitEnd,d=e.fitStartAttributes,m=e.fillAttributes,y=e.fitEndAttributes,v=f(e,i),g=p({},d),_=p({},m),x=p({},y);return a.default.createElement("span",s({},v,{className:b("arrange",v.className)}),a.default.createElement("span",s({},g,{className:b("fit",l||o,g.className,"fit-block")}),t),a.default.createElement("span",s({},_,{className:b("fill",l||u,_.className,"fill-block")}),n),a.default.createElement("span",s({},x,{className:b("fit",l||c,x.className)}),r))};v.propTypes=y;var g=v;t.default=g},68412:function(e,t,n){t.Z=void 0;var r=c(n(67294)),a=c(n(68319)),l=c(n(52177)),o=c(n(47166)),u=c(n(4213)),i=c(n(98326));function c(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(i.default),d=r.default.createElement("img",{className:s("image-wrapper"),height:"150",width:"150",src:u.default,alt:"placeholder"}),p=r.default.createElement("div",{className:s("text-wrapper")},"Sample text"),m=function(){return r.default.createElement("div",null,r.default.createElement(l.default,{colorClass:s(["attention"]),visuallyHiddenText:"Status Attention"},r.default.createElement(a.default,{fitStart:d,fill:p,alignFill:"center"})))};t.Z=m},51866:function(e,t,n){t.Z=void 0;var r=u(n(67294)),a=u(n(52177)),l=u(n(47166)),o=u(n(98326));function u(e){return e&&e.__esModule?e:{default:e}}var i=l.default.bind(o.default),c=r.default.createElement("div",{className:i("text-wrapper")},"Sample text"),s=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{colorClass:i(["success"]),visuallyHiddenText:"Status Success"},c))};t.Z=s},85993:function(e,t,n){t.Z=void 0;var r=i(n(67294)),a=i(n(22193)),l=i(n(52177)),o=i(n(47166)),u=i(n(98326));function i(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(u.default),s=r.default.createElement(a.default,{height:"60",width:"60"}),d=function(){return r.default.createElement(l.default,{colorClass:c(["info"]),visuallyHiddenText:"Status Info"},s)};t.Z=d},56300:function(e,t,n){t.Z=void 0;var r=i(n(67294)),a=i(n(52177)),l=i(n(47166)),o=i(n(4213)),u=i(n(98326));function i(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(u.default),s=r.default.createElement("img",{className:c("image-wrapper"),height:"150",width:"150",src:o.default,alt:"placeholder"}),d=function(){return r.default.createElement(a.default,{colorClass:c(["attention"]),visuallyHiddenText:"Status Attention"},s)};t.Z=d},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(67294)),a=s(n(45697)),l=s(n(94184)),o=s(n(47166)),u=s(n(50026)),i=s(n(16749)),c=["children","disableStripes","paddingStyle"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.default.bind(i.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},b=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=p(e,c),i=r.default.useContext(u.default),s=(0,l.default)(m("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},i.className),o.className);return r.default.createElement("table",d({},o,{className:s}),t)};b.propTypes=f,b.defaultProps={disableStripes:!1,paddingStyle:"none"};var y=b;t.default=y},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},c=function(e){var t=e.children,n=u(e,l);return r.default.createElement("tbody",n,t)};c.propTypes=i,c.defaultProps={children:[]};var s=c;t.default=s},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},c=function(e){var t=e.children,n=u(e,l);return r.default.createElement("td",n,t)};c.propTypes=i,c.defaultProps={children:[]};var s=c;t.default=s},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(29805)),o=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={children:a.default.node},s=function(e){var t=e.children,n=i(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};s.propTypes=c,s.defaultProps={children:[]};var d=s;t.default=d},80876:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},c=function(e){var t=e.children,n=u(e,l);return r.default.createElement("th",n,t)};c.propTypes=i,c.defaultProps={children:[]};var s=c;t.default=s},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(47166)),o=c(n(16749)),u=c(n(29805)),i=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.default.bind(o.default),m={children:a.default.node},f=function(e){var t=e.children,n=d(e,i),a=p(["row"]);return r.default.createElement("tr",s({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),u.default.addScope(t,"row"))};f.propTypes=m,f.defaultProps={children:[]};var b=f;t.default=b},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(67294))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=c(n(32634)),a=c(n(80196)),l=c(n(70829)),o=c(n(8685)),u=c(n(19852)),i=c(n(80876));function c(e){return e&&e.__esModule?e:{default:e}}var s=r.default;t.default=s},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=u;t.default=i},22193:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M31.1 31.4a1.51 1.51 0 1 1-2.1 2.1l-6.1-6.1a3 3 0 0 1-.5-.7.31.31 0 0 0-.1-.2c0-.1-.1-.3-.1-.4V15.3a1.69 1.69 0 0 1 1.5-1.8 1.69 1.69 0 0 1 1.5 1.8v10.3zm14.3-4.8a21.26 21.26 0 0 1-4.6 13.3A21.42 21.42 0 1 1 20.9 5.4V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3.4a18.63 18.63 0 0 1 3.4.7 24.25 24.25 0 0 1 6.4 3.3l2.2-2.2a2.05 2.05 0 0 1 2.9 0l1.4 1.4a2.05 2.05 0 0 1 0 2.9l-2.1 2.1a22 22 0 0 1 4.3 13zm-3 0A18.34 18.34 0 0 0 29.5 9a20.32 20.32 0 0 0-5.5-.8A18.4 18.4 0 1 0 38.4 38a18.16 18.16 0 0 0 4-11.4z"}))};u.displayName="IconDue",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=u;t.default=i},52177:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(47166)),o=c(n(74754)),u=c(n(78511)),i=["children","visuallyHiddenText","colorClass"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.default.bind(u.default),m={children:a.default.node.isRequired,visuallyHiddenText:a.default.string,colorClass:a.default.string},f=function(e){var t=e.children,n=e.visuallyHiddenText,a=e.colorClass,l=d(e,i);return r.default.createElement("div",s({},l,{className:p("status",a,l.className)}),n&&r.default.createElement(o.default,{text:n}),t)};f.propTypes=m;var b=f;t.default=b},4213:function(e,t,n){n.r(t),t.default=n.p+"51d085f765a7361bab659ffffdb9bb46.jpg"},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},1947:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___tayob",fill:"Arrange-module__fill___JGXgw",fit:"Arrange-module__fit___BodSy",center:"Arrange-module__center___lVVfc",bottom:"Arrange-module__bottom___TiTgB",stretch:"Arrange-module__stretch___BFg42",default:"Arrange-module__default___6XJU-"}},98326:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"colors-module__clinical-lowlight-theme___2l3J0","orion-fusion-theme":"colors-module__orion-fusion-theme___swP6I",attention:"colors-module__attention___yVjpx",success:"colors-module__success___cXrOC",info:"colors-module__info___mTXnj","image-wrapper":"colors-module__image-wrapper___SHgK0","text-wrapper":"colors-module__text-wrapper___vMcb+"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}},78511:function(e,t,n){n.r(t),t.default={status:"Status-module__status___1FFzm"}}}]);