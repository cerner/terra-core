"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[18791],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),i=a(n(45697)),o=a(n(47166)),l=a(n(17422)),d=o.default.bind(l.default),u={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},c=function(e){var t=e.src,n=e.name,a=e.url,i=e.version,o=r.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},r.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(i))),l=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},o,l)};c.propTypes=u;var s=c;t.Z=s},18791:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});n(67294);var a=n(81254),r=n(60619),i=n(11304),o=n(64177),l=(n(74754),n(37559)),d=n(3832),u=n(37201),c=n(46910),s=n(57907),m=n(32331),p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b={},g="wrapper";function _(e){var t=e.components,n=h(e,p);return(0,a.mdx)(g,f({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(i.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"accessibility-guide-for-terra-icon"},"Accessibility Guide for Terra Icon"),(0,a.mdx)(r.Notice,{variant:"important",ariaLevel:"2",mdxType:"Notice"},(0,a.mdx)("p",null,"Using icons improperly may prevent some of your users from understanding your UI.")),(0,a.mdx)(m.Z,{mdxType:"Whitespace"}),(0,a.mdx)("h2",{id:"why-is-this-important"},"Why is this important?"),(0,a.mdx)("p",null,"Icons are a type of image or graphic, and as such:"),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"Images and graphics make content more pleasant and easier to understand for many people, and in particular for those with cognitive and learning disabilities. They serve as cues that are used by people with visual impairments, including people with low vision, to orient themselves in the content."),(0,a.mdx)("p",{parentName:"blockquote"},"However, images are used extensively on websites and can create major barriers when they are not accessible. Accessible images are beneficial in many situations, such as:"),(0,a.mdx)("ul",{parentName:"blockquote"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"People using screen readers"),": The text alternative can be read aloud or rendered as Braille"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"People using speech input software"),": Users can put the focus onto a button or linked image with a single voice command"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"People browsing speech-enabled websites"),": The text alternative can be read aloud")),(0,a.mdx)("p",{parentName:"blockquote"},(0,a.mdx)("em",{parentName:"p"}," "," ","—"," excerpt from ",(0,a.mdx)("a",{parentName:"em",href:"https://www.w3.org/WAI/tutorials/images/"},"Image Concepts (W3C: Web Accessibility Tutorials)")),(0,a.mdx)("a",{parentName:"p",href:"/terra-core/pull/3996/components/cerner-terra-core-docs/icon/accessibility-guide"},(0,a.mdx)("sup",null,"[1]")))),(0,a.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,a.mdx)("h3",{id:"code-considerations"},"Code Considerations"),(0,a.mdx)("p",null,"Every Terra Icon has two variants: ",(0,a.mdx)("em",{parentName:"p"},"Meaningful")," and ",(0,a.mdx)("em",{parentName:"p"},"Decorative"),". The table below explains the difference between the two, and how to import them into your code."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Variant"),(0,a.mdx)("th",{parentName:"tr",align:null},"Purpose"),(0,a.mdx)("th",{parentName:"tr",align:null},"Example"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"Meaningful"),(0,a.mdx)("td",{parentName:"tr",align:null},"Convey information to the user and must provide a text alternative via the ",(0,a.mdx)("inlineCode",{parentName:"td"},"a11yLabel")," prop."),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},'<Star a11yLabel="Four out of five stars" width={width} height={height} />'))),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"Decorative"),(0,a.mdx)("td",{parentName:"tr",align:null},"Only for aesthetic purposes."),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"<Star width={width} height={height} />"))))),(0,a.mdx)("p",null,"The following sections go into more detail about when and how to use each variant."),(0,a.mdx)("hr",null),(0,a.mdx)("h4",{id:"when-to-use-meaningful-icons"},"When to use ",(0,a.mdx)("em",{parentName:"h4"},"Meaningful Icons")),(0,a.mdx)("p",null,"Meaningful icons are icons that convey information to the user. ",(0,a.mdx)("strong",{parentName:"p"},"Meaningful icons must provide an alternative text using the ",(0,a.mdx)("inlineCode",{parentName:"strong"},"a11yLabel")," prop"),"."),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"All non-text content must be represented in a text format in one way or another, whether in the form of an alt attribute for an image, an alternative representation of non-HTML objects, or within the accessibility API methods of non-HTML objects."),(0,a.mdx)("p",{parentName:"blockquote"},(0,a.mdx)("em",{parentName:"p"}," "," ","—"," excerpt from ",(0,a.mdx)("a",{parentName:"em",href:"https://dequeuniversity.com/assets/pdf/module-nontext/module-nontext-checklist.pdf"},"Summary and Checklist: Images, Canvas, SVG, and Other Non-Text Content (Deque)")),(0,a.mdx)("a",{parentName:"p",href:"/terra-core/pull/3996/components/cerner-terra-core-docs/icon/accessibility-guide"},(0,a.mdx)("sup",null,"[2]")))),(0,a.mdx)("p",null,"You should pick an ",(0,a.mdx)("inlineCode",{parentName:"p"},"a11yLabel")," that conveys the same information that a user viewing the icons would perceive. That way, no information will be hidden from a user who cannot view the icon with the text."),(0,a.mdx)(m.Z,{mdxType:"Whitespace"}),(0,a.mdx)(r.Notice,{variant:"important",ariaLevel:"5",mdxType:"Notice"},(0,a.mdx)("h6",{id:"accessibility-guidance-using-meaningful-icons"},"Accessibility Guidance: Using meaningful icons"),(0,a.mdx)("div",{"aria-label":"Example demo"},(0,a.mdx)(l.Z,{mdxType:"A11yMeaningfulReadOnly"})),(0,a.mdx)("div",{"aria-label":"Example code"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"import { IconAnnouncement } from 'terra-icon';\n\n// Set the a11yLabel to convey the meaning of the icon.\n<IconAnnouncement a11yLabel=\"Announcement\" />\n&nbsp;\nFacilities will be closed tomorrow.\n"))),(0,a.mdx)("p",null,"The announcement icon ",(0,a.mdx)("span",{role:"presentation"},"(",(0,a.mdx)(o.IconAnnouncement,{mdxType:"IconAnnouncement"}),")")," in this example is informative, because it means ",(0,a.mdx)("em",{parentName:"p"},"the following text is an announcement"),". However, that meaning is only conveyed if the user can see the icon. Setting the icon's ",(0,a.mdx)("inlineCode",{parentName:"p"},'a11yLabel="Announcement"')," conveys the same information to a screen reader user."),(0,a.mdx)("p",null,"The screen reader user will hear something like: ",(0,a.mdx)("samp",null," Image: Announcement. Facilities will be closed tomorrow.")),(0,a.mdx)("h6",{id:"accessibility-guidance-interactive-meaningful-icons"},"Accessibility Guidance: Interactive meaningful icons"),(0,a.mdx)("div",{"aria-label":"Example demo"},(0,a.mdx)(s.Z,{mdxType:"A11yMeaningfulInteractive"})),(0,a.mdx)("div",{"aria-label":"Example code"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'import { IconMediaPlay, IconMediaFastForward, IconMediaRewind } from \'terra-icon\';\n\n<div role="group" aria-labelledby="controlsLabel">\n    <span id="controlsLabel">Playback controls</span><br/>\n    <button><IconMediaRewind a11yLabel="Rewind" /></button>\n    <button><IconMediaPlay a11yLabel="Play" /></button>\n    <button><IconMediaFastForward a11yLabel="Fast Forward" /></button>\n</div>\n'))),(0,a.mdx)("p",null,"The screen reader user will hear something like: ",(0,a.mdx)("samp",null," Group: Playback Controls. Button image Rewind. Button image Play. Button image Fast Forward."))),(0,a.mdx)("h4",{id:"groups-of-meaningful-icons"},"Groups of Meaningful Icons"),(0,a.mdx)("p",null,"Some icons only make sense in the context of a group of icons. For example, in a five-star rating system each star icon only makes sense when used with the other four stars."),(0,a.mdx)(r.Notice,{variant:"important",ariaLevel:"5",mdxType:"Notice"},(0,a.mdx)("h6",{id:"accessibility-guidance-using-groups-of-icons"},"Accessibility Guidance: Using groups of icons"),(0,a.mdx)("div",{"aria-label":"Example demo"},(0,a.mdx)(c.Z,{mdxType:"A11yGroupReadOnly"})),(0,a.mdx)("div",{"aria-label":"Example code"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"import { IconFeaturedOutline, IconFeaturedOutlineYellow } from 'terra-icon';\n\n// Rating:&nbsp;\n<IconFeaturedOutlineYellow a11yLabel=\"Four out of five stars\" />\n<IconFeaturedOutlineYellow />\n<IconFeaturedOutlineYellow />\n<IconFeaturedOutlineYellow />\n<IconFeaturedOutline />\n"))),(0,a.mdx)("p",null,"The first star icon ",(0,a.mdx)("span",{role:"presentation"},"(",(0,a.mdx)(o.IconFeaturedOutlineYellow,{mdxType:"FilledStar"}),")")," is meaningful and conveys the rating to the screen reader user. The other icons ",(0,a.mdx)("span",{role:"presentation"},"(",(0,a.mdx)(o.IconFeaturedOutlineYellow,{mdxType:"FilledDecorativeStar"})," and ",(0,a.mdx)(o.IconFeaturedOff,{mdxType:"EmptyDecorativeStar"}),")")," are decorative so that the screen reader won't mention them. Mentioning the other icons in the group provides no benefit and serves only to confuse the user.\nThe screen reader user will hear something like: ",(0,a.mdx)("samp",null,"Rating. Four out of five stars.")),(0,a.mdx)("h6",{id:"accessibility-guidance-an-interactive-group-of-icons"},"Accessibility Guidance: An interactive group of icons"),(0,a.mdx)("div",{"aria-label":"Example demo"},(0,a.mdx)(d.Z,{mdxType:"A11yGroupInteractive"})),(0,a.mdx)("div",{"aria-label":"Example code"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'import { IconFeaturedOutline, IconFeaturedOutlineYellow } from \'terra-icon\';\nimport VisuallyHiddenText from \'terra-visually-hidden-text\';\n\nRating:&nbsp;\n<VisuallyHiddenText text="Four out of five stars" />\n<button><IconFeaturedOutlineYellow a11yLabel="Rate one star" /></button>\n<button><IconFeaturedOutlineYellow a11yLabel="Rate two stars" /></button>\n<button><IconFeaturedOutlineYellow a11yLabel="Rate three stars" /></button>\n<button><IconFeaturedOutlineYellow a11yLabel="Rate four stars" /></button>\n<button><IconFeaturedOutlineYellow a11yLabel="Rate five stars" /></button>\n'))),(0,a.mdx)("p",null,"This example shows important differences in how to handle an interactive group of icons: That the user can click on any of the stars (links) to change the rating. You must convey what will happen when the user clicks on each icon. The meaning of the rating is conveyed by the ",(0,a.mdx)("inlineCode",{parentName:"p"},"<VisuallyHiddenText />")," given first. Each star icon ",(0,a.mdx)("span",{role:"presentation"},"(",(0,a.mdx)(o.IconFeaturedOutlineYellow,{mdxType:"FilledStar"})," and ",(0,a.mdx)(o.IconFeaturedOff,{mdxType:"EmptyStar"}),")")," describes its own action, e.g. rating an item one star."),(0,a.mdx)("p",null,"The screen reader user will hear: ",(0,a.mdx)("samp",null," Rating: Four out of five stars. Button image Rate one star. Button image Rate two stars. Button image Rate three stars. Button image Rate four stars. Button image Rate five stars."))),(0,a.mdx)("h4",{id:"when-to-use-decorative-icons"},"When to use Decorative Icons"),(0,a.mdx)("p",null,"Decorative icons provide no additional information or context. Use decorative icons when you could remove the icon entirely from the content without losing any information."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"You do not set the ",(0,a.mdx)("inlineCode",{parentName:"li"},"a11yLabel")," prop when using a decorative icon."),(0,a.mdx)("li",{parentName:"ul"},"Decorative icons are ignored by screen readers and other assistive tech.")),(0,a.mdx)(r.Notice,{variant:"important",ariaLevel:"5",mdxType:"Notice"},(0,a.mdx)("h6",{id:"accessibility-guidance-using-decorative-icons"},"Accessibility Guidance: Using decorative icons"),(0,a.mdx)("div",{"aria-label":"Example demo"},(0,a.mdx)(u.Z,{mdxType:"A11yDecorative"})),(0,a.mdx)("div",{"aria-label":"Example code"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"import { IconAnnouncement } from 'terra-icon';\n\n<IconAnnouncement />\n&nbsp;\nAnnouncement: Facilities will be closed tomorrow.\n"))),(0,a.mdx)("p",null,"This example is similar to the Announcement example above, but it uses a decorative icon instead of a meaningful one. The decorative icon is ignored by the screen reader. The screen reader user will hear something like: ",(0,a.mdx)("samp",null," Announcement: Facilities will be closed tomorrow."))),(0,a.mdx)("h2",{id:"usability-expectations"},"Usability Expectations"),(0,a.mdx)("h3",{id:"interaction-details"},"Interaction Details"),(0,a.mdx)("p",null,"None"),(0,a.mdx)("h3",{id:"keyboard-navigation"},"Keyboard Navigation"),(0,a.mdx)("p",null,"None"),(0,a.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,a.mdx)("p",null,"Terra is committed to ensuring its components provide maximum possible accessibility. However, using Terra components will not automatically make a product accessible."),(0,a.mdx)("p",null,"Final responsibility lies with the consumers of Terra components ","—"," ensuring proper usage, engineers following correct implementation patterns, and authors crafting content that follows best practice guidance ","—"," to make a product fully accessible."),(0,a.mdx)("h3",{id:"wcag-resources"},"WCAG Resources"),(0,a.mdx)("h4",{id:"success-criteria"},"Success Criteria"),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"Informative (non-decorative) usage of Terra Icon ",(0,a.mdx)("strong",{parentName:"em"},"must")," meet the following success criteria:")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"},(0,a.mdx)("strong",{parentName:"a"},"1.1.1 Non-text Content"))," - All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed","[","...","]",". (Level A)")),(0,a.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"None identified"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-core/issues/new/choose"},"Report a problem with this component on ",(0,a.mdx)("strong",{parentName:"a"},"GitHub")))),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"For more information about Accessibility Support with Terra — go to ",(0,a.mdx)("a",{parentName:"em",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#accessibility-a11y"},"Component Standards: Accessibility (A11y)"),".")),(0,a.mdx)("h2",{id:"linked-references"},"Linked References:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Eggert, Eric; Abou-Zahra, Shadi; et al. (27 July 2019). ",(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/tutorials/images/"},'"Web Accessibility Tutorials: Image Concepts"'),". World Wide Web Consortium. Last updated 27 July 2019. Retrieved 2 March 2022.")),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Deque staff (21 March 2019). ",(0,a.mdx)("a",{parentName:"p",href:"https://dequeuniversity.com/assets/pdf/module-nontext/module-nontext-checklist.pdf"},'"Summary and Checklist: Images, Canvas, SVG, and Other Non-Text Content"'),". Deque University. Published Version 2019.03.21. Retrieved 2 March 2022."))))}_.isMDXComponent=!0},11304:function(e,t,n){n.d(t,{C:function(){return i}});var a=n(67294),r=n(22863),i=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-image",name:"terra-image",version:"3.39.0",url:t})}},17522:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(67294)),r=m(n(45697)),i=m(n(94184)),o=m(n(47166)),l=m(n(74754)),d=m(n(50026)),u=m(n(62925)),c=m(n(49660)),s=["children","variant","visuallyHiddenText"];function m(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=o.default.bind(u.default),b={children:r.default.node,variant:r.default.oneOf(["default","raised"]),visuallyHiddenText:r.default.string},g={variant:"default"},_=function(e){var t=e.children,n=e.variant,r=e.visuallyHiddenText,o=f(e,s),u=a.default.useContext(d.default),c=(0,i.default)(h(["card",n,u.className]),o.className),m=r?a.default.createElement(l.default,{text:r}):null;return a.default.createElement("article",p({},o,{className:c}),m,t)};_.propTypes=b,_.defaultProps=g,_.Body=c.default;t.default=_},49660:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),i=c(n(94184)),o=c(n(47166)),l=c(n(50026)),d=c(n(78831)),u=["children","hasPaddingVertical","hasPaddingHorizontal","isContentCentered"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.default.bind(d.default),f={children:r.default.node,hasPaddingVertical:r.default.bool,hasPaddingHorizontal:r.default.bool,isContentCentered:r.default.bool},h=function(e){var t=e.children,n=e.hasPaddingVertical,r=e.hasPaddingHorizontal,o=e.isContentCentered,d=m(e,u),c=a.default.useContext(l.default),f=(0,i.default)(p([{"vertical-padding":n},{"horizontal-padding":r},{"center-content":o},c.className]),d.className);return a.default.createElement("div",s({},d,{className:f}),t)};h.propTypes=f,h.defaultProps={hasPaddingHorizontal:!0,hasPaddingVertical:!0,isContentCentered:!1};t.default=h},32331:function(e,t,n){t.Z=void 0;var a=u(n(67294)),r=u(n(45697)),i=u(n(94184)),o=u(n(47166)),l=u(n(32172)),d=["newline"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.default.bind(l.default),p={newline:r.default.oneOf([1,2,3,4,5,6,7,8])},f=function(e){var t=e.newline,n=s(e,d),r=(0,i.default)(m("whitespace","newline-".concat(t)),n.className);return a.default.createElement("div",c({},n,{className:r,"aria-hidden":"true"}))};f.propTypes=p,f.defaultProps={newline:1};t.Z=f},37201:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(17522)),i=n(64177),o=n(78758);function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return a.default.createElement(r.default,null,a.default.createElement(r.default.Body,null,a.default.createElement(i.IconAnnouncement,{width:o.width,height:o.height}),"  Announcement: Facilities will be closed tomorrow."))}},3832:function(e,t,n){t.Z=void 0;var a=d(n(67294)),r=d(n(17522)),i=n(64177),o=d(n(74754)),l=n(78758);function d(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return a.default.createElement(r.default,null,a.default.createElement(r.default.Body,null,"Rating: ",a.default.createElement(o.default,{text:"Four out of five stars"}),a.default.createElement("button",{type:"button"},a.default.createElement(i.IconFeaturedOutlineYellow,{a11yLabel:"Rate one star",width:l.width,height:l.height})),a.default.createElement("button",{type:"button"},a.default.createElement(i.IconFeaturedOutlineYellow,{a11yLabel:"Rate two stars",width:l.width,height:l.height})),a.default.createElement("button",{type:"button"},a.default.createElement(i.IconFeaturedOutlineYellow,{a11yLabel:"Rate three stars",width:l.width,height:l.height})),a.default.createElement("button",{type:"button"},a.default.createElement(i.IconFeaturedOutlineYellow,{a11yLabel:"Rate four stars",width:l.width,height:l.height})),a.default.createElement("button",{type:"button"},a.default.createElement(i.IconFeaturedOutline,{a11yLabel:"Rate five stars",width:l.width,height:l.height}))))}},46910:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=n(64177),i=l(n(17522)),o=n(78758);function l(e){return e&&e.__esModule?e:{default:e}}var d=a.default.createElement(r.IconFeaturedOutlineYellow,{a11yLabel:"Four out of five stars",width:o.width,height:o.height}),u=a.default.createElement(r.IconFeaturedOutlineYellow,{width:o.width,height:o.height});t.Z=function(){return a.default.createElement(i.default,null,a.default.createElement(i.default.Body,null,"Rating: ",d,u,u,a.default.createElement(r.IconFeaturedOutline,{width:o.width,height:o.height})))}},57907:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(17522)),i=n(64177),o=n(78758);function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return a.default.createElement(r.default,null,a.default.createElement(r.default.Body,null,a.default.createElement("div",{role:"group","aria-labelledby":"controlsLabel"},a.default.createElement("span",{id:"controlsLabel"},"Playback controls"),a.default.createElement("br",null),a.default.createElement("button",{type:"button"},a.default.createElement(i.IconMediaRewind,{a11yLabel:"Rewind",width:o.width,height:o.height})),a.default.createElement("button",{type:"button"},a.default.createElement(i.IconMediaPlay,{a11yLabel:"Play",width:o.width,height:o.height})),a.default.createElement("button",{type:"button"},a.default.createElement(i.IconMediaFastForward,{a11yLabel:"Fast Forward",width:o.width,height:o.height})))))}},37559:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=n(64177),i=l(n(17522)),o=n(78758);function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return a.default.createElement(i.default,null,a.default.createElement(i.default.Body,null,a.default.createElement(r.IconAnnouncement,{a11yLabel:"Announcement",width:o.width,height:o.height}),"  Facilities will be closed tomorrow."))}},78758:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.width=t.height=void 0;var n=t.height="2em";t.width=n},75295:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),i=u(n(47166)),o=u(n(50026)),l=u(n(72145)),d=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=i.default.bind(l.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:r.default.string},b=function(e){var t=e.children,n=s(e,d),r=a.default.useContext(o.default),l=(0,i.default)(m(["button",r.className]),n.className);return a.default.createElement("button",c({},n,{type:"button",className:l,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};b.propTypes=h;t.default=b},77904:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),r=d(n(45697)),i=d(n(47166)),o=d(n(50026)),l=d(n(45491));function d(e){return e&&e.__esModule?e:{default:e}}var u=i.default.bind(l.default),c={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,i=a.default.useContext(o.default);return a.default.createElement("div",{className:u("notice",n,i.className)},a.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:u("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};s.propTypes=c,s.defaultProps={ariaLevel:"2",variant:"important"};t.default=s},78026:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),i=c(n(94184)),o=c(n(47166)),l=c(n(50026)),d=c(n(15877)),u=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.default.bind(d.default),f={title:r.default.string},h=function(e){var t=e.title,n=m(e,u),r=a.default.useContext(l.default),o=(0,i.default)(p(["placeholder",r.className]),n.className),d=p(["inner"]);return a.default.createElement("div",s({},n,{className:o}),a.default.createElement("div",{className:d},a.default.createElement("p",{className:p("title")},t)))};h.propTypes=f,h.defaultProps={title:""};t.default=h},60619:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=o(n(77904)),r=o(n(78026)),i=o(n(75295));function o(e){return e&&e.__esModule?e:{default:e}}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},62925:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Card-module__clinical-lowlight-theme___mGqg1","orion-fusion-theme":"Card-module__orion-fusion-theme___pKdAk",card:"Card-module__card___065D-",default:"Card-module__default___2cIRO",raised:"Card-module__raised___3pYfF"}},78831:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"CardBody-module__orion-fusion-theme___K00C6","clinical-lowlight-theme":"CardBody-module__clinical-lowlight-theme___k2Ldr","vertical-padding":"CardBody-module__vertical-padding___UHG80","horizontal-padding":"CardBody-module__horizontal-padding___OqvV2","center-content":"CardBody-module__center-content___kMmT+"}},32172:function(e,t,n){n.r(t),t.default={whitespace:"Whitespace-module__whitespace___DPfQS","newline-1":"Whitespace-module__newline-1___bKmlz","newline-2":"Whitespace-module__newline-2___bmmzw","newline-3":"Whitespace-module__newline-3___ORV3M","newline-4":"Whitespace-module__newline-4___g7otO","newline-5":"Whitespace-module__newline-5___sOge+","newline-6":"Whitespace-module__newline-6___rHqfU","newline-7":"Whitespace-module__newline-7___iiRm7","newline-8":"Whitespace-module__newline-8___nGGTR"}},72145:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___mWSPm","orion-fusion-theme":"Button-module__orion-fusion-theme___nj7k4",button:"Button-module__button___r5O1Q","is-active":"Button-module__is-active___CVWJw"}},45491:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___J4EGN","orion-fusion-theme":"Notice-module__orion-fusion-theme___1W9PK",notice:"Notice-module__notice___8kOwf",children:"Notice-module__children___cF5Rb",accessory:"Notice-module__accessory___h3l7H",title:"Notice-module__title___PeXjO","ux-recommendation":"Notice-module__ux-recommendation___tJWAL",caution:"Notice-module__caution___STLbH",deprecation:"Notice-module__deprecation___rWWLq",maintenance:"Notice-module__maintenance___o2AK1",important:"Notice-module__important___WpELD","not-supported":"Notice-module__not-supported___eAx6o",paragraph:"Notice-module__paragraph___BwEGe",list:"Notice-module__list___kOyCE"}},15877:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___rMAZk","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___78cuG",placeholder:"Placeholder-module__placeholder___FPYJB",inner:"Placeholder-module__inner___-U1IZ",title:"Placeholder-module__title___lsXDJ"}}}]);