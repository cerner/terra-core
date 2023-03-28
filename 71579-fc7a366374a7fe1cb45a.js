"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[71579],{71579:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=d(l(67294)),n=d(l(69070)),a=d(l(29390));function d(e){return e&&e.__esModule?e:{default:e}}var r=function(){return i.default.createElement(a.default,{legend:"Desired Department",isLegendHidden:!0},i.default.createElement(n.default,{id:"ux-dept",name:"dept",labelText:"UX/Interaction Design",value:"ux"}),i.default.createElement(n.default,{id:"magazine-dept",name:"dept",labelText:"Magazine Advertisements",value:"magazine"}),i.default.createElement(n.default,{id:"website-dept",name:"dept",labelText:"Website Advertisements",value:"website"}),i.default.createElement(n.default,{id:"events-dept",name:"dept",labelText:"Event Promotions",value:"events"}))};t.default=r},69070:function(e,t,l){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(l(67294)),a=f(l(45697)),d=f(l(94184)),r=f(l(47166)),o=f(l(50026)),u=f(l(3296)),s=f(l(70745)),c=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},_.apply(this,arguments)}function m(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function b(e,t,l){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var n=l.call(e,t||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function p(e,t){if(null==e)return{};var l,i,n=function(e,t){if(null==e)return{};var l,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var h=r.default.bind(u.default),g={checked:a.default.bool,defaultChecked:a.default.bool,id:a.default.string,inputAttrs:a.default.object,disabled:a.default.bool,isInline:a.default.bool,isLabelHidden:a.default.bool,labelText:a.default.string.isRequired,labelTextAttrs:a.default.object,name:a.default.string,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,value:a.default.string},v={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},y=function(e){var t=e.checked,l=e.defaultChecked,i=e.inputAttrs,a=e.id,r=e.disabled,u=e.isInline,f=e.isLabelHidden,g=e.labelText,v=e.labelTextAttrs,y=e.name,O=e.onBlur,j=e.onChange,R=e.onFocus,x=e.value,w=p(e,c),E=n.default.useContext(o.default),P=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?m(Object(l),!0).forEach((function(t){b(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):m(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},i);void 0!==t?P.checked=t:P.defaultChecked=l;var N=(0,d.default)(h("radio",{"is-inline":u},E.className),w.className),F=h(["label",{"is-disabled":r},{"is-hidden":f},{"is-mobile":s.default.isConsideredMobileDevice()},v.className]),T=h(["native-input",i.className]),q=h(["label-text"]),C=h(["outer-ring",{"is-mobile":s.default.isConsideredMobileDevice()}]),k=h(["inner-ring"]),I=null;return f?(P["aria-label"]=g,I=n.default.createElement("span",_({},v,{className:q}))):I=n.default.createElement("span",_({},v,{className:q}),g),n.default.createElement("div",_({},w,{className:N}),n.default.createElement("label",{htmlFor:a,className:F},n.default.createElement("input",_({},P,{type:"radio",id:a,disabled:r,name:y,value:x,onChange:j,onFocus:R,onBlur:O,className:T})),n.default.createElement("span",{className:C},n.default.createElement("span",{className:k})),I))};y.propTypes=g,y.defaultProps=v,y.isRadio=!0;var O=y;t.default=O},29390:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=_(l(67294)),n=_(l(45697)),a=l(25387),d=_(l(94184)),r=_(l(47166)),o=_(l(50026)),u=_(l(14461)),s=_(l(74754)),c=_(l(55724)),f=["children","error","help","hideRequired","intl","isInvalid","isInline","isLegendHidden","legend","legendAttrs","required","showOptional"];function _(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},m.apply(this,arguments)}function b(e,t){if(null==e)return{};var l,i,n=function(e,t){if(null==e)return{};var l,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=r.default.bind(c.default),h={children:n.default.node,error:n.default.node,help:n.default.node,hideRequired:n.default.bool,intl:n.default.shape({formatMessage:n.default.func}).isRequired,isInline:n.default.bool,isInvalid:n.default.bool,isLegendHidden:n.default.bool,legend:n.default.string.isRequired,legendAttrs:n.default.object,required:n.default.bool,showOptional:n.default.bool},g=function(e){var t=e.children,l=e.error,n=e.help,a=e.hideRequired,r=e.intl,c=e.isInvalid,_=e.isInline,h=e.isLegendHidden,g=e.legend,v=e.legendAttrs,y=e.required,O=e.showOptional,j=b(e,f),R=i.default.useContext(o.default),x=(0,d.default)(p("radio-field",{"is-inline":_},R.className),j.className),w=p(["legend",v.className]),E="terra-radio-field-description-".concat((0,u.default)()),P=n?"terra-radio-field-description-help-".concat((0,u.default)()):"",N=l?"terra-radio-field-description-error-".concat((0,u.default)()):"",F="".concat(E," ").concat(N," ").concat(P),T=i.default.createElement("legend",{id:E,className:p(["legend-group",{"legend-group-hidden":h}])},i.default.createElement("div",m({},v,{className:w}),c&&i.default.createElement("span",{className:p("error-icon")}),y&&(c||!a)&&i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{"aria-hidden":"true",className:p("required")},"*"),i.default.createElement(s.default,{text:r.formatMessage({id:"Terra.form.field.required"})})),g,y&&!c&&a&&i.default.createElement("span",{className:p("required-hidden")},"*"),O&&!y&&i.default.createElement("span",{className:p("optional")},r.formatMessage({id:"Terra.form.field.optional"})),!c&&i.default.createElement("span",{className:p("error-icon-hidden")}))),q=i.default.Children.map(t,(function(e){return e&&e.type.isRadio?i.default.cloneElement(e,{inputAttrs:{"aria-describedby":F}}):e}));return i.default.createElement("fieldset",m({},j,{required:y,className:x}),T,q,c&&l&&i.default.createElement("div",{id:N,className:p("error-text")},l),n&&i.default.createElement("div",{id:P,className:p("help-text")},n))};g.propTypes=h,g.defaultProps={children:null,error:null,help:null,hideRequired:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttrs:{},required:!1,showOptional:!1};var v=(0,a.injectIntl)(g);t.default=v},70745:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};t.default=l},3296:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Radio-module__clinical-lowlight-theme___bJPYc","orion-fusion-theme":"Radio-module__orion-fusion-theme___gpx1A",radio:"Radio-module__radio___qINE4",label:"Radio-module__label___W3hQJ","is-mobile":"Radio-module__is-mobile___UQo7x","native-input":"Radio-module__native-input___9XkD2","label-text":"Radio-module__label-text___Fm3VK","outer-ring":"Radio-module__outer-ring___1cbue","inner-ring":"Radio-module__inner-ring___MLgeb","is-hidden":"Radio-module__is-hidden___0fS2i","is-disabled":"Radio-module__is-disabled___LaQ35","is-inline":"Radio-module__is-inline___-vBC7"}},55724:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"RadioField-module__clinical-lowlight-theme___ah-0-","orion-fusion-theme":"RadioField-module__orion-fusion-theme___Bo-RE","radio-field":"RadioField-module__radio-field___sBb2z","is-inline":"RadioField-module__is-inline___+jXlC","legend-group":"RadioField-module__legend-group___JHtuT","legend-group-hidden":"RadioField-module__legend-group-hidden___qd2Da",legend:"RadioField-module__legend___BeXeT","error-icon":"RadioField-module__error-icon___oO0Zc","error-icon-hidden":"RadioField-module__error-icon-hidden___IznWh",required:"RadioField-module__required___cMDr+","required-hidden":"RadioField-module__required-hidden___+c-5X",optional:"RadioField-module__optional___v6mZp","help-text":"RadioField-module__help-text___bK1SE","error-text":"RadioField-module__error-text___dkW8I"}}}]);