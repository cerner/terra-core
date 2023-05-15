"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[30766],{64714:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(o,l,i):o[l]=e[l]}o.default=e,n&&n.set(e,o);return o}(n(67294)),a=p(n(92226)),l=p(n(43868)),i=p(n(50412)),u=p(n(421)),c=p(n(88220)),f=p(n(81229)),s=p(n(47166)),d=p(n(20850));function p(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function b(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,l,i=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw o}}return i}}(e,t)||h(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=s.default.bind(d.default),_=0,S=function(){var e={ALERT:"alert",ERROR:"error",WARNING:"warning",UNSATISFIED:"unsatisfied",UNVERIFIED:"unverified",ADVISORY:"advisory",INFO:"info",SUCCESS:"success",CUSTOM:"custom"},t={alert:"Site is down for maintenance.",error:"Unable to save at this time. Please try again later.",warning:"There are unsaved changes.",unsatisfied:"Only one package must be selected before the Activate Content button is clicked.",unverified:"This item is not verified.",advisory:"This item is typically not used.",info:"This receipt is for a bill-only purchase order.",success:"Changes successfully committed.",custom:"Welcome to Terra!"},n=v((0,o.useState)(0),2),r=n[0],s=n[1],d=v((0,o.useState)(3e3),2),p=d[0],m=d[1],h=v((0,o.useState)([{id:_,notificationMessage:t[e.SUCCESS],type:e.SUCCESS,onDismiss:!0}]),2),O=h[0],S=h[1],w=v((0,o.useState)("Enter custom notification message"),2),j=w[0],E=w[1],C=v((0,o.useState)(!1),2),I=C[0],P=C[1],x=v((0,o.useState)(e.SUCCESS),2),D=x[0],M=x[1],T=v((0,o.useState)(["action","onDismiss"]),2),k=T[0],A=T[1],N=(0,o.useRef)(O),R=function(){s((function(e){return e+1}))};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{"aria-live":"polite"},I&&o.default.createElement(a.default,{id:"replaceableAlert",type:D,onDismiss:function(){return P(!1)}},"".concat(t[D]," Replaceable alert.")),O&&O.map((function(e,t){return o.default.createElement(a.default,y({key:e.id,id:"customAlert",type:e.type,onDismiss:e.onDismiss?function(){!function(e){N.current.splice(e,1),S(b(N.current))}(t)}:null},e.props),e.notificationMessage)}))),o.default.createElement("br",null),o.default.createElement("div",{id:"alertType"},"Select notification type:"),o.default.createElement(f.default,{ariaLabel:"Notification types",isFilterStyle:!0,onChange:function(e){return M(e.currentTarget.value)},options:Object.values(e).map((function(e){return{value:e,display:e}})),value:D}),o.default.createElement("div",{id:"alertProps"},"Select notification banner props/options:"),o.default.createElement(c.default,{placeholder:"Select alert props",value:k,onChange:A},o.default.createElement(c.default.Option,{value:"action",display:"action (prop)"}),o.default.createElement(c.default.Option,{value:"customColorClass",display:"customColorClass (prop)"}),o.default.createElement(c.default.Option,{value:"customIcon",display:"customIcon (prop)"}),o.default.createElement(c.default.Option,{value:"customMessage",display:"customMessage"}),o.default.createElement(c.default.Option,{value:"onDismiss",display:"onDismiss (prop)"}),o.default.createElement(c.default.Option,{value:"title",display:"title (prop)"}),o.default.createElement(c.default.Option,{value:"alertDelay",display:"alertDelay"})),k.indexOf("alertDelay")>=0&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"alertDelay"},"Set notification delay (ms):"),o.default.createElement(u.default,{ariaLabel:"Numeric Input",name:"Set alert delay (ms)",onChange:function(e){return m(e.target.value)},type:"number",value:p})),k.indexOf("customMessage")>=0&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"alertMessage"},"Set custom notification message:"),o.default.createElement(u.default,{ariaLabel:"Set custom notification message",name:"Set custom notification message",onChange:function(e){return E(e.target.value)},value:j})),o.default.createElement("br",null),o.default.createElement(l.default,{text:"Trigger Notification Banner",onClick:function(){setTimeout((function(){_+=1,N.current.push({id:_,type:D,notificationMessage:k.indexOf("customMessage")>=0?j:t[D],props:{action:k.indexOf("action")>=0?o.default.createElement(l.default,{text:"Action",variant:"emphasis",onClick:R}):null,customColorClass:k.indexOf("customColorClass")>=0?g(["my-app-alert-help-example"]):null,customIcon:k.indexOf("customIcon")>=0?o.default.createElement(i.default,null):null,title:k.indexOf("title")>=0?"Terra Message":null},onDismiss:k.indexOf("onDismiss")>=0}),S(b(N.current))}),k.indexOf("alertDelay")>=0?p:0)}}),o.default.createElement(l.default,{isDisabled:I,text:"Trigger Replaceable Notification Banner",onClick:function(){P(!0)}}),o.default.createElement("p",null,"Action button has been clicked ".concat(r," times.")))};t.default=S},421:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(67294)),a=s(n(45697)),l=s(n(94184)),i=s(n(47166)),u=s(n(50026)),c=s(n(95334)),f=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function v(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=g(e);if(t){var a=g(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var _=i.default.bind(c.default),S={defaultValue:a.default.oneOfType([a.default.string,a.default.number]),disabled:a.default.bool,isIncomplete:a.default.bool,isInvalid:a.default.bool,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,onInput:a.default.func,name:a.default.string,pattern:a.default.string,refCallback:a.default.func,required:a.default.bool,type:a.default.string,value:a.default.oneOfType([a.default.string,a.default.number]),ariaLabel:a.default.string},w={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(i,e);var t,n,r,a=O(i);function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),a.apply(this,arguments)}return t=i,n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,r=t.disabled,a=t.isIncomplete,i=t.isInvalid,u=t.onBlur,c=t.onChange,s=t.onFocus,b=t.onInput,v=t.name,h=t.pattern,O=t.refCallback,g=t.required,S=t.type,w=t.ariaLabel,j=t.value,E=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},y(t,f)),C=this.context,I=(void 0===S||["text","number","password","email","search","tel","url","hidden"].includes(S))&&_("form-input",{"form-error":i},{"form-incomplete":a&&g&&!i},C.className),P=(0,l.default)(I,E.className);return E&&Object.prototype.hasOwnProperty.call(E,"aria-label")?e=w||E["aria-label"]:w&&(e=w),E["aria-label"]=e,g&&(E["aria-required"]="true"),void 0!==j?E.value=j:void 0!==n&&(E.defaultValue=n),E.placeholder&&(E.placeholder=null),o.default.createElement("input",d({},E,{ref:function(e){O&&O(e)},name:v,type:S,pattern:h,onBlur:u,onChange:c,onFocus:s,onInput:b,disabled:r,required:g,className:P}))}}],n&&b(t.prototype,n),r&&b(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(o.default.Component);j.propTypes=S,j.defaultProps=w,j.contextType=u.default,j.isInput=!0;var E=j;t.default=E},50412:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),o=c(n(94184)),a=c(n(47166)),l=c(n(50026)),i=c(n(21969)),u=c(n(23977));function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}var s=a.default.bind(u.default),d=function(e){var t=f({},e),n=r.default.useContext(l.default),a=(0,o.default)(s("IconHelp",n.className),e.className);return r.default.createElement(i.default,f({},t,{className:a}),r.default.createElement("path",{fill:"#007CC3",d:"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24C48 10.8 37.3 0 24.1 0H24z"}),r.default.createElement("path",{fill:"#FFF",d:"M26 36h-4v-4h4v4zm4.6-12.8c-.6.7-1.4 1.4-2.2 1.9-1.2.8-2.4 1-2.4 1.8V28h-4v-.8c0-1.8.9-3.5 2.4-4.5.6-.3 1.1-.6 1.6-.9 1.6-.8 2.2-2.7 1.4-4.3-.6-1.1-1.7-1.7-2.9-1.7H24c-1.6 0-3 1.3-3.2 2.9v.3h-4c-.1-3.1 2.1-5.9 5.1-6.6.9-.3 1.9-.4 2.8-.4h.2c3.8-.2 7 2.8 7.2 6.6.1 1.7-.5 3.3-1.5 4.6z"}))};d.displayName="IconHelp",d.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var p=d;t.default=p},20850:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"colors-module__clinical-lowlight-theme___n7wvZ","orion-fusion-theme":"colors-module__orion-fusion-theme___SmDk5","my-app-alert-attention-example":"colors-module__my-app-alert-attention-example___LLEN-","my-app-alert-help-example":"colors-module__my-app-alert-help-example___l0ZAi","my-app-alert-dismiss-example":"colors-module__my-app-alert-dismiss-example___xR-qR"}},95334:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___2+uSg","orion-fusion-theme":"Input-module__orion-fusion-theme___BNJE+","form-input":"Input-module__form-input___CHQ2i","form-error":"Input-module__form-error___0OFqM","form-incomplete":"Input-module__form-incomplete___W7v5s"}},23977:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"IconHelp-module__orion-fusion-theme___XO3OA","clinical-lowlight-theme":"IconHelp-module__clinical-lowlight-theme___H5D1J",IconHelp:"IconHelp-module__IconHelp___l1vM-"}}}]);