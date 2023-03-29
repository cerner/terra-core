"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[15734],{15734:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(67294),a=n(81254),o=n(39651),i=n(15724),l=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={};function d(e){var t=e.components,n=s(e,l);return(0,a.mdx)("wrapper",u({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\nconst totalCount = 450;\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nclass ProgressivePaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\n              Page\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<ProgressivePaginator onPageChange={this.changePages} selectedPage={1} totalCount={totalCount} itemCountPerPage={10} />}\n        >\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default ProgressivePaginatorExample;\n\n")))}d.isMDXComponent=!0;var p=n(49271),m=n(14596),f=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Progressive Paginator Example",description:n,example:r.createElement(i.Z,null),exampleCssSrc:r.createElement(m.Z,null),exampleSrc:r.createElement(d,null),isExpanded:a})},g=n(62644),b=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function x(e){var t=e.components,n=h(e,b);return(0,a.mdx)("wrapper",y({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Dialog from 'terra-dialog';\nimport ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nconst InfiniteProgressivePaginatorExample = () => {\n  const [content] = useState(buildPage());\n  const [currentPage, setCurrentPage] = useState(1);\n\n  const changePages = (index) => {\n    setCurrentPage(index);\n  };\n\n  return (\n    <div className={cx('paginator-wrapper')}>\n      <Dialog\n        header={(\n          <h1>\n            Page\n            {currentPage}\n          </h1>\n          )}\n        footer={<ProgressivePaginator onPageChange={changePages} />}\n      >\n        {content}\n      </Dialog>\n    </div>\n  );\n};\n\nexport default InfiniteProgressivePaginatorExample;\n\n")))}x.isMDXComponent=!0;var P=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Progressive Paginator Without Total Count Example",description:n,example:r.createElement(g.Z,null),exampleCssSrc:r.createElement(m.Z,null),exampleSrc:r.createElement(x,null),isExpanded:a})},O=n(78530),C=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={},E="wrapper";function N(e){var t=e.components,n=T(e,C);return(0,a.mdx)(E,w({},j,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(O.ZP,{mdxType:"PropsTable"},(0,a.mdx)(O.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(O.O,{mdxType:"PropNameCell"},"onPageChange"),(0,a.mdx)(O.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(O.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function to be executed when a navigation element is selected."))),(0,a.mdx)(O.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(O.O,{mdxType:"PropNameCell"},"selectedPage"),(0,a.mdx)(O.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,a.mdx)(O.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The active/selected page."))),(0,a.mdx)(O.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(O.O,{mdxType:"PropNameCell"},"totalCount"),(0,a.mdx)(O.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,a.mdx)(O.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Total number of all items being paginated."))),(0,a.mdx)(O.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(O.O,{mdxType:"PropNameCell"},"itemCountPerPage"),(0,a.mdx)(O.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,a.mdx)(O.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Total number of items per page."))),(0,a.mdx)(O.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(O.O,{mdxType:"PropNameCell"},"pageLabel"),(0,a.mdx)(O.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(O.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Allows user to set custom page label. ",(0,a.mdx)("em",{parentName:"p"},"(usage note: User must pass translated text)"),".")))))}N.isMDXComponent=!0;var S=["components"];function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k={},R="wrapper";function _(e){var t=e.components,n=D(e,S);return(0,a.mdx)(R,M({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-progressive-paginator"},"Terra Progressive Paginator"),(0,a.mdx)("p",null,"Paginator to be used for ordered data where the size of the data is known. Provides first, last, previous, next, and paged functionality."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(f,{mdxType:"ProgressivePaginatorExample"}),(0,a.mdx)(P,{mdxType:"ProgressivePaginatorWithoutTotalCountExample"}),(0,a.mdx)("h2",{id:"progressive-paginator-props"},"Progressive Paginator Props"),(0,a.mdx)(N,{mdxType:"ProgressivePaginatorPropsTable"}))}_.isMDXComponent=!0},15724:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=s(n(67294)),o=s(n(15192)),i=s(n(10933)),l=s(n(47166)),u=s(n(11926));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(o=a.key,i=void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===r(i)?i:String(i)),a)}var o,i}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var g=l.default.bind(u.default),b=function(){return function(e,t){for(var n=[],r=0;r<t;r+=1)n.push(a.default.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,n,r,l=p(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=l.call(this,e)).state={content:b(),currentPage:1},t.changePages=t.changePages.bind(m(t)),t}return t=u,(n=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){return a.default.createElement("div",{className:g("paginator-wrapper")},a.default.createElement(o.default,{header:a.default.createElement("h1",null,"Page",this.state.currentPage),footer:a.default.createElement(i.default,{onPageChange:this.changePages,selectedPage:1,totalCount:450,itemCountPerPage:10})},this.state.content))}}])&&c(t.prototype,n),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(a.default.Component);t.Z=y},62644:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=s(n(15192)),i=s(n(10933)),l=s(n(47166)),u=s(n(11926));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],u=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,a=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=l.default.bind(u.default),f=function(){return function(e,t){for(var n=[],r=0;r<t;r+=1)n.push(a.default.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},g=function(){var e=d((0,a.useState)(f()),1)[0],t=d((0,a.useState)(1),2),n=t[0],r=t[1];return a.default.createElement("div",{className:m("paginator-wrapper")},a.default.createElement(o.default,{header:a.default.createElement("h1",null,"Page",n),footer:a.default.createElement(i.default,{onPageChange:function(e){r(e)}})},e))};t.Z=g},60672:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if(n&&e)return{messageId:"Terra.paginator.pageCountWithLabel",messageAttributes:{pageLabel:e,pageNumber:t,pageNumberTotal:n}};if(n)return{messageId:"Terra.paginator.pageCount",messageAttributes:{pageNumber:t,pageNumberTotal:n}};if(e)return{messageId:"Terra.paginator.pageIndexWithLabel",messageAttributes:{pageLabel:e,pageNumber:t}};return{messageId:"Terra.paginator.pageIndex",messageAttributes:{pageNumber:t}}}},10933:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=y(n(67294)),o=y(n(45697)),i=y(n(47166)),l=y(n(50026)),u=n(25387),s=y(n(13266)),c=y(n(74754)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(51051)),p=y(n(80646)),m=n(86545),f=y(n(37980)),g=y(n(60672));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function y(e){return e&&e.__esModule?e:{default:e}}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(o=a.key,i=void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===r(i)?i:String(i)),a)}var o,i}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}(this,n)}}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var C=i.default.bind(p.default),w={onPageChange:o.default.func.isRequired,selectedPage:o.default.number,totalCount:o.default.number,itemCountPerPage:o.default.number,intl:o.default.shape({formatMessage:o.default.func}).isRequired,pageLabel:o.default.string},T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(i,e);var t,n,r,o=x(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var n=(t=o.call(this,e)).props.selectedPage;return t.state={selectedPage:n||1,showReducedPaginator:!1},t.handlePageChange=t.handlePageChange.bind(P(t)),t.defaultProgressivePaginator=t.defaultProgressivePaginator.bind(P(t)),t.reducedProgressivePaginator=t.reducedProgressivePaginator.bind(P(t)),t.setPaginator=t.setPaginator.bind(P(t)),t}return t=i,(n=[{key:"handlePageChange",value:function(e){var t=this;return function(n){n.nativeEvent.keyCode!==d.KEY_RETURN&&n.nativeEvent.keyCode!==d.KEY_SPACE||n.preventDefault(),t.props.onPageChange(e),t.setState({selectedPage:e})}}},{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"defaultProgressivePaginator",value:function(){var e=this.context,t=this.props,n=t.intl,r=t.totalCount,o=t.itemCountPerPage,i=t.pageLabel,l=r?(0,m.calculatePages)(r,o):0,u=this.state.selectedPage,s=1===u?1:u-1,c=u===l?l:u+1,d=(0,g.default)(i,u,l),p=d.messageId,b=d.messageAttributes;return a.default.createElement("div",{className:C("paginator","progressive",e.className),role:"navigation","aria-label":"pagination"},a.default.createElement("div",null,n.formatMessage({id:p},b)),a.default.createElement("div",null,r&&a.default.createElement(f.default,{ariaDisabled:1===u,ariaLabel:n.formatMessage({id:"Terra.paginator.first"}),className:C(["nav-link",1===u?"is-disabled":null]),disabled:1===u,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},n.formatMessage({id:"Terra.paginator.first"})),a.default.createElement(f.default,{ariaDisabled:1===u,ariaLabel:n.formatMessage({id:"Terra.paginator.previous"}),className:C(["nav-link","previous",1===u?"is-disabled":null]),disabled:1===u,onClick:this.handlePageChange(s),onKeyDown:this.handlePageChange(s)},a.default.createElement("span",{className:C("icon")}),n.formatMessage({id:"Terra.paginator.previous"})),a.default.createElement(f.default,{ariaDisabled:u===l,ariaLabel:n.formatMessage({id:"Terra.paginator.next"}),className:C(["nav-link","next",u===l?"is-disabled":null]),disabled:u===l,onClick:this.handlePageChange(c),onKeyDown:this.handlePageChange(c)},n.formatMessage({id:"Terra.paginator.next"}),a.default.createElement("span",{className:C("icon")})),r&&a.default.createElement(f.default,{ariaDisabled:u===l,ariaLabel:n.formatMessage({id:"Terra.paginator.last"}),className:C(["nav-link",u===l?"is-disabled":null]),disabled:u===l,onClick:this.handlePageChange(l),onKeyDown:this.handlePageChange(l)},n.formatMessage({id:"Terra.paginator.last"}))))}},{key:"reducedProgressivePaginator",value:function(){var e=this.context,t=this.props,n=t.intl,r=t.totalCount,o=t.itemCountPerPage,i=t.pageLabel,l=r?(0,m.calculatePages)(r,o):0,u=this.state.selectedPage,s=1===u?1:u-1,d=u===l?l:u+1,p=(0,g.default)(i,u,l),b=p.messageId,y=p.messageAttributes;return a.default.createElement("div",{className:C("paginator",e.className),role:"navigation","aria-label":"pagination"},a.default.createElement("div",null,r&&a.default.createElement(f.default,{ariaDisabled:1===u,ariaLabel:n.formatMessage({id:"Terra.paginator.first"}),className:C(["nav-link",1===u?"is-disabled":null]),disabled:1===u,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},n.formatMessage({id:"Terra.paginator.first"})),a.default.createElement(f.default,{ariaDisabled:1===u,ariaLabel:n.formatMessage({id:"Terra.paginator.previous"}),className:C(["nav-link","previous","icon-only",1===u?"is-disabled":null]),disabled:1===u,onClick:this.handlePageChange(s),onKeyDown:this.handlePageChange(s)},a.default.createElement(c.default,{text:n.formatMessage({id:"Terra.paginator.previous"})}),a.default.createElement("span",{className:C("icon")}))),a.default.createElement("div",null,n.formatMessage({id:b},y)),a.default.createElement("div",null,a.default.createElement(f.default,{ariaDisabled:u===l,ariaLabel:n.formatMessage({id:"Terra.paginator.next"}),className:C(["nav-link","next","icon-only",u===l?"is-disabled":null]),disabled:u===l,onClick:this.handlePageChange(d),onKeyDown:this.handlePageChange(d)},a.default.createElement(c.default,{text:n.formatMessage({id:"Terra.paginator.next"})}),a.default.createElement("span",{className:C("icon")})),r&&a.default.createElement(f.default,{ariaDisabled:u===l,ariaLabel:n.formatMessage({id:"Terra.paginator.last"}),className:C(["nav-link",u===l?"is-disabled":null]),disabled:u===l,onClick:this.handlePageChange(l),onKeyDown:this.handlePageChange(l)},n.formatMessage({id:"Terra.paginator.last"}))))}},{key:"render",value:function(){return a.default.createElement(s.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedProgressivePaginator():this.defaultProgressivePaginator())}}])&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(a.default.Component);T.propTypes=w,T.contextType=l.default;var j=(0,u.injectIntl)(T);t.default=j}}]);