"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[77551],{77551:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=f(r(67294)),u=f(r(43868)),a=f(r(47166)),i=f(r(84356)),c=f(r(24993));function f(t){return t&&t.__esModule?t:{default:t}}function l(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(u=o.key,a=void 0,a=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(u,"string"),"symbol"===n(a)?a:String(a)),o)}var u,a}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=y(t);if(e){var u=y(this).constructor;r=Reflect.construct(o,arguments,u)}else r=o.apply(this,arguments);return function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}(this,r)}}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var b=a.default.bind(c.default),g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}(c,t);var e,r,n,a=p(c);function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=a.call(this,t)).state={currentPage:1},e.changePages=e.changePages.bind(d(e)),e}return e=c,(r=[{key:"changePages",value:function(t){this.setState({currentPage:t})}},{key:"render",value:function(){var t=this;return o.default.createElement("div",{className:b("paginator-wrapper")},o.default.createElement(u.default,{id:"button-9",text:"Set Page to 9",onClick:function(){t.setState({currentPage:9})}}),o.default.createElement(u.default,{id:"button-15",text:"Set Page to 15",onClick:function(){t.setState({currentPage:15})}}),o.default.createElement(u.default,{id:"button-45",text:"Set Page to 45",onClick:function(){t.setState({currentPage:45})}}),o.default.createElement(i.default,{onPageChange:this.changePages,selectedPage:this.state.currentPage,totalCount:450,itemCountPerPage:10}))}}])&&l(e.prototype,r),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(o.default.Component);e.default=g},24993:function(t,e,r){r.r(e),e.default={"paginator-wrapper":"ControlledPaginatorTestCommon-module__paginator-wrapper___oUUxO"}}}]);