"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[28219],{28219:function(e,l,u){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=o(u(96540)),m=o(u(20030));function o(e){return e&&e.__esModule?e:{default:e}}u(31091);l.default=function(){return n.default.createElement(m.default,{id:"grid"},n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-1",huge:1},n.default.createElement("div",{className:"terra-grid-example"},"1 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-2",huge:2},n.default.createElement("div",{className:"terra-grid-example"},"2 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-3",huge:3},n.default.createElement("div",{className:"terra-grid-example"},"3 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-4",huge:4},n.default.createElement("div",{className:"terra-grid-example"},"4 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-5",huge:5},n.default.createElement("div",{className:"terra-grid-example"},"5 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-6",huge:6},n.default.createElement("div",{className:"terra-grid-example"},"6 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-7",huge:7},n.default.createElement("div",{className:"terra-grid-example"},"7 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-8",huge:8},n.default.createElement("div",{className:"terra-grid-example"},"8 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-9",huge:9},n.default.createElement("div",{className:"terra-grid-example"},"9 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-10",huge:10},n.default.createElement("div",{className:"terra-grid-example"},"10 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-11",huge:11},n.default.createElement("div",{className:"terra-grid-example"},"11 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-12",huge:12},n.default.createElement("div",{className:"terra-grid-example"},"12 Column Span"))))}},20030:function(e,l,u){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=r(u(96540)),m=r(u(5556)),o=r(u(48832)),_=r(u(34980));function r(e){return e&&e.__esModule?e:{default:e}}var t={children:m.default.node.isRequired},d=function(e){return n.default.createElement("div",e)};d.propTypes=t,d.Row=o.default,d.Column=_.default;l.default=d},34980:function(e,l,u){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var m=c(u(96540)),o=c(u(5556)),_=c(u(46942)),r=c(u(67967)),t=c(u(52103)),d=c(u(95235)),a=["className","children","tiny","small","medium","large","huge","enormous"];function c(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n])}return e},i.apply(this,arguments)}function f(e,l,u){var m;return m=function(e,l){if("object"!=n(e)||!e)return e;var u=e[Symbol.toPrimitive];if(void 0!==u){var m=u.call(e,l||"default");if("object"!=n(m))return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(e)}(l,"string"),(l="symbol"==n(m)?m:m+"")in e?Object.defineProperty(e,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):e[l]=u,e}function s(e,l){if(null==e)return{};var u,n,m=function(e,l){if(null==e)return{};var u={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(l.indexOf(n)>=0)continue;u[n]=e[n]}return u}(e,l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)u=o[n],l.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(e,u)&&(m[u]=e[u])}return m}var g=r.default.bind(d.default),p=function(e,l){if(e[l]){var u=e[l];return u>=1&&u<=12?null:new Error("".concat(l," must be in range 1 to 12 inclusively"))}return null},G={children:o.default.node,className:o.default.string,tiny:p,enormous:p,huge:p,large:p,medium:p,small:p},h=function(e){var l=e.className,u=e.children,n=e.tiny,o=e.small,r=e.medium,d=e.large,c=e.huge,p=e.enormous,G=s(e,a),h=m.default.useContext(t.default),y=(0,_.default)(g(["column",f(f(f(f(f(f({},"column-tiny-".concat(n),n),"column-small-".concat(o),o),"column-medium-".concat(r),r),"column-large-".concat(d),d),"column-huge-".concat(c),c),"column-enormous-".concat(p),p),h.className]),l);return m.default.createElement("div",i({},G,{className:y}),u)};h.propTypes=G;l.default=h},48832:function(e,l,u){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=a(u(96540)),m=a(u(5556)),o=a(u(46942)),_=a(u(67967)),r=a(u(52103)),t=a(u(95235)),d=["className","children"];function a(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n])}return e},c.apply(this,arguments)}function i(e,l){if(null==e)return{};var u,n,m=function(e,l){if(null==e)return{};var u={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(l.indexOf(n)>=0)continue;u[n]=e[n]}return u}(e,l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)u=o[n],l.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(e,u)&&(m[u]=e[u])}return m}var f=_.default.bind(t.default),s={children:m.default.node.isRequired,className:m.default.string},g=function(e){var l=e.className,u=e.children,m=i(e,d),_=n.default.useContext(r.default);return n.default.createElement("div",c({},m,{className:(0,o.default)(f("grid",_.className),l)}),u)};g.propTypes=s;l.default=g},31091:function(e,l,u){u.r(l),l.default={}},95235:function(e,l,u){u.r(l),l.default={"clinical-lowlight-theme":"Grid-module__clinical-lowlight-theme___WfV-S","orion-fusion-theme":"Grid-module__orion-fusion-theme___xoMqT",grid:"Grid-module__grid___jE9D-",column:"Grid-module__column___sGA4X","column-tiny-1":"Grid-module__column-tiny-1___-k2mz","column-tiny-2":"Grid-module__column-tiny-2___ndvgK","column-tiny-3":"Grid-module__column-tiny-3___jMwsJ","column-tiny-4":"Grid-module__column-tiny-4___3ycN9","column-tiny-5":"Grid-module__column-tiny-5___Q7xhd","column-tiny-6":"Grid-module__column-tiny-6___FkAyN","column-tiny-7":"Grid-module__column-tiny-7___HxI3z","column-tiny-8":"Grid-module__column-tiny-8___V2vmA","column-tiny-9":"Grid-module__column-tiny-9___T38T7","column-tiny-10":"Grid-module__column-tiny-10___vRUtn","column-tiny-11":"Grid-module__column-tiny-11___mGCtS","column-tiny-12":"Grid-module__column-tiny-12___vvXO3","column-small-1":"Grid-module__column-small-1___WhwHC","column-small-2":"Grid-module__column-small-2___I48V2","column-small-3":"Grid-module__column-small-3___5cEbB","column-small-4":"Grid-module__column-small-4___tmHtN","column-small-5":"Grid-module__column-small-5___QRJhM","column-small-6":"Grid-module__column-small-6___O92+F","column-small-7":"Grid-module__column-small-7___StZ6p","column-small-8":"Grid-module__column-small-8___CjSSF","column-small-9":"Grid-module__column-small-9___1IHvH","column-small-10":"Grid-module__column-small-10___uMDZ6","column-small-11":"Grid-module__column-small-11___MIPlY","column-small-12":"Grid-module__column-small-12___-Iea+","column-medium-1":"Grid-module__column-medium-1___0ENyM","column-medium-2":"Grid-module__column-medium-2___lPAeW","column-medium-3":"Grid-module__column-medium-3___ISHGP","column-medium-4":"Grid-module__column-medium-4___JUeNg","column-medium-5":"Grid-module__column-medium-5___u4WE-","column-medium-6":"Grid-module__column-medium-6___ILVvF","column-medium-7":"Grid-module__column-medium-7___4hC6O","column-medium-8":"Grid-module__column-medium-8___7-EQh","column-medium-9":"Grid-module__column-medium-9___jSh0H","column-medium-10":"Grid-module__column-medium-10___KhEjw","column-medium-11":"Grid-module__column-medium-11___QUyhm","column-medium-12":"Grid-module__column-medium-12___Ea947","column-large-1":"Grid-module__column-large-1___Fo6I4","column-large-2":"Grid-module__column-large-2___LdUz-","column-large-3":"Grid-module__column-large-3___b-34c","column-large-4":"Grid-module__column-large-4___bvF3w","column-large-5":"Grid-module__column-large-5___NN4Lh","column-large-6":"Grid-module__column-large-6___awRZm","column-large-7":"Grid-module__column-large-7___WkfOO","column-large-8":"Grid-module__column-large-8___Pl6em","column-large-9":"Grid-module__column-large-9___iDhKL","column-large-10":"Grid-module__column-large-10___Cu9fD","column-large-11":"Grid-module__column-large-11___ha4GS","column-large-12":"Grid-module__column-large-12___k97Y5","column-huge-1":"Grid-module__column-huge-1___c9IM8","column-huge-2":"Grid-module__column-huge-2___tFbsc","column-huge-3":"Grid-module__column-huge-3___OQwYu","column-huge-4":"Grid-module__column-huge-4___FXj-9","column-huge-5":"Grid-module__column-huge-5___TCpLt","column-huge-6":"Grid-module__column-huge-6___x2mBX","column-huge-7":"Grid-module__column-huge-7___kWu+v","column-huge-8":"Grid-module__column-huge-8___40jW7","column-huge-9":"Grid-module__column-huge-9___+LI4r","column-huge-10":"Grid-module__column-huge-10___QCz3j","column-huge-11":"Grid-module__column-huge-11___Y5MxR","column-huge-12":"Grid-module__column-huge-12___X+Wtx","column-enormous-1":"Grid-module__column-enormous-1___X-r1K","column-enormous-2":"Grid-module__column-enormous-2___jCGau","column-enormous-3":"Grid-module__column-enormous-3___sCNf8","column-enormous-4":"Grid-module__column-enormous-4___UtbUM","column-enormous-5":"Grid-module__column-enormous-5___a-Ckr","column-enormous-6":"Grid-module__column-enormous-6___HWnVg","column-enormous-7":"Grid-module__column-enormous-7___AWMk2","column-enormous-8":"Grid-module__column-enormous-8___9iOHi","column-enormous-9":"Grid-module__column-enormous-9___dB51t","column-enormous-10":"Grid-module__column-enormous-10___h3xJn","column-enormous-11":"Grid-module__column-enormous-11___VKSpn","column-enormous-12":"Grid-module__column-enormous-12___a35qF"}}}]);