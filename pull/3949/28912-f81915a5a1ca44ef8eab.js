"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[28912],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),o=r(n(45697)),l=r(n(47166)),i=r(n(17422)),d=l.default.bind(i.default),s={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},u=function(e){var t=e.src,n=e.name,r=e.url,o=e.version,l=a.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},a.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(o))),i=t?a.default.createElement("a",{className:d("badge"),href:t},a.default.createElement("span",{className:d("badge-name")},"github"),a.default.createElement("span",{className:d("badge-version")},"source")):void 0;return a.default.createElement("div",{className:d("badge-container")},l,i)};u.propTypes=s;var m=u;t.Z=m},28912:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});n(67294);var r=n(81254),a=n(60619),o=n(70941),l=n(32331),i=n(47352),d=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m={},c="wrapper";function p(e){var t=e.components,n=u(e,d);return(0,r.mdx)(c,s({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-dropdown-accessibility-guide"},"Terra Dropdown Accessibility Guide"),(0,r.mdx)("h2",{id:"why-the-accessibility-of-dropdown-is-important"},"Why the accessibility of Dropdown is important"),(0,r.mdx)("p",null,"Dropdowns are one of the most used menu controls to gather data within an interface. Because they are so ubiquitous, users need to understand their purpose and be able to interact with them predictably. However, if Dropdowns are not implemented following best practices, users may fail to understand what the button is for, or worse, they may not be able to interact with the Dropdown menu. It is critical to users that Dropdowns must be accessible to understand and interact with the menu effectively."),(0,r.mdx)("p",null,"There are many ways a poorly implemented Dropdown can make unusable to users:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"All users rely on the Dropdown label to accurately describe the purpose of the menu."),(0,r.mdx)("li",{parentName:"ul"},"All users rely upon good error messaging to help the user understand when a button is invalid and what they must do to succeed in completing a form."),(0,r.mdx)("li",{parentName:"ul"},"Blind users need the label to be programmatically associated with the Dropdown menu for the screen reader to read the label; otherwise, they will not understand the purpose of the menu."),(0,r.mdx)("li",{parentName:"ul"},"Speech input device users will not be able to activate a dropdown button if the button label is not unique or programmatically associated with the button."),(0,r.mdx)("li",{parentName:"ul"},"If the Dropdown does not provide meaningful helper text or is not programmatically marked as required, the user may not understand how to meet the button requirements.")),(0,r.mdx)(l.Z,{mdxType:"Whitespace"}),(0,r.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,r.mdx)(a.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,r.mdx)("h3",{id:"content-considerations-what-do-content-creators-need-to-do"},"Content Considerations: What do content creators need to do?"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Ensure each Dropdown has a descriptive label that accurately describes its purpose.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Ensure each Dropdown label is unique to the page.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"The best practice is to never use the same label for multiple dropdowns that ask for different data on the same page."))),(0,r.mdx)("li",{parentName:"ul"},"If there is any specific requirement for the user to make a dropdown menu valid, that requirement must be presented visibly either in the button label or within the helper text.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"If a Dropdown is required, it must be set as required, have the required red asterisk, and its parent form should have instructions that any item marked with the asterisk is required."))),(0,r.mdx)("li",{parentName:"ul"},"When creating error messaging, ensure the message provides enough context so the user can understand the problem and how to fix it. Use clear and concise messaging."),(0,r.mdx)("li",{parentName:"ul"},"If any icons are used to convey meaning in conjunction with a Dropdown, the icon must have an accessible name (alternate content). For example, a help icon next to the dropdown menu.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"The icon must be intuitive for the functionality it represents."),(0,r.mdx)("li",{parentName:"ul"},"The icon must be named consistently across the product and accurately reflect the purpose of the icon."),(0,r.mdx)("li",{parentName:"ul"},"The icons must be used to consistently represent the same function (do not use multiple icons for the same functionality)."),(0,r.mdx)("li",{parentName:"ul"},"The icon must have alternate content that reflects the Dropdown it is related to, or it must be programmatically associated with the button. Work with engineers to add a programmatic association of icons to the button."))),(0,r.mdx)("li",{parentName:"ul"},"Any purely decorative icon (does not convey ANY meaning) must be marked as decorative."),(0,r.mdx)("li",{parentName:"ul"},"Consider how a dropdown menu resizes and reflows at different breakpoints and form factors.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Convey to engineers how content should resize and reflow."))),(0,r.mdx)("li",{parentName:"ul"},"Do not override default Dropdown colors.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"If colors are changed, all Dropdown content (visible label, required asterisk, helper text, instructions, menu options, and the button itself) must meet color contrast requirements against their respective backgrounds."))))),(0,r.mdx)("li",{parentName:"ul"},"Ensure the engineer understands the logical reading order of the page so they may code the dropdown in to reflect the user’s expectations."),(0,r.mdx)("li",{parentName:"ul"},"After coded:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Ensure nothing unexpected happens on focus or selection of the Dropdown."),(0,r.mdx)("li",{parentName:"ul"},"Ensure all Dropdowns can receive keyboard focus, have a visible keyboard focus indication when in focus, and can be interacted with and acted upon using only the keyboard."),(0,r.mdx)("li",{parentName:"ul"},"Ensure all Dropdowns receive focus in the user’s logical reading order and that the focus order does not affect the meaning of the content.")))),(0,r.mdx)("h3",{id:"code-considerations-what-do-engineers-need-to-do"},"Code Considerations: What do engineers need to do?"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Do not override the implicit or explicit role of the Dropdown."),(0,r.mdx)("li",{parentName:"ul"},"Ensure the code order of the Dropdown matches the user’s logical reading order.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Ensure that the Dropdown can receive keyboard focus."),(0,r.mdx)("li",{parentName:"ul"},"Do not override the default keyboard focus indicator unless to reverse out of a dark background for perceivability."),(0,r.mdx)("li",{parentName:"ul"},"Do not implement a TABINDEX value of anything greater than zero."),(0,r.mdx)("li",{parentName:"ul"},"Ensure nothing unexpected happens on focus or on select of a Dropdown."))),(0,r.mdx)("li",{parentName:"ul"},"Work with Content Creators to understand how content should resize and reflow at different breakpoints and form factors to ensure content is not artificially constrained or cut off at smaller viewports."),(0,r.mdx)("li",{parentName:"ul"},"Ensure that Dropdown is implemented correctly to ensure that programmatic association is made with all related content (e.g., visible label, helper text, error messaging).")),(0,r.mdx)(i.Z,{mdxType:"AccessibilityDropdown"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"const AccessibilityDropdown = () => {\n  const [message, setMessage] = useState('No option clicked');\n\n  return (\n    <Card>\n      <Card.Body>\n        <React.Fragment>\n          <DropdownButton\n            label=\"Patient Allergies\"\n          >\n            <Item label=\"Cats\" onSelect={() => setMessage('Clicked Cat allergies')} />\n            <Item label=\"Dogs\" onSelect={() => setMessage('Clicked Dogs allergies')} />\n            <Item label=\"Dust\" onSelect={() => setMessage('Clicked Dust allergies')} />\n            <Item label=\"Mold\" onSelect={() => setMessage('Clicked Mold allergies')} />\n            <Item label=\"Latex\" onSelect={() => setMessage('Clicked Latex allergies')} />\n          </DropdownButton>\n          <p>{message}</p>\n        </React.Fragment>\n      </Card.Body>\n    </Card>\n  );\n};\n\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Ensure the visible dropdown Label matches any artificially applied programmatic label."),(0,r.mdx)("li",{parentName:"ul"},"Do not change the placement of any related content to other areas around the button. For example, do not move the dropdown label creating large gaps between the button and the label."))),(0,r.mdx)("h2",{id:"usability-expectations"},"Usability Expectations"),(0,r.mdx)("h3",{id:"interaction-detail"},"Interaction Detail"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The dropdown should be able to receive focus and have an item selected through multiple modalities (e.g., mouse, keyboard, assistive technologies, mobile, and mobile using a screen reader).")),(0,r.mdx)("h3",{id:"usability-expectations-1"},"Usability Expectations"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The user expects to understand the purpose of the Dropdown."),(0,r.mdx)("li",{parentName:"ul"},"The user expects to understand the state (Expand or collapse) of Dropdown."),(0,r.mdx)("li",{parentName:"ul"},"The user expects to understand any requirements of the Dropdown. For example, is it required, etc.")),(0,r.mdx)("h3",{id:"keyboard-expectations"},"Keyboard Expectations"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key/Sequence"),(0,r.mdx)("th",{parentName:"tr",align:null},"Expectation"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Tab")),(0,r.mdx)("td",{parentName:"tr",align:null},"Moves forward or backward to any interactive element including Dropdown")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Space")),(0,r.mdx)("td",{parentName:"tr",align:null},"When Dropdown is focused, will open, or close the Dropdown menu depending upon its current state.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Up/Down")),(0,r.mdx)("td",{parentName:"tr",align:null},"With Dropdown in focus and dropdown menu closed, will open the dropdown. Moves focus up/down the Dropdown list of options.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Enter")),(0,r.mdx)("td",{parentName:"tr",align:null},"When the Dropdown is open, Enter selects a dropdown menu option.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Escape")),(0,r.mdx)("td",{parentName:"tr",align:null},"When the Dropdown is open, Escape will close the dropdown.")))),(0,r.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,r.mdx)("h3",{id:"how-does-terra-action-header-support-compliance"},"How does Terra Action Header support compliance?"),(0,r.mdx)("p",null,"Terra is committed to ensuring its components provide the maximum possible accessibility. Terra provides the ability to make accessibility products. However, using Terra components will not automatically make a product accessible."),(0,r.mdx)("p",null,"The final responsibility lies with the consumers of Terra components — ensuring proper usage, any programmatic context where needed, the words used to label elements, engineers following correct implementation patterns, and authors crafting content that follows best practice guidance — to make a product fully accessible."),(0,r.mdx)("h3",{id:"primary-accessibility-criteria-for-action-header"},"Primary accessibility criteria for Action Header"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"},"1.3.1 Info and Relationships")," – Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown provides the ability to associate the label, error messaging, and helper text with the dropdown menu."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure the label, helper text, and error messaging are correctly hooked up to the Dropdown. "),(0,r.mdx)("li",{parentName:"ul"},"Content creators must convey any visible relationships of content to the Dropdown to the engineer. "))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence"},"1.3.2 Meaningful Sequence")," – Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown supports having content read in a meaningful order. "),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure that content is coded in the user’s logical order. Engineers must not use a TABINDEX value greater than zero."),(0,r.mdx)("li",{parentName:"ul"},"Creators must ensure the keyboard focus order meets the users expected order and does not affect the meaning of the content."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum"},"1.4.3 Contrast (Minimum)"),"  – Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown labels and text meet the required contrast ratios based on the default text and color backgrounds."),(0,r.mdx)("li",{parentName:"ul"},"If colors are changed, engineers and content creators must ensure text colors meet the appropriate contrast ratio based on their font size and the color they appear against. See 1.4.3 Contrast (Minimum) for more information."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard"},"2.1.1 Keyboard")," – Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra ensures keyboard accessibility is built into the component."),(0,r.mdx)("li",{parentName:"ul"},"Engineers and Content Creators must ensure all Dropdown menus can be accessed and acted upon using only the keyboard after implementing within the code."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order"},"2.4.3 Focus Order")," – Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown can be coded in the user’s logical read order."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must code the dropdown elements to match the user’s logical reading order."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must not add a TABINDEX greater than zero."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must ensure the Dropdown receives focus in the user’s logical reading order."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels"},"2.4.6 Headings and Labels")," – Partially Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown provides the ability to create unique and descriptive headings and labels."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must implement a meaningful label provided by content creators."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must provide development a label that accurately describes the purpose of the Dropdown."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible"},"2.4.7 Focus Visible")," – Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown ensures a visible keyboard focus is built into the component."),(0,r.mdx)("li",{parentName:"ul"},"Engineers and Content Creators must ensure all dropdowns have a visible keyboard focus after being implemented within the code."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/label-in-name"},"2.5.3 Label in Name")," – Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown provides the consuming team to have a visible label and a programmatic label."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure the programmatic name matches that of the visible Dropdown label."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/on-focus"},"3.2.1 On Focus")," – Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown does not initiate a change of context on its own."),(0,r.mdx)("li",{parentName:"ul"},"Engineers and Content Creators must ensure nothing unexpected happens on focus of the Dropdown."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/on-input"},"3.2.2 On Input")," – Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown does not initiate a change of context on the selection of the menu or its options."),(0,r.mdx)("li",{parentName:"ul"},"Engineers and content creators must not initiate any change of context on focus of the Dropdown."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/error-identification"},"3.3.1 Error Identification")," – Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown provides the ability to validate a dropdown menu and provide error notifications on the field with error messaging."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure validation is hooked up correctly and the error messaging is appropriately associated with the errant button."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must provide engineers with error messaging for any potential validation error of the button."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions"},"3.3.2 Labels or Instructions")," – Partially Supports ",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown provides a label and the ability to have helper text for instructions."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure dropdown menus are coded correctly for helper text or other instructions to be properly associated with the menu. "),(0,r.mdx)("li",{parentName:"ul"},"Content creators must provide engineers with text string for the label and any helper text instructions for users to understand the purpose and requirements of the button clearly."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion"},"3.3.3 Error Suggestion")," – Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown provides the ability to include error suggestions when forms are validated."),(0,r.mdx)("li",{parentName:"ul"},"When the cause of the error can be known to the system, engineers must ensure validation is hooked up correctly and can provide the appropriate error messaging to the user."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must provide engineers with appropriate error messaging to account for a known invalid entry. If possible, the error messaging must provide guidance to the user on how to correct the issue."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},"4.1.2 Name, Role, Value")," – Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown ensures that the proper role is applied and allows consuming teams to set the appropriate label for the button."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must not overwrite the default role of the Dropdown."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must provide development an appropriate label for the Dropdown.")))),(0,r.mdx)("h3",{id:"related-accessibility-criteria-that-apply-when-adding-content-to-dropdown-menus"},"Related accessibility criteria that apply when adding content to dropdown menus."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/reflow"},"1.4.10 Reflow")," – Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown can reflow with content by default."),(0,r.mdx)("li",{parentName:"ul"},"Engineers and content creators must ensure their dropdown layouts can reflow without loss of functionality or scrolling in two directions at up to 400% except when used within tables."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/text-spacing"},"1.4.12 Text Spacing")," – Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown meets this criterion by default."),(0,r.mdx)("li",{parentName:"ul"},"Engineers and content creators must ensure support for this criterion."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/resize-text"},"1.4.4 Resize text")," – Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown resizes natively."),(0,r.mdx)("li",{parentName:"ul"},"Engineers and content creators must ensure their dropdown layouts allow users to resize text up to 200% without the loss of content or functionality."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/parsing"},"4.1.1 Parsing")," – Supports",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra Dropdown creates valid HTML code."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure their code is valid.")))),(0,r.mdx)("h2",{id:"supported-features-and-technology"},"Supported Features and Technology"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Keyboard Interactions"),(0,r.mdx)("li",{parentName:"ul"},"JAWS Support with Chrome (PC)"),(0,r.mdx)("li",{parentName:"ul"},"VoiceOver Support with Chrome, Safari (MAC) "),(0,r.mdx)("li",{parentName:"ul"},"Speech Input Interactions with assistive technology"),(0,r.mdx)("li",{parentName:"ul"},"Mobile Touch Interactions with Screen Reader assistive technology")),(0,r.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-core/issues/new/choose"},"Report a problem with this component on GitHub"))),(0,r.mdx)("h2",{id:"references"},"References:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/"},"Web Content Accessibility Guidelines (WCAG)")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://webaim.org/techniques/forms/"},"WebAim.org: Creating More Accessible Forms"))))}p.isMDXComponent=!0},70941:function(e,t,n){n.d(t,{C:function(){return o}});var r=n(67294),a=n(22863),o=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-dropdown-button",name:"terra-dropdown-button",version:"1.36.0",url:t})}},17522:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),o=c(n(94184)),l=c(n(47166)),i=c(n(74754)),d=c(n(50026)),s=c(n(62925)),u=c(n(49660)),m=["children","variant","visuallyHiddenText"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h=l.default.bind(s.default),g={children:a.default.node,variant:a.default.oneOf(["default","raised"]),visuallyHiddenText:a.default.string},b={variant:"default"},w=function(e){var t=e.children,n=e.variant,a=e.visuallyHiddenText,l=f(e,m),s=r.default.useContext(d.default),u=(0,o.default)(h(["card",n,s.className]),l.className),c=a?r.default.createElement(i.default,{text:a}):null;return r.default.createElement("article",p({},l,{className:u}),c,t)};w.propTypes=g,w.defaultProps=b,w.Body=u.default;t.default=w},49660:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),o=u(n(94184)),l=u(n(47166)),i=u(n(50026)),d=u(n(78831)),s=["children","hasPaddingVertical","hasPaddingHorizontal","isContentCentered"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.default.bind(d.default),f={children:a.default.node,hasPaddingVertical:a.default.bool,hasPaddingHorizontal:a.default.bool,isContentCentered:a.default.bool},h=function(e){var t=e.children,n=e.hasPaddingVertical,a=e.hasPaddingHorizontal,l=e.isContentCentered,d=c(e,s),u=r.default.useContext(i.default),f=(0,o.default)(p([{"vertical-padding":n},{"horizontal-padding":a},{"center-content":l},u.className]),d.className);return r.default.createElement("div",m({},d,{className:f}),t)};h.propTypes=f,h.defaultProps={hasPaddingHorizontal:!0,hasPaddingVertical:!0,isContentCentered:!1};t.default=h},32331:function(e,t,n){t.Z=void 0;var r=s(n(67294)),a=s(n(45697)),o=s(n(94184)),l=s(n(47166)),i=s(n(32172)),d=["newline"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.default.bind(i.default),p={newline:a.default.oneOf([1,2,3,4,5,6,7,8])},f=function(e){var t=e.newline,n=m(e,d),a=(0,o.default)(c("whitespace","newline-".concat(t)),n.className);return r.default.createElement("div",u({},n,{className:a,"aria-hidden":"true"}))};f.propTypes=p,f.defaultProps={newline:1};t.Z=f},47352:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a,o=s(n(67294)),l=s(n(30420)),i=(a=n(17522))&&a.__esModule?a:{default:a};function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],d=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);d=!0);}catch(e){s=!0,a=e}finally{try{if(!d&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.Z=function(){var e=u((0,o.useState)("No option clicked"),2),t=e[0],n=e[1];return o.default.createElement(i.default,null,o.default.createElement(i.default.Body,null,o.default.createElement(o.default.Fragment,null,o.default.createElement(l.default,{label:"Patient Allergies"},o.default.createElement(l.Item,{label:"Cats",onSelect:function(){return n("Clicked Cat allergies")}}),o.default.createElement(l.Item,{label:"Dogs",onSelect:function(){return n("Clicked Dogs allergies")}}),o.default.createElement(l.Item,{label:"Dust",onSelect:function(){return n("Clicked Dust allergies")}}),o.default.createElement(l.Item,{label:"Mold",onSelect:function(){return n("Clicked Mold allergies")}}),o.default.createElement(l.Item,{label:"Latex",onSelect:function(){return n("Clicked Latex allergies")}})),o.default.createElement("p",null,t))))}},75295:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(67294)),a=s(n(45697)),o=s(n(47166)),l=s(n(50026)),i=s(n(72145)),d=["children"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:a.default.string},g=function(e){var t=e.children,n=m(e,d),a=r.default.useContext(l.default),i=(0,o.default)(c(["button",a.className]),n.className);return r.default.createElement("button",u({},n,{type:"button",className:i,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};g.propTypes=h;t.default=g},77904:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),o=d(n(47166)),l=d(n(50026)),i=d(n(45491));function d(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(i.default),u={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},m=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,o=r.default.useContext(l.default);return r.default.createElement("div",{className:s("notice",n,o.className)},r.default.createElement("div",{className:s("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:s("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:s("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:s("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:s("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:s("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(a,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};m.propTypes=u,m.defaultProps={ariaLevel:"2",variant:"important"};t.default=m},78026:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),o=u(n(94184)),l=u(n(47166)),i=u(n(50026)),d=u(n(15877)),s=["title"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.default.bind(d.default),f={title:a.default.string},h=function(e){var t=e.title,n=c(e,s),a=r.default.useContext(i.default),l=(0,o.default)(p(["placeholder",a.className]),n.className),d=p(["inner"]);return r.default.createElement("div",m({},n,{className:l}),r.default.createElement("div",{className:d},r.default.createElement("p",{className:p("title")},t)))};h.propTypes=f,h.defaultProps={title:""};t.default=h},60619:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var r=l(n(77904)),a=l(n(78026)),o=l(n(75295));function l(e){return e&&e.__esModule?e:{default:e}}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},62925:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Card-module__clinical-lowlight-theme___mGqg1","orion-fusion-theme":"Card-module__orion-fusion-theme___pKdAk",card:"Card-module__card___065D-",default:"Card-module__default___2cIRO",raised:"Card-module__raised___3pYfF"}},78831:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"CardBody-module__orion-fusion-theme___K00C6","clinical-lowlight-theme":"CardBody-module__clinical-lowlight-theme___k2Ldr","vertical-padding":"CardBody-module__vertical-padding___UHG80","horizontal-padding":"CardBody-module__horizontal-padding___OqvV2","center-content":"CardBody-module__center-content___kMmT+"}},32172:function(e,t,n){n.r(t),t.default={whitespace:"Whitespace-module__whitespace___DPfQS","newline-1":"Whitespace-module__newline-1___bKmlz","newline-2":"Whitespace-module__newline-2___bmmzw","newline-3":"Whitespace-module__newline-3___ORV3M","newline-4":"Whitespace-module__newline-4___g7otO","newline-5":"Whitespace-module__newline-5___sOge+","newline-6":"Whitespace-module__newline-6___rHqfU","newline-7":"Whitespace-module__newline-7___iiRm7","newline-8":"Whitespace-module__newline-8___nGGTR"}},72145:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___mWSPm","orion-fusion-theme":"Button-module__orion-fusion-theme___nj7k4",button:"Button-module__button___r5O1Q","is-active":"Button-module__is-active___CVWJw"}},45491:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___J4EGN","orion-fusion-theme":"Notice-module__orion-fusion-theme___1W9PK",notice:"Notice-module__notice___8kOwf",children:"Notice-module__children___cF5Rb",accessory:"Notice-module__accessory___h3l7H",title:"Notice-module__title___PeXjO","ux-recommendation":"Notice-module__ux-recommendation___tJWAL",caution:"Notice-module__caution___STLbH",deprecation:"Notice-module__deprecation___rWWLq",maintenance:"Notice-module__maintenance___o2AK1",important:"Notice-module__important___WpELD","not-supported":"Notice-module__not-supported___eAx6o",paragraph:"Notice-module__paragraph___BwEGe",list:"Notice-module__list___kOyCE"}},15877:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___rMAZk","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___78cuG",placeholder:"Placeholder-module__placeholder___FPYJB",inner:"Placeholder-module__inner___-U1IZ",title:"Placeholder-module__title___lsXDJ"}}}]);