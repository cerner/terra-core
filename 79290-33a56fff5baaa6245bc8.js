"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[79290],{22863:function(e,t,a){var l=a(64836);t.Z=void 0;var r=l(a(67294)),n=l(a(45697)),o=l(a(47166)),d=l(a(17422)),u=o.default.bind(d.default),i={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},c=function(e){var t=e.src,a=e.name,l=e.url,n=e.version,o=r.default.createElement("a",{className:u("badge"),href:l||"https://www.npmjs.org/package/".concat(a,"/v/").concat(n)},r.default.createElement("span",{className:u("badge-name")},l?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(n))),d=t?r.default.createElement("a",{className:u("badge"),href:t},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},o,d)};c.propTypes=i;var s=c;t.Z=s},49271:function(e,t,a){var l=a(64836),r=a(18698);t.Z=void 0;var n=l(a(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=n?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(l,o,d):l[o]=e[o]}l.default=e,a&&a.set(e,l);return l}(a(67294)),d=l(a(45697)),u=l(a(47166)),i=a(21538),c=l(a(13810)),s=l(a(40931)),m=a(51051),p=l(a(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var _=u.default.bind(p.default),g={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,a=e.exampleSrc,l=e.exampleCssSrc,r=e.title,d=e.description,u=e.isExpanded,p=(0,o.useState)(u),f=(0,n.default)(p,2),g=f[0],x=f[1],v=(0,o.useState)(!1),h=(0,n.default)(v,2),O=h[0],T=h[1],E=o.default.useContext(i.ThemeContext),P=void 0!==l,j=function(){T(!O),g&&x(!g)},N=function(){x(!g),O&&T(!O)},C=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",E.className)},o.default.createElement("div",{className:_("header")},r&&o.default.createElement("h2",{className:_("title")},r)),o.default.createElement("div",{className:_("content")},d&&o.default.createElement("div",{className:_("description")},d),t),o.default.createElement("div",{className:_("footer")},a?o.default.createElement("div",{className:_("button-container")},P&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":O}),onClick:j,onKeyDown:function(e){return C(e,j)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":g}),onClick:N,onKeyDown:function(e){return C(e,N)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:_("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:_("css")},l),g&&o.default.createElement("div",{className:_("code")},a))))};x.propTypes=g,x.defaultProps={isExpanded:!1};var v=x;t.Z=v},78530:function(e,t,a){var l=a(64836),r=a(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return i.Row}}),t.ZP=t.Di=void 0;var n=m(a(67294)),o=l(a(45697)),d=l(a(47166)),u=a(21538),i=m(a(37515)),c=l(a(54931));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=n?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(l,o,d):l[o]=e[o]}return l.default=e,a&&a.set(e,l),l}var p=d.default.bind(c.default),f={children:o.default.node},_={isRequired:o.default.bool},g=function(e){var t=e.children;return n.default.createElement(i.Cell,{className:p("bold")},t)};t.O=g,g.propTypes=f;var b=function(e){var t=e.children;return n.default.createElement(i.Cell,{className:p("code-block-override")},t)};t.Di=b,b.propTypes=f;var y=function(e){var t=e.isRequired;return n.default.createElement(i.Cell,{className:p([t?["required"]:[]])},t?"required":"optional")};t.dS=y,y.propTypes=_;var x=function(e){var t=e.children;return n.default.createElement(i.Cell,{className:p("code-block-override")},t)};t.mW=x,x.propTypes=f;var v=function(e){var t=e.children;return n.default.createElement(i.Cell,null,t)};t.Ex=v,v.propTypes=f;var h=function(e){var t=e.children,a=(0,n.useContext)(u.ThemeContext);return n.default.createElement(i.default,{paddingStyle:"compact",className:p("table",a.className)},n.default.createElement(i.Header,{className:p("header")},n.default.createElement(i.HeaderCell,null,"Prop"),n.default.createElement(i.HeaderCell,null,"Type"),n.default.createElement(i.HeaderCell,null,"Required"),n.default.createElement(i.HeaderCell,null,"Default"),n.default.createElement(i.HeaderCell,null,"Description")),n.default.createElement(i.Body,null,t))};h.propTypes=f;var O=h;t.ZP=O},10590:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});a(67294);var l=a(81254),r=a(39651),n=a(98059),o=a(20457),d=a(78530),u=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s={},m="wrapper";function p(e){var t=e.components,a=c(e,u);return(0,l.mdx)(m,i({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(d.ZP,{mdxType:"PropsTable"},(0,l.mdx)(d.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"onPageChange"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(d.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Function to be executed when a navigation element is selected."))),(0,l.mdx)(d.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"selectedPage"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The active/selected page."))),(0,l.mdx)(d.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"totalCount"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Total number of all items being paginated."))),(0,l.mdx)(d.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"itemCountPerPage"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Total number of items per page."))),(0,l.mdx)(d.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,(0,l.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nPreferred method: Allows consumers to create an accessible name for the paginator by adding the ID of heading that describes paginator content."))),(0,l.mdx)(d.X2,{key:"ROW6",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,(0,l.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nAllows consumers to create an accessible name for the paginator by adding a meaningful and descriptive text string."))),(0,l.mdx)(d.X2,{key:"ROW7",mdxType:"Row"},(0,l.mdx)(d.O,{mdxType:"PropNameCell"},"pageLabel"),(0,l.mdx)(d.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,(0,l.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nAllows user to set custom page label. ",(0,l.mdx)("em",{parentName:"p"},"(usage note: User must pass translated text)"),". It should not contain page number and total count details, which will lead to conflicts with built-in accessibility ARIA contexts.")))))}p.isMDXComponent=!0;var f=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},_.apply(this,arguments)}function g(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b={},y="wrapper";function x(e){var t=e.components,a=g(e,f);return(0,l.mdx)(y,_({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(r.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-progressive-paginator"},"Terra Progressive Paginator"),(0,l.mdx)("p",null,"Paginator to be used for ordered data where the size of the data is known. Provides first, last, previous, next, and paged functionality."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';\n")),(0,l.mdx)("h2",{id:"component-features"},"Component Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(n.Z,{mdxType:"ProgressivePaginatorExample"}),(0,l.mdx)(o.Z,{mdxType:"ProgressivePaginatorWithoutTotalCountExample"}),(0,l.mdx)("h2",{id:"progressive-paginator-props"},"Progressive Paginator Props"),(0,l.mdx)(p,{mdxType:"ProgressivePaginatorPropsTable"}))}x.isMDXComponent=!0},39651:function(e,t,a){a.d(t,{C:function(){return n}});var l=a(67294),r=a(22863),n=function(e){var t=e.url;return l.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-paginator",name:"terra-paginator",version:"2.85.0",url:t})}},15192:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=p(a(67294)),r=p(a(45697)),n=p(a(94184)),o=p(a(47166)),d=p(a(50026)),u=p(a(43868)),i=p(a(20575)),c=a(25387),s=p(a(71786)),m=["children","footer","header","intl","onClose"];function p(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},f.apply(this,arguments)}function _(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=o.default.bind(s.default),b={children:r.default.node,footer:r.default.node.isRequired,header:r.default.node.isRequired,intl:r.default.shape({formatMessage:r.default.func}).isRequired,onClose:r.default.func},y=function(e){var t=e.children,a=e.footer,r=e.header,o=e.intl,c=e.onClose,s=_(e,m),p=l.default.useContext(d.default),b=(0,n.default)(g("dialog",p.className),s.className),y=c?l.default.createElement("div",{className:g("dialog-header-close")},l.default.createElement(u.default,{variant:"utility",text:o.formatMessage({id:"Terra.dialog.close"}),onClick:c,isIconOnly:!0,icon:l.default.createElement("span",{className:g("close-icon")})})):null,x=l.default.createElement("div",{className:g("dialog-header")},l.default.createElement("div",{className:g("dialog-header-title")},r),y);return l.default.createElement("div",f({},s,{className:b}),l.default.createElement(i.default,{fill:!0,header:x,footer:l.default.createElement("div",{className:g("dialog-footer")},a)},l.default.createElement("div",{className:g("dialog-body")},t)))};y.propTypes=b,y.defaultProps={onClose:null,children:null};t.default=(0,c.injectIntl)(y)},32634:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(a(67294)),r=c(a(45697)),n=c(a(94184)),o=c(a(47166)),d=c(a(50026)),u=c(a(16749)),i=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.default.bind(u.default),f={children:r.default.node.isRequired,disableStripes:r.default.bool,paddingStyle:r.default.oneOf(["none","standard","compact"])},_=function(e){var t=e.children,a=e.disableStripes,r=e.paddingStyle,o=m(e,i),u=l.default.useContext(d.default),c=(0,n.default)(p("table",{striped:!a},{"padding-standard":"standard"===r},{"padding-compact":"compact"===r},u.className),o.className);return l.default.createElement("table",s({},o,{className:c}),t)};_.propTypes=f,_.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=_},80196:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a(67294)),r=o(a(45697)),n=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u={children:r.default.node},i=function(e){var t=e.children,a=d(e,n);return l.default.createElement("tbody",a,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},8685:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a(67294)),r=o(a(45697)),n=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u={children:r.default.node},i=function(e){var t=e.children,a=d(e,n);return l.default.createElement("td",a,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},19852:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(67294)),r=d(a(45697)),n=d(a(29805)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i={children:r.default.node},c=function(e){var t=e.children,a=u(e,o);return l.default.createElement("thead",a,l.default.createElement("tr",null,n.default.addScope(t,"col")))};c.propTypes=i,c.defaultProps={children:[]};t.default=c},80876:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a(67294)),r=o(a(45697)),n=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u={children:r.default.node},i=function(e){var t=e.children,a=d(e,n);return l.default.createElement("th",a,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},70829:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(a(67294)),r=i(a(45697)),n=i(a(47166)),o=i(a(16749)),d=i(a(29805)),u=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.default.bind(o.default),p={children:r.default.node},f=function(e){var t=e.children,a=s(e,u),r=m(["row"]);return l.default.createElement("tr",c({},a,{className:a.className?"".concat(r," ").concat(a.className):r}),d.default.addScope(t,"row"))};f.propTypes=p,f.defaultProps={children:[]};t.default=f},29805:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,r=(l=a(67294))&&l.__esModule?l:{default:l};var n={addScope:function(e,t){var a=[];return r.default.Children.forEach(e,(function(e){a.push(r.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),a}};t.default=n},37515:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return n.default}}),t.default=void 0;var l=i(a(32634)),r=i(a(80196)),n=i(a(70829)),o=i(a(8685)),d=i(a(19852)),u=i(a(80876));function i(e){return e&&e.__esModule?e:{default:e}}t.default=l.default},13810:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(21969));function n(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},o.apply(this,arguments)}var d=function(e){var t=o({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=d},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},71786:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Dialog-module__clinical-lowlight-theme___cQs9U","orion-fusion-theme":"Dialog-module__orion-fusion-theme___emCZS",dialog:"Dialog-module__dialog___SyjLe","dialog-header":"Dialog-module__dialog-header___4ySjM","dialog-header-title":"Dialog-module__dialog-header-title___zeC4C","dialog-header-close":"Dialog-module__dialog-header-close___bG7wc","close-icon":"Dialog-module__close-icon___9yTZx","dialog-body":"Dialog-module__dialog-body___c18KV","dialog-footer":"Dialog-module__dialog-footer___mLLqj"}},16749:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);