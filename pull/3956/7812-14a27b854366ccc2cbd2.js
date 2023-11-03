"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[7812],{26244:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var o=u(r(67294)),i=u(r(45697)),a=u(r(47166)),l=u(r(1947)),c=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function u(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var y=a.default.bind(l.default),_={fitStart:i.default.element,fill:i.default.element.isRequired,fitEnd:i.default.element,align:i.default.oneOf(["center","bottom","stretch"]),alignFitStart:i.default.oneOf(["center","bottom","stretch"]),alignFitEnd:i.default.oneOf(["center","bottom","stretch"]),alignFill:i.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:i.default.object,fillAttributes:i.default.object,fitEndAttributes:i.default.object},m=function(e){var t=e.fitStart,r=e.fill,n=e.fitEnd,i=e.align,a=e.alignFitStart,l=e.alignFill,u=e.alignFitEnd,s=e.fitStartAttributes,b=e.fillAttributes,_=e.fitEndAttributes,m=d(e,c),O=p({},s),v=p({},b),g=p({},_);return o.default.createElement("span",f({},m,{className:y("arrange",m.className)}),o.default.createElement("span",f({},O,{className:y("fit",i||a,O.className,"fit-block")}),t),o.default.createElement("span",f({},v,{className:y("fill",i||l,v.className,"fill-block")}),r),o.default.createElement("span",f({},g,{className:y("fit",i||u,g.className)}),n))};m.propTypes=_;t.default=m},7812:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(r(67294)),i=d(r(45697)),a=d(r(94184)),l=d(r(47166)),c=d(r(50026)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r(51051)),f=d(r(26244)),s=d(r(70451)),p=["text","onClick","isOpen","isTransparent","level"];function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}function d(e){return e&&e.__esModule?e:{default:e}}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e,t,r){return(t=g(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,g(n.key),n)}}function g(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=S(e);if(t){var i=S(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}(this,r)}}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var P=l.default.bind(s.default),E={text:i.default.string,onClick:i.default.func,isOpen:i.default.bool,level:i.default.oneOf([1,2,3,4,5,6]),isTransparent:i.default.bool},A={onClick:void 0,isOpen:!1,isTransparent:!1},k=function(e){return e.keyCode===u.KEY_RETURN||e.keyCode===u.KEY_SPACE},T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(l,e);var t,r,n,i=w(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(j(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(j(t)),t.setFocus=t.setFocus.bind(j(t)),t.focusableElementRef=o.default.createRef(),t}return t=l,r=[{key:"setFocus",value:function(){this.focusableElementRef.current&&this.focusableElementRef.current.focus()}},{key:"wrapOnKeyDown",value:function(e){var t=this;return function(r){k(r)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(r)),e&&e(r)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(r){k(r)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(r)}}},{key:"render",value:function(){var e,t=this.props,r=t.text,n=t.onClick,i=t.isOpen,l=t.isTransparent,c=t.level,u=O(t,p),s=this.context,b=o.default.createElement("span",{className:P("accordion-icon-wrapper")},o.default.createElement("span",{className:P(["accordion-icon",{"is-open":i}])})),d=(0,a.default)(P("section-header",{"is-interactable":n},{"is-active":this.state.isActive},{"is-transparent":l},s.className),u.className),v="h".concat(c||2),g=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},u),h={};return n?(h.ref=this.focusableElementRef,h.type="button",h["aria-expanded"]=i,h["aria-label"]=r,h.onKeyDown=this.wrapOnKeyDown(g.onKeyDown),h.onKeyUp=this.wrapOnKeyUp(g.onKeyUp),h.onClick=n,e="button"):(g.ref=this.focusableElementRef,e="span"),o.default.createElement(v,y({},g,{className:d,"aria-label":n?void 0:r}),o.default.createElement(e,y({},h,{className:P("arrange-wrapper")}),o.default.createElement(f.default,{fitStart:n&&b,fill:o.default.createElement("span",{"aria-hidden":void 0!==n,className:P("title")},r),className:P("title-arrange")})))}}],r&&v(t.prototype,r),n&&v(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.default.Component);T.propTypes=E,T.defaultProps=A,T.contextType=c.default;t.default=T},1947:function(e,t,r){r.r(t),t.default={arrange:"Arrange-module__arrange___tayob",fill:"Arrange-module__fill___JGXgw",fit:"Arrange-module__fit___BodSy",center:"Arrange-module__center___lVVfc",bottom:"Arrange-module__bottom___TiTgB",stretch:"Arrange-module__stretch___BFg42",default:"Arrange-module__default___6XJU-"}},70451:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___ruoy4","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___s79DW","section-header":"SectionHeader-module__section-header___U9vry","is-transparent":"SectionHeader-module__is-transparent___U9MV7","is-interactable":"SectionHeader-module__is-interactable___FroiE","is-active":"SectionHeader-module__is-active___wsczU","title-arrange":"SectionHeader-module__title-arrange___AOFl6",title:"SectionHeader-module__title___onFdR","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___BJ1y7","accordion-icon":"SectionHeader-module__accordion-icon___9Va6A","is-open":"SectionHeader-module__is-open___sINTA","arrange-wrapper":"SectionHeader-module__arrange-wrapper___VhIOV"}}}]);