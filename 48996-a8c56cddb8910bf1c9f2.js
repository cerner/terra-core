"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[48996],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),i=r(n(17422)),u=o.default.bind(i.default),d={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:u("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:u("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:u("badge-version")},"v".concat(l))),i=t?a.default.createElement("a",{className:u("badge"),href:t},a.default.createElement("span",{className:u("badge-name")},"github"),a.default.createElement("span",{className:u("badge-version")},"source")):void 0;return a.default.createElement("div",{className:u("badge-container")},o,i)};c.propTypes=d;var s=c;t.Z=s},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),i=r(n(45697)),u=r(n(47166)),d=n(21538),c=r(n(13810)),s=r(n(40931)),p=n(51051),f=r(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var y=u.default.bind(f.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,i=e.description,u=e.isExpanded,f=(0,o.useState)(u),m=(0,l.default)(f,2),b=m[0],x=m[1],h=(0,o.useState)(!1),_=(0,l.default)(h,2),O=_[0],T=_[1],w=o.default.useContext(d.ThemeContext),j=void 0!==r,E=function(){T(!O),b&&x(!b)},P=function(){x(!b),O&&T(!O)},N=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:y("template",w.className)},o.default.createElement("div",{className:y("header")},a&&o.default.createElement("h2",{className:y("title")},a)),o.default.createElement("div",{className:y("content")},i&&o.default.createElement("div",{className:y("description")},i),t),o.default.createElement("div",{className:y("footer")},n?o.default.createElement("div",{className:y("button-container")},j&&o.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":O}),onClick:E,onKeyDown:function(e){return N(e,E)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:y("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:y("chevron")})),o.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":b}),onClick:P,onKeyDown:function(e){return N(e,P)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:y("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:y("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:y("css")},r),b&&o.default.createElement("div",{className:y("code")},n))))};x.propTypes=b,x.defaultProps={isExpanded:!1};var h=x;t.Z=h},78530:function(e,t,n){var r=n(64836),a=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return d.Row}}),t.ZP=t.Di=void 0;var l=p(n(67294)),o=r(n(45697)),i=r(n(47166)),u=n(21538),d=p(n(37515)),c=r(n(54931));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var f=i.default.bind(c.default),m={children:o.default.node},y={isRequired:o.default.bool},b=function(e){var t=e.children;return l.default.createElement(d.Cell,{className:f("bold")},t)};t.O=b,b.propTypes=m;var g=function(e){var t=e.children;return l.default.createElement(d.Cell,{className:f("code-block-override")},t)};t.Di=g,g.propTypes=m;var v=function(e){var t=e.isRequired;return l.default.createElement(d.Cell,{className:f([t?["required"]:[]])},t?"required":"optional")};t.dS=v,v.propTypes=y;var x=function(e){var t=e.children;return l.default.createElement(d.Cell,{className:f("code-block-override")},t)};t.mW=x,x.propTypes=m;var h=function(e){var t=e.children;return l.default.createElement(d.Cell,null,t)};t.Ex=h,h.propTypes=m;var _=function(e){var t=e.children,n=(0,l.useContext)(u.ThemeContext);return l.default.createElement(d.default,{paddingStyle:"compact",className:f("table",n.className)},l.default.createElement(d.Header,{className:f("header")},l.default.createElement(d.HeaderCell,null,"Prop"),l.default.createElement(d.HeaderCell,null,"Type"),l.default.createElement(d.HeaderCell,null,"Required"),l.default.createElement(d.HeaderCell,null,"Default"),l.default.createElement(d.HeaderCell,null,"Description")),l.default.createElement(d.Body,null,t))};_.propTypes=m;var O=_;t.ZP=O},48996:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var r=n(67294),a=n(81254),l=n(2050),o=n(29105),i=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={};function s(e){var t=e.components,n=d(e,i);return(0,a.mdx)("wrapper",u({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Tag from 'terra-tag';\n\nconst TagDefault = () => (\n  <div>\n    {/* eslint-disable no-alert */}\n    <Tag text=\"AF-Atrial Fibrillation\" onClick={() => window.alert('Patient has been diagnosed with AF-Atrial Fibrillation')} />\n    {/* eslint-enable no-alert */}\n  </div>\n);\n\nexport default TagDefault;\n\n")))}s.isMDXComponent=!0;var p=n(49271),f=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Tag Default",description:n,example:r.createElement(o.Z,null),exampleSrc:r.createElement(s,null),isExpanded:a})},m=n(46536),y=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function x(e){var t=e.components,n=g(e,y);return(0,a.mdx)("wrapper",b({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport IconPerson from 'terra-icon/lib/icon/IconPerson';\nimport Tag from 'terra-tag';\n\nconst TagIcon = () => (\n  <div>\n    {/* eslint-disable no-alert */}\n    <Tag icon={<IconPerson />} onClick={() => window.alert('Patient has been diagnosed with Bronchitis')} text=\"Bronchitis\" />\n    {/* eslint-enable no-alert */}\n  </div>\n);\n\nexport default TagIcon;\n\n")))}x.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Tag Icon",description:n,example:r.createElement(m.Z,null),exampleSrc:r.createElement(x,null),isExpanded:a})},_=n(17841),O=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={};function E(e){var t=e.components,n=w(e,O);return(0,a.mdx)("wrapper",T({},j,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport IconPerson from \'terra-icon/lib/icon/IconPerson\';\nimport Tag from \'terra-tag\';\n\nconst HrefTag = () => (\n  <div>\n    <Tag href="https://www.google.com/search?q=atrial+fibrillation" text="AF-Atrial Fibrillation" />\n    <Tag icon={<IconPerson />} href="https://www.google.com/search?q=bronchitis" text="Bronchitis" />\n  </div>\n);\n\nexport default HrefTag;\n\n')))}E.isMDXComponent=!0;var P=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Href Tag",description:n,example:r.createElement(_.Z,null),exampleSrc:r.createElement(E,null),isExpanded:a})},N=n(65735),C=["components"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D={};function M(e){var t=e.components,n=S(e,C);return(0,a.mdx)("wrapper",k({},D,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport IconPerson from 'terra-icon/lib/icon/IconPerson';\nimport Tag from 'terra-tag';\n\nconst TagFallbacks = () => (\n  <div>\n    <Tag text=\"AF-Atrial Fibrillation\" />\n    <Tag icon={<IconPerson />} text=\"Bronchitis\" />\n  </div>\n);\n\nexport default TagFallbacks;\n\n")))}M.isMDXComponent=!0;var R=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Tag Fallbacks",description:n,example:r.createElement(N.Z,null),exampleSrc:r.createElement(M,null),isExpanded:a})},B=n(78530),I=["components"];function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var W={},A="wrapper";function Z(e){var t=e.components,n=q(e,I);return(0,a.mdx)(A,F({},W,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(B.ZP,{mdxType:"PropsTable"},(0,a.mdx)(B.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(B.O,{mdxType:"PropNameCell"},"href"),(0,a.mdx)(B.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(B.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(B.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(B.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the href. When set will render the component as an anchor tag."))),(0,a.mdx)(B.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(B.O,{mdxType:"PropNameCell"},"icon"),(0,a.mdx)(B.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(B.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(B.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(B.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"An optional icon."))),(0,a.mdx)(B.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(B.O,{mdxType:"PropNameCell"},"onClick"),(0,a.mdx)(B.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(B.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(B.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(B.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when clicked."))),(0,a.mdx)(B.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(B.O,{mdxType:"PropNameCell"},"onBlur"),(0,a.mdx)(B.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(B.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(B.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(B.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when tag loses focus."))),(0,a.mdx)(B.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(B.O,{mdxType:"PropNameCell"},"onFocus"),(0,a.mdx)(B.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(B.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(B.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(B.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when tag gains focus."))),(0,a.mdx)(B.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(B.O,{mdxType:"PropNameCell"},"onKeyUp"),(0,a.mdx)(B.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(B.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(B.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(B.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when key is released."))),(0,a.mdx)(B.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(B.O,{mdxType:"PropNameCell"},"text"),(0,a.mdx)(B.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(B.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(B.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(B.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the tag text.")))))}Z.isMDXComponent=!0;var X=["components"];function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K.apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var U={},L="wrapper";function V(e){var t=e.components,n=H(e,X);return(0,a.mdx)(L,K({},U,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-tag"},"Terra Tag"),(0,a.mdx)("p",null,"The tag component is used for tagging and provides users a way to trigger actions in the UI. Each tag should have text.\nIt can optionally display an icon along with the text."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-tag"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Tag from 'terra-tag';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)("h3",{id:"default-tag-with-associated-action"},"Default Tag with associated action"),(0,a.mdx)("p",null,"Tag in its default form is an interactive component designed to provide additional information or trigger actions when clicked. Each tag visually communicates its purpose through text and optional icons."),(0,a.mdx)(f,{title:"Default clickable Tag",description:"This tag displays a simple text label, and when clicked, it triggers a notification to provide aditional information.",mdxType:"TagDefault"}),(0,a.mdx)(h,{title:"Default Tag with Icon",description:"This tag combines an icon and text label to convey additional meaning. When clicked, it also triggers a notification to inform the user about the interaction.",mdxType:"TagIcon"}),(0,a.mdx)("h3",{id:"tag-with-clickable-link"},"Tag with clickable link"),(0,a.mdx)(P,{title:"Tag with href",description:"This tag provides a direct link to a specific webpage. Just click on the tag, and it will seamlessly redirect to the associated website.",mdxType:"TagHref"}),(0,a.mdx)("h3",{id:"tag-with-no-associated-action"},"Tag with no associated action"),(0,a.mdx)(R,{title:"Tag with no onClick or href",description:"This tag represents a simple tag without any additional actions or links associated with it. It conveys essential information but does not trigger any specific actions when clicked. These styles are provided for when this component is missing recommended elements for best practice use.",mdxType:"TagFallbacks"}),(0,a.mdx)("h2",{id:"tag-props"},"Tag Props"),(0,a.mdx)(Z,{mdxType:"TagPropsTable"}))}V.isMDXComponent=!0},2050:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-tag",name:"terra-tag",version:"2.58.0",url:t})}},17841:function(e,t,n){t.Z=void 0;var r=o(n(67294)),a=o(n(51494)),l=o(n(1626));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("div",null,r.default.createElement(l.default,{href:"https://www.google.com/search?q=atrial+fibrillation",text:"AF-Atrial Fibrillation"}),r.default.createElement(l.default,{icon:r.default.createElement(a.default,null),href:"https://www.google.com/search?q=bronchitis",text:"Bronchitis"}))};t.Z=i},29105:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(1626));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{text:"AF-Atrial Fibrillation",onClick:function(){return window.alert("Patient has been diagnosed with AF-Atrial Fibrillation")}}))};t.Z=o},65735:function(e,t,n){t.Z=void 0;var r=o(n(67294)),a=o(n(51494)),l=o(n(1626));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("div",null,r.default.createElement(l.default,{text:"AF-Atrial Fibrillation"}),r.default.createElement(l.default,{icon:r.default.createElement(a.default,null),text:"Bronchitis"}))};t.Z=i},46536:function(e,t,n){t.Z=void 0;var r=o(n(67294)),a=o(n(51494)),l=o(n(1626));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("div",null,r.default.createElement(l.default,{icon:r.default.createElement(a.default,null),onClick:function(){return window.alert("Patient has been diagnosed with Bronchitis")},text:"Bronchitis"}))};t.Z=i},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(94184)),o=c(n(47166)),i=c(n(50026)),u=c(n(16749)),d=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=o.default.bind(u.default),m={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=p(e,d),u=r.default.useContext(i.default),c=(0,l.default)(f("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},u.className),o.className);return r.default.createElement("table",s({},o,{className:c}),t)};y.propTypes=m,y.defaultProps={disableStripes:!1,paddingStyle:"none"};var b=y;t.default=b},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={children:a.default.node},d=function(e){var t=e.children,n=i(e,l);return r.default.createElement("tbody",n,t)};d.propTypes=u,d.defaultProps={children:[]};var c=d;t.default=c},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={children:a.default.node},d=function(e){var t=e.children,n=i(e,l);return r.default.createElement("td",n,t)};d.propTypes=u,d.defaultProps={children:[]};var c=d;t.default=c},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),a=i(n(45697)),l=i(n(29805)),o=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},c=function(e){var t=e.children,n=u(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};c.propTypes=d,c.defaultProps={children:[]};var s=c;t.default=s},80876:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={children:a.default.node},d=function(e){var t=e.children,n=i(e,l);return r.default.createElement("th",n,t)};d.propTypes=u,d.defaultProps={children:[]};var c=d;t.default=c},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),l=d(n(47166)),o=d(n(16749)),i=d(n(29805)),u=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.default.bind(o.default),f={children:a.default.node},m=function(e){var t=e.children,n=s(e,u),a=p(["row"]);return r.default.createElement("tr",c({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),i.default.addScope(t,"row"))};m.propTypes=f,m.defaultProps={children:[]};var y=m;t.default=y},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(67294))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=d(n(32634)),a=d(n(80196)),l=d(n(70829)),o=d(n(8685)),i=d(n(19852)),u=d(n(80876));function d(e){return e&&e.__esModule?e:{default:e}}var c=r.default;t.default=c},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=i;t.default=u},51494:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M24 0a11.3 11.3 0 11-11.3 11.3A11.35 11.35 0 0124 0zm19.5 48v-5.7a16.77 16.77 0 00-16.8-16.8h-5.5A16.75 16.75 0 004.5 42.3V48z"}))};i.displayName="IconPerson",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var u=i;t.default=u},1626:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(n(67294)),l=f(n(45697)),o=f(n(94184)),i=f(n(47166)),u=f(n(50026)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(51051)),c=f(n(37932)),s=["icon","text","href","onClick","onBlur","onFocus","onKeyUp"];function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(l=a.key,o=void 0,o=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(l,"string"),"symbol"===r(o)?o:String(o)),a)}var l,o}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h(e);if(t){var l=h(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}(this,n)}}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var _=i.default.bind(c.default),O={href:l.default.string,icon:l.default.element,onClick:l.default.func,onBlur:l.default.func,onFocus:l.default.func,onKeyUp:l.default.func,text:l.default.string.isRequired},T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(i,e);var t,n,r,l=v(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=l.call(this,e)).state={focused:!1},t.handleKeyUp=t.handleKeyUp.bind(x(t)),t.handleOnBlur=t.handleOnBlur.bind(x(t)),t}return t=i,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===d.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,r=e.href,l=e.onClick,i=(e.onBlur,e.onFocus),u=(e.onKeyUp,y(e,s)),d=this.context,c=(0,o.default)(_("tag",{"is-focused":this.state.focused},{"is-interactive":r||l},{"has-underline":r},d.className),u.className),p=_("icon"),f=t?a.default.createElement("span",{className:p},t):null,b=r||l?r?"a":"button":"span";return a.default.createElement(b,m({},u,{className:c,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:l,onFocus:i,href:r}),f,n)}}])&&b(t.prototype,n),r&&b(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(a.default.Component);T.propTypes=O,T.contextType=u.default;var w=T;t.default=w},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}},37932:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Tag-module__clinical-lowlight-theme___5sCDf","orion-fusion-theme":"Tag-module__orion-fusion-theme___1C0Ag",tag:"Tag-module__tag___nh+rs","is-interactive":"Tag-module__is-interactive___o8dLe","is-focused":"Tag-module__is-focused___BEB78","has-underline":"Tag-module__has-underline___jR7cO",icon:"Tag-module__icon___CoP6c"}}}]);