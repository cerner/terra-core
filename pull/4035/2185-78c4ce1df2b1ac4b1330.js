"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[2185],{2185:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,a=(l=r(67294))&&l.__esModule?l:{default:l},u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var d=a?Object.getOwnPropertyDescriptor(e,u):null;d&&(d.get||d.set)?Object.defineProperty(l,u,d):l[u]=e[u]}return l.default=e,r&&r.set(e,l),l}(r(37515));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}t.default=function(){return a.default.createElement(u.default,{paddingStyle:"compact"},a.default.createElement(u.Header,null,a.default.createElement(u.HeaderCell,{key:"NAME"},"Name"),a.default.createElement(u.HeaderCell,{key:"ADDRESS"},"Address"),a.default.createElement(u.HeaderCell,{key:"PHONE_NUMBER"},"Phone Number")),a.default.createElement(u.Body,null,a.default.createElement(u.Row,{key:"PERSON_0"},a.default.createElement(u.Cell,{key:"NAME"},"John Smith"),a.default.createElement(u.Cell,{key:"ADDRESS"},"123 Adams Drive"),a.default.createElement(u.Cell,{key:"PHONE_NUMBER"},"111-222-3333")),a.default.createElement(u.Row,{key:"PERSON_1"},a.default.createElement(u.Cell,{key:"NAME"},"Jane Smith"),a.default.createElement(u.Cell,{key:"ADDRESS"},"321 Drive Street"),a.default.createElement(u.Cell,{key:"PHONE_NUMBER"},"111-222-3333")),a.default.createElement(u.Row,{key:"PERSON_2"},a.default.createElement(u.Cell,{key:"NAME"},"Dave Smith"),a.default.createElement(u.Cell,{key:"ADDRESS"},"213 Raymond Road"),a.default.createElement(u.Cell,{key:"PHONE_NUMBER"},"111-222-3333"))))}},32634:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(67294)),l=c(r(45697)),a=c(r(93967)),u=c(r(19845)),o=c(r(50026)),d=c(r(16749)),f=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=u.default.bind(d.default),y={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},b=function(e){var t=e.children,r=e.disableStripes,l=e.paddingStyle,u=p(e,f),d=n.default.useContext(o.default),c=(0,a.default)(s("table",{striped:!r},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},d.className),u.className);return n.default.createElement("table",i({},u,{className:c}),t)};b.propTypes=y,b.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=b},80196:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(67294)),l=u(r(45697)),a=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d={children:l.default.node},f=function(e){var t=e.children,r=o(e,a);return n.default.createElement("tbody",r,t)};f.propTypes=d,f.defaultProps={children:[]};t.default=f},8685:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(67294)),l=u(r(45697)),a=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d={children:l.default.node},f=function(e){var t=e.children,r=o(e,a);return n.default.createElement("td",r,t)};f.propTypes=d,f.defaultProps={children:[]};t.default=f},19852:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(67294)),l=o(r(45697)),a=o(r(29805)),u=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var f={children:l.default.node},c=function(e){var t=e.children,r=d(e,u);return n.default.createElement("thead",r,n.default.createElement("tr",null,a.default.addScope(t,"col")))};c.propTypes=f,c.defaultProps={children:[]};t.default=c},38880:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(67294)),l=u(r(45697)),a=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d={children:l.default.node},f=function(e){var t=e.children,r=o(e,a);return n.default.createElement("th",r,t)};f.propTypes=d,f.defaultProps={children:[]};t.default=f},70829:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(67294)),l=f(r(45697)),a=f(r(19845)),u=f(r(16749)),o=f(r(29805)),d=["children"];function f(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=a.default.bind(u.default),s={children:l.default.node},y=function(e){var t=e.children,r=i(e,d),l=p(["row"]);return n.default.createElement("tr",c({},r,{className:r.className?"".concat(l," ").concat(r.className):l}),o.default.addScope(t,"row"))};y.propTypes=s,y.defaultProps={children:[]};t.default=y},29805:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=(n=r(67294))&&n.__esModule?n:{default:n};var a={addScope:function(e,t){var r=[];return l.default.Children.forEach(e,(function(e){r.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),r}};t.default=a},37515:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=f(r(32634)),l=f(r(80196)),a=f(r(70829)),u=f(r(8685)),o=f(r(19852)),d=f(r(38880));function f(e){return e&&e.__esModule?e:{default:e}}t.default=n.default},16749:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);