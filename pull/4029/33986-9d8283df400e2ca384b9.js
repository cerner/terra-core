"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[33986],{55713:function(e,t,n){var r=n(24994);t.A=void 0;var a=r(n(96540)),l=r(n(5556)),d=r(n(67967)),o=r(n(25642)),i=d.default.bind(o.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},p=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,d=a.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),o=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},d,o)};p.propTypes=u;t.A=p},201:function(e,t,n){var r=n(24994),a=n(73738);t.A=void 0;var l=r(n(85715)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=l?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(r,d,o):r[d]=e[d]}return r.default=e,n&&n.set(e,r),r}(n(96540)),o=r(n(5556)),i=r(n(67967)),u=n(92912),p=r(n(27166)),c=r(n(62441)),m=n(25966),s=r(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=i.default.bind(s.default),y={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,o=e.description,i=e.isExpanded,s=(0,d.useState)(i),f=(0,l.default)(s,2),y=f[0],h=f[1],g=(0,d.useState)(!1),_=(0,l.default)(g,2),O=_[0],T=_[1],w=d.default.useContext(u.ThemeContext),N=void 0!==r,j=function(){T(!O),y&&h(!y)},k=function(){h(!y),O&&T(!O)},E=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:x("template",w.className)},d.default.createElement("div",{className:x("header")},a&&d.default.createElement("h2",{className:x("title")},a)),d.default.createElement("div",{className:x("content")},o&&d.default.createElement("div",{className:x("description")},o),t),d.default.createElement("div",{className:x("footer")},n?d.default.createElement("div",{className:x("button-container")},N&&d.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":O}),onClick:j,onKeyDown:function(e){return E(e,j)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:x("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(c.default,{className:x("chevron")})),d.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:k,onKeyDown:function(e){return E(e,k)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:x("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(c.default,{className:x("chevron")}))):null,d.default.createElement("div",null,O&&d.default.createElement("div",{className:x("css")},r),y&&d.default.createElement("div",{className:x("code")},n))))};h.propTypes=y,h.defaultProps={isExpanded:!1};t.A=h},12883:function(e,t,n){var r=n(24994),a=n(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return u.Row}}),t.Ay=t.$d=void 0;var l=m(n(96540)),d=r(n(5556)),o=r(n(67967)),i=n(92912),u=m(n(17568)),p=r(n(89744));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=l?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(r,d,o):r[d]=e[d]}return r.default=e,n&&n.set(e,r),r}var s=o.default.bind(p.default),f={children:d.default.node},x={isRequired:d.default.bool};(t.dt=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("bold")},t)}).propTypes=f,(t.$d=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("code-block-override")},t)}).propTypes=f,(t.YZ=function(e){var t=e.isRequired;return l.default.createElement(u.Cell,{className:s([t?["required"]:[]])},t?"required":"optional")}).propTypes=x,(t.NZ=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("code-block-override")},t)}).propTypes=f,(t.Hd=function(e){var t=e.children;return l.default.createElement(u.Cell,null,t)}).propTypes=f;var y=function(e){var t=e.children,n=(0,l.useContext)(i.ThemeContext);return l.default.createElement(u.default,{paddingStyle:"compact",className:s("table",n.className)},l.default.createElement(u.Header,{className:s("header")},l.default.createElement(u.HeaderCell,null,"Prop"),l.default.createElement(u.HeaderCell,null,"Type"),l.default.createElement(u.HeaderCell,null,"Required"),l.default.createElement(u.HeaderCell,null,"Default"),l.default.createElement(u.HeaderCell,null,"Description")),l.default.createElement(u.Body,null,t))};y.propTypes=f;t.Ay=y},33986:function(e,t,n){n.r(t),n.d(t,{default:function(){return fe}});var r=n(96540),a=n(36665),l=n(17996),d=n(10638),o=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={};function c(e){var t=e.components,n=u(e,o);return(0,a.mdx)("wrapper",i({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Hyperlink from 'terra-hyperlink';\n\nexport default () => <Hyperlink href=\"https://www.cerner.com\" text=\"Default hyperlink\" />;\n\n")))}c.isMDXComponent=!0;var m=n(201),s=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.A,{title:t||"Default Hyperlink",description:n,example:r.createElement(d.A,null),exampleSrc:r.createElement(c,null),isExpanded:a})},f=n(11146),x=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function h(e){var t=e.components,n=b(e,x);return(0,a.mdx)("wrapper",y({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Hyperlink from 'terra-hyperlink';\n\nexport default () => <Hyperlink onClick={() => {}} text=\"Default hyperlink button\" />;\n\n")))}h.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.A,{title:t||"Default Hyperlink Button",description:n,example:r.createElement(f.A,null),exampleSrc:r.createElement(h,null),isExpanded:a})},_=n(88787),O=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var N={};function j(e){var t=e.components,n=w(e,O);return(0,a.mdx)("wrapper",T({},N,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Hyperlink from \'terra-hyperlink\';\n\nexport default () => <Hyperlink href="https://www.cerner.com" variant="audio" text="Audio hyperlink" />;\n\n')))}j.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.A,{title:t||"Audio Hyperlink",description:n,example:r.createElement(_.A,null),exampleSrc:r.createElement(j,null),isExpanded:a})},E=n(55618),C=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D={};function S(e){var t=e.components,n=R(e,C);return(0,a.mdx)("wrapper",P({},D,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Hyperlink from \'terra-hyperlink\';\n\nexport default () => <Hyperlink href="https://www.cerner.com" variant="document" text="Document hyperlink" />;\n\n')))}S.isMDXComponent=!0;var M=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.A,{title:t||"Document Hyperlink",description:n,example:r.createElement(E.A,null),exampleSrc:r.createElement(S,null),isExpanded:a})},A=n(48908),H=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Z={};function B(e){var t=e.components,n=q(e,H);return(0,a.mdx)("wrapper",I({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Hyperlink from \'terra-hyperlink\';\n\nexport default () => <Hyperlink href="https://www.cerner.com" variant="external" text="External hyperlink" />;\n\n')))}B.isMDXComponent=!0;var V=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.A,{title:t||"External Hyperlink",description:n,example:r.createElement(A.A,null),exampleSrc:r.createElement(B,null),isExpanded:a})},X=n(90918),W=["components"];function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var $={};function K(e){var t=e.components,n=L(e,W);return(0,a.mdx)("wrapper",Y({},$,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Hyperlink from \'terra-hyperlink\';\n\nexport default () => <Hyperlink href="https://www.cerner.com" variant="image" text="Image hyperlink" />;\n\n')))}K.isMDXComponent=!0;var U=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.A,{title:t||"Image Hyperlink",description:n,example:r.createElement(X.A,null),exampleSrc:r.createElement(K,null),isExpanded:a})},F=n(31552),z=["components"];function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}function J(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Q={};function ee(e){var t=e.components,n=J(e,z);return(0,a.mdx)("wrapper",G({},Q,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Hyperlink from \'terra-hyperlink\';\n\nexport default () => <Hyperlink href="https://www.cerner.com" variant="video" text="Video hyperlink" />;\n\n')))}ee.isMDXComponent=!0;var te=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.A,{title:t||"Video Hyperlink",description:n,example:r.createElement(F.A,null),exampleSrc:r.createElement(ee,null),isExpanded:a})},ne=n(12883),re=["components"];function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ae.apply(this,arguments)}function le(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var de={},oe="wrapper";function ie(e){var t=e.components,n=le(e,re);return(0,a.mdx)(oe,ae({},de,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(ne.Ay,{mdxType:"PropsTable"},(0,a.mdx)(ne.fI,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(ne.dt,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(ne.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(ne.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/prop/deprecated/red",alt:"IMPORTANT"}),"\nThis prop is deperecated and will be removed on next MVB release.\nupdate all the references to use ",(0,a.mdx)("inlineCode",{parentName:"p"},"text")," prop to add the content to display inside link."))),(0,a.mdx)(ne.fI,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(ne.dt,{mdxType:"PropNameCell"},"text"),(0,a.mdx)(ne.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(ne.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The content to display inside link."))),(0,a.mdx)(ne.fI,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(ne.dt,{mdxType:"PropNameCell"},"title"),(0,a.mdx)(ne.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(ne.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Additional information to display as a native tooltip on hover."))),(0,a.mdx)(ne.fI,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(ne.dt,{mdxType:"PropNameCell"},"href"),(0,a.mdx)(ne.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(ne.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nSets the href of the link. href is required for hyperlinks and should be ignored when ",(0,a.mdx)("inlineCode",{parentName:"p"},"onClick")," callback is used."))),(0,a.mdx)(ne.fI,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(ne.dt,{mdxType:"PropNameCell"},"isDisabled"),(0,a.mdx)(ne.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(ne.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(ne.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/prop/deprecated/red",alt:"IMPORTANT"}),"\nThis prop is deperecated and will be removed on next MVB release.\nDo not use this prop as Accessibility best practices are to not use hyperlinks that are disabled."))),(0,a.mdx)(ne.fI,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(ne.dt,{mdxType:"PropNameCell"},"isUnderlineHidden"),(0,a.mdx)(ne.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(ne.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(ne.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/prop/deprecated/red",alt:"IMPORTANT"}),"\nThis prop is deperecated and will be removed on next MVB release.\nDo not use this prop as Accessibility best practices are to always have hyperlinks display with an underline."))),(0,a.mdx)(ne.fI,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(ne.dt,{mdxType:"PropNameCell"},"onClick"),(0,a.mdx)(ne.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(ne.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nCallback function triggered when clicked. onClick is required to render hyperlink as a button.\n",(0,a.mdx)("inlineCode",{parentName:"p"},"onClick")," should be ignored when ",(0,a.mdx)("inlineCode",{parentName:"p"},"href")," is provided."))),(0,a.mdx)(ne.fI,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(ne.dt,{mdxType:"PropNameCell"},"onBlur"),(0,a.mdx)(ne.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(ne.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when hyperlink loses focus."))),(0,a.mdx)(ne.fI,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(ne.dt,{mdxType:"PropNameCell"},"onFocus"),(0,a.mdx)(ne.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(ne.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when hyperlink gains focus."))),(0,a.mdx)(ne.fI,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(ne.dt,{mdxType:"PropNameCell"},"onKeyDown"),(0,a.mdx)(ne.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(ne.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when key is pressed."))),(0,a.mdx)(ne.fI,{key:"ROW11",mdxType:"Row"},(0,a.mdx)(ne.dt,{mdxType:"PropNameCell"},"onKeyUp"),(0,a.mdx)(ne.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(ne.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when key is released."))),(0,a.mdx)(ne.fI,{key:"ROW12",mdxType:"Row"},(0,a.mdx)(ne.dt,{mdxType:"PropNameCell"},"variant"),(0,a.mdx)(ne.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'default'\n  'external'\n  'image'\n  'video'\n  'audio'\n  'document'\n],\n"))),(0,a.mdx)(ne.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'default'\n"))),(0,a.mdx)(ne.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the hyperlink variant. One of ",(0,a.mdx)("inlineCode",{parentName:"p"},"default"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"external"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"image"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"video"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"audio"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"document"),".")))))}ie.isMDXComponent=!0;var ue=["components"];function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}function ce(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var me={},se="wrapper";function fe(e){var t=e.components,n=ce(e,ue);return(0,a.mdx)(se,pe({},me,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.E,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-hyperlink"},"Terra Hyperlink"),(0,a.mdx)("p",null,"The terra hyperlink component allows linking to other web pages, files, locations within the same page, email addresses, or any other URL."),(0,a.mdx)("h2",{id:"terra-hyperlink-button"},"Terra Hyperlink Button"),(0,a.mdx)("p",null,"Similar to the standard hyperlinks, there are times when applications may need to use a button element and add a onClick function to navigate the user, instead of a traditional anchor ",(0,a.mdx)("inlineCode",{parentName:"p"},"<a>")," element with an ",(0,a.mdx)("inlineCode",{parentName:"p"},"href")," attribute for URL routing."),(0,a.mdx)("p",null,"Terra Hyperlink Button can be created by providing callback / handler to ",(0,a.mdx)("inlineCode",{parentName:"p"},"onClick")," prop. Hyperlink Button is intended to communicate both visually to sighted users and to accessible users relying on assistive technology, that the interactive element is still a link, with the intention of navigating a user somewhere (contrasted with standard buttons which communicate that user can take an action)."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-hyperlink"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,a.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Hyperlink from 'terra-hyperlink';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(s,{mdxType:"DefaultHyperlink"}),(0,a.mdx)(g,{mdxType:"DefaultHyperlinkButton"}),(0,a.mdx)(V,{description:"An external variant adds a custom icon to indicate the destination is external to the source.",mdxType:"External"}),(0,a.mdx)(k,{description:"An audio variant adds a custom icon to indicate the content linked is audio.",mdxType:"Audio"}),(0,a.mdx)(te,{description:"A video variant adds a custom icon to indicate the content linked is a video.",mdxType:"Video"}),(0,a.mdx)(U,{description:"An image variant adds a custom icon to indicate the content linked is an image.",mdxType:"Image"}),(0,a.mdx)(M,{description:"A document variant adds a custom icon to indicate the content linked is document (.pdf, .doc, .xls, etc.).",mdxType:"Document"}),(0,a.mdx)("h2",{id:"hyperlink-props"},"Hyperlink Props"),(0,a.mdx)(ie,{mdxType:"HyperlinkPropsTable"}))}fe.isMDXComponent=!0},17996:function(e,t,n){n.d(t,{E:function(){return l}});var r=n(96540),a=n(55713),l=function(e){var t=e.url;return r.createElement(a.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-hyperlink",name:"terra-hyperlink",version:"2.66.0",url:t})}},88787:function(e,t,n){t.A=void 0;var r=l(n(96540)),a=l(n(78144));function l(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",variant:"audio",text:"Audio hyperlink"})}},10638:function(e,t,n){t.A=void 0;var r=l(n(96540)),a=l(n(78144));function l(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",text:"Default hyperlink"})}},11146:function(e,t,n){t.A=void 0;var r=l(n(96540)),a=l(n(78144));function l(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return r.default.createElement(a.default,{onClick:function(){},text:"Default hyperlink button"})}},55618:function(e,t,n){t.A=void 0;var r=l(n(96540)),a=l(n(78144));function l(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",variant:"document",text:"Document hyperlink"})}},48908:function(e,t,n){t.A=void 0;var r=l(n(96540)),a=l(n(78144));function l(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",variant:"external",text:"External hyperlink"})}},90918:function(e,t,n){t.A=void 0;var r=l(n(96540)),a=l(n(78144));function l(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",variant:"image",text:"Image hyperlink"})}},31552:function(e,t,n){t.A=void 0;var r=l(n(96540)),a=l(n(78144));function l(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",variant:"video",text:"Video hyperlink"})}},17212:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(96540)),a=p(n(5556)),l=p(n(46942)),d=p(n(67967)),o=p(n(52103)),i=p(n(19677)),u=["children","disableStripes","paddingStyle"];function p(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=d.default.bind(i.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},x=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,d=m(e,u),i=r.default.useContext(o.default),p=(0,l.default)(s("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},i.className),d.className);return r.default.createElement("table",c({},d,{className:p}),t)};x.propTypes=f,x.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=x},15460:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(96540)),a=d(n(5556)),l=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=o(e,l);return r.default.createElement("tbody",n,t)};u.propTypes=i,u.defaultProps={children:[]};t.default=u},59584:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(96540)),a=d(n(5556)),l=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=o(e,l);return r.default.createElement("td",n,t)};u.propTypes=i,u.defaultProps={children:[]};t.default=u},14281:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),a=o(n(5556)),l=o(n(93623)),d=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={children:a.default.node},p=function(e){var t=e.children,n=i(e,d);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};p.propTypes=u,p.defaultProps={children:[]};t.default=p},93401:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(96540)),a=d(n(5556)),l=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=o(e,l);return r.default.createElement("th",n,t)};u.propTypes=i,u.defaultProps={children:[]};t.default=u},96646:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(96540)),a=u(n(5556)),l=u(n(67967)),d=u(n(19677)),o=u(n(93623)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=l.default.bind(d.default),s={children:a.default.node},f=function(e){var t=e.children,n=c(e,i),a=m(["row"]);return r.default.createElement("tr",p({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),o.default.addScope(t,"row"))};f.propTypes=s,f.defaultProps={children:[]};t.default=f},93623:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(96540))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},17568:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=u(n(17212)),a=u(n(15460)),l=u(n(96646)),d=u(n(59584)),o=u(n(14281)),i=u(n(93401));function u(e){return e&&e.__esModule?e:{default:e}}t.default=r.default},27166:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(96540)),a=l(n(56445));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t=Object.assign({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=d},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},89744:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},19677:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);