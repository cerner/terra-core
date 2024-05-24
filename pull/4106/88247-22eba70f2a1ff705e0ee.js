"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[88247],{55713:function(e,t,n){var a=n(24994);t.A=void 0;var r=a(n(96540)),o=a(n(5556)),i=a(n(67967)),l=a(n(25642)),s=i.default.bind(l.default),u={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},d=function(e){var t=e.src,n=e.name,a=e.url,o=e.version,i=r.default.createElement("a",{className:s("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},r.default.createElement("span",{className:s("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:s("badge-version")},"v".concat(o))),l=t?r.default.createElement("a",{className:s("badge"),href:t},r.default.createElement("span",{className:s("badge-name")},"github"),r.default.createElement("span",{className:s("badge-version")},"source")):void 0;return r.default.createElement("div",{className:s("badge-container")},i,l)};d.propTypes=u;t.A=d},88247:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});n(96540);var a=n(36665),r=n(68523),o=n(56213),i=n(19448),l=n(45370),s=n(50692),u=n(88071),d=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={},h="wrapper";function f(e){var t=e.components,n=c(e,d);return(0,a.mdx)(h,m({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.E,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"accessibility-guide-for-terra-button"},"Accessibility Guide for Terra Button"),(0,a.mdx)("h2",{id:"why-is-the-accessibility-of-buttons-important"},"Why is the accessibility of buttons important?"),(0,a.mdx)("p",null,"Buttons are one of HTML's most foundational elements and are a vital tool for creating accessible and intuitive user experiences. However, because buttons are so fundamental to the functionality of web content, inaccessible or improperly implemented Buttons can present a severe barrier to the accessibility of a product."),(0,a.mdx)("p",null,"It is critical that buttons are coded correctly to ensure they are keyboard accessible. Additionally, buttons must be programmatically understood as a button to properly convey to users of assistive technologies that they are on a button. Users expect buttons to perform an action and not do something unexpected. For buttons to be highly usable and easily understood, it is critical that all buttons be uniquely labeled and descriptive of what action will be taken when activated. For example:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Blind screen reader users")," do not necessarily interact with pages in a linear fashion and can use a button out of context. They need to know what kind of a component they are on and how to interact with it – different components have different expectations. They need the words within the button to be descriptive of purpose. "),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"People using speech input software")," require unique Button labels to effectively activate the Button. "),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Keyboard only users")," navigate the page using only a keyboard. Buttons must be keyboard accessible for keyboard only users to interact with the button. Additionally, a visible keyboard focus is crucial this user to see where they are on the page.")),(0,a.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,a.mdx)("h3",{id:"code-considerations"},"Code Considerations"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Ensure all buttons receive keyboard focus and can be interacted with only the keyboard.  ",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Do NOT override keyboard focus state or use a TABINDEX greater than zero. "),(0,a.mdx)("li",{parentName:"ul"},"Buttons should be coded in the user logical reading order of the page to ensure a meaningful experience.  "),(0,a.mdx)("li",{parentName:"ul"},"Never use the down event to activate a button; always use the up event. "))),(0,a.mdx)("li",{parentName:"ul"},"Do NOT override the implicit/explicit role of a button; if another role is required do NOT use the Terra button.")),(0,a.mdx)(r.Notice,{variant:"important",ariaLevel:"4",mdxType:"Notice"},(0,a.mdx)("h5",{id:"accessibility-guidance-buttons-must-have-an-accessible-name-which-is-descriptive-of-the-purpose"},"Accessibility Guidance: Buttons must have an accessible name which is descriptive of the purpose"),(0,a.mdx)("div",{"aria-label":"Example demo"},(0,a.mdx)(l.A,{mdxType:"ButtonOnClick"})),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Button from 'terra-button';\n\n<Button text=\"Show Alert\" onClick={() => alert('Ive been clicked!')} />\n")),(0,a.mdx)("p",null,"The visual name of the label must match the programmatic name. The best practice is to use words within the button label. If an Aria-label is used the Aria-label must start with the visual label of the button."),(0,a.mdx)("p",null,"The screen reader user will hear something like: ",(0,a.mdx)("samp",null," Show Alert: Button ")),(0,a.mdx)("h5",{id:"accessibility-guidance-using-meaningful-or-decorative-icon-buttons"},"Accessibility Guidance: Using Meaningful or Decorative Icon Buttons"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { IconPrinter } from 'terra-icon';\nimport Button from 'terra-button';\n\nconst Icon = <IconPrinter a11yLabel=\"Print\" />;\nconst DecorativeIcon = <IconPrinter />;\n\n  <div>\n    <Button icon={Icon} text=\"Print Icon Button\" isIconOnly className={cx('button')} />\n    <Button icon={Icon} text=\"All Documents\" className={cx('button')} />\n    <Button icon={DecorativeIcon} text=\"Print\" className={cx('button')} />\n  </div>\n")),(0,a.mdx)("div",{"aria-label":"Example demo"},(0,a.mdx)(s.A,{mdxType:"A11yIconButton"})),(0,a.mdx)("p",null,"For buttons that use icons that convey a meaning, it is critical to include alternate content that represents that icon meaning."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"The first example is  a button with ",(0,a.mdx)("strong",{parentName:"p"},"Meaningful Icon Only")," and the screen reader will read ",(0,a.mdx)("samp",null,"Print Button."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"The second example is  a button with ",(0,a.mdx)("strong",{parentName:"p"},"Meaningful Icon and Text")," and the screen reader will read ",(0,a.mdx)("samp",null,"Print All Documents Button.")))),(0,a.mdx)("p",null,"For buttons that use icons that do not convey a meaning, make sure they are marked as purely decorative."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"The third example is  a button with ",(0,a.mdx)("strong",{parentName:"li"},"Decorative Icon and Text")," and the screen reader will read ",(0,a.mdx)("samp",null,"Print Button."))),(0,a.mdx)("h5",{id:"accessibility-guidance-using-non-unique-button-label"},"Accessibility Guidance: Using Non-unique Button label"),(0,a.mdx)("div",{"aria-label":"Example demo"},(0,a.mdx)(u.A,{mdxType:"A11yButtonLabel"})),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Button from 'terra-button';\n\n<Button aria-label=\"Learn More About Allergies\" text=\"Learn More\" className={cx('button')} />\n")),(0,a.mdx)("p",null,"The screen reader user will hear something like: ",(0,a.mdx)("samp",null," Learn More About Allergies Button  ")),(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"})," The above example is NOT recommended. For Accessibility Best Practices it is recommended to use the same text for both visual and the programmatic label of the button."),(0,a.mdx)("p",null,"Ensure any non-unique button label that is visually related to content in the page must be programmatically associated with its content. For example, a “Learn more” button next to the word “allergies” must be appropriate associated with the word allergies.")),(0,a.mdx)(i.A,{mdxType:"Whitespace"}),(0,a.mdx)("h3",{id:"content-considerations"},"Content Considerations:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Must provide engineers with a meaningful and descriptive button label that conveys the button's purpose. The best practice is to use a verb that describes the button action.",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Avoid non-unique button labels unless the buttons perform the exact same function. For example, two print buttons that print the exact same document are fine to have. However, if the buttons print different documents, this would be an accessibility failure."),(0,a.mdx)("li",{parentName:"ul"},"If non-unique names cannot be avoided, inform the engineer of other text on the page that can be programmatically associated to other content on the page that may help describe a visual relationship. For example, multiple “Learn more” buttons on the page are placed in visual proximity to the item the user can learn more about. "),(0,a.mdx)("li",{parentName:"ul"},"Ensure the first word(s) of the programmatic label should match the visual label. "))),(0,a.mdx)("li",{parentName:"ul"},"When using icons, inform engineers when an icon is purely decorative. Otherwise, provide the engineer with meaningful alternate text which will serve as the accessible name.  ",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Ensure any icon used within a button is used to consistently represent the same functionality. Additionally, any alternate content used with an icon must be consistent for a predictable user experience. "))),(0,a.mdx)("li",{parentName:"ul"},"When implementing buttons ensure the button has good contrast ratios to be easily perceived against its background color. If changing the default colors, the text color must meet a minimum contrast ratio against the background color. See ",(0,a.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"},"WCAG 1.4.3 Contrast Minimum")," for more information. "),(0,a.mdx)("li",{parentName:"ul"},"Not everyone perceives color so never use color as the only way to convey meaning within the interface. Always provide both color and text or a shape together to represent the meaning. "),(0,a.mdx)("li",{parentName:"ul"},"Ensure the engineers understand the logical reading order of the page."),(0,a.mdx)("li",{parentName:"ul"},"Never add unexpected behaviors to buttons that could cause a change of context on focus or on activation of the button. Ensure buttons always meet the user’s expectations.  "),(0,a.mdx)("li",{parentName:"ul"},"After coded, ensure all interactable elements receive keyboard focus in the users reading order and display a visible keyboard focus. Ensure the keyboard user does not get “trapped” somewhere on the page preventing them from the entire workflow.")),(0,a.mdx)(i.A,{newline:2,mdxType:"Whitespace"}),(0,a.mdx)("h2",{id:"usability-expectations"},"Usability Expectations:"),(0,a.mdx)("p",null,"Users expect Buttons to perform the action indicated in the button label."),(0,a.mdx)("h3",{id:"interaction-details"},"Interaction Details"),(0,a.mdx)("p",null,"Mouse users expect the cursor to change to a hand with pointing finger when the Button is hovered. Keyboard only users expect to see a visible keyboard focus indicator when the Button is in focus. "),(0,a.mdx)("h3",{id:"keyboard-navigation"},"Keyboard Navigation"),(0,a.mdx)("p",null,"Buttons have the following keyboard navigation expectations:"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Key/Sequence"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"Tab")),(0,a.mdx)("td",{parentName:"tr",align:null},"Moves focus on and off the Button. User expects elements to receive keyboard focus in the logical reading order of the page.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("strong",{parentName:"td"},"Enter")),(0,a.mdx)("td",{parentName:"tr",align:null},"Executes the Button and moves focus to the Button target.")))),(0,a.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,a.mdx)("h3",{id:"primary-criteria"},"Primary Criteria"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"},(0,a.mdx)("strong",{parentName:"a"},"1.1.1 Non-text Content"))," – Partially Supports "),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra provides the ability to use Icons inside a Button. Terra also provides the ability to set those icons as decorative and meaningful. "),(0,a.mdx)("li",{parentName:"ul"},"Engineers must ensure when an Icon conveys meaning, to add appropriate ALT text to create a meaningful Button label. If the icon does not convey meaning and is only decorative, it should be marked as decorative."),(0,a.mdx)("li",{parentName:"ul"},'Content creators must provide engineers with meaningful text when using icons that convey meaning. For example, when a button has a print icon with the word "instructions" then the Icon is conveying information thus must have the alternate text “Print”.'),(0,a.mdx)("li",{parentName:"ul"},'If icons are not meaningful, content creators must inform engineers when the icon is "decorative" only. For example, when a button has the print Icon next to the word "print"; the Icon would be decorative and not have alternate text.   '))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},(0,a.mdx)("strong",{parentName:"a"},"1.3.1 Info and Relationships"))," — Partially Supports"),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra Button does allow users to set a programmatic label of the button (a text string) but does not allow consuming teams the ability to set extra programmatic context for buttons to ensure they are programmatically associated to other related content. "),(0,a.mdx)("li",{parentName:"ul"},'When applicable, engineers must ensure that any visual relationship to the button is programmatically codified. E.g.: to non-unique button "learn more", must be programmatically associated to the words to describe the "learn more" button.  '),(0,a.mdx)("li",{parentName:"ul"},"Content creators, when applicable, if other text on the page describes a non-unique button purpose through visual presentation; make sure engineers understand the relationship and apply a programmatic association to the text. For example, multiple buttons named “View details” next to the items they will present information about. If using formatting to convey information, it should be available in text. Any visual formatting must be available in text programmatically. Use words in addition to the format to convey necessary information.   "))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"},(0,a.mdx)("strong",{parentName:"a"},"2.1.1 Keyboard"))," — Supports "),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Interactable Terra Buttons natively receive focus, can be interacted with, and acted upon using the keyboard. Consuming teams must ensure to not overwrite native behavior."),(0,a.mdx)("li",{parentName:"ul"},"Engineers must ensure behaviors is maintained."),(0,a.mdx)("li",{parentName:"ul"},"Content creators must ensure that all elements with focus are receiving the right treatment, Focus Order, Focus Visible. No Keyboard Trap. "))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"},(0,a.mdx)("strong",{parentName:"a"},"2.4.6 Headings and Labels"))," — Supports "),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra Buttons provides the ability to add descriptive and unique labels. "),(0,a.mdx)("li",{parentName:"ul"},"Engineers must implement the descriptive label to the button.  "),(0,a.mdx)("li",{parentName:"ul"},"Content creators are responsible for providing the unique label that describes the action the button performs.  "))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"},(0,a.mdx)("strong",{parentName:"a"},"2.5.3 Label in Name"))," — Supports "),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra provides teams with the ability to meet this criterion."),(0,a.mdx)("li",{parentName:"ul"},"Engineers must ensure the programmatic label matches the visual labels."),(0,a.mdx)("li",{parentName:"ul"},"Content creators must provide engineers with the appropriate, programmatic, and visual labels essentially match. The first word of the programmatic label should match the first word of the visual label.")))),(0,a.mdx)("h3",{id:"secondary-criteria"},"Secondary Criteria"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"},(0,a.mdx)("strong",{parentName:"a"},"1.3.2 Meaningful Sequence"))," — Supports "),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra Buttons by themselves do not have a meaningful sequence. "),(0,a.mdx)("li",{parentName:"ul"},"Engineers must ensure that content is coded in the expected reading order of the page. Never use a TABINDEX higher than 0. "))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"},(0,a.mdx)("strong",{parentName:"a"},"1.4.1 Use of Color"))," - Partially Supports "),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Engineers must ensure Terra buttons styles do NOT rely on color alone to convey information.  "),(0,a.mdx)("li",{parentName:"ul"},"Content Creators must ensure color is NOT the only method used to convey information. Instead, use both color and text. "))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"},(0,a.mdx)("strong",{parentName:"a"},"1.4.3 Contrast (Minimum)"))," — Supports "),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra Buttons natively meet appropriate contrast ratios and support this criterion.\nIf consuming teams alter button colors, the consuming team must ensure Contrast (minimum) is met. "))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"},(0,a.mdx)("strong",{parentName:"a"},"2.1.2 No Keyboard Trap"))," — Supports "),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Engineers need to ensure when Terra button is implemented with other components, User can navigate through the code without a keyboard trap.  "))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html"},(0,a.mdx)("strong",{parentName:"a"},"2.2.1 Timing Adjustable"))," — Supports "),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Consuming teams must ensure Terra Buttons do not have a time limit to interact with. "))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html"},(0,a.mdx)("strong",{parentName:"a"},"2.4.3 Focus Order"))," — Supports "),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Engineers must ensure that the focus order is the user's expected reading order and preserves page meaning. Focus order should come from the order the content is coded.\nDo NOT implement a tab index value greater than zero. "),(0,a.mdx)("li",{parentName:"ul"},"Content creators should convey to the engineers what the proper reading order of the page should be. "))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"},(0,a.mdx)("strong",{parentName:"a"},"2.4.7 Focus Visible"))," — Supports "),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra Buttons provide a natively keyboard focus. "),(0,a.mdx)("li",{parentName:"ul"},"Consuming teams must ensure visible focus is maintained for all elements.  "),(0,a.mdx)("li",{parentName:"ul"},"Content creators must NOT remove visible focus. Ensure visible focus follows the non-text contrast ratio if the visible focus color has changed. (See 1.4.11 Non-text contrast).  "))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation"},(0,a.mdx)("strong",{parentName:"a"},"2.5.2 Pointer Cancellation")),"  — Supports "),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra buttons use the up event to perform actions allowing the user to move away from the button or Button while still pressing down, canceling the selection. "),(0,a.mdx)("li",{parentName:"ul"},"Engineers must ensure that actions are not activated by the down action allowing the user to cancel interactions. "))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/on-focus"},(0,a.mdx)("strong",{parentName:"a"},"3.2.1 On Focus"))," —Supports "),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Engineers must ensure Terra buttons do NOT initiate a change of context, or anything unexpected, on focus. "),(0,a.mdx)("li",{parentName:"ul"},"Content creators should ensure there is no change of context on focus.  "))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/on-input"},(0,a.mdx)("strong",{parentName:"a"},"3.2.2 On Input"))," — Supports "),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Terra Buttons does not cause an unexpected change of context on input. Terra provides the ability to customize button actions. "),(0,a.mdx)("li",{parentName:"ul"},"Engineers must ensure nothing unexpected happens on input. "),(0,a.mdx)("li",{parentName:"ul"},"Content creators must also ensure buttons do not create a change of context for the user. If there is a change of context on input, the user must be warned (with text) before the user activates the button.  "))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification"},(0,a.mdx)("strong",{parentName:"a"},"3.2.4 Consistent Identification"))," - Supports"),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Content creators should ensure consistency of buttons based on functionality/actions for both compliance in accessibility and usability. Ensure consistency when using icons and labels across product, functionality")))))}f.isMDXComponent=!0},56213:function(e,t,n){n.d(t,{E:function(){return o}});var a=n(96540),r=n(55713),o=function(e){var t=e.url;return a.createElement(r.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-image",name:"terra-image",version:"3.42.0",url:t})}},18290:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(96540)),r=c(n(5556)),o=c(n(46942)),i=c(n(67967)),l=c(n(56500)),s=c(n(52103)),u=c(n(74887)),d=c(n(90498)),m=["children","variant","visuallyHiddenText"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=i.default.bind(u.default),b={children:r.default.node,variant:r.default.oneOf(["default","raised"]),visuallyHiddenText:r.default.string},g={variant:"default"},x=function(e){var t=e.children,n=e.variant,r=e.visuallyHiddenText,i=h(e,m),u=a.default.useContext(s.default),d=(0,o.default)(f(["card",n,u.className]),i.className),c=r?a.default.createElement(l.default,{text:r}):null;return a.default.createElement("article",p({},i,{className:d}),c,t)};x.propTypes=b,x.defaultProps=g,x.Body=d.default;t.default=x},90498:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(96540)),r=d(n(5556)),o=d(n(46942)),i=d(n(67967)),l=d(n(52103)),s=d(n(58647)),u=["children","hasPaddingVertical","hasPaddingHorizontal","isContentCentered"];function d(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.default.bind(s.default),h={children:r.default.node,hasPaddingVertical:r.default.bool,hasPaddingHorizontal:r.default.bool,isContentCentered:r.default.bool},f=function(e){var t=e.children,n=e.hasPaddingVertical,r=e.hasPaddingHorizontal,i=e.isContentCentered,s=c(e,u),d=a.default.useContext(l.default),h=(0,o.default)(p([{"vertical-padding":n},{"horizontal-padding":r},{"center-content":i},d.className]),s.className);return a.default.createElement("div",m({},s,{className:h}),t)};f.propTypes=h,f.defaultProps={hasPaddingHorizontal:!0,hasPaddingVertical:!0,isContentCentered:!1};t.default=f},19448:function(e,t,n){t.A=void 0;var a=u(n(96540)),r=u(n(5556)),o=u(n(46942)),i=u(n(67967)),l=u(n(71969)),s=["newline"];function u(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.default.bind(l.default),p={newline:r.default.oneOf([1,2,3,4,5,6,7,8])},h=function(e){var t=e.newline,n=m(e,s),r=(0,o.default)(c("whitespace","newline-".concat(t)),n.className);return a.default.createElement("div",d({},n,{className:r,"aria-hidden":"true"}))};h.propTypes=p,h.defaultProps={newline:1};t.A=h},88071:function(e,t,n){t.A=void 0;var a=s(n(96540)),r=s(n(40890)),o=s(n(18290)),i=s(n(67967)),l=s(n(63687));function s(e){return e&&e.__esModule?e:{default:e}}var u=i.default.bind(l.default);t.A=function(){return a.default.createElement(o.default,null,a.default.createElement(o.default.Body,null,a.default.createElement("p",null,"Allergies, also known as allergic diseases, are a number of conditions caused by hypersensitivity of the immune system to typically harmless substances in the environment. These diseases include hay fever, food allergies, atopic dermatitis, allergic asthma, and anaphylaxis. Symptoms may include red eyes, an itchy rash, sneezing, coughing, a runny nose, shortness of breath, or swelling."),a.default.createElement(r.default,{"aria-label":"Learn More About Allergies",text:"Learn More",className:u("button")})))}},50692:function(e,t,n){t.A=void 0;var a=u(n(96540)),r=n(78513),o=u(n(40890)),i=u(n(18290)),l=u(n(67967)),s=u(n(63687));function u(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(s.default),m=a.default.createElement(r.IconPrinter,{a11yLabel:"Print"}),c=a.default.createElement(r.IconPrinter,null);t.A=function(){return a.default.createElement(i.default,null,a.default.createElement(i.default.Body,null,a.default.createElement(o.default,{icon:m,text:"Print button",isIconOnly:!0,className:d("button")}),a.default.createElement(o.default,{icon:m,text:"All Documents",className:d("button")}),a.default.createElement(o.default,{icon:c,text:"Print",className:d("button")})))}},45370:function(e,t,n){t.A=void 0;var a=l(n(96540)),r=l(n(40890)),o=l(n(67967)),i=l(n(63687));function l(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(i.default);t.A=function(){return a.default.createElement(r.default,{text:"Click Me",onClick:function(){return alert("Ive been clicked!")},className:s("button")})}},91563:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(96540)),r=u(n(5556)),o=u(n(67967)),i=u(n(52103)),l=u(n(43840)),s=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.default.bind(l.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},f={children:r.default.string},b=function(e){var t=e.children,n=m(e,s),r=a.default.useContext(i.default),l=(0,o.default)(c(["button",r.className]),n.className);return a.default.createElement("button",d({},n,{type:"button",className:l,onBlur:p,onMouseDown:h,"data-focus-styles-enabled":!0}),t)};b.propTypes=f;t.default=b},18875:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(96540)),r=s(n(5556)),o=s(n(67967)),i=s(n(52103)),l=s(n(38616));function s(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),d={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},m=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,o=a.default.useContext(i.default);return a.default.createElement("div",{className:u("notice",n,o.className)},a.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:u("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};m.propTypes=d,m.defaultProps={ariaLevel:"2",variant:"important"};t.default=m},60934:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(96540)),r=d(n(5556)),o=d(n(46942)),i=d(n(67967)),l=d(n(52103)),s=d(n(27683)),u=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.default.bind(s.default),h={title:r.default.string},f=function(e){var t=e.title,n=c(e,u),r=a.default.useContext(l.default),i=(0,o.default)(p(["placeholder",r.className]),n.className),s=p(["inner"]);return a.default.createElement("div",m({},n,{className:i}),a.default.createElement("div",{className:s},a.default.createElement("p",{className:p("title")},t)))};f.propTypes=h,f.defaultProps={title:""};t.default=f},68523:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=i(n(18875)),r=i(n(60934)),o=i(n(91563));function i(e){return e&&e.__esModule?e:{default:e}}},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},74887:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Card-module__clinical-lowlight-theme___mGqg1","orion-fusion-theme":"Card-module__orion-fusion-theme___pKdAk","redwood-theme":"Card-module__redwood-theme___q3rY8",card:"Card-module__card___065D-",default:"Card-module__default___2cIRO",raised:"Card-module__raised___3pYfF"}},58647:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"CardBody-module__orion-fusion-theme___K00C6","clinical-lowlight-theme":"CardBody-module__clinical-lowlight-theme___k2Ldr","redwood-theme":"CardBody-module__redwood-theme___VMcf6","vertical-padding":"CardBody-module__vertical-padding___UHG80","horizontal-padding":"CardBody-module__horizontal-padding___OqvV2","center-content":"CardBody-module__center-content___kMmT+"}},71969:function(e,t,n){n.r(t),t.default={whitespace:"Whitespace-module__whitespace___DPfQS","newline-1":"Whitespace-module__newline-1___bKmlz","newline-2":"Whitespace-module__newline-2___bmmzw","newline-3":"Whitespace-module__newline-3___ORV3M","newline-4":"Whitespace-module__newline-4___g7otO","newline-5":"Whitespace-module__newline-5___sOge+","newline-6":"Whitespace-module__newline-6___rHqfU","newline-7":"Whitespace-module__newline-7___iiRm7","newline-8":"Whitespace-module__newline-8___nGGTR"}},63687:function(e,t,n){n.r(t),t.default={button:"ButtonDocCommon-module__button___wekOw"}},43840:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___mWSPm","orion-fusion-theme":"Button-module__orion-fusion-theme___nj7k4",button:"Button-module__button___r5O1Q","is-active":"Button-module__is-active___CVWJw"}},38616:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___J4EGN","orion-fusion-theme":"Notice-module__orion-fusion-theme___1W9PK",notice:"Notice-module__notice___8kOwf",children:"Notice-module__children___cF5Rb",accessory:"Notice-module__accessory___h3l7H",title:"Notice-module__title___PeXjO","ux-recommendation":"Notice-module__ux-recommendation___tJWAL",caution:"Notice-module__caution___STLbH",deprecation:"Notice-module__deprecation___rWWLq",maintenance:"Notice-module__maintenance___o2AK1",important:"Notice-module__important___WpELD","not-supported":"Notice-module__not-supported___eAx6o",paragraph:"Notice-module__paragraph___BwEGe",list:"Notice-module__list___kOyCE"}},27683:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___rMAZk","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___78cuG",placeholder:"Placeholder-module__placeholder___FPYJB",inner:"Placeholder-module__inner___-U1IZ",title:"Placeholder-module__title___lsXDJ"}}}]);