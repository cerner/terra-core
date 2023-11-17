"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[89165],{89165:function(e,l,u){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var o=m(u(67294)),n=m(u(64123));function m(e){return e&&e.__esModule?e:{default:e}}u(73790);l.default=function(){return o.default.createElement(n.default,{id:"grid"},o.default.createElement(n.default.Row,{id:"row"},o.default.createElement(n.default.Column,{id:"column-1",tiny:6},o.default.createElement("div",{className:"terra-grid-example"},"First Column content")),o.default.createElement(n.default.Column,{id:"column-2",tiny:6},o.default.createElement("div",{className:"terra-grid-example"},"Second Column content"))))}},64123:function(e,l,u){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var o=r(u(67294)),n=r(u(45697)),m=r(u(71630)),_=r(u(5902));function r(e){return e&&e.__esModule?e:{default:e}}var d={children:n.default.node.isRequired},c=function(e){return o.default.createElement("div",e)};c.propTypes=d,c.Row=m.default,c.Column=_.default;l.default=c},5902:function(e,l,u){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=i(u(67294)),m=i(u(45697)),_=i(u(94184)),r=i(u(47166)),d=i(u(50026)),c=i(u(95148)),t=["className","children","tiny","small","medium","large","huge","enormous"];function i(e){return e&&e.__esModule?e:{default:e}}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o])}return e},a.apply(this,arguments)}function s(e,l,u){return(l=function(e){var l=function(e,l){if("object"!==o(e)||null===e)return e;var u=e[Symbol.toPrimitive];if(void 0!==u){var n=u.call(e,l||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(e)}(e,"string");return"symbol"===o(l)?l:String(l)}(l))in e?Object.defineProperty(e,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):e[l]=u,e}function f(e,l){if(null==e)return{};var u,o,n=function(e,l){if(null==e)return{};var u,o,n={},m=Object.keys(e);for(o=0;o<m.length;o++)u=m[o],l.indexOf(u)>=0||(n[u]=e[u]);return n}(e,l);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(o=0;o<m.length;o++)u=m[o],l.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(e,u)&&(n[u]=e[u])}return n}var g=r.default.bind(c.default),G=function(e,l){if(e[l]){var u=e[l];return u>=1&&u<=12?null:new Error("".concat(l," must be in range 1 to 12 inclusively"))}return null},y={children:m.default.node,className:m.default.string,tiny:G,enormous:G,huge:G,large:G,medium:G,small:G},h=function(e){var l=e.className,u=e.children,o=e.tiny,m=e.small,r=e.medium,c=e.large,i=e.huge,G=e.enormous,y=f(e,t),h=n.default.useContext(d.default),v=(0,_.default)(g(["column",s(s(s(s(s(s({},"column-tiny-".concat(o),o),"column-small-".concat(m),m),"column-medium-".concat(r),r),"column-large-".concat(c),c),"column-huge-".concat(i),i),"column-enormous-".concat(G),G),h.className]),l);return n.default.createElement("div",a({},y,{className:v}),u)};h.propTypes=y;l.default=h},71630:function(e,l,u){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var o=t(u(67294)),n=t(u(45697)),m=t(u(94184)),_=t(u(47166)),r=t(u(50026)),d=t(u(95148)),c=["className","children"];function t(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o])}return e},i.apply(this,arguments)}function a(e,l){if(null==e)return{};var u,o,n=function(e,l){if(null==e)return{};var u,o,n={},m=Object.keys(e);for(o=0;o<m.length;o++)u=m[o],l.indexOf(u)>=0||(n[u]=e[u]);return n}(e,l);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(o=0;o<m.length;o++)u=m[o],l.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(e,u)&&(n[u]=e[u])}return n}var s=_.default.bind(d.default),f={children:n.default.node.isRequired,className:n.default.string},g=function(e){var l=e.className,u=e.children,n=a(e,c),_=o.default.useContext(r.default);return o.default.createElement("div",i({},n,{className:(0,m.default)(s("grid",_.className),l)}),u)};g.propTypes=f;l.default=g},73790:function(e,l,u){u.r(l),l.default={}},95148:function(e,l,u){u.r(l),l.default={"clinical-lowlight-theme":"Grid-module__clinical-lowlight-theme___WfV-S","orion-fusion-theme":"Grid-module__orion-fusion-theme___xoMqT",grid:"Grid-module__grid___jE9D-",column:"Grid-module__column___sGA4X","column-tiny-1":"Grid-module__column-tiny-1___-k2mz","column-tiny-2":"Grid-module__column-tiny-2___ndvgK","column-tiny-3":"Grid-module__column-tiny-3___jMwsJ","column-tiny-4":"Grid-module__column-tiny-4___3ycN9","column-tiny-5":"Grid-module__column-tiny-5___Q7xhd","column-tiny-6":"Grid-module__column-tiny-6___FkAyN","column-tiny-7":"Grid-module__column-tiny-7___HxI3z","column-tiny-8":"Grid-module__column-tiny-8___V2vmA","column-tiny-9":"Grid-module__column-tiny-9___T38T7","column-tiny-10":"Grid-module__column-tiny-10___vRUtn","column-tiny-11":"Grid-module__column-tiny-11___mGCtS","column-tiny-12":"Grid-module__column-tiny-12___vvXO3","column-small-1":"Grid-module__column-small-1___WhwHC","column-small-2":"Grid-module__column-small-2___I48V2","column-small-3":"Grid-module__column-small-3___5cEbB","column-small-4":"Grid-module__column-small-4___tmHtN","column-small-5":"Grid-module__column-small-5___QRJhM","column-small-6":"Grid-module__column-small-6___O92+F","column-small-7":"Grid-module__column-small-7___StZ6p","column-small-8":"Grid-module__column-small-8___CjSSF","column-small-9":"Grid-module__column-small-9___1IHvH","column-small-10":"Grid-module__column-small-10___uMDZ6","column-small-11":"Grid-module__column-small-11___MIPlY","column-small-12":"Grid-module__column-small-12___-Iea+","column-medium-1":"Grid-module__column-medium-1___0ENyM","column-medium-2":"Grid-module__column-medium-2___lPAeW","column-medium-3":"Grid-module__column-medium-3___ISHGP","column-medium-4":"Grid-module__column-medium-4___JUeNg","column-medium-5":"Grid-module__column-medium-5___u4WE-","column-medium-6":"Grid-module__column-medium-6___ILVvF","column-medium-7":"Grid-module__column-medium-7___4hC6O","column-medium-8":"Grid-module__column-medium-8___7-EQh","column-medium-9":"Grid-module__column-medium-9___jSh0H","column-medium-10":"Grid-module__column-medium-10___KhEjw","column-medium-11":"Grid-module__column-medium-11___QUyhm","column-medium-12":"Grid-module__column-medium-12___Ea947","column-large-1":"Grid-module__column-large-1___Fo6I4","column-large-2":"Grid-module__column-large-2___LdUz-","column-large-3":"Grid-module__column-large-3___b-34c","column-large-4":"Grid-module__column-large-4___bvF3w","column-large-5":"Grid-module__column-large-5___NN4Lh","column-large-6":"Grid-module__column-large-6___awRZm","column-large-7":"Grid-module__column-large-7___WkfOO","column-large-8":"Grid-module__column-large-8___Pl6em","column-large-9":"Grid-module__column-large-9___iDhKL","column-large-10":"Grid-module__column-large-10___Cu9fD","column-large-11":"Grid-module__column-large-11___ha4GS","column-large-12":"Grid-module__column-large-12___k97Y5","column-huge-1":"Grid-module__column-huge-1___c9IM8","column-huge-2":"Grid-module__column-huge-2___tFbsc","column-huge-3":"Grid-module__column-huge-3___OQwYu","column-huge-4":"Grid-module__column-huge-4___FXj-9","column-huge-5":"Grid-module__column-huge-5___TCpLt","column-huge-6":"Grid-module__column-huge-6___x2mBX","column-huge-7":"Grid-module__column-huge-7___kWu+v","column-huge-8":"Grid-module__column-huge-8___40jW7","column-huge-9":"Grid-module__column-huge-9___+LI4r","column-huge-10":"Grid-module__column-huge-10___QCz3j","column-huge-11":"Grid-module__column-huge-11___Y5MxR","column-huge-12":"Grid-module__column-huge-12___X+Wtx","column-enormous-1":"Grid-module__column-enormous-1___X-r1K","column-enormous-2":"Grid-module__column-enormous-2___jCGau","column-enormous-3":"Grid-module__column-enormous-3___sCNf8","column-enormous-4":"Grid-module__column-enormous-4___UtbUM","column-enormous-5":"Grid-module__column-enormous-5___a-Ckr","column-enormous-6":"Grid-module__column-enormous-6___HWnVg","column-enormous-7":"Grid-module__column-enormous-7___AWMk2","column-enormous-8":"Grid-module__column-enormous-8___9iOHi","column-enormous-9":"Grid-module__column-enormous-9___dB51t","column-enormous-10":"Grid-module__column-enormous-10___h3xJn","column-enormous-11":"Grid-module__column-enormous-11___VKSpn","column-enormous-12":"Grid-module__column-enormous-12___a35qF"}}}]);