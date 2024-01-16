"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[4517],{22863:function(e,t,a){var n=a(64836);t.Z=void 0;var r=n(a(67294)),i=n(a(45697)),o=n(a(47166)),s=n(a(17422)),l=o.default.bind(s.default),m={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},d=function(e){var t=e.src,a=e.name,n=e.url,i=e.version,o=r.default.createElement("a",{className:l("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(i)},r.default.createElement("span",{className:l("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:l("badge-version")},"v".concat(i))),s=t?r.default.createElement("a",{className:l("badge"),href:t},r.default.createElement("span",{className:l("badge-name")},"github"),r.default.createElement("span",{className:l("badge-version")},"source")):void 0;return r.default.createElement("div",{className:l("badge-container")},o,s)};d.propTypes=m;var c=d;t.Z=c},4517:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});a(67294);var n=a(81254),r=a(97735),i=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l={},m="wrapper";function d(e){var t=e.components,a=s(e,i);return(0,n.mdx)(m,o({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"accessibility-guide-for-terra-arrange"},"Accessibility Guide for Terra Arrange"),(0,n.mdx)("h2",{id:"why-is-it-important-for-terra-arrange-to-meet-accessibility-guidelines-"},"Why is it important for Terra Arrange to meet accessibility guidelines ?"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Terra Arrange is a component used for setting the content layout alignment to be top/bottom/right/left. CSS alignment does not affect the accessibility, however it is crucial to ensure that the screen reader reads the content in the same manner as to how the content is visually present. If the content is aligned with any position property to make it look in different place which will create a complexity for the screen reader user to get the correct reading order.   "),(0,n.mdx)("p",{parentName:"blockquote"},"Making the DOM order same as visual order will help the assistive technology users to get the correct reading order. "),(0,n.mdx)("p",{parentName:"blockquote"},"Arrange may also have interactive elements which need to be keyboard focusable and acted upon using the standard expected keyboard behaviors. "),(0,n.mdx)("ul",{parentName:"blockquote"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Screen reader users")," do not necessarily interact with the page in a linear fashion and can use Arrange out of context. Hence, a descriptive label is necessary for each interactive element."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"People using speech input software")," require unique labels for the interactive elements to effectively understand them.  "),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Keyboard only users")," navigate the page using only a keyboard. Actionable elements must be keyboard accessible for keyboard only users to interact with it. Additionally, a visible keyboard focus indicator is needed to see where they are currently on the page.  "))),(0,n.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations:"),(0,n.mdx)("h3",{id:"code-considerations-what-do-engineers-need-to-do"},"Code Considerations: What do engineers need to do?"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Ensure the content in the arrange component is reading in logical manner in assistive technology. The DOM structure needs to be in the form the UI order. "),(0,n.mdx)("li",{parentName:"ul"},"Ensure the interactive elements are receiving TAB focus and user able to interact with it. "),(0,n.mdx)("li",{parentName:"ul"},"Ensure the content is available in 200% text only zoom. Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality. "),(0,n.mdx)("li",{parentName:"ul"},"Ensure the content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for: Vertical scrolling content at a width equivalent to 320 CSS pixels; Horizontal scrolling content at a height when window is resized to 400%."),(0,n.mdx)("li",{parentName:"ul"},"Ensure Terra Arrange is not used to create and arrange tabular data that has relationships to columns and rows. Instead, use Terra Table or Terra HTML Table.")),(0,n.mdx)("h3",{id:"content-considerations-what-do-content-creators-need-to-do"},"Content Considerations: What do content creators need to do?"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Terra Arrange must not be used to create and arrange tabular data that has relationships to columns and rows. That is to say do not use\nTerra arrange to create visible tables. Instead, use Terra Table or Terra HTML Table. "),(0,n.mdx)("li",{parentName:"ul"},"Ensure all interactive elements have descriptive labels that describe their purpose. ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"For each interactive element within Arrange, provide the engineers with a meaningful label. "),(0,n.mdx)("li",{parentName:"ul"},"Ensure each interactive element label is unique to the page. ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"If multiple elements with the same name are used, they must perform the same exact function (e.g., download the same file). "),(0,n.mdx)("li",{parentName:"ul"},"Or it must be programmatically associated with other visible and related content on the page that can help users understand the purpose of elements. "))),(0,n.mdx)("li",{parentName:"ul"},"If the label is text, the visible text must match the programmatic label. "),(0,n.mdx)("li",{parentName:"ul"},"All icons used within interactive elements that convey meaning must have an accessible name (alternate content). ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"The icon must be intuitive for the functionality it represents. "),(0,n.mdx)("li",{parentName:"ul"},"The icon must be named consistently across the product. "),(0,n.mdx)("li",{parentName:"ul"},"Icons must be used to represent the same function consistently (don’t use multiple icons for the same functionality) "))),(0,n.mdx)("li",{parentName:"ul"},"Any purely decorative icon (does NOT convey any meaning) within a button must be marked as decorative. "))),(0,n.mdx)("li",{parentName:"ul"},"Consider how content will adjust to resizing text or reflowing content at different viewpoints. Users may have settings that change the font size, style, or other text attributes. They may also resize a window or zoom into the content. All these things can cause content to resize or reflow, and when it does, content must not overlap, be cut off, or become unusable. "),(0,n.mdx)("li",{parentName:"ul"},"Ensure all content is perceivable by meeting all the color contrast requirements. "),(0,n.mdx)("li",{parentName:"ul"},"After development, ensure all actionable elements inside of Arrange is keyboard accessible and work as expected. ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Ensure actionable elements inside Arrange has a visible keyboard focus when accessed using the keyboard. "),(0,n.mdx)("li",{parentName:"ul"},"Ensure the Arrange does not cause a keyboard trap. ")))),(0,n.mdx)("h2",{id:"usability-expectations"},"Usability Expectations:"),(0,n.mdx)("h3",{id:"interaction-details"},"Interaction Details"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Terra Arrange has no interactions in and of itself. However, it may contain actionable elements. All actionable elements within Terra Arrange must be able to be focused via keyboard and follow the expected keyboard behavior per actionable element, and proper labeling should be announced in the screen reader.  ")),(0,n.mdx)("h3",{id:"usability-expectations-1"},"Usability Expectations:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"The user expects the button would be performing an action indicated in the button label. ")),(0,n.mdx)("h3",{id:"keyboard-expectations"},"Keyboard Expectations"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Terra Arrange has no expected keyboard behaviors itself. However, the content within it will follow the basic keyboard behaviors. ")),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Key Sequence"),(0,n.mdx)("th",{parentName:"tr",align:null},"Expectation"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"Tab")),(0,n.mdx)("td",{parentName:"tr",align:null},"Moves focus to the interactive element")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"Arrow keys")),(0,n.mdx)("td",{parentName:"tr",align:null},"Read the content in logical manner")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"Enter/Return/Spacebar")),(0,n.mdx)("td",{parentName:"tr",align:null},"Executes the button and moves focus to the target place.")))),(0,n.mdx)("h2",{id:"support-compliance"},"Support Compliance:"),(0,n.mdx)("h3",{id:"how-does-arrange-support-compliance"},"How does Arrange support compliance?"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Terra is committed to ensuring its components provide maximum possible accessibility. Terra provides the ability to make accessibility products. However, using Terra components will not automatically make a product accessible. "),(0,n.mdx)("p",{parentName:"blockquote"},"Final responsibility lies with the consumers of Terra components — ensuring proper usage, programmatic context where needed, the words used to label elements, engineers following correct implementation patterns, and authors crafting content that follows best practice guidance — to make a product fully accessible. ")),(0,n.mdx)("h3",{id:"primary-accessibility-criteria-for-arrange"},"Primary accessibility criteria for Arrange "),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://wiki.cerner.com/display/UserExperience/1.1.1+Non-text+Content"},"1.1.1 Non-text Content")," — Supports"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra provides the ability to use icons inside a button. "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure when an icon conveys meaning, to add appropriate ALT text to create a meaningful button label. "),(0,n.mdx)("li",{parentName:"ul"},"Content creators must provide engineers with meaningful text when using icons that convey meaning. "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://wiki.cerner.com/display/UserExperience/1.3.1+Info+and+Relationships"},"1.3.1 Info and Relationships")," — Supports "),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra provides the ability for information, structure, and relationships to be programmatically determined. "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure the heading hierarchy is followed from h1 to h6 order to give the meaningful order to assistive technology users. "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://wiki.cerner.com/display/UserExperience/1.4.3+Contrast"},"1.4.3 Contrast (Minimum)")," — Supports"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Arrange provides icons/buttons by default, meet color contrast requirements.  "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must work with content creators to implement icons so that the foreground and the background color meet appropriate color contrast ratios.   "),(0,n.mdx)("li",{parentName:"ul"},"Content creators must ensure that the button label color meets the appropriate contrast ratio against background color(s) based on text size of the visual label text. Contrast ratios should be above 4.5:1 for normal text and 3:1 for bold and large text.  "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://wiki.cerner.com/display/UserExperience/1.4.4+Resize+Text"},"1.4.4 Resize text")," — Supports"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra provides the ability for text to be resized and zoomed without loss of information or function.  "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure content other than captions and images of text can be up to 200 percent without loss of content or functionality.  "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://wiki.cerner.com/display/UserExperience/1.4.10+Reflow"},"1.4.10 Reflow")," — Supports"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra provides the ability for components to reflow when the viewport is resized to 320x256 px without loss of information or function. "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure content within the Terra component can reflow when the viewport is resized to 320 x 256 px without scrolling in two directions or loss of information or functionality. "),(0,n.mdx)("li",{parentName:"ul"},"Content creators must consider the responsive nature of Terra component and provide engineers guidance on how content should reflow when the viewport is resized to 320 x 256 px "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://wiki.cerner.com/display/UserExperience/2.1.1+Keyboard"},"2.1.1 Keyboard")," — Supports"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra ensures Terra Arrange supports basic keyboard functionality.  "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure Arrange is keyboard accessible and not override any basic keyboard functionality and follow the tab index values such as tabindex=0  "),(0,n.mdx)("li",{parentName:"ul"},"Ensure all contents can be accessed, interacted with and acted upon using only the keyboard.   "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://wiki.cerner.com/display/UserExperience/2.1.2+No+Keyboard+Trap"},"2.1.2 No Keyboard Trap")," — Supports"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Arrange will not cause a keyboard trap on its own.  "),(0,n.mdx)("li",{parentName:"ul"},"Engineer and Content Creators must ensure Arrange does not cause a keyboard trap when implemented within code.  "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://wiki.cerner.com/display/UserExperience/2.4.3+Focus+Order"},"2.4.3 Focus Order")," — Supports"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra provides consuming teams the ability to create a logical focus for the user.  "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must never set a TABINDEX of greater than zero. Code should be written to match the users logical reading order.  "),(0,n.mdx)("li",{parentName:"ul"},"Content creators ensure that engineers understand the users logical reading order.  "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://wiki.cerner.com/display/UserExperience/2.4.7+Focus+Visible"},"2.4.7 Focus Visible")," — Supports"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra ensures a visible keyboard focus is built into the component.  "),(0,n.mdx)("li",{parentName:"ul"},"Engineers and Content Creators must ensure the visible indication must be maintained for buttons/icons and must meet the sufficient color contrast ratio.  "),(0,n.mdx)("li",{parentName:"ul"},"Content creators must inform engineers that whenever buttons/icons receive focus, the focus must be visible and maintain existing Terra Keyboard Focus styles.   "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://wiki.cerner.com/display/UserExperience/4.1.1+Parsing"},"4.1.1 Parsing")," — Supports "),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra components are tested and validated before release to ensure proper parsing of code.  "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure this criterion is met.  "),(0,n.mdx)("li",{parentName:"ul"},"Content creators must inform engineers about the proper parsing of code.  "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://wiki.cerner.com/display/UserExperience/4.1.2+Name%2C+Role%2C+Value"},"4.1.2 Name, Role, Value")," — Supports "),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra provides the ability for Name, Role, and Value attributes to be programmatically determined for screen readers to effectively communicate to the user.   "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure the programmatic label matches the visible label.   ")))),(0,n.mdx)("h3",{id:"related-accessibility-criteria-that-apply-when-adding-content-to-arrange"},"Related accessibility criteria that apply when adding content to Arrange"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://wiki.cerner.com/display/UserExperience/3.2.1+On+Focus"},"3.2.1 On Focus")," — Supports "),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra components do not cause a change of context on focus by default.  "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure that no unexpected change of context happens when interactive elements receive focus or when focus is removed (on blur).  "),(0,n.mdx)("li",{parentName:"ul"},"Content creators must inform engineers that it should not cause any change while on focus.   "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("a",{parentName:"p",href:"https://wiki.cerner.com/display/UserExperience/3.2.2+On+Input"},"3.2.2 On Input")," — Supports "),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Arrange does not cause an unexpected change of context on input. "),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure nothing unexpected happens on input.  "),(0,n.mdx)("li",{parentName:"ul"},"Content creators must also ensure buttons/icons do not create a change of context for the user. If there is a change of context on input, the user must be warned (with text) before the user activates the button.   ")))),(0,n.mdx)("h3",{id:"supported-features-and-technology"},"Supported Features and Technology"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Keyboard Interactions "),(0,n.mdx)("li",{parentName:"ul"},"JAWS Support with Chrome (PC) "),(0,n.mdx)("li",{parentName:"ul"},"VoiceOver Support with Chrome, Safari (MAC) ")),(0,n.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"NVDA not tested (PC) "),(0,n.mdx)("li",{parentName:"ul"},"Mobile Touch Interactions with Screen Reader assistive technology "),(0,n.mdx)("li",{parentName:"ul"},"Speech Input Interactions with assistive technology "),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-core/issues/new/choose"},"Report a problem with this component on GitHub")," ")),(0,n.mdx)("h2",{id:"linked-references"},"Linked References:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/tips/writing/#use-headings-to-convey-meaning-and-structure"},"W3C WAI Aria: Use heading to convey meaning and structure  ")),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG21/#:~:text=%20Web%20Content%20Accessibility%20Guidelines%20%28WCAG%29%202.1%20defines,physical%2C%20speech%2C%20cognitive%2C%20language%2C%20learning%2C%20and%20neurological%20disabilities"},"Web Content Accessibility Guidelines"))))}d.isMDXComponent=!0},97735:function(e,t,a){a.d(t,{C:function(){return i}});var n=a(67294),r=a(22863),i=function(e){var t=e.url;return n.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-arrange",name:"terra-arrange",version:"3.55.0",url:t})}},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);