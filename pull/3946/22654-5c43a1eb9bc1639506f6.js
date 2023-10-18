"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[22654],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),i=r(n(17422)),d=o.default.bind(i.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},s=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(l))),i=t?a.default.createElement("a",{className:d("badge"),href:t},a.default.createElement("span",{className:d("badge-name")},"github"),a.default.createElement("span",{className:d("badge-version")},"source")):void 0;return a.default.createElement("div",{className:d("badge-container")},o,i)};s.propTypes=u;var c=s;t.Z=c},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),i=r(n(45697)),d=r(n(47166)),u=n(21538),s=r(n(13810)),c=r(n(40931)),m=n(51051),p=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var b=d.default.bind(p.default),g={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,i=e.description,d=e.isExpanded,p=(0,o.useState)(d),f=(0,l.default)(p,2),g=f[0],v=f[1],_=(0,o.useState)(!1),x=(0,l.default)(_,2),O=x[0],E=x[1],T=o.default.useContext(u.ThemeContext),j=void 0!==r,N=function(){E(!O),g&&v(!g)},w=function(){v(!g),O&&E(!O)},C=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:b("template",T.className)},o.default.createElement("div",{className:b("header")},a&&o.default.createElement("h2",{className:b("title")},a)),o.default.createElement("div",{className:b("content")},i&&o.default.createElement("div",{className:b("description")},i),t),o.default.createElement("div",{className:b("footer")},n?o.default.createElement("div",{className:b("button-container")},j&&o.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":O}),onClick:N,onKeyDown:function(e){return C(e,N)},onBlur:h,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:b("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(c.default,{className:b("chevron")})),o.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":g}),onClick:w,onKeyDown:function(e){return C(e,w)},onBlur:h,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:b("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(c.default,{className:b("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:b("css")},r),g&&o.default.createElement("div",{className:b("code")},n))))};v.propTypes=g,v.defaultProps={isExpanded:!1};var _=v;t.Z=_},78530:function(e,t,n){var r=n(64836),a=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return u.Row}}),t.ZP=t.Di=void 0;var l=m(n(67294)),o=r(n(45697)),i=r(n(47166)),d=n(21538),u=m(n(37515)),s=r(n(54931));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var p=i.default.bind(s.default),f={children:o.default.node},b={isRequired:o.default.bool},g=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:p("bold")},t)};t.O=g,g.propTypes=f;var h=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:p("code-block-override")},t)};t.Di=h,h.propTypes=f;var y=function(e){var t=e.isRequired;return l.default.createElement(u.Cell,{className:p([t?["required"]:[]])},t?"required":"optional")};t.dS=y,y.propTypes=b;var v=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:p("code-block-override")},t)};t.mW=v,v.propTypes=f;var _=function(e){var t=e.children;return l.default.createElement(u.Cell,null,t)};t.Ex=_,_.propTypes=f;var x=function(e){var t=e.children,n=(0,l.useContext)(d.ThemeContext);return l.default.createElement(u.default,{paddingStyle:"compact",className:p("table",n.className)},l.default.createElement(u.Header,{className:p("header")},l.default.createElement(u.HeaderCell,null,"Prop"),l.default.createElement(u.HeaderCell,null,"Type"),l.default.createElement(u.HeaderCell,null,"Required"),l.default.createElement(u.HeaderCell,null,"Default"),l.default.createElement(u.HeaderCell,null,"Description")),l.default.createElement(u.Body,null,t))};x.propTypes=f;var O=x;t.ZP=O},22654:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var r=n(67294),a=n(81254),l=n(4953),o=n(96849),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function c(e){var t=e.components,n=u(e,i);return(0,a.mdx)("wrapper",d({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable no-alert */\nimport React from 'react';\nimport Dialog from 'terra-dialog';\nimport classNames from 'classnames/bind';\nimport styles from './DialogDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst header = 'Header Stuff';\n\nconst footer = <span>Footer Stuff</span>;\n\nconst body = (\n  <div>\n    <p>This is my body content.</p>\n    <p>This is some more content.</p>\n  </div>\n);\n\nconst DialogDefault = () => (\n  <div className={cx('dialog-wrapper')}>\n    <Dialog header={header} footer={footer} onClose={() => alert('Close')}>\n      {body}\n    </Dialog>\n  </div>\n);\n\nexport default DialogDefault;\n/* eslint-enable no-alert */\n\n")))}c.isMDXComponent=!0;var m=n(49271),p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g={};function h(e){var t=e.components,n=b(e,p);return(0,a.mdx)("wrapper",f({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .dialog-wrapper {\n    border: dashed;\n    height: 200px;\n    width: 350px;\n  }\n}\n\n")))}h.isMDXComponent=!0;var y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Dialog Default",description:n,example:r.createElement(o.Z,null),exampleCssSrc:r.createElement(h,null),exampleSrc:r.createElement(c,null),isExpanded:a})},v=n(45709),_=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E={};function T(e){var t=e.components,n=O(e,_);return(0,a.mdx)("wrapper",x({},E,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable no-alert */\nimport React from 'react';\nimport Dialog from 'terra-dialog';\nimport classNames from 'classnames/bind';\nimport styles from './DialogDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst header = 'Header Stuff';\n\nconst footer = (\n  <div>\n    <span>Footer Stuff</span>\n    <span>Footer Stuff</span>\n    <span>Footer Stuff</span>\n    <span>Footer Stuff</span>\n    <span>Footer Stuff</span>\n  </div>\n);\n\nconst body = (\n  <div>\n    <p>This is my body content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n  </div>\n);\n\nconst DialogLongContent = () => (\n  <div className={cx('dialog-wrapper')}>\n    <Dialog header={header} footer={footer} onClose={() => alert('Close')}>\n      {body}\n    </Dialog>\n  </div>\n);\n\nexport default DialogLongContent;\n/* eslint-enable no-alert */\n\n")))}T.isMDXComponent=!0;var j=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Dialog Long Content",description:n,example:r.createElement(v.Z,null),exampleCssSrc:r.createElement(h,null),exampleSrc:r.createElement(T,null),isExpanded:a})},N=n(90326),w=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var P={};function S(e){var t=e.components,n=D(e,w);return(0,a.mdx)("wrapper",C({},P,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport classNames from 'classnames/bind';\nimport styles from './DialogDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst header = 'Header Stuff';\n\nconst footer = <span>Footer Stuff</span>;\n\nconst body = (\n  <div>\n    <p>This is my body content.</p>\n    <p>This is some more content.</p>\n  </div>\n);\n\nconst DialogNoClose = () => (\n  <div className={cx('dialog-wrapper')}>\n    <Dialog header={header} footer={footer}>\n      {body}\n    </Dialog>\n  </div>\n);\n\nexport default DialogNoClose;\n\n")))}S.isMDXComponent=!0;var M=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Dialog No Close",description:n,example:r.createElement(N.Z,null),exampleCssSrc:r.createElement(h,null),exampleSrc:r.createElement(S,null),isExpanded:a})},k=n(78530),R=["components"];function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var I={},L="wrapper";function F(e){var t=e.components,n=Z(e,R);return(0,a.mdx)(L,q({},I,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(k.ZP,{mdxType:"PropsTable"},(0,a.mdx)(k.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The children to be placed within the main content area of the dialog."))),(0,a.mdx)(k.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"footer"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(k.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"React node to be placed within the footer area of the dialog.\nContent exceeding the available space will be hidden."))),(0,a.mdx)(k.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"header"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(k.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"React node to be placed within the header area of the dialog."))),(0,a.mdx)(k.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"onClose"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function for when the close button is clicked. The close button will not display if this is not set.\nOn small viewports a back button will be displayed instead of a close button.")))))}F.isMDXComponent=!0;var X=["components"];function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var W={},z="wrapper";function K(e){var t=e.components,n=H(e,X);return(0,a.mdx)(z,B({},W,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-dialog"},"Terra Dialog"),(0,a.mdx)("p",null,"Dialogs are temporary views that can be used in a myriad of ways. Dialogs have the ability to alert users to act on critical information. In doing so, Dialogs may allow users to avoid destructive decisions, and also extend user workflows without disorienting the user."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-dialog"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,a.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,a.mdx)("h2",{id:"implementation-notes"},"Implementation Notes:"),(0,a.mdx)("p",null,"The Dialog component must be composed inside the ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-core/components/terra-base/base/base"},"Base")," component with a locale in order for it to load the correct translation strings."),(0,a.mdx)("p",null,"Note: This component has an i18n dependency that requires setup as per ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/#internationalization-i18n"},"these steps"),"."),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Dialog from 'terra-dialog';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(y,{title:"Dialog - Default",mdxType:"DialogDefault"}),(0,a.mdx)(j,{title:"Dialog - Long Content",mdxType:"DialogLongContent"}),(0,a.mdx)(M,{title:"Dialog - No Close Button",mdxType:"DialogNoClose"}),(0,a.mdx)("h2",{id:"dialog-props"},"Dialog Props"),(0,a.mdx)(F,{mdxType:"DialogPropsTable"}))}K.isMDXComponent=!0},4953:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-dialog",name:"terra-dialog",version:"2.81.0",url:t})}},15192:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(67294)),a=p(n(45697)),l=p(n(94184)),o=p(n(47166)),i=p(n(50026)),d=p(n(43868)),u=p(n(20575)),s=n(25387),c=p(n(71786)),m=["children","footer","header","intl","onClose"];function p(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=o.default.bind(c.default),h={children:a.default.node,footer:a.default.node.isRequired,header:a.default.node.isRequired,intl:a.default.shape({formatMessage:a.default.func}).isRequired,onClose:a.default.func},y=function(e){var t=e.children,n=e.footer,a=e.header,o=e.intl,s=e.onClose,c=b(e,m),p=r.default.useContext(i.default),h=(0,l.default)(g("dialog",p.className),c.className),y=s?r.default.createElement("div",{className:g("dialog-header-close")},r.default.createElement(d.default,{variant:"utility",text:o.formatMessage({id:"Terra.dialog.close"}),onClick:s,isIconOnly:!0,icon:r.default.createElement("span",{className:g("close-icon")})})):null,v=r.default.createElement("div",{className:g("dialog-header")},r.default.createElement("div",{className:g("dialog-header-title")},a),y);return r.default.createElement("div",f({},c,{className:h}),r.default.createElement(u.default,{fill:!0,header:v,footer:r.default.createElement("div",{className:g("dialog-footer")},n)},r.default.createElement("div",{className:g("dialog-body")},t)))};y.propTypes=h,y.defaultProps={onClose:null,children:null};t.default=(0,s.injectIntl)(y)},96849:function(e,t,n){t.Z=void 0;var r=i(n(67294)),a=i(n(15192)),l=i(n(47166)),o=i(n(51717));function i(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(o.default),u=r.default.createElement("span",null,"Footer Stuff"),s=r.default.createElement("div",null,r.default.createElement("p",null,"This is my body content."),r.default.createElement("p",null,"This is some more content."));t.Z=function(){return r.default.createElement("div",{className:d("dialog-wrapper")},r.default.createElement(a.default,{header:"Header Stuff",footer:u,onClose:function(){return alert("Close")}},s))}},45709:function(e,t,n){t.Z=void 0;var r=i(n(67294)),a=i(n(15192)),l=i(n(47166)),o=i(n(51717));function i(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(o.default),u=r.default.createElement("div",null,r.default.createElement("span",null,"Footer Stuff"),r.default.createElement("span",null,"Footer Stuff"),r.default.createElement("span",null,"Footer Stuff"),r.default.createElement("span",null,"Footer Stuff"),r.default.createElement("span",null,"Footer Stuff")),s=r.default.createElement("div",null,r.default.createElement("p",null,"This is my body content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."),r.default.createElement("p",null,"This is some more content."));t.Z=function(){return r.default.createElement("div",{className:d("dialog-wrapper")},r.default.createElement(a.default,{header:"Header Stuff",footer:u,onClose:function(){return alert("Close")}},s))}},90326:function(e,t,n){t.Z=void 0;var r=i(n(67294)),a=i(n(15192)),l=i(n(47166)),o=i(n(51717));function i(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(o.default),u=r.default.createElement("span",null,"Footer Stuff"),s=r.default.createElement("div",null,r.default.createElement("p",null,"This is my body content."),r.default.createElement("p",null,"This is some more content."));t.Z=function(){return r.default.createElement("div",{className:d("dialog-wrapper")},r.default.createElement(a.default,{header:"Header Stuff",footer:u},s))}},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(67294)),a=s(n(45697)),l=s(n(94184)),o=s(n(47166)),i=s(n(50026)),d=s(n(16749)),u=["children","disableStripes","paddingStyle"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(d.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},b=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=m(e,u),d=r.default.useContext(i.default),s=(0,l.default)(p("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},d.className),o.className);return r.default.createElement("table",c({},o,{className:s}),t)};b.propTypes=f,b.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=b},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},u=function(e){var t=e.children,n=i(e,l);return r.default.createElement("tbody",n,t)};u.propTypes=d,u.defaultProps={children:[]};t.default=u},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},u=function(e){var t=e.children,n=i(e,l);return r.default.createElement("td",n,t)};u.propTypes=d,u.defaultProps={children:[]};t.default=u},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),a=i(n(45697)),l=i(n(29805)),o=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={children:a.default.node},s=function(e){var t=e.children,n=d(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};s.propTypes=u,s.defaultProps={children:[]};t.default=s},80876:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},u=function(e){var t=e.children,n=i(e,l);return r.default.createElement("th",n,t)};u.propTypes=d,u.defaultProps={children:[]};t.default=u},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(47166)),o=u(n(16749)),i=u(n(29805)),d=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=l.default.bind(o.default),p={children:a.default.node},f=function(e){var t=e.children,n=c(e,d),a=m(["row"]);return r.default.createElement("tr",s({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),i.default.addScope(t,"row"))};f.propTypes=p,f.defaultProps={children:[]};t.default=f},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(67294))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=u(n(32634)),a=u(n(80196)),l=u(n(70829)),o=u(n(8685)),i=u(n(19852)),d=u(n(80876));function u(e){return e&&e.__esModule?e:{default:e}}t.default=r.default},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},71786:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Dialog-module__clinical-lowlight-theme___cQs9U","orion-fusion-theme":"Dialog-module__orion-fusion-theme___emCZS",dialog:"Dialog-module__dialog___SyjLe","dialog-header":"Dialog-module__dialog-header___4ySjM","dialog-header-title":"Dialog-module__dialog-header-title___zeC4C","dialog-header-close":"Dialog-module__dialog-header-close___bG7wc","close-icon":"Dialog-module__close-icon___9yTZx","dialog-body":"Dialog-module__dialog-body___c18KV","dialog-footer":"Dialog-module__dialog-footer___mLLqj"}},51717:function(e,t,n){n.r(t),t.default={"dialog-wrapper":"DialogDocCommon-module__dialog-wrapper___vRiM+"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);