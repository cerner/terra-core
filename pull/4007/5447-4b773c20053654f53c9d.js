"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[5447],{5447:function(e,t,r){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(r(67294)),n=l(r(47166)),o=l(r(778)),a=l(r(26065));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var r=0;r<t.length;r++){var u=t[r];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,(n=u.key,o=void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var u=r.call(e,t||"default");if("object"!==i(u))return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(n,"string"),"symbol"===i(o)?o:String(o)),u)}var n,o}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,u=m(e);if(t){var n=m(this).constructor;r=Reflect.construct(u,arguments,n)}else r=u.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,r)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var d=n.default.bind(a.default),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(a,e);var t,r,i,n=f(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=n.call(this,e)).setNode=t.setNode.bind(p(t)),t.toggleScroll=t.toggleScroll.bind(p(t)),t}return t=a,(r=[{key:"setNode",value:function(e){this.scrollNode=e}},{key:"toggleScroll",value:function(){this.scrollNode&&(this.scrollNode.scrollLeft=this.scrollNode.scrollLeft>0?0:1e3)}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("button",{type:"button",id:"scroll",onClick:this.toggleScroll},"Scroll"),u.default.createElement("div",{className:d("overflow-wrapper")},u.default.createElement(o.default,{id:"scroll-test",refCallback:this.setNode},u.default.createElement("p",{className:d("paragraph-x-wrapper")},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis dapibus erat, eget facilisis nunc ornare in. Vestibulum ut posuere neque. Maecenas nibh lacus, euismod sit amet magna sit amet, porttitor sollicitudin sapien. Vivamus nec lacus vel tortor ultrices efficitur vitae sit amet ipsum. Suspendisse risus eros, faucibus eget mattis in, tincidunt id urna. Integer eget urna quis nisi luctus posuere. Fusce molestie dignissim neque interdum ultrices. Donec porta condimentum quam, at molestie velit scelerisque vitae. Suspendisse eleifend lectus sit amet nunc posuere, sed placerat dolor laoreet. Etiam tempus lacinia purus, ac porttitor nisl posuere eget. Aenean nulla tellus, lacinia eget tortor vel, tempus fermentum ex. Nullam massa nisl, consequat at lorem non, dignissim vehicula mauris. Morbi ultrices mauris ipsum, eu tempor quam luctus id. Curabitur ultrices nunc ultrices, commodo lorem eget, vulputate urna. Quisque porttitor nisi vel diam vulputate vehicula eu quis lacus. Nunc eget aliquam elit. Vivamus dictum mi molestie, tristique est sit amet, pellentesque urna. Etiam arcu felis, pulvinar et lorem et, efficitur ultricies urna. Nunc lacinia pellentesque turpis sit amet egestas. Vivamus ut ex efficitur, egestas lectus sit amet, gravida magna. Vivamus suscipit, erat vitae commodo fermentum, massa dolor egestas arcu, a sollicitudin sem risus eu quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. In maximus nunc tempus magna iaculis porttitor. In maximus nunc tempus magna iaculis porttitor. In maximus nunc tempus magna iaculis porttitor.",u.default.createElement("button",{type:"button"},"Focus Me!")))))}}])&&s(t.prototype,r),i&&s(t,i),Object.defineProperty(t,"prototype",{writable:!1}),a}(u.default.Component);t.default=b},26065:function(e,t,r){r.r(t),t.default={"scroll-wrapper":"DefaultTest-module__scroll-wrapper___U4vDy","paragraph-x-wrapper":"DefaultTest-module__paragraph-x-wrapper___VzBDt","overflow-wrapper":"DefaultTest-module__overflow-wrapper___Gg4Wk"}}}]);