(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[41100],{22863:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),u=r(n(17422)),i=o.default.bind(u.default),c={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},d=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),u=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},o,u)};d.propTypes=c;var s=d;t.Z=s},49271:function(e,t,n){"use strict";var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),u=r(n(45697)),i=r(n(47166)),c=n(21538),d=r(n(13810)),s=r(n(40931)),f=n(51051),p=r(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var b=i.default.bind(p.default),y={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,u=e.description,i=e.isExpanded,p=(0,o.useState)(i),m=(0,l.default)(p,2),y=m[0],h=m[1],_=(0,o.useState)(!1),O=(0,l.default)(_,2),T=O[0],x=O[1],w=o.default.useContext(c.ThemeContext),E=void 0!==r,j=function(){x(!T),y&&h(!y)},P=function(){h(!y),T&&x(!T)},S=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:b("template",w.className)},o.default.createElement("div",{className:b("header")},a&&o.default.createElement("h2",{className:b("title")},a)),o.default.createElement("div",{className:b("content")},u&&o.default.createElement("div",{className:b("description")},u),t),o.default.createElement("div",{className:b("footer")},n?o.default.createElement("div",{className:b("button-container")},E&&o.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":T}),onClick:j,onKeyDown:function(e){return S(e,j)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:b("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:b("chevron")})),o.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":y}),onClick:P,onKeyDown:function(e){return S(e,P)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:b("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:b("chevron")}))):null,o.default.createElement("div",null,T&&o.default.createElement("div",{className:b("css")},r),y&&o.default.createElement("div",{className:b("code")},n))))};h.propTypes=y,h.defaultProps={isExpanded:!1};var _=h;t.Z=_},78530:function(e,t,n){"use strict";var r=n(64836),a=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return c.Row}}),t.ZP=t.Di=void 0;var l=f(n(67294)),o=r(n(45697)),u=r(n(47166)),i=n(21538),c=f(n(37515)),d=r(n(54931));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var p=u.default.bind(d.default),m={children:o.default.node},b={isRequired:o.default.bool},y=function(e){var t=e.children;return l.default.createElement(c.Cell,{className:p("bold")},t)};t.O=y,y.propTypes=m;var g=function(e){var t=e.children;return l.default.createElement(c.Cell,{className:p("code-block-override")},t)};t.Di=g,g.propTypes=m;var v=function(e){var t=e.isRequired;return l.default.createElement(c.Cell,{className:p([t?["required"]:[]])},t?"required":"optional")};t.dS=v,v.propTypes=b;var h=function(e){var t=e.children;return l.default.createElement(c.Cell,{className:p("code-block-override")},t)};t.mW=h,h.propTypes=m;var _=function(e){var t=e.children;return l.default.createElement(c.Cell,null,t)};t.Ex=_,_.propTypes=m;var O=function(e){var t=e.children,n=(0,l.useContext)(i.ThemeContext);return l.default.createElement(c.default,{paddingStyle:"compact",className:p("table",n.className)},l.default.createElement(c.Header,{className:p("header")},l.default.createElement(c.HeaderCell,null,"Prop"),l.default.createElement(c.HeaderCell,null,"Type"),l.default.createElement(c.HeaderCell,null,"Required"),l.default.createElement(c.HeaderCell,null,"Default"),l.default.createElement(c.HeaderCell,null,"Description")),l.default.createElement(c.Body,null,t))};O.propTypes=m;var T=O;t.ZP=T},41100:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(67294),a=n(81254),l=n(2050),o=n(740),u=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function s(e){var t=e.components,n=c(e,u);return(0,a.mdx)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport TagList from \'../../../../../../terra-tag-list/src/TagList\';\nimport Tag from \'../../../../../../terra-tag-list/src/subcomponents/Tag\';\n\nconst TagListExample = () => {\n  return (\n    <div>\n        <h1>Tag List Example</h1>\n        <TagList ariaLabel="It is incorrect to remove the parent FilterPills">\n            <Tag text="Test Tag 1" onClick={() => window.alert(\'Tag1 has been clicked!\')} id={"Tag1"}/>\n            <Tag text="Test Tag 2" onClick={() => window.alert(\'Tag2 has been clicked!\')} id={"Tag2"}/>\n            <Tag text="Test Tag 3" onClick={() => window.alert(\'Tag3 has been clicked!\')} id={"Tag3"}/>\n            <Tag text="Test Tag 4" onClick={() => window.alert(\'Tag4 has been clicked!\')} id={"Tag4"}/>\n        </TagList>\n        <TagList ariaLabel="It is incorrect to remove the parent FilterPills">\n            <Tag text="Test Tag 1" onClick={() => window.alert(\'Tag1 has been clicked!\')} id={"Tag1"}/>\n            <Tag text="Test Tag 2" onClick={() => window.alert(\'Tag2 has been clicked!\')} id={"Tag2"}/>\n            <Tag text="Test Tag 3" onClick={() => window.alert(\'Tag3 has been clicked!\')} id={"Tag3"}/>\n            <Tag text="Test Tag 4" onClick={() => window.alert(\'Tag4 has been clicked!\')} id={"Tag4"}/>\n        </TagList>\n    </div>\n  );\n};\n\nexport default TagListExample;\n\n')))}s.isMDXComponent=!0;var f=n(49271),p=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(f.Z,{title:t||"Tag List Example",description:n,example:r.createElement(o.Z,null),exampleSrc:r.createElement(s,null),isExpanded:a})},m=n(78530),b=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={},h="wrapper";function _(e){var t=e.components,n=g(e,b);return(0,a.mdx)(h,y({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(m.ZP,{mdxType:"PropsTable"},(0,a.mdx)(m.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(m.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(m.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The content to be shown in the tags container.")))))}_.isMDXComponent=!0;var O=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w={},E="wrapper";function j(e){var t=e.components,n=x(e,O);return(0,a.mdx)(E,T({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-tag-list"},"Terra Tag List"),(0,a.mdx)("p",null," The Terra Tag List component is a component that groups tags and allows consumers to manage the selection state of each tag in the group."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-tag-list"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import TagList from 'terra-tag-list';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(p,{mdxType:"TagListExample"}),(0,a.mdx)("h2",{id:"tag-list-props"},"Tag List Props"),(0,a.mdx)(_,{mdxType:"TagListPropsTable"}))}j.isMDXComponent=!0},2050:function(e,t,n){"use strict";n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-tag",name:"terra-tag",version:"2.57.0",url:t})}},740:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),l=u(n(33142)),o=u(n(92590));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}var c=function(){return a.default.createElement("div",null,a.default.createElement("h1",null,"Tag List Example"),a.default.createElement(l.default,{ariaLabel:"It is incorrect to remove the parent FilterPills"},a.default.createElement(o.default,{text:"Test Tag 1",onClick:function(){return window.alert("Tag1 has been clicked!")},id:"Tag1"}),a.default.createElement(o.default,{text:"Test Tag 2",onClick:function(){return window.alert("Tag2 has been clicked!")},id:"Tag2"}),a.default.createElement(o.default,{text:"Test Tag 3",onClick:function(){return window.alert("Tag3 has been clicked!")},id:"Tag3"}),a.default.createElement(o.default,{text:"Test Tag 4",onClick:function(){return window.alert("Tag4 has been clicked!")},id:"Tag4"})),a.default.createElement(l.default,{ariaLabel:"It is incorrect to remove the parent FilterPills"},a.default.createElement(o.default,{text:"Test Tag 1",onClick:function(){return window.alert("Tag1 has been clicked!")},id:"Tag1"}),a.default.createElement(o.default,{text:"Test Tag 2",onClick:function(){return window.alert("Tag2 has been clicked!")},id:"Tag2"}),a.default.createElement(o.default,{text:"Test Tag 3",onClick:function(){return window.alert("Tag3 has been clicked!")},id:"Tag3"}),a.default.createElement(o.default,{text:"Test Tag 4",onClick:function(){return window.alert("Tag4 has been clicked!")},id:"Tag4"})))};t.Z=c},32634:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),l=d(n(94184)),o=d(n(47166)),u=d(n(50026)),i=d(n(16749)),c=["children","disableStripes","paddingStyle"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(i.default),m={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},b=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=f(e,c),i=r.default.useContext(u.default),d=(0,l.default)(p("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},i.className),o.className);return r.default.createElement("table",s({},o,{className:d}),t)};b.propTypes=m,b.defaultProps={disableStripes:!1,paddingStyle:"none"};var y=b;t.default=y},80196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},c=function(e){var t=e.children,n=u(e,l);return r.default.createElement("tbody",n,t)};c.propTypes=i,c.defaultProps={children:[]};var d=c;t.default=d},8685:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},c=function(e){var t=e.children,n=u(e,l);return r.default.createElement("td",n,t)};c.propTypes=i,c.defaultProps={children:[]};var d=c;t.default=d},19852:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(29805)),o=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={children:a.default.node},d=function(e){var t=e.children,n=i(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};d.propTypes=c,d.defaultProps={children:[]};var s=d;t.default=s},80876:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},c=function(e){var t=e.children,n=u(e,l);return r.default.createElement("th",n,t)};c.propTypes=i,c.defaultProps={children:[]};var d=c;t.default=d},70829:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(47166)),o=c(n(16749)),u=c(n(29805)),i=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=l.default.bind(o.default),p={children:a.default.node},m=function(e){var t=e.children,n=s(e,i),a=f(["row"]);return r.default.createElement("tr",d({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),u.default.addScope(t,"row"))};m.propTypes=p,m.defaultProps={children:[]};var b=m;t.default=b},29805:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(67294))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},37515:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=c(n(32634)),a=c(n(80196)),l=c(n(70829)),o=c(n(8685)),u=c(n(19852)),i=c(n(80876));function c(e){return e&&e.__esModule?e:{default:e}}var d=r.default;t.default=d},13810:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=u;t.default=i},33142:function(e,t,n){"use strict";n.r(t);var r=n(67294),a=n(51051),l=n(94184),o=n.n(l),u=n(47166),i=n.n(u),c=n(45697),d=n.n(c),s=n(32018),f=n.n(s),p=n(78652),m=n(25387),b=n(30582),y=["children"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function v(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||_(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,u=[],i=!0,c=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=l.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return u}}(e,t)||_(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var x=i().bind(b.Z),w={children:d().node},E=function(e){var t=e.children,n=T(e,y),l=r.useContext(p.ZP),u=h((0,r.useState)("-1"),2),i=u[0],c=u[1],d=h((0,r.useState)(r.Children.count(t)),2),s=d[0],m=d[1],b=(0,r.useRef)(),_=(0,r.useRef)(),O=(0,r.useRef)(0),w=function(e){var t=b.current?_.current.querySelector("#".concat(b.current)):null;t&&t.setAttribute("tabIndex",e)},E=function(){var e=b.current?_.current.querySelector("#".concat(b.current)):null;e&&e.focus()},j=(0,r.useCallback)((function(){var e=v(_.current.querySelectorAll("[data-terra-tag]"));e.length>0&&O.current<e.length&&(!function(e,t){for(var n=0;n<e.length;n+=1)e[n].setAttribute("tabindex",t)}(e,"-1"),b.current=e[O.current].id,w("0"))}),[]),P=(0,r.useCallback)((function(e){Array.isArray(e)&&(m(r.Children.count(t)),j())}),[t,j]);(0,r.useLayoutEffect)((function(){var e=new(f())((function(e){P(e)}));return e.observe(_.current.parentNode),function(){e.disconnect(),e=null}}),[t,P]);var S={};S.onKeyDown=function(e){var n=v(_.current.querySelectorAll("button"));switch(e.keyCode){case a.KEY_RIGHT:e.preventDefault(),function(e){O.current+1<=e.length&&(w("-1"),O.current+1<e.length&&(O.current+=1,b.current=t[O.current].props.id),w("0"),E())}(n);break;case a.KEY_LEFT:e.preventDefault(),O.current>=1&&(w("-1"),O.current-=1,b.current=t[O.current].props.id,w("0"),E())}},S.onBlur=function(){return c("-1")};var k,C=o()(x(["tags-group",l.className]),n.className);return r.createElement("div",g({},n,S,{className:C,ref:_,role:"list",tabIndex:i}),t?(k=t,r.Children.map(k,(function(e){if(r.isValidElement(e))return r.cloneElement(e)})).splice(0,s)):[])};E.propTypes=w,t.default=(0,m.injectIntl)(E)},92590:function(e,t,n){"use strict";n.r(t);var r=n(67294),a=n(45697),l=n.n(a),o=n(94184),u=n.n(o),i=n(47166),c=n.n(i),d=n(78652),s=n(51051),f=n(30582);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var m=["icon","text","href","onClick","onBlur","onFocus","onKeyUp","onFocusChange"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(a=r.key,l=void 0,l=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===p(l)?l:String(l)),r)}var a,l}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var a=O(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}(this,n)}}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var T=c().bind(f.Z),x={href:l().string,icon:l().element,onClick:l().func,onBlur:l().func,onFocus:l().func,onKeyUp:l().func,text:l().string.isRequired},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(o,e);var t,n,a,l=h(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=l.call(this,e)).state={focused:e.focused,event:null},t.handleKeyUp=t.handleKeyUp.bind(_(t)),t.handleOnBlur=t.handleOnBlur.bind(_(t)),t}return t=o,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.setState({event:e}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){this.setState({event:e}),(e.nativeEvent.keyCode===s.KEY_TAB||e.nativeEvent.keyCode===s.KEY_RIGHT||e.nativeEvent.keyCode===s.KEY_LEFT)&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e),this.props.onFocusChange&&this.props.onFocusChange(this.state.focused,e)}},{key:"render",value:function(){var e,t=this.props,n=t.icon,a=t.text,l=t.href,o=t.onClick,i=(t.onBlur,t.onFocus),c=(t.onKeyUp,t.onFocusChange,y(t,m)),d=this.context,s=u()(T("tag",{"is-focused":!(null===(e=c.className)||void 0===e||!e.includes("blah_blah"))||this.state.focused},{"is-interactive":l||o},d.className),c.className),f=T("icon"),p=n?r.createElement("span",{className:f},n):null,g=l||o?l?"a":"button":"span";return r.createElement(g,b({},c,{className:s,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:o,onFocus:i,href:l,"data-terra-tag":!0}),p,a)}}])&&g(t.prototype,n),a&&g(t,a),Object.defineProperty(t,"prototype",{writable:!1}),o}(r.Component);w.propTypes=x,w.contextType=d.ZP,t.default=w},17422:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},16749:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}},30582:function(e,t){"use strict";t.Z={"clinical-lowlight-theme":"Tag-module__clinical-lowlight-theme___bBZRJ","orion-fusion-theme":"Tag-module__orion-fusion-theme___UqUZ4",tag:"Tag-module__tag___4ndmw","is-interactive":"Tag-module__is-interactive___MjYA6","is-focused":"Tag-module__is-focused___MDgCS",icon:"Tag-module__icon___1ZzrA"}},78652:function(e,t,n){"use strict";var r=n(64836);t.ZP=void 0;var a=r(n(67294)),l=r(n(19955)),o=a.default.createContext({});l.default.shape({className:l.default.string});var u=o;t.ZP=u},63366:function(e,t,n){"use strict";var r=n(75585);function a(){}function l(){}l.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,l,o){if(o!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:a};return n.PropTypes=n,n}},19955:function(e,t,n){e.exports=n(63366)()},75585:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);