"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[26162],{49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(l,r,i):l[r]=e[r]}l.default=e,n&&n.set(e,l);return l}(n(67294)),i=l(n(45697)),c=l(n(47166)),s=n(21538),u=l(n(13810)),d=l(n(40931)),m=n(51051),p=l(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var g=c.default.bind(p.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},w=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,i=e.description,c=e.isExpanded,p=(0,r.useState)(c),f=(0,o.default)(p,2),y=f[0],b=f[1],k=(0,r.useState)(!1),x=(0,o.default)(k,2),v=x[0],_=x[1],T=r.default.useContext(s.ThemeContext),D=void 0!==l,S=function(){_(!v),y&&b(!y)},E=function(){b(!y),v&&_(!v)},O=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:g("template",T.className)},r.default.createElement("div",{className:g("header")},a&&r.default.createElement("h2",{className:g("title")},a)),r.default.createElement("div",{className:g("content")},i&&r.default.createElement("div",{className:g("description")},i),t),r.default.createElement("div",{className:g("footer")},n?r.default.createElement("div",{className:g("button-container")},D&&r.default.createElement("button",{type:"button",className:g("css-toggle","item",{"is-selected":v}),onClick:S,onKeyDown:function(e){return O(e,S)},onBlur:h,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:g("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(d.default,{className:g("chevron")})),r.default.createElement("button",{type:"button",className:g("code-toggle","item",{"is-selected":y}),onClick:E,onKeyDown:function(e){return O(e,E)},onBlur:h,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:g("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(d.default,{className:g("chevron")}))):null,r.default.createElement("div",null,v&&r.default.createElement("div",{className:g("css")},l),y&&r.default.createElement("div",{className:g("code")},n))))};b.propTypes=y,b.defaultProps={isExpanded:!1};var k=b;t.Z=k},26162:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var l=n(67294),a=n(81254),o=n(28857),r=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function u(e){var t=e.components,n=c(e,r);return(0,a.mdx)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, {\n  useState,\n} from 'react';\nimport Table from 'terra-table';\nimport mockData from './mock-data/mock-select';\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst SingleSelectTable = () => {\n  const [selectedKey, setSelectedKey] = useState([]);\n\n  const handleRowToggle = (event, metaData) => {\n    event.preventDefault();\n    if (selectedKey !== metaData.key) {\n      setSelectedKey(metaData.key);\n    }\n  };\n\n  const createRow = rowData => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n      toggleAction: {\n        metaData: { key: rowData.key },\n        onToggle: handleRowToggle,\n        isToggled: selectedKey === rowData.key,\n        toggleLabel: rowData.toggleText,\n      },\n    }\n  );\n\n  const createRows = data => data.map(childItem => createRow(childItem));\n\n  return (\n    <Table\n      summaryId=\"example-single-select\"\n      summary=\"This table shows an implementation of single row selection.\"\n      numberOfColumns={4}\n      cellPaddingStyle=\"standard\"\n      rowStyle=\"toggle\"\n      dividerStyle=\"horizontal\"\n      headerData={{\n        selectAllColumn: {\n          checkLabel: 'Single Selection',\n        },\n        cells: [\n          { key: 'cell-0', id: 'toggle-0', children: 'Name' },\n          { key: 'cell-1', id: 'toggle-1', children: 'Address' },\n          { key: 'cell-2', id: 'toggle-2', children: 'Phone Number' },\n          { key: 'cell-3', id: 'toggle-3', children: 'Email Id' },\n        ],\n      }}\n      bodyData={[\n        {\n          rows: createRows(mockData),\n        },\n      ]}\n    />\n  );\n};\n\nexport default SingleSelectTable;\n\n")))}u.isMDXComponent=!0;var d=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(d.Z,{title:t||"Single Select Table",description:n,example:l.createElement(o.Z,null),exampleSrc:l.createElement(u,null),isExpanded:a})},p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y={},h="wrapper";function w(e){var t=e.components,n=g(e,p);return(0,a.mdx)(h,f({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"terra-table---implementing-a-single-select-table"},"Terra Table - Implementing a Single Select Table"),(0,a.mdx)("p",null,"The terra-table implementation requires controlled state if selections are required. As a result selections are applied at child row generation from the consuming component's state. The following guide will show you how to implement that state within a single row selection variant of table."),(0,a.mdx)("h2",{id:"state-management"},"State Management"),(0,a.mdx)("p",null,"This guide will show you how to implement row selection state within a single row selection variant of table. To enable row selection, terra-table requires selection state to be managed by the consuming component. As a result selections from the consuming components state are applied at generation of the table rows."),(0,a.mdx)("p",null," First defaulting our state to a null value with the useState hook."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const [selectedKey, setSelectedKey] = useState([]);\n")),(0,a.mdx)("p",null,'Next creating an event handler callback method to pass to the table row\'s "onToggle" prop. The "onToggle" will return the metaData prop passed it each row.'),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"+  const handleRowToggle = (event, metaData) => {\n\n+  };\n")),(0,a.mdx)("p",null,"As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"  const handleRowToggle = (event, metaData) => {\n+   event.preventDefault();\n  };\n")),(0,a.mdx)("p",null,"Compare the new key to the current key in state and if they aren't the same, set the new key in state. Single select tables normally don't allow deselection, so neither will this example. If deselection is desired adjust this method to toggle selection."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"  const handleRowToggle = (event, metaData) => {\n    event.preventDefault();\n+   if (selectedKey !== metaData.key) {\n+     setSelectedKey(metaData.key);\n+   }\n  };\n")),(0,a.mdx)("p",null,"Setting state will trigger another render. In the render method we need to generate our table rows with the updated isToggle and onToggle props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The table renders flat, so keys need to be unique even if they are placed within sections.\n",(0,a.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/lists-and-keys.html"},"React List & Key Documentation")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"+  const createRow = rowData => (\n+    {\n+      key: rowData.key,\n+      cells: createCellsForRow(rowData.cells),\n+    }\n+  );\n")),(0,a.mdx)("p",null,'Next we need to set up our metaData object with our key value, and attach the "onToggle" to our handler.'),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"  const createRow = rowData => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n+     toggleAction: {\n+       metaData: { key: rowData.key },\n+       onToggle: handleRowToggle,\n+     }\n    }\n  );\n")),(0,a.mdx)("p",null,"Next we need to check if the item matches the selectedKey in state."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"  const createRow = (rowData) => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n      toggleAction: {\n        metaData: { key: rowData.key },\n        onToggle: handleRowToggle,\n+       isToggled: selectedKeys.indexOf(rowData.key) >= 0,\n+       toggleLabel: rowData.toggleText,\n      }\n    }\n  };\n")),(0,a.mdx)("p",null,"We can then implement the unpack of our data into our row cells."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+ const createCellsForRow = cells => cells.map(cell => createCell(cell));\n")),(0,a.mdx)("p",null,"Finally we can implement a method to loop through our data and create the table with our methods and call it from our render method."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"+ const createRows = data => data.map(childItem => createRow(childItem));\n\n...\n  return (\n+   <Table\n+     summaryId=\"example-single-select\"\n+     summary=\"This table shows an implementation of single row selection.\"\n+     numberOfColumns={4}\n+     cellPaddingStyle=\"standard\"\n+     rowStyle=\"toggle\"\n+     headerData={{\n+       selectAllColumn: {\n+         checkLabel: 'Single Selection',\n+       },\n+       cells: [\n+         { key: 'cell-0', id: 'toggle-0', children: 'Name' },\n+         { key: 'cell-1', id: 'toggle-1', children: 'Address' },\n+         { key: 'cell-2', id: 'toggle-2', children: 'Phone Number' },\n+         { key: 'cell-3', id: 'toggle-3', children: 'Email Id' },\n+       ],\n+     }}\n+     bodyData={[\n+       {\n+         rows: createRows(mockData),\n+       },\n+     ]}\n+   </Table>\n  );\n")),(0,a.mdx)("p",null,"Using these steps we get the following example:"),(0,a.mdx)(m,{mdxType:"SingleSelectTable"}))}w.isMDXComponent=!0},28857:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}t.Z=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=i(n(12810)),r=i(n(5893));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,o,r,i=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(l=o.call(n)).done)&&(i.push(l.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}t.Z=function(){var e,t=s((0,a.useState)([]),2),n=t[0],l=t[1],i=function(e,t){e.preventDefault(),n!==t.key&&l(t.key)};return a.default.createElement(o.default,{summaryId:"example-single-select",summary:"This table shows an implementation of single row selection.",numberOfColumns:4,cellPaddingStyle:"standard",rowStyle:"toggle",dividerStyle:"horizontal",headerData:{selectAllColumn:{checkLabel:"Single Selection"},cells:[{key:"cell-0",id:"toggle-0",children:"Name"},{key:"cell-1",id:"toggle-1",children:"Address"},{key:"cell-2",id:"toggle-2",children:"Phone Number"},{key:"cell-3",id:"toggle-3",children:"Email Id"}]},bodyData:[{rows:(e=r.default,e.map((function(e){return{key:(t=e).key,cells:(l=t.cells,l.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)}))),toggleAction:{metaData:{key:t.key},onToggle:i,isToggled:n===t.key,toggleLabel:t.toggleText}};var t,l})))}]})}},5893:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Dave Smith"},{key:"unique-0-1",title:"123 Adams Drive"},{key:"unique-0-2",title:"123-456-7890"},{key:"unique-0-3",title:"dave.smith@gmail.com"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Michael Smith"},{key:"unique-1-1",title:"345 Raymond Road"},{key:"unique-1-2",title:"111-222-3333"},{key:"unique-1-3",title:"michael.smith@gmail.com"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Jack Smith"},{key:"unique-2-1",title:"567 Drive Street"},{key:"unique-2-2",title:"222-333-4444"},{key:"unique-2-3",title:"jack.smith@gmail.com"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Tom Smith"},{key:"unique-3-1",title:"789 Bay Road"},{key:"unique-3-2",title:"555-666-7777"},{key:"unique-3-3",title:"tom.smith@gmail.com"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Paul Smith"},{key:"unique-4-1",title:"123 Adams Drive"},{key:"unique-4-2",title:"777-888-9999"},{key:"unique-4-3",title:"paul.smith@gmail.com"}]}]},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(67294)),a=o(n(21969));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}var i=function(e){var t=r({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);