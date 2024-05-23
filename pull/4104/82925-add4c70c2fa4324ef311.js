"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[82925],{55713:function(e,t,r){var n=r(24994);t.A=void 0;var l=n(r(96540)),a=n(r(5556)),o=n(r(67967)),i=n(r(25642)),d=o.default.bind(i.default),u={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},c=function(e){var t=e.src,r=e.name,n=e.url,a=e.version,o=l.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(r,"/v/").concat(a)},l.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(a))),i=t?l.default.createElement("a",{className:d("badge"),href:t},l.default.createElement("span",{className:d("badge-name")},"github"),l.default.createElement("span",{className:d("badge-version")},"source")):void 0;return l.default.createElement("div",{className:d("badge-container")},o,i)};c.propTypes=u;t.A=c},201:function(e,t,r){var n=r(24994),l=r(73738);t.A=void 0;var a=n(r(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(r(96540)),i=n(r(5556)),d=n(r(67967)),u=r(92912),c=n(r(27166)),p=n(r(62441)),f=r(25966),m=n(r(89986));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}var y=d.default.bind(m.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,r=e.exampleSrc,n=e.exampleCssSrc,l=e.title,i=e.description,d=e.isExpanded,m=(0,o.useState)(d),s=(0,a.default)(m,2),b=s[0],_=s[1],h=(0,o.useState)(!1),g=(0,a.default)(h,2),O=g[0],C=g[1],w=o.default.useContext(u.ThemeContext),j=void 0!==n,E=function(){C(!O),b&&_(!b)},P=function(){_(!b),O&&C(!O)},T=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:y("template",w.className)},o.default.createElement("div",{className:y("header")},l&&o.default.createElement("h2",{className:y("title")},l)),o.default.createElement("div",{className:y("content")},i&&o.default.createElement("div",{className:y("description")},i),t),o.default.createElement("div",{className:y("footer")},r?o.default.createElement("div",{className:y("button-container")},j&&o.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":O}),onClick:E,onKeyDown:function(e){return T(e,E)},onBlur:v,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:y("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(p.default,{className:y("chevron")})),o.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":b}),onClick:P,onKeyDown:function(e){return T(e,P)},onBlur:v,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:y("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(p.default,{className:y("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:y("css")},n),b&&o.default.createElement("div",{className:y("code")},r))))};_.propTypes=b,_.defaultProps={isExpanded:!1};t.A=_},12883:function(e,t,r){var n=r(24994),l=r(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return u.Row}}),t.Ay=t.$d=void 0;var a=f(r(96540)),o=n(r(5556)),i=n(r(67967)),d=r(92912),u=f(r(17568)),c=n(r(89744));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}var m=i.default.bind(c.default),s={children:o.default.node},y={isRequired:o.default.bool};(t.dt=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:m("bold")},t)}).propTypes=s,(t.$d=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:m("code-block-override")},t)}).propTypes=s,(t.YZ=function(e){var t=e.isRequired;return a.default.createElement(u.Cell,{className:m([t?["required"]:[]])},t?"required":"optional")}).propTypes=y,(t.NZ=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:m("code-block-override")},t)}).propTypes=s,(t.Hd=function(e){var t=e.children;return a.default.createElement(u.Cell,null,t)}).propTypes=s;var b=function(e){var t=e.children,r=(0,a.useContext)(d.ThemeContext);return a.default.createElement(u.default,{paddingStyle:"compact",className:m("table",r.className)},a.default.createElement(u.Header,{className:m("header")},a.default.createElement(u.HeaderCell,null,"Prop"),a.default.createElement(u.HeaderCell,null,"Type"),a.default.createElement(u.HeaderCell,null,"Required"),a.default.createElement(u.HeaderCell,null,"Default"),a.default.createElement(u.HeaderCell,null,"Description")),a.default.createElement(u.Body,null,t))};b.propTypes=s;t.Ay=b},82925:function(e,t,r){r.r(t),r.d(t,{default:function(){return Q}});var n=r(96540),l=r(36665),a=r(97687),o=r(88656),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c={};function p(e){var t=e.components,r=u(e,i);return(0,l.mdx)("wrapper",d({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport CellGrid, {\n  Cell,\n} from \'terra-cell-grid\';\n\nconst CellGridExample = () => (\n  <CellGrid>\n    <Cell key="cell-0" width={{ static: { value: 80, unit: \'px\' } }}>80px</Cell>\n    <Cell key="cell-1" width={{ percentage: 10 }}>10%</Cell>\n    <Cell key="cell-2">Scalar 1</Cell>\n    <Cell key="cell-3" width={{ scalar: 3 }}>Scalar 3</Cell>\n  </CellGrid>\n);\n\nexport default CellGridExample;\n\n')))}p.isMDXComponent=!0;var f=r(201),m=function(e){var t=e.title,r=e.description,l=e.isExpanded;return n.createElement(f.A,{title:t||"Cell Grid Example",description:r,example:n.createElement(o.A,null),exampleSrc:n.createElement(p,null),isExpanded:l})},s=r(48902),y=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function v(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var x={};function _(e){var t=e.components,r=v(e,y);return(0,l.mdx)("wrapper",b({},x,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport CellGrid, {\n  Cell,\n} from \'terra-cell-grid\';\n\nconst CellGridVertical = () => (\n  <CellGrid\n    dividerStyle="vertical"\n  >\n    <Cell key="cell-0" width={{ static: { value: 80, unit: \'px\' } }}>80px</Cell>\n    <Cell key="cell-1" width={{ percentage: 10 }}>10%</Cell>\n    <Cell key="cell-2">Scalar 1</Cell>\n    <Cell key="cell-3" width={{ scalar: 3 }}>Scalar 3</Cell>\n  </CellGrid>\n);\n\nexport default CellGridVertical;\n\n')))}_.isMDXComponent=!0;var h=function(e){var t=e.title,r=e.description,l=e.isExpanded;return n.createElement(f.A,{title:t||"Cell Grid Vertical",description:r,example:n.createElement(s.A,null),exampleSrc:n.createElement(_,null),isExpanded:l})},g=r(12664),O=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},C.apply(this,arguments)}function w(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var j={};function E(e){var t=e.components,r=w(e,O);return(0,l.mdx)("wrapper",C({},j,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport CellGrid, {\n  Cell,\n} from \'terra-cell-grid\';\n\nconst CellGridHorizontal = () => (\n  <CellGrid\n    dividerStyle="horizontal"\n  >\n    <Cell key="cell-0" width={{ static: { value: 80, unit: \'px\' } }}>80px</Cell>\n    <Cell key="cell-1" width={{ percentage: 10 }}>10%</Cell>\n    <Cell key="cell-2">Scalar 1</Cell>\n    <Cell key="cell-3" width={{ scalar: 3 }}>Scalar 3</Cell>\n  </CellGrid>\n);\n\nexport default CellGridHorizontal;\n\n')))}E.isMDXComponent=!0;var P=function(e){var t=e.title,r=e.description,l=e.isExpanded;return n.createElement(f.A,{title:t||"Cell Grid Horizontal",description:r,example:n.createElement(g.A,null),exampleSrc:n.createElement(E,null),isExpanded:l})},T=r(42199),N=["components"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}function k(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var M={};function D(e){var t=e.components,r=k(e,N);return(0,l.mdx)("wrapper",S({},M,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport CellGrid, {\n  Cell,\n} from \'terra-cell-grid\';\n\nconst CellGridBoth = () => (\n  <CellGrid\n    dividerStyle="both"\n  >\n    <Cell key="cell-0" width={{ static: { value: 80, unit: \'px\' } }}>80px</Cell>\n    <Cell key="cell-1" width={{ percentage: 10 }}>10%</Cell>\n    <Cell key="cell-2">Scalar 1</Cell>\n    <Cell key="cell-3" width={{ scalar: 3 }}>Scalar 3</Cell>\n  </CellGrid>\n);\n\nexport default CellGridBoth;\n\n')))}D.isMDXComponent=!0;var G=function(e){var t=e.title,r=e.description,l=e.isExpanded;return n.createElement(f.A,{title:t||"Cell Grid Both",description:r,example:n.createElement(T.A,null),exampleSrc:n.createElement(D,null),isExpanded:l})},R=r(12883),A=["components"];function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W.apply(this,arguments)}function q(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var I={},H="wrapper";function B(e){var t=e.components,r=q(e,A);return(0,l.mdx)(H,W({},I,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(R.Ay,{mdxType:"PropsTable"},(0,l.mdx)(R.fI,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(R.dt,{mdxType:"PropNameCell"},"children"),(0,l.mdx)(R.$d,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,l.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Content to be displayed for the cell."))),(0,l.mdx)(R.fI,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(R.dt,{mdxType:"PropNameCell"},"refCallback"),(0,l.mdx)(R.$d,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Function callback to get the ref of the cell."))),(0,l.mdx)(R.fI,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(R.dt,{mdxType:"PropNameCell"},"width"),(0,l.mdx)(R.$d,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"shape: {\n  static: {\n    shape: {\n      value: {\n        type: 'number',\n        required: true,\n      },\n      unit: {\n        type: 'string',\n        required: true,\n      },\n    },\n  },\n  percentage: {\n    type: 'number',\n  },\n  scalar: {\n    type: 'number',\n  },\n},\n"))),(0,l.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Composed width for the cell. Can be provided as either a static, percentage, or scalar value.")))))}B.isMDXComponent=!0;var z=["components"];function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},X.apply(this,arguments)}function Z(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var F={},V="wrapper";function Y(e){var t=e.components,r=Z(e,z);return(0,l.mdx)(V,X({},F,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(R.Ay,{mdxType:"PropsTable"},(0,l.mdx)(R.fI,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(R.dt,{mdxType:"PropNameCell"},"children"),(0,l.mdx)(R.$d,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(R.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The child Cells to passed to the cell grid."))),(0,l.mdx)(R.fI,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(R.dt,{mdxType:"PropNameCell"},"dividerStyle"),(0,l.mdx)(R.$d,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'vertical'\n  'horizontal'\n  'both'\n],\n"))),(0,l.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Indicates the desired divider styles to apply to a cell grid and its children.\nOne of ",(0,l.mdx)("inlineCode",{parentName:"p"},"'vertical'"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"'horizontal'"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"'both'"),","))),(0,l.mdx)(R.fI,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(R.dt,{mdxType:"PropNameCell"},"refCallback"),(0,l.mdx)(R.$d,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Function callback for the ref of the cell grid.")))))}Y.isMDXComponent=!0;var L=["components"];function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},K.apply(this,arguments)}function $(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var J={},U="wrapper";function Q(e){var t=e.components,r=$(e,L);return(0,l.mdx)(U,K({},J,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(a.E,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-cell-grid"},"Terra Cell Grid"),(0,l.mdx)("p",null,"The terra-cell-grid is a structural row based layout for aligning columns with 100% of its parents width."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-cell-grid"))))),(0,l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,l.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import CellGrid, { Cell} from 'terra-cell-grid';\n")),(0,l.mdx)("h2",{id:"component-features"},"Component Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(m,{title:"Default",mdxType:"CellGridExample"}),(0,l.mdx)(h,{title:"Divided Vertically",mdxType:"CellGridVertical"}),(0,l.mdx)(P,{title:"Divided Horizontally",mdxType:"CellGridHorizontal"}),(0,l.mdx)(G,{title:"Divided Both Directions",mdxType:"CellGridBoth"}),(0,l.mdx)("h2",{id:"cell-props"},"Cell Props"),(0,l.mdx)(B,{mdxType:"CellPropsTable"}),(0,l.mdx)("h2",{id:"cellgrid-props"},"CellGrid Props"),(0,l.mdx)(Y,{mdxType:"CellGridPropsTable"}))}Q.isMDXComponent=!0},97687:function(e,t,r){r.d(t,{E:function(){return a}});var n=r(96540),l=r(55713),a=function(e){var t=e.url;return n.createElement(l.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-cell-grid",name:"terra-cell-grid",version:"1.15.0",url:t})}},33067:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(96540)),l=u(r(5556)),a=u(r(67967)),o=u(r(92216)),i=r(64221),d=["children","refCallback","width"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var f=a.default.bind(o.default),m={children:l.default.node,refCallback:l.default.func,width:l.default.shape({static:l.default.shape({value:l.default.number.isRequired,unit:l.default.string.isRequired}),percentage:l.default.number,scalar:l.default.number})},s=function(e){var t=e.children,r=e.refCallback,l=e.width,a=p(e,d),o=f(["cell"]);return n.default.createElement("div",c({},a,{style:(0,i.styleFromWidth)(l),className:a.className?"".concat(o," ").concat(a.className):o,ref:r}),t)};s.propTypes=m,s.defaultProps={children:[]};t.default=s},97115:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(96540)),l=c(r(5556)),a=c(r(46942)),o=c(r(67967)),i=c(r(52103)),d=c(r(71704)),u=["children","dividerStyle","refCallback"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var m=o.default.bind(d.default),s={children:l.default.node.isRequired,dividerStyle:l.default.oneOf(["vertical","horizontal","both"]),refCallback:l.default.func},y=function(e){var t=e.children,r=e.dividerStyle,l=e.refCallback,o=f(e,u),d=n.default.useContext(i.default),c=r?"divider-".concat(r):void 0,s=(0,a.default)(m("cell-grid",c,d.className),o.className);return n.default.createElement("div",p({},o,{className:s,ref:l}),t)};y.propTypes=s;t.default=y},64221:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.styleFromWidth=t.default=void 0;var r=function(e){return{msFlex:"0 0 0px",flex:"0 0 0px",maxWidth:e,minWidth:e}},n={styleFromWidth:t.styleFromWidth=function(e){if(e)return e.static?r("".concat(e.static.value).concat(e.static.unit)):e.percentage?r("".concat(e.percentage,"%")):e.scalar?function(e){return{msFlex:"".concat(e," ").concat(e," 0px"),flex:"".concat(e," ").concat(e," 0px")}}(e.scalar):void 0}};t.default=n},787:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var n=a(r(97115)),l=a(r(33067));function a(e){return e&&e.__esModule?e:{default:e}}t.default=n.default},42199:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.A=void 0;var l,a=(l=r(96540))&&l.__esModule?l:{default:l},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(l,o,d):l[o]=e[o]}return l.default=e,r&&r.set(e,l),l}(r(787));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}t.A=function(){return a.default.createElement(o.default,{dividerStyle:"both"},a.default.createElement(o.Cell,{key:"cell-0",width:{static:{value:80,unit:"px"}}},"80px"),a.default.createElement(o.Cell,{key:"cell-1",width:{percentage:10}},"10%"),a.default.createElement(o.Cell,{key:"cell-2"},"Scalar 1"),a.default.createElement(o.Cell,{key:"cell-3",width:{scalar:3}},"Scalar 3"))}},88656:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.A=void 0;var l,a=(l=r(96540))&&l.__esModule?l:{default:l},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(l,o,d):l[o]=e[o]}return l.default=e,r&&r.set(e,l),l}(r(787));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}t.A=function(){return a.default.createElement(o.default,null,a.default.createElement(o.Cell,{key:"cell-0",width:{static:{value:80,unit:"px"}}},"80px"),a.default.createElement(o.Cell,{key:"cell-1",width:{percentage:10}},"10%"),a.default.createElement(o.Cell,{key:"cell-2"},"Scalar 1"),a.default.createElement(o.Cell,{key:"cell-3",width:{scalar:3}},"Scalar 3"))}},12664:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.A=void 0;var l,a=(l=r(96540))&&l.__esModule?l:{default:l},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(l,o,d):l[o]=e[o]}return l.default=e,r&&r.set(e,l),l}(r(787));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}t.A=function(){return a.default.createElement(o.default,{dividerStyle:"horizontal"},a.default.createElement(o.Cell,{key:"cell-0",width:{static:{value:80,unit:"px"}}},"80px"),a.default.createElement(o.Cell,{key:"cell-1",width:{percentage:10}},"10%"),a.default.createElement(o.Cell,{key:"cell-2"},"Scalar 1"),a.default.createElement(o.Cell,{key:"cell-3",width:{scalar:3}},"Scalar 3"))}},48902:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.A=void 0;var l,a=(l=r(96540))&&l.__esModule?l:{default:l},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(l,o,d):l[o]=e[o]}return l.default=e,r&&r.set(e,l),l}(r(787));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}t.A=function(){return a.default.createElement(o.default,{dividerStyle:"vertical"},a.default.createElement(o.Cell,{key:"cell-0",width:{static:{value:80,unit:"px"}}},"80px"),a.default.createElement(o.Cell,{key:"cell-1",width:{percentage:10}},"10%"),a.default.createElement(o.Cell,{key:"cell-2"},"Scalar 1"),a.default.createElement(o.Cell,{key:"cell-3",width:{scalar:3}},"Scalar 3"))}},17212:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(96540)),l=c(r(5556)),a=c(r(46942)),o=c(r(67967)),i=c(r(52103)),d=c(r(19677)),u=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var m=o.default.bind(d.default),s={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,r=e.disableStripes,l=e.paddingStyle,o=f(e,u),d=n.default.useContext(i.default),c=(0,a.default)(m("table",{striped:!r},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},d.className),o.className);return n.default.createElement("table",p({},o,{className:c}),t)};y.propTypes=s,y.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=y},15460:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(96540)),l=o(r(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d={children:l.default.node},u=function(e){var t=e.children,r=i(e,a);return n.default.createElement("tbody",r,t)};u.propTypes=d,u.defaultProps={children:[]};t.default=u},59584:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(96540)),l=o(r(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d={children:l.default.node},u=function(e){var t=e.children,r=i(e,a);return n.default.createElement("td",r,t)};u.propTypes=d,u.defaultProps={children:[]};t.default=u},14281:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(96540)),l=i(r(5556)),a=i(r(93623)),o=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u={children:l.default.node},c=function(e){var t=e.children,r=d(e,o);return n.default.createElement("thead",r,n.default.createElement("tr",null,a.default.addScope(t,"col")))};c.propTypes=u,c.defaultProps={children:[]};t.default=c},93401:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(96540)),l=o(r(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d={children:l.default.node},u=function(e){var t=e.children,r=i(e,a);return n.default.createElement("th",r,t)};u.propTypes=d,u.defaultProps={children:[]};t.default=u},96646:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(96540)),l=u(r(5556)),a=u(r(67967)),o=u(r(19677)),i=u(r(93623)),d=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var f=a.default.bind(o.default),m={children:l.default.node},s=function(e){var t=e.children,r=p(e,d),l=f(["row"]);return n.default.createElement("tr",c({},r,{className:r.className?"".concat(l," ").concat(r.className):l}),i.default.addScope(t,"row"))};s.propTypes=m,s.defaultProps={children:[]};t.default=s},93623:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=(n=r(96540))&&n.__esModule?n:{default:n};var a={addScope:function(e,t){var r=[];return l.default.Children.forEach(e,(function(e){r.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),r}};t.default=a},17568:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=u(r(17212)),l=u(r(15460)),a=u(r(96646)),o=u(r(59584)),i=u(r(14281)),d=u(r(93401));function u(e){return e&&e.__esModule?e:{default:e}}t.default=n.default},27166:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(96540)),l=a(r(56445));function a(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},25642:function(e,t,r){r.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},89744:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},92216:function(e,t,r){r.r(t),t.default={cell:"Cell-module__cell___6YOBo"}},71704:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"CellGrid-module__clinical-lowlight-theme___zJBHA","orion-fusion-theme":"CellGrid-module__orion-fusion-theme___hdXXy","cell-grid":"CellGrid-module__cell-grid___kbkPN","divider-horizontal":"CellGrid-module__divider-horizontal___COAhK","divider-both":"CellGrid-module__divider-both___eRXBF","divider-vertical":"CellGrid-module__divider-vertical___ZsST9"}},19677:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);