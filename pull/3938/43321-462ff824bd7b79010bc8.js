"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[43321],{22863:function(e,a,r){var t=r(64836);a.Z=void 0;var n=t(r(67294)),o=t(r(45697)),c=t(r(47166)),l=t(r(17422)),s=c.default.bind(l.default),u={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},d=function(e){var a=e.src,r=e.name,t=e.url,o=e.version,c=n.default.createElement("a",{className:s("badge"),href:t||"https://www.npmjs.org/package/".concat(r,"/v/").concat(o)},n.default.createElement("span",{className:s("badge-name")},t?"package":"npm"),n.default.createElement("span",{className:s("badge-version")},"v".concat(o))),l=a?n.default.createElement("a",{className:s("badge"),href:a},n.default.createElement("span",{className:s("badge-name")},"github"),n.default.createElement("span",{className:s("badge-version")},"source")):void 0;return n.default.createElement("div",{className:s("badge-container")},c,l)};d.propTypes=u;var i=d;a.Z=i},43321:function(e,a,r){r.r(a),r.d(a,{default:function(){return d}});r(67294);var t=r(81254),n=r(61701),o=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},c.apply(this,arguments)}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s={},u="wrapper";function d(e){var a=e.components,r=l(e,o);return(0,t.mdx)(u,c({},s,r,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)(n.C,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"terra-table-upgrade-guide"},"Terra Table Upgrade Guide"),(0,t.mdx)("h2",{id:"changes-from-4x-to-50"},"Changes from 4.x to 5.0"),(0,t.mdx)("p",null,"Terra table will no longer support grid-like (focus, keyboard navigation, etc) functionality and now behaves more like a native, accessible table. See the Docs for new functionality."))}d.isMDXComponent=!0},61701:function(e,a,r){r.d(a,{C:function(){return o}});var t=r(67294),n=r(22863),o=function(e){var a=e.url;return t.createElement(n.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-table",name:"terra-table",version:"4.36.0",url:a})}},17422:function(e,a,r){r.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);