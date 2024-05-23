"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[81470],{81470:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n(96540)),o=a(n(27379));function a(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return i.default.createElement(o.default,{id:"emphasisButton",closedButtonText:"ToggleButton",buttonAttrs:{variant:"emphasis"}},i.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))}},27379:function(t,e,n){function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=d(n(96540)),a=d(n(5556)),r=d(n(67967)),s=d(n(40890)),l=d(n(62441)),u=d(n(97742)),c=d(n(53248)),f=["buttonAttrs","children","closedButtonText","icon","isAnimated","isIconAnimated","isIconOnly","isInitiallyOpen","onClose","onOpen","openedButtonText"];function d(t){return t&&t.__esModule?t:{default:t}}function h(){return h=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},h.apply(this,arguments)}function p(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,y(i.key),i)}}function y(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==i(e)?e:e+""}function g(t,e,n){return e=v(e),function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,b()?Reflect.construct(e,n||[],v(t).constructor):e.apply(t,n))}function b(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(b=function(){return!!t})()}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}var _=r.default.bind(c.default),w={children:a.default.node.isRequired,closedButtonText:a.default.string.isRequired,buttonAttrs:a.default.object,icon:a.default.element,isAnimated:a.default.bool,isIconAnimated:a.default.bool,isIconOnly:a.default.bool,isInitiallyOpen:a.default.bool,onClose:a.default.func,onOpen:a.default.func,openedButtonText:a.default.string},S={isAnimated:!1,isIconAnimated:!1,isIconOnly:!1,isInitiallyOpen:!1,icon:o.default.createElement(l.default,null)},T=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=g(this,e,[t])).state={isOpen:t.isInitiallyOpen},n.handleOnClick=n.handleOnClick.bind(n),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(e,t),n=e,(i=[{key:"handleOnClick",value:function(t){t.preventDefault(),!this.state.isOpen&&this.props.onOpen?this.props.onOpen():this.state.isOpen&&this.props.onClose&&this.props.onClose(),this.setState((function(t){return{isOpen:!t.isOpen}}))}},{key:"render",value:function(){var t=this.props,e=t.buttonAttrs,n=(t.children,t.closedButtonText),i=t.icon,a=(t.isAnimated,t.isIconAnimated),r=t.isIconOnly,l=(t.isInitiallyOpen,t.onClose,t.onOpen,t.openedButtonText),c=p(t,f),d=l||n,m=this.state.isOpen?d:n,y=r?n:m,g=_(["button",{"is-open":this.state.isOpen},{"is-icon-animated":a},c.className]),b=o.default.createElement(s.default,h({},e,{isIconOnly:r,icon:o.default.createElement("span",{className:_("icon")},i),"aria-expanded":this.state.isOpen,text:y,onClick:this.handleOnClick}));return o.default.createElement("div",h({},c,{className:g}),b,o.default.createElement(u.default,{isOpen:this.state.isOpen,isAnimated:this.props.isAnimated},this.props.children))}}])&&m(n.prototype,i),a&&m(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i,a}(o.default.Component);T.propTypes=w,T.defaultProps=S;e.default=T},97742:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n(96540)),o=u(n(5556)),a=u(n(67967)),r=u(n(56650)),s=u(n(76835)),l=["isAnimated","isOpen","children"];function u(t){return t&&t.__esModule?t:{default:t}}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c.apply(this,arguments)}function f(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var d=a.default.bind(s.default),h={children:o.default.node.isRequired,isAnimated:o.default.bool,isOpen:o.default.bool},p=function(t){var e,n=t.isAnimated,o=t.isOpen,a=t.children,s=f(t,l),u=o?"auto":0;return e=n?i.default.createElement(r.default,{duration:250,height:u,easing:"ease-out"},a):o&&a,i.default.createElement("div",c({},s,{className:d("toggle",s.className),"aria-hidden":!o}),e)};p.propTypes=h,p.defaultProps={isAnimated:!1,isOpen:!1};e.default=p},53248:function(t,e,n){n.r(e),e.default={"toggle-button":"ToggleButton-module__toggle-button___4H4qn",icon:"ToggleButton-module__icon___2J4zE","is-open":"ToggleButton-module__is-open___NWVIB","is-icon-animated":"ToggleButton-module__is-icon-animated___WXEng","button-text":"ToggleButton-module__button-text___IAZwy"}},76835:function(t,e,n){n.r(e),e.default={toggle:"Toggle-module__toggle___7fo88"}},56650:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=u(n(96540)),s=u(n(5556)),l=u(n(46942));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},d=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function h(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var o={},a=Object.keys(t),r=0;r<a.length;r++){var s=a[r];-1===n.indexOf(s)&&(o[s]=t[s])}return o}function p(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function m(t){return!isNaN(parseFloat(t))&&isFinite(t)}function y(t){return"string"==typeof t&&t.search("%")===t.length-1&&m(t.substr(0,t.length-1))}function g(t,e){t&&"function"==typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",a="visible";m(t.height)?(i=t.height<0||"0"===t.height?0:t.height,a="hidden"):y(t.height)&&(i="0%"===t.height?0:t.height,a="hidden"),n.animationStateClasses=o({},f,t.animationStateClasses);var r=n.getStaticStateClasses(i);return"undefined"!=typeof window&&window.matchMedia&&(n.prefersReducedMotion=window.matchMedia("(prefers-reduced-motion)").matches),n.state={animationStateClasses:r,height:i,overflow:a,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,o=this,a=this.props,r=a.height,s=a.onAnimationEnd,u=a.onAnimationStart,f=this.getTimings(),d=f.duration,h=f.delay;if(this.contentElement&&r!==t.height){var b;this.showContent(e.height),this.contentElement.style.overflow="hidden";var v=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var O=d+h,_=null,w={height:null,overflow:"hidden"},S="auto"===e.height;m(r)?(_=r<0||"0"===r?0:r,w.height=_):y(r)?(_="0%"===r?0:r,w.height=_):(_=v,w.height="auto",w.overflow=null),S&&(w.height=_,_=v);var T=(0,l.default)((c(b={},this.animationStateClasses.animating,!0),c(b,this.animationStateClasses.animatingUp,"auto"===t.height||r<t.height),c(b,this.animationStateClasses.animatingDown,"auto"===r||r>t.height),c(b,this.animationStateClasses.animatingToHeightZero,0===w.height),c(b,this.animationStateClasses.animatingToHeightAuto,"auto"===w.height),c(b,this.animationStateClasses.animatingToHeightSpecific,w.height>0),b)),C=this.getStaticStateClasses(w.height);this.setState({animationStateClasses:T,height:_,overflow:"hidden",shouldUseTransitions:!S}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),S?(w.shouldUseTransitions=!0,p(this.animationFrameIDs),this.animationFrameIDs=(n=function(){o.setState(w),g(u,{newHeight:w.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){o.setState({animationStateClasses:C,shouldUseTransitions:!1}),o.hideContent(w.height),g(s,{newHeight:w.height})}),O)):(g(u,{newHeight:_}),this.timeoutID=setTimeout((function(){w.animationStateClasses=C,w.shouldUseTransitions=!1,o.setState(w),"auto"!==r&&o.hideContent(_),g(s,{newHeight:_})}),O))}}},{key:"componentWillUnmount",value:function(){p(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null}},{key:"getTimings",value:function(){if(this.prefersReducedMotion)return{delay:0,duration:0};var t=this.props;return{delay:t.delay,duration:t.duration}}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,l.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,a=n.applyInlineTransitions,s=n.children,u=n.className,f=n.contentClassName,p=n.easing,m=n.id,y=n.style,g=this.state,b=g.height,v=g.overflow,O=g.animationStateClasses,_=g.shouldUseTransitions,w=this.getTimings(),S=w.duration,T=w.delay,C=o({},y,{height:b,overflow:v||y.overflow});_&&a&&(C.transition="height "+S+"ms "+p+" "+T+"ms",y.transition&&(C.transition=y.transition+", "+C.transition),C.WebkitTransition=C.transition);var j={};i&&(j.transition="opacity "+S+"ms "+p+" "+T+"ms",j.WebkitTransition=j.transition,0===b&&(j.opacity=0));var E=(0,l.default)((c(t={},O,!0),c(t,u,u),t)),I="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===b;return r.default.createElement("div",o({},h.apply(void 0,[this.props].concat(d)),{"aria-hidden":I,className:E,id:m,style:C}),r.default.createElement("div",{className:f,style:j,ref:function(t){return e.contentElement=t}},s))}}]),e}(r.default.Component);b.propTypes={"aria-hidden":s.default.bool,animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,delay:s.default.number,duration:s.default.number,easing:s.default.string,height:function(t,e,n){var o=t[e];return"number"==typeof o&&o>=0||y(o)||"auto"===o?null:new TypeError('value "'+o+'" of type "'+("undefined"==typeof o?"undefined":i(o))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:s.default.string,onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:f,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b}}]);