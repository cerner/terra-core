"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[89024],{57072:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var d=r(t(96540)),n=r(t(9047)),a=r(t(11475)),i=r(t(80089));function r(e){return e&&e.__esModule?e:{default:e}}l.default=function(){return d.default.createElement(i.default,{legend:"I am the Hidden Legend",help:"Families are eligible for family package plans",required:!0,isLegendHidden:!0},d.default.createElement(n.default,{label:"First",isInline:!0,required:!0,htmlFor:"first"},d.default.createElement(a.default,{id:"first",type:"text",name:"first",defaultValue:""})),d.default.createElement(n.default,{label:"Middle",isInline:!0,required:!0,htmlFor:"middle"},d.default.createElement(a.default,{id:"middle",type:"text",name:"middle",defaultValue:""})),d.default.createElement(n.default,{label:"Last",isInline:!0,required:!0,htmlFor:"last"},d.default.createElement(a.default,{id:"last",type:"text",name:"last",defaultValue:""})))}},80089:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var d=o(t(96540)),n=o(t(5556)),a=o(t(46942)),i=o(t(67967)),r=o(t(52103)),u=t(68414),f=o(t(69970)),s=["children","help","legend","legendAttrs","isLegendHidden","required"];function o(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var d in t)Object.prototype.hasOwnProperty.call(t,d)&&(e[d]=t[d])}return e},c.apply(this,arguments)}function _(e,l){if(null==e)return{};var t,d,n=function(e,l){if(null==e)return{};var t={};for(var d in e)if(Object.prototype.hasOwnProperty.call(e,d)){if(l.indexOf(d)>=0)continue;t[d]=e[d]}return t}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(d=0;d<a.length;d++)t=a[d],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=i.default.bind(f.default),h={children:n.default.node,help:n.default.node,legend:n.default.string,legendAttrs:n.default.object,required:n.default.bool,isLegendHidden:n.default.bool},p=function(e){var l,t,n=e.children,i=e.help,f=e.legend,o=e.legendAttrs,h=e.isLegendHidden,p=e.required,g=_(e,s),b=d.default.useContext(r.default),y=(0,a.default)(m(["fieldset",{"fieldset-required":p},b.className]),g.className),v=m(["legend",o.className,{"legend-visually-hidden":h}]),O="terra-fieldset-legend-".concat((0,u.v4)()),E="terra-fieldset-help-".concat((0,u.v4)());return d.default.createElement("fieldset",c({},g,{className:y}),f&&d.default.createElement("legend",c({id:O},o,{className:v}),f),i&&d.default.createElement("small",{id:E,className:m("help-text"),tabIndex:"-1"},i),d.default.createElement("div",{className:m("fieldset-children")},(i||f)&&n?(l=n,t=[],d.default.Children.forEach(l,(function(e){t.push(d.default.cloneElement(e,{"aria-labelledby":"".concat(O," ").concat(E)}))})),t):n))};p.propTypes=h,p.defaultProps={legendAttrs:{},required:!1,isLegendHidden:!1};l.default=p},69970:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"Fieldset-module__clinical-lowlight-theme___j+Wn3","orion-fusion-theme":"Fieldset-module__orion-fusion-theme___SXBiS",fieldset:"Fieldset-module__fieldset___Wlpg-","fieldset-required":"Fieldset-module__fieldset-required___59GHf",legend:"Fieldset-module__legend___Nas0D","legend-visually-hidden":"Fieldset-module__legend-visually-hidden___DRQXh","help-text":"Fieldset-module__help-text___hL4PH","fieldset-children":"Fieldset-module__fieldset-children___Js-NM"}}}]);