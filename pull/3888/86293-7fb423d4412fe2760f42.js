"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[86293],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),u=r(n(17422)),i=o.default.bind(u.default),d={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),u=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},o,u)};c.propTypes=d;var s=c;t.Z=s},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),u=r(n(45697)),i=r(n(47166)),d=n(21538),c=r(n(13810)),s=r(n(40931)),f=n(51051),p=r(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var b=i.default.bind(p.default),_={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,u=e.description,i=e.isExpanded,p=(0,o.useState)(i),m=(0,l.default)(p,2),_=m[0],h=m[1],g=(0,o.useState)(!1),x=(0,l.default)(g,2),O=x[0],E=x[1],j=o.default.useContext(d.ThemeContext),N=void 0!==r,w=function(){E(!O),_&&h(!_)},P=function(){h(!_),O&&E(!O)},T=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:b("template",j.className)},o.default.createElement("div",{className:b("header")},a&&o.default.createElement("h2",{className:b("title")},a)),o.default.createElement("div",{className:b("content")},u&&o.default.createElement("div",{className:b("description")},u),t),o.default.createElement("div",{className:b("footer")},n?o.default.createElement("div",{className:b("button-container")},N&&o.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":O}),onClick:w,onKeyDown:function(e){return T(e,w)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:b("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:b("chevron")})),o.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":_}),onClick:P,onKeyDown:function(e){return T(e,P)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:b("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:b("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:b("css")},r),_&&o.default.createElement("div",{className:b("code")},n))))};h.propTypes=_,h.defaultProps={isExpanded:!1};var g=h;t.Z=g},78530:function(e,t,n){var r=n(64836),a=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return d.Row}}),t.ZP=t.Di=void 0;var l=f(n(67294)),o=r(n(45697)),u=r(n(47166)),i=n(21538),d=f(n(37515)),c=r(n(54931));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var p=u.default.bind(c.default),m={children:o.default.node},b={isRequired:o.default.bool},_=function(e){var t=e.children;return l.default.createElement(d.Cell,{className:p("bold")},t)};t.O=_,_.propTypes=m;var v=function(e){var t=e.children;return l.default.createElement(d.Cell,{className:p("code-block-override")},t)};t.Di=v,v.propTypes=m;var y=function(e){var t=e.isRequired;return l.default.createElement(d.Cell,{className:p([t?["required"]:[]])},t?"required":"optional")};t.dS=y,y.propTypes=b;var h=function(e){var t=e.children;return l.default.createElement(d.Cell,{className:p("code-block-override")},t)};t.mW=h,h.propTypes=m;var g=function(e){var t=e.children;return l.default.createElement(d.Cell,null,t)};t.Ex=g,g.propTypes=m;var x=function(e){var t=e.children,n=(0,l.useContext)(i.ThemeContext);return l.default.createElement(d.default,{paddingStyle:"compact",className:p("table",n.className)},l.default.createElement(d.Header,{className:p("header")},l.default.createElement(d.HeaderCell,null,"Prop"),l.default.createElement(d.HeaderCell,null,"Type"),l.default.createElement(d.HeaderCell,null,"Required"),l.default.createElement(d.HeaderCell,null,"Default"),l.default.createElement(d.HeaderCell,null,"Description")),l.default.createElement(d.Body,null,t))};x.propTypes=m;var O=x;t.ZP=O},86293:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(67294),a=n(81254),l=n(18238),o=n(66680),u=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={};function s(e){var t=e.components,n=d(e,u);return(0,a.mdx)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport Toolbar from \'terra-toolbar\';\nimport Button from \'terra-button\';\nimport IconEdit from \'terra-icon/lib/icon/IconEdit\';\nimport IconAdd from \'terra-icon/lib/icon/IconAdd\';\nimport IconAttachment from \'terra-icon/lib/icon/IconAttachment\';\nimport { Placeholder } from \'@cerner/terra-docs\';\n\nexport default () => {\n  const [align, setAlign] = useState();\n  const handleOnChange = (event) => {\n    setAlign(event.target.value);\n  };\n\n  return (\n    <div>\n      <label>\n        Alignment:\n        <select onChange={handleOnChange}>\n          <option value="start">start</option>\n          <option value="center">center</option>\n          <option value="end">end</option>\n        </select>\n      </label>\n      <br />\n      <Toolbar ariaLabel="Documentation Tools" ariaControls="test-content-id" align={align}>\n        <Button text="Edit" variant="utility" icon={<IconEdit />} />\n        <Button text="Add" variant="utility" icon={<IconAdd />} />\n        <Button text="Attachment" variant="utility" icon={<IconAttachment />} />\n      </Toolbar>\n      <div id="test-content-id" aria-label="Add Progress Note Documentation">\n        <Placeholder title="Sample Content Area for Toolbar" />\n      </div>\n    </div>\n  );\n};\n\n')))}s.isMDXComponent=!0;var f=n(49271),p=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(f.Z,{title:t||"Default Toolbar",description:n,example:r.createElement(o.Z,null),exampleSrc:r.createElement(s,null),isExpanded:a})},m=n(78530),b=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y={},h="wrapper";function g(e){var t=e.components,n=v(e,b);return(0,a.mdx)(h,_({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(m.ZP,{mdxType:"PropsTable"},(0,a.mdx)(m.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(m.O,{mdxType:"PropNameCell"},"align"),(0,a.mdx)(m.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'start'\n  'end'\n  'center'\n],\n"))),(0,a.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'start'\n"))),(0,a.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Content alignment. Align to start, end, or center."))),(0,a.mdx)(m.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(m.O,{mdxType:"PropNameCell"},"ariaControls"),(0,a.mdx)(m.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"String that labels the content that the toolbar controls. Should reference\nthe id of the content area that the toolbar controls."))),(0,a.mdx)(m.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(m.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,a.mdx)(m.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"String that labels the content that the toolbar controls. ",(0,a.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," only be used\nwhen no visible label for the toolbar is present. ",(0,a.mdx)("inlineCode",{parentName:"p"},"ariaLabelledBy")," should be\nused over ",(0,a.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," when possible."))),(0,a.mdx)(m.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(m.O,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,a.mdx)(m.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"String that labels the content that the toolbar controls. Should reference\nthe visible text label that describes the toolbar's function. If no\nvisible text label is present, ",(0,a.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," should be used instead. If both\n",(0,a.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"ariaLabelledBy")," are present, ",(0,a.mdx)("inlineCode",{parentName:"p"},"ariaLabelledBy")," will be used."))),(0,a.mdx)(m.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(m.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(m.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Items to be displayed in toolbar such as buttons, button groups, and links.")))))}g.isMDXComponent=!0;var x=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={},N="wrapper";function w(e){var t=e.components,n=E(e,x);return(0,a.mdx)(N,O({},j,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-toolbar"},"Terra Toolbar"),(0,a.mdx)("p",null,"The terra-toolbar component is used to display bar containing items such as buttons, button groups, and links."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-toolbar"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Toolbar from 'terra-toolbar';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support")),(0,a.mdx)("h2",{parentName:"li",id:"examples"},"Examples"),(0,a.mdx)(p,{title:"A Basic Toolbar using the aria-label and aria-controls attributes for accessibility",description:"For assistive technology users, this example adds the aria-label attribute to name the type of tools this \ntoolbar contains, and adds the aria-controls attribute to indicate which page region the toolbar applies to.",mdxType:"DefaultToolbar"}),(0,a.mdx)("h2",{parentName:"li",id:"toolbar-props"},"Toolbar Props"),(0,a.mdx)(g,{mdxType:"PropsTable"}))))}w.isMDXComponent=!0},18238:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-toolbar",name:"terra-toolbar",version:"1.36.0",url:t})}},66680:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),l=s(n(61070)),o=s(n(43868)),u=s(n(44942)),i=s(n(30390)),d=s(n(80482)),c=n(60619);function s(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,u=[],i=!0,d=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=l.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){d=!0,a=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw a}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.Z=function(){var e=p((0,a.useState)(),2),t=e[0],n=e[1];return a.default.createElement("div",null,a.default.createElement("label",null,"Alignment:",a.default.createElement("select",{onChange:function(e){n(e.target.value)}},a.default.createElement("option",{value:"start"},"start"),a.default.createElement("option",{value:"center"},"center"),a.default.createElement("option",{value:"end"},"end"))),a.default.createElement("br",null),a.default.createElement(l.default,{ariaLabel:"Documentation Tools",ariaControls:"test-content-id",align:t},a.default.createElement(o.default,{text:"Edit",variant:"utility",icon:a.default.createElement(u.default,null)}),a.default.createElement(o.default,{text:"Add",variant:"utility",icon:a.default.createElement(i.default,null)}),a.default.createElement(o.default,{text:"Attachment",variant:"utility",icon:a.default.createElement(d.default,null)})),a.default.createElement("div",{id:"test-content-id","aria-label":"Add Progress Note Documentation"},a.default.createElement(c.Placeholder,{title:"Sample Content Area for Toolbar"})))}},75295:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),l=d(n(47166)),o=d(n(50026)),u=d(n(72145)),i=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=l.default.bind(u.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b={children:a.default.string},_=function(e){var t=e.children,n=s(e,i),a=r.default.useContext(o.default),u=(0,l.default)(f(["button",a.className]),n.className);return r.default.createElement("button",c({},n,{type:"button",className:u,onBlur:p,onMouseDown:m,"data-focus-styles-enabled":!0}),t)};_.propTypes=b;var v=_;t.default=v},77904:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),a=i(n(45697)),l=i(n(47166)),o=i(n(50026)),u=i(n(45491));function i(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(u.default),c={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,l=r.default.useContext(o.default);return r.default.createElement("div",{className:d("notice",n,l.className)},r.default.createElement("div",{className:d("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:d("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:d("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:d("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:d("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:d("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(a,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};s.propTypes=c,s.defaultProps={ariaLevel:"2",variant:"important"};var f=s;t.default=f},78026:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(94184)),o=c(n(47166)),u=c(n(50026)),i=c(n(15877)),d=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(i.default),m={title:a.default.string},b=function(e){var t=e.title,n=f(e,d),a=r.default.useContext(u.default),o=(0,l.default)(p(["placeholder",a.className]),n.className),i=p(["inner"]);return r.default.createElement("div",s({},n,{className:o}),r.default.createElement("div",{className:i},r.default.createElement("p",{className:p("title")},t)))};b.propTypes=m,b.defaultProps={title:""};var _=b;t.default=_},60619:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var r=o(n(77904)),a=o(n(78026)),l=o(n(75295));function o(e){return e&&e.__esModule?e:{default:e}}},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(94184)),o=c(n(47166)),u=c(n(50026)),i=c(n(16749)),d=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(i.default),m={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},b=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=f(e,d),i=r.default.useContext(u.default),c=(0,l.default)(p("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},i.className),o.className);return r.default.createElement("table",s({},o,{className:c}),t)};b.propTypes=m,b.defaultProps={disableStripes:!1,paddingStyle:"none"};var _=b;t.default=_},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},d=function(e){var t=e.children,n=u(e,l);return r.default.createElement("tbody",n,t)};d.propTypes=i,d.defaultProps={children:[]};var c=d;t.default=c},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},d=function(e){var t=e.children,n=u(e,l);return r.default.createElement("td",n,t)};d.propTypes=i,d.defaultProps={children:[]};var c=d;t.default=c},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(29805)),o=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},c=function(e){var t=e.children,n=i(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};c.propTypes=d,c.defaultProps={children:[]};var s=c;t.default=s},80876:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},d=function(e){var t=e.children,n=u(e,l);return r.default.createElement("th",n,t)};d.propTypes=i,d.defaultProps={children:[]};var c=d;t.default=c},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),l=d(n(47166)),o=d(n(16749)),u=d(n(29805)),i=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=l.default.bind(o.default),p={children:a.default.node},m=function(e){var t=e.children,n=s(e,i),a=f(["row"]);return r.default.createElement("tr",c({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),u.default.addScope(t,"row"))};m.propTypes=p,m.defaultProps={children:[]};var b=m;t.default=b},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(67294))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=d(n(32634)),a=d(n(80196)),l=d(n(70829)),o=d(n(8685)),u=d(n(19852)),i=d(n(80876));function d(e){return e&&e.__esModule?e:{default:e}}var c=r.default;t.default=c},30390:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M48 21H27V0h-6v21H0v6h21v21h6V27h21z"}))};u.displayName="IconAdd",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=u;t.default=i},80482:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M32 8v29a8 8 0 0 1-16 0V8a5 5 0 0 1 10 0v29a2 2 0 0 1-4 0V15h-3v22a5 5 0 0 0 10 0V8a8 8 0 0 0-16 0v29a11 11 0 0 0 22 0V8z"}))};u.displayName="IconAttachment",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=u;t.default=i},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=u;t.default=i},44942:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"m.1 48 5.7-12.8 7.1 7.1zm44.8-37.6 2.5-2.5a2.05 2.05 0 0 0 0-2.9L43 .6a2.05 2.05 0 0 0-2.9 0l-2.5 2.5zm-9.4-5.2L7.6 33.1l7.3 7.3 27.9-27.9z"}))};u.displayName="IconEdit",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=u;t.default=i},61070:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(94184)),o=c(n(47166)),u=c(n(50026)),i=c(n(62303)),d=["align","ariaControls","ariaLabel","ariaLabelledBy","children"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(i.default),m={align:a.default.oneOf(["start","end","center"]),ariaControls:a.default.string,ariaLabel:a.default.string,ariaLabelledBy:a.default.string,children:a.default.node},b=function(e){var t=e.align,n=e.ariaControls,a=e.ariaLabel,o=e.ariaLabelledBy,i=e.children,c=f(e,d),m=r.default.useContext(u.default),b=(0,l.default)(p("toolbar","".concat(t,"-align"),m.className),c.className),_=r.default.Children.map(i,(function(e){return e?r.default.createElement("div",{className:p("item")},e):e}));return r.default.createElement("div",s({},c,{"aria-controls":n,"aria-label":o?void 0:a,"aria-labelledby":o,className:b,role:"toolbar"}),_)};b.propTypes=m,b.defaultProps={align:"start"};var _=b;t.default=_},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},72145:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___mWSPm","orion-fusion-theme":"Button-module__orion-fusion-theme___nj7k4",button:"Button-module__button___r5O1Q","is-active":"Button-module__is-active___CVWJw"}},45491:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___J4EGN","orion-fusion-theme":"Notice-module__orion-fusion-theme___1W9PK",notice:"Notice-module__notice___8kOwf",children:"Notice-module__children___cF5Rb",accessory:"Notice-module__accessory___h3l7H",title:"Notice-module__title___PeXjO","ux-recommendation":"Notice-module__ux-recommendation___tJWAL",caution:"Notice-module__caution___STLbH",deprecation:"Notice-module__deprecation___rWWLq",maintenance:"Notice-module__maintenance___o2AK1",important:"Notice-module__important___WpELD","not-supported":"Notice-module__not-supported___eAx6o",paragraph:"Notice-module__paragraph___BwEGe",list:"Notice-module__list___kOyCE"}},15877:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___rMAZk","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___78cuG",placeholder:"Placeholder-module__placeholder___FPYJB",inner:"Placeholder-module__inner___-U1IZ",title:"Placeholder-module__title___lsXDJ"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}},62303:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___WS97G","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___6na+8",toolbar:"Toolbar-module__toolbar___P9DhG",item:"Toolbar-module__item___hGwSK","start-align":"Toolbar-module__start-align___vUi7h","end-align":"Toolbar-module__end-align___6Ku2K","center-align":"Toolbar-module__center-align___ljlwu"}}}]);