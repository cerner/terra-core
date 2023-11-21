"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[30617],{50426:function(e,l,a){a.r(l),a.d(l,{default:function(){return V}});var t=a(67294),r=a(81254),n=a(59385),d=a(68825),o=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},i.apply(this,arguments)}function m(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p={};function u(e){var l=e.components,a=m(e,o);return(0,r.mdx)("wrapper",i({},p,a,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport ComboboxField from \'terra-form-select/lib/ComboboxField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ComboboxFieldExample = () => (\n  <ComboboxField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <ComboboxField.Option value="xSmall" display="Extra Small" />\n    <ComboboxField.Option value="small" display="Small" />\n    <ComboboxField.Option value="medium" display="Medium" />\n    <ComboboxField.Option value="large" display="Large" />\n    <ComboboxField.Option value="xLarge" display="Extra Large" />\n  </ComboboxField>\n);\n\nexport default ComboboxFieldExample;\n\n')))}u.isMDXComponent=!0;var s=a(49271),c=a(35951),x=function(e){var l=e.title,a=e.description,r=e.isExpanded;return t.createElement(s.Z,{title:l||"Combobox Field",description:a,example:t.createElement(d.Z,null),exampleCssSrc:t.createElement(c.Z,null),exampleSrc:t.createElement(u,null),isExpanded:r})},f=a(21319),y=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},b.apply(this,arguments)}function g(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var h={};function v(e){var l=e.components,a=g(e,y);return(0,r.mdx)("wrapper",b({},h,a,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport ComboboxField from \'terra-form-select/lib/ComboboxField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ComboboxFieldExample = () => (\n  <ComboboxField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" required className={cx(\'form-select\')}>\n    <ComboboxField.Option value="xSmall" display="Extra Small" />\n    <ComboboxField.Option value="small" display="Small" />\n    <ComboboxField.Option value="medium" display="Medium" />\n    <ComboboxField.Option value="large" display="Large" />\n    <ComboboxField.Option value="xLarge" display="Extra Large" />\n  </ComboboxField>\n);\n\nexport default ComboboxFieldExample;\n\n')))}v.isMDXComponent=!0;var O=function(e){var l=e.title,a=e.description,r=e.isExpanded;return t.createElement(s.Z,{title:l||"Required Combobox Field",description:a,example:t.createElement(f.Z,null),exampleCssSrc:t.createElement(c.Z,null),exampleSrc:t.createElement(v,null),isExpanded:r})},T=a(50398),C=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},N.apply(this,arguments)}function j(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var w={};function R(e){var l=e.components,a=j(e,C);return(0,r.mdx)("wrapper",N({},w,a,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport ComboboxField from \'terra-form-select/lib/ComboboxField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ComboboxFieldExample = () => (\n  <ComboboxField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" className={cx(\'form-select\')}>\n    <ComboboxField.Option value="xSmall" display="Extra Small" />\n    <ComboboxField.Option value="small" display="Small" />\n    <ComboboxField.Option value="medium" display="Medium" />\n    <ComboboxField.Option value="large" display="Large" />\n    <ComboboxField.Option value="xLarge" display="Extra Large" />\n  </ComboboxField>\n);\n\nexport default ComboboxFieldExample;\n\n')))}R.isMDXComponent=!0;var E=function(e){var l=e.title,a=e.description,r=e.isExpanded;return t.createElement(s.Z,{title:l||"Incomplete Combobox Field",description:a,example:t.createElement(T.Z,null),exampleCssSrc:t.createElement(c.Z,null),exampleSrc:t.createElement(R,null),isExpanded:r})},_=a(78530),S=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},P.apply(this,arguments)}function D(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var q={},W="wrapper";function F(e){var l=e.components,a=D(e,S);return(0,r.mdx)(W,P({},q,a,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)(_.ZP,{mdxType:"PropsTable"},(0,r.mdx)(_.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"allowClear"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether a clear option is available to clear the selection."))),(0,r.mdx)(_.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The select options."))),(0,r.mdx)(_.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"label"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(_.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The field label."))),(0,r.mdx)(_.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"defaultValue"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n  type: 'array',\n],\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))),(0,r.mdx)(_.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"disabled"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the input is disabled."))),(0,r.mdx)(_.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"error"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Error message displayed when the select is invalid."))),(0,r.mdx)(_.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"help"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Help message to display with the select."))),(0,r.mdx)(_.X2,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"hideRequired"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether to hide the required indicator on the label."))),(0,r.mdx)(_.X2,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",(0,r.mdx)("em",{parentName:"p"},"(usage note: ",(0,r.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,r.mdx)(_.X2,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"isInline"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))),(0,r.mdx)(_.X2,{key:"ROW11",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"isInvalid"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))),(0,r.mdx)(_.X2,{key:"ROW12",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"isLabelHidden"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))),(0,r.mdx)(_.X2,{key:"ROW13",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"isTouchAccessible"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Ensures touch accessibility by rendering the dropdown inline without a portal."),(0,r.mdx)("p",null,"Note: When enabled the dropdown will clip if rendered within a container that has an overflow: hidden ancestor.\nThe dropdown may also appear beneath content if rendered within a container that has an overflow: auto ancestor."))),(0,r.mdx)(_.X2,{key:"ROW14",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"labelAttrs"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Additional attributes to spread onto the label."))),(0,r.mdx)(_.X2,{key:"ROW15",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"maxHeight"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The max height of the dropdown."))),(0,r.mdx)(_.X2,{key:"ROW16",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"maxWidth"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Set the max-width of a field using ",(0,r.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,r.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,r.mdx)(_.X2,{key:"ROW17",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"onChange"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Callback function triggered when the select value changes. function(value)"))),(0,r.mdx)(_.X2,{key:"ROW18",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"placeholder"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Placeholder text."))),(0,r.mdx)(_.X2,{key:"ROW19",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"required"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field is required."))),(0,r.mdx)(_.X2,{key:"ROW20",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"selectAttrs"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Additional attributes to spread onto the select."))),(0,r.mdx)(_.X2,{key:"ROW21",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"selectId"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(_.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))),(0,r.mdx)(_.X2,{key:"ROW22",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"showOptional"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))),(0,r.mdx)(_.X2,{key:"ROW23",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"value"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n  type: 'array',\n],\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers.")))))}F.isMDXComponent=!0;var I=["components"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},k.apply(this,arguments)}function M(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var L={},X="wrapper";function V(e){var l=e.components,a=M(e,I);return(0,r.mdx)(X,k({},L,a,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)(n.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-form-combobox-field"},"Terra Form Combobox Field"),(0,r.mdx)("p",null,"A convenience wrapper assembling a ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select/src/Combobox.jsx"},"terra-form-select Combobox")," within a ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field"),"."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ComboboxField from 'terra-form-select/lib/ComboboxField';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(x,{title:"Combobox Field Example",mdxType:"ComboboxFieldExample"}),(0,r.mdx)(O,{title:"Required Combobox Field Example",mdxType:"RequiredComboboxFieldExample"}),(0,r.mdx)(E,{title:"Incomplete Combobox Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteComboboxFieldExample"}),(0,r.mdx)("h2",{id:"combobox-field-props"},"Combobox Field Props"),(0,r.mdx)(F,{mdxType:"ComboboxFieldPropsTable"}))}V.isMDXComponent=!0},35951:function(e,l,a){a.d(l,{Z:function(){return m}});a(67294);var t=a(81254),r=["components"];function n(){return n=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},n.apply(this,arguments)}function d(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o={},i="wrapper";function m(e){var l=e.components,a=d(e,r);return(0,t.mdx)(i,n({},o,a,{components:l,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .form-select {\n    max-width: 300px;\n  }\n\n  .controlled-button {\n    margin: 5px;\n  }\n}\n\n")))}m.isMDXComponent=!0},59385:function(e,l,a){a.d(l,{C:function(){return n}});var t=a(67294),r=a(22863),n=function(e){var l=e.url;return t.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.50.0",url:l})}},68825:function(e,l,a){l.Z=void 0;var t=o(a(67294)),r=o(a(48478)),n=o(a(47166)),d=o(a(56014));function o(e){return e&&e.__esModule?e:{default:e}}var i=n.default.bind(d.default);l.Z=function(){return t.default.createElement(r.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:i("form-select")},t.default.createElement(r.default.Option,{value:"xSmall",display:"Extra Small"}),t.default.createElement(r.default.Option,{value:"small",display:"Small"}),t.default.createElement(r.default.Option,{value:"medium",display:"Medium"}),t.default.createElement(r.default.Option,{value:"large",display:"Large"}),t.default.createElement(r.default.Option,{value:"xLarge",display:"Extra Large"}))}},50398:function(e,l,a){l.Z=void 0;var t=o(a(67294)),r=o(a(48478)),n=o(a(47166)),d=o(a(56014));function o(e){return e&&e.__esModule?e:{default:e}}var i=n.default.bind(d.default);l.Z=function(){return t.default.createElement(r.default,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",className:i("form-select")},t.default.createElement(r.default.Option,{value:"xSmall",display:"Extra Small"}),t.default.createElement(r.default.Option,{value:"small",display:"Small"}),t.default.createElement(r.default.Option,{value:"medium",display:"Medium"}),t.default.createElement(r.default.Option,{value:"large",display:"Large"}),t.default.createElement(r.default.Option,{value:"xLarge",display:"Extra Large"}))}},21319:function(e,l,a){l.Z=void 0;var t=o(a(67294)),r=o(a(48478)),n=o(a(47166)),d=o(a(56014));function o(e){return e&&e.__esModule?e:{default:e}}var i=n.default.bind(d.default);l.Z=function(){return t.default.createElement(r.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",required:!0,className:i("form-select")},t.default.createElement(r.default.Option,{value:"xSmall",display:"Extra Small"}),t.default.createElement(r.default.Option,{value:"small",display:"Small"}),t.default.createElement(r.default.Option,{value:"medium",display:"Medium"}),t.default.createElement(r.default.Option,{value:"large",display:"Large"}),t.default.createElement(r.default.Option,{value:"xLarge",display:"Extra Large"}))}},48478:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=p(a(67294)),r=p(a(45697)),n=p(a(65318)),d=p(a(74854)),o=p(a(97574)),i=p(a(4626)),m=["allowClear","children","defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"];function p(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},u.apply(this,arguments)}function s(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c={allowClear:r.default.bool,children:r.default.node,label:r.default.string.isRequired,defaultValue:r.default.oneOfType([r.default.string,r.default.number,r.default.array]),disabled:r.default.bool,error:r.default.node,help:r.default.node,hideRequired:r.default.bool,isIncomplete:r.default.bool,isInline:r.default.bool,isInvalid:r.default.bool,isLabelHidden:r.default.bool,isTouchAccessible:r.default.bool,labelAttrs:r.default.object,maxHeight:r.default.number,maxWidth:r.default.string,onChange:r.default.func,placeholder:r.default.string,required:r.default.bool,selectAttrs:r.default.object,selectId:r.default.string.isRequired,showOptional:r.default.bool,value:r.default.oneOfType([r.default.string,r.default.number,r.default.array])},x={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isTouchAccessible:!1,isLabelHidden:!1,labelAttrs:{},maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},f=function(e){var l,a=e.allowClear,r=e.children,o=e.defaultValue,i=e.disabled,p=e.error,c=e.help,x=e.hideRequired,f=e.isIncomplete,y=e.isInline,b=e.isInvalid,g=e.isLabelHidden,h=e.isTouchAccessible,v=e.label,O=e.labelAttrs,T=e.maxHeight,C=e.maxWidth,N=e.onChange,j=e.placeholder,w=e.required,R=e.selectAttrs,E=e.selectId,_=e.showOptional,S=e.value,P=s(e,m);return c&&p&&b?l="".concat(E,"-error ").concat(E,"-help"):(c&&(l="".concat(E,"-help")),p&&b&&(l="".concat(E,"-error"))),t.default.createElement(n.default,u({},P,{label:v,labelAttrs:O,error:p,help:c,hideRequired:x,required:w,showOptional:_,isInvalid:b,isInline:y,isLabelHidden:g,htmlFor:E,maxWidth:C}),t.default.createElement(d.default,u({},R,{ariaLabel:v,allowClear:a,"aria-describedby":l,disabled:R.disabled||i,inputId:E,isIncomplete:f,isInvalid:b,isTouchAccessible:h,defaultValue:o,maxHeight:T||R.maxHeight,onChange:N,placeholder:j,required:w,value:S}),r))};f.propTypes=c,f.defaultProps=x,f.Option=i.default,f.OptGroup=o.default;l.default=f},40500:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=m(a(67294)),r=m(a(45697)),n=m(a(47166)),d=m(a(50026)),o=a(25387),i=m(a(45981));function m(e){return e&&e.__esModule?e:{default:e}}var p=n.default.bind(i.default),u={noResultContent:r.default.node,value:r.default.oneOfType([r.default.number,r.default.string])},s=function(e){var l=e.noResultContent,a=e.value,r=t.default.useContext(d.default);return t.default.createElement("div",{role:"option",className:p("no-results",r.className),"aria-selected":"false"},l||t.default.createElement(o.FormattedMessage,{id:"Terra.form.select.noResults",values:{text:a}}))};s.propTypes=u;l.default=s},32634:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=p(a(67294)),r=p(a(45697)),n=p(a(94184)),d=p(a(47166)),o=p(a(50026)),i=p(a(16749)),m=["children","disableStripes","paddingStyle"];function p(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},u.apply(this,arguments)}function s(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=d.default.bind(i.default),x={children:r.default.node.isRequired,disableStripes:r.default.bool,paddingStyle:r.default.oneOf(["none","standard","compact"])},f=function(e){var l=e.children,a=e.disableStripes,r=e.paddingStyle,d=s(e,m),i=t.default.useContext(o.default),p=(0,n.default)(c("table",{striped:!a},{"padding-standard":"standard"===r},{"padding-compact":"compact"===r},i.className),d.className);return t.default.createElement("table",u({},d,{className:p}),l)};f.propTypes=x,f.defaultProps={disableStripes:!1,paddingStyle:"none"};l.default=f},80196:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=d(a(67294)),r=d(a(45697)),n=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i={children:r.default.node},m=function(e){var l=e.children,a=o(e,n);return t.default.createElement("tbody",a,l)};m.propTypes=i,m.defaultProps={children:[]};l.default=m},8685:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=d(a(67294)),r=d(a(45697)),n=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i={children:r.default.node},m=function(e){var l=e.children,a=o(e,n);return t.default.createElement("td",a,l)};m.propTypes=i,m.defaultProps={children:[]};l.default=m},19852:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=o(a(67294)),r=o(a(45697)),n=o(a(29805)),d=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m={children:r.default.node},p=function(e){var l=e.children,a=i(e,d);return t.default.createElement("thead",a,t.default.createElement("tr",null,n.default.addScope(l,"col")))};p.propTypes=m,p.defaultProps={children:[]};l.default=p},38880:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=d(a(67294)),r=d(a(45697)),n=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i={children:r.default.node},m=function(e){var l=e.children,a=o(e,n);return t.default.createElement("th",a,l)};m.propTypes=i,m.defaultProps={children:[]};l.default=m},70829:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=m(a(67294)),r=m(a(45697)),n=m(a(47166)),d=m(a(16749)),o=m(a(29805)),i=["children"];function m(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},p.apply(this,arguments)}function u(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.default.bind(d.default),c={children:r.default.node},x=function(e){var l=e.children,a=u(e,i),r=s(["row"]);return t.default.createElement("tr",p({},a,{className:a.className?"".concat(r," ").concat(a.className):r}),o.default.addScope(l,"row"))};x.propTypes=c,x.defaultProps={children:[]};l.default=x},29805:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t,r=(t=a(67294))&&t.__esModule?t:{default:t};var n={addScope:function(e,l){var a=[];return r.default.Children.forEach(e,(function(e){a.push(r.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?l:void 0}))})),a}};l.default=n},37515:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"Body",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(l,"Cell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(l,"Header",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(l,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(l,"Row",{enumerable:!0,get:function(){return n.default}}),l.default=void 0;var t=m(a(32634)),r=m(a(80196)),n=m(a(70829)),d=m(a(8685)),o=m(a(19852)),i=m(a(38880));function m(e){return e&&e.__esModule?e:{default:e}}l.default=t.default},13810:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=n(a(67294)),r=n(a(21969));function n(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d.apply(this,arguments)}var o=function(e){var l=d({},e);return t.default.createElement(r.default,l,t.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};l.default=o},56014:function(e,l,a){a.r(l),l.default={"form-select":"FormSelectDocCommon-module__form-select___tD5wJ","controlled-button":"FormSelectDocCommon-module__controlled-button___ByKvi"}},45981:function(e,l,a){a.r(l),l.default={"clinical-lowlight-theme":"_NoResults-module__clinical-lowlight-theme___-XlVf","orion-fusion-theme":"_NoResults-module__orion-fusion-theme___tnsoS","no-results":"_NoResults-module__no-results___u1T4I"}},16749:function(e,l,a){a.r(l),l.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);