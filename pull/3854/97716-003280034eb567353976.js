"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[97716],{97716:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(67294)),r=d(a(43868)),n=d(a(44942)),u=d(a(30390)),o=d(a(80482)),i=d(a(61070));function d(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return l.default.createElement(i.default,null,l.default.createElement(r.default,{text:"Edit",variant:"utility",icon:l.default.createElement(n.default,null)}),l.default.createElement(r.default,{text:"Add",variant:"utility",icon:l.default.createElement(u.default,null)}),l.default.createElement(r.default,{text:"Attachment",variant:"utility",icon:l.default.createElement(o.default,null)}))}},30390:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(21969));function n(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M48 21H27V0h-6v21H0v6h21v21h6V27h21z"}))};o.displayName="IconAdd",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=o;t.default=i},80482:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(21969));function n(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M32 8v29a8 8 0 0 1-16 0V8a5 5 0 0 1 10 0v29a2 2 0 0 1-4 0V15h-3v22a5 5 0 0 0 10 0V8a8 8 0 0 0-16 0v29a11 11 0 0 0 22 0V8z"}))};o.displayName="IconAttachment",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=o;t.default=i},44942:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(21969));function n(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"m.1 48 5.7-12.8 7.1 7.1zm44.8-37.6 2.5-2.5a2.05 2.05 0 0 0 0-2.9L43 .6a2.05 2.05 0 0 0-2.9 0l-2.5 2.5zm-9.4-5.2L7.6 33.1l7.3 7.3 27.9-27.9z"}))};o.displayName="IconEdit",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=o;t.default=i},61070:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=f(a(67294)),r=f(a(45697)),n=f(a(94184)),u=f(a(47166)),o=f(a(50026)),i=f(a(62303)),d=["align","ariaControls","ariaLabel","ariaLabelledBy","children"];function f(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var v=u.default.bind(i.default),_={align:r.default.oneOf(["start","end","center"]),ariaControls:r.default.string,ariaLabel:r.default.string,ariaLabelledBy:r.default.string,children:r.default.node},b=function(e){var t=e.align,a=e.ariaControls,r=e.ariaLabel,u=e.ariaLabelledBy,i=e.children,f=s(e,d),_=l.default.useContext(o.default),b=(0,n.default)(v("toolbar","".concat(t,"-align"),_.className),f.className),m=l.default.Children.map(i,(function(e){return e?l.default.createElement("div",{className:v("item")},e):e}));return l.default.createElement("div",c({},f,{"aria-controls":a,"aria-label":u?void 0:r,"aria-labelledby":u,className:b,role:"toolbar"}),m)};b.propTypes=_,b.defaultProps={align:"start"};var m=b;t.default=m},62303:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___WS97G","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___6na+8",toolbar:"Toolbar-module__toolbar___P9DhG",item:"Toolbar-module__item___hGwSK","start-align":"Toolbar-module__start-align___vUi7h","end-align":"Toolbar-module__end-align___6Ku2K","center-align":"Toolbar-module__center-align___ljlwu"}}}]);