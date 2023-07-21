"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[90486],{73352:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(67294)),l=i(n(47166)),a=i(n(47319)),u=i(n(33548));function i(e){return e&&e.__esModule?e:{default:e}}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(l=o.key,a=void 0,a=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(l,"string"),"symbol"===r(a)?a:String(a)),o)}var l,a}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p(e);if(t){var l=p(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}(this,n)}}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var v=l.default.bind(u.default),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(u,e);var t,n,r,l=d(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=l.call(this)).state={value:[]},e.handleChange=e.handleChange.bind(s(e)),e}return t=u,(n=[{key:"handleChange",value:function(e){this.setState({value:e})}},{key:"render",value:function(){return o.default.createElement("div",{className:v("content-wrapper")},o.default.createElement(a.default,{id:"multiple",onChange:this.handleChange,placeholder:"Select a color",value:this.state.value,variant:"multiple"},o.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),o.default.createElement(a.default.Option,{value:"green",display:"Green"}),o.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),o.default.createElement(a.default.Option,{value:"red",display:"Red"}),o.default.createElement(a.default.Option,{value:"violet",display:"Violet"})))}}])&&f(t.prototype,n),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(o.default.Component);t.default=b},47319:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=O(n(67294)),o=O(n(45697)),l=O(n(54052)),a=O(n(4626)),u=O(n(97574)),i=O(n(74854)),f=O(n(28998)),c=O(n(88220)),d=O(n(67405)),s=O(n(1358)),p=["variant"],v=["maxSelectionCount"],b=["allowClear"],y=["maxSelectionCount"],m=["noResultContent","allowClear"],h=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function O(e){return e&&e.__esModule?e:{default:e}}function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var S={allowClear:o.default.bool,children:o.default.node,defaultValue:o.default.oneOfType([o.default.string,o.default.number,o.default.array]),disabled:o.default.bool,dropdownAttrs:o.default.object,isIncomplete:o.default.bool,isInvalid:o.default.bool,isTouchAccessible:o.default.bool,maxHeight:o.default.number,maxSelectionCount:o.default.number,noResultContent:o.default.node,onBlur:o.default.func,onChange:o.default.func,onClick:o.default.func,onDeselect:o.default.func,onFocus:o.default.func,onSearch:o.default.func,onSelect:o.default.func,optionFilter:o.default.func,placeholder:o.default.string,required:o.default.bool,value:o.default.oneOfType([o.default.string,o.default.number,o.default.array]),variant:o.default.oneOf([l.default.COMBOBOX,l.default.DEFAULT,l.default.MULTIPLE,l.default.SEARCH,l.default.TAG])},w={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function _(e){var t=e.variant,n=C(e,p);switch(t){case l.default.COMBOBOX:n.maxSelectionCount;var o=C(n,v);return r.default.createElement(i.default,o);case l.default.MULTIPLE:n.allowClear;var a=C(n,b);return r.default.createElement(c.default,a);case l.default.SEARCH:n.maxSelectionCount;var u=C(n,y);return r.default.createElement(d.default,u);case l.default.TAG:n.noResultContent,n.allowClear;var O=C(n,m);return r.default.createElement(s.default,O);case l.default.DEFAULT:default:n.isTouchAccessible,n.maxSelectionCount,n.onSearch,n.optionFilter;var S=C(n,h);return r.default.createElement(f.default,S)}}_.Option=a.default,_.OptGroup=u.default,_.propTypes=S,_.defaultProps=w,_.isSelect=!0;var g=_;t.default=g},33548:function(e,t,n){n.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}}}]);