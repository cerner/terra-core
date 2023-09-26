"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[34284],{89122:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=r?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(l,a,u):l[a]=e[a]}l.default=e,n&&n.set(e,l);return l}(n(67294)),r=i(n(47166)),a=i(n(47319)),u=i(n(33548));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,l,r,a,u=[],i=!0,c=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(o=r.call(n)).done)&&(u.push(o.value),u.length!==t);i=!0);}catch(e){c=!0,l=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw l}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var p=r.default.bind(u.default),s=new Array(500);t.default=function(){var e=f((0,l.useState)("default"),2),t=e[0],n=e[1];return function(){for(var e=0;e<s.length;e+=1)s[e]=l.default.createElement(a.default.Option,{value:e,display:e})}(),l.default.createElement("div",{className:p("content-wrapper")},l.default.createElement("label",{htmlFor:"variants"},"Choose a variant: "),l.default.createElement("select",{id:"variants",onChange:function(e){n(e.target.value)}},l.default.createElement("option",{value:"default"},"Default"),l.default.createElement("option",{value:"combobox"},"Combobox"),l.default.createElement("option",{value:"multiple"},"Multiple"),l.default.createElement("option",{value:"search"},"Search"),l.default.createElement("option",{value:"tag"},"Tag")),l.default.createElement("h1",null,"Variant:"," ",t),l.default.createElement(a.default,{placeholder:"Select a number",variant:t,id:"search"},s))}},47319:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=S(n(67294)),l=S(n(45697)),r=S(n(54052)),a=S(n(4626)),u=S(n(97574)),i=S(n(74854)),c=S(n(28998)),f=S(n(88220)),d=S(n(67405)),p=S(n(1358)),s=["variant"],m=["maxSelectionCount"],v=["allowClear"],y=["maxSelectionCount"],h=["noResultContent","allowClear"],b=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function S(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var _={allowClear:l.default.bool,children:l.default.node,defaultValue:l.default.oneOfType([l.default.string,l.default.number,l.default.array]),disabled:l.default.bool,dropdownAttrs:l.default.object,isIncomplete:l.default.bool,isInvalid:l.default.bool,isTouchAccessible:l.default.bool,maxHeight:l.default.number,maxSelectionCount:l.default.number,noResultContent:l.default.node,onBlur:l.default.func,onChange:l.default.func,onClick:l.default.func,onDeselect:l.default.func,onFocus:l.default.func,onSearch:l.default.func,onSelect:l.default.func,optionFilter:l.default.func,placeholder:l.default.string,required:l.default.bool,value:l.default.oneOfType([l.default.string,l.default.number,l.default.array]),variant:l.default.oneOf([r.default.COMBOBOX,r.default.DEFAULT,r.default.MULTIPLE,r.default.SEARCH,r.default.TAG])},w={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function O(e){var t=e.variant,n=g(e,s);switch(t){case r.default.COMBOBOX:n.maxSelectionCount;var l=g(n,m);return o.default.createElement(i.default,l);case r.default.MULTIPLE:n.allowClear;var a=g(n,v);return o.default.createElement(f.default,a);case r.default.SEARCH:n.maxSelectionCount;var u=g(n,y);return o.default.createElement(d.default,u);case r.default.TAG:n.noResultContent,n.allowClear;var S=g(n,h);return o.default.createElement(p.default,S);case r.default.DEFAULT:default:n.isTouchAccessible,n.maxSelectionCount,n.onSearch,n.optionFilter;var _=g(n,b);return o.default.createElement(c.default,_)}}O.Option=a.default,O.OptGroup=u.default,O.propTypes=_,O.defaultProps=w,O.isSelect=!0;t.default=O},33548:function(e,t,n){n.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}},10752:function(e,t){function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function l(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}Object.defineProperty(t,"__esModule",{value:!0}),n.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var r=null,a=null,u=null;if("function"==typeof t.componentWillMount?r="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(r="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?a="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?u="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(u="UNSAFE_componentWillUpdate"),null!==r||null!==a||null!==u){var i=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==r?"\n  "+r:"")+(null!==a?"\n  "+a:"")+(null!==u?"\n  "+u:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=o),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=l;var f=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;f.call(this,e,t,o)}}return e}}}]);