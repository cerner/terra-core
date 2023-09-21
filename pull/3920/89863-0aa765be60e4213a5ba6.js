"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[89863],{49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var r=l(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(l,i,o):l[i]=e[i]}l.default=e,n&&n.set(e,l);return l}(n(67294)),o=l(n(45697)),c=l(n(47166)),d=n(21538),u=l(n(13810)),s=l(n(40931)),m=n(51051),p=l(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var y=c.default.bind(p.default),h={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},k=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,o=e.description,c=e.isExpanded,p=(0,i.useState)(c),f=(0,r.default)(p,2),h=f[0],b=f[1],x=(0,i.useState)(!1),w=(0,r.default)(x,2),v=w[0],_=w[1],T=i.default.useContext(d.ThemeContext),E=void 0!==l,S=function(){_(!v),h&&b(!h)},O=function(){b(!h),v&&_(!v)},D=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:y("template",T.className)},i.default.createElement("div",{className:y("header")},a&&i.default.createElement("h2",{className:y("title")},a)),i.default.createElement("div",{className:y("content")},o&&i.default.createElement("div",{className:y("description")},o),t),i.default.createElement("div",{className:y("footer")},n?i.default.createElement("div",{className:y("button-container")},E&&i.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":v}),onClick:S,onKeyDown:function(e){return D(e,S)},onBlur:g,onMouseDown:k,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(u.default,{className:y("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(s.default,{className:y("chevron")})),i.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":h}),onClick:O,onKeyDown:function(e){return D(e,O)},onBlur:g,onMouseDown:k,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(u.default,{className:y("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(s.default,{className:y("chevron")}))):null,i.default.createElement("div",null,v&&i.default.createElement("div",{className:y("css")},l),h&&i.default.createElement("div",{className:y("code")},n))))};b.propTypes=h,b.defaultProps={isExpanded:!1};var x=b;t.Z=x},89863:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var l=n(67294),a=n(81254),r=n(4012),i=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function u(e){var t=e.components,n=c(e,i);return(0,a.mdx)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\nimport mockData from './mock-data/mock-select';\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst createRow = (rowData, index) => (\n  {\n    key: rowData.key,\n    isStriped: index % 2 !== 0,\n    cells: createCellsForRow(rowData.cells),\n  }\n);\n\nconst createRows = data => data.map((childItem, index) => createRow(childItem, index));\n\nconst StripedTable = () => (\n  <Table\n    summaryId=\"example-striped-table\"\n    summary=\"This table shows an implementation of striped table.\"\n    numberOfColumns={4}\n    cellPaddingStyle=\"standard\"\n    dividerStyle=\"horizontal\"\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: 'toggle-0', children: 'Name' },\n        { key: 'cell-1', id: 'toggle-1', children: 'Address' },\n        { key: 'cell-2', id: 'toggle-2', children: 'Phone Number' },\n        { key: 'cell-3', id: 'toggle-3', children: 'Email Id' },\n      ],\n    }}\n    bodyData={[{\n      rows: createRows(mockData),\n    }]}\n  />\n);\n\nexport default StripedTable;\n\n")))}u.isMDXComponent=!0;var s=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(s.Z,{title:t||"Striped Table",description:n,example:l.createElement(r.Z,null),exampleSrc:l.createElement(u,null),isExpanded:a})},p=n(52904),f=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},y.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g={};function k(e){var t=e.components,n=h(e,f);return(0,a.mdx)("wrapper",y({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\nimport mockData from './mock-data/mock-section';\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst createRow = (rowData, index) => (\n  {\n    key: rowData.key,\n    isStriped: index % 2 !== 0,\n    cells: createCellsForRow(rowData.cells),\n  }\n);\n\nconst createSection = sectionData => (\n  {\n    sectionHeader: {\n      key: sectionData.key,\n      id: `section-${sectionData.key}`,\n      title: sectionData.title,\n    },\n    rows: sectionData.childItems.map((childItem, index) => createRow(childItem, index)),\n  }\n);\n\nconst createSections = data => data.map(childItem => createSection(childItem));\n\nconst StripedTableSection = () => (\n  <Table\n    summaryId=\"example-striped-section-table\"\n    summary=\"This table shows an implementation of striped section table.\"\n    numberOfColumns={3}\n    cellPaddingStyle=\"standard\"\n    dividerStyle=\"horizontal\"\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: 'toggle-10', children: 'Cars' },\n        { key: 'cell-1', id: 'toggle-11', children: 'Flatware' },\n        { key: 'cell-2', id: 'toggle-12', children: 'Food' },\n      ],\n    }}\n    bodyData={createSections(mockData)}\n  />\n);\n\nexport default StripedTableSection;\n\n")))}k.isMDXComponent=!0;var b=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(s.Z,{title:t||"Striped Table Section",description:n,example:l.createElement(p.Z,null),exampleSrc:l.createElement(k,null),isExpanded:a})},x=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},w.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _={},T="wrapper";function E(e){var t=e.components,n=v(e,x);return(0,a.mdx)(T,w({},_,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"terra-table---implementing-a-striped-table"},"Terra Table - Implementing a Striped Table"),(0,a.mdx)("p",null,"The following guide shows how to cleanly implement a striped Table. For the table implementation, the responsibility of striping is on the Row itself."),(0,a.mdx)("h2",{id:"standard-striped-function"},"Standard Striped Function"),(0,a.mdx)("p",null,"When striping the table rows the functionality is the same if you are yielding a flat list of items and a section's items.  When mapping your data to table rows capture the index of each row pass it to your createRow method."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const createRows = data => data.map((childItem, index) => createRow(childItem, index));\n")),(0,a.mdx)("p",null,"Next within our newly created method for row creation we want to set the striping pattern by the UX approved pattern, on odd array indexed items. This pattern is true for both a flat list and within each section. To accomplish this we check whether or not index modulus 2 yields a non zero value, this will give us the odd values rows."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const createRow = (rowData, index) => (\n+   {\n+     key: rowData.key,\n+     isStriped: index % 2 !== 0,\n+     cells: createCellsForRow(rowData.cells),\n+   }\n+ );\n")),(0,a.mdx)("p",null,"We can then implement our additional static methods to populate the cell data."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+ const createCellsForRow = cells => cells.map(cell => createCell(cell));\n")),(0,a.mdx)("p",null,"And finally we call our create row creation method."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const StripedTable = () => (\n+   <Table\n+     summaryId=\"example-striped-table\"\n+     summary=\"This table shows an implementation of striped table.\"\n+     numberOfColumns={4}\n+     cellPaddingStyle=\"standard\"\n+     headerData={{\n+       cells: [\n+         { key: 'cell-0', id: 'toggle-0', children: 'Name' },\n+         { key: 'cell-1', id: 'toggle-1', children: 'Address' },\n+         { key: 'cell-2', id: 'toggle-2', children: 'Phone Number' },\n+         { key: 'cell-3', id: 'toggle-3', children: 'Email Id' },\n+       ],\n+     }}\n+     bodyData={[{\n+       rows: createRows(mockData),\n+     }]}\n+   />\n+ );\n")),(0,a.mdx)("p",null,"Using these steps we get the following examples:"),(0,a.mdx)(m,{mdxType:"StripedTable"}),(0,a.mdx)(b,{mdxType:"StripedTableSection"}))}E.isMDXComponent=!0},4012:function(e,t,n){t.Z=void 0;var l=i(n(67294)),a=i(n(12810)),r=i(n(5893));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){return l.default.createElement(a.default,{summaryId:"example-striped-table",summary:"This table shows an implementation of striped table.",numberOfColumns:4,cellPaddingStyle:"standard",dividerStyle:"horizontal",headerData:{cells:[{key:"cell-0",id:"toggle-0",children:"Name"},{key:"cell-1",id:"toggle-1",children:"Address"},{key:"cell-2",id:"toggle-2",children:"Phone Number"},{key:"cell-3",id:"toggle-3",children:"Email Id"}]},bodyData:[{rows:(e=r.default,e.map((function(e,t){return function(e,t){return{key:e.key,isStriped:t%2!=0,cells:(n=e.cells,n.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)})))};var n}(e,t)})))}]});var e};t.Z=o},52904:function(e,t,n){t.Z=void 0;var l=i(n(67294)),a=i(n(12810)),r=i(n(87336));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){return l.default.createElement(a.default,{summaryId:"example-striped-section-table",summary:"This table shows an implementation of striped section table.",numberOfColumns:3,cellPaddingStyle:"standard",dividerStyle:"horizontal",headerData:{cells:[{key:"cell-0",id:"toggle-10",children:"Cars"},{key:"cell-1",id:"toggle-11",children:"Flatware"},{key:"cell-2",id:"toggle-12",children:"Food"}]},bodyData:(e=r.default,e.map((function(e){return{sectionHeader:{key:(t=e).key,id:"section-".concat(t.key),title:t.title},rows:t.childItems.map((function(e,t){return function(e,t){return{key:e.key,isStriped:t%2!=0,cells:(n=e.cells,n.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)})))};var n}(e,t)}))};var t})))});var e};t.Z=o},87336:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{title:"Section 0",key:"unique-key-0",childItems:[{key:"unique-0-0",cells:[{key:"unique-0-0-0",title:"Mercedes"},{key:"unique-0-0-1",title:"Spoon"},{key:"unique-0-0-2",title:"Chips"}]},{key:"unique-0-1",cells:[{key:"unique-0-1-0",title:"Audi"},{key:"unique-0-1-1",title:"Forks"},{key:"unique-0-1-2",title:"Cake"}]},{key:"unique-0-2",cells:[{key:"unique-0-2-0",title:"Toyota"},{key:"unique-0-2-1",title:"Bowl"},{key:"unique-0-2-2",title:"Ice Cream"}]}]},{title:"Section 1",key:"unique-key-1",childItems:[{key:"unique-1-0",cells:[{key:"unique-1-0-0",title:"BMW"},{key:"unique-1-0-1",title:"Plate"},{key:"unique-1-0-2",title:"Pizza"}]},{key:"unique-1-1",cells:[{key:"unique-1-1-0",title:"Honda"},{key:"unique-1-1-1",title:"Knife"},{key:"unique-1-1-2",title:"Burger"}]},{key:"unique-1-2",cells:[{key:"unique-1-2-0",title:"Renault"},{key:"unique-1-2-1",title:"Pot"},{key:"unique-1-2-2",title:"Noodles"}]}]}];t.default=n},5893:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Dave Smith"},{key:"unique-0-1",title:"123 Adams Drive"},{key:"unique-0-2",title:"123-456-7890"},{key:"unique-0-3",title:"dave.smith@gmail.com"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Michael Smith"},{key:"unique-1-1",title:"345 Raymond Road"},{key:"unique-1-2",title:"111-222-3333"},{key:"unique-1-3",title:"michael.smith@gmail.com"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Jack Smith"},{key:"unique-2-1",title:"567 Drive Street"},{key:"unique-2-2",title:"222-333-4444"},{key:"unique-2-3",title:"jack.smith@gmail.com"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Tom Smith"},{key:"unique-3-1",title:"789 Bay Road"},{key:"unique-3-2",title:"555-666-7777"},{key:"unique-3-3",title:"tom.smith@gmail.com"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Paul Smith"},{key:"unique-4-1",title:"123 Adams Drive"},{key:"unique-4-2",title:"777-888-9999"},{key:"unique-4-3",title:"paul.smith@gmail.com"}]}];t.default=n},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(67294)),a=r(n(21969));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var c=o;t.default=c},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);