"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[63802],{63802:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(67294)),r=d(n(45697)),u=d(n(17509)),i=n(25387),l=d(n(47166)),a=d(n(50026)),f=d(n(82711)),c=d(n(98729)),s=["buttonAlign","buttonText","children","onChange","preview","intl","isOpen"];function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=l.default.bind(f.default),_={children:r.default.node.isRequired,intl:r.default.shape({formatMessage:r.default.func}).isRequired,onChange:r.default.func.isRequired,buttonAlign:r.default.string,buttonText:r.default.string,isOpen:r.default.bool,preview:r.default.node},y={buttonAlign:"start",isOpen:!1,preview:void 0},b=function(e){var t=e.buttonAlign,n=e.buttonText,r=e.children,i=e.onChange,l=e.preview,f=e.intl,d=e.isOpen,_=p(e,s),y=o.default.useContext(a.default),b=o.default.useRef(null);o.default.useEffect((function(){d&&null!=b&&b.current&&b.current.focus()}),[d]);var v=h(["show-hide","button",t,_.className]),m="";return n||(m=d?f.formatMessage({id:"Terra.showhide.hide"}):f.formatMessage({id:"Terra.showhide.showmore"})),o.default.createElement("div",_,!d&&l,o.default.createElement(u.default,{isOpen:d},o.default.createElement("div",{className:h(["show-hide","show-hide-content",y.className]),ref:b,"data-focus-styles-enabled":"true",role:"group",tabIndex:"-1"},r)),o.default.createElement("div",{className:h("show-hide")},o.default.createElement(c.default,{"aria-expanded":d,text:n||m,onClick:i,className:v})))};b.propTypes=_,b.defaultProps=y;var v=(0,i.injectIntl)(b);t.default=v},98729:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(67294)),u=p(n(45697)),i=p(n(94184)),l=p(n(47166)),a=p(n(50026)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=u?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(51051)),c=p(n(18018)),s=["text","onClick","onBlur","onFocus","onKeyDown","onKeyUp","refCallback"];function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function p(e){return e&&e.__esModule?e:{default:e}}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(u=r.key,i=void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(u,"string"),"symbol"===o(i)?i:String(i)),r)}var u,i}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var u=w(this).constructor;n=Reflect.construct(r,arguments,u)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var O=l.default.bind(c.default),g={onClick:u.default.func,onBlur:u.default.func,onFocus:u.default.func,onKeyDown:u.default.func,onKeyUp:u.default.func,refCallback:u.default.func,text:u.default.string.isRequired},j={refCallback:void 0},S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(l,e);var t,n,o,u=v(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=u.call(this,e)).state={active:!1,focused:!1},t.handleKeyDown=t.handleKeyDown.bind(m(t)),t.handleKeyUp=t.handleKeyUp.bind(m(t)),t.handleOnBlur=t.handleOnBlur.bind(m(t)),t}return t=l,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyDown",value:function(e){e.nativeEvent.keyCode===f.KEY_SPACE?(this.setState({active:!0}),this.setState({focused:!0})):e.nativeEvent.keyCode===f.KEY_RETURN&&this.setState({focused:!0}),this.props.onKeyDown&&this.props.onKeyDown(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===f.KEY_SPACE&&this.setState({active:!1}),e.nativeEvent.keyCode===f.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.onClick,o=(e.onBlur,e.onFocus),u=(e.onKeyDown,e.onKeyUp,e.refCallback),l=_(e,s),a=this.context,f=(0,i.default)(O(["button",{"is-active":this.state.active},{"is-focused":this.state.focused},a.className]),l.className);return r.default.createElement("button",h({},l,{className:f,type:"button",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:n,onFocus:o,ref:u}),r.default.createElement("span",{className:O("inner")},r.default.createElement("span",{className:O("text")},t),r.default.createElement("span",{className:O("icon-holder")},r.default.createElement("span",{className:O("icon")}))))}}])&&y(t.prototype,n),o&&y(t,o),Object.defineProperty(t,"prototype",{writable:!1}),l}(r.default.Component);S.propTypes=g,S.defaultProps=j,S.contextType=a.default;var E=S;t.default=E},17509:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(n(67294)),r=f(n(45697)),u=f(n(47166)),i=f(n(68133)),l=f(n(73010)),a=["isAnimated","isOpen","children"];function f(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=u.default.bind(l.default),p={children:r.default.node.isRequired,isAnimated:r.default.bool,isOpen:r.default.bool},h=function(e){var t,n=e.isAnimated,r=e.isOpen,u=e.children,l=s(e,a),f=r?"auto":0;return t=n?o.default.createElement(i.default,{duration:250,height:f,easing:"ease-out"},u):r&&u,o.default.createElement("div",c({},l,{className:d("toggle",l.className),"aria-hidden":!r}),t)};h.propTypes=p,h.defaultProps={isAnimated:!1,isOpen:!1};var _=h;t.default=_},82711:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ShowHide-module__clinical-lowlight-theme___7CiAB","orion-fusion-theme":"ShowHide-module__orion-fusion-theme___XI7ji","show-hide":"ShowHide-module__show-hide___G4rte",start:"ShowHide-module__start___IHwLs",center:"ShowHide-module__center___GIUyr",end:"ShowHide-module__end___SHdls","show-hide-content":"ShowHide-module__show-hide-content___k8win"}},18018:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_ShowHideButton-module__clinical-lowlight-theme___QEEGB","orion-fusion-theme":"_ShowHideButton-module__orion-fusion-theme___OcNPq",button:"_ShowHideButton-module__button___kPLEF",icon:"_ShowHideButton-module__icon___DRoLz","is-focused":"_ShowHideButton-module__is-focused___WfGrO","is-hovered":"_ShowHideButton-module__is-hovered___Yx44Y",inner:"_ShowHideButton-module__inner___d3lcs",text:"_ShowHideButton-module__text___+rL6u","icon-holder":"_ShowHideButton-module__icon-holder___VvBuP"}},73010:function(e,t,n){n.r(t),t.default={toggle:"Toggle-module__toggle___7fo88"}}}]);