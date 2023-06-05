"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[56559],{50568:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}o.default=e,n&&n.set(e,o);return o}(n(67294)),a=c(n(92226)),i=c(n(43868)),l=c(n(63802)),u=c(n(47166)),f=c(n(57074));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,f=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){f=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(f)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=u.default.bind(f.default),y=function(){var e=s((0,o.useState)(!0),2),t=e[0],n=e[1],r=s((0,o.useState)(!1),2),u=r[0],f=r[1],c="Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.";return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{"aria-live":"polite"},t&&o.default.createElement(a.default,{type:"info",title:"Gettysburg Address:",onDismiss:function(){n(!1)}},o.default.createElement(l.default,{preview:c,isOpen:u,onChange:function(){f(!u)},className:p("long-text-example")},o.default.createElement("p",null,c),o.default.createElement("p",null,"Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this."),o.default.createElement("p",null,"But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.")))),o.default.createElement("br",null),o.default.createElement(i.default,{isDisabled:t,text:"Trigger Alert",onClick:function(){n(!0)}}))};t.default=y},63802:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),o=d(n(45697)),a=d(n(17509)),i=n(25387),l=d(n(47166)),u=d(n(82711)),f=d(n(98729)),c=["buttonAlign","buttonText","children","onChange","preview","intl","isOpen"];function d(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=l.default.bind(u.default),p={children:o.default.node.isRequired,intl:o.default.shape({formatMessage:o.default.func}).isRequired,onChange:o.default.func.isRequired,buttonAlign:o.default.string,buttonText:o.default.string,isOpen:o.default.bool,preview:o.default.node},y={buttonAlign:"start",isOpen:!1,preview:void 0},b=function(e){var t=e.buttonAlign,n=e.buttonText,o=e.children,i=e.onChange,l=e.preview,u=e.intl,d=e.isOpen,p=s(e,c),y=h(["show-hide","button",t,p.className]),b="";return n||(b=d?u.formatMessage({id:"Terra.showhide.hide"}):u.formatMessage({id:"Terra.showhide.showmore"})),r.default.createElement("div",p,!d&&l,r.default.createElement(a.default,{isOpen:d},o),r.default.createElement("div",{className:h("show-hide")},r.default.createElement(f.default,{"aria-expanded":d,text:n||b,onClick:i,className:y})))};b.propTypes=p,b.defaultProps=y;var v=(0,i.injectIntl)(b);t.default=v},98729:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=h(n(67294)),a=h(n(45697)),i=h(n(94184)),l=h(n(47166)),u=h(n(50026)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}o.default=e,n&&n.set(e,o);return o}(n(51051)),c=h(n(18018)),d=["text","onClick","onBlur","onFocus","onKeyDown","onKeyUp","refCallback"];function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function h(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(a=o.key,i=void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===r(i)?i:String(i)),o)}var a,i}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=g(e);if(t){var a=g(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}(this,n)}}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var w=l.default.bind(c.default),O={onClick:a.default.func,onBlur:a.default.func,onFocus:a.default.func,onKeyDown:a.default.func,onKeyUp:a.default.func,refCallback:a.default.func,text:a.default.string.isRequired},j={refCallback:void 0},S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(l,e);var t,n,r,a=m(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=a.call(this,e)).state={active:!1,focused:!1},t.handleKeyDown=t.handleKeyDown.bind(_(t)),t.handleKeyUp=t.handleKeyUp.bind(_(t)),t.handleOnBlur=t.handleOnBlur.bind(_(t)),t}return t=l,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyDown",value:function(e){e.nativeEvent.keyCode===f.KEY_SPACE?(this.setState({active:!0}),this.setState({focused:!0})):e.nativeEvent.keyCode===f.KEY_RETURN&&this.setState({focused:!0}),this.props.onKeyDown&&this.props.onKeyDown(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===f.KEY_SPACE&&this.setState({active:!1}),e.nativeEvent.keyCode===f.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.onClick,r=(e.onBlur,e.onFocus),a=(e.onKeyDown,e.onKeyUp,e.refCallback),l=y(e,d),u=this.context,f=(0,i.default)(w(["button",{"is-active":this.state.active},{"is-focused":this.state.focused},u.className]),l.className);return o.default.createElement("button",p({},l,{className:f,type:"button",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:n,onFocus:r,ref:a}),o.default.createElement("span",{className:w("inner")},o.default.createElement("span",{className:w("text")},t),o.default.createElement("span",{className:w("icon-holder")},o.default.createElement("span",{className:w("icon")}))))}}])&&b(t.prototype,n),r&&b(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.default.Component);S.propTypes=O,S.defaultProps=j,S.contextType=u.default;var E=S;t.default=E},17509:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(67294)),o=f(n(45697)),a=f(n(47166)),i=f(n(68133)),l=f(n(73010)),u=["isAnimated","isOpen","children"];function f(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.default.bind(l.default),h={children:o.default.node.isRequired,isAnimated:o.default.bool,isOpen:o.default.bool},p=function(e){var t,n=e.isAnimated,o=e.isOpen,a=e.children,l=d(e,u),f=o?"auto":0;return t=n?r.default.createElement(i.default,{duration:250,height:f,easing:"ease-out"},a):o&&a,r.default.createElement("div",c({},l,{className:s("toggle",l.className),"aria-hidden":!o}),t)};p.propTypes=h,p.defaultProps={isAnimated:!1,isOpen:!1};var y=p;t.default=y},57074:function(e,t,n){n.r(t),t.default={"long-text-example":"LongTextExample-module__long-text-example___aR79d"}},82711:function(e,t,n){n.r(t),t.default={"show-hide":"ShowHide-module__show-hide___G4rte",start:"ShowHide-module__start___IHwLs",center:"ShowHide-module__center___GIUyr",end:"ShowHide-module__end___SHdls"}},18018:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_ShowHideButton-module__clinical-lowlight-theme___QEEGB","orion-fusion-theme":"_ShowHideButton-module__orion-fusion-theme___OcNPq",button:"_ShowHideButton-module__button___kPLEF",icon:"_ShowHideButton-module__icon___DRoLz","is-focused":"_ShowHideButton-module__is-focused___WfGrO","is-hovered":"_ShowHideButton-module__is-hovered___Yx44Y",inner:"_ShowHideButton-module__inner___d3lcs",text:"_ShowHideButton-module__text___+rL6u","icon-holder":"_ShowHideButton-module__icon-holder___VvBuP"}},73010:function(e,t,n){n.r(t),t.default={toggle:"Toggle-module__toggle___7fo88"}}}]);