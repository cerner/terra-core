"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[90207],{69391:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(l(67294)),n=o(l(47166)),u=o(l(77381)),d=o(l(33548));function o(e){return e&&e.__esModule?e:{default:e}}var r=n.default.bind(d.default),i=function(){return a.default.createElement("div",{className:r("content-wrapper")},a.default.createElement(u.default,{label:"Select Field",placeholder:"Select a number",selectId:"selectField",defaultValue:"2",maxHeight:300},a.default.createElement(u.default.Option,{value:"1",display:"One"}),a.default.createElement(u.default.Option,{value:"2",display:"Two"}),a.default.createElement(u.default.Option,{value:"3",display:"Three"}),a.default.createElement(u.default.Option,{value:"4",display:"Four"}),a.default.createElement(u.default.Option,{value:"5",display:"Five"}),a.default.createElement(u.default.Option,{value:"6",display:"Six"}),a.default.createElement(u.default.Option,{value:"7",display:"Seven"}),a.default.createElement(u.default.Option,{value:"8",display:"Eight"}),a.default.createElement(u.default.Option,{value:"9",display:"Nine"}),a.default.createElement(u.default.Option,{value:"10",display:"Ten"}),a.default.createElement(u.default.Option,{value:"11",display:"Eleven"}),a.default.createElement(u.default.Option,{value:"12",display:"Twelve"}),a.default.createElement(u.default.Option,{value:"13",display:"Thirteen"})))};t.default=i},47319:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=y(l(67294)),n=y(l(45697)),u=y(l(54052)),d=y(l(4626)),o=y(l(97574)),r=y(l(74854)),i=y(l(28998)),f=y(l(88220)),c=y(l(67405)),s=y(l(1358)),p=["variant"],v=["maxSelectionCount"],b=["allowClear"],h=["maxSelectionCount"],m=["noResultContent","allowClear"],O=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function y(e){return e&&e.__esModule?e:{default:e}}function C(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},u=Object.keys(e);for(a=0;a<u.length;a++)l=u[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)l=u[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var g={allowClear:n.default.bool,children:n.default.node,defaultValue:n.default.oneOfType([n.default.string,n.default.number,n.default.array]),disabled:n.default.bool,dropdownAttrs:n.default.object,isIncomplete:n.default.bool,isInvalid:n.default.bool,isTouchAccessible:n.default.bool,maxHeight:n.default.number,maxSelectionCount:n.default.number,noResultContent:n.default.node,onBlur:n.default.func,onChange:n.default.func,onClick:n.default.func,onDeselect:n.default.func,onFocus:n.default.func,onSearch:n.default.func,onSelect:n.default.func,optionFilter:n.default.func,placeholder:n.default.string,required:n.default.bool,value:n.default.oneOfType([n.default.string,n.default.number,n.default.array]),variant:n.default.oneOf([u.default.COMBOBOX,u.default.DEFAULT,u.default.MULTIPLE,u.default.SEARCH,u.default.TAG])},E={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function S(e){var t=e.variant,l=C(e,p);switch(t){case u.default.COMBOBOX:l.maxSelectionCount;var n=C(l,v);return a.default.createElement(r.default,n);case u.default.MULTIPLE:l.allowClear;var d=C(l,b);return a.default.createElement(f.default,d);case u.default.SEARCH:l.maxSelectionCount;var o=C(l,h);return a.default.createElement(c.default,o);case u.default.TAG:l.noResultContent,l.allowClear;var y=C(l,m);return a.default.createElement(s.default,y);case u.default.DEFAULT:default:l.isTouchAccessible,l.maxSelectionCount,l.onSearch,l.optionFilter;var g=C(l,O);return a.default.createElement(i.default,g)}}S.Option=d.default,S.OptGroup=o.default,S.propTypes=g,S.defaultProps=E,S.isSelect=!0;var x=S;t.default=x},77381:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(l(67294)),n=f(l(45697)),u=l(25387),d=f(l(65318)),o=f(l(47319)),r=f(l(54052)),i=["allowClear","children","defaultValue","disabled","error","help","hideRequired","intl","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxSelectionCount","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value","variant"];function f(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},u=Object.keys(e);for(a=0;a<u.length;a++)l=u[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)l=u[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p={allowClear:n.default.bool,children:n.default.node,label:n.default.string.isRequired,defaultValue:n.default.oneOfType([n.default.array,n.default.number,n.default.string]),disabled:n.default.bool,error:n.default.node,help:n.default.node,hideRequired:n.default.bool,intl:n.default.shape({formatMessage:n.default.func}).isRequired,isIncomplete:n.default.bool,isInline:n.default.bool,isInvalid:n.default.bool,isLabelHidden:n.default.bool,isTouchAccessible:n.default.bool,labelAttrs:n.default.object,maxHeight:n.default.number,maxSelectionCount:n.default.number,maxWidth:n.default.string,onChange:n.default.func,placeholder:n.default.string,required:n.default.bool,selectAttrs:n.default.object,selectId:n.default.string.isRequired,showOptional:n.default.bool,value:n.default.oneOfType([n.default.array,n.default.number,n.default.string]),variant:n.default.oneOf([r.default.COMBOBOX,r.default.DEFAULT,r.default.MULTIPLE,r.default.SEARCH,r.default.TAG])},v={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxSelectionCount:void 0,maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0,variant:"default"},b=function(e){var t,l=e.allowClear,n=e.children,u=e.defaultValue,r=e.disabled,f=e.error,p=e.help,v=e.hideRequired,b=e.intl,h=e.isIncomplete,m=e.isInline,O=e.isInvalid,y=e.isLabelHidden,C=e.isTouchAccessible,g=e.label,E=e.labelAttrs,S=e.maxSelectionCount,x=e.maxHeight,w=e.maxWidth,I=e.onChange,T=e.placeholder,A=e.required,_=e.selectAttrs,j=e.selectId,q=e.showOptional,H=e.value,L=e.variant,R=s(e,i),M=p;if(void 0!==S&&S>=2){var F=b.formatMessage({id:"Terra.form.select.maxSelectionHelp"},{text:S});M=p?a.default.createElement("span",null,F," ",p):F}return p&&f&&O?t="".concat(j,"-error ").concat(j,"-help"):(p&&(t="".concat(j,"-help")),f&&O&&(t="".concat(j,"-error"))),a.default.createElement(d.default,c({},R,{label:g,labelAttrs:E,error:f,help:M,hideRequired:v,required:A,showOptional:q,isInvalid:O,isInline:m,isLabelHidden:y,htmlFor:j,maxWidth:w}),a.default.createElement(o.default,c({},_,{ariaLabel:g,allowClear:l,"aria-describedby":t,disabled:_.disabled||r,id:j,isIncomplete:h,isInvalid:O,isTouchAccessible:C,defaultValue:u,maxHeight:x||_.maxHeight,maxSelectionCount:void 0!==S&&S<2?void 0:S,onChange:I,placeholder:T,required:A,value:H,variant:L}),n))};b.propTypes=p,b.defaultProps=v,b.Option=o.default.Option,b.OptGroup=o.default.OptGroup;var h=(0,u.injectIntl)(b);t.default=h},33548:function(e,t,l){l.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}}}]);