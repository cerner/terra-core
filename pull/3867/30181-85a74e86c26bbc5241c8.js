"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[30181],{30181:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(67294),r=n(81254),o=n(39651),i=n(94914),l=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={};function d(e){var t=e.components,n=u(e,l);return(0,r.mdx)("wrapper",s({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport Paginator from 'terra-paginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst totalCount = 450;\n\nconst buildPage = () => {\n  const fullContent = [<p>Beyond general financial constraints, here are some goals to consider when developing your ambulatory approach:</p>,\n    <ul>\n      <li>Provide consumers with lower cost and convenient care options</li>\n      <li>Capture and engage existing patients while identifying and attracting new patients</li>\n      <li>Identify ways to facilitate referrals across the network, share information with in- and out-of-network care providers and manage care across the continuum</li>\n      <li>Implement and manage strategies to meet rapidly growing consumer demands around virtual health</li>\n      <li>Optimize for key service lines across the network to support care coordination and maximize revenue generation</li>\n      <li>Implement an outpatient electronic health record (EHR) that contributes to improved clinician efficiency and satisfaction</li>\n      <li>Manage practice operations while accounting for emerging payment models</li>\n    </ul>,\n  ];\n\n  return (\n    fullContent\n  );\n};\n\nclass PaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1 id=\"paginator_header_id\">\n              Page\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<Paginator onPageChange={this.changePages} selectedPage={1} totalCount={totalCount} itemCountPerPage={10} ariaLabelledBy=\"paginator_header_id\" />}\n        >\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default PaginatorExample;\n\n")))}d.isMDXComponent=!0;var p=n(49271),m=n(14596),f=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(p.Z,{title:t||"Paginator Example",description:n,example:a.createElement(i.Z,null),exampleCssSrc:a.createElement(m.Z,null),exampleSrc:a.createElement(d,null),isExpanded:r})},g=n(5366),h=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var x={};function P(e){var t=e.components,n=b(e,h);return(0,r.mdx)("wrapper",y({},x,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport Paginator from 'terra-paginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\nconst maxPages = 5;\n\nconst buildPage = () => {\n  const fullContent = [<p>A digital front door to support engagement and enable consumers to participate in their health outcomes.</p>,\n    <p>Enhanced communications and data flow to help the clinical care team provide high-quality care and facilitate increased clinician satisfaction and wellness, regardless of where care is provided</p>,\n    <p>Integration across ambulatory systems and venues – even virtual health – to help drive efficiencies within clinic workflows, leveraging data in- and out-of-network – no matter the source system</p>];\n\n  return (\n    fullContent\n  );\n};\n\nclass PaginatorNoPagesExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: <h2>Welcome!</h2>,\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(direction) {\n    const index = direction === 'Next' ? this.state.currentPage + 1 : this.state.currentPage - 1;\n\n    if (index >= maxPages) {\n      this.setState({ content: <h2>No more pages...</h2>, currentPage: maxPages });\n    } else if (index <= 1) {\n      this.setState({ content: <h2>Welcome!</h2>, currentPage: 1 });\n    } else {\n      this.setState({ content: buildPage(), currentPage: index });\n    }\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\n              Page\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<Paginator onPageChange={this.changePages} ariaLabel=\"paginator no pages pagination\" />}\n        >\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default PaginatorNoPagesExample;\n\n")))}P.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(p.Z,{title:t||"Paginator No Pages Example",description:n,example:a.createElement(g.Z,null),exampleCssSrc:a.createElement(m.Z,null),exampleSrc:a.createElement(P,null),isExpanded:r})},w=n(78530),C=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},O.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N={},T="wrapper";function j(e){var t=e.components,n=E(e,C);return(0,r.mdx)(T,O({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(w.ZP,{mdxType:"PropsTable"},(0,r.mdx)(w.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"onPageChange"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(w.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Function to be executed when a navigation element is selected."))),(0,r.mdx)(w.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"selectedPage"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The active/selected page. Used to set the default selected page or maintain selection across renders.\nRequired when using totalCount and itemCountPerPage."))),(0,r.mdx)(w.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"totalCount"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Total number of all items being paginated.\nRequired when using itemCountPerPage and selectedPage."))),(0,r.mdx)(w.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"itemCountPerPage"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Total number of items per page.\nRequired when using selectedPage and totalCount."))),(0,r.mdx)(w.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Allows user to set the heading id of the page."))),(0,r.mdx)(w.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(w.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,r.mdx)(w.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Allows user to set the custom paginator label.")))))}j.isMDXComponent=!0;var S=["components"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},k.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D={},_="wrapper";function M(e){var t=e.components,n=R(e,S);return(0,r.mdx)(_,k({},D,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-paginator"},"Terra Paginator"),(0,r.mdx)("p",null,"Standard paginator to be used for data sets of known and unknown size. Provides first, last, previous, next, and paged functionality."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Paginator from 'terra-paginator';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(f,{mdxType:"PaginatorExample"}),(0,r.mdx)(v,{title:"Paginator Example Without Pages",mdxType:"PaginatorNoPagesExample"}),(0,r.mdx)("h2",{id:"paginator-props"},"Paginator Props"),(0,r.mdx)(j,{mdxType:"PaginatorPropsTable"}))}M.isMDXComponent=!0},94914:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var r=u(n(67294)),o=u(n(15192)),i=u(n(6997)),l=u(n(47166)),s=u(n(11926));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,i=void 0,i=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===a(i)?i:String(i)),r)}var o,i}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var g=l.default.bind(s.default),h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(s,e);var t,n,a,l=p(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=l.call(this,e)).state={content:[r.default.createElement("p",null,"Beyond general financial constraints, here are some goals to consider when developing your ambulatory approach:"),r.default.createElement("ul",null,r.default.createElement("li",null,"Provide consumers with lower cost and convenient care options"),r.default.createElement("li",null,"Capture and engage existing patients while identifying and attracting new patients"),r.default.createElement("li",null,"Identify ways to facilitate referrals across the network, share information with in- and out-of-network care providers and manage care across the continuum"),r.default.createElement("li",null,"Implement and manage strategies to meet rapidly growing consumer demands around virtual health"),r.default.createElement("li",null,"Optimize for key service lines across the network to support care coordination and maximize revenue generation"),r.default.createElement("li",null,"Implement an outpatient electronic health record (EHR) that contributes to improved clinician efficiency and satisfaction"),r.default.createElement("li",null,"Manage practice operations while accounting for emerging payment models"))],currentPage:1},t.changePages=t.changePages.bind(m(t)),t}return t=s,(n=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){return r.default.createElement("div",{className:g("paginator-wrapper")},r.default.createElement(o.default,{header:r.default.createElement("h1",{id:"paginator_header_id"},"Page",this.state.currentPage),footer:r.default.createElement(i.default,{onPageChange:this.changePages,selectedPage:1,totalCount:450,itemCountPerPage:10,ariaLabelledBy:"paginator_header_id"})},this.state.content))}}])&&c(t.prototype,n),a&&c(t,a),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.default.Component);t.Z=h},5366:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var r=u(n(67294)),o=u(n(15192)),i=u(n(6997)),l=u(n(47166)),s=u(n(11926));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,i=void 0,i=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===a(i)?i:String(i)),r)}var o,i}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var g=l.default.bind(s.default),h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(s,e);var t,n,a,l=p(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=l.call(this,e)).state={content:r.default.createElement("h2",null,"Welcome!"),currentPage:1},t.changePages=t.changePages.bind(m(t)),t}return t=s,(n=[{key:"changePages",value:function(e){var t="Next"===e?this.state.currentPage+1:this.state.currentPage-1;t>=5?this.setState({content:r.default.createElement("h2",null,"No more pages..."),currentPage:5}):t<=1?this.setState({content:r.default.createElement("h2",null,"Welcome!"),currentPage:1}):this.setState({content:[r.default.createElement("p",null,"A digital front door to support engagement and enable consumers to participate in their health outcomes."),r.default.createElement("p",null,"Enhanced communications and data flow to help the clinical care team provide high-quality care and facilitate increased clinician satisfaction and wellness, regardless of where care is provided"),r.default.createElement("p",null,"Integration across ambulatory systems and venues – even virtual health – to help drive efficiencies within clinic workflows, leveraging data in- and out-of-network – no matter the source system")],currentPage:t})}},{key:"render",value:function(){return r.default.createElement("div",{className:g("paginator-wrapper")},r.default.createElement(o.default,{header:r.default.createElement("h1",null,"Page",this.state.currentPage),footer:r.default.createElement(i.default,{onPageChange:this.changePages,ariaLabel:"paginator no pages pagination"})},this.state.content))}}])&&c(t.prototype,n),a&&c(t,a),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.default.Component);t.Z=h},6997:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=h(n(67294)),o=h(n(45697)),i=h(n(47166)),l=h(n(50026)),s=n(25387),u=h(n(13266)),c=h(n(74754)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(51051)),p=h(n(80646)),m=n(86545),f=h(n(37980));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function h(e){return e&&e.__esModule?e:{default:e}}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,i=void 0,i=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===a(i)?i:String(i)),r)}var o,i}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}(this,n)}}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var w=i.default.bind(p.default),C={onPageChange:o.default.func.isRequired,selectedPage:o.default.number,totalCount:o.default.number,itemCountPerPage:o.default.number,ariaLabelledBy:o.default.string,ariaLabel:o.default.string,intl:o.default.shape({formatMessage:o.default.func}).isRequired},O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(i,e);var t,n,a,o=x(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var n=(t=o.call(this,e)).props,a=n.selectedPage,r=n.totalCount,l=n.itemCountPerPage;return t.state={selectedPage:a&&r?a:void 0,pageSequence:a&&r?(0,m.pageSet)(a,(0,m.calculatePages)(r,l)):void 0,showReducedPaginator:!1},t.handlePageChange=t.handlePageChange.bind(P(t)),t.buildPageButtons=t.buildPageButtons.bind(P(t)),t.reducedPaginator=t.reducedPaginator.bind(P(t)),t.setPaginator=t.setPaginator.bind(P(t)),t}return t=i,(n=[{key:"handlePageChange",value:function(e){var t=this;return function(n){return n.nativeEvent.keyCode!==d.KEY_RETURN&&n.nativeEvent.keyCode!==d.KEY_SPACE||n.preventDefault(),Number.isNaN(Number(e))?(t.props.onPageChange(n.currentTarget.attributes["aria-label"].value),!1):(t.props.onPageChange(e),t.setState({selectedPage:e,pageSequence:(0,m.pageSet)(e,(0,m.calculatePages)(t.props.totalCount,t.props.itemCountPerPage))}),!1)}}},{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"buildPageButtons",value:function(e,t){var n=this.props.intl,a=this.state,o=a.pageSequence,i=a.selectedPage,l=[];return o.forEach((function(a){var o=w(["nav-link",a===i?"is-selected":null]);a>e||l.push(r.default.createElement(f.default,{ariaLabel:n.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:a}),ariaCurrent:a===i,className:o,tabIndex:a===i?"-1":"0",key:"pageButton_".concat(a),onClick:t(a),onKeyDown:t(a)},a))})),l}},{key:"defaultPaginator",value:function(){var e=this.context,t=this.props,n=t.intl,a=t.totalCount,o=t.itemCountPerPage,i=t.ariaLabelledBy,l=t.ariaLabel,s=a?(0,m.calculatePages)(a,o):0,u=this.state.selectedPage,c=1===u?1:u-1,d=u===s?s:u+1,p=l||"pagination",g=r.default.createElement(r.default.Fragment,null,a&&r.default.createElement(f.default,{ariaDisabled:1===u,ariaLabel:n.formatMessage({id:"Terra.paginator.first"}),className:w(["nav-link","left-controls",1===u&&"is-disabled"]),disabled:1===u,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},n.formatMessage({id:"Terra.paginator.first"})),r.default.createElement(f.default,{ariaDisabled:1===u,ariaLabel:n.formatMessage({id:"Terra.paginator.previous"}),className:w(["nav-link","left-controls","previous",1===u&&"is-disabled"]),disabled:1===u,onClick:this.handlePageChange(c),onKeyDown:this.handlePageChange(c)},r.default.createElement("span",{className:w("icon")}),n.formatMessage({id:"Terra.paginator.previous"})),a&&this.buildPageButtons(s,this.handlePageChange),r.default.createElement(f.default,{ariaDisabled:u===s,ariaLabel:n.formatMessage({id:"Terra.paginator.next"}),className:w(["nav-link","right-controls","next",u===s&&"is-disabled"]),disabled:u===s,onClick:this.handlePageChange(d),onKeyDown:this.handlePageChange(d)},n.formatMessage({id:"Terra.paginator.next"}),r.default.createElement("span",{className:w("icon")})),a&&r.default.createElement(f.default,{ariaDisabled:u===s,ariaLabel:n.formatMessage({id:"Terra.paginator.last"}),className:w(["nav-link","right-controls",u===s&&"is-disabled"]),disabled:u===s,onClick:this.handlePageChange(s),onKeyDown:this.handlePageChange(s)},n.formatMessage({id:"Terra.paginator.last"})));return i?r.default.createElement("nav",{className:w("paginator",!a&&"pageless",e.className),"aria-labelledby":i},g):r.default.createElement("nav",{className:w("paginator",!a&&"pageless",e.className),"aria-label":p},g)}},{key:"reducedPaginator",value:function(){var e=this.context,t=this.props,n=t.intl,a=t.totalCount,o=t.itemCountPerPage,i=t.ariaLabelledBy,l=t.ariaLabel,s=this.props.totalCount?(0,m.calculatePages)(a,o):0,u=this.state.selectedPage,d=1===u?1:u-1,p=u===s?s:u+1,g=l||"pagination",h=r.default.createElement(r.default.Fragment,null,a&&r.default.createElement(f.default,{ariaDisabled:1===u,ariaLabel:n.formatMessage({id:"Terra.paginator.first"}),className:w(["nav-link","left-controls",1===u&&"is-disabled"]),disabled:1===u,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},n.formatMessage({id:"Terra.paginator.first"})),r.default.createElement(f.default,{ariaDisabled:1===u,ariaLabel:n.formatMessage({id:"Terra.paginator.previous"}),className:w(["nav-link","left-controls","previous","icon-only",1===u&&"is-disabled"]),disabled:1===u,onClick:this.handlePageChange(d),onKeyDown:this.handlePageChange(d)},r.default.createElement(c.default,{text:n.formatMessage({id:"Terra.paginator.previous"})}),r.default.createElement("span",{className:w("icon")})),a&&n.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:u}),r.default.createElement(f.default,{ariaDisabled:u===s,ariaLabel:n.formatMessage({id:"Terra.paginator.next"}),className:w(["nav-link","right-controls","next","icon-only",u===s&&"is-disabled"]),disabled:u===s,onClick:this.handlePageChange(p),onKeyDown:this.handlePageChange(p)},r.default.createElement(c.default,{text:n.formatMessage({id:"Terra.paginator.next"})}),r.default.createElement("span",{className:w("icon")})),a&&r.default.createElement(f.default,{ariaDisabled:u===s,ariaLabel:n.formatMessage({id:"Terra.paginator.last"}),className:w(["nav-link","right-controls",u===s&&"is-disabled"]),disabled:u===s,onClick:this.handlePageChange(s),onKeyDown:this.handlePageChange(s)},n.formatMessage({id:"Terra.paginator.last"})));return i?r.default.createElement("nav",{className:w("paginator",!a&&"pageless",e.className),"aria-labelledby":i},h):r.default.createElement("nav",{className:w("paginator",!a&&"pageless",e.className),"aria-label":g},h)}},{key:"render",value:function(){return r.default.createElement(u.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedPaginator():this.defaultPaginator())}}])&&y(t.prototype,n),a&&y(t,a),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.default.Component);O.propTypes=C,O.contextType=l.default;var E=(0,s.injectIntl)(O);t.default=E}}]);