"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[5968,3665],{22863:function(t,e,n){var i=n(64836);e.Z=void 0;var a=i(n(67294)),o=i(n(45697)),s=i(n(19845)),r=i(n(17422)),l=s.default.bind(r.default),u={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},h=function(t){var e=t.src,n=t.name,i=t.url,o=t.version,s=a.default.createElement("a",{className:l("badge"),href:i||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},a.default.createElement("span",{className:l("badge-name")},i?"package":"npm"),a.default.createElement("span",{className:l("badge-version")},"v".concat(o))),r=e?a.default.createElement("a",{className:l("badge"),href:e},a.default.createElement("span",{className:l("badge-name")},"github"),a.default.createElement("span",{className:l("badge-version")},"source")):void 0;return a.default.createElement("div",{className:l("badge-container")},s,r)};h.propTypes=u;e.Z=h},17422:function(t,e,n){n.r(e),e.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},68133:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=u(n(67294)),r=u(n(45697)),l=u(n(93967));function u(t){return t&&t.__esModule?t:{default:t}}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},d=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function m(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var a={},o=Object.keys(t),s=0;s<o.length;s++){var r=o[s];-1===n.indexOf(r)&&(a[r]=t[r])}return a}function f(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function g(t){return!isNaN(parseFloat(t))&&isFinite(t)}function p(t){return"string"==typeof t&&t.search("%")===t.length-1&&g(t.substr(0,t.length-1))}function y(t,e){t&&"function"==typeof t&&t(e)}var v=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",o="visible";g(t.height)?(i=t.height<0||"0"===t.height?0:t.height,o="hidden"):p(t.height)&&(i="0%"===t.height?0:t.height,o="hidden"),n.animationStateClasses=a({},c,t.animationStateClasses);var s=n.getStaticStateClasses(i);return"undefined"!=typeof window&&window.matchMedia&&(n.prefersReducedMotion=window.matchMedia("(prefers-reduced-motion)").matches),n.state={animationStateClasses:s,height:i,overflow:o,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,a=this,o=this.props,s=o.height,r=o.onAnimationEnd,u=o.onAnimationStart,c=this.getTimings(),d=c.duration,m=c.delay;if(this.contentElement&&s!==t.height){var v;this.showContent(e.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var S=d+m,w=null,C={height:null,overflow:"hidden"},T="auto"===e.height;g(s)?(w=s<0||"0"===s?0:s,C.height=w):p(s)?(w="0%"===s?0:s,C.height=w):(w=b,C.height="auto",C.overflow=null),T&&(C.height=w,w=b);var _=(0,l.default)((h(v={},this.animationStateClasses.animating,!0),h(v,this.animationStateClasses.animatingUp,"auto"===t.height||s<t.height),h(v,this.animationStateClasses.animatingDown,"auto"===s||s>t.height),h(v,this.animationStateClasses.animatingToHeightZero,0===C.height),h(v,this.animationStateClasses.animatingToHeightAuto,"auto"===C.height),h(v,this.animationStateClasses.animatingToHeightSpecific,C.height>0),v)),E=this.getStaticStateClasses(C.height);this.setState({animationStateClasses:_,height:w,overflow:"hidden",shouldUseTransitions:!T}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),T?(C.shouldUseTransitions=!0,f(this.animationFrameIDs),this.animationFrameIDs=(n=function(){a.setState(C),y(u,{newHeight:C.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:E,shouldUseTransitions:!1}),a.hideContent(C.height),y(r,{newHeight:C.height})}),S)):(y(u,{newHeight:w}),this.timeoutID=setTimeout((function(){C.animationStateClasses=E,C.shouldUseTransitions=!1,a.setState(C),"auto"!==s&&a.hideContent(w),y(r,{newHeight:w})}),S))}}},{key:"componentWillUnmount",value:function(){f(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null}},{key:"getTimings",value:function(){if(this.prefersReducedMotion)return{delay:0,duration:0};var t=this.props;return{delay:t.delay,duration:t.duration}}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,l.default)((h(e={},this.animationStateClasses.static,!0),h(e,this.animationStateClasses.staticHeightZero,0===t),h(e,this.animationStateClasses.staticHeightSpecific,t>0),h(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,o=n.applyInlineTransitions,r=n.children,u=n.className,c=n.contentClassName,f=n.easing,g=n.id,p=n.style,y=this.state,v=y.height,b=y.overflow,S=y.animationStateClasses,w=y.shouldUseTransitions,C=this.getTimings(),T=C.duration,_=C.delay,E=a({},p,{height:v,overflow:b||p.overflow});w&&o&&(E.transition="height "+T+"ms "+f+" "+_+"ms",p.transition&&(E.transition=p.transition+", "+E.transition),E.WebkitTransition=E.transition);var k={};i&&(k.transition="opacity "+T+"ms "+f+" "+_+"ms",k.WebkitTransition=k.transition,0===v&&(k.opacity=0));var O=(0,l.default)((h(t={},S,!0),h(t,u,u),t)),H="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===v;return s.default.createElement("div",a({},m.apply(void 0,[this.props].concat(d)),{"aria-hidden":H,className:O,id:g,style:E}),s.default.createElement("div",{className:c,style:k,ref:function(t){return e.contentElement=t}},r))}}]),e}(s.default.Component);v.propTypes={"aria-hidden":r.default.bool,animateOpacity:r.default.bool,animationStateClasses:r.default.object,applyInlineTransitions:r.default.bool,children:r.default.any.isRequired,className:r.default.string,contentClassName:r.default.string,delay:r.default.number,duration:r.default.number,easing:r.default.string,height:function(t,e,n){var a=t[e];return"number"==typeof a&&a>=0||p(a)||"auto"===a?null:new TypeError('value "'+a+'" of type "'+("undefined"==typeof a?"undefined":i(a))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:r.default.string,onAnimationEnd:r.default.func,onAnimationStart:r.default.func,style:r.default.object},v.defaultProps={animateOpacity:!1,animationStateClasses:c,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=v}}]);