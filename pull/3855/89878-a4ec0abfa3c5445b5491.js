"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[89878],{89878:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(n(67294)),u=c(n(43868)),i=c(n(28669));function c(t){return t&&t.__esModule?t:{default:t}}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(u=o.key,i=void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(u,"string"),"symbol"===r(i)?i:String(i)),o)}var u,i}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=p(t);if(e){var u=p(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return s(t)}(this,n)}}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(p,t);var e,n,r,c=l(p);function p(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(e=c.call(this,t)).onChange=e.onChange.bind(s(e)),e.handleButtonClick=e.handleButtonClick.bind(s(e)),e.state={searchText:""},e}return e=p,(n=[{key:"handleButtonClick",value:function(){this.searchInput&&this.searchInput.focus()}},{key:"onChange",value:function(t,e){this.setState({searchText:e})}},{key:"render",value:function(){var t=this;return o.default.createElement(o.default.Fragment,null,o.default.createElement(u.default,{text:"Focus Me",onClick:this.handleButtonClick,id:"search-field-focus-button"}),o.default.createElement(i.default,{onChange:this.onChange,value:this.state.searchText,inputRefCallback:function(e){t.searchInput=e}}))}}])&&a(e.prototype,n),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),p}(o.default.Component);e.default=y}}]);