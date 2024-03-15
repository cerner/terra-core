"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[98043],{44575:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(n(96540)),i=s(n(5556)),a=s(n(67967)),u=f(n(25966)),l=s(n(54597));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],l=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=a.default.bind(l.default),m={ariaCurrent:i.default.bool,ariaDisabled:i.default.bool,ariaLabel:i.default.string,children:i.default.node,className:i.default.string,disabled:i.default.bool,onClick:i.default.func,tabIndex:i.default.string},y=function(e,t,n){n.nativeEvent.keyCode===u.KEY_TAB&&t(!0),n.nativeEvent.keyCode!==u.KEY_SPACE&&n.nativeEvent.keyCode!==u.KEY_RETURN||("keydown"===n.type?(e(!0),t(!1)):(e(!1),t(!0)))},b=function(e){document.activeElement!==e.currentTarget&&e.currentTarget.focus(),e.preventDefault()};function h(e){var t=d((0,o.useState)(!1),2),n=t[0],r=t[1],i=d((0,o.useState)(!1),2),a=i[0],u=i[1],l=a?"is-focused":void 0,s=n?"is-active":void 0,c=e.ariaCurrent,f=e.ariaDisabled,p=e.ariaLabel,m=e.children,h=e.className,v=e.disabled,g=e.onClick,w=e.tabIndex;return(0,o.useEffect)((function(){r(!1),v&&u(!1)}),[v]),o.default.createElement("button",{"aria-current":c,"aria-disabled":f,"aria-label":p,className:_([s,l,h]),disabled:v,onBlur:function(){return function(e,t){e(!1),t(!1)}(r,u)},onClick:g,onKeyDown:function(e){return y(r,u,e)},onKeyUp:function(e){return y(r,u,e)},onMouseDown:b,tabIndex:w,type:"button",role:"link"},m)}h.propTypes=m;t.default=h},90313:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.pageSet=t.calculatePages=void 0;t.calculatePages=function(e,t){return t?Math.ceil(e/t):e},t.pageSet=function(e,t){var n=[],r=e;if(r<1?r=1:r>t&&(r=t),r<7)for(var o=t<10?t:10,i=1;i<=o;i+=1)n.push(i);else if(r<=t&&r>t-10&&r>t-5)for(var a=t;a>t-10&&a>0;a-=1)n.push(a);else{for(var u=r;u>=r-5;u-=1)n.push(u);for(var l=r+1;l<=r+4;l+=1)n.push(l)}return n.sort((function(e,t){return e-t}))}},5949:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.DependentViewport=void 0;var o=s(n(96540)),i=s(n(5556)),a=s(n(7829)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}(n(0));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f(r.key),r)}}function f(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function d(e,t,n){return t=_(t),function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(e,p()?Reflect.construct(t,n||[],_(e).constructor):t.apply(e,n))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var b={children:i.default.node,onChange:i.default.func,onResize:i.default.func,tiny:i.default.element,small:i.default.element,medium:i.default.element,large:i.default.element,huge:i.default.element,enormous:i.default.element,responsiveTo:i.default.oneOf(["window","parent"])},h=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=d(this,t)).state={element:null},e.setContainer=e.setContainer.bind(m(e)),e.handleResize=e.handleResize.bind(m(e)),e.handleWindowResize=e.handleWindowResize.bind(m(e)),e.animationFrameID=null,e}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new a.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,r=t.onResize,o=t.tiny,i=t.small,a=t.medium,l=t.large,s=t.huge,c=t.enormous;r&&r(e);var f,d=(0,u.activeBreakpointForSize)(e);n&&d!==this.breakpoint&&n(d),this.breakpoint=d,(o||i||a||l||s||c)&&(f=e>=u.default.enormous&&c?"enormous":e>=u.default.huge&&s?"huge":e>=u.default.large&&l?"large":e>=u.default.medium&&a?"medium":e>=u.default.small&&i?"small":"tiny",this.state.element!==f&&this.setState({element:f}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:o.default.createElement(o.default.Fragment,null,"parent"===n&&!this.container&&o.default.createElement("div",{ref:this.setContainer}),t)}}])&&c(n.prototype,r),i&&c(n,i),Object.defineProperty(n,"prototype",{writable:!1}),t}(o.default.Component);h.propTypes=b,h.defaultProps={responsiveTo:"parent"};t.default=h},54597:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Paginator-module__clinical-lowlight-theme___hQxvj","orion-fusion-theme":"Paginator-module__orion-fusion-theme___7skeW",paginator:"Paginator-module__paginator___TNgWR","nav-link":"Paginator-module__nav-link___JdYbP","is-focused":"Paginator-module__is-focused___SQY-t","is-active":"Paginator-module__is-active___TDSr5","is-selected":"Paginator-module__is-selected___kFLSV","is-disabled":"Paginator-module__is-disabled___0jhnT",previous:"Paginator-module__previous___ZK94e","icon-only":"Paginator-module__icon-only___63xSP",next:"Paginator-module__next___v5JUf","left-controls":"Paginator-module__left-controls___E3CpI","right-controls":"Paginator-module__right-controls___p3Oma",pageless:"Paginator-module__pageless___wz+y+",progressive:"Paginator-module__progressive___i0VRE",icon:"Paginator-module__icon___FkDuT",list:"Paginator-module__list___55Vg3","progressive-list":"Paginator-module__progressive-list___km3Qz"}}}]);