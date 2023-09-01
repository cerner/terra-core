"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[93706],{49271:function(e,t,n){var r=n(64836),l=n(18698);t.Z=void 0;var a=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),d=r(n(45697)),i=r(n(47166)),u=n(21538),s=r(n(13810)),p=r(n(40931)),c=n(51051),m=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=i.default.bind(m.default),y={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,l=e.title,d=e.description,i=e.isExpanded,m=(0,o.useState)(i),f=(0,a.default)(m,2),y=f[0],v=f[1],g=(0,o.useState)(!1),_=(0,a.default)(g,2),O=_[0],j=_[1],E=o.default.useContext(u.ThemeContext),T=void 0!==r,C=function(){j(!O),y&&v(!y)},N=function(){v(!y),O&&j(!O)},w=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:h("template",E.className)},o.default.createElement("div",{className:h("header")},l&&o.default.createElement("h2",{className:h("title")},l)),o.default.createElement("div",{className:h("content")},d&&o.default.createElement("div",{className:h("description")},d),t),o.default.createElement("div",{className:h("footer")},n?o.default.createElement("div",{className:h("button-container")},T&&o.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":O}),onClick:C,onKeyDown:function(e){return w(e,C)},onBlur:b,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(p.default,{className:h("chevron")})),o.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":y}),onClick:N,onKeyDown:function(e){return w(e,N)},onBlur:b,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(p.default,{className:h("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:h("css")},r),y&&o.default.createElement("div",{className:h("code")},n))))};v.propTypes=y,v.defaultProps={isExpanded:!1};var g=v;t.Z=g},78530:function(e,t,n){var r=n(64836),l=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return u.Row}}),t.ZP=t.Di=void 0;var a=c(n(67294)),o=r(n(45697)),d=r(n(47166)),i=n(21538),u=c(n(37515)),s=r(n(54931));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var m=d.default.bind(s.default),f={children:o.default.node},h={isRequired:o.default.bool},y=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:m("bold")},t)};t.O=y,y.propTypes=f;var b=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:m("code-block-override")},t)};t.Di=b,b.propTypes=f;var x=function(e){var t=e.isRequired;return a.default.createElement(u.Cell,{className:m([t?["required"]:[]])},t?"required":"optional")};t.dS=x,x.propTypes=h;var v=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:m("code-block-override")},t)};t.mW=v,v.propTypes=f;var g=function(e){var t=e.children;return a.default.createElement(u.Cell,null,t)};t.Ex=g,g.propTypes=f;var _=function(e){var t=e.children,n=(0,a.useContext)(i.ThemeContext);return a.default.createElement(u.default,{paddingStyle:"compact",className:m("table",n.className)},a.default.createElement(u.Header,{className:m("header")},a.default.createElement(u.HeaderCell,null,"Prop"),a.default.createElement(u.HeaderCell,null,"Type"),a.default.createElement(u.HeaderCell,null,"Required"),a.default.createElement(u.HeaderCell,null,"Default"),a.default.createElement(u.HeaderCell,null,"Description")),a.default.createElement(u.Body,null,t))};_.propTypes=f;var O=_;t.ZP=O},37141:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(67294),l=n(81254),a=n(33920),o=n(10848),d=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s={};function p(e){var t=e.components,n=u(e,d);return(0,l.mdx)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Field from \'terra-form-field\';\nimport Input from \'terra-form-input\';\nimport Fieldset from \'terra-form-fieldset\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FieldsetExamples.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nclass FieldsetExamples extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      first: \'\',\n      middle: \'\',\n      last: \'\',\n    };\n    this.handleFirstChange = this.handleFirstChange.bind(this);\n    this.handleMiddleChange = this.handleMiddleChange.bind(this);\n    this.handleLastChange = this.handleLastChange.bind(this);\n  }\n\n  handleFirstChange(event) {\n    this.setState({ first: event.target.value });\n  }\n\n  handleMiddleChange(event) {\n    this.setState({ middle: event.target.value });\n  }\n\n  handleLastChange(event) {\n    this.setState({ last: event.target.value });\n  }\n\n  render() {\n    return (\n      <div>\n        <Fieldset\n          type="checkbox"\n          legend="Give your full name here"\n          name="children_present"\n          value="children_present"\n          error="All fields must be filled out"\n          help="Families are eligible for family package plans"\n          required\n        >\n          <Field label="First" isInline required htmlFor="first">\n            <Input id="first" type="text" name="first" defaultValue="" onChange={this.handleFirstChange} />\n          </Field>\n          <Field label="Middle" isInline required htmlFor="middle">\n            <Input id="middle" type="text" name="middle" defaultValue="" onChange={this.handleMiddleChange} />\n          </Field>\n          <Field label="Last" isInline required htmlFor="last">\n            <Input id="last" type="text" name="last" defaultValue="" onChange={this.handleLastChange} />\n          </Field>\n        </Fieldset>\n        <hr />\n        <p>\n          Full Name Provided:\n          <span className={cx(\'fieldset-wrapper\')}>\n            {this.state.first}\n            {\' \'}\n            {this.state.middle}\n            {\' \'}\n            {this.state.last}\n          </span>\n        </p>\n        <br />\n      </div>\n    );\n  }\n}\nexport default FieldsetExamples;\n\n')))}p.isMDXComponent=!0;var c=n(49271),m=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var y={};function b(e){var t=e.components,n=h(e,m);return(0,l.mdx)("wrapper",f({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-scss"},":local { \n  .fieldset-wrapper {\n    display: inline-block;\n  }\n}\n\n")))}b.isMDXComponent=!0;var x=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(c.Z,{title:t||"Fieldset Examples",description:n,example:r.createElement(o.Z,null),exampleCssSrc:r.createElement(b,null),exampleSrc:r.createElement(p,null),isExpanded:l})},v=n(78530),g=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var j={},E="wrapper";function T(e){var t=e.components,n=O(e,g);return(0,l.mdx)(E,_({},j,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(v.ZP,{mdxType:"PropsTable"},(0,l.mdx)(v.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"children"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Children the Field contains."))),(0,l.mdx)(v.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"help"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Help element to display with other elements."))),(0,l.mdx)(v.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"legend"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Legend for the input group."))),(0,l.mdx)(v.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"legendAttrs"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Attributes to attach to the legend."))),(0,l.mdx)(v.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"required"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Determines whether the fieldset is required."))),(0,l.mdx)(v.X2,{key:"ROW6",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"isLegendHidden"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not the legend is visible. Use this prop to hide a legend while still creating it on the DOM for accessibility.")))))}T.isMDXComponent=!0;var C=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var P={},S="wrapper";function k(e){var t=e.components,n=w(e,C);return(0,l.mdx)(S,N({},P,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(a.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-form-fieldset"},"Terra Form Fieldset"),(0,l.mdx)("p",null,"Generic form fieldset component which handles the layout of a standard form fieldset including help text, legend, value and widget placement."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-fieldset"))))),(0,l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,l.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,l.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Fieldset from 'terra-form-fieldset/lib/Fieldset';\n")),(0,l.mdx)("h2",{id:"component-features"},"Component Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(x,{mdxType:"FieldsetExamples"}),(0,l.mdx)("h2",{id:"form-fieldset-props"},"Form Fieldset Props"),(0,l.mdx)(T,{mdxType:"FormFieldsetPropsTable"}),(0,l.mdx)("h2",{id:"testing"},"Testing"),(0,l.mdx)("p",null,"Terra Form Fieldset uses ",(0,l.mdx)("inlineCode",{parentName:"p"},"uuid")," which changes the component's description id dynamically. To mock the return value with the Jest testing library, ",(0,l.mdx)("inlineCode",{parentName:"p"},"jest.spyOn")," can be used."),(0,l.mdx)("p",null,"If Enzyme ",(0,l.mdx)("inlineCode",{parentName:"p"},"shallow")," is being used for the tests then the mock may not be required depending on the depth of the returned wrapper. However, if ",(0,l.mdx)("inlineCode",{parentName:"p"},"mount")," is used then ",(0,l.mdx)("inlineCode",{parentName:"p"},"uuid")," should be mocked as shown below:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"import { v4 as uuidv4 } from 'uuid';\n\nlet mockSpyUuid;\n\n// using a variable may result in failures. For best results, mock return value.\nbeforeAll(() => {\n  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockImplementation(() => '00000000-0000-0000-0000-000000000000');\n});\n\n// restore the mock\nafterAll(() => {\n  mockSpyUuid.mockRestore();\n});\n\n")))}k.isMDXComponent=!0},10848:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var l=s(n(67294)),a=s(n(65318)),o=s(n(421)),d=s(n(89426)),i=s(n(47166)),u=s(n(24044));function s(e){return e&&e.__esModule?e:{default:e}}function p(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,(a=l.key,o=void 0,o=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===r(o)?o:String(o)),l)}var a,o}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}(this,n)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var y=i.default.bind(u.default),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(u,e);var t,n,r,i=m(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e)).state={first:"",middle:"",last:""},t.handleFirstChange=t.handleFirstChange.bind(f(t)),t.handleMiddleChange=t.handleMiddleChange.bind(f(t)),t.handleLastChange=t.handleLastChange.bind(f(t)),t}return t=u,(n=[{key:"handleFirstChange",value:function(e){this.setState({first:e.target.value})}},{key:"handleMiddleChange",value:function(e){this.setState({middle:e.target.value})}},{key:"handleLastChange",value:function(e){this.setState({last:e.target.value})}},{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement(d.default,{type:"checkbox",legend:"Give your full name here",name:"children_present",value:"children_present",error:"All fields must be filled out",help:"Families are eligible for family package plans",required:!0},l.default.createElement(a.default,{label:"First",isInline:!0,required:!0,htmlFor:"first"},l.default.createElement(o.default,{id:"first",type:"text",name:"first",defaultValue:"",onChange:this.handleFirstChange})),l.default.createElement(a.default,{label:"Middle",isInline:!0,required:!0,htmlFor:"middle"},l.default.createElement(o.default,{id:"middle",type:"text",name:"middle",defaultValue:"",onChange:this.handleMiddleChange})),l.default.createElement(a.default,{label:"Last",isInline:!0,required:!0,htmlFor:"last"},l.default.createElement(o.default,{id:"last",type:"text",name:"last",defaultValue:"",onChange:this.handleLastChange}))),l.default.createElement("hr",null),l.default.createElement("p",null,"Full Name Provided:",l.default.createElement("span",{className:y("fieldset-wrapper")},this.state.first," ",this.state.middle," ",this.state.last)),l.default.createElement("br",null))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(l.default.Component);t.Z=b},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(67294)),l=s(n(45697)),a=s(n(94184)),o=s(n(47166)),d=s(n(50026)),i=s(n(16749)),u=["children","disableStripes","paddingStyle"];function s(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=o.default.bind(i.default),f={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},h=function(e){var t=e.children,n=e.disableStripes,l=e.paddingStyle,o=c(e,u),i=r.default.useContext(d.default),s=(0,a.default)(m("table",{striped:!n},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},i.className),o.className);return r.default.createElement("table",p({},o,{className:s}),t)};h.propTypes=f,h.defaultProps={disableStripes:!1,paddingStyle:"none"};var y=h;t.default=y},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},u=function(e){var t=e.children,n=d(e,a);return r.default.createElement("tbody",n,t)};u.propTypes=i,u.defaultProps={children:[]};var s=u;t.default=s},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},u=function(e){var t=e.children,n=d(e,a);return r.default.createElement("td",n,t)};u.propTypes=i,u.defaultProps={children:[]};var s=u;t.default=s},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),l=d(n(45697)),a=d(n(29805)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={children:l.default.node},s=function(e){var t=e.children,n=i(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,a.default.addScope(t,"col")))};s.propTypes=u,s.defaultProps={children:[]};var p=s;t.default=p},80876:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},u=function(e){var t=e.children,n=d(e,a);return r.default.createElement("th",n,t)};u.propTypes=i,u.defaultProps={children:[]};var s=u;t.default=s},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),l=u(n(45697)),a=u(n(47166)),o=u(n(16749)),d=u(n(29805)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.default.bind(o.default),m={children:l.default.node},f=function(e){var t=e.children,n=p(e,i),l=c(["row"]);return r.default.createElement("tr",s({},n,{className:n.className?"".concat(l," ").concat(n.className):l}),d.default.addScope(t,"row"))};f.propTypes=m,f.defaultProps={children:[]};var h=f;t.default=h},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=(r=n(67294))&&r.__esModule?r:{default:r};var a={addScope:function(e,t){var n=[];return l.default.Children.forEach(e,(function(e){n.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=a},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=u(n(32634)),l=u(n(80196)),a=u(n(70829)),o=u(n(8685)),d=u(n(19852)),i=u(n(80876));function u(e){return e&&e.__esModule?e:{default:e}}var s=r.default;t.default=s},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(21969));function a(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var d=function(e){var t=o({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=d;t.default=i},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);