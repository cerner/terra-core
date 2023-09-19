"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[54728],{63802:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=u?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(o,l,i):o[l]=e[l]}o.default=e,n&&n.set(e,o);return o}(n(67294)),u=y(n(45697)),l=y(n(17509)),i=n(25387),a=n(55877),f=y(n(47166)),c=y(n(50026)),s=y(n(82711)),d=y(n(98729)),p=["buttonAlign","buttonText","children","onChange","preview","intl","isOpen","focusRef"];function y(e){return e&&e.__esModule?e:{default:e}}function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u,l,i=[],a=!0,f=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=u.call(n)).done)&&(i.push(r.value),i.length!==t);a=!0);}catch(e){f=!0,o=e}finally{try{if(!a&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(f)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=f.default.bind(s.default),O={children:u.default.node.isRequired,intl:u.default.shape({formatMessage:u.default.func}).isRequired,onChange:u.default.func.isRequired,buttonAlign:u.default.string,buttonText:u.default.string,isOpen:u.default.bool,focusRef:u.default.shape({current:u.default.instanceOf(Element)}),preview:u.default.node},w=function(e){var t=e.buttonAlign,n=e.buttonText,r=e.children,u=e.onChange,i=e.preview,f=e.intl,s=e.isOpen,y=e.focusRef,b=_(e,p),v=(0,o.useContext)(c.default),O=(0,o.useRef)(null),w=h((0,o.useState)(!1),2),g=w[0],j=w[1];(0,o.useEffect)((function(){s&&(null!=y&&y.current?null==y||y.current.focus():null!=O&&O.current&&j(!0))}),[s,y,O]),(0,o.useEffect)((function(){var e;g&&s&&null!=O&&O.current&&(null==O||null===(e=O.current)||void 0===e||e.focus())}),[g,s]);var S=(0,a.v4)(),P="show-hide-content-".concat(S),E=m(["show-hide","button",t,b.className]),k="";n||(k=s?f.formatMessage({id:"Terra.showhide.hide"}):f.formatMessage({id:"Terra.showhide.showmore"}));return o.default.createElement("div",b,!s&&i,o.default.createElement("div",{id:P,className:m(["show-hide-content",v.className]),ref:O,tabIndex:g?"-1":null,role:g?"group":null,onBlur:function(){g&&j(!1)}},o.default.createElement(l.default,{isOpen:s},r)),o.default.createElement("div",{className:m("show-hide")},o.default.createElement(d.default,{"aria-controls":P,"aria-expanded":s,text:n||k,onClick:u,className:E})))};w.propTypes=O,w.defaultProps={buttonAlign:"start",isOpen:!1,preview:null,focusRef:null};var g=(0,i.injectIntl)(w);t.default=g},85656:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=u?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(o,l,i):o[l]=e[l]}o.default=e,n&&n.set(e,o);return o}(n(67294)),u=f(n(45697)),l=f(n(47166)),i=n(55877),a=f(n(82711));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u,l,i=[],a=!0,f=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=u.call(n)).done)&&(i.push(r.value),i.length!==t);a=!0);}catch(e){f=!0,o=e}finally{try{if(!a&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(f)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=l.default.bind(a.default),y={focusableText:u.default.string.isRequired,prefix:u.default.string},b=(0,o.forwardRef)((function(e,t){var n=e.prefix,r=function(e){var t,n;if(!e)return null;var r=e.trim();if(r.length<155)return[r];var o=r.slice(0,155).lastIndexOf(" ");return[null===(t=r.slice(0,o))||void 0===t?void 0:t.trim(),null===(n=r.slice(o))||void 0===n?void 0:n.trim()]}(e.focusableText),u=s((0,o.useState)(!0),2),l=u[0],a=u[1],f=(0,i.v4)(),c="focus-ref-".concat(f);return o.default.createElement(o.default.Fragment,null,n?"".concat(n.trim()," "):null,o.default.createElement("span",{className:p("text-divider")}),o.default.createElement("span",{id:c,ref:t,tabIndex:l?"-1":null,role:l?"group":null,onBlur:function(){return a(!1)}},r[0]),o.default.createElement("span",{className:p("text-divider")}),r[1]?function(e){return" ".concat(e.trim())}(r[1]):null)}));b.propTypes=y;var h=b;t.default=h},98729:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(n(67294)),u=p(n(45697)),l=p(n(94184)),i=p(n(47166)),a=p(n(50026)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=u?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(o,l,i):o[l]=e[l]}o.default=e,n&&n.set(e,o);return o}(n(51051)),c=p(n(18018)),s=["text","onClick","onBlur","onFocus","onKeyDown","onKeyUp","refCallback"];function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function p(e){return e&&e.__esModule?e:{default:e}}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(u=o.key,l=void 0,l=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(u,"string"),"symbol"===r(l)?l:String(l)),o)}var u,l}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=O(e);if(t){var u=O(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var w=i.default.bind(c.default),g={onClick:u.default.func,onBlur:u.default.func,onFocus:u.default.func,onKeyDown:u.default.func,onKeyUp:u.default.func,refCallback:u.default.func,text:u.default.string.isRequired},j={refCallback:void 0},S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(i,e);var t,n,r,u=_(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=u.call(this,e)).state={active:!1,focused:!1},t.handleKeyDown=t.handleKeyDown.bind(m(t)),t.handleKeyUp=t.handleKeyUp.bind(m(t)),t.handleOnBlur=t.handleOnBlur.bind(m(t)),t}return t=i,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyDown",value:function(e){e.nativeEvent.keyCode===f.KEY_SPACE?(this.setState({active:!0}),this.setState({focused:!0})):e.nativeEvent.keyCode===f.KEY_RETURN&&this.setState({focused:!0}),this.props.onKeyDown&&this.props.onKeyDown(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===f.KEY_SPACE&&this.setState({active:!1}),e.nativeEvent.keyCode===f.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.onClick,r=(e.onBlur,e.onFocus),u=(e.onKeyDown,e.onKeyUp,e.refCallback),i=b(e,s),a=this.context,f=(0,l.default)(w(["button",{"is-active":this.state.active},{"is-focused":this.state.focused},a.className]),i.className);return o.default.createElement("button",y({},i,{className:f,type:"button",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:n,onFocus:r,ref:u}),o.default.createElement("span",{className:w("inner")},o.default.createElement("span",{className:w("text")},t),o.default.createElement("span",{className:w("icon-holder")},o.default.createElement("span",{className:w("icon")}))))}}])&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(o.default.Component);S.propTypes=g,S.defaultProps=j,S.contextType=a.default;var P=S;t.default=P},54728:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ShowHideFocuser",{enumerable:!0,get:function(){return r.default}}),t.default=void 0;var r=o(n(85656));function o(e){return e&&e.__esModule?e:{default:e}}var u=o(n(63802)).default;t.default=u},17509:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(67294)),o=f(n(45697)),u=f(n(47166)),l=f(n(68133)),i=f(n(73010)),a=["isAnimated","isOpen","children"];function f(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=u.default.bind(i.default),p={children:o.default.node.isRequired,isAnimated:o.default.bool,isOpen:o.default.bool},y=function(e){var t,n=e.isAnimated,o=e.isOpen,u=e.children,i=s(e,a),f=o?"auto":0;return t=n?r.default.createElement(l.default,{duration:250,height:f,easing:"ease-out"},u):o&&u,r.default.createElement("div",c({},i,{className:d("toggle",i.className),"aria-hidden":!o}),t)};y.propTypes=p,y.defaultProps={isAnimated:!1,isOpen:!1};var b=y;t.default=b},82711:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ShowHide-module__clinical-lowlight-theme___7CiAB","orion-fusion-theme":"ShowHide-module__orion-fusion-theme___XI7ji","show-hide":"ShowHide-module__show-hide___G4rte",start:"ShowHide-module__start___IHwLs",center:"ShowHide-module__center___GIUyr",end:"ShowHide-module__end___SHdls","show-hide-content":"ShowHide-module__show-hide-content___k8win","text-divider":"ShowHide-module__text-divider___zYZcp"}},18018:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_ShowHideButton-module__clinical-lowlight-theme___QEEGB","orion-fusion-theme":"_ShowHideButton-module__orion-fusion-theme___OcNPq",button:"_ShowHideButton-module__button___kPLEF",icon:"_ShowHideButton-module__icon___DRoLz","is-focused":"_ShowHideButton-module__is-focused___WfGrO","is-hovered":"_ShowHideButton-module__is-hovered___Yx44Y",inner:"_ShowHideButton-module__inner___d3lcs",text:"_ShowHideButton-module__text___+rL6u","icon-holder":"_ShowHideButton-module__icon-holder___VvBuP"}},73010:function(e,t,n){n.r(t),t.default={toggle:"Toggle-module__toggle___7fo88"}}}]);