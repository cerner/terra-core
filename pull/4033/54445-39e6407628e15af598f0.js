"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[54445],{54445:function(e,l,u){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var m=o(u(67294)),n=o(u(64123));function o(e){return e&&e.__esModule?e:{default:e}}u(73790);l.default=function(){return m.default.createElement(n.default,{id:"grid"},m.default.createElement(n.default.Row,null,m.default.createElement(n.default.Column,{id:"column-1",medium:1},m.default.createElement("div",{className:"terra-grid-example"},"1 Column Span"))),m.default.createElement(n.default.Row,null,m.default.createElement(n.default.Column,{id:"column-2",medium:2},m.default.createElement("div",{className:"terra-grid-example"},"2 Column Span"))),m.default.createElement(n.default.Row,null,m.default.createElement(n.default.Column,{id:"column-3",medium:3},m.default.createElement("div",{className:"terra-grid-example"},"3 Column Span"))),m.default.createElement(n.default.Row,null,m.default.createElement(n.default.Column,{id:"column-4",medium:4},m.default.createElement("div",{className:"terra-grid-example"},"4 Column Span"))),m.default.createElement(n.default.Row,null,m.default.createElement(n.default.Column,{id:"column-5",medium:5},m.default.createElement("div",{className:"terra-grid-example"},"5 Column Span"))),m.default.createElement(n.default.Row,null,m.default.createElement(n.default.Column,{id:"column-6",medium:6},m.default.createElement("div",{className:"terra-grid-example"},"6 Column Span"))),m.default.createElement(n.default.Row,null,m.default.createElement(n.default.Column,{id:"column-7",medium:7},m.default.createElement("div",{className:"terra-grid-example"},"7 Column Span"))),m.default.createElement(n.default.Row,null,m.default.createElement(n.default.Column,{id:"column-8",medium:8},m.default.createElement("div",{className:"terra-grid-example"},"8 Column Span"))),m.default.createElement(n.default.Row,null,m.default.createElement(n.default.Column,{id:"column-9",medium:9},m.default.createElement("div",{className:"terra-grid-example"},"9 Column Span"))),m.default.createElement(n.default.Row,null,m.default.createElement(n.default.Column,{id:"column-10",medium:10},m.default.createElement("div",{className:"terra-grid-example"},"10 Column Span"))),m.default.createElement(n.default.Row,null,m.default.createElement(n.default.Column,{id:"column-11",medium:11},m.default.createElement("div",{className:"terra-grid-example"},"11 Column Span"))),m.default.createElement(n.default.Row,null,m.default.createElement(n.default.Column,{id:"column-12",medium:12},m.default.createElement("div",{className:"terra-grid-example"},"12 Column Span"))))}},64123:function(e,l,u){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var m=r(u(67294)),n=r(u(45697)),o=r(u(71630)),_=r(u(5902));function r(e){return e&&e.__esModule?e:{default:e}}var t={children:n.default.node.isRequired},d=function(e){return m.default.createElement("div",e)};d.propTypes=t,d.Row=o.default,d.Column=_.default;l.default=d},5902:function(e,l,u){function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=c(u(67294)),o=c(u(45697)),_=c(u(93967)),r=c(u(19845)),t=c(u(50026)),d=c(u(95148)),a=["className","children","tiny","small","medium","large","huge","enormous"];function c(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&(e[m]=u[m])}return e},i.apply(this,arguments)}function f(e,l,u){var n;return n=function(e,l){if("object"!=m(e)||!e)return e;var u=e[Symbol.toPrimitive];if(void 0!==u){var n=u.call(e,l||"default");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(e)}(l,"string"),(l="symbol"==m(n)?n:String(n))in e?Object.defineProperty(e,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):e[l]=u,e}function s(e,l){if(null==e)return{};var u,m,n=function(e,l){if(null==e)return{};var u,m,n={},o=Object.keys(e);for(m=0;m<o.length;m++)u=o[m],l.indexOf(u)>=0||(n[u]=e[u]);return n}(e,l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(m=0;m<o.length;m++)u=o[m],l.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(e,u)&&(n[u]=e[u])}return n}var g=r.default.bind(d.default),G=function(e,l){if(e[l]){var u=e[l];return u>=1&&u<=12?null:new Error("".concat(l," must be in range 1 to 12 inclusively"))}return null},y={children:o.default.node,className:o.default.string,tiny:G,enormous:G,huge:G,large:G,medium:G,small:G},p=function(e){var l=e.className,u=e.children,m=e.tiny,o=e.small,r=e.medium,d=e.large,c=e.huge,G=e.enormous,y=s(e,a),p=n.default.useContext(t.default),h=(0,_.default)(g(["column",f(f(f(f(f(f({},"column-tiny-".concat(m),m),"column-small-".concat(o),o),"column-medium-".concat(r),r),"column-large-".concat(d),d),"column-huge-".concat(c),c),"column-enormous-".concat(G),G),p.className]),l);return n.default.createElement("div",i({},y,{className:h}),u)};p.propTypes=y;l.default=p},71630:function(e,l,u){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var m=a(u(67294)),n=a(u(45697)),o=a(u(93967)),_=a(u(19845)),r=a(u(50026)),t=a(u(95148)),d=["className","children"];function a(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&(e[m]=u[m])}return e},c.apply(this,arguments)}function i(e,l){if(null==e)return{};var u,m,n=function(e,l){if(null==e)return{};var u,m,n={},o=Object.keys(e);for(m=0;m<o.length;m++)u=o[m],l.indexOf(u)>=0||(n[u]=e[u]);return n}(e,l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(m=0;m<o.length;m++)u=o[m],l.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(e,u)&&(n[u]=e[u])}return n}var f=_.default.bind(t.default),s={children:n.default.node.isRequired,className:n.default.string},g=function(e){var l=e.className,u=e.children,n=i(e,d),_=m.default.useContext(r.default);return m.default.createElement("div",c({},n,{className:(0,o.default)(f("grid",_.className),l)}),u)};g.propTypes=s;l.default=g},73790:function(e,l,u){u.r(l),l.default={}},95148:function(e,l,u){u.r(l),l.default={"clinical-lowlight-theme":"Grid-module__clinical-lowlight-theme___WfV-S","orion-fusion-theme":"Grid-module__orion-fusion-theme___xoMqT",grid:"Grid-module__grid___jE9D-",column:"Grid-module__column___sGA4X","column-tiny-1":"Grid-module__column-tiny-1___-k2mz","column-tiny-2":"Grid-module__column-tiny-2___ndvgK","column-tiny-3":"Grid-module__column-tiny-3___jMwsJ","column-tiny-4":"Grid-module__column-tiny-4___3ycN9","column-tiny-5":"Grid-module__column-tiny-5___Q7xhd","column-tiny-6":"Grid-module__column-tiny-6___FkAyN","column-tiny-7":"Grid-module__column-tiny-7___HxI3z","column-tiny-8":"Grid-module__column-tiny-8___V2vmA","column-tiny-9":"Grid-module__column-tiny-9___T38T7","column-tiny-10":"Grid-module__column-tiny-10___vRUtn","column-tiny-11":"Grid-module__column-tiny-11___mGCtS","column-tiny-12":"Grid-module__column-tiny-12___vvXO3","column-small-1":"Grid-module__column-small-1___WhwHC","column-small-2":"Grid-module__column-small-2___I48V2","column-small-3":"Grid-module__column-small-3___5cEbB","column-small-4":"Grid-module__column-small-4___tmHtN","column-small-5":"Grid-module__column-small-5___QRJhM","column-small-6":"Grid-module__column-small-6___O92+F","column-small-7":"Grid-module__column-small-7___StZ6p","column-small-8":"Grid-module__column-small-8___CjSSF","column-small-9":"Grid-module__column-small-9___1IHvH","column-small-10":"Grid-module__column-small-10___uMDZ6","column-small-11":"Grid-module__column-small-11___MIPlY","column-small-12":"Grid-module__column-small-12___-Iea+","column-medium-1":"Grid-module__column-medium-1___0ENyM","column-medium-2":"Grid-module__column-medium-2___lPAeW","column-medium-3":"Grid-module__column-medium-3___ISHGP","column-medium-4":"Grid-module__column-medium-4___JUeNg","column-medium-5":"Grid-module__column-medium-5___u4WE-","column-medium-6":"Grid-module__column-medium-6___ILVvF","column-medium-7":"Grid-module__column-medium-7___4hC6O","column-medium-8":"Grid-module__column-medium-8___7-EQh","column-medium-9":"Grid-module__column-medium-9___jSh0H","column-medium-10":"Grid-module__column-medium-10___KhEjw","column-medium-11":"Grid-module__column-medium-11___QUyhm","column-medium-12":"Grid-module__column-medium-12___Ea947","column-large-1":"Grid-module__column-large-1___Fo6I4","column-large-2":"Grid-module__column-large-2___LdUz-","column-large-3":"Grid-module__column-large-3___b-34c","column-large-4":"Grid-module__column-large-4___bvF3w","column-large-5":"Grid-module__column-large-5___NN4Lh","column-large-6":"Grid-module__column-large-6___awRZm","column-large-7":"Grid-module__column-large-7___WkfOO","column-large-8":"Grid-module__column-large-8___Pl6em","column-large-9":"Grid-module__column-large-9___iDhKL","column-large-10":"Grid-module__column-large-10___Cu9fD","column-large-11":"Grid-module__column-large-11___ha4GS","column-large-12":"Grid-module__column-large-12___k97Y5","column-huge-1":"Grid-module__column-huge-1___c9IM8","column-huge-2":"Grid-module__column-huge-2___tFbsc","column-huge-3":"Grid-module__column-huge-3___OQwYu","column-huge-4":"Grid-module__column-huge-4___FXj-9","column-huge-5":"Grid-module__column-huge-5___TCpLt","column-huge-6":"Grid-module__column-huge-6___x2mBX","column-huge-7":"Grid-module__column-huge-7___kWu+v","column-huge-8":"Grid-module__column-huge-8___40jW7","column-huge-9":"Grid-module__column-huge-9___+LI4r","column-huge-10":"Grid-module__column-huge-10___QCz3j","column-huge-11":"Grid-module__column-huge-11___Y5MxR","column-huge-12":"Grid-module__column-huge-12___X+Wtx","column-enormous-1":"Grid-module__column-enormous-1___X-r1K","column-enormous-2":"Grid-module__column-enormous-2___jCGau","column-enormous-3":"Grid-module__column-enormous-3___sCNf8","column-enormous-4":"Grid-module__column-enormous-4___UtbUM","column-enormous-5":"Grid-module__column-enormous-5___a-Ckr","column-enormous-6":"Grid-module__column-enormous-6___HWnVg","column-enormous-7":"Grid-module__column-enormous-7___AWMk2","column-enormous-8":"Grid-module__column-enormous-8___9iOHi","column-enormous-9":"Grid-module__column-enormous-9___dB51t","column-enormous-10":"Grid-module__column-enormous-10___h3xJn","column-enormous-11":"Grid-module__column-enormous-11___VKSpn","column-enormous-12":"Grid-module__column-enormous-12___a35qF"}}}]);