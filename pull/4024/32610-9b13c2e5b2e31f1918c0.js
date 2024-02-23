"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[32610],{55713:function(e,t,n){var r=n(24994);t.A=void 0;var a=r(n(96540)),l=r(n(5556)),o=r(n(67967)),u=r(n(25642)),d=o.default.bind(u.default),i={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(l))),u=t?a.default.createElement("a",{className:d("badge"),href:t},a.default.createElement("span",{className:d("badge-name")},"github"),a.default.createElement("span",{className:d("badge-version")},"source")):void 0;return a.default.createElement("div",{className:d("badge-container")},o,u)};c.propTypes=i;t.A=c},201:function(e,t,n){var r=n(24994),a=n(73738);t.A=void 0;var l=r(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(96540)),u=r(n(5556)),d=r(n(67967)),i=n(92912),c=r(n(27166)),s=r(n(62441)),m=n(25966),p=r(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var b=d.default.bind(p.default),_={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,u=e.description,d=e.isExpanded,p=(0,o.useState)(d),f=(0,l.default)(p,2),_=f[0],v=f[1],g=(0,o.useState)(!1),x=(0,l.default)(g,2),O=x[0],N=x[1],E=o.default.useContext(i.ThemeContext),j=void 0!==r,T=function(){N(!O),_&&v(!_)},P=function(){v(!_),O&&N(!O)},w=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:b("template",E.className)},o.default.createElement("div",{className:b("header")},a&&o.default.createElement("h2",{className:b("title")},a)),o.default.createElement("div",{className:b("content")},u&&o.default.createElement("div",{className:b("description")},u),t),o.default.createElement("div",{className:b("footer")},n?o.default.createElement("div",{className:b("button-container")},j&&o.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":O}),onClick:T,onKeyDown:function(e){return w(e,T)},onBlur:y,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:b("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:b("chevron")})),o.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":_}),onClick:P,onKeyDown:function(e){return w(e,P)},onBlur:y,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:b("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:b("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:b("css")},r),_&&o.default.createElement("div",{className:b("code")},n))))};v.propTypes=_,v.defaultProps={isExpanded:!1};t.A=v},12883:function(e,t,n){var r=n(24994),a=n(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return i.Row}}),t.Ay=t.$d=void 0;var l=m(n(96540)),o=r(n(5556)),u=r(n(67967)),d=n(92912),i=m(n(17568)),c=r(n(89744));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var p=u.default.bind(c.default),f={children:o.default.node},b={isRequired:o.default.bool};(t.dt=function(e){var t=e.children;return l.default.createElement(i.Cell,{className:p("bold")},t)}).propTypes=f,(t.$d=function(e){var t=e.children;return l.default.createElement(i.Cell,{className:p("code-block-override")},t)}).propTypes=f,(t.YZ=function(e){var t=e.isRequired;return l.default.createElement(i.Cell,{className:p([t?["required"]:[]])},t?"required":"optional")}).propTypes=b,(t.NZ=function(e){var t=e.children;return l.default.createElement(i.Cell,{className:p("code-block-override")},t)}).propTypes=f,(t.Hd=function(e){var t=e.children;return l.default.createElement(i.Cell,null,t)}).propTypes=f;var _=function(e){var t=e.children,n=(0,l.useContext)(d.ThemeContext);return l.default.createElement(i.default,{paddingStyle:"compact",className:p("table",n.className)},l.default.createElement(i.Header,{className:p("header")},l.default.createElement(i.HeaderCell,null,"Prop"),l.default.createElement(i.HeaderCell,null,"Type"),l.default.createElement(i.HeaderCell,null,"Required"),l.default.createElement(i.HeaderCell,null,"Default"),l.default.createElement(i.HeaderCell,null,"Description")),l.default.createElement(i.Body,null,t))};_.propTypes=f;t.Ay=_},32610:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(96540),a=n(36665),l=n(3315),o=n(69360),u=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={};function s(e){var t=e.components,n=i(e,u);return(0,a.mdx)("wrapper",d({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport Toolbar from \'terra-toolbar\';\nimport Button from \'terra-button\';\nimport {\n  IconAdd,\n  IconAttachment,\n  IconEdit,\n} from \'terra-icon\';\nimport { Placeholder } from \'@cerner/terra-docs\';\n\nexport default () => {\n  const [align, setAlign] = useState();\n  const handleOnChange = (event) => {\n    setAlign(event.target.value);\n  };\n\n  return (\n    <div>\n      <label>\n        Alignment:\n        <select onChange={handleOnChange}>\n          <option value="start">start</option>\n          <option value="center">center</option>\n          <option value="end">end</option>\n        </select>\n      </label>\n      <br />\n      <Toolbar ariaLabel="Documentation Tools" ariaControls="test-content-id" align={align}>\n        <Button text="Edit" variant="utility" icon={<IconEdit />} />\n        <Button text="Add" variant="utility" icon={<IconAdd />} />\n        <Button text="Attachment" variant="utility" icon={<IconAttachment />} />\n      </Toolbar>\n      <div id="test-content-id" aria-label="Add Progress Note Documentation">\n        <Placeholder title="Sample Content Area for Toolbar" />\n      </div>\n    </div>\n  );\n};\n\n')))}s.isMDXComponent=!0;var m=n(201),p=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.A,{title:t||"Default Toolbar",description:n,example:r.createElement(o.A,null),exampleSrc:r.createElement(s,null),isExpanded:a})},f=n(12883),b=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={},v="wrapper";function g(e){var t=e.components,n=y(e,b);return(0,a.mdx)(v,_({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(f.Ay,{mdxType:"PropsTable"},(0,a.mdx)(f.fI,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(f.dt,{mdxType:"PropNameCell"},"align"),(0,a.mdx)(f.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'start'\n  'end'\n  'center'\n],\n"))),(0,a.mdx)(f.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(f.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'start'\n"))),(0,a.mdx)(f.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Content alignment. Align to start, end, or center."))),(0,a.mdx)(f.fI,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(f.dt,{mdxType:"PropNameCell"},"ariaControls"),(0,a.mdx)(f.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(f.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(f.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(f.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"String that labels the content that the toolbar controls. Should reference\nthe id of the content area that the toolbar controls."))),(0,a.mdx)(f.fI,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(f.dt,{mdxType:"PropNameCell"},"ariaLabel"),(0,a.mdx)(f.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(f.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(f.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(f.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"String that labels the content that the toolbar controls. ",(0,a.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," only be used\nwhen no visible label for the toolbar is present. ",(0,a.mdx)("inlineCode",{parentName:"p"},"ariaLabelledBy")," should be\nused over ",(0,a.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," when possible."))),(0,a.mdx)(f.fI,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(f.dt,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,a.mdx)(f.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(f.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(f.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(f.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"String that labels the content that the toolbar controls. Should reference\nthe visible text label that describes the toolbar's function. If no\nvisible text label is present, ",(0,a.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," should be used instead. If both\n",(0,a.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"ariaLabelledBy")," are present, ",(0,a.mdx)("inlineCode",{parentName:"p"},"ariaLabelledBy")," will be used."))),(0,a.mdx)(f.fI,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(f.dt,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(f.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(f.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(f.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(f.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Items to be displayed in toolbar such as buttons, button groups, and links.")))))}g.isMDXComponent=!0;var x=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E={},j="wrapper";function T(e){var t=e.components,n=N(e,x);return(0,a.mdx)(j,O({},E,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.E,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-toolbar"},"Terra Toolbar"),(0,a.mdx)("p",null,"The terra-toolbar component is used to display bar containing items such as buttons, button groups, and links."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-toolbar"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Toolbar from 'terra-toolbar';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support")),(0,a.mdx)("h2",{parentName:"li",id:"examples"},"Examples"),(0,a.mdx)(p,{title:"A Basic Toolbar using the aria-label and aria-controls attributes for accessibility",description:"For assistive technology users, this example adds the aria-label attribute to name the type of tools this \ntoolbar contains, and adds the aria-controls attribute to indicate which page region the toolbar applies to.",mdxType:"DefaultToolbar"}),(0,a.mdx)("h2",{parentName:"li",id:"toolbar-props"},"Toolbar Props"),(0,a.mdx)(g,{mdxType:"PropsTable"}))))}T.isMDXComponent=!0},3315:function(e,t,n){n.d(t,{E:function(){return l}});var r=n(96540),a=n(55713),l=function(e){var t=e.url;return r.createElement(a.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-toolbar",name:"terra-toolbar",version:"1.44.0",url:t})}},69360:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.A=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),l=i(n(66460)),o=i(n(40890)),u=n(78513),d=n(68523);function i(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,u=[],d=!0,i=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=l.call(n)).done)&&(u.push(r.value),u.length!==t);d=!0);}catch(e){i=!0,a=e}finally{try{if(!d&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(i)throw a}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.A=function(){var e=s((0,a.useState)(),2),t=e[0],n=e[1];return a.default.createElement("div",null,a.default.createElement("label",null,"Alignment:",a.default.createElement("select",{onChange:function(e){n(e.target.value)}},a.default.createElement("option",{value:"start"},"start"),a.default.createElement("option",{value:"center"},"center"),a.default.createElement("option",{value:"end"},"end"))),a.default.createElement("br",null),a.default.createElement(l.default,{ariaLabel:"Documentation Tools",ariaControls:"test-content-id",align:t},a.default.createElement(o.default,{text:"Edit",variant:"utility",icon:a.default.createElement(u.IconEdit,null)}),a.default.createElement(o.default,{text:"Add",variant:"utility",icon:a.default.createElement(u.IconAdd,null)}),a.default.createElement(o.default,{text:"Attachment",variant:"utility",icon:a.default.createElement(u.IconAttachment,null)})),a.default.createElement("div",{id:"test-content-id","aria-label":"Add Progress Note Documentation"},a.default.createElement(d.Placeholder,{title:"Sample Content Area for Toolbar"})))}},91563:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(96540)),a=i(n(5556)),l=i(n(67967)),o=i(n(52103)),u=i(n(43840)),d=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=l.default.bind(u.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b={children:a.default.string},_=function(e){var t=e.children,n=s(e,d),a=r.default.useContext(o.default),u=(0,l.default)(m(["button",a.className]),n.className);return r.default.createElement("button",c({},n,{type:"button",className:u,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};_.propTypes=b;t.default=_},18875:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(96540)),a=d(n(5556)),l=d(n(67967)),o=d(n(52103)),u=d(n(38616));function d(e){return e&&e.__esModule?e:{default:e}}var i=l.default.bind(u.default),c={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,l=r.default.useContext(o.default);return r.default.createElement("div",{className:i("notice",n,l.className)},r.default.createElement("div",{className:i("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:i("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:i("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:i("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:i("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:i("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(a,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};s.propTypes=c,s.defaultProps={ariaLevel:"2",variant:"important"};t.default=s},60934:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(96540)),a=c(n(5556)),l=c(n(46942)),o=c(n(67967)),u=c(n(52103)),d=c(n(27683)),i=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(d.default),f={title:a.default.string},b=function(e){var t=e.title,n=m(e,i),a=r.default.useContext(u.default),o=(0,l.default)(p(["placeholder",a.className]),n.className),d=p(["inner"]);return r.default.createElement("div",s({},n,{className:o}),r.default.createElement("div",{className:d},r.default.createElement("p",{className:p("title")},t)))};b.propTypes=f,b.defaultProps={title:""};t.default=b},68523:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var r=o(n(18875)),a=o(n(60934)),l=o(n(91563));function o(e){return e&&e.__esModule?e:{default:e}}},17212:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(96540)),a=c(n(5556)),l=c(n(46942)),o=c(n(67967)),u=c(n(52103)),d=c(n(19677)),i=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(d.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},b=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=m(e,i),d=r.default.useContext(u.default),c=(0,l.default)(p("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},d.className),o.className);return r.default.createElement("table",s({},o,{className:c}),t)};b.propTypes=f,b.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=b},15460:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),a=o(n(5556)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},i=function(e){var t=e.children,n=u(e,l);return r.default.createElement("tbody",n,t)};i.propTypes=d,i.defaultProps={children:[]};t.default=i},59584:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),a=o(n(5556)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},i=function(e){var t=e.children,n=u(e,l);return r.default.createElement("td",n,t)};i.propTypes=d,i.defaultProps={children:[]};t.default=i},14281:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(96540)),a=u(n(5556)),l=u(n(93623)),o=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},c=function(e){var t=e.children,n=d(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};c.propTypes=i,c.defaultProps={children:[]};t.default=c},93401:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),a=o(n(5556)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},i=function(e){var t=e.children,n=u(e,l);return r.default.createElement("th",n,t)};i.propTypes=d,i.defaultProps={children:[]};t.default=i},96646:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(96540)),a=i(n(5556)),l=i(n(67967)),o=i(n(19677)),u=i(n(93623)),d=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=l.default.bind(o.default),p={children:a.default.node},f=function(e){var t=e.children,n=s(e,d),a=m(["row"]);return r.default.createElement("tr",c({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),u.default.addScope(t,"row"))};f.propTypes=p,f.defaultProps={children:[]};t.default=f},93623:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(96540))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},17568:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=i(n(17212)),a=i(n(15460)),l=i(n(96646)),o=i(n(59584)),u=i(n(14281)),d=i(n(93401));function i(e){return e&&e.__esModule?e:{default:e}}t.default=r.default},66460:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(96540)),a=c(n(5556)),l=c(n(46942)),o=c(n(67967)),u=c(n(52103)),d=c(n(82629)),i=["align","ariaControls","ariaLabel","ariaLabelledBy","children"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(d.default),f={align:a.default.oneOf(["start","end","center"]),ariaControls:a.default.string,ariaLabel:a.default.string,ariaLabelledBy:a.default.string,children:a.default.node},b=function(e){var t=e.align,n=e.ariaControls,a=e.ariaLabel,o=e.ariaLabelledBy,d=e.children,c=m(e,i),f=r.default.useContext(u.default),b=(0,l.default)(p("toolbar","".concat(t,"-align"),f.className),c.className),_=r.default.Children.map(d,(function(e){return e?r.default.createElement("div",{className:p("item")},e):e}));return r.default.createElement("div",s({},c,{"aria-controls":n,"aria-label":o?void 0:a,"aria-labelledby":o,className:b,role:"toolbar"}),_)};b.propTypes=f,b.defaultProps={align:"start"};t.default=b},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},89744:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},43840:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___mWSPm","orion-fusion-theme":"Button-module__orion-fusion-theme___nj7k4",button:"Button-module__button___r5O1Q","is-active":"Button-module__is-active___CVWJw"}},38616:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___J4EGN","orion-fusion-theme":"Notice-module__orion-fusion-theme___1W9PK",notice:"Notice-module__notice___8kOwf",children:"Notice-module__children___cF5Rb",accessory:"Notice-module__accessory___h3l7H",title:"Notice-module__title___PeXjO","ux-recommendation":"Notice-module__ux-recommendation___tJWAL",caution:"Notice-module__caution___STLbH",deprecation:"Notice-module__deprecation___rWWLq",maintenance:"Notice-module__maintenance___o2AK1",important:"Notice-module__important___WpELD","not-supported":"Notice-module__not-supported___eAx6o",paragraph:"Notice-module__paragraph___BwEGe",list:"Notice-module__list___kOyCE"}},27683:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___rMAZk","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___78cuG",placeholder:"Placeholder-module__placeholder___FPYJB",inner:"Placeholder-module__inner___-U1IZ",title:"Placeholder-module__title___lsXDJ"}},19677:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}},82629:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___WS97G","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___6na+8",toolbar:"Toolbar-module__toolbar___P9DhG",item:"Toolbar-module__item___hGwSK","start-align":"Toolbar-module__start-align___vUi7h","end-align":"Toolbar-module__end-align___6Ku2K","center-align":"Toolbar-module__center-align___ljlwu"}}}]);