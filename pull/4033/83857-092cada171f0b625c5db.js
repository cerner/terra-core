"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[83857],{83857:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(r(67294)),u=i(r(53593));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function a(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:String(t)}function c(e,t,r){return t=s(t),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}(e,f()?Reflect.construct(t,r||[],s(e).constructor):t.apply(e,r))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}var b=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=c(this,t)).state={show:!0},e.handleTriggerOverlay=e.handleTriggerOverlay.bind(y(e)),e.handleOnRequestESC=e.handleOnRequestESC.bind(y(e)),e}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(t,e),r=t,(n=[{key:"handleTriggerOverlay",value:function(){this.setState({show:!0})}},{key:"handleOnRequestESC",value:function(){this.setState({show:!1})}},{key:"render",value:function(){return this.state.show?o.default.createElement(u.default,{isOpen:!0,onRequestClose:this.handleOnRequestESC,id:"fullscreen_overlay",zIndex:"6000"},o.default.createElement("h3",null,"The onRequestClose prop gives the overlay close behaviors."),o.default.createElement("br",null),o.default.createElement("p",null,"Close by clicking inside the overlay or pressing the ESC key.")):null}}])&&l(r.prototype,n),i&&l(r,i),Object.defineProperty(r,"prototype",{writable:!1}),t}(o.default.Component);t.default=b}}]);