"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[32006],{32006:function(t,e,n){function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,o=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!=typeof t)return{default:t};var n=s(e);if(n&&n.has(t))return n.get(t);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if("default"!==r&&Object.prototype.hasOwnProperty.call(t,r)){var l=o?Object.getOwnPropertyDescriptor(t,r):null;l&&(l.get||l.set)?Object.defineProperty(a,r,l):a[r]=t[r]}a.default=t,n&&n.set(t,a);return a}(n(67294)),r=(a=n(17509))&&a.__esModule?a:{default:a};function s(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(s=function(t){return t?n:e})(t)}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,a,o,r,s=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=o.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(t){u=!0,a=t}finally{try{if(!l&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(u)throw a}}return s}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}e.default=function(){var t=l((0,o.useState)(!0),2),e=t[0],n=t[1];return o.default.createElement("div",null,o.default.createElement("button",{type:"button",id:"trigger-toggle",onClick:function(){n(!e)},"aria-expanded":e,"aria-controls":"toggle"},"Open Toggle"),o.default.createElement(r.default,{id:"toggle",isOpen:e},o.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))}},17509:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n(67294)),a=u(n(45697)),o=u(n(47166)),r=u(n(68133)),s=u(n(73010)),l=["isAnimated","isOpen","children"];function u(t){return t&&t.__esModule?t:{default:t}}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c.apply(this,arguments)}function f(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var h=o.default.bind(s.default),d={children:a.default.node.isRequired,isAnimated:a.default.bool,isOpen:a.default.bool},m=function(t){var e,n=t.isAnimated,a=t.isOpen,o=t.children,s=f(t,l),u=a?"auto":0;return e=n?i.default.createElement(r.default,{duration:250,height:u,easing:"ease-out"},o):a&&o,i.default.createElement("div",c({},s,{className:h("toggle",s.className),"aria-hidden":!a}),e)};m.propTypes=d,m.defaultProps={isAnimated:!1,isOpen:!1};e.default=m},73010:function(t,e,n){n.r(e),e.default={toggle:"Toggle-module__toggle___7fo88"}},68133:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=u(n(67294)),s=u(n(45697)),l=u(n(94184));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},h=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function d(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var a={},o=Object.keys(t),r=0;r<o.length;r++){var s=o[r];-1===n.indexOf(s)&&(a[s]=t[s])}return a}function m(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function p(t){return!isNaN(parseFloat(t))&&isFinite(t)}function g(t){return"string"==typeof t&&t.search("%")===t.length-1&&p(t.substr(0,t.length-1))}function y(t,e){t&&"function"==typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",o="visible";p(t.height)?(i=t.height<0||"0"===t.height?0:t.height,o="hidden"):g(t.height)&&(i="0%"===t.height?0:t.height,o="hidden"),n.animationStateClasses=a({},f,t.animationStateClasses);var r=n.getStaticStateClasses(i);return"undefined"!=typeof window&&window.matchMedia&&(n.prefersReducedMotion=window.matchMedia("(prefers-reduced-motion)").matches),n.state={animationStateClasses:r,height:i,overflow:o,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,a=this,o=this.props,r=o.height,s=o.onAnimationEnd,u=o.onAnimationStart,f=this.getTimings(),h=f.duration,d=f.delay;if(this.contentElement&&r!==t.height){var b;this.showContent(e.height),this.contentElement.style.overflow="hidden";var v=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var S=h+d,O=null,w={height:null,overflow:"hidden"},C="auto"===e.height;p(r)?(O=r<0||"0"===r?0:r,w.height=O):g(r)?(O="0%"===r?0:r,w.height=O):(O=v,w.height="auto",w.overflow=null),C&&(w.height=O,O=v);var T=(0,l.default)((c(b={},this.animationStateClasses.animating,!0),c(b,this.animationStateClasses.animatingUp,"auto"===t.height||r<t.height),c(b,this.animationStateClasses.animatingDown,"auto"===r||r>t.height),c(b,this.animationStateClasses.animatingToHeightZero,0===w.height),c(b,this.animationStateClasses.animatingToHeightAuto,"auto"===w.height),c(b,this.animationStateClasses.animatingToHeightSpecific,w.height>0),b)),j=this.getStaticStateClasses(w.height);this.setState({animationStateClasses:T,height:O,overflow:"hidden",shouldUseTransitions:!C}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),C?(w.shouldUseTransitions=!0,m(this.animationFrameIDs),this.animationFrameIDs=(n=function(){a.setState(w),y(u,{newHeight:w.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:j,shouldUseTransitions:!1}),a.hideContent(w.height),y(s,{newHeight:w.height})}),S)):(y(u,{newHeight:O}),this.timeoutID=setTimeout((function(){w.animationStateClasses=j,w.shouldUseTransitions=!1,a.setState(w),"auto"!==r&&a.hideContent(O),y(s,{newHeight:O})}),S))}}},{key:"componentWillUnmount",value:function(){m(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null}},{key:"getTimings",value:function(){if(this.prefersReducedMotion)return{delay:0,duration:0};var t=this.props;return{delay:t.delay,duration:t.duration}}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,l.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,o=n.applyInlineTransitions,s=n.children,u=n.className,f=n.contentClassName,m=n.easing,p=n.id,g=n.style,y=this.state,b=y.height,v=y.overflow,S=y.animationStateClasses,O=y.shouldUseTransitions,w=this.getTimings(),C=w.duration,T=w.delay,j=a({},g,{height:b,overflow:v||g.overflow});O&&o&&(j.transition="height "+C+"ms "+m+" "+T+"ms",g.transition&&(j.transition=g.transition+", "+j.transition),j.WebkitTransition=j.transition);var _={};i&&(_.transition="opacity "+C+"ms "+m+" "+T+"ms",_.WebkitTransition=_.transition,0===b&&(_.opacity=0));var E=(0,l.default)((c(t={},S,!0),c(t,u,u),t)),A="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===b;return r.default.createElement("div",a({},d.apply(void 0,[this.props].concat(h)),{"aria-hidden":A,className:E,id:p,style:j}),r.default.createElement("div",{className:f,style:_,ref:function(t){return e.contentElement=t}},s))}}]),e}(r.default.Component);b.propTypes={"aria-hidden":s.default.bool,animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,delay:s.default.number,duration:s.default.number,easing:s.default.string,height:function(t,e,n){var a=t[e];return"number"==typeof a&&a>=0||g(a)||"auto"===a?null:new TypeError('value "'+a+'" of type "'+("undefined"==typeof a?"undefined":i(a))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:s.default.string,onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:f,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b}}]);