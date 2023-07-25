"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[48225],{48225:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=e[i]}o.default=e,r&&r.set(e,o);return o}(r(67294)),a=l(r(47166)),i=l(r(42422)),u=l(r(65918));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,u=[],l=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=a.default.bind(u.default),d=function(){var e=c((0,o.useState)(0),2),t=e[0],r=e[1],n=c((0,o.useState)(""),2),a=n[0],u=n[1],l=(0,o.useRef)(null);return o.default.createElement("div",{className:p("content-wrapper")},o.default.createElement("p",null,"onInput Trigger Count:"," ",o.default.createElement("span",null,t)),o.default.createElement(i.default,{onChange:function(e,t){u(t)},onInput:function(e){u(e.target.value),r(t+1)},value:a,ariaLabel:"label",refCallback:function(e){l.current=e}}),o.default.createElement("button",{type:"button",onClick:function(){if(l.current){l.current.value="IpsumLorem";var e=new Event("input",{bubbles:!0,cancelable:!1});l.current.dispatchEvent(e)}},id:"textarea-set-text-button"},"Set textarea text"))};t.default=d},42422:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextareaSize=void 0;var o=f(r(67294)),a=f(r(45697)),i=f(r(94184)),u=f(r(47166)),l=f(r(50026)),s=f(r(75045)),c=["name","required","onChange","onFocus","onInput","isAutoResizable","isIncomplete","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback","disableResize"];function f(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e,t,r){return(t=m(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,m(n.key),n)}}function m(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=w(e);if(t){var a=w(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}(this,r)}}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var O=u.default.bind(s.default);t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"};var x={small:2,medium:5,large:10},j={ariaLabel:a.default.string,defaultValue:a.default.string,disabled:a.default.bool,isAutoResizable:a.default.bool,isIncomplete:a.default.bool,isInvalid:a.default.bool,name:a.default.string,onChange:a.default.func,onFocus:a.default.func,onInput:a.default.func,required:a.default.bool,rows:a.default.number,size:a.default.oneOf(["small","medium","large","full"]),value:a.default.string,refCallback:a.default.func,disableResize:a.default.bool},P={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isIncomplete:!1,isInvalid:!1,onChange:void 0,onInput:void 0,required:!1,rows:void 0,size:"small",value:void 0,refCallback:void 0,disableResize:!1},S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,r,n,a=g(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=a.call(this,e)).isMobileDevice=window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),t.onChange=t.onChange.bind(_(t)),t.onFocus=t.onFocus.bind(_(t)),t}return t=u,r=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,10));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,10));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||x[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,r=this.props,n=r.name,a=r.required,u=(r.onChange,r.onFocus,r.onInput),l=r.isAutoResizable,s=r.isIncomplete,f=r.isInvalid,y=r.value,m=r.defaultValue,v=r.rows,g=r.size,_=r.ariaLabel,w=r.refCallback,j=r.disableResize,P=h(r,c),S=this.context,z=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},P),T=(0,i.default)(O("textarea",{"form-error":f},{"form-incomplete":s&&a&&!f},{"full-size":"full"===g},{resizable:l&&!this.isMobileDevice},{"no-resize":j},S.className),z.className);z&&Object.prototype.hasOwnProperty.call(z,"aria-label")?e=_||z["aria-label"]:_&&(e=_),z["aria-label"]=e,z["aria-invalid"]=f,a&&(z["aria-required"]="true");var C=v||x[g];return void 0!==y?z.value=y:z.defaultValue=m,z.placeholder&&(z.placeholder=null),o.default.createElement("textarea",p({},z,{ref:function(e){t.textarea=e,w&&w(e)},name:n,onFocus:this.onFocus,onChange:this.onChange,onInput:u,required:a,rows:C,className:T}))}}],r&&y(t.prototype,r),n&&y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o.default.Component);S.propTypes=j,S.defaultProps=P,S.isTextarea=!0,S.contextType=l.default;var z=S;t.default=z},65918:function(e,t,r){r.r(t),t.default={"content-wrapper":"Textarea-test-module__content-wrapper___z93xU"}},75045:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Textarea-module__clinical-lowlight-theme___25VEx","orion-fusion-theme":"Textarea-module__orion-fusion-theme___-ALn1",textarea:"Textarea-module__textarea___T-1-2","full-size":"Textarea-module__full-size___aj6q3","no-resize":"Textarea-module__no-resize___s9wkM",resizable:"Textarea-module__resizable___S2iWE","form-error":"Textarea-module__form-error___X3ATU","form-incomplete":"Textarea-module__form-incomplete___F3t1X"}}}]);