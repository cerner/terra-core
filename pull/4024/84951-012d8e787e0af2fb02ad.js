"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[84951],{84951:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),o=l(r(19845)),u=l(r(421)),a=l(r(10505));function l(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(a.default);t.default=function(){return n.default.createElement("div",{className:i("content-wrapper")},n.default.createElement(u.default,{disabled:!0,id:"form-input-disabled",ariaLabel:"label"}))}},421:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(r(67294)),u=p(r(45697)),a=p(r(93967)),l=p(r(19845)),i=p(r(50026)),f=p(r(95334)),c=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function p(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function v(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:String(t)}function _(e,t,r){return t=h(t),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,O()?Reflect.construct(t,r||[],h(e).constructor):t.apply(e,r))}function O(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(O=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}var j=l.default.bind(f.default),w={defaultValue:u.default.oneOfType([u.default.string,u.default.number]),disabled:u.default.bool,isIncomplete:u.default.bool,isInvalid:u.default.bool,onBlur:u.default.func,onChange:u.default.func,onFocus:u.default.func,onInput:u.default.func,name:u.default.string,pattern:u.default.string,refCallback:u.default.func,required:u.default.bool,type:u.default.string,value:u.default.oneOfType([u.default.string,u.default.number]),ariaLabel:u.default.string},P={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,t,arguments)}var r,n,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(t,e),r=t,n=[{key:"render",value:function(){var e,t=this.props,r=t.defaultValue,n=t.disabled,u=t.isIncomplete,l=t.isInvalid,i=t.onBlur,f=t.onChange,p=t.onFocus,m=t.onInput,v=t.name,_=t.pattern,O=t.refCallback,h=t.required,g=t.type,w=t.ariaLabel,P=t.value,I=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},y(t,c)),S=this.context,C=(void 0===g||["text","number","password","email","search","tel","url","hidden"].includes(g))&&j("form-input",{"form-error":l},{"form-incomplete":u&&h&&!l},S.className),k=(0,a.default)(C,I.className);return I&&Object.prototype.hasOwnProperty.call(I,"aria-label")?e=w||I["aria-label"]:w&&(e=w),I["aria-label"]=e,h&&(I["aria-required"]="true"),void 0!==P?I.value=P:void 0!==r&&(I.defaultValue=r),I.placeholder&&!I.showMpageFusionPlaceholder&&(I.placeholder=null),delete I.showMpageFusionPlaceholder,o.default.createElement("input",d({},I,{ref:function(e){O&&O(e)},name:v,type:g,pattern:_,onBlur:i,onChange:f,onFocus:p,onInput:m,disabled:n,required:h,className:k}))}}],n&&m(r.prototype,n),u&&m(r,u),Object.defineProperty(r,"prototype",{writable:!1}),t}(o.default.Component);I.propTypes=w,I.defaultProps=P,I.contextType=i.default,I.isInput=!0;t.default=I},10505:function(e,t,r){r.r(t),t.default={"content-wrapper":"Input-test-module__content-wrapper___N2IYI","programmatic-button":"Input-test-module__programmatic-button___S++Ze"}},95334:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___2+uSg","orion-fusion-theme":"Input-module__orion-fusion-theme___BNJE+","form-input":"Input-module__form-input___CHQ2i","form-error":"Input-module__form-error___0OFqM","form-incomplete":"Input-module__form-incomplete___W7v5s"}}}]);