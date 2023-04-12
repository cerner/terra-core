"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[71441],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),i=a(n(45697)),l=a(n(47166)),o=a(n(17422)),s=l.default.bind(o.default),d={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},u=function(e){var t=e.src,n=e.name,a=e.url,i=e.version,l=r.default.createElement("a",{className:s("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},r.default.createElement("span",{className:s("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:s("badge-version")},"v".concat(i))),o=t?r.default.createElement("a",{className:s("badge"),href:t},r.default.createElement("span",{className:s("badge-name")},"github"),r.default.createElement("span",{className:s("badge-version")},"source")):void 0;return r.default.createElement("div",{className:s("badge-container")},l,o)};u.propTypes=d;var c=u;t.Z=c},71441:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});n(67294);var a=n(81254),r=n(56813),i=n(60619),l=n(32331),o=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u={},c="wrapper";function m(e){var t=e.components,n=d(e,o);return(0,a.mdx)(c,s({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"accessibility-guide-for-terra-hyperlink"},"Accessibility Guide for Terra Hyperlink"),(0,a.mdx)(i.Notice,{variant:"important",ariaLevel:"2",mdxType:"Notice"},(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"For each use of Terra Hyperlink, special care needs to be taken to ensure ",(0,a.mdx)("strong",{parentName:"li"},"the link text alone should convey the function and purpose of the link"),"."),(0,a.mdx)("li",{parentName:"ol"},"Hyperlinks ",(0,a.mdx)("strong",{parentName:"li"},"must have a non-empty href")," in order to be considered true links and to be accessible to keyboard users. "))),(0,a.mdx)(l.Z,{mdxType:"Whitespace"}),(0,a.mdx)("h3",{id:"why-is-this-important"},"Why is this important?"),(0,a.mdx)("p",null,"Hyperlinks are one of HTML's foundational elements, so making links accessible is essential. Hyperlinks are a vital tool for creating an intuitive user experience. However, because links are so fundamental to the functionality of web content, inaccessible or improperly implemented links can be a severe barrier to overall accessibility. "),(0,a.mdx)("p",null,"Accessible hyperlinks are critical to ensure all users can effectively understand and use them.  For example:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Blind screen reader users")," do not necessarily interact with pages in a linear fashion and can use hyperlinks out of context. They need the words within the link to be descriptive of purpose."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"People using speech input software")," require unique links to effectively activate the link they would like to follow."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Keyboard only users")," navigate the page using only a keyboard. A visible keyboard focus is crucial to see where they are on the page."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"People unable to perceive colors")," need links to be perceivably distinct from the surrounding text. The use of underlines or other non-colored indicators will help users who may not see color.")),(0,a.mdx)(l.Z,{newline:2,mdxType:"Whitespace"}),(0,a.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations:"),(0,a.mdx)("h3",{id:"code-considerations"},"Code Considerations"),(0,a.mdx)("p",null,"Terra Hyperlink can be used as: ",(0,a.mdx)("em",{parentName:"p"},"Hyperlink")," and ",(0,a.mdx)("em",{parentName:"p"},"Hyperlink Button"),". The table below explains the difference between the two."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Variant"),(0,a.mdx)("th",{parentName:"tr",align:null},"Purpose"),(0,a.mdx)("th",{parentName:"tr",align:null},"Example import"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"Hyperlink"),(0,a.mdx)("td",{parentName:"tr",align:null},"Represents a basic HTML hyperlink (a hypertext anchor) labeled by its contents. This variant must have an ",(0,a.mdx)("inlineCode",{parentName:"td"},"href")," prop."),(0,a.mdx)("td",{parentName:"tr",align:null})),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"Hyperlink Button"),(0,a.mdx)("td",{parentName:"tr",align:null},"Represents a basic HTML button that triggers hyperlink navigation via the required ",(0,a.mdx)("inlineCode",{parentName:"td"},"onClick")," event handler prop."),(0,a.mdx)("td",{parentName:"tr",align:null})))),(0,a.mdx)("h4",{id:"developers-must-ensure-the-following-code-considerations"},"Developers must ensure the following code considerations:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Do not override ",(0,a.mdx)("inlineCode",{parentName:"li"},"role=link"),".",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Use the component variant that best matches the intended usage."))),(0,a.mdx)("li",{parentName:"ul"},"If non-unique link text must be used, e.g. ",(0,a.mdx)("inlineCode",{parentName:"li"},"Learn more"),", ensure the link is programmatically associated with other content that describes its purpose."),(0,a.mdx)("li",{parentName:"ul"},"Ensure that action is not taken on a hyperlink when it receives focus or when the focus leaves a hyperlink."),(0,a.mdx)("li",{parentName:"ul"},"Action on a hyperlink always occurs on the ",(0,a.mdx)("inlineCode",{parentName:"li"},"onmouseup")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"onkeyup")," event."),(0,a.mdx)("li",{parentName:"ul"},"Links must have a non-empty ",(0,a.mdx)("inlineCode",{parentName:"li"},"href")," to be considered proper links and accessible to keyboard users."),(0,a.mdx)("li",{parentName:"ul"},"Link Buttons must have an callback provided for ",(0,a.mdx)("inlineCode",{parentName:"li"},"onClick")," and must ignore ",(0,a.mdx)("inlineCode",{parentName:"li"},"href")," to be considered proper link buttons and accessible to keyboard users."),(0,a.mdx)("li",{parentName:"ul"},"Ensure that links with icons follow meaningful or decorative use guidelines.",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Meaningful icons must have appropriate alternative text in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"alt")," attribute."),(0,a.mdx)("li",{parentName:"ul"},"Decorative icons must be marked as decorative.")))),(0,a.mdx)(l.Z,{mdxType:"Whitespace"}),(0,a.mdx)("h3",{id:"content-considerations"},"Content Considerations:"),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"It is most important for link text to make sense without the surrounding sentences or content. The link text alone should convey the function and purpose of the link. Link text should also be unique and easy to speak out loud."),(0,a.mdx)("p",{parentName:"blockquote"},"Consider these guidelines when writing link text:"),(0,a.mdx)("ul",{parentName:"blockquote"},(0,a.mdx)("li",{parentName:"ul"},"Use text that is unique and descriptive of the link's purpose."),(0,a.mdx)("li",{parentName:"ul"},"Avoid link text like “Click Here,” “More,” and “Read More.” These kinds of links can be confusing when a screen reader reads them out of context. These types of non-unique links prevent speech input users may from accurately activating them."),(0,a.mdx)("li",{parentName:"ul"},"It is OK to link a full sentence, but avoid longer."),(0,a.mdx)("li",{parentName:"ul"},"Use judgment when linking full URLs. When linking a URL, consider screen reader users that must listen to their device announcing the linked URL.")),(0,a.mdx)("p",{parentName:"blockquote"},(0,a.mdx)("em",{parentName:"p"}," "," ","—"," excerpt from ",(0,a.mdx)("a",{parentName:"em",href:"https://usability.yale.edu/web-accessibility/articles/links"},'"Usability & Web Accessibility Articles: Links"')),(0,a.mdx)("a",{parentName:"p",href:"/terra-core/pull/3732/components/cerner-terra-core-docs/hyperlink/accessibility-guide"},(0,a.mdx)("sup",null,"[1]")))),(0,a.mdx)(l.Z,{newline:4,mdxType:"Whitespace"}),(0,a.mdx)("h2",{id:"usability-expectations"},"Usability Expectations:"),(0,a.mdx)("p",null,"Users expect links to open a new page, take them somewhere on the page, or to download a file."),(0,a.mdx)("h3",{id:"interaction-details"},"Interaction Details"),(0,a.mdx)("p",null,"Mouse users expect the cursor to change to a hand with pointing finger when the link is hovered. Keyboard only users expect to see a visible keyboard focus indicator when the link is in focus."),(0,a.mdx)("h3",{id:"keyboard-navigation"},"Keyboard Navigation"),(0,a.mdx)("p",null,"Hyperlinks have the following keyboard navigation expectations:"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Key/Sequence"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"Tab")),(0,a.mdx)("td",{parentName:"tr",align:null},"Puts Focus on the hyperlink.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"Enter")),(0,a.mdx)("td",{parentName:"tr",align:null},"Executes the link and moves focus to the link target.")))),(0,a.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,a.mdx)("p",null,"Terra is committed to ensuring its components provide maximum possible accessibility. However, using Terra components will not automatically make a product accessible."),(0,a.mdx)("p",null,"Final responsibility lies with the consumers of Terra components ","—"," ensuring proper usage, engineers following correct implementation patterns, and authors crafting content that follows best practice guidance ","—"," to make a product fully accessible."),(0,a.mdx)("h3",{id:"wcag-resources"},"WCAG Resources"),(0,a.mdx)("h4",{id:"success-criteria"},"Success Criteria"),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"Terra Hyperlink ",(0,a.mdx)("strong",{parentName:"em"},"must")," meet the following success criteria:")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"},(0,a.mdx)("strong",{parentName:"a"},"1.1.1 Non-text Content"))," - All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed","[","...","]",". (Level A)"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},(0,a.mdx)("strong",{parentName:"a"},"1.3.1 Info and Relationships"))," - The intent of this Success Criterion is to ensure that information and relationships that are implied by visual or auditory formatting are preserved when the presentation format changes. For example, the presentation format changes when the content is read by a screen reader."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html"},(0,a.mdx)("strong",{parentName:"a"},"2.4.4 Link Purpose"))," - The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"},(0,a.mdx)("strong",{parentName:"a"},"2.5.3 Label in Name"))," — For user interface components with labels that include text or images of text, the name contains the text that is presented visually."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html"},(0,a.mdx)("strong",{parentName:"a"},"3.2.4 Consistent Identification"))," — Content creators must ensure icons used within hyperlinks are used consistently for the same function.")),(0,a.mdx)("h3",{id:"supported-features--technology"},"Supported Features & Technology"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"JAWS Support with Chrome (PC)"),(0,a.mdx)("li",{parentName:"ul"},"NVDA Support with Chrome (PC)"),(0,a.mdx)("li",{parentName:"ul"},"VoiceOver Support with Chrome, Safari (MAC)"),(0,a.mdx)("li",{parentName:"ul"},"Mobile Touch Interactions with Screen Reader assistive technology"),(0,a.mdx)("li",{parentName:"ul"},"Speech Input Interactions with assistive technology")),(0,a.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"None identified"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-core/issues/new/choose"},"Report a problem with this component on ",(0,a.mdx)("strong",{parentName:"a"},"GitHub")))),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"For more information about Accessibility Support with Terra — go to ",(0,a.mdx)("a",{parentName:"em",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#accessibility-a11y"},"Component Standards: Accessibility (A11y)"),".")),(0,a.mdx)("h2",{id:"linked-references"},"Linked References:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Yale staff (2022) ",(0,a.mdx)("a",{parentName:"li",href:"https://usability.yale.edu/web-accessibility/articles/links"},'"Usability & Web Accessibility Articles: Links"'),". Yale. Retrieved 21 April 2022.")))}m.isMDXComponent=!0},56813:function(e,t,n){n.d(t,{C:function(){return i}});var a=n(67294),r=n(22863),i=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-hyperlink",name:"terra-hyperlink",version:"2.58.1",url:t})}},32331:function(e,t,n){t.Z=void 0;var a=d(n(67294)),r=d(n(45697)),i=d(n(94184)),l=d(n(47166)),o=d(n(32172)),s=["newline"];function d(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=l.default.bind(o.default),p={newline:r.default.oneOf([1,2,3,4,5,6,7,8])},h=function(e){var t=e.newline,n=c(e,s),r=(0,i.default)(m("whitespace","newline-".concat(t)),n.className);return a.default.createElement("div",u({},n,{className:r,"aria-hidden":"true"}))};h.propTypes=p,h.defaultProps={newline:1};var f=h;t.Z=f},75295:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),r=d(n(45697)),i=d(n(47166)),l=d(n(50026)),o=d(n(72145)),s=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=i.default.bind(o.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},f={children:r.default.string},x=function(e){var t=e.children,n=c(e,s),r=a.default.useContext(l.default),o=(0,i.default)(m(["button",r.className]),n.className);return a.default.createElement("button",u({},n,{type:"button",className:o,onBlur:p,onMouseDown:h,"data-focus-styles-enabled":!0}),t)};x.propTypes=f;var b=x;t.default=b},77904:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(67294)),r=s(n(45697)),i=s(n(47166)),l=s(n(50026)),o=s(n(45491));function s(e){return e&&e.__esModule?e:{default:e}}var d=i.default.bind(o.default),u={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},c=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,i=a.default.useContext(l.default);return a.default.createElement("div",{className:d("notice",n,i.className)},a.default.createElement("div",{className:d("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:d("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:d("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:d("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:d("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:d("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};c.propTypes=u,c.defaultProps={ariaLevel:"2",variant:"important"};var m=c;t.default=m},78026:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),i=u(n(94184)),l=u(n(47166)),o=u(n(50026)),s=u(n(15877)),d=["title"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.default.bind(s.default),h={title:r.default.string},f=function(e){var t=e.title,n=m(e,d),r=a.default.useContext(o.default),l=(0,i.default)(p(["placeholder",r.className]),n.className),s=p(["inner"]);return a.default.createElement("div",c({},n,{className:l}),a.default.createElement("div",{className:s},a.default.createElement("p",{className:p("title")},t)))};f.propTypes=h,f.defaultProps={title:""};var x=f;t.default=x},60619:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=l(n(77904)),r=l(n(78026)),i=l(n(75295));function l(e){return e&&e.__esModule?e:{default:e}}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},32172:function(e,t,n){n.r(t),t.default={whitespace:"Whitespace-module__whitespace___DPfQS","newline-1":"Whitespace-module__newline-1___bKmlz","newline-2":"Whitespace-module__newline-2___bmmzw","newline-3":"Whitespace-module__newline-3___ORV3M","newline-4":"Whitespace-module__newline-4___g7otO","newline-5":"Whitespace-module__newline-5___sOge+","newline-6":"Whitespace-module__newline-6___rHqfU","newline-7":"Whitespace-module__newline-7___iiRm7","newline-8":"Whitespace-module__newline-8___nGGTR"}},72145:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___mWSPm","orion-fusion-theme":"Button-module__orion-fusion-theme___nj7k4",button:"Button-module__button___r5O1Q","is-active":"Button-module__is-active___CVWJw"}},45491:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___J4EGN","orion-fusion-theme":"Notice-module__orion-fusion-theme___1W9PK",notice:"Notice-module__notice___8kOwf",children:"Notice-module__children___cF5Rb",accessory:"Notice-module__accessory___h3l7H",title:"Notice-module__title___PeXjO","ux-recommendation":"Notice-module__ux-recommendation___tJWAL",caution:"Notice-module__caution___STLbH",deprecation:"Notice-module__deprecation___rWWLq",maintenance:"Notice-module__maintenance___o2AK1",important:"Notice-module__important___WpELD","not-supported":"Notice-module__not-supported___eAx6o",paragraph:"Notice-module__paragraph___BwEGe",list:"Notice-module__list___kOyCE"}},15877:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___rMAZk","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___78cuG",placeholder:"Placeholder-module__placeholder___FPYJB",inner:"Placeholder-module__inner___-U1IZ",title:"Placeholder-module__title___lsXDJ"}}}]);