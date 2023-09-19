"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[3141],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),u=r(n(17422)),i=o.default.bind(u.default),d={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),u=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},o,u)};c.propTypes=d;var s=c;t.Z=s},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),u=r(n(45697)),i=r(n(47166)),d=n(21538),c=r(n(13810)),s=r(n(40931)),p=n(51051),f=r(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var g=i.default.bind(f.default),y={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,u=e.description,i=e.isExpanded,f=(0,o.useState)(i),m=(0,l.default)(f,2),y=m[0],v=m[1],_=(0,o.useState)(!1),x=(0,l.default)(_,2),P=x[0],O=x[1],E=o.default.useContext(d.ThemeContext),C=void 0!==r,j=function(){O(!P),y&&v(!y)},w=function(){v(!y),P&&O(!P)},T=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:g("template",E.className)},o.default.createElement("div",{className:g("header")},a&&o.default.createElement("h2",{className:g("title")},a)),o.default.createElement("div",{className:g("content")},u&&o.default.createElement("div",{className:g("description")},u),t),o.default.createElement("div",{className:g("footer")},n?o.default.createElement("div",{className:g("button-container")},C&&o.default.createElement("button",{type:"button",className:g("css-toggle","item",{"is-selected":P}),onClick:j,onKeyDown:function(e){return T(e,j)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:g("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:g("chevron")})),o.default.createElement("button",{type:"button",className:g("code-toggle","item",{"is-selected":y}),onClick:w,onKeyDown:function(e){return T(e,w)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:g("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:g("chevron")}))):null,o.default.createElement("div",null,P&&o.default.createElement("div",{className:g("css")},r),y&&o.default.createElement("div",{className:g("code")},n))))};v.propTypes=y,v.defaultProps={isExpanded:!1};var _=v;t.Z=_},78530:function(e,t,n){var r=n(64836),a=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return d.Row}}),t.ZP=t.Di=void 0;var l=p(n(67294)),o=r(n(45697)),u=r(n(47166)),i=n(21538),d=p(n(37515)),c=r(n(54931));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var f=u.default.bind(c.default),m={children:o.default.node},g={isRequired:o.default.bool},y=function(e){var t=e.children;return l.default.createElement(d.Cell,{className:f("bold")},t)};t.O=y,y.propTypes=m;var b=function(e){var t=e.children;return l.default.createElement(d.Cell,{className:f("code-block-override")},t)};t.Di=b,b.propTypes=m;var h=function(e){var t=e.isRequired;return l.default.createElement(d.Cell,{className:f([t?["required"]:[]])},t?"required":"optional")};t.dS=h,h.propTypes=g;var v=function(e){var t=e.children;return l.default.createElement(d.Cell,{className:f("code-block-override")},t)};t.mW=v,v.propTypes=m;var _=function(e){var t=e.children;return l.default.createElement(d.Cell,null,t)};t.Ex=_,_.propTypes=m;var x=function(e){var t=e.children,n=(0,l.useContext)(i.ThemeContext);return l.default.createElement(d.default,{paddingStyle:"compact",className:f("table",n.className)},l.default.createElement(d.Header,{className:f("header")},l.default.createElement(d.HeaderCell,null,"Prop"),l.default.createElement(d.HeaderCell,null,"Type"),l.default.createElement(d.HeaderCell,null,"Required"),l.default.createElement(d.HeaderCell,null,"Default"),l.default.createElement(d.HeaderCell,null,"Description")),l.default.createElement(d.Body,null,t))};x.propTypes=m;var P=x;t.ZP=P},3141:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(67294),a=n(81254),l=n(39651),o=n(40144),u=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={};function s(e){var t=e.components,n=d(e,u);return(0,a.mdx)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport Button from 'terra-button';\nimport ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';\nimport classNames from 'classnames/bind';\nimport styles from './ControlledPaginatorCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst totalCount = 450;\n\nconst buildPage = () => {\n  const fullContent = [<p>This example used to  separating content into discrete pages with page preview.</p>,\n    <p>selectedPage must be managed through the state of a parent component, and passed into this paginator through props.</p>];\n\n  return (\n    fullContent\n  );\n};\n\nclass PaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1 id=\"controlled_paginator_header_id\">\n              Controlled Paginator Example\n            </h1>\n)}\n          footer={<ControlledPaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={totalCount} itemCountPerPage={10} ariaLabelledBy=\"controlled_paginator_header_id\" />}\n        >\n          <div>\n            <Button text=\"Set Page to 9\" onClick={() => { this.setState({ currentPage: 9 }); }} />\n            <Button text=\"Set Page to 15\" onClick={() => { this.setState({ currentPage: 15 }); }} />\n            <Button text=\"Set Page to 45\" onClick={() => { this.setState({ currentPage: 45 }); }} />\n          </div>\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default PaginatorExample;\n\n")))}s.isMDXComponent=!0;var p=n(49271),f=n(84807),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Controlled Paginator Example",description:n,example:r.createElement(o.Z,null),exampleCssSrc:r.createElement(f.Z,null),exampleSrc:r.createElement(s,null),isExpanded:a})},g=n(36451),y=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function _(e){var t=e.components,n=h(e,y);return(0,a.mdx)("wrapper",b({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Dialog from 'terra-dialog';\nimport Button from 'terra-button';\nimport ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';\nimport classNames from 'classnames/bind';\nimport styles from './ControlledPaginatorCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst buildPage = () => {\n  const fullContent = [<p>This example used to  separating content into discrete pages without page preview.</p>,\n    <p>selectedPage must be managed through the state of a parent component, and passed into this paginator through props.</p>];\n\n  return (\n    fullContent\n  );\n};\n\nconst ControlledPaginatorExample = () => {\n  const content = buildPage();\n  const [currentPage, setCurrentPage] = useState(1);\n\n  const changePages = (index) => {\n    setCurrentPage(index);\n  };\n\n  return (\n    <div className={cx('paginator-wrapper')}>\n      <Dialog\n        header={(\n          <h1>\n            Controlled Paginator No Pages Example\n          </h1>\n        )}\n        footer={<ControlledPaginator onPageChange={changePages} selectedPage={currentPage} ariaLabel=\"controlled paginator no pages pagination\" />}\n      >\n        <div>\n          <Button text=\"Set Page to 9\" onClick={() => { setCurrentPage(9); }} />\n          <Button text=\"Set Page to 15\" onClick={() => { setCurrentPage(15); }} />\n          <Button text=\"Set Page to 45\" onClick={() => { setCurrentPage(45); }} />\n        </div>\n        {content}\n      </Dialog>\n    </div>\n  );\n};\n\nexport default ControlledPaginatorExample;\n\n")))}_.isMDXComponent=!0;var x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Controlled Paginator No Pages Example",description:n,example:r.createElement(g.Z,null),exampleCssSrc:r.createElement(f.Z,null),exampleSrc:r.createElement(_,null),isExpanded:a})},P=n(78530),O=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={},w="wrapper";function T(e){var t=e.components,n=C(e,O);return(0,a.mdx)(w,E({},j,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(P.ZP,{mdxType:"PropsTable"},(0,a.mdx)(P.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(P.O,{mdxType:"PropNameCell"},"onPageChange"),(0,a.mdx)(P.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(P.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function to be executed when a navigation element is selected."))),(0,a.mdx)(P.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(P.O,{mdxType:"PropNameCell"},"selectedPage"),(0,a.mdx)(P.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,a.mdx)(P.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The active/selected page. Used to set the default selected page or maintain selection across renders.\nRequired when using totalCount and itemCountPerPage."))),(0,a.mdx)(P.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(P.O,{mdxType:"PropNameCell"},"totalCount"),(0,a.mdx)(P.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,a.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Total number of all items being paginated.\nRequired when using itemCountPerPage and selectedPage."))),(0,a.mdx)(P.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(P.O,{mdxType:"PropNameCell"},"itemCountPerPage"),(0,a.mdx)(P.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,a.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Total number of items per page.\nRequired when using selectedPage and totalCount."))),(0,a.mdx)(P.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(P.O,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,a.mdx)(P.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Allows user to set the heading id of the page."))),(0,a.mdx)(P.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(P.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,a.mdx)(P.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Allows user to set the custom paginator label.")))))}T.isMDXComponent=!0;var S=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D={},M="wrapper";function R(e){var t=e.components,n=k(e,S);return(0,a.mdx)(M,N({},D,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-controlled-paginator"},"Terra Controlled Paginator"),(0,a.mdx)("p",null,"Controlled version of the ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-core/components/terra-paginator/paginator/paginator"},"Paginator")," for when the pagination state needs to be managed by a parent component. To use this component, the selectedPage must be managed through the state of a parent component, and passed into this paginator through props."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(m,{mdxType:"ControlledPaginatorExample"}),(0,a.mdx)(x,{mdxType:"ControlledPaginatorNoPagesExample"}),(0,a.mdx)("h2",{id:"controlled-paginator-props"},"Controlled Paginator Props"),(0,a.mdx)(T,{mdxType:"ControlledPaginatorPropsTable"}))}R.isMDXComponent=!0},84807:function(e,t,n){n.d(t,{Z:function(){return d}});n(67294);var r=n(81254),a=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={},i="wrapper";function d(e){var t=e.components,n=o(e,a);return(0,r.mdx)(i,l({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .paginator-wrapper {\n    height: 500px;\n  }\n}\n\n")))}d.isMDXComponent=!0},39651:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-paginator",name:"terra-paginator",version:"2.85.0",url:t})}},40144:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=c(n(67294)),l=c(n(15192)),o=c(n(43868)),u=c(n(84356)),i=c(n(47166)),d=c(n(83277));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(l=a.key,o=void 0,o=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(l,"string"),"symbol"===r(o)?o:String(o)),a)}var l,o}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=g(e);if(t){var l=g(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var y=i.default.bind(d.default),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(d,e);var t,n,r,i=f(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=i.call(this,e)).state={content:[a.default.createElement("p",null,"This example used to  separating content into discrete pages with page preview."),a.default.createElement("p",null,"selectedPage must be managed through the state of a parent component, and passed into this paginator through props.")],currentPage:1},t.changePages=t.changePages.bind(m(t)),t}return t=d,(n=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){var e=this;return a.default.createElement("div",{className:y("paginator-wrapper")},a.default.createElement(l.default,{header:a.default.createElement("h1",{id:"controlled_paginator_header_id"},"Controlled Paginator Example"),footer:a.default.createElement(u.default,{onPageChange:this.changePages,selectedPage:this.state.currentPage,totalCount:450,itemCountPerPage:10,ariaLabelledBy:"controlled_paginator_header_id"})},a.default.createElement("div",null,a.default.createElement(o.default,{text:"Set Page to 9",onClick:function(){e.setState({currentPage:9})}}),a.default.createElement(o.default,{text:"Set Page to 15",onClick:function(){e.setState({currentPage:15})}}),a.default.createElement(o.default,{text:"Set Page to 45",onClick:function(){e.setState({currentPage:45})}})),this.state.content))}}])&&s(t.prototype,n),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),d}(a.default.Component);t.Z=b},36451:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),l=c(n(15192)),o=c(n(43868)),u=c(n(84356)),i=c(n(47166)),d=c(n(83277));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,u=[],i=!0,d=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=l.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){d=!0,a=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw a}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=i.default.bind(d.default),g=function(){var e=[a.default.createElement("p",null,"This example used to  separating content into discrete pages without page preview."),a.default.createElement("p",null,"selectedPage must be managed through the state of a parent component, and passed into this paginator through props.")],t=p((0,a.useState)(1),2),n=t[0],r=t[1];return a.default.createElement("div",{className:m("paginator-wrapper")},a.default.createElement(l.default,{header:a.default.createElement("h1",null,"Controlled Paginator No Pages Example"),footer:a.default.createElement(u.default,{onPageChange:function(e){r(e)},selectedPage:n,ariaLabel:"controlled paginator no pages pagination"})},a.default.createElement("div",null,a.default.createElement(o.default,{text:"Set Page to 9",onClick:function(){r(9)}}),a.default.createElement(o.default,{text:"Set Page to 15",onClick:function(){r(15)}}),a.default.createElement(o.default,{text:"Set Page to 45",onClick:function(){r(45)}})),e))};t.Z=g},15192:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(67294)),a=f(n(45697)),l=f(n(94184)),o=f(n(47166)),u=f(n(50026)),i=f(n(43868)),d=f(n(20575)),c=n(25387),s=f(n(71786)),p=["children","footer","header","intl","onClose"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y=o.default.bind(s.default),b={children:a.default.node,footer:a.default.node.isRequired,header:a.default.node.isRequired,intl:a.default.shape({formatMessage:a.default.func}).isRequired,onClose:a.default.func},h=function(e){var t=e.children,n=e.footer,a=e.header,o=e.intl,c=e.onClose,s=g(e,p),f=r.default.useContext(u.default),b=(0,l.default)(y("dialog",f.className),s.className),h=c?r.default.createElement("div",{className:y("dialog-header-close")},r.default.createElement(i.default,{variant:"utility",text:o.formatMessage({id:"Terra.dialog.close"}),onClick:c,isIconOnly:!0,icon:r.default.createElement("span",{className:y("close-icon")})})):null,v=r.default.createElement("div",{className:y("dialog-header")},r.default.createElement("div",{className:y("dialog-header-title")},a),h);return r.default.createElement("div",m({},s,{className:b}),r.default.createElement(d.default,{fill:!0,header:v,footer:r.default.createElement("div",{className:y("dialog-footer")},n)},r.default.createElement("div",{className:y("dialog-body")},t)))};h.propTypes=b,h.defaultProps={onClose:null,children:null};var v=(0,c.injectIntl)(h);t.default=v},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(94184)),o=c(n(47166)),u=c(n(50026)),i=c(n(16749)),d=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=o.default.bind(i.default),m={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},g=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=p(e,d),i=r.default.useContext(u.default),c=(0,l.default)(f("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},i.className),o.className);return r.default.createElement("table",s({},o,{className:c}),t)};g.propTypes=m,g.defaultProps={disableStripes:!1,paddingStyle:"none"};var y=g;t.default=y},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},d=function(e){var t=e.children,n=u(e,l);return r.default.createElement("tbody",n,t)};d.propTypes=i,d.defaultProps={children:[]};var c=d;t.default=c},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},d=function(e){var t=e.children,n=u(e,l);return r.default.createElement("td",n,t)};d.propTypes=i,d.defaultProps={children:[]};var c=d;t.default=c},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(29805)),o=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},c=function(e){var t=e.children,n=i(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};c.propTypes=d,c.defaultProps={children:[]};var s=c;t.default=s},80876:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},d=function(e){var t=e.children,n=u(e,l);return r.default.createElement("th",n,t)};d.propTypes=i,d.defaultProps={children:[]};var c=d;t.default=c},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),l=d(n(47166)),o=d(n(16749)),u=d(n(29805)),i=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.default.bind(o.default),f={children:a.default.node},m=function(e){var t=e.children,n=s(e,i),a=p(["row"]);return r.default.createElement("tr",c({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),u.default.addScope(t,"row"))};m.propTypes=f,m.defaultProps={children:[]};var g=m;t.default=g},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(67294))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=d(n(32634)),a=d(n(80196)),l=d(n(70829)),o=d(n(8685)),u=d(n(19852)),i=d(n(80876));function d(e){return e&&e.__esModule?e:{default:e}}var c=r.default;t.default=c},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=u;t.default=i},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},83277:function(e,t,n){n.r(t),t.default={"paginator-wrapper":"ControlledPaginatorCommon-module__paginator-wrapper___BBRgw"}},71786:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Dialog-module__clinical-lowlight-theme___cQs9U","orion-fusion-theme":"Dialog-module__orion-fusion-theme___emCZS",dialog:"Dialog-module__dialog___SyjLe","dialog-header":"Dialog-module__dialog-header___4ySjM","dialog-header-title":"Dialog-module__dialog-header-title___zeC4C","dialog-header-close":"Dialog-module__dialog-header-close___bG7wc","close-icon":"Dialog-module__close-icon___9yTZx","dialog-body":"Dialog-module__dialog-body___c18KV","dialog-footer":"Dialog-module__dialog-footer___mLLqj"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);