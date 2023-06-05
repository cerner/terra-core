"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[96145],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),d=r(n(47166)),o=r(n(17422)),i=d.default.bind(o.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,d=a.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),o=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},d,o)};c.propTypes=u;var m=c;t.Z=m},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=l?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(r,d,o):r[d]=e[d]}r.default=e,n&&n.set(e,r);return r}(n(67294)),o=r(n(45697)),i=r(n(47166)),u=n(21538),c=r(n(13810)),m=r(n(40931)),p=n(51051),s=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=i.default.bind(s.default),g={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,o=e.description,i=e.isExpanded,s=(0,d.useState)(i),f=(0,l.default)(s,2),g=f[0],b=f[1],_=(0,d.useState)(!1),O=(0,l.default)(_,2),h=O[0],E=O[1],j=d.default.useContext(u.ThemeContext),T=void 0!==r,N=function(){E(!h),g&&b(!g)},w=function(){b(!g),h&&E(!h)},P=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:x("template",j.className)},d.default.createElement("div",{className:x("header")},a&&d.default.createElement("h2",{className:x("title")},a)),d.default.createElement("div",{className:x("content")},o&&d.default.createElement("div",{className:x("description")},o),t),d.default.createElement("div",{className:x("footer")},n?d.default.createElement("div",{className:x("button-container")},T&&d.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":h}),onClick:N,onKeyDown:function(e){return P(e,N)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(c.default,{className:x("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(m.default,{className:x("chevron")})),d.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":g}),onClick:w,onKeyDown:function(e){return P(e,w)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(c.default,{className:x("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(m.default,{className:x("chevron")}))):null,d.default.createElement("div",null,h&&d.default.createElement("div",{className:x("css")},r),g&&d.default.createElement("div",{className:x("code")},n))))};b.propTypes=g,b.defaultProps={isExpanded:!1};var _=b;t.Z=_},78530:function(e,t,n){var r=n(64836),a=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return u.Row}}),t.ZP=t.Di=void 0;var l=p(n(67294)),d=r(n(45697)),o=r(n(47166)),i=n(21538),u=p(n(37515)),c=r(n(54931));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=l?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(r,d,o):r[d]=e[d]}return r.default=e,n&&n.set(e,r),r}var s=o.default.bind(c.default),f={children:d.default.node},x={isRequired:d.default.bool},g=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("bold")},t)};t.O=g,g.propTypes=f;var y=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("code-block-override")},t)};t.Di=y,y.propTypes=f;var v=function(e){var t=e.isRequired;return l.default.createElement(u.Cell,{className:s([t?["required"]:[]])},t?"required":"optional")};t.dS=v,v.propTypes=x;var b=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("code-block-override")},t)};t.mW=b,b.propTypes=f;var _=function(e){var t=e.children;return l.default.createElement(u.Cell,null,t)};t.Ex=_,_.propTypes=f;var O=function(e){var t=e.children,n=(0,l.useContext)(i.ThemeContext);return l.default.createElement(u.default,{paddingStyle:"compact",className:s("table",n.className)},l.default.createElement(u.Header,{className:s("header")},l.default.createElement(u.HeaderCell,null,"Prop"),l.default.createElement(u.HeaderCell,null,"Type"),l.default.createElement(u.HeaderCell,null,"Required"),l.default.createElement(u.HeaderCell,null,"Default"),l.default.createElement(u.HeaderCell,null,"Description")),l.default.createElement(u.Body,null,t))};O.propTypes=f;var h=O;t.ZP=h},96145:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var r=n(67294),a=n(81254),l=n(22311),d=n(64385),o=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={};function m(e){var t=e.components,n=u(e,o);return(0,a.mdx)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Badge from \'terra-badge\';\n\nconst BadgeIntent = () => (\n  <div>\n    <Badge text="Default" />\n    {\' \'}\n    <Badge intent="primary" text="Primary" />\n    {\' \'}\n    <Badge intent="secondary" text="Secondary" />\n    {\' \'}\n    <Badge intent="positive" text="Positive" />\n    {\' \'}\n    <Badge intent="negative" text="Negative" />\n    {\' \'}\n    <Badge intent="warning" text="Warning" />\n    {\' \'}\n    <Badge intent="info" text="Info" />\n  </div>\n);\n\nexport default BadgeIntent;\n\n')))}m.isMDXComponent=!0;var p=n(49271),s=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Badge Intent",description:n,example:r.createElement(d.Z,null),exampleSrc:r.createElement(m,null),isExpanded:a})},f=n(85537),x=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function b(e){var t=e.components,n=y(e,x);return(0,a.mdx)("wrapper",g({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Badge from \'terra-badge\';\n\nconst BadgeSize = () => (\n  <div>\n    <Badge size="tiny" text="Tiny" />\n    {\' \'}\n    <Badge size="small" text="Small" />\n    {\' \'}\n    <Badge size="medium" text="Medium" />\n    {\' \'}\n    <Badge size="large" text="Large" />\n    {\' \'}\n    <Badge size="huge" text="Huge" />\n  </div>\n);\n\nexport default BadgeSize;\n\n')))}b.isMDXComponent=!0;var _=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Badge Size",description:n,example:r.createElement(f.Z,null),exampleSrc:r.createElement(b,null),isExpanded:a})},O=n(64676),h=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var T={};function N(e){var t=e.components,n=j(e,h);return(0,a.mdx)("wrapper",E({},T,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport IconBookmark from 'terra-icon/lib/icon/IconBookmark';\nimport Badge from 'terra-badge';\n\nconst Icon = <IconBookmark />;\n\nconst BadgeIcon = () => (\n  <div>\n    <Badge icon={Icon} text=\"icon\" />\n    {' '}\n    <Badge icon={Icon} text=\"icon\" isReversed />\n    {' '}\n    <Badge icon={Icon} />\n  </div>\n);\n\nexport default BadgeIcon;\n\n")))}N.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Badge Icon",description:n,example:r.createElement(O.Z,null),exampleSrc:r.createElement(N,null),isExpanded:a})},P=n(72772),C=["components"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var M={};function R(e){var t=e.components,n=B(e,C);return(0,a.mdx)("wrapper",S({},M,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Badge from \'terra-badge\';\n\nconst BadgeVisuallyHiddenText = () => (\n  <div>\n    <Badge text="Low" visuallyHiddenText="Risk Factor Low" />\n    {\' \'}\n    <Badge text="Medium" visuallyHiddenText="Risk Factor Medium" />\n    {\' \'}\n    <Badge text="High" visuallyHiddenText="Risk Factor High" />\n    {\' \'}\n    <Badge text="Critical" visuallyHiddenText="Risk Factor Critical" />\n  </div>\n);\n\nexport default BadgeVisuallyHiddenText;\n\n')))}R.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Badge Visually Hidden Text",description:n,example:r.createElement(P.Z,null),exampleSrc:r.createElement(R,null),isExpanded:a})},D=n(78530),I=["components"];function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var W={},q="wrapper";function Z(e){var t=e.components,n=z(e,I);return(0,a.mdx)(q,H({},W,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(D.ZP,{mdxType:"PropsTable"},(0,a.mdx)(D.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(D.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(D.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(D.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(D.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,a.mdx)(D.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Child Nodes."))),(0,a.mdx)(D.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(D.O,{mdxType:"PropNameCell"},"icon"),(0,a.mdx)(D.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(D.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(D.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,a.mdx)(D.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"An optional icon. Nested inline with the text when provided."))),(0,a.mdx)(D.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(D.O,{mdxType:"PropNameCell"},"intent"),(0,a.mdx)(D.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'default'\n  'primary'\n  'secondary'\n  'info'\n  'warning'\n  'positive'\n  'negative'\n],\n"))),(0,a.mdx)(D.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(D.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'default'\n"))),(0,a.mdx)(D.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the badge color scheme. One of ",(0,a.mdx)("inlineCode",{parentName:"p"},"default"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"primary"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"secondary"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"positive"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"negative"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"warning"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"info"),"."))),(0,a.mdx)(D.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(D.O,{mdxType:"PropNameCell"},"isReversed"),(0,a.mdx)(D.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(D.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(D.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(D.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Reverses the position of the icon and text."))),(0,a.mdx)(D.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(D.O,{mdxType:"PropNameCell"},"size"),(0,a.mdx)(D.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'tiny'\n  'small'\n  'medium'\n  'large'\n  'huge'\n],\n"))),(0,a.mdx)(D.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(D.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'small'\n"))),(0,a.mdx)(D.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the badge size. One of ",(0,a.mdx)("inlineCode",{parentName:"p"},"tiny"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"small"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"medium"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"large"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"huge"),"."))),(0,a.mdx)(D.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(D.O,{mdxType:"PropNameCell"},"text"),(0,a.mdx)(D.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(D.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(D.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,a.mdx)(D.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the badge text."))),(0,a.mdx)(D.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(D.O,{mdxType:"PropNameCell"},"visuallyHiddenText"),(0,a.mdx)(D.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(D.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(D.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(D.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Text that describes the badge to a screen reader. Use this\nfor creating an accessible badge.")))))}Z.isMDXComponent=!0;var L=["components"];function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X.apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var V={},A="wrapper";function Y(e){var t=e.components,n=F(e,L);return(0,a.mdx)(A,X({},V,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-badge"},"Terra Badge"),(0,a.mdx)("p",null,"The badge component displays content classification."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-badge"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Badge from 'terra-badge';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(s,{title:"Intent",mdxType:"BadgeIntent"}),(0,a.mdx)(_,{title:"Size",mdxType:"BadgeSize"}),(0,a.mdx)(w,{title:"Icon",mdxType:"BadgeIcon"}),(0,a.mdx)(k,{title:"VisuallyHiddenText",mdxType:"BadgeVisuallyHiddenText"}),(0,a.mdx)("h2",{id:"badge-props"},"Badge props"),(0,a.mdx)(Z,{mdxType:"BadgePropsTable"}))}Y.isMDXComponent=!0},22311:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-badge",name:"terra-badge",version:"3.57.0",url:t})}},40301:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BadgeSize=t.BadgeIntent=void 0;var a=p(n(67294)),l=p(n(45697)),d=p(n(94184)),o=p(n(47166)),i=p(n(50026)),u=p(n(74754)),c=p(n(81484)),m=["size","intent","isReversed","text","icon","visuallyHiddenText"];function p(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y=o.default.bind(c.default);t.BadgeIntent={DEFAULT:"default",PRIMARY:"primary",SECONDARY:"secondary",INFO:"info",WARNING:"warning",POSITIVE:"positive",NEGATIVE:"negative"};t.BadgeSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var v={children:l.default.node,icon:l.default.element,intent:l.default.oneOf(["default","primary","secondary","info","warning","positive","negative"]),isReversed:l.default.bool,size:l.default.oneOf(["tiny","small","medium","large","huge"]),text:l.default.string,visuallyHiddenText:l.default.string},b={children:null,icon:null,intent:"default",isReversed:!1,size:"small",text:null,visuallyHiddenText:void 0},_=function(e){var t=e.size,n=e.intent,r=e.isReversed,l=e.text,o=e.icon,p=e.visuallyHiddenText,s=g(e,m),x=a.default.useContext(i.default),v=(0,d.default)(y("badge",{"has-icon":o},{"is-reversed":r},t,n,x.className),s.className),b=l?a.default.createElement("span",{className:c.default.text,"aria-hidden":"true"},l):null,_=p?a.default.createElement(u.default,{text:p}):null,O=r?[_,b,o,s.children]:[o,_,b,s.children];return a.default.createElement.apply(a.default,["span",f(f({},s),{},{className:v})].concat(O))};_.propTypes=v,_.defaultProps=b;var O=_;t.default=O},64676:function(e,t,n){t.Z=void 0;var r=d(n(67294)),a=d(n(2604)),l=d(n(40301));function d(e){return e&&e.__esModule?e:{default:e}}var o=r.default.createElement(a.default,null),i=function(){return r.default.createElement("div",null,r.default.createElement(l.default,{icon:o,text:"icon"})," ",r.default.createElement(l.default,{icon:o,text:"icon",isReversed:!0})," ",r.default.createElement(l.default,{icon:o}))};t.Z=i},64385:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(40301));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{text:"Default"})," ",r.default.createElement(a.default,{intent:"primary",text:"Primary"})," ",r.default.createElement(a.default,{intent:"secondary",text:"Secondary"})," ",r.default.createElement(a.default,{intent:"positive",text:"Positive"})," ",r.default.createElement(a.default,{intent:"negative",text:"Negative"})," ",r.default.createElement(a.default,{intent:"warning",text:"Warning"})," ",r.default.createElement(a.default,{intent:"info",text:"Info"}))};t.Z=d},85537:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(40301));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{size:"tiny",text:"Tiny"})," ",r.default.createElement(a.default,{size:"small",text:"Small"})," ",r.default.createElement(a.default,{size:"medium",text:"Medium"})," ",r.default.createElement(a.default,{size:"large",text:"Large"})," ",r.default.createElement(a.default,{size:"huge",text:"Huge"}))};t.Z=d},72772:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(40301));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{text:"Low",visuallyHiddenText:"Risk Factor Low"})," ",r.default.createElement(a.default,{text:"Medium",visuallyHiddenText:"Risk Factor Medium"})," ",r.default.createElement(a.default,{text:"High",visuallyHiddenText:"Risk Factor High"})," ",r.default.createElement(a.default,{text:"Critical",visuallyHiddenText:"Risk Factor Critical"}))};t.Z=d},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(94184)),d=c(n(47166)),o=c(n(50026)),i=c(n(16749)),u=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=d.default.bind(i.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},x=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,d=p(e,u),i=r.default.useContext(o.default),c=(0,l.default)(s("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},i.className),d.className);return r.default.createElement("table",m({},d,{className:c}),t)};x.propTypes=f,x.defaultProps={disableStripes:!1,paddingStyle:"none"};var g=x;t.default=g},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),l=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=o(e,l);return r.default.createElement("tbody",n,t)};u.propTypes=i,u.defaultProps={children:[]};var c=u;t.default=c},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),l=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=o(e,l);return r.default.createElement("td",n,t)};u.propTypes=i,u.defaultProps={children:[]};var c=u;t.default=c},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=o(n(29805)),d=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={children:a.default.node},c=function(e){var t=e.children,n=i(e,d);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};c.propTypes=u,c.defaultProps={children:[]};var m=c;t.default=m},80876:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),l=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=o(e,l);return r.default.createElement("th",n,t)};u.propTypes=i,u.defaultProps={children:[]};var c=u;t.default=c},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(47166)),d=u(n(16749)),o=u(n(29805)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.default.bind(d.default),s={children:a.default.node},f=function(e){var t=e.children,n=m(e,i),a=p(["row"]);return r.default.createElement("tr",c({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),o.default.addScope(t,"row"))};f.propTypes=s,f.defaultProps={children:[]};var x=f;t.default=x},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(67294))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=u(n(32634)),a=u(n(80196)),l=u(n(70829)),d=u(n(8685)),o=u(n(19852)),i=u(n(80876));function u(e){return e&&e.__esModule?e:{default:e}}var c=r.default;t.default=c},2604:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var o=function(e){var t=d({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M24 34l14 14V0H10v48z"}))};o.displayName="IconBookmark",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var i=o;t.default=i},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var o=function(e){var t=d({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=o;t.default=i},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},81484:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Badge-module__clinical-lowlight-theme___DEYml","orion-fusion-theme":"Badge-module__orion-fusion-theme___hYM9V",badge:"Badge-module__badge___+rb+p","is-reversed":"Badge-module__is-reversed___yAJxz","has-icon":"Badge-module__has-icon___8w7lR",text:"Badge-module__text___BeS5P",tiny:"Badge-module__tiny___I01FH",small:"Badge-module__small___Duxcl",medium:"Badge-module__medium___1Y1e+",large:"Badge-module__large___YUDdz",huge:"Badge-module__huge___bkvh6",default:"Badge-module__default___uWFbA",primary:"Badge-module__primary___62Nx+",secondary:"Badge-module__secondary___sb6EM",positive:"Badge-module__positive___hyUh3",negative:"Badge-module__negative___YRN6X",warning:"Badge-module__warning___MKbhA",info:"Badge-module__info___QLj6M"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);