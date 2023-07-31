(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[76115],{68133:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=l(i(67294)),r=l(i(45697)),h=l(i(94184));function l(t){return t&&t.__esModule?t:{default:t}}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},f=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function m(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];if(!i.length)return t;for(var a={},o=Object.keys(t),s=0;s<o.length;s++){var r=o[s];-1===i.indexOf(r)&&(a[r]=t[r])}return a}function d(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function g(t){return!isNaN(parseFloat(t))&&isFinite(t)}function p(t){return"string"==typeof t&&t.search("%")===t.length-1&&g(t.substr(0,t.length-1))}function y(t,e){t&&"function"==typeof t&&t(e)}var v=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));i.animationFrameIDs=[];var n="auto",o="visible";g(t.height)?(n=t.height<0||"0"===t.height?0:t.height,o="hidden"):p(t.height)&&(n="0%"===t.height?0:t.height,o="hidden"),i.animationStateClasses=a({},c,t.animationStateClasses);var s=i.getStaticStateClasses(n);return"undefined"!=typeof window&&window.matchMedia&&(i.prefersReducedMotion=window.matchMedia("(prefers-reduced-motion)").matches),i.state={animationStateClasses:s,height:n,overflow:o,shouldUseTransitions:!1},i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var i,n,a=this,o=this.props,s=o.height,r=o.onAnimationEnd,l=o.onAnimationStart,c=this.getTimings(),f=c.duration,m=c.delay;if(this.contentElement&&s!==t.height){var v;this.showContent(e.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var S=f+m,w=null,C={height:null,overflow:"hidden"},T="auto"===e.height;g(s)?(w=s<0||"0"===s?0:s,C.height=w):p(s)?(w="0%"===s?0:s,C.height=w):(w=b,C.height="auto",C.overflow=null),T&&(C.height=w,w=b);var E=(0,h.default)((u(v={},this.animationStateClasses.animating,!0),u(v,this.animationStateClasses.animatingUp,"auto"===t.height||s<t.height),u(v,this.animationStateClasses.animatingDown,"auto"===s||s>t.height),u(v,this.animationStateClasses.animatingToHeightZero,0===C.height),u(v,this.animationStateClasses.animatingToHeightAuto,"auto"===C.height),u(v,this.animationStateClasses.animatingToHeightSpecific,C.height>0),v)),k=this.getStaticStateClasses(C.height);this.setState({animationStateClasses:E,height:w,overflow:"hidden",shouldUseTransitions:!T}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),T?(C.shouldUseTransitions=!0,d(this.animationFrameIDs),this.animationFrameIDs=(i=function(){a.setState(C),y(l,{newHeight:C.height})},(n=[])[0]=requestAnimationFrame((function(){n[1]=requestAnimationFrame((function(){i()}))})),n),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:k,shouldUseTransitions:!1}),a.hideContent(C.height),y(r,{newHeight:C.height})}),S)):(y(l,{newHeight:w}),this.timeoutID=setTimeout((function(){C.animationStateClasses=k,C.shouldUseTransitions=!1,a.setState(C),"auto"!==s&&a.hideContent(w),y(r,{newHeight:w})}),S))}}},{key:"componentWillUnmount",value:function(){d(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null}},{key:"getTimings",value:function(){if(this.prefersReducedMotion)return{delay:0,duration:0};var t=this.props;return{delay:t.delay,duration:t.duration}}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,h.default)((u(e={},this.animationStateClasses.static,!0),u(e,this.animationStateClasses.staticHeightZero,0===t),u(e,this.animationStateClasses.staticHeightSpecific,t>0),u(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,i=this.props,n=i.animateOpacity,o=i.applyInlineTransitions,r=i.children,l=i.className,c=i.contentClassName,d=i.easing,g=i.id,p=i.style,y=this.state,v=y.height,b=y.overflow,S=y.animationStateClasses,w=y.shouldUseTransitions,C=this.getTimings(),T=C.duration,E=C.delay,k=a({},p,{height:v,overflow:b||p.overflow});w&&o&&(k.transition="height "+T+"ms "+d+" "+E+"ms",p.transition&&(k.transition=p.transition+", "+k.transition),k.WebkitTransition=k.transition);var O={};n&&(O.transition="opacity "+T+"ms "+d+" "+E+"ms",O.WebkitTransition=O.transition,0===v&&(O.opacity=0));var H=(0,h.default)((u(t={},S,!0),u(t,l,l),t)),D="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===v;return s.default.createElement("div",a({},m.apply(void 0,[this.props].concat(f)),{"aria-hidden":D,className:H,id:g,style:k}),s.default.createElement("div",{className:c,style:O,ref:function(t){return e.contentElement=t}},r))}}]),e}(s.default.Component);v.propTypes={"aria-hidden":r.default.bool,animateOpacity:r.default.bool,animationStateClasses:r.default.object,applyInlineTransitions:r.default.bool,children:r.default.any.isRequired,className:r.default.string,contentClassName:r.default.string,delay:r.default.number,duration:r.default.number,easing:r.default.string,height:function(t,e,i){var a=t[e];return"number"==typeof a&&a>=0||p(a)||"auto"===a?null:new TypeError('value "'+a+'" of type "'+("undefined"==typeof a?"undefined":n(a))+'" is invalid type for '+e+" in "+i+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:r.default.string,onAnimationEnd:r.default.func,onAnimationStart:r.default.func,style:r.default.object},v.defaultProps={animateOpacity:!1,animationStateClasses:c,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=v},55877:function(t,e,i){var n=i(23570),a=i(71171),o=a;o.v1=n,o.v4=a,t.exports=o},23570:function(t,e,i){var n,a,o=i(85217),s=i(45327),r=0,h=0;t.exports=function(t,e,i){var l=e&&i||0,u=e||[],c=(t=t||{}).node||n,f=void 0!==t.clockseq?t.clockseq:a;if(null==c||null==f){var m=o();null==c&&(c=n=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==f&&(f=a=16383&(m[6]<<8|m[7]))}var d=void 0!==t.msecs?t.msecs:(new Date).getTime(),g=void 0!==t.nsecs?t.nsecs:h+1,p=d-r+(g-h)/1e4;if(p<0&&void 0===t.clockseq&&(f=f+1&16383),(p<0||d>r)&&void 0===t.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");r=d,h=g,a=f;var y=(1e4*(268435455&(d+=122192928e5))+g)%4294967296;u[l++]=y>>>24&255,u[l++]=y>>>16&255,u[l++]=y>>>8&255,u[l++]=255&y;var v=d/4294967296*1e4&268435455;u[l++]=v>>>8&255,u[l++]=255&v,u[l++]=v>>>24&15|16,u[l++]=v>>>16&255,u[l++]=f>>>8|128,u[l++]=255&f;for(var b=0;b<6;++b)u[l+b]=c[b];return e||s(u)}}}]);