"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[45451],{45451:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(l(67294)),r=o(l(67102));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{src:"invalid.jpg",alt:"could not load profile image",width:"75",height:"75"}))}},67102:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=_(l(67294)),r=_(l(45697)),o=_(l(94184)),n=_(l(47166)),i=_(l(50026)),u=_(l(24788)),f=_(l(95613)),d=["src","alt","fit","height","width","variant","onLoad","onError"];function _(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=n.default.bind(f.default),h={src:r.default.string,alt:r.default.string,fit:r.default.oneOf(["cover","scale-down","contain","none"]),height:r.default.string,width:r.default.string,variant:r.default.oneOf(["default","rounded","circle","thumbnail"]),onLoad:r.default.func,onError:r.default.func},g=function(e){return!/\D/.test(e)},p=function(e){var t=e.src,l=e.alt,r=e.fit,n=e.height,f=e.width,_=e.variant,h=e.onLoad,p=e.onError,v=m(e,d),b=a.default.useContext(i.default),P={height:g(n)?"".concat(n,"px"):n,width:g(f)?"".concat(f,"px"):f},w=(0,o.default)(s(["profile-image","placeholder",r,_,b.className]),v.className),y=a.default.createElement("span",c({},v,{role:l?"img":"presentation","aria-label":l,style:P,className:w}));if(t){var O=(0,o.default)(s(["profile-image",b.className]),v.className);return a.default.createElement(u.default,c({},v,{src:t,alt:l,role:l?"img":"presentation",height:n,width:f,fit:r,variant:_,placeholder:y,onLoad:h,onError:p,className:O}))}return y};p.propTypes=h,p.defaultProps={fit:"cover",height:"75",width:"75",variant:"default"};t.default=p},95613:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"ProfileImage-module__clinical-lowlight-theme___CzdiE","orion-fusion-theme":"ProfileImage-module__orion-fusion-theme___4XYqo","profile-image":"ProfileImage-module__profile-image___NFZOQ",placeholder:"ProfileImage-module__placeholder___wgHX-",cover:"ProfileImage-module__cover___yJSSX",fill:"ProfileImage-module__fill___Jtrqh",contain:"ProfileImage-module__contain___BkbWC","scale-down":"ProfileImage-module__scale-down___U44x3",none:"ProfileImage-module__none___yKXO5",default:"ProfileImage-module__default___mNqqy",rounded:"ProfileImage-module__rounded___2WDtd",circle:"ProfileImage-module__circle___ynDsr",thumbnail:"ProfileImage-module__thumbnail___H4hqa"}}}]);