"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[84982],{55713:function(e,t,n){var r=n(24994);t.A=void 0;var l=r(n(96540)),a=r(n(5556)),d=r(n(67967)),o=r(n(25642)),i=d.default.bind(o.default),u={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},s=function(e){var t=e.src,n=e.name,r=e.url,a=e.version,d=l.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(a)},l.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),l.default.createElement("span",{className:i("badge-version")},"v".concat(a))),o=t?l.default.createElement("a",{className:i("badge"),href:t},l.default.createElement("span",{className:i("badge-name")},"github"),l.default.createElement("span",{className:i("badge-version")},"source")):void 0;return l.default.createElement("div",{className:i("badge-container")},d,o)};s.propTypes=u;t.A=s},201:function(e,t,n){var r=n(24994),l=n(73738);t.A=void 0;var a=r(n(85715)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=a?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(r,d,o):r[d]=e[d]}return r.default=e,n&&n.set(e,r),r}(n(96540)),o=r(n(5556)),i=r(n(67967)),u=n(92912),s=r(n(27166)),c=r(n(62441)),p=n(25966),m=r(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=i.default.bind(m.default),b={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,l=e.title,o=e.description,i=e.isExpanded,m=(0,d.useState)(i),f=(0,a.default)(m,2),b=f[0],_=f[1],x=(0,d.useState)(!1),v=(0,a.default)(x,2),O=v[0],N=v[1],j=d.default.useContext(u.ThemeContext),E=void 0!==r,T=function(){N(!O),b&&_(!b)},w=function(){_(!b),O&&N(!O)},C=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:h("template",j.className)},d.default.createElement("div",{className:h("header")},l&&d.default.createElement("h2",{className:h("title")},l)),d.default.createElement("div",{className:h("content")},o&&d.default.createElement("div",{className:h("description")},o),t),d.default.createElement("div",{className:h("footer")},n?d.default.createElement("div",{className:h("button-container")},E&&d.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":O}),onClick:T,onKeyDown:function(e){return C(e,T)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(s.default,{className:h("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(c.default,{className:h("chevron")})),d.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":b}),onClick:w,onKeyDown:function(e){return C(e,w)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(s.default,{className:h("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(c.default,{className:h("chevron")}))):null,d.default.createElement("div",null,O&&d.default.createElement("div",{className:h("css")},r),b&&d.default.createElement("div",{className:h("code")},n))))};_.propTypes=b,_.defaultProps={isExpanded:!1};t.A=_},12883:function(e,t,n){var r=n(24994),l=n(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return u.Row}}),t.Ay=t.$d=void 0;var a=p(n(96540)),d=r(n(5556)),o=r(n(67967)),i=n(92912),u=p(n(17568)),s=r(n(89744));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=a?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(r,d,o):r[d]=e[d]}return r.default=e,n&&n.set(e,r),r}var m=o.default.bind(s.default),f={children:d.default.node},h={isRequired:d.default.bool};(t.dt=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:m("bold")},t)}).propTypes=f,(t.$d=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:m("code-block-override")},t)}).propTypes=f,(t.YZ=function(e){var t=e.isRequired;return a.default.createElement(u.Cell,{className:m([t?["required"]:[]])},t?"required":"optional")}).propTypes=h,(t.NZ=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:m("code-block-override")},t)}).propTypes=f,(t.Hd=function(e){var t=e.children;return a.default.createElement(u.Cell,null,t)}).propTypes=f;var b=function(e){var t=e.children,n=(0,a.useContext)(i.ThemeContext);return a.default.createElement(u.default,{paddingStyle:"compact",className:m("table",n.className)},a.default.createElement(u.Header,{className:m("header")},a.default.createElement(u.HeaderCell,null,"Prop"),a.default.createElement(u.HeaderCell,null,"Type"),a.default.createElement(u.HeaderCell,null,"Required"),a.default.createElement(u.HeaderCell,null,"Default"),a.default.createElement(u.HeaderCell,null,"Description")),a.default.createElement(u.Body,null,t))};b.propTypes=f;t.Ay=b},11802:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(96540),l=n(36665),a=n(1393),d=n(47253),o=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s={};function c(e){var t=e.components,n=u(e,o);return(0,l.mdx)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Field from \'terra-form-field\';\nimport Input from \'terra-form-input\';\nimport Fieldset from \'terra-form-fieldset\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FieldsetExamples.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nclass FieldsetExamples extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      first: \'\',\n      middle: \'\',\n      last: \'\',\n    };\n    this.handleFirstChange = this.handleFirstChange.bind(this);\n    this.handleMiddleChange = this.handleMiddleChange.bind(this);\n    this.handleLastChange = this.handleLastChange.bind(this);\n  }\n\n  handleFirstChange(event) {\n    this.setState({ first: event.target.value });\n  }\n\n  handleMiddleChange(event) {\n    this.setState({ middle: event.target.value });\n  }\n\n  handleLastChange(event) {\n    this.setState({ last: event.target.value });\n  }\n\n  render() {\n    return (\n      <div>\n        <Fieldset\n          type="checkbox"\n          legend="Give your full name here"\n          name="children_present"\n          value="children_present"\n          error="All fields must be filled out"\n          help="Families are eligible for family package plans"\n          required\n        >\n          <Field label="First" isInline required htmlFor="first">\n            <Input id="first" type="text" name="first" defaultValue="" onChange={this.handleFirstChange} />\n          </Field>\n          <Field label="Middle" isInline required htmlFor="middle">\n            <Input id="middle" type="text" name="middle" defaultValue="" onChange={this.handleMiddleChange} />\n          </Field>\n          <Field label="Last" isInline required htmlFor="last">\n            <Input id="last" type="text" name="last" defaultValue="" onChange={this.handleLastChange} />\n          </Field>\n        </Fieldset>\n        <hr />\n        <p>\n          Full Name Provided:\n          <span className={cx(\'fieldset-wrapper\')}>\n            {this.state.first}\n            {\' \'}\n            {this.state.middle}\n            {\' \'}\n            {this.state.last}\n          </span>\n        </p>\n        <br />\n      </div>\n    );\n  }\n}\nexport default FieldsetExamples;\n\n')))}c.isMDXComponent=!0;var p=n(201),m=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b={};function y(e){var t=e.components,n=h(e,m);return(0,l.mdx)("wrapper",f({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-scss"},":local { \n  .fieldset-wrapper {\n    display: inline-block;\n  }\n}\n\n")))}y.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(p.A,{title:t||"Fieldset Examples",description:n,example:r.createElement(d.A,null),exampleCssSrc:r.createElement(y,null),exampleSrc:r.createElement(c,null),isExpanded:l})},_=n(12883),x=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var N={},j="wrapper";function E(e){var t=e.components,n=O(e,x);return(0,l.mdx)(j,v({},N,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(_.Ay,{mdxType:"PropsTable"},(0,l.mdx)(_.fI,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(_.dt,{mdxType:"PropNameCell"},"children"),(0,l.mdx)(_.$d,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(_.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(_.NZ,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(_.Hd,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Children the Field contains."))),(0,l.mdx)(_.fI,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(_.dt,{mdxType:"PropNameCell"},"help"),(0,l.mdx)(_.$d,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(_.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(_.NZ,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(_.Hd,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Help element to display with other elements."))),(0,l.mdx)(_.fI,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(_.dt,{mdxType:"PropNameCell"},"legend"),(0,l.mdx)(_.$d,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(_.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(_.NZ,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(_.Hd,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Legend for the input group."))),(0,l.mdx)(_.fI,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(_.dt,{mdxType:"PropNameCell"},"legendAttrs"),(0,l.mdx)(_.$d,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,l.mdx)(_.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(_.NZ,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,l.mdx)(_.Hd,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Attributes to attach to the legend."))),(0,l.mdx)(_.fI,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(_.dt,{mdxType:"PropNameCell"},"required"),(0,l.mdx)(_.$d,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(_.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(_.NZ,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(_.Hd,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Determines whether the fieldset is required."))),(0,l.mdx)(_.fI,{key:"ROW6",mdxType:"Row"},(0,l.mdx)(_.dt,{mdxType:"PropNameCell"},"isLegendHidden"),(0,l.mdx)(_.$d,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(_.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(_.NZ,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(_.Hd,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not the legend is visible. Use this prop to hide a legend while still creating it on the DOM for accessibility.")))))}E.isMDXComponent=!0;var T=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var P={},S="wrapper";function k(e){var t=e.components,n=C(e,T);return(0,l.mdx)(S,w({},P,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(a.E,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-form-fieldset"},"Terra Form Fieldset"),(0,l.mdx)("p",null,"Generic form fieldset component which handles the layout of a standard form fieldset including help text, legend, value and widget placement."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-fieldset"))))),(0,l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,l.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,l.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Fieldset from 'terra-form-fieldset';\n")),(0,l.mdx)("h2",{id:"component-features"},"Component Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(g,{mdxType:"FieldsetExamples"}),(0,l.mdx)("h2",{id:"form-fieldset-props"},"Form Fieldset Props"),(0,l.mdx)(E,{mdxType:"FormFieldsetPropsTable"}),(0,l.mdx)("h2",{id:"testing"},"Testing"),(0,l.mdx)("p",null,"Terra Form Fieldset uses ",(0,l.mdx)("inlineCode",{parentName:"p"},"uuid")," which changes the component's description id dynamically. To mock the return value with the Jest testing library, ",(0,l.mdx)("inlineCode",{parentName:"p"},"jest.spyOn")," can be used."),(0,l.mdx)("p",null,"If Enzyme ",(0,l.mdx)("inlineCode",{parentName:"p"},"shallow")," is being used for the tests then the mock may not be required depending on the depth of the returned wrapper. However, if ",(0,l.mdx)("inlineCode",{parentName:"p"},"mount")," is used then ",(0,l.mdx)("inlineCode",{parentName:"p"},"uuid")," should be mocked as shown below:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"import { v4 as uuidv4 } from 'uuid';\n\nlet mockSpyUuid;\n\n// using a variable may result in failures. For best results, mock return value.\nbeforeAll(() => {\n  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');\n});\n\n// restore the mock\nafterAll(() => {\n  mockSpyUuid.mockRestore();\n});\n\n")))}k.isMDXComponent=!0},1393:function(e,t,n){n.d(t,{E:function(){return a}});var r=n(96540),l=n(55713),a=function(e){var t=e.url;return r.createElement(l.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-fieldset",name:"terra-form-fieldset",version:"2.81.0",url:t})}},47253:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.A=void 0;var l=s(n(96540)),a=s(n(9047)),d=s(n(11475)),o=s(n(80089)),i=s(n(67967)),u=s(n(85302));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,p(r.key),r)}}function p(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!=r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:t+""}function m(e,t,n){return t=h(t),function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,f()?Reflect.construct(t,n||[],h(e).constructor):t.apply(e,n))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}var y=i.default.bind(u.default),g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,t,[e])).state={first:"",middle:"",last:""},n.handleFirstChange=n.handleFirstChange.bind(n),n.handleMiddleChange=n.handleMiddleChange.bind(n),n.handleLastChange=n.handleLastChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(t,e),n=t,(r=[{key:"handleFirstChange",value:function(e){this.setState({first:e.target.value})}},{key:"handleMiddleChange",value:function(e){this.setState({middle:e.target.value})}},{key:"handleLastChange",value:function(e){this.setState({last:e.target.value})}},{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement(o.default,{type:"checkbox",legend:"Give your full name here",name:"children_present",value:"children_present",error:"All fields must be filled out",help:"Families are eligible for family package plans",required:!0},l.default.createElement(a.default,{label:"First",isInline:!0,required:!0,htmlFor:"first"},l.default.createElement(d.default,{id:"first",type:"text",name:"first",defaultValue:"",onChange:this.handleFirstChange})),l.default.createElement(a.default,{label:"Middle",isInline:!0,required:!0,htmlFor:"middle"},l.default.createElement(d.default,{id:"middle",type:"text",name:"middle",defaultValue:"",onChange:this.handleMiddleChange})),l.default.createElement(a.default,{label:"Last",isInline:!0,required:!0,htmlFor:"last"},l.default.createElement(d.default,{id:"last",type:"text",name:"last",defaultValue:"",onChange:this.handleLastChange}))),l.default.createElement("hr",null),l.default.createElement("p",null,"Full Name Provided:",l.default.createElement("span",{className:y("fieldset-wrapper")},this.state.first," ",this.state.middle," ",this.state.last)),l.default.createElement("br",null))}}])&&c(n.prototype,r),i&&c(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r,i}(l.default.Component);t.A=g},80089:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(96540)),l=c(n(5556)),a=c(n(46942)),d=c(n(67967)),o=c(n(52103)),i=n(68414),u=c(n(69970)),s=["children","help","legend","legendAttrs","isLegendHidden","required"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var f=d.default.bind(u.default),h={children:l.default.node,help:l.default.node,legend:l.default.string,legendAttrs:l.default.object,required:l.default.bool,isLegendHidden:l.default.bool},b=function(e){var t,n,l=e.children,d=e.help,u=e.legend,c=e.legendAttrs,h=e.isLegendHidden,b=e.required,y=m(e,s),g=r.default.useContext(o.default),_=(0,a.default)(f(["fieldset",{"fieldset-required":b},g.className]),y.className),x=f(["legend",c.className,{"legend-visually-hidden":h}]),v="terra-fieldset-legend-".concat((0,i.v4)()),O="terra-fieldset-help-".concat((0,i.v4)());return r.default.createElement("fieldset",p({},y,{className:_}),u&&r.default.createElement("legend",p({id:v},c,{className:x}),u),d&&r.default.createElement("small",{id:O,className:f("help-text"),tabIndex:"-1"},d),r.default.createElement("div",{className:f("fieldset-children")},(d||u)&&l?(t=l,n=[],r.default.Children.forEach(t,(function(e){n.push(r.default.cloneElement(e,{"aria-labelledby":"".concat(v," ").concat(O)}))})),n):l))};b.propTypes=h,b.defaultProps={legendAttrs:{},required:!1,isLegendHidden:!1};t.default=b},17212:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(96540)),l=s(n(5556)),a=s(n(46942)),d=s(n(67967)),o=s(n(52103)),i=s(n(19677)),u=["children","disableStripes","paddingStyle"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=d.default.bind(i.default),f={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},h=function(e){var t=e.children,n=e.disableStripes,l=e.paddingStyle,d=p(e,u),i=r.default.useContext(o.default),s=(0,a.default)(m("table",{striped:!n},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},i.className),d.className);return r.default.createElement("table",c({},d,{className:s}),t)};h.propTypes=f,h.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=h},15460:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(96540)),l=d(n(5556)),a=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},u=function(e){var t=e.children,n=o(e,a);return r.default.createElement("tbody",n,t)};u.propTypes=i,u.defaultProps={children:[]};t.default=u},59584:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(96540)),l=d(n(5556)),a=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},u=function(e){var t=e.children,n=o(e,a);return r.default.createElement("td",n,t)};u.propTypes=i,u.defaultProps={children:[]};t.default=u},14281:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),l=o(n(5556)),a=o(n(93623)),d=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={children:l.default.node},s=function(e){var t=e.children,n=i(e,d);return r.default.createElement("thead",n,r.default.createElement("tr",null,a.default.addScope(t,"col")))};s.propTypes=u,s.defaultProps={children:[]};t.default=s},93401:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(96540)),l=d(n(5556)),a=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},u=function(e){var t=e.children,n=o(e,a);return r.default.createElement("th",n,t)};u.propTypes=i,u.defaultProps={children:[]};t.default=u},96646:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(96540)),l=u(n(5556)),a=u(n(67967)),d=u(n(19677)),o=u(n(93623)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.default.bind(d.default),m={children:l.default.node},f=function(e){var t=e.children,n=c(e,i),l=p(["row"]);return r.default.createElement("tr",s({},n,{className:n.className?"".concat(l," ").concat(n.className):l}),o.default.addScope(t,"row"))};f.propTypes=m,f.defaultProps={children:[]};t.default=f},93623:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=(r=n(96540))&&r.__esModule?r:{default:r};var a={addScope:function(e,t){var n=[];return l.default.Children.forEach(e,(function(e){n.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=a},17568:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=u(n(17212)),l=u(n(15460)),a=u(n(96646)),d=u(n(59584)),o=u(n(14281)),i=u(n(93401));function u(e){return e&&e.__esModule?e:{default:e}}t.default=r.default},27166:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(96540)),l=a(n(56445));function a(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t=Object.assign({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=d},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},89744:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},85302:function(e,t,n){n.r(t),t.default={"fieldset-wrapper":"FieldsetExamples-module__fieldset-wrapper___o5VzM"}},69970:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Fieldset-module__clinical-lowlight-theme___j+Wn3","orion-fusion-theme":"Fieldset-module__orion-fusion-theme___SXBiS",fieldset:"Fieldset-module__fieldset___Wlpg-","fieldset-required":"Fieldset-module__fieldset-required___59GHf",legend:"Fieldset-module__legend___Nas0D","legend-visually-hidden":"Fieldset-module__legend-visually-hidden___DRQXh","help-text":"Fieldset-module__help-text___hL4PH","fieldset-children":"Fieldset-module__fieldset-children___Js-NM"}},19677:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);