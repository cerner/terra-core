"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[11753],{68319:function(t,e,r){function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.AlignmentTypes=void 0;var l=d(r(67294)),n=d(r(45697)),i=d(r(47166)),o=d(r(1947)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function d(t){return t&&t.__esModule?t:{default:t}}function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},f.apply(this,arguments)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var l=r.call(t,e||"default");if("object"!==a(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===a(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(t,e){if(null==t)return{};var r,a,l=function(t,e){if(null==t)return{};var r,a,l={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}e.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var b=i.default.bind(o.default),g={fitStart:n.default.element,fill:n.default.element.isRequired,fitEnd:n.default.element,align:n.default.oneOf(["center","bottom","stretch"]),alignFitStart:n.default.oneOf(["center","bottom","stretch"]),alignFitEnd:n.default.oneOf(["center","bottom","stretch"]),alignFill:n.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:n.default.object,fillAttributes:n.default.object,fitEndAttributes:n.default.object},w=function(t){var e=t.fitStart,r=t.fill,a=t.fitEnd,n=t.align,i=t.alignFitStart,o=t.alignFill,d=t.alignFitEnd,s=t.fitStartAttributes,p=t.fillAttributes,g=t.fitEndAttributes,w=m(t,u),y=c({},s),_=c({},p),h=c({},g);return l.default.createElement("span",f({},w,{className:b("arrange",w.className)}),l.default.createElement("span",f({},y,{className:b("fit",n||i,y.className,"fit-block")}),e),l.default.createElement("span",f({},_,{className:b("fill",n||o,_.className,"fill-block")}),r),l.default.createElement("span",f({},h,{className:b("fit",n||d,h.className)}),a))};w.propTypes=g;var y=w;e.default=y},11753:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(r(67294)),l=i(r(68319)),n=r(71916);function i(t){return t&&t.__esModule?t:{default:t}}var o=function(){return a.default.createElement("div",null,a.default.createElement(n.ArrangeWrapper,null,a.default.createElement(l.default,{id:"default",fitStart:n.longWordText,fill:n.longWordText,fitEnd:n.longWordText,fitStartAttributes:{className:"test1",style:{width:"35%",wordWrap:"break-word"}},fillAttributes:{className:"test2",style:{width:"30%",wordWrap:"break-word"}},fitEndAttributes:{className:"test3",style:{width:"35%",wordWrap:"break-word"}}})),a.default.createElement(n.ArrangeWrapper,null,a.default.createElement(l.default,{id:"center",align:"center",fitStart:n.longWordText,fill:n.longWordText,fitEnd:n.longWordText,fitStartAttributes:{className:"test1",style:{width:"35%",wordWrap:"break-word"}},fillAttributes:{className:"test2",style:{width:"30%",wordWrap:"break-word"}},fitEndAttributes:{className:"test3",style:{width:"35%",wordWrap:"break-word"}}})),a.default.createElement(n.ArrangeWrapper,null,a.default.createElement(l.default,{id:"bottom",align:"bottom",fitStart:n.longWordText,fill:n.longWordText,fitEnd:n.longWordText,fitStartAttributes:{className:"test1",style:{width:"35%",wordWrap:"break-word"}},fillAttributes:{className:"test2",style:{width:"30%",wordWrap:"break-word"}},fitEndAttributes:{className:"test3",style:{width:"35%",wordWrap:"break-word"}}})),a.default.createElement(n.ArrangeWrapper,null,a.default.createElement(l.default,{id:"stretch",align:"stretch",fitStart:n.longWordText,fill:n.longWordText,fitEnd:n.longWordText,fitStartAttributes:{className:"test1",style:{width:"35%",wordWrap:"break-word"}},fillAttributes:{className:"test2",style:{width:"30%",wordWrap:"break-word"}},fitEndAttributes:{className:"test3",style:{width:"35%",wordWrap:"break-word"}}})))};e.default=o},71916:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.simpleText=e.longWordText=e.longText=e.icon=e.IconWrapper=e.ArrangeWrapper=void 0;var a=u(r(67294)),l=u(r(47166)),n=u(r(45697)),i=r(64177),o=u(r(2353));function u(t){return t&&t.__esModule?t:{default:t}}var d=l.default.bind(o.default),f=a.default.createElement(i.IconAlert,{width:"4em",height:"4em"});e.icon=f;var s="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",c=a.default.createElement("div",null,s);e.simpleText=c;var p=a.default.createElement("div",null,s," ",s," ",s," ",s);e.longText=p;var m=a.default.createElement("div",null,"Thisisareallyreallylongwordthathasnospacesthatwillneedtobebrokeninordertohavethetextwrapandnotoverlowintothenextelement");e.longWordText=m;var b=function(t){return a.default.createElement("div",{className:d("arrange-wrapper")},t.children)};e.ArrangeWrapper=b,b.propTypes={children:n.default.element};e.IconWrapper=function(){return a.default.createElement("div",{className:d("icon-wrapper")},a.default.createElement("svg",{className:"terra-Icon",height:"4em",width:"4em",viewBox:"0 0 48 48"},a.default.createElement("path",{d:"M24 0h-.1C10.7 0 0 10.8 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24S37.3 0 24 0zm-4 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z",fill:"#FFF"})))}},1947:function(t,e,r){r.r(e),e.default={arrange:"Arrange-module__arrange___tayob",fill:"Arrange-module__fill___JGXgw",fit:"Arrange-module__fit___BodSy",center:"Arrange-module__center___lVVfc",bottom:"Arrange-module__bottom___TiTgB",stretch:"Arrange-module__stretch___BFg42",default:"Arrange-module__default___6XJU-"}},2353:function(t,e,r){r.r(e),e.default={"arrange-wrapper":"examplesetuptest__arrange-wrapper___EK8Ya","icon-wrapper":"examplesetuptest__icon-wrapper___Wr5Av"}}}]);