"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[27327],{22863:function(e,t,r){var a=r(64836);t.Z=void 0;var n=a(r(67294)),o=a(r(45697)),d=a(r(47166)),u=a(r(17422)),l=d.default.bind(u.default),m={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.src,r=e.name,a=e.url,o=e.version,d=n.default.createElement("a",{className:l("badge"),href:a||"https://www.npmjs.org/package/".concat(r,"/v/").concat(o)},n.default.createElement("span",{className:l("badge-name")},a?"package":"npm"),n.default.createElement("span",{className:l("badge-version")},"v".concat(o))),u=t?n.default.createElement("a",{className:l("badge"),href:t},n.default.createElement("span",{className:l("badge-name")},"github"),n.default.createElement("span",{className:l("badge-version")},"source")):void 0;return n.default.createElement("div",{className:l("badge-container")},d,u)};c.propTypes=m;var b=c;t.Z=b},27327:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});r(67294);var a=r(81254),n=r(91107),o=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l={},m="wrapper";function c(e){var t=e.components,r=u(e,o);return(0,a.mdx)(m,d({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(n.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-button-group-upgrade-guide"},"Terra Button Group Upgrade Guide"),(0,a.mdx)("h2",{id:"changes-from-2-to-3"},"Changes from 2 to 3"),(0,a.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,a.mdx)("h4",{id:"renamed"},"Renamed"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,a.mdx)("th",{parentName:"tr",align:null},"Updated"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-button-group-button-active-and-hover-background-color"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-button-group-button-selected-and-hover-background-color")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-button-group-button-active-and-hover-border-color"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-button-group-button-selected-and-hover-border-color")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-button-group-button-active-and-hover-color"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-button-group-button-selected-and-hover-color")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-button-group-button-active-and-focus-background-color"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-button-group-button-selected-and-focus-background-color")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-button-group-button-active-and-focus-border-color"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-button-group-button-selected-and-focus-border-color")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-button-group-button-active-and-focus-box-shadow"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-button-group-button-selected-and-focus-box-shadow")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-button-group-button-active-and-focus-color"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-button-group-button-selected-and-focus-color")))),(0,a.mdx)("h3",{id:"added"},"Added"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"--terra-button-group-button-selected-and-hover-box-shadow"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-group-button-selected-background-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-group-button-selected-border-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-group-button-selected-box-shadow"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-group-button-selected-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-group-button-active-box-shadow")))}c.isMDXComponent=!0},91107:function(e,t,r){r.d(t,{C:function(){return o}});var a=r(67294),n=r(22863),o=function(e){var t=e.url;return a.createElement(n.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-button-group",name:"terra-button-group",version:"3.71.0",url:t})}},17422:function(e,t,r){r.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);