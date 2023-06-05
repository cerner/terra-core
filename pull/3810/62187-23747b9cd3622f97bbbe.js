"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[62187],{62187:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var d=r(t(67294)),n=r(t(89426));function r(e){return e&&e.__esModule?e:{default:e}}var a=function(){return d.default.createElement(n.default,{id:"populated-fieldset",legend:"Do you have any children?",legendAttrs:{className:"healtheintent-application"},name:"children_present",value:"children_present",help:"Families are eligible for family package plans",required:!0})};l.default=a},89426:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var d=o(t(67294)),n=o(t(45697)),r=o(t(94184)),a=o(t(47166)),i=o(t(50026)),u=o(t(71171)),s=o(t(65283)),f=["children","help","legend","legendAttrs","isLegendHidden","required"];function o(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var d in t)Object.prototype.hasOwnProperty.call(t,d)&&(e[d]=t[d])}return e},c.apply(this,arguments)}function _(e,l){if(null==e)return{};var t,d,n=function(e,l){if(null==e)return{};var t,d,n={},r=Object.keys(e);for(d=0;d<r.length;d++)t=r[d],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(d=0;d<r.length;d++)t=r[d],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var h=a.default.bind(s.default),p={children:n.default.node,help:n.default.node,legend:n.default.string,legendAttrs:n.default.object,required:n.default.bool,isLegendHidden:n.default.bool},g=function(e){var l,t,n=e.children,a=e.help,s=e.legend,o=e.legendAttrs,p=e.isLegendHidden,g=e.required,m=_(e,f),b=d.default.useContext(i.default),v=(0,r.default)(h(["fieldset",{"fieldset-required":g},b.className]),m.className),y=h(["legend",o.className,{"legend-visually-hidden":p}]),O="terra-fieldset-legend-".concat((0,u.default)()),j="terra-fieldset-help-".concat((0,u.default)());return d.default.createElement("fieldset",c({},m,{className:v}),s&&d.default.createElement("legend",c({id:O},o,{className:y}),s),a&&d.default.createElement("small",{id:j,className:h("help-text"),tabIndex:"-1"},a),d.default.createElement("div",{className:h("fieldset-children")},(a||s)&&n?(l=n,t=[],d.default.Children.forEach(l,(function(e){t.push(d.default.cloneElement(e,{"aria-labelledby":"".concat(O," ").concat(j)}))})),t):n))};g.propTypes=p,g.defaultProps={legendAttrs:{},required:!1,isLegendHidden:!1};var m=g;l.default=m},65283:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"Fieldset-module__clinical-lowlight-theme___j+Wn3","orion-fusion-theme":"Fieldset-module__orion-fusion-theme___SXBiS",fieldset:"Fieldset-module__fieldset___Wlpg-","fieldset-required":"Fieldset-module__fieldset-required___59GHf",legend:"Fieldset-module__legend___Nas0D","legend-visually-hidden":"Fieldset-module__legend-visually-hidden___DRQXh","help-text":"Fieldset-module__help-text___hL4PH","fieldset-children":"Fieldset-module__fieldset-children___Js-NM"}}}]);