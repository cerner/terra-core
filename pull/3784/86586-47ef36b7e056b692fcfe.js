"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[86586],{86586:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(67294)),o=r(n(36530)),i=r(n(47166)),a=r(n(43162));function r(e){return e&&e.__esModule?e:{default:e}}var u=i.default.bind(a.default),d=function(){return l.default.createElement("div",{className:u("spacing")},l.default.createElement(o.default,{id:"disabled",labelText:"Disabled Checkbox",disabled:!0}),l.default.createElement(o.default,{id:"disabledchecked",labelText:"Disabled and Checked Checkbox",defaultChecked:!0,disabled:!0}))};t.default=d},36530:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=b(n(67294)),i=b(n(45697)),a=b(n(94184)),r=b(n(47166)),u=b(n(50026)),d=b(n(28460)),c=b(n(389)),s=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function b(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function h(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.default.bind(d.default),v={checked:i.default.bool,defaultChecked:i.default.bool,id:i.default.string,inputAttrs:i.default.object,disabled:i.default.bool,isInline:i.default.bool,isLabelHidden:i.default.bool,labelText:i.default.string.isRequired,labelTextAttrs:i.default.object,name:i.default.string,onBlur:i.default.func,onChange:i.default.func,onFocus:i.default.func,value:i.default.string},y={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},k=function(e){var t=e.checked,n=e.defaultChecked,l=e.inputAttrs,i=e.id,r=e.disabled,d=e.isInline,b=e.isLabelHidden,v=e.labelText,y=e.labelTextAttrs,k=e.name,x=e.onBlur,g=e.onChange,O=e.onFocus,C=e.value,j=_(e,s),w=o.default.useContext(u.default),P=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l);void 0!==t?P.checked=t:P.defaultChecked=n;var T=(0,a.default)(p("checkbox",{"is-inline":d},w.className),j.className),E=p(["label",{"is-disabled":r},{"is-mobile":c.default.isConsideredMobileDevice()},y.className]),N=p(["native-input",l.className]),S=p(["label-text",{"is-hidden":b},{"is-mobile":c.default.isConsideredMobileDevice()}]),D=null;return b?(P["aria-label"]=v,D=o.default.createElement("span",f({},y,{className:S}))):D=o.default.createElement("span",f({},y,{className:S}),v),o.default.createElement("div",f({},j,{className:T}),o.default.createElement("label",{htmlFor:i,className:E},o.default.createElement("input",f({},P,{type:"checkbox",id:i,disabled:r,name:k,value:C,onChange:g,onFocus:O,onBlur:x,className:N})),D))};k.propTypes=v,k.defaultProps=y,k.isCheckbox=!0;var x=k;t.default=x},389:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t},43162:function(e,t,n){n.r(t),t.default={spacing:"CheckboxTestCommon-module__spacing___VzEGu"}},28460:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___MtU1e","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___qElrP",checkbox:"Checkbox-module__checkbox___cmJnd",label:"Checkbox-module__label___lmO71","is-mobile":"Checkbox-module__is-mobile___HFkM9","native-input":"Checkbox-module__native-input___lN+8y","label-text":"Checkbox-module__label-text___Ows++","is-hidden":"Checkbox-module__is-hidden___1bdp2","is-disabled":"Checkbox-module__is-disabled___lqlGT","is-inline":"Checkbox-module__is-inline___Xpnyc"}}}]);