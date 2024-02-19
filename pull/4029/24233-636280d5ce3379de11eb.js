"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[24233],{64159:function(e,t,l){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(l(96540)),a=u(l(67967)),r=u(l(17377)),i=u(l(914));function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function c(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var o=l.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:String(t)}function f(e,t,l){return t=p(t),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}(e,s()?Reflect.construct(t,l||[],p(e).constructor):t.apply(e,l))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}var v=a.default.bind(i.default),h=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=f(this,t)).state={isInvalid:!1},e.toggleInvalid=e.toggleInvalid.bind(b(e)),e}var l,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(t,e),l=t,(n=[{key:"toggleInvalid",value:function(){this.setState((function(e){return{isInvalid:!e.isInvalid}}))}},{key:"render",value:function(){return o.default.createElement("div",{className:v("content-wrapper")},o.default.createElement("button",{type:"button",id:"validity-toggle",onClick:this.toggleInvalid},"Toggle Validity"),o.default.createElement(r.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"select-field",defaultValue:"small",error:"Error message.",help:"Help message.",isInvalid:this.state.isInvalid},o.default.createElement(r.default.Option,{value:"xSmall",display:"Extra Small"}),o.default.createElement(r.default.Option,{value:"small",display:"Small"}),o.default.createElement(r.default.Option,{value:"medium",display:"Medium"}),o.default.createElement(r.default.Option,{value:"large",display:"Large"}),o.default.createElement(r.default.Option,{value:"xLarge",display:"Extra Large"})))}}])&&d(l.prototype,n),a&&d(l,a),Object.defineProperty(l,"prototype",{writable:!1}),t}(o.default.Component);t.default=h},66093:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=g(l(96540)),o=g(l(5556)),a=g(l(3796)),r=g(l(60107)),i=g(l(40166)),u=g(l(67190)),d=g(l(78933)),c=g(l(90048)),f=g(l(85597)),s=g(l(82061)),p=["variant"],b=["maxSelectionCount"],m=["allowClear"],v=["maxSelectionCount"],h=["noResultContent","allowClear"],y=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function g(e){return e&&e.__esModule?e:{default:e}}function O(e,t){if(null==e)return{};var l,n,o=function(e,t){if(null==e)return{};var l,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var S={allowClear:o.default.bool,children:o.default.node,defaultValue:o.default.oneOfType([o.default.string,o.default.number,o.default.array]),disabled:o.default.bool,dropdownAttrs:o.default.object,isIncomplete:o.default.bool,isInvalid:o.default.bool,isTouchAccessible:o.default.bool,maxHeight:o.default.number,maxSelectionCount:o.default.number,noResultContent:o.default.node,onBlur:o.default.func,onChange:o.default.func,onClick:o.default.func,onDeselect:o.default.func,onFocus:o.default.func,onSearch:o.default.func,onSelect:o.default.func,optionFilter:o.default.func,placeholder:o.default.string,required:o.default.bool,value:o.default.oneOfType([o.default.string,o.default.number,o.default.array]),variant:o.default.oneOf([a.default.COMBOBOX,a.default.DEFAULT,a.default.MULTIPLE,a.default.SEARCH,a.default.TAG])},_={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function w(e){var t=e.variant,l=O(e,p);switch(t){case a.default.COMBOBOX:l.maxSelectionCount;var o=O(l,b);return n.default.createElement(u.default,o);case a.default.MULTIPLE:l.allowClear;var r=O(l,m);return n.default.createElement(c.default,r);case a.default.SEARCH:l.maxSelectionCount;var i=O(l,v);return n.default.createElement(f.default,i);case a.default.TAG:l.noResultContent,l.allowClear;var g=O(l,h);return n.default.createElement(s.default,g);case a.default.DEFAULT:default:l.isTouchAccessible,l.maxSelectionCount,l.onSearch,l.optionFilter;var S=O(l,y);return n.default.createElement(d.default,S)}}w.Option=r.default,w.OptGroup=i.default,w.propTypes=S,w.defaultProps=_,w.isSelect=!0;t.default=w},17377:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(l(96540)),o=c(l(5556)),a=l(8604),r=c(l(9047)),i=c(l(66093)),u=c(l(3796)),d=["allowClear","children","defaultValue","disabled","error","help","hideRequired","intl","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxSelectionCount","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value","variant"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},f.apply(this,arguments)}function s(e,t){if(null==e)return{};var l,n,o=function(e,t){if(null==e)return{};var l,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var p={allowClear:o.default.bool,children:o.default.node,label:o.default.string.isRequired,defaultValue:o.default.oneOfType([o.default.array,o.default.number,o.default.string]),disabled:o.default.bool,error:o.default.node,help:o.default.node,hideRequired:o.default.bool,intl:o.default.shape({formatMessage:o.default.func}).isRequired,isIncomplete:o.default.bool,isInline:o.default.bool,isInvalid:o.default.bool,isLabelHidden:o.default.bool,isTouchAccessible:o.default.bool,labelAttrs:o.default.object,maxHeight:o.default.number,maxSelectionCount:o.default.number,maxWidth:o.default.string,onChange:o.default.func,placeholder:o.default.string,required:o.default.bool,selectAttrs:o.default.object,selectId:o.default.string.isRequired,showOptional:o.default.bool,value:o.default.oneOfType([o.default.array,o.default.number,o.default.string]),variant:o.default.oneOf([u.default.COMBOBOX,u.default.DEFAULT,u.default.MULTIPLE,u.default.SEARCH,u.default.TAG])},b={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxSelectionCount:void 0,maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0,variant:"default"},m=function(e){var t,l=e.allowClear,o=e.children,a=e.defaultValue,u=e.disabled,c=e.error,p=e.help,b=e.hideRequired,m=e.intl,v=e.isIncomplete,h=e.isInline,y=e.isInvalid,g=e.isLabelHidden,O=e.isTouchAccessible,S=e.label,_=e.labelAttrs,w=e.maxSelectionCount,C=e.maxHeight,E=e.maxWidth,I=e.onChange,x=e.placeholder,A=e.required,P=e.selectAttrs,j=e.selectId,T=e.showOptional,U=e.value,R=e.variant,F=s(e,d),W=p;if(void 0!==w&&w>=2){var M=m.formatMessage({id:"Terra.form.select.maxSelectionHelp"},{text:w});W=p?n.default.createElement("span",null,M," ",p):M}return p&&c&&y?t="".concat(j,"-error ").concat(j,"-help"):(p&&(t="".concat(j,"-help")),c&&y&&(t="".concat(j,"-error"))),n.default.createElement(r.default,f({},F,{label:S,labelAttrs:_,error:c,help:W,hideRequired:b,required:A,showOptional:T,isInvalid:y,isInline:h,isLabelHidden:g,htmlFor:j,maxWidth:E}),n.default.createElement(i.default,f({},P,{ariaLabel:S,allowClear:l,"aria-describedby":t,disabled:P.disabled||u,id:j,isIncomplete:v,isInvalid:y,isTouchAccessible:O,defaultValue:a,maxHeight:C||P.maxHeight,maxSelectionCount:void 0!==w&&w<2?void 0:w,onChange:I,placeholder:x,required:A,value:U,variant:R}),o))};m.propTypes=p,m.defaultProps=b,m.Option=i.default.Option,m.OptGroup=i.default.OptGroup;t.default=(0,a.injectIntl)(m)},914:function(e,t,l){l.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}},41843:function(e,t){function l(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function n(e){this.setState(function(t){var l=this.constructor.getDerivedStateFromProps(e,t);return null!=l?l:null}.bind(this))}function o(e,t){try{var l=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(l,n)}finally{this.props=l,this.state=n}}Object.defineProperty(t,"__esModule",{value:!0}),l.__suppressDeprecationWarning=!0,n.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var a=null,r=null,i=null;if("function"==typeof t.componentWillMount?a="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?i="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(i="UNSAFE_componentWillUpdate"),null!==a||null!==r||null!==i){var u=e.displayName||e.name,d="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+u+" uses "+d+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==r?"\n  "+r:"")+(null!==i?"\n  "+i:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=l,t.componentWillReceiveProps=n),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=o;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,l){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:l;c.call(this,e,t,n)}}return e}}}]);