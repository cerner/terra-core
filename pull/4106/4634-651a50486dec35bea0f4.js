"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[4634],{55713:function(e,t,n){var r=n(24994);t.A=void 0;var a=r(n(96540)),l=r(n(5556)),o=r(n(67967)),i=r(n(25642)),d=o.default.bind(i.default),c={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},u=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(l))),i=t?a.default.createElement("a",{className:d("badge"),href:t},a.default.createElement("span",{className:d("badge-name")},"github"),a.default.createElement("span",{className:d("badge-version")},"source")):void 0;return a.default.createElement("div",{className:d("badge-container")},o,i)};u.propTypes=c;t.A=u},201:function(e,t,n){var r=n(24994),a=n(73738);t.A=void 0;var l=r(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(96540)),i=r(n(5556)),d=r(n(67967)),c=n(92912),u=r(n(27166)),s=r(n(62441)),p=n(25966),m=r(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var v=d.default.bind(m.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,i=e.description,d=e.isExpanded,m=(0,o.useState)(d),f=(0,l.default)(m,2),y=f[0],g=f[1],_=(0,o.useState)(!1),x=(0,l.default)(_,2),O=x[0],w=x[1],E=o.default.useContext(c.ThemeContext),j=void 0!==r,N=function(){w(!O),y&&g(!y)},T=function(){g(!y),O&&w(!O)},P=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:v("template",E.className)},o.default.createElement("div",{className:v("header")},a&&o.default.createElement("h2",{className:v("title")},a)),o.default.createElement("div",{className:v("content")},i&&o.default.createElement("div",{className:v("description")},i),t),o.default.createElement("div",{className:v("footer")},n?o.default.createElement("div",{className:v("button-container")},j&&o.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":O}),onClick:N,onKeyDown:function(e){return P(e,N)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(u.default,{className:v("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:v("chevron")})),o.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":y}),onClick:T,onKeyDown:function(e){return P(e,T)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(u.default,{className:v("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:v("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:v("css")},r),y&&o.default.createElement("div",{className:v("code")},n))))};g.propTypes=y,g.defaultProps={isExpanded:!1};t.A=g},12883:function(e,t,n){var r=n(24994),a=n(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return c.Row}}),t.Ay=t.$d=void 0;var l=p(n(96540)),o=r(n(5556)),i=r(n(67967)),d=n(92912),c=p(n(17568)),u=r(n(89744));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var m=i.default.bind(u.default),f={children:o.default.node},v={isRequired:o.default.bool};(t.dt=function(e){var t=e.children;return l.default.createElement(c.Cell,{className:m("bold")},t)}).propTypes=f,(t.$d=function(e){var t=e.children;return l.default.createElement(c.Cell,{className:m("code-block-override")},t)}).propTypes=f,(t.YZ=function(e){var t=e.isRequired;return l.default.createElement(c.Cell,{className:m([t?["required"]:[]])},t?"required":"optional")}).propTypes=v,(t.NZ=function(e){var t=e.children;return l.default.createElement(c.Cell,{className:m("code-block-override")},t)}).propTypes=f,(t.Hd=function(e){var t=e.children;return l.default.createElement(c.Cell,null,t)}).propTypes=f;var y=function(e){var t=e.children,n=(0,l.useContext)(d.ThemeContext);return l.default.createElement(c.default,{paddingStyle:"compact",className:m("table",n.className)},l.default.createElement(c.Header,{className:m("header")},l.default.createElement(c.HeaderCell,null,"Prop"),l.default.createElement(c.HeaderCell,null,"Type"),l.default.createElement(c.HeaderCell,null,"Required"),l.default.createElement(c.HeaderCell,null,"Default"),l.default.createElement(c.HeaderCell,null,"Description")),l.default.createElement(c.Body,null,t))};y.propTypes=f;t.Ay=y},52502:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var r=n(96540),a=n(36665),l=n(9993),o=n(79925),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={};function s(e){var t=e.components,n=c(e,i);return(0,a.mdx)("wrapper",d({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Scroll from 'terra-scroll';\nimport classNames from 'classnames/bind';\nimport styles from './ScrollCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nexport default () => (\n  <div>\n    <p>Overflow-Y Container</p>\n    <div className={cx('overflow-wrapper')}>\n      <Scroll tabIndex=\"0\">\n        <p className={cx('paragraph-y-wrapper')}>\n          Entering patient details is a crucial process in healthcare facilities that involves capturing and documenting relevant information about individuals seeking medical care. Patient details need to be regularly updated to ensure accuracy and relevancy. This may involve periodic verification of personal information, updating medical history, and making necessary changes to insurance or contact details. Hospitals may request patients to review and confirm their information during subsequent visits or at designated intervals. Accurate and comprehensive patient details play a vital role in providing effective healthcare. They serve as a foundation for medical assessments, treatment planning, and continuity of care, enabling healthcare providers to deliver personalised and efficient services to patients.Begin filling out the form by entering your personal information. This usually includes your full name, contact details (such as phone number and email address), and residential address. It is crucial to provide accurate contact information as it will be used for communication and verification purposes.\n        </p>\n      </Scroll>\n    </div>\n  </div>\n);\n\n")))}s.isMDXComponent=!0;var p=n(201),m=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y={};function b(e){var t=e.components,n=v(e,m);return(0,a.mdx)("wrapper",f({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local { \n  .overflow-wrapper {\n    border: 1px dashed rgb(0, 0, 0);\n    height: 200px;\n    width: 400px;\n  }\n\n  .overflow-y-wrapper {\n    border: 1px dashed rgb(0, 0, 0);\n    height: auto;\n    width: 400px;\n  }\n\n  .paragraph-x-wrapper {\n    padding-left: 10px;\n    padding-right: 10px;\n    width: 1350px;\n  }\n  \n  .paragraph-y-wrapper {\n    padding-left: 10px;\n    padding-right: 10px;\n    width: 375px;\n  }\n\n  .container-x-wrapper {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n\n")))}b.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.A,{title:t||"Scroll Vertical",description:n,example:r.createElement(o.A,null),exampleCssSrc:r.createElement(b,null),exampleSrc:r.createElement(s,null),isExpanded:a})},g=n(39039),_=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w={};function E(e){var t=e.components,n=O(e,_);return(0,a.mdx)("wrapper",x({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Scroll from 'terra-scroll';\nimport Button from 'terra-button';\nimport classNames from 'classnames/bind';\nimport { InputField } from 'terra-form-input';\nimport styles from './ScrollCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nexport default () => (\n  <div>\n    <p>Overflow-X Container</p>\n    <div className={cx('overflow-y-wrapper')}>\n      <Scroll tabIndex=\"0\">\n        <p className={cx('paragraph-x-wrapper')}>\n          Entering patient details is a crucial process in healthcare facilities that involves capturing and documenting relevant information about individuals seeking medical care. Patient details need to be regularly updated to ensure accuracy and relevancy. This may involve periodic verification of personal information, updating medical history, and making necessary changes to insurance or contact details. Hospitals may request patients to review and confirm their information during subsequent visits or at designated intervals. Accurate and comprehensive patient details play a vital role in providing effective healthcare. They serve as a foundation for medical assessments, treatment planning, and continuity of care, enabling healthcare providers to deliver personalised and efficient services to patients.Begin filling out the form by entering your personal information. This usually includes your full name, contact details (such as phone number and email address), and residential address. It is crucial to provide accurate contact information as it will be used for communication and verification purposes.\n        </p>\n        <div className={cx('container-x-wrapper')}>\n          <InputField\n            inputId=\"input-field\"\n            label=\"Enter Patient Name\"\n            type=\"text\"\n          />\n        </div>\n        <div className={cx('container-x-wrapper')}>\n          <Button text=\"Submit\" />\n        </div>\n      </Scroll>\n    </div>\n  </div>\n);\n\n")))}E.isMDXComponent=!0;var j=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.A,{title:t||"Scroll Horizontal",description:n,example:r.createElement(g.A,null),exampleCssSrc:r.createElement(b,null),exampleSrc:r.createElement(E,null),isExpanded:a})},N=n(12883),T=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var C={},M="wrapper";function k(e){var t=e.components,n=S(e,T);return(0,a.mdx)(M,P({},C,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(N.Ay,{mdxType:"PropsTable"},(0,a.mdx)(N.fI,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(N.dt,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(N.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(N.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The child content to present in the scrollable region."))),(0,a.mdx)(N.fI,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(N.dt,{mdxType:"PropNameCell"},"refCallback"),(0,a.mdx)(N.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(N.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback for the ref of the scrollable container.")))))}k.isMDXComponent=!0;var I=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var A={},B="wrapper";function H(e){var t=e.components,n=q(e,I);return(0,a.mdx)(B,D({},A,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.E,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-scroll"},"Terra Scroll"),(0,a.mdx)("p",null,"The terra-scroll is a content view that hides data accessible with scrolling and provides a refCallback. The expectation is that any consumer needing to provide a scrollable area within their implementation should be using this component, or one of our other terra components that implements Scroll."),(0,a.mdx)("p",null,"Scroll provides a menthod to access the node managing scrolling, so values such as scrollTop can be easily set, as well as the correct prefixes to consistently sytle scrolling across supported browsers."),(0,a.mdx)("p",null,"The terra-scroll expands to fill it's parent container, so parent nodes are expected to have an explicit height set."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-scroll"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Scroll from 'terra-scroll';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(h,{title:"Vertical Scroll",mdxType:"ScrollVertical"}),(0,a.mdx)(j,{title:"Horizontal Scroll",mdxType:"ScrollHorizontal"}),(0,a.mdx)("h2",{id:"scroll-props"},"Scroll Props"),(0,a.mdx)(k,{mdxType:"ScrollPropsTable"}))}H.isMDXComponent=!0},9993:function(e,t,n){n.d(t,{E:function(){return l}});var r=n(96540),a=n(55713),l=function(e){var t=e.url;return r.createElement(a.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-scroll",name:"terra-scroll",version:"2.38.0",url:t})}},39039:function(e,t,n){t.A=void 0;var r=c(n(96540)),a=c(n(22576)),l=c(n(40890)),o=c(n(67967)),i=n(11475),d=c(n(22487));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(d.default);t.A=function(){return r.default.createElement("div",null,r.default.createElement("p",null,"Overflow-X Container"),r.default.createElement("div",{className:u("overflow-y-wrapper")},r.default.createElement(a.default,{tabIndex:"0"},r.default.createElement("p",{className:u("paragraph-x-wrapper")},"Entering patient details is a crucial process in healthcare facilities that involves capturing and documenting relevant information about individuals seeking medical care. Patient details need to be regularly updated to ensure accuracy and relevancy. This may involve periodic verification of personal information, updating medical history, and making necessary changes to insurance or contact details. Hospitals may request patients to review and confirm their information during subsequent visits or at designated intervals. Accurate and comprehensive patient details play a vital role in providing effective healthcare. They serve as a foundation for medical assessments, treatment planning, and continuity of care, enabling healthcare providers to deliver personalised and efficient services to patients.Begin filling out the form by entering your personal information. This usually includes your full name, contact details (such as phone number and email address), and residential address. It is crucial to provide accurate contact information as it will be used for communication and verification purposes."),r.default.createElement("div",{className:u("container-x-wrapper")},r.default.createElement(i.InputField,{inputId:"input-field",label:"Enter Patient Name",type:"text"})),r.default.createElement("div",{className:u("container-x-wrapper")},r.default.createElement(l.default,{text:"Submit"})))))}},79925:function(e,t,n){t.A=void 0;var r=i(n(96540)),a=i(n(22576)),l=i(n(67967)),o=i(n(22487));function i(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(o.default);t.A=function(){return r.default.createElement("div",null,r.default.createElement("p",null,"Overflow-Y Container"),r.default.createElement("div",{className:d("overflow-wrapper")},r.default.createElement(a.default,{tabIndex:"0"},r.default.createElement("p",{className:d("paragraph-y-wrapper")},"Entering patient details is a crucial process in healthcare facilities that involves capturing and documenting relevant information about individuals seeking medical care. Patient details need to be regularly updated to ensure accuracy and relevancy. This may involve periodic verification of personal information, updating medical history, and making necessary changes to insurance or contact details. Hospitals may request patients to review and confirm their information during subsequent visits or at designated intervals. Accurate and comprehensive patient details play a vital role in providing effective healthcare. They serve as a foundation for medical assessments, treatment planning, and continuity of care, enabling healthcare providers to deliver personalised and efficient services to patients.Begin filling out the form by entering your personal information. This usually includes your full name, contact details (such as phone number and email address), and residential address. It is crucial to provide accurate contact information as it will be used for communication and verification purposes."))))}},17212:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(96540)),a=u(n(5556)),l=u(n(46942)),o=u(n(67967)),i=u(n(52103)),d=u(n(19677)),c=["children","disableStripes","paddingStyle"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.default.bind(d.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},v=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=p(e,c),d=r.default.useContext(i.default),u=(0,l.default)(m("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},d.className),o.className);return r.default.createElement("table",s({},o,{className:u}),t)};v.propTypes=f,v.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=v},15460:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),a=o(n(5556)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},c=function(e){var t=e.children,n=i(e,l);return r.default.createElement("tbody",n,t)};c.propTypes=d,c.defaultProps={children:[]};t.default=c},59584:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),a=o(n(5556)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},c=function(e){var t=e.children,n=i(e,l);return r.default.createElement("td",n,t)};c.propTypes=d,c.defaultProps={children:[]};t.default=c},14281:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(96540)),a=i(n(5556)),l=i(n(93623)),o=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={children:a.default.node},u=function(e){var t=e.children,n=d(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};u.propTypes=c,u.defaultProps={children:[]};t.default=u},93401:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),a=o(n(5556)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},c=function(e){var t=e.children,n=i(e,l);return r.default.createElement("th",n,t)};c.propTypes=d,c.defaultProps={children:[]};t.default=c},96646:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(96540)),a=c(n(5556)),l=c(n(67967)),o=c(n(19677)),i=c(n(93623)),d=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.default.bind(o.default),m={children:a.default.node},f=function(e){var t=e.children,n=s(e,d),a=p(["row"]);return r.default.createElement("tr",u({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),i.default.addScope(t,"row"))};f.propTypes=m,f.defaultProps={children:[]};t.default=f},93623:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(96540))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},17568:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=c(n(17212)),a=c(n(15460)),l=c(n(96646)),o=c(n(59584)),i=c(n(14281)),d=c(n(93401));function c(e){return e&&e.__esModule?e:{default:e}}t.default=r.default},27166:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(96540)),a=l(n(56445));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},89744:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},22487:function(e,t,n){n.r(t),t.default={"overflow-wrapper":"ScrollCommon-module__overflow-wrapper___dBq9G","overflow-y-wrapper":"ScrollCommon-module__overflow-y-wrapper___YEn5T","paragraph-x-wrapper":"ScrollCommon-module__paragraph-x-wrapper___wyTFK","paragraph-y-wrapper":"ScrollCommon-module__paragraph-y-wrapper___ZuwzY","container-x-wrapper":"ScrollCommon-module__container-x-wrapper___SoERf"}},19677:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);