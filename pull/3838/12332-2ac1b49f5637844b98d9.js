"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[12332],{81533:function(t,e,i){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(i(67294)),o=r(i(63802));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,(o=a.key,r=void 0,r=function(t,e){if("object"!==n(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var a=i.call(t,e||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===n(r)?r:String(r)),a)}var o,r}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=f(t);if(e){var o=f(this).constructor;i=Reflect.construct(a,arguments,o)}else i=a.apply(this,arguments);return function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return c(t)}(this,i)}}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}var h="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ante, porta sit amet sem vitae, pellentesque pharetra ex. Etiam odio purus, maximus eget mauris in, pulvinar euismod neque. Curabitur eu vulputate leo. Etiam tincidunt lectus ut metus interdum, sit amet porttitor le",m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(f,t);var e,i,n,r=l(f);function f(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(e=r.call(this,t)).state={isOpen:!1},e.toggleShowHide=e.toggleShowHide.bind(c(e)),e.focusRef=a.default.createRef(),e}return e=f,(i=[{key:"toggleShowHide",value:function(){this.setState((function(t){return{isOpen:!t.isOpen}}))}},{key:"render",value:function(){return a.default.createElement(o.default,{focusRef:this.focusRef,isOpen:this.state.isOpen,preview:a.default.createElement("p",null,h),onChange:this.toggleShowHide},a.default.createElement("p",null,h,a.default.createElement("span",{id:"focusRef",ref:this.focusRef},"o ornare. Sed tincidunt rutrum odio, dignissim rhoncus nulla finibus et. Mauris mollis posuere dolor dignissim vulputate. Sed accumsan dignissim mi id pulvinar. Vivamus sapien nibh, dignissim id semper non, consectetur et felis. Duis mattis odio tortor, eu mattis lectus lobortis mattis. Ut sit amet risus pellentesque, imperdiet mi eu, sodales massa. Aenean quis lacus rutrum, lobortis urna vel, congue est. Vivamus viverra efficitur viverra. Integer sit amet metus dolor. Nullam imperdiet vehicula tincidunt. Duis consequat congue magna, eu imperdiet magna venenatis et. Quisque eget vulputate massa. Donec vel diam vel nulla gravida blandit sit amet sed quam. Donec sed feugiat magna, eget consequat mi. Ut quis arcu non libero tempus semper nec in sem. Nunc in quam leo. Donec risus eros, dapibus ut nisi vitae, ullamcorper faucibus nisl. Suspendisse finibus urna vel mi sodales, a pharetra nisl convallis. Phasellus sed turpis non ipsum scelerisque pellentesque at cursus lectus. Nunc ut velit nec odio ultrices sodales.")))}}])&&s(e.prototype,i),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),f}(a.default.Component);e.default=m},68133:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=l(i(67294)),s=l(i(45697)),u=l(i(94184));function l(t){return t&&t.__esModule?t:{default:t}}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var f={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},h=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function m(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];if(!i.length)return t;for(var a={},o=Object.keys(t),r=0;r<o.length;r++){var s=o[r];-1===i.indexOf(s)&&(a[s]=t[s])}return a}function d(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function p(t){return!isNaN(parseFloat(t))&&isFinite(t)}function g(t){return"string"==typeof t&&t.search("%")===t.length-1&&p(t.substr(0,t.length-1))}function y(t,e){t&&"function"==typeof t&&t(e)}var v=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));i.animationFrameIDs=[];var n="auto",o="visible";p(t.height)?(n=t.height<0||"0"===t.height?0:t.height,o="hidden"):g(t.height)&&(n="0%"===t.height?0:t.height,o="hidden"),i.animationStateClasses=a({},f,t.animationStateClasses);var r=i.getStaticStateClasses(n);return"undefined"!=typeof window&&window.matchMedia&&(i.prefersReducedMotion=window.matchMedia("(prefers-reduced-motion)").matches),i.state={animationStateClasses:r,height:n,overflow:o,shouldUseTransitions:!1},i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var i,n,a=this,o=this.props,r=o.height,s=o.onAnimationEnd,l=o.onAnimationStart,f=this.getTimings(),h=f.duration,m=f.delay;if(this.contentElement&&r!==t.height){var v;this.showContent(e.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var S=h+m,w=null,C={height:null,overflow:"hidden"},O="auto"===e.height;p(r)?(w=r<0||"0"===r?0:r,C.height=w):g(r)?(w="0%"===r?0:r,C.height=w):(w=b,C.height="auto",C.overflow=null),O&&(C.height=w,w=b);var T=(0,u.default)((c(v={},this.animationStateClasses.animating,!0),c(v,this.animationStateClasses.animatingUp,"auto"===t.height||r<t.height),c(v,this.animationStateClasses.animatingDown,"auto"===r||r>t.height),c(v,this.animationStateClasses.animatingToHeightZero,0===C.height),c(v,this.animationStateClasses.animatingToHeightAuto,"auto"===C.height),c(v,this.animationStateClasses.animatingToHeightSpecific,C.height>0),v)),E=this.getStaticStateClasses(C.height);this.setState({animationStateClasses:T,height:w,overflow:"hidden",shouldUseTransitions:!O}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),O?(C.shouldUseTransitions=!0,d(this.animationFrameIDs),this.animationFrameIDs=(i=function(){a.setState(C),y(l,{newHeight:C.height})},(n=[])[0]=requestAnimationFrame((function(){n[1]=requestAnimationFrame((function(){i()}))})),n),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:E,shouldUseTransitions:!1}),a.hideContent(C.height),y(s,{newHeight:C.height})}),S)):(y(l,{newHeight:w}),this.timeoutID=setTimeout((function(){C.animationStateClasses=E,C.shouldUseTransitions=!1,a.setState(C),"auto"!==r&&a.hideContent(w),y(s,{newHeight:w})}),S))}}},{key:"componentWillUnmount",value:function(){d(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null}},{key:"getTimings",value:function(){if(this.prefersReducedMotion)return{delay:0,duration:0};var t=this.props;return{delay:t.delay,duration:t.duration}}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,u.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,i=this.props,n=i.animateOpacity,o=i.applyInlineTransitions,s=i.children,l=i.className,f=i.contentClassName,d=i.easing,p=i.id,g=i.style,y=this.state,v=y.height,b=y.overflow,S=y.animationStateClasses,w=y.shouldUseTransitions,C=this.getTimings(),O=C.duration,T=C.delay,E=a({},g,{height:v,overflow:b||g.overflow});w&&o&&(E.transition="height "+O+"ms "+d+" "+T+"ms",g.transition&&(E.transition=g.transition+", "+E.transition),E.WebkitTransition=E.transition);var j={};n&&(j.transition="opacity "+O+"ms "+d+" "+T+"ms",j.WebkitTransition=j.transition,0===v&&(j.opacity=0));var _=(0,u.default)((c(t={},S,!0),c(t,l,l),t)),D="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===v;return r.default.createElement("div",a({},m.apply(void 0,[this.props].concat(h)),{"aria-hidden":D,className:_,id:p,style:E}),r.default.createElement("div",{className:f,style:j,ref:function(t){return e.contentElement=t}},s))}}]),e}(r.default.Component);v.propTypes={"aria-hidden":s.default.bool,animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,delay:s.default.number,duration:s.default.number,easing:s.default.string,height:function(t,e,i){var a=t[e];return"number"==typeof a&&a>=0||g(a)||"auto"===a?null:new TypeError('value "'+a+'" of type "'+("undefined"==typeof a?"undefined":n(a))+'" is invalid type for '+e+" in "+i+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:s.default.string,onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},v.defaultProps={animateOpacity:!1,animationStateClasses:f,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=v}}]);