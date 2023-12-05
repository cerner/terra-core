"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[15463],{15463:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(n(67294)),l=p(n(45697)),a=p(n(47166)),c=p(n(20575)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var c=l?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(o,a,c):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}(n(1893)),i=n(15560),s=p(n(8815)),f=p(n(43769));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function p(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function h(e,t,n){return t&&y(e.prototype,t),n&&y(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function b(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=w(e);if(t){var l=w(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}(this,n)}}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var O=a.default.bind(f.default),_=function(e){v(n,e);var t=E(n);function n(e){var r;return m(this,n),(r=t.call(this,e)).checkLockState=r.checkLockState.bind(k(r)),r.state={text:void 0},r}return h(n,[{key:"componentDidMount",value:function(){var e=this.context;e&&e.registerDismissCheck&&e.registerDismissCheck(this.checkLockState)}},{key:"checkLockState",value:function(){var e=this;return this.state.text&&this.state.text.length?new Promise((function(t,n){confirm("".concat(e.props.name," has unsaved changes that will be lost. Do you wish to continue?"))?t():n()})):Promise.resolve()}},{key:"render",value:function(){var e=this.props,t=e.name,r=e.disclosureType,l=this.context;return o.default.createElement(c.default,{fill:!0},o.default.createElement(i.DisclosureManagerHeaderAdapter,{title:t}),o.default.createElement("div",{className:O("content-wrapper")},o.default.createElement("h3",null,t),o.default.createElement("p",null,"The disclosed component can disclose content within the same modal."),o.default.createElement("p",null,"It can also render a header (like above) that implements the various DisclosureManager control functions."),o.default.createElement("div",null,o.default.createElement(u.default,{role:"listbox",dividerStyle:"standard",ariaDescribedBy:"list-help","aria-label":"list of patient",isDraggable:!0},o.default.createElement(u.Item,{key:"1",isSelectable:!0,isSelected:!0},o.default.createElement("p",null,"Cardiology")),o.default.createElement(u.Item,{key:"2",isSelectable:!0},o.default.createElement("p",null,"Radiology")),o.default.createElement(u.Item,{key:"3",isSelectable:!0},o.default.createElement("p",null,"Psychology")),o.default.createElement(u.Item,{key:"4",isSelectable:!0},o.default.createElement("p",null,"Nothing")))),o.default.createElement("button",{type:"button",onClick:function(){l.dismiss().catch((function(){console.log("Dismiss failed. A lock must be in place.")}))}},"Dismiss"),o.default.createElement("button",{type:"button",onClick:function(){l.disclose({preferredType:r,size:"small",content:{key:"Nested ".concat(t),component:o.default.createElement(n,{name:"Nested ".concat(t),disclosureType:r})}})}},"Disclose Again"),o.default.createElement("br",null),o.default.createElement("br",null)))}}]),n}(o.default.Component);_.contextType=i.DisclosureManagerContext,_.propTypes={name:l.default.string,disclosureType:l.default.string},_.defaultProps={name:"Disclosure Component"};var D=function(e){v(n,e);var t=E(n);function n(e){var r;return m(this,n),(r=t.call(this,e)).renderButton=r.renderButton.bind(k(r)),r.handleSelectChange=r.handleSelectChange.bind(k(r)),r.getId=r.getId.bind(k(r)),r.state={id:"dimensions"},r}return h(n,[{key:"handleSelectChange",value:function(e){var t,n,r;this.setState((t={},n=e.target.name,r=e.target.value,(n=b(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))}},{key:"getId",value:function(e){return e+this.state.id}},{key:"renderButton",value:function(e){var t=this.props.disclosureType,n=this.context;return o.default.createElement("button",{type:"button",id:e,onClick:function(){n.disclose({preferredType:t,size:e,content:{key:"Content-Disclosure-".concat(e),component:o.default.createElement(_,{name:"Disclosure Component",disclosureType:t})}})}},"Disclose (".concat(e,")"))}},{key:"render",value:function(){return o.default.createElement(c.default,{header:o.default.createElement("h2",{className:O("header")},"Content Component")},o.default.createElement("div",{className:O("content-wrapper")},this.renderButton("default"),this.renderButton("tiny"),this.renderButton("small"),this.renderButton("medium"),this.renderButton("large"),this.renderButton("huge"),this.renderButton("fullscreen"),o.default.createElement("br",null),o.default.createElement("p",null,"The child components can disclose content in the modal at various sizes.")))}}]),n}(o.default.Component);D.contextType=i.DisclosureManagerContext,D.propTypes={disclosureType:l.default.string};var S=function(e){var t=e.showDisclosureAccessory;return o.default.createElement("div",{className:O("example-wrapper")},o.default.createElement(s.default,{disclosureAccessory:t?o.default.createElement("div",{className:O("disclosure-accessory")},"Disclosure Accessory"):void 0},o.default.createElement(D,{disclosureType:"modal"})))};S.propTypes={showDisclosureAccessory:l.default.bool};t.default=S},43769:function(e,t,n){n.r(t),t.default={"draggable-list":"DraggableListItem-module__draggable-list___UtHL5"}}}]);