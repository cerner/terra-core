"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[30423],{65821:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(96540)),r=i(n(67967)),a=i(n(66093)),u=i(n(914));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,f(o.key),o)}}function f(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!=o(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:String(t)}function p(e,t,n){return t=s(t),function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(e,d()?Reflect.construct(t,n||[],s(e).constructor):t.apply(e,n))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}var y=r.default.bind(u.default),h=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=p(this,t)).state={value:""},e.handleChange=e.handleChange.bind(v(e)),e}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(t,e),n=t,(o=[{key:"handleChange",value:function(e){this.setState({value:e})}},{key:"render",value:function(){return l.default.createElement("div",{className:y("content-wrapper")},l.default.createElement(a.default,{allowClear:!0,id:"allowclear",onChange:this.handleChange,placeholder:"Select a color",value:this.state.value,variant:"combobox"},l.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),l.default.createElement(a.default.Option,{value:"green",display:"Green"}),l.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),l.default.createElement(a.default.Option,{value:"red",display:"Red"}),l.default.createElement(a.default.Option,{value:"violet",display:"Violet"})))}}])&&c(n.prototype,o),r&&c(n,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(l.default.Component);t.default=h},66093:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=S(n(96540)),l=S(n(5556)),r=S(n(3796)),a=S(n(60107)),u=S(n(40166)),i=S(n(67190)),c=S(n(78933)),f=S(n(90048)),p=S(n(85597)),d=S(n(82061)),s=["variant"],v=["maxSelectionCount"],m=["allowClear"],y=["maxSelectionCount"],h=["noResultContent","allowClear"],b=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function S(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g={allowClear:l.default.bool,children:l.default.node,defaultValue:l.default.oneOfType([l.default.string,l.default.number,l.default.array]),disabled:l.default.bool,dropdownAttrs:l.default.object,isIncomplete:l.default.bool,isInvalid:l.default.bool,isTouchAccessible:l.default.bool,maxHeight:l.default.number,maxSelectionCount:l.default.number,noResultContent:l.default.node,onBlur:l.default.func,onChange:l.default.func,onClick:l.default.func,onDeselect:l.default.func,onFocus:l.default.func,onSearch:l.default.func,onSelect:l.default.func,optionFilter:l.default.func,placeholder:l.default.string,required:l.default.bool,value:l.default.oneOfType([l.default.string,l.default.number,l.default.array]),variant:l.default.oneOf([r.default.COMBOBOX,r.default.DEFAULT,r.default.MULTIPLE,r.default.SEARCH,r.default.TAG])},O={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function w(e){var t=e.variant,n=_(e,s);switch(t){case r.default.COMBOBOX:n.maxSelectionCount;var l=_(n,v);return o.default.createElement(i.default,l);case r.default.MULTIPLE:n.allowClear;var a=_(n,m);return o.default.createElement(f.default,a);case r.default.SEARCH:n.maxSelectionCount;var u=_(n,y);return o.default.createElement(p.default,u);case r.default.TAG:n.noResultContent,n.allowClear;var S=_(n,h);return o.default.createElement(d.default,S);case r.default.DEFAULT:default:n.isTouchAccessible,n.maxSelectionCount,n.onSearch,n.optionFilter;var g=_(n,b);return o.default.createElement(c.default,g)}}w.Option=a.default,w.OptGroup=u.default,w.propTypes=g,w.defaultProps=O,w.isSelect=!0;t.default=w},914:function(e,t,n){n.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}},41843:function(e,t){function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function l(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}Object.defineProperty(t,"__esModule",{value:!0}),n.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var r=null,a=null,u=null;if("function"==typeof t.componentWillMount?r="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(r="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?a="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?u="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(u="UNSAFE_componentWillUpdate"),null!==r||null!==a||null!==u){var i=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==r?"\n  "+r:"")+(null!==a?"\n  "+a:"")+(null!==u?"\n  "+u:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=o),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=l;var f=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;f.call(this,e,t,o)}}return e}}}]);