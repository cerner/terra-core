"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[7484],{69832:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),l=i(n(47166)),a=i(n(47319)),u=i(n(33548));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(l=r.key,a=void 0,a=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(l,"string"),"symbol"===o(a)?a:String(a)),r)}var l,a}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var l=s(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}(this,n)}}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var v=l.default.bind(u.default),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,o,l=p(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=l.call(this)).state={value:"blue"},e.handleChange=e.handleChange.bind(d(e)),e}return t=u,(n=[{key:"handleChange",value:function(e){this.setState({value:e})}},{key:"render",value:function(){return r.default.createElement("div",{className:v("content-wrapper")},r.default.createElement(a.default,{placeholder:"Select a color",required:!0,onChange:this.handleChange,id:"default",value:this.state.value},r.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),r.default.createElement(a.default.Option,{value:"green",display:"Green"}),r.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),r.default.createElement(a.default.Option,{value:"red",display:"Red"}),r.default.createElement(a.default.Option,{value:"violet",display:"Violet"})))}}])&&c(t.prototype,n),o&&c(t,o),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.default.Component);t.default=y},47319:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=S(n(67294)),r=S(n(45697)),l=S(n(54052)),a=S(n(4626)),u=S(n(97574)),i=S(n(74854)),c=S(n(28998)),f=S(n(88220)),p=S(n(67405)),d=S(n(1358)),s=["variant"],v=["maxSelectionCount"],y=["allowClear"],h=["maxSelectionCount"],m=["noResultContent","allowClear"],b=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function S(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g={allowClear:r.default.bool,children:r.default.node,defaultValue:r.default.oneOfType([r.default.string,r.default.number,r.default.array]),disabled:r.default.bool,dropdownAttrs:r.default.object,isIncomplete:r.default.bool,isInvalid:r.default.bool,isTouchAccessible:r.default.bool,maxHeight:r.default.number,maxSelectionCount:r.default.number,noResultContent:r.default.node,onBlur:r.default.func,onChange:r.default.func,onClick:r.default.func,onDeselect:r.default.func,onFocus:r.default.func,onSearch:r.default.func,onSelect:r.default.func,optionFilter:r.default.func,placeholder:r.default.string,required:r.default.bool,value:r.default.oneOfType([r.default.string,r.default.number,r.default.array]),variant:r.default.oneOf([l.default.COMBOBOX,l.default.DEFAULT,l.default.MULTIPLE,l.default.SEARCH,l.default.TAG])},O={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function w(e){var t=e.variant,n=_(e,s);switch(t){case l.default.COMBOBOX:n.maxSelectionCount;var r=_(n,v);return o.default.createElement(i.default,r);case l.default.MULTIPLE:n.allowClear;var a=_(n,y);return o.default.createElement(f.default,a);case l.default.SEARCH:n.maxSelectionCount;var u=_(n,h);return o.default.createElement(p.default,u);case l.default.TAG:n.noResultContent,n.allowClear;var S=_(n,m);return o.default.createElement(d.default,S);case l.default.DEFAULT:default:n.isTouchAccessible,n.maxSelectionCount,n.onSearch,n.optionFilter;var g=_(n,b);return o.default.createElement(c.default,g)}}w.Option=a.default,w.OptGroup=u.default,w.propTypes=g,w.defaultProps=O,w.isSelect=!0;t.default=w},33548:function(e,t,n){n.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}},10752:function(e,t){function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function r(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}Object.defineProperty(t,"__esModule",{value:!0}),n.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var l=null,a=null,u=null;if("function"==typeof t.componentWillMount?l="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(l="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?a="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?u="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(u="UNSAFE_componentWillUpdate"),null!==l||null!==a||null!==u){var i=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==l?"\n  "+l:"")+(null!==a?"\n  "+a:"")+(null!==u?"\n  "+u:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=o),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=r;var f=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;f.call(this,e,t,o)}}return e}}}]);