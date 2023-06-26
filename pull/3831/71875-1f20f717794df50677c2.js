"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[71875],{94581:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var i=n(67294),r=n(81254),a=n(60619),o=n(11304),l=n(32331),s=n(98667),c=n(71585),u=n(72195),d=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f={};function h(e){var t=e.components,n=p(e,d);return(0,r.mdx)("wrapper",m({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport IconHelp from 'terra-icon/lib/icon/IconHelp';\nimport classNames from 'classnames/bind';\nimport Alert from 'terra-alert';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst CustomExampleNoTitle = () => (\n  <Alert type=\"custom\" customColorClass={cx(['my-app-alert-help-example'])} customIcon={<IconHelp />}>\n    <span>\n      This is a\n      <b> custom</b>\n      {' '}\n      notification banner\n    </span>\n  </Alert>\n);\n\nexport default CustomExampleNoTitle;\n\n")))}h.isMDXComponent=!0;var y=n(49271),b=n(86505),x=function(e){var t=e.title,n=e.description,r=e.isExpanded;return i.createElement(y.Z,{title:t||"Custom Example No Title",description:n,example:i.createElement(u.Z,null),exampleCssSrc:i.createElement(b.Z,null),exampleSrc:i.createElement(h,null),isExpanded:r})},v=n(71112),g=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},w.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _={},O="wrapper";function A(e){var t=e.components,n=N(e,g);return(0,r.mdx)(O,w({},_,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"accessibility-guide-for-terra-alert"},"Accessibility Guide for Terra Alert"),(0,r.mdx)(a.Notice,{variant:"important",ariaLevel:"2",mdxType:"Notice"},(0,r.mdx)("p",null,"Using notifications improperly may prevent some of your users from understanding your UI.")),(0,r.mdx)(l.Z,{mdxType:"Whitespace"}),(0,r.mdx)("h2",{id:"why-is-this-important"},"Why is this important?"),(0,r.mdx)("p",null,"Terra's Alert component is a notification banner with varying criticalities that communicates cautions, errors, information, and other general information to the user in context of their workflow. As such, special consideration must be made to inform screen reader users of their presence on the page, just as sighted users' attention would be drawn to them in the visual UI."),(0,r.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,r.mdx)("h3",{id:"code-considerations"},"Code Considerations"),(0,r.mdx)("h4",{id:"consistency"},"Consistency"),(0,r.mdx)("p",null,"The use of each variant of this component should be consistent in order to provide the best user experience."),(0,r.mdx)("h4",{id:"notification-criticality"},"Notification Criticality"),(0,r.mdx)("p",null,'The user only expects to be interrupted for notifications (alerts) that are of high criticality. This behavior is referred to as "assertive".'),(0,r.mdx)("p",null,'Less critical notifications should wait until the screen reader has finished reading the current item before notification content is read to the user. This behavior is referred to as "polite".'),(0,r.mdx)("p",null,"By default, Terra Alert will set the role to ",(0,r.mdx)("inlineCode",{parentName:"p"},'"alert"')," (or assertive) for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"alert")," notification type and ",(0,r.mdx)("inlineCode",{parentName:"p"},'"status"')," (or polite) for all other notification types.\nTerra Alert has an optional ",(0,r.mdx)("inlineCode",{parentName:"p"},"role")," prop but should be used carefully when the default does not meet accessibility or usability expectations."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Role"),(0,r.mdx)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Alert"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)(v.default,{href:"https://w3c.github.io/aria/#alert",variant:"external",mdxType:"Hyperlink"},"WAI-ARIA Alert Role"),(0,r.mdx)("a",{parentName:"td",href:"/terra-core/pull/3831/components/cerner-terra-core-docs/alert/accessibility-guide"},(0,r.mdx)("sup",null,"[1]")),' - "A type of live region with important, and usually time-sensitive, information."')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Status"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)(v.default,{href:"https://w3c.github.io/aria/#status",variant:"external",mdxType:"Hyperlink"},"WAI-ARIA Status Role"),(0,r.mdx)("a",{parentName:"td",href:"/terra-core/pull/3831/components/cerner-terra-core-docs/alert/accessibility-guide"},(0,r.mdx)("sup",null,"[1]")),' - "A type of live region whose content is advisory information for the user but is not important enough to justify an alert, often but not necessarily presented as a status bar."')))),(0,r.mdx)("h4",{id:"alert-notification-type"},"Alert Notification Type"),(0,r.mdx)(a.Notice,{variant:"ux-recommendation",ariaLevel:"6",mdxType:"Notice"},(0,r.mdx)("p",null,"It may be more appropriate to use a modal or component with ",(0,r.mdx)("inlineCode",{parentName:"p"},"alertdialog")," if presenting the user with an alert and required action to address the alert.")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},'"alert"')," role/notification type will cause keyboard navigation focus to shift to the notification banner body.\nThis helps users quickly take action when it is critical but can optionally be disabled via the ",(0,r.mdx)("inlineCode",{parentName:"li"},"disableAlertActionFocus")," prop."),(0,r.mdx)("li",{parentName:"ul"},"Notifications with ",(0,r.mdx)("inlineCode",{parentName:"li"},'"alert"')," role/notification type do not need to explicitly be in an aria-live region.\nIt is recommended to separate them from less critical notification banners to prevent assistive technologies from confusing them."),(0,r.mdx)("li",{parentName:"ul"},"By default, Terra Alert uses the ",(0,r.mdx)("inlineCode",{parentName:"li"},'"alert"')," notification type.")),(0,r.mdx)("p",null,"Demo of Terra Alert with an action element."),(0,r.mdx)(s.Z,{mdxType:"AlertActionFocusDemo"}),(0,r.mdx)("h4",{id:"assistive-technologies"},"Assistive technologies"),(0,r.mdx)("p",null,"In combination with the notification criticality, screen reader users should understand the importance of the notification when presented."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},'"alert"')," role will interrupt the user and announce the high critical notification immediately."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},'"status"')," role will not interrupt the user and present politely.")),(0,r.mdx)("h4",{id:"live-regions"},"Live regions"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"For less critical notifications (non-alerts), the notification banner should be in an ",(0,r.mdx)("inlineCode",{parentName:"li"},'aria-live="polite"')," region.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},'For screen readers to pick up and announce a newly rendered notification, the notification banner must be within an aria-live region.\nTo enable assistive technologies the ability to inform the user of a less critical notification in a polite (non-interruptive) way, ensure the notification banner is\nwithin an element where aria-live="polite".'))),(0,r.mdx)("li",{parentName:"ul"},"Avoid mixing alert notifications and less critical notifications in the same region.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},'"alert"')," notification type/role implicitly has aria-live value of ",(0,r.mdx)("inlineCode",{parentName:"li"},"assertive")," and will interrupt without being in a region where aria-live was previously set.\nIt is recommended to separate critical alert notifications from less critical notification banners to prevent any confusion.")))),(0,r.mdx)("div",{"aria-label":"Example code"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'import Alert from \'terra-alert\';\n\n<>\n    // This less critical notification should be in polite aria-live region so screen reader users are notified.\n    <div aria-live="polite">\n        {isOpen && (\n            <Alert type="success">\n                This notification is a less critical and should be polite.\n            </Alert>\n        )}\n    </div>\n\n    // Alert notifications are implicitly assertive, no aria-live needed\n    // It is recommended to keep these separate from polite aria-live regions.\n    <div>\n        {isOpen && (\n            <Alert type="alert">\n                This notification is a critical alert that is interruptive.\n            </Alert>\n        )}\n    </div>\n</>\n'))),(0,r.mdx)("h4",{id:"custom-titles"},"Custom Titles"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Custom notification banners should have a title provided to the ",(0,r.mdx)("inlineCode",{parentName:"li"},"title")," prop in order to be accessible.")),(0,r.mdx)(x,{title:"Bad: Avoid notifications with no titles",mdxType:"CustomExampleNoTitle"}),(0,r.mdx)(c.Z,{title:"Good: Titles help users understand notifications",mdxType:"CustomExample"}),(0,r.mdx)("h2",{id:"linked-references"},"Linked References:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"https://w3c.github.io/aria/"},'"Accessible Rich Internet Applications (WAI-ARIA) 1.3"'),". World Wide Web Consortium. Last updated 01 May 2023. Retrieved 2 May 2023.")))}A.isMDXComponent=!0},11304:function(e,t,n){n.d(t,{C:function(){return a}});var i=n(67294),r=n(22863),a=function(e){var t=e.url;return i.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-image",name:"terra-image",version:"3.38.0",url:t})}},32331:function(e,t,n){t.Z=void 0;var i=c(n(67294)),r=c(n(45697)),a=c(n(94184)),o=c(n(47166)),l=c(n(32172)),s=["newline"];function c(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.default.bind(l.default),p={newline:r.default.oneOf([1,2,3,4,5,6,7,8])},f=function(e){var t=e.newline,n=d(e,s),r=(0,a.default)(m("whitespace","newline-".concat(t)),n.className);return i.default.createElement("div",u({},n,{className:r,"aria-hidden":"true"}))};f.propTypes=p,f.defaultProps={newline:1};var h=f;t.Z=h},98667:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}t.Z=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),a=l(n(43868)),o=l(n(92226));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a,o,l=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(i=a.call(n)).done)&&(l.push(i.value),l.length!==t);s=!0);}catch(e){c=!0,r=e}finally{try{if(!s&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw r}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var d=function(){var e=c((0,r.useState)(!1),2),t=e[0],n=e[1];return r.default.createElement(r.default.Fragment,null,t&&r.default.createElement(o.default,{onDismiss:function(){return n(!1)},action:r.default.createElement(a.default,{text:"Action",variant:"emphasis",onClick:function(){}})},"The notification banner should be focused upon render when navigating via keyboard."),r.default.createElement(a.default,{isDisabled:t,text:"Trigger Alert Notification Banner Demo",onClick:function(){n(!0)}}))};t.Z=d},72195:function(e,t,n){t.Z=void 0;var i=s(n(67294)),r=s(n(50412)),a=s(n(47166)),o=s(n(92226)),l=s(n(20850));function s(e){return e&&e.__esModule?e:{default:e}}var c=a.default.bind(l.default),u=function(){return i.default.createElement(o.default,{type:"custom",customColorClass:c(["my-app-alert-help-example"]),customIcon:i.default.createElement(r.default,null)},i.default.createElement("span",null,"This is a",i.default.createElement("b",null," custom")," ","notification banner"))};t.Z=u},32172:function(e,t,n){n.r(t),t.default={whitespace:"Whitespace-module__whitespace___DPfQS","newline-1":"Whitespace-module__newline-1___bKmlz","newline-2":"Whitespace-module__newline-2___bmmzw","newline-3":"Whitespace-module__newline-3___ORV3M","newline-4":"Whitespace-module__newline-4___g7otO","newline-5":"Whitespace-module__newline-5___sOge+","newline-6":"Whitespace-module__newline-6___rHqfU","newline-7":"Whitespace-module__newline-7___iiRm7","newline-8":"Whitespace-module__newline-8___nGGTR"}}}]);