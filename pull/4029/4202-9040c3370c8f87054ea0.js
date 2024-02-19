"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[4202],{55713:function(e,t,n){var r=n(24994);t.A=void 0;var a=r(n(96540)),l=r(n(5556)),o=r(n(67967)),u=r(n(25642)),d=o.default.bind(u.default),i={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(l))),u=t?a.default.createElement("a",{className:d("badge"),href:t},a.default.createElement("span",{className:d("badge-name")},"github"),a.default.createElement("span",{className:d("badge-version")},"source")):void 0;return a.default.createElement("div",{className:d("badge-container")},o,u)};c.propTypes=i;t.A=c},201:function(e,t,n){var r=n(24994),a=n(73738);t.A=void 0;var l=r(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(96540)),u=r(n(5556)),d=r(n(67967)),i=n(92912),c=r(n(27166)),p=r(n(62441)),s=n(25966),m=r(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var v=d.default.bind(m.default),y={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,u=e.description,d=e.isExpanded,m=(0,o.useState)(d),f=(0,l.default)(m,2),y=f[0],x=f[1],g=(0,o.useState)(!1),h=(0,l.default)(g,2),O=h[0],E=h[1],T=o.default.useContext(i.ThemeContext),j=void 0!==r,N=function(){E(!O),y&&x(!y)},w=function(){x(!y),O&&E(!O)},P=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:v("template",T.className)},o.default.createElement("div",{className:v("header")},a&&o.default.createElement("h2",{className:v("title")},a)),o.default.createElement("div",{className:v("content")},u&&o.default.createElement("div",{className:v("description")},u),t),o.default.createElement("div",{className:v("footer")},n?o.default.createElement("div",{className:v("button-container")},j&&o.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":O}),onClick:N,onKeyDown:function(e){return P(e,N)},onBlur:b,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:v("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(p.default,{className:v("chevron")})),o.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":y}),onClick:w,onKeyDown:function(e){return P(e,w)},onBlur:b,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:v("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(p.default,{className:v("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:v("css")},r),y&&o.default.createElement("div",{className:v("code")},n))))};x.propTypes=y,x.defaultProps={isExpanded:!1};t.A=x},12883:function(e,t,n){var r=n(24994),a=n(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return i.Row}}),t.Ay=t.$d=void 0;var l=s(n(96540)),o=r(n(5556)),u=r(n(67967)),d=n(92912),i=s(n(17568)),c=r(n(89744));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var m=u.default.bind(c.default),f={children:o.default.node},v={isRequired:o.default.bool};(t.dt=function(e){var t=e.children;return l.default.createElement(i.Cell,{className:m("bold")},t)}).propTypes=f,(t.$d=function(e){var t=e.children;return l.default.createElement(i.Cell,{className:m("code-block-override")},t)}).propTypes=f,(t.YZ=function(e){var t=e.isRequired;return l.default.createElement(i.Cell,{className:m([t?["required"]:[]])},t?"required":"optional")}).propTypes=v,(t.NZ=function(e){var t=e.children;return l.default.createElement(i.Cell,{className:m("code-block-override")},t)}).propTypes=f,(t.Hd=function(e){var t=e.children;return l.default.createElement(i.Cell,null,t)}).propTypes=f;var y=function(e){var t=e.children,n=(0,l.useContext)(d.ThemeContext);return l.default.createElement(i.default,{paddingStyle:"compact",className:m("table",n.className)},l.default.createElement(i.Header,{className:m("header")},l.default.createElement(i.HeaderCell,null,"Prop"),l.default.createElement(i.HeaderCell,null,"Type"),l.default.createElement(i.HeaderCell,null,"Required"),l.default.createElement(i.HeaderCell,null,"Default"),l.default.createElement(i.HeaderCell,null,"Description")),l.default.createElement(i.Body,null,t))};y.propTypes=f;t.Ay=y},4202:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(96540),a=n(36665),l=n(10793),o=n(3636),u=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={};function p(e){var t=e.components,n=i(e,u);return(0,a.mdx)("wrapper",d({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport PropTypes from 'prop-types';\nimport { Generic } from 'terra-avatar';\nimport GenericAvatarVariantsWrapper from './GenericAvatarVariantsWrapper';\n\nconst propTypes = { color: PropTypes.string, size: PropTypes.string, variant: PropTypes.string };\n\nconst GenericAvatarVariants = ({\n  ...props\n}) => (\n  <Generic variant={props.variant} alt={props.variant} color={props.color} size={props.size} />\n);\n\nGenericAvatarVariants.propTypes = propTypes;\nexport default GenericAvatarVariantsWrapper(GenericAvatarVariants);\n\n")))}p.isMDXComponent=!0;var s=n(201),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(s.A,{title:t||"Generic Avatar Variants",description:n,example:r.createElement(o.A,null),exampleSrc:r.createElement(p,null),isExpanded:a})},f=n(12883),v=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _={},x="wrapper";function g(e){var t=e.components,n=b(e,v);return(0,a.mdx)(x,y({},_,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(f.Ay,{mdxType:"PropsTable"},(0,a.mdx)(f.fI,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(f.dt,{mdxType:"PropNameCell"},"alt"),(0,a.mdx)(f.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(f.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(f.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(f.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Specifies the alternative text for the image."))),(0,a.mdx)(f.fI,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(f.dt,{mdxType:"PropNameCell"},"color"),(0,a.mdx)(f.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'auto'\n  'neutral'\n  'one'\n  'two'\n  'three'\n  'four'\n  'five'\n  'six'\n  'seven'\n  'eight'\n  'nine'\n  'ten'\n],\n"))),(0,a.mdx)(f.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(f.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'auto'\n"))),(0,a.mdx)(f.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the background color. Defaults to ",(0,a.mdx)("inlineCode",{parentName:"p"},"auto"),". Accepted color variants are theme specific.\nOne of: ",(0,a.mdx)("inlineCode",{parentName:"p"},"'auto'"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"'neutral'"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"'one'"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"'two'"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"'three'"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"'four'"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"'five'"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"'six'"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"'seven'"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"'eight'"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"'nine'"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"'ten'"),"."))),(0,a.mdx)(f.fI,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(f.dt,{mdxType:"PropNameCell"},"hashValue"),(0,a.mdx)(f.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(f.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(f.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(f.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Value used for the hash function when color is set to ",(0,a.mdx)("inlineCode",{parentName:"p"},"auto"),". If not provided, hash function utilizes alt."))),(0,a.mdx)(f.fI,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(f.dt,{mdxType:"PropNameCell"},"isAriaHidden"),(0,a.mdx)(f.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(f.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(f.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(f.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether to hide avatar from the accessibility tree."))),(0,a.mdx)(f.fI,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(f.dt,{mdxType:"PropNameCell"},"size"),(0,a.mdx)(f.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(f.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(f.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(f.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Overrides the default size."))),(0,a.mdx)(f.fI,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(f.dt,{mdxType:"PropNameCell"},"variant"),(0,a.mdx)(f.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'single-user'\n  'shared-user'\n  'provider'\n],\n"))),(0,a.mdx)(f.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(f.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'single-user'\n"))),(0,a.mdx)(f.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the Generic Avatar type to One of the following variants ",(0,a.mdx)("inlineCode",{parentName:"p"},"single-user"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"shared-user"),", or ",(0,a.mdx)("inlineCode",{parentName:"p"},"provider"),".")))))}g.isMDXComponent=!0;var h=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var T={},j="wrapper";function N(e){var t=e.components,n=E(e,h);return(0,a.mdx)(j,O({},T,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.E,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"generic"},"Generic"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"Generic")," variant represents multiple users - it displays a shared user icon in a circular frame."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-avatar"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Generic } from 'terra-avatar';\n\n<Generic\n  alt=\"Generic Users\"\n/>\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(m,{title:"Generic Avatar - Icons",mdxType:"GenericAvatarVariants"}),(0,a.mdx)("h2",{id:"shared-user-props"},"Shared User Props"),(0,a.mdx)(g,{mdxType:"GenericPropsTable"}))}N.isMDXComponent=!0},10793:function(e,t,n){n.d(t,{E:function(){return l}});var r=n(96540),a=n(55713),l=function(e){var t=e.url;return r.createElement(a.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-avatar",name:"terra-avatar",version:"3.19.0",url:t})}},3636:function(e,t,n){t.A=void 0;var r=u(n(96540)),a=u(n(5556)),l=n(55801),o=u(n(89073));function u(e){return e&&e.__esModule?e:{default:e}}var d={color:a.default.string,size:a.default.string,variant:a.default.string},i=function(e){var t=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return r.default.createElement(l.Generic,{variant:t.variant,alt:t.variant,color:t.color,size:t.size})};i.propTypes=d;t.A=(0,o.default)(i)},89073:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=n(96540))&&a.__esModule?a:{default:a};function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function d(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function i(e,t,n){return t=p(t),function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}(e,c()?Reflect.construct(t,n||[],p(e).constructor):t.apply(e,n))}function c(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(c=function(){return!!e})()}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}t.default=function(e){return function(t){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=i(this,n,[e])).handleOnSelect=t.handleOnSelect.bind(s(t)),t.state={colorVariant:"auto",size:void 0,variant:"single-user"},t}var r,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(n,t),r=n,a=[{key:"handleOnSelect",value:function(e){this.setState(function(e,t,n){return(t=d(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement(e,o({color:this.state.colorVariant,variant:this.state.variant,size:this.state.size},this.props)),l.default.createElement("p",null,l.default.createElement("label",{htmlFor:"variant"},"Select a generic variant type:")),l.default.createElement("select",{id:"variant",name:"variant",value:this.state.variant,onChange:this.handleOnSelect},l.default.createElement("option",{value:"single-user"},"Single-User"),l.default.createElement("option",{value:"shared-user"},"Shared-User"),l.default.createElement("option",{value:"provider"},"Provider")),l.default.createElement("p",null,l.default.createElement("label",{htmlFor:"colorVariant"},"Select a color variant:")),l.default.createElement("select",{id:"colorVariant",name:"colorVariant",value:this.state.colorVariant,onChange:this.handleOnSelect},l.default.createElement("option",{value:"auto"},"Auto"),l.default.createElement("option",{value:"neutral"},"Neutral"),l.default.createElement("option",{value:"one"},"One"),l.default.createElement("option",{value:"two"},"Two"),l.default.createElement("option",{value:"three"},"Three"),l.default.createElement("option",{value:"four"},"Four"),l.default.createElement("option",{value:"five"},"Five"),l.default.createElement("option",{value:"six"},"Six"),l.default.createElement("option",{value:"seven"},"Seven"),l.default.createElement("option",{value:"eight"},"Eight"),l.default.createElement("option",{value:"nine"},"Nine"),l.default.createElement("option",{value:"ten"},"Ten")),l.default.createElement("p",null,l.default.createElement("label",{htmlFor:"size"},"Select a size:")),l.default.createElement("select",{id:"size",name:"size",value:this.state.size,onChange:this.handleOnSelect},l.default.createElement("option",{value:"1em"},"Default"),l.default.createElement("option",{value:"2em"},"2em"),l.default.createElement("option",{value:"3em"},"3em")))}}],a&&u(r.prototype,a),c&&u(r,c),Object.defineProperty(r,"prototype",{writable:!1}),n}(l.default.Component)}},17212:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(96540)),a=c(n(5556)),l=c(n(46942)),o=c(n(67967)),u=c(n(52103)),d=c(n(19677)),i=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.default.bind(d.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},v=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=s(e,i),d=r.default.useContext(u.default),c=(0,l.default)(m("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},d.className),o.className);return r.default.createElement("table",p({},o,{className:c}),t)};v.propTypes=f,v.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=v},15460:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),a=o(n(5556)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},i=function(e){var t=e.children,n=u(e,l);return r.default.createElement("tbody",n,t)};i.propTypes=d,i.defaultProps={children:[]};t.default=i},59584:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),a=o(n(5556)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},i=function(e){var t=e.children,n=u(e,l);return r.default.createElement("td",n,t)};i.propTypes=d,i.defaultProps={children:[]};t.default=i},14281:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(96540)),a=u(n(5556)),l=u(n(93623)),o=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},c=function(e){var t=e.children,n=d(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};c.propTypes=i,c.defaultProps={children:[]};t.default=c},93401:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),a=o(n(5556)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},i=function(e){var t=e.children,n=u(e,l);return r.default.createElement("th",n,t)};i.propTypes=d,i.defaultProps={children:[]};t.default=i},96646:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(96540)),a=i(n(5556)),l=i(n(67967)),o=i(n(19677)),u=i(n(93623)),d=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.default.bind(o.default),m={children:a.default.node},f=function(e){var t=e.children,n=p(e,d),a=s(["row"]);return r.default.createElement("tr",c({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),u.default.addScope(t,"row"))};f.propTypes=m,f.defaultProps={children:[]};t.default=f},93623:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(96540))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},17568:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=i(n(17212)),a=i(n(15460)),l=i(n(96646)),o=i(n(59584)),u=i(n(14281)),d=i(n(93401));function i(e){return e&&e.__esModule?e:{default:e}}t.default=r.default},27166:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(96540)),a=l(n(56445));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},89744:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},19677:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);