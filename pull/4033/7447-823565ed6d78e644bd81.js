"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[7447],{22863:function(e,t,r){var l=r(64836);t.Z=void 0;var n=l(r(67294)),a=l(r(45697)),o=l(r(19845)),d=l(r(17422)),u=o.default.bind(d.default),i={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},c=function(e){var t=e.src,r=e.name,l=e.url,a=e.version,o=n.default.createElement("a",{className:u("badge"),href:l||"https://www.npmjs.org/package/".concat(r,"/v/").concat(a)},n.default.createElement("span",{className:u("badge-name")},l?"package":"npm"),n.default.createElement("span",{className:u("badge-version")},"v".concat(a))),d=t?n.default.createElement("a",{className:u("badge"),href:t},n.default.createElement("span",{className:u("badge-name")},"github"),n.default.createElement("span",{className:u("badge-version")},"source")):void 0;return n.default.createElement("div",{className:u("badge-container")},o,d)};c.propTypes=i;t.Z=c},49271:function(e,t,r){var l=r(64836),n=r(18698);t.Z=void 0;var a=l(r(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(l,o,d):l[o]=e[o]}return l.default=e,r&&r.set(e,l),l}(r(67294)),d=l(r(45697)),u=l(r(19845)),i=r(21538),c=l(r(13810)),p=l(r(40931)),f=r(51051),m=l(r(53560));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}var y=u.default.bind(m.default),b={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,r=e.exampleSrc,l=e.exampleCssSrc,n=e.title,d=e.description,u=e.isExpanded,m=(0,o.useState)(u),s=(0,a.default)(m,2),b=s[0],_=s[1],g=(0,o.useState)(!1),h=(0,a.default)(g,2),O=h[0],C=h[1],j=o.default.useContext(i.ThemeContext),w=void 0!==l,E=function(){C(!O),b&&_(!b)},P=function(){_(!b),O&&C(!O)},T=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:y("template",j.className)},o.default.createElement("div",{className:y("header")},n&&o.default.createElement("h2",{className:y("title")},n)),o.default.createElement("div",{className:y("content")},d&&o.default.createElement("div",{className:y("description")},d),t),o.default.createElement("div",{className:y("footer")},r?o.default.createElement("div",{className:y("button-container")},w&&o.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":O}),onClick:E,onKeyDown:function(e){return T(e,E)},onBlur:v,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:y("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(p.default,{className:y("chevron")})),o.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":b}),onClick:P,onKeyDown:function(e){return T(e,P)},onBlur:v,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:y("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(p.default,{className:y("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:y("css")},l),b&&o.default.createElement("div",{className:y("code")},r))))};_.propTypes=b,_.defaultProps={isExpanded:!1};t.Z=_},78530:function(e,t,r){var l=r(64836),n=r(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return i.Row}}),t.ZP=t.Di=void 0;var a=f(r(67294)),o=l(r(45697)),d=l(r(19845)),u=r(21538),i=f(r(37515)),c=l(r(54931));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(l,o,d):l[o]=e[o]}return l.default=e,r&&r.set(e,l),l}var m=d.default.bind(c.default),s={children:o.default.node},y={isRequired:o.default.bool};(t.O=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:m("bold")},t)}).propTypes=s,(t.Di=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:m("code-block-override")},t)}).propTypes=s,(t.dS=function(e){var t=e.isRequired;return a.default.createElement(i.Cell,{className:m([t?["required"]:[]])},t?"required":"optional")}).propTypes=y,(t.mW=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:m("code-block-override")},t)}).propTypes=s,(t.Ex=function(e){var t=e.children;return a.default.createElement(i.Cell,null,t)}).propTypes=s;var b=function(e){var t=e.children,r=(0,a.useContext)(u.ThemeContext);return a.default.createElement(i.default,{paddingStyle:"compact",className:m("table",r.className)},a.default.createElement(i.Header,{className:m("header")},a.default.createElement(i.HeaderCell,null,"Prop"),a.default.createElement(i.HeaderCell,null,"Type"),a.default.createElement(i.HeaderCell,null,"Required"),a.default.createElement(i.HeaderCell,null,"Default"),a.default.createElement(i.HeaderCell,null,"Description")),a.default.createElement(i.Body,null,t))};b.propTypes=s;t.ZP=b},7447:function(e,t,r){r.r(t),r.d(t,{default:function(){return $}});var l=r(67294),n=r(81254),a=r(4928),o=r(56462),d=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},u.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c={};function p(e){var t=e.components,r=i(e,d);return(0,n.mdx)("wrapper",u({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport CellGrid, {\n  Cell,\n} from \'terra-cell-grid\';\n\nconst CellGridExample = () => (\n  <CellGrid>\n    <Cell key="cell-0" width={{ static: { value: 80, unit: \'px\' } }}>80px</Cell>\n    <Cell key="cell-1" width={{ percentage: 10 }}>10%</Cell>\n    <Cell key="cell-2">Scalar 1</Cell>\n    <Cell key="cell-3" width={{ scalar: 3 }}>Scalar 3</Cell>\n  </CellGrid>\n);\n\nexport default CellGridExample;\n\n')))}p.isMDXComponent=!0;var f=r(49271),m=function(e){var t=e.title,r=e.description,n=e.isExpanded;return l.createElement(f.Z,{title:t||"Cell Grid Example",description:r,example:l.createElement(o.Z,null),exampleSrc:l.createElement(p,null),isExpanded:n})},s=r(44919),y=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},b.apply(this,arguments)}function v(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var x={};function _(e){var t=e.components,r=v(e,y);return(0,n.mdx)("wrapper",b({},x,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport CellGrid, {\n  Cell,\n} from \'terra-cell-grid\';\n\nconst CellGridVertical = () => (\n  <CellGrid\n    dividerStyle="vertical"\n  >\n    <Cell key="cell-0" width={{ static: { value: 80, unit: \'px\' } }}>80px</Cell>\n    <Cell key="cell-1" width={{ percentage: 10 }}>10%</Cell>\n    <Cell key="cell-2">Scalar 1</Cell>\n    <Cell key="cell-3" width={{ scalar: 3 }}>Scalar 3</Cell>\n  </CellGrid>\n);\n\nexport default CellGridVertical;\n\n')))}_.isMDXComponent=!0;var g=function(e){var t=e.title,r=e.description,n=e.isExpanded;return l.createElement(f.Z,{title:t||"Cell Grid Vertical",description:r,example:l.createElement(s.Z,null),exampleSrc:l.createElement(_,null),isExpanded:n})},h=r(82427),O=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},C.apply(this,arguments)}function j(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var w={};function E(e){var t=e.components,r=j(e,O);return(0,n.mdx)("wrapper",C({},w,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport CellGrid, {\n  Cell,\n} from \'terra-cell-grid\';\n\nconst CellGridHorizontal = () => (\n  <CellGrid\n    dividerStyle="horizontal"\n  >\n    <Cell key="cell-0" width={{ static: { value: 80, unit: \'px\' } }}>80px</Cell>\n    <Cell key="cell-1" width={{ percentage: 10 }}>10%</Cell>\n    <Cell key="cell-2">Scalar 1</Cell>\n    <Cell key="cell-3" width={{ scalar: 3 }}>Scalar 3</Cell>\n  </CellGrid>\n);\n\nexport default CellGridHorizontal;\n\n')))}E.isMDXComponent=!0;var P=function(e){var t=e.title,r=e.description,n=e.isExpanded;return l.createElement(f.Z,{title:t||"Cell Grid Horizontal",description:r,example:l.createElement(h.Z,null),exampleSrc:l.createElement(E,null),isExpanded:n})},T=r(32851),S=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},N.apply(this,arguments)}function k(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var M={};function D(e){var t=e.components,r=k(e,S);return(0,n.mdx)("wrapper",N({},M,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport CellGrid, {\n  Cell,\n} from \'terra-cell-grid\';\n\nconst CellGridBoth = () => (\n  <CellGrid\n    dividerStyle="both"\n  >\n    <Cell key="cell-0" width={{ static: { value: 80, unit: \'px\' } }}>80px</Cell>\n    <Cell key="cell-1" width={{ percentage: 10 }}>10%</Cell>\n    <Cell key="cell-2">Scalar 1</Cell>\n    <Cell key="cell-3" width={{ scalar: 3 }}>Scalar 3</Cell>\n  </CellGrid>\n);\n\nexport default CellGridBoth;\n\n')))}D.isMDXComponent=!0;var G=function(e){var t=e.title,r=e.description,n=e.isExpanded;return l.createElement(f.Z,{title:t||"Cell Grid Both",description:r,example:l.createElement(T.Z,null),exampleSrc:l.createElement(D,null),isExpanded:n})},R=r(78530),W=["components"];function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},q.apply(this,arguments)}function Z(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var X={},B="wrapper";function z(e){var t=e.components,r=Z(e,W);return(0,n.mdx)(B,q({},X,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(R.ZP,{mdxType:"PropsTable"},(0,n.mdx)(R.X2,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"children"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Content to be displayed for the cell."))),(0,n.mdx)(R.X2,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"refCallback"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Function callback to get the ref of the cell."))),(0,n.mdx)(R.X2,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"width"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"shape: {\n  static: {\n    shape: {\n      value: {\n        type: 'number',\n        required: true,\n      },\n      unit: {\n        type: 'string',\n        required: true,\n      },\n    },\n  },\n  percentage: {\n    type: 'number',\n  },\n  scalar: {\n    type: 'number',\n  },\n},\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Composed width for the cell. Can be provided as either a static, percentage, or scalar value.")))))}z.isMDXComponent=!0;var I=["components"];function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},H.apply(this,arguments)}function F(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var V={},L="wrapper";function K(e){var t=e.components,r=F(e,I);return(0,n.mdx)(L,H({},V,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(R.ZP,{mdxType:"PropsTable"},(0,n.mdx)(R.X2,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"children"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(R.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The child Cells to passed to the cell grid."))),(0,n.mdx)(R.X2,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"dividerStyle"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'vertical'\n  'horizontal'\n  'both'\n],\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Indicates the desired divider styles to apply to a cell grid and its children.\nOne of ",(0,n.mdx)("inlineCode",{parentName:"p"},"'vertical'"),", ",(0,n.mdx)("inlineCode",{parentName:"p"},"'horizontal'"),", ",(0,n.mdx)("inlineCode",{parentName:"p"},"'both'"),","))),(0,n.mdx)(R.X2,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"refCallback"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Function callback for the ref of the cell grid.")))))}K.isMDXComponent=!0;var A=["components"];function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},Y.apply(this,arguments)}function J(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var U={},Q="wrapper";function $(e){var t=e.components,r=J(e,A);return(0,n.mdx)(Q,Y({},U,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(a.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-cell-grid"},"Terra Cell Grid"),(0,n.mdx)("p",null,"The terra-cell-grid is a structural row based layout for aligning columns with 100% of its parents width."),(0,n.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Install with ",(0,n.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"npm install terra-cell-grid"))))),(0,n.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,n.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,n.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"react"),(0,n.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,n.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,n.mdx)("h2",{id:"usage"},"Usage"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import CellGrid, { Cell} from 'terra-cell-grid';\n")),(0,n.mdx)("h2",{id:"component-features"},"Component Features"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,n.mdx)("h2",{id:"examples"},"Examples"),(0,n.mdx)(m,{title:"Default",mdxType:"CellGridExample"}),(0,n.mdx)(g,{title:"Divided Vertically",mdxType:"CellGridVertical"}),(0,n.mdx)(P,{title:"Divided Horizontally",mdxType:"CellGridHorizontal"}),(0,n.mdx)(G,{title:"Divided Both Directions",mdxType:"CellGridBoth"}),(0,n.mdx)("h2",{id:"cell-props"},"Cell Props"),(0,n.mdx)(z,{mdxType:"CellPropsTable"}),(0,n.mdx)("h2",{id:"cellgrid-props"},"CellGrid Props"),(0,n.mdx)(K,{mdxType:"CellGridPropsTable"}))}$.isMDXComponent=!0},4928:function(e,t,r){r.d(t,{C:function(){return a}});var l=r(67294),n=r(22863),a=function(e){var t=e.url;return l.createElement(n.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-cell-grid",name:"terra-cell-grid",version:"1.15.0",url:t})}},62615:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(r(67294)),n=i(r(45697)),a=i(r(19845)),o=i(r(35060)),d=r(31491),u=["children","refCallback","width"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var f=a.default.bind(o.default),m={children:n.default.node,refCallback:n.default.func,width:n.default.shape({static:n.default.shape({value:n.default.number.isRequired,unit:n.default.string.isRequired}),percentage:n.default.number,scalar:n.default.number})},s=function(e){var t=e.children,r=e.refCallback,n=e.width,a=p(e,u),o=f(["cell"]);return l.default.createElement("div",c({},a,{style:(0,d.styleFromWidth)(n),className:a.className?"".concat(o," ").concat(a.className):o,ref:r}),t)};s.propTypes=m,s.defaultProps={children:[]};t.default=s},41261:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(r(67294)),n=c(r(45697)),a=c(r(93967)),o=c(r(19845)),d=c(r(50026)),u=c(r(27680)),i=["children","dividerStyle","refCallback"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=o.default.bind(u.default),s={children:n.default.node.isRequired,dividerStyle:n.default.oneOf(["vertical","horizontal","both"]),refCallback:n.default.func},y=function(e){var t=e.children,r=e.dividerStyle,n=e.refCallback,o=f(e,i),u=l.default.useContext(d.default),c=r?"divider-".concat(r):void 0,s=(0,a.default)(m("cell-grid",c,u.className),o.className);return l.default.createElement("div",p({},o,{className:s,ref:n}),t)};y.propTypes=s;t.default=y},31491:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.styleFromWidth=t.default=void 0;var r=function(e){return{msFlex:"0 0 0px",flex:"0 0 0px",maxWidth:e,minWidth:e}},l={styleFromWidth:t.styleFromWidth=function(e){if(e)return e.static?r("".concat(e.static.value).concat(e.static.unit)):e.percentage?r("".concat(e.percentage,"%")):e.scalar?function(e){return{msFlex:"".concat(e," ").concat(e," 0px"),flex:"".concat(e," ").concat(e," 0px")}}(e.scalar):void 0}};t.default=l},94408:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return n.default}}),t.default=void 0;var l=a(r(41261)),n=a(r(62615));function a(e){return e&&e.__esModule?e:{default:e}}t.default=l.default},32851:function(e,t,r){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}t.Z=void 0;var n,a=(n=r(67294))&&n.__esModule?n:{default:n},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(r(94408));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}t.Z=function(){return a.default.createElement(o.default,{dividerStyle:"both"},a.default.createElement(o.Cell,{key:"cell-0",width:{static:{value:80,unit:"px"}}},"80px"),a.default.createElement(o.Cell,{key:"cell-1",width:{percentage:10}},"10%"),a.default.createElement(o.Cell,{key:"cell-2"},"Scalar 1"),a.default.createElement(o.Cell,{key:"cell-3",width:{scalar:3}},"Scalar 3"))}},56462:function(e,t,r){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}t.Z=void 0;var n,a=(n=r(67294))&&n.__esModule?n:{default:n},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(r(94408));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}t.Z=function(){return a.default.createElement(o.default,null,a.default.createElement(o.Cell,{key:"cell-0",width:{static:{value:80,unit:"px"}}},"80px"),a.default.createElement(o.Cell,{key:"cell-1",width:{percentage:10}},"10%"),a.default.createElement(o.Cell,{key:"cell-2"},"Scalar 1"),a.default.createElement(o.Cell,{key:"cell-3",width:{scalar:3}},"Scalar 3"))}},82427:function(e,t,r){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}t.Z=void 0;var n,a=(n=r(67294))&&n.__esModule?n:{default:n},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(r(94408));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}t.Z=function(){return a.default.createElement(o.default,{dividerStyle:"horizontal"},a.default.createElement(o.Cell,{key:"cell-0",width:{static:{value:80,unit:"px"}}},"80px"),a.default.createElement(o.Cell,{key:"cell-1",width:{percentage:10}},"10%"),a.default.createElement(o.Cell,{key:"cell-2"},"Scalar 1"),a.default.createElement(o.Cell,{key:"cell-3",width:{scalar:3}},"Scalar 3"))}},44919:function(e,t,r){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}t.Z=void 0;var n,a=(n=r(67294))&&n.__esModule?n:{default:n},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(r(94408));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}t.Z=function(){return a.default.createElement(o.default,{dividerStyle:"vertical"},a.default.createElement(o.Cell,{key:"cell-0",width:{static:{value:80,unit:"px"}}},"80px"),a.default.createElement(o.Cell,{key:"cell-1",width:{percentage:10}},"10%"),a.default.createElement(o.Cell,{key:"cell-2"},"Scalar 1"),a.default.createElement(o.Cell,{key:"cell-3",width:{scalar:3}},"Scalar 3"))}},32634:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(r(67294)),n=c(r(45697)),a=c(r(93967)),o=c(r(19845)),d=c(r(50026)),u=c(r(16749)),i=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=o.default.bind(u.default),s={children:n.default.node.isRequired,disableStripes:n.default.bool,paddingStyle:n.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,r=e.disableStripes,n=e.paddingStyle,o=f(e,i),u=l.default.useContext(d.default),c=(0,a.default)(m("table",{striped:!r},{"padding-standard":"standard"===n},{"padding-compact":"compact"===n},u.className),o.className);return l.default.createElement("table",p({},o,{className:c}),t)};y.propTypes=s,y.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=y},80196:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(r(67294)),n=o(r(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u={children:n.default.node},i=function(e){var t=e.children,r=d(e,a);return l.default.createElement("tbody",r,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},8685:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(r(67294)),n=o(r(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u={children:n.default.node},i=function(e){var t=e.children,r=d(e,a);return l.default.createElement("td",r,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},19852:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(r(67294)),n=d(r(45697)),a=d(r(29805)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i={children:n.default.node},c=function(e){var t=e.children,r=u(e,o);return l.default.createElement("thead",r,l.default.createElement("tr",null,a.default.addScope(t,"col")))};c.propTypes=i,c.defaultProps={children:[]};t.default=c},38880:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(r(67294)),n=o(r(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u={children:n.default.node},i=function(e){var t=e.children,r=d(e,a);return l.default.createElement("th",r,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},70829:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(r(67294)),n=i(r(45697)),a=i(r(19845)),o=i(r(16749)),d=i(r(29805)),u=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var f=a.default.bind(o.default),m={children:n.default.node},s=function(e){var t=e.children,r=p(e,u),n=f(["row"]);return l.default.createElement("tr",c({},r,{className:r.className?"".concat(n," ").concat(r.className):n}),d.default.addScope(t,"row"))};s.propTypes=m,s.defaultProps={children:[]};t.default=s},29805:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,n=(l=r(67294))&&l.__esModule?l:{default:l};var a={addScope:function(e,t){var r=[];return n.default.Children.forEach(e,(function(e){r.push(n.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),r}};t.default=a},37515:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var l=i(r(32634)),n=i(r(80196)),a=i(r(70829)),o=i(r(8685)),d=i(r(19852)),u=i(r(38880));function i(e){return e&&e.__esModule?e:{default:e}}t.default=l.default},13810:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(67294)),n=a(r(21969));function a(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},o.apply(this,arguments)}var d=function(e){var t=o({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=d},17422:function(e,t,r){r.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},35060:function(e,t,r){r.r(t),t.default={cell:"Cell-module__cell___6YOBo"}},27680:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"CellGrid-module__clinical-lowlight-theme___zJBHA","orion-fusion-theme":"CellGrid-module__orion-fusion-theme___hdXXy","cell-grid":"CellGrid-module__cell-grid___kbkPN","divider-horizontal":"CellGrid-module__divider-horizontal___COAhK","divider-both":"CellGrid-module__divider-both___eRXBF","divider-vertical":"CellGrid-module__divider-vertical___ZsST9"}},16749:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);