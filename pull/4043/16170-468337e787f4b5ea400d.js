"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[16170],{16170:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(96540)),o=l(r(67967)),u=l(r(44747)),a=l(r(25944));function l(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(a.default),c=["text","number","password","email","search","tel","url","hidden"];t.default=function(){return n.default.createElement(n.default.Fragment,null,function(e){for(var t=[],r=0;r<e.length;r+=1)t.push(n.default.createElement("div",{className:i("content-wrapper")},n.default.createElement("label",{htmlFor:"supported-".concat(e[r],"-input")},"Input type=".concat(e[r])),n.default.createElement(u.default,{id:"supported-".concat(e[r],"-input"),type:e[r]})));return t}(c))}},44747:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(r(96540)),u=p(r(5556)),a=p(r(46942)),l=p(r(67967)),i=p(r(52103)),c=p(r(93024)),f=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function p(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function v(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:String(t)}function _(e,t,r){return t=O(t),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,h()?Reflect.construct(t,r||[],O(e).constructor):t.apply(e,r))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}var w=l.default.bind(c.default),j={defaultValue:u.default.oneOfType([u.default.string,u.default.number]),disabled:u.default.bool,isIncomplete:u.default.bool,isInvalid:u.default.bool,onBlur:u.default.func,onChange:u.default.func,onFocus:u.default.func,onInput:u.default.func,name:u.default.string,pattern:u.default.string,refCallback:u.default.func,required:u.default.bool,type:u.default.string,value:u.default.oneOfType([u.default.string,u.default.number]),ariaLabel:u.default.string},P={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,t,arguments)}var r,n,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(t,e),r=t,n=[{key:"render",value:function(){var e,t=this.props,r=t.defaultValue,n=t.disabled,u=t.isIncomplete,l=t.isInvalid,i=t.onBlur,c=t.onChange,p=t.onFocus,y=t.onInput,v=t.name,_=t.pattern,h=t.refCallback,O=t.required,g=t.type,j=t.ariaLabel,P=t.value,I=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},m(t,f)),S=this.context,C=(void 0===g||["text","number","password","email","search","tel","url","hidden"].includes(g))&&w("form-input",{"form-error":l},{"form-incomplete":u&&O&&!l},S.className),E=(0,a.default)(C,I.className);return I&&Object.prototype.hasOwnProperty.call(I,"aria-label")?e=j||I["aria-label"]:j&&(e=j),I["aria-label"]=e,O&&(I["aria-required"]="true"),void 0!==P?I.value=P:void 0!==r&&(I.defaultValue=r),I.placeholder&&!I.showMpageFusionPlaceholder&&(I.placeholder=null),delete I.showMpageFusionPlaceholder,o.default.createElement("input",d({},I,{ref:function(e){h&&h(e)},name:v,type:g,pattern:_,onBlur:i,onChange:c,onFocus:p,onInput:y,disabled:n,required:O,className:E}))}}],n&&y(r.prototype,n),u&&y(r,u),Object.defineProperty(r,"prototype",{writable:!1}),t}(o.default.Component);I.propTypes=j,I.defaultProps=P,I.contextType=i.default,I.isInput=!0;t.default=I},25944:function(e,t,r){r.r(t),t.default={"content-wrapper":"Input-test-module__content-wrapper___N2IYI","programmatic-button":"Input-test-module__programmatic-button___S++Ze"}},93024:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___2+uSg","orion-fusion-theme":"Input-module__orion-fusion-theme___BNJE+","form-input":"Input-module__form-input___CHQ2i","form-error":"Input-module__form-error___0OFqM","form-incomplete":"Input-module__form-incomplete___W7v5s"}}}]);