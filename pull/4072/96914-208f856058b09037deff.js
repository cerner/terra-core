"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[96914],{96914:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n(96540)),a=o(n(27379));function o(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return i.default.createElement(a.default,{id:"animatedToggle",closedButtonText:"Custom Text",isAnimated:!0},i.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"text-input"},"Text input"),i.default.createElement("input",{id:"text-input",type:"text"})),i.default.createElement("br",null),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"select-field",defaultValue:"Option 01"},"Select field"),i.default.createElement("select",{id:"select-field"},i.default.createElement("option",null,"Option 01"),i.default.createElement("option",null,"Option 02"))),i.default.createElement("br",null),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"textarea"},"Textarea"),i.default.createElement("textarea",{id:"textarea",cols:"30",rows:"5",defaultValue:"Textarea text"})),i.default.createElement("br",null),i.default.createElement("div",null,i.default.createElement("button",{type:"button",id:"button"},"button")))}},27379:function(t,e,n){function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=d(n(96540)),o=d(n(5556)),r=d(n(67967)),l=d(n(40890)),s=d(n(62441)),u=d(n(97742)),c=d(n(53248)),f=["buttonAttrs","children","closedButtonText","icon","isAnimated","isIconAnimated","isIconOnly","isInitiallyOpen","onClose","onOpen","openedButtonText"];function d(t){return t&&t.__esModule?t:{default:t}}function h(){return h=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},h.apply(this,arguments)}function p(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,g(i.key),i)}}function g(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,e||"default");if("object"!=i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==i(e)?e:e+""}function y(t,e,n){return e=v(e),function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,b()?Reflect.construct(e,n||[],v(t).constructor):e.apply(t,n))}function b(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(b=function(){return!!t})()}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}var _=r.default.bind(c.default),w={children:o.default.node.isRequired,closedButtonText:o.default.string.isRequired,buttonAttrs:o.default.object,icon:o.default.element,isAnimated:o.default.bool,isIconAnimated:o.default.bool,isIconOnly:o.default.bool,isInitiallyOpen:o.default.bool,onClose:o.default.func,onOpen:o.default.func,openedButtonText:o.default.string},T={isAnimated:!1,isIconAnimated:!1,isIconOnly:!1,isInitiallyOpen:!1,icon:a.default.createElement(s.default,null)},S=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=y(this,e,[t])).state={isOpen:t.isInitiallyOpen},n.handleOnClick=n.handleOnClick.bind(n),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(e,t),n=e,(i=[{key:"handleOnClick",value:function(t){t.preventDefault(),!this.state.isOpen&&this.props.onOpen?this.props.onOpen():this.state.isOpen&&this.props.onClose&&this.props.onClose(),this.setState((function(t){return{isOpen:!t.isOpen}}))}},{key:"render",value:function(){var t=this.props,e=t.buttonAttrs,n=(t.children,t.closedButtonText),i=t.icon,o=(t.isAnimated,t.isIconAnimated),r=t.isIconOnly,s=(t.isInitiallyOpen,t.onClose,t.onOpen,t.openedButtonText),c=p(t,f),d=s||n,m=this.state.isOpen?d:n,g=r?n:m,y=_(["button",{"is-open":this.state.isOpen},{"is-icon-animated":o},c.className]),b=a.default.createElement(l.default,h({},e,{isIconOnly:r,icon:a.default.createElement("span",{className:_("icon")},i),"aria-expanded":this.state.isOpen,text:g,onClick:this.handleOnClick}));return a.default.createElement("div",h({},c,{className:y}),b,a.default.createElement(u.default,{isOpen:this.state.isOpen,isAnimated:this.props.isAnimated},this.props.children))}}])&&m(n.prototype,i),o&&m(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i,o}(a.default.Component);S.propTypes=w,S.defaultProps=T;e.default=S},97742:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n(96540)),a=u(n(5556)),o=u(n(67967)),r=u(n(56650)),l=u(n(76835)),s=["isAnimated","isOpen","children"];function u(t){return t&&t.__esModule?t:{default:t}}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c.apply(this,arguments)}function f(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=o.default.bind(l.default),h={children:a.default.node.isRequired,isAnimated:a.default.bool,isOpen:a.default.bool},p=function(t){var e,n=t.isAnimated,a=t.isOpen,o=t.children,l=f(t,s),u=a?"auto":0;return e=n?i.default.createElement(r.default,{duration:250,height:u,easing:"ease-out"},o):a&&o,i.default.createElement("div",c({},l,{className:d("toggle",l.className),"aria-hidden":!a}),e)};p.propTypes=h,p.defaultProps={isAnimated:!1,isOpen:!1};e.default=p},53248:function(t,e,n){n.r(e),e.default={"toggle-button":"ToggleButton-module__toggle-button___4H4qn",icon:"ToggleButton-module__icon___2J4zE","is-open":"ToggleButton-module__is-open___NWVIB","is-icon-animated":"ToggleButton-module__is-icon-animated___WXEng","button-text":"ToggleButton-module__button-text___IAZwy"}},76835:function(t,e,n){n.r(e),e.default={toggle:"Toggle-module__toggle___7fo88"}},56650:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=u(n(96540)),l=u(n(5556)),s=u(n(46942));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},d=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function h(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var a={},o=Object.keys(t),r=0;r<o.length;r++){var l=o[r];-1===n.indexOf(l)&&(a[l]=t[l])}return a}function p(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function m(t){return!isNaN(parseFloat(t))&&isFinite(t)}function g(t){return"string"==typeof t&&t.search("%")===t.length-1&&m(t.substr(0,t.length-1))}function y(t,e){t&&"function"==typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",o="visible";m(t.height)?(i=t.height<0||"0"===t.height?0:t.height,o="hidden"):g(t.height)&&(i="0%"===t.height?0:t.height,o="hidden"),n.animationStateClasses=a({},f,t.animationStateClasses);var r=n.getStaticStateClasses(i);return"undefined"!=typeof window&&window.matchMedia&&(n.prefersReducedMotion=window.matchMedia("(prefers-reduced-motion)").matches),n.state={animationStateClasses:r,height:i,overflow:o,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,a=this,o=this.props,r=o.height,l=o.onAnimationEnd,u=o.onAnimationStart,f=this.getTimings(),d=f.duration,h=f.delay;if(this.contentElement&&r!==t.height){var b;this.showContent(e.height),this.contentElement.style.overflow="hidden";var v=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var O=d+h,_=null,w={height:null,overflow:"hidden"},T="auto"===e.height;m(r)?(_=r<0||"0"===r?0:r,w.height=_):g(r)?(_="0%"===r?0:r,w.height=_):(_=v,w.height="auto",w.overflow=null),T&&(w.height=_,_=v);var S=(0,s.default)((c(b={},this.animationStateClasses.animating,!0),c(b,this.animationStateClasses.animatingUp,"auto"===t.height||r<t.height),c(b,this.animationStateClasses.animatingDown,"auto"===r||r>t.height),c(b,this.animationStateClasses.animatingToHeightZero,0===w.height),c(b,this.animationStateClasses.animatingToHeightAuto,"auto"===w.height),c(b,this.animationStateClasses.animatingToHeightSpecific,w.height>0),b)),E=this.getStaticStateClasses(w.height);this.setState({animationStateClasses:S,height:_,overflow:"hidden",shouldUseTransitions:!T}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),T?(w.shouldUseTransitions=!0,p(this.animationFrameIDs),this.animationFrameIDs=(n=function(){a.setState(w),y(u,{newHeight:w.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:E,shouldUseTransitions:!1}),a.hideContent(w.height),y(l,{newHeight:w.height})}),O)):(y(u,{newHeight:_}),this.timeoutID=setTimeout((function(){w.animationStateClasses=E,w.shouldUseTransitions=!1,a.setState(w),"auto"!==r&&a.hideContent(_),y(l,{newHeight:_})}),O))}}},{key:"componentWillUnmount",value:function(){p(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null}},{key:"getTimings",value:function(){if(this.prefersReducedMotion)return{delay:0,duration:0};var t=this.props;return{delay:t.delay,duration:t.duration}}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,s.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,o=n.applyInlineTransitions,l=n.children,u=n.className,f=n.contentClassName,p=n.easing,m=n.id,g=n.style,y=this.state,b=y.height,v=y.overflow,O=y.animationStateClasses,_=y.shouldUseTransitions,w=this.getTimings(),T=w.duration,S=w.delay,E=a({},g,{height:b,overflow:v||g.overflow});_&&o&&(E.transition="height "+T+"ms "+p+" "+S+"ms",g.transition&&(E.transition=g.transition+", "+E.transition),E.WebkitTransition=E.transition);var C={};i&&(C.transition="opacity "+T+"ms "+p+" "+S+"ms",C.WebkitTransition=C.transition,0===b&&(C.opacity=0));var j=(0,s.default)((c(t={},O,!0),c(t,u,u),t)),I="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===b;return r.default.createElement("div",a({},h.apply(void 0,[this.props].concat(d)),{"aria-hidden":I,className:j,id:m,style:E}),r.default.createElement("div",{className:f,style:C,ref:function(t){return e.contentElement=t}},l))}}]),e}(r.default.Component);b.propTypes={"aria-hidden":l.default.bool,animateOpacity:l.default.bool,animationStateClasses:l.default.object,applyInlineTransitions:l.default.bool,children:l.default.any.isRequired,className:l.default.string,contentClassName:l.default.string,delay:l.default.number,duration:l.default.number,easing:l.default.string,height:function(t,e,n){var a=t[e];return"number"==typeof a&&a>=0||g(a)||"auto"===a?null:new TypeError('value "'+a+'" of type "'+("undefined"==typeof a?"undefined":i(a))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:l.default.string,onAnimationEnd:l.default.func,onAnimationStart:l.default.func,style:l.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:f,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b}}]);