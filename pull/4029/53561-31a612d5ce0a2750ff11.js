"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[53561],{32348:function(t,e,n){function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,o=(a=n(67294))&&a.__esModule?a:{default:a},r=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=i(t)&&"function"!=typeof t)return{default:t};var n=s(e);if(n&&n.has(t))return n.get(t);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if("default"!==r&&Object.prototype.hasOwnProperty.call(t,r)){var u=o?Object.getOwnPropertyDescriptor(t,r):null;u&&(u.get||u.set)?Object.defineProperty(a,r,u):a[r]=t[r]}return a.default=t,n&&n.set(t,a),a}(n(54728));function s(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(s=function(t){return t?n:e})(t)}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,l(i.key),i)}}function l(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,e||"default");if("object"!=i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==i(e)?e:String(e)}function c(t,e,n){return e=h(e),function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return m(t)}(t,f()?Reflect.construct(e,n||[],h(t).constructor):e.apply(t,n))}function f(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(f=function(){return!!t})()}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}var d="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ante, porta sit amet sem vitae, pellentesque pharetra ex. Etiam odio purus, maximus eget mauris in, pulvinar euismod neque. Curabitur eu vulputate leo. Etiam tincidunt lectus ut metus interdum, sit amet porttitor le",g=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=c(this,e,[t])).state={isOpen:!1},n.toggleShowHide=n.toggleShowHide.bind(m(n)),n.focusRef=o.default.createRef(),n}var n,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(e,t),n=e,(i=[{key:"toggleShowHide",value:function(){this.setState((function(t){return{isOpen:!t.isOpen}}))}},{key:"render",value:function(){return o.default.createElement(r.default,{focusRef:this.focusRef,preview:o.default.createElement("p",null,d),isOpen:this.state.isOpen,onChange:this.toggleShowHide,buttonText:"Show Section Label that is way too long and has to wrap to multiple lines Show Section Label that is way too long and has to wrap to multiple lines"},o.default.createElement("p",null,o.default.createElement(r.ShowHideFocuser,{ref:this.focusRef,prefix:d,focusableText:"o ornare. Sed tincidunt rutrum odio, dignissim rhoncus nulla finibus et. Mauris mollis posuere dolor dignissim vulputate. Sed accumsan dignissim mi id pulvinar. Vivamus sapien nibh, dignissim id semper non, consectetur et felis. Duis mattis odio tortor, eu mattis lectus lobortis mattis. Ut sit amet risus pellentesque, imperdiet mi eu, sodales massa. Aenean quis lacus rutrum, lobortis urna vel, congue est. Vivamus viverra efficitur viverra. Integer sit amet metus dolor. Nullam imperdiet vehicula tincidunt. Duis consequat congue magna, eu imperdiet magna venenatis et. Quisque eget vulputate massa. Donec vel diam vel nulla gravida blandit sit amet sed quam. Donec sed feugiat magna, eget consequat mi. Ut quis arcu non libero tempus semper nec in sem. Nunc in quam leo. Donec risus eros, dapibus ut nisi vitae, ullamcorper faucibus nisl. Suspendisse finibus urna vel mi sodales, a pharetra nisl convallis. Phasellus sed turpis non ipsum scelerisque pellentesque at cursus lectus. Nunc ut velit nec odio ultrices sodales."})))}}])&&u(n.prototype,i),a&&u(n,a),Object.defineProperty(n,"prototype",{writable:!1}),e}(o.default.Component);e.default=g},68133:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=l(n(67294)),s=l(n(45697)),u=l(n(93967));function l(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},h=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function m(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var a={},o=Object.keys(t),r=0;r<o.length;r++){var s=o[r];-1===n.indexOf(s)&&(a[s]=t[s])}return a}function p(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function d(t){return!isNaN(parseFloat(t))&&isFinite(t)}function g(t){return"string"==typeof t&&t.search("%")===t.length-1&&d(t.substr(0,t.length-1))}function y(t,e){t&&"function"==typeof t&&t(e)}var v=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",o="visible";d(t.height)?(i=t.height<0||"0"===t.height?0:t.height,o="hidden"):g(t.height)&&(i="0%"===t.height?0:t.height,o="hidden"),n.animationStateClasses=a({},f,t.animationStateClasses);var r=n.getStaticStateClasses(i);return"undefined"!=typeof window&&window.matchMedia&&(n.prefersReducedMotion=window.matchMedia("(prefers-reduced-motion)").matches),n.state={animationStateClasses:r,height:i,overflow:o,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,a=this,o=this.props,r=o.height,s=o.onAnimationEnd,l=o.onAnimationStart,f=this.getTimings(),h=f.duration,m=f.delay;if(this.contentElement&&r!==t.height){var v;this.showContent(e.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var w=h+m,S=null,O={height:null,overflow:"hidden"},C="auto"===e.height;d(r)?(S=r<0||"0"===r?0:r,O.height=S):g(r)?(S="0%"===r?0:r,O.height=S):(S=b,O.height="auto",O.overflow=null),C&&(O.height=S,S=b);var T=(0,u.default)((c(v={},this.animationStateClasses.animating,!0),c(v,this.animationStateClasses.animatingUp,"auto"===t.height||r<t.height),c(v,this.animationStateClasses.animatingDown,"auto"===r||r>t.height),c(v,this.animationStateClasses.animatingToHeightZero,0===O.height),c(v,this.animationStateClasses.animatingToHeightAuto,"auto"===O.height),c(v,this.animationStateClasses.animatingToHeightSpecific,O.height>0),v)),j=this.getStaticStateClasses(O.height);this.setState({animationStateClasses:T,height:S,overflow:"hidden",shouldUseTransitions:!C}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),C?(O.shouldUseTransitions=!0,p(this.animationFrameIDs),this.animationFrameIDs=(n=function(){a.setState(O),y(l,{newHeight:O.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:j,shouldUseTransitions:!1}),a.hideContent(O.height),y(s,{newHeight:O.height})}),w)):(y(l,{newHeight:S}),this.timeoutID=setTimeout((function(){O.animationStateClasses=j,O.shouldUseTransitions=!1,a.setState(O),"auto"!==r&&a.hideContent(S),y(s,{newHeight:S})}),w))}}},{key:"componentWillUnmount",value:function(){p(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null}},{key:"getTimings",value:function(){if(this.prefersReducedMotion)return{delay:0,duration:0};var t=this.props;return{delay:t.delay,duration:t.duration}}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,u.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,o=n.applyInlineTransitions,s=n.children,l=n.className,f=n.contentClassName,p=n.easing,d=n.id,g=n.style,y=this.state,v=y.height,b=y.overflow,w=y.animationStateClasses,S=y.shouldUseTransitions,O=this.getTimings(),C=O.duration,T=O.delay,j=a({},g,{height:v,overflow:b||g.overflow});S&&o&&(j.transition="height "+C+"ms "+p+" "+T+"ms",g.transition&&(j.transition=g.transition+", "+j.transition),j.WebkitTransition=j.transition);var _={};i&&(_.transition="opacity "+C+"ms "+p+" "+T+"ms",_.WebkitTransition=_.transition,0===v&&(_.opacity=0));var E=(0,u.default)((c(t={},w,!0),c(t,l,l),t)),P="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===v;return r.default.createElement("div",a({},m.apply(void 0,[this.props].concat(h)),{"aria-hidden":P,className:E,id:d,style:j}),r.default.createElement("div",{className:f,style:_,ref:function(t){return e.contentElement=t}},s))}}]),e}(r.default.Component);v.propTypes={"aria-hidden":s.default.bool,animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,delay:s.default.number,duration:s.default.number,easing:s.default.string,height:function(t,e,n){var a=t[e];return"number"==typeof a&&a>=0||g(a)||"auto"===a?null:new TypeError('value "'+a+'" of type "'+("undefined"==typeof a?"undefined":i(a))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:s.default.string,onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},v.defaultProps={animateOpacity:!1,animationStateClasses:f,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=v}}]);