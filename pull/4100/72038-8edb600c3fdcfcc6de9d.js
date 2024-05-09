"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[72038],{72038:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,a=(l=r(96540))&&l.__esModule?l:{default:l},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(l,o,d):l[o]=e[o]}return l.default=e,r&&r.set(e,l),l}(r(17568));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}t.default=function(){return a.default.createElement(o.default,{paddingStyle:"none"},a.default.createElement(o.Header,null,a.default.createElement(o.HeaderCell,{key:"NAME"},"Name"),a.default.createElement(o.HeaderCell,{key:"ADDRESS"},"Address"),a.default.createElement(o.HeaderCell,{key:"PHONE_NUMBER"},"Phone Number")),a.default.createElement(o.Body,null,a.default.createElement(o.Row,{key:"PERSON_0"},a.default.createElement(o.Cell,{key:"NAME"},"John Smith"),a.default.createElement(o.Cell,{key:"ADDRESS"},"123 Adams Drive"),a.default.createElement(o.Cell,{key:"PHONE_NUMBER"},"111-222-3333")),a.default.createElement(o.Row,{key:"PERSON_1"},a.default.createElement(o.Cell,{key:"NAME"},"Jane Smith"),a.default.createElement(o.Cell,{key:"ADDRESS"},"321 Drive Street"),a.default.createElement(o.Cell,{key:"PHONE_NUMBER"},"111-222-3333")),a.default.createElement(o.Row,{key:"PERSON_2"},a.default.createElement(o.Cell,{key:"NAME"},"Dave Smith"),a.default.createElement(o.Cell,{key:"ADDRESS"},"213 Raymond Road"),a.default.createElement(o.Cell,{key:"PHONE_NUMBER"},"111-222-3333"))))}},17212:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(96540)),l=i(r(5556)),a=i(r(46942)),o=i(r(67967)),u=i(r(52103)),d=i(r(19677)),f=["children","disableStripes","paddingStyle"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=o.default.bind(d.default),y={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},b=function(e){var t=e.children,r=e.disableStripes,l=e.paddingStyle,o=p(e,f),d=n.default.useContext(u.default),i=(0,a.default)(s("table",{striped:!r},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},d.className),o.className);return n.default.createElement("table",c({},o,{className:i}),t)};b.propTypes=y,b.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=b},15460:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(96540)),l=o(r(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d={children:l.default.node},f=function(e){var t=e.children,r=u(e,a);return n.default.createElement("tbody",r,t)};f.propTypes=d,f.defaultProps={children:[]};t.default=f},59584:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(96540)),l=o(r(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d={children:l.default.node},f=function(e){var t=e.children,r=u(e,a);return n.default.createElement("td",r,t)};f.propTypes=d,f.defaultProps={children:[]};t.default=f},14281:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(96540)),l=u(r(5556)),a=u(r(93623)),o=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var f={children:l.default.node},i=function(e){var t=e.children,r=d(e,o);return n.default.createElement("thead",r,n.default.createElement("tr",null,a.default.addScope(t,"col")))};i.propTypes=f,i.defaultProps={children:[]};t.default=i},93401:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(96540)),l=o(r(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d={children:l.default.node},f=function(e){var t=e.children,r=u(e,a);return n.default.createElement("th",r,t)};f.propTypes=d,f.defaultProps={children:[]};t.default=f},96646:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(96540)),l=f(r(5556)),a=f(r(67967)),o=f(r(19677)),u=f(r(93623)),d=["children"];function f(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=a.default.bind(o.default),s={children:l.default.node},y=function(e){var t=e.children,r=c(e,d),l=p(["row"]);return n.default.createElement("tr",i({},r,{className:r.className?"".concat(l," ").concat(r.className):l}),u.default.addScope(t,"row"))};y.propTypes=s,y.defaultProps={children:[]};t.default=y},93623:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=(n=r(96540))&&n.__esModule?n:{default:n};var a={addScope:function(e,t){var r=[];return l.default.Children.forEach(e,(function(e){r.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),r}};t.default=a},17568:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=f(r(17212)),l=f(r(15460)),a=f(r(96646)),o=f(r(59584)),u=f(r(14281)),d=f(r(93401));function f(e){return e&&e.__esModule?e:{default:e}}t.default=n.default},19677:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);