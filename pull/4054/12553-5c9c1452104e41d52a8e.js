"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[12553],{55713:function(e,t,a){var n=a(24994);t.A=void 0;var r=n(a(96540)),l=n(a(5556)),o=n(a(67967)),i=n(a(25642)),d=o.default.bind(i.default),s={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},u=function(e){var t=e.src,a=e.name,n=e.url,l=e.version,o=r.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(l)},r.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(l))),i=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},o,i)};u.propTypes=s;t.A=u},39967:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});a(96540);var n=a(36665),r=a(80305),l=a(45184),o=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}(0,n.mdx)(r.E,null);var s={},u="wrapper";function m(e){var t=e.components,a=d(e,o);return(0,n.mdx)(u,i({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"form-select---single-select-field-accessibility-guide"},"Form Select - Single Select Field Accessibility Guide"),(0,n.mdx)("h2",{id:"why-the-accessibility-of-select-field-is-important"},"Why the accessibility of Select Field is important"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Select Fields are one of the most used controls to gather data within an interface. Because they are so ubiquitous, users need to understand their purpose and be able to interact with them. However, if select Fields are not implemented following best practices, users may fail to understand what the field is for, or worse, may not be able to interact with the select field. It is critical to users that select fields must be accessible to effectively understand and interact with a field."),(0,n.mdx)("li",{parentName:"ul"},"There are many ways a poorly implemented Select Field can make the field unusable to users: ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"All users rely on the Select Field label to tell them what must be selected in the field."),(0,n.mdx)("li",{parentName:"ul"},"All users rely upon good error messaging to help the user understand when a field is invalid and what they must do to successfully complete the field."),(0,n.mdx)("li",{parentName:"ul"},"Blind users need the label to be programmatically associated to the select field for the screen reader to read the label, otherwise they won’t know what to doss."),(0,n.mdx)("li",{parentName:"ul"},"Speech input device users will not be able to activate a field if the field label is not unique or programmatically associated to the field."),(0,n.mdx)("li",{parentName:"ul"},"If Select Field don’t provide meaningful helper text or appropriate note a field is required, the user may not understand how to meet the field requirements.")))),(0,n.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,n.mdx)("h3",{id:"content-considerations-what-do-content-creators-need-to-do"},"Content Considerations: What do content creators need to do?"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Consider adding instructions at the beginning of the form when content may be complex or out of the ordinary.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Use clear and concise wording that helps the user understand what is expected of them."))),(0,n.mdx)("li",{parentName:"ul"},"Ensure each select Field has a descriptive label that accurately describes its purpose.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Ensure each select field label is unique to the page.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"The best practice is to never use the same label for multiple fields that are asking for different data on the same page."),(0,n.mdx)("li",{parentName:"ul"},"Or groups of related fields can be placed inside of a fieldset which will create the necessary programmatic context."))),(0,n.mdx)("li",{parentName:"ul"},"If there is any specific requirement for the user to make a field valid, that requirement must be presented visibly either in the field label or within helper text.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"If a form field is required, it must be set as required, have the required red asterisk, and the form itself should have instructions that any item marked with the asterisk is required."))),(0,n.mdx)("li",{parentName:"ul"},"When creating error messaging, ensure the message provides enough context the user can understand what the problem is and how to fix it. Use clear and concise messaging."),(0,n.mdx)("li",{parentName:"ul"},"If any icons are used to convey meaning in conjunction with a Select Field, the icon must have an accessible name (alternate content). For example, a help icon next to a field.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"The icon must be intuitive for the functionality it represents."),(0,n.mdx)("li",{parentName:"ul"},"The icon must be named consistently across the product and accurately reflect the purpose of the icon."),(0,n.mdx)("li",{parentName:"ul"},"The icons must be used to consistently represent the same function (don’t use multiple icons for the same functionality)."),(0,n.mdx)("li",{parentName:"ul"},"The icon must have alternate content that reflects the select field it is related to, or it must be programmatically associated to the field. Work with engineers when needed to add programmatic association of icons to the field."))),(0,n.mdx)("li",{parentName:"ul"},"Any purely decorative icon (does not convey ANY meaning) must be marked as decorative."),(0,n.mdx)("li",{parentName:"ul"},"Consider how forms resize and reflow at different breakpoints and form factors.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Convey to engineers how content should resize and reflow."))),(0,n.mdx)("li",{parentName:"ul"},"Do not override default form field colors.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"If colors are changed, all select Field content (visible label, required asterisk, helper text, instructions, helper text, and the field itself) must meet color contrast requirements against their respective backgrounds."))))),(0,n.mdx)("li",{parentName:"ul"},"Ensure the engineer understands the logical reading order of the form."),(0,n.mdx)("li",{parentName:"ul"},"After coded:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Ensure nothing unexpected happens on focus or on select of the select Field."),(0,n.mdx)("li",{parentName:"ul"},"Ensure all form field can receive keyboard focus, have a visible keyboard focus indication when in focus, and can be interacted with and acted upon using only the keyboard."),(0,n.mdx)("li",{parentName:"ul"},"Ensure all form field receive focus in the users logical reading order and the focus order does not affect the meaning of content.")))),(0,n.mdx)("h3",{id:"code-considerations-what-do-engineers-need-to-do"},"Code Considerations: What do engineers need to do?"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Do not override the implicit or explicit role of the Select Field."),(0,n.mdx)("li",{parentName:"ul"},"Ensure the code order of form select field matches the users logical reading order.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Ensure that select Field can receive keyboard focus."),(0,n.mdx)("li",{parentName:"ul"},"Do not override the default keyboard focus indicator unless to reverse out of a dark background for perceivability."),(0,n.mdx)("li",{parentName:"ul"},"Do not implement a TABINDEX value of anything greater than zero."),(0,n.mdx)("li",{parentName:"ul"},"Ensure nothing unexpected happens on focus or on select of a Select Field."))),(0,n.mdx)("li",{parentName:"ul"},"Work with Content Creators to understand how content should resize and reflow at different breakpoints and form factors to ensure content is not artificially constrained or cut off at smaller view ports."),(0,n.mdx)("li",{parentName:"ul"},"Ensure that Select Field is implemented correctly to programmatically associate all related content (visible label, helper text, error messaging) to the field",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Ensure the visible select Label matches any artificially applied programmatic label."),(0,n.mdx)("li",{parentName:"ul"},"Do not change the placement of any of the related content to other areas around the field. For example, do not move the select label creating large gaps between the field and the label."))),(0,n.mdx)("li",{parentName:"ul"},"Ensure validation can provide users the necessary details to understand any errors.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Ensure invalid fields can be identified with error messaging.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Error messaging should provide error suggestions when the system can programmatically understand what is wrong.")))))),(0,n.mdx)("div",{"aria-label":"Example Demo"},(0,n.mdx)(l.A,{mdxType:"SelectFieldExample"})),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'const cx = classNames.bind(styles);\n\nconst SelectFieldExample = () => (\n  <Card>\n    <Card.Body>\n      <SelectField label="Allergies Hospitals" placeholder="Select a location" selectId="Hospital-location-field" className={cx(\'form-select\')}>\n        <SelectField.Option value="Kansas,MO" display="Cerner,Kansas City, MO" />\n        <SelectField.Option value="Riverport Campus, MO" display="Cerner Corporation - Riverport Campus" />\n        <SelectField.Option value="Innovations Campus, MO" display="Cerner Corporation - Innovations Campus" />\n        <SelectField.Option value="Realization Campus, MO" display="Cerner Corporation - Realization Campus" />\n      </SelectField>\n    </Card.Body>\n  </Card>\n);\n')),(0,n.mdx)("h2",{id:"usability-expectations"},"Usability Expectations"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"The user expects to understand the purpose of the select field."),(0,n.mdx)("li",{parentName:"ul"},"The user expects to understand the state (Expand or collapse) of select field."),(0,n.mdx)("li",{parentName:"ul"},"The user expects to understand any requirements of the select field. For example, is it required, etc.")),(0,n.mdx)("h3",{id:"interaction-detail"},"Interaction Detail"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Select field should be able to receive focus and have item selected in them.")),(0,n.mdx)("h3",{id:"keyboard-expectations"},"Keyboard Expectations"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Key/Sequence"),(0,n.mdx)("th",{parentName:"tr",align:null},"Expectation"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"Tab")),(0,n.mdx)("td",{parentName:"tr",align:null},"Moves forward or backward to any interactive element including form Select Field")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"Space")),(0,n.mdx)("td",{parentName:"tr",align:null},"When Select Field is focused, will open or close the Select Field dropdown menu depending upon its current state.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"Up/Down")),(0,n.mdx)("td",{parentName:"tr",align:null},"With Select Field in focus and dropdown menu closed, will open the dropdown. Moves focus up/down the Select Field list of options.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"Enter")),(0,n.mdx)("td",{parentName:"tr",align:null},"Selects the selected dropdown menu option.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("em",{parentName:"td"},"Escape")),(0,n.mdx)("td",{parentName:"tr",align:null},"When the Select Field dropdown is open, Escape will close the dropdown.")))),(0,n.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,n.mdx)("h3",{id:"primary-accessibility-criteria-for-form-select"},"Primary accessibility criteria for Form Select"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},"1.3.1 Info and Relationships")," — Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Form Select Field natively associates the select label, error messaging, and helper text to the field."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure the label, helper text, and the error messaging are correctly hooked up to the select field."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must convey any visible relationships of content to the select field to the engineer."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"},"1.3.2 Meaningful Sequence")," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Form Select Field generally support to have content read in meaningful order."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure content is coded in the user’s logical order. Engineers must not use a TABINDEX value greater than zero."),(0,n.mdx)("li",{parentName:"ul"},"Creators must ensure the keyboard focus order meets the users expected order and does not affect the meaning of content."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"},"1.4.3 Contrast (Minimum)")," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Form Select Field labels and text meet the required contrast ratios based on the default text and color backgrounds."),(0,n.mdx)("li",{parentName:"ul"},"If colors are changed, engineers and content creators must ensure text colors meet the appropriate contrast ratio based on their font size and the color they appear against. See 1.4.3 Contrast (Minimum) for more information."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"},"2.1.1 Keyboard")," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra ensures keyboard accessibility is built into the component."),(0,n.mdx)("li",{parentName:"ul"},"Engineer and Content Creators must ensure all form select field can be accessed and acted upon using only the keyboard after implemented within code."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"},"2.4.3 Focus Order")," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Form select field can be coded in the user’s logical read order."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must code the form elements to match the users logical reading order. Engineers must not add a TABINDEX greater than zero."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must ensure the form select field receive focus in the users logical reading order."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"},"2.4.6 Headings and Labels")," - Partially Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Form Select Field provides the ability to create unique and descriptive headings and labels."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must implement a meaningful label provided by content creators."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must provide development a label that accurately describes the purpose of the form select field."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"},"2.4.7 Focus Visible")," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Form Select Field ensures a visible keyboard focus is built into the component."),(0,n.mdx)("li",{parentName:"ul"},"Engineer and Content Creators must ensure all form select field have a visible keyboard focus after implemented within code."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"},"2.5.3 Label in Name")," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Form Select Field provides the consuming team the ability to meet this criterion."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure the programmatic name matches that of the visible form select field label."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html"},"3.2.1 On Focus")," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Form Select Field does not initiate a change of context on its own."),(0,n.mdx)("li",{parentName:"ul"},"Engineer and Content Creators must ensure nothing unexpected happens on focus of the Select Field."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/on-input.html"},"3.2.2 On Input")," - Partially Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Form Select Field does not initiate a change of context on Select."),(0,n.mdx)("li",{parentName:"ul"},"Engineers and content creators must not initiate any change of context on focus of the select field."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html"},"3.3.1 Error Identification")," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Form Select Field provides the ability to validate field."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure validation is hooked up correctly and the error messaging is appropriately associated to the errant field."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must ensure provide engineers with error messaging for any potential validation error of the field."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html"},"3.3.2 Labels or Instructions")," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Form Select Field are clearly marked and labeled."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure form select field are coded correctly for helper text or other instructions are properly associated with the field."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must provide engineers with the proper label and any helper text instructions for formatting requirements of the field."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html"},"3.3.3 Error Suggestion")," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Form Select Field provides the ability to include error suggestion when forms are validated."),(0,n.mdx)("li",{parentName:"ul"},"When the cause of the error can be known to the system, engineers must ensure validation is hooked up correctly and can provide the appropriate error messaging to the user."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must provide engineers with appropriate error messaging to account for a known invalid entry. If possible, the error messaging must provide the user guidance on how to correct the issue."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"},"4.1.2 Name, Role, Value")," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Form Select Field ensure that the proper role is applied and provides consuming teams the ability to set appropriate label for the field."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must not overwrite the default role of the form select field."),(0,n.mdx)("li",{parentName:"ul"},"Content creators must provide development an appropriate label for the form select field.")))),(0,n.mdx)("h3",{id:"related-accessibility-criteria-that-apply-when-adding-content-to-action-header"},"Related accessibility criteria that apply when adding content to action header"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"},"1.4.10 Reflow")," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Form Select Field can reflow with content by default."),(0,n.mdx)("li",{parentName:"ul"},"Engineers and content creators must ensure their form layouts can reflow without loss of functionality or scrolling in two directions at up to 400% except when used within tables."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"},"1.4.12 Text Spacing")," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Form Select Field meets this criterion by default."),(0,n.mdx)("li",{parentName:"ul"},"Engineers and content creators must ensure support for this criterion."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html"},"1.4.4 Resize text")," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Form Select Field resizes natively."),(0,n.mdx)("li",{parentName:"ul"},"Engineers and content creators must ensure their form layouts allow users to resize text up to 200% without the loss of content or functionality."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html"},"4.1.1 Parsing")," - Supports",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Terra Select field creates valid HTML code."),(0,n.mdx)("li",{parentName:"ul"},"Engineers must ensure their code is valid.")))),(0,n.mdx)("h3",{id:"supported-features-and-technology"},"Supported Features and Technology"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Keyboard Interactions"),(0,n.mdx)("li",{parentName:"ul"},"JAWS Support with Chrome (PC)"),(0,n.mdx)("li",{parentName:"ul"},"VoiceOver Support with Chrome, Safari (MAC)"),(0,n.mdx)("li",{parentName:"ul"},"Speech Input Interactions with assistive technology"),(0,n.mdx)("li",{parentName:"ul"},"Mobile Touch Interactions with Screen Reader assistive technology")),(0,n.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-core/issues/new/choose"},"Report a problem with this component on GitHub"))),(0,n.mdx)("h2",{id:"references"},"References:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/"},"Web Content Accessibility Guidelines (WCAG)")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://webaim.org/techniques/forms/"},"WebAim.org: Creating More Accessible Forms"))))}m.isMDXComponent=!0},80305:function(e,t,a){a.d(t,{E:function(){return l}});var n=a(96540),r=a(55713),l=function(e){var t=e.url;return n.createElement(r.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.56.0",url:t})}},18290:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(96540)),r=c(a(5556)),l=c(a(46942)),o=c(a(67967)),i=c(a(56500)),d=c(a(52103)),s=c(a(74887)),u=c(a(90498)),m=["children","variant","visuallyHiddenText"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var h=o.default.bind(s.default),g={children:r.default.node,variant:r.default.oneOf(["default","raised"]),visuallyHiddenText:r.default.string},x={variant:"default"},b=function(e){var t=e.children,a=e.variant,r=e.visuallyHiddenText,o=f(e,m),s=n.default.useContext(d.default),u=(0,l.default)(h(["card",a,s.className]),o.className),c=r?n.default.createElement(i.default,{text:r}):null;return n.default.createElement("article",p({},o,{className:u}),c,t)};b.propTypes=g,b.defaultProps=x,b.Body=u.default;t.default=b},90498:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(96540)),r=u(a(5556)),l=u(a(46942)),o=u(a(67967)),i=u(a(52103)),d=u(a(58647)),s=["children","hasPaddingVertical","hasPaddingHorizontal","isContentCentered"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.default.bind(d.default),f={children:r.default.node,hasPaddingVertical:r.default.bool,hasPaddingHorizontal:r.default.bool,isContentCentered:r.default.bool},h=function(e){var t=e.children,a=e.hasPaddingVertical,r=e.hasPaddingHorizontal,o=e.isContentCentered,d=c(e,s),u=n.default.useContext(i.default),f=(0,l.default)(p([{"vertical-padding":a},{"horizontal-padding":r},{"center-content":o},u.className]),d.className);return n.default.createElement("div",m({},d,{className:f}),t)};h.propTypes=f,h.defaultProps={hasPaddingHorizontal:!0,hasPaddingVertical:!0,isContentCentered:!1};t.default=h},45184:function(e,t,a){t.A=void 0;var n=d(a(96540)),r=d(a(18290)),l=d(a(17377)),o=d(a(67967)),i=d(a(91002));function d(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(i.default);t.A=function(){return n.default.createElement(r.default,null,n.default.createElement(r.default.Body,null,n.default.createElement(l.default,{label:"Allergies Hospitals",placeholder:"Select a location",selectId:"Hospital-location-field",className:s("form-select")},n.default.createElement(l.default.Option,{value:"Kansas,MO",display:"Cerner,Kansas City, MO"}),n.default.createElement(l.default.Option,{value:"Riverport Campus, MO",display:"Cerner Corporation - Riverport Campus"}),n.default.createElement(l.default.Option,{value:"Innovations Campus, MO",display:"Cerner Corporation - Innovations Campus"}),n.default.createElement(l.default.Option,{value:"Realization Campus, MO",display:"Cerner Corporation - Realization Campus"}))))}},66093:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=v(a(96540)),r=v(a(5556)),l=v(a(3796)),o=v(a(60107)),i=v(a(40166)),d=v(a(67190)),s=v(a(78933)),u=v(a(90048)),m=v(a(85597)),c=v(a(82061)),p=["variant"],f=["maxSelectionCount"],h=["allowClear"],g=["maxSelectionCount"],x=["noResultContent","allowClear"],b=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function v(e){return e&&e.__esModule?e:{default:e}}function y(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var N={allowClear:r.default.bool,children:r.default.node,defaultValue:r.default.oneOfType([r.default.string,r.default.number,r.default.array]),disabled:r.default.bool,dropdownAttrs:r.default.object,isIncomplete:r.default.bool,isInvalid:r.default.bool,isTouchAccessible:r.default.bool,maxHeight:r.default.number,maxSelectionCount:r.default.number,noResultContent:r.default.node,onBlur:r.default.func,onChange:r.default.func,onClick:r.default.func,onDeselect:r.default.func,onFocus:r.default.func,onSearch:r.default.func,onSelect:r.default.func,optionFilter:r.default.func,placeholder:r.default.string,required:r.default.bool,value:r.default.oneOfType([r.default.string,r.default.number,r.default.array]),variant:r.default.oneOf([l.default.COMBOBOX,l.default.DEFAULT,l.default.MULTIPLE,l.default.SEARCH,l.default.TAG])},w={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function C(e){var t=e.variant,a=y(e,p);switch(t){case l.default.COMBOBOX:a.maxSelectionCount;var r=y(a,f);return n.default.createElement(d.default,r);case l.default.MULTIPLE:a.allowClear;var o=y(a,h);return n.default.createElement(u.default,o);case l.default.SEARCH:a.maxSelectionCount;var i=y(a,g);return n.default.createElement(m.default,i);case l.default.TAG:a.noResultContent,a.allowClear;var v=y(a,x);return n.default.createElement(c.default,v);case l.default.DEFAULT:default:a.isTouchAccessible,a.maxSelectionCount,a.onSearch,a.optionFilter;var N=y(a,b);return n.default.createElement(s.default,N)}}C.Option=o.default,C.OptGroup=i.default,C.propTypes=N,C.defaultProps=w,C.isSelect=!0;t.default=C},17377:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(96540)),r=u(a(5556)),l=a(8604),o=u(a(9047)),i=u(a(66093)),d=u(a(3796)),s=["allowClear","children","defaultValue","disabled","error","help","hideRequired","intl","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxSelectionCount","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value","variant"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p={allowClear:r.default.bool,children:r.default.node,label:r.default.string.isRequired,defaultValue:r.default.oneOfType([r.default.array,r.default.number,r.default.string]),disabled:r.default.bool,error:r.default.node,help:r.default.node,hideRequired:r.default.bool,intl:r.default.shape({formatMessage:r.default.func}).isRequired,isIncomplete:r.default.bool,isInline:r.default.bool,isInvalid:r.default.bool,isLabelHidden:r.default.bool,isTouchAccessible:r.default.bool,labelAttrs:r.default.object,maxHeight:r.default.number,maxSelectionCount:r.default.number,maxWidth:r.default.string,onChange:r.default.func,placeholder:r.default.string,required:r.default.bool,selectAttrs:r.default.object,selectId:r.default.string.isRequired,showOptional:r.default.bool,value:r.default.oneOfType([r.default.array,r.default.number,r.default.string]),variant:r.default.oneOf([d.default.COMBOBOX,d.default.DEFAULT,d.default.MULTIPLE,d.default.SEARCH,d.default.TAG])},f={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxSelectionCount:void 0,maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0,variant:"default"},h=function(e){var t,a=e.allowClear,r=e.children,l=e.defaultValue,d=e.disabled,u=e.error,p=e.help,f=e.hideRequired,h=e.intl,g=e.isIncomplete,x=e.isInline,b=e.isInvalid,v=e.isLabelHidden,y=e.isTouchAccessible,N=e.label,w=e.labelAttrs,C=e.maxSelectionCount,S=e.maxHeight,_=e.maxWidth,O=e.onChange,E=e.placeholder,F=e.required,A=e.selectAttrs,I=e.selectId,T=e.showOptional,W=e.value,k=e.variant,P=c(e,s),U=p;if(void 0!==C&&C>=2){var M=h.formatMessage({id:"Terra.form.select.maxSelectionHelp"},{text:C});U=p?n.default.createElement("span",null,M," ",p):M}return p&&u&&b?t="".concat(I,"-error ").concat(I,"-help"):(p&&(t="".concat(I,"-help")),u&&b&&(t="".concat(I,"-error"))),n.default.createElement(o.default,m({},P,{label:N,labelAttrs:w,error:u,help:U,hideRequired:f,required:F,showOptional:T,isInvalid:b,isInline:x,isLabelHidden:v,htmlFor:I,maxWidth:_}),n.default.createElement(i.default,m({},A,{ariaLabel:N,allowClear:a,"aria-describedby":t,disabled:A.disabled||d,id:I,isIncomplete:g,isInvalid:b,isTouchAccessible:y,defaultValue:l,maxHeight:S||A.maxHeight,maxSelectionCount:void 0!==C&&C<2?void 0:C,onChange:O,placeholder:E,required:F,value:W,variant:k}),r))};h.propTypes=p,h.defaultProps=f,h.Option=i.default.Option,h.OptGroup=i.default.OptGroup;t.default=(0,l.injectIntl)(h)},25642:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},74887:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Card-module__clinical-lowlight-theme___mGqg1","orion-fusion-theme":"Card-module__orion-fusion-theme___pKdAk","redwood-theme":"Card-module__redwood-theme___q3rY8",card:"Card-module__card___065D-",default:"Card-module__default___2cIRO",raised:"Card-module__raised___3pYfF"}},58647:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"CardBody-module__orion-fusion-theme___K00C6","clinical-lowlight-theme":"CardBody-module__clinical-lowlight-theme___k2Ldr","redwood-theme":"CardBody-module__redwood-theme___VMcf6","vertical-padding":"CardBody-module__vertical-padding___UHG80","horizontal-padding":"CardBody-module__horizontal-padding___OqvV2","center-content":"CardBody-module__center-content___kMmT+"}},91002:function(e,t,a){a.r(t),t.default={"form-select":"FormSelectDocCommon-module__form-select___tD5wJ","controlled-button":"FormSelectDocCommon-module__controlled-button___ByKvi","error-text":"FormSelectDocCommon-module__error-text___zMzj1","field-label":"FormSelectDocCommon-module__field-label___V4Msx"}},41843:function(e,t){function a(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function n(e){this.setState(function(t){var a=this.constructor.getDerivedStateFromProps(e,t);return null!=a?a:null}.bind(this))}function r(e,t){try{var a=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(a,n)}finally{this.props=a,this.state=n}}Object.defineProperty(t,"__esModule",{value:!0}),a.__suppressDeprecationWarning=!0,n.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var l=null,o=null,i=null;if("function"==typeof t.componentWillMount?l="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(l="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?o="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(o="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?i="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(i="UNSAFE_componentWillUpdate"),null!==l||null!==o||null!==i){var d=e.displayName||e.name,s="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+d+" uses "+s+" but also contains the following legacy lifecycles:"+(null!==l?"\n  "+l:"")+(null!==o?"\n  "+o:"")+(null!==i?"\n  "+i:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=a,t.componentWillReceiveProps=n),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=r;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,a){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:a;u.call(this,e,t,n)}}return e}}}]);