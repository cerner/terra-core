"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[57191],{57191:function(e,t,r){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(r(67294)),o=l(r(19845)),n=l(r(778)),a=l(r(26065));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,c(i.key),i)}}function c(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var u=r.call(e,t||"default");if("object"!=i(u))return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==i(t)?t:String(t)}function f(e,t,r){return t=m(t),function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}(e,p()?Reflect.construct(t,r||[],m(e).constructor):t.apply(e,r))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}var v=o.default.bind(a.default),y=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=f(this,t,[e])).setNode=r.setNode.bind(d(r)),r.toggleScroll=r.toggleScroll.bind(d(r)),r}var r,i,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(t,e),r=t,(i=[{key:"setNode",value:function(e){this.scrollNode=e}},{key:"toggleScroll",value:function(){this.scrollNode&&(this.scrollNode.scrollTop=this.scrollNode.scrollTop>0?0:1e3)}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("button",{type:"button",id:"scroll",onClick:this.toggleScroll},"Scroll"),u.default.createElement("div",{className:v("scroll-wrapper")},u.default.createElement(n.default,{id:"scroll-test",refCallback:this.setNode},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis dapibus erat, eget facilisis nunc ornare in. Vestibulum ut posuere neque. Maecenas nibh lacus, euismod sit amet magna sit amet, porttitor sollicitudin sapien. Vivamus nec lacus vel tortor ultrices efficitur vitae sit amet ipsum. Suspendisse risus eros, faucibus eget mattis in, tincidunt id urna. Integer eget urna quis nisi luctus posuere. Fusce molestie dignissim neque interdum ultrices. Donec porta condimentum quam, at molestie velit scelerisque vitae. Suspendisse eleifend lectus sit amet nunc posuere, sed placerat dolor laoreet. Etiam tempus lacinia purus, ac porttitor nisl posuere eget. Aenean nulla tellus, lacinia eget tortor vel, tempus fermentum ex. Nullam massa nisl, consequat at lorem non, dignissim vehicula mauris. Morbi ultrices mauris ipsum, eu tempor quam luctus id. Curabitur ultrices nunc ultrices, commodo lorem eget, vulputate urna. Quisque porttitor nisi vel diam vulputate vehicula eu quis lacus. Nunc eget aliquam elit. Vivamus dictum mi molestie, tristique est sit amet, pellentesque urna. Etiam arcu felis, pulvinar et lorem et, efficitur ultricies urna. Nunc lacinia pellentesque turpis sit amet egestas. Vivamus ut ex efficitur, egestas lectus sit amet, gravida magna. Vivamus suscipit, erat vitae commodo fermentum, massa dolor egestas arcu, a sollicitudin sem risus eu quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. In maximus nunc tempus magna iaculis porttitor.")))}}])&&s(r.prototype,i),o&&s(r,o),Object.defineProperty(r,"prototype",{writable:!1}),t}(u.default.Component);t.default=y},26065:function(e,t,r){r.r(t),t.default={"scroll-wrapper":"DefaultTest-module__scroll-wrapper___U4vDy","paragraph-x-wrapper":"DefaultTest-module__paragraph-x-wrapper___VzBDt","overflow-wrapper":"DefaultTest-module__overflow-wrapper___Gg4Wk"}}}]);