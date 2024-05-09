"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[5292],{91563:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(96540)),r=d(n(5556)),o=d(n(67967)),l=d(n(52103)),i=d(n(43840)),u=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=o.default.bind(i.default),_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:r.default.string},p=function(e){var t=e.children,n=s(e,u),r=a.default.useContext(l.default),i=(0,o.default)(f(["button",r.className]),n.className);return a.default.createElement("button",c({},n,{type:"button",className:i,onBlur:_,onMouseDown:m,"data-focus-styles-enabled":!0}),t)};p.propTypes=h;t.default=p},18875:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(96540)),r=u(n(5556)),o=u(n(67967)),l=u(n(52103)),i=u(n(38616));function u(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(i.default),c={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,o=a.default.useContext(l.default);return a.default.createElement("div",{className:d("notice",n,o.className)},a.default.createElement("div",{className:d("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:d("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:d("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:d("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:d("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:d("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};s.propTypes=c,s.defaultProps={ariaLevel:"2",variant:"important"};t.default=s},60934:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(96540)),r=c(n(5556)),o=c(n(46942)),l=c(n(67967)),i=c(n(52103)),u=c(n(27683)),d=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=l.default.bind(u.default),m={title:r.default.string},h=function(e){var t=e.title,n=f(e,d),r=a.default.useContext(i.default),l=(0,o.default)(_(["placeholder",r.className]),n.className),u=_(["inner"]);return a.default.createElement("div",s({},n,{className:l}),a.default.createElement("div",{className:u},a.default.createElement("p",{className:_("title")},t)))};h.propTypes=m,h.defaultProps={title:""};t.default=h},68523:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=l(n(18875)),r=l(n(60934)),o=l(n(91563));function l(e){return e&&e.__esModule?e:{default:e}}},5292:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(96540))&&a.__esModule?a:{default:a},o=n(68523);t.default=function(){return r.default.createElement(o.Notice,{variant:"caution"},"It has been told that Barahir would not for sake Dorthonion, and there Morgoth pursued him to his death, until at last there remained to him only twelve companions. Now the forest of Dorthonion rose southward into mountainous moors; and in the east of those highlands there lay a lake, Tarn Aeluin, with wild heaths about it, and all that land was pathless and untamed, for even in the days of the Long Peace none had dwelt there. But the waters of Tarn Aeluin were held in reverence, for they were clear and blue by day and by night were a mirror for the stars; and it was said that Melian herself had hollowed that water in the days of old. Thither Barahir and his outlaws withdrew, and there made their lair, and Morgoth could not discover it. But the rumour of the deeds of Barahir and his companions went far and wide; and Morgoth commanded Sauron to find them and destroy them.")}},43840:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___mWSPm","orion-fusion-theme":"Button-module__orion-fusion-theme___nj7k4",button:"Button-module__button___r5O1Q","is-active":"Button-module__is-active___CVWJw"}},38616:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___J4EGN","orion-fusion-theme":"Notice-module__orion-fusion-theme___1W9PK",notice:"Notice-module__notice___8kOwf",children:"Notice-module__children___cF5Rb",accessory:"Notice-module__accessory___h3l7H",title:"Notice-module__title___PeXjO","ux-recommendation":"Notice-module__ux-recommendation___tJWAL",caution:"Notice-module__caution___STLbH",deprecation:"Notice-module__deprecation___rWWLq",maintenance:"Notice-module__maintenance___o2AK1",important:"Notice-module__important___WpELD","not-supported":"Notice-module__not-supported___eAx6o",paragraph:"Notice-module__paragraph___BwEGe",list:"Notice-module__list___kOyCE"}},27683:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___rMAZk","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___78cuG",placeholder:"Placeholder-module__placeholder___FPYJB",inner:"Placeholder-module__inner___-U1IZ",title:"Placeholder-module__title___lsXDJ"}}}]);