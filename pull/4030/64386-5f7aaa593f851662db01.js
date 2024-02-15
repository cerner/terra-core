"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[64386],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(19845)),i=r(n(17422)),d=o.default.bind(i.default),c={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},u=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(l))),i=t?a.default.createElement("a",{className:d("badge"),href:t},a.default.createElement("span",{className:d("badge-name")},"github"),a.default.createElement("span",{className:d("badge-version")},"source")):void 0;return a.default.createElement("div",{className:d("badge-container")},o,i)};u.propTypes=c;t.Z=u},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(67294)),i=r(n(45697)),d=r(n(19845)),c=n(21538),u=r(n(13810)),s=r(n(40931)),p=n(51051),m=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var v=d.default.bind(m.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,i=e.description,d=e.isExpanded,m=(0,o.useState)(d),f=(0,l.default)(m,2),b=f[0],h=f[1],_=(0,o.useState)(!1),x=(0,l.default)(_,2),O=x[0],w=x[1],E=o.default.useContext(c.ThemeContext),j=void 0!==r,T=function(){w(!O),b&&h(!b)},N=function(){h(!b),O&&w(!O)},P=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:v("template",E.className)},o.default.createElement("div",{className:v("header")},a&&o.default.createElement("h2",{className:v("title")},a)),o.default.createElement("div",{className:v("content")},i&&o.default.createElement("div",{className:v("description")},i),t),o.default.createElement("div",{className:v("footer")},n?o.default.createElement("div",{className:v("button-container")},j&&o.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":O}),onClick:T,onKeyDown:function(e){return P(e,T)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(u.default,{className:v("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:v("chevron")})),o.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":b}),onClick:N,onKeyDown:function(e){return P(e,N)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(u.default,{className:v("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:v("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:v("css")},r),b&&o.default.createElement("div",{className:v("code")},n))))};h.propTypes=b,h.defaultProps={isExpanded:!1};t.Z=h},78530:function(e,t,n){var r=n(64836),a=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return c.Row}}),t.ZP=t.Di=void 0;var l=p(n(67294)),o=r(n(45697)),i=r(n(19845)),d=n(21538),c=p(n(37515)),u=r(n(54931));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var m=i.default.bind(u.default),f={children:o.default.node},v={isRequired:o.default.bool};(t.O=function(e){var t=e.children;return l.default.createElement(c.Cell,{className:m("bold")},t)}).propTypes=f,(t.Di=function(e){var t=e.children;return l.default.createElement(c.Cell,{className:m("code-block-override")},t)}).propTypes=f,(t.dS=function(e){var t=e.isRequired;return l.default.createElement(c.Cell,{className:m([t?["required"]:[]])},t?"required":"optional")}).propTypes=v,(t.mW=function(e){var t=e.children;return l.default.createElement(c.Cell,{className:m("code-block-override")},t)}).propTypes=f,(t.Ex=function(e){var t=e.children;return l.default.createElement(c.Cell,null,t)}).propTypes=f;var b=function(e){var t=e.children,n=(0,l.useContext)(d.ThemeContext);return l.default.createElement(c.default,{paddingStyle:"compact",className:m("table",n.className)},l.default.createElement(c.Header,{className:m("header")},l.default.createElement(c.HeaderCell,null,"Prop"),l.default.createElement(c.HeaderCell,null,"Type"),l.default.createElement(c.HeaderCell,null,"Required"),l.default.createElement(c.HeaderCell,null,"Default"),l.default.createElement(c.HeaderCell,null,"Description")),l.default.createElement(c.Body,null,t))};b.propTypes=f;t.ZP=b},45191:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var r=n(67294),a=n(81254),l=n(57570),o=n(13057),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={};function s(e){var t=e.components,n=c(e,i);return(0,a.mdx)("wrapper",d({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Scroll from 'terra-scroll';\nimport classNames from 'classnames/bind';\nimport styles from './ScrollCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nexport default () => (\n  <div>\n    <p>Overflow-Y Container</p>\n    <div className={cx('overflow-wrapper')}>\n      <Scroll tabIndex=\"0\">\n        <p className={cx('paragraph-y-wrapper')}>\n          Entering patient details is a crucial process in healthcare facilities that involves capturing and documenting relevant information about individuals seeking medical care. Patient details need to be regularly updated to ensure accuracy and relevancy. This may involve periodic verification of personal information, updating medical history, and making necessary changes to insurance or contact details. Hospitals may request patients to review and confirm their information during subsequent visits or at designated intervals. Accurate and comprehensive patient details play a vital role in providing effective healthcare. They serve as a foundation for medical assessments, treatment planning, and continuity of care, enabling healthcare providers to deliver personalised and efficient services to patients.Begin filling out the form by entering your personal information. This usually includes your full name, contact details (such as phone number and email address), and residential address. It is crucial to provide accurate contact information as it will be used for communication and verification purposes.\n        </p>\n      </Scroll>\n    </div>\n  </div>\n);\n\n")))}s.isMDXComponent=!0;var p=n(49271),m=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={};function y(e){var t=e.components,n=v(e,m);return(0,a.mdx)("wrapper",f({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local { \n  .overflow-wrapper {\n    border: 1px dashed rgb(0, 0, 0);\n    height: 200px;\n    width: 400px;\n  }\n\n  .overflow-y-wrapper {\n    border: 1px dashed rgb(0, 0, 0);\n    height: auto;\n    width: 400px;\n  }\n\n  .paragraph-x-wrapper {\n    padding-left: 10px;\n    padding-right: 10px;\n    width: 1350px;\n  }\n  \n  .paragraph-y-wrapper {\n    padding-left: 10px;\n    padding-right: 10px;\n    width: 375px;\n  }\n\n  .container-x-wrapper {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n\n")))}y.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Scroll Vertical",description:n,example:r.createElement(o.Z,null),exampleCssSrc:r.createElement(y,null),exampleSrc:r.createElement(s,null),isExpanded:a})},h=n(40380),_=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w={};function E(e){var t=e.components,n=O(e,_);return(0,a.mdx)("wrapper",x({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Scroll from 'terra-scroll';\nimport Button from 'terra-button';\nimport classNames from 'classnames/bind';\nimport InputField from 'terra-form-input/lib/InputField';\nimport styles from './ScrollCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nexport default () => (\n  <div>\n    <p>Overflow-X Container</p>\n    <div className={cx('overflow-y-wrapper')}>\n      <Scroll tabIndex=\"0\">\n        <p className={cx('paragraph-x-wrapper')}>\n          Entering patient details is a crucial process in healthcare facilities that involves capturing and documenting relevant information about individuals seeking medical care. Patient details need to be regularly updated to ensure accuracy and relevancy. This may involve periodic verification of personal information, updating medical history, and making necessary changes to insurance or contact details. Hospitals may request patients to review and confirm their information during subsequent visits or at designated intervals. Accurate and comprehensive patient details play a vital role in providing effective healthcare. They serve as a foundation for medical assessments, treatment planning, and continuity of care, enabling healthcare providers to deliver personalised and efficient services to patients.Begin filling out the form by entering your personal information. This usually includes your full name, contact details (such as phone number and email address), and residential address. It is crucial to provide accurate contact information as it will be used for communication and verification purposes.\n        </p>\n        <div className={cx('container-x-wrapper')}>\n          <InputField\n            inputId=\"input-field\"\n            label=\"Enter Patient Name\"\n            type=\"text\"\n          />\n        </div>\n        <div className={cx('container-x-wrapper')}>\n          <Button text=\"Submit\" />\n        </div>\n      </Scroll>\n    </div>\n  </div>\n);\n\n")))}E.isMDXComponent=!0;var j=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Scroll Horizontal",description:n,example:r.createElement(h.Z,null),exampleCssSrc:r.createElement(y,null),exampleSrc:r.createElement(E,null),isExpanded:a})},T=n(78530),N=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var C={},k="wrapper";function M(e){var t=e.components,n=S(e,N);return(0,a.mdx)(k,P({},C,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(T.ZP,{mdxType:"PropsTable"},(0,a.mdx)(T.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The child content to present in the scrollable region."))),(0,a.mdx)(T.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"refCallback"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback for the ref of the scrollable container.")))))}M.isMDXComponent=!0;var D=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var B={},R="wrapper";function H(e){var t=e.components,n=q(e,D);return(0,a.mdx)(R,I({},B,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-scroll"},"Terra Scroll"),(0,a.mdx)("p",null,"The terra-scroll is a content view that hides data accessible with scrolling and provides a refCallback. The expectation is that any consumer needing to provide a scrollable area within their implementation should be using this component, or one of our other terra components that implements Scroll."),(0,a.mdx)("p",null,"Scroll provides a menthod to access the node managing scrolling, so values such as scrollTop can be easily set, as well as the correct prefixes to consistently sytle scrolling across supported browsers."),(0,a.mdx)("p",null,"The terra-scroll expands to fill it's parent container, so parent nodes are expected to have an explicit height set."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-scroll"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Scroll from 'terra-scroll';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(g,{title:"Vertical Scroll",mdxType:"ScrollVertical"}),(0,a.mdx)(j,{title:"Horizontal Scroll",mdxType:"ScrollHorizontal"}),(0,a.mdx)("h2",{id:"scroll-props"},"Scroll Props"),(0,a.mdx)(M,{mdxType:"ScrollPropsTable"}))}H.isMDXComponent=!0},57570:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-scroll",name:"terra-scroll",version:"2.36.0",url:t})}},40380:function(e,t,n){t.Z=void 0;var r=c(n(67294)),a=c(n(778)),l=c(n(43868)),o=c(n(19845)),i=c(n(95269)),d=c(n(44232));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(d.default);t.Z=function(){return r.default.createElement("div",null,r.default.createElement("p",null,"Overflow-X Container"),r.default.createElement("div",{className:u("overflow-y-wrapper")},r.default.createElement(a.default,{tabIndex:"0"},r.default.createElement("p",{className:u("paragraph-x-wrapper")},"Entering patient details is a crucial process in healthcare facilities that involves capturing and documenting relevant information about individuals seeking medical care. Patient details need to be regularly updated to ensure accuracy and relevancy. This may involve periodic verification of personal information, updating medical history, and making necessary changes to insurance or contact details. Hospitals may request patients to review and confirm their information during subsequent visits or at designated intervals. Accurate and comprehensive patient details play a vital role in providing effective healthcare. They serve as a foundation for medical assessments, treatment planning, and continuity of care, enabling healthcare providers to deliver personalised and efficient services to patients.Begin filling out the form by entering your personal information. This usually includes your full name, contact details (such as phone number and email address), and residential address. It is crucial to provide accurate contact information as it will be used for communication and verification purposes."),r.default.createElement("div",{className:u("container-x-wrapper")},r.default.createElement(i.default,{inputId:"input-field",label:"Enter Patient Name",type:"text"})),r.default.createElement("div",{className:u("container-x-wrapper")},r.default.createElement(l.default,{text:"Submit"})))))}},13057:function(e,t,n){t.Z=void 0;var r=i(n(67294)),a=i(n(778)),l=i(n(19845)),o=i(n(44232));function i(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(o.default);t.Z=function(){return r.default.createElement("div",null,r.default.createElement("p",null,"Overflow-Y Container"),r.default.createElement("div",{className:d("overflow-wrapper")},r.default.createElement(a.default,{tabIndex:"0"},r.default.createElement("p",{className:d("paragraph-y-wrapper")},"Entering patient details is a crucial process in healthcare facilities that involves capturing and documenting relevant information about individuals seeking medical care. Patient details need to be regularly updated to ensure accuracy and relevancy. This may involve periodic verification of personal information, updating medical history, and making necessary changes to insurance or contact details. Hospitals may request patients to review and confirm their information during subsequent visits or at designated intervals. Accurate and comprehensive patient details play a vital role in providing effective healthcare. They serve as a foundation for medical assessments, treatment planning, and continuity of care, enabling healthcare providers to deliver personalised and efficient services to patients.Begin filling out the form by entering your personal information. This usually includes your full name, contact details (such as phone number and email address), and residential address. It is crucial to provide accurate contact information as it will be used for communication and verification purposes."))))}},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(93967)),o=u(n(19845)),i=u(n(50026)),d=u(n(16749)),c=["children","disableStripes","paddingStyle"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.default.bind(d.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},v=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=p(e,c),d=r.default.useContext(i.default),u=(0,l.default)(m("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},d.className),o.className);return r.default.createElement("table",s({},o,{className:u}),t)};v.propTypes=f,v.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=v},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},c=function(e){var t=e.children,n=i(e,l);return r.default.createElement("tbody",n,t)};c.propTypes=d,c.defaultProps={children:[]};t.default=c},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},c=function(e){var t=e.children,n=i(e,l);return r.default.createElement("td",n,t)};c.propTypes=d,c.defaultProps={children:[]};t.default=c},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),a=i(n(45697)),l=i(n(29805)),o=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={children:a.default.node},u=function(e){var t=e.children,n=d(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};u.propTypes=c,u.defaultProps={children:[]};t.default=u},38880:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},c=function(e){var t=e.children,n=i(e,l);return r.default.createElement("th",n,t)};c.propTypes=d,c.defaultProps={children:[]};t.default=c},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(19845)),o=c(n(16749)),i=c(n(29805)),d=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.default.bind(o.default),m={children:a.default.node},f=function(e){var t=e.children,n=s(e,d),a=p(["row"]);return r.default.createElement("tr",u({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),i.default.addScope(t,"row"))};f.propTypes=m,f.defaultProps={children:[]};t.default=f},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(67294))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=c(n(32634)),a=c(n(80196)),l=c(n(70829)),o=c(n(8685)),i=c(n(19852)),d=c(n(38880));function c(e){return e&&e.__esModule?e:{default:e}}t.default=r.default},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},44232:function(e,t,n){n.r(t),t.default={"overflow-wrapper":"ScrollCommon-module__overflow-wrapper___dBq9G","overflow-y-wrapper":"ScrollCommon-module__overflow-y-wrapper___YEn5T","paragraph-x-wrapper":"ScrollCommon-module__paragraph-x-wrapper___wyTFK","paragraph-y-wrapper":"ScrollCommon-module__paragraph-y-wrapper___ZuwzY","container-x-wrapper":"ScrollCommon-module__container-x-wrapper___SoERf"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);