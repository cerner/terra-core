"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[98738],{98738:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(96540)),r=n(l(75247)),o=n(l(21780));function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{src:o.default,alt:"successful profile image loaded",width:"75",height:"75"}))}},75247:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(l(96540)),r=c(l(5556)),o=c(l(46942)),n=c(l(67967)),i=c(l(52103)),f=c(l(82232)),u=c(l(55244)),d=["src","alt","fit","height","width","variant","onLoad","onError"];function c(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},_.apply(this,arguments)}function s(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;l[a]=e[a]}return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var m=n.default.bind(u.default),h={src:r.default.string,alt:r.default.string,fit:r.default.oneOf(["cover","scale-down","contain","none"]),height:r.default.string,width:r.default.string,variant:r.default.oneOf(["default","rounded","circle","thumbnail"]),onLoad:r.default.func,onError:r.default.func},g=function(e){return!/\D/.test(e)},p=function(e){var t=e.src,l=e.alt,r=e.fit,n=e.height,u=e.width,c=e.variant,h=e.onLoad,p=e.onError,b=s(e,d),v=a.default.useContext(i.default),P={height:g(n)?"".concat(n,"px"):n,width:g(u)?"".concat(u,"px"):u},w=(0,o.default)(m(["profile-image","placeholder",r,c,v.className]),b.className),y=a.default.createElement("span",_({},b,{role:l?"img":"presentation","aria-label":l,style:P,className:w}));if(t){var O=(0,o.default)(m(["profile-image",v.className]),b.className);return a.default.createElement(f.default,_({},b,{src:t,alt:l,role:l?"img":"presentation",height:n,width:u,fit:r,variant:c,placeholder:y,onLoad:h,onError:p,className:O}))}return y};p.propTypes=h,p.defaultProps={fit:"cover",height:"75",width:"75",variant:"default"};t.default=p},21780:function(e,t,l){l.r(t),t.default=l.p+"51d085f765a7361bab659ffffdb9bb46.jpg"},55244:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"ProfileImage-module__clinical-lowlight-theme___CzdiE","orion-fusion-theme":"ProfileImage-module__orion-fusion-theme___4XYqo","profile-image":"ProfileImage-module__profile-image___NFZOQ",placeholder:"ProfileImage-module__placeholder___wgHX-",cover:"ProfileImage-module__cover___yJSSX",fill:"ProfileImage-module__fill___Jtrqh",contain:"ProfileImage-module__contain___BkbWC","scale-down":"ProfileImage-module__scale-down___U44x3",none:"ProfileImage-module__none___yKXO5",default:"ProfileImage-module__default___mNqqy",rounded:"ProfileImage-module__rounded___2WDtd",circle:"ProfileImage-module__circle___ynDsr",thumbnail:"ProfileImage-module__thumbnail___H4hqa"}}}]);