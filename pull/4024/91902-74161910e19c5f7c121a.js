"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[91902],{91902:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(l(96540)),a=o(l(75247));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{alt:"profile image when source is not provided",width:"75",height:"75"}))}},75247:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=_(l(96540)),a=_(l(5556)),o=_(l(46942)),n=_(l(67967)),i=_(l(52103)),u=_(l(82232)),f=_(l(55244)),d=["src","alt","fit","height","width","variant","onLoad","onError"];function _(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)l=o[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)l=o[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var m=n.default.bind(f.default),h={src:a.default.string,alt:a.default.string,fit:a.default.oneOf(["cover","scale-down","contain","none"]),height:a.default.string,width:a.default.string,variant:a.default.oneOf(["default","rounded","circle","thumbnail"]),onLoad:a.default.func,onError:a.default.func},g=function(e){return!/\D/.test(e)},p=function(e){var t=e.src,l=e.alt,a=e.fit,n=e.height,f=e.width,_=e.variant,h=e.onLoad,p=e.onError,v=s(e,d),b=r.default.useContext(i.default),w={height:g(n)?"".concat(n,"px"):n,width:g(f)?"".concat(f,"px"):f},P=(0,o.default)(m(["profile-image","placeholder",a,_,b.className]),v.className),y=r.default.createElement("span",c({},v,{role:l?"img":"presentation","aria-label":l,style:w,className:P}));if(t){var O=(0,o.default)(m(["profile-image",b.className]),v.className);return r.default.createElement(u.default,c({},v,{src:t,alt:l,role:l?"img":"presentation",height:n,width:f,fit:a,variant:_,placeholder:y,onLoad:h,onError:p,className:O}))}return y};p.propTypes=h,p.defaultProps={fit:"cover",height:"75",width:"75",variant:"default"};t.default=p},55244:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"ProfileImage-module__clinical-lowlight-theme___CzdiE","orion-fusion-theme":"ProfileImage-module__orion-fusion-theme___4XYqo","profile-image":"ProfileImage-module__profile-image___NFZOQ",placeholder:"ProfileImage-module__placeholder___wgHX-",cover:"ProfileImage-module__cover___yJSSX",fill:"ProfileImage-module__fill___Jtrqh",contain:"ProfileImage-module__contain___BkbWC","scale-down":"ProfileImage-module__scale-down___U44x3",none:"ProfileImage-module__none___yKXO5",default:"ProfileImage-module__default___mNqqy",rounded:"ProfileImage-module__rounded___2WDtd",circle:"ProfileImage-module__circle___ynDsr",thumbnail:"ProfileImage-module__thumbnail___H4hqa"}}}]);