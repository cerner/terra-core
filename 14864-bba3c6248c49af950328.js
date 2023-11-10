"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[14864],{40301:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BadgeSize=t.BadgeIntent=void 0;var r=s(n(67294)),l=s(n(45697)),i=s(n(94184)),u=s(n(47166)),d=n(25387),o=s(n(50026)),f=s(n(74754)),c=s(n(81484)),_=["size","intent","intl","isReversed","text","icon","visuallyHiddenText"];function s(e){return e&&e.__esModule?e:{default:e}}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=u.default.bind(c.default),v=t.BadgeIntent={DEFAULT:"default",PRIMARY:"primary",SECONDARY:"secondary",INFO:"info",WARNING:"warning",POSITIVE:"positive",NEGATIVE:"negative"},h=(t.BadgeSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"},{children:l.default.node,icon:l.default.element,intent:l.default.oneOf(["default","primary","secondary","info","warning","positive","negative"]),intl:l.default.shape({formatMessage:l.default.func}),isReversed:l.default.bool,size:l.default.oneOf(["tiny","small","medium","large","huge"]),text:l.default.string,visuallyHiddenText:l.default.string}),O={children:null,icon:null,intent:"default",isReversed:!1,size:"small",text:null,visuallyHiddenText:void 0},E=function(e){var t=e.size,n=e.intent,a=e.intl,l=e.isReversed,u=e.text,d=e.icon,s=e.visuallyHiddenText,m=b(e,_),y=r.default.useContext(o.default),h=(0,i.default)(p("badge",{"has-icon":d},{"is-reversed":l},t,n,y.className),m.className),O=u?r.default.createElement("span",{className:c.default.text},u):null,E=n!==v.DEFAULT?r.default.createElement(f.default,{text:a.formatMessage({id:"Terra.badge.intent.".concat(n)})}):null,x=s?r.default.createElement(f.default,{text:s}):null,B=l?[E,O,x,d,m.children]:[d,E,O,x,m.children];return r.default.createElement.apply(r.default,["span",g(g({},m),{},{className:h})].concat(B))};E.propTypes=h,E.defaultProps=O;t.default=(0,d.injectIntl)(E)},14864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(40301));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{text:"Default",id:"default-badge"})," ",a.default.createElement(r.default,{intent:"primary",text:"Primary",id:"primary-badge"})," ",a.default.createElement(r.default,{intent:"secondary",text:"Secondary",id:"secondary-badge"})," ",a.default.createElement(r.default,{intent:"positive",text:"Positive",id:"positive-badge"})," ",a.default.createElement(r.default,{intent:"negative",text:"Negative",id:"negative-badge"})," ",a.default.createElement(r.default,{intent:"warning",text:"Warning",id:"warning-badge"})," ",a.default.createElement(r.default,{intent:"info",text:"Info",id:"info-badge"}))}},81484:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Badge-module__clinical-lowlight-theme___DEYml","orion-fusion-theme":"Badge-module__orion-fusion-theme___hYM9V",badge:"Badge-module__badge___+rb+p","is-reversed":"Badge-module__is-reversed___yAJxz","has-icon":"Badge-module__has-icon___8w7lR",text:"Badge-module__text___BeS5P",tiny:"Badge-module__tiny___I01FH",small:"Badge-module__small___Duxcl",medium:"Badge-module__medium___1Y1e+",large:"Badge-module__large___YUDdz",huge:"Badge-module__huge___bkvh6",default:"Badge-module__default___uWFbA",primary:"Badge-module__primary___62Nx+",secondary:"Badge-module__secondary___sb6EM",positive:"Badge-module__positive___hyUh3",negative:"Badge-module__negative___YRN6X",warning:"Badge-module__warning___MKbhA",info:"Badge-module__info___QLj6M"}}}]);