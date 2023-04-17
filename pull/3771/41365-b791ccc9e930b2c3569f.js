"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[41365],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(45697)),o=a(n(47166)),d=a(n(17422)),i=o.default.bind(d.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},m=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,o=r.default.createElement("a",{className:i("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:i("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:i("badge-version")},"v".concat(l))),d=t?r.default.createElement("a",{className:i("badge"),href:t},r.default.createElement("span",{className:i("badge-name")},"github"),r.default.createElement("span",{className:i("badge-version")},"source")):void 0;return r.default.createElement("div",{className:i("badge-container")},o,d)};m.propTypes=u;var c=m;t.Z=c},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=l?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(a,o,d):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),d=a(n(45697)),i=a(n(47166)),u=n(21538),m=a(n(13810)),c=a(n(40931)),p=n(51051),s=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var b=i.default.bind(s.default),x={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,d=e.description,i=e.isExpanded,s=(0,o.useState)(i),f=(0,l.default)(s,2),x=f[0],v=f[1],h=(0,o.useState)(!1),_=(0,l.default)(h,2),O=_[0],E=_[1],N=o.default.useContext(u.ThemeContext),T=void 0!==a,j=function(){E(!O),x&&v(!x)},w=function(){v(!x),O&&E(!O)},P=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:b("template",N.className)},o.default.createElement("div",{className:b("header")},r&&o.default.createElement("h2",{className:b("title")},r)),o.default.createElement("div",{className:b("content")},d&&o.default.createElement("div",{className:b("description")},d),t),o.default.createElement("div",{className:b("footer")},n?o.default.createElement("div",{className:b("button-container")},T&&o.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":O}),onClick:j,onKeyDown:function(e){return P(e,j)},onBlur:g,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(m.default,{className:b("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(c.default,{className:b("chevron")})),o.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":x}),onClick:w,onKeyDown:function(e){return P(e,w)},onBlur:g,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(m.default,{className:b("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(c.default,{className:b("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:b("css")},a),x&&o.default.createElement("div",{className:b("code")},n))))};v.propTypes=x,v.defaultProps={isExpanded:!1};var h=v;t.Z=h},78530:function(e,t,n){var a=n(64836),r=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return u.Row}}),t.ZP=t.Di=void 0;var l=p(n(67294)),o=a(n(45697)),d=a(n(47166)),i=n(21538),u=p(n(37515)),m=a(n(54931));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=l?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(a,o,d):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}var s=d.default.bind(m.default),f={children:o.default.node},b={isRequired:o.default.bool},x=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("bold")},t)};t.O=x,x.propTypes=f;var g=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("code-block-override")},t)};t.Di=g,g.propTypes=f;var y=function(e){var t=e.isRequired;return l.default.createElement(u.Cell,{className:s([t?["required"]:[]])},t?"required":"optional")};t.dS=y,y.propTypes=b;var v=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("code-block-override")},t)};t.mW=v,v.propTypes=f;var h=function(e){var t=e.children;return l.default.createElement(u.Cell,null,t)};t.Ex=h,h.propTypes=f;var _=function(e){var t=e.children,n=(0,l.useContext)(i.ThemeContext);return l.default.createElement(u.default,{paddingStyle:"compact",className:s("table",n.className)},l.default.createElement(u.Header,{className:s("header")},l.default.createElement(u.HeaderCell,null,"Prop"),l.default.createElement(u.HeaderCell,null,"Type"),l.default.createElement(u.HeaderCell,null,"Required"),l.default.createElement(u.HeaderCell,null,"Default"),l.default.createElement(u.HeaderCell,null,"Description")),l.default.createElement(u.Body,null,t))};_.propTypes=f;var O=_;t.ZP=O},41365:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(67294),r=n(81254),l=n(39307),o=n(9367),d=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m={};function c(e){var t=e.components,n=u(e,d);return(0,r.mdx)("wrapper",i({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst BaseExample = () => (\n  <div>\n    <h1>Global BaseStyles example</h1>\n    <p>Sample paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquant.</p>\n    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n    <dl>\n      <dt>Description name</dt>\n      <dd>Description value</dd>\n      <dt>Description name</dt>\n      <dd>Description value</dd>\n    </dl>\n    <ol>\n      <li>Ordered list item</li>\n      <li>\n        Ordered list item\n        <ol>\n          <li>Nested ordered list item</li>\n        </ol>\n      </li>\n      <li>Ordered list item</li>\n    </ol>\n    <ul>\n      <li>Unordered list item</li>\n      <li>\n        Unordered list item\n        <ol>\n          <li>Nested unordered list item</li>\n        </ol>\n      </li>\n      <li>Unordered list item</li>\n    </ul>\n  </div>\n);\n\nexport default BaseExample;\n\n")))}c.isMDXComponent=!0;var p=n(49271),s=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(p.Z,{title:t||"Global Base Styles Example",description:n,example:a.createElement(o.Z,null),exampleSrc:a.createElement(c,null),isExpanded:r})},f=n(78530),b=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},x.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y={},v="wrapper";function h(e){var t=e.components,n=g(e,b);return(0,r.mdx)(v,x({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(f.ZP,{mdxType:"PropsTable"},(0,r.mdx)(f.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(f.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The component(s) that will be wrapped by ",(0,r.mdx)("inlineCode",{parentName:"p"},"<Base />"),"."))),(0,r.mdx)(f.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"locale"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(f.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The locale name."))),(0,r.mdx)(f.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"customMessages"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,r.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Customized translations provided by consuming application only for current locale."))),(0,r.mdx)(f.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"strictMode"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Activates ",(0,r.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html"},"React Strict Mode")," for descendants"))),(0,r.mdx)(f.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"throwOnI18nLoadError"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the error should be logged and thrown if something goes wrong. When false, the error will only be logged to the\nconsole an error."))),(0,r.mdx)(f.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"translationsLoadingPlaceholder"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The component(s) that will be wrapped by ",(0,r.mdx)("inlineCode",{parentName:"p"},"<Base />")," ONLY in the event that translations have not been loaded yet.\nNOTE: Absolutely no locale-dependent logic should be utilized in this placeholder.")))))}h.isMDXComponent=!0;var _=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},O.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N={},T="wrapper";function j(e){var t=e.components,n=E(e,_);return(0,r.mdx)(T,O({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-base"},"Terra Base"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-base")," component handles two main concerns, ",(0,r.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization/internationalization-intro"},"application internationalization")," and global base styles."),(0,r.mdx)("p",null,"This component is designed to manage loading locale information such as translations and locale data, handling locale switching and loading state, and combining customized translation messages from an application with Terra UI component translations."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note:")," ",(0,r.mdx)("em",{parentName:"p"},"This component should be your root component and wrap all components in your app. This is to help ensure that the entire application is within the same configured i18n context provided by ",(0,r.mdx)("a",{parentName:"em",href:"https://github.com/formatjs/react-intl/blob/master/docs/Components.md"},"react-intl's ",(0,r.mdx)("inlineCode",{parentName:"a"},"<IntlProvider />")),".")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-base")," component requires the use of our ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-aggregate-translations"},"aggregate-translations pre-build tool")," to ensure translations and locale data files are generated accordingly for the app."),(0,r.mdx)("p",null,"You can read more about ",(0,r.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/guides/terra-ui/internationalization/internationalization-intro"},"setting up Internationalization in your Terra UI app here"),"."),(0,r.mdx)("p",null,"The terra-base component also sets minimal global base styles for the application. Styles include CSS to help normalize box-sizing, global font styles, and HTML background styles."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-base"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("p",null,"With custom app translations."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Base from 'terra-base';\nimport App from './App'; // Your custom app component\nimport appTranslations from './aggregated-translations/en.js'; // Your aggregated app translations\n\n// This value could be sent from the server as well\nconst locale = (navigator.languages && navigator.languages[0])\n               || navigator.language\n               || navigator.userLanguage\n               || 'en';\n\n<Base locale={locale} customMessages={appTranslations}>\n  <App />\n</Base>\n")),(0,r.mdx)("p",null,"Without custom app translations."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Base from 'terra-base';\nimport App from './App'; // Your custom app component\n\n// This value could be sent from the server as well\nconst locale = (navigator.languages && navigator.languages[0])\n               || navigator.language\n               || navigator.userLanguage\n               || 'en';\n\n<Base locale={locale}>\n  <App />\n</Base>\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/shakacode/react_on_rails/blob/8cb06ed35cb5c2c453bcc193282b4c091574c1b7/docs/basics/i18n.md#how-to-add-i18n"},"react_on_rails Compatible")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/webpack/docs/wiki/configuration#outputpublicpath"},"CND Compatible"))),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(s,{mdxType:"GlobalBaseStylesExample"}),(0,r.mdx)("h2",{id:"base-props"},"Base Props"),(0,r.mdx)(h,{mdxType:"BasePropsTable"}))}j.isMDXComponent=!0},39307:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-base",name:"terra-base",version:"5.50.0",url:t})}},9367:function(e,t,n){t.Z=void 0;var a,r=(a=n(67294))&&a.__esModule?a:{default:a};var l=function(){return r.default.createElement("div",null,r.default.createElement("h1",null,"Global BaseStyles example"),r.default.createElement("p",null,"Sample paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquant."),r.default.createElement("p",null,"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),r.default.createElement("dl",null,r.default.createElement("dt",null,"Description name"),r.default.createElement("dd",null,"Description value"),r.default.createElement("dt",null,"Description name"),r.default.createElement("dd",null,"Description value")),r.default.createElement("ol",null,r.default.createElement("li",null,"Ordered list item"),r.default.createElement("li",null,"Ordered list item",r.default.createElement("ol",null,r.default.createElement("li",null,"Nested ordered list item"))),r.default.createElement("li",null,"Ordered list item")),r.default.createElement("ul",null,r.default.createElement("li",null,"Unordered list item"),r.default.createElement("li",null,"Unordered list item",r.default.createElement("ol",null,r.default.createElement("li",null,"Nested unordered list item"))),r.default.createElement("li",null,"Unordered list item")))};t.Z=l},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(67294)),r=m(n(45697)),l=m(n(94184)),o=m(n(47166)),d=m(n(50026)),i=m(n(16749)),u=["children","disableStripes","paddingStyle"];function m(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.default.bind(i.default),f={children:r.default.node.isRequired,disableStripes:r.default.bool,paddingStyle:r.default.oneOf(["none","standard","compact"])},b=function(e){var t=e.children,n=e.disableStripes,r=e.paddingStyle,o=p(e,u),i=a.default.useContext(d.default),m=(0,l.default)(s("table",{striped:!n},{"padding-standard":"standard"===r},{"padding-compact":"compact"===r},i.className),o.className);return a.default.createElement("table",c({},o,{className:m}),t)};b.propTypes=f,b.defaultProps={disableStripes:!1,paddingStyle:"none"};var x=b;t.default=x},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),r=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={children:r.default.node},u=function(e){var t=e.children,n=d(e,l);return a.default.createElement("tbody",n,t)};u.propTypes=i,u.defaultProps={children:[]};var m=u;t.default=m},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),r=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={children:r.default.node},u=function(e){var t=e.children,n=d(e,l);return a.default.createElement("td",n,t)};u.propTypes=i,u.defaultProps={children:[]};var m=u;t.default=m},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),r=d(n(45697)),l=d(n(29805)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u={children:r.default.node},m=function(e){var t=e.children,n=i(e,o);return a.default.createElement("thead",n,a.default.createElement("tr",null,l.default.addScope(t,"col")))};m.propTypes=u,m.defaultProps={children:[]};var c=m;t.default=c},80876:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),r=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={children:r.default.node},u=function(e){var t=e.children,n=d(e,l);return a.default.createElement("th",n,t)};u.propTypes=i,u.defaultProps={children:[]};var m=u;t.default=m},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),l=u(n(47166)),o=u(n(16749)),d=u(n(29805)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.default.bind(o.default),s={children:r.default.node},f=function(e){var t=e.children,n=c(e,i),r=p(["row"]);return a.default.createElement("tr",m({},n,{className:n.className?"".concat(r," ").concat(n.className):r}),d.default.addScope(t,"row"))};f.propTypes=s,f.defaultProps={children:[]};var b=f;t.default=b},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(67294))&&a.__esModule?a:{default:a};var l={addScope:function(e,t){var n=[];return r.default.Children.forEach(e,(function(e){n.push(r.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var a=u(n(32634)),r=u(n(80196)),l=u(n(70829)),o=u(n(8685)),d=u(n(19852)),i=u(n(80876));function u(e){return e&&e.__esModule?e:{default:e}}var m=a.default;t.default=m},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var d=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=d;t.default=i},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);