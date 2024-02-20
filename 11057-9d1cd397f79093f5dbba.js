"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[11057],{43255:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(l(96540)),n=u(l(67967)),o=u(l(66093)),r=u(l(17377)),i=u(l(914));function u(e){return e&&e.__esModule?e:{default:e}}var d=n.default.bind(i.default);t.default=function(){return a.default.createElement("div",{className:d("content-wrapper")},a.default.createElement(a.default.Fragment,null,a.default.createElement(o.default,{ariaLabel:"Custom label 1",placeholder:"Select a color",id:"default",defaultValue:"green"},a.default.createElement(o.default.Option,{value:"blue",display:"Blue"}),a.default.createElement(o.default.Option,{value:"green",display:"Green"}),a.default.createElement(o.default.Option,{value:"purple",display:"Purple"}),a.default.createElement(o.default.Option,{value:"red",display:"Red"}),a.default.createElement(o.default.Option,{value:"violet",display:"Violet"})),a.default.createElement("br",null),a.default.createElement(r.default,{label:"Custom label 2",placeholder:"Select a size",selectId:"select-field",defaultValue:"small"},a.default.createElement(r.default.Option,{value:"xSmall",display:"Extra Small"}),a.default.createElement(r.default.Option,{value:"small",display:"Small"}),a.default.createElement(r.default.Option,{value:"medium",display:"Medium"}),a.default.createElement(r.default.Option,{value:"large",display:"Large"}),a.default.createElement(r.default.Option,{value:"xLarge",display:"Extra Large"}))))}},66093:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=g(l(96540)),n=g(l(5556)),o=g(l(3796)),r=g(l(60107)),i=g(l(40166)),u=g(l(67190)),d=g(l(78933)),f=g(l(90048)),c=g(l(85597)),s=g(l(82061)),p=["variant"],m=["maxSelectionCount"],h=["allowClear"],v=["maxSelectionCount"],b=["noResultContent","allowClear"],y=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function g(e){return e&&e.__esModule?e:{default:e}}function O(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var S={allowClear:n.default.bool,children:n.default.node,defaultValue:n.default.oneOfType([n.default.string,n.default.number,n.default.array]),disabled:n.default.bool,dropdownAttrs:n.default.object,isIncomplete:n.default.bool,isInvalid:n.default.bool,isTouchAccessible:n.default.bool,maxHeight:n.default.number,maxSelectionCount:n.default.number,noResultContent:n.default.node,onBlur:n.default.func,onChange:n.default.func,onClick:n.default.func,onDeselect:n.default.func,onFocus:n.default.func,onSearch:n.default.func,onSelect:n.default.func,optionFilter:n.default.func,placeholder:n.default.string,required:n.default.bool,value:n.default.oneOfType([n.default.string,n.default.number,n.default.array]),variant:n.default.oneOf([o.default.COMBOBOX,o.default.DEFAULT,o.default.MULTIPLE,o.default.SEARCH,o.default.TAG])},C={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function _(e){var t=e.variant,l=O(e,p);switch(t){case o.default.COMBOBOX:l.maxSelectionCount;var n=O(l,m);return a.default.createElement(u.default,n);case o.default.MULTIPLE:l.allowClear;var r=O(l,h);return a.default.createElement(f.default,r);case o.default.SEARCH:l.maxSelectionCount;var i=O(l,v);return a.default.createElement(c.default,i);case o.default.TAG:l.noResultContent,l.allowClear;var g=O(l,b);return a.default.createElement(s.default,g);case o.default.DEFAULT:default:l.isTouchAccessible,l.maxSelectionCount,l.onSearch,l.optionFilter;var S=O(l,y);return a.default.createElement(d.default,S)}}_.Option=r.default,_.OptGroup=i.default,_.propTypes=S,_.defaultProps=C,_.isSelect=!0;t.default=_},17377:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(l(96540)),n=f(l(5556)),o=l(8604),r=f(l(9047)),i=f(l(66093)),u=f(l(3796)),d=["allowClear","children","defaultValue","disabled","error","help","hideRequired","intl","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxSelectionCount","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value","variant"];function f(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p={allowClear:n.default.bool,children:n.default.node,label:n.default.string.isRequired,defaultValue:n.default.oneOfType([n.default.array,n.default.number,n.default.string]),disabled:n.default.bool,error:n.default.node,help:n.default.node,hideRequired:n.default.bool,intl:n.default.shape({formatMessage:n.default.func}).isRequired,isIncomplete:n.default.bool,isInline:n.default.bool,isInvalid:n.default.bool,isLabelHidden:n.default.bool,isTouchAccessible:n.default.bool,labelAttrs:n.default.object,maxHeight:n.default.number,maxSelectionCount:n.default.number,maxWidth:n.default.string,onChange:n.default.func,placeholder:n.default.string,required:n.default.bool,selectAttrs:n.default.object,selectId:n.default.string.isRequired,showOptional:n.default.bool,value:n.default.oneOfType([n.default.array,n.default.number,n.default.string]),variant:n.default.oneOf([u.default.COMBOBOX,u.default.DEFAULT,u.default.MULTIPLE,u.default.SEARCH,u.default.TAG])},m={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxSelectionCount:void 0,maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0,variant:"default"},h=function(e){var t,l=e.allowClear,n=e.children,o=e.defaultValue,u=e.disabled,f=e.error,p=e.help,m=e.hideRequired,h=e.intl,v=e.isIncomplete,b=e.isInline,y=e.isInvalid,g=e.isLabelHidden,O=e.isTouchAccessible,S=e.label,C=e.labelAttrs,_=e.maxSelectionCount,E=e.maxHeight,w=e.maxWidth,A=e.onChange,x=e.placeholder,I=e.required,P=e.selectAttrs,U=e.selectId,T=e.showOptional,F=e.value,W=e.variant,R=s(e,d),L=p;if(void 0!==_&&_>=2){var M=h.formatMessage({id:"Terra.form.select.maxSelectionHelp"},{text:_});L=p?a.default.createElement("span",null,M," ",p):M}return p&&f&&y?t="".concat(U,"-error ").concat(U,"-help"):(p&&(t="".concat(U,"-help")),f&&y&&(t="".concat(U,"-error"))),a.default.createElement(r.default,c({},R,{label:S,labelAttrs:C,error:f,help:L,hideRequired:m,required:I,showOptional:T,isInvalid:y,isInline:b,isLabelHidden:g,htmlFor:U,maxWidth:w}),a.default.createElement(i.default,c({},P,{ariaLabel:S,allowClear:l,"aria-describedby":t,disabled:P.disabled||u,id:U,isIncomplete:v,isInvalid:y,isTouchAccessible:O,defaultValue:o,maxHeight:E||P.maxHeight,maxSelectionCount:void 0!==_&&_<2?void 0:_,onChange:A,placeholder:x,required:I,value:F,variant:W}),n))};h.propTypes=p,h.defaultProps=m,h.Option=i.default.Option,h.OptGroup=i.default.OptGroup;t.default=(0,o.injectIntl)(h)},914:function(e,t,l){l.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}},41843:function(e,t){function l(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function a(e){this.setState(function(t){var l=this.constructor.getDerivedStateFromProps(e,t);return null!=l?l:null}.bind(this))}function n(e,t){try{var l=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(l,a)}finally{this.props=l,this.state=a}}Object.defineProperty(t,"__esModule",{value:!0}),l.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0,n.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,r=null,i=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?i="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(i="UNSAFE_componentWillUpdate"),null!==o||null!==r||null!==i){var u=e.displayName||e.name,d="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+u+" uses "+d+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==r?"\n  "+r:"")+(null!==i?"\n  "+i:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=l,t.componentWillReceiveProps=a),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=n;var f=t.componentDidUpdate;t.componentDidUpdate=function(e,t,l){var a=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:l;f.call(this,e,t,a)}}return e}}}]);