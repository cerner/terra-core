"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[18791],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),i=a(n(45697)),o=a(n(47166)),l=a(n(17422)),d=o.default.bind(l.default),u={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},c=function(e){var t=e.src,n=e.name,a=e.url,i=e.version,o=r.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},r.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(i))),l=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},o,l)};c.propTypes=u;var s=c;t.Z=s},18791:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});n(67294);var a=n(81254),r=n(60619),i=n(11304),o=n(32331),l=n(37559),d=n(3832),u=n(37201),c=n(46910),s=n(57907),m=(n(49207),n(6163)),f=n(88574),p=n(38196),h=(n(74754),["components"]);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g={},_="wrapper";function y(e){var t=e.components,n=v(e,h);return(0,a.mdx)(_,b({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(i.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"accessibility-guide-for-terra-icon"},"Accessibility Guide for Terra Icon"),(0,a.mdx)(r.Notice,{variant:"important",ariaLevel:"2",mdxType:"Notice"},(0,a.mdx)("p",null,"Using icons improperly may prevent some of your users from understanding your UI.")),(0,a.mdx)(o.Z,{mdxType:"Whitespace"}),(0,a.mdx)("h2",{id:"why-is-this-important"},"Why is this important?"),(0,a.mdx)("p",null,"Icons are a type of image or graphic, and as such:"),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"Images and graphics make content more pleasant and easier to understand for many people, and in particular for those with cognitive and learning disabilities. They serve as cues that are used by people with visual impairments, including people with low vision, to orient themselves in the content."),(0,a.mdx)("p",{parentName:"blockquote"},"However, images are used extensively on websites and can create major barriers when they are not accessible. Accessible images are beneficial in many situations, such as:"),(0,a.mdx)("ul",{parentName:"blockquote"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"People using screen readers"),": The text alternative can be read aloud or rendered as Braille"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"People using speech input software"),": Users can put the focus onto a button or linked image with a single voice command"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"People browsing speech-enabled websites"),": The text alternative can be read aloud")),(0,a.mdx)("p",{parentName:"blockquote"},(0,a.mdx)("em",{parentName:"p"}," "," ","—"," excerpt from ",(0,a.mdx)("a",{parentName:"em",href:"https://www.w3.org/WAI/tutorials/images/"},"Image Concepts (W3C: Web Accessibility Tutorials)")),(0,a.mdx)("a",{parentName:"p",href:"/terra-core/pull/3811/components/cerner-terra-core-docs/icon/accessibility-guide"},(0,a.mdx)("sup",null,"[1]")))),(0,a.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,a.mdx)("h3",{id:"code-considerations"},"Code Considerations"),(0,a.mdx)("p",null,"Every Terra Icon has two variants: ",(0,a.mdx)("em",{parentName:"p"},"Meaningful")," and ",(0,a.mdx)("em",{parentName:"p"},"Decorative"),". The table below explains the difference between the two, and how to import them into your code."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Variant"),(0,a.mdx)("th",{parentName:"tr",align:null},"Purpose"),(0,a.mdx)("th",{parentName:"tr",align:null},"Example"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"Meaningful"),(0,a.mdx)("td",{parentName:"tr",align:null},"Convey information to the user and must provide a text alternative via the ",(0,a.mdx)("inlineCode",{parentName:"td"},"a11yLabel")," prop."),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},'<Star a11yLabel="Four out of five stars" width={width} height={height} />'))),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"Decorative"),(0,a.mdx)("td",{parentName:"tr",align:null},"Only for aesthetic purposes."),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"<Star width={width} height={height} />"))))),(0,a.mdx)("p",null,"The following sections go into more detail about when and how to use each variant."),(0,a.mdx)("hr",null),(0,a.mdx)("h4",{id:"when-to-use-meaningful-icons"},"When to use ",(0,a.mdx)("em",{parentName:"h4"},"Meaningful Icons")),(0,a.mdx)("p",null,"Meaningful icons are icons that convey information to the user. ",(0,a.mdx)("strong",{parentName:"p"},"Meaningful icons must provide an alternative text using the ",(0,a.mdx)("inlineCode",{parentName:"strong"},"a11yLabel")," prop"),"."),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"All non-text content must be represented in a text format in one way or another, whether in the form of an alt attribute for an image, an alternative representation of non-HTML objects, or within the accessibility API methods of non-HTML objects."),(0,a.mdx)("p",{parentName:"blockquote"},(0,a.mdx)("em",{parentName:"p"}," "," ","—"," excerpt from ",(0,a.mdx)("a",{parentName:"em",href:"https://dequeuniversity.com/assets/pdf/module-nontext/module-nontext-checklist.pdf"},"Summary and Checklist: Images, Canvas, SVG, and Other Non-Text Content (Deque)")),(0,a.mdx)("a",{parentName:"p",href:"/terra-core/pull/3811/components/cerner-terra-core-docs/icon/accessibility-guide"},(0,a.mdx)("sup",null,"[2]")))),(0,a.mdx)("p",null,"You should pick an ",(0,a.mdx)("inlineCode",{parentName:"p"},"a11yLabel")," that conveys the same information that a user viewing the icons would perceive. That way, no information will be hidden from a user who cannot view the icon with the text."),(0,a.mdx)(o.Z,{mdxType:"Whitespace"}),(0,a.mdx)(r.Notice,{variant:"important",ariaLevel:"5",mdxType:"Notice"},(0,a.mdx)("h6",{id:"accessibility-guidance-using-meaningful-icons"},"Accessibility Guidance: Using meaningful icons"),(0,a.mdx)("div",{"aria-label":"Example demo"},(0,a.mdx)(l.Z,{mdxType:"A11yMeaningfulReadOnly"})),(0,a.mdx)("div",{"aria-label":"Example code"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"import IconAnnouncement from 'terra-icon/lib/icon/IconAnnouncement';\n\n// Set the a11yLabel to convey the meaning of the icon.\n<IconAnnouncement a11yLabel=\"Announcement\" />\n&nbsp;\nFacilities will be closed tomorrow.\n"))),(0,a.mdx)("p",null,"The announcement icon ",(0,a.mdx)("span",{role:"presentation"},"(",(0,a.mdx)(m.default,{mdxType:"IconAnnouncement"}),")")," in this example is informative, because it means ",(0,a.mdx)("em",{parentName:"p"},"the following text is an announcement"),". However, that meaning is only conveyed if the user can see the icon. Setting the icon's ",(0,a.mdx)("inlineCode",{parentName:"p"},'a11yLabel="Announcement"')," conveys the same information to a screen reader user."),(0,a.mdx)("p",null,"The screen reader user will hear something like: ",(0,a.mdx)("samp",null," Image: Announcement. Facilities will be closed tomorrow.")),(0,a.mdx)("h6",{id:"accessibility-guidance-interactive-meaningful-icons"},"Accessibility Guidance: Interactive meaningful icons"),(0,a.mdx)("div",{"aria-label":"Example demo"},(0,a.mdx)(s.Z,{mdxType:"A11yMeaningfulInteractive"})),(0,a.mdx)("div",{"aria-label":"Example code"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'import IconMediaPlay from \'terra-icon/lib/icon/IconMediaPlay\';\nimport IconMediaFastForward from \'terra-icon/lib/icon/IconMediaFastForward\';\nimport IconMediaRewind from \'terra-icon/lib/icon/IconMediaRewind\';\n\n<div role="group" aria-labelledby="controlsLabel">\n    <span id="controlsLabel">Playback controls</span><br/>\n    <button><IconMediaRewind a11yLabel="Rewind" /></button>\n    <button><IconMediaPlay a11yLabel="Play" /></button>\n    <button><IconMediaFastForward a11yLabel="Fast Forward" /></button>\n</div>\n'))),(0,a.mdx)("p",null,"The screen reader user will hear something like: ",(0,a.mdx)("samp",null," Group: Playback Controls. Button image Rewind. Button image Play. Button image Fast Forward."))),(0,a.mdx)("h4",{id:"groups-of-meaningful-icons"},"Groups of Meaningful Icons"),(0,a.mdx)("p",null,"Some icons only make sense in the context of a group of icons. For example, in a five-star rating system each star icon only makes sense when used with the other four stars."),(0,a.mdx)(r.Notice,{variant:"important",ariaLevel:"5",mdxType:"Notice"},(0,a.mdx)("h6",{id:"accessibility-guidance-using-groups-of-icons"},"Accessibility Guidance: Using groups of icons"),(0,a.mdx)("div",{"aria-label":"Example demo"},(0,a.mdx)(c.Z,{mdxType:"A11yGroupReadOnly"})),(0,a.mdx)("div",{"aria-label":"Example code"},'import DecorativeStar from "terra-icon/lib/icon/IconFeaturedOutlineYellow"; import DecorativeEmptyStar from "terra-icon/lib/icon/IconFeaturedOutline"; import Star from "terra-icon/lib/icon/IconFeaturedOutlineYellow";',(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'Rating:&nbsp;\n<Star a11yLabel="Four out of five stars" />\n<DecorativeStar />\n<DecorativeStar />\n<DecorativeStar />\n<DecorativeEmptyStar />\n'))),(0,a.mdx)("p",null,"The first star icon ",(0,a.mdx)("span",{role:"presentation"},"(",(0,a.mdx)(f.default,{mdxType:"FilledStar"}),")")," is meaningful and conveys the rating to the screen reader user. The other icons ",(0,a.mdx)("span",{role:"presentation"},"(",(0,a.mdx)(f.default,{mdxType:"FilledDecorativeStar"})," and ",(0,a.mdx)(p.default,{mdxType:"EmptyDecorativeStar"}),")")," are decorative so that the screen reader won't mention them. Mentioning the other icons in the group provides no benefit and serves only to confuse the user.\nThe screen reader user will hear something like: ",(0,a.mdx)("samp",null,"Rating. Four out of five stars.")),(0,a.mdx)("h6",{id:"accessibility-guidance-an-interactive-group-of-icons"},"Accessibility Guidance: An interactive group of icons"),(0,a.mdx)("div",{"aria-label":"Example demo"},(0,a.mdx)(d.Z,{mdxType:"A11yGroupInteractive"})),(0,a.mdx)("div",{"aria-label":"Example code"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'import Star from \'terra-icon/lib/icon/IconFeaturedOutlineYellow\';\nimport EmptyStar from \'terra-icon/lib/icon/IconFeaturedOutline\';\nimport VisuallyHiddenText from \'terra-visually-hidden-text\';\n\nRating:&nbsp;\n<VisuallyHiddenText text="Four out of five stars" />\n<button><Star a11yLabel="Rate one star" /></button>\n<button><Star a11yLabel="Rate two stars" /></button>\n<button><Star a11yLabel="Rate three stars" /></button>\n<button><Star a11yLabel="Rate four stars" /></button>\n<button><EmptyStar a11yLabel="Rate five stars" /></button>\n'))),(0,a.mdx)("p",null,"This example shows important differences in how to handle an interactive group of icons: That the user can click on any of the stars (links) to change the rating. You must convey what will happen when the user clicks on each icon. The meaning of the rating is conveyed by the ",(0,a.mdx)("inlineCode",{parentName:"p"},"<VisuallyHiddenText />")," given first. Each star icon ",(0,a.mdx)("span",{role:"presentation"},"(",(0,a.mdx)(f.default,{mdxType:"FilledStar"})," and ",(0,a.mdx)(p.default,{mdxType:"EmptyStar"}),")")," describes its own action, e.g. rating an item one star."),(0,a.mdx)("p",null,"The screen reader user will hear: ",(0,a.mdx)("samp",null," Rating: Four out of five stars. Button image Rate one star. Button image Rate two stars. Button image Rate three stars. Button image Rate four stars. Button image Rate five stars."))),(0,a.mdx)("h4",{id:"when-to-use-decorative-icons"},"When to use Decorative Icons"),(0,a.mdx)("p",null,"Decorative icons provide no additional information or context. Use decorative icons when you could remove the icon entirely from the content without losing any information."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"You do not set the ",(0,a.mdx)("inlineCode",{parentName:"li"},"a11yLabel")," prop when using a decorative icon."),(0,a.mdx)("li",{parentName:"ul"},"Decorative icons are ignored by screen readers and other assistive tech.")),(0,a.mdx)(r.Notice,{variant:"important",ariaLevel:"5",mdxType:"Notice"},(0,a.mdx)("h6",{id:"accessibility-guidance-using-decorative-icons"},"Accessibility Guidance: Using decorative icons"),(0,a.mdx)("div",{"aria-label":"Example demo"},(0,a.mdx)(u.Z,{mdxType:"A11yDecorative"})),(0,a.mdx)("div",{"aria-label":"Example code"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'import IconAnnouncement from "terra-icon/lib/icon/IconAnnouncement";\n\n<IconAnnouncement />\n&nbsp;\nAnnouncement: Facilities will be closed tomorrow.\n'))),(0,a.mdx)("p",null,"This example is similar to the Announcement example above, but it uses a decorative icon instead of a meaningful one. The decorative icon is ignored by the screen reader. The screen reader user will hear something like: ",(0,a.mdx)("samp",null," Announcement: Facilities will be closed tomorrow."))),(0,a.mdx)("h2",{id:"usability-expectations"},"Usability Expectations"),(0,a.mdx)("h3",{id:"interaction-details"},"Interaction Details"),(0,a.mdx)("p",null,"None"),(0,a.mdx)("h3",{id:"keyboard-navigation"},"Keyboard Navigation"),(0,a.mdx)("p",null,"None"),(0,a.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,a.mdx)("p",null,"Terra is committed to ensuring its components provide maximum possible accessibility. However, using Terra components will not automatically make a product accessible."),(0,a.mdx)("p",null,"Final responsibility lies with the consumers of Terra components ","—"," ensuring proper usage, engineers following correct implementation patterns, and authors crafting content that follows best practice guidance ","—"," to make a product fully accessible."),(0,a.mdx)("h3",{id:"wcag-resources"},"WCAG Resources"),(0,a.mdx)("h4",{id:"success-criteria"},"Success Criteria"),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"Informative (non-decorative) usage of Terra Icon ",(0,a.mdx)("strong",{parentName:"em"},"must")," meet the following success criteria:")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"},(0,a.mdx)("strong",{parentName:"a"},"1.1.1 Non-text Content"))," - All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed","[","...","]",". (Level A)")),(0,a.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"None identified"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-core/issues/new/choose"},"Report a problem with this component on ",(0,a.mdx)("strong",{parentName:"a"},"GitHub")))),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"For more information about Accessibility Support with Terra — go to ",(0,a.mdx)("a",{parentName:"em",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#accessibility-a11y"},"Component Standards: Accessibility (A11y)"),".")),(0,a.mdx)("h2",{id:"linked-references"},"Linked References:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Eggert, Eric; Abou-Zahra, Shadi; et al. (27 July 2019). ",(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/tutorials/images/"},'"Web Accessibility Tutorials: Image Concepts"'),". World Wide Web Consortium. Last updated 27 July 2019. Retrieved 2 March 2022.")),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Deque staff (21 March 2019). ",(0,a.mdx)("a",{parentName:"p",href:"https://dequeuniversity.com/assets/pdf/module-nontext/module-nontext-checklist.pdf"},'"Summary and Checklist: Images, Canvas, SVG, and Other Non-Text Content"'),". Deque University. Published Version 2019.03.21. Retrieved 2 March 2022."))))}y.isMDXComponent=!0},11304:function(e,t,n){n.d(t,{C:function(){return i}});var a=n(67294),r=n(22863),i=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-image",name:"terra-image",version:"3.38.0",url:t})}},17522:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(67294)),r=m(n(45697)),i=m(n(94184)),o=m(n(47166)),l=m(n(74754)),d=m(n(50026)),u=m(n(62925)),c=m(n(49660)),s=["children","variant","visuallyHiddenText"];function m(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=o.default.bind(u.default),b={children:r.default.node,variant:r.default.oneOf(["default","raised"]),visuallyHiddenText:r.default.string},v={variant:"default"},g=function(e){var t=e.children,n=e.variant,r=e.visuallyHiddenText,o=p(e,s),u=a.default.useContext(d.default),c=(0,i.default)(h(["card",n,u.className]),o.className),m=r?a.default.createElement(l.default,{text:r}):null;return a.default.createElement("article",f({},o,{className:c}),m,t)};g.propTypes=b,g.defaultProps=v,g.Body=c.default;var _=g;t.default=_},49660:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),i=c(n(94184)),o=c(n(47166)),l=c(n(50026)),d=c(n(78831)),u=["children","hasPaddingVertical","hasPaddingHorizontal","isContentCentered"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=o.default.bind(d.default),p={children:r.default.node,hasPaddingVertical:r.default.bool,hasPaddingHorizontal:r.default.bool,isContentCentered:r.default.bool},h=function(e){var t=e.children,n=e.hasPaddingVertical,r=e.hasPaddingHorizontal,o=e.isContentCentered,d=m(e,u),c=a.default.useContext(l.default),p=(0,i.default)(f([{"vertical-padding":n},{"horizontal-padding":r},{"center-content":o},c.className]),d.className);return a.default.createElement("div",s({},d,{className:p}),t)};h.propTypes=p,h.defaultProps={hasPaddingHorizontal:!0,hasPaddingVertical:!0,isContentCentered:!1};var b=h;t.default=b},32331:function(e,t,n){t.Z=void 0;var a=u(n(67294)),r=u(n(45697)),i=u(n(94184)),o=u(n(47166)),l=u(n(32172)),d=["newline"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.default.bind(l.default),f={newline:r.default.oneOf([1,2,3,4,5,6,7,8])},p=function(e){var t=e.newline,n=s(e,d),r=(0,i.default)(m("whitespace","newline-".concat(t)),n.className);return a.default.createElement("div",c({},n,{className:r,"aria-hidden":"true"}))};p.propTypes=f,p.defaultProps={newline:1};var h=p;t.Z=h},37201:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(6163)),i=l(n(17522)),o=n(78758);function l(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement(i.default,null,a.default.createElement(i.default.Body,null,a.default.createElement(r.default,{width:o.width,height:o.height}),"  Announcement: Facilities will be closed tomorrow."))};t.Z=d},3832:function(e,t,n){t.Z=void 0;var a=u(n(67294)),r=u(n(88574)),i=u(n(73545)),o=u(n(74754)),l=u(n(17522)),d=n(78758);function u(e){return e&&e.__esModule?e:{default:e}}var c=function(){return a.default.createElement(l.default,null,a.default.createElement(l.default.Body,null,"Rating: ",a.default.createElement(o.default,{text:"Four out of five stars"}),a.default.createElement("button",{type:"button"},a.default.createElement(r.default,{a11yLabel:"Rate one star",width:d.width,height:d.height})),a.default.createElement("button",{type:"button"},a.default.createElement(r.default,{a11yLabel:"Rate two stars",width:d.width,height:d.height})),a.default.createElement("button",{type:"button"},a.default.createElement(r.default,{a11yLabel:"Rate three stars",width:d.width,height:d.height})),a.default.createElement("button",{type:"button"},a.default.createElement(r.default,{a11yLabel:"Rate four stars",width:d.width,height:d.height})),a.default.createElement("button",{type:"button"},a.default.createElement(i.default,{a11yLabel:"Rate five stars",width:d.width,height:d.height}))))};t.Z=c},46910:function(e,t,n){t.Z=void 0;var a=d(n(67294)),r=d(n(88574)),i=d(n(73545)),o=d(n(17522)),l=n(78758);function d(e){return e&&e.__esModule?e:{default:e}}var u=a.default.createElement(r.default,{a11yLabel:"Four out of five stars",width:l.width,height:l.height}),c=a.default.createElement(r.default,{width:l.width,height:l.height}),s=function(){return a.default.createElement(o.default,null,a.default.createElement(o.default.Body,null,"Rating: ",u,c,c,a.default.createElement(i.default,{width:l.width,height:l.height})))};t.Z=s},57907:function(e,t,n){t.Z=void 0;var a=u(n(67294)),r=u(n(17522)),i=u(n(19008)),o=u(n(1926)),l=u(n(88950)),d=n(78758);function u(e){return e&&e.__esModule?e:{default:e}}var c=function(){return a.default.createElement(r.default,null,a.default.createElement(r.default.Body,null,a.default.createElement("div",{role:"group","aria-labelledby":"controlsLabel"},a.default.createElement("span",{id:"controlsLabel"},"Playback controls"),a.default.createElement("br",null),a.default.createElement("button",{type:"button"},a.default.createElement(l.default,{a11yLabel:"Rewind",width:d.width,height:d.height})),a.default.createElement("button",{type:"button"},a.default.createElement(i.default,{a11yLabel:"Play",width:d.width,height:d.height})),a.default.createElement("button",{type:"button"},a.default.createElement(o.default,{a11yLabel:"Fast Forward",width:d.width,height:d.height})))))};t.Z=c},37559:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(6163)),i=l(n(17522)),o=n(78758);function l(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement(i.default,null,a.default.createElement(i.default.Body,null,a.default.createElement(r.default,{a11yLabel:"Announcement",width:o.width,height:o.height}),"  Facilities will be closed tomorrow."))};t.Z=d},78758:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.width=t.height=void 0;t.height="2em";t.width="2em"},75295:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),i=u(n(47166)),o=u(n(50026)),l=u(n(72145)),d=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=i.default.bind(l.default),f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:r.default.string},b=function(e){var t=e.children,n=s(e,d),r=a.default.useContext(o.default),l=(0,i.default)(m(["button",r.className]),n.className);return a.default.createElement("button",c({},n,{type:"button",className:l,onBlur:f,onMouseDown:p,"data-focus-styles-enabled":!0}),t)};b.propTypes=h;var v=b;t.default=v},77904:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),r=d(n(45697)),i=d(n(47166)),o=d(n(50026)),l=d(n(45491));function d(e){return e&&e.__esModule?e:{default:e}}var u=i.default.bind(l.default),c={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,i=a.default.useContext(o.default);return a.default.createElement("div",{className:u("notice",n,i.className)},a.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:u("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};s.propTypes=c,s.defaultProps={ariaLevel:"2",variant:"important"};var m=s;t.default=m},78026:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),i=c(n(94184)),o=c(n(47166)),l=c(n(50026)),d=c(n(15877)),u=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=o.default.bind(d.default),p={title:r.default.string},h=function(e){var t=e.title,n=m(e,u),r=a.default.useContext(l.default),o=(0,i.default)(f(["placeholder",r.className]),n.className),d=f(["inner"]);return a.default.createElement("div",s({},n,{className:o}),a.default.createElement("div",{className:d},a.default.createElement("p",{className:f("title")},t)))};h.propTypes=p,h.defaultProps={title:""};var b=h;t.default=b},60619:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=o(n(77904)),r=o(n(78026)),i=o(n(75295));function o(e){return e&&e.__esModule?e:{default:e}}},6163:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),r=i(n(21969));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var l=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M45 16.7c2 0 3 2.6 3 3.5s-1 3.4-3 3.4V36a2.22 2.22 0 01-1 1.6 2.25 2.25 0 01-2.3-.3c-7.5-6.2-17.6-10-22.7-10-2.2 0-3.4.8-3.3 3.5a6.86 6.86 0 001.4 3.4 3.23 3.23 0 00-.6 1.8 2.85 2.85 0 00.2 1.6 6 6 0 00.9 1.5 17.88 17.88 0 001.3 1.4c.4.4 1 .8 1.6 1.4a4.46 4.46 0 01-3 2.2 8.64 8.64 0 01-4.5.3 6 6 0 01-3.5-1.5 19.66 19.66 0 00-.6-2.4c-.4-1.2-.7-2-.9-2.6a13.61 13.61 0 01-.6-2.4 17.62 17.62 0 01-.4-2.7c0-.8 0-1.6.1-2.7a15.44 15.44 0 01.4-3H4.3a3.8 3.8 0 01-3-1.3 4 4 0 01-1.3-3v-5.2a4.16 4.16 0 011.3-3.1 4.34 4.34 0 013-1.3h12.8c9.4 0 20-4.6 24.5-9.2A1.63 1.63 0 0144 4a5 5 0 011 3.3zm-25 8.2c6.7.8 15.1 4.1 22.1 9.5V7.1c-7 5.5-15.4 7.5-22.1 8.3z"}))};l.displayName="IconAnnouncement",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var d=l;t.default=d},38196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),r=i(n(21969));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var l=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M24 5.3l5.2 11 .7 1.4 1.6.2 11.9 1.8-8.7 8.9-1.1 1.1.2 1.5 2 12.4-10.4-5.7-1.4-.8-1.4.8-10.4 5.7 2-12.4.2-1.5-1.1-1.1-8.7-8.9L16.5 18l1.6-.2.7-1.4L24 5.3M24 0c-.6 0-1 .4-1.4 1.2L16.1 15 1.6 17.2c-1.1.2-1.6.7-1.6 1.4 0 .4.2.9.7 1.5l10.5 10.7-2.5 15.1c0 .3-.1.5-.1.6 0 .4.1.8.3 1.1.3.3.6.4 1 .4.3 0 .7-.1 1.2-.4l13-7.1 13 7.1c.4.2.8.4 1.2.4.4 0 .7-.1.9-.4.2-.3.3-.7.3-1.1v-.6L37 30.8l10.5-10.7c.5-.5.8-1 .8-1.5 0-.7-.5-1.2-1.6-1.4L31.9 15 25.4 1.2C25 .4 24.6 0 24 0z"}))};l.displayName="IconFeaturedOff",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var d=l;t.default=d},73545:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),r=i(n(21969));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var l=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M24 5.3l5.2 11 .7 1.4 1.6.2 11.9 1.8-8.7 8.9-1.1 1.1.2 1.5 2 12.4-10.4-5.7-1.4-.8-1.4.8-10.4 5.7 2-12.4.2-1.5-1.1-1.1-8.7-8.9L16.5 18l1.6-.2.7-1.4L24 5.3M24 0c-.6 0-1 .4-1.4 1.2L16.1 15 1.6 17.2c-1.1.2-1.6.7-1.6 1.4 0 .4.2.9.7 1.5l10.5 10.7-2.5 15.1c0 .3-.1.5-.1.6 0 .4.1.8.3 1.1.3.3.6.4 1 .4.3 0 .7-.1 1.2-.4l13-7.1 13 7.1c.4.2.8.4 1.2.4.4 0 .7-.1.9-.4.2-.3.3-.7.3-1.1v-.6L37 30.8l10.5-10.7c.5-.5.8-1 .8-1.5 0-.7-.5-1.2-1.6-1.4L31.9 15 25.4 1.2C25 .4 24.6 0 24 0z"}))};l.displayName="IconFeaturedOutline",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var d=l;t.default=d},88574:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(94184)),i=u(n(47166)),o=u(n(50026)),l=u(n(21969)),d=u(n(63739));function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}var s=i.default.bind(d.default),m=function(e){var t=c({},e),n=a.default.useContext(o.default),i=(0,r.default)(s("IconFeaturedOutlineYellow",n.className),e.className);return a.default.createElement(l.default,c({},t,{className:i}),a.default.createElement("path",{d:"M.7 20.1a2.47 2.47 0 01-.7-1.5c0-.7.5-1.2 1.6-1.4L16.1 15l6.5-13.8C22.9.4 23.4 0 24 0s1 .4 1.4 1.2L31.9 15l14.5 2.2c1.1.2 1.6.6 1.6 1.4a2.75 2.75 0 01-.8 1.5L36.8 30.8l2.5 15.1v.6a2 2 0 01-.3 1.1 1 1 0 01-.9.4 1.92 1.92 0 01-1.2-.4l-13-7.1-13 7.1a2.84 2.84 0 01-1.2.4 1 1 0 01-.9-.4 2 2 0 01-.3-1.1 1.76 1.76 0 01.1-.6l2.5-15.1z"}))};m.displayName="IconFeaturedOutlineYellow",m.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var f=m;t.default=f},1926:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),r=i(n(21969));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var l=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M22 41.28L43.718 24 22 6.72v13.526L5 6.72v34.56l17-13.526V41.28z"}))};l.displayName="IconMediaFastForward",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var d=l;t.default=d},19008:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),r=i(n(21969));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var l=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10 7.852l27.692 16.615L10 41.082V7.852z"}))};l.displayName="IconMediaPlay",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var d=l;t.default=d},88950:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),r=i(n(21969));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var l=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M43 6.72L26 20.246V6.72L4.282 24 26 41.28V27.754L43 41.28V6.72z"}))};l.displayName="IconMediaRewind",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var d=l;t.default=d},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},62925:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Card-module__clinical-lowlight-theme___mGqg1","orion-fusion-theme":"Card-module__orion-fusion-theme___pKdAk",card:"Card-module__card___065D-",default:"Card-module__default___2cIRO",raised:"Card-module__raised___3pYfF"}},78831:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"CardBody-module__orion-fusion-theme___K00C6","clinical-lowlight-theme":"CardBody-module__clinical-lowlight-theme___k2Ldr","vertical-padding":"CardBody-module__vertical-padding___UHG80","horizontal-padding":"CardBody-module__horizontal-padding___OqvV2","center-content":"CardBody-module__center-content___kMmT+"}},32172:function(e,t,n){n.r(t),t.default={whitespace:"Whitespace-module__whitespace___DPfQS","newline-1":"Whitespace-module__newline-1___bKmlz","newline-2":"Whitespace-module__newline-2___bmmzw","newline-3":"Whitespace-module__newline-3___ORV3M","newline-4":"Whitespace-module__newline-4___g7otO","newline-5":"Whitespace-module__newline-5___sOge+","newline-6":"Whitespace-module__newline-6___rHqfU","newline-7":"Whitespace-module__newline-7___iiRm7","newline-8":"Whitespace-module__newline-8___nGGTR"}},72145:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___mWSPm","orion-fusion-theme":"Button-module__orion-fusion-theme___nj7k4",button:"Button-module__button___r5O1Q","is-active":"Button-module__is-active___CVWJw"}},45491:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___J4EGN","orion-fusion-theme":"Notice-module__orion-fusion-theme___1W9PK",notice:"Notice-module__notice___8kOwf",children:"Notice-module__children___cF5Rb",accessory:"Notice-module__accessory___h3l7H",title:"Notice-module__title___PeXjO","ux-recommendation":"Notice-module__ux-recommendation___tJWAL",caution:"Notice-module__caution___STLbH",deprecation:"Notice-module__deprecation___rWWLq",maintenance:"Notice-module__maintenance___o2AK1",important:"Notice-module__important___WpELD","not-supported":"Notice-module__not-supported___eAx6o",paragraph:"Notice-module__paragraph___BwEGe",list:"Notice-module__list___kOyCE"}},15877:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___rMAZk","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___78cuG",placeholder:"Placeholder-module__placeholder___FPYJB",inner:"Placeholder-module__inner___-U1IZ",title:"Placeholder-module__title___lsXDJ"}},63739:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"IconFeaturedOutlineYellow-module__orion-fusion-theme___czm3B","clinical-lowlight-theme":"IconFeaturedOutlineYellow-module__clinical-lowlight-theme___yVs8i",IconFeaturedOutlineYellow:"IconFeaturedOutlineYellow-module__IconFeaturedOutlineYellow___L28Az"}}}]);