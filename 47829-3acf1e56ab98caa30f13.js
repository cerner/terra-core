"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[47829],{47829:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(r(67294)),n=l(r(19845)),a=l(r(42422)),i=l(r(65918));function l(e){return e&&e.__esModule?e:{default:e}}var u=n.default.bind(i.default);t.default=function(){return o.default.createElement("div",{className:u("content-wrapper")},o.default.createElement(a.default,{value:"value",ariaLabel:"label"}))}},42422:function(e,t,r){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextareaSize=void 0;var n=f(r(67294)),a=f(r(45697)),i=f(r(93967)),l=f(r(19845)),u=f(r(50026)),s=f(r(75045)),c=["name","required","onChange","onFocus","onInput","isAutoResizable","isIncomplete","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback","disableResize"];function f(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},p.apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function b(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function m(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,v(o.key),o)}}function v(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:String(t)}function y(e,t,r){return t=_(t),function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(e,g()?Reflect.construct(t,r||[],_(e).constructor):t.apply(e,r))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}var O=l.default.bind(s.default),j=(t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"},{small:2,medium:5,large:10}),z={ariaLabel:a.default.string,defaultValue:a.default.string,disabled:a.default.bool,isAutoResizable:a.default.bool,isIncomplete:a.default.bool,isInvalid:a.default.bool,name:a.default.string,onChange:a.default.func,onFocus:a.default.func,onInput:a.default.func,required:a.default.bool,rows:a.default.number,size:a.default.oneOf(["small","medium","large","full"]),value:a.default.string,refCallback:a.default.func,disableResize:a.default.bool},P={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isIncomplete:!1,isInvalid:!1,onChange:void 0,onInput:void 0,required:!1,rows:void 0,size:"small",value:void 0,refCallback:void 0,disableResize:!1},T=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=y(this,t,[e])).isMobileDevice=window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),r.onChange=r.onChange.bind(w(r)),r.onFocus=r.onFocus.bind(w(r)),r}var r,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(t,e),r=t,o=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,10));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,10));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||j[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,r=this.props,o=r.name,a=r.required,l=(r.onChange,r.onFocus,r.onInput),u=r.isAutoResizable,s=r.isIncomplete,f=r.isInvalid,m=r.value,v=r.defaultValue,y=r.rows,g=r.size,_=r.ariaLabel,w=r.refCallback,x=r.disableResize,z=h(r,c),P=this.context,T=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},z),C=(0,i.default)(O("textarea",{"form-error":f},{"form-incomplete":s&&a&&!f},{"full-size":"full"===g},{resizable:u&&!this.isMobileDevice},{"no-resize":x},P.className),T.className);T&&Object.prototype.hasOwnProperty.call(T,"aria-label")?e=_||T["aria-label"]:_&&(e=_),T["aria-label"]=e,T["aria-invalid"]=f,a&&(T["aria-required"]="true");var S=y||j[g];return void 0!==m?T.value=m:T.defaultValue=v,T.placeholder&&(T.placeholder=null),n.default.createElement("textarea",p({},T,{ref:function(e){t.textarea=e,w&&w(e)},name:o,onFocus:this.onFocus,onChange:this.onChange,onInput:l,required:a,rows:S,className:C}))}}],o&&m(r.prototype,o),a&&m(r,a),Object.defineProperty(r,"prototype",{writable:!1}),t}(n.default.Component);T.propTypes=z,T.defaultProps=P,T.isTextarea=!0,T.contextType=u.default;t.default=T},65918:function(e,t,r){r.r(t),t.default={"content-wrapper":"Textarea-test-module__content-wrapper___z93xU"}},75045:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Textarea-module__clinical-lowlight-theme___25VEx","orion-fusion-theme":"Textarea-module__orion-fusion-theme___-ALn1",textarea:"Textarea-module__textarea___T-1-2","full-size":"Textarea-module__full-size___aj6q3","no-resize":"Textarea-module__no-resize___s9wkM",resizable:"Textarea-module__resizable___S2iWE","form-error":"Textarea-module__form-error___X3ATU","form-incomplete":"Textarea-module__form-incomplete___F3t1X"}}}]);