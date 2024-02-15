"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[40427],{89098:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(67294)),a=r(l(19845)),o=r(l(51596)),i=r(l(33548));function r(e){return e&&e.__esModule?e:{default:e}}var d=a.default.bind(i.default);t.default=function(){return n.default.createElement("div",{className:d("content-wrapper")},n.default.createElement(o.default,{label:"Multi select Field",placeholder:"Select a number",selectId:"multiSelectField",maxHeight:300},n.default.createElement(o.default.Option,{value:"1",display:"One"}),n.default.createElement(o.default.Option,{value:"2",display:"Two"}),n.default.createElement(o.default.Option,{value:"3",display:"Three"}),n.default.createElement(o.default.Option,{value:"4",display:"Four"}),n.default.createElement(o.default.Option,{value:"5",display:"Five"}),n.default.createElement(o.default.Option,{value:"6",display:"Six"}),n.default.createElement(o.default.Option,{value:"7",display:"Seven"}),n.default.createElement(o.default.Option,{value:"8",display:"Eight"}),n.default.createElement(o.default.Option,{value:"9",display:"Nine"}),n.default.createElement(o.default.Option,{value:"10",display:"Ten"}),n.default.createElement(o.default.Option,{value:"11",display:"Eleven"}),n.default.createElement(o.default.Option,{value:"12",display:"Twelve"}),n.default.createElement(o.default.Option,{value:"13",display:"Thirteen"})))}},51596:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(l(67294)),a=c(l(45697)),o=l(25387),i=c(l(65318)),r=c(l(88220)),d=c(l(97574)),u=c(l(4626)),s=["children","defaultValue","disabled","error","help","hideRequired","intl","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxHeight","maxSelectionCount","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var h={children:a.default.node,label:a.default.string.isRequired,defaultValue:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),disabled:a.default.bool,error:a.default.node,help:a.default.node,hideRequired:a.default.bool,intl:a.default.shape({formatMessage:a.default.func}).isRequired,isIncomplete:a.default.bool,isInline:a.default.bool,isInvalid:a.default.bool,isLabelHidden:a.default.bool,isTouchAccessible:a.default.bool,labelAttrs:a.default.object,maxHeight:a.default.number,maxSelectionCount:a.default.number,maxWidth:a.default.string,onChange:a.default.func,placeholder:a.default.string,required:a.default.bool,selectAttrs:a.default.object,selectId:a.default.string.isRequired,showOptional:a.default.bool,value:a.default.oneOfType([a.default.string,a.default.number,a.default.array])},m={children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxHeight:void 0,maxSelectionCount:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},v=function(e){var t,l=e.children,a=e.defaultValue,o=e.disabled,d=e.error,u=e.help,c=e.hideRequired,h=e.intl,m=e.isIncomplete,v=e.isInline,b=e.isInvalid,y=e.isLabelHidden,g=e.isTouchAccessible,_=e.label,O=e.labelAttrs,S=e.maxHeight,E=e.maxSelectionCount,I=e.maxWidth,w=e.onChange,W=e.placeholder,x=e.required,A=e.selectAttrs,U=e.selectId,F=e.showOptional,P=e.value,q=f(e,s),C=u;if(void 0!==E&&E>=2){var T=h.formatMessage({id:"Terra.form.select.maxSelectionHelp"},{text:E});C=u?n.default.createElement("span",null,T," ",u):T}return u&&d&&b?t="".concat(U,"-error ").concat(U,"-help"):(u&&(t="".concat(U,"-help")),d&&b&&(t="".concat(U,"-error"))),n.default.createElement(i.default,p({},q,{label:_,labelAttrs:O,error:d,help:C,hideRequired:c,required:x,showOptional:F,isInvalid:b,isInline:v,isLabelHidden:y,htmlFor:U,maxWidth:I}),n.default.createElement(r.default,p({},A,{ariaLabel:_,"aria-describedby":t,disabled:A.disabled||o,inputId:U,isIncomplete:m,isInvalid:b,isTouchAccessible:g,defaultValue:a,maxHeight:S||A.maxHeight,maxSelectionCount:void 0!==E&&E<2?void 0:E,onChange:w,placeholder:W,required:x,value:P}),l))};v.propTypes=h,v.defaultProps=m,v.Option=u.default,v.OptGroup=d.default;t.default=(0,o.injectIntl)(v)},33548:function(e,t,l){l.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}},10752:function(e,t){function l(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function n(e){this.setState(function(t){var l=this.constructor.getDerivedStateFromProps(e,t);return null!=l?l:null}.bind(this))}function a(e,t){try{var l=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(l,n)}finally{this.props=l,this.state=n}}Object.defineProperty(t,"__esModule",{value:!0}),l.__suppressDeprecationWarning=!0,n.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,i=null,r=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?i="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?r="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==o||null!==i||null!==r){var d=e.displayName||e.name,u="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+d+" uses "+u+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==i?"\n  "+i:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=l,t.componentWillReceiveProps=n),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var s=t.componentDidUpdate;t.componentDidUpdate=function(e,t,l){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:l;s.call(this,e,t,n)}}return e}}}]);