"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[97947],{62615:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(l(67294)),n=c(l(45697)),a=c(l(47166)),u=c(l(35060)),o=l(31491),i=["children","refCallback","width"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=a.default.bind(u.default),y={children:n.default.node,refCallback:n.default.func,width:n.default.shape({static:n.default.shape({value:n.default.number.isRequired,unit:n.default.string.isRequired}),percentage:n.default.number,scalar:n.default.number})},p=function(e){var t=e.children,l=e.refCallback,n=e.width,a=f(e,i),u=s(["cell"]);return r.default.createElement("div",d({},a,{style:(0,o.styleFromWidth)(n),className:a.className?"".concat(u," ").concat(a.className):u,ref:l}),t)};p.propTypes=y,p.defaultProps={children:[]};var v=p;t.default=v},41261:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(l(67294)),n=d(l(45697)),a=d(l(94184)),u=d(l(47166)),o=d(l(50026)),i=d(l(27680)),c=["children","dividerStyle","refCallback"];function d(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},f.apply(this,arguments)}function s(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var y=u.default.bind(i.default),p={children:n.default.node.isRequired,dividerStyle:n.default.oneOf(["vertical","horizontal","both"]),refCallback:n.default.func},v=function(e){var t=e.children,l=e.dividerStyle,n=e.refCallback,u=s(e,c),i=r.default.useContext(o.default),d=l?"divider-".concat(l):void 0,p=(0,a.default)(y("cell-grid",d,i.className),u.className);return r.default.createElement("div",f({},u,{className:p,ref:n}),t)};v.propTypes=p;var b=v;t.default=b},31491:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.styleFromWidth=t.default=void 0;var l=function(e){return{msFlex:"0 0 0px",flex:"0 0 0px",maxWidth:e,minWidth:e}},r=function(e){if(e)return e.static?l("".concat(e.static.value).concat(e.static.unit)):e.percentage?l("".concat(e.percentage,"%")):e.scalar?function(e){return{msFlex:"".concat(e," ").concat(e," 0px"),flex:"".concat(e," ").concat(e," 0px")}}(e.scalar):void 0};t.styleFromWidth=r;var n={styleFromWidth:r};t.default=n},94408:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return n.default}}),t.default=void 0;var r=a(l(41261)),n=a(l(62615));function a(e){return e&&e.__esModule?e:{default:e}}var u=r.default;t.default=u},97947:function(e,t,l){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=l(67294))&&n.__esModule?n:{default:n},u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var l=o(t);if(l&&l.has(e))return l.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e,l&&l.set(e,n);return n}(l(94408));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(o=function(e){return e?l:t})(e)}var i=function(){return a.default.createElement("div",null,a.default.createElement(u.default,{dividerStyle:"vertical"},a.default.createElement(u.Cell,{key:"cell-0"},"Vertical 1"),a.default.createElement(u.Cell,{key:"cell-1"},"Vertical 2"),a.default.createElement(u.Cell,{key:"cell-2"},"Vertical 3")),a.default.createElement(u.default,{dividerStyle:"horizontal"},a.default.createElement(u.Cell,{key:"cell-0"},"Horizontal 1"),a.default.createElement(u.Cell,{key:"cell-1"},"Horizontal 2"),a.default.createElement(u.Cell,{key:"cell-2"},"Horizontal 3")),a.default.createElement(u.default,{dividerStyle:"both"},a.default.createElement(u.Cell,{key:"cell-0"},"Both 1"),a.default.createElement(u.Cell,{key:"cell-1"},"Both 2"),a.default.createElement(u.Cell,{key:"cell-2"},"Both 3")))};t.default=i},35060:function(e,t,l){l.r(t),t.default={cell:"Cell-module__cell___6YOBo"}},27680:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"CellGrid-module__clinical-lowlight-theme___zJBHA","orion-fusion-theme":"CellGrid-module__orion-fusion-theme___hdXXy","cell-grid":"CellGrid-module__cell-grid___kbkPN","divider-horizontal":"CellGrid-module__divider-horizontal___COAhK","divider-both":"CellGrid-module__divider-both___eRXBF","divider-vertical":"CellGrid-module__divider-vertical___ZsST9"}}}]);