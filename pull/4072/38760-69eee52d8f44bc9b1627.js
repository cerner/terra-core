"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[38760],{92172:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(96540)),l=i(n(67967)),a=i(n(19137)),r=i(n(914));function i(e){return e&&e.__esModule?e:{default:e}}var p=l.default.bind(r.default);t.default=function(){return o.default.createElement("div",{className:p("content-wrapper")},o.default.createElement(a.default,{required:!0,isIncomplete:!0,placeholder:"Select a color",id:"default"},o.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),o.default.createElement(a.default.Option,{value:"green",display:"Green"}),o.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),o.default.createElement(a.default.Option,{value:"red",display:"Red"}),o.default.createElement(a.default.Option,{value:"violet",display:"Violet"})))}},914:function(e,t,n){n.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}},41843:function(e,t){function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function l(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}Object.defineProperty(t,"__esModule",{value:!0}),n.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var a=null,r=null,i=null;if("function"==typeof t.componentWillMount?a="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?i="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(i="UNSAFE_componentWillUpdate"),null!==a||null!==r||null!==i){var p=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+p+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==r?"\n  "+r:"")+(null!==i?"\n  "+i:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=o),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=l;var s=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;s.call(this,e,t,o)}}return e}}}]);