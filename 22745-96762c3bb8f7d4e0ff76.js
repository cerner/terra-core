"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[22745],{74224:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var o=u(r(96540)),i=u(r(5556)),a=u(r(67967)),l=u(r(71097)),c=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function u(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){var o;return o=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==n(o)?o:String(o))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var y=a.default.bind(l.default),_={fitStart:i.default.element,fill:i.default.element.isRequired,fitEnd:i.default.element,align:i.default.oneOf(["center","bottom","stretch"]),alignFitStart:i.default.oneOf(["center","bottom","stretch"]),alignFitEnd:i.default.oneOf(["center","bottom","stretch"]),alignFill:i.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:i.default.object,fillAttributes:i.default.object,fitEndAttributes:i.default.object},m=function(e){var t=e.fitStart,r=e.fill,n=e.fitEnd,i=e.align,a=e.alignFitStart,l=e.alignFill,u=e.alignFitEnd,s=e.fitStartAttributes,d=e.fillAttributes,_=e.fitEndAttributes,m=b(e,c),O=p({},s),v=p({},d),g=p({},_);return o.default.createElement("span",f({},m,{className:y("arrange",m.className)}),o.default.createElement("span",f({},O,{className:y("fit",i||a,O.className,"fit-block")}),t),o.default.createElement("span",f({},v,{className:y("fill",i||l,v.className,"fill-block")}),r),o.default.createElement("span",f({},g,{className:y("fit",i||u,g.className)}),n))};m.propTypes=_;t.default=m},22745:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=b(r(96540)),i=b(r(5556)),a=b(r(46942)),l=b(r(67967)),c=b(r(52103)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r(25966)),f=b(r(74224)),s=b(r(65290)),p=["text","title","refCallback","onClick","isOpen","isTransparent","level","isTitleFixed"];function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function b(e){return e&&e.__esModule?e:{default:e}}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e,t,r){return(t=g(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,g(n.key),n)}}function g(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:String(t)}function w(e,t,r){return t=j(t),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}(e,h()?Reflect.construct(t,r||[],j(e).constructor):t.apply(e,r))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}var E=l.default.bind(s.default),k={text:i.default.string,title:i.default.string,refCallback:i.default.func,onClick:i.default.func,isOpen:i.default.bool,level:i.default.oneOf([1,2,3,4,5,6]),isTransparent:i.default.bool,isTitleFixed:i.default.bool},A={onClick:void 0,isOpen:!1,isTransparent:!1,level:2},T=function(e){return e.keyCode===u.KEY_RETURN||e.keyCode===u.KEY_SPACE},N=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=w(this,t,[e])).state={isActive:!1},r.wrapOnKeyDown=r.wrapOnKeyDown.bind(S(r)),r.wrapOnKeyUp=r.wrapOnKeyUp.bind(S(r)),r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(t,e),r=t,n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(r){T(r)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&(t.props.onClick(r),r.preventDefault())),e&&e(r)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(r){T(r)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(r)}}},{key:"render",value:function(){var e=this.props,t=e.text,r=e.title,n=e.refCallback,i=e.onClick,l=e.isOpen,c=e.isTransparent,u=e.level,s=e.isTitleFixed,d=O(e,p),b=this.context,v=o.default.createElement("span",{className:E("accordion-icon-wrapper")},o.default.createElement("span",{className:E(["accordion-icon",{"is-open":l}])})),g=(0,a.default)(E("section-header",{"is-interactable":i},{"is-active":this.state.isActive},{"is-transparent":c},b.className),d.className);r&&console.warn("`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.");var w,h="h".concat(u),j=t||r,S=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},d),P={};return i?(P.ref=n,P.type="button",P["aria-expanded"]=l,P["aria-label"]=j,P.onKeyDown=this.wrapOnKeyDown(S.onKeyDown),P.onKeyUp=this.wrapOnKeyUp(S.onKeyUp),P.onClick=i,w="button"):(S.ref=n,w="span"),o.default.createElement(h,y({},S,{className:g,"aria-label":i?void 0:j}),o.default.createElement(w,y({},P,{className:E("arrange-wrapper",{"title-fixed":s})}),o.default.createElement(f.default,{fitStart:i&&v,fill:o.default.createElement("span",{"aria-hidden":void 0!==i,className:E("title")},j),className:E("title-arrange")})))}}],n&&v(r.prototype,n),i&&v(r,i),Object.defineProperty(r,"prototype",{writable:!1}),t}(o.default.Component);N.propTypes=k,N.defaultProps=A,N.contextType=c.default;t.default=N},71097:function(e,t,r){r.r(t),t.default={arrange:"Arrange-module__arrange___tayob",fill:"Arrange-module__fill___JGXgw",fit:"Arrange-module__fit___BodSy",center:"Arrange-module__center___lVVfc",bottom:"Arrange-module__bottom___TiTgB",stretch:"Arrange-module__stretch___BFg42",default:"Arrange-module__default___6XJU-"}},65290:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___ruoy4","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___s79DW","section-header":"SectionHeader-module__section-header___U9vry","is-transparent":"SectionHeader-module__is-transparent___U9MV7","is-interactable":"SectionHeader-module__is-interactable___FroiE","is-active":"SectionHeader-module__is-active___wsczU","title-arrange":"SectionHeader-module__title-arrange___AOFl6",title:"SectionHeader-module__title___onFdR","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___BJ1y7","accordion-icon":"SectionHeader-module__accordion-icon___9Va6A","is-open":"SectionHeader-module__is-open___sINTA","arrange-wrapper":"SectionHeader-module__arrange-wrapper___VhIOV","title-fixed":"SectionHeader-module__title-fixed___SHanL"}}}]);