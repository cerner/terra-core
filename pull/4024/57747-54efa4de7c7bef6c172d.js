"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[57747],{40301:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BadgeSize=t.BadgeIntent=void 0;var r=s(n(67294)),a=s(n(45697)),i=s(n(93967)),o=s(n(19845)),d=n(25387),u=s(n(50026)),_=s(n(74754)),c=s(n(81484)),f=["size","intent","intl","isReversed","text","icon","visuallyHiddenText"];function s(e){return e&&e.__esModule?e:{default:e}}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){var r;return r=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=o.default.bind(c.default),v=(t.BadgeIntent={DEFAULT:"default",PRIMARY:"primary",SECONDARY:"secondary",INFO:"info",WARNING:"warning",POSITIVE:"positive",NEGATIVE:"negative"},t.BadgeSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"},{children:a.default.node,icon:a.default.element,intent:a.default.oneOf(["default","primary","secondary","info","warning","positive","negative"]),intl:a.default.shape({formatMessage:a.default.func}),isReversed:a.default.bool,size:a.default.oneOf(["tiny","small","medium","large","huge"]),text:a.default.string,visuallyHiddenText:a.default.string}),h={children:null,icon:null,intent:"default",isReversed:!1,size:"small",text:null,visuallyHiddenText:void 0},O=function(e){var t=e.size,n=e.intent,l=(e.intl,e.isReversed),a=e.text,o=e.icon,d=e.visuallyHiddenText,s=p(e,f),m=r.default.useContext(u.default),y=(0,i.default)(b("badge",{"has-icon":o},{"is-reversed":l},t,n,m.className),s.className),v=o;o&&"redwood-theme"===m.className&&(v=r.default.cloneElement(o,{className:(0,i.default)(b("badge-icon"))}));var h=a?r.default.createElement("span",{className:c.default.text},a):null,O=d?r.default.createElement(_.default,{text:d}):null,B=l?[h,O,v,s.children]:[v,h,O,s.children];return r.default.createElement.apply(r.default,["span",g(g({},s),{},{className:y})].concat(B))};O.propTypes=v,O.defaultProps=h;t.default=(0,d.injectIntl)(O)},57747:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(67294)),r=a(n(40301));function a(e){return e&&e.__esModule?e:{default:e}}var i=l.default.createElement("svg",{className:"terra-Icon",height:"4em",width:"4em",viewBox:"0 0 48 48"},l.default.createElement("path",{d:"M24 0h-.1C10.7 0 0 10.8 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24S37.3 0 24 0zm-4 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z",fill:"#FFF"}));t.default=function(){return l.default.createElement("div",null,l.default.createElement(r.default,{icon:i,text:"icon",id:"text-right"})," ",l.default.createElement(r.default,{icon:i,text:"icon",isReversed:!0,id:"text-left"})," ",l.default.createElement(r.default,{icon:i,id:"no-text"}))}},81484:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Badge-module__clinical-lowlight-theme___DEYml","orion-fusion-theme":"Badge-module__orion-fusion-theme___hYM9V","redwood-theme":"Badge-module__redwood-theme___7Rgqv",badge:"Badge-module__badge___+rb+p",tiny:"Badge-module__tiny___I01FH","is-reversed":"Badge-module__is-reversed___yAJxz","has-icon":"Badge-module__has-icon___8w7lR",text:"Badge-module__text___BeS5P","badge-icon":"Badge-module__badge-icon___75jU8",small:"Badge-module__small___Duxcl",medium:"Badge-module__medium___1Y1e+",large:"Badge-module__large___YUDdz",huge:"Badge-module__huge___bkvh6",default:"Badge-module__default___uWFbA",primary:"Badge-module__primary___62Nx+",secondary:"Badge-module__secondary___sb6EM",positive:"Badge-module__positive___hyUh3",negative:"Badge-module__negative___YRN6X",warning:"Badge-module__warning___MKbhA",info:"Badge-module__info___QLj6M"}}}]);