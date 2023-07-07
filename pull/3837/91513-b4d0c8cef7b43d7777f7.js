"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[91513],{75295:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(n(67294)),a=c(n(45697)),r=c(n(47166)),o=c(n(50026)),u=c(n(72145)),i=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.default.bind(u.default),_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},p={children:a.default.string},h=function(e){var t=e.children,n=f(e,i),a=l.default.useContext(o.default),u=(0,r.default)(s(["button",a.className]),n.className);return l.default.createElement("button",d({},n,{type:"button",className:u,onBlur:_,onMouseDown:m,"data-focus-styles-enabled":!0}),t)};h.propTypes=p;var b=h;t.default=b},77904:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(67294)),a=i(n(45697)),r=i(n(47166)),o=i(n(50026)),u=i(n(45491));function i(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(u.default),d={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},f=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,r=l.default.useContext(o.default);return l.default.createElement("div",{className:c("notice",n,r.className)},l.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),l.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},l.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),l.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),l.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",l.default.createElement("ul",{className:c("list")},l.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),l.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),l.default.createElement("li",null,l.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),l.default.Children.map(a,(function(e){return"string"==typeof e?l.default.createElement("p",null,e):e}))))};f.propTypes=d,f.defaultProps={ariaLevel:"2",variant:"important"};var s=f;t.default=s},78026:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(n(67294)),a=d(n(45697)),r=d(n(94184)),o=d(n(47166)),u=d(n(50026)),i=d(n(15877)),c=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _=o.default.bind(i.default),m={title:a.default.string},p=function(e){var t=e.title,n=s(e,c),a=l.default.useContext(u.default),o=(0,r.default)(_(["placeholder",a.className]),n.className),i=_(["inner"]);return l.default.createElement("div",f({},n,{className:o}),l.default.createElement("div",{className:i},l.default.createElement("p",{className:_("title")},t)))};p.propTypes=m,p.defaultProps={title:""};var h=p;t.default=h},60619:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var l=o(n(77904)),a=o(n(78026)),r=o(n(75295));function o(e){return e&&e.__esModule?e:{default:e}}},91513:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,a=(l=n(67294))&&l.__esModule?l:{default:l},r=n(60619);t.default=function(){return a.default.createElement(r.Placeholder,{title:"Placeholder"})}},72145:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___mWSPm","orion-fusion-theme":"Button-module__orion-fusion-theme___nj7k4",button:"Button-module__button___r5O1Q","is-active":"Button-module__is-active___CVWJw"}},45491:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___J4EGN","orion-fusion-theme":"Notice-module__orion-fusion-theme___1W9PK",notice:"Notice-module__notice___8kOwf",children:"Notice-module__children___cF5Rb",accessory:"Notice-module__accessory___h3l7H",title:"Notice-module__title___PeXjO","ux-recommendation":"Notice-module__ux-recommendation___tJWAL",caution:"Notice-module__caution___STLbH",deprecation:"Notice-module__deprecation___rWWLq",maintenance:"Notice-module__maintenance___o2AK1",important:"Notice-module__important___WpELD","not-supported":"Notice-module__not-supported___eAx6o",paragraph:"Notice-module__paragraph___BwEGe",list:"Notice-module__list___kOyCE"}},15877:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___rMAZk","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___78cuG",placeholder:"Placeholder-module__placeholder___FPYJB",inner:"Placeholder-module__inner___-U1IZ",title:"Placeholder-module__title___lsXDJ"}}}]);