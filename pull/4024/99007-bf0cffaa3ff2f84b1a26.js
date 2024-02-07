"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[99007,54253],{25347:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var r=n(67294),a=n(81254),l=n(10946),o=n(62379),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={};function s(e){var t=e.components,n=p(e,i);return(0,a.mdx)("wrapper",d({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ToggleSectionHeaderExampleTemplate from './ToggleSectionHeaderExampleTemplate';\n\nconst componentProps = {\n  title: 'Default Example',\n};\n\nconst DefaultToggleSectionHeader = () => (\n  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>\n    <p>Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner.</p>\n  </ToggleSectionHeaderExampleTemplate>\n);\n\nexport default DefaultToggleSectionHeader;\n\n")))}s.isMDXComponent=!0;var c=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(c.Z,{title:t||"Default Toggle Section Header",description:n,example:r.createElement(o.Z,null),exampleSrc:r.createElement(s,null),isExpanded:a})},f=n(95034),y=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={};function h(e){var t=e.components,n=g(e,y);return(0,a.mdx)("wrapper",x({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies\nimport {\n  KEY_SPACE,\n} from 'keycode-js';\nimport ToggleSectionHeaderExampleTemplate from './ToggleSectionHeaderExampleTemplate';\n\nconst componentProps = {\n  title: 'Patient Responsibilities',\n  isAnimated: true,\n};\n\n// Prevent scrolling when press space bar key on anchor tag\nconst handlePreventScroll = (event) => {\n  if (event.keyCode === KEY_SPACE) {\n    event.preventDefault();\n  }\n};\n\nconst AnimatedToggleSectionHeader = () => (\n  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>\n    <p>Respect the rights and treat all healthcare workers and other patients and visitors with dignity. Comply with all hospital policies and guidelines as informed or displayed be available for any appointments made or notify the hospital as early as possible if you are unable to do so. Acknowledge that some other patient medical condition may be more urgent than yours and accept that your doctor may need to attend them first. Kindly cooperate in such situations.</p>\n    <p>Provide us with comprehensive and accurate details about your past medical records and be complaint as regard to taking medication or following any other prescribed treatment. Accept, where applicable, adaptations to the environment to ensure a safe and secure stay in hospital with a full explanation from our staff.</p>\n    <p>\n      Strictly follow the&nbsp;\n      <a href=\"#visitors-policy\" onKeyDown={handlePreventScroll}>Hospitals Visitors Policy</a>\n      {' '}\n      and ccept the measures taken by the hospital to ensure personal privacy and confidentiality of medical records.\n    </p>\n  </ToggleSectionHeaderExampleTemplate>\n);\n\nexport default AnimatedToggleSectionHeader;\n\n")))}h.isMDXComponent=!0;var O=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(c.Z,{title:t||"Animated Toggle Section Header",description:n,example:r.createElement(f.Z,null),exampleSrc:r.createElement(h,null),isExpanded:a})},v=n(48002),T=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w={};function C(e){var t=e.components,n=P(e,T);return(0,a.mdx)("wrapper",j({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ToggleSectionHeaderExampleTemplate from './ToggleSectionHeaderExampleTemplate';\n\nconst componentProps = {\n  title: 'Transparent Example',\n  isTransparent: true,\n};\n\nconst DefaultToggleSectionHeader = () => (\n  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>\n    <p>Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner.</p>\n  </ToggleSectionHeaderExampleTemplate>\n);\n\nexport default DefaultToggleSectionHeader;\n\n")))}C.isMDXComponent=!0;var S=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(c.Z,{title:t||"Transparent Toggle Section Header",description:n,example:r.createElement(v.Z,null),exampleSrc:r.createElement(C,null),isExpanded:a})},_=n(78530),E=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D={},R="wrapper";function A(e){var t=e.components,n=k(e,E);return(0,a.mdx)(R,N({},D,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(_.ZP,{mdxType:"PropsTable"},(0,a.mdx)(_.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(_.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(_.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(_.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Content in the body of the toggle section header component that will be expanded or hidden."))),(0,a.mdx)(_.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(_.O,{mdxType:"PropNameCell"},"title"),(0,a.mdx)(_.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(_.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Text to be displayed in the section header."))),(0,a.mdx)(_.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(_.O,{mdxType:"PropNameCell"},"level"),(0,a.mdx)(_.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  1\n  2\n  3\n  4\n  5\n  6\n],\n"))),(0,a.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"2\n"))),(0,a.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the heading level. One of h1, h2, h3, h4, h5, or h6."))),(0,a.mdx)(_.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(_.O,{mdxType:"PropNameCell"},"onClose"),(0,a.mdx)(_.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when toggle-section-header is closed."))),(0,a.mdx)(_.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(_.O,{mdxType:"PropNameCell"},"onOpen"),(0,a.mdx)(_.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when toggle-section-header is opened."))),(0,a.mdx)(_.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(_.O,{mdxType:"PropNameCell"},"sectionHeaderAttrs"),(0,a.mdx)(_.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,a.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Used to set props and HTML attributes on the underlying section-header."))),(0,a.mdx)(_.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(_.O,{mdxType:"PropNameCell"},"isAnimated"),(0,a.mdx)(_.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the toggle-section-header to be animated when it is opened or closed."))),(0,a.mdx)(_.X2,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(_.O,{mdxType:"PropNameCell"},"isInitiallyOpen"),(0,a.mdx)(_.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the toggle-section-header initial state to open."))),(0,a.mdx)(_.X2,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(_.O,{mdxType:"PropNameCell"},"isTransparent"),(0,a.mdx)(_.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the background of the section header to transparent."))),(0,a.mdx)(_.X2,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(_.O,{mdxType:"PropNameCell"},"isOpen"),(0,a.mdx)(_.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Programmatically toggle the toggle-section-header component.")))))}A.isMDXComponent=!0;var M=["components"];function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var q={},X="wrapper";function W(e){var t=e.components,n=I(e,M);return(0,a.mdx)(X,H({},q,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-toggle-section-header"},"Terra Toggle Section Header"),(0,a.mdx)("p",null,"Toggle section header component that transitions content in and out with a click. "),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-toggle-section-header"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ToggleSectionHeader from 'terra-toggle-section-header';\n")),(0,a.mdx)("h2",{id:"accessibility"},"Accessibility"),(0,a.mdx)("p",null,"For accessibility best practices, it is recommended that consumers should always use only one h1 tag per page or view. The one h1 tag should be the page title. A section header should never be a heading level 1. "),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(m,{title:"Default",mdxType:"DefaultToggleSectionHeader"}),(0,a.mdx)(O,{title:"Animated",mdxType:"AnimatedToggleSectionHeader"}),(0,a.mdx)(S,{title:"Transparent",mdxType:"TransparentToggleSectionHeader"}),(0,a.mdx)("h2",{id:"toggle-section-header-props"},"Toggle Section Header Props"),(0,a.mdx)(A,{mdxType:"ToggleSectionHeaderPropsTable"}))}W.isMDXComponent=!0},10946:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-toggle-section-header",name:"terra-toggle-section-header",version:"2.74.0",url:t})}},95034:function(e,t,n){t.Z=void 0;var r=o(n(67294)),a=n(51051),l=o(n(83831));function o(e){return e&&e.__esModule?e:{default:e}}var i={title:"Patient Responsibilities",isAnimated:!0},d=function(e){e.keyCode===a.KEY_SPACE&&e.preventDefault()};t.Z=function(){return r.default.createElement(l.default,{exampleProps:i},r.default.createElement("p",null,"Respect the rights and treat all healthcare workers and other patients and visitors with dignity. Comply with all hospital policies and guidelines as informed or displayed be available for any appointments made or notify the hospital as early as possible if you are unable to do so. Acknowledge that some other patient medical condition may be more urgent than yours and accept that your doctor may need to attend them first. Kindly cooperate in such situations."),r.default.createElement("p",null,"Provide us with comprehensive and accurate details about your past medical records and be complaint as regard to taking medication or following any other prescribed treatment. Accept, where applicable, adaptations to the environment to ensure a safe and secure stay in hospital with a full explanation from our staff."),r.default.createElement("p",null,"Strictly follow the ",r.default.createElement("a",{href:"#visitors-policy",onKeyDown:d},"Hospitals Visitors Policy")," ","and ccept the measures taken by the hospital to ensure personal privacy and confidentiality of medical records."))}},62379:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(83831));function l(e){return e&&e.__esModule?e:{default:e}}var o={title:"Default Example"};t.Z=function(){return r.default.createElement(a.default,{exampleProps:o},r.default.createElement("p",null,"Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner."))}},83831:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=o(n(11435));function o(e){return e&&e.__esModule?e:{default:e}}var i={exampleProps:a.default.object.isRequired,children:a.default.node.isRequired},d=function(e){var t=e.exampleProps,n=e.children;return r.default.createElement("div",null,r.default.createElement(l.default,t,n))};d.propTypes=i;t.default=d},48002:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(83831));function l(e){return e&&e.__esModule?e:{default:e}}var o={title:"Transparent Example",isTransparent:!0};t.Z=function(){return r.default.createElement(a.default,{exampleProps:o},r.default.createElement("p",null,"Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner."))}},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(93967)),o=u(n(19845)),i=u(n(50026)),d=u(n(16749)),p=["children","disableStripes","paddingStyle"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.default.bind(d.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=c(e,p),d=r.default.useContext(i.default),u=(0,l.default)(m("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},d.className),o.className);return r.default.createElement("table",s({},o,{className:u}),t)};y.propTypes=f,y.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=y},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},p=function(e){var t=e.children,n=i(e,l);return r.default.createElement("tbody",n,t)};p.propTypes=d,p.defaultProps={children:[]};t.default=p},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},p=function(e){var t=e.children,n=i(e,l);return r.default.createElement("td",n,t)};p.propTypes=d,p.defaultProps={children:[]};t.default=p},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),a=i(n(45697)),l=i(n(29805)),o=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={children:a.default.node},u=function(e){var t=e.children,n=d(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};u.propTypes=p,u.defaultProps={children:[]};t.default=u},38880:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},p=function(e){var t=e.children,n=i(e,l);return r.default.createElement("th",n,t)};p.propTypes=d,p.defaultProps={children:[]};t.default=p},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(67294)),a=p(n(45697)),l=p(n(19845)),o=p(n(16749)),i=p(n(29805)),d=["children"];function p(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.default.bind(o.default),m={children:a.default.node},f=function(e){var t=e.children,n=s(e,d),a=c(["row"]);return r.default.createElement("tr",u({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),i.default.addScope(t,"row"))};f.propTypes=m,f.defaultProps={children:[]};t.default=f},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(67294))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=p(n(32634)),a=p(n(80196)),l=p(n(70829)),o=p(n(8685)),i=p(n(19852)),d=p(n(38880));function p(e){return e&&e.__esModule?e:{default:e}}t.default=r.default},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},11435:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(n(67294)),l=p(n(45697)),o=p(n(7812)),i=p(n(17509)),d=["children","title","level","sectionHeaderAttrs","isAnimated","isInitiallyOpen","isTransparent","isOpen","onOpen","onClose"];function p(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return(t=y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y(r.key),r)}}function y(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function x(e,t,n){return t=b(t),function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(e,g()?Reflect.construct(t,n||[],b(e).constructor):t.apply(e,n))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}var v={children:l.default.node.isRequired,title:l.default.string.isRequired,level:l.default.oneOf([1,2,3,4,5,6]),onClose:l.default.func,onOpen:l.default.func,sectionHeaderAttrs:l.default.object,isAnimated:l.default.bool,isInitiallyOpen:l.default.bool,isTransparent:l.default.bool,isOpen:l.default.bool},T={level:2,sectionHeaderAttrs:{},isAnimated:!1,isInitiallyOpen:!1,isTransparent:!1,isOpen:void 0},j=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=(n=x(this,t,[e])).props.isInitiallyOpen,a=void 0!==r&&r;return n.state={isOpen:a},n.handleOnClick=n.handleOnClick.bind(h(n)),n.wrapOnClick=n.wrapOnClick.bind(h(n)),n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(t,e),n=t,r=[{key:"handleOnClick",value:function(e){e.preventDefault();var t=this.props,n=t.onOpen,r=t.onClose;void 0===t.isOpen&&(n&&!this.state.isOpen?n():r&&this.state.isOpen&&r(),this.setState((function(e){return{isOpen:!e.isOpen}})))}},{key:"wrapOnClick",value:function(e){var t=this;return function(n){t.handleOnClick(n),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.title,r=e.level,l=e.sectionHeaderAttrs,p=e.isAnimated,f=(e.isInitiallyOpen,e.isTransparent),y=(e.isOpen,e.onOpen,e.onClose,m(e,d)),x=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l);return x.onClick=this.wrapOnClick(l.onClick),a.default.createElement("div",y,a.default.createElement(o.default,u({},x,{"aria-expanded":this.state.isOpen,isOpen:this.state.isOpen,level:r,text:n,isTransparent:f})),a.default.createElement(i.default,{isAnimated:p,isOpen:this.state.isOpen},t))}}],l=[{key:"getDerivedStateFromProps",value:function(e,t){return void 0!==e.isOpen&&t.isOpen!==e.isOpen?{isOpen:e.isOpen}:{isOpen:t.isOpen}}}],r&&f(n.prototype,r),l&&f(n,l),Object.defineProperty(n,"prototype",{writable:!1}),t}(a.default.Component);j.propTypes=v,j.defaultProps=T;t.default=j},17509:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(67294)),a=p(n(45697)),l=p(n(19845)),o=p(n(68133)),i=p(n(73010)),d=["isAnimated","isOpen","children"];function p(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.default.bind(i.default),m={children:a.default.node.isRequired,isAnimated:a.default.bool,isOpen:a.default.bool},f=function(e){var t,n=e.isAnimated,a=e.isOpen,l=e.children,i=s(e,d),p=a?"auto":0;return t=n?r.default.createElement(o.default,{duration:250,height:p,easing:"ease-out"},l):a&&l,r.default.createElement("div",u({},i,{className:c("toggle",i.className),"aria-hidden":!a}),t)};f.propTypes=m,f.defaultProps={isAnimated:!1,isOpen:!1};t.default=f},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}},73010:function(e,t,n){n.r(t),t.default={toggle:"Toggle-module__toggle___7fo88"}}}]);