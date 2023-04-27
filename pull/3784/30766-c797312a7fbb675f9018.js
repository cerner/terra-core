"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[30766],{64714:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=l?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(67294)),l=d(r(92226)),a=d(r(43868)),u=d(r(50412)),i=d(r(421)),c=d(r(88220)),f=d(r(81229)),s=d(r(47166)),p=d(r(20850));function d(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function b(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l,a,u=[],i=!0,c=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=l.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{if(!i&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(e,t)||h(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){if(e){if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var _=s.default.bind(p.default),g=0,w=function(){var e={ALERT:"alert",ERROR:"error",WARNING:"warning",UNSATISFIED:"unsatisfied",UNVERIFIED:"unverified",ADVISORY:"advisory",INFO:"info",SUCCESS:"success",CUSTOM:"custom"},t={alert:"Site is down for maintenance.",error:"Unable to save at this time. Please try again later.",warning:"There are unsaved changes.",unsatisfied:"Only one package must be selected before the Activate Content button is clicked.",unverified:"This item is not verified.",advisory:"This item is typically not used.",info:"This receipt is for a bill-only purchase order.",success:"Changes successfully committed.",custom:"Welcome to Terra!"},r=v((0,o.useState)(0),2),n=r[0],s=r[1],p=v((0,o.useState)(3e3),2),d=p[0],m=p[1],h=v((0,o.useState)([{id:g,type:e.SUCCESS,onDismiss:!0}]),2),O=h[0],w=h[1],j=v((0,o.useState)(!1),2),S=j[0],E=j[1],I=v((0,o.useState)(e.SUCCESS),2),C=I[0],P=I[1],x=v((0,o.useState)(["onDismiss"]),2),D=x[0],T=x[1],k=(0,o.useRef)(O),A=function(){s((function(e){return e+1}))};return o.default.createElement(o.default.Fragment,null,S&&o.default.createElement(l.default,{id:"replaceableAlert",type:C,onDismiss:function(){return E(!1)}},"".concat(t[C]," Replaceable alert.")),O&&O.map((function(e,r){return o.default.createElement(l.default,y({key:e.id,id:"customAlert",type:e.type,onDismiss:e.onDismiss?function(){!function(e){k.current.splice(e,1),w(b(k.current))}(r)}:null},e.props),t[e.type])})),o.default.createElement("br",null),o.default.createElement("div",{id:"alertType"},"Select alert type:"),o.default.createElement(f.default,{ariaLabel:"Alert types",isFilterStyle:!0,onChange:function(e){return P(e.currentTarget.value)},options:Object.values(e).map((function(e){return{value:e,display:e}})),value:C}),o.default.createElement("div",{id:"alertProps"},"Select alert props/options:"),o.default.createElement(c.default,{placeholder:"Select alert props",value:D,onChange:T},o.default.createElement(c.default.Option,{value:"action",display:"action (prop)"}),o.default.createElement(c.default.Option,{value:"customColorClass",display:"customColorClass (prop)"}),o.default.createElement(c.default.Option,{value:"customIcon",display:"customIcon (prop)"}),o.default.createElement(c.default.Option,{value:"onDismiss",display:"onDismiss (prop)"}),o.default.createElement(c.default.Option,{value:"title",display:"title (prop)"}),o.default.createElement(c.default.Option,{value:"alertDelay",display:"alertDelay"})),D.indexOf("alertDelay")>=0&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"alertDelay"},"Set alert delay (ms):"),o.default.createElement(i.default,{ariaLabel:"Numeric Input",name:"Set alert delay (ms)",onChange:function(e){return m(e.target.value)},type:"number",value:d})),o.default.createElement("br",null),o.default.createElement(a.default,{text:"Trigger Alert",onClick:function(){setTimeout((function(){g+=1,k.current.push({id:g,type:C,props:{action:D.indexOf("action")>=0?o.default.createElement(a.default,{text:"Action",variant:"emphasis",onClick:A}):null,customColorClass:D.indexOf("customColorClass")>=0?_(["my-app-alert-help-example"]):null,customIcon:D.indexOf("customIcon")>=0?o.default.createElement(u.default,null):null,title:D.indexOf("title")>=0?"Terra Message":null},onDismiss:D.indexOf("onDismiss")>=0}),w(b(k.current))}),D.indexOf("alertDelay")>=0?d:0)}}),o.default.createElement(a.default,{isDisabled:S,text:"Trigger Replaceable Alert",onClick:function(){E(!0)}}),o.default.createElement("p",null,"Action button has been clicked ".concat(n," times.")))};t.default=w},421:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(r(67294)),l=s(r(45697)),a=s(r(94184)),u=s(r(47166)),i=s(r(50026)),c=s(r(95334)),f=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function s(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function v(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=_(e);if(t){var l=_(this).constructor;r=Reflect.construct(o,arguments,l)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var g=u.default.bind(c.default),w={defaultValue:l.default.oneOfType([l.default.string,l.default.number]),disabled:l.default.bool,isIncomplete:l.default.bool,isInvalid:l.default.bool,onBlur:l.default.func,onChange:l.default.func,onFocus:l.default.func,onInput:l.default.func,name:l.default.string,pattern:l.default.string,refCallback:l.default.func,required:l.default.bool,type:l.default.string,value:l.default.oneOfType([l.default.string,l.default.number]),ariaLabel:l.default.string},j={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,r,n,l=O(u);function u(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),l.apply(this,arguments)}return t=u,r=[{key:"render",value:function(){var e,t=this.props,r=t.defaultValue,n=t.disabled,l=t.isIncomplete,u=t.isInvalid,i=t.onBlur,c=t.onChange,s=t.onFocus,b=t.onInput,v=t.name,h=t.pattern,O=t.refCallback,_=t.required,w=t.type,j=t.ariaLabel,S=t.value,E=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},y(t,f)),I=this.context,C=(void 0===w||["text","number","password","email","search","tel","url","hidden"].includes(w))&&g("form-input",{"form-error":u},{"form-incomplete":l&&_&&!u},I.className),P=(0,a.default)(C,E.className);return E&&Object.prototype.hasOwnProperty.call(E,"aria-label")?e=j||E["aria-label"]:j&&(e=j),E["aria-label"]=e,_&&(E["aria-required"]="true"),void 0!==S?E.value=S:void 0!==r&&(E.defaultValue=r),E.placeholder&&(E.placeholder=null),o.default.createElement("input",p({},E,{ref:function(e){O&&O(e)},name:v,type:w,pattern:h,onBlur:i,onChange:c,onFocus:s,onInput:b,disabled:n,required:_,className:P}))}}],r&&b(t.prototype,r),n&&b(t,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o.default.Component);S.propTypes=w,S.defaultProps=j,S.contextType=i.default,S.isInput=!0;var E=S;t.default=E},50412:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(67294)),o=c(r(94184)),l=c(r(47166)),a=c(r(50026)),u=c(r(21969)),i=c(r(23977));function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}var s=l.default.bind(i.default),p=function(e){var t=f({},e),r=n.default.useContext(a.default),l=(0,o.default)(s("IconHelp",r.className),e.className);return n.default.createElement(u.default,f({},t,{className:l}),n.default.createElement("path",{fill:"#007CC3",d:"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24C48 10.8 37.3 0 24.1 0H24z"}),n.default.createElement("path",{fill:"#FFF",d:"M26 36h-4v-4h4v4zm4.6-12.8c-.6.7-1.4 1.4-2.2 1.9-1.2.8-2.4 1-2.4 1.8V28h-4v-.8c0-1.8.9-3.5 2.4-4.5.6-.3 1.1-.6 1.6-.9 1.6-.8 2.2-2.7 1.4-4.3-.6-1.1-1.7-1.7-2.9-1.7H24c-1.6 0-3 1.3-3.2 2.9v.3h-4c-.1-3.1 2.1-5.9 5.1-6.6.9-.3 1.9-.4 2.8-.4h.2c3.8-.2 7 2.8 7.2 6.6.1 1.7-.5 3.3-1.5 4.6z"}))};p.displayName="IconHelp",p.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var d=p;t.default=d},20850:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"colors-module__clinical-lowlight-theme___n7wvZ","orion-fusion-theme":"colors-module__orion-fusion-theme___SmDk5","my-app-alert-attention-example":"colors-module__my-app-alert-attention-example___LLEN-","my-app-alert-help-example":"colors-module__my-app-alert-help-example___l0ZAi","my-app-alert-dismiss-example":"colors-module__my-app-alert-dismiss-example___xR-qR"}},95334:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___2+uSg","orion-fusion-theme":"Input-module__orion-fusion-theme___BNJE+","form-input":"Input-module__form-input___CHQ2i","form-error":"Input-module__form-error___0OFqM","form-incomplete":"Input-module__form-incomplete___W7v5s"}},23977:function(e,t,r){r.r(t),t.default={"orion-fusion-theme":"IconHelp-module__orion-fusion-theme___XO3OA","clinical-lowlight-theme":"IconHelp-module__clinical-lowlight-theme___H5D1J",IconHelp:"IconHelp-module__IconHelp___l1vM-"}}}]);