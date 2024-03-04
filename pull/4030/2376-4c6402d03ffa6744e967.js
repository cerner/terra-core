"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[2376],{55713:function(e,n,a){var t=a(24994);n.A=void 0;var r=t(a(96540)),l=t(a(5556)),d=t(a(67967)),i=t(a(25642)),m=d.default.bind(i.default),o={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},s=function(e){var n=e.src,a=e.name,t=e.url,l=e.version,d=r.default.createElement("a",{className:m("badge"),href:t||"https://www.npmjs.org/package/".concat(a,"/v/").concat(l)},r.default.createElement("span",{className:m("badge-name")},t?"package":"npm"),r.default.createElement("span",{className:m("badge-version")},"v".concat(l))),i=n?r.default.createElement("a",{className:m("badge"),href:n},r.default.createElement("span",{className:m("badge-name")},"github"),r.default.createElement("span",{className:m("badge-version")},"source")):void 0;return r.default.createElement("div",{className:m("badge-container")},d,i)};s.propTypes=o;n.A=s},2376:function(e,n,a){a.r(n),a.d(n,{default:function(){return s}});a(96540);var t=a(36665),r=a(85515),l=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d.apply(this,arguments)}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m={},o="wrapper";function s(e){var n=e.components,a=i(e,l);return(0,t.mdx)(o,d({},m,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)(r.E,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"terra-responsive-element-upgrade-guide"},"Terra Responsive Element Upgrade Guide"),(0,t.mdx)("h2",{id:"changes-from-40-to-50"},"Changes from 4.0 to 5.0"),(0,t.mdx)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"The ",(0,t.mdx)("inlineCode",{parentName:"li"},"breakpoints.scss")," file has been removed."),(0,t.mdx)("li",{parentName:"ul"},"The ",(0,t.mdx)("inlineCode",{parentName:"li"},"defaultElement")," prop has been removed."),(0,t.mdx)("li",{parentName:"ul"},"The breakpoint ranges have been changed to align with ",(0,t.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/#/components/cerner-terra-core-docs/breakpoints/about"},"terra-breakpoints"),"."),(0,t.mdx)("li",{parentName:"ul"},"The width calculation has been changed to use the total width of parent container when responsiveTo prop is set as 'parent'. This means the padding and border of the parent container is included in the available width.")),(0,t.mdx)("h3",{id:"new-features"},"New Features"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added an ",(0,t.mdx)("inlineCode",{parentName:"li"},"onChange")," callback function that is invoked when a breakpoint range changes to enable creating controlled responsive elements."),(0,t.mdx)("li",{parentName:"ul"},"Added an ",(0,t.mdx)("inlineCode",{parentName:"li"},"onResize")," callback function that is invoked when the responsive target triggers a resize event."),(0,t.mdx)("li",{parentName:"ul"},"Added ",(0,t.mdx)("inlineCode",{parentName:"li"},"children")," as a prop to use in conjunction with ",(0,t.mdx)("inlineCode",{parentName:"li"},"onChange")," to create controlled components.")),(0,t.mdx)("h3",{id:"breakpoint-changes"},"Breakpoint Changes"),(0,t.mdx)("p",null,"The breakpoint ranges have all shifted. This change was made to remove the ambiguous breakpoint range in-between 0 and tiny. Previously tiny started at 544px. The range from 0 to 543px had no associated breakpoint. It was considered the default size. Tiny now starts at 0."),(0,t.mdx)("table",null,(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"Breakpoint"),(0,t.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,t.mdx)("th",{parentName:"tr",align:null},"Updated"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"tiny"),(0,t.mdx)("td",{parentName:"tr",align:null},"544 - 767"),(0,t.mdx)("td",{parentName:"tr",align:null},"0 - 543")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"small"),(0,t.mdx)("td",{parentName:"tr",align:null},"768 - 991"),(0,t.mdx)("td",{parentName:"tr",align:null},"544 - 767")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"medium"),(0,t.mdx)("td",{parentName:"tr",align:null},"992 - 1215"),(0,t.mdx)("td",{parentName:"tr",align:null},"768 - 991")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"large"),(0,t.mdx)("td",{parentName:"tr",align:null},"1216 - 1439"),(0,t.mdx)("td",{parentName:"tr",align:null},"992 - 1215")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"huge"),(0,t.mdx)("td",{parentName:"tr",align:null},"1440 - ∞"),(0,t.mdx)("td",{parentName:"tr",align:null},"1216 - 1439")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"enormous"),(0,t.mdx)("td",{parentName:"tr",align:null},"--"),(0,t.mdx)("td",{parentName:"tr",align:null},"1440 - ∞")))),(0,t.mdx)("p",null,"To upgrade, shift all declared breakpoint props by one breakpoint. During this uplift it is recommended to consider implementing a controlled version of the responsive element using the ",(0,t.mdx)("inlineCode",{parentName:"p"},"children")," and ",(0,t.mdx)("inlineCode",{parentName:"p"},"onChange")," props that have been added. Examples can be found on the doc site."),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"defaultElement -> tiny"),(0,t.mdx)("li",{parentName:"ul"},"tiny -> small"),(0,t.mdx)("li",{parentName:"ul"},"small -> medium"),(0,t.mdx)("li",{parentName:"ul"},"medium -> large"),(0,t.mdx)("li",{parentName:"ul"},"large -> huge"),(0,t.mdx)("li",{parentName:"ul"},"huge -> enormous")),(0,t.mdx)("p",null,"The ",(0,t.mdx)("inlineCode",{parentName:"p"},"breakpoints.scss")," file has been removed. Any files previously referencing ",(0,t.mdx)("inlineCode",{parentName:"p"},"breakpoints.scss")," should import the new values provided by ",(0,t.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/#/components/terra-breakpoints/breakpoints/about"},"terra-breakpoints"),"."),(0,t.mdx)("h3",{id:"examples"},"Examples"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-diff"},"- <ResponsiveElement defaultElement={<div />} large={<div />} />\n+ <ResponsiveElement tiny={<div />} huge={<div />} />\n")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-diff"},"- <ResponsiveElement tiny={<div />} huge={<div />} />\n+ <ResponsiveElement small={<div />} enormous={<div />} />\n")),(0,t.mdx)("h2",{id:"changes-from-30-to-40"},"Changes from 3.0 to 4.0"),(0,t.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,t.mdx)("p",null,"The following transitive dependency had breaking changes. See its upgrade guide for more information."),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"terra-doc-template")))}s.isMDXComponent=!0},85515:function(e,n,a){a.d(n,{E:function(){return l}});var t=a(96540),r=a(55713),l=function(e){var n=e.url;return t.createElement(r.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-responsive-element",name:"terra-responsive-element",version:"5.40.0",url:n})}},25642:function(e,n,a){a.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);