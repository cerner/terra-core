"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[11210],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),u=r(n(17422)),i=o.default.bind(u.default),d={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),u=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},o,u)};c.propTypes=d;var s=c;t.Z=s},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),u=r(n(45697)),i=r(n(47166)),d=n(21538),c=r(n(13810)),s=r(n(40931)),f=n(51051),p=r(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var y=i.default.bind(p.default),b={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,u=e.description,i=e.isExpanded,p=(0,o.useState)(i),m=(0,l.default)(p,2),b=m[0],_=m[1],h=(0,o.useState)(!1),g=(0,l.default)(h,2),O=g[0],T=g[1],E=o.default.useContext(d.ThemeContext),j=void 0!==r,w=function(){T(!O),b&&_(!b)},P=function(){_(!b),O&&T(!O)},N=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:y("template",E.className)},o.default.createElement("div",{className:y("header")},a&&o.default.createElement("h2",{className:y("title")},a)),o.default.createElement("div",{className:y("content")},u&&o.default.createElement("div",{className:y("description")},u),t),o.default.createElement("div",{className:y("footer")},n?o.default.createElement("div",{className:y("button-container")},j&&o.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":O}),onClick:w,onKeyDown:function(e){return N(e,w)},onBlur:v,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:y("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:y("chevron")})),o.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":b}),onClick:P,onKeyDown:function(e){return N(e,P)},onBlur:v,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:y("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:y("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:y("css")},r),b&&o.default.createElement("div",{className:y("code")},n))))};_.propTypes=b,_.defaultProps={isExpanded:!1};var h=_;t.Z=h},78530:function(e,t,n){var r=n(64836),a=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return d.Row}}),t.ZP=t.Di=void 0;var l=f(n(67294)),o=r(n(45697)),u=r(n(47166)),i=n(21538),d=f(n(37515)),c=r(n(54931));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var p=u.default.bind(c.default),m={children:o.default.node},y={isRequired:o.default.bool},b=function(e){var t=e.children;return l.default.createElement(d.Cell,{className:p("bold")},t)};t.O=b,b.propTypes=m;var v=function(e){var t=e.children;return l.default.createElement(d.Cell,{className:p("code-block-override")},t)};t.Di=v,v.propTypes=m;var x=function(e){var t=e.isRequired;return l.default.createElement(d.Cell,{className:p([t?["required"]:[]])},t?"required":"optional")};t.dS=x,x.propTypes=y;var _=function(e){var t=e.children;return l.default.createElement(d.Cell,{className:p("code-block-override")},t)};t.mW=_,_.propTypes=m;var h=function(e){var t=e.children;return l.default.createElement(d.Cell,null,t)};t.Ex=h,h.propTypes=m;var g=function(e){var t=e.children,n=(0,l.useContext)(i.ThemeContext);return l.default.createElement(d.default,{paddingStyle:"compact",className:p("table",n.className)},l.default.createElement(d.Header,{className:p("header")},l.default.createElement(d.HeaderCell,null,"Prop"),l.default.createElement(d.HeaderCell,null,"Type"),l.default.createElement(d.HeaderCell,null,"Required"),l.default.createElement(d.HeaderCell,null,"Default"),l.default.createElement(d.HeaderCell,null,"Description")),l.default.createElement(d.Body,null,t))};g.propTypes=m;var O=g;t.ZP=O},11210:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var r=n(67294),a=n(81254),l=n(54433),o=n(97185),u=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={};function s(e){var t=e.components,n=d(e,u);return(0,a.mdx)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\n\nexport default () => (\n  <p>\n    Focus in this section to hear screen reader only text\n    <VisuallyHiddenText text=\"This is read by a screen reader\" />\n  </p>\n);\n\n")))}s.isMDXComponent=!0;var f=n(49271),p=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(f.Z,{title:t||"Default Visually Hidden Text",description:n,example:r.createElement(o.Z,null),exampleSrc:r.createElement(s,null),isExpanded:a})},m=n(97375),y=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var x={};function _(e){var t=e.components,n=v(e,y);return(0,a.mdx)("wrapper",b({},x,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\n\nclass Example extends React.Component {\n  componentDidMount() {\n    this.visuallyHiddenText.innerText = 'Text written via refCallback innerText update';\n  }\n\n  render() {\n    return (\n      <p>\n        Visually Hidden Text which uses refCallback to write innerText\n        <VisuallyHiddenText refCallback={(ref) => { this.visuallyHiddenText = ref; }} />\n      </p>\n    );\n  }\n}\n\nexport default Example;\n\n")))}_.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(f.Z,{title:t||"Ref Callback Visually Hidden Text",description:n,example:r.createElement(m.Z,null),exampleSrc:r.createElement(_,null),isExpanded:a})},g=n(78530),O=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={},w="wrapper";function P(e){var t=e.components,n=E(e,O);return(0,a.mdx)(w,T({},j,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(g.ZP,{mdxType:"PropsTable"},(0,a.mdx)(g.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(g.O,{mdxType:"PropNameCell"},"refCallback"),(0,a.mdx)(g.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(g.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(g.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(g.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback ref to pass into the dom element. This is useful when using terra-visually-hidden-text as an aria-live container."))),(0,a.mdx)(g.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(g.O,{mdxType:"PropNameCell"},"text"),(0,a.mdx)(g.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(g.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(g.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(g.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Text to be read to the screen reader")))))}P.isMDXComponent=!0;var N=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k={},M="wrapper";function D(e){var t=e.components,n=S(e,N);return(0,a.mdx)(M,C({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-visually-hidden-text"},"Terra Visually Hidden Text"),(0,a.mdx)("p",null,"Visually Hidden Text is a component designed for screen readers that renders text on the dom, but is not visible to the UI. Some components such as badge will have a visual indication to note their hierarchy on the page, but that indication is lost when a screen reader is used on the web page. Visually Hidden text would allow your application to provide that additional context to a screen reader."),(0,a.mdx)("p",null,"Another reason for this component is when you want to produce more semantic markup for a screen reader only experience. Some various examples include:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"You may want to provide a visually hidden header to allow for better readability."),(0,a.mdx)("li",{parentName:"ul"},"You may need to provide different instructions for visual users vs non visual users."),(0,a.mdx)("li",{parentName:"ul"},"div nodes have a difficult understanding the aria-label attributes as well.")),(0,a.mdx)("p",null,"In these instances, it's recommended to use visually hidden text."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-visually-hidden-text"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import VisuallyHiddenText from 'terra-visually-hidden-text';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/features"},"Cross-Browser Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(p,{title:"VisuallyHiddenText with empty string",mdxType:"DefaultVisuallyHiddenText"}),(0,a.mdx)(h,{title:"VisuallyHiddenText with ref Callback",mdxType:"RefCallbackVisuallyHiddenText"}),(0,a.mdx)("h2",{id:"visually-hidden-text-props"},"Visually Hidden Text Props"),(0,a.mdx)(P,{mdxType:"VisuallyHiddenTextPropsTable"}))}D.isMDXComponent=!0},54433:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-visually-hidden-text",name:"terra-visually-hidden-text",version:"2.36.0",url:t})}},97185:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(74754));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement("p",null,"Focus in this section to hear screen reader only text",r.default.createElement(a.default,{text:"This is read by a screen reader"}))}},97375:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=o(n(67294)),l=o(n(74754));function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(l=a.key,o=void 0,o=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(l,"string"),"symbol"===r(o)?o:String(o)),a)}var l,o}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var l=c(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(c,e);var t,n,r,o=d(c);function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),o.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){this.visuallyHiddenText.innerText="Text written via refCallback innerText update"}},{key:"render",value:function(){var e=this;return a.default.createElement("p",null,"Visually Hidden Text which uses refCallback to write innerText",a.default.createElement(l.default,{refCallback:function(t){e.visuallyHiddenText=t}}))}}])&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(a.default.Component),f=s;t.Z=f},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(94184)),o=c(n(47166)),u=c(n(50026)),i=c(n(16749)),d=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(i.default),m={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=f(e,d),i=r.default.useContext(u.default),c=(0,l.default)(p("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},i.className),o.className);return r.default.createElement("table",s({},o,{className:c}),t)};y.propTypes=m,y.defaultProps={disableStripes:!1,paddingStyle:"none"};var b=y;t.default=b},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},d=function(e){var t=e.children,n=u(e,l);return r.default.createElement("tbody",n,t)};d.propTypes=i,d.defaultProps={children:[]};var c=d;t.default=c},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},d=function(e){var t=e.children,n=u(e,l);return r.default.createElement("td",n,t)};d.propTypes=i,d.defaultProps={children:[]};var c=d;t.default=c},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(29805)),o=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},c=function(e){var t=e.children,n=i(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};c.propTypes=d,c.defaultProps={children:[]};var s=c;t.default=s},80876:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},d=function(e){var t=e.children,n=u(e,l);return r.default.createElement("th",n,t)};d.propTypes=i,d.defaultProps={children:[]};var c=d;t.default=c},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),l=d(n(47166)),o=d(n(16749)),u=d(n(29805)),i=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=l.default.bind(o.default),p={children:a.default.node},m=function(e){var t=e.children,n=s(e,i),a=f(["row"]);return r.default.createElement("tr",c({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),u.default.addScope(t,"row"))};m.propTypes=p,m.defaultProps={children:[]};var y=m;t.default=y},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(67294))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=d(n(32634)),a=d(n(80196)),l=d(n(70829)),o=d(n(8685)),u=d(n(19852)),i=d(n(80876));function d(e){return e&&e.__esModule?e:{default:e}}var c=r.default;t.default=c},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=u;t.default=i},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);