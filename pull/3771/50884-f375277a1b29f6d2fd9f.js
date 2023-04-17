"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[50884],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),d=r(n(17422)),i=o.default.bind(d.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),d=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},o,d)};c.propTypes=u;var p=c;t.Z=p},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=l?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),d=r(n(45697)),i=r(n(47166)),u=n(21538),c=r(n(13810)),p=r(n(40931)),s=n(51051),m=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var y=i.default.bind(m.default),b={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,d=e.description,i=e.isExpanded,m=(0,o.useState)(i),f=(0,l.default)(m,2),b=f[0],x=f[1],h=(0,o.useState)(!1),_=(0,l.default)(h,2),O=_[0],j=_[1],T=o.default.useContext(u.ThemeContext),E=void 0!==r,w=function(){j(!O),b&&x(!b)},N=function(){x(!b),O&&j(!O)},C=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:y("template",T.className)},o.default.createElement("div",{className:y("header")},a&&o.default.createElement("h2",{className:y("title")},a)),o.default.createElement("div",{className:y("content")},d&&o.default.createElement("div",{className:y("description")},d),t),o.default.createElement("div",{className:y("footer")},n?o.default.createElement("div",{className:y("button-container")},E&&o.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":O}),onClick:w,onKeyDown:function(e){return C(e,w)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:y("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(p.default,{className:y("chevron")})),o.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":b}),onClick:N,onKeyDown:function(e){return C(e,N)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:y("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(p.default,{className:y("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:y("css")},r),b&&o.default.createElement("div",{className:y("code")},n))))};x.propTypes=b,x.defaultProps={isExpanded:!1};var h=x;t.Z=h},78530:function(e,t,n){var r=n(64836),a=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return u.Row}}),t.ZP=t.Di=void 0;var l=s(n(67294)),o=r(n(45697)),d=r(n(47166)),i=n(21538),u=s(n(37515)),c=r(n(54931));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=l?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var m=d.default.bind(c.default),f={children:o.default.node},y={isRequired:o.default.bool},b=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:m("bold")},t)};t.O=b,b.propTypes=f;var g=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:m("code-block-override")},t)};t.Di=g,g.propTypes=f;var v=function(e){var t=e.isRequired;return l.default.createElement(u.Cell,{className:m([t?["required"]:[]])},t?"required":"optional")};t.dS=v,v.propTypes=y;var x=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:m("code-block-override")},t)};t.mW=x,x.propTypes=f;var h=function(e){var t=e.children;return l.default.createElement(u.Cell,null,t)};t.Ex=h,h.propTypes=f;var _=function(e){var t=e.children,n=(0,l.useContext)(i.ThemeContext);return l.default.createElement(u.default,{paddingStyle:"compact",className:m("table",n.className)},l.default.createElement(u.Header,{className:m("header")},l.default.createElement(u.HeaderCell,null,"Prop"),l.default.createElement(u.HeaderCell,null,"Type"),l.default.createElement(u.HeaderCell,null,"Required"),l.default.createElement(u.HeaderCell,null,"Default"),l.default.createElement(u.HeaderCell,null,"Description")),l.default.createElement(u.Body,null,t))};_.propTypes=f;var O=_;t.ZP=O},50884:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var r=n(67294),a=n(81254),l=n(95668),o=n(48883),d=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={};function p(e){var t=e.components,n=u(e,d);return(0,a.mdx)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport StatusView from \'terra-status-view\';\n\nconst ToggleVariants = () => {\n  const [variant, setVariant] = useState(\'error\');\n\n  const handleOnSelect = (event) => {\n    setVariant(event.target.value);\n  };\n\n  return (\n    <div>\n      <StatusView variant={variant} />\n      <fieldset>\n        <legend>Change Variant</legend>\n        <select aria-label="changeVariant" id="statusViewVariant" name="statusViewVariant" value={variant} onChange={handleOnSelect}>\n          <option value="error">Error</option>\n          <option value="no-data">No Data</option>\n          <option value="no-matching-results">No Matching Results</option>\n          <option value="not-authorized">Not Authorized</option>\n        </select>\n      </fieldset>\n    </div>\n  );\n};\n\nexport default ToggleVariants;\n\n')))}p.isMDXComponent=!0;var s=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(s.Z,{title:t||"Toggle Variants",description:n,example:r.createElement(o.Z,null),exampleSrc:r.createElement(p,null),isExpanded:a})},f=n(96406),y=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function x(e){var t=e.components,n=g(e,y);return(0,a.mdx)("wrapper",b({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport StatusView from \'terra-status-view\';\n\nconst ToggleAlignmentAndGlyph = () => {\n  const [isAlignedTop, setIsAlignedTop] = useState(false);\n  const [isGlyphHidden, setIsGlyphHidden] = useState(false);\n\n  const handleOnAlignChange = () => {\n    setIsAlignedTop(!isAlignedTop);\n  };\n\n  const handleOnGlyphChange = () => {\n    setIsGlyphHidden(!isGlyphHidden);\n  };\n\n  /* eslint-disable react/forbid-dom-props */\n  return (\n    <div>\n      <div style={{ height: \'400px\', border: \'1px dashed black\' }}>\n        <StatusView variant="error" isAlignedTop={isAlignedTop} isGlyphHidden={isGlyphHidden} />\n      </div>\n      <fieldset>\n        <legend>Toggle alignment and glyph</legend>\n        <div>\n          <input id="isAlignedTop" type="checkbox" onChange={handleOnAlignChange} />\n          <label htmlFor="isAlignedTop">isAlignedTop</label>\n        </div>\n        <div>\n          <input id="isGlyphHidden" type="checkbox" onChange={handleOnGlyphChange} />\n          <label htmlFor="isGlyphHidden">isGlyphHidden</label>\n        </div>\n      </fieldset>\n    </div>\n  );\n};\n\nexport default ToggleAlignmentAndGlyph;\n\n')))}x.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(s.Z,{title:t||"Toggle Alignment And Glyph",description:n,example:r.createElement(f.Z,null),exampleSrc:r.createElement(x,null),isExpanded:a})},_=n(92037),O=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E={};function w(e){var t=e.components,n=T(e,O);return(0,a.mdx)("wrapper",j({},E,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport IconDiamond from 'terra-icon/lib/icon/IconDiamond';\nimport StatusView from 'terra-status-view';\n\nconst StatusViewButtons = [\n  {\n    text: 'Action 1',\n    key: 1,\n  }, {\n    text: 'Action 2',\n    key: 2,\n  },\n];\n\nconst Custom = () => (\n  <StatusView\n    message=\"Custom Message\"\n    customGlyph={<IconDiamond />}\n    title=\"Custom Title\"\n    buttonAttrs={StatusViewButtons}\n  />\n);\n\nexport default Custom;\n\n")))}w.isMDXComponent=!0;var N=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(s.Z,{title:t||"Custom",description:n,example:r.createElement(_.Z,null),exampleSrc:r.createElement(w,null),isExpanded:a})},C=n(78530),S=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k={},M="wrapper";function A(e){var t=e.components,n=D(e,S);return(0,a.mdx)(M,P({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(C.ZP,{mdxType:"PropsTable"},(0,a.mdx)(C.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"buttonAttrs"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  shape: {\n    0: {\n      type: 'undefined',\n    },\n    1: {\n      type: 'undefined',\n    },\n    2: {\n      type: 'undefined',\n    },\n    3: {\n      type: 'undefined',\n    },\n    4: {\n      type: 'undefined',\n    },\n    5: {\n      type: 'undefined',\n    },\n    6: {\n      type: 'undefined',\n    },\n    7: {\n      type: 'undefined',\n    },\n    8: {\n      type: 'undefined',\n    },\n    9: {\n      type: 'undefined',\n    },\n    10: {\n      type: 'undefined',\n    },\n    11: {\n      type: 'undefined',\n    },\n    12: {\n      type: 'undefined',\n    },\n    13: {\n      type: 'undefined',\n    },\n    14: {\n      type: 'undefined',\n    },\n    15: {\n      type: 'undefined',\n    },\n  },\n}],\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"An array of objects containing terra-button properties. A key attribute is required for each object.\nThis array is used to render buttons in the bottom section.\nExample:",(0,a.mdx)("inlineCode",{parentName:"p"},"[{ text: 'Button 1', key: 1, variant: 'neutral', onClick: onClickFunction}]")))),(0,a.mdx)(C.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"customGlyph"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Display a custom glyph. Overrides a variant's default glyph.\nSet ",(0,a.mdx)("inlineCode",{parentName:"p"},"focusable=false")," for svg element used as ",(0,a.mdx)("inlineCode",{parentName:"p"},"customGlyph"),"."))),(0,a.mdx)(C.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"isAlignedTop"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,'Aligns the component at the top of the container rather than "centered"'))),(0,a.mdx)(C.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"isGlyphHidden"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Determines if the glyph should be displayed."))),(0,a.mdx)(C.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"message"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The descriptive text, displayed under the title."))),(0,a.mdx)(C.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"title"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The title displayed under the glyph. Variants contain default titles that can be overriden by this prop."))),(0,a.mdx)(C.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"variant"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'no-data'\n  'no-matching-results'\n  'not-authorized'\n  'error'\n],\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the glyph and title using a pre-baked variant. One of the following: ",(0,a.mdx)("inlineCode",{parentName:"p"},"no-data"),",\n",(0,a.mdx)("inlineCode",{parentName:"p"},"no-matching-results"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"not-authorized"),", or ",(0,a.mdx)("inlineCode",{parentName:"p"},"error"))))))}A.isMDXComponent=!0;var R=["components"];function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var G={},W="wrapper";function q(e){var t=e.components,n=I(e,R);return(0,a.mdx)(W,V({},G,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-status-view"},"Terra Status View"),(0,a.mdx)("p",null,"debugger;\nPresents an icon, title, message, and/or buttons based on a status type scenario. Scenarios include ",(0,a.mdx)("inlineCode",{parentName:"p"},"no-data"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"no-matching-results"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"not-authorized"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"error"),", or a custom scenario."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-status-view"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,a.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import StatusView from 'terra-status-view';\n")),(0,a.mdx)("h2",{id:"implementation-notes"},"Implementation Notes:"),(0,a.mdx)("p",null,"The Status-View component must be composed inside the ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-core/components/terra-base/base/base"},"Base")," component with a locale in order for it to load the correct translation strings.\nSet ",(0,a.mdx)("inlineCode",{parentName:"p"},"focusable=false")," for svg element used for ",(0,a.mdx)("inlineCode",{parentName:"p"},"customGlyph")," prop, to prevent focusing of the svg in IE10."),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(m,{title:"Variants",mdxType:"ToggleVariants"}),(0,a.mdx)(N,{title:"Custom: Icon + message + buttons",mdxType:"Custom"}),(0,a.mdx)(h,{mdxType:"ToggleAlignmentAndGlyph"}),(0,a.mdx)("h2",{id:"status-view-props"},"Status View Props"),(0,a.mdx)(A,{mdxType:"StatusViewPropsTable"}))}q.isMDXComponent=!0},95668:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-status-view",name:"terra-status-view",version:"4.54.0",url:t})}},92037:function(e,t,n){t.Z=void 0;var r=o(n(67294)),a=o(n(24677)),l=o(n(3741));function o(e){return e&&e.__esModule?e:{default:e}}var d=[{text:"Action 1",key:1},{text:"Action 2",key:2}],i=function(){return r.default.createElement(l.default,{message:"Custom Message",customGlyph:r.default.createElement(a.default,null),title:"Custom Title",buttonAttrs:d})};t.Z=i},96406:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a,l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=(a=n(3741))&&a.__esModule?a:{default:a};function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,d=[],i=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=l.call(n)).done)&&(d.push(r.value),d.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return d}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(){var e=i((0,l.useState)(!1),2),t=e[0],n=e[1],r=i((0,l.useState)(!1),2),a=r[0],d=r[1];return l.default.createElement("div",null,l.default.createElement("div",{style:{height:"400px",border:"1px dashed black"}},l.default.createElement(o.default,{variant:"error",isAlignedTop:t,isGlyphHidden:a})),l.default.createElement("fieldset",null,l.default.createElement("legend",null,"Toggle alignment and glyph"),l.default.createElement("div",null,l.default.createElement("input",{id:"isAlignedTop",type:"checkbox",onChange:function(){n(!t)}}),l.default.createElement("label",{htmlFor:"isAlignedTop"},"isAlignedTop")),l.default.createElement("div",null,l.default.createElement("input",{id:"isGlyphHidden",type:"checkbox",onChange:function(){d(!a)}}),l.default.createElement("label",{htmlFor:"isGlyphHidden"},"isGlyphHidden"))))};t.Z=c},48883:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a,l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=(a=n(3741))&&a.__esModule?a:{default:a};function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,d=[],i=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=l.call(n)).done)&&(d.push(r.value),d.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return d}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(){var e=i((0,l.useState)("error"),2),t=e[0],n=e[1];return l.default.createElement("div",null,l.default.createElement(o.default,{variant:t}),l.default.createElement("fieldset",null,l.default.createElement("legend",null,"Change Variant"),l.default.createElement("select",{"aria-label":"changeVariant",id:"statusViewVariant",name:"statusViewVariant",value:t,onChange:function(e){n(e.target.value)}},l.default.createElement("option",{value:"error"},"Error"),l.default.createElement("option",{value:"no-data"},"No Data"),l.default.createElement("option",{value:"no-matching-results"},"No Matching Results"),l.default.createElement("option",{value:"not-authorized"},"Not Authorized"))))};t.Z=c},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(94184)),o=c(n(47166)),d=c(n(50026)),i=c(n(16749)),u=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.default.bind(i.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=s(e,u),i=r.default.useContext(d.default),c=(0,l.default)(m("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},i.className),o.className);return r.default.createElement("table",p({},o,{className:c}),t)};y.propTypes=f,y.defaultProps={disableStripes:!1,paddingStyle:"none"};var b=y;t.default=b},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=d(e,l);return r.default.createElement("tbody",n,t)};u.propTypes=i,u.defaultProps={children:[]};var c=u;t.default=c},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=d(e,l);return r.default.createElement("td",n,t)};u.propTypes=i,u.defaultProps={children:[]};var c=u;t.default=c},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),l=d(n(29805)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={children:a.default.node},c=function(e){var t=e.children,n=i(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};c.propTypes=u,c.defaultProps={children:[]};var p=c;t.default=p},80876:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=d(e,l);return r.default.createElement("th",n,t)};u.propTypes=i,u.defaultProps={children:[]};var c=u;t.default=c},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(47166)),o=u(n(16749)),d=u(n(29805)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.default.bind(o.default),m={children:a.default.node},f=function(e){var t=e.children,n=p(e,i),a=s(["row"]);return r.default.createElement("tr",c({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),d.default.addScope(t,"row"))};f.propTypes=m,f.defaultProps={children:[]};var y=f;t.default=y},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(67294))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=u(n(32634)),a=u(n(80196)),l=u(n(70829)),o=u(n(8685)),d=u(n(19852)),i=u(n(80876));function u(e){return e&&e.__esModule?e:{default:e}}var c=r.default;t.default=c},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var d=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=d;t.default=i},24677:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(94184)),l=u(n(47166)),o=u(n(50026)),d=u(n(21969)),i=u(n(70123));function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var p=l.default.bind(i.default),s=function(e){var t=c({},e),n=r.default.useContext(o.default),l=(0,a.default)(p("IconDiamond",n.className),e.className);return r.default.createElement(d.default,c({},t,{className:l}),r.default.createElement("path",{fill:"#78288C",d:"M24.8 47.7l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.2.4 1.6 0z"}))};s.displayName="IconDiamond",s.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var m=s;t.default=m},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}},70123:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"IconDiamond-module__orion-fusion-theme___NVjPG","clinical-lowlight-theme":"IconDiamond-module__clinical-lowlight-theme___GnQ6j",IconDiamond:"IconDiamond-module__IconDiamond___-swwL"}}}]);