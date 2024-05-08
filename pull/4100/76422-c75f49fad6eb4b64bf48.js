"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[76422],{55713:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(96540)),r=a(n(5556)),o=a(n(67967)),u=a(n(25642)),c=o.default.bind(u.default),i={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},d=function(e){var t=e.src,n=e.name,a=e.url,r=e.version,o=l.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},l.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:c("badge-version")},"v".concat(r))),u=t?l.default.createElement("a",{className:c("badge"),href:t},l.default.createElement("span",{className:c("badge-name")},"github"),l.default.createElement("span",{className:c("badge-version")},"source")):void 0;return l.default.createElement("div",{className:c("badge-container")},o,u)};d.propTypes=i;t.A=d},201:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var r=a(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=_(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),u=a(n(5556)),c=a(n(67967)),i=n(92912),d=a(n(27166)),s=a(n(62441)),m=n(25966),f=a(n(89986));function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_=function(e){return e?n:t})(e)}var p=c.default.bind(f.default),v={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,u=e.description,c=e.isExpanded,f=(0,o.useState)(c),_=(0,r.default)(f,2),v=_[0],h=_[1],y=(0,o.useState)(!1),E=(0,r.default)(y,2),N=E[0],O=E[1],x=o.default.useContext(i.ThemeContext),w=void 0!==a,j=function(){O(!N),v&&h(!v)},P=function(){h(!v),N&&O(!N)},T=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:p("template",x.className)},o.default.createElement("div",{className:p("header")},l&&o.default.createElement("h2",{className:p("title")},l)),o.default.createElement("div",{className:p("content")},u&&o.default.createElement("div",{className:p("description")},u),t),o.default.createElement("div",{className:p("footer")},n?o.default.createElement("div",{className:p("button-container")},w&&o.default.createElement("button",{type:"button",className:p("css-toggle","item",{"is-selected":N}),onClick:j,onKeyDown:function(e){return T(e,j)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:p("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:p("chevron")})),o.default.createElement("button",{type:"button",className:p("code-toggle","item",{"is-selected":v}),onClick:P,onKeyDown:function(e){return T(e,P)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:p("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:p("chevron")}))):null,o.default.createElement("div",null,N&&o.default.createElement("div",{className:p("css")},a),v&&o.default.createElement("div",{className:p("code")},n))))};h.propTypes=v,h.defaultProps={isExpanded:!1};t.A=h},96967:function(e,t,n){n.d(t,{A:function(){return i}});n(96540);var a=n(36665),l=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={},c="wrapper";function i(e){var t=e.components,n=o(e,l);return(0,a.mdx)(c,r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .placeholder {\n    height: 50px;\n  }\n}\n\n.list-item {\n  padding: 10px 0;\n}\n\n.list-item-focus {\n  padding: 10px 0;\n}\n\n.list-item-focus:focus {\n  outline: 2px dashed #000;\n  outline-offset: -2px;\n}\n\n")))}i.isMDXComponent=!0},49898:function(e,t,n){n.d(t,{E:function(){return r}});var a=n(96540),l=n(55713),r=function(e){var t=e.url;return a.createElement(l.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-list",name:"terra-list",version:"4.74.0",url:t})}},91563:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(96540)),l=i(n(5556)),r=i(n(67967)),o=i(n(52103)),u=i(n(43840)),c=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=r.default.bind(u.default),f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},p={children:l.default.string},v=function(e){var t=e.children,n=s(e,c),l=a.default.useContext(o.default),u=(0,r.default)(m(["button",l.className]),n.className);return a.default.createElement("button",d({},n,{type:"button",className:u,onBlur:f,onMouseDown:_,"data-focus-styles-enabled":!0}),t)};v.propTypes=p;t.default=v},18875:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(96540)),l=c(n(5556)),r=c(n(67967)),o=c(n(52103)),u=c(n(38616));function c(e){return e&&e.__esModule?e:{default:e}}var i=r.default.bind(u.default),d={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,l=e.children,r=a.default.useContext(o.default);return a.default.createElement("div",{className:i("notice",n,r.className)},a.default.createElement("div",{className:i("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:i("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:i("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:i("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:i("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:i("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(l,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};s.propTypes=d,s.defaultProps={ariaLevel:"2",variant:"important"};t.default=s},60934:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(96540)),l=d(n(5556)),r=d(n(46942)),o=d(n(67967)),u=d(n(52103)),c=d(n(27683)),i=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var f=o.default.bind(c.default),_={title:l.default.string},p=function(e){var t=e.title,n=m(e,i),l=a.default.useContext(u.default),o=(0,r.default)(f(["placeholder",l.className]),n.className),c=f(["inner"]);return a.default.createElement("div",s({},n,{className:o}),a.default.createElement("div",{className:c},a.default.createElement("p",{className:f("title")},t)))};p.propTypes=_,p.defaultProps={title:""};t.default=p},68523:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return l.default}});var a=o(n(18875)),l=o(n(60934)),r=o(n(91563));function o(e){return e&&e.__esModule?e:{default:e}}},27166:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(96540)),l=r(n(56445));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},99983:function(e,t,n){n.r(t),t.default={placeholder:"ListDocCommon-module__placeholder___Xls80"}},43840:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___mWSPm","orion-fusion-theme":"Button-module__orion-fusion-theme___nj7k4",button:"Button-module__button___r5O1Q","is-active":"Button-module__is-active___CVWJw"}},38616:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___J4EGN","orion-fusion-theme":"Notice-module__orion-fusion-theme___1W9PK",notice:"Notice-module__notice___8kOwf",children:"Notice-module__children___cF5Rb",accessory:"Notice-module__accessory___h3l7H",title:"Notice-module__title___PeXjO","ux-recommendation":"Notice-module__ux-recommendation___tJWAL",caution:"Notice-module__caution___STLbH",deprecation:"Notice-module__deprecation___rWWLq",maintenance:"Notice-module__maintenance___o2AK1",important:"Notice-module__important___WpELD","not-supported":"Notice-module__not-supported___eAx6o",paragraph:"Notice-module__paragraph___BwEGe",list:"Notice-module__list___kOyCE"}},27683:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___rMAZk","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___78cuG",placeholder:"Placeholder-module__placeholder___FPYJB",inner:"Placeholder-module__inner___-U1IZ",title:"Placeholder-module__title___lsXDJ"}}}]);