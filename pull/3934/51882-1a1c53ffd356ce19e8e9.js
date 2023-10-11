"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[51882],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(45697)),o=a(n(47166)),i=a(n(17422)),c=o.default.bind(i.default),s={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},u=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,o=r.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:c("badge-version")},"v".concat(l))),i=t?r.default.createElement("a",{className:c("badge"),href:t},r.default.createElement("span",{className:c("badge-name")},"github"),r.default.createElement("span",{className:c("badge-version")},"source")):void 0;return r.default.createElement("div",{className:c("badge-container")},o,i)};u.propTypes=s;var d=u;t.Z=d},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),c=a(n(47166)),s=n(21538),u=a(n(13810)),d=a(n(40931)),m=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=c.default.bind(p.default),h={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,c=e.isExpanded,p=(0,o.useState)(c),f=(0,l.default)(p,2),h=f[0],v=f[1],x=(0,o.useState)(!1),g=(0,l.default)(x,2),w=g[0],N=g[1],O=o.default.useContext(s.ThemeContext),E=void 0!==a,j=function(){N(!w),h&&v(!h)},T=function(){v(!h),w&&N(!w)},C=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",O.className)},o.default.createElement("div",{className:_("header")},r&&o.default.createElement("h2",{className:_("title")},r)),o.default.createElement("div",{className:_("content")},i&&o.default.createElement("div",{className:_("description")},i),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},E&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":w}),onClick:j,onKeyDown:function(e){return C(e,j)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(u.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":h}),onClick:T,onKeyDown:function(e){return C(e,T)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(u.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:_("chevron")}))):null,o.default.createElement("div",null,w&&o.default.createElement("div",{className:_("css")},a),h&&o.default.createElement("div",{className:_("code")},n))))};v.propTypes=h,v.defaultProps={isExpanded:!1};var x=v;t.Z=x},94581:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(67294),r=n(81254),l=n(60619),o=n(11304),i=n(32331),c=n(98667),s=n(71585),u=n(72195),d=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f={};function _(e){var t=e.components,n=p(e,d);return(0,r.mdx)("wrapper",m({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { IconHelp } from 'terra-icon';\nimport classNames from 'classnames/bind';\nimport Alert from 'terra-alert';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst CustomExampleNoTitle = () => (\n  <Alert type=\"custom\" customColorClass={cx(['my-app-alert-help-example'])} customIcon={<IconHelp />}>\n    <span>\n      This is a\n      <b> custom</b>\n      {' '}\n      notification banner\n    </span>\n  </Alert>\n);\n\nexport default CustomExampleNoTitle;\n\n")))}_.isMDXComponent=!0;var h=n(49271),b=n(86505),y=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(h.Z,{title:t||"Custom Example No Title",description:n,example:a.createElement(u.Z,null),exampleCssSrc:a.createElement(b.Z,null),exampleSrc:a.createElement(_,null),isExpanded:r})},v=n(71112),x=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N={},O="wrapper";function E(e){var t=e.components,n=w(e,x);return(0,r.mdx)(O,g({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"accessibility-guide-for-terra-alert"},"Accessibility Guide for Terra Alert"),(0,r.mdx)(l.Notice,{variant:"important",ariaLevel:"2",mdxType:"Notice"},(0,r.mdx)("p",null,"Using notifications improperly may prevent some of your users from understanding your UI.")),(0,r.mdx)(i.Z,{mdxType:"Whitespace"}),(0,r.mdx)("h2",{id:"why-is-this-important"},"Why is this important?"),(0,r.mdx)("p",null,"Terra's Alert component is a notification banner with varying criticalities that communicates cautions, errors, information, and other general information to the user in context of their workflow. As such, special consideration must be made to inform screen reader users of their presence on the page, just as sighted users' attention would be drawn to them in the visual UI."),(0,r.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,r.mdx)("h3",{id:"code-considerations"},"Code Considerations"),(0,r.mdx)("h4",{id:"consistency"},"Consistency"),(0,r.mdx)("p",null,"The use of each variant of this component should be consistent in order to provide the best user experience."),(0,r.mdx)("h4",{id:"notification-criticality"},"Notification Criticality"),(0,r.mdx)("p",null,'The user only expects to be interrupted for notifications (alerts) that are of high criticality. This behavior is referred to as "assertive".'),(0,r.mdx)("p",null,'Less critical notifications should wait until the screen reader has finished reading the current item before notification content is read to the user. This behavior is referred to as "polite".'),(0,r.mdx)("p",null,"By default, Terra Alert will set the role to ",(0,r.mdx)("inlineCode",{parentName:"p"},'"alert"')," (or assertive) for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"alert")," notification type and ",(0,r.mdx)("inlineCode",{parentName:"p"},'"status"')," (or polite) for all other notification types.\nTerra Alert has an optional ",(0,r.mdx)("inlineCode",{parentName:"p"},"role")," prop but should be used carefully when the default does not meet accessibility or usability expectations."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Role"),(0,r.mdx)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Alert"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)(v.default,{href:"https://w3c.github.io/aria/#alert",variant:"external",mdxType:"Hyperlink"},"WAI-ARIA Alert Role"),(0,r.mdx)("a",{parentName:"td",href:"/terra-core/pull/3934/components/cerner-terra-core-docs/alert/accessibility-guide"},(0,r.mdx)("sup",null,"[1]")),' - "A type of live region with important, and usually time-sensitive, information."')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Status"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)(v.default,{href:"https://w3c.github.io/aria/#status",variant:"external",mdxType:"Hyperlink"},"WAI-ARIA Status Role"),(0,r.mdx)("a",{parentName:"td",href:"/terra-core/pull/3934/components/cerner-terra-core-docs/alert/accessibility-guide"},(0,r.mdx)("sup",null,"[1]")),' - "A type of live region whose content is advisory information for the user but is not important enough to justify an alert, often but not necessarily presented as a status bar."')))),(0,r.mdx)("h4",{id:"alert-notification-type"},"Alert Notification Type"),(0,r.mdx)(l.Notice,{variant:"ux-recommendation",ariaLevel:"6",mdxType:"Notice"},(0,r.mdx)("p",null,"It may be more appropriate to use a modal or component with ",(0,r.mdx)("inlineCode",{parentName:"p"},"alertdialog")," if presenting the user with an alert and required action to address the alert.")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},'"alert"')," role/notification type will cause keyboard navigation focus to shift to the notification banner body.\nThis helps users quickly take action when it is critical but can optionally be disabled via the ",(0,r.mdx)("inlineCode",{parentName:"li"},"disableAlertActionFocus")," prop."),(0,r.mdx)("li",{parentName:"ul"},"Notifications with ",(0,r.mdx)("inlineCode",{parentName:"li"},'"alert"')," role/notification type do not need to explicitly be in an aria-live region.\nIt is recommended to separate them from less critical notification banners to prevent assistive technologies from confusing them."),(0,r.mdx)("li",{parentName:"ul"},"By default, Terra Alert uses the ",(0,r.mdx)("inlineCode",{parentName:"li"},'"alert"')," notification type.")),(0,r.mdx)("p",null,"Demo of Terra Alert with an action element."),(0,r.mdx)(c.Z,{mdxType:"AlertActionFocusDemo"}),(0,r.mdx)("h4",{id:"assistive-technologies"},"Assistive technologies"),(0,r.mdx)("p",null,"In combination with the notification criticality, screen reader users should understand the importance of the notification when presented."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},'"alert"')," role will interrupt the user and announce the high critical notification immediately."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},'"status"')," role will not interrupt the user and present politely.")),(0,r.mdx)("h4",{id:"live-regions"},"Live regions"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"For less critical notifications (non-alerts), the notification banner should be in an ",(0,r.mdx)("inlineCode",{parentName:"li"},'aria-live="polite"')," region.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},'For screen readers to pick up and announce a newly rendered notification, the notification banner must be within an aria-live region.\nTo enable assistive technologies the ability to inform the user of a less critical notification in a polite (non-interruptive) way, ensure the notification banner is\nwithin an element where aria-live="polite".'))),(0,r.mdx)("li",{parentName:"ul"},"Avoid mixing alert notifications and less critical notifications in the same region.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},'"alert"')," notification type/role implicitly has aria-live value of ",(0,r.mdx)("inlineCode",{parentName:"li"},"assertive")," and will interrupt without being in a region where aria-live was previously set.\nIt is recommended to separate critical alert notifications from less critical notification banners to prevent any confusion.")))),(0,r.mdx)("div",{"aria-label":"Example code"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'import Alert from \'terra-alert\';\n\n<>\n    // This less critical notification should be in polite aria-live region so screen reader users are notified.\n    <div aria-live="polite">\n        {isOpen && (\n            <Alert type="success">\n                This notification is a less critical and should be polite.\n            </Alert>\n        )}\n    </div>\n\n    // Alert notifications are implicitly assertive, no aria-live needed\n    // It is recommended to keep these separate from polite aria-live regions.\n    <div>\n        {isOpen && (\n            <Alert type="alert">\n                This notification is a critical alert that is interruptive.\n            </Alert>\n        )}\n    </div>\n</>\n'))),(0,r.mdx)("h4",{id:"custom-titles"},"Custom Titles"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Custom notification banners should have a title provided to the ",(0,r.mdx)("inlineCode",{parentName:"li"},"title")," prop in order to be accessible.")),(0,r.mdx)(y,{title:"Bad: Avoid notifications with no titles",mdxType:"CustomExampleNoTitle"}),(0,r.mdx)(s.Z,{title:"Good: Titles help users understand notifications",mdxType:"CustomExample"}),(0,r.mdx)("h2",{id:"linked-references"},"Linked References:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"https://w3c.github.io/aria/"},'"Accessible Rich Internet Applications (WAI-ARIA) 1.3"'),". World Wide Web Consortium. Last updated 01 May 2023. Retrieved 2 May 2023.")))}E.isMDXComponent=!0},86505:function(e,t,n){n.d(t,{Z:function(){return s}});n(67294);var a=n(81254),r=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={},c="wrapper";function s(e){var t=e.components,n=o(e,r);return(0,a.mdx)(c,l({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},"@import './clinical-lowlight-theme/colors.module';\n@import './orion-fusion-theme/colors.module';\n\n:root {\n  --terra-core-docs-attention-example-color: #fa0000;\n  --terra-core-docs-help-example-color: #b961cf;\n  --terra-core-docs-dismiss-example-color: #ffa500;\n}\n\n:local {\n  .my-app-alert-attention-example {\n    color: var(--terra-core-docs-attention-example-color, #fa0000);\n  }\n\n  .my-app-alert-help-example {\n    color: var(--terra-core-docs-help-example-color, #b961cf);\n  }\n\n  .my-app-alert-dismiss-example {\n    color: var(--terra-core-docs-dismiss-example-color, #ffa500);\n  }\n}\n\n")))}s.isMDXComponent=!0},71585:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r=n(44774),l=n(81254),o=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function u(e){var t=e.components,n=c(e,o);return(0,l.mdx)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { IconHelp } from 'terra-icon';\nimport classNames from 'classnames/bind';\nimport Alert from 'terra-alert';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst CustomExample = () => (\n  <Alert type=\"custom\" title=\"Help!\" customColorClass={cx(['my-app-alert-help-example'])} customIcon={<IconHelp />}>\n    <span>\n      This is a\n      <b> custom</b>\n      {' '}\n      notification banner\n    </span>\n  </Alert>\n);\n\nexport default CustomExample;\n\n")))}u.isMDXComponent=!0;var d=n(49271),m=n(86505),p=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(d.Z,{title:t||"Custom Example",description:n,example:a.createElement(r.Z,null),exampleCssSrc:a.createElement(m.Z,null),exampleSrc:a.createElement(u,null),isExpanded:l})}},11304:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-image",name:"terra-image",version:"3.38.0",url:t})}},32331:function(e,t,n){t.Z=void 0;var a=s(n(67294)),r=s(n(45697)),l=s(n(94184)),o=s(n(47166)),i=s(n(32172)),c=["newline"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.default.bind(i.default),p={newline:r.default.oneOf([1,2,3,4,5,6,7,8])},f=function(e){var t=e.newline,n=d(e,c),r=(0,l.default)(m("whitespace","newline-".concat(t)),n.className);return a.default.createElement("div",u({},n,{className:r,"aria-hidden":"true"}))};f.propTypes=p,f.defaultProps={newline:1};t.Z=f},98667:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),l=i(n(43868)),o=i(n(92226));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l,o,i=[],c=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(a=l.call(n)).done)&&(i.push(a.value),i.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.Z=function(){var e=s((0,r.useState)(!1),2),t=e[0],n=e[1];return r.default.createElement(r.default.Fragment,null,t&&r.default.createElement(o.default,{onDismiss:function(){return n(!1)},action:r.default.createElement(l.default,{text:"Action",variant:"emphasis",onClick:function(){}})},"The notification banner should be focused upon render when navigating via keyboard."),r.default.createElement(l.default,{isDisabled:t,text:"Trigger Alert Notification Banner Demo",onClick:function(){n(!0)}}))}},44774:function(e,t,n){t.Z=void 0;var a=c(n(67294)),r=n(64177),l=c(n(47166)),o=c(n(92226)),i=c(n(20850));function c(e){return e&&e.__esModule?e:{default:e}}var s=l.default.bind(i.default);t.Z=function(){return a.default.createElement(o.default,{type:"custom",title:"Help!",customColorClass:s(["my-app-alert-help-example"]),customIcon:a.default.createElement(r.IconHelp,null)},a.default.createElement("span",null,"This is a",a.default.createElement("b",null," custom")," ","notification banner"))}},72195:function(e,t,n){t.Z=void 0;var a=c(n(67294)),r=n(64177),l=c(n(47166)),o=c(n(92226)),i=c(n(20850));function c(e){return e&&e.__esModule?e:{default:e}}var s=l.default.bind(i.default);t.Z=function(){return a.default.createElement(o.default,{type:"custom",customColorClass:s(["my-app-alert-help-example"]),customIcon:a.default.createElement(r.IconHelp,null)},a.default.createElement("span",null,"This is a",a.default.createElement("b",null," custom")," ","notification banner"))}},75295:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(67294)),r=s(n(45697)),l=s(n(47166)),o=s(n(50026)),i=s(n(72145)),c=["children"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=l.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_={children:r.default.string},h=function(e){var t=e.children,n=d(e,c),r=a.default.useContext(o.default),i=(0,l.default)(m(["button",r.className]),n.className);return a.default.createElement("button",u({},n,{type:"button",className:i,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};h.propTypes=_;t.default=h},77904:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),l=c(n(47166)),o=c(n(50026)),i=c(n(45491));function c(e){return e&&e.__esModule?e:{default:e}}var s=l.default.bind(i.default),u={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},d=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,l=a.default.useContext(o.default);return a.default.createElement("div",{className:s("notice",n,l.className)},a.default.createElement("div",{className:s("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:s("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:s("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:s("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:s("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:s("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};d.propTypes=u,d.defaultProps={ariaLevel:"2",variant:"important"};t.default=d},78026:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),l=u(n(94184)),o=u(n(47166)),i=u(n(50026)),c=u(n(15877)),s=["title"];function u(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.default.bind(c.default),f={title:r.default.string},_=function(e){var t=e.title,n=m(e,s),r=a.default.useContext(i.default),o=(0,l.default)(p(["placeholder",r.className]),n.className),c=p(["inner"]);return a.default.createElement("div",d({},n,{className:o}),a.default.createElement("div",{className:c},a.default.createElement("p",{className:p("title")},t)))};_.propTypes=f,_.defaultProps={title:""};t.default=_},60619:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=o(n(77904)),r=o(n(78026)),l=o(n(75295));function o(e){return e&&e.__esModule?e:{default:e}}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},32172:function(e,t,n){n.r(t),t.default={whitespace:"Whitespace-module__whitespace___DPfQS","newline-1":"Whitespace-module__newline-1___bKmlz","newline-2":"Whitespace-module__newline-2___bmmzw","newline-3":"Whitespace-module__newline-3___ORV3M","newline-4":"Whitespace-module__newline-4___g7otO","newline-5":"Whitespace-module__newline-5___sOge+","newline-6":"Whitespace-module__newline-6___rHqfU","newline-7":"Whitespace-module__newline-7___iiRm7","newline-8":"Whitespace-module__newline-8___nGGTR"}},20850:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"colors-module__clinical-lowlight-theme___n7wvZ","orion-fusion-theme":"colors-module__orion-fusion-theme___SmDk5","my-app-alert-attention-example":"colors-module__my-app-alert-attention-example___LLEN-","my-app-alert-help-example":"colors-module__my-app-alert-help-example___l0ZAi","my-app-alert-dismiss-example":"colors-module__my-app-alert-dismiss-example___xR-qR"}},72145:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___mWSPm","orion-fusion-theme":"Button-module__orion-fusion-theme___nj7k4",button:"Button-module__button___r5O1Q","is-active":"Button-module__is-active___CVWJw"}},45491:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___J4EGN","orion-fusion-theme":"Notice-module__orion-fusion-theme___1W9PK",notice:"Notice-module__notice___8kOwf",children:"Notice-module__children___cF5Rb",accessory:"Notice-module__accessory___h3l7H",title:"Notice-module__title___PeXjO","ux-recommendation":"Notice-module__ux-recommendation___tJWAL",caution:"Notice-module__caution___STLbH",deprecation:"Notice-module__deprecation___rWWLq",maintenance:"Notice-module__maintenance___o2AK1",important:"Notice-module__important___WpELD","not-supported":"Notice-module__not-supported___eAx6o",paragraph:"Notice-module__paragraph___BwEGe",list:"Notice-module__list___kOyCE"}},15877:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___rMAZk","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___78cuG",placeholder:"Placeholder-module__placeholder___FPYJB",inner:"Placeholder-module__inner___-U1IZ",title:"Placeholder-module__title___lsXDJ"}}}]);