"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[25376],{55713:function(e,t,n){var a=n(24994);t.A=void 0;var i=a(n(96540)),r=a(n(5556)),l=a(n(67967)),o=a(n(25642)),s=l.default.bind(o.default),c={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},d=function(e){var t=e.src,n=e.name,a=e.url,r=e.version,l=i.default.createElement("a",{className:s("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},i.default.createElement("span",{className:s("badge-name")},a?"package":"npm"),i.default.createElement("span",{className:s("badge-version")},"v".concat(r))),o=t?i.default.createElement("a",{className:s("badge"),href:t},i.default.createElement("span",{className:s("badge-name")},"github"),i.default.createElement("span",{className:s("badge-version")},"source")):void 0;return i.default.createElement("div",{className:s("badge-container")},l,o)};d.propTypes=c;t.A=d},201:function(e,t,n){var a=n(24994),i=n(73738);t.A=void 0;var r=a(n(85715)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(96540)),o=a(n(5556)),s=a(n(67967)),c=n(92912),d=a(n(27166)),u=a(n(62441)),m=n(25966),p=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=s.default.bind(p.default),b={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,i=e.title,o=e.description,s=e.isExpanded,p=(0,l.useState)(s),f=(0,r.default)(p,2),b=f[0],_=f[1],v=(0,l.useState)(!1),g=(0,r.default)(v,2),w=g[0],N=g[1],E=l.default.useContext(c.ThemeContext),A=void 0!==a,T=function(){N(!w),b&&_(!b)},O=function(){_(!b),w&&N(!w)},C=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:h("template",E.className)},l.default.createElement("div",{className:h("header")},i&&l.default.createElement("h2",{className:h("title")},i)),l.default.createElement("div",{className:h("content")},o&&l.default.createElement("div",{className:h("description")},o),t),l.default.createElement("div",{className:h("footer")},n?l.default.createElement("div",{className:h("button-container")},A&&l.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":w}),onClick:T,onKeyDown:function(e){return C(e,T)},onBlur:y,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(d.default,{className:h("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(u.default,{className:h("chevron")})),l.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":b}),onClick:O,onKeyDown:function(e){return C(e,O)},onBlur:y,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(d.default,{className:h("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(u.default,{className:h("chevron")}))):null,l.default.createElement("div",null,w&&l.default.createElement("div",{className:h("css")},a),b&&l.default.createElement("div",{className:h("code")},n))))};_.propTypes=b,_.defaultProps={isExpanded:!1};t.A=_},617:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var a=n(96540),i=n(36665),r=n(68523),l=n(56213),o=n(19448),s=n(53900),c=n(26927),d=n(56933),u=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f={};function h(e){var t=e.components,n=p(e,u);return(0,i.mdx)("wrapper",m({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\n\nimport Alert from 'terra-alert';\nimport { IconHelp } from 'terra-icon';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst CustomExampleNoTitle = () => (\n  <Alert type=\"custom\" customColorClass={cx(['my-app-alert-help-example'])} customIcon={<IconHelp />}>\n    <span>\n      This is a\n      <b> custom</b>\n      {' '}\n      notification banner\n    </span>\n  </Alert>\n);\n\nexport default CustomExampleNoTitle;\n\n")))}h.isMDXComponent=!0;var b=n(201),y=n(95050),x=function(e){var t=e.title,n=e.description,i=e.isExpanded;return a.createElement(b.A,{title:t||"Custom Example No Title",description:n,example:a.createElement(d.A,null),exampleCssSrc:a.createElement(y.A,null),exampleSrc:a.createElement(h,null),isExpanded:i})},_=n(69388),v=n(78144),g=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var E={},A="wrapper";function T(e){var t=e.components,n=N(e,g);return(0,i.mdx)(A,w({},E,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(l.E,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"accessibility-guide-for-terra-alert"},"Accessibility Guide for Terra Alert"),(0,i.mdx)(r.Notice,{variant:"important",ariaLevel:"2",mdxType:"Notice"},(0,i.mdx)("p",null,"Using notifications improperly may prevent some of your users from understanding your UI.")),(0,i.mdx)(o.A,{mdxType:"Whitespace"}),(0,i.mdx)("h2",{id:"why-is-this-important"},"Why is this important?"),(0,i.mdx)("p",null,"Terra's Alert component is a notification banner with varying criticalities that communicates cautions, errors, information, and other general information to the user in context of their workflow. As such, special consideration must be made to inform screen reader users of their presence on the page, just as sighted users' attention would be drawn to them in the visual UI."),(0,i.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,i.mdx)("h3",{id:"code-considerations"},"Code Considerations"),(0,i.mdx)("h4",{id:"consistency"},"Consistency"),(0,i.mdx)("p",null,"The use of each variant of this component should be consistent in order to provide the best user experience."),(0,i.mdx)("h4",{id:"notification-criticality"},"Notification Criticality"),(0,i.mdx)("p",null,'The user only expects to be interrupted for notifications (alerts) that are of high criticality. This behavior is referred to as "assertive".'),(0,i.mdx)("p",null,'Less critical notifications should wait until the screen reader has finished reading the current item before notification content is read to the user. This behavior is referred to as "polite".'),(0,i.mdx)("p",null,"By default, Terra Alert will set the role to ",(0,i.mdx)("inlineCode",{parentName:"p"},'"alert"')," (or assertive) for the ",(0,i.mdx)("inlineCode",{parentName:"p"},"alert")," notification type and ",(0,i.mdx)("inlineCode",{parentName:"p"},'"status"')," (or polite) for all other notification types.\nTerra Alert has an optional ",(0,i.mdx)("inlineCode",{parentName:"p"},"role")," prop but should be used carefully when the default does not meet accessibility or usability expectations."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Role"),(0,i.mdx)("th",{parentName:"tr",align:null},"Purpose"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Alert"),(0,i.mdx)("td",{parentName:"tr",align:null},"See ",(0,i.mdx)(v.default,{href:"https://w3c.github.io/aria/#alert",variant:"external",mdxType:"Hyperlink"},"WAI-ARIA Alert Role"),(0,i.mdx)("a",{parentName:"td",href:"/terra-core/pull/4059/components/cerner-terra-core-docs/alert/accessibility-guide"},(0,i.mdx)("sup",null,"[1]")),' - "A type of live region with important, and usually time-sensitive, information."')),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"Status"),(0,i.mdx)("td",{parentName:"tr",align:null},"See ",(0,i.mdx)(v.default,{href:"https://w3c.github.io/aria/#status",variant:"external",mdxType:"Hyperlink"},"WAI-ARIA Status Role"),(0,i.mdx)("a",{parentName:"td",href:"/terra-core/pull/4059/components/cerner-terra-core-docs/alert/accessibility-guide"},(0,i.mdx)("sup",null,"[1]")),' - "A type of live region whose content is advisory information for the user but is not important enough to justify an alert, often but not necessarily presented as a status bar."')))),(0,i.mdx)("h4",{id:"alert-notification-type"},"Alert Notification Type"),(0,i.mdx)(r.Notice,{variant:"ux-recommendation",ariaLevel:"6",mdxType:"Notice"},(0,i.mdx)("p",null,"It may be more appropriate to use a modal or component with ",(0,i.mdx)("inlineCode",{parentName:"p"},"alertdialog")," if presenting the user with an alert and required action to address the alert.")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},'"alert"')," role/notification type will cause keyboard navigation focus to shift to the notification banner body.\nThis helps users quickly take action when it is critical but can optionally be disabled via the ",(0,i.mdx)("inlineCode",{parentName:"li"},"disableAlertActionFocus")," prop."),(0,i.mdx)("li",{parentName:"ul"},"Notifications with ",(0,i.mdx)("inlineCode",{parentName:"li"},'"alert"')," role/notification type do not need to explicitly be in an aria-live region.\nIt is recommended to separate them from less critical notification banners to prevent assistive technologies from confusing them."),(0,i.mdx)("li",{parentName:"ul"},"By default, Terra Alert uses the ",(0,i.mdx)("inlineCode",{parentName:"li"},'"alert"')," notification type.")),(0,i.mdx)("p",null,"Demo of Terra Alert with an action element."),(0,i.mdx)(s.A,{mdxType:"AlertActionFocusDemo"}),(0,i.mdx)("h4",{id:"assistive-technologies"},"Assistive technologies"),(0,i.mdx)("p",null,"In combination with the notification criticality, screen reader users should understand the importance of the notification when presented."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},'"alert"')," role will interrupt the user and announce the high critical notification immediately."),(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},'"status"')," role will not interrupt the user and present politely.")),(0,i.mdx)("h4",{id:"live-regions"},"Live regions"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"For less critical notifications (non-alerts), the notification banner should be in an ",(0,i.mdx)("inlineCode",{parentName:"li"},'aria-live="polite"')," region.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},'For screen readers to pick up and announce a newly rendered notification, the notification banner must be within an aria-live region.\nTo enable assistive technologies the ability to inform the user of a less critical notification in a polite (non-interruptive) way, ensure the notification banner is\nwithin an element where aria-live="polite".'))),(0,i.mdx)("li",{parentName:"ul"},"Avoid mixing alert notifications and less critical notifications in the same region.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},'"alert"')," notification type/role implicitly has aria-live value of ",(0,i.mdx)("inlineCode",{parentName:"li"},"assertive")," and will interrupt without being in a region where aria-live was previously set.\nIt is recommended to separate critical alert notifications from less critical notification banners to prevent any confusion.")))),(0,i.mdx)("div",{"aria-label":"Example code"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'import Alert from \'terra-alert\';\n\n<>\n    // This less critical notification should be in polite aria-live region so screen reader users are notified.\n    <div aria-live="polite">\n        {isOpen && (\n            <Alert type="success">\n                This notification is a less critical and should be polite.\n            </Alert>\n        )}\n    </div>\n\n    // Alert notifications are implicitly assertive, no aria-live needed\n    // It is recommended to keep these separate from polite aria-live regions.\n    <div>\n        {isOpen && (\n            <Alert type="alert">\n                This notification is a critical alert that is interruptive.\n            </Alert>\n        )}\n    </div>\n</>\n'))),(0,i.mdx)("h4",{id:"titles"},"Titles"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Notification banners of type ",(0,i.mdx)("inlineCode",{parentName:"li"},"custom")," should have a title provided to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"title")," prop in order to be accessible."),(0,i.mdx)("li",{parentName:"ul"},"All other notification types will provide a default title. The ",(0,i.mdx)("inlineCode",{parentName:"li"},"title")," prop will override the default title and should be avoided."),(0,i.mdx)("li",{parentName:"ul"},"Screen readers will always announce the notification type by default and then the custom title if one is provided.")),(0,i.mdx)(x,{title:"Bad: Avoid notifications with no titles",mdxType:"CustomExampleNoTitle"}),(0,i.mdx)(c.A,{title:"Good: Titles help users understand notifications",mdxType:"CustomExample"}),(0,i.mdx)("h4",{id:"actions"},"Actions"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Interactable elements belonging to notification banners (such as dismiss buttons and action elements) must be associated with the banner.\nThis is handled by default for dismiss buttons, but not consumer-defined action elements."),(0,i.mdx)("li",{parentName:"ul"},"Terra provides an optional ",(0,i.mdx)("inlineCode",{parentName:"li"},"id")," prop to facilitate associating action elements to the notification banner. Action elements should set\n",(0,i.mdx)("inlineCode",{parentName:"li"},"aria-describedby")," to the title of the notification banner.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"alert-title-${id}"),' - The ID of the title of the notification banner (e.g. "Alert", "Error", "Warning", custom titles, etc.)')))),(0,i.mdx)(_.A,{title:"Notification Banner with Action",description:"This example uses the id prop and aria-describedby to associate an action element with the notification banner.",mdxType:"ActionExample"}),(0,i.mdx)("h2",{id:"linked-references"},"Linked References:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("a",{parentName:"li",href:"https://w3c.github.io/aria/"},'"Accessible Rich Internet Applications (WAI-ARIA) 1.3"'),". World Wide Web Consortium. Last updated 01 May 2023. Retrieved 2 May 2023.")))}T.isMDXComponent=!0},56213:function(e,t,n){n.d(t,{E:function(){return r}});var a=n(96540),i=n(55713),r=function(e){var t=e.url;return a.createElement(i.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-image",name:"terra-image",version:"3.41.0",url:t})}},19448:function(e,t,n){t.A=void 0;var a=c(n(96540)),i=c(n(5556)),r=c(n(46942)),l=c(n(67967)),o=c(n(71969)),s=["newline"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=l.default.bind(o.default),p={newline:i.default.oneOf([1,2,3,4,5,6,7,8])},f=function(e){var t=e.newline,n=u(e,s),i=(0,r.default)(m("whitespace","newline-".concat(t)),n.className);return a.default.createElement("div",d({},n,{className:i,"aria-hidden":"true"}))};f.propTypes=p,f.defaultProps={newline:1};t.A=f},53900:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.A=void 0;var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var i={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(i,l,o):i[l]=e[l]}return i.default=e,n&&n.set(e,i),i}(n(96540)),r=o(n(42104)),l=o(n(40890));function o(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,r,l,o=[],s=!0,c=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(a=r.call(n)).done)&&(o.push(a.value),o.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.A=function(){var e=c((0,i.useState)(!1),2),t=e[0],n=e[1];return i.default.createElement(i.default.Fragment,null,t&&i.default.createElement(r.default,{onDismiss:function(){return n(!1)},action:i.default.createElement(l.default,{text:"Action",variant:"emphasis",onClick:function(){}})},"The notification banner should be focused upon render when navigating via keyboard."),i.default.createElement(l.default,{isDisabled:t,text:"Trigger Alert Notification Banner Demo",onClick:function(){n(!0)}}))}},56933:function(e,t,n){t.A=void 0;var a=s(n(96540)),i=s(n(67967)),r=s(n(42104)),l=n(78513),o=s(n(36708));function s(e){return e&&e.__esModule?e:{default:e}}var c=i.default.bind(o.default);t.A=function(){return a.default.createElement(r.default,{type:"custom",customColorClass:c(["my-app-alert-help-example"]),customIcon:a.default.createElement(l.IconHelp,null)},a.default.createElement("span",null,"This is a",a.default.createElement("b",null," custom")," ","notification banner"))}},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},71969:function(e,t,n){n.r(t),t.default={whitespace:"Whitespace-module__whitespace___DPfQS","newline-1":"Whitespace-module__newline-1___bKmlz","newline-2":"Whitespace-module__newline-2___bmmzw","newline-3":"Whitespace-module__newline-3___ORV3M","newline-4":"Whitespace-module__newline-4___g7otO","newline-5":"Whitespace-module__newline-5___sOge+","newline-6":"Whitespace-module__newline-6___rHqfU","newline-7":"Whitespace-module__newline-7___iiRm7","newline-8":"Whitespace-module__newline-8___nGGTR"}}}]);