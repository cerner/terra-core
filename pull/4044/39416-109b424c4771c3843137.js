"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[39416],{10320:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(96540)),i=u(n(4711)),a=u(n(76771));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function c(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function f(e,t,n){return t=d(t),function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(e,s()?Reflect.construct(t,n||[],d(e).constructor):t.apply(e,n))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}t.default=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,t,[e])).state={},n.handleOnChange=n.handleOnChange.bind(p(n)),n}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(t,e),n=t,(r=[{key:"handleOnChange",value:function(e){this.setState({selectedAnswer:e.currentTarget.value})}},{key:"render",value:function(){return o.default.createElement(a.default,{id:"testing-radio-field",legend:"Which Department do you work for?",help:"Your work falls inline with one of these departments",isInvalid:void 0===this.state.selectedAnswer,error:"One must be selected",isInline:!0,required:!0},o.default.createElement(i.default,{id:"ux-dept",name:"dept",labelText:"UX/Interaction Design",onChange:this.handleOnChange,value:"ux"}),o.default.createElement(i.default,{id:"magazine-dept",name:"dept",labelText:"Magazine Advertisements",onChange:this.handleOnChange,value:"magazine"}),o.default.createElement(i.default,{id:"website-dept",name:"dept",labelText:"Website Advertisements",onChange:this.handleOnChange,value:"website"}),o.default.createElement(i.default,{id:"events-dept",name:"dept",labelText:"Event Promotions",onChange:this.handleOnChange,value:"events"}))}}])&&l(n.prototype,r),u&&l(n,u),Object.defineProperty(n,"prototype",{writable:!1}),t}(o.default.Component)}}]);