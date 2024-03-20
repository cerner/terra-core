"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[60139],{60139:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(r(96540)),a=c(r(67967)),i=c(r(12996)),l=c(r(49605)),u=c(r(6375));function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function s(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:String(t)}function y(e,t,r){return t=v(t),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(e,d()?Reflect.construct(t,r||[],v(e).constructor):t.apply(e,r))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}var b=a.default.bind(u.default),m=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=y(this,t)).state={show:!1},e.handleTriggerOverlay=e.handleTriggerOverlay.bind(p(e)),e.handleTriggerFullScreenOverlay=e.handleTriggerFullScreenOverlay.bind(p(e)),e.handleOnRequestESC=e.handleOnRequestESC.bind(p(e)),e.forceUpdateForTest=function(){e.forceUpdate()},e}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){document.addEventListener("overlay.forceUpdateForTest",this.forceUpdateForTest)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("overlay.forceUpdateForTest",this.forceUpdateForTest)}},{key:"handleTriggerOverlay",value:function(){this.setState({show:!0,relative:!0,id:"terra-Overlay--container"})}},{key:"handleTriggerFullScreenOverlay",value:function(){this.setState({show:!0,relative:!1,id:"terra-Overlay--fullscreen"})}},{key:"handleOnRequestESC",value:function(){this.setState({show:!1})}},{key:"addOverlay",value:function(){return o.default.createElement(i.default,{isOpen:this.state.show,isRelativeToContainer:this.state.relative,onRequestClose:this.handleOnRequestESC,id:this.state.id,zIndex:"6000"},o.default.createElement("h3",null,"The onRequestClose prop gives the overlay close behaviors."),o.default.createElement("br",null),o.default.createElement("p",null,"Close by clicking inside the overlay or pressing the ESC key."))}},{key:"render",value:function(){return o.default.createElement(l.default,{className:b("overlay-container2"),overlay:this.addOverlay(),id:"test-overlay-container"},o.default.createElement("button",{type:"button",id:"trigger_container",onClick:this.handleTriggerOverlay},"Trigger Container Overlay"),o.default.createElement("button",{type:"button",id:"trigger_fullscreen",onClick:this.handleTriggerFullScreenOverlay},"Trigger Fullscreen Overlay"))}}])&&f(r.prototype,n),a&&f(r,a),Object.defineProperty(r,"prototype",{writable:!1}),t}(o.default.Component);t.default=m},6375:function(e,t,r){r.r(t),t.default={"overlay-container1":"OverlayTestCommon-module__overlay-container1___C3+9j","overlay-container2":"OverlayTestCommon-module__overlay-container2___dP6Me"}}}]);