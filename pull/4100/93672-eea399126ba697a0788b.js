"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[93672],{93672:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(96540)),o=i(r(68273));function i(e){return e&&e.__esModule?e:{default:e}}var a={"grid-template-columns":"100px 100px","grid-template-rows":"100px","grid-gap":"10px"},u={"grid-column-start":1,"grid-row-start":1},l={"grid-column-start":2,"grid-row-start":1};t.default=function(){return n.default.createElement(o.default,{id:"defaultDynamicGrid",defaultTemplate:a},n.default.createElement(o.default.Region,{id:"region1",defaultPosition:u},"R1"),n.default.createElement(o.default.Region,{id:"region2",defaultPosition:l},"R2"))}},68273:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(r(96540)),i=r(85399),a=s(r(5556)),u=s(r(46942)),l=r(18308),c=s(r(24734)),f=s(r(79106)),d=["defaultTemplate","tiny","small","medium","large","huge","children"];function s(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){var o;return o=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==n(o)?o:o+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var O={"grid-template-columns":a.default.string,"grid-template-rows":a.default.string,"grid-gap":a.default.string,style:a.default.object},v={children:a.default.node,defaultTemplate:a.default.shape(O),tiny:a.default.shape(O),small:a.default.shape(O),medium:a.default.shape(O),large:a.default.shape(O),huge:a.default.shape(O)},h=function(e){var t=e.defaultTemplate,r=e.tiny,n=e.small,a=e.medium,c=e.large,s=e.huge,m=e.children,O=b(e,d),v=function(e,t){return Object.keys(t).length?g({},"@media screen and (min-width: ".concat(e,")"),(0,l.grid)(t)):{}},h=i.StyleSheet.create({grid:y(y(y(y(y(y({},(0,l.grid)(t)),v(f.default.tiny,r)),v(f.default.small,n)),v(f.default.medium,a)),v(f.default.large,c)),v(f.default.huge,s))}),j=(0,u.default)(O.className,(0,i.css)(h.grid));return o.default.createElement("div",p({},O,{className:j}),m)};h.propTypes=v,h.defaultProps={defaultTemplate:{},tiny:{},small:{},medium:{},large:{},huge:{}},h.Region=c.default;t.default=h},24734:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(r(96540)),i=s(r(5556)),a=r(85399),u=s(r(67967)),l=s(r(79106)),c=s(r(1443)),f=r(18308),d=["children","defaultPosition","tiny","small","medium","large","huge"];function s(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){var o;return o=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==n(o)?o:o+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var O=u.default.bind(c.default),v={"grid-column-start":i.default.number,"grid-column-end":i.default.number,"grid-row-start":i.default.number,"grid-row-end":i.default.number,style:i.default.object},h={children:i.default.node,defaultPosition:i.default.shape(v),tiny:i.default.shape(v),small:i.default.shape(v),medium:i.default.shape(v),large:i.default.shape(v),huge:i.default.shape(v)},j=function(e){var t=e.children,r=e.defaultPosition,n=e.tiny,i=e.small,c=e.medium,s=e.large,m=e.huge,v=b(e,d),h=function(e,t){return Object.keys(t).length?g({},"@media screen and (min-width: ".concat(e,")"),(0,f.region)(t)):{}},j=a.StyleSheet.create({region:y(y(y(y(y(y({},(0,f.region)(r)),h(l.default.tiny,n)),h(l.default.small,i)),h(l.default.medium,c)),h(l.default.large,s)),h(l.default.huge,m))}),w=(0,u.default)(v.className,(0,a.css)(j.region));return o.default.createElement("div",p({},v,{className:w}),o.default.createElement("div",{className:O("region-child-container")},t))};j.propTypes=h,j.defaultProps={defaultPosition:{},tiny:{},small:{},medium:{},large:{},huge:{}};t.default=j},18308:function(e,t){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,n){var o;return o=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==r(o)?o:o+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.region=t.grid=void 0;var a=function(e,t){var r=t["grid-template-".concat(e)];if(void 0===r)return{};var n=(t["grid-gap"]||"0").split(/\s+/);return n="rows"===e?n[0]:n.slice(-1)[0],i(i({},"grid-template-".concat(e),r),"-ms-grid-".concat(e),r.split(/\s+/).join(" ".concat(n," ")))},u=function(e,t){var r=t["grid-".concat(e,"-start")];return void 0===r?{}:i(i({},"grid-".concat(e,"-start"),"".concat(r)),"-ms-grid-".concat(e),"".concat(2*r-1))},l=function(e,t){if(void 0===t["grid-".concat(e,"-end")])return{};var r=t["grid-".concat(e,"-start")]||t["grid-".concat(e,"-end")],n=t["grid-".concat(e,"-end")],o=r===n?1:2*(n-r)-1;return i(i({},"grid-".concat(e,"-end"),"".concat(n)),"-ms-grid-".concat(e,"-span"),"".concat(o))};t.grid=function(e){return o(o(o(o(o({},(t=e,0===Object.keys(t).length?{}:{display:window.CSS&&window.CSS.supports&&window.CSS.supports("display","grid")?"grid":"-ms-grid"})),function(e){return e["grid-gap"]?{"grid-gap":e["grid-gap"]}:{}}(e)),a("columns",e)),a("rows",e)),e.style||{});var t},t.region=function(e){return o(o(o(o(o({},u("column",e)),l("column",e)),u("row",e)),l("row",e)),e.style||{})}},79106:function(e,t,r){r.r(t),t.default={tiny:"544px",small:"768px",medium:"992px",large:"1216px",huge:"1440px"}},1443:function(e,t,r){r.r(t),t.default={"region-child-container":"Region-module__region-child-container___QPmaw"}}}]);