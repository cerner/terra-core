"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[14442],{14442:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(67294)),l=i(n(36530));function i(e){return e&&e.__esModule?e:{default:e}}var r=function(){return o.default.createElement(l.default,{id:"longText",labelText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"})};t.default=r},36530:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=b(n(67294)),i=b(n(45697)),r=b(n(94184)),a=b(n(47166)),u=b(n(50026)),d=b(n(28460)),c=b(n(389)),s=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function b(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==o(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var _=a.default.bind(d.default),v={checked:i.default.bool,defaultChecked:i.default.bool,id:i.default.string,inputAttrs:i.default.object,disabled:i.default.bool,isInline:i.default.bool,isLabelHidden:i.default.bool,labelText:i.default.string.isRequired,labelTextAttrs:i.default.object,name:i.default.string,onBlur:i.default.func,onChange:i.default.func,onFocus:i.default.func,value:i.default.string},y={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},g=function(e){var t=e.checked,n=e.defaultChecked,o=e.inputAttrs,i=e.id,a=e.disabled,d=e.isInline,b=e.isLabelHidden,v=e.labelText,y=e.labelTextAttrs,g=e.name,x=e.onBlur,O=e.onChange,k=e.onFocus,C=e.value,j=h(e,s),w=l.default.useContext(u.default),P=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o);void 0!==t?P.checked=t:P.defaultChecked=n;var T=(0,r.default)(_("checkbox",{"is-inline":d},w.className),j.className),S=_(["label",{"is-disabled":a},{"is-mobile":c.default.isConsideredMobileDevice()},y.className]),E=_(["native-input",o.className]),M=_(["label-text",{"is-hidden":b},{"is-mobile":c.default.isConsideredMobileDevice()}]),N=null;return b?(P["aria-label"]=v,N=l.default.createElement("span",f({},y,{className:M}))):N=l.default.createElement("span",f({},y,{className:M}),v),l.default.createElement("div",f({},j,{className:T}),l.default.createElement("label",{htmlFor:i,className:S},l.default.createElement("input",f({},P,{type:"checkbox",id:i,disabled:a,name:g,value:C,onChange:O,onFocus:k,onBlur:x,className:E})),N))};g.propTypes=v,g.defaultProps=y,g.isCheckbox=!0;var x=g;t.default=x},389:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t},28460:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___MtU1e","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___qElrP",checkbox:"Checkbox-module__checkbox___cmJnd",label:"Checkbox-module__label___lmO71","is-mobile":"Checkbox-module__is-mobile___HFkM9","native-input":"Checkbox-module__native-input___lN+8y","label-text":"Checkbox-module__label-text___Ows++","is-hidden":"Checkbox-module__is-hidden___1bdp2","is-disabled":"Checkbox-module__is-disabled___lqlGT","is-inline":"Checkbox-module__is-inline___Xpnyc"}}}]);