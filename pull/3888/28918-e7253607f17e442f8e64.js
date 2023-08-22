"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[28918],{22863:function(e,a,t){var n=t(64836);a.Z=void 0;var l=n(t(67294)),r=n(t(45697)),d=n(t(47166)),m=n(t(17422)),o=d.default.bind(m.default),p={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},u=function(e){var a=e.src,t=e.name,n=e.url,r=e.version,d=l.default.createElement("a",{className:o("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},l.default.createElement("span",{className:o("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:o("badge-version")},"v".concat(r))),m=a?l.default.createElement("a",{className:o("badge"),href:a},l.default.createElement("span",{className:o("badge-name")},"github"),l.default.createElement("span",{className:o("badge-version")},"source")):void 0;return l.default.createElement("div",{className:o("badge-container")},d,m)};u.propTypes=p;var i=u;a.Z=i},49271:function(e,a,t){var n=t(64836),l=t(18698);a.Z=void 0;var r=n(t(27424)),d=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=f(a);if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(n,d,m):n[d]=e[d]}n.default=e,t&&t.set(e,n);return n}(t(67294)),m=n(t(45697)),o=n(t(47166)),p=t(21538),u=n(t(13810)),i=n(t(40931)),c=t(51051),s=n(t(53560));function f(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,t=new WeakMap;return(f=function(e){return e?t:a})(e)}var g=o.default.bind(s.default),x={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var a=e.example,t=e.exampleSrc,n=e.exampleCssSrc,l=e.title,m=e.description,o=e.isExpanded,s=(0,d.useState)(o),f=(0,r.default)(s,2),x=f[0],v=f[1],_=(0,d.useState)(!1),h=(0,r.default)(_,2),O=h[0],N=h[1],T=d.default.useContext(p.ThemeContext),S=void 0!==n,E=function(){N(!O),x&&v(!x)},j=function(){v(!x),O&&N(!O)},C=function(e,a){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),a())};return d.default.createElement("div",{className:g("template",T.className)},d.default.createElement("div",{className:g("header")},l&&d.default.createElement("h2",{className:g("title")},l)),d.default.createElement("div",{className:g("content")},m&&d.default.createElement("div",{className:g("description")},m),a),d.default.createElement("div",{className:g("footer")},t?d.default.createElement("div",{className:g("button-container")},S&&d.default.createElement("button",{type:"button",className:g("css-toggle","item",{"is-selected":O}),onClick:E,onKeyDown:function(e){return C(e,E)},onBlur:y,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(u.default,{className:g("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(i.default,{className:g("chevron")})),d.default.createElement("button",{type:"button",className:g("code-toggle","item",{"is-selected":x}),onClick:j,onKeyDown:function(e){return C(e,j)},onBlur:y,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(u.default,{className:g("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(i.default,{className:g("chevron")}))):null,d.default.createElement("div",null,O&&d.default.createElement("div",{className:g("css")},n),x&&d.default.createElement("div",{className:g("code")},t))))};v.propTypes=x,v.defaultProps={isExpanded:!1};var _=v;a.Z=_},78530:function(e,a,t){var n=t(64836),l=t(18698);Object.defineProperty(a,"X2",{enumerable:!0,get:function(){return p.Row}}),a.Ex=a.mW=a.dS=a.Di=a.O=a.ZP=void 0;var r=c(t(67294)),d=n(t(45697)),m=n(t(47166)),o=t(21538),p=c(t(37515)),u=n(t(54931));function i(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,t=new WeakMap;return(i=function(e){return e?t:a})(e)}function c(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=i(a);if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(n,d,m):n[d]=e[d]}return n.default=e,t&&t.set(e,n),n}var s=m.default.bind(u.default),f={children:d.default.node},g={isRequired:d.default.bool},x=function(e){var a=e.children;return r.default.createElement(p.Cell,{className:s("bold")},a)};a.O=x,x.propTypes=f;var y=function(e){var a=e.children;return r.default.createElement(p.Cell,{className:s("code-block-override")},a)};a.Di=y,y.propTypes=f;var b=function(e){var a=e.isRequired;return r.default.createElement(p.Cell,{className:s([a?["required"]:[]])},a?"required":"optional")};a.dS=b,b.propTypes=g;var v=function(e){var a=e.children;return r.default.createElement(p.Cell,{className:s("code-block-override")},a)};a.mW=v,v.propTypes=f;var _=function(e){var a=e.children;return r.default.createElement(p.Cell,null,a)};a.Ex=_,_.propTypes=f;var h=function(e){var a=e.children,t=(0,r.useContext)(o.ThemeContext);return r.default.createElement(p.default,{paddingStyle:"compact",className:s("table",t.className)},r.default.createElement(p.Header,{className:s("header")},r.default.createElement(p.HeaderCell,null,"Prop"),r.default.createElement(p.HeaderCell,null,"Type"),r.default.createElement(p.HeaderCell,null,"Required"),r.default.createElement(p.HeaderCell,null,"Default"),r.default.createElement(p.HeaderCell,null,"Description")),r.default.createElement(p.Body,null,a))};h.propTypes=f;var O=h;a.ZP=O},48745:function(e,a,t){t.r(a),t.d(a,{default:function(){return L}});var n=t(67294),l=t(81254),r=t(39239),d=t(69520),m=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function p(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u={};function i(e){var a=e.components,t=p(e,m);return(0,l.mdx)("wrapper",o({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\nimport \'./Spacer.module.scss\';\n\nconst SpacerExample = () => (\n  <div>\n    <Spacer className="spacerdemodefault" paddingTop="large+4" paddingBottom="large+4" paddingLeft="large+4" paddingRight="large+4" isInlineBlock>\n      <Button text="Default" />\n    </Spacer>\n    <Spacer className="spacerdemoprimary" paddingTop="large+2" paddingBottom="large+2" paddingLeft="large+2" paddingRight="large+2" isInlineBlock>\n      <Button text="Emphasis" variant="emphasis" />\n    </Spacer>\n  </div>\n);\n\nexport default SpacerExample;\n\n')))}i.isMDXComponent=!0;var c=t(49271),s=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},f.apply(this,arguments)}function g(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var x={};function y(e){var a=e.components,t=g(e,s);return(0,l.mdx)("wrapper",f({},x,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-scss"},".spacerdemodefault {\n  background: rgb(195, 207, 142);\n}\n\n.spacerdemoprimary {\n  background: rgb(100, 207, 142);\n}\n\n")))}y.isMDXComponent=!0;var b=function(e){var a=e.title,t=e.description,l=e.isExpanded;return n.createElement(c.Z,{title:a||"Spacer Example",description:t,example:n.createElement(d.Z,null),exampleCssSrc:n.createElement(y,null),exampleSrc:n.createElement(i,null),isExpanded:l})},v=t(72278),_=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},h.apply(this,arguments)}function O(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var N={};function T(e){var a=e.components,t=O(e,_);return(0,l.mdx)("wrapper",h({},N,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\nimport \'./Spacer.module.scss\';\n\nconst SpacerShortVsLongHandExample = () => (\n  <div>\n    <Spacer className="spacerdemoprimary" padding="large small" margin="medium large+1" isInlineBlock>\n      <Button text="Shorthand" />\n    </Spacer>\n    <Spacer className="spacerdemodefault" paddingTop="large" paddingBottom="large" paddingLeft="small" paddingRight="small" marginTop="medium" marginBottom="medium" marginLeft="large+1" marginRight="large+1" isInlineBlock>\n      <Button text="Longhand" />\n    </Spacer>\n  </div>\n);\n\nexport default SpacerShortVsLongHandExample;\n\n')))}T.isMDXComponent=!0;var S=function(e){var a=e.title,t=e.description,l=e.isExpanded;return n.createElement(c.Z,{title:a||"Spacer Short Vs Long Hand Example",description:t,example:n.createElement(v.Z,null),exampleCssSrc:n.createElement(y,null),exampleSrc:n.createElement(T,null),isExpanded:l})},E=t(78530),j=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},C.apply(this,arguments)}function w(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var P={},R="wrapper";function D(e){var a=e.components,t=w(e,j);return(0,l.mdx)(R,C({},P,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)(E.ZP,{mdxType:"PropsTable"},(0,l.mdx)(E.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(E.O,{mdxType:"PropNameCell"},"children"),(0,l.mdx)(E.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(E.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Child Nodes."))),(0,l.mdx)(E.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(E.O,{mdxType:"PropNameCell"},"margin"),(0,l.mdx)(E.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,l.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Sets margin in a syntax similar to the standard CSS spec ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin"},"https://developer.mozilla.org/en-US/docs/Web/CSS/margin"),". One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,l.mdx)(E.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(E.O,{mdxType:"PropNameCell"},"marginTop"),(0,l.mdx)(E.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'small-2'\n  'small-1'\n  'small'\n  'medium'\n  'large'\n  'large+1'\n  'large+2'\n  'large+3'\n  'large+4'\n],\n"))),(0,l.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"SpacerSizes.NONE\n"))),(0,l.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Sets top margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,l.mdx)(E.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(E.O,{mdxType:"PropNameCell"},"marginBottom"),(0,l.mdx)(E.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'small-2'\n  'small-1'\n  'small'\n  'medium'\n  'large'\n  'large+1'\n  'large+2'\n  'large+3'\n  'large+4'\n],\n"))),(0,l.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"SpacerSizes.NONE\n"))),(0,l.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Sets bottom margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,l.mdx)(E.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(E.O,{mdxType:"PropNameCell"},"marginLeft"),(0,l.mdx)(E.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'small-2'\n  'small-1'\n  'small'\n  'medium'\n  'large'\n  'large+1'\n  'large+2'\n  'large+3'\n  'large+4'\n],\n"))),(0,l.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"SpacerSizes.NONE\n"))),(0,l.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Sets left margin One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,l.mdx)(E.X2,{key:"ROW6",mdxType:"Row"},(0,l.mdx)(E.O,{mdxType:"PropNameCell"},"marginRight"),(0,l.mdx)(E.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'small-2'\n  'small-1'\n  'small'\n  'medium'\n  'large'\n  'large+1'\n  'large+2'\n  'large+3'\n  'large+4'\n],\n"))),(0,l.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"SpacerSizes.NONE\n"))),(0,l.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Sets right margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,l.mdx)(E.X2,{key:"ROW7",mdxType:"Row"},(0,l.mdx)(E.O,{mdxType:"PropNameCell"},"padding"),(0,l.mdx)(E.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,l.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Sets padding in a syntax similar to the standard CSS spec ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding"},"https://developer.mozilla.org/en-US/docs/Web/CSS/padding"),". One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,l.mdx)(E.X2,{key:"ROW8",mdxType:"Row"},(0,l.mdx)(E.O,{mdxType:"PropNameCell"},"paddingTop"),(0,l.mdx)(E.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'small-2'\n  'small-1'\n  'small'\n  'medium'\n  'large'\n  'large+1'\n  'large+2'\n  'large+3'\n  'large+4'\n],\n"))),(0,l.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"SpacerSizes.NONE\n"))),(0,l.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Sets top padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,l.mdx)(E.X2,{key:"ROW9",mdxType:"Row"},(0,l.mdx)(E.O,{mdxType:"PropNameCell"},"paddingBottom"),(0,l.mdx)(E.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'small-2'\n  'small-1'\n  'small'\n  'medium'\n  'large'\n  'large+1'\n  'large+2'\n  'large+3'\n  'large+4'\n],\n"))),(0,l.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"SpacerSizes.NONE\n"))),(0,l.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Sets bottom padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,l.mdx)(E.X2,{key:"ROW10",mdxType:"Row"},(0,l.mdx)(E.O,{mdxType:"PropNameCell"},"paddingLeft"),(0,l.mdx)(E.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'small-2'\n  'small-1'\n  'small'\n  'medium'\n  'large'\n  'large+1'\n  'large+2'\n  'large+3'\n  'large+4'\n],\n"))),(0,l.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"SpacerSizes.NONE\n"))),(0,l.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Sets left padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,l.mdx)(E.X2,{key:"ROW11",mdxType:"Row"},(0,l.mdx)(E.O,{mdxType:"PropNameCell"},"paddingRight"),(0,l.mdx)(E.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'small-2'\n  'small-1'\n  'small'\n  'medium'\n  'large'\n  'large+1'\n  'large+2'\n  'large+3'\n  'large+4'\n],\n"))),(0,l.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"SpacerSizes.NONE\n"))),(0,l.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Sets right padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'."))),(0,l.mdx)(E.X2,{key:"ROW12",mdxType:"Row"},(0,l.mdx)(E.O,{mdxType:"PropNameCell"},"isInlineBlock"),(0,l.mdx)(E.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(E.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Sets the display to be inline-block.")))))}D.isMDXComponent=!0;var k=["components"];function M(){return M=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},M.apply(this,arguments)}function B(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var W={},q="wrapper";function L(e){var a=e.components,t=B(e,k);return(0,l.mdx)(q,M({},W,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)(r.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-spacer"},"Terra Spacer"),(0,l.mdx)("p",null,"This component is used to provide margin and/or padding space between two components based on the given values."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-spacer"))))),(0,l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,l.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,l.mdx)("h2",{id:"naming-convention"},"Naming Convention"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Spacing scale values"),(0,l.mdx)("th",{parentName:"tr",align:null},"Computed REM Value"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"none"),(0,l.mdx)("td",{parentName:"tr",align:null},"0")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"small-2"),(0,l.mdx)("td",{parentName:"tr",align:null},"0.2142857143rem")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"small-1"),(0,l.mdx)("td",{parentName:"tr",align:null},"0.3571428571rem")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"small"),(0,l.mdx)("td",{parentName:"tr",align:null},"0.5rem")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"medium"),(0,l.mdx)("td",{parentName:"tr",align:null},"0.7142857143rem")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"large"),(0,l.mdx)("td",{parentName:"tr",align:null},"0.8571428571rem")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"large+1"),(0,l.mdx)("td",{parentName:"tr",align:null},"1.0714285714rem")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"large+2"),(0,l.mdx)("td",{parentName:"tr",align:null},"1.4285714286rem")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"large+3"),(0,l.mdx)("td",{parentName:"tr",align:null},"2.1428571429rem")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"large+4"),(0,l.mdx)("td",{parentName:"tr",align:null},"3.5714285714rem")))),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Spacer from 'terra-spacer';\n")),(0,l.mdx)("h2",{id:"component-features"},"Component Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(b,{title:"Spacer",description:"Spacing default button with a padding value of large+4 and primary button with padding value of large+2",mdxType:"Spacer"}),(0,l.mdx)(S,{title:"Spacer Short Vs Long Hand",mdxType:"SpacerShortVsLongHand"}),(0,l.mdx)("h2",{id:"spacer-props"},"Spacer Props"),(0,l.mdx)(D,{mdxType:"SpacerPropsTable"}))}L.isMDXComponent=!0},39239:function(e,a,t){t.d(a,{C:function(){return r}});var n=t(67294),l=t(22863),r=function(e){var a=e.url;return n.createElement(l.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-spacer",name:"terra-spacer",version:"3.61.0",url:a})}},69520:function(e,a,t){a.Z=void 0;var n=d(t(67294)),l=d(t(43868)),r=d(t(50787));function d(e){return e&&e.__esModule?e:{default:e}}t(81703);var m=function(){return n.default.createElement("div",null,n.default.createElement(r.default,{className:"spacerdemodefault",paddingTop:"large+4",paddingBottom:"large+4",paddingLeft:"large+4",paddingRight:"large+4",isInlineBlock:!0},n.default.createElement(l.default,{text:"Default"})),n.default.createElement(r.default,{className:"spacerdemoprimary",paddingTop:"large+2",paddingBottom:"large+2",paddingLeft:"large+2",paddingRight:"large+2",isInlineBlock:!0},n.default.createElement(l.default,{text:"Emphasis",variant:"emphasis"})))};a.Z=m},72278:function(e,a,t){a.Z=void 0;var n=d(t(67294)),l=d(t(43868)),r=d(t(50787));function d(e){return e&&e.__esModule?e:{default:e}}t(81703);var m=function(){return n.default.createElement("div",null,n.default.createElement(r.default,{className:"spacerdemoprimary",padding:"large small",margin:"medium large+1",isInlineBlock:!0},n.default.createElement(l.default,{text:"Shorthand"})),n.default.createElement(r.default,{className:"spacerdemodefault",paddingTop:"large",paddingBottom:"large",paddingLeft:"small",paddingRight:"small",marginTop:"medium",marginBottom:"medium",marginLeft:"large+1",marginRight:"large+1",isInlineBlock:!0},n.default.createElement(l.default,{text:"Longhand"})))};a.Z=m},32634:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=u(t(67294)),l=u(t(45697)),r=u(t(94184)),d=u(t(47166)),m=u(t(50026)),o=u(t(16749)),p=["children","disableStripes","paddingStyle"];function u(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function c(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=d.default.bind(o.default),f={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},g=function(e){var a=e.children,t=e.disableStripes,l=e.paddingStyle,d=c(e,p),o=n.default.useContext(m.default),u=(0,r.default)(s("table",{striped:!t},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},o.className),d.className);return n.default.createElement("table",i({},d,{className:u}),a)};g.propTypes=f,g.defaultProps={disableStripes:!1,paddingStyle:"none"};var x=g;a.default=x},80196:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=d(t(67294)),l=d(t(45697)),r=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function m(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o={children:l.default.node},p=function(e){var a=e.children,t=m(e,r);return n.default.createElement("tbody",t,a)};p.propTypes=o,p.defaultProps={children:[]};var u=p;a.default=u},8685:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=d(t(67294)),l=d(t(45697)),r=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function m(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o={children:l.default.node},p=function(e){var a=e.children,t=m(e,r);return n.default.createElement("td",t,a)};p.propTypes=o,p.defaultProps={children:[]};var u=p;a.default=u},19852:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=m(t(67294)),l=m(t(45697)),r=m(t(29805)),d=["children"];function m(e){return e&&e.__esModule?e:{default:e}}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p={children:l.default.node},u=function(e){var a=e.children,t=o(e,d);return n.default.createElement("thead",t,n.default.createElement("tr",null,r.default.addScope(a,"col")))};u.propTypes=p,u.defaultProps={children:[]};var i=u;a.default=i},80876:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=d(t(67294)),l=d(t(45697)),r=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function m(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o={children:l.default.node},p=function(e){var a=e.children,t=m(e,r);return n.default.createElement("th",t,a)};p.propTypes=o,p.defaultProps={children:[]};var u=p;a.default=u},70829:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=p(t(67294)),l=p(t(45697)),r=p(t(47166)),d=p(t(16749)),m=p(t(29805)),o=["children"];function p(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.default.bind(d.default),s={children:l.default.node},f=function(e){var a=e.children,t=i(e,o),l=c(["row"]);return n.default.createElement("tr",u({},t,{className:t.className?"".concat(l," ").concat(t.className):l}),m.default.addScope(a,"row"))};f.propTypes=s,f.defaultProps={children:[]};var g=f;a.default=g},29805:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,l=(n=t(67294))&&n.__esModule?n:{default:n};var r={addScope:function(e,a){var t=[];return l.default.Children.forEach(e,(function(e){t.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?a:void 0}))})),t}};a.default=r},37515:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(a,"Cell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(a,"Header",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(a,"HeaderCell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(a,"Row",{enumerable:!0,get:function(){return r.default}}),a.default=void 0;var n=p(t(32634)),l=p(t(80196)),r=p(t(70829)),d=p(t(8685)),m=p(t(19852)),o=p(t(80876));function p(e){return e&&e.__esModule?e:{default:e}}var u=n.default;a.default=u},13810:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(67294)),l=r(t(21969));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}var m=function(e){var a=d({},e);return n.default.createElement(l.default,a,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var o=m;a.default=o},17422:function(e,a,t){t.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,a,t){t.r(a),a.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,a,t){t.r(a),a.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},81703:function(e,a,t){t.r(a),a.default={}},16749:function(e,a,t){t.r(a),a.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);