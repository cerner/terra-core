"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[40809],{40809:function(e,l,u){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=o(u(67294)),m=o(u(64123));function o(e){return e&&e.__esModule?e:{default:e}}u(73790);l.default=function(){return n.default.createElement(m.default,{id:"grid"},n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-1",enormous:1},n.default.createElement("div",{className:"terra-grid-example"},"1 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-2",enormous:2},n.default.createElement("div",{className:"terra-grid-example"},"2 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-3",enormous:3},n.default.createElement("div",{className:"terra-grid-example"},"3 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-4",enormous:4},n.default.createElement("div",{className:"terra-grid-example"},"4 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-5",enormous:5},n.default.createElement("div",{className:"terra-grid-example"},"5 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-6",enormous:6},n.default.createElement("div",{className:"terra-grid-example"},"6 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-7",enormous:7},n.default.createElement("div",{className:"terra-grid-example"},"7 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-8",enormous:8},n.default.createElement("div",{className:"terra-grid-example"},"8 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-9",enormous:9},n.default.createElement("div",{className:"terra-grid-example"},"9 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-10",enormous:10},n.default.createElement("div",{className:"terra-grid-example"},"10 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-11",enormous:11},n.default.createElement("div",{className:"terra-grid-example"},"11 Column Span"))),n.default.createElement(m.default.Row,null,n.default.createElement(m.default.Column,{id:"column-12",enormous:12},n.default.createElement("div",{className:"terra-grid-example"},"12 Column Span"))))}},64123:function(e,l,u){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=_(u(67294)),m=_(u(45697)),o=_(u(71630)),r=_(u(5902));function _(e){return e&&e.__esModule?e:{default:e}}var t={children:m.default.node.isRequired},d=function(e){return n.default.createElement("div",e)};d.propTypes=t,d.Row=o.default,d.Column=r.default;l.default=d},5902:function(e,l,u){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var m=c(u(67294)),o=c(u(45697)),r=c(u(94184)),_=c(u(47166)),t=c(u(50026)),d=c(u(95148)),a=["className","children","tiny","small","medium","large","huge","enormous"];function c(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n])}return e},i.apply(this,arguments)}function f(e,l,u){return(l=function(e){var l=function(e,l){if("object"!==n(e)||null===e)return e;var u=e[Symbol.toPrimitive];if(void 0!==u){var m=u.call(e,l||"default");if("object"!==n(m))return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(e)}(e,"string");return"symbol"===n(l)?l:String(l)}(l))in e?Object.defineProperty(e,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):e[l]=u,e}function s(e,l){if(null==e)return{};var u,n,m=function(e,l){if(null==e)return{};var u,n,m={},o=Object.keys(e);for(n=0;n<o.length;n++)u=o[n],l.indexOf(u)>=0||(m[u]=e[u]);return m}(e,l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)u=o[n],l.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(e,u)&&(m[u]=e[u])}return m}var g=_.default.bind(d.default),G=function(e,l){if(e[l]){var u=e[l];return u>=1&&u<=12?null:new Error("".concat(l," must be in range 1 to 12 inclusively"))}return null},y={children:o.default.node,className:o.default.string,tiny:G,enormous:G,huge:G,large:G,medium:G,small:G},p=function(e){var l,u=e.className,n=e.children,o=e.tiny,_=e.small,d=e.medium,c=e.large,G=e.huge,y=e.enormous,p=s(e,a),h=m.default.useContext(t.default),v=(0,r.default)(g(["column",(l={},f(l,"column-tiny-".concat(o),o),f(l,"column-small-".concat(_),_),f(l,"column-medium-".concat(d),d),f(l,"column-large-".concat(c),c),f(l,"column-huge-".concat(G),G),f(l,"column-enormous-".concat(y),y),l),h.className]),u);return m.default.createElement("div",i({},p,{className:v}),n)};p.propTypes=y;l.default=p},71630:function(e,l,u){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=a(u(67294)),m=a(u(45697)),o=a(u(94184)),r=a(u(47166)),_=a(u(50026)),t=a(u(95148)),d=["className","children"];function a(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n])}return e},c.apply(this,arguments)}function i(e,l){if(null==e)return{};var u,n,m=function(e,l){if(null==e)return{};var u,n,m={},o=Object.keys(e);for(n=0;n<o.length;n++)u=o[n],l.indexOf(u)>=0||(m[u]=e[u]);return m}(e,l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)u=o[n],l.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(e,u)&&(m[u]=e[u])}return m}var f=r.default.bind(t.default),s={children:m.default.node.isRequired,className:m.default.string},g=function(e){var l=e.className,u=e.children,m=i(e,d),r=n.default.useContext(_.default);return n.default.createElement("div",c({},m,{className:(0,o.default)(f("grid",r.className),l)}),u)};g.propTypes=s;l.default=g},73790:function(e,l,u){u.r(l),l.default={}},95148:function(e,l,u){u.r(l),l.default={"clinical-lowlight-theme":"Grid-module__clinical-lowlight-theme___WfV-S","orion-fusion-theme":"Grid-module__orion-fusion-theme___xoMqT",grid:"Grid-module__grid___jE9D-",column:"Grid-module__column___sGA4X","column-tiny-1":"Grid-module__column-tiny-1___-k2mz","column-tiny-2":"Grid-module__column-tiny-2___ndvgK","column-tiny-3":"Grid-module__column-tiny-3___jMwsJ","column-tiny-4":"Grid-module__column-tiny-4___3ycN9","column-tiny-5":"Grid-module__column-tiny-5___Q7xhd","column-tiny-6":"Grid-module__column-tiny-6___FkAyN","column-tiny-7":"Grid-module__column-tiny-7___HxI3z","column-tiny-8":"Grid-module__column-tiny-8___V2vmA","column-tiny-9":"Grid-module__column-tiny-9___T38T7","column-tiny-10":"Grid-module__column-tiny-10___vRUtn","column-tiny-11":"Grid-module__column-tiny-11___mGCtS","column-tiny-12":"Grid-module__column-tiny-12___vvXO3","column-small-1":"Grid-module__column-small-1___WhwHC","column-small-2":"Grid-module__column-small-2___I48V2","column-small-3":"Grid-module__column-small-3___5cEbB","column-small-4":"Grid-module__column-small-4___tmHtN","column-small-5":"Grid-module__column-small-5___QRJhM","column-small-6":"Grid-module__column-small-6___O92+F","column-small-7":"Grid-module__column-small-7___StZ6p","column-small-8":"Grid-module__column-small-8___CjSSF","column-small-9":"Grid-module__column-small-9___1IHvH","column-small-10":"Grid-module__column-small-10___uMDZ6","column-small-11":"Grid-module__column-small-11___MIPlY","column-small-12":"Grid-module__column-small-12___-Iea+","column-medium-1":"Grid-module__column-medium-1___0ENyM","column-medium-2":"Grid-module__column-medium-2___lPAeW","column-medium-3":"Grid-module__column-medium-3___ISHGP","column-medium-4":"Grid-module__column-medium-4___JUeNg","column-medium-5":"Grid-module__column-medium-5___u4WE-","column-medium-6":"Grid-module__column-medium-6___ILVvF","column-medium-7":"Grid-module__column-medium-7___4hC6O","column-medium-8":"Grid-module__column-medium-8___7-EQh","column-medium-9":"Grid-module__column-medium-9___jSh0H","column-medium-10":"Grid-module__column-medium-10___KhEjw","column-medium-11":"Grid-module__column-medium-11___QUyhm","column-medium-12":"Grid-module__column-medium-12___Ea947","column-large-1":"Grid-module__column-large-1___Fo6I4","column-large-2":"Grid-module__column-large-2___LdUz-","column-large-3":"Grid-module__column-large-3___b-34c","column-large-4":"Grid-module__column-large-4___bvF3w","column-large-5":"Grid-module__column-large-5___NN4Lh","column-large-6":"Grid-module__column-large-6___awRZm","column-large-7":"Grid-module__column-large-7___WkfOO","column-large-8":"Grid-module__column-large-8___Pl6em","column-large-9":"Grid-module__column-large-9___iDhKL","column-large-10":"Grid-module__column-large-10___Cu9fD","column-large-11":"Grid-module__column-large-11___ha4GS","column-large-12":"Grid-module__column-large-12___k97Y5","column-huge-1":"Grid-module__column-huge-1___c9IM8","column-huge-2":"Grid-module__column-huge-2___tFbsc","column-huge-3":"Grid-module__column-huge-3___OQwYu","column-huge-4":"Grid-module__column-huge-4___FXj-9","column-huge-5":"Grid-module__column-huge-5___TCpLt","column-huge-6":"Grid-module__column-huge-6___x2mBX","column-huge-7":"Grid-module__column-huge-7___kWu+v","column-huge-8":"Grid-module__column-huge-8___40jW7","column-huge-9":"Grid-module__column-huge-9___+LI4r","column-huge-10":"Grid-module__column-huge-10___QCz3j","column-huge-11":"Grid-module__column-huge-11___Y5MxR","column-huge-12":"Grid-module__column-huge-12___X+Wtx","column-enormous-1":"Grid-module__column-enormous-1___X-r1K","column-enormous-2":"Grid-module__column-enormous-2___jCGau","column-enormous-3":"Grid-module__column-enormous-3___sCNf8","column-enormous-4":"Grid-module__column-enormous-4___UtbUM","column-enormous-5":"Grid-module__column-enormous-5___a-Ckr","column-enormous-6":"Grid-module__column-enormous-6___HWnVg","column-enormous-7":"Grid-module__column-enormous-7___AWMk2","column-enormous-8":"Grid-module__column-enormous-8___9iOHi","column-enormous-9":"Grid-module__column-enormous-9___dB51t","column-enormous-10":"Grid-module__column-enormous-10___h3xJn","column-enormous-11":"Grid-module__column-enormous-11___VKSpn","column-enormous-12":"Grid-module__column-enormous-12___a35qF"}}}]);