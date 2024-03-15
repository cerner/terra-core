"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[1625],{55713:function(e,t,a){var l=a(24994);t.A=void 0;var r=l(a(96540)),n=l(a(5556)),d=l(a(67967)),m=l(a(25642)),o=d.default.bind(m.default),p={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},u=function(e){var t=e.src,a=e.name,l=e.url,n=e.version,d=r.default.createElement("a",{className:o("badge"),href:l||"https://www.npmjs.org/package/".concat(a,"/v/").concat(n)},r.default.createElement("span",{className:o("badge-name")},l?"package":"npm"),r.default.createElement("span",{className:o("badge-version")},"v".concat(n))),m=t?r.default.createElement("a",{className:o("badge"),href:t},r.default.createElement("span",{className:o("badge-name")},"github"),r.default.createElement("span",{className:o("badge-version")},"source")):void 0;return r.default.createElement("div",{className:o("badge-container")},d,m)};u.propTypes=p;t.A=u},201:function(e,t,a){var l=a(24994),r=a(73738);t.A=void 0;var n=l(a(85715)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var a=x(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=n?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(l,d,m):l[d]=e[d]}return l.default=e,a&&a.set(e,l),l}(a(96540)),m=l(a(5556)),o=l(a(67967)),p=a(92912),u=l(a(27166)),i=l(a(62441)),c=a(25966),s=l(a(89986));function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(x=function(e){return e?a:t})(e)}var f=o.default.bind(s.default),y={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},T=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,a=e.exampleSrc,l=e.exampleCssSrc,r=e.title,m=e.description,o=e.isExpanded,s=(0,d.useState)(o),x=(0,n.default)(s,2),y=x[0],b=x[1],v=(0,d.useState)(!1),h=(0,n.default)(v,2),N=h[0],_=h[1],O=d.default.useContext(p.ThemeContext),C=void 0!==l,j=function(){_(!N),y&&b(!y)},w=function(){b(!y),N&&_(!N)},R=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:f("template",O.className)},d.default.createElement("div",{className:f("header")},r&&d.default.createElement("h2",{className:f("title")},r)),d.default.createElement("div",{className:f("content")},m&&d.default.createElement("div",{className:f("description")},m),t),d.default.createElement("div",{className:f("footer")},a?d.default.createElement("div",{className:f("button-container")},C&&d.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":N}),onClick:j,onKeyDown:function(e){return R(e,j)},onBlur:g,onMouseDown:T,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(u.default,{className:f("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(i.default,{className:f("chevron")})),d.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":y}),onClick:w,onKeyDown:function(e){return R(e,w)},onBlur:g,onMouseDown:T,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(u.default,{className:f("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(i.default,{className:f("chevron")}))):null,d.default.createElement("div",null,N&&d.default.createElement("div",{className:f("css")},l),y&&d.default.createElement("div",{className:f("code")},a))))};b.propTypes=y,b.defaultProps={isExpanded:!1};t.A=b},12883:function(e,t,a){var l=a(24994),r=a(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return p.Row}}),t.Ay=t.$d=void 0;var n=c(a(96540)),d=l(a(5556)),m=l(a(67967)),o=a(92912),p=c(a(17568)),u=l(a(89744));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(i=function(e){return e?a:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var a=i(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=n?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(l,d,m):l[d]=e[d]}return l.default=e,a&&a.set(e,l),l}var s=m.default.bind(u.default),x={children:d.default.node},f={isRequired:d.default.bool};(t.dt=function(e){var t=e.children;return n.default.createElement(p.Cell,{className:s("bold")},t)}).propTypes=x,(t.$d=function(e){var t=e.children;return n.default.createElement(p.Cell,{className:s("code-block-override")},t)}).propTypes=x,(t.YZ=function(e){var t=e.isRequired;return n.default.createElement(p.Cell,{className:s([t?["required"]:[]])},t?"required":"optional")}).propTypes=f,(t.NZ=function(e){var t=e.children;return n.default.createElement(p.Cell,{className:s("code-block-override")},t)}).propTypes=x,(t.Hd=function(e){var t=e.children;return n.default.createElement(p.Cell,null,t)}).propTypes=x;var y=function(e){var t=e.children,a=(0,n.useContext)(o.ThemeContext);return n.default.createElement(p.default,{paddingStyle:"compact",className:s("table",a.className)},n.default.createElement(p.Header,{className:s("header")},n.default.createElement(p.HeaderCell,null,"Prop"),n.default.createElement(p.HeaderCell,null,"Type"),n.default.createElement(p.HeaderCell,null,"Required"),n.default.createElement(p.HeaderCell,null,"Default"),n.default.createElement(p.HeaderCell,null,"Description")),n.default.createElement(p.Body,null,t))};y.propTypes=x;t.Ay=y},46897:function(e,t,a){a.r(t),a.d(t,{default:function(){return F}});var l=a(96540),r=a(36665),n=a(9463),d=a(15908),m=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},o.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u={};function i(e){var t=e.components,a=p(e,m);return(0,r.mdx)("wrapper",o({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport TextareaField from 'terra-form-textarea/lib/TextareaField';\n\nconst DefaultTextAreaField = () => (\n  <TextareaField\n    inputId=\"textarea\"\n    label=\"Textarea\"\n    help=\"Note: This is help text\"\n    inputAttrs={{\n      name: 'textarea',\n    }}\n  />\n);\n\nexport default DefaultTextAreaField;\n\n")))}i.isMDXComponent=!0;var c=a(201),s=function(e){var t=e.title,a=e.description,r=e.isExpanded;return l.createElement(c.A,{title:t||"Textarea Field",description:a,example:l.createElement(d.A,null),exampleSrc:l.createElement(i,null),isExpanded:r})},x=a(8879),f=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},y.apply(this,arguments)}function g(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var T={};function b(e){var t=e.components,a=g(e,f);return(0,r.mdx)("wrapper",y({},T,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport TextareaField from 'terra-form-textarea/lib/TextareaField';\n\nconst DefaultTextAreaField = () => (\n  <TextareaField\n    inputId=\"requiredTextarea\"\n    label=\"Required Textarea\"\n    help=\"Note: This is help text\"\n    required\n    inputAttrs={{\n      name: 'requiredTextarea',\n    }}\n  />\n);\n\nexport default DefaultTextAreaField;\n\n")))}b.isMDXComponent=!0;var v=function(e){var t=e.title,a=e.description,r=e.isExpanded;return l.createElement(c.A,{title:t||"Required Textarea Field",description:a,example:l.createElement(x.A,null),exampleSrc:l.createElement(b,null),isExpanded:r})},h=a(38768),N=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},_.apply(this,arguments)}function O(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var C={};function j(e){var t=e.components,a=O(e,N);return(0,r.mdx)("wrapper",_({},C,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport TextareaField from 'terra-form-textarea/lib/TextareaField';\n\nconst DefaultTextAreaField = () => (\n  <TextareaField\n    inputId=\"incompleteTextarea\"\n    label=\"Incomplete Textarea\"\n    help=\"Note: This is help text\"\n    required\n    isIncomplete\n    inputAttrs={{\n      name: 'requiredTextarea',\n    }}\n  />\n);\n\nexport default DefaultTextAreaField;\n\n")))}j.isMDXComponent=!0;var w=function(e){var t=e.title,a=e.description,r=e.isExpanded;return l.createElement(c.A,{title:t||"Incomplete Textarea Field",description:a,example:l.createElement(h.A,null),exampleSrc:l.createElement(j,null),isExpanded:r})},R=a(12883),E=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},P.apply(this,arguments)}function q(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var D={},k="wrapper";function I(e){var t=e.components,a=q(e,E);return(0,r.mdx)(k,P({},D,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(R.Ay,{mdxType:"PropsTable"},(0,r.mdx)(R.fI,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"inputId"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(R.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Id of the input. Populates both the input and the htmlFor prop of the wrapper Field."))),(0,r.mdx)(R.fI,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"label"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(R.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The label of the form control children."))),(0,r.mdx)(R.fI,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"defaultValue"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n],\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The defaultValue of the input field. Use this to create an uncontrolled input."))),(0,r.mdx)(R.fI,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"disabled"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the input is disabled."))),(0,r.mdx)(R.fI,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"error"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Error message for when the input is invalid."))),(0,r.mdx)(R.fI,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"errorIcon"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"<IconError />\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Error Icon to display when the input is invalid."))),(0,r.mdx)(R.fI,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"help"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Help element to display with the input."))),(0,r.mdx)(R.fI,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"hideRequired"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not to hide the required indicator on the label."))),(0,r.mdx)(R.fI,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"inputAttrs"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Attributes to attach to the input object"))),(0,r.mdx)(R.fI,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"isAutoResizable"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the textarea can be auto-resized vertically. ",(0,r.mdx)("em",{parentName:"p"},'(Will be ignored if size attribute is set to "full".)')))),(0,r.mdx)(R.fI,{key:"ROW11",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"isIncomplete"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",(0,r.mdx)("em",{parentName:"p"},"(usage note: ",(0,r.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,r.mdx)(R.fI,{key:"ROW12",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"isInline"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the field is an inline field."))),(0,r.mdx)(R.fI,{key:"ROW13",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"isInvalid"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))),(0,r.mdx)(R.fI,{key:"ROW14",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"isLabelHidden"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility."))),(0,r.mdx)(R.fI,{key:"ROW15",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"labelAttrs"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Attributes to attach to the label."))),(0,r.mdx)(R.fI,{key:"ROW16",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"maxWidth"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Set the max-width of a field using ",(0,r.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,r.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,r.mdx)(R.fI,{key:"ROW17",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"onChange"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Function to trigger when user changes the input value. Provide a function to create a controlled input."))),(0,r.mdx)(R.fI,{key:"ROW18",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"onInput"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Function to trigger when user inputs a value. Use when programmatically setting a value. Sends parameter {Event} event."))),(0,r.mdx)(R.fI,{key:"ROW19",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"required"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the field is required."))),(0,r.mdx)(R.fI,{key:"ROW20",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"rows"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Value to set for the rows attribute of the textarea. This takes precedence over size when\nsetting the height of the textarea."))),(0,r.mdx)(R.fI,{key:"ROW21",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"size"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'small'\n  'medium'\n  'large'\n  'full'\n],\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'small'\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The size of the textarea. ",(0,r.mdx)("em",{parentName:"p"},"(Sizes the textarea by setting the rows attribute a corresponding preset value.)")))),(0,r.mdx)(R.fI,{key:"ROW22",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"showOptional"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not to append the 'optional' label to a non-required field label."))),(0,r.mdx)(R.fI,{key:"ROW23",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"value"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n],\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The value of the input field. Use this to create a controlled input."))),(0,r.mdx)(R.fI,{key:"ROW24",mdxType:"Row"},(0,r.mdx)(R.dt,{mdxType:"PropNameCell"},"disableResize"),(0,r.mdx)(R.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(R.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(R.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(R.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the textarea is resizable.\n",(0,r.mdx)("inlineCode",{parentName:"p"},"Disabled")," textarea and the ones with size ",(0,r.mdx)("inlineCode",{parentName:"p"},"full")," are always non-resizable.")))))}I.isMDXComponent=!0;var S=["components"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},Z.apply(this,arguments)}function M(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var W={},A="wrapper";function F(e){var t=e.components,a=M(e,S);return(0,r.mdx)(A,Z({},W,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(n.E,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-form-textarea-field"},"Terra Form Textarea Field"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-textarea"},"terra-form-textarea")," component that is wrapped inside a\n",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field")," component."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note:")," To follow ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research"},"UX Best Practices"),", this component does not allow ",(0,r.mdx)("inlineCode",{parentName:"p"},"placeholder"),"."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-textarea"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { TextareaField } from 'terra-form-textarea';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(s,{mdxType:"TextareaFieldExample"}),(0,r.mdx)(v,{mdxType:"RequiredTextareaFieldExample"}),(0,r.mdx)(w,{mdxType:"IncompleteTextareaFieldExample"}),(0,r.mdx)("h2",{id:"form-textarea-field-props"},"Form Textarea Field Props"),(0,r.mdx)(I,{mdxType:"FormTextareaFieldPropsTable"}))}F.isMDXComponent=!0},9463:function(e,t,a){a.d(t,{E:function(){return n}});var l=a(96540),r=a(55713),n=function(e){var t=e.url;return l.createElement(r.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-textarea",name:"terra-form-textarea",version:"5.32.0",url:t})}},38768:function(e,t,a){t.A=void 0;var l=n(a(96540)),r=n(a(39057));function n(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return l.default.createElement(r.default,{inputId:"incompleteTextarea",label:"Incomplete Textarea",help:"Note: This is help text",required:!0,isIncomplete:!0,inputAttrs:{name:"requiredTextarea"}})}},8879:function(e,t,a){t.A=void 0;var l=n(a(96540)),r=n(a(39057));function n(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return l.default.createElement(r.default,{inputId:"requiredTextarea",label:"Required Textarea",help:"Note: This is help text",required:!0,inputAttrs:{name:"requiredTextarea"}})}},15908:function(e,t,a){t.A=void 0;var l=n(a(96540)),r=n(a(39057));function n(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return l.default.createElement(r.default,{inputId:"textarea",label:"Textarea",help:"Note: This is help text",inputAttrs:{name:"textarea"}})}},17212:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(96540)),r=u(a(5556)),n=u(a(46942)),d=u(a(67967)),m=u(a(52103)),o=u(a(19677)),p=["children","disableStripes","paddingStyle"];function u(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=d.default.bind(o.default),x={children:r.default.node.isRequired,disableStripes:r.default.bool,paddingStyle:r.default.oneOf(["none","standard","compact"])},f=function(e){var t=e.children,a=e.disableStripes,r=e.paddingStyle,d=c(e,p),o=l.default.useContext(m.default),u=(0,n.default)(s("table",{striped:!a},{"padding-standard":"standard"===r},{"padding-compact":"compact"===r},o.className),d.className);return l.default.createElement("table",i({},d,{className:u}),t)};f.propTypes=x,f.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=f},15460:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(96540)),r=d(a(5556)),n=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o={children:r.default.node},p=function(e){var t=e.children,a=m(e,n);return l.default.createElement("tbody",a,t)};p.propTypes=o,p.defaultProps={children:[]};t.default=p},59584:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(96540)),r=d(a(5556)),n=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o={children:r.default.node},p=function(e){var t=e.children,a=m(e,n);return l.default.createElement("td",a,t)};p.propTypes=o,p.defaultProps={children:[]};t.default=p},14281:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=m(a(96540)),r=m(a(5556)),n=m(a(93623)),d=["children"];function m(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p={children:r.default.node},u=function(e){var t=e.children,a=o(e,d);return l.default.createElement("thead",a,l.default.createElement("tr",null,n.default.addScope(t,"col")))};u.propTypes=p,u.defaultProps={children:[]};t.default=u},93401:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(96540)),r=d(a(5556)),n=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o={children:r.default.node},p=function(e){var t=e.children,a=m(e,n);return l.default.createElement("th",a,t)};p.propTypes=o,p.defaultProps={children:[]};t.default=p},96646:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=p(a(96540)),r=p(a(5556)),n=p(a(67967)),d=p(a(19677)),m=p(a(93623)),o=["children"];function p(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.default.bind(d.default),s={children:r.default.node},x=function(e){var t=e.children,a=i(e,o),r=c(["row"]);return l.default.createElement("tr",u({},a,{className:a.className?"".concat(r," ").concat(a.className):r}),m.default.addScope(t,"row"))};x.propTypes=s,x.defaultProps={children:[]};t.default=x},93623:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,r=(l=a(96540))&&l.__esModule?l:{default:l};var n={addScope:function(e,t){var a=[];return r.default.Children.forEach(e,(function(e){a.push(r.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),a}};t.default=n},17568:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return n.default}}),t.default=void 0;var l=p(a(17212)),r=p(a(15460)),n=p(a(96646)),d=p(a(59584)),m=p(a(14281)),o=p(a(93401));function p(e){return e&&e.__esModule?e:{default:e}}t.default=l.default},27166:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(96540)),r=n(a(56445));function n(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t=Object.assign({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=d},25642:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},89744:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},19677:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);