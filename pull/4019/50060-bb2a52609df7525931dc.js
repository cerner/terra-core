"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[50060],{83936:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(67294)),l=u(n(47166)),a=u(n(47319)),r=u(n(33548));function u(e){return e&&e.__esModule?e:{default:e}}var i=l.default.bind(r.default);t.default=function(){return o.default.createElement("div",{className:i("content-wrapper")},o.default.createElement(a.default,{placeholder:"Select a color",id:"default",defaultValue:"lorem"},o.default.createElement(a.default.Option,{value:"lorem",display:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}),o.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),o.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),o.default.createElement(a.default.Option,{value:"red",display:"Red"}),o.default.createElement(a.default.Option,{value:"violet",display:"Violet"})))}},47319:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=b(n(67294)),l=b(n(45697)),a=b(n(54052)),r=b(n(4626)),u=b(n(97574)),i=b(n(74854)),c=b(n(28998)),d=b(n(88220)),f=b(n(67405)),p=b(n(1358)),s=["variant"],m=["maxSelectionCount"],v=["allowClear"],h=["maxSelectionCount"],y=["noResultContent","allowClear"],S=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function b(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g={allowClear:l.default.bool,children:l.default.node,defaultValue:l.default.oneOfType([l.default.string,l.default.number,l.default.array]),disabled:l.default.bool,dropdownAttrs:l.default.object,isIncomplete:l.default.bool,isInvalid:l.default.bool,isTouchAccessible:l.default.bool,maxHeight:l.default.number,maxSelectionCount:l.default.number,noResultContent:l.default.node,onBlur:l.default.func,onChange:l.default.func,onClick:l.default.func,onDeselect:l.default.func,onFocus:l.default.func,onSearch:l.default.func,onSelect:l.default.func,optionFilter:l.default.func,placeholder:l.default.string,required:l.default.bool,value:l.default.oneOfType([l.default.string,l.default.number,l.default.array]),variant:l.default.oneOf([a.default.COMBOBOX,a.default.DEFAULT,a.default.MULTIPLE,a.default.SEARCH,a.default.TAG])},C={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function E(e){var t=e.variant,n=_(e,s);switch(t){case a.default.COMBOBOX:n.maxSelectionCount;var l=_(n,m);return o.default.createElement(i.default,l);case a.default.MULTIPLE:n.allowClear;var r=_(n,v);return o.default.createElement(d.default,r);case a.default.SEARCH:n.maxSelectionCount;var u=_(n,h);return o.default.createElement(f.default,u);case a.default.TAG:n.noResultContent,n.allowClear;var b=_(n,y);return o.default.createElement(p.default,b);case a.default.DEFAULT:default:n.isTouchAccessible,n.maxSelectionCount,n.onSearch,n.optionFilter;var g=_(n,S);return o.default.createElement(c.default,g)}}E.Option=r.default,E.OptGroup=u.default,E.propTypes=g,E.defaultProps=C,E.isSelect=!0;t.default=E},33548:function(e,t,n){n.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}},10752:function(e,t){function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function l(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}Object.defineProperty(t,"__esModule",{value:!0}),n.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var a=null,r=null,u=null;if("function"==typeof t.componentWillMount?a="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?u="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(u="UNSAFE_componentWillUpdate"),null!==a||null!==r||null!==u){var i=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==r?"\n  "+r:"")+(null!==u?"\n  "+u:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=o),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=l;var d=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;d.call(this,e,t,o)}}return e}}}]);