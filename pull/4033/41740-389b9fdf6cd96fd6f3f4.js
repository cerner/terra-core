"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[41740],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var l=r(n(67294)),a=r(n(45697)),o=r(n(19845)),d=r(n(17422)),u=o.default.bind(d.default),c={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},i=function(e){var t=e.src,n=e.name,r=e.url,a=e.version,o=l.default.createElement("a",{className:u("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(a)},l.default.createElement("span",{className:u("badge-name")},r?"package":"npm"),l.default.createElement("span",{className:u("badge-version")},"v".concat(a))),d=t?l.default.createElement("a",{className:u("badge"),href:t},l.default.createElement("span",{className:u("badge-name")},"github"),l.default.createElement("span",{className:u("badge-version")},"source")):void 0;return l.default.createElement("div",{className:u("badge-container")},o,d)};i.propTypes=c;t.Z=i},49271:function(e,t,n){var r=n(64836),l=n(18698);t.Z=void 0;var a=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(67294)),d=r(n(45697)),u=r(n(19845)),c=n(21538),i=r(n(13810)),p=r(n(40931)),m=n(51051),f=r(n(53560));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var _=u.default.bind(f.default),y={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,l=e.title,d=e.description,u=e.isExpanded,f=(0,o.useState)(u),s=(0,a.default)(f,2),y=s[0],x=s[1],g=(0,o.useState)(!1),O=(0,a.default)(g,2),h=O[0],T=O[1],E=o.default.useContext(c.ThemeContext),j=void 0!==r,P=function(){T(!h),y&&x(!y)},w=function(){x(!y),h&&T(!h)},C=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",E.className)},o.default.createElement("div",{className:_("header")},l&&o.default.createElement("h2",{className:_("title")},l)),o.default.createElement("div",{className:_("content")},d&&o.default.createElement("div",{className:_("description")},d),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},j&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":h}),onClick:P,onKeyDown:function(e){return C(e,P)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(p.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":y}),onClick:w,onKeyDown:function(e){return C(e,w)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(p.default,{className:_("chevron")}))):null,o.default.createElement("div",null,h&&o.default.createElement("div",{className:_("css")},r),y&&o.default.createElement("div",{className:_("code")},n))))};x.propTypes=y,x.defaultProps={isExpanded:!1};t.Z=x},78530:function(e,t,n){var r=n(64836),l=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return c.Row}}),t.ZP=t.Di=void 0;var a=m(n(67294)),o=r(n(45697)),d=r(n(19845)),u=n(21538),c=m(n(37515)),i=r(n(54931));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var f=d.default.bind(i.default),s={children:o.default.node},_={isRequired:o.default.bool};(t.O=function(e){var t=e.children;return a.default.createElement(c.Cell,{className:f("bold")},t)}).propTypes=s,(t.Di=function(e){var t=e.children;return a.default.createElement(c.Cell,{className:f("code-block-override")},t)}).propTypes=s,(t.dS=function(e){var t=e.isRequired;return a.default.createElement(c.Cell,{className:f([t?["required"]:[]])},t?"required":"optional")}).propTypes=_,(t.mW=function(e){var t=e.children;return a.default.createElement(c.Cell,{className:f("code-block-override")},t)}).propTypes=s,(t.Ex=function(e){var t=e.children;return a.default.createElement(c.Cell,null,t)}).propTypes=s;var y=function(e){var t=e.children,n=(0,a.useContext)(u.ThemeContext);return a.default.createElement(c.default,{paddingStyle:"compact",className:f("table",n.className)},a.default.createElement(c.Header,{className:f("header")},a.default.createElement(c.HeaderCell,null,"Prop"),a.default.createElement(c.HeaderCell,null,"Type"),a.default.createElement(c.HeaderCell,null,"Required"),a.default.createElement(c.HeaderCell,null,"Default"),a.default.createElement(c.HeaderCell,null,"Description")),a.default.createElement(c.Body,null,t))};y.propTypes=s;t.ZP=y},35951:function(e,t,n){n.d(t,{Z:function(){return c}});n(67294);var r=n(81254),l=["components"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d={},u="wrapper";function c(e){var t=e.components,n=o(e,l);return(0,r.mdx)(u,a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},"// import themes\n@import './clinical-lowlight-theme/FormSelectDocCommon.module';\n@import './orion-fusion-theme/FormSelectDocCommon.module';\n\n:local {\n  .form-select {\n    max-width: 300px;\n  }\n\n  .controlled-button {\n    margin: 5px;\n  }\n  \n  .error-text {\n    color: var(--terra-core-docs-form-select-error-text-color, #e50000);\n    font-size: 0.857rem;\n    font-weight: normal;\n    line-height: 1.25;\n    margin-top: 0.357em;\n    outline: 0;\n    text-align: left;\n  }\n\n  .field-label {\n    font-weight: 700;\n  }\n}\n\n")))}c.isMDXComponent=!0},59385:function(e,t,n){n.d(t,{C:function(){return a}});var r=n(67294),l=n(22863),a=function(e){var t=e.url;return r.createElement(l.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.55.0",url:t})}},25253:function(e,t,n){n.d(t,{Z:function(){return i}});n(67294);var r=n(81254),l=n(78530),a=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={},c="wrapper";function i(e){var t=e.components,n=d(e,a);return(0,r.mdx)(c,o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.ZP,{mdxType:"PropsTable"},(0,r.mdx)(l.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"display"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(l.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The option display."))),(0,r.mdx)(l.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"disabled"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the optgroup is disabled."))),(0,r.mdx)(l.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"options"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,r.mdx)(l.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The array of select options.")))))}i.isMDXComponent=!0},36648:function(e,t,n){n.d(t,{Z:function(){return i}});n(67294);var r=n(81254),l=n(78530),a=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={},c="wrapper";function i(e){var t=e.components,n=d(e,a);return(0,r.mdx)(c,o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.ZP,{mdxType:"PropsTable"},(0,r.mdx)(l.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"display"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(l.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The option display."))),(0,r.mdx)(l.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"disabled"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the option is disabled."))),(0,r.mdx)(l.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"value"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'number',\n  type: 'string',\n],\n"))),(0,r.mdx)(l.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The option value.")))))}i.isMDXComponent=!0},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),l=i(n(45697)),a=i(n(93967)),o=i(n(19845)),d=i(n(50026)),u=i(n(16749)),c=["children","disableStripes","paddingStyle"];function i(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var f=o.default.bind(u.default),s={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},_=function(e){var t=e.children,n=e.disableStripes,l=e.paddingStyle,o=m(e,c),u=r.default.useContext(d.default),i=(0,a.default)(f("table",{striped:!n},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},u.className),o.className);return r.default.createElement("table",p({},o,{className:i}),t)};_.propTypes=s,_.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=_},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={children:l.default.node},c=function(e){var t=e.children,n=d(e,a);return r.default.createElement("tbody",n,t)};c.propTypes=u,c.defaultProps={children:[]};t.default=c},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={children:l.default.node},c=function(e){var t=e.children,n=d(e,a);return r.default.createElement("td",n,t)};c.propTypes=u,c.defaultProps={children:[]};t.default=c},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),l=d(n(45697)),a=d(n(29805)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c={children:l.default.node},i=function(e){var t=e.children,n=u(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,a.default.addScope(t,"col")))};i.propTypes=c,i.defaultProps={children:[]};t.default=i},38880:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={children:l.default.node},c=function(e){var t=e.children,n=d(e,a);return r.default.createElement("th",n,t)};c.propTypes=u,c.defaultProps={children:[]};t.default=c},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),l=c(n(45697)),a=c(n(19845)),o=c(n(16749)),d=c(n(29805)),u=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.default.bind(o.default),f={children:l.default.node},s=function(e){var t=e.children,n=p(e,u),l=m(["row"]);return r.default.createElement("tr",i({},n,{className:n.className?"".concat(l," ").concat(n.className):l}),d.default.addScope(t,"row"))};s.propTypes=f,s.defaultProps={children:[]};t.default=s},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=(r=n(67294))&&r.__esModule?r:{default:r};var a={addScope:function(e,t){var n=[];return l.default.Children.forEach(e,(function(e){n.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=a},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=c(n(32634)),l=c(n(80196)),a=c(n(70829)),o=c(n(8685)),d=c(n(19852)),u=c(n(38880));function c(e){return e&&e.__esModule?e:{default:e}}t.default=r.default},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(21969));function a(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var d=function(e){var t=o({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=d},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},56014:function(e,t,n){n.r(t),t.default={"form-select":"FormSelectDocCommon-module__form-select___tD5wJ","controlled-button":"FormSelectDocCommon-module__controlled-button___ByKvi","error-text":"FormSelectDocCommon-module__error-text___zMzj1","field-label":"FormSelectDocCommon-module__field-label___V4Msx"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);