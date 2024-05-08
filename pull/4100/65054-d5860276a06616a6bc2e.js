"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[65054],{73480:function(e,l,t){t.r(l),t.d(l,{default:function(){return H}});var r=t(96540),a=t(36665),n=t(80305),d=t(62117),i=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m.apply(this,arguments)}function p(e,l){if(null==e)return{};var t,r,a=function(e,l){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o={};function u(e){var l=e.components,t=p(e,i);return(0,a.mdx)("wrapper",m({},o,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport { MultiSelectField } from \'terra-form-select\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst MultiSelectFieldExample = () => (\n  <MultiSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" className={cx(\'form-select\')}>\n    <MultiSelectField.Option value="xSmall" display="Extra Small" />\n    <MultiSelectField.Option value="small" display="Small" />\n    <MultiSelectField.Option value="medium" display="Medium" />\n    <MultiSelectField.Option value="large" display="Large" />\n    <MultiSelectField.Option value="xLarge" display="Extra Large" />\n  </MultiSelectField>\n);\n\nexport default MultiSelectFieldExample;\n\n')))}u.isMDXComponent=!0;var c=t(201),s=t(3710),x=function(e){var l=e.title,t=e.description,a=e.isExpanded;return r.createElement(c.A,{title:l||"Multi Select Field",description:t,example:r.createElement(d.A,null),exampleCssSrc:r.createElement(s.A,null),exampleSrc:r.createElement(u,null),isExpanded:a})},f=t(56635),y=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g.apply(this,arguments)}function b(e,l){if(null==e)return{};var t,r,a=function(e,l){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var v={};function h(e){var l=e.components,t=b(e,y);return(0,a.mdx)("wrapper",g({},v,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport { MultiSelectField } from \'terra-form-select\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst MultiSelectFieldExample = () => (\n  <MultiSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" required className={cx(\'form-select\')}>\n    <MultiSelectField.Option value="xSmall" display="Extra Small" />\n    <MultiSelectField.Option value="small" display="Small" />\n    <MultiSelectField.Option value="medium" display="Medium" />\n    <MultiSelectField.Option value="large" display="Large" />\n    <MultiSelectField.Option value="xLarge" display="Extra Large" />\n  </MultiSelectField>\n);\n\nexport default MultiSelectFieldExample;\n\n')))}h.isMDXComponent=!0;var T=function(e){var l=e.title,t=e.description,a=e.isExpanded;return r.createElement(c.A,{title:l||"Required Multi Select Field",description:t,example:r.createElement(f.A,null),exampleCssSrc:r.createElement(s.A,null),exampleSrc:r.createElement(h,null),isExpanded:a})},O=t(12026),N=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},C.apply(this,arguments)}function S(e,l){if(null==e)return{};var t,r,a=function(e,l){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var j={};function w(e){var l=e.components,t=S(e,N);return(0,a.mdx)("wrapper",C({},j,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport { MultiSelectField } from \'terra-form-select\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst MultiSelectFieldExample = () => (\n  <MultiSelectField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <MultiSelectField.Option value="xSmall" display="Extra Small" />\n    <MultiSelectField.Option value="small" display="Small" />\n    <MultiSelectField.Option value="medium" display="Medium" />\n    <MultiSelectField.Option value="large" display="Large" />\n    <MultiSelectField.Option value="xLarge" display="Extra Large" />\n  </MultiSelectField>\n);\n\nexport default MultiSelectFieldExample;\n\n')))}w.isMDXComponent=!0;var M=function(e){var l=e.title,t=e.description,a=e.isExpanded;return r.createElement(c.A,{title:l||"Incomplete Multi Select Field",description:t,example:r.createElement(O.A,null),exampleCssSrc:r.createElement(s.A,null),exampleSrc:r.createElement(w,null),isExpanded:a})},R=t(12883),_=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},E.apply(this,arguments)}function P(e,l){if(null==e)return{};var t,r,a=function(e,l){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var F={},D="wrapper";function q(e){var l=e.components,t=P(e,_);return(0,a.mdx)(D,E({},F,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)(R.Ay,{mdxType:"PropsTable"},(0,a.mdx)(R.fI,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The select options."))),(0,a.mdx)(R.fI,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"label"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(R.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The field label."))),(0,a.mdx)(R.fI,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"defaultValue"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n  type: 'array',\n],\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))),(0,a.mdx)(R.fI,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"disabled"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether the input is disabled."))),(0,a.mdx)(R.fI,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"error"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Error message displayed when the select is invalid."))),(0,a.mdx)(R.fI,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"help"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Help message to display with the select."))),(0,a.mdx)(R.fI,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"hideRequired"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether to hide the required indicator on the label."))),(0,a.mdx)(R.fI,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"isIncomplete"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",(0,a.mdx)("em",{parentName:"p"},"(usage note: ",(0,a.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,a.mdx)(R.fI,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"isInline"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))),(0,a.mdx)(R.fI,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"isInvalid"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))),(0,a.mdx)(R.fI,{key:"ROW11",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"isLabelHidden"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))),(0,a.mdx)(R.fI,{key:"ROW12",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"isTouchAccessible"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Ensures touch accessibility by rendering the dropdown inline without a portal."),(0,a.mdx)("p",null,"Note: When enabled the dropdown will clip if rendered within a container that has an overflow: hidden ancestor.\nThe dropdown may also appear beneath content if rendered within a container that has an overflow: auto ancestor."))),(0,a.mdx)(R.fI,{key:"ROW13",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"labelAttrs"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Additional attributes to spread onto the label."))),(0,a.mdx)(R.fI,{key:"ROW14",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"maxHeight"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The max height of the dropdown."))),(0,a.mdx)(R.fI,{key:"ROW15",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"maxSelectionCount"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The maximum number of options that can be selected. A value less than 2 will be ignored."))),(0,a.mdx)(R.fI,{key:"ROW16",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"maxWidth"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Set the max-width of a field using ",(0,a.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,a.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,a.mdx)(R.fI,{key:"ROW17",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"onChange"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when the select value changes. function(value)"))),(0,a.mdx)(R.fI,{key:"ROW18",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"placeholder"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Placeholder text."))),(0,a.mdx)(R.fI,{key:"ROW19",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"required"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether the field is required."))),(0,a.mdx)(R.fI,{key:"ROW20",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"selectAttrs"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Additional attributes to spread onto the select."))),(0,a.mdx)(R.fI,{key:"ROW21",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"selectId"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(R.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))),(0,a.mdx)(R.fI,{key:"ROW22",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"showOptional"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))),(0,a.mdx)(R.fI,{key:"ROW23",mdxType:"Row"},(0,a.mdx)(R.dt,{mdxType:"PropNameCell"},"value"),(0,a.mdx)(R.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n  type: 'array',\n],\n"))),(0,a.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers.")))))}q.isMDXComponent=!0;var I=["components"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},k.apply(this,arguments)}function Z(e,l){if(null==e)return{};var t,r,a=function(e,l){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var L={},W="wrapper";function H(e){var l=e.components,t=Z(e,I);return(0,a.mdx)(W,k({},L,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)(n.E,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-form-multiselect-field"},"Terra Form MultiSelect Field"),(0,a.mdx)("p",null,"A convenience wrapper assembling a ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select/src/MultiSelect.jsx"},"terra-form-select MultiSelect")," within a ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field"),"."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { MultiSelectField } from 'terra-form-select';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(x,{title:"MultiSelect Field Example",mdxType:"MultiSelectFieldExample"}),(0,a.mdx)(T,{title:"Required MultiSelect Field Example",mdxType:"RequiredMultiSelectFieldExample"}),(0,a.mdx)(M,{title:"Incomplete MultiSelect Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteMultiSelectFieldExample"}),(0,a.mdx)("h2",{id:"multi-select-field-props"},"Multi Select Field Props"),(0,a.mdx)(q,{mdxType:"MultiSelectFieldPropsTable"}))}H.isMDXComponent=!0},3710:function(e,l,t){t.d(l,{A:function(){return p}});t(96540);var r=t(36665),a=["components"];function n(){return n=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},n.apply(this,arguments)}function d(e,l){if(null==e)return{};var t,r,a=function(e,l){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={},m="wrapper";function p(e){var l=e.components,t=d(e,a);return(0,r.mdx)(m,n({},i,t,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},"// import themes\n@import './clinical-lowlight-theme/FormSelectDocCommon.module';\n@import './orion-fusion-theme/FormSelectDocCommon.module';\n\n:local {\n  .form-select {\n    max-width: 300px;\n  }\n\n  .controlled-button {\n    margin: 5px;\n  }\n  \n  .error-text {\n    color: var(--terra-core-docs-form-select-error-text-color, #e50000);\n    font-size: 0.857rem;\n    font-weight: normal;\n    line-height: 1.25;\n    margin-top: 0.357em;\n    outline: 0;\n    text-align: left;\n  }\n\n  .field-label {\n    font-weight: 700;\n  }\n}\n\n")))}p.isMDXComponent=!0},80305:function(e,l,t){t.d(l,{E:function(){return n}});var r=t(96540),a=t(55713),n=function(e){var l=e.url;return r.createElement(a.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.62.0",url:l})}},12026:function(e,l,t){l.A=void 0;var r=i(t(96540)),a=t(19137),n=i(t(67967)),d=i(t(91002));function i(e){return e&&e.__esModule?e:{default:e}}var m=n.default.bind(d.default);l.A=function(){return r.default.createElement(a.MultiSelectField,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:m("form-select")},r.default.createElement(a.MultiSelectField.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(a.MultiSelectField.Option,{value:"small",display:"Small"}),r.default.createElement(a.MultiSelectField.Option,{value:"medium",display:"Medium"}),r.default.createElement(a.MultiSelectField.Option,{value:"large",display:"Large"}),r.default.createElement(a.MultiSelectField.Option,{value:"xLarge",display:"Extra Large"}))}},62117:function(e,l,t){l.A=void 0;var r=i(t(96540)),a=t(19137),n=i(t(67967)),d=i(t(91002));function i(e){return e&&e.__esModule?e:{default:e}}var m=n.default.bind(d.default);l.A=function(){return r.default.createElement(a.MultiSelectField,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",className:m("form-select")},r.default.createElement(a.MultiSelectField.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(a.MultiSelectField.Option,{value:"small",display:"Small"}),r.default.createElement(a.MultiSelectField.Option,{value:"medium",display:"Medium"}),r.default.createElement(a.MultiSelectField.Option,{value:"large",display:"Large"}),r.default.createElement(a.MultiSelectField.Option,{value:"xLarge",display:"Extra Large"}))}},56635:function(e,l,t){l.A=void 0;var r=i(t(96540)),a=t(19137),n=i(t(67967)),d=i(t(91002));function i(e){return e&&e.__esModule?e:{default:e}}var m=n.default.bind(d.default);l.A=function(){return r.default.createElement(a.MultiSelectField,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",required:!0,className:m("form-select")},r.default.createElement(a.MultiSelectField.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(a.MultiSelectField.Option,{value:"small",display:"Small"}),r.default.createElement(a.MultiSelectField.Option,{value:"medium",display:"Medium"}),r.default.createElement(a.MultiSelectField.Option,{value:"large",display:"Large"}),r.default.createElement(a.MultiSelectField.Option,{value:"xLarge",display:"Extra Large"}))}},17212:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var r=o(t(96540)),a=o(t(5556)),n=o(t(46942)),d=o(t(67967)),i=o(t(52103)),m=o(t(19677)),p=["children","disableStripes","paddingStyle"];function o(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}function c(e,l){if(null==e)return{};var t,r,a=function(e,l){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=d.default.bind(m.default),x={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},f=function(e){var l=e.children,t=e.disableStripes,a=e.paddingStyle,d=c(e,p),m=r.default.useContext(i.default),o=(0,n.default)(s("table",{striped:!t},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},m.className),d.className);return r.default.createElement("table",u({},d,{className:o}),l)};f.propTypes=x,f.defaultProps={disableStripes:!1,paddingStyle:"none"};l.default=f},15460:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var r=d(t(96540)),a=d(t(5556)),n=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function i(e,l){if(null==e)return{};var t,r,a=function(e,l){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m={children:a.default.node},p=function(e){var l=e.children,t=i(e,n);return r.default.createElement("tbody",t,l)};p.propTypes=m,p.defaultProps={children:[]};l.default=p},59584:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var r=d(t(96540)),a=d(t(5556)),n=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function i(e,l){if(null==e)return{};var t,r,a=function(e,l){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m={children:a.default.node},p=function(e){var l=e.children,t=i(e,n);return r.default.createElement("td",t,l)};p.propTypes=m,p.defaultProps={children:[]};l.default=p},14281:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var r=i(t(96540)),a=i(t(5556)),n=i(t(93623)),d=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function m(e,l){if(null==e)return{};var t,r,a=function(e,l){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p={children:a.default.node},o=function(e){var l=e.children,t=m(e,d);return r.default.createElement("thead",t,r.default.createElement("tr",null,n.default.addScope(l,"col")))};o.propTypes=p,o.defaultProps={children:[]};l.default=o},93401:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var r=d(t(96540)),a=d(t(5556)),n=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function i(e,l){if(null==e)return{};var t,r,a=function(e,l){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m={children:a.default.node},p=function(e){var l=e.children,t=i(e,n);return r.default.createElement("th",t,l)};p.propTypes=m,p.defaultProps={children:[]};l.default=p},96646:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var r=p(t(96540)),a=p(t(5556)),n=p(t(67967)),d=p(t(19677)),i=p(t(93623)),m=["children"];function p(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function u(e,l){if(null==e)return{};var t,r,a=function(e,l){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.default.bind(d.default),s={children:a.default.node},x=function(e){var l=e.children,t=u(e,m),a=c(["row"]);return r.default.createElement("tr",o({},t,{className:t.className?"".concat(a," ").concat(t.className):a}),i.default.addScope(l,"row"))};x.propTypes=s,x.defaultProps={children:[]};l.default=x},93623:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var r,a=(r=t(96540))&&r.__esModule?r:{default:r};var n={addScope:function(e,l){var t=[];return a.default.Children.forEach(e,(function(e){t.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?l:void 0}))})),t}};l.default=n},17568:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(l,"Cell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(l,"Header",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(l,"HeaderCell",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(l,"Row",{enumerable:!0,get:function(){return n.default}}),l.default=void 0;var r=p(t(17212)),a=p(t(15460)),n=p(t(96646)),d=p(t(59584)),i=p(t(14281)),m=p(t(93401));function p(e){return e&&e.__esModule?e:{default:e}}l.default=r.default},27166:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var r=n(t(96540)),a=n(t(56445));function n(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var l=Object.assign({},e);return r.default.createElement(a.default,l,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};l.default=d},91002:function(e,l,t){t.r(l),l.default={"form-select":"FormSelectDocCommon-module__form-select___tD5wJ","controlled-button":"FormSelectDocCommon-module__controlled-button___ByKvi","error-text":"FormSelectDocCommon-module__error-text___zMzj1","field-label":"FormSelectDocCommon-module__field-label___V4Msx"}},19677:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);