"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[671],{67688:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),i=u(n(44618));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,c(o.key),o)}}function c(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:String(t)}function a(e,t,n){return t=s(t),function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}(e,f()?Reflect.construct(t,n||[],s(e).constructor):t.apply(e,n))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}var y=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=a(this,t,[e])).state={selectedKeys:[]},n.handleSelection=n.handleSelection.bind(d(n)),n}var n,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(t,e),n=t,(o=[{key:"handleSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{selectedKeys:i.default.Utils.handleMultiSelectedKeys(e.selectedKeys,t)}}))}},{key:"render",value:function(){return r.default.createElement(i.default,{id:"button-block-group-long-text",isBlock:!0,onChange:this.handleSelection,selectedKeys:this.state.selectedKeys,isMultiSelect:!0},r.default.createElement(i.default.Button,{text:"Is-Block Single-Select 1",key:"single-select1"}),r.default.createElement(i.default.Button,{text:"Is-Block Single-Select 2 Longer Text",key:"single-select2"}),r.default.createElement(i.default.Button,{text:"Is-Block Single-Select 3 Extremely Long Text to Test Text Wrapping Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",key:"single-select3"}))}}])&&l(n.prototype,o),u&&l(n,u),Object.defineProperty(n,"prototype",{writable:!1}),t}(r.default.Component);t.default=y}}]);