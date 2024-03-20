"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[45323],{55713:function(e,t,n){var l=n(24994);t.A=void 0;var r=l(n(96540)),a=l(n(5556)),d=l(n(67967)),o=l(n(25642)),i=d.default.bind(o.default),u={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},m=function(e){var t=e.src,n=e.name,l=e.url,a=e.version,d=r.default.createElement("a",{className:i("badge"),href:l||"https://www.npmjs.org/package/".concat(n,"/v/").concat(a)},r.default.createElement("span",{className:i("badge-name")},l?"package":"npm"),r.default.createElement("span",{className:i("badge-version")},"v".concat(a))),o=t?r.default.createElement("a",{className:i("badge"),href:t},r.default.createElement("span",{className:i("badge-name")},"github"),r.default.createElement("span",{className:i("badge-version")},"source")):void 0;return r.default.createElement("div",{className:i("badge-container")},d,o)};m.propTypes=u;t.A=m},201:function(e,t,n){var l=n(24994),r=n(73738);t.A=void 0;var a=l(n(85715)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=a?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(l,d,o):l[d]=e[d]}return l.default=e,n&&n.set(e,l),l}(n(96540)),o=l(n(5556)),i=l(n(67967)),u=n(92912),m=l(n(27166)),p=l(n(62441)),s=n(25966),c=l(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=i.default.bind(c.default),y={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,r=e.title,o=e.description,i=e.isExpanded,c=(0,d.useState)(i),f=(0,a.default)(c,2),y=f[0],g=f[1],h=(0,d.useState)(!1),_=(0,a.default)(h,2),T=_[0],N=_[1],O=d.default.useContext(u.ThemeContext),E=void 0!==l,j=function(){N(!T),y&&g(!y)},C=function(){g(!y),T&&N(!T)},w=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:x("template",O.className)},d.default.createElement("div",{className:x("header")},r&&d.default.createElement("h2",{className:x("title")},r)),d.default.createElement("div",{className:x("content")},o&&d.default.createElement("div",{className:x("description")},o),t),d.default.createElement("div",{className:x("footer")},n?d.default.createElement("div",{className:x("button-container")},E&&d.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":T}),onClick:j,onKeyDown:function(e){return w(e,j)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(m.default,{className:x("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(p.default,{className:x("chevron")})),d.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:C,onKeyDown:function(e){return w(e,C)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(m.default,{className:x("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(p.default,{className:x("chevron")}))):null,d.default.createElement("div",null,T&&d.default.createElement("div",{className:x("css")},l),y&&d.default.createElement("div",{className:x("code")},n))))};g.propTypes=y,g.defaultProps={isExpanded:!1};t.A=g},12883:function(e,t,n){var l=n(24994),r=n(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return u.Row}}),t.Ay=t.$d=void 0;var a=s(n(96540)),d=l(n(5556)),o=l(n(67967)),i=n(92912),u=s(n(17568)),m=l(n(89744));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=a?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(l,d,o):l[d]=e[d]}return l.default=e,n&&n.set(e,l),l}var c=o.default.bind(m.default),f={children:d.default.node},x={isRequired:d.default.bool};(t.dt=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:c("bold")},t)}).propTypes=f,(t.$d=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:c("code-block-override")},t)}).propTypes=f,(t.YZ=function(e){var t=e.isRequired;return a.default.createElement(u.Cell,{className:c([t?["required"]:[]])},t?"required":"optional")}).propTypes=x,(t.NZ=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:c("code-block-override")},t)}).propTypes=f,(t.Hd=function(e){var t=e.children;return a.default.createElement(u.Cell,null,t)}).propTypes=f;var y=function(e){var t=e.children,n=(0,a.useContext)(i.ThemeContext);return a.default.createElement(u.default,{paddingStyle:"compact",className:c("table",n.className)},a.default.createElement(u.Header,{className:c("header")},a.default.createElement(u.HeaderCell,null,"Prop"),a.default.createElement(u.HeaderCell,null,"Type"),a.default.createElement(u.HeaderCell,null,"Required"),a.default.createElement(u.HeaderCell,null,"Default"),a.default.createElement(u.HeaderCell,null,"Description")),a.default.createElement(u.Body,null,t))};y.propTypes=f;t.Ay=y},45323:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var l=n(96540),r=n(36665),a=n(79003),d=n(48221),o=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m={};function p(e){var t=e.components,n=u(e,o);return(0,r.mdx)("wrapper",i({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport Field from \'terra-form-field\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FieldExamples.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst FieldExamples = () => {\n  const [isInvalid, setIsInvalid] = useState(false);\n  const [email, setEmail] = useState(\'\');\n  const [message, setMessage] = useState(\'\');\n  const [emailInvalid, setEmailInvalid] = useState(false);\n\n  // Function for email validation\n  const emailValidation = (e) => {\n    e.preventDefault();\n    const regExEmail = /^[-a-z0-9#$%^&\'`?{}_=+/}{\'?]+(\\.[-a-z0-9#$%^&\'`?{}_=+/}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\\.[-a-z0-9_]+)*\\.([a-z][a-z]{1,62}))?$/i;\n    if (!regExEmail.test(email) && email !== \'\') {\n      setEmailInvalid(true);\n      setMessage(\'The e-mail address entered is invalid\');\n    } else {\n      setEmailInvalid(false);\n      setMessage(\'\');\n    }\n  };\n\n  const handleOnChange = (e) => {\n    setEmail(e.target.value);\n  };\n\n  const toggleIsInvalid = () => {\n    setIsInvalid(!isInvalid);\n  };\n\n  return (\n    <div>\n      <Field\n        label="Field Label"\n        help="This is a standard, non-required field."\n        error="Error Message"\n        isInvalid={isInvalid}\n      >\n        <div className={cx(\'field-content\')}>Control Placeholder</div>\n      </Field>\n      <Field\n        label="Field Label"\n        help="This is an optional field."\n        error="Error Message"\n        isInvalid={isInvalid}\n        isInline\n        showOptional\n      >\n        <div className={cx(\'field-content\')}>Control Placeholder</div>\n      </Field>\n\n      <Field\n        label="Field Label"\n        help="This is a required field."\n        error="Error Message"\n        isInvalid={isInvalid}\n        isInline\n        required\n      >\n        <div className={cx(\'field-content\')}>Control Placeholder</div>\n      </Field>\n\n      <Field\n        label="Field Label"\n        help="This is a required field, but the required indicator is hidden until the field is in error."\n        error="Now the required indicator is showing because the field is in error."\n        isInvalid={isInvalid}\n        isInline\n        required\n        hideRequired\n      >\n        <div className={cx(\'field-content\')}>Control Placeholder</div>\n      </Field>\n\n      <form onSubmit={emailValidation}>\n        <p> Accessibility Hooks Example Field Label </p>\n        <Field\n          label="E-mail Label"\n          htmlFor="input_id"\n          help="Please enter a valid e-mail address (abc@example.com)."\n          error={message}\n          isInvalid={emailInvalid}\n        >\n          <input type="text" id="input_id" aria-describedby="input_id-error input_id-help" value={email} onChange={handleOnChange} />\n        </Field>\n        <button type="submit" disabled={!email}>Submit</button>\n      </form>\n      <hr />\n      <p>\n        If a field is invalid, an error icon will be displayed.\n        <button type="button" onClick={toggleIsInvalid}>Toggle Invalid State</button>\n      </p>\n    </div>\n  );\n};\n\nexport default FieldExamples;\n\n')))}p.isMDXComponent=!0;var s=n(201),c=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y={};function b(e){var t=e.components,n=x(e,c);return(0,r.mdx)("wrapper",f({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .field-content {\n    border: dashed 1px #d3d3d3;\n  }\n}\n\n")))}b.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.createElement(s.A,{title:t||"Field Examples",description:n,example:l.createElement(d.A,null),exampleCssSrc:l.createElement(b,null),exampleSrc:l.createElement(p,null),isExpanded:r})},g=n(12883),h=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},_.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N={},O="wrapper";function E(e){var t=e.components,n=T(e,h);return(0,r.mdx)(O,_({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(g.Ay,{mdxType:"PropsTable"},(0,r.mdx)(g.fI,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(g.dt,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(g.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(g.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(g.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(g.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The form control elements the Field contains."))),(0,r.mdx)(g.fI,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(g.dt,{mdxType:"PropNameCell"},"error"),(0,r.mdx)(g.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(g.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(g.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(g.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Error message for when the input is invalid. This will only be displayed if isInvalid is true."))),(0,r.mdx)(g.fI,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(g.dt,{mdxType:"PropNameCell"},"errorIcon"),(0,r.mdx)(g.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(g.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(g.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"<IconError />\n"))),(0,r.mdx)(g.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Error Icon to display when the input is invalid."))),(0,r.mdx)(g.fI,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(g.dt,{mdxType:"PropNameCell"},"help"),(0,r.mdx)(g.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(g.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(g.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(g.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Help element to display with the input."))),(0,r.mdx)(g.fI,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(g.dt,{mdxType:"PropNameCell"},"htmlFor"),(0,r.mdx)(g.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(g.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(g.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(g.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The htmlFor attribute on the field label."))),(0,r.mdx)(g.fI,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(g.dt,{mdxType:"PropNameCell"},"isInvalid"),(0,r.mdx)(g.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(g.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(g.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(g.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))),(0,r.mdx)(g.fI,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(g.dt,{mdxType:"PropNameCell"},"isInline"),(0,r.mdx)(g.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(g.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(g.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(g.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the field is an inline field."))),(0,r.mdx)(g.fI,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(g.dt,{mdxType:"PropNameCell"},"label"),(0,r.mdx)(g.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(g.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(g.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(g.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The label of the form control children."))),(0,r.mdx)(g.fI,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(g.dt,{mdxType:"PropNameCell"},"labelAttrs"),(0,r.mdx)(g.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(g.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(g.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(g.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Attributes to attach to the label."))),(0,r.mdx)(g.fI,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(g.dt,{mdxType:"PropNameCell"},"maxWidth"),(0,r.mdx)(g.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(g.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(g.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(g.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Set the max-width of a field using ",(0,r.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,r.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,r.mdx)(g.fI,{key:"ROW11",mdxType:"Row"},(0,r.mdx)(g.dt,{mdxType:"PropNameCell"},"required"),(0,r.mdx)(g.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(g.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(g.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(g.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the field is required."))),(0,r.mdx)(g.fI,{key:"ROW12",mdxType:"Row"},(0,r.mdx)(g.dt,{mdxType:"PropNameCell"},"showOptional"),(0,r.mdx)(g.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(g.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(g.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(g.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not to append the 'optional' label to a non-required field label."))),(0,r.mdx)(g.fI,{key:"ROW13",mdxType:"Row"},(0,r.mdx)(g.dt,{mdxType:"PropNameCell"},"style"),(0,r.mdx)(g.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(g.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(g.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(g.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Provides first class prop for custom inline styles")))))}E.isMDXComponent=!0;var j=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},C.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P={},I="wrapper";function S(e){var t=e.components,n=w(e,j);return(0,r.mdx)(I,C({},P,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(a.E,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-form-field"},"Terra Form Field"),(0,r.mdx)("p",null,"The Form Field component handles the layout of the label, help text and error text associated with a form element. Additionally, it provides required, optional, and invalid indicators."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install terra-form-field\n")))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,r.mdx)("h2",{id:"implementation-notes"},"Implementation Notes:"),(0,r.mdx)("p",null,"The Form-Field component must be composed inside the ",(0,r.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-core/components/terra-base/base/base"},"Base")," component with a locale in order for it to load the correct translation strings."),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Field from 'terra-form-field';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(v,{mdxType:"FieldExamples"}),(0,r.mdx)("h2",{id:"form-field-props"},"Form Field Props"),(0,r.mdx)(E,{mdxType:"FormFieldPropsTable"}))}S.isMDXComponent=!0},79003:function(e,t,n){n.d(t,{E:function(){return a}});var l=n(96540),r=n(55713),a=function(e){var t=e.url;return l.createElement(r.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field",name:"terra-form-field",version:"4.33.0",url:t})}},48221:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}t.A=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=a?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(r,d,o):r[d]=e[d]}return r.default=e,n&&n.set(e,r),r}(n(96540)),a=i(n(9047)),d=i(n(67967)),o=i(n(40302));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a,d,o=[],i=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(l=a.call(n)).done)&&(o.push(l.value),o.length!==t);i=!0);}catch(e){u=!0,r=e}finally{try{if(!i&&null!=n.return&&(d=n.return(),Object(d)!==d))return}finally{if(u)throw r}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var s=d.default.bind(o.default);t.A=function(){var e=m((0,r.useState)(!1),2),t=e[0],n=e[1],l=m((0,r.useState)(""),2),d=l[0],o=l[1],i=m((0,r.useState)(""),2),u=i[0],p=i[1],c=m((0,r.useState)(!1),2),f=c[0],x=c[1];return r.default.createElement("div",null,r.default.createElement(a.default,{label:"Field Label",help:"This is a standard, non-required field.",error:"Error Message",isInvalid:t},r.default.createElement("div",{className:s("field-content")},"Control Placeholder")),r.default.createElement(a.default,{label:"Field Label",help:"This is an optional field.",error:"Error Message",isInvalid:t,isInline:!0,showOptional:!0},r.default.createElement("div",{className:s("field-content")},"Control Placeholder")),r.default.createElement(a.default,{label:"Field Label",help:"This is a required field.",error:"Error Message",isInvalid:t,isInline:!0,required:!0},r.default.createElement("div",{className:s("field-content")},"Control Placeholder")),r.default.createElement(a.default,{label:"Field Label",help:"This is a required field, but the required indicator is hidden until the field is in error.",error:"Now the required indicator is showing because the field is in error.",isInvalid:t,isInline:!0,required:!0,hideRequired:!0},r.default.createElement("div",{className:s("field-content")},"Control Placeholder")),r.default.createElement("form",{onSubmit:function(e){e.preventDefault();/^[-a-z0-9#$%^&'`?{}_=+/}{'?]+(\.[-a-z0-9#$%^&'`?{}_=+/}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.([a-z][a-z]{1,62}))?$/i.test(d)||""===d?(x(!1),p("")):(x(!0),p("The e-mail address entered is invalid"))}},r.default.createElement("p",null," Accessibility Hooks Example Field Label "),r.default.createElement(a.default,{label:"E-mail Label",htmlFor:"input_id",help:"Please enter a valid e-mail address (abc@example.com).",error:u,isInvalid:f},r.default.createElement("input",{type:"text",id:"input_id","aria-describedby":"input_id-error input_id-help",value:d,onChange:function(e){o(e.target.value)}})),r.default.createElement("button",{type:"submit",disabled:!d},"Submit")),r.default.createElement("hr",null),r.default.createElement("p",null,"If a field is invalid, an error icon will be displayed.",r.default.createElement("button",{type:"button",onClick:function(){n(!t)}},"Toggle Invalid State")))}},17212:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=m(n(96540)),r=m(n(5556)),a=m(n(46942)),d=m(n(67967)),o=m(n(52103)),i=m(n(19677)),u=["children","disableStripes","paddingStyle"];function m(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},p.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=d.default.bind(i.default),f={children:r.default.node.isRequired,disableStripes:r.default.bool,paddingStyle:r.default.oneOf(["none","standard","compact"])},x=function(e){var t=e.children,n=e.disableStripes,r=e.paddingStyle,d=s(e,u),i=l.default.useContext(o.default),m=(0,a.default)(c("table",{striped:!n},{"padding-standard":"standard"===r},{"padding-compact":"compact"===r},i.className),d.className);return l.default.createElement("table",p({},d,{className:m}),t)};x.propTypes=f,x.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=x},15460:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(n(96540)),r=d(n(5556)),a=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={children:r.default.node},u=function(e){var t=e.children,n=o(e,a);return l.default.createElement("tbody",n,t)};u.propTypes=i,u.defaultProps={children:[]};t.default=u},59584:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(n(96540)),r=d(n(5556)),a=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={children:r.default.node},u=function(e){var t=e.children,n=o(e,a);return l.default.createElement("td",n,t)};u.propTypes=i,u.defaultProps={children:[]};t.default=u},14281:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(96540)),r=o(n(5556)),a=o(n(93623)),d=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u={children:r.default.node},m=function(e){var t=e.children,n=i(e,d);return l.default.createElement("thead",n,l.default.createElement("tr",null,a.default.addScope(t,"col")))};m.propTypes=u,m.defaultProps={children:[]};t.default=m},93401:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(n(96540)),r=d(n(5556)),a=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={children:r.default.node},u=function(e){var t=e.children,n=o(e,a);return l.default.createElement("th",n,t)};u.propTypes=i,u.defaultProps={children:[]};t.default=u},96646:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(96540)),r=u(n(5556)),a=u(n(67967)),d=u(n(19677)),o=u(n(93623)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.default.bind(d.default),c={children:r.default.node},f=function(e){var t=e.children,n=p(e,i),r=s(["row"]);return l.default.createElement("tr",m({},n,{className:n.className?"".concat(r," ").concat(n.className):r}),o.default.addScope(t,"row"))};f.propTypes=c,f.defaultProps={children:[]};t.default=f},93623:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,r=(l=n(96540))&&l.__esModule?l:{default:l};var a={addScope:function(e,t){var n=[];return r.default.Children.forEach(e,(function(e){n.push(r.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=a},17568:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var l=u(n(17212)),r=u(n(15460)),a=u(n(96646)),d=u(n(59584)),o=u(n(14281)),i=u(n(93401));function u(e){return e&&e.__esModule?e:{default:e}}t.default=l.default},27166:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(96540)),r=a(n(56445));function a(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t=Object.assign({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=d},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},89744:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},40302:function(e,t,n){n.r(t),t.default={"field-content":"FieldExamples-module__field-content___1XQOq"}},19677:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);