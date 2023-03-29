"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[41195],{22863:function(e,t,r){var n=r(64836);t.Z=void 0;var a=n(r(67294)),l=n(r(45697)),i=n(r(47166)),u=n(r(17422)),o=i.default.bind(u.default),s={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,r=e.name,n=e.url,l=e.version,i=a.default.createElement("a",{className:o("badge"),href:n||"https://www.npmjs.org/package/".concat(r,"/v/").concat(l)},a.default.createElement("span",{className:o("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:o("badge-version")},"v".concat(l))),u=t?a.default.createElement("a",{className:o("badge"),href:t},a.default.createElement("span",{className:o("badge-name")},"github"),a.default.createElement("span",{className:o("badge-version")},"source")):void 0;return a.default.createElement("div",{className:o("badge-container")},i,u)};c.propTypes=s;var d=c;t.Z=d},49271:function(e,t,r){var n=r(64836),a=r(18698);t.Z=void 0;var l=n(r(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=l?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(r(67294)),u=n(r(45697)),o=n(r(47166)),s=r(21538),c=n(r(13810)),d=n(r(40931)),m=r(51051),p=n(r(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}var v=o.default.bind(p.default),b={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,r=e.exampleSrc,n=e.exampleCssSrc,a=e.title,u=e.description,o=e.isExpanded,p=(0,i.useState)(o),f=(0,l.default)(p,2),b=f[0],y=f[1],x=(0,i.useState)(!1),h=(0,l.default)(x,2),O=h[0],E=h[1],w=i.default.useContext(s.ThemeContext),j=void 0!==n,N=function(){E(!O),b&&y(!b)},S=function(){y(!b),O&&E(!O)},T=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:v("template",w.className)},i.default.createElement("div",{className:v("header")},a&&i.default.createElement("h2",{className:v("title")},a)),i.default.createElement("div",{className:v("content")},u&&i.default.createElement("div",{className:v("description")},u),t),i.default.createElement("div",{className:v("footer")},r?i.default.createElement("div",{className:v("button-container")},j&&i.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":O}),onClick:N,onKeyDown:function(e){return T(e,N)},onBlur:g,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(c.default,{className:v("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(d.default,{className:v("chevron")})),i.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":b}),onClick:S,onKeyDown:function(e){return T(e,S)},onBlur:g,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(c.default,{className:v("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(d.default,{className:v("chevron")}))):null,i.default.createElement("div",null,O&&i.default.createElement("div",{className:v("css")},n),b&&i.default.createElement("div",{className:v("code")},r))))};y.propTypes=b,y.defaultProps={isExpanded:!1};var x=y;t.Z=x},78530:function(e,t,r){var n=r(64836),a=r(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return s.Row}}),t.ZP=t.Di=void 0;var l=m(r(67294)),i=n(r(45697)),u=n(r(47166)),o=r(21538),s=m(r(37515)),c=n(r(54931));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=l?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}var p=u.default.bind(c.default),f={children:i.default.node},v={isRequired:i.default.bool},b=function(e){var t=e.children;return l.default.createElement(s.Cell,{className:p("bold")},t)};t.O=b,b.propTypes=f;var g=function(e){var t=e.children;return l.default.createElement(s.Cell,{className:p("code-block-override")},t)};t.Di=g,g.propTypes=f;var _=function(e){var t=e.isRequired;return l.default.createElement(s.Cell,{className:p([t?["required"]:[]])},t?"required":"optional")};t.dS=_,_.propTypes=v;var y=function(e){var t=e.children;return l.default.createElement(s.Cell,{className:p("code-block-override")},t)};t.mW=y,y.propTypes=f;var x=function(e){var t=e.children;return l.default.createElement(s.Cell,null,t)};t.Ex=x,x.propTypes=f;var h=function(e){var t=e.children,r=(0,l.useContext)(o.ThemeContext);return l.default.createElement(s.default,{paddingStyle:"compact",className:p("table",r.className)},l.default.createElement(s.Header,{className:p("header")},l.default.createElement(s.HeaderCell,null,"Prop"),l.default.createElement(s.HeaderCell,null,"Type"),l.default.createElement(s.HeaderCell,null,"Required"),l.default.createElement(s.HeaderCell,null,"Default"),l.default.createElement(s.HeaderCell,null,"Description")),l.default.createElement(s.Body,null,t))};h.propTypes=f;var O=h;t.ZP=O},41195:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(67294),a=r(81254),l=r(57570),i=r(13057),u=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c={};function d(e){var t=e.components,r=s(e,u);return(0,a.mdx)("wrapper",o({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Scroll from 'terra-scroll';\nimport classNames from 'classnames/bind';\nimport styles from './ScrollCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nexport default () => (\n  <div>\n    <p>Overflow-Y Container</p>\n    <div className={cx('overflow-wrapper')}>\n      <Scroll>\n        <p className={cx('paragraph-y-wrapper')}>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis dapibus erat,\n          eget facilisis nunc ornare in. Vestibulum ut posuere neque. Maecenas nibh lacus, euismod sit amet magna sit amet,\n          porttitor sollicitudin sapien. Vivamus nec lacus vel tortor ultrices efficitur vitae sit amet ipsum.\n          Suspendisse risus eros, faucibus eget mattis in, tincidunt id urna. Integer eget urna quis nisi luctus posuere.\n          Fusce molestie dignissim neque interdum ultrices. Donec porta condimentum quam, at molestie velit scelerisque vitae.\n          Suspendisse eleifend lectus sit amet nunc posuere, sed placerat dolor laoreet.\n          Etiam tempus lacinia purus, ac porttitor nisl posuere eget. Aenean nulla tellus,\n          lacinia eget tortor vel, tempus fermentum ex. Nullam massa nisl, consequat at lorem non,\n          dignissim vehicula mauris. Morbi ultrices mauris ipsum, eu tempor quam luctus id. Curabitur ultrices nunc ultrices,\n          commodo lorem eget, vulputate urna. Quisque porttitor nisi vel diam vulputate vehicula eu quis lacus. Nunc eget aliquam elit.\n          Vivamus dictum mi molestie, tristique est sit amet, pellentesque urna. Etiam arcu felis, pulvinar et lorem et, efficitur ultricies urna.\n          Nunc lacinia pellentesque turpis sit amet egestas. Vivamus ut ex efficitur, egestas lectus sit amet, gravida magna.\n          Vivamus suscipit, erat vitae commodo fermentum, massa dolor egestas arcu,\n          a sollicitudin sem risus eu quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n          In maximus nunc tempus magna iaculis porttitor.\n        </p>\n      </Scroll>\n    </div>\n  </div>\n);\n\n")))}d.isMDXComponent=!0;var m=r(49271),p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function v(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b={};function g(e){var t=e.components,r=v(e,p);return(0,a.mdx)("wrapper",f({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local { \n  .overflow-wrapper {\n    border: 1px dashed rgb(0, 0, 0);\n    height: 200px;\n    width: 400px;\n  }\n\n  .paragraph-x-wrapper {\n    height: 160px;\n    padding-left: 10px;\n    padding-right: 10px;\n    width: 1350px;\n  }\n  \n  .paragraph-y-wrapper {\n    padding-left: 10px;\n    padding-right: 10px;\n    width: 375px;\n  }\n}\n\n")))}g.isMDXComponent=!0;var _=function(e){var t=e.title,r=e.description,a=e.isExpanded;return n.createElement(m.Z,{title:t||"Scroll Vertical",description:r,example:n.createElement(i.Z,null),exampleCssSrc:n.createElement(g,null),exampleSrc:n.createElement(d,null),isExpanded:a})},y=r(40380),x=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function O(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var E={};function w(e){var t=e.components,r=O(e,x);return(0,a.mdx)("wrapper",h({},E,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Scroll from 'terra-scroll';\nimport classNames from 'classnames/bind';\nimport styles from './ScrollCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nexport default () => (\n  <div>\n    <p>Overflow-X Container</p>\n    <div className={cx('overflow-wrapper')}>\n      <Scroll>\n        <p className={cx('paragraph-x-wrapper')}>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis dapibus erat,\n          eget facilisis nunc ornare in. Vestibulum ut posuere neque. Maecenas nibh lacus, euismod sit amet magna sit amet,\n          porttitor sollicitudin sapien. Vivamus nec lacus vel tortor ultrices efficitur vitae sit amet ipsum.\n          Suspendisse risus eros, faucibus eget mattis in, tincidunt id urna. Integer eget urna quis nisi luctus posuere.\n          Fusce molestie dignissim neque interdum ultrices. Donec porta condimentum quam, at molestie velit scelerisque vitae.\n          Suspendisse eleifend lectus sit amet nunc posuere, sed placerat dolor laoreet.\n          Etiam tempus lacinia purus, ac porttitor nisl posuere eget. Aenean nulla tellus,\n          lacinia eget tortor vel, tempus fermentum ex. Nullam massa nisl, consequat at lorem non,\n          dignissim vehicula mauris. Morbi ultrices mauris ipsum, eu tempor quam luctus id. Curabitur ultrices nunc ultrices,\n          commodo lorem eget, vulputate urna. Quisque porttitor nisi vel diam vulputate vehicula eu quis lacus. Nunc eget aliquam elit.\n          Vivamus dictum mi molestie, tristique est sit amet, pellentesque urna. Etiam arcu felis, pulvinar et lorem et, efficitur ultricies urna.\n          Nunc lacinia pellentesque turpis sit amet egestas. Vivamus ut ex efficitur, egestas lectus sit amet, gravida magna.\n          Vivamus suscipit, erat vitae commodo fermentum, massa dolor egestas arcu,\n          a sollicitudin sem risus eu quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n          In maximus nunc tempus magna iaculis porttitor.\n        </p>\n      </Scroll>\n    </div>\n  </div>\n);\n\n")))}w.isMDXComponent=!0;var j=function(e){var t=e.title,r=e.description,a=e.isExpanded;return n.createElement(m.Z,{title:t||"Scroll Horizontal",description:r,example:n.createElement(y.Z,null),exampleCssSrc:n.createElement(g,null),exampleSrc:n.createElement(w,null),isExpanded:a})},N=r(78530),S=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},T.apply(this,arguments)}function P(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var q={},C="wrapper";function M(e){var t=e.components,r=P(e,S);return(0,a.mdx)(C,T({},q,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(N.ZP,{mdxType:"PropsTable"},(0,a.mdx)(N.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(N.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(N.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(N.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The child content to present in the scrollable region."))),(0,a.mdx)(N.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(N.O,{mdxType:"PropNameCell"},"refCallback"),(0,a.mdx)(N.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(N.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback for the ref of the scrollable container.")))))}M.isMDXComponent=!0;var k=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},D.apply(this,arguments)}function V(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var I={},R="wrapper";function Z(e){var t=e.components,r=V(e,k);return(0,a.mdx)(R,D({},I,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-scroll"},"Terra Scroll"),(0,a.mdx)("p",null,"The terra-scroll is a content view that hides data accessible with scrolling and provides a refCallback. The expectation is that any consumer needing to provide a scrollable area within their implementation should be using this component, or one of our other terra components that implements Scroll."),(0,a.mdx)("p",null,"Scroll provides a menthod to access the node managing scrolling, so values such as scrollTop can be easily set, as well as the correct prefixes to consistently sytle scrolling across supported browsers."),(0,a.mdx)("p",null,"The terra-scroll expands to fill it's parent container, so parent nodes are expected to have an explicit height set."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-scroll"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import Scroll from 'terra-scroll';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(_,{title:"Vertical Scroll",mdxType:"ScrollVertical"}),(0,a.mdx)(j,{title:"Horizontal Scroll",mdxType:"ScrollHorizontal"}),(0,a.mdx)("h2",{id:"scroll-props"},"Scroll Props"),(0,a.mdx)(M,{mdxType:"ScrollPropsTable"}))}Z.isMDXComponent=!0},57570:function(e,t,r){r.d(t,{C:function(){return l}});var n=r(67294),a=r(22863),l=function(e){var t=e.url;return n.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-scroll",name:"terra-scroll",version:"2.34.0",url:t})}},40380:function(e,t,r){t.Z=void 0;var n=u(r(67294)),a=u(r(778)),l=u(r(47166)),i=u(r(44232));function u(e){return e&&e.__esModule?e:{default:e}}var o=l.default.bind(i.default);t.Z=function(){return n.default.createElement("div",null,n.default.createElement("p",null,"Overflow-X Container"),n.default.createElement("div",{className:o("overflow-wrapper")},n.default.createElement(a.default,null,n.default.createElement("p",{className:o("paragraph-x-wrapper")},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis dapibus erat, eget facilisis nunc ornare in. Vestibulum ut posuere neque. Maecenas nibh lacus, euismod sit amet magna sit amet, porttitor sollicitudin sapien. Vivamus nec lacus vel tortor ultrices efficitur vitae sit amet ipsum. Suspendisse risus eros, faucibus eget mattis in, tincidunt id urna. Integer eget urna quis nisi luctus posuere. Fusce molestie dignissim neque interdum ultrices. Donec porta condimentum quam, at molestie velit scelerisque vitae. Suspendisse eleifend lectus sit amet nunc posuere, sed placerat dolor laoreet. Etiam tempus lacinia purus, ac porttitor nisl posuere eget. Aenean nulla tellus, lacinia eget tortor vel, tempus fermentum ex. Nullam massa nisl, consequat at lorem non, dignissim vehicula mauris. Morbi ultrices mauris ipsum, eu tempor quam luctus id. Curabitur ultrices nunc ultrices, commodo lorem eget, vulputate urna. Quisque porttitor nisi vel diam vulputate vehicula eu quis lacus. Nunc eget aliquam elit. Vivamus dictum mi molestie, tristique est sit amet, pellentesque urna. Etiam arcu felis, pulvinar et lorem et, efficitur ultricies urna. Nunc lacinia pellentesque turpis sit amet egestas. Vivamus ut ex efficitur, egestas lectus sit amet, gravida magna. Vivamus suscipit, erat vitae commodo fermentum, massa dolor egestas arcu, a sollicitudin sem risus eu quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. In maximus nunc tempus magna iaculis porttitor."))))}},13057:function(e,t,r){t.Z=void 0;var n=u(r(67294)),a=u(r(778)),l=u(r(47166)),i=u(r(44232));function u(e){return e&&e.__esModule?e:{default:e}}var o=l.default.bind(i.default);t.Z=function(){return n.default.createElement("div",null,n.default.createElement("p",null,"Overflow-Y Container"),n.default.createElement("div",{className:o("overflow-wrapper")},n.default.createElement(a.default,null,n.default.createElement("p",{className:o("paragraph-y-wrapper")},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis dapibus erat, eget facilisis nunc ornare in. Vestibulum ut posuere neque. Maecenas nibh lacus, euismod sit amet magna sit amet, porttitor sollicitudin sapien. Vivamus nec lacus vel tortor ultrices efficitur vitae sit amet ipsum. Suspendisse risus eros, faucibus eget mattis in, tincidunt id urna. Integer eget urna quis nisi luctus posuere. Fusce molestie dignissim neque interdum ultrices. Donec porta condimentum quam, at molestie velit scelerisque vitae. Suspendisse eleifend lectus sit amet nunc posuere, sed placerat dolor laoreet. Etiam tempus lacinia purus, ac porttitor nisl posuere eget. Aenean nulla tellus, lacinia eget tortor vel, tempus fermentum ex. Nullam massa nisl, consequat at lorem non, dignissim vehicula mauris. Morbi ultrices mauris ipsum, eu tempor quam luctus id. Curabitur ultrices nunc ultrices, commodo lorem eget, vulputate urna. Quisque porttitor nisi vel diam vulputate vehicula eu quis lacus. Nunc eget aliquam elit. Vivamus dictum mi molestie, tristique est sit amet, pellentesque urna. Etiam arcu felis, pulvinar et lorem et, efficitur ultricies urna. Nunc lacinia pellentesque turpis sit amet egestas. Vivamus ut ex efficitur, egestas lectus sit amet, gravida magna. Vivamus suscipit, erat vitae commodo fermentum, massa dolor egestas arcu, a sollicitudin sem risus eu quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. In maximus nunc tempus magna iaculis porttitor."))))}},32634:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(67294)),a=c(r(45697)),l=c(r(94184)),i=c(r(47166)),u=c(r(50026)),o=c(r(16749)),s=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=i.default.bind(o.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},v=function(e){var t=e.children,r=e.disableStripes,a=e.paddingStyle,i=m(e,s),o=n.default.useContext(u.default),c=(0,l.default)(p("table",{striped:!r},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},o.className),i.className);return n.default.createElement("table",d({},i,{className:c}),t)};v.propTypes=f,v.defaultProps={disableStripes:!1,paddingStyle:"none"};var b=v;t.default=b},80196:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(67294)),a=i(r(45697)),l=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o={children:a.default.node},s=function(e){var t=e.children,r=u(e,l);return n.default.createElement("tbody",r,t)};s.propTypes=o,s.defaultProps={children:[]};var c=s;t.default=c},8685:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(67294)),a=i(r(45697)),l=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o={children:a.default.node},s=function(e){var t=e.children,r=u(e,l);return n.default.createElement("td",r,t)};s.propTypes=o,s.defaultProps={children:[]};var c=s;t.default=c},19852:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(67294)),a=u(r(45697)),l=u(r(29805)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s={children:a.default.node},c=function(e){var t=e.children,r=o(e,i);return n.default.createElement("thead",r,n.default.createElement("tr",null,l.default.addScope(t,"col")))};c.propTypes=s,c.defaultProps={children:[]};var d=c;t.default=d},80876:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(67294)),a=i(r(45697)),l=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o={children:a.default.node},s=function(e){var t=e.children,r=u(e,l);return n.default.createElement("th",r,t)};s.propTypes=o,s.defaultProps={children:[]};var c=s;t.default=c},70829:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(67294)),a=s(r(45697)),l=s(r(47166)),i=s(r(16749)),u=s(r(29805)),o=["children"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=l.default.bind(i.default),p={children:a.default.node},f=function(e){var t=e.children,r=d(e,o),a=m(["row"]);return n.default.createElement("tr",c({},r,{className:r.className?"".concat(a," ").concat(r.className):a}),u.default.addScope(t,"row"))};f.propTypes=p,f.defaultProps={children:[]};var v=f;t.default=v},29805:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(67294))&&n.__esModule?n:{default:n};var l={addScope:function(e,t){var r=[];return a.default.Children.forEach(e,(function(e){r.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),r}};t.default=l},37515:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var n=s(r(32634)),a=s(r(80196)),l=s(r(70829)),i=s(r(8685)),u=s(r(19852)),o=s(r(80876));function s(e){return e&&e.__esModule?e:{default:e}}var c=n.default;t.default=c},13810:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(21969));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var u=function(e){var t=i({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var o=u;t.default=o},17422:function(e,t,r){r.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},44232:function(e,t,r){r.r(t),t.default={"overflow-wrapper":"ScrollCommon-module__overflow-wrapper___dBq9G","paragraph-x-wrapper":"ScrollCommon-module__paragraph-x-wrapper___wyTFK","paragraph-y-wrapper":"ScrollCommon-module__paragraph-y-wrapper___ZuwzY"}},16749:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);