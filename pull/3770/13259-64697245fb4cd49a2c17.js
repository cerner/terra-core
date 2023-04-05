"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[13259],{13259:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(67294)),l=a(n(69070)),o=a(n(29390));function a(e){return e&&e.__esModule?e:{default:e}}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(l=i.key,o=void 0,o=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(l,"string"),"symbol"===r(o)?o:String(o)),i)}var l,o}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=f(e);if(t){var l=f(this).constructor;n=Reflect.construct(i,arguments,l)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}(this,n)}}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(f,e);var t,n,r,a=c(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=a.call(this,e)).state={},t.handleOnChange=t.handleOnChange.bind(s(t)),t}return t=f,(n=[{key:"handleOnChange",value:function(e){this.setState({selectedAnswer:e.currentTarget.value})}},{key:"render",value:function(){return i.default.createElement(o.default,{id:"testing-radio-field",legend:"Which Department do you work for?",help:"Your work falls inline with one of these departments",isInvalid:void 0===this.state.selectedAnswer,error:"One must be selected",hideRequired:!0,isInline:!0,required:!0},i.default.createElement(l.default,{id:"ux-dept",name:"dept",labelText:"UX/Interaction Design",onChange:this.handleOnChange,value:"ux"}),i.default.createElement(l.default,{id:"magazine-dept",name:"dept",labelText:"Magazine Advertisements",onChange:this.handleOnChange,value:"magazine"}),i.default.createElement(l.default,{id:"website-dept",name:"dept",labelText:"Website Advertisements",onChange:this.handleOnChange,value:"website"}),i.default.createElement(l.default,{id:"events-dept",name:"dept",labelText:"Event Promotions",onChange:this.handleOnChange,value:"events"}))}}])&&d(t.prototype,n),r&&d(t,r),Object.defineProperty(t,"prototype",{writable:!1}),f}(i.default.Component);t.default=m},69070:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=f(n(67294)),l=f(n(45697)),o=f(n(94184)),a=f(n(47166)),d=f(n(50026)),u=f(n(3296)),c=f(n(70745)),s=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var h=a.default.bind(u.default),v={checked:l.default.bool,defaultChecked:l.default.bool,id:l.default.string,inputAttrs:l.default.object,disabled:l.default.bool,isInline:l.default.bool,isLabelHidden:l.default.bool,labelText:l.default.string.isRequired,labelTextAttrs:l.default.object,name:l.default.string,onBlur:l.default.func,onChange:l.default.func,onFocus:l.default.func,value:l.default.string},g={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},y=function(e){var t=e.checked,n=e.defaultChecked,r=e.inputAttrs,l=e.id,a=e.disabled,u=e.isInline,f=e.isLabelHidden,v=e.labelText,g=e.labelTextAttrs,y=e.name,O=e.onBlur,w=e.onChange,j=e.onFocus,R=e.value,E=_(e,s),P=i.default.useContext(d.default),x=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r);void 0!==t?x.checked=t:x.defaultChecked=n;var C=(0,o.default)(h("radio",{"is-inline":u},P.className),E.className),N=h(["label",{"is-disabled":a},{"is-hidden":f},{"is-mobile":c.default.isConsideredMobileDevice()},g.className]),T=h(["native-input",r.className]),S=h(["label-text"]),k=h(["outer-ring",{"is-mobile":c.default.isConsideredMobileDevice()}]),q=h(["inner-ring"]),F=null;return f?(x["aria-label"]=v,F=i.default.createElement("span",m({},g,{className:S}))):F=i.default.createElement("span",m({},g,{className:S}),v),i.default.createElement("div",m({},E,{className:C}),i.default.createElement("label",{htmlFor:l,className:N},i.default.createElement("input",m({},x,{type:"radio",id:l,disabled:a,name:y,value:R,onChange:w,onFocus:j,onBlur:O,className:T})),i.default.createElement("span",{className:k},i.default.createElement("span",{className:q})),F))};y.propTypes=v,y.defaultProps=g,y.isRadio=!0;var O=y;t.default=O},29390:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(67294)),i=m(n(45697)),l=n(25387),o=m(n(94184)),a=m(n(47166)),d=m(n(50026)),u=m(n(14461)),c=m(n(74754)),s=m(n(55724)),f=["children","error","help","hideRequired","intl","isInvalid","isInline","isLegendHidden","legend","legendAttrs","required","showOptional"];function m(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var _=a.default.bind(s.default),h={children:i.default.node,error:i.default.node,help:i.default.node,hideRequired:i.default.bool,intl:i.default.shape({formatMessage:i.default.func}).isRequired,isInline:i.default.bool,isInvalid:i.default.bool,isLegendHidden:i.default.bool,legend:i.default.string.isRequired,legendAttrs:i.default.object,required:i.default.bool,showOptional:i.default.bool},v=function(e){var t=e.children,n=e.error,i=e.help,l=e.hideRequired,a=e.intl,s=e.isInvalid,m=e.isInline,h=e.isLegendHidden,v=e.legend,g=e.legendAttrs,y=e.required,O=e.showOptional,w=b(e,f),j=r.default.useContext(d.default),R=(0,o.default)(_("radio-field",{"is-inline":m},j.className),w.className),E=_(["legend",g.className]),P="terra-radio-field-description-".concat((0,u.default)()),x=i?"terra-radio-field-description-help-".concat((0,u.default)()):"",C=n?"terra-radio-field-description-error-".concat((0,u.default)()):"",N="".concat(P," ").concat(C," ").concat(x),T=r.default.createElement("legend",{id:P,className:_(["legend-group",{"legend-group-hidden":h}])},r.default.createElement("div",p({},g,{className:E}),s&&r.default.createElement("span",{className:_("error-icon")}),y&&(s||!l)&&r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{"aria-hidden":"true",className:_("required")},"*"),r.default.createElement(c.default,{text:a.formatMessage({id:"Terra.form.field.required"})})),v,y&&!s&&l&&r.default.createElement("span",{className:_("required-hidden")},"*"),O&&!y&&r.default.createElement("span",{className:_("optional")},a.formatMessage({id:"Terra.form.field.optional"})),!s&&r.default.createElement("span",{className:_("error-icon-hidden")}))),S=r.default.Children.map(t,(function(e){return e&&e.type.isRadio?r.default.cloneElement(e,{inputAttrs:{"aria-describedby":N}}):e}));return r.default.createElement("fieldset",p({},w,{required:y,className:R}),T,S,s&&n&&r.default.createElement("div",{id:C,className:_("error-text")},n),i&&r.default.createElement("div",{id:x,className:_("help-text")},i))};v.propTypes=h,v.defaultProps={children:null,error:null,help:null,hideRequired:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttrs:{},required:!1,showOptional:!1};var g=(0,l.injectIntl)(v);t.default=g},70745:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};t.default=n},3296:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Radio-module__clinical-lowlight-theme___bJPYc","orion-fusion-theme":"Radio-module__orion-fusion-theme___gpx1A",radio:"Radio-module__radio___qINE4",label:"Radio-module__label___W3hQJ","is-mobile":"Radio-module__is-mobile___UQo7x","native-input":"Radio-module__native-input___9XkD2","label-text":"Radio-module__label-text___Fm3VK","outer-ring":"Radio-module__outer-ring___1cbue","inner-ring":"Radio-module__inner-ring___MLgeb","is-hidden":"Radio-module__is-hidden___0fS2i","is-disabled":"Radio-module__is-disabled___LaQ35","is-inline":"Radio-module__is-inline___-vBC7"}},55724:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"RadioField-module__clinical-lowlight-theme___ah-0-","orion-fusion-theme":"RadioField-module__orion-fusion-theme___Bo-RE","radio-field":"RadioField-module__radio-field___sBb2z","is-inline":"RadioField-module__is-inline___+jXlC","legend-group":"RadioField-module__legend-group___JHtuT","legend-group-hidden":"RadioField-module__legend-group-hidden___qd2Da",legend:"RadioField-module__legend___BeXeT","error-icon":"RadioField-module__error-icon___oO0Zc","error-icon-hidden":"RadioField-module__error-icon-hidden___IznWh",required:"RadioField-module__required___cMDr+","required-hidden":"RadioField-module__required-hidden___+c-5X",optional:"RadioField-module__optional___v6mZp","help-text":"RadioField-module__help-text___bK1SE","error-text":"RadioField-module__error-text___dkW8I"}}}]);