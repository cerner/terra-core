"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[30477],{42960:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n(67294)),a=o(n(11435));function o(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return i.default.createElement(a.default,{title:"Default Toggle Section Header"},i.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))}},11435:function(t,e,n){function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n(67294)),o=u(n(45697)),r=u(n(7812)),s=u(n(17509)),l=["children","title","level","sectionHeaderAttrs","isAnimated","isInitiallyOpen","isTransparent","isOpen","onOpen","onClose"];function u(t){return t&&t.__esModule?t:{default:t}}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c.apply(this,arguments)}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t,e,n){return(e=m(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,m(i.key),i)}}function m(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,e||"default");if("object"!=i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==i(e)?e:String(e)}function y(t,e,n){return e=b(e),function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return v(t)}(t,g()?Reflect.construct(e,n||[],b(t).constructor):e.apply(t,n))}function g(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(g=function(){return!!t})()}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}var w={children:o.default.node.isRequired,title:o.default.string.isRequired,level:o.default.oneOf([1,2,3,4,5,6]),onClose:o.default.func,onOpen:o.default.func,sectionHeaderAttrs:o.default.object,isAnimated:o.default.bool,isInitiallyOpen:o.default.bool,isTransparent:o.default.bool,isOpen:o.default.bool},S={level:2,sectionHeaderAttrs:{},isAnimated:!1,isInitiallyOpen:!1,isTransparent:!1,isOpen:void 0},j=function(t){function e(t){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=(n=y(this,e,[t])).props.isInitiallyOpen,a=void 0!==i&&i;return n.state={isOpen:a},n.handleOnClick=n.handleOnClick.bind(v(n)),n.wrapOnClick=n.wrapOnClick.bind(v(n)),n}var n,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(e,t),n=e,i=[{key:"handleOnClick",value:function(t){t.preventDefault();var e=this.props,n=e.onOpen,i=e.onClose;void 0===e.isOpen&&(n&&!this.state.isOpen?n():i&&this.state.isOpen&&i(),this.setState((function(t){return{isOpen:!t.isOpen}})))}},{key:"wrapOnClick",value:function(t){var e=this;return function(n){e.handleOnClick(n),t&&t(n)}}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.title,i=t.level,o=t.sectionHeaderAttrs,u=t.isAnimated,h=(t.isInitiallyOpen,t.isTransparent),m=(t.isOpen,t.onOpen,t.onClose,d(t,l)),y=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},o);return y.onClick=this.wrapOnClick(o.onClick),a.default.createElement("div",m,a.default.createElement(r.default,c({},y,{"aria-expanded":this.state.isOpen,isOpen:this.state.isOpen,level:i,text:n,isTransparent:h})),a.default.createElement(s.default,{isAnimated:u,isOpen:this.state.isOpen},e))}}],o=[{key:"getDerivedStateFromProps",value:function(t,e){return void 0!==t.isOpen&&e.isOpen!==t.isOpen?{isOpen:t.isOpen}:{isOpen:e.isOpen}}}],i&&h(n.prototype,i),o&&h(n,o),Object.defineProperty(n,"prototype",{writable:!1}),e}(a.default.Component);j.propTypes=w,j.defaultProps=S;e.default=j},17509:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n(67294)),a=u(n(45697)),o=u(n(19845)),r=u(n(68133)),s=u(n(73010)),l=["isAnimated","isOpen","children"];function u(t){return t&&t.__esModule?t:{default:t}}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c.apply(this,arguments)}function f(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=o.default.bind(s.default),d={children:a.default.node.isRequired,isAnimated:a.default.bool,isOpen:a.default.bool},h=function(t){var e,n=t.isAnimated,a=t.isOpen,o=t.children,s=f(t,l),u=a?"auto":0;return e=n?i.default.createElement(r.default,{duration:250,height:u,easing:"ease-out"},o):a&&o,i.default.createElement("div",c({},s,{className:p("toggle",s.className),"aria-hidden":!a}),e)};h.propTypes=d,h.defaultProps={isAnimated:!1,isOpen:!1};e.default=h},73010:function(t,e,n){n.r(e),e.default={toggle:"Toggle-module__toggle___7fo88"}},68133:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=u(n(67294)),s=u(n(45697)),l=u(n(93967));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},p=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function d(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var a={},o=Object.keys(t),r=0;r<o.length;r++){var s=o[r];-1===n.indexOf(s)&&(a[s]=t[s])}return a}function h(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function m(t){return!isNaN(parseFloat(t))&&isFinite(t)}function y(t){return"string"==typeof t&&t.search("%")===t.length-1&&m(t.substr(0,t.length-1))}function g(t,e){t&&"function"==typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",o="visible";m(t.height)?(i=t.height<0||"0"===t.height?0:t.height,o="hidden"):y(t.height)&&(i="0%"===t.height?0:t.height,o="hidden"),n.animationStateClasses=a({},f,t.animationStateClasses);var r=n.getStaticStateClasses(i);return"undefined"!=typeof window&&window.matchMedia&&(n.prefersReducedMotion=window.matchMedia("(prefers-reduced-motion)").matches),n.state={animationStateClasses:r,height:i,overflow:o,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,a=this,o=this.props,r=o.height,s=o.onAnimationEnd,u=o.onAnimationStart,f=this.getTimings(),p=f.duration,d=f.delay;if(this.contentElement&&r!==t.height){var b;this.showContent(e.height),this.contentElement.style.overflow="hidden";var v=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var O=p+d,w=null,S={height:null,overflow:"hidden"},j="auto"===e.height;m(r)?(w=r<0||"0"===r?0:r,S.height=w):y(r)?(w="0%"===r?0:r,S.height=w):(w=v,S.height="auto",S.overflow=null),j&&(S.height=w,w=v);var C=(0,l.default)((c(b={},this.animationStateClasses.animating,!0),c(b,this.animationStateClasses.animatingUp,"auto"===t.height||r<t.height),c(b,this.animationStateClasses.animatingDown,"auto"===r||r>t.height),c(b,this.animationStateClasses.animatingToHeightZero,0===S.height),c(b,this.animationStateClasses.animatingToHeightAuto,"auto"===S.height),c(b,this.animationStateClasses.animatingToHeightSpecific,S.height>0),b)),T=this.getStaticStateClasses(S.height);this.setState({animationStateClasses:C,height:w,overflow:"hidden",shouldUseTransitions:!j}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),j?(S.shouldUseTransitions=!0,h(this.animationFrameIDs),this.animationFrameIDs=(n=function(){a.setState(S),g(u,{newHeight:S.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:T,shouldUseTransitions:!1}),a.hideContent(S.height),g(s,{newHeight:S.height})}),O)):(g(u,{newHeight:w}),this.timeoutID=setTimeout((function(){S.animationStateClasses=T,S.shouldUseTransitions=!1,a.setState(S),"auto"!==r&&a.hideContent(w),g(s,{newHeight:w})}),O))}}},{key:"componentWillUnmount",value:function(){h(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null}},{key:"getTimings",value:function(){if(this.prefersReducedMotion)return{delay:0,duration:0};var t=this.props;return{delay:t.delay,duration:t.duration}}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,l.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,o=n.applyInlineTransitions,s=n.children,u=n.className,f=n.contentClassName,h=n.easing,m=n.id,y=n.style,g=this.state,b=g.height,v=g.overflow,O=g.animationStateClasses,w=g.shouldUseTransitions,S=this.getTimings(),j=S.duration,C=S.delay,T=a({},y,{height:b,overflow:v||y.overflow});w&&o&&(T.transition="height "+j+"ms "+h+" "+C+"ms",y.transition&&(T.transition=y.transition+", "+T.transition),T.WebkitTransition=T.transition);var P={};i&&(P.transition="opacity "+j+"ms "+h+" "+C+"ms",P.WebkitTransition=P.transition,0===b&&(P.opacity=0));var _=(0,l.default)((c(t={},O,!0),c(t,u,u),t)),E="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===b;return r.default.createElement("div",a({},d.apply(void 0,[this.props].concat(p)),{"aria-hidden":E,className:_,id:m,style:T}),r.default.createElement("div",{className:f,style:P,ref:function(t){return e.contentElement=t}},s))}}]),e}(r.default.Component);b.propTypes={"aria-hidden":s.default.bool,animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,delay:s.default.number,duration:s.default.number,easing:s.default.string,height:function(t,e,n){var a=t[e];return"number"==typeof a&&a>=0||y(a)||"auto"===a?null:new TypeError('value "'+a+'" of type "'+("undefined"==typeof a?"undefined":i(a))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:s.default.string,onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:f,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b}}]);