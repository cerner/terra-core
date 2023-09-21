"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[50408],{22863:function(e,l,t){var n=t(64836);l.Z=void 0;var a=n(t(67294)),r=n(t(45697)),d=n(t(47166)),o=n(t(17422)),c=d.default.bind(o.default),m={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},u=function(e){var l=e.src,t=e.name,n=e.url,r=e.version,d=a.default.createElement("a",{className:c("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},a.default.createElement("span",{className:c("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(r))),o=l?a.default.createElement("a",{className:c("badge"),href:l},a.default.createElement("span",{className:c("badge-name")},"github"),a.default.createElement("span",{className:c("badge-version")},"source")):void 0;return a.default.createElement("div",{className:c("badge-container")},d,o)};u.propTypes=m;var i=u;l.Z=i},49271:function(e,l,t){var n=t(64836),a=t(18698);l.Z=void 0;var r=n(t(27424)),d=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=f(l);if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=r?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(n,d,o):n[d]=e[d]}n.default=e,t&&t.set(e,n);return n}(t(67294)),o=n(t(45697)),c=n(t(47166)),m=t(21538),u=n(t(13810)),i=n(t(40931)),p=t(51051),s=n(t(53560));function f(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,t=new WeakMap;return(f=function(e){return e?t:l})(e)}var y=c.default.bind(s.default),x={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var l=e.example,t=e.exampleSrc,n=e.exampleCssSrc,a=e.title,o=e.description,c=e.isExpanded,s=(0,d.useState)(c),f=(0,r.default)(s,2),x=f[0],g=f[1],v=(0,d.useState)(!1),T=(0,r.default)(v,2),k=T[0],C=T[1],O=d.default.useContext(m.ThemeContext),_=void 0!==n,E=function(){C(!k),x&&g(!x)},S=function(){g(!x),k&&C(!k)},j=function(e,l){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),l())};return d.default.createElement("div",{className:y("template",O.className)},d.default.createElement("div",{className:y("header")},a&&d.default.createElement("h2",{className:y("title")},a)),d.default.createElement("div",{className:y("content")},o&&d.default.createElement("div",{className:y("description")},o),l),d.default.createElement("div",{className:y("footer")},t?d.default.createElement("div",{className:y("button-container")},_&&d.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":k}),onClick:E,onKeyDown:function(e){return j(e,E)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(u.default,{className:y("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(i.default,{className:y("chevron")})),d.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":x}),onClick:S,onKeyDown:function(e){return j(e,S)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(u.default,{className:y("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(i.default,{className:y("chevron")}))):null,d.default.createElement("div",null,k&&d.default.createElement("div",{className:y("css")},n),x&&d.default.createElement("div",{className:y("code")},t))))};g.propTypes=x,g.defaultProps={isExpanded:!1};var v=g;l.Z=v},78530:function(e,l,t){var n=t(64836),a=t(18698);l.dS=l.O=l.Ex=l.mW=void 0,Object.defineProperty(l,"X2",{enumerable:!0,get:function(){return m.Row}}),l.ZP=l.Di=void 0;var r=p(t(67294)),d=n(t(45697)),o=n(t(47166)),c=t(21538),m=p(t(37515)),u=n(t(54931));function i(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,t=new WeakMap;return(i=function(e){return e?t:l})(e)}function p(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=i(l);if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=r?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(n,d,o):n[d]=e[d]}return n.default=e,t&&t.set(e,n),n}var s=o.default.bind(u.default),f={children:d.default.node},y={isRequired:d.default.bool},x=function(e){var l=e.children;return r.default.createElement(m.Cell,{className:s("bold")},l)};l.O=x,x.propTypes=f;var h=function(e){var l=e.children;return r.default.createElement(m.Cell,{className:s("code-block-override")},l)};l.Di=h,h.propTypes=f;var b=function(e){var l=e.isRequired;return r.default.createElement(m.Cell,{className:s([l?["required"]:[]])},l?"required":"optional")};l.dS=b,b.propTypes=y;var g=function(e){var l=e.children;return r.default.createElement(m.Cell,{className:s("code-block-override")},l)};l.mW=g,g.propTypes=f;var v=function(e){var l=e.children;return r.default.createElement(m.Cell,null,l)};l.Ex=v,v.propTypes=f;var T=function(e){var l=e.children,t=(0,r.useContext)(c.ThemeContext);return r.default.createElement(m.default,{paddingStyle:"compact",className:s("table",t.className)},r.default.createElement(m.Header,{className:s("header")},r.default.createElement(m.HeaderCell,null,"Prop"),r.default.createElement(m.HeaderCell,null,"Type"),r.default.createElement(m.HeaderCell,null,"Required"),r.default.createElement(m.HeaderCell,null,"Default"),r.default.createElement(m.HeaderCell,null,"Description")),r.default.createElement(m.Body,null,l))};T.propTypes=f;var k=T;l.ZP=k},50408:function(e,l,t){t.r(l),t.d(l,{default:function(){return B}});var n=t(67294),a=t(81254),r=t(61701),d=t(34981),o=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(this,arguments)}function m(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u={};function i(e){var l=e.components,t=m(e,o);return(0,a.mdx)("wrapper",c({},u,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst HeaderRowExample = () => (\n  <React.Fragment>\n    <Table\n      summaryId=\"default-header-table\"\n      summary=\"This table displays the default layout of table header.\"\n      numberOfColumns={2}\n      cellPaddingStyle=\"standard\"\n      headerData={{\n        cells: [\n          { id: 'header-key-0', key: 'key-0', children: 'Default Header' },\n          { id: 'header-key-1', key: 'key-1', children: 'Default Header' },\n        ],\n      }}\n    />\n    <Table\n      summaryId=\"chevron-header-table\"\n      summary=\"This table displays the chevron layout of table header.\"\n      numberOfColumns={2}\n      cellPaddingStyle=\"standard\"\n      rowStyle=\"disclose\"\n      hasChevrons\n      headerData={{\n        cells: [\n          { id: 'header-key-0', key: 'key-0', children: 'Selection Style Chevron' },\n          { id: 'header-key-1', key: 'key-1', children: 'Selection Style Chevron' },\n        ],\n      }}\n    />\n    <Table\n      summaryId=\"check-header-table\"\n      summary=\"This table displays the checkmark layout of table header.\"\n      numberOfColumns={2}\n      cellPaddingStyle=\"standard\"\n      checkStyle=\"toggle\"\n      headerData={{\n        selectAllColumn: {\n          checkLabel: 'Column Title',\n        },\n        cells: [\n          { id: 'header-key-0', key: 'key-0', children: 'Selection Style Checkmark' },\n          { id: 'header-key-1', key: 'key-1', children: 'Selection Style Checkmark' },\n        ],\n      }}\n    />\n  </React.Fragment>\n);\n\nexport default HeaderRowExample;\n\n")))}i.isMDXComponent=!0;var p=t(49271),s=function(e){var l=e.title,t=e.description,a=e.isExpanded;return n.createElement(p.Z,{title:l||"Header Row Example",description:t,example:n.createElement(d.Z,null),exampleSrc:n.createElement(i,null),isExpanded:a})},f=t(97645),y=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},x.apply(this,arguments)}function h(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b={};function g(e){var l=e.components,t=h(e,y);return(0,a.mdx)("wrapper",x({},b,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst HeaderCheckMarkCellExample = () => (\n  <React.Fragment>\n    <Table\n      summaryId=\"example-check-cell\"\n      summary=\"This table displaying a default check column.\"\n      rowStyle=\"toggle\"\n      checkStyle=\"icon\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Default' }],\n      }}\n    />\n    <Table\n      summaryId=\"empty-check-cell\"\n      summary=\"This table displaying a selectable unchecked column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'empty' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Unchecked' }],\n      }}\n    />\n    <Table\n      summaryId=\"checked-check-cell\"\n      summary=\"This table displaying a selectable checked column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'checked' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Checked' }],\n      }}\n    />\n    <Table\n      summaryId=\"indeterminate-check-cell\"\n      summary=\"This table displaying a selectable indeterminate column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'indeterminate' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Indeterminate' }],\n      }}\n    />\n    <Table\n      summaryId=\"disabled-check-cell\"\n      summary=\"This table displaying a disabled check column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, isDisabled: true },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Disabled' }],\n      }}\n    />\n    <Table\n      summaryId=\"alignment-check-cell\"\n      summary=\"This table displaying a vertically aligned check column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkAlignment: '1rem' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Vertical Alignment 1rem' }],\n      }}\n    />\n  </React.Fragment>\n);\n\nexport default HeaderCheckMarkCellExample;\n\n")))}g.isMDXComponent=!0;var v=function(e){var l=e.title,t=e.description,a=e.isExpanded;return n.createElement(p.Z,{title:l||"Header Check Mark Cell Example",description:t,example:n.createElement(f.Z,null),exampleSrc:n.createElement(g,null),isExpanded:a})},T=t(78530),k=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},C.apply(this,arguments)}function O(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var _={},E="wrapper";function S(e){var l=e.components,t=O(e,k);return(0,a.mdx)(E,C({},_,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)(T.ZP,{mdxType:"PropsTable"},(0,a.mdx)(T.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"cells"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The cells to be displayed within the header."))),(0,a.mdx)(T.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"refCallback"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback returning the html node for the header."))),(0,a.mdx)(T.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"selectAllColumn"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The select all column header's properties.")))))}S.isMDXComponent=!0;var j=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},D.apply(this,arguments)}function w(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var P={},N="wrapper";function R(e){var l=e.components,t=w(e,j);return(0,a.mdx)(N,D({},P,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)(T.ZP,{mdxType:"PropsTable"},(0,a.mdx)(T.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"id"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(T.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,'The id of the header cell for the row cells to set within their "headers" prop.'))),(0,a.mdx)(T.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"key"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(T.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The react key to apply to the cell."))),(0,a.mdx)(T.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Content to be displayed for the column header."))),(0,a.mdx)(T.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"isSortDesc"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not the sort indicator is descending."))),(0,a.mdx)(T.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"isSortActive"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not the column is to be marked as a sorted column."))),(0,a.mdx)(T.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"metaData"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))),(0,a.mdx)(T.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"onCellAction"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript event and prop metadata, e.g. onCellAction(event, metaData)\nThe presence of this func will indicate that the cell can be interacted with for actions or selections."))),(0,a.mdx)(T.X2,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"onSortAction"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript event and prop metadata, e.g. onSortAction(event, metaData)\nThe presence of this func will indicate that the cell can be interacted with for sorting."))),(0,a.mdx)(T.X2,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"refCallback"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback returning the html node for the header cell."))),(0,a.mdx)(T.X2,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"removeInner"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not the cell's inner containing element responsible for handling table's default padding is removed.\nThis is useful to optimize the DOM for either a table without padding or to optimize a cell whose custom content is providing its own padding."))),(0,a.mdx)(T.X2,{key:"ROW11",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"attrs"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Additional attributes to be passed to the cell.")))))}R.isMDXComponent=!0;var W=["components"];function q(){return q=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},q.apply(this,arguments)}function M(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var A={},I="wrapper";function X(e){var l=e.components,t=M(e,W);return(0,a.mdx)(I,q({},A,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)(T.ZP,{mdxType:"PropsTable"},(0,a.mdx)(T.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"checkStatus"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'empty'\n  'checked'\n  'indeterminate'\n],\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The status of the select all checkbox."))),(0,a.mdx)(T.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"checkAlignment"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The alignment prop sets the bottom spacing of the check mar, standard units are valid. This is used when providing your own padding."))),(0,a.mdx)(T.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"checkLabel"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(T.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The text label for the column header's interaction."))),(0,a.mdx)(T.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"onCheckAction"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The function callback triggering when the checkbox within the column header has an interaction."))),(0,a.mdx)(T.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(T.O,{mdxType:"PropNameCell"},"isDisabled"),(0,a.mdx)(T.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not interaction should be disabled.")))))}X.isMDXComponent=!0;var H=["components"];function L(){return L=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},L.apply(this,arguments)}function V(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Z={},F="wrapper";function B(e){var l=e.components,t=V(e,H);return(0,a.mdx)(F,L({},Z,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-table---header"},"Terra Table - Header"),(0,a.mdx)("p",null,"The table's header is comprised of a cells and an optional selectAllColumn. The checkLabel should be provided if the table has toggle behavior."),(0,a.mdx)("h1",{id:"examples"},"Examples"),(0,a.mdx)(s,{mdxType:"HeaderRowExample"}),(0,a.mdx)(v,{mdxType:"HeaderCheckMarkCellExample"}),(0,a.mdx)("h2",{id:"table-header-props"},"Table Header Props"),(0,a.mdx)(S,{mdxType:"HeaderProps"}),(0,a.mdx)("h2",{id:"table-header-cell-props"},"Table Header Cell Props"),(0,a.mdx)(R,{mdxType:"HeaderCellProps"}),(0,a.mdx)("h2",{id:"table-select-all-column-props"},"Table Select All Column Props"),(0,a.mdx)(X,{mdxType:"SelectAllColumnProps"}))}B.isMDXComponent=!0},61701:function(e,l,t){t.d(l,{C:function(){return r}});var n=t(67294),a=t(22863),r=function(e){var l=e.url;return n.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-table",name:"terra-table",version:"4.36.0",url:l})}},97645:function(e,l,t){l.Z=void 0;var n=r(t(67294)),a=r(t(12810));function r(e){return e&&e.__esModule?e:{default:e}}var d=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(a.default,{summaryId:"example-check-cell",summary:"This table displaying a default check column.",rowStyle:"toggle",checkStyle:"icon",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title"},cells:[{id:"column-0",key:"key-0",children:"Default"}]}}),n.default.createElement(a.default,{summaryId:"empty-check-cell",summary:"This table displaying a selectable unchecked column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkStatus:"empty"},cells:[{id:"column-0",key:"key-0",children:"Selectable Unchecked"}]}}),n.default.createElement(a.default,{summaryId:"checked-check-cell",summary:"This table displaying a selectable checked column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkStatus:"checked"},cells:[{id:"column-0",key:"key-0",children:"Selectable Checked"}]}}),n.default.createElement(a.default,{summaryId:"indeterminate-check-cell",summary:"This table displaying a selectable indeterminate column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkStatus:"indeterminate"},cells:[{id:"column-0",key:"key-0",children:"Selectable Indeterminate"}]}}),n.default.createElement(a.default,{summaryId:"disabled-check-cell",summary:"This table displaying a disabled check column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},isDisabled:!0},cells:[{id:"column-0",key:"key-0",children:"Disabled"}]}}),n.default.createElement(a.default,{summaryId:"alignment-check-cell",summary:"This table displaying a vertically aligned check column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkAlignment:"1rem"},cells:[{id:"column-0",key:"key-0",children:"Vertical Alignment 1rem"}]}}))};l.Z=d},34981:function(e,l,t){l.Z=void 0;var n=r(t(67294)),a=r(t(12810));function r(e){return e&&e.__esModule?e:{default:e}}var d=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(a.default,{summaryId:"default-header-table",summary:"This table displays the default layout of table header.",numberOfColumns:2,cellPaddingStyle:"standard",headerData:{cells:[{id:"header-key-0",key:"key-0",children:"Default Header"},{id:"header-key-1",key:"key-1",children:"Default Header"}]}}),n.default.createElement(a.default,{summaryId:"chevron-header-table",summary:"This table displays the chevron layout of table header.",numberOfColumns:2,cellPaddingStyle:"standard",rowStyle:"disclose",hasChevrons:!0,headerData:{cells:[{id:"header-key-0",key:"key-0",children:"Selection Style Chevron"},{id:"header-key-1",key:"key-1",children:"Selection Style Chevron"}]}}),n.default.createElement(a.default,{summaryId:"check-header-table",summary:"This table displays the checkmark layout of table header.",numberOfColumns:2,cellPaddingStyle:"standard",checkStyle:"toggle",headerData:{selectAllColumn:{checkLabel:"Column Title"},cells:[{id:"header-key-0",key:"key-0",children:"Selection Style Checkmark"},{id:"header-key-1",key:"key-1",children:"Selection Style Checkmark"}]}}))};l.Z=d},32634:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=u(t(67294)),a=u(t(45697)),r=u(t(94184)),d=u(t(47166)),o=u(t(50026)),c=u(t(16749)),m=["children","disableStripes","paddingStyle"];function u(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function p(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=d.default.bind(c.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},y=function(e){var l=e.children,t=e.disableStripes,a=e.paddingStyle,d=p(e,m),c=n.default.useContext(o.default),u=(0,r.default)(s("table",{striped:!t},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},c.className),d.className);return n.default.createElement("table",i({},d,{className:u}),l)};y.propTypes=f,y.defaultProps={disableStripes:!1,paddingStyle:"none"};var x=y;l.default=x},80196:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=d(t(67294)),a=d(t(45697)),r=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c={children:a.default.node},m=function(e){var l=e.children,t=o(e,r);return n.default.createElement("tbody",t,l)};m.propTypes=c,m.defaultProps={children:[]};var u=m;l.default=u},8685:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=d(t(67294)),a=d(t(45697)),r=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c={children:a.default.node},m=function(e){var l=e.children,t=o(e,r);return n.default.createElement("td",t,l)};m.propTypes=c,m.defaultProps={children:[]};var u=m;l.default=u},19852:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=o(t(67294)),a=o(t(45697)),r=o(t(29805)),d=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function c(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m={children:a.default.node},u=function(e){var l=e.children,t=c(e,d);return n.default.createElement("thead",t,n.default.createElement("tr",null,r.default.addScope(l,"col")))};u.propTypes=m,u.defaultProps={children:[]};var i=u;l.default=i},80876:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=d(t(67294)),a=d(t(45697)),r=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c={children:a.default.node},m=function(e){var l=e.children,t=o(e,r);return n.default.createElement("th",t,l)};m.propTypes=c,m.defaultProps={children:[]};var u=m;l.default=u},70829:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=m(t(67294)),a=m(t(45697)),r=m(t(47166)),d=m(t(16749)),o=m(t(29805)),c=["children"];function m(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}function i(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.default.bind(d.default),s={children:a.default.node},f=function(e){var l=e.children,t=i(e,c),a=p(["row"]);return n.default.createElement("tr",u({},t,{className:t.className?"".concat(a," ").concat(t.className):a}),o.default.addScope(l,"row"))};f.propTypes=s,f.defaultProps={children:[]};var y=f;l.default=y},29805:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n,a=(n=t(67294))&&n.__esModule?n:{default:n};var r={addScope:function(e,l){var t=[];return a.default.Children.forEach(e,(function(e){t.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?l:void 0}))})),t}};l.default=r},37515:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(l,"Cell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(l,"Header",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(l,"HeaderCell",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(l,"Row",{enumerable:!0,get:function(){return r.default}}),l.default=void 0;var n=m(t(32634)),a=m(t(80196)),r=m(t(70829)),d=m(t(8685)),o=m(t(19852)),c=m(t(80876));function m(e){return e&&e.__esModule?e:{default:e}}var u=n.default;l.default=u},13810:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=r(t(67294)),a=r(t(21969));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}var o=function(e){var l=d({},e);return n.default.createElement(a.default,l,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var c=o;l.default=c},17422:function(e,l,t){t.r(l),l.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},16749:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);