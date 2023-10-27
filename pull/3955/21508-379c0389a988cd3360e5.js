"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[21508],{21508:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),o=l(r(47166)),a=l(r(42422)),i=l(r(65918));function l(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(i.default);t.default=function(){return n.default.createElement("div",{className:u("content-wrapper")},n.default.createElement(a.default,{required:!0,isIncomplete:!0,ariaLabel:"label"}))}},42422:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextareaSize=void 0;var o=f(r(67294)),a=f(r(45697)),i=f(r(94184)),l=f(r(47166)),u=f(r(50026)),s=f(r(75045)),c=["name","required","onChange","onFocus","onInput","isAutoResizable","isIncomplete","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback","disableResize"];function f(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function v(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=w(e);if(t){var a=w(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}(this,r)}}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var x=l.default.bind(s.default),O=(t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"},{small:2,medium:5,large:10}),j={ariaLabel:a.default.string,defaultValue:a.default.string,disabled:a.default.bool,isAutoResizable:a.default.bool,isIncomplete:a.default.bool,isInvalid:a.default.bool,name:a.default.string,onChange:a.default.func,onFocus:a.default.func,onInput:a.default.func,required:a.default.bool,rows:a.default.number,size:a.default.oneOf(["small","medium","large","full"]),value:a.default.string,refCallback:a.default.func,disableResize:a.default.bool},z={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isIncomplete:!1,isInvalid:!1,onChange:void 0,onInput:void 0,required:!1,rows:void 0,size:"small",value:void 0,refCallback:void 0,disableResize:!1},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(l,e);var t,r,n,a=g(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=a.call(this,e)).isMobileDevice=window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),t.onChange=t.onChange.bind(_(t)),t.onFocus=t.onFocus.bind(_(t)),t}return t=l,r=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,10));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,10));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||O[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,r=this.props,n=r.name,a=r.required,l=(r.onChange,r.onFocus,r.onInput),u=r.isAutoResizable,s=r.isIncomplete,f=r.isInvalid,m=r.value,v=r.defaultValue,y=r.rows,g=r.size,_=r.ariaLabel,w=r.refCallback,j=r.disableResize,z=b(r,c),P=this.context,T=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},z),C=(0,i.default)(x("textarea",{"form-error":f},{"form-incomplete":s&&a&&!f},{"full-size":"full"===g},{resizable:u&&!this.isMobileDevice},{"no-resize":j},P.className),T.className);T&&Object.prototype.hasOwnProperty.call(T,"aria-label")?e=_||T["aria-label"]:_&&(e=_),T["aria-label"]=e,T["aria-invalid"]=f,a&&(T["aria-required"]="true");var S=y||O[g];return void 0!==m?T.value=m:T.defaultValue=v,T.placeholder&&(T.placeholder=null),o.default.createElement("textarea",p({},T,{ref:function(e){t.textarea=e,w&&w(e)},name:n,onFocus:this.onFocus,onChange:this.onChange,onInput:l,required:a,rows:S,className:C}))}}],r&&m(t.prototype,r),n&&m(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.default.Component);P.propTypes=j,P.defaultProps=z,P.isTextarea=!0,P.contextType=u.default;t.default=P},65918:function(e,t,r){r.r(t),t.default={"content-wrapper":"Textarea-test-module__content-wrapper___z93xU"}},75045:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Textarea-module__clinical-lowlight-theme___25VEx","orion-fusion-theme":"Textarea-module__orion-fusion-theme___-ALn1",textarea:"Textarea-module__textarea___T-1-2","full-size":"Textarea-module__full-size___aj6q3","no-resize":"Textarea-module__no-resize___s9wkM",resizable:"Textarea-module__resizable___S2iWE","form-error":"Textarea-module__form-error___X3ATU","form-incomplete":"Textarea-module__form-incomplete___F3t1X"}}}]);