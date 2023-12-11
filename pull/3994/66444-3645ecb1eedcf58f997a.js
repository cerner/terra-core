"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[66444],{66444:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(67294)),l=a(n(69070));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return i.default.createElement("div",{role:"group","aria-labelledby":"mainLabel"},i.default.createElement("div",{id:"mainLabel","aria-label":"Main Label"}),i.default.createElement(l.default,{id:"first",labelText:"First Radio",name:"multiple",defaultChecked:!0}),i.default.createElement(l.default,{id:"second",labelText:"Second Radio",name:"multiple"}),i.default.createElement(l.default,{id:"third",labelText:"Third Radio",name:"multiple"}))}},69070:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=f(n(67294)),a=f(n(45697)),o=f(n(94184)),r=f(n(47166)),u=f(n(50026)),d=f(n(3296)),s=n(70745),c=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},b.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==i(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var v=r.default.bind(d.default),h={checked:a.default.bool,defaultChecked:a.default.bool,id:a.default.string,inputAttrs:a.default.object,disabled:a.default.bool,isInline:a.default.bool,isLabelHidden:a.default.bool,labelText:a.default.string.isRequired,labelTextAttrs:a.default.object,name:a.default.string,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,value:a.default.string},g={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},y=function(e){var t=e.checked,n=e.defaultChecked,i=e.inputAttrs,a=e.id,r=e.disabled,d=e.isInline,f=e.isLabelHidden,h=e.labelText,g=e.labelTextAttrs,y=e.name,O=e.onBlur,j=e.onChange,w=e.onFocus,x=e.value,P=p(e,c),C=l.default.useContext(u.default),k=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i);void 0!==t?k.checked=t:k.defaultChecked=n;var E=(0,o.default)(v("radio",{"is-inline":d},C.className),P.className),R=v(["label",{"is-disabled":r},{"is-hidden":f},{"is-mobile":(0,s.isConsideredMobileDevice)()},g.className]),T=v(["native-input",i.className]),F=v(["label-text"]),S=v(["outer-ring",{"is-mobile":(0,s.isConsideredMobileDevice)()}]),M=v(["inner-ring"]),N=null;return f?(k["aria-label"]=h,N=l.default.createElement("span",b({},g,{className:F}))):N=l.default.createElement("span",b({},g,{className:F}),h),l.default.createElement("div",b({},P,{className:E}),l.default.createElement("label",{htmlFor:a,className:R},l.default.createElement("input",b({},k,{type:"radio",id:a,disabled:r,name:y,value:x,onChange:j,onFocus:w,onBlur:O,className:T})),l.default.createElement("span",{className:S},l.default.createElement("span",{className:M})),N))};y.propTypes=h,y.defaultProps=g,y.isRadio=!0;t.default=y},70745:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isConsideredMobileDevice=t.findLastFocusableItem=t.findFirstFocusableItem=void 0;t.isConsideredMobileDevice=function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)},t.findLastFocusableItem=function(e){for(var t=e.length-1;e[t]&&e[t].hasAttribute("disabled")&&t>-1;)t-=1;return t||void 0},t.findFirstFocusableItem=function(e){for(var t=0;e[t]&&e[t].hasAttribute("disabled")&&t<e.length;)t+=1;return t<e.length?t:void 0}},3296:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Radio-module__clinical-lowlight-theme___bJPYc","orion-fusion-theme":"Radio-module__orion-fusion-theme___gpx1A",radio:"Radio-module__radio___qINE4",label:"Radio-module__label___W3hQJ","is-mobile":"Radio-module__is-mobile___UQo7x","native-input":"Radio-module__native-input___9XkD2","label-text":"Radio-module__label-text___Fm3VK","outer-ring":"Radio-module__outer-ring___1cbue","inner-ring":"Radio-module__inner-ring___MLgeb","is-hidden":"Radio-module__is-hidden___0fS2i","is-disabled":"Radio-module__is-disabled___LaQ35","is-inline":"Radio-module__is-inline___-vBC7"}}}]);