"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[32603],{32603:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),o=a(n(47166)),u=a(n(1626)),i=a(n(87937));function a(e){return e&&e.__esModule?e:{default:e}}var l=o.default.bind(i.default),c=function(){return r.default.createElement("div",{className:l("tag-wrapper")},r.default.createElement(u.default,{id:"default",text:"Default Tag"}))};t.default=c},1626:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(67294)),u=d(n(45697)),i=d(n(94184)),a=d(n(47166)),l=d(n(50026)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=u?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}o.default=e,n&&n.set(e,o);return o}(n(51051)),f=d(n(37932)),s=["icon","text","href","onClick","onBlur","onFocus","onKeyUp"];function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function d(e){return e&&e.__esModule?e:{default:e}}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(u=o.key,i=void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(u,"string"),"symbol"===r(i)?i:String(i)),o)}var u,i}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=O(e);if(t){var u=O(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var g=a.default.bind(f.default),j={href:u.default.string,icon:u.default.element,onClick:u.default.func,onBlur:u.default.func,onFocus:u.default.func,onKeyUp:u.default.func,text:u.default.string.isRequired},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,u=v(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=u.call(this,e)).state={focused:!1},t.handleKeyUp=t.handleKeyUp.bind(m(t)),t.handleOnBlur=t.handleOnBlur.bind(m(t)),t}return t=a,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===c.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,r=e.href,u=e.onClick,a=(e.onBlur,e.onFocus),l=(e.onKeyUp,b(e,s)),c=this.context,f=(0,i.default)(g("tag",{"is-focused":this.state.focused},{"is-interactive":r||u},{"has-underline":r},c.className),l.className),p=g("icon"),d=t?o.default.createElement("span",{className:p},t):null,_=r||u?r?"a":"button":"span";return o.default.createElement(_,y({},l,{className:f,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:u,onFocus:a,href:r}),d,n)}}])&&_(t.prototype,n),r&&_(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.default.Component);w.propTypes=j,w.contextType=l.default;var P=w;t.default=P},87937:function(e,t,n){n.r(t),t.default={"tag-wrapper":"TagTestCommon-module__tag-wrapper___E6r6I"}},37932:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Tag-module__clinical-lowlight-theme___5sCDf","orion-fusion-theme":"Tag-module__orion-fusion-theme___1C0Ag",tag:"Tag-module__tag___nh+rs","is-interactive":"Tag-module__is-interactive___o8dLe","is-focused":"Tag-module__is-focused___BEB78","has-underline":"Tag-module__has-underline___jR7cO",icon:"Tag-module__icon___CoP6c"}}}]);