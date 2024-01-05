"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[72250],{86126:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(l(67294)),a=i(l(47166)),o=i(l(31609)),r=i(l(33548));function i(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(r.default);t.default=function(){return n.default.createElement("div",{className:u("content-wrapper")},n.default.createElement(o.default,{label:"Select Field",placeholder:"Select a number",selectId:"searchSelectField",defaultValue:"2",maxHeight:300},n.default.createElement(o.default.Option,{value:"1",display:"One"}),n.default.createElement(o.default.Option,{value:"2",display:"Two"}),n.default.createElement(o.default.Option,{value:"3",display:"Three"}),n.default.createElement(o.default.Option,{value:"4",display:"Four"}),n.default.createElement(o.default.Option,{value:"5",display:"Five"}),n.default.createElement(o.default.Option,{value:"6",display:"Six"}),n.default.createElement(o.default.Option,{value:"7",display:"Seven"}),n.default.createElement(o.default.Option,{value:"8",display:"Eight"}),n.default.createElement(o.default.Option,{value:"9",display:"Nine"}),n.default.createElement(o.default.Option,{value:"10",display:"Ten"}),n.default.createElement(o.default.Option,{value:"11",display:"Eleven"}),n.default.createElement(o.default.Option,{value:"12",display:"Twelve"}),n.default.createElement(o.default.Option,{value:"13",display:"Thirteen"})))}},31609:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(l(67294)),a=s(l(45697)),o=s(l(65318)),r=s(l(67405)),i=s(l(97574)),u=s(l(4626)),d=["allowClear","children","defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},c.apply(this,arguments)}function f(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p={allowClear:a.default.bool,children:a.default.node,label:a.default.string.isRequired,defaultValue:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),disabled:a.default.bool,error:a.default.node,help:a.default.node,hideRequired:a.default.bool,isIncomplete:a.default.bool,isInline:a.default.bool,isInvalid:a.default.bool,isLabelHidden:a.default.bool,isTouchAccessible:a.default.bool,labelAttrs:a.default.object,maxHeight:a.default.number,maxWidth:a.default.string,onChange:a.default.func,placeholder:a.default.string,required:a.default.bool,selectAttrs:a.default.object,selectId:a.default.string.isRequired,showOptional:a.default.bool,value:a.default.oneOfType([a.default.string,a.default.number,a.default.array])},h={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},m=function(e){var t,l=e.allowClear,a=e.children,i=e.defaultValue,u=e.disabled,s=e.error,p=e.help,h=e.hideRequired,m=e.isIncomplete,v=e.isInline,b=e.isInvalid,_=e.isLabelHidden,y=e.isTouchAccessible,g=e.label,O=e.labelAttrs,w=e.maxHeight,S=e.maxWidth,E=e.onChange,I=e.placeholder,P=e.required,j=e.selectAttrs,W=e.selectId,C=e.showOptional,A=e.value,U=f(e,d);p&&s&&b?t="".concat(W,"-error ").concat(W,"-help"):(p&&(t="".concat(W,"-help")),s&&b&&(t="".concat(W,"-error")));var x=j&&j["aria-label"]?j["aria-label"]:g;return n.default.createElement(o.default,c({},U,{label:g,labelAttrs:O,error:s,help:p,hideRequired:h,required:P,showOptional:C,isInvalid:b,isInline:v,isLabelHidden:_,htmlFor:W,maxWidth:S}),n.default.createElement(r.default,c({},j,{ariaLabel:x,allowClear:l,"aria-describedby":t,disabled:j.disabled||u,inputId:W,isIncomplete:m,isInvalid:b,isTouchAccessible:y,defaultValue:i,maxHeight:w||j.maxHeight,onChange:E,placeholder:I,required:P,value:A}),a))};m.propTypes=p,m.defaultProps=h,m.Option=u.default,m.OptGroup=i.default;t.default=m},88623:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(l(67294)),a=c(l(45697)),o=c(l(94184)),r=c(l(47166)),i=c(l(50026)),u=c(l(4626)),d=c(l(95667)),s=["display","value"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var h=r.default.bind(d.default),m={display:a.default.string,value:a.default.string},v=function(e){var t=e.display,l=e.value,a=p(e,s),r=n.default.useContext(i.default);return n.default.createElement(u.default,f({},a,{className:(0,o.default)(h("clear-option",r.className),a.className),display:t,value:l,isSelected:!1,"data-terra-select-clear-option":!0}))};v.propTypes=m,v.isOption=!0;t.default=v},40500:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(l(67294)),a=d(l(45697)),o=d(l(47166)),r=d(l(50026)),i=l(25387),u=d(l(45981));function d(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(u.default),c={noResultContent:a.default.node,value:a.default.oneOfType([a.default.number,a.default.string])},f=function(e){var t=e.noResultContent,l=e.value,a=n.default.useContext(r.default);return n.default.createElement("div",{role:"option",className:s("no-results",a.className),"aria-selected":"false"},t||n.default.createElement(i.FormattedMessage,{id:"Terra.form.select.noResults",values:{text:l}}))};f.propTypes=c;t.default=f},33548:function(e,t,l){l.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}},95667:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"_ClearOption-module__clinical-lowlight-theme___HrMM9","orion-fusion-theme":"_ClearOption-module__orion-fusion-theme___jfjen","clear-option":"_ClearOption-module__clear-option___bd9b1"}},45981:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"_NoResults-module__clinical-lowlight-theme___-XlVf","orion-fusion-theme":"_NoResults-module__orion-fusion-theme___tnsoS","no-results":"_NoResults-module__no-results___u1T4I"}},10752:function(e,t){function l(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function n(e){this.setState(function(t){var l=this.constructor.getDerivedStateFromProps(e,t);return null!=l?l:null}.bind(this))}function a(e,t){try{var l=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(l,n)}finally{this.props=l,this.state=n}}Object.defineProperty(t,"__esModule",{value:!0}),l.__suppressDeprecationWarning=!0,n.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,r=null,i=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?i="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(i="UNSAFE_componentWillUpdate"),null!==o||null!==r||null!==i){var u=e.displayName||e.name,d="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+u+" uses "+d+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==r?"\n  "+r:"")+(null!==i?"\n  "+i:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=l,t.componentWillReceiveProps=n),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var s=t.componentDidUpdate;t.componentDidUpdate=function(e,t,l){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:l;s.call(this,e,t,n)}}return e}}}]);