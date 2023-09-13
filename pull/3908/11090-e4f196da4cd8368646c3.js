"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[11090],{14728:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(67294)),i=a(n(47166)),l=a(n(95269)),u=a(n(10505));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,l=void 0,l=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===r(l)?l:String(l)),o)}var i,l}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=d(e);if(t){var i=d(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,n)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var m=i.default.bind(u.default),y=["date","datetime-local","month","time","week","color","file","range","checkbox","radio","button","reset","submit"],b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,r,i=s(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this)).state={isInvalid:!1,isIncomplete:!1,required:!1},e.toggleInvalid=e.toggleInvalid.bind(p(e)),e.toggleIncomplete=e.toggleIncomplete.bind(p(e)),e}return t=u,(n=[{key:"createInputFieldTypeExamples",value:function(e){for(var t=[],n=0;n<e.length;n+=1)t.push(o.default.createElement("div",{className:m("content-wrapper")},o.default.createElement(l.default,{inputId:"unsupported-".concat(e[n],"-input"),error:"Error message.",help:"Help message.",isInvalid:this.state.isInvalid,isIncomplete:this.state.isIncomplete,required:this.state.required,inputAttrs:{id:"html-original-".concat(e[n],"-input"),type:e[n]},label:"Input type=".concat(e[n])})));return t}},{key:"toggleInvalid",value:function(){this.setState((function(e){return{isInvalid:!e.isInvalid}}))}},{key:"toggleIncomplete",value:function(){this.setState((function(e){return{isIncomplete:!e.isIncomplete,required:!e.required}}))}},{key:"render",value:function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:m("content-wrapper")},o.default.createElement("button",{type:"button",id:"validity-toggle",onClick:this.toggleInvalid},"Toggle All: isInvalid"),o.default.createElement("button",{type:"button",id:"incomplete-toggle",onClick:this.toggleIncomplete},"Toggle All: isIncomplete + required"),o.default.createElement("div",null,"isInvalid: ".concat(this.state.isInvalid)),o.default.createElement("div",null,"isIncomplete: ".concat(this.state.isIncomplete)),o.default.createElement("div",null,"required: ".concat(this.state.required))),this.createInputFieldTypeExamples(y))}}])&&c(t.prototype,n),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(o.default.Component);t.default=b},10505:function(e,t,n){n.r(t),t.default={"content-wrapper":"Input-test-module__content-wrapper___N2IYI","programmatic-button":"Input-test-module__programmatic-button___S++Ze"}}}]);