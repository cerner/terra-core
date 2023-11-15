"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[77118],{77118:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var r=n(67294),a=n(81254),o=n(11898),l=n(37752),p=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function c(e){var t=e.components,n=i(e,p);return(0,a.mdx)("wrapper",m({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Hyperlink from 'terra-hyperlink';\nimport ActionFooter from 'terra-action-footer';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <ActionFooter\n      start={<Hyperlink href=\"#\">Start Action</Hyperlink>}\n    />\n  </ExampleTemplate>\n);\n\n")))}c.isMDXComponent=!0;var u=n(49271),s=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(u.Z,{title:t||"Single Start Action",description:n,example:r.createElement(l.Z,null),exampleSrc:r.createElement(c,null),isExpanded:a})},f=n(29426),x=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={};function h(e){var t=e.components,n=g(e,x);return(0,a.mdx)("wrapper",y({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button';\nimport ActionFooter from 'terra-action-footer';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <ActionFooter\n      end={<Button text=\"End Action\" />}\n    />\n  </ExampleTemplate>\n);\n\n")))}h.isMDXComponent=!0;var O=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(u.Z,{title:t||"Single End Action",description:n,example:r.createElement(f.Z,null),exampleSrc:r.createElement(h,null),isExpanded:a})},v=n(71922),E=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={};function T(e){var t=e.components,n=S(e,E);return(0,a.mdx)("wrapper",N({},j,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button';\nimport Hyperlink from 'terra-hyperlink';\nimport Spacer from 'terra-spacer';\nimport ActionFooter from 'terra-action-footer';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <ActionFooter\n      start={<Hyperlink href=\"#\">Start Action</Hyperlink>}\n      end={(\n        <React.Fragment>\n          <Spacer isInlineBlock marginRight=\"medium\">\n            <Button text=\"Submit\" variant={Button.Opts.Variants.EMPHASIS} />\n          </Spacer>\n          <Button text=\"Cancel\" />\n        </React.Fragment>\n      )}\n    />\n  </ExampleTemplate>\n);\n\n")))}T.isMDXComponent=!0;var A=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(u.Z,{title:t||"Multiple Start End Actions",description:n,example:r.createElement(v.Z,null),exampleSrc:r.createElement(T,null),isExpanded:a})},w=n(78530),k=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var M={},D="wrapper";function F(e){var t=e.components,n=P(e,k);return(0,a.mdx)(D,C({},M,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(w.ZP,{mdxType:"PropsTable"},(0,a.mdx)(w.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(w.O,{mdxType:"PropNameCell"},"start"),(0,a.mdx)(w.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Actions to be displayed in the start socket"))),(0,a.mdx)(w.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(w.O,{mdxType:"PropNameCell"},"end"),(0,a.mdx)(w.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Actions to be displayed in the end socket")))))}F.isMDXComponent=!0;var R=["components"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var X={},I="wrapper";function H(e){var t=e.components,n=B(e,R);return(0,a.mdx)(I,Z({},X,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-action-footer"},"Terra Action Footer"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"terra-action-footer")," component is a footer bar that contains two sockets, start and end, for placing actionable items such as buttons and hyperlinks. If no actions are provided, the footer bar collapses to a themeable height and maintains the top border."),(0,a.mdx)("p",null,"Terra provides a Standard, Centered, and Block-style variations for Action Footer:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"#usage"},"Standard Action Footer")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/terra-core/pull/3973/components/cerner-terra-core-docs/action-footer/centered"},"Centered Action Footer")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/terra-core/pull/3973/components/cerner-terra-core-docs/action-footer/block"},"Block Action Footer"))),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-action-footer"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ActionFooter from 'terra-action-footer';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(s,{title:"Single Start Action",mdxType:"SingleStartActionExample"}),(0,a.mdx)(O,{title:"Single End Action",mdxType:"SingleEndActionExample"}),(0,a.mdx)(A,{title:"Multiple Start and End Actions",mdxType:"MultipleStartEndActionsExample"}),(0,a.mdx)("h2",{id:"standard-action-footer-props"},"Standard Action Footer Props"),(0,a.mdx)(F,{mdxType:"ActionFooterPropsTable"}))}H.isMDXComponent=!0},71922:function(e,t,n){t.Z=void 0;var r=i(n(67294)),a=i(n(43868)),o=i(n(71112)),l=i(n(50787)),p=i(n(67641)),m=i(n(76867));function i(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(m.default,null,r.default.createElement(p.default,{start:r.default.createElement(o.default,{href:"#"},"Start Action"),end:r.default.createElement(r.default.Fragment,null,r.default.createElement(l.default,{isInlineBlock:!0,marginRight:"medium"},r.default.createElement(a.default,{text:"Submit",variant:a.default.Opts.Variants.EMPHASIS})),r.default.createElement(a.default,{text:"Cancel"}))}))}},29426:function(e,t,n){t.Z=void 0;var r=p(n(67294)),a=p(n(43868)),o=p(n(67641)),l=p(n(76867));function p(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(l.default,null,r.default.createElement(o.default,{end:r.default.createElement(a.default,{text:"End Action"})}))}},37752:function(e,t,n){t.Z=void 0;var r=p(n(67294)),a=p(n(71112)),o=p(n(67641)),l=p(n(76867));function p(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(l.default,null,r.default.createElement(o.default,{start:r.default.createElement(a.default,{href:"#"},"Start Action")}))}}}]);