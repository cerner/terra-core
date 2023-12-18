"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[47138],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var l=r(n(67294)),a=r(n(45697)),d=r(n(47166)),p=r(n(17422)),u=d.default.bind(p.default),o={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},i=function(e){var t=e.src,n=e.name,r=e.url,a=e.version,d=l.default.createElement("a",{className:u("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(a)},l.default.createElement("span",{className:u("badge-name")},r?"package":"npm"),l.default.createElement("span",{className:u("badge-version")},"v".concat(a))),p=t?l.default.createElement("a",{className:u("badge"),href:t},l.default.createElement("span",{className:u("badge-name")},"github"),l.default.createElement("span",{className:u("badge-version")},"source")):void 0;return l.default.createElement("div",{className:u("badge-container")},d,p)};i.propTypes=o;var m=i;t.Z=m},49271:function(e,t,n){var r=n(64836),l=n(18698);t.Z=void 0;var a=r(n(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var p=a?Object.getOwnPropertyDescriptor(e,d):null;p&&(p.get||p.set)?Object.defineProperty(r,d,p):r[d]=e[d]}r.default=e,n&&n.set(e,r);return r}(n(67294)),p=r(n(45697)),u=r(n(47166)),o=n(21538),i=r(n(13810)),m=r(n(40931)),c=n(51051),s=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=u.default.bind(s.default),y={example:p.default.element,exampleSrc:p.default.element,exampleCssSrc:p.default.element,title:p.default.string,description:p.default.node,isExpanded:p.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,l=e.title,p=e.description,u=e.isExpanded,s=(0,d.useState)(u),f=(0,a.default)(s,2),y=f[0],v=f[1],h=(0,d.useState)(!1),T=(0,a.default)(h,2),_=T[0],O=T[1],N=d.default.useContext(o.ThemeContext),j=void 0!==r,C=function(){O(!_),y&&v(!y)},E=function(){v(!y),_&&O(!_)},w=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:x("template",N.className)},d.default.createElement("div",{className:x("header")},l&&d.default.createElement("h2",{className:x("title")},l)),d.default.createElement("div",{className:x("content")},p&&d.default.createElement("div",{className:x("description")},p),t),d.default.createElement("div",{className:x("footer")},n?d.default.createElement("div",{className:x("button-container")},j&&d.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":_}),onClick:C,onKeyDown:function(e){return w(e,C)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(i.default,{className:x("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(m.default,{className:x("chevron")})),d.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:E,onKeyDown:function(e){return w(e,E)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(i.default,{className:x("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(m.default,{className:x("chevron")}))):null,d.default.createElement("div",null,_&&d.default.createElement("div",{className:x("css")},r),y&&d.default.createElement("div",{className:x("code")},n))))};v.propTypes=y,v.defaultProps={isExpanded:!1};var h=v;t.Z=h},78530:function(e,t,n){var r=n(64836),l=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return o.Row}}),t.ZP=t.Di=void 0;var a=c(n(67294)),d=r(n(45697)),p=r(n(47166)),u=n(21538),o=c(n(37515)),i=r(n(54931));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var p=a?Object.getOwnPropertyDescriptor(e,d):null;p&&(p.get||p.set)?Object.defineProperty(r,d,p):r[d]=e[d]}return r.default=e,n&&n.set(e,r),r}var s=p.default.bind(i.default),f={children:d.default.node},x={isRequired:d.default.bool},y=function(e){var t=e.children;return a.default.createElement(o.Cell,{className:s("bold")},t)};t.O=y,y.propTypes=f;var b=function(e){var t=e.children;return a.default.createElement(o.Cell,{className:s("code-block-override")},t)};t.Di=b,b.propTypes=f;var g=function(e){var t=e.isRequired;return a.default.createElement(o.Cell,{className:s([t?["required"]:[]])},t?"required":"optional")};t.dS=g,g.propTypes=x;var v=function(e){var t=e.children;return a.default.createElement(o.Cell,{className:s("code-block-override")},t)};t.mW=v,v.propTypes=f;var h=function(e){var t=e.children;return a.default.createElement(o.Cell,null,t)};t.Ex=h,h.propTypes=f;var T=function(e){var t=e.children,n=(0,a.useContext)(u.ThemeContext);return a.default.createElement(o.default,{paddingStyle:"compact",className:s("table",n.className)},a.default.createElement(o.Header,{className:s("header")},a.default.createElement(o.HeaderCell,null,"Prop"),a.default.createElement(o.HeaderCell,null,"Type"),a.default.createElement(o.HeaderCell,null,"Required"),a.default.createElement(o.HeaderCell,null,"Default"),a.default.createElement(o.HeaderCell,null,"Description")),a.default.createElement(o.Body,null,t))};T.propTypes=f;var _=T;t.ZP=_},98031:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var r=n(67294),l=n(81254),a=n(12195),d=n(10689),p=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={};function m(e){var t=e.components,n=o(e,p);return(0,l.mdx)("wrapper",u({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\nconst DefaultInputField = () => (\n  <InputField\n    inputId="profile-name"\n    label="Profile Name"\n    help="Note: This can not be changed in the future"\n    type="text"\n    inputAttrs={{\n      name: \'profile\',\n    }}\n  />\n);\n\nexport default DefaultInputField;\n\n')))}m.isMDXComponent=!0;var c=n(49271),s=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(c.Z,{title:t||"Input Field",description:n,example:r.createElement(d.Z,null),exampleSrc:r.createElement(m,null),isExpanded:l})},f=n(33914),x=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g={};function v(e){var t=e.components,n=b(e,x);return(0,l.mdx)("wrapper",y({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\nconst RequiredInputField = () => (\n  <InputField\n    inputId="requiredField"\n    label="Required Input Field"\n    help="Note: This is help text"\n    type="text"\n    required\n    inputAttrs={{\n      name: \'requiredField\',\n    }}\n  />\n);\n\nexport default RequiredInputField;\n\n')))}v.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(c.Z,{title:t||"Required Input Field",description:n,example:r.createElement(f.Z,null),exampleSrc:r.createElement(v,null),isExpanded:l})},T=n(24368),_=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var j={};function C(e){var t=e.components,n=N(e,_);return(0,l.mdx)("wrapper",O({},j,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\nconst RequiredInputField = () => (\n  <InputField\n    inputId="incompleteField"\n    label="Incomplete Input Field"\n    help="Note: This is help text"\n    type="text"\n    required\n    isIncomplete\n    inputAttrs={{\n      name: \'requiredField\',\n    }}\n  />\n);\n\nexport default RequiredInputField;\n\n')))}C.isMDXComponent=!0;var E=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(c.Z,{title:t||"Incomplete Input Field",description:n,example:r.createElement(T.Z,null),exampleSrc:r.createElement(C,null),isExpanded:l})},w=n(31819),P=["components"];function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var S={};function I(e){var t=e.components,n=D(e,P);return(0,l.mdx)("wrapper",R({},S,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\nconst NumberInputField = () => (\n  <InputField\n    inputId="numeric-input"\n    label="Numeric Value"\n    type="number"\n    help="Enter Digits"\n    inputAttrs={{\n      name: \'numeric\',\n    }}\n  />\n);\n\nexport default NumberInputField;\n\n')))}I.isMDXComponent=!0;var q=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(c.Z,{title:t||"Number Input Field",description:n,example:r.createElement(w.Z,null),exampleSrc:r.createElement(I,null),isExpanded:l})},k=n(78530),F=["components"];function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var X={},V="wrapper";function Z(e){var t=e.components,n=M(e,F);return(0,l.mdx)(V,W({},X,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(k.ZP,{mdxType:"PropsTable"},(0,l.mdx)(k.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"inputId"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(k.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Id of the input. Populates both the input and the htmlFor prop of the wrapper Field."))),(0,l.mdx)(k.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"label"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(k.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The label of the form control children."))),(0,l.mdx)(k.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"defaultValue"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n],\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The defaultValue of the input field. Use this to create an uncontrolled input."))),(0,l.mdx)(k.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"disabled"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether the input is disabled."))),(0,l.mdx)(k.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"error"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Error message for when the input is invalid."))),(0,l.mdx)(k.X2,{key:"ROW6",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"errorIcon"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"<IconError />\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Error Icon to display when the input is invalid."))),(0,l.mdx)(k.X2,{key:"ROW7",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"help"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Help element to display with the input."))),(0,l.mdx)(k.X2,{key:"ROW8",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"inputAttrs"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Attributes to attach to the input object"))),(0,l.mdx)(k.X2,{key:"ROW9",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether the field and input displays as Incomplete. Use when no value has been provided. ",(0,l.mdx)("em",{parentName:"p"},"(usage note: ",(0,l.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,l.mdx)(k.X2,{key:"ROW10",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"isInline"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not the field is an inline field."))),(0,l.mdx)(k.X2,{key:"ROW11",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"isInvalid"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether the field and input displays as Invalid. Use when value does not meet validation pattern."))),(0,l.mdx)(k.X2,{key:"ROW12",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"labelAttrs"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Attributes to attach to the label."))),(0,l.mdx)(k.X2,{key:"ROW13",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"maxWidth"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Set the max-width of a field using ",(0,l.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,l.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,l.mdx)(k.X2,{key:"ROW14",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"onChange"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Function to trigger when user changes the input value. Provide a function to create a controlled input."))),(0,l.mdx)(k.X2,{key:"ROW15",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"onInput"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Function to trigger when user inputs a value. Use when programmatically setting a value. Sends parameter {Event} event."))),(0,l.mdx)(k.X2,{key:"ROW16",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"refCallback"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Ref callback to pass into the ref attribute of the html input element."))),(0,l.mdx)(k.X2,{key:"ROW17",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"required"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not the field is required."))),(0,l.mdx)(k.X2,{key:"ROW18",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"showOptional"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not to append the 'optional' label to a non-required field label."))),(0,l.mdx)(k.X2,{key:"ROW19",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"type"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Specifies the type of input element to display."))),(0,l.mdx)(k.X2,{key:"ROW20",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"value"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n],\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The value of the input field. Use this to create a controlled input.")))))}Z.isMDXComponent=!0;var A=["components"];function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var H={},U="wrapper";function K(e){var t=e.components,n=L(e,A);return(0,l.mdx)(U,B({},H,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(a.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-form-input-field"},"Terra Form Input Field"),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-input"},"terra-form-input")," component that is wrapped inside a\n",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field")," component."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Note:")," To follow ",(0,l.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research"},"UX Best Practices"),", this component does not allow ",(0,l.mdx)("inlineCode",{parentName:"p"},"placeholder"),"."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-input"))))),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import InputField from 'terra-form-input/lib/InputField';\n")),(0,l.mdx)("h2",{id:"component-features"},"Component Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(s,{mdxType:"InputFieldExample"}),(0,l.mdx)(h,{mdxType:"RequiredInputFieldExample"}),(0,l.mdx)(E,{description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteInputFieldExample"}),(0,l.mdx)(q,{mdxType:"NumberInputFieldExample"}),(0,l.mdx)("h2",{id:"form-input-field-props"},"Form Input Field Props"),(0,l.mdx)(Z,{mdxType:"FormInputFieldPropsTable"}))}K.isMDXComponent=!0},12195:function(e,t,n){n.d(t,{C:function(){return a}});var r=n(67294),l=n(22863),a=function(e){var t=e.url;return r.createElement(l.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-input",name:"terra-form-input",version:"4.30.0",url:t})}},24368:function(e,t,n){t.Z=void 0;var r=a(n(67294)),l=a(n(95269));function a(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(l.default,{inputId:"incompleteField",label:"Incomplete Input Field",help:"Note: This is help text",type:"text",required:!0,isIncomplete:!0,inputAttrs:{name:"requiredField"}})}},10689:function(e,t,n){t.Z=void 0;var r=a(n(67294)),l=a(n(95269));function a(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(l.default,{inputId:"profile-name",label:"Profile Name",help:"Note: This can not be changed in the future",type:"text",inputAttrs:{name:"profile"}})}},31819:function(e,t,n){t.Z=void 0;var r=a(n(67294)),l=a(n(95269));function a(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(l.default,{inputId:"numeric-input",label:"Numeric Value",type:"number",help:"Enter Digits",inputAttrs:{name:"numeric"}})}},33914:function(e,t,n){t.Z=void 0;var r=a(n(67294)),l=a(n(95269));function a(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(l.default,{inputId:"requiredField",label:"Required Input Field",help:"Note: This is help text",type:"text",required:!0,inputAttrs:{name:"requiredField"}})}},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),l=i(n(45697)),a=i(n(94184)),d=i(n(47166)),p=i(n(50026)),u=i(n(16749)),o=["children","disableStripes","paddingStyle"];function i(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=d.default.bind(u.default),f={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},x=function(e){var t=e.children,n=e.disableStripes,l=e.paddingStyle,d=c(e,o),u=r.default.useContext(p.default),i=(0,a.default)(s("table",{striped:!n},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},u.className),d.className);return r.default.createElement("table",m({},d,{className:i}),t)};x.propTypes=f,x.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=x},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),l=d(n(45697)),a=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={children:l.default.node},o=function(e){var t=e.children,n=p(e,a);return r.default.createElement("tbody",n,t)};o.propTypes=u,o.defaultProps={children:[]};t.default=o},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),l=d(n(45697)),a=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={children:l.default.node},o=function(e){var t=e.children,n=p(e,a);return r.default.createElement("td",n,t)};o.propTypes=u,o.defaultProps={children:[]};t.default=o},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(67294)),l=p(n(45697)),a=p(n(29805)),d=["children"];function p(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o={children:l.default.node},i=function(e){var t=e.children,n=u(e,d);return r.default.createElement("thead",n,r.default.createElement("tr",null,a.default.addScope(t,"col")))};i.propTypes=o,i.defaultProps={children:[]};t.default=i},38880:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),l=d(n(45697)),a=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={children:l.default.node},o=function(e){var t=e.children,n=p(e,a);return r.default.createElement("th",n,t)};o.propTypes=u,o.defaultProps={children:[]};t.default=o},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(45697)),a=o(n(47166)),d=o(n(16749)),p=o(n(29805)),u=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.default.bind(d.default),s={children:l.default.node},f=function(e){var t=e.children,n=m(e,u),l=c(["row"]);return r.default.createElement("tr",i({},n,{className:n.className?"".concat(l," ").concat(n.className):l}),p.default.addScope(t,"row"))};f.propTypes=s,f.defaultProps={children:[]};t.default=f},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=(r=n(67294))&&r.__esModule?r:{default:r};var a={addScope:function(e,t){var n=[];return l.default.Children.forEach(e,(function(e){n.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=a},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=o(n(32634)),l=o(n(80196)),a=o(n(70829)),d=o(n(8685)),p=o(n(19852)),u=o(n(38880));function o(e){return e&&e.__esModule?e:{default:e}}t.default=r.default},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(21969));function a(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var p=function(e){var t=d({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};p.displayName="IconChevronLeft",p.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=p},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);