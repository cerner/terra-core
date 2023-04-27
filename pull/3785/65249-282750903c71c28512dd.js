"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[65249],{21878:function(e,l,a){a.r(l),a.d(l,{default:function(){return K}});var t=a(67294),n=a(81254),r=a(59385),d=a(44887),m=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},p.apply(this,arguments)}function i(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o={};function s(e){var l=e.components,a=i(e,m);return(0,n.mdx)("wrapper",p({},o,a,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelectField from 'terra-form-select/lib/native-select/NativeSelectField';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst DefaultFieldExample = () => (\n  <NativeSelectField\n    label=\"Default Field Text\"\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    selectId=\"default-example\"\n    className={cx('form-select')}\n  />\n);\n\nexport default DefaultFieldExample;\n\n")))}s.isMDXComponent=!0;var u=a(49271),x=a(35951),c=function(e){var l=e.title,a=e.description,n=e.isExpanded;return t.createElement(u.Z,{title:l||"Default Field",description:a,example:t.createElement(d.Z,null),exampleCssSrc:t.createElement(x.Z,null),exampleSrc:t.createElement(s,null),isExpanded:n})},y=a(88888),f=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},v.apply(this,arguments)}function b(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var T={};function g(e){var l=e.components,a=b(e,f);return(0,n.mdx)("wrapper",v({},T,a,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelectField from 'terra-form-select/lib/native-select/NativeSelectField';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst RequiredFieldExample = () => (\n  <NativeSelectField\n    label=\"Required Field Text\"\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    required\n    selectId=\"required-example\"\n    className={cx('form-select')}\n  />\n);\n\nexport default RequiredFieldExample;\n\n")))}g.isMDXComponent=!0;var h=function(e){var l=e.title,a=e.description,n=e.isExpanded;return t.createElement(u.Z,{title:l||"Required Field",description:a,example:t.createElement(y.Z,null),exampleCssSrc:t.createElement(x.Z,null),exampleSrc:t.createElement(g,null),isExpanded:n})},O=a(93300),N=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},C.apply(this,arguments)}function R(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var D={};function j(e){var l=e.components,a=R(e,N);return(0,n.mdx)("wrapper",C({},D,a,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelectField from 'terra-form-select/lib/native-select/NativeSelectField';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst IncompleteFieldExample = () => (\n  <NativeSelectField\n    isIncomplete\n    label=\"Incomplete Field Text\"\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    required\n    selectId=\"incomplete-example\"\n    className={cx('form-select')}\n  />\n);\n\nexport default IncompleteFieldExample;\n\n")))}j.isMDXComponent=!0;var S=function(e){var l=e.title,a=e.description,n=e.isExpanded;return t.createElement(u.Z,{title:l||"Incomplete Field",description:a,example:t.createElement(O.Z,null),exampleCssSrc:t.createElement(x.Z,null),exampleSrc:t.createElement(j,null),isExpanded:n})},w=a(52785),E=["components"];function q(){return q=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},q.apply(this,arguments)}function P(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var W={};function F(e){var l=e.components,a=P(e,E);return(0,n.mdx)("wrapper",q({},W,a,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelectField from 'terra-form-select/lib/native-select/NativeSelectField';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst DefaultFieldExamplewithoutPlaceholder = () => (\n  <NativeSelectField\n    label=\"Default Field Text\"\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    selectAttrs={{ isFilterStyle: true }}\n    selectId=\"default-example\"\n    className={cx('form-select')}\n  />\n);\n\nexport default DefaultFieldExamplewithoutPlaceholder;\n\n")))}F.isMDXComponent=!0;var I=function(e){var l=e.title,a=e.description,n=e.isExpanded;return t.createElement(u.Z,{title:l||"Default Fieldwithout Placeholder",description:a,example:t.createElement(w.Z,null),exampleCssSrc:t.createElement(x.Z,null),exampleSrc:t.createElement(F,null),isExpanded:n})},k=a(78530),X=["components"];function V(){return V=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},V.apply(this,arguments)}function M(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var Z={},A="wrapper";function L(e){var l=e.components,a=M(e,X);return(0,n.mdx)(A,V({},Z,a,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)(k.ZP,{mdxType:"PropsTable"},(0,n.mdx)(k.X2,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"defaultValue"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'number',\n  type: 'string',\n],\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The default value of the select. Can be a string, or number."))),(0,n.mdx)(k.X2,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"disabled"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the input is disabled."))),(0,n.mdx)(k.X2,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"error"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Error message displayed when the select is invalid."))),(0,n.mdx)(k.X2,{key:"ROW4",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"help"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Help message to display with the select."))),(0,n.mdx)(k.X2,{key:"ROW5",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"hideRequired"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether to hide the required indicator on the label."))),(0,n.mdx)(k.X2,{key:"ROW6",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",(0,n.mdx)("em",{parentName:"p"},"(usage note: ",(0,n.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,n.mdx)(k.X2,{key:"ROW7",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"isInline"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))),(0,n.mdx)(k.X2,{key:"ROW8",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"isLabelHidden"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))),(0,n.mdx)(k.X2,{key:"ROW9",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"isInvalid"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))),(0,n.mdx)(k.X2,{key:"ROW10",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"label"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(k.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The field label."))),(0,n.mdx)(k.X2,{key:"ROW11",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"labelAttrs"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Additional attributes to spread onto the label."))),(0,n.mdx)(k.X2,{key:"ROW12",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"maxWidth"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Set the max-width of a field using ",(0,n.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,n.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,n.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,n.mdx)(k.X2,{key:"ROW13",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"onChange"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Callback function triggered when the select value changes. function(event)"))),(0,n.mdx)(k.X2,{key:"ROW14",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"options"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  unionOf: [\n    type: 'custom',\n    type: 'custom',\n  ],\n}],\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The array of select options and opt groups."))),(0,n.mdx)(k.X2,{key:"ROW15",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"required"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field is required."))),(0,n.mdx)(k.X2,{key:"ROW16",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"selectAttrs"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Additional attributes to spread onto the select."))),(0,n.mdx)(k.X2,{key:"ROW17",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"selectId"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(k.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))),(0,n.mdx)(k.X2,{key:"ROW18",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"showOptional"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))),(0,n.mdx)(k.X2,{key:"ROW19",mdxType:"Row"},(0,n.mdx)(k.O,{mdxType:"PropNameCell"},"value"),(0,n.mdx)(k.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'number',\n  type: 'string',\n],\n"))),(0,n.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The value of the select. Can be a string or number.")))))}L.isMDXComponent=!0;var _=a(36648),H=a(25253),z=["components"];function B(){return B=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},B.apply(this,arguments)}function G(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var U={},J="wrapper";function K(e){var l=e.components,a=G(e,z);return(0,n.mdx)(J,B({},U,a,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-form-native-select-field"},"Terra Form Native Select Field"),(0,n.mdx)("p",null,"A convenience wrapper assembling a ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"},"terra-form-select")," within a ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-field"},"terra-form-field"),"."),(0,n.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Install with ",(0,n.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),(0,n.mdx)("h2",{id:"component-features"},"Component Features"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"},"View component source code")),(0,n.mdx)("h2",{id:"examples"},"Examples"),(0,n.mdx)(c,{title:"Select Field Example",mdxType:"DefaultFieldExample"}),(0,n.mdx)(h,{title:"Required Select Field Example",mdxType:"RequiredFieldExample"}),(0,n.mdx)(S,{title:"Incomplete Select Field Example",mdxType:"IncompleteFieldExample"}),(0,n.mdx)(I,{title:"Select Field Example without placeholder",mdxType:"DefaultFieldExamplewithoutPlaceholder"}),(0,n.mdx)("h2",{id:"props"},"Props"),(0,n.mdx)("h3",{id:"native-select-option"},"Native Select Option"),(0,n.mdx)(_.Z,{mdxType:"NativeOptionsPropsTable"}),(0,n.mdx)("h3",{id:"native-select-optgroup"},"Native Select OptGroup"),(0,n.mdx)(H.Z,{mdxType:"NativeOptGroupsPropsTable"}),(0,n.mdx)("h3",{id:"native-select-field"},"Native Select Field"),(0,n.mdx)(L,{mdxType:"NativeSelectFieldPropsTable"}))}K.isMDXComponent=!0},25253:function(e,l,a){a.d(l,{Z:function(){return o}});a(67294);var t=a(81254),n=a(78530),r=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d.apply(this,arguments)}function m(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p={},i="wrapper";function o(e){var l=e.components,a=m(e,r);return(0,t.mdx)(i,d({},p,a,{components:l,mdxType:"MDXLayout"}),(0,t.mdx)(n.ZP,{mdxType:"PropsTable"},(0,t.mdx)(n.X2,{key:"ROW1",mdxType:"Row"},(0,t.mdx)(n.O,{mdxType:"PropNameCell"},"display"),(0,t.mdx)(n.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,t.mdx)(n.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,t.mdx)(n.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("p",null,"none")),(0,t.mdx)(n.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"The option display."))),(0,t.mdx)(n.X2,{key:"ROW2",mdxType:"Row"},(0,t.mdx)(n.O,{mdxType:"PropNameCell"},"disabled"),(0,t.mdx)(n.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,t.mdx)(n.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(n.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("p",null,"none")),(0,t.mdx)(n.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Whether the optgroup is disabled."))),(0,t.mdx)(n.X2,{key:"ROW3",mdxType:"Row"},(0,t.mdx)(n.O,{mdxType:"PropNameCell"},"options"),(0,t.mdx)(n.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,t.mdx)(n.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,t.mdx)(n.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("p",null,"none")),(0,t.mdx)(n.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"The array of select options.")))))}o.isMDXComponent=!0},36648:function(e,l,a){a.d(l,{Z:function(){return o}});a(67294);var t=a(81254),n=a(78530),r=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d.apply(this,arguments)}function m(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p={},i="wrapper";function o(e){var l=e.components,a=m(e,r);return(0,t.mdx)(i,d({},p,a,{components:l,mdxType:"MDXLayout"}),(0,t.mdx)(n.ZP,{mdxType:"PropsTable"},(0,t.mdx)(n.X2,{key:"ROW1",mdxType:"Row"},(0,t.mdx)(n.O,{mdxType:"PropNameCell"},"display"),(0,t.mdx)(n.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,t.mdx)(n.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,t.mdx)(n.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("p",null,"none")),(0,t.mdx)(n.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"The option display."))),(0,t.mdx)(n.X2,{key:"ROW2",mdxType:"Row"},(0,t.mdx)(n.O,{mdxType:"PropNameCell"},"disabled"),(0,t.mdx)(n.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,t.mdx)(n.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(n.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("p",null,"none")),(0,t.mdx)(n.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Whether the option is disabled."))),(0,t.mdx)(n.X2,{key:"ROW3",mdxType:"Row"},(0,t.mdx)(n.O,{mdxType:"PropNameCell"},"value"),(0,t.mdx)(n.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'number',\n  type: 'string',\n],\n"))),(0,t.mdx)(n.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,t.mdx)(n.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("p",null,"none")),(0,t.mdx)(n.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"The option value.")))))}o.isMDXComponent=!0},44887:function(e,l,a){l.Z=void 0;var t=m(a(67294)),n=m(a(47166)),r=m(a(36594)),d=m(a(56014));function m(e){return e&&e.__esModule?e:{default:e}}var p=n.default.bind(d.default),i=function(){return t.default.createElement(r.default,{label:"Default Field Text",options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],selectId:"default-example",className:p("form-select")})};l.Z=i},52785:function(e,l,a){l.Z=void 0;var t=m(a(67294)),n=m(a(47166)),r=m(a(36594)),d=m(a(56014));function m(e){return e&&e.__esModule?e:{default:e}}var p=n.default.bind(d.default),i=function(){return t.default.createElement(r.default,{label:"Default Field Text",options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],selectAttrs:{isFilterStyle:!0},selectId:"default-example",className:p("form-select")})};l.Z=i},93300:function(e,l,a){l.Z=void 0;var t=m(a(67294)),n=m(a(47166)),r=m(a(36594)),d=m(a(56014));function m(e){return e&&e.__esModule?e:{default:e}}var p=n.default.bind(d.default),i=function(){return t.default.createElement(r.default,{isIncomplete:!0,label:"Incomplete Field Text",options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],required:!0,selectId:"incomplete-example",className:p("form-select")})};l.Z=i},88888:function(e,l,a){l.Z=void 0;var t=m(a(67294)),n=m(a(47166)),r=m(a(36594)),d=m(a(56014));function m(e){return e&&e.__esModule?e:{default:e}}var p=n.default.bind(d.default),i=function(){return t.default.createElement(r.default,{label:"Required Field Text",options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],required:!0,selectId:"required-example",className:p("form-select")})};l.Z=i},36594:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=i(a(67294)),n=i(a(45697)),r=i(a(65318)),d=i(a(81229)),m=a(7461),p=["defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isLabelHidden","isInvalid","label","labelAttrs","maxWidth","onChange","options","required","selectAttrs","selectId","showOptional","value"];function i(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},o.apply(this,arguments)}function s(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u={defaultValue:n.default.oneOfType([n.default.number,n.default.string]),disabled:n.default.bool,error:n.default.node,help:n.default.node,hideRequired:n.default.bool,isIncomplete:n.default.bool,isInline:n.default.bool,isLabelHidden:n.default.bool,isInvalid:n.default.bool,label:n.default.node.isRequired,labelAttrs:n.default.object,maxWidth:n.default.string,onChange:n.default.func,options:n.default.arrayOf(n.default.oneOfType([m.optionPropType,m.optGroupPropType])),required:n.default.bool,selectAttrs:n.default.object,selectId:n.default.string.isRequired,showOptional:n.default.bool,value:n.default.oneOfType([n.default.number,n.default.string])},x=function(e){var l,a=e.defaultValue,n=e.disabled,m=e.error,i=e.help,u=e.hideRequired,x=e.isIncomplete,c=e.isInline,y=e.isLabelHidden,f=e.isInvalid,v=e.label,b=e.labelAttrs,T=e.maxWidth,g=e.onChange,h=e.options,O=e.required,N=e.selectAttrs,C=e.selectId,R=e.showOptional,D=e.value,j=s(e,p),S=i?t.default.createElement("span",null,i):void 0;return i&&m&&f?l="".concat(C,"-error ").concat(C,"-help"):(i&&(l="".concat(C,"-help")),m&&f&&(l="".concat(C,"-error"))),t.default.createElement(r.default,o({},j,{label:v,labelAttrs:b,error:m,help:S,hideRequired:u,required:O,showOptional:R,isInvalid:f,isInline:c,isLabelHidden:y,htmlFor:C,maxWidth:T}),t.default.createElement(d.default,{attrs:N,id:C,ariaDescribedBy:l,ariaLabel:v,disabled:n,isIncomplete:x,isInvalid:f,defaultValue:a,required:O,onChange:g,options:h,value:D}))};x.propTypes=u,x.defaultProps={disabled:!1,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,required:!1,showOptional:!1};var c=x;l.default=c}}]);