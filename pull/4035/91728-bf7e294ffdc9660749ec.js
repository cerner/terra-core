"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[91728],{91728:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(67294)),i=n(t(19845)),r=n(t(36594)),d=n(t(14427));function n(e){return e&&e.__esModule?e:{default:e}}var u=i.default.bind(d.default);l.default=function(){return a.default.createElement("div",{className:u("test-shell")},a.default.createElement(r.default,{label:"Required Field Text",options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],required:!0,selectId:"test-id"}))}},36594:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=o(t(67294)),i=o(t(45697)),r=o(t(65318)),d=o(t(81229)),n=t(7461),u=["defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isLabelHidden","isInvalid","isFilterStyle","label","labelAttrs","maxWidth","onChange","options","required","selectAttrs","selectId","showOptional","value"];function o(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}function f(e,l){if(null==e)return{};var t,a,i=function(e,l){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(i[t]=e[t]);return i}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c={defaultValue:i.default.oneOfType([i.default.number,i.default.string]),disabled:i.default.bool,error:i.default.node,help:i.default.node,hideRequired:i.default.bool,isIncomplete:i.default.bool,isInline:i.default.bool,isLabelHidden:i.default.bool,isInvalid:i.default.bool,isFilterStyle:i.default.bool,label:i.default.node.isRequired,labelAttrs:i.default.object,maxWidth:i.default.string,onChange:i.default.func,options:i.default.arrayOf(i.default.oneOfType([n.optionPropType,n.optGroupPropType])),required:i.default.bool,selectAttrs:i.default.object,selectId:i.default.string.isRequired,showOptional:i.default.bool,value:i.default.oneOfType([i.default.number,i.default.string])},p=function(e){var l,t=e.defaultValue,i=e.disabled,n=e.error,o=e.help,c=e.hideRequired,p=e.isIncomplete,b=e.isInline,h=e.isLabelHidden,v=e.isInvalid,y=e.isFilterStyle,m=e.label,O=e.labelAttrs,I=e.maxWidth,g=e.onChange,q=e.options,_=e.required,j=e.selectAttrs,w=e.selectId,P=e.showOptional,S=e.value,A=f(e,u),R=o?a.default.createElement("span",null,o):void 0;return o&&n&&v?l="".concat(w,"-error ").concat(w,"-help"):(o&&(l="".concat(w,"-help")),n&&v&&(l="".concat(w,"-error"))),a.default.createElement(r.default,s({},A,{label:m,labelAttrs:O,error:n,help:R,hideRequired:c,required:_,showOptional:P,isInvalid:v,isInline:b,isLabelHidden:h,htmlFor:w,maxWidth:I}),a.default.createElement(d.default,{attrs:j,id:w,ariaDescribedBy:l,ariaLabel:m,disabled:i,isIncomplete:p,isInvalid:v,defaultValue:t,required:_,onChange:g,options:q,value:S,isFilterStyle:y}))};p.propTypes=c,p.defaultProps={disabled:!1,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isFilterStyle:!1,isLabelHidden:!1,required:!1,showOptional:!1};l.default=p},14427:function(e,l,t){t.r(l),l.default={"test-shell":"NativeSelectTest-module__test-shell___NbuPM"}}}]);