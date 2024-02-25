"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[67174,56971],{16045:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(96540),a=n(36665),l=n(86190),o=n(74659),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={};function s(e){var t=e.components,n=u(e,i);return(0,a.mdx)("wrapper",d({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ToggleSectionHeaderExampleTemplate from './ToggleSectionHeaderExampleTemplate';\n\nconst componentProps = {\n  title: 'Default Example',\n};\n\nconst DefaultToggleSectionHeader = () => (\n  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>\n    <p>Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner.</p>\n  </ToggleSectionHeaderExampleTemplate>\n);\n\nexport default DefaultToggleSectionHeader;\n\n")))}s.isMDXComponent=!0;var c=n(201),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(c.A,{title:t||"Default Toggle Section Header",description:n,example:r.createElement(o.A,null),exampleSrc:r.createElement(s,null),isExpanded:a})},f=n(21936),y=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={};function h(e){var t=e.components,n=x(e,y);return(0,a.mdx)("wrapper",g({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies\nimport {\n  KEY_SPACE,\n} from 'keycode-js';\nimport ToggleSectionHeaderExampleTemplate from './ToggleSectionHeaderExampleTemplate';\n\nconst componentProps = {\n  title: 'Patient Responsibilities',\n  isAnimated: true,\n};\n\n// Prevent scrolling when press space bar key on anchor tag\nconst handlePreventScroll = (event) => {\n  if (event.keyCode === KEY_SPACE) {\n    event.preventDefault();\n  }\n};\n\nconst AnimatedToggleSectionHeader = () => (\n  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>\n    <p>Respect the rights and treat all healthcare workers and other patients and visitors with dignity. Comply with all hospital policies and guidelines as informed or displayed be available for any appointments made or notify the hospital as early as possible if you are unable to do so. Acknowledge that some other patient medical condition may be more urgent than yours and accept that your doctor may need to attend them first. Kindly cooperate in such situations.</p>\n    <p>Provide us with comprehensive and accurate details about your past medical records and be complaint as regard to taking medication or following any other prescribed treatment. Accept, where applicable, adaptations to the environment to ensure a safe and secure stay in hospital with a full explanation from our staff.</p>\n    <p>\n      Strictly follow the&nbsp;\n      <a href=\"#visitors-policy\" onKeyDown={handlePreventScroll}>Hospitals Visitors Policy</a>\n      {' '}\n      and ccept the measures taken by the hospital to ensure personal privacy and confidentiality of medical records.\n    </p>\n  </ToggleSectionHeaderExampleTemplate>\n);\n\nexport default AnimatedToggleSectionHeader;\n\n")))}h.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(c.A,{title:t||"Animated Toggle Section Header",description:n,example:r.createElement(f.A,null),exampleSrc:r.createElement(h,null),isExpanded:a})},O=n(26933),T=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w={};function C(e){var t=e.components,n=P(e,T);return(0,a.mdx)("wrapper",j({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ToggleSectionHeaderExampleTemplate from './ToggleSectionHeaderExampleTemplate';\n\nconst componentProps = {\n  title: 'Transparent Example',\n  isTransparent: true,\n};\n\nconst DefaultToggleSectionHeader = () => (\n  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>\n    <p>Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner.</p>\n  </ToggleSectionHeaderExampleTemplate>\n);\n\nexport default DefaultToggleSectionHeader;\n\n")))}C.isMDXComponent=!0;var _=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(c.A,{title:t||"Transparent Toggle Section Header",description:n,example:r.createElement(O.A,null),exampleSrc:r.createElement(C,null),isExpanded:a})},N=n(12883),S=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var R={},A="wrapper";function D(e){var t=e.components,n=k(e,S);return(0,a.mdx)(A,E({},R,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(N.Ay,{mdxType:"PropsTable"},(0,a.mdx)(N.fI,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(N.dt,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(N.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(N.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(N.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Content in the body of the toggle section header component that will be expanded or hidden."))),(0,a.mdx)(N.fI,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(N.dt,{mdxType:"PropNameCell"},"title"),(0,a.mdx)(N.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(N.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(N.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Text to be displayed in the section header."))),(0,a.mdx)(N.fI,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(N.dt,{mdxType:"PropNameCell"},"level"),(0,a.mdx)(N.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  1\n  2\n  3\n  4\n  5\n  6\n],\n"))),(0,a.mdx)(N.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"2\n"))),(0,a.mdx)(N.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the heading level. One of h1, h2, h3, h4, h5, or h6."))),(0,a.mdx)(N.fI,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(N.dt,{mdxType:"PropNameCell"},"onClose"),(0,a.mdx)(N.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(N.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when toggle-section-header is closed."))),(0,a.mdx)(N.fI,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(N.dt,{mdxType:"PropNameCell"},"onOpen"),(0,a.mdx)(N.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(N.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when toggle-section-header is opened."))),(0,a.mdx)(N.fI,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(N.dt,{mdxType:"PropNameCell"},"sectionHeaderAttrs"),(0,a.mdx)(N.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(N.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,a.mdx)(N.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Used to set props and HTML attributes on the underlying section-header."))),(0,a.mdx)(N.fI,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(N.dt,{mdxType:"PropNameCell"},"isAnimated"),(0,a.mdx)(N.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(N.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(N.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the toggle-section-header to be animated when it is opened or closed."))),(0,a.mdx)(N.fI,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(N.dt,{mdxType:"PropNameCell"},"isInitiallyOpen"),(0,a.mdx)(N.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(N.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(N.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the toggle-section-header initial state to open."))),(0,a.mdx)(N.fI,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(N.dt,{mdxType:"PropNameCell"},"isTransparent"),(0,a.mdx)(N.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(N.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(N.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the background of the section header to transparent."))),(0,a.mdx)(N.fI,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(N.dt,{mdxType:"PropNameCell"},"isOpen"),(0,a.mdx)(N.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(N.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(N.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Programmatically toggle the toggle-section-header component.")))))}D.isMDXComponent=!0;var H=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var q={},Z="wrapper";function L(e){var t=e.components,n=M(e,H);return(0,a.mdx)(Z,I({},q,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.E,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-toggle-section-header"},"Terra Toggle Section Header"),(0,a.mdx)("p",null,"Toggle section header component that transitions content in and out with a click. "),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-toggle-section-header"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ToggleSectionHeader from 'terra-toggle-section-header';\n")),(0,a.mdx)("h2",{id:"accessibility"},"Accessibility"),(0,a.mdx)("p",null,"For accessibility best practices, it is recommended that consumers should always use only one h1 tag per page or view. The one h1 tag should be the page title. A section header should never be a heading level 1. "),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(m,{title:"Default",mdxType:"DefaultToggleSectionHeader"}),(0,a.mdx)(v,{title:"Animated",mdxType:"AnimatedToggleSectionHeader"}),(0,a.mdx)(_,{title:"Transparent",mdxType:"TransparentToggleSectionHeader"}),(0,a.mdx)("h2",{id:"toggle-section-header-props"},"Toggle Section Header Props"),(0,a.mdx)(D,{mdxType:"ToggleSectionHeaderPropsTable"}))}L.isMDXComponent=!0},86190:function(e,t,n){n.d(t,{E:function(){return l}});var r=n(96540),a=n(55713),l=function(e){var t=e.url;return r.createElement(a.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-toggle-section-header",name:"terra-toggle-section-header",version:"2.76.0",url:t})}},21936:function(e,t,n){t.A=void 0;var r=o(n(96540)),a=n(25966),l=o(n(907));function o(e){return e&&e.__esModule?e:{default:e}}var i={title:"Patient Responsibilities",isAnimated:!0},d=function(e){e.keyCode===a.KEY_SPACE&&e.preventDefault()};t.A=function(){return r.default.createElement(l.default,{exampleProps:i},r.default.createElement("p",null,"Respect the rights and treat all healthcare workers and other patients and visitors with dignity. Comply with all hospital policies and guidelines as informed or displayed be available for any appointments made or notify the hospital as early as possible if you are unable to do so. Acknowledge that some other patient medical condition may be more urgent than yours and accept that your doctor may need to attend them first. Kindly cooperate in such situations."),r.default.createElement("p",null,"Provide us with comprehensive and accurate details about your past medical records and be complaint as regard to taking medication or following any other prescribed treatment. Accept, where applicable, adaptations to the environment to ensure a safe and secure stay in hospital with a full explanation from our staff."),r.default.createElement("p",null,"Strictly follow the ",r.default.createElement("a",{href:"#visitors-policy",onKeyDown:d},"Hospitals Visitors Policy")," ","and ccept the measures taken by the hospital to ensure personal privacy and confidentiality of medical records."))}},74659:function(e,t,n){t.A=void 0;var r=l(n(96540)),a=l(n(907));function l(e){return e&&e.__esModule?e:{default:e}}var o={title:"Default Example"};t.A=function(){return r.default.createElement(a.default,{exampleProps:o},r.default.createElement("p",null,"Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner."))}},907:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),a=o(n(5556)),l=o(n(49410));function o(e){return e&&e.__esModule?e:{default:e}}var i={exampleProps:a.default.object.isRequired,children:a.default.node.isRequired},d=function(e){var t=e.exampleProps,n=e.children;return r.default.createElement("div",null,r.default.createElement(l.default,t,n))};d.propTypes=i;t.default=d},26933:function(e,t,n){t.A=void 0;var r=l(n(96540)),a=l(n(907));function l(e){return e&&e.__esModule?e:{default:e}}var o={title:"Transparent Example",isTransparent:!0};t.A=function(){return r.default.createElement(a.default,{exampleProps:o},r.default.createElement("p",null,"Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner."))}},17212:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(96540)),a=p(n(5556)),l=p(n(46942)),o=p(n(67967)),i=p(n(52103)),d=p(n(19677)),u=["children","disableStripes","paddingStyle"];function p(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.default.bind(d.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=c(e,u),d=r.default.useContext(i.default),p=(0,l.default)(m("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},d.className),o.className);return r.default.createElement("table",s({},o,{className:p}),t)};y.propTypes=f,y.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=y},15460:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),a=o(n(5556)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},u=function(e){var t=e.children,n=i(e,l);return r.default.createElement("tbody",n,t)};u.propTypes=d,u.defaultProps={children:[]};t.default=u},59584:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),a=o(n(5556)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},u=function(e){var t=e.children,n=i(e,l);return r.default.createElement("td",n,t)};u.propTypes=d,u.defaultProps={children:[]};t.default=u},14281:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(96540)),a=i(n(5556)),l=i(n(93623)),o=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={children:a.default.node},p=function(e){var t=e.children,n=d(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};p.propTypes=u,p.defaultProps={children:[]};t.default=p},93401:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),a=o(n(5556)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},u=function(e){var t=e.children,n=i(e,l);return r.default.createElement("th",n,t)};u.propTypes=d,u.defaultProps={children:[]};t.default=u},96646:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(96540)),a=u(n(5556)),l=u(n(67967)),o=u(n(19677)),i=u(n(93623)),d=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.default.bind(o.default),m={children:a.default.node},f=function(e){var t=e.children,n=s(e,d),a=c(["row"]);return r.default.createElement("tr",p({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),i.default.addScope(t,"row"))};f.propTypes=m,f.defaultProps={children:[]};t.default=f},93623:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(96540))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},17568:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=u(n(17212)),a=u(n(15460)),l=u(n(96646)),o=u(n(59584)),i=u(n(14281)),d=u(n(93401));function u(e){return e&&e.__esModule?e:{default:e}}t.default=r.default},27166:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(96540)),a=l(n(56445));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},49410:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(96540)),l=u(n(5556)),o=u(n(22745)),i=u(n(97742)),d=["children","title","level","sectionHeaderAttrs","isAnimated","isInitiallyOpen","isTransparent","isOpen","onOpen","onClose"];function u(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return(t=y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y(r.key),r)}}function y(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function g(e,t,n){return t=b(t),function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(e,x()?Reflect.construct(t,n||[],b(e).constructor):t.apply(e,n))}function x(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(x=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}var O={children:l.default.node.isRequired,title:l.default.string.isRequired,level:l.default.oneOf([1,2,3,4,5,6]),onClose:l.default.func,onOpen:l.default.func,sectionHeaderAttrs:l.default.object,isAnimated:l.default.bool,isInitiallyOpen:l.default.bool,isTransparent:l.default.bool,isOpen:l.default.bool},T={level:2,sectionHeaderAttrs:{},isAnimated:!1,isInitiallyOpen:!1,isTransparent:!1,isOpen:void 0},j=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=(n=g(this,t,[e])).props.isInitiallyOpen,a=void 0!==r&&r;return n.state={isOpen:a},n.handleOnClick=n.handleOnClick.bind(h(n)),n.wrapOnClick=n.wrapOnClick.bind(h(n)),n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(t,e),n=t,r=[{key:"handleOnClick",value:function(e){e.preventDefault();var t=this.props,n=t.onOpen,r=t.onClose;void 0===t.isOpen&&(n&&!this.state.isOpen?n():r&&this.state.isOpen&&r(),this.setState((function(e){return{isOpen:!e.isOpen}})))}},{key:"wrapOnClick",value:function(e){var t=this;return function(n){t.handleOnClick(n),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.title,r=e.level,l=e.sectionHeaderAttrs,u=e.isAnimated,f=(e.isInitiallyOpen,e.isTransparent),y=(e.isOpen,e.onOpen,e.onClose,m(e,d)),g=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l);return g.onClick=this.wrapOnClick(l.onClick),a.default.createElement("div",y,a.default.createElement(o.default,p({},g,{"aria-expanded":this.state.isOpen,isOpen:this.state.isOpen,level:r,text:n,isTransparent:f})),a.default.createElement(i.default,{isAnimated:u,isOpen:this.state.isOpen},t))}}],l=[{key:"getDerivedStateFromProps",value:function(e,t){return void 0!==e.isOpen&&t.isOpen!==e.isOpen?{isOpen:e.isOpen}:{isOpen:t.isOpen}}}],r&&f(n.prototype,r),l&&f(n,l),Object.defineProperty(n,"prototype",{writable:!1}),t}(a.default.Component);j.propTypes=O,j.defaultProps=T;t.default=j},97742:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(96540)),a=u(n(5556)),l=u(n(67967)),o=u(n(56650)),i=u(n(76835)),d=["isAnimated","isOpen","children"];function u(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.default.bind(i.default),m={children:a.default.node.isRequired,isAnimated:a.default.bool,isOpen:a.default.bool},f=function(e){var t,n=e.isAnimated,a=e.isOpen,l=e.children,i=s(e,d),u=a?"auto":0;return t=n?r.default.createElement(o.default,{duration:250,height:u,easing:"ease-out"},l):a&&l,r.default.createElement("div",p({},i,{className:c("toggle",i.className),"aria-hidden":!a}),t)};f.propTypes=m,f.defaultProps={isAnimated:!1,isOpen:!1};t.default=f},19677:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}},76835:function(e,t,n){n.r(t),t.default={toggle:"Toggle-module__toggle___7fo88"}}}]);