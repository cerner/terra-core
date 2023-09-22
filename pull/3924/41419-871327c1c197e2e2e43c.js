"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[41419],{41419:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r=n(67294),a=n(81254),o=n(39651),l=n(67682),i=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={};function d(e){var t=e.components,n=s(e,i);return(0,a.mdx)("wrapper",p({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport Button from 'terra-button';\nimport ControlledProgressivePaginator from 'terra-paginator/lib/ControlledProgressivePaginator';\nimport classNames from 'classnames/bind';\nimport styles from './ControlledPaginatorCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst totalCount = 450;\n\nconst buildPage = () => {\n  const fullContent = [<p>This example used to  separating content into discrete pages.</p>,\n    <p>selectedPage must be managed through the state of a parent component, and passed into this paginator through props.</p>];\n\n  return (\n    fullContent\n  );\n};\n\nclass ProgressivePaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1 id=\"controlled_progressive_paginator_header_id\">\n              Controlled Progressive Paginator Example\n            </h1>\n)}\n          footer={<ControlledProgressivePaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={totalCount} itemCountPerPage={10} ariaLabelledBy=\"controlled_paginator_header_id\" />}\n        >\n          <div>\n            <Button text=\"Set Page to 9\" onClick={() => { this.setState({ currentPage: 9 }); }} />\n            <Button text=\"Set Page to 15\" onClick={() => { this.setState({ currentPage: 15 }); }} />\n            <Button text=\"Set Page to 45\" onClick={() => { this.setState({ currentPage: 45 }); }} />\n          </div>\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default ProgressivePaginatorExample;\n\n")))}d.isMDXComponent=!0;var m=n(49271),c=n(84807),g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Controlled Progressive Paginator Example",description:n,example:r.createElement(l.Z,null),exampleCssSrc:r.createElement(c.Z,null),exampleSrc:r.createElement(d,null),isExpanded:a})},f=n(11057),x=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={};function P(e){var t=e.components,n=b(e,x);return(0,a.mdx)("wrapper",y({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Dialog from 'terra-dialog';\nimport Button from 'terra-button';\nimport ControlledProgressivePaginator from 'terra-paginator/lib/ControlledProgressivePaginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst buildPage = () => {\n  const fullContent = [<p>This example used to  separating content into discrete pages.</p>,\n    <p>selectedPage must be managed through the state of a parent component, and passed into this paginator through props.</p>];\n\n  return (\n    fullContent\n  );\n};\n\nconst ControlledInfiniteProgressivePaginatorExample = () => {\n  const [content] = useState(buildPage());\n  const [currentPage, setCurrentPage] = useState(1);\n\n  const changePages = (index) => {\n    setCurrentPage(index);\n  };\n\n  return (\n    <div className={cx('paginator-wrapper')}>\n      <Dialog\n        header={(\n          <h1>\n            Controlled Progressive Paginator Without Total Count Example\n          </h1>\n        )}\n        footer={<ControlledProgressivePaginator onPageChange={changePages} selectedPage={currentPage} ariaLabel=\"controlled progressive paginator no total count pagination\" />}\n      >\n        <div>\n          <Button text=\"Set Page to 9\" onClick={() => { setCurrentPage(9); }} />\n          <Button text=\"Set Page to 15\" onClick={() => { setCurrentPage(15); }} />\n          <Button text=\"Set Page to 45\" onClick={() => { setCurrentPage(45); }} />\n        </div>\n        {content}\n      </Dialog>\n    </div>\n  );\n};\n\nexport default ControlledInfiniteProgressivePaginatorExample;\n\n")))}P.isMDXComponent=!0;var v=n(14596),C=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Controlled Progressive Paginator Without Total Count Example",description:n,example:r.createElement(f.Z,null),exampleCssSrc:r.createElement(v.Z,null),exampleSrc:r.createElement(P,null),isExpanded:a})},O=n(78530),T=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var S={},E="wrapper";function N(e){var t=e.components,n=j(e,T);return(0,a.mdx)(E,w({},S,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(O.ZP,{mdxType:"PropsTable"},(0,a.mdx)(O.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(O.O,{mdxType:"PropNameCell"},"onPageChange"),(0,a.mdx)(O.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(O.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function to be executed when a navigation element is selected."))),(0,a.mdx)(O.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(O.O,{mdxType:"PropNameCell"},"selectedPage"),(0,a.mdx)(O.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,a.mdx)(O.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The active/selected page."))),(0,a.mdx)(O.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(O.O,{mdxType:"PropNameCell"},"totalCount"),(0,a.mdx)(O.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,a.mdx)(O.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Total number of all items being paginated."))),(0,a.mdx)(O.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(O.O,{mdxType:"PropNameCell"},"itemCountPerPage"),(0,a.mdx)(O.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,a.mdx)(O.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Total number of items per page."))),(0,a.mdx)(O.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(O.O,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,a.mdx)(O.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(O.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Allows user to set the heading id of the page."))),(0,a.mdx)(O.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(O.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,a.mdx)(O.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(O.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Allows user to set the custom paginator label."))),(0,a.mdx)(O.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(O.O,{mdxType:"PropNameCell"},"pageLabel"),(0,a.mdx)(O.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(O.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Allows user to set custom page label. ",(0,a.mdx)("em",{parentName:"p"},"(usage note: User must pass translated text)"),"."))),(0,a.mdx)(O.X2,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(O.O,{mdxType:"PropNameCell"},"hidePageCount"),(0,a.mdx)(O.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(O.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(O.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(O.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nWhen specified allows user to set custom page count. User should provide custom page count as part ",(0,a.mdx)("inlineCode",{parentName:"p"},"pageLabel")," for best accessibility practices.\n",(0,a.mdx)("em",{parentName:"p"},"(usage note: when ",(0,a.mdx)("inlineCode",{parentName:"em"},"pageLabel")," is not provided page count will not be hidden and default page count is displayed for best accessibility practices)"),".")))))}N.isMDXComponent=!0;var R=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _={},W="wrapper";function M(e){var t=e.components,n=k(e,R);return(0,a.mdx)(W,D({},_,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-controlled-progressive-paginator"},"Terra Controlled Progressive Paginator"),(0,a.mdx)("p",null,"Controlled version of the ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-core/components/terra-paginator/paginator/progressive-paginator"},"Progressive Paginator")," for when the pagination state needs to be managed by a parent component. To use this component, the selectedPage must be managed through the state of a parent component, and passed into this paginator through props."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ControlledProgressivePaginator from 'terra-paginator/lib/ControlledProgressivePaginator';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(g,{mdxType:"ControlledProgressivePaginatorExample"}),(0,a.mdx)(C,{mdxType:"ControlledProgressivePaginatorWithoutTotalCountExample"}),(0,a.mdx)("h2",{id:"controlled-progressive-paginator-props"},"Controlled Progressive Paginator Props"),(0,a.mdx)(N,{mdxType:"ControlledProgressivePaginatorPropsTable"}))}M.isMDXComponent=!0},84807:function(e,t,n){n.d(t,{Z:function(){return s}});n(67294);var r=n(81254),a=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={},p="wrapper";function s(e){var t=e.components,n=l(e,a);return(0,r.mdx)(p,o({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .paginator-wrapper {\n    height: 500px;\n  }\n}\n\n")))}s.isMDXComponent=!0},67682:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=u(n(67294)),o=u(n(15192)),l=u(n(43868)),i=u(n(46834)),p=u(n(47166)),s=u(n(83277));function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(o=a.key,l=void 0,l=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===r(l)?l:String(l)),a)}var o,l}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}(this,n)}}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var x=p.default.bind(s.default),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(s,e);var t,n,r,p=c(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=p.call(this,e)).state={content:[a.default.createElement("p",null,"This example used to  separating content into discrete pages."),a.default.createElement("p",null,"selectedPage must be managed through the state of a parent component, and passed into this paginator through props.")],currentPage:1},t.changePages=t.changePages.bind(g(t)),t}return t=s,(n=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){var e=this;return a.default.createElement("div",{className:x("paginator-wrapper")},a.default.createElement(o.default,{header:a.default.createElement("h1",{id:"controlled_progressive_paginator_header_id"},"Controlled Progressive Paginator Example"),footer:a.default.createElement(i.default,{onPageChange:this.changePages,selectedPage:this.state.currentPage,totalCount:450,itemCountPerPage:10,ariaLabelledBy:"controlled_paginator_header_id"})},a.default.createElement("div",null,a.default.createElement(l.default,{text:"Set Page to 9",onClick:function(){e.setState({currentPage:9})}}),a.default.createElement(l.default,{text:"Set Page to 15",onClick:function(){e.setState({currentPage:15})}}),a.default.createElement(l.default,{text:"Set Page to 45",onClick:function(){e.setState({currentPage:45})}})),this.state.content))}}])&&d(t.prototype,n),r&&d(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(a.default.Component);t.Z=y},11057:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=u(n(15192)),l=u(n(43868)),i=u(n(46834)),p=u(n(47166)),s=u(n(11926));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],p=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;p=!1}else for(;!(p=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);p=!0);}catch(e){s=!0,a=e}finally{try{if(!p&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=p.default.bind(s.default),f=function(){var e=m((0,a.useState)([a.default.createElement("p",null,"This example used to  separating content into discrete pages."),a.default.createElement("p",null,"selectedPage must be managed through the state of a parent component, and passed into this paginator through props.")]),1)[0],t=m((0,a.useState)(1),2),n=t[0],r=t[1];return a.default.createElement("div",{className:g("paginator-wrapper")},a.default.createElement(o.default,{header:a.default.createElement("h1",null,"Controlled Progressive Paginator Without Total Count Example"),footer:a.default.createElement(i.default,{onPageChange:function(e){r(e)},selectedPage:n,ariaLabel:"controlled progressive paginator no total count pagination"})},a.default.createElement("div",null,a.default.createElement(l.default,{text:"Set Page to 9",onClick:function(){r(9)}}),a.default.createElement(l.default,{text:"Set Page to 15",onClick:function(){r(15)}}),a.default.createElement(l.default,{text:"Set Page to 45",onClick:function(){r(45)}})),e))};t.Z=f},83277:function(e,t,n){n.r(t),t.default={"paginator-wrapper":"ControlledPaginatorCommon-module__paginator-wrapper___BBRgw"}}}]);