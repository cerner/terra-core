"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[83534],{21290:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(67294)),i=u(n(36530)),a=u(n(76379));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,a=void 0,a=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===r(a)?a:String(a)),o)}var i,a}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=d(e);if(t){var i=d(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}(this,n)}}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(d,e);var t,n,r,u=f(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=u.call(this,e)).state={selectedAnswers:[]},t.handleOnChange=t.handleOnChange.bind(s(t)),t}return t=d,(n=[{key:"handleOnChange",value:function(e){var t=this.state.selectedAnswers;e.currentTarget.checked?t.push(e.currentTarget.value):t.splice(t.indexOf(e.currentTarget.value),1),this.setState({selectedAnswers:t})}},{key:"render",value:function(){return o.default.createElement(a.default,{id:"testing-checkbox-field",legend:"What departments are you looking to work for?",help:"These are the core areas we need for graphic designers",isInvalid:this.state.selectedAnswers.length<=0,error:"You must be willing to work in one of these departments",isInline:!0,required:!0,hideRequired:!0},o.default.createElement(i.default,{id:"ux-dept",name:"dept[]",labelText:"UX/Interaction Design",onChange:this.handleOnChange,value:"ux"}),o.default.createElement(i.default,{id:"magazine-dept",name:"dept[]",labelText:"Magazine Advertisements",onChange:this.handleOnChange,value:"magazine"}),o.default.createElement(i.default,{id:"website-dept",name:"dept[]",labelText:"Website Advertisements",onChange:this.handleOnChange,value:"website"}),o.default.createElement(i.default,{id:"events-dept",name:"dept[]",labelText:"Event Promotions",onChange:this.handleOnChange,value:"events"}))}}])&&l(t.prototype,n),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),d}(o.default.Component);t.default=p}}]);