(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[6246],{6246:function(t,e,n){t.exports=function(){"use strict";var t=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),e="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,r="undefined"!=typeof n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),i="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(r):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},o=2;function s(t,e){var n=!1,r=!1,s=0;function c(){n&&(n=!1,t()),r&&h()}function a(){i(c)}function h(){var t=Date.now();if(n){if(t-s<o)return;r=!0}else n=!0,r=!1,setTimeout(a,e);s=t}return h}var c=20,a=["top","right","bottom","left","width","height","size","weight"],h="undefined"!=typeof MutationObserver,u=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=s(this.refresh.bind(this),c)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){e&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),h?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){e&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;a.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),f=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},d=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||r},p=O(0,0,0,0);function v(t){return parseFloat(t)||0}function _(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+v(t["border-"+n+"-width"])}),0)}function l(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=v(o)}return e}function b(t){var e=t.getBBox();return O(0,0,e.width,e.height)}function m(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return p;var r=d(t).getComputedStyle(t),i=l(r),o=i.left+i.right,s=i.top+i.bottom,c=v(r.width),a=v(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=_(r,"left","right")+o),Math.round(a+s)!==n&&(a-=_(r,"top","bottom")+s)),!w(t)){var h=Math.round(c+o)-e,u=Math.round(a+s)-n;1!==Math.abs(h)&&(c-=h),1!==Math.abs(u)&&(a-=u)}return O(i.left,i.top,c,a)}var y="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof d(t).SVGGraphicsElement}:function(t){return t instanceof d(t).SVGElement&&"function"==typeof t.getBBox};function w(t){return t===d(t).document.documentElement}function g(t){return e?y(t)?b(t):m(t):p}function E(t){var e=t.x,n=t.y,r=t.width,i=t.height,o="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return f(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}function O(t,e,n,r){return{x:t,y:e,width:n,height:r}}var M=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=O(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=g(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),A=function(){function t(t,e){var n=E(e);f(this,{target:t,contentRect:n})}return t}(),T=function(){function e(e,n,r){if(this.activeObservations_=[],this.observations_=new t,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new M(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new A(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),x="undefined"!=typeof WeakMap?new WeakMap:new t,k=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),r=new T(e,n,this);x.set(this,r)}return t}();return["observe","unobserve","disconnect"].forEach((function(t){k.prototype[t]=function(){var e;return(e=x.get(this))[t].apply(e,arguments)}})),"undefined"!=typeof r.ResizeObserver?r.ResizeObserver:k}()}}]);