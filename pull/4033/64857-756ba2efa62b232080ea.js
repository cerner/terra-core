"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[64857],{40301:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BadgeSize=t.BadgeIntent=void 0;var a=c(n(67294)),r=c(n(45697)),i=c(n(93967)),d=c(n(19845)),u=n(25387),o=c(n(50026)),_=c(n(74754)),f=c(n(81484)),s=["size","intent","intl","isReversed","text","icon","visuallyHiddenText"];function c(e){return e&&e.__esModule?e:{default:e}}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){var a;return a=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=l(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(a)?a:String(a))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=d.default.bind(f.default),v=(t.BadgeIntent={DEFAULT:"default",PRIMARY:"primary",SECONDARY:"secondary",INFO:"info",WARNING:"warning",POSITIVE:"positive",NEGATIVE:"negative"},t.BadgeSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"},{children:r.default.node,icon:r.default.element,intent:r.default.oneOf(["default","primary","secondary","info","warning","positive","negative"]),intl:r.default.shape({formatMessage:r.default.func}),isReversed:r.default.bool,size:r.default.oneOf(["tiny","small","medium","large","huge"]),text:r.default.string,visuallyHiddenText:r.default.string}),h={children:null,icon:null,intent:"default",isReversed:!1,size:"small",text:null,visuallyHiddenText:void 0},O=function(e){var t=e.size,n=e.intent,l=(e.intl,e.isReversed),r=e.text,d=e.icon,u=e.visuallyHiddenText,c=b(e,s),m=a.default.useContext(o.default),y=(0,i.default)(p("badge",{"has-icon":d},{"is-reversed":l},t,n,m.className),c.className),v=d;d&&"redwood-theme"===m.className&&(v=a.default.cloneElement(d,{className:(0,i.default)(p("badge-icon"))}));var h=r?a.default.createElement("span",{className:f.default.text},r):null,O=u?a.default.createElement(_.default,{text:u}):null,B=l?[h,O,v,c.children]:[v,h,O,c.children];return a.default.createElement.apply(a.default,["span",g(g({},c),{},{className:y})].concat(B))};O.propTypes=v,O.defaultProps=h;t.default=(0,u.injectIntl)(O)},64857:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(67294)),a=r(n(40301));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return l.default.createElement("div",null,l.default.createElement(a.default,{size:"tiny",text:"Tiny",id:"tiny-badge"})," ",l.default.createElement(a.default,{size:"small",text:"Small",id:"small-badge"})," ",l.default.createElement(a.default,{size:"medium",text:"Medium",id:"medium-badge"})," ",l.default.createElement(a.default,{size:"large",text:"Large",id:"large-badge"})," ",l.default.createElement(a.default,{size:"huge",text:"Huge",id:"huge-badge"}))}},81484:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Badge-module__clinical-lowlight-theme___DEYml","orion-fusion-theme":"Badge-module__orion-fusion-theme___hYM9V","redwood-theme":"Badge-module__redwood-theme___7Rgqv",badge:"Badge-module__badge___+rb+p",tiny:"Badge-module__tiny___I01FH","is-reversed":"Badge-module__is-reversed___yAJxz","has-icon":"Badge-module__has-icon___8w7lR",text:"Badge-module__text___BeS5P","badge-icon":"Badge-module__badge-icon___75jU8",small:"Badge-module__small___Duxcl",medium:"Badge-module__medium___1Y1e+",large:"Badge-module__large___YUDdz",huge:"Badge-module__huge___bkvh6",default:"Badge-module__default___uWFbA",primary:"Badge-module__primary___62Nx+",secondary:"Badge-module__secondary___sb6EM",positive:"Badge-module__positive___hyUh3",negative:"Badge-module__negative___YRN6X",warning:"Badge-module__warning___MKbhA",info:"Badge-module__info___QLj6M"}}}]);