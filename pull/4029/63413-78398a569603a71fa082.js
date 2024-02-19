"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[63413],{63413:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(r(96540)),a=c(r(67967)),l=c(r(12996)),i=c(r(49605)),u=c(r(6375));function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function s(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:String(t)}function d(e,t,r){return t=v(t),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}(e,y()?Reflect.construct(t,r||[],v(e).constructor):t.apply(e,r))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}var h=a.default.bind(u.default),g=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=d(this,t)).state={show:!1,toggle:"true"},e.handleTriggerOverlay=e.handleTriggerOverlay.bind(b(e)),e.handleTriggerFullScreenOverlay=e.handleTriggerFullScreenOverlay.bind(b(e)),e.handleRandomClick=e.handleRandomClick.bind(b(e)),e}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(t,e),r=t,(n=[{key:"handleTriggerOverlay",value:function(){this.setState({show:!0,relative:!0,id:"terra-Overlay--container"})}},{key:"handleTriggerFullScreenOverlay",value:function(){this.setState({show:!0,relative:!1,id:"terra-Overlay--fullscreen"})}},{key:"handleRandomClick",value:function(){"false"===this.state.toggle?this.setState({toggle:"true"}):this.setState({toggle:"false"})}},{key:"addOverlay",value:function(){var e=this;return o.default.createElement(l.default,{isOpen:this.state.show,isRelativeToContainer:this.state.relative,id:this.state.id},o.default.createElement("h3",null,"Overlay with custom content."),o.default.createElement("button",{type:"button",id:"close_overlay",onClick:function(){e.setState({show:!1})}},"Close Overlay"))}},{key:"render",value:function(){return o.default.createElement("div",{id:"custom-content-example"},o.default.createElement(i.default,{className:h("overlay-container2"),overlay:this.addOverlay()},o.default.createElement("button",{type:"button",id:"trigger_fullscreen",onClick:this.handleTriggerFullScreenOverlay},"Trigger Fullscreen Overlay"),o.default.createElement("button",{type:"button",id:"trigger_container",onClick:this.handleTriggerOverlay},"Trigger Container Overlay")),o.default.createElement("br",null),o.default.createElement("p",null," Outside of overlay container to prove functionality. Click the random button below after clicking the Trigger Container Overlay button to confirm an Overlay relative to container does not block outside interactions. "),o.default.createElement("button",{type:"button",id:"random_button",onClick:this.handleRandomClick},"A Random Button To Change Toggle State "),o.default.createElement("p",null,"Random Button toggle State is"," ",o.default.createElement("span",{id:"random_state"},this.state.toggle)))}}])&&f(r.prototype,n),a&&f(r,a),Object.defineProperty(r,"prototype",{writable:!1}),t}(o.default.Component);t.default=g},6375:function(e,t,r){r.r(t),t.default={"overlay-container1":"OverlayTestCommon-module__overlay-container1___C3+9j","overlay-container2":"OverlayTestCommon-module__overlay-container2___dP6Me"}}}]);