"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[78959],{43255:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(96540)),a=u(n(67967)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=a?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(o,r,i):o[r]=e[r]}return o.default=e,n&&n.set(e,o),o}(n(19137)),i=u(n(914));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function u(e){return e&&e.__esModule?e:{default:e}}var c=a.default.bind(i.default);t.default=function(){return o.default.createElement("div",{className:c("content-wrapper")},o.default.createElement(o.default.Fragment,null,o.default.createElement(r.default,{ariaLabel:"Custom label 1",placeholder:"Select a color",id:"default",defaultValue:"green"},o.default.createElement(r.default.Option,{value:"blue",display:"Blue"}),o.default.createElement(r.default.Option,{value:"green",display:"Green"}),o.default.createElement(r.default.Option,{value:"purple",display:"Purple"}),o.default.createElement(r.default.Option,{value:"red",display:"Red"}),o.default.createElement(r.default.Option,{value:"violet",display:"Violet"})),o.default.createElement("br",null),o.default.createElement(r.SelectField,{label:"Custom label 2",placeholder:"Select a size",selectId:"select-field",defaultValue:"small"},o.default.createElement(r.SelectField.Option,{value:"xSmall",display:"Extra Small"}),o.default.createElement(r.SelectField.Option,{value:"small",display:"Small"}),o.default.createElement(r.SelectField.Option,{value:"medium",display:"Medium"}),o.default.createElement(r.SelectField.Option,{value:"large",display:"Large"}),o.default.createElement(r.SelectField.Option,{value:"xLarge",display:"Extra Large"}))))}},914:function(e,t,n){n.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}},41843:function(e,t){function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function l(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function o(e,t){try{var n=this.props,l=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,l)}finally{this.props=n,this.state=l}}Object.defineProperty(t,"__esModule",{value:!0}),n.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var a=null,r=null,i=null;if("function"==typeof t.componentWillMount?a="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?i="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(i="UNSAFE_componentWillUpdate"),null!==a||null!==r||null!==i){var p=e.displayName||e.name,u="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+p+" uses "+u+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==r?"\n  "+r:"")+(null!==i?"\n  "+i:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=l),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=o;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var l=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,e,t,l)}}return e}}}]);