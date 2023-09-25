"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[64857],{40301:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BadgeSize=t.BadgeIntent=void 0;var r=c(n(67294)),a=c(n(45697)),i=c(n(94184)),u=c(n(47166)),d=c(n(50026)),o=c(n(74754)),f=c(n(81484)),_=["size","intent","isReversed","text","icon","visuallyHiddenText"];function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=u.default.bind(f.default);t.BadgeIntent={DEFAULT:"default",PRIMARY:"primary",SECONDARY:"secondary",INFO:"info",WARNING:"warning",POSITIVE:"positive",NEGATIVE:"negative"};t.BadgeSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var p={children:a.default.node,icon:a.default.element,intent:a.default.oneOf(["default","primary","secondary","info","warning","positive","negative"]),isReversed:a.default.bool,size:a.default.oneOf(["tiny","small","medium","large","huge"]),text:a.default.string,visuallyHiddenText:a.default.string},v={children:null,icon:null,intent:"default",isReversed:!1,size:"small",text:null,visuallyHiddenText:void 0},h=function(e){var t=e.size,n=e.intent,l=e.isReversed,a=e.text,u=e.icon,c=e.visuallyHiddenText,s=y(e,_),g=r.default.useContext(d.default),p=(0,i.default)(b("badge",{"has-icon":u},{"is-reversed":l},t,n,g.className),s.className),v=a?r.default.createElement("span",{className:f.default.text},a):null,h="default"!==n?r.default.createElement(o.default,{text:n}):null,O=c?r.default.createElement(o.default,{text:c}):null,x=l?[h,v,O,u,s.children]:[u,h,v,O,s.children];return r.default.createElement.apply(r.default,["span",m(m({},s),{},{className:p})].concat(x))};h.propTypes=p,h.defaultProps=v;var O=h;t.default=O},64857:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(67294)),r=a(n(40301));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(){return l.default.createElement("div",null,l.default.createElement(r.default,{size:"tiny",text:"Tiny",id:"tiny-badge"})," ",l.default.createElement(r.default,{size:"small",text:"Small",id:"small-badge"})," ",l.default.createElement(r.default,{size:"medium",text:"Medium",id:"medium-badge"})," ",l.default.createElement(r.default,{size:"large",text:"Large",id:"large-badge"})," ",l.default.createElement(r.default,{size:"huge",text:"Huge",id:"huge-badge"}))};t.default=i},81484:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Badge-module__clinical-lowlight-theme___DEYml","orion-fusion-theme":"Badge-module__orion-fusion-theme___hYM9V",badge:"Badge-module__badge___+rb+p","is-reversed":"Badge-module__is-reversed___yAJxz","has-icon":"Badge-module__has-icon___8w7lR",text:"Badge-module__text___BeS5P",tiny:"Badge-module__tiny___I01FH",small:"Badge-module__small___Duxcl",medium:"Badge-module__medium___1Y1e+",large:"Badge-module__large___YUDdz",huge:"Badge-module__huge___bkvh6",default:"Badge-module__default___uWFbA",primary:"Badge-module__primary___62Nx+",secondary:"Badge-module__secondary___sb6EM",positive:"Badge-module__positive___hyUh3",negative:"Badge-module__negative___YRN6X",warning:"Badge-module__warning___MKbhA",info:"Badge-module__info___QLj6M"}}}]);