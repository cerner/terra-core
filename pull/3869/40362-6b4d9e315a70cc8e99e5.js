"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[40362],{22863:function(e,t,l){var a=l(64836);t.Z=void 0;var n=a(l(67294)),r=a(l(45697)),d=a(l(47166)),u=a(l(17422)),o=d.default.bind(u.default),i={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},m=function(e){var t=e.src,l=e.name,a=e.url,r=e.version,d=n.default.createElement("a",{className:o("badge"),href:a||"https://www.npmjs.org/package/".concat(l,"/v/").concat(r)},n.default.createElement("span",{className:o("badge-name")},a?"package":"npm"),n.default.createElement("span",{className:o("badge-version")},"v".concat(r))),u=t?n.default.createElement("a",{className:o("badge"),href:t},n.default.createElement("span",{className:o("badge-name")},"github"),n.default.createElement("span",{className:o("badge-version")},"source")):void 0;return n.default.createElement("div",{className:o("badge-container")},d,u)};m.propTypes=i;var c=m;t.Z=c},49271:function(e,t,l){var a=l(64836),n=l(18698);t.Z=void 0;var r=a(l(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=f(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var u=r?Object.getOwnPropertyDescriptor(e,d):null;u&&(u.get||u.set)?Object.defineProperty(a,d,u):a[d]=e[d]}a.default=e,l&&l.set(e,a);return a}(l(67294)),u=a(l(45697)),o=a(l(47166)),i=l(21538),m=a(l(13810)),c=a(l(40931)),s=l(51051),p=a(l(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(f=function(e){return e?l:t})(e)}var y=o.default.bind(p.default),b={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,l=e.exampleSrc,a=e.exampleCssSrc,n=e.title,u=e.description,o=e.isExpanded,p=(0,d.useState)(o),f=(0,r.default)(p,2),b=f[0],_=f[1],h=(0,d.useState)(!1),g=(0,r.default)(h,2),O=g[0],T=g[1],w=d.default.useContext(i.ThemeContext),N=void 0!==a,j=function(){T(!O),b&&_(!b)},C=function(){_(!b),O&&T(!O)},E=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:y("template",w.className)},d.default.createElement("div",{className:y("header")},n&&d.default.createElement("h2",{className:y("title")},n)),d.default.createElement("div",{className:y("content")},u&&d.default.createElement("div",{className:y("description")},u),t),d.default.createElement("div",{className:y("footer")},l?d.default.createElement("div",{className:y("button-container")},N&&d.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":O}),onClick:j,onKeyDown:function(e){return E(e,j)},onBlur:x,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(m.default,{className:y("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(c.default,{className:y("chevron")})),d.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":b}),onClick:C,onKeyDown:function(e){return E(e,C)},onBlur:x,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(m.default,{className:y("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(c.default,{className:y("chevron")}))):null,d.default.createElement("div",null,O&&d.default.createElement("div",{className:y("css")},a),b&&d.default.createElement("div",{className:y("code")},l))))};_.propTypes=b,_.defaultProps={isExpanded:!1};var h=_;t.Z=h},78530:function(e,t,l){var a=l(64836),n=l(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return i.Row}}),t.ZP=t.Di=void 0;var r=s(l(67294)),d=a(l(45697)),u=a(l(47166)),o=l(21538),i=s(l(37515)),m=a(l(54931));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(c=function(e){return e?l:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=c(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var u=r?Object.getOwnPropertyDescriptor(e,d):null;u&&(u.get||u.set)?Object.defineProperty(a,d,u):a[d]=e[d]}return a.default=e,l&&l.set(e,a),a}var p=u.default.bind(m.default),f={children:d.default.node},y={isRequired:d.default.bool},b=function(e){var t=e.children;return r.default.createElement(i.Cell,{className:p("bold")},t)};t.O=b,b.propTypes=f;var x=function(e){var t=e.children;return r.default.createElement(i.Cell,{className:p("code-block-override")},t)};t.Di=x,x.propTypes=f;var v=function(e){var t=e.isRequired;return r.default.createElement(i.Cell,{className:p([t?["required"]:[]])},t?"required":"optional")};t.dS=v,v.propTypes=y;var _=function(e){var t=e.children;return r.default.createElement(i.Cell,{className:p("code-block-override")},t)};t.mW=_,_.propTypes=f;var h=function(e){var t=e.children;return r.default.createElement(i.Cell,null,t)};t.Ex=h,h.propTypes=f;var g=function(e){var t=e.children,l=(0,r.useContext)(o.ThemeContext);return r.default.createElement(i.default,{paddingStyle:"compact",className:p("table",l.className)},r.default.createElement(i.Header,{className:p("header")},r.default.createElement(i.HeaderCell,null,"Prop"),r.default.createElement(i.HeaderCell,null,"Type"),r.default.createElement(i.HeaderCell,null,"Required"),r.default.createElement(i.HeaderCell,null,"Default"),r.default.createElement(i.HeaderCell,null,"Description")),r.default.createElement(i.Body,null,t))};g.propTypes=f;var O=g;t.ZP=O},40362:function(e,t,l){l.r(t),l.d(t,{default:function(){return j}});var a=l(67294),n=l(81254),r=l(43474),d=l(80178),u=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var m={};function c(e){var t=e.components,l=i(e,u);return(0,n.mdx)("wrapper",o({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport OutlineViewTable from 'terra-outline-view-table';\n\nconst TableExample = () => (\n  <OutlineViewTable\n    summaryId=\"default-table\"\n    summary=\"This is a default table structure.\"\n    numberOfColumns={3}\n    headerData={{\n      cells: [\n        { id: 'header-name', key: 'name', children: 'Name' },\n        { id: 'header-address', key: 'address', children: 'Address' },\n        { id: 'header-phone_number', key: 'phone_number', children: 'Phone Number' },\n      ],\n    }}\n    bodyData={[\n      {\n        rows: [\n          {\n            key: 'row-0',\n            cells: [\n              { key: 'cell-0', children: 'John Smith' },\n              { key: 'cell-1', children: '123 Adams Drive' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n          {\n            key: 'row-1',\n            cells: [\n              { key: 'cell-0', children: 'Jane Smith' },\n              { key: 'cell-1', children: '321 Drive Street' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n          {\n            key: 'row-2',\n            cells: [\n              { key: 'cell-0', children: 'Dave Smith' },\n              { key: 'cell-1', children: '213 Raymond Road' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n        ],\n      },\n    ]}\n  />\n);\n\nexport default TableExample;\n\n")))}c.isMDXComponent=!0;var s=l(49271),p=function(e){var t=e.title,l=e.description,n=e.isExpanded;return a.createElement(s.Z,{title:t||"Default Table",description:l,example:a.createElement(d.Z,null),exampleSrc:a.createElement(c,null),isExpanded:n})},f=l(78530),y=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},b.apply(this,arguments)}function x(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var v={},_="wrapper";function h(e){var t=e.components,l=x(e,y);return(0,n.mdx)(_,b({},v,l,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(f.ZP,{mdxType:"PropsTable"},(0,n.mdx)(f.X2,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(f.O,{mdxType:"PropNameCell"},"bodyData"),(0,n.mdx)(f.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,n.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"An array of sections containing rows. ",(0,n.mdx)("strong",{parentName:"p"},"TODO: Not final shape as row headers and parent/children\nhierarchies are still needing to be addressed.")),(0,n.mdx)("p",null,(0,n.mdx)("em",{parentName:"p"},"NOTE: make sure ",(0,n.mdx)("inlineCode",{parentName:"em"},"bodyData")," rows have ",(0,n.mdx)("inlineCode",{parentName:"em"},"toggleAction")," with a ",(0,n.mdx)("inlineCode",{parentName:"em"},"toggleLabel"),", otherwise tests fail aria.")))),(0,n.mdx)(f.X2,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(f.O,{mdxType:"PropNameCell"},"columnWidths"),(0,n.mdx)(f.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,n.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The width value structures associated to each column."))),(0,n.mdx)(f.X2,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(f.O,{mdxType:"PropNameCell"},"headerData"),(0,n.mdx)(f.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,n.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The data to build header cells and columns."))),(0,n.mdx)(f.X2,{key:"ROW4",mdxType:"Row"},(0,n.mdx)(f.O,{mdxType:"PropNameCell"},"fill"),(0,n.mdx)(f.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether or not the table should expanded to fill its parent element."))),(0,n.mdx)(f.X2,{key:"ROW5",mdxType:"Row"},(0,n.mdx)(f.O,{mdxType:"PropNameCell"},"footerNode"),(0,n.mdx)(f.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Element to append to the bottom of the table. i.e. toolbars etc."))),(0,n.mdx)(f.X2,{key:"ROW6",mdxType:"Row"},(0,n.mdx)(f.O,{mdxType:"PropNameCell"},"numberOfColumns"),(0,n.mdx)(f.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,n.mdx)(f.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The numberOfColumns to be used as a descriptor for assistive technology."))),(0,n.mdx)(f.X2,{key:"ROW7",mdxType:"Row"},(0,n.mdx)(f.O,{mdxType:"PropNameCell"},"numberOfRows"),(0,n.mdx)(f.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,n.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"This value is used for accessibility when paged/virtualized rows are used.\nBy default this value is derived from the number of rows passed within the section."))),(0,n.mdx)(f.X2,{key:"ROW8",mdxType:"Row"},(0,n.mdx)(f.O,{mdxType:"PropNameCell"},"scrollRefCallback"),(0,n.mdx)(f.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Function callback returning the html node of the table's inner body element."))),(0,n.mdx)(f.X2,{key:"ROW9",mdxType:"Row"},(0,n.mdx)(f.O,{mdxType:"PropNameCell"},"showSimpleFooter"),(0,n.mdx)(f.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether or not a display only footer should be affixed to the table."))),(0,n.mdx)(f.X2,{key:"ROW10",mdxType:"Row"},(0,n.mdx)(f.O,{mdxType:"PropNameCell"},"summary"),(0,n.mdx)(f.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(f.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The summary text to describe the table's content and interactions."))),(0,n.mdx)(f.X2,{key:"ROW11",mdxType:"Row"},(0,n.mdx)(f.O,{mdxType:"PropNameCell"},"summaryId"),(0,n.mdx)(f.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(f.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The element id to associate to the descriptive text.")))))}h.isMDXComponent=!0;var g=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},O.apply(this,arguments)}function T(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var w={},N="wrapper";function j(e){var t=e.components,l=T(e,g);return(0,n.mdx)(N,O({},w,l,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-outline-view-table"},"Terra Outline View Table"),(0,n.mdx)("p",null,"Terra Outline View Table is a structural component used to ... ",(0,n.mdx)("em",{parentName:"p"},"(add content)")," "),(0,n.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Install with ",(0,n.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"npm install terra-outline-view-table"))))),(0,n.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,n.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,n.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"react"),(0,n.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,n.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,n.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,n.mdx)("h2",{id:"usage"},"Usage"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import OutlineViewTable from 'terra-outline-view-table';\n")),(0,n.mdx)("h2",{id:"component-features"},"Component Features"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,n.mdx)("h1",{id:"examples"},"Examples"),(0,n.mdx)(p,{title:"Sample",description:"Sample passthrough props to table example. Replace with an outline-view-table example when ready.",mdxType:"DefaultTable"}),(0,n.mdx)("h2",{id:"outline-view-table-props"},"Outline View Table Props"),(0,n.mdx)(h,{mdxType:"PropsTable"}))}j.isMDXComponent=!0},43474:function(e,t,l){l.d(t,{C:function(){return r}});var a=l(67294),n=l(22863),r=function(e){var t=e.url;return a.createElement(n.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-outline-view-table",name:"terra-outline-view-table",version:"0.4.0",url:t})}},32634:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(l(67294)),n=m(l(45697)),r=m(l(94184)),d=m(l(47166)),u=m(l(50026)),o=m(l(16749)),i=["children","disableStripes","paddingStyle"];function m(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=d.default.bind(o.default),f={children:n.default.node.isRequired,disableStripes:n.default.bool,paddingStyle:n.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,l=e.disableStripes,n=e.paddingStyle,d=s(e,i),o=a.default.useContext(u.default),m=(0,r.default)(p("table",{striped:!l},{"padding-standard":"standard"===n},{"padding-compact":"compact"===n},o.className),d.className);return a.default.createElement("table",c({},d,{className:m}),t)};y.propTypes=f,y.defaultProps={disableStripes:!1,paddingStyle:"none"};var b=y;t.default=b},80196:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(67294)),n=d(l(45697)),r=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o={children:n.default.node},i=function(e){var t=e.children,l=u(e,r);return a.default.createElement("tbody",l,t)};i.propTypes=o,i.defaultProps={children:[]};var m=i;t.default=m},8685:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(67294)),n=d(l(45697)),r=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o={children:n.default.node},i=function(e){var t=e.children,l=u(e,r);return a.default.createElement("td",l,t)};i.propTypes=o,i.defaultProps={children:[]};var m=i;t.default=m},19852:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(l(67294)),n=u(l(45697)),r=u(l(29805)),d=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var i={children:n.default.node},m=function(e){var t=e.children,l=o(e,d);return a.default.createElement("thead",l,a.default.createElement("tr",null,r.default.addScope(t,"col")))};m.propTypes=i,m.defaultProps={children:[]};var c=m;t.default=c},80876:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(67294)),n=d(l(45697)),r=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o={children:n.default.node},i=function(e){var t=e.children,l=u(e,r);return a.default.createElement("th",l,t)};i.propTypes=o,i.defaultProps={children:[]};var m=i;t.default=m},70829:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(l(67294)),n=i(l(45697)),r=i(l(47166)),d=i(l(16749)),u=i(l(29805)),o=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=r.default.bind(d.default),p={children:n.default.node},f=function(e){var t=e.children,l=c(e,o),n=s(["row"]);return a.default.createElement("tr",m({},l,{className:l.className?"".concat(n," ").concat(l.className):n}),u.default.addScope(t,"row"))};f.propTypes=p,f.defaultProps={children:[]};var y=f;t.default=y},29805:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=l(67294))&&a.__esModule?a:{default:a};var r={addScope:function(e,t){var l=[];return n.default.Children.forEach(e,(function(e){l.push(n.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),l}};t.default=r},37515:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return r.default}}),t.default=void 0;var a=i(l(32634)),n=i(l(80196)),r=i(l(70829)),d=i(l(8685)),u=i(l(19852)),o=i(l(80876));function i(e){return e&&e.__esModule?e:{default:e}}var m=a.default;t.default=m},13810:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(67294)),n=r(l(21969));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},d.apply(this,arguments)}var u=function(e){var t=d({},e);return a.default.createElement(n.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var o=u;t.default=o},58508:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(l(67294)),n=p(l(45697)),r=p(l(94184)),d=p(l(47166)),u=p(l(12810)),o=p(l(29765)),i=p(l(98582)),m=p(l(79898)),c=p(l(46542)),s=["bodyData","columnWidths","fill","footerNode","headerData","numberOfColumns","numberOfRows","scrollRefCallback","showSimpleFooter","summary","summaryId"];function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var y=d.default.bind(c.default),b={bodyData:n.default.arrayOf(o.default),columnWidths:n.default.arrayOf(m.default),headerData:i.default,fill:n.default.bool,footerNode:n.default.node,numberOfColumns:n.default.number.isRequired,numberOfRows:n.default.number,scrollRefCallback:n.default.func,showSimpleFooter:n.default.bool,summary:n.default.string.isRequired,summaryId:n.default.string.isRequired},x=function(e){var t=e.bodyData,l=e.columnWidths,n=e.fill,d=e.footerNode,o=e.headerData,i=e.numberOfColumns,m=e.numberOfRows,c=e.scrollRefCallback,p=e.showSimpleFooter,b=e.summary,x=e.summaryId,v=f(e,s),_=(0,r.default)(y("outline"),v.className);return a.default.createElement(u.default,{bodyData:t,cellPaddingStyle:"standard",checkStyle:"toggle",className:_,columnWidths:l,dividerStyle:"both",fill:n,footerNode:d,headerData:o,numberOfColumns:i,numberOfRows:m,rowStyle:"toggle",scrollRefCallback:c,showSimpleFooter:p,summary:b,summaryId:x})};x.propTypes=b,x.defaultProps={};var v=x;t.default=v},83610:function(e,t,l){var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=l(58508))&&a.__esModule?a:{default:a}).default;t.default=n},69111:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=l(45697))&&a.__esModule?a:{default:a};var r=n.default.shape({key:n.default.string.isRequired,children:n.default.node,refCallback:n.default.func,removeInner:n.default.bool,attrs:n.default.object});t.default=r},34499:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=l(45697))&&a.__esModule?a:{default:a};var r=n.default.shape({discloseCellIndex:n.default.number.isRequired,discloseLabel:n.default.string,isDisclosed:n.default.bool,metaData:n.default.object,onDisclose:n.default.func});t.default=r},32976:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=l(45697))&&a.__esModule?a:{default:a};var r=n.default.shape({id:n.default.string.isRequired,key:n.default.string.isRequired,children:n.default.node,isSortDesc:n.default.bool,isSortActive:n.default.bool,metaData:n.default.object,onCellAction:n.default.func,onSortAction:n.default.func,refCallback:n.default.func,removeInner:n.default.bool,attrs:n.default.object});t.default=r},98582:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(45697)),n=d(l(32976)),r=d(l(878));function d(e){return e&&e.__esModule?e:{default:e}}var u=a.default.shape({cells:a.default.arrayOf(n.default),refCallback:a.default.func,selectAllColumn:r.default});t.default=u},61336:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(l(45697)),n=u(l(69111)),r=u(l(34499)),d=u(l(32491));function u(e){return e&&e.__esModule?e:{default:e}}var o=a.default.shape({attrs:a.default.object,cells:a.default.arrayOf(n.default).isRequired,checkAlignment:a.default.string,discloseAction:r.default,index:a.default.number,isDisabled:a.default.bool,isStriped:a.default.bool,key:a.default.string.isRequired,refCallback:a.default.func,toggleAction:d.default});t.default=o},33502:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=l(45697))&&a.__esModule?a:{default:a};var r=n.default.shape({key:n.default.string.isRequired,id:n.default.string.isRequired,isCollapsed:n.default.bool,metaData:n.default.object,onToggle:n.default.func,refCallback:n.default.func,title:n.default.string.isRequired,attrs:n.default.object});t.default=r},29765:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(45697)),n=d(l(61336)),r=d(l(33502));function d(e){return e&&e.__esModule?e:{default:e}}var u=a.default.shape({rows:a.default.arrayOf(n.default),sectionHeader:r.default});t.default=u},878:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=l(45697))&&a.__esModule?a:{default:a};var r=n.default.shape({checkStatus:n.default.oneOf(["empty","checked","indeterminate"]),checkAlignment:n.default.string,checkLabel:n.default.string.isRequired,onCheckAction:n.default.func,isDisabled:n.default.bool});t.default=r},32491:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=l(45697))&&a.__esModule?a:{default:a};var r=n.default.shape({toggleLabel:n.default.string.isRequired,isToggled:n.default.bool,metaData:n.default.object,onToggle:n.default.func});t.default=r},79898:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=l(45697))&&a.__esModule?a:{default:a};var r=n.default.shape({static:n.default.shape({value:n.default.number.isRequired,unit:n.default.string.isRequired}),percentage:n.default.number,scalar:n.default.number});t.default=r},80178:function(e,t,l){t.Z=void 0;var a=r(l(67294)),n=r(l(83610));function r(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement(n.default,{summaryId:"default-table",summary:"This is a default table structure.",numberOfColumns:3,headerData:{cells:[{id:"header-name",key:"name",children:"Name"},{id:"header-address",key:"address",children:"Address"},{id:"header-phone_number",key:"phone_number",children:"Phone Number"}]},bodyData:[{rows:[{key:"row-0",cells:[{key:"cell-0",children:"John Smith"},{key:"cell-1",children:"123 Adams Drive"},{key:"cell-2",children:"111-222-3333"}]},{key:"row-1",cells:[{key:"cell-0",children:"Jane Smith"},{key:"cell-1",children:"321 Drive Street"},{key:"cell-2",children:"111-222-3333"}]},{key:"row-2",cells:[{key:"cell-0",children:"Dave Smith"},{key:"cell-1",children:"213 Raymond Road"},{key:"cell-2",children:"111-222-3333"}]}]}]})};t.Z=d},17422:function(e,t,l){l.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},16749:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}},46542:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"OutlineViewTable-module__clinical-lowlight-theme___bse8z","orion-fusion-theme":"OutlineViewTable-module__orion-fusion-theme___rsw4E",outline:"OutlineViewTable-module__outline___T0Ix6"}}}]);