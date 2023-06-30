"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[80873],{89098:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(l(67294)),d=u(l(47166)),i=u(l(51596)),n=u(l(33548));function u(e){return e&&e.__esModule?e:{default:e}}var r=d.default.bind(n.default),o=function(){return a.default.createElement("div",{className:r("content-wrapper")},a.default.createElement(i.default,{label:"Multi select Field",placeholder:"Select a number",selectId:"multiSelectField",maxHeight:300},a.default.createElement(i.default.Option,{value:"1",display:"One"}),a.default.createElement(i.default.Option,{value:"2",display:"Two"}),a.default.createElement(i.default.Option,{value:"3",display:"Three"}),a.default.createElement(i.default.Option,{value:"4",display:"Four"}),a.default.createElement(i.default.Option,{value:"5",display:"Five"}),a.default.createElement(i.default.Option,{value:"6",display:"Six"}),a.default.createElement(i.default.Option,{value:"7",display:"Seven"}),a.default.createElement(i.default.Option,{value:"8",display:"Eight"}),a.default.createElement(i.default.Option,{value:"9",display:"Nine"}),a.default.createElement(i.default.Option,{value:"10",display:"Ten"}),a.default.createElement(i.default.Option,{value:"11",display:"Eleven"}),a.default.createElement(i.default.Option,{value:"12",display:"Twelve"}),a.default.createElement(i.default.Option,{value:"13",display:"Thirteen"})))};t.default=o},51596:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(l(67294)),d=f(l(45697)),i=l(25387),n=f(l(65318)),u=f(l(88220)),r=f(l(97574)),o=f(l(4626)),s=["children","defaultValue","disabled","error","help","hideRequired","intl","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxHeight","maxSelectionCount","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"];function f(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var l,a,d=function(e,t){if(null==e)return{};var l,a,d={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(d[l]=e[l]);return d}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(d[l]=e[l])}return d}var b={children:d.default.node,label:d.default.string.isRequired,defaultValue:d.default.oneOfType([d.default.string,d.default.number,d.default.array]),disabled:d.default.bool,error:d.default.node,help:d.default.node,hideRequired:d.default.bool,intl:d.default.shape({formatMessage:d.default.func}).isRequired,isIncomplete:d.default.bool,isInline:d.default.bool,isInvalid:d.default.bool,isLabelHidden:d.default.bool,isTouchAccessible:d.default.bool,labelAttrs:d.default.object,maxHeight:d.default.number,maxSelectionCount:d.default.number,maxWidth:d.default.string,onChange:d.default.func,placeholder:d.default.string,required:d.default.bool,selectAttrs:d.default.object,selectId:d.default.string.isRequired,showOptional:d.default.bool,value:d.default.oneOfType([d.default.string,d.default.number,d.default.array])},h={children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxHeight:void 0,maxSelectionCount:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},m=function(e){var t,l=e.children,d=e.defaultValue,i=e.disabled,r=e.error,o=e.help,f=e.hideRequired,b=e.intl,h=e.isIncomplete,m=e.isInline,v=e.isInvalid,O=e.isLabelHidden,y=e.isTouchAccessible,g=e.label,I=e.labelAttrs,x=e.maxHeight,E=e.maxSelectionCount,_=e.maxWidth,q=e.onChange,w=e.placeholder,A=e.required,S=e.selectAttrs,T=e.selectId,H=e.showOptional,j=e.value,C=p(e,s),R=o;if(void 0!==E&&E>=2){var L=b.formatMessage({id:"Terra.form.select.maxSelectionHelp"},{text:E});R=o?a.default.createElement("span",null,L," ",o):L}return o&&r&&v?t="".concat(T,"-error ").concat(T,"-help"):(o&&(t="".concat(T,"-help")),r&&v&&(t="".concat(T,"-error"))),a.default.createElement(n.default,c({},C,{label:g,labelAttrs:I,error:r,help:R,hideRequired:f,required:A,showOptional:H,isInvalid:v,isInline:m,isLabelHidden:O,htmlFor:T,maxWidth:_}),a.default.createElement(u.default,c({},S,{ariaLabel:g,"aria-describedby":t,disabled:S.disabled||i,inputId:T,isIncomplete:h,isInvalid:v,isTouchAccessible:y,defaultValue:d,maxHeight:x||S.maxHeight,maxSelectionCount:void 0!==E&&E<2?void 0:E,onChange:q,placeholder:w,required:A,value:j}),l))};m.propTypes=b,m.defaultProps=h,m.Option=o.default,m.OptGroup=r.default;var v=(0,i.injectIntl)(m);t.default=v},33548:function(e,t,l){l.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}}}]);