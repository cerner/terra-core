"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[48559],{48559:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(67294)),o=i(n(36530));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return l.default.createElement(o.default,{id:"hidden",labelText:"can you see me?",isLabelHidden:!0})}},36530:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=b(n(67294)),i=b(n(45697)),r=b(n(93967)),a=b(n(19845)),u=b(n(50026)),c=b(n(28460)),d=b(n(389)),s=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function b(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function h(e,t,n){var o;return o=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(o)?o:String(o))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _=a.default.bind(c.default),v={checked:i.default.bool,defaultChecked:i.default.bool,id:i.default.string,inputAttrs:i.default.object,disabled:i.default.bool,isInline:i.default.bool,isLabelHidden:i.default.bool,labelText:i.default.string.isRequired,labelTextAttrs:i.default.object,name:i.default.string,onBlur:i.default.func,onChange:i.default.func,onFocus:i.default.func,value:i.default.string},y={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},x=function(e){var t=e.checked,n=e.defaultChecked,l=e.inputAttrs,i=e.id,a=e.disabled,c=e.isInline,b=e.isLabelHidden,v=e.labelText,y=e.labelTextAttrs,x=e.name,O=e.onBlur,g=e.onChange,k=e.onFocus,C=e.value,j=p(e,s),w=o.default.useContext(u.default),P=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l);void 0!==t?P.checked=t:P.defaultChecked=n;var T=(0,r.default)(_("checkbox",{"is-inline":c},w.className),j.className),S=_(["label",{"is-disabled":a},{"is-mobile":d.default.isConsideredMobileDevice()},y.className]),E=_(["native-input",l.className]),M=_(["label-text",{"is-hidden":b},{"is-mobile":d.default.isConsideredMobileDevice()}]),N=null;return b?(P["aria-label"]=v,N=o.default.createElement("span",f({},y,{className:M}))):N=o.default.createElement("span",f({},y,{className:M}),v),o.default.createElement("div",f({},j,{className:T}),o.default.createElement("label",{htmlFor:i,className:S},o.default.createElement("input",f({},P,{type:"checkbox",id:i,disabled:a,name:x,value:C,onChange:g,onFocus:k,onBlur:O,className:E})),N))};x.propTypes=v,x.defaultProps=y,x.isCheckbox=!0;t.default=x},389:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t},28460:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___MtU1e","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___qElrP",checkbox:"Checkbox-module__checkbox___cmJnd",label:"Checkbox-module__label___lmO71","is-mobile":"Checkbox-module__is-mobile___HFkM9","native-input":"Checkbox-module__native-input___lN+8y","label-text":"Checkbox-module__label-text___Ows++","is-hidden":"Checkbox-module__is-hidden___1bdp2","is-disabled":"Checkbox-module__is-disabled___lqlGT","is-inline":"Checkbox-module__is-inline___Xpnyc"}}}]);