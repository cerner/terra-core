"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[1554],{22863:function(e,t,a){var n=a(64836);t.Z=void 0;var l=n(a(67294)),r=n(a(45697)),i=n(a(19845)),o=n(a(17422)),u=i.default.bind(o.default),c={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},d=function(e){var t=e.src,a=e.name,n=e.url,r=e.version,i=l.default.createElement("a",{className:u("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(r)},l.default.createElement("span",{className:u("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:u("badge-version")},"v".concat(r))),o=t?l.default.createElement("a",{className:u("badge"),href:t},l.default.createElement("span",{className:u("badge-name")},"github"),l.default.createElement("span",{className:u("badge-version")},"source")):void 0;return l.default.createElement("div",{className:u("badge-container")},i,o)};d.propTypes=c;t.Z=d},92102:function(e,t,a){a.d(t,{C:function(){return r}});var n=a(67294),l=a(22863),r=function(e){var t=e.url;return n.createElement(l.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-heading",name:"terra-heading",version:"4.55.0",url:t})}},26244:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var l=c(a(67294)),r=c(a(45697)),i=c(a(19845)),o=c(a(1947)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t,a){var l;return l=function(e,t){if("object"!=n(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var l=a.call(e,t||"default");if("object"!=n(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==n(l)?l:String(l))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function g(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var _=i.default.bind(o.default),p={fitStart:r.default.element,fill:r.default.element.isRequired,fitEnd:r.default.element,align:r.default.oneOf(["center","bottom","stretch"]),alignFitStart:r.default.oneOf(["center","bottom","stretch"]),alignFitEnd:r.default.oneOf(["center","bottom","stretch"]),alignFill:r.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:r.default.object,fillAttributes:r.default.object,fitEndAttributes:r.default.object},b=function(e){var t=e.fitStart,a=e.fill,n=e.fitEnd,r=e.align,i=e.alignFitStart,o=e.alignFill,c=e.alignFitEnd,f=e.fitStartAttributes,m=e.fillAttributes,p=e.fitEndAttributes,b=g(e,u),v=s({},f),y=s({},m),h=s({},p);return l.default.createElement("span",d({},b,{className:_("arrange",b.className)}),l.default.createElement("span",d({},v,{className:_("fit",r||i,v.className,"fit-block")}),t),l.default.createElement("span",d({},y,{className:_("fill",r||o,y.className,"fill-block")}),a),l.default.createElement("span",d({},h,{className:_("fit",r||c,h.className)}),n))};b.propTypes=p;t.default=b},63706:function(e,t,a){t.Z=void 0;var n=u(a(67294)),l=u(a(26244)),r=u(a(85445)),i=u(a(19845)),o=u(a(99892));function u(e){return e&&e.__esModule?e:{default:e}}var c=i.default.bind(o.default);t.Z=function(){return n.default.createElement("div",null,n.default.createElement(l.default,{align:"center",fitStart:n.default.createElement("span",{className:c("fitstart-content")},"h1"),fill:n.default.createElement("div",{className:c("heading-wrapper")},n.default.createElement(r.default,{level:1},"Level 1 Heading",n.default.createElement("span",{className:c("heading-content")}," 32px (2.286rem)")))}),n.default.createElement(l.default,{align:"center",fitStart:n.default.createElement("span",{className:c("fitstart-content")},"h2"),fill:n.default.createElement("div",{className:c("heading-wrapper")},n.default.createElement(r.default,{level:2},"Level 2 Heading",n.default.createElement("span",{className:c("heading-content")}," 24px (1.714rem)")))}),n.default.createElement(l.default,{align:"center",fitStart:n.default.createElement("span",{className:c("fitstart-content")},"h3"),fill:n.default.createElement("div",{className:c("heading-wrapper")},n.default.createElement(r.default,{level:3},"Level 3 Heading",n.default.createElement("span",{className:c("heading-content")}," 20px (1.429rem)")))}),n.default.createElement(l.default,{align:"center",fitStart:n.default.createElement("span",{className:c("fitstart-content")},"h4"),fill:n.default.createElement("div",{className:c("heading-wrapper")},n.default.createElement(r.default,{level:4},"Level 4 Heading",n.default.createElement("span",{className:c("heading-content")}," 18px (1.286rem)")))}),n.default.createElement(l.default,{align:"center",fitStart:n.default.createElement("span",{className:c("fitstart-content")},"h5"),fill:n.default.createElement("div",{className:c("heading-wrapper")},n.default.createElement(r.default,{level:5},"Level 5 Heading",n.default.createElement("span",{className:c("heading-content")}," 16px (1.143rem)")))}),n.default.createElement(l.default,{align:"center",fitStart:n.default.createElement("span",{className:c("fitstart-content")},"h6"),fill:n.default.createElement("div",{className:c("heading-wrapper")},n.default.createElement(r.default,{level:6},"Level 6 Heading",n.default.createElement("span",{className:c("heading-content")}," 14px (1rem)")))}))}},85445:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.HeadingWeight=t.HeadingSize=t.HeadingLevel=void 0;var l=c(a(67294)),r=c(a(45697)),i=c(a(19845)),o=c(a(13209)),u=["level","children","isVisuallyHidden","isItalic","size","weight","colorClass"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e,t,a){var l;return l=function(e,t){if("object"!=n(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var l=a.call(e,t||"default");if("object"!=n(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==n(l)?l:String(l))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var g=i.default.bind(o.default),_=(t.HeadingLevel={1:1,2:2,3:3,4:4,5:5,6:6},t.HeadingSize={MINI:"mini",TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"},t.HeadingWeight={200:200,400:400,700:700},{children:r.default.node.isRequired,level:r.default.oneOf([1,2,3,4,5,6]).isRequired,isItalic:r.default.bool,isVisuallyHidden:r.default.bool,size:r.default.oneOf(["mini","tiny","small","medium","large","huge"]),weight:r.default.oneOf([200,400,700]),colorClass:r.default.string}),p=function(e){var t=e.level,a=e.children,n=e.isVisuallyHidden,r=e.isItalic,i=e.size,o=e.weight,c=e.colorClass,_=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},m(e,u)),p=g(["heading",{italic:r},{"visually-hidden":n},s({},"level-".concat(t),t),s({},"size-".concat(i),i),s({},"weight-".concat(o),o),c,_.className]),b="h".concat(t);return l.default.createElement(b,d({},_,{className:p}),a)};p.propTypes=_,p.defaultProps={isItalic:!1,isVisuallyHidden:!1,weight:700};t.default=p},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},1947:function(e,t,a){a.r(t),t.default={arrange:"Arrange-module__arrange___tayob",fill:"Arrange-module__fill___JGXgw",fit:"Arrange-module__fit___BodSy",center:"Arrange-module__center___lVVfc",bottom:"Arrange-module__bottom___TiTgB",stretch:"Arrange-module__stretch___BFg42",default:"Arrange-module__default___6XJU-"}},99892:function(e,t,a){a.r(t),t.default={"fitstart-content":"HeadingDocCommon-module__fitstart-content___lkGMz","heading-wrapper":"HeadingDocCommon-module__heading-wrapper___ccIfH","heading-content":"HeadingDocCommon-module__heading-content___HQbE2"}},13209:function(e,t,a){a.r(t),t.default={heading:"Heading-module__heading___hVNCG",italic:"Heading-module__italic___UBJcf","level-1":"Heading-module__level-1___tlUDs","level-2":"Heading-module__level-2___qKMbC","level-3":"Heading-module__level-3___v7cG-","level-4":"Heading-module__level-4___jl+xM","level-5":"Heading-module__level-5___x9Rpz","level-6":"Heading-module__level-6___ZzHFY","size-huge":"Heading-module__size-huge___DpN3-","size-large":"Heading-module__size-large___ilzJw","size-medium":"Heading-module__size-medium___SNQc5","size-small":"Heading-module__size-small___VFZjh","size-tiny":"Heading-module__size-tiny___JKH38","size-mini":"Heading-module__size-mini___XGXdZ","weight-200":"Heading-module__weight-200___BNjDD","weight-400":"Heading-module__weight-400___bdSJY","weight-700":"Heading-module__weight-700___NQoBX","visually-hidden":"Heading-module__visually-hidden___-QFkc"}}}]);