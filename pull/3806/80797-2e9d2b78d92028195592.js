"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[80797],{28963:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(r(67294)),c=r(25387),i=u(r(65535));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(c=o.key,i=void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(c,"string"),"symbol"===n(i)?i:String(i)),o)}var c,i}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=p(e);if(t){var c=p(this).constructor;r=Reflect.construct(o,arguments,c)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}(this,r)}}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var y={en:{"App.locale":"en"},"en-US":{"App.locale":"en-US"}},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(p,e);var t,r,n,u=f(p);function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=u.call(this,e)).state={locale:"en"},t.handleSwitchLocale=t.handleSwitchLocale.bind(s(t)),t}return t=p,(r=[{key:"handleSwitchLocale",value:function(){"en"!==this.state.locale?this.setState({locale:"en"}):this.setState({locale:"en-US"})}},{key:"render",value:function(){return o.default.createElement(i.default,{locale:this.state.locale,customMessages:y[this.state.locale]},o.default.createElement("div",{id:"message"},o.default.createElement(c.FormattedMessage,{id:"App.locale"})),o.default.createElement("button",{type:"button",id:"switch",onClick:this.handleSwitchLocale},"Switch"))}}])&&l(t.prototype,r),n&&l(t,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(o.default.Component);t.default=b}}]);