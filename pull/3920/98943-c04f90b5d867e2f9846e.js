"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[98943],{98943:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(67294)),r=d(a(47166)),o=d(a(67102)),n=d(a(4683)),i=d(a(3218));function d(e){return e&&e.__esModule?e:{default:e}}var u=r.default.bind(n.default),f=function(){return l.default.createElement("div",null,l.default.createElement(o.default,{className:u("test-style-size"),alt:"this image uses css size instead, valid image",src:i.default}),l.default.createElement(o.default,{className:u(["test-style-size","add-left-margin"]),alt:"this image uses css size instead, invalid image",src:"invalid.jpg"}))};t.default=f},67102:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(a(67294)),r=s(a(45697)),o=s(a(94184)),n=s(a(47166)),i=s(a(50026)),d=s(a(24788)),u=s(a(95613)),f=["src","alt","fit","height","width","variant","onLoad","onError"];function s(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},_.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.default.bind(u.default),g={src:r.default.string,alt:r.default.string,fit:r.default.oneOf(["cover","scale-down","contain","none"]),height:r.default.string,width:r.default.string,variant:r.default.oneOf(["default","rounded","circle","thumbnail"]),onLoad:r.default.func,onError:r.default.func},h=function(e){return!/\D/.test(e)},p=function(e){var t=e.src,a=e.alt,r=e.fit,n=e.height,u=e.width,s=e.variant,g=e.onLoad,p=e.onError,v=c(e,f),b=l.default.useContext(i.default),y={height:h(n)?"".concat(n,"px"):n,width:h(u)?"".concat(u,"px"):u},P=(0,o.default)(m(["profile-image","placeholder",r,s,b.className]),v.className),w=l.default.createElement("span",_({},v,{role:a?"img":"presentation","aria-label":a,style:y,className:P}));if(t){var O=(0,o.default)(m(["profile-image",b.className]),v.className);return l.default.createElement(d.default,_({},v,{src:t,alt:a,role:a?"img":"presentation",height:n,width:u,fit:r,variant:s,placeholder:w,onLoad:g,onError:p,className:O}))}return w};p.propTypes=g,p.defaultProps={fit:"cover",height:"75",width:"75",variant:"default"};var v=p;t.default=v},3218:function(e,t,a){a.r(t),t.default=a.p+"51d085f765a7361bab659ffffdb9bb46.jpg"},4683:function(e,t,a){a.r(t),t.default={"add-left-margin":"ProfileImageCommon-module__add-left-margin___Bdxjs","test-style-border":"ProfileImageCommon-module__test-style-border___wxuir","test-style-size":"ProfileImageCommon-module__test-style-size___8j1-7"}},95613:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ProfileImage-module__clinical-lowlight-theme___CzdiE","orion-fusion-theme":"ProfileImage-module__orion-fusion-theme___4XYqo","profile-image":"ProfileImage-module__profile-image___NFZOQ",placeholder:"ProfileImage-module__placeholder___wgHX-",cover:"ProfileImage-module__cover___yJSSX",fill:"ProfileImage-module__fill___Jtrqh",contain:"ProfileImage-module__contain___BkbWC","scale-down":"ProfileImage-module__scale-down___U44x3",none:"ProfileImage-module__none___yKXO5",default:"ProfileImage-module__default___mNqqy",rounded:"ProfileImage-module__rounded___2WDtd",circle:"ProfileImage-module__circle___ynDsr",thumbnail:"ProfileImage-module__thumbnail___H4hqa"}}}]);