"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[48225],{48225:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}(r(67294)),a=l(r(19845)),i=l(r(42422)),u=l(r(65918));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,u=[],l=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=a.default.bind(u.default);t.default=function(){var e=c((0,o.useState)(0),2),t=e[0],r=e[1],n=c((0,o.useState)(""),2),a=n[0],u=n[1],l=(0,o.useRef)(null);return o.default.createElement("div",{className:p("content-wrapper")},o.default.createElement("p",null,"onInput Trigger Count:"," ",o.default.createElement("span",null,t)),o.default.createElement(i.default,{onChange:function(e,t){u(t)},onInput:function(e){u(e.target.value),r(t+1)},value:a,ariaLabel:"label",refCallback:function(e){l.current=e}}),o.default.createElement("button",{type:"button",onClick:function(){if(l.current){l.current.value="IpsumLorem";var e=new Event("input",{bubbles:!0,cancelable:!1});l.current.dispatchEvent(e)}},id:"textarea-set-text-button"},"Set textarea text"))}},42422:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextareaSize=void 0;var o=f(r(67294)),a=f(r(45697)),i=f(r(93967)),u=f(r(19845)),l=f(r(50026)),s=f(r(75045)),c=["name","required","onChange","onFocus","onInput","isAutoResizable","isIncomplete","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback","disableResize"];function f(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e,t,r){return(t=m(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,m(n.key),n)}}function m(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:String(t)}function v(e,t,r){return t=_(t),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(e,g()?Reflect.construct(t,r||[],_(e).constructor):t.apply(e,r))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}var x=u.default.bind(s.default),j=(t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"},{small:2,medium:5,large:10}),S={ariaLabel:a.default.string,defaultValue:a.default.string,disabled:a.default.bool,isAutoResizable:a.default.bool,isIncomplete:a.default.bool,isInvalid:a.default.bool,name:a.default.string,onChange:a.default.func,onFocus:a.default.func,onInput:a.default.func,required:a.default.bool,rows:a.default.number,size:a.default.oneOf(["small","medium","large","full"]),value:a.default.string,refCallback:a.default.func,disableResize:a.default.bool},z={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isIncomplete:!1,isInvalid:!1,onChange:void 0,onInput:void 0,required:!1,rows:void 0,size:"small",value:void 0,refCallback:void 0,disableResize:!1},P=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=v(this,t,[e])).isMobileDevice=window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),r.onChange=r.onChange.bind(w(r)),r.onFocus=r.onFocus.bind(w(r)),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(t,e),r=t,n=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,10));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,10));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||j[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,r=this.props,n=r.name,a=r.required,u=(r.onChange,r.onFocus,r.onInput),l=r.isAutoResizable,s=r.isIncomplete,f=r.isInvalid,y=r.value,m=r.defaultValue,v=r.rows,g=r.size,_=r.ariaLabel,w=r.refCallback,O=r.disableResize,S=h(r,c),z=this.context,P=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},S),T=(0,i.default)(x("textarea",{"form-error":f},{"form-incomplete":s&&a&&!f},{"full-size":"full"===g},{resizable:l&&!this.isMobileDevice},{"no-resize":O},z.className),P.className);P&&Object.prototype.hasOwnProperty.call(P,"aria-label")?e=_||P["aria-label"]:_&&(e=_),P["aria-label"]=e,P["aria-invalid"]=f,a&&(P["aria-required"]="true");var C=v||j[g];return void 0!==y?P.value=y:P.defaultValue=m,P.placeholder&&(P.placeholder=null),o.default.createElement("textarea",p({},P,{ref:function(e){t.textarea=e,w&&w(e)},name:n,onFocus:this.onFocus,onChange:this.onChange,onInput:u,required:a,rows:C,className:T}))}}],n&&y(r.prototype,n),a&&y(r,a),Object.defineProperty(r,"prototype",{writable:!1}),t}(o.default.Component);P.propTypes=S,P.defaultProps=z,P.isTextarea=!0,P.contextType=l.default;t.default=P},65918:function(e,t,r){r.r(t),t.default={"content-wrapper":"Textarea-test-module__content-wrapper___z93xU"}},75045:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Textarea-module__clinical-lowlight-theme___25VEx","orion-fusion-theme":"Textarea-module__orion-fusion-theme___-ALn1",textarea:"Textarea-module__textarea___T-1-2","full-size":"Textarea-module__full-size___aj6q3","no-resize":"Textarea-module__no-resize___s9wkM",resizable:"Textarea-module__resizable___S2iWE","form-error":"Textarea-module__form-error___X3ATU","form-incomplete":"Textarea-module__form-incomplete___F3t1X"}}}]);