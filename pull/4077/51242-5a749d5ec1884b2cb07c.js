"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[51242],{63860:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BadgeSize=t.BadgeIntent=void 0;var r=s(n(96540)),l=s(n(5556)),i=s(n(46942)),d=s(n(67967)),o=n(8604),u=s(n(52103)),f=s(n(56500)),_=s(n(29597)),c=["size","intent","intl","isReversed","text","icon","visuallyHiddenText"];function s(e){return e&&e.__esModule?e:{default:e}}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){var r;return r=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==a(r)?r:r+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=d.default.bind(_.default),v=(t.BadgeIntent={DEFAULT:"default",PRIMARY:"primary",SECONDARY:"secondary",INFO:"info",WARNING:"warning",POSITIVE:"positive",NEGATIVE:"negative"},t.BadgeSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"},{children:l.default.node,icon:l.default.element,intent:l.default.oneOf(["default","primary","secondary","info","warning","positive","negative"]),intl:l.default.shape({formatMessage:l.default.func}),isReversed:l.default.bool,size:l.default.oneOf(["tiny","small","medium","large","huge"]),text:l.default.string,visuallyHiddenText:l.default.string}),h={children:null,icon:null,intent:"default",isReversed:!1,size:"small",text:null,visuallyHiddenText:void 0},O=function(e){var t=e.size,n=e.intent,a=(e.intl,e.isReversed),l=e.text,d=e.icon,o=e.visuallyHiddenText,s=b(e,c),m=r.default.useContext(u.default),y=(0,i.default)(p("badge",{"has-icon":d},{"is-reversed":a},t,n,m.className),s.className),v=d;d&&"redwood-theme"===m.className&&(v=r.default.cloneElement(d,{className:(0,i.default)(p("badge-icon"))}));var h=l?r.default.createElement("span",{className:_.default.text},l):null,O=o?r.default.createElement(f.default,{text:o}):null,E=a?[h,O,v,s.children]:[v,h,O,s.children];return r.default.createElement.apply(r.default,["span",g(g({},s),{},{className:y})].concat(E))};O.propTypes=v,O.defaultProps=h;t.default=(0,o.injectIntl)(O)},51242:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(96540)),r=l(n(63860));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{text:"Default",id:"default-badge"})," ",a.default.createElement(r.default,{intent:"primary",text:"Primary",id:"primary-badge"})," ",a.default.createElement(r.default,{intent:"secondary",text:"Secondary",id:"secondary-badge"})," ",a.default.createElement(r.default,{intent:"positive",text:"Positive",id:"positive-badge"})," ",a.default.createElement(r.default,{intent:"negative",text:"Negative",id:"negative-badge"})," ",a.default.createElement(r.default,{intent:"warning",text:"Warning",id:"warning-badge"})," ",a.default.createElement(r.default,{intent:"info",text:"Info",id:"info-badge"}))}},29597:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Badge-module__clinical-lowlight-theme___DEYml","orion-fusion-theme":"Badge-module__orion-fusion-theme___hYM9V","redwood-theme":"Badge-module__redwood-theme___7Rgqv",badge:"Badge-module__badge___+rb+p",tiny:"Badge-module__tiny___I01FH","is-reversed":"Badge-module__is-reversed___yAJxz","has-icon":"Badge-module__has-icon___8w7lR",text:"Badge-module__text___BeS5P","badge-icon":"Badge-module__badge-icon___75jU8",small:"Badge-module__small___Duxcl",medium:"Badge-module__medium___1Y1e+",large:"Badge-module__large___YUDdz",huge:"Badge-module__huge___bkvh6",default:"Badge-module__default___uWFbA",primary:"Badge-module__primary___62Nx+",secondary:"Badge-module__secondary___sb6EM",positive:"Badge-module__positive___hyUh3",negative:"Badge-module__negative___YRN6X",warning:"Badge-module__warning___MKbhA",info:"Badge-module__info___QLj6M"}}}]);