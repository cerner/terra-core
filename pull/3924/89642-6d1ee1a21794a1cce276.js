"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[89642],{48817:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(67294)),o=r(n(47166)),a=r(n(47319)),u=r(n(33548));function r(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(u.default),d=function(){return l.default.createElement("div",{className:i("content-wrapper")},l.default.createElement(a.default,{placeholder:"Select a number",id:"maxHeight",defaultValue:"1",maxHeight:300},l.default.createElement(a.default.Option,{value:"1",display:"One"}),l.default.createElement(a.default.Option,{value:"2",display:"Two"}),l.default.createElement(a.default.Option,{value:"3",display:"Three"}),l.default.createElement(a.default.Option,{value:"4",display:"Four"}),l.default.createElement(a.default.Option,{value:"5",display:"Five"}),l.default.createElement(a.default.Option,{value:"6",display:"Six"}),l.default.createElement(a.default.Option,{value:"7",display:"Seven"}),l.default.createElement(a.default.Option,{value:"8",display:"Eight"}),l.default.createElement(a.default.Option,{value:"9",display:"Nine"}),l.default.createElement(a.default.Option,{value:"10",display:"Ten"}),l.default.createElement(a.default.Option,{value:"11",display:"Eleven"}),l.default.createElement(a.default.Option,{value:"12",display:"Twelve"}),l.default.createElement(a.default.Option,{value:"13",display:"Thirteen"})))};t.default=d},47319:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=b(n(67294)),o=b(n(45697)),a=b(n(54052)),u=b(n(4626)),r=b(n(97574)),i=b(n(74854)),d=b(n(28998)),f=b(n(88220)),c=b(n(67405)),p=b(n(1358)),s=["variant"],m=["maxSelectionCount"],v=["allowClear"],h=["maxSelectionCount"],y=["noResultContent","allowClear"],S=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function b(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var E={allowClear:o.default.bool,children:o.default.node,defaultValue:o.default.oneOfType([o.default.string,o.default.number,o.default.array]),disabled:o.default.bool,dropdownAttrs:o.default.object,isIncomplete:o.default.bool,isInvalid:o.default.bool,isTouchAccessible:o.default.bool,maxHeight:o.default.number,maxSelectionCount:o.default.number,noResultContent:o.default.node,onBlur:o.default.func,onChange:o.default.func,onClick:o.default.func,onDeselect:o.default.func,onFocus:o.default.func,onSearch:o.default.func,onSelect:o.default.func,optionFilter:o.default.func,placeholder:o.default.string,required:o.default.bool,value:o.default.oneOfType([o.default.string,o.default.number,o.default.array]),variant:o.default.oneOf([a.default.COMBOBOX,a.default.DEFAULT,a.default.MULTIPLE,a.default.SEARCH,a.default.TAG])},O={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function g(e){var t=e.variant,n=_(e,s);switch(t){case a.default.COMBOBOX:n.maxSelectionCount;var o=_(n,m);return l.default.createElement(i.default,o);case a.default.MULTIPLE:n.allowClear;var u=_(n,v);return l.default.createElement(f.default,u);case a.default.SEARCH:n.maxSelectionCount;var r=_(n,h);return l.default.createElement(c.default,r);case a.default.TAG:n.noResultContent,n.allowClear;var b=_(n,y);return l.default.createElement(p.default,b);case a.default.DEFAULT:default:n.isTouchAccessible,n.maxSelectionCount,n.onSearch,n.optionFilter;var E=_(n,S);return l.default.createElement(d.default,E)}}g.Option=u.default,g.OptGroup=r.default,g.propTypes=E,g.defaultProps=O,g.isSelect=!0;var C=g;t.default=C},33548:function(e,t,n){n.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}},10752:function(e,t){function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function l(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function o(e,t){try{var n=this.props,l=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,l)}finally{this.props=n,this.state=l}}Object.defineProperty(t,"__esModule",{value:!0}),n.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var a=null,u=null,r=null;if("function"==typeof t.componentWillMount?a="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?u="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(u="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?r="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==a||null!==u||null!==r){var i=e.displayName||e.name,d="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+d+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==u?"\n  "+u:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=l),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=o;var f=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var l=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;f.call(this,e,t,l)}}return e}}}]);