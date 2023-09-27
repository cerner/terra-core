"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[8218],{8218:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(67294)),l=c(a(43868)),r=c(a(44942)),o=c(a(30390)),u=c(a(80482)),i=c(a(61070)),d=a(60619);function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(i.default,{ariaControls:"test-content-id"},n.default.createElement(l.default,{text:"Edit",variant:"utility",icon:n.default.createElement(r.default,null)}),n.default.createElement(l.default,{text:"Add",variant:"utility",icon:n.default.createElement(o.default,null)}),n.default.createElement(l.default,{text:"Attachment",variant:"utility",icon:n.default.createElement(u.default,null)})),n.default.createElement("div",{id:"test-content-id"},n.default.createElement(d.Placeholder,{title:"Sample Content Area for Toolbar"})))}},75295:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(67294)),l=d(a(45697)),r=d(a(47166)),o=d(a(50026)),u=d(a(72145)),i=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.default.bind(u.default),_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},p={children:l.default.string},b=function(e){var t=e.children,a=f(e,i),l=n.default.useContext(o.default),u=(0,r.default)(s(["button",l.className]),a.className);return n.default.createElement("button",c({},a,{type:"button",className:u,onBlur:_,onMouseDown:m,"data-focus-styles-enabled":!0}),t)};b.propTypes=p;t.default=b},77904:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(67294)),l=i(a(45697)),r=i(a(47166)),o=i(a(50026)),u=i(a(45491));function i(e){return e&&e.__esModule?e:{default:e}}var d=r.default.bind(u.default),c={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},f=function(e){var t=e.ariaLevel,a=e.variant,l=e.children,r=n.default.useContext(o.default);return n.default.createElement("div",{className:d("notice",a,r.className)},n.default.createElement("div",{className:d("accessory"),"aria-hidden":"true",focusable:"false"}),n.default.createElement("div",{role:"heading",className:d("title"),"aria-level":t},n.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),n.default.createElement("div",{className:d("children")},function(e){return"not-supported"===e?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:d("paragraph")},"This component was designed and tested according to the documented implementation."),n.default.createElement("p",{className:d("paragraph")},"Using the component incorrectly:",n.default.createElement("ul",{className:d("list")},n.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),n.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),n.default.createElement("li",null,n.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),n.default.Children.map(l,(function(e){return"string"==typeof e?n.default.createElement("p",null,e):e}))))};f.propTypes=c,f.defaultProps={ariaLevel:"2",variant:"important"};t.default=f},78026:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(67294)),l=c(a(45697)),r=c(a(94184)),o=c(a(47166)),u=c(a(50026)),i=c(a(15877)),d=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var _=o.default.bind(i.default),m={title:l.default.string},p=function(e){var t=e.title,a=s(e,d),l=n.default.useContext(u.default),o=(0,r.default)(_(["placeholder",l.className]),a.className),i=_(["inner"]);return n.default.createElement("div",f({},a,{className:o}),n.default.createElement("div",{className:i},n.default.createElement("p",{className:_("title")},t)))};p.propTypes=m,p.defaultProps={title:""};t.default=p},60619:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return l.default}});var n=o(a(77904)),l=o(a(78026)),r=o(a(75295));function o(e){return e&&e.__esModule?e:{default:e}}},30390:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(21969));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M48 21H27V0h-6v21H0v6h21v21h6V27h21z"}))};u.displayName="IconAdd",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u},80482:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(21969));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M32 8v29a8 8 0 0 1-16 0V8a5 5 0 0 1 10 0v29a2 2 0 0 1-4 0V15h-3v22a5 5 0 0 0 10 0V8a8 8 0 0 0-16 0v29a11 11 0 0 0 22 0V8z"}))};u.displayName="IconAttachment",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u},44942:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(21969));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"m.1 48 5.7-12.8 7.1 7.1zm44.8-37.6 2.5-2.5a2.05 2.05 0 0 0 0-2.9L43 .6a2.05 2.05 0 0 0-2.9 0l-2.5 2.5zm-9.4-5.2L7.6 33.1l7.3 7.3 27.9-27.9z"}))};u.displayName="IconEdit",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u},61070:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(67294)),l=c(a(45697)),r=c(a(94184)),o=c(a(47166)),u=c(a(50026)),i=c(a(62303)),d=["align","ariaControls","ariaLabel","ariaLabelledBy","children"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var _=o.default.bind(i.default),m={align:l.default.oneOf(["start","end","center"]),ariaControls:l.default.string,ariaLabel:l.default.string,ariaLabelledBy:l.default.string,children:l.default.node},p=function(e){var t=e.align,a=e.ariaControls,l=e.ariaLabel,o=e.ariaLabelledBy,i=e.children,c=s(e,d),m=n.default.useContext(u.default),p=(0,r.default)(_("toolbar","".concat(t,"-align"),m.className),c.className),b=n.default.Children.map(i,(function(e){return e?n.default.createElement("div",{className:_("item")},e):e}));return n.default.createElement("div",f({},c,{"aria-controls":a,"aria-label":o?void 0:l,"aria-labelledby":o,className:p,role:"toolbar"}),b)};p.propTypes=m,p.defaultProps={align:"start"};t.default=p},72145:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___mWSPm","orion-fusion-theme":"Button-module__orion-fusion-theme___nj7k4",button:"Button-module__button___r5O1Q","is-active":"Button-module__is-active___CVWJw"}},45491:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___J4EGN","orion-fusion-theme":"Notice-module__orion-fusion-theme___1W9PK",notice:"Notice-module__notice___8kOwf",children:"Notice-module__children___cF5Rb",accessory:"Notice-module__accessory___h3l7H",title:"Notice-module__title___PeXjO","ux-recommendation":"Notice-module__ux-recommendation___tJWAL",caution:"Notice-module__caution___STLbH",deprecation:"Notice-module__deprecation___rWWLq",maintenance:"Notice-module__maintenance___o2AK1",important:"Notice-module__important___WpELD","not-supported":"Notice-module__not-supported___eAx6o",paragraph:"Notice-module__paragraph___BwEGe",list:"Notice-module__list___kOyCE"}},15877:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___rMAZk","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___78cuG",placeholder:"Placeholder-module__placeholder___FPYJB",inner:"Placeholder-module__inner___-U1IZ",title:"Placeholder-module__title___lsXDJ"}},62303:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___WS97G","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___6na+8",toolbar:"Toolbar-module__toolbar___P9DhG",item:"Toolbar-module__item___hGwSK","start-align":"Toolbar-module__start-align___vUi7h","end-align":"Toolbar-module__end-align___6Ku2K","center-align":"Toolbar-module__center-align___ljlwu"}}}]);