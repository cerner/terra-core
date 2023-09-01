"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[3062],{32651:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ce}});var l=t(67294),a=t(81254),r=t(59385),o=t(93449),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},d.apply(this,arguments)}function m(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p={};function s(e){var n=e.components,t=m(e,i);return(0,a.mdx)("wrapper",d({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ControlledExample = () => {\n  const [value, setValue] = useState('volvo');\n\n  const clickHandler = (selectedValue) => {\n    setValue(selectedValue);\n  };\n\n  return (\n    <>\n      <NativeSelect\n        ariaLabel=\"Controlled Select Example\"\n        onChange={event => setValue(event.currentTarget.value)}\n        options={[\n          { value: 'volvo', display: 'Volvo' },\n          { value: 'saab', display: 'Saab' },\n          { value: 'mercedes', display: 'Mercedes' },\n          { value: 'audi', display: 'Audi' },\n        ]}\n        value={value}\n        className={cx('form-select')}\n      />\n      <button type=\"button\" className={cx('controlled-button')} onClick={() => clickHandler()}>Clear</button>\n      <button type=\"button\" className={cx('controlled-button')} onClick={() => clickHandler('mercedes')}>Set Mercedes</button>\n    </>\n  );\n};\n\nexport default ControlledExample;\n\n")))}s.isMDXComponent=!0;var c=t(49271),u=t(35951),x=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:n||"Controlled",description:t,example:l.createElement(o.Z,null),exampleCssSrc:l.createElement(u.Z,null),exampleSrc:l.createElement(s,null),isExpanded:a})},y=t(1308),f=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},v.apply(this,arguments)}function b(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g={};function O(e){var n=e.components,t=b(e,f);return(0,a.mdx)("wrapper",v({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst DisabledExample = () => (\n  <NativeSelect\n    ariaLabel=\"Disabled Example\"\n    disabled\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    className={cx('form-select')}\n  />\n);\n\nexport default DisabledExample;\n\n")))}O.isMDXComponent=!0;var T=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:n||"Disabled",description:t,example:l.createElement(y.Z,null),exampleCssSrc:l.createElement(u.Z,null),exampleSrc:l.createElement(O,null),isExpanded:a})},h=t(75072),N=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},C.apply(this,arguments)}function S(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var E={};function j(e){var n=e.components,t=S(e,N);return(0,a.mdx)("wrapper",C({},E,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst IncompleteExample = () => (\n  <NativeSelect\n    ariaLabel=\"Incomplete Example\"\n    isIncomplete\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    required\n    className={cx('form-select')}\n  />\n);\n\nexport default IncompleteExample;\n\n")))}j.isMDXComponent=!0;var D=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:n||"Incomplete",description:t,example:l.createElement(h.Z,null),exampleCssSrc:l.createElement(u.Z,null),exampleSrc:l.createElement(j,null),isExpanded:a})},w=t(11597),R=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},P.apply(this,arguments)}function M(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var k={};function W(e){var n=e.components,t=M(e,R);return(0,a.mdx)("wrapper",P({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst InvalidExample = () => (\n  <NativeSelect\n    ariaLabel=\"Invalid Example\"\n    isInvalid\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    className={cx('form-select')}\n  />\n);\n\nexport default InvalidExample;\n\n")))}W.isMDXComponent=!0;var Z=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:n||"Invalid",description:t,example:l.createElement(w.Z,null),exampleCssSrc:l.createElement(u.Z,null),exampleSrc:l.createElement(W,null),isExpanded:a})},q=t(11347),X=["components"];function V(){return V=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},V.apply(this,arguments)}function I(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var L={};function A(e){var n=e.components,t=I(e,X);return(0,a.mdx)("wrapper",V({},L,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst OptGroupExample = () => (\n  <NativeSelect\n    ariaLabel=\"OptGroup Example\"\n    options={[\n      {\n        display: 'Swedish Cars',\n        options: [\n          { value: 'volvo', display: 'Volvo' },\n          { value: 'saab', display: 'Saab' },\n        ],\n      },\n      {\n        display: 'German Cars',\n        options: [\n          { value: 'mercedes', display: 'Mercedes' },\n          { value: 'audi', display: 'Audi' },\n        ],\n      },\n    ]}\n    className={cx('form-select')}\n  />\n);\n\nexport default OptGroupExample;\n\n")))}A.isMDXComponent=!0;var F=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:n||"Opt Group",description:t,example:l.createElement(q.Z,null),exampleCssSrc:l.createElement(u.Z,null),exampleSrc:l.createElement(A,null),isExpanded:a})},_=t(93564),G=["components"];function U(){return U=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},U.apply(this,arguments)}function z(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var B={};function H(e){var n=e.components,t=z(e,G);return(0,a.mdx)("wrapper",U({},B,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst FilterStyleExample = () => (\n  <NativeSelect\n    ariaLabel=\"Default Placeholder Example\"\n    isFilterStyle\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    className={cx('form-select')}\n  />\n);\n\nexport default FilterStyleExample;\n\n")))}H.isMDXComponent=!0;var $=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:n||"Filter Style",description:t,example:l.createElement(_.Z,null),exampleCssSrc:l.createElement(u.Z,null),exampleSrc:l.createElement(H,null),isExpanded:a})},J=t(35382),K=["components"];function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Q.apply(this,arguments)}function Y(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var ee={};function ne(e){var n=e.components,t=Y(e,K);return(0,a.mdx)("wrapper",Q({},ee,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst UncontrolledExample = () => (\n  <NativeSelect\n    ariaLabel=\"Uncontrolled Example\"\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    className={cx('form-select')}\n  />\n);\n\nexport default UncontrolledExample;\n\n")))}ne.isMDXComponent=!0;var te=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:n||"Uncontrolled",description:t,example:l.createElement(J.Z,null),exampleCssSrc:l.createElement(u.Z,null),exampleSrc:l.createElement(ne,null),isExpanded:a})},le=t(75613),ae=["components"];function re(){return re=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},re.apply(this,arguments)}function oe(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var ie={};function de(e){var n=e.components,t=oe(e,ae);return(0,a.mdx)("wrapper",re({},ie,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst DisabledOptionsExample = () => (\n  <NativeSelect\n    ariaLabel=\"Uncontrolled Example\"\n    options={[\n      { disabled: true, value: 'volvo', display: 'Volvo' },\n      { disabled: true, value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    className={cx('form-select')}\n  />\n);\n\nexport default DisabledOptionsExample;\n\n")))}de.isMDXComponent=!0;var me=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:n||"Disabled Options",description:t,example:l.createElement(le.Z,null),exampleCssSrc:l.createElement(u.Z,null),exampleSrc:l.createElement(de,null),isExpanded:a})},pe=t(78530),se=["components"];function ce(){return ce=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},ce.apply(this,arguments)}function ue(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var xe={},ye="wrapper";function fe(e){var n=e.components,t=ue(e,se);return(0,a.mdx)(ye,ce({},xe,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(pe.ZP,{mdxType:"PropsTable"},(0,a.mdx)(pe.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"ariaDescribedBy"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The string containing ids for elements to describe the select."))),(0,a.mdx)(pe.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(pe.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The aria label string value for the select."))),(0,a.mdx)(pe.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"attrs"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Additional attributes to spread directly onto the html select node.\nThis prop is provided as standard customProps are spread onto the outer containing element which is not the html select in this case."))),(0,a.mdx)(pe.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"defaultValue"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'number',\n  type: 'string',\n],\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The default value of the select. Can be a string, or number."))),(0,a.mdx)(pe.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"disabled"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether the input is disabled."))),(0,a.mdx)(pe.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"id"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The Select identifier to be applied to the html select node."))),(0,a.mdx)(pe.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"isFilterStyle"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether the select input should use the filter style display, forcing a value to always be selected.\nThis also removes the placeholder and removes the ability for user to clear the value, returning the select to browser-native behavior."))),(0,a.mdx)(pe.X2,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"isInvalid"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether the input is invalid."))),(0,a.mdx)(pe.X2,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",(0,a.mdx)("em",{parentName:"p"},"(usage note: ",(0,a.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,a.mdx)(pe.X2,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"onChange"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when the select value changes. function(event)"))),(0,a.mdx)(pe.X2,{key:"ROW11",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"options"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  unionOf: [\n    type: 'custom',\n    type: 'custom',\n  ],\n}],\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The array of select options and opt groups."))),(0,a.mdx)(pe.X2,{key:"ROW12",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"refCallback"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback ref to pass into the select input component."))),(0,a.mdx)(pe.X2,{key:"ROW13",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"required"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether the field is required."))),(0,a.mdx)(pe.X2,{key:"ROW14",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"value"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'number',\n  type: 'string',\n],\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The value of the select. Can be a string or number.")))))}fe.isMDXComponent=!0;var ve=t(36648),be=t(25253),ge=["components"];function Oe(){return Oe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Oe.apply(this,arguments)}function Te(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var he={},Ne="wrapper";function Ce(e){var n=e.components,t=Te(e,ge);return(0,a.mdx)(Ne,Oe({},he,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-form-native-select"},"Terra Form Native Select"),(0,a.mdx)("p",null,"The NativeSelect component provides a visually-masked browser native select control to align closer with theme styles."),(0,a.mdx)("p",null,"Accessibility issues exist with custom select implementations, so the NativeSelect should be the used exclusively instead of the current default select implementation."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"},"View component source code")),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(te,{title:"Create an Uncontrolled Select",description:"An example of implementing an uncontrolled Select.",mdxType:"UncontrolledExample"}),(0,a.mdx)(x,{title:"Create a Controlled Select",description:"An example of implementing a controlled Select.",mdxType:"ControlledExample"}),(0,a.mdx)(F,{title:"OptGroup",description:"An OptGroup provides a way to group options together.",mdxType:"OptGroupExample"}),(0,a.mdx)(T,{title:"Disabled",mdxType:"DisabledExample"}),(0,a.mdx)(D,{title:"Incomplete",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteExample"}),(0,a.mdx)(Z,{title:"Invalid",description:"Applies theme-specific styling for invalid. Will also display error text when used with a Field.",mdxType:"InvalidExample"}),(0,a.mdx)($,{title:"Filter Style",description:"For special use: an example of implementing a select outside of form fields (e.g. in a filter bar), which removes the placeholder, prevents the ability to be cleared, and forces a value to always be selected.",mdxType:"FilterStyleExample"}),(0,a.mdx)(me,{title:"Disabled Options",description:"An example of implementing Select with disabled options",mdxType:"DisabledOptionsExample"}),(0,a.mdx)("h2",{id:"props"},"Props"),(0,a.mdx)("h3",{id:"native-select-option"},"Native Select Option"),(0,a.mdx)(ve.Z,{mdxType:"NativeOptionsPropsTable"}),(0,a.mdx)("h3",{id:"native-select-optgroup"},"Native Select OptGroup"),(0,a.mdx)(be.Z,{mdxType:"NativeOptGroupsPropsTable"}),(0,a.mdx)("h3",{id:"native-select"},"Native Select"),(0,a.mdx)(fe,{mdxType:"NativeSelectPropsTable"}))}Ce.isMDXComponent=!0},25253:function(e,n,t){t.d(n,{Z:function(){return p}});t(67294);var l=t(81254),a=t(78530),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={},m="wrapper";function p(e){var n=e.components,t=i(e,r);return(0,l.mdx)(m,o({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)(a.ZP,{mdxType:"PropsTable"},(0,l.mdx)(a.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(a.O,{mdxType:"PropNameCell"},"display"),(0,l.mdx)(a.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(a.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(a.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(a.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The option display."))),(0,l.mdx)(a.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(a.O,{mdxType:"PropNameCell"},"disabled"),(0,l.mdx)(a.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(a.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(a.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(a.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether the optgroup is disabled."))),(0,l.mdx)(a.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(a.O,{mdxType:"PropNameCell"},"options"),(0,l.mdx)(a.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,l.mdx)(a.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(a.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(a.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The array of select options.")))))}p.isMDXComponent=!0},36648:function(e,n,t){t.d(n,{Z:function(){return p}});t(67294);var l=t(81254),a=t(78530),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={},m="wrapper";function p(e){var n=e.components,t=i(e,r);return(0,l.mdx)(m,o({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)(a.ZP,{mdxType:"PropsTable"},(0,l.mdx)(a.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(a.O,{mdxType:"PropNameCell"},"display"),(0,l.mdx)(a.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(a.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(a.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(a.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The option display."))),(0,l.mdx)(a.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(a.O,{mdxType:"PropNameCell"},"disabled"),(0,l.mdx)(a.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(a.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(a.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(a.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether the option is disabled."))),(0,l.mdx)(a.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(a.O,{mdxType:"PropNameCell"},"value"),(0,l.mdx)(a.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'number',\n  type: 'string',\n],\n"))),(0,l.mdx)(a.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(a.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(a.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The option value.")))))}p.isMDXComponent=!0},93449:function(e,n,t){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}n.Z=void 0;var a=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=m(n);if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,t&&t.set(e,a);return a}(t(67294)),r=d(t(47166)),o=d(t(81229)),i=d(t(56014));function d(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(m=function(e){return e?t:n})(e)}function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var l,a,r,o,i=[],d=!0,m=!1;try{if(r=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;d=!1}else for(;!(d=(l=r.call(t)).done)&&(i.push(l.value),i.length!==n);d=!0);}catch(e){m=!0,a=e}finally{try{if(!d&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(m)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,l=new Array(n);t<n;t++)l[t]=e[t];return l}var c=r.default.bind(i.default),u=function(){var e=p((0,a.useState)("volvo"),2),n=e[0],t=e[1],l=function(e){t(e)};return a.default.createElement(a.default.Fragment,null,a.default.createElement(o.default,{ariaLabel:"Controlled Select Example",onChange:function(e){return t(e.currentTarget.value)},options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],value:n,className:c("form-select")}),a.default.createElement("button",{type:"button",className:c("controlled-button"),onClick:function(){return l()}},"Clear"),a.default.createElement("button",{type:"button",className:c("controlled-button"),onClick:function(){return l("mercedes")}},"Set Mercedes"))};n.Z=u},1308:function(e,n,t){n.Z=void 0;var l=i(t(67294)),a=i(t(47166)),r=i(t(81229)),o=i(t(56014));function i(e){return e&&e.__esModule?e:{default:e}}var d=a.default.bind(o.default),m=function(){return l.default.createElement(r.default,{ariaLabel:"Disabled Example",disabled:!0,options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],className:d("form-select")})};n.Z=m},75613:function(e,n,t){n.Z=void 0;var l=i(t(67294)),a=i(t(47166)),r=i(t(81229)),o=i(t(56014));function i(e){return e&&e.__esModule?e:{default:e}}var d=a.default.bind(o.default),m=function(){return l.default.createElement(r.default,{ariaLabel:"Uncontrolled Example",options:[{disabled:!0,value:"volvo",display:"Volvo"},{disabled:!0,value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],className:d("form-select")})};n.Z=m},93564:function(e,n,t){n.Z=void 0;var l=i(t(67294)),a=i(t(47166)),r=i(t(81229)),o=i(t(56014));function i(e){return e&&e.__esModule?e:{default:e}}var d=a.default.bind(o.default),m=function(){return l.default.createElement(r.default,{ariaLabel:"Default Placeholder Example",isFilterStyle:!0,options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],className:d("form-select")})};n.Z=m},75072:function(e,n,t){n.Z=void 0;var l=i(t(67294)),a=i(t(47166)),r=i(t(81229)),o=i(t(56014));function i(e){return e&&e.__esModule?e:{default:e}}var d=a.default.bind(o.default),m=function(){return l.default.createElement(r.default,{ariaLabel:"Incomplete Example",isIncomplete:!0,options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],required:!0,className:d("form-select")})};n.Z=m},11597:function(e,n,t){n.Z=void 0;var l=i(t(67294)),a=i(t(47166)),r=i(t(81229)),o=i(t(56014));function i(e){return e&&e.__esModule?e:{default:e}}var d=a.default.bind(o.default),m=function(){return l.default.createElement(r.default,{ariaLabel:"Invalid Example",isInvalid:!0,options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],className:d("form-select")})};n.Z=m},11347:function(e,n,t){n.Z=void 0;var l=i(t(67294)),a=i(t(47166)),r=i(t(81229)),o=i(t(56014));function i(e){return e&&e.__esModule?e:{default:e}}var d=a.default.bind(o.default),m=function(){return l.default.createElement(r.default,{ariaLabel:"OptGroup Example",options:[{display:"Swedish Cars",options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"}]},{display:"German Cars",options:[{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}]}],className:d("form-select")})};n.Z=m},35382:function(e,n,t){n.Z=void 0;var l=i(t(67294)),a=i(t(47166)),r=i(t(81229)),o=i(t(56014));function i(e){return e&&e.__esModule?e:{default:e}}var d=a.default.bind(o.default),m=function(){return l.default.createElement(r.default,{ariaLabel:"Uncontrolled Example",options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],className:d("form-select")})};n.Z=m}}]);