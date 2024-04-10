"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[42104],{42104:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var a=l?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,n&&n.set(e,o),o}(n(96540)),l=b(n(5556)),i=n(8604),a=b(n(46942)),u=b(n(67967)),c=n(68414),s=b(n(5949)),f=b(n(40890)),d=b(n(56500)),m=n(78513),_=b(n(52103)),p=b(n(98145)),y=["action","children","customIcon","customColorClass","disableAlertActionFocus","onDismiss","intl","id","role","title","titleID","type"];function b(e){return e&&e.__esModule?e:{default:e}}function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function w(e,t,n){var o;return o=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==r(o)?o:o+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l,i,a=[],u=!0,c=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=l.call(n)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var E=u.default.bind(p.default),S={ALERT:"alert",ERROR:"error",WARNING:"warning",UNSATISFIED:"unsatisfied",UNVERIFIED:"unverified",ADVISORY:"advisory",INFO:"info",SUCCESS:"success",CUSTOM:"custom"},I={action:l.default.element,children:l.default.node,customIcon:l.default.element,customColorClass:l.default.string,disableAlertActionFocus:l.default.bool,onDismiss:l.default.func,id:l.default.string,intl:l.default.shape({formatMessage:l.default.func}).isRequired,role:l.default.string,title:l.default.string,titleID:l.default.string,type:l.default.oneOf([S.ALERT,S.ERROR,S.WARNING,S.UNSATISFIED,S.UNVERIFIED,S.ADVISORY,S.INFO,S.SUCCESS,S.CUSTOM])},R={customColorClass:"custom-default-color",disableAlertActionFocus:!1,type:S.ALERT},j=function(e){var t,n,r=e.action,l=e.children,i=e.customIcon,u=e.customColorClass,p=e.disableAlertActionFocus,b=e.onDismiss,v=e.intl,g=e.id,I=e.role,R=e.title,j=e.titleID,C=e.type,N=A(e,y),P=o.default.useContext(_.default),D=O((0,o.useState)(),2),T=D[0],M=D[1],k=(0,o.useRef)(null),F=C===S.CUSTOM?"":v.formatMessage({id:"Terra.alert.".concat(C)}),z=C===S.ALERT?"alert":"status",W="alert"===I||"alert"===z,U=(0,a.default)(E("alert-base",C,{narrow:T},{wide:!T},P.className),N.className,w({},"".concat(u),u&&C===S.CUSTOM)),x=E("body",{"body-std":!T||T&&!b&&!r},{"body-narrow":T&&(b||r)}),G=E("focus-container"),L=E("content-container"),V=g||(0,c.v4)(),B=j||"alert-title-".concat(V),q="alert-message-".concat(V),J=R||F?B:q;if(b&&(t=o.default.createElement(f.default,{"aria-describedby":J,text:v.formatMessage({id:"Terra.alert.dismiss"}),onClick:b})),b||r){var Y=E("actions",{"actions-custom":C===S.CUSTOM});n=o.default.createElement("div",{className:Y},r,t)}var H=E("section",{"section-custom":C===S.CUSTOM}),Q=o.default.createElement("div",{id:q,className:H},(R||F)&&o.default.createElement("strong",{id:B,className:E("title")},R&&F&&o.default.createElement(d.default,{text:"".concat(F,",")}),R||F),l);return(0,o.useEffect)((function(){var e;W&&r&&!p&&null!=k&&null!==(e=k.current)&&void 0!==e&&e.focus&&k.current.focus()}),[]),o.default.createElement(s.default,{onChange:function(e){var t="tiny"===e;t!==T&&M(t)}},o.default.createElement("div",h({role:I||z,id:g},N,{className:U}),o.default.createElement("div",{className:x},o.default.createElement("div",{className:G,ref:k,tabIndex:"-1"}),o.default.createElement("div",{className:L},function(e,t){switch(e){case S.ALERT:return o.default.createElement("span",{className:E("icon")},o.default.createElement(m.IconAlert,null));case S.ERROR:return o.default.createElement("span",{className:E("icon")},o.default.createElement(m.IconError,null));case S.WARNING:return o.default.createElement("span",{className:E("icon")},o.default.createElement(m.IconWarning,null));case S.UNSATISFIED:return o.default.createElement("span",{className:E("icon","unsatisfied-icon")},o.default.createElement(m.IconGapChecking,null));case S.UNVERIFIED:return o.default.createElement("span",{className:E("icon","unverified-icon")},o.default.createElement(m.IconDiamondSymbol,null));case S.ADVISORY:return null;case S.INFO:return o.default.createElement("span",{className:E("icon")},o.default.createElement(m.IconInformation,null));case S.SUCCESS:return o.default.createElement("span",{className:E("icon")},o.default.createElement(m.IconSuccess,null));case S.CUSTOM:return o.default.createElement("span",{className:E("icon")},t);default:return null}}(C,i),Q)),n))};j.propTypes=I,j.defaultProps=R,(j.Opts={}).Types=S;t.default=(0,i.injectIntl)(j)},5949:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.DependentViewport=void 0;var o=c(n(96540)),l=c(n(5556)),i=c(n(7829)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var a=l?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,n&&n.set(e,o),o}(n(0));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f(r.key),r)}}function f(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:t+""}function d(e,t,n){return t=_(t),function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,m()?Reflect.construct(t,n||[],_(e).constructor):t.apply(e,n))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var y={children:l.default.node,onChange:l.default.func,onResize:l.default.func,tiny:l.default.element,small:l.default.element,medium:l.default.element,large:l.default.element,huge:l.default.element,enormous:l.default.element,responsiveTo:l.default.oneOf(["window","parent"])},b=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=d(this,t)).state={element:null},e.setContainer=e.setContainer.bind(e),e.handleResize=e.handleResize.bind(e),e.handleWindowResize=e.handleWindowResize.bind(e),e.animationFrameID=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new i.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,r=t.onResize,o=t.tiny,l=t.small,i=t.medium,u=t.large,c=t.huge,s=t.enormous;r&&r(e);var f,d=(0,a.activeBreakpointForSize)(e);n&&d!==this.breakpoint&&n(d),this.breakpoint=d,(o||l||i||u||c||s)&&(f=e>=a.default.enormous&&s?"enormous":e>=a.default.huge&&c?"huge":e>=a.default.large&&u?"large":e>=a.default.medium&&i?"medium":e>=a.default.small&&l?"small":"tiny",this.state.element!==f&&this.setState({element:f}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:o.default.createElement(o.default.Fragment,null,"parent"===n&&!this.container&&o.default.createElement("div",{ref:this.setContainer}),t)}}])&&s(n.prototype,r),l&&s(n,l),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r,l}(o.default.Component);b.propTypes=y,b.defaultProps={responsiveTo:"parent"};t.default=b},98145:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Alert-module__clinical-lowlight-theme___mbn1G","orion-fusion-theme":"Alert-module__orion-fusion-theme___88DP9","alert-base":"Alert-module__alert-base___1n2OP",narrow:"Alert-module__narrow___Rburq",wide:"Alert-module__wide___gnGF7",icon:"Alert-module__icon___knN3g","content-container":"Alert-module__content-container___aDO1C",body:"Alert-module__body___0rIor","body-narrow":"Alert-module__body-narrow___2Jplj","body-std":"Alert-module__body-std___qud1z","focus-container":"Alert-module__focus-container___CHbk6",section:"Alert-module__section___N5IvN","section-custom":"Alert-module__section-custom___6924q",title:"Alert-module__title___wxbgA",actions:"Alert-module__actions___CeUWQ","actions-custom":"Alert-module__actions-custom___dln8v",alert:"Alert-module__alert___EPG84",error:"Alert-module__error___ni7J4",warning:"Alert-module__warning___E5yyM",unsatisfied:"Alert-module__unsatisfied___Oe+h0",unverified:"Alert-module__unverified___t0ujB",advisory:"Alert-module__advisory___JtGfL",info:"Alert-module__info___MOqcH",success:"Alert-module__success___JFzGs",custom:"Alert-module__custom___NnryQ","unsatisfied-icon":"Alert-module__unsatisfied-icon___0NACi","unverified-icon":"Alert-module__unverified-icon___L9jja","custom-default-color":"Alert-module__custom-default-color___5BEAR"}}}]);