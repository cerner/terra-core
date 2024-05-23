"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[65686],{55713:function(e,t,a){var n=a(24994);t.A=void 0;var r=n(a(96540)),o=n(a(5556)),l=n(a(67967)),i=n(a(25642)),d=l.default.bind(i.default),u={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},s=function(e){var t=e.src,a=e.name,n=e.url,o=e.version,l=r.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},r.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(o))),i=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},l,i)};s.propTypes=u;t.A=s},65686:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});a(96540);var n=a(36665),r=a(62757),o=a(68523),l=a(2735),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s={},c="wrapper";function m(e){var t=e.components,a=u(e,i);return(0,n.mdx)(c,d({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(r.E,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"why-the-accessibility-of-profile-image-is-important"},"Why the accessibility of Profile Image is important"),(0,n.mdx)(o.Notice,{variant:"important",ariaLevel:"2",mdxType:"Notice"},(0,n.mdx)("p",null,"The Profile Image component represents an account or profile across the platform. A Profile Image visually associates a user’s, patient’s, or customer’s image with personalised content."),(0,n.mdx)("p",null,"Poor or improper implementation can cause Profile Image to be inaccessible, which can cause user confusion and impede the identification of content relevant to that user’s profile.")),(0,n.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,n.mdx)("h3",{id:"content-considerations-what-do-content-creators-need-to-do"},"Content Considerations: What do content creators need to do?"),(0,n.mdx)("blockquote",null,(0,n.mdx)("ul",{parentName:"blockquote"},(0,n.mdx)("li",{parentName:"ul"},"Content creators must ensure that images with meaningful content have a textual equivalent.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Provide engineers with text for the “alt prop”."),(0,n.mdx)("li",{parentName:"ul"},"The alt prop must be a textual equivalent that conveys the meaning of the image."))),(0,n.mdx)("li",{parentName:"ul"},"For supplemental or decorative images that provide no contextual value, content creators must convey to the engineers that no alt prop will be supplied."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must work with engineers to convey any visual relationships created with Profile Image and other content on the page."))),(0,n.mdx)("h3",{id:"code-considerations-what-do-engineers-need-to-do"},"Code Considerations: What do engineers need to do?"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Engineers must not override the Profile Image’s role of image."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must apply an alt prop for meaningful images.",(0,n.mdx)("div",{"aria-label":"Example Demo"},(0,n.mdx)(l.A,{mdxType:"ProfileImageExamples"})))),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'const cx = classNames.bind(styles);\n\nconst ProfileImageExamples = () => (\n  <div>\n    <Card>\n      <Card.Body>\n        <ProfileImage alt="" width="75" height="75" aria-describedby="caption-example-1" />\n        <span id="caption-example-1" className={cx(\'add-left-margin\')}>Decorative Profile Image</span>\n      </Card.Body>\n    </Card>\n    <Card>\n      <Card.Body>\n        <ProfileImage alt="profile image for Martin Moon, photograph from space of rising star over a planet\'s silhouette" src={exampleProfileImage} aria-describedby="caption-example-2" />\n        <span id="caption-example-2" className={cx(\'add-left-margin\')}>Meaningful Profile Image</span>\n      </Card.Body>\n    </Card>\n  </div>\n);\n')),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Work with content creators to understand how content should resize and reflow at different breakpoints and form factors to ensure content is not artificially constrained or cut off at smaller viewports."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must work with the content creators to understand if Profile Image is visual related to other content.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"If so, the engineer must associate the Profile Image to the related content.")))),(0,n.mdx)("h2",{id:"usability-expectations"},"Usability Expectations"),(0,n.mdx)("p",null,"The user expects to understand the purpose of Profile Image regardless of how they experience the content."),(0,n.mdx)("h3",{id:"interaction-detail"},"Interaction Detail"),(0,n.mdx)("p",null,"Profile image is not interactable."),(0,n.mdx)("h3",{id:"keyboard-expectations"},"Keyboard Expectations"),(0,n.mdx)("p",null,"Because Profile Image is not actionable, it does not receive keyboard focus."),(0,n.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,n.mdx)("p",null,"Terra is committed to ensuring its components provide maximum accessibility. Terra provides the ability to make accessibile products. However, using Terra components will not automatically make a product accessible."),(0,n.mdx)("p",null,"The final responsibility lies with the consumers of Terra components — ensuring proper usage, programmatic context where needed, the words used to label elements, engineers following correct implementation patterns, and authors crafting content that follows best practice guidance — to make a product fully accessible."),(0,n.mdx)("h3",{id:"primary-accessibility-criteria-for-profile-image"},"Primary accessibility criteria for Profile Image"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"},(0,n.mdx)("strong",{parentName:"a"},"1.1.1 Non-text Content"))," - Partially Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Profile Image contains a meaningful alt tag. The ALT prop is listed as optional. Whenever null or no value provided for alt prop Terra Profile Image will be presented as decorative for accessibility user. All images or anything with role = image must have an ALT attribute."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must assign a textual equivalent to the alt prop for meaningful images."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must provide engineers an alt prop that conveys the meaning of the image."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},(0,n.mdx)("strong",{parentName:"a"},"1.3.1 Info and Relationships"))," — Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra provides the ability for information, structure, and relationships to be programmatically determined."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must programmatically associate Profile Image with other content if a visual relationship with the content is apparent."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must convey to the engineers when the visual presentation of Profile image is associated to their content."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"},(0,n.mdx)("strong",{parentName:"a"},"1.3.2 Meaningful Sequence"))," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure content is coded following the users logical reading order."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"},(0,n.mdx)("strong",{parentName:"a"},"4.1.2 Name, Role, Value"))," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Profile Image provides the role of image and allows consuming teams to supply a meaningful textual equivalent for the name.")))),(0,n.mdx)("h3",{id:"related-accessibility-criteria-that-apply-when-adding-content-to-action-header"},"Related accessibility criteria that apply when adding content to action header"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"},(0,n.mdx)("strong",{parentName:"a"},"1.4.10 Reflow"))," — Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra provides the ability for components to reflow when the viewport is resized to 320x256 px without loss of information or function. "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure content within Terra Action Header can reflow when the viewport is resized to 320 x 256 px without scrolling in two directions or loss of information or functionality. "),(0,n.mdx)("li",{parentName:"ul"},"Content creators must consider the responsive nature of Terra Action Header and provide engineers guidance on how it should content should reflow when the viewport is resized to 320 x 256 px"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"},(0,n.mdx)("strong",{parentName:"a"},"1.4.11 Non-Text Contrast"))," — Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra provides the ability to populate user created images or provide a default image should an image not be provided or fails to load."),(0,n.mdx)("li",{parentName:"ul"},"If the image is to be meaningful, content creators must ensure the default image meets the 3:1 contrast ratio.")))),(0,n.mdx)("h3",{id:"supported-features-and-technology"},"Supported Features and Technology"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Keyboard Interactions"),(0,n.mdx)("li",{parentName:"ul"},"JAWS Support with Chrome (PC)"),(0,n.mdx)("li",{parentName:"ul"},"VoiceOver Support with Chrome, Safari (MAC) ")),(0,n.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"NVDA not tested (PC)",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Mobile Touch Interactions with Screen Reader assistive technology"))),(0,n.mdx)("li",{parentName:"ul"},"Speech Input Interactions with assistive technology"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-core/issues/new/choose"},"Report a problem with this component on GitHub "))),(0,n.mdx)("h3",{id:"linked-references"},"Linked References:"),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/"},"Web Content Accessibility Guidelines (WCAG)")))}m.isMDXComponent=!0},62757:function(e,t,a){a.d(t,{E:function(){return o}});var n=a(96540),r=a(55713),o=function(e){var t=e.url;return n.createElement(r.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-profile-image",name:"terra-profile-image",version:"3.46.0",url:t})}},18290:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=m(a(96540)),r=m(a(5556)),o=m(a(46942)),l=m(a(67967)),i=m(a(56500)),d=m(a(52103)),u=m(a(74887)),s=m(a(90498)),c=["children","variant","visuallyHiddenText"];function m(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var h=l.default.bind(u.default),_={children:r.default.node,variant:r.default.oneOf(["default","raised"]),visuallyHiddenText:r.default.string},g={variant:"default"},b=function(e){var t=e.children,a=e.variant,r=e.visuallyHiddenText,l=p(e,c),u=n.default.useContext(d.default),s=(0,o.default)(h(["card",a,u.className]),l.className),m=r?n.default.createElement(i.default,{text:r}):null;return n.default.createElement("article",f({},l,{className:s}),m,t)};b.propTypes=_,b.defaultProps=g,b.Body=s.default;t.default=b},90498:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(96540)),r=s(a(5556)),o=s(a(46942)),l=s(a(67967)),i=s(a(52103)),d=s(a(58647)),u=["children","hasPaddingVertical","hasPaddingHorizontal","isContentCentered"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var f=l.default.bind(d.default),p={children:r.default.node,hasPaddingVertical:r.default.bool,hasPaddingHorizontal:r.default.bool,isContentCentered:r.default.bool},h=function(e){var t=e.children,a=e.hasPaddingVertical,r=e.hasPaddingHorizontal,l=e.isContentCentered,d=m(e,u),s=n.default.useContext(i.default),p=(0,o.default)(f([{"vertical-padding":a},{"horizontal-padding":r},{"center-content":l},s.className]),d.className);return n.default.createElement("div",c({},d,{className:p}),t)};h.propTypes=p,h.defaultProps={hasPaddingHorizontal:!0,hasPaddingVertical:!0,isContentCentered:!1};t.default=h},2735:function(e,t,a){t.A=void 0;var n=u(a(96540)),r=u(a(67967)),o=u(a(18290)),l=u(a(75247)),i=u(a(21780)),d=u(a(63167));function u(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(d.default);t.A=function(){return n.default.createElement("div",null,n.default.createElement(o.default,null,n.default.createElement(o.default.Body,null,n.default.createElement(l.default,{alt:"",width:"75",height:"75","aria-describedby":"caption-example-1"}),n.default.createElement("span",{id:"caption-example-1",className:s("add-left-margin")},"Decorative Profile Image"))),n.default.createElement(o.default,null,n.default.createElement(o.default.Body,null,n.default.createElement(l.default,{alt:"profile image for Martin Moon, photograph from space of rising star over a planet's silhouette",src:i.default,"aria-describedby":"caption-example-2"}),n.default.createElement("span",{id:"caption-example-2",className:s("add-left-margin")},"Meaningful Profile Image"))))}},91563:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(96540)),r=u(a(5556)),o=u(a(67967)),l=u(a(52103)),i=u(a(43840)),d=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=o.default.bind(i.default),f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:r.default.string},_=function(e){var t=e.children,a=c(e,d),r=n.default.useContext(l.default),i=(0,o.default)(m(["button",r.className]),a.className);return n.default.createElement("button",s({},a,{type:"button",className:i,onBlur:f,onMouseDown:p,"data-focus-styles-enabled":!0}),t)};_.propTypes=h;t.default=_},18875:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(96540)),r=d(a(5556)),o=d(a(67967)),l=d(a(52103)),i=d(a(38616));function d(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(i.default),s={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},c=function(e){var t=e.ariaLevel,a=e.variant,r=e.children,o=n.default.useContext(l.default);return n.default.createElement("div",{className:u("notice",a,o.className)},n.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),n.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},n.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),n.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),n.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",n.default.createElement("ul",{className:u("list")},n.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),n.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),n.default.createElement("li",null,n.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),n.default.Children.map(r,(function(e){return"string"==typeof e?n.default.createElement("p",null,e):e}))))};c.propTypes=s,c.defaultProps={ariaLevel:"2",variant:"important"};t.default=c},60934:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(96540)),r=s(a(5556)),o=s(a(46942)),l=s(a(67967)),i=s(a(52103)),d=s(a(27683)),u=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var f=l.default.bind(d.default),p={title:r.default.string},h=function(e){var t=e.title,a=m(e,u),r=n.default.useContext(i.default),l=(0,o.default)(f(["placeholder",r.className]),a.className),d=f(["inner"]);return n.default.createElement("div",c({},a,{className:l}),n.default.createElement("div",{className:d},n.default.createElement("p",{className:f("title")},t)))};h.propTypes=p,h.defaultProps={title:""};t.default=h},68523:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var n=l(a(18875)),r=l(a(60934)),o=l(a(91563));function l(e){return e&&e.__esModule?e:{default:e}}},75247:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(96540)),r=c(a(5556)),o=c(a(46942)),l=c(a(67967)),i=c(a(52103)),d=c(a(82232)),u=c(a(55244)),s=["src","alt","fit","height","width","variant","onLoad","onError"];function c(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.default.bind(u.default),h={src:r.default.string,alt:r.default.string,fit:r.default.oneOf(["cover","scale-down","contain","none"]),height:r.default.string,width:r.default.string,variant:r.default.oneOf(["default","rounded","circle","thumbnail"]),onLoad:r.default.func,onError:r.default.func},_=function(e){return!/\D/.test(e)},g=function(e){var t=e.src,a=e.alt,r=e.fit,l=e.height,u=e.width,c=e.variant,h=e.onLoad,g=e.onError,b=f(e,s),v=n.default.useContext(i.default),y={height:_(l)?"".concat(l,"px"):l,width:_(u)?"".concat(u,"px"):u},x=(0,o.default)(p(["profile-image","placeholder",r,c,v.className]),b.className),w=n.default.createElement("span",m({},b,{role:a?"img":"presentation","aria-label":a,style:y,className:x}));if(t){var N=(0,o.default)(p(["profile-image",v.className]),b.className);return n.default.createElement(d.default,m({},b,{src:t,alt:a,role:a?"img":"presentation",height:l,width:u,fit:r,variant:c,placeholder:w,onLoad:h,onError:g,className:N}))}return w};g.propTypes=h,g.defaultProps={fit:"cover",height:"75",width:"75",variant:"default"};t.default=g},21780:function(e,t,a){a.r(t),t.default=a.p+"51d085f765a7361bab659ffffdb9bb46.jpg"},25642:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},74887:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Card-module__clinical-lowlight-theme___mGqg1","orion-fusion-theme":"Card-module__orion-fusion-theme___pKdAk","redwood-theme":"Card-module__redwood-theme___q3rY8",card:"Card-module__card___065D-",default:"Card-module__default___2cIRO",raised:"Card-module__raised___3pYfF"}},58647:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"CardBody-module__orion-fusion-theme___K00C6","clinical-lowlight-theme":"CardBody-module__clinical-lowlight-theme___k2Ldr","redwood-theme":"CardBody-module__redwood-theme___VMcf6","vertical-padding":"CardBody-module__vertical-padding___UHG80","horizontal-padding":"CardBody-module__horizontal-padding___OqvV2","center-content":"CardBody-module__center-content___kMmT+"}},63167:function(e,t,a){a.r(t),t.default={"add-left-margin":"ProfileImageCommon-module__add-left-margin___Bdxjs","test-style-border":"ProfileImageCommon-module__test-style-border___wxuir","test-style-size":"ProfileImageCommon-module__test-style-size___8j1-7"}},43840:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___mWSPm","orion-fusion-theme":"Button-module__orion-fusion-theme___nj7k4",button:"Button-module__button___r5O1Q","is-active":"Button-module__is-active___CVWJw"}},38616:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___J4EGN","orion-fusion-theme":"Notice-module__orion-fusion-theme___1W9PK",notice:"Notice-module__notice___8kOwf",children:"Notice-module__children___cF5Rb",accessory:"Notice-module__accessory___h3l7H",title:"Notice-module__title___PeXjO","ux-recommendation":"Notice-module__ux-recommendation___tJWAL",caution:"Notice-module__caution___STLbH",deprecation:"Notice-module__deprecation___rWWLq",maintenance:"Notice-module__maintenance___o2AK1",important:"Notice-module__important___WpELD","not-supported":"Notice-module__not-supported___eAx6o",paragraph:"Notice-module__paragraph___BwEGe",list:"Notice-module__list___kOyCE"}},27683:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___rMAZk","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___78cuG",placeholder:"Placeholder-module__placeholder___FPYJB",inner:"Placeholder-module__inner___-U1IZ",title:"Placeholder-module__title___lsXDJ"}},55244:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ProfileImage-module__clinical-lowlight-theme___CzdiE","orion-fusion-theme":"ProfileImage-module__orion-fusion-theme___4XYqo","profile-image":"ProfileImage-module__profile-image___NFZOQ",placeholder:"ProfileImage-module__placeholder___wgHX-",cover:"ProfileImage-module__cover___yJSSX",fill:"ProfileImage-module__fill___Jtrqh",contain:"ProfileImage-module__contain___BkbWC","scale-down":"ProfileImage-module__scale-down___U44x3",none:"ProfileImage-module__none___yKXO5",default:"ProfileImage-module__default___mNqqy",rounded:"ProfileImage-module__rounded___2WDtd",circle:"ProfileImage-module__circle___ynDsr",thumbnail:"ProfileImage-module__thumbnail___H4hqa"}}}]);