"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[64865],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),i=a(n(45697)),l=a(n(47166)),o=a(n(17422)),u=l.default.bind(o.default),d={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},s=function(e){var t=e.src,n=e.name,a=e.url,i=e.version,l=r.default.createElement("a",{className:u("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},r.default.createElement("span",{className:u("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(i))),o=t?r.default.createElement("a",{className:u("badge"),href:t},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},l,o)};s.propTypes=d;var c=s;t.Z=c},64865:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});n(67294);var a=n(81254),r=n(60619),i=n(11304),l=n(32331),o=n(71112),u=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={},m="wrapper";function p(e){var t=e.components,n=s(e,u);return(0,a.mdx)(m,d({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(i.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"accessibility-guide-for-terra-alert"},"Accessibility Guide for Terra Alert"),(0,a.mdx)(r.Notice,{variant:"important",ariaLevel:"2",mdxType:"Notice"},(0,a.mdx)("p",null,"Using notifications improperly may prevent some of your users from understanding your UI.")),(0,a.mdx)(l.Z,{mdxType:"Whitespace"}),(0,a.mdx)("h2",{id:"why-is-this-important"},"Why is this important?"),(0,a.mdx)("p",null,"Terra's Alert component is a notification banner with varying criticalities that communicates cautions, errors, information, and other general information to the user in context of their workflow. As such, special consideration must be made to inform screen reader users of their presence on the page, just as sighted users' attention would be drawn to them in the visual UI."),(0,a.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,a.mdx)("h3",{id:"code-considerations"},"Code Considerations"),(0,a.mdx)("h4",{id:"consistency"},"Consistency"),(0,a.mdx)("p",null,"The use of each variant of this component should be consistent in order to provide the best user experience."),(0,a.mdx)("h4",{id:"notification-criticality"},"Notification Criticality"),(0,a.mdx)("p",null,'The user only expects to be interrupted for notifications (alerts) that are of high criticality. This behavior is referred to as "assertive".'),(0,a.mdx)("p",null,'Less critical notifications should wait until the screen reader has finished reading the current item before notification content is read to the user. This behavior is referred to as "polite".'),(0,a.mdx)("p",null,"By default, Terra Alert will set the role to ",(0,a.mdx)("inlineCode",{parentName:"p"},'"alert"')," (or assertive) for the ",(0,a.mdx)("inlineCode",{parentName:"p"},"alert")," type and ",(0,a.mdx)("inlineCode",{parentName:"p"},'"status"')," (or polite) for all other types.\nTerra Alert has an optional role prop but should be used carefully when the default does not meet accessibility or usability expectations."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Role"),(0,a.mdx)("th",{parentName:"tr",align:null},"Purpose"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"Alert"),(0,a.mdx)("td",{parentName:"tr",align:null},"See ",(0,a.mdx)(o.default,{href:"https://w3c.github.io/aria/#alert",variant:"external",mdxType:"Hyperlink"},"WAI-ARIA Alert Role"),(0,a.mdx)("a",{parentName:"td",href:"/terra-core/pull/3800/components/cerner-terra-core-docs/alert/accessibility-guide"},(0,a.mdx)("sup",null,"[1]")),' - "A type of live region with important, and usually time-sensitive, information."')),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"Status"),(0,a.mdx)("td",{parentName:"tr",align:null},"See ",(0,a.mdx)(o.default,{href:"https://w3c.github.io/aria/#status",variant:"external",mdxType:"Hyperlink"},"WAI-ARIA Status Role"),(0,a.mdx)("a",{parentName:"td",href:"/terra-core/pull/3800/components/cerner-terra-core-docs/alert/accessibility-guide"},(0,a.mdx)("sup",null,"[1]")),' - "A type of live region whose content is advisory information for the user but is not important enough to justify an alert, often but not necessarily presented as a status bar."')))),(0,a.mdx)("h4",{id:"assistive-technologies"},"Assistive technologies"),(0,a.mdx)("p",null,"In combination with the notification criticality, screen reader users should understand the importance of the notification when presented."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"The ",(0,a.mdx)("inlineCode",{parentName:"li"},'"alert"')," role will interrupt the user and announce the high critical notification immediately."),(0,a.mdx)("li",{parentName:"ul"},"The ",(0,a.mdx)("inlineCode",{parentName:"li"},'"status"')," role will not interrupt the user and present politely.")),(0,a.mdx)(r.Notice,{variant:"important",ariaLevel:"5",mdxType:"Notice"},(0,a.mdx)("h6",{id:"accessibility-guidance-live-regions"},"Accessibility Guidance: Live regions"),(0,a.mdx)("p",null,"For screen readers to pick up and announce a newly rendered notification, the notification must be within an aria-live region.\nTo enable assistive technologies the ability to inform the user of a less critical notification in a polite (non-interruptive) way, ensure the Alert is\nwithin an element where ",(0,a.mdx)("inlineCode",{parentName:"p"},'aria-live="polite"'),"."),(0,a.mdx)("p",null,"Please note: the ",(0,a.mdx)("inlineCode",{parentName:"p"},'"alert"')," role implicitly has aria-live value of ",(0,a.mdx)("inlineCode",{parentName:"p"},"assertive")," and will interrupt without being in a region where aria-live is previously present."),(0,a.mdx)("div",{"aria-label":"Example code"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"import Alert from 'terra-alert';\n\n<div aria-live=\"polite\">\n    {isOpen && (\n        <Alert>\n            Meaningful alert content.\n        </Alert>\n    )}\n</div>\n")))),(0,a.mdx)("h2",{id:"linked-references"},"Linked References:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("a",{parentName:"li",href:"https://w3c.github.io/aria/"},'"Accessible Rich Internet Applications (WAI-ARIA) 1.3"'),". World Wide Web Consortium. Last updated 01 May 2023. Retrieved 2 May 2023.")))}p.isMDXComponent=!0},11304:function(e,t,n){n.d(t,{C:function(){return i}});var a=n(67294),r=n(22863),i=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-image",name:"terra-image",version:"3.38.0",url:t})}},32331:function(e,t,n){t.Z=void 0;var a=d(n(67294)),r=d(n(45697)),i=d(n(94184)),l=d(n(47166)),o=d(n(32172)),u=["newline"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=l.default.bind(o.default),p={newline:r.default.oneOf([1,2,3,4,5,6,7,8])},f=function(e){var t=e.newline,n=c(e,u),r=(0,i.default)(m("whitespace","newline-".concat(t)),n.className);return a.default.createElement("div",s({},n,{className:r,"aria-hidden":"true"}))};f.propTypes=p,f.defaultProps={newline:1};var _=f;t.Z=_},75295:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),r=d(n(45697)),i=d(n(47166)),l=d(n(50026)),o=d(n(72145)),u=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=i.default.bind(o.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_={children:r.default.string},h=function(e){var t=e.children,n=c(e,u),r=a.default.useContext(l.default),o=(0,i.default)(m(["button",r.className]),n.className);return a.default.createElement("button",s({},n,{type:"button",className:o,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};h.propTypes=_;var b=h;t.default=b},77904:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),i=u(n(47166)),l=u(n(50026)),o=u(n(45491));function u(e){return e&&e.__esModule?e:{default:e}}var d=i.default.bind(o.default),s={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},c=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,i=a.default.useContext(l.default);return a.default.createElement("div",{className:d("notice",n,i.className)},a.default.createElement("div",{className:d("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:d("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:d("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:d("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:d("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:d("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};c.propTypes=s,c.defaultProps={ariaLevel:"2",variant:"important"};var m=c;t.default=m},78026:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(67294)),r=s(n(45697)),i=s(n(94184)),l=s(n(47166)),o=s(n(50026)),u=s(n(15877)),d=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.default.bind(u.default),f={title:r.default.string},_=function(e){var t=e.title,n=m(e,d),r=a.default.useContext(o.default),l=(0,i.default)(p(["placeholder",r.className]),n.className),u=p(["inner"]);return a.default.createElement("div",c({},n,{className:l}),a.default.createElement("div",{className:u},a.default.createElement("p",{className:p("title")},t)))};_.propTypes=f,_.defaultProps={title:""};var h=_;t.default=h},60619:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=l(n(77904)),r=l(n(78026)),i=l(n(75295));function l(e){return e&&e.__esModule?e:{default:e}}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},32172:function(e,t,n){n.r(t),t.default={whitespace:"Whitespace-module__whitespace___DPfQS","newline-1":"Whitespace-module__newline-1___bKmlz","newline-2":"Whitespace-module__newline-2___bmmzw","newline-3":"Whitespace-module__newline-3___ORV3M","newline-4":"Whitespace-module__newline-4___g7otO","newline-5":"Whitespace-module__newline-5___sOge+","newline-6":"Whitespace-module__newline-6___rHqfU","newline-7":"Whitespace-module__newline-7___iiRm7","newline-8":"Whitespace-module__newline-8___nGGTR"}},72145:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___mWSPm","orion-fusion-theme":"Button-module__orion-fusion-theme___nj7k4",button:"Button-module__button___r5O1Q","is-active":"Button-module__is-active___CVWJw"}},45491:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___J4EGN","orion-fusion-theme":"Notice-module__orion-fusion-theme___1W9PK",notice:"Notice-module__notice___8kOwf",children:"Notice-module__children___cF5Rb",accessory:"Notice-module__accessory___h3l7H",title:"Notice-module__title___PeXjO","ux-recommendation":"Notice-module__ux-recommendation___tJWAL",caution:"Notice-module__caution___STLbH",deprecation:"Notice-module__deprecation___rWWLq",maintenance:"Notice-module__maintenance___o2AK1",important:"Notice-module__important___WpELD","not-supported":"Notice-module__not-supported___eAx6o",paragraph:"Notice-module__paragraph___BwEGe",list:"Notice-module__list___kOyCE"}},15877:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___rMAZk","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___78cuG",placeholder:"Placeholder-module__placeholder___FPYJB",inner:"Placeholder-module__inner___-U1IZ",title:"Placeholder-module__title___lsXDJ"}}}]);