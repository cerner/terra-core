"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[25270],{55713:function(e,r,a){var t=a(24994);r.A=void 0;var n=t(a(96540)),d=t(a(5556)),o=t(a(67967)),i=t(a(25642)),l=o.default.bind(i.default),m={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},s=function(e){var r=e.src,a=e.name,t=e.url,d=e.version,o=n.default.createElement("a",{className:l("badge"),href:t||"https://www.npmjs.org/package/".concat(a,"/v/").concat(d)},n.default.createElement("span",{className:l("badge-name")},t?"package":"npm"),n.default.createElement("span",{className:l("badge-version")},"v".concat(d))),i=r?n.default.createElement("a",{className:l("badge"),href:r},n.default.createElement("span",{className:l("badge-name")},"github"),n.default.createElement("span",{className:l("badge-version")},"source")):void 0;return n.default.createElement("div",{className:l("badge-container")},o,i)};s.propTypes=m;r.A=s},25270:function(e,r,a){a.r(r),a.d(r,{default:function(){return s}});a(96540);var t=a(36665),n=a(5018),d=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a={};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){if(r.indexOf(t)>=0)continue;a[t]=e[t]}return a}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)a=d[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l={},m="wrapper";function s(e){var r=e.components,a=i(e,d);return(0,t.mdx)(m,o({},l,a,{components:r,mdxType:"MDXLayout"}),(0,t.mdx)(n.E,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"terra-form-radio-upgrade-guide"},"Terra Form Radio Upgrade Guide"),(0,t.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),(0,t.mdx)("h3",{id:"props"},"Props"),(0,t.mdx)("h4",{id:"updated"},"Updated"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Form Fields allowed the ",(0,t.mdx)("inlineCode",{parentName:"li"},"label")," to be a node, which potentially breaks the display when injecting other non-inline-only text elements (terra-text) or has the potential to completely break accessibility if something non-text based would be passed in."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"labelText")," prop's type changed from node to string."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"legend")," prop's type changed from node to string.")),(0,t.mdx)("h5",{id:"steps-to-upgrade"},"Steps to Upgrade"),(0,t.mdx)("p",null,"To upgrade from 3.0 to 4.0 each existing Radio must be reviewed and updated to ensure only a string is being passed to the ",(0,t.mdx)("inlineCode",{parentName:"p"},"labelText")," and ",(0,t.mdx)("inlineCode",{parentName:"p"},"legend ")," props. Solutions passing node data types need to be reworked to provide only a string."),(0,t.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,t.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,t.mdx)("h4",{id:"renamed"},"Renamed"),(0,t.mdx)("table",null,(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,t.mdx)("th",{parentName:"tr",align:null},"New"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-radio-outer-ring-checked-hover-border-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-radio-hover-checked-outer-ring-border-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-radio-outer-ring-checked-hover-border-width"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-radio-hover-checked-outer-ring-border-width")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-radio-focus-ring-background-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-radio-focus-before-ring-background-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-radio-focus-ring-height"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-radio-focus-before-ring-height")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-radio-focus-ring-left"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-radio-focus-before-ring-left")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-radio-focus-ring-top"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-radio-focus-before-ring-top")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-radio-focus-ring-width"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-radio-focus-before-ring-width")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-radio-field-error-icon"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-radio-field-error-background")))),(0,t.mdx)("h4",{id:"added"},"Added"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"--terra-form-radio-field-label-error-icon-margin-right")),(0,t.mdx)("h4",{id:"removed"},"Removed"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"--terra-form-radio-field-label-error-icon-padding-right")))}s.isMDXComponent=!0},5018:function(e,r,a){a.d(r,{E:function(){return d}});var t=a(96540),n=a(55713),d=function(e){var r=e.url;return t.createElement(n.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-radio",name:"terra-form-radio",version:"4.55.0",url:r})}},25642:function(e,r,a){a.r(r),r.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);