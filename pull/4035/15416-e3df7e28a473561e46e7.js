"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[15416],{15416:function(t,e,n){function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,o=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=i(t)&&"function"!=typeof t)return{default:t};var n=l(e);if(n&&n.has(t))return n.get(t);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if("default"!==r&&Object.prototype.hasOwnProperty.call(t,r)){var s=o?Object.getOwnPropertyDescriptor(t,r):null;s&&(s.get||s.set)?Object.defineProperty(a,r,s):a[r]=t[r]}return a.default=t,n&&n.set(t,a),a}(n(67294)),r=(a=n(17509))&&a.__esModule?a:{default:a};function l(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(l=function(t){return t?n:e})(t)}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,a,o,r,l=[],s=!0,u=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(i=o.call(n)).done)&&(l.push(i.value),l.length!==e);s=!0);}catch(t){u=!0,a=t}finally{try{if(!s&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(u)throw a}}return l}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}e.default=function(){var t=s((0,o.useState)(!1),2),e=t[0],n=t[1];return o.default.createElement("div",null,o.default.createElement("button",{type:"button",id:"trigger-toggle",onClick:function(){n(!e)},"aria-expanded":e,"aria-controls":"toggle"},"Animated Toggle"),o.default.createElement(r.default,{id:"toggle",isOpen:e,isAnimated:!0},o.default.createElement("p",null,"Lorem ipsum dolor sit amet,",o.default.createElement("a",{id:"link",href:"#test"},"consectetur")," ","adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),o.default.createElement("div",null,o.default.createElement("label",{htmlFor:"text-input"},"Text input"),o.default.createElement("input",{id:"text-input",className:"test",type:"text"})),o.default.createElement("br",null),o.default.createElement("div",null,o.default.createElement("label",{htmlFor:"select-field",defaultValue:"Option 01"},"Select field"),o.default.createElement("select",{id:"select-field"},o.default.createElement("option",null,"Option 01"),o.default.createElement("option",null,"Option 02"))),o.default.createElement("br",null),o.default.createElement("div",null,o.default.createElement("label",{htmlFor:"textarea"},"Textarea"),o.default.createElement("textarea",{id:"textarea",cols:"30",rows:"5",defaultValue:"Textarea text"})),o.default.createElement("br",null),o.default.createElement("div",null,o.default.createElement("button",{type:"button",id:"button"},"button"))))}},17509:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n(67294)),a=u(n(45697)),o=u(n(19845)),r=u(n(68133)),l=u(n(73010)),s=["isAnimated","isOpen","children"];function u(t){return t&&t.__esModule?t:{default:t}}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c.apply(this,arguments)}function f(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=o.default.bind(l.default),h={children:a.default.node.isRequired,isAnimated:a.default.bool,isOpen:a.default.bool},m=function(t){var e,n=t.isAnimated,a=t.isOpen,o=t.children,l=f(t,s),u=a?"auto":0;return e=n?i.default.createElement(r.default,{duration:250,height:u,easing:"ease-out"},o):a&&o,i.default.createElement("div",c({},l,{className:d("toggle",l.className),"aria-hidden":!a}),e)};m.propTypes=h,m.defaultProps={isAnimated:!1,isOpen:!1};e.default=m},73010:function(t,e,n){n.r(e),e.default={toggle:"Toggle-module__toggle___7fo88"}},68133:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=u(n(67294)),l=u(n(45697)),s=u(n(93967));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},d=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function h(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var a={},o=Object.keys(t),r=0;r<o.length;r++){var l=o[r];-1===n.indexOf(l)&&(a[l]=t[l])}return a}function m(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function p(t){return!isNaN(parseFloat(t))&&isFinite(t)}function g(t){return"string"==typeof t&&t.search("%")===t.length-1&&p(t.substr(0,t.length-1))}function y(t,e){t&&"function"==typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",o="visible";p(t.height)?(i=t.height<0||"0"===t.height?0:t.height,o="hidden"):g(t.height)&&(i="0%"===t.height?0:t.height,o="hidden"),n.animationStateClasses=a({},f,t.animationStateClasses);var r=n.getStaticStateClasses(i);return"undefined"!=typeof window&&window.matchMedia&&(n.prefersReducedMotion=window.matchMedia("(prefers-reduced-motion)").matches),n.state={animationStateClasses:r,height:i,overflow:o,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,a=this,o=this.props,r=o.height,l=o.onAnimationEnd,u=o.onAnimationStart,f=this.getTimings(),d=f.duration,h=f.delay;if(this.contentElement&&r!==t.height){var b;this.showContent(e.height),this.contentElement.style.overflow="hidden";var v=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var S=d+h,O=null,w={height:null,overflow:"hidden"},E="auto"===e.height;p(r)?(O=r<0||"0"===r?0:r,w.height=O):g(r)?(O="0%"===r?0:r,w.height=O):(O=v,w.height="auto",w.overflow=null),E&&(w.height=O,O=v);var C=(0,s.default)((c(b={},this.animationStateClasses.animating,!0),c(b,this.animationStateClasses.animatingUp,"auto"===t.height||r<t.height),c(b,this.animationStateClasses.animatingDown,"auto"===r||r>t.height),c(b,this.animationStateClasses.animatingToHeightZero,0===w.height),c(b,this.animationStateClasses.animatingToHeightAuto,"auto"===w.height),c(b,this.animationStateClasses.animatingToHeightSpecific,w.height>0),b)),T=this.getStaticStateClasses(w.height);this.setState({animationStateClasses:C,height:O,overflow:"hidden",shouldUseTransitions:!E}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),E?(w.shouldUseTransitions=!0,m(this.animationFrameIDs),this.animationFrameIDs=(n=function(){a.setState(w),y(u,{newHeight:w.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:T,shouldUseTransitions:!1}),a.hideContent(w.height),y(l,{newHeight:w.height})}),S)):(y(u,{newHeight:O}),this.timeoutID=setTimeout((function(){w.animationStateClasses=T,w.shouldUseTransitions=!1,a.setState(w),"auto"!==r&&a.hideContent(O),y(l,{newHeight:O})}),S))}}},{key:"componentWillUnmount",value:function(){m(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null}},{key:"getTimings",value:function(){if(this.prefersReducedMotion)return{delay:0,duration:0};var t=this.props;return{delay:t.delay,duration:t.duration}}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,s.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,o=n.applyInlineTransitions,l=n.children,u=n.className,f=n.contentClassName,m=n.easing,p=n.id,g=n.style,y=this.state,b=y.height,v=y.overflow,S=y.animationStateClasses,O=y.shouldUseTransitions,w=this.getTimings(),E=w.duration,C=w.delay,T=a({},g,{height:b,overflow:v||g.overflow});O&&o&&(T.transition="height "+E+"ms "+m+" "+C+"ms",g.transition&&(T.transition=g.transition+", "+T.transition),T.WebkitTransition=T.transition);var j={};i&&(j.transition="opacity "+E+"ms "+m+" "+C+"ms",j.WebkitTransition=j.transition,0===b&&(j.opacity=0));var _=(0,s.default)((c(t={},S,!0),c(t,u,u),t)),A="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===b;return r.default.createElement("div",a({},h.apply(void 0,[this.props].concat(d)),{"aria-hidden":A,className:_,id:p,style:T}),r.default.createElement("div",{className:f,style:j,ref:function(t){return e.contentElement=t}},l))}}]),e}(r.default.Component);b.propTypes={"aria-hidden":l.default.bool,animateOpacity:l.default.bool,animationStateClasses:l.default.object,applyInlineTransitions:l.default.bool,children:l.default.any.isRequired,className:l.default.string,contentClassName:l.default.string,delay:l.default.number,duration:l.default.number,easing:l.default.string,height:function(t,e,n){var a=t[e];return"number"==typeof a&&a>=0||g(a)||"auto"===a?null:new TypeError('value "'+a+'" of type "'+("undefined"==typeof a?"undefined":i(a))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:l.default.string,onAnimationEnd:l.default.func,onAnimationStart:l.default.func,style:l.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:f,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b}}]);