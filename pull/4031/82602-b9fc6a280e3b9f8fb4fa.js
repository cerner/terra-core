"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[82602],{36733:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(l(67294)),a=i(l(19845)),o=i(l(77381)),r=i(l(33548));function i(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(r.default);t.default=function(){return n.default.createElement("div",{className:u("content-wrapper")},n.default.createElement(o.default,{disabled:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"select-field",defaultValue:"small"},n.default.createElement(o.default.Option,{value:"small",display:"Small"})))}},47319:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=g(l(67294)),a=g(l(45697)),o=g(l(54052)),r=g(l(4626)),i=g(l(97574)),u=g(l(74854)),d=g(l(28998)),c=g(l(88220)),f=g(l(67405)),s=g(l(1358)),p=["variant"],h=["maxSelectionCount"],m=["allowClear"],v=["maxSelectionCount"],b=["noResultContent","allowClear"],y=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function g(e){return e&&e.__esModule?e:{default:e}}function S(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var O={allowClear:a.default.bool,children:a.default.node,defaultValue:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),disabled:a.default.bool,dropdownAttrs:a.default.object,isIncomplete:a.default.bool,isInvalid:a.default.bool,isTouchAccessible:a.default.bool,maxHeight:a.default.number,maxSelectionCount:a.default.number,noResultContent:a.default.node,onBlur:a.default.func,onChange:a.default.func,onClick:a.default.func,onDeselect:a.default.func,onFocus:a.default.func,onSearch:a.default.func,onSelect:a.default.func,optionFilter:a.default.func,placeholder:a.default.string,required:a.default.bool,value:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),variant:a.default.oneOf([o.default.COMBOBOX,o.default.DEFAULT,o.default.MULTIPLE,o.default.SEARCH,o.default.TAG])},C={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function _(e){var t=e.variant,l=S(e,p);switch(t){case o.default.COMBOBOX:l.maxSelectionCount;var a=S(l,h);return n.default.createElement(u.default,a);case o.default.MULTIPLE:l.allowClear;var r=S(l,m);return n.default.createElement(c.default,r);case o.default.SEARCH:l.maxSelectionCount;var i=S(l,v);return n.default.createElement(f.default,i);case o.default.TAG:l.noResultContent,l.allowClear;var g=S(l,b);return n.default.createElement(s.default,g);case o.default.DEFAULT:default:l.isTouchAccessible,l.maxSelectionCount,l.onSearch,l.optionFilter;var O=S(l,y);return n.default.createElement(d.default,O)}}_.Option=r.default,_.OptGroup=i.default,_.propTypes=O,_.defaultProps=C,_.isSelect=!0;t.default=_},77381:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(l(67294)),a=c(l(45697)),o=l(25387),r=c(l(65318)),i=c(l(47319)),u=c(l(54052)),d=["allowClear","children","defaultValue","disabled","error","help","hideRequired","intl","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxSelectionCount","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value","variant"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},f.apply(this,arguments)}function s(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p={allowClear:a.default.bool,children:a.default.node,label:a.default.string.isRequired,defaultValue:a.default.oneOfType([a.default.array,a.default.number,a.default.string]),disabled:a.default.bool,error:a.default.node,help:a.default.node,hideRequired:a.default.bool,intl:a.default.shape({formatMessage:a.default.func}).isRequired,isIncomplete:a.default.bool,isInline:a.default.bool,isInvalid:a.default.bool,isLabelHidden:a.default.bool,isTouchAccessible:a.default.bool,labelAttrs:a.default.object,maxHeight:a.default.number,maxSelectionCount:a.default.number,maxWidth:a.default.string,onChange:a.default.func,placeholder:a.default.string,required:a.default.bool,selectAttrs:a.default.object,selectId:a.default.string.isRequired,showOptional:a.default.bool,value:a.default.oneOfType([a.default.array,a.default.number,a.default.string]),variant:a.default.oneOf([u.default.COMBOBOX,u.default.DEFAULT,u.default.MULTIPLE,u.default.SEARCH,u.default.TAG])},h={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxSelectionCount:void 0,maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0,variant:"default"},m=function(e){var t,l=e.allowClear,a=e.children,o=e.defaultValue,u=e.disabled,c=e.error,p=e.help,h=e.hideRequired,m=e.intl,v=e.isIncomplete,b=e.isInline,y=e.isInvalid,g=e.isLabelHidden,S=e.isTouchAccessible,O=e.label,C=e.labelAttrs,_=e.maxSelectionCount,w=e.maxHeight,A=e.maxWidth,I=e.onChange,x=e.placeholder,E=e.required,T=e.selectAttrs,U=e.selectId,P=e.showOptional,F=e.value,W=e.variant,R=s(e,d),M=p;if(void 0!==_&&_>=2){var j=m.formatMessage({id:"Terra.form.select.maxSelectionHelp"},{text:_});M=p?n.default.createElement("span",null,j," ",p):j}return p&&c&&y?t="".concat(U,"-error ").concat(U,"-help"):(p&&(t="".concat(U,"-help")),c&&y&&(t="".concat(U,"-error"))),n.default.createElement(r.default,f({},R,{label:O,labelAttrs:C,error:c,help:M,hideRequired:h,required:E,showOptional:P,isInvalid:y,isInline:b,isLabelHidden:g,htmlFor:U,maxWidth:A}),n.default.createElement(i.default,f({},T,{ariaLabel:O,allowClear:l,"aria-describedby":t,disabled:T.disabled||u,id:U,isIncomplete:v,isInvalid:y,isTouchAccessible:S,defaultValue:o,maxHeight:w||T.maxHeight,maxSelectionCount:void 0!==_&&_<2?void 0:_,onChange:I,placeholder:x,required:E,value:F,variant:W}),a))};m.propTypes=p,m.defaultProps=h,m.Option=i.default.Option,m.OptGroup=i.default.OptGroup;t.default=(0,o.injectIntl)(m)},33548:function(e,t,l){l.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}},10752:function(e,t){function l(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function n(e){this.setState(function(t){var l=this.constructor.getDerivedStateFromProps(e,t);return null!=l?l:null}.bind(this))}function a(e,t){try{var l=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(l,n)}finally{this.props=l,this.state=n}}Object.defineProperty(t,"__esModule",{value:!0}),l.__suppressDeprecationWarning=!0,n.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,r=null,i=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?i="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(i="UNSAFE_componentWillUpdate"),null!==o||null!==r||null!==i){var u=e.displayName||e.name,d="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+u+" uses "+d+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==r?"\n  "+r:"")+(null!==i?"\n  "+i:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=l,t.componentWillReceiveProps=n),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,l){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:l;c.call(this,e,t,n)}}return e}}}]);