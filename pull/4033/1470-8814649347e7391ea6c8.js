"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[1470],{1470:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(67102)),o=n(a(3218));function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return l.default.createElement("div",null,l.default.createElement(r.default,{alt:"profile image when height and width props are not provided, valid image",src:o.default}),"   ",l.default.createElement(r.default,{alt:"profile image when height and width props are not provided, invalid image",src:"invalid.jpg"}))}},67102:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(a(67294)),r=c(a(45697)),o=c(a(93967)),n=c(a(19845)),i=c(a(50026)),d=c(a(24788)),f=c(a(95613)),u=["src","alt","fit","height","width","variant","onLoad","onError"];function c(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},_.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.default.bind(f.default),h={src:r.default.string,alt:r.default.string,fit:r.default.oneOf(["cover","scale-down","contain","none"]),height:r.default.string,width:r.default.string,variant:r.default.oneOf(["default","rounded","circle","thumbnail"]),onLoad:r.default.func,onError:r.default.func},g=function(e){return!/\D/.test(e)},p=function(e){var t=e.src,a=e.alt,r=e.fit,n=e.height,f=e.width,c=e.variant,h=e.onLoad,p=e.onError,v=m(e,u),b=l.default.useContext(i.default),w={height:g(n)?"".concat(n,"px"):n,width:g(f)?"".concat(f,"px"):f},P=(0,o.default)(s(["profile-image","placeholder",r,c,b.className]),v.className),y=l.default.createElement("span",_({},v,{role:a?"img":"presentation","aria-label":a,style:w,className:P}));if(t){var O=(0,o.default)(s(["profile-image",b.className]),v.className);return l.default.createElement(d.default,_({},v,{src:t,alt:a,role:a?"img":"presentation",height:n,width:f,fit:r,variant:c,placeholder:y,onLoad:h,onError:p,className:O}))}return y};p.propTypes=h,p.defaultProps={fit:"cover",height:"75",width:"75",variant:"default"};t.default=p},3218:function(e,t,a){a.r(t),t.default=a.p+"51d085f765a7361bab659ffffdb9bb46.jpg"},95613:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ProfileImage-module__clinical-lowlight-theme___CzdiE","orion-fusion-theme":"ProfileImage-module__orion-fusion-theme___4XYqo","profile-image":"ProfileImage-module__profile-image___NFZOQ",placeholder:"ProfileImage-module__placeholder___wgHX-",cover:"ProfileImage-module__cover___yJSSX",fill:"ProfileImage-module__fill___Jtrqh",contain:"ProfileImage-module__contain___BkbWC","scale-down":"ProfileImage-module__scale-down___U44x3",none:"ProfileImage-module__none___yKXO5",default:"ProfileImage-module__default___mNqqy",rounded:"ProfileImage-module__rounded___2WDtd",circle:"ProfileImage-module__circle___ynDsr",thumbnail:"ProfileImage-module__thumbnail___H4hqa"}}}]);