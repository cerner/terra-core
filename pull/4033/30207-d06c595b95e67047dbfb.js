"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[30207],{26244:function(e,t,r){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var n=f(r(67294)),a=f(r(45697)),i=f(r(19845)),o=f(r(1947)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},c.apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){var n;return n=function(e,t){if("object"!=l(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var b=i.default.bind(o.default),g={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},_=function(e){var t=e.fitStart,r=e.fill,l=e.fitEnd,a=e.align,i=e.alignFitStart,o=e.alignFill,f=e.alignFitEnd,d=e.fitStartAttributes,p=e.fillAttributes,g=e.fitEndAttributes,_=m(e,u),y=s({},d),v=s({},p),E=s({},g);return n.default.createElement("span",c({},_,{className:b("arrange",_.className)}),n.default.createElement("span",c({},y,{className:b("fit",a||i,y.className,"fit-block")}),t),n.default.createElement("span",c({},v,{className:b("fill",a||o,v.className,"fill-block")}),r),n.default.createElement("span",c({},E,{className:b("fit",a||f,E.className)}),l))};_.propTypes=g;t.default=_},30207:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(r(67294)),n=i(r(26244)),a=r(71916);function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return l.default.createElement("div",null,l.default.createElement(a.ArrangeWrapper,null,l.default.createElement(n.default,{id:"default",fitStart:l.default.createElement(a.IconWrapper,null),fill:a.simpleText})),l.default.createElement(a.ArrangeWrapper,null,l.default.createElement(n.default,{id:"center",align:"center",fitStart:l.default.createElement(a.IconWrapper,null),fill:a.simpleText})),l.default.createElement(a.ArrangeWrapper,null,l.default.createElement(n.default,{id:"bottom",align:"bottom",fitStart:l.default.createElement(a.IconWrapper,null),fill:a.simpleText})),l.default.createElement(a.ArrangeWrapper,null,l.default.createElement(n.default,{id:"stretch",align:"stretch",fitStart:l.default.createElement(a.IconWrapper,null),fill:a.simpleText})))}},71916:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.simpleText=t.longWordText=t.longText=t.icon=t.IconWrapper=t.ArrangeWrapper=void 0;var l=u(r(67294)),n=u(r(19845)),a=u(r(45697)),i=r(64177),o=u(r(2353));function u(e){return e&&e.__esModule?e:{default:e}}var f=n.default.bind(o.default),c=(t.icon=l.default.createElement(i.IconAlert,{width:"4em",height:"4em"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");t.simpleText=l.default.createElement("div",null,c),t.longText=l.default.createElement("div",null,c," ",c," ",c," ",c),t.longWordText=l.default.createElement("div",null,"Thisisareallyreallylongwordthathasnospacesthatwillneedtobebrokeninordertohavethetextwrapandnotoverlowintothenextelement");(t.ArrangeWrapper=function(e){return l.default.createElement("div",{className:f("arrange-wrapper")},e.children)}).propTypes={children:a.default.element};t.IconWrapper=function(){return l.default.createElement("div",{className:f("icon-wrapper")},l.default.createElement("svg",{className:"terra-Icon",height:"4em",width:"4em",viewBox:"0 0 48 48"},l.default.createElement("path",{d:"M24 0h-.1C10.7 0 0 10.8 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24S37.3 0 24 0zm-4 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z",fill:"#FFF"})))}},1947:function(e,t,r){r.r(t),t.default={arrange:"Arrange-module__arrange___tayob",fill:"Arrange-module__fill___JGXgw",fit:"Arrange-module__fit___BodSy",center:"Arrange-module__center___lVVfc",bottom:"Arrange-module__bottom___TiTgB",stretch:"Arrange-module__stretch___BFg42",default:"Arrange-module__default___6XJU-"}},2353:function(e,t,r){r.r(t),t.default={"arrange-wrapper":"examplesetuptest__arrange-wrapper___EK8Ya","icon-wrapper":"examplesetuptest__icon-wrapper___Wr5Av"}}}]);