"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[41419],{41419:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(67294),r=n(81254),o=n(39651),l=n(67682),i=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={};function c(e){var t=e.components,n=u(e,i);return(0,r.mdx)("wrapper",s({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport Button from 'terra-button';\nimport ControlledProgressivePaginator from 'terra-paginator/lib/ControlledProgressivePaginator';\nimport classNames from 'classnames/bind';\nimport styles from './ControlledPaginatorCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst totalCount = 450;\n\nconst buildPage = () => {\n  const fullContent = [<p>This example used to  separating content into discrete pages.</p>,\n    <p>selectedPage must be managed through the state of a parent component, and passed into this paginator through props.</p>];\n\n  return (\n    fullContent\n  );\n};\n\nclass ProgressivePaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1 id=\"controlled_progressive_paginator_header_id\">\n              Page\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<ControlledProgressivePaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={totalCount} itemCountPerPage={10} ariaLabelledBy=\"controlled_paginator_header_id\" />}\n        >\n          <div>\n            <Button text=\"Set Page to 9\" onClick={() => { this.setState({ currentPage: 9 }); }} />\n            <Button text=\"Set Page to 15\" onClick={() => { this.setState({ currentPage: 15 }); }} />\n            <Button text=\"Set Page to 45\" onClick={() => { this.setState({ currentPage: 45 }); }} />\n          </div>\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default ProgressivePaginatorExample;\n\n")))}c.isMDXComponent=!0;var p=n(49271),m=n(84807),f=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(p.Z,{title:t||"Controlled Progressive Paginator Example",description:n,example:a.createElement(l.Z,null),exampleCssSrc:a.createElement(m.Z,null),exampleSrc:a.createElement(c,null),isExpanded:r})},g=n(11057),y=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var x={};function P(e){var t=e.components,n=h(e,y);return(0,r.mdx)("wrapper",b({},x,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Dialog from 'terra-dialog';\nimport Button from 'terra-button';\nimport ControlledProgressivePaginator from 'terra-paginator/lib/ControlledProgressivePaginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst buildPage = () => {\n  const fullContent = [<p>This example used to  separating content into discrete pages.</p>,\n    <p>selectedPage must be managed through the state of a parent component, and passed into this paginator through props.</p>];\n\n  return (\n    fullContent\n  );\n};\n\nconst ControlledInfiniteProgressivePaginatorExample = () => {\n  const [content] = useState(buildPage());\n  const [currentPage, setCurrentPage] = useState(1);\n\n  const changePages = (index) => {\n    setCurrentPage(index);\n  };\n\n  return (\n    <div className={cx('paginator-wrapper')}>\n      <Dialog\n        header={(\n          <h1>\n            Page\n            {currentPage}\n          </h1>\n        )}\n        footer={<ControlledProgressivePaginator onPageChange={changePages} selectedPage={currentPage} ariaLabel=\"controlled progressive paginator no total count pagination\" />}\n      >\n        <div>\n          <Button text=\"Set Page to 9\" onClick={() => { setCurrentPage(9); }} />\n          <Button text=\"Set Page to 15\" onClick={() => { setCurrentPage(15); }} />\n          <Button text=\"Set Page to 45\" onClick={() => { setCurrentPage(45); }} />\n        </div>\n        {content}\n      </Dialog>\n    </div>\n  );\n};\n\nexport default ControlledInfiniteProgressivePaginatorExample;\n\n")))}P.isMDXComponent=!0;var v=n(14596),C=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(p.Z,{title:t||"Controlled Progressive Paginator Without Total Count Example",description:n,example:a.createElement(g.Z,null),exampleCssSrc:a.createElement(v.Z,null),exampleSrc:a.createElement(P,null),isExpanded:r})},O=n(78530),T=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var j={},N="wrapper";function S(e){var t=e.components,n=w(e,T);return(0,r.mdx)(N,E({},j,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(O.ZP,{mdxType:"PropsTable"},(0,r.mdx)(O.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(O.O,{mdxType:"PropNameCell"},"onPageChange"),(0,r.mdx)(O.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(O.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Function to be executed when a navigation element is selected."))),(0,r.mdx)(O.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(O.O,{mdxType:"PropNameCell"},"selectedPage"),(0,r.mdx)(O.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(O.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The active/selected page."))),(0,r.mdx)(O.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(O.O,{mdxType:"PropNameCell"},"totalCount"),(0,r.mdx)(O.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(O.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Total number of all items being paginated."))),(0,r.mdx)(O.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(O.O,{mdxType:"PropNameCell"},"itemCountPerPage"),(0,r.mdx)(O.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(O.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Total number of items per page."))),(0,r.mdx)(O.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(O.O,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,r.mdx)(O.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(O.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Allows user to set the heading id of the page."))),(0,r.mdx)(O.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(O.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,r.mdx)(O.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(O.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Allows user to set the custom paginator label."))),(0,r.mdx)(O.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(O.O,{mdxType:"PropNameCell"},"pageLabel"),(0,r.mdx)(O.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(O.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Allows user to set custom page label. ",(0,r.mdx)("em",{parentName:"p"},"(usage note: User must pass translated text)"),".")))))}S.isMDXComponent=!0;var k=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},D.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _={},M="wrapper";function L(e){var t=e.components,n=R(e,k);return(0,r.mdx)(M,D({},_,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-controlled-progressive-paginator"},"Terra Controlled Progressive Paginator"),(0,r.mdx)("p",null,"Controlled version of the ",(0,r.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-core/components/terra-paginator/paginator/progressive-paginator"},"Progressive Paginator")," for when the pagination state needs to be managed by a parent component. To use this component, the selectedPage must be managed through the state of a parent component, and passed into this paginator through props."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ControlledProgressivePaginator from 'terra-paginator/lib/ControlledProgressivePaginator';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(f,{mdxType:"ControlledProgressivePaginatorExample"}),(0,r.mdx)(C,{mdxType:"ControlledProgressivePaginatorWithoutTotalCountExample"}),(0,r.mdx)("h2",{id:"controlled-progressive-paginator-props"},"Controlled Progressive Paginator Props"),(0,r.mdx)(S,{mdxType:"ControlledProgressivePaginatorPropsTable"}))}L.isMDXComponent=!0},84807:function(e,t,n){n.d(t,{Z:function(){return u}});n(67294);var a=n(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={},s="wrapper";function u(e){var t=e.components,n=l(e,r);return(0,a.mdx)(s,o({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .paginator-wrapper {\n    height: 500px;\n  }\n}\n\n")))}u.isMDXComponent=!0},67682:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var r=d(n(67294)),o=d(n(15192)),l=d(n(43868)),i=d(n(46834)),s=d(n(47166)),u=d(n(83277));function d(e){return e&&e.__esModule?e:{default:e}}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,l=void 0,l=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===a(l)?l:String(l)),r)}var o,l}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}(this,n)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var y=s.default.bind(u.default),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,n,a,s=m(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=s.call(this,e)).state={content:[r.default.createElement("p",null,"This example used to  separating content into discrete pages."),r.default.createElement("p",null,"selectedPage must be managed through the state of a parent component, and passed into this paginator through props.")],currentPage:1},t.changePages=t.changePages.bind(f(t)),t}return t=u,(n=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){var e=this;return r.default.createElement("div",{className:y("paginator-wrapper")},r.default.createElement(o.default,{header:r.default.createElement("h1",{id:"controlled_progressive_paginator_header_id"},"Page",this.state.currentPage),footer:r.default.createElement(i.default,{onPageChange:this.changePages,selectedPage:this.state.currentPage,totalCount:450,itemCountPerPage:10,ariaLabelledBy:"controlled_paginator_header_id"})},r.default.createElement("div",null,r.default.createElement(l.default,{text:"Set Page to 9",onClick:function(){e.setState({currentPage:9})}}),r.default.createElement(l.default,{text:"Set Page to 15",onClick:function(){e.setState({currentPage:15})}}),r.default.createElement(l.default,{text:"Set Page to 45",onClick:function(){e.setState({currentPage:45})}})),this.state.content))}}])&&c(t.prototype,n),a&&c(t,a),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.default.Component);t.Z=b},11057:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(67294)),o=d(n(15192)),l=d(n(43868)),i=d(n(46834)),s=d(n(47166)),u=d(n(11926));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o,l,i=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(a=o.call(n)).done)&&(i.push(a.value),i.length!==t);s=!0);}catch(e){u=!0,r=e}finally{try{if(!s&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var f=s.default.bind(u.default),g=function(){var e=p((0,r.useState)([r.default.createElement("p",null,"This example used to  separating content into discrete pages."),r.default.createElement("p",null,"selectedPage must be managed through the state of a parent component, and passed into this paginator through props.")]),1)[0],t=p((0,r.useState)(1),2),n=t[0],a=t[1];return r.default.createElement("div",{className:f("paginator-wrapper")},r.default.createElement(o.default,{header:r.default.createElement("h1",null,"Page",n),footer:r.default.createElement(i.default,{onPageChange:function(e){a(e)},selectedPage:n,ariaLabel:"controlled progressive paginator no total count pagination"})},r.default.createElement("div",null,r.default.createElement(l.default,{text:"Set Page to 9",onClick:function(){a(9)}}),r.default.createElement(l.default,{text:"Set Page to 15",onClick:function(){a(15)}}),r.default.createElement(l.default,{text:"Set Page to 45",onClick:function(){a(45)}})),e))};t.Z=g},46834:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=b(n(67294)),o=b(n(45697)),l=b(n(47166)),i=b(n(50026)),s=n(25387),u=b(n(13266)),d=b(n(74754)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(51051)),p=b(n(80646)),m=n(86545),f=b(n(37980)),g=b(n(60672));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}function b(e){return e&&e.__esModule?e:{default:e}}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,l=void 0,l=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===a(l)?l:String(l)),r)}var o,l}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(this,n)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var O=l.default.bind(p.default),T={onPageChange:o.default.func.isRequired,selectedPage:o.default.number.isRequired,totalCount:o.default.number,itemCountPerPage:o.default.number,ariaLabelledBy:o.default.string,ariaLabel:o.default.string,intl:o.default.shape({formatMessage:o.default.func}).isRequired,pageLabel:o.default.string},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(l,e);var t,n,a,o=P(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=o.call(this,e)).handlePageChange=t.handlePageChange.bind(v(t)),t.defaultProgressivePaginator=t.defaultProgressivePaginator.bind(v(t)),t.reducedProgressivePaginator=t.reducedProgressivePaginator.bind(v(t)),t.setPaginator=t.setPaginator.bind(v(t)),t.state={showReducedPaginator:!1},t}return t=l,(n=[{key:"handlePageChange",value:function(e){var t=this;return function(n){n.nativeEvent.keyCode!==c.KEY_RETURN&&n.nativeEvent.keyCode!==c.KEY_SPACE||n.preventDefault(),t.props.onPageChange(e)}}},{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"defaultProgressivePaginator",value:function(){var e=this.context,t=this.props,n=t.selectedPage,a=t.intl,o=t.totalCount,l=t.itemCountPerPage,i=t.ariaLabelledBy,s=t.ariaLabel,u=t.pageLabel,d=o?(0,m.calculatePages)(o,l):0,c=1===n?1:n-1,p=n===d?d:n+1,y=s||"pagination",b=(0,g.default)(u,n,d),h=b.messageId,x=b.messageAttributes,P=r.default.createElement(r.default.Fragment,null,r.default.createElement("div",null,a.formatMessage({id:h},x)),r.default.createElement("ul",{className:O("progressive-list")},o&&r.default.createElement("li",null,r.default.createElement(f.default,{ariaDisabled:1===n,ariaLabel:a.formatMessage({id:"Terra.paginator.first"}),className:O(["nav-link",1===n?"is-disabled":null]),disabled:1===n,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},a.formatMessage({id:"Terra.paginator.first"}))),r.default.createElement("li",null,r.default.createElement(f.default,{ariaDisabled:1===n,ariaLabel:a.formatMessage({id:"Terra.paginator.previous"}),className:O(["nav-link","previous",1===n?"is-disabled":null]),disabled:1===n,onClick:this.handlePageChange(c),onKeyDown:this.handlePageChange(c)},r.default.createElement("span",{className:O("icon")}),a.formatMessage({id:"Terra.paginator.previous"}))),r.default.createElement("li",null,r.default.createElement(f.default,{ariaDisabled:n===d,ariaLabel:a.formatMessage({id:"Terra.paginator.next"}),className:O(["nav-link","next",n===d?"is-disabled":null]),disabled:n===d,onClick:this.handlePageChange(p),onKeyDown:this.handlePageChange(p)},a.formatMessage({id:"Terra.paginator.next"}),r.default.createElement("span",{className:O("icon")}))),o&&r.default.createElement("li",null,r.default.createElement(f.default,{ariaDisabled:n===d,ariaLabel:a.formatMessage({id:"Terra.paginator.last"}),className:O(["nav-link",n===d?"is-disabled":null]),disabled:n===d,onClick:this.handlePageChange(d),onKeyDown:this.handlePageChange(d)},a.formatMessage({id:"Terra.paginator.last"})))));return i?r.default.createElement("nav",{className:O("paginator","progressive",e.className),"aria-labelledby":i},P):r.default.createElement("nav",{className:O("paginator","progressive",e.className),"aria-label":y},P)}},{key:"reducedProgressivePaginator",value:function(){var e=this.context,t=this.props,n=t.selectedPage,a=t.intl,o=t.totalCount,l=t.itemCountPerPage,i=t.ariaLabelledBy,s=t.ariaLabel,u=t.pageLabel,c=o?(0,m.calculatePages)(o,l):0,p=1===n?1:n-1,y=n===c?c:n+1,b=s||"pagination",h=(0,g.default)(u,n,c),x=h.messageId,P=h.messageAttributes,v=r.default.createElement(r.default.Fragment,null,r.default.createElement("div",null,a.formatMessage({id:x},P)),r.default.createElement("ul",{className:O("progressive-list")},o&&r.default.createElement("li",null,r.default.createElement(f.default,{ariaDisabled:1===n,ariaLabel:a.formatMessage({id:"Terra.paginator.first"}),className:O(["nav-link",1===n?"is-disabled":null]),disabled:1===n,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},a.formatMessage({id:"Terra.paginator.first"}))),r.default.createElement("li",null,r.default.createElement(f.default,{ariaDisabled:1===n,ariaLabel:a.formatMessage({id:"Terra.paginator.previous"}),className:O(["nav-link","previous","icon-only",1===n?"is-disabled":null]),disabled:1===n,onClick:this.handlePageChange(p),onKeyDown:this.handlePageChange(p)},r.default.createElement(d.default,{text:a.formatMessage({id:"Terra.paginator.previous"})}),r.default.createElement("span",{className:O("icon")}))),r.default.createElement("li",null,r.default.createElement(f.default,{ariaDisabled:n===c,ariaLabel:a.formatMessage({id:"Terra.paginator.next"}),className:O(["nav-link","next","icon-only",n===c?"is-disabled":null]),disabled:n===c,onClick:this.handlePageChange(y),onKeyDown:this.handlePageChange(y)},r.default.createElement(d.default,{text:a.formatMessage({id:"Terra.paginator.next"})}),r.default.createElement("span",{className:O("icon")}))),o&&r.default.createElement("li",null,r.default.createElement(f.default,{ariaDisabled:n===c,ariaLabel:a.formatMessage({id:"Terra.paginator.last"}),className:O(["nav-link",n===c?"is-disabled":null]),disabled:n===c,onClick:this.handlePageChange(c),onKeyDown:this.handlePageChange(c)},a.formatMessage({id:"Terra.paginator.last"})))));return i?r.default.createElement("nav",{className:O("paginator",e.className),"aria-labelledby":i},v):r.default.createElement("nav",{className:O("paginator",e.className),"aria-label":b},v)}},{key:"render",value:function(){return r.default.createElement(u.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedProgressivePaginator():this.defaultProgressivePaginator())}}])&&h(t.prototype,n),a&&h(t,a),Object.defineProperty(t,"prototype",{writable:!1}),l}(r.default.Component);E.propTypes=T,E.contextType=i.default;var w=(0,s.injectIntl)(E);t.default=w},60672:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if(n&&e)return{messageId:"Terra.paginator.pageCountWithLabel",messageAttributes:{pageLabel:e,pageNumber:t,pageNumberTotal:n}};if(n)return{messageId:"Terra.paginator.pageCount",messageAttributes:{pageNumber:t,pageNumberTotal:n}};if(e)return{messageId:"Terra.paginator.pageIndexWithLabel",messageAttributes:{pageLabel:e,pageNumber:t}};return{messageId:"Terra.paginator.pageIndex",messageAttributes:{pageNumber:t}}}},83277:function(e,t,n){n.r(t),t.default={"paginator-wrapper":"ControlledPaginatorCommon-module__paginator-wrapper___BBRgw"}}}]);