(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[17175],{20903:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(t(67294)),o=c(t(47166)),a=t(30420),i=c(t(21651));function c(e){return e&&e.__esModule?e:{default:e}}var l=o.default.bind(i.default);n.default=function(){return r.default.createElement("div",{className:l("container-spacing-wrapper")},r.default.createElement(a.SplitButton,{primaryOptionLabel:"Primary option",onSelect:function(){console.log("primary option")},isDisabled:!0},r.default.createElement(a.Item,{label:"1st Option",onSelect:function(){console.log("hi")}}),r.default.createElement(a.Item,{label:"2nd Option",onSelect:function(){console.log("bye")}}),r.default.createElement(a.Item,{label:"3rd Option",onSelect:function(){console.log("eyb")}}),r.default.createElement(a.Item,{label:"4th Option",onSelect:function(){console.log("ih")}})))}},21651:function(e,n,t){"use strict";t.r(n),n.default={"button-spacing-wrapper":"ExtraSpacing-module__button-spacing-wrapper___Nac23","container-spacing-wrapper":"ExtraSpacing-module__container-spacing-wrapper___x-wix","container-min-size":"ExtraSpacing-module__container-min-size___nT0qt"}},44552:function(e,n,t){var r=t(72188),o=t(21515),a=o;a.v1=r,a.v4=o,e.exports=a},58318:function(e){for(var n=[],t=0;t<256;++t)n[t]=(t+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,o=n;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},33957:function(e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var t=new Uint8Array(16);e.exports=function(){return n(t),t}}else{var r=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),r[n]=e>>>((3&n)<<3)&255;return r}}},72188:function(e,n,t){var r,o,a=t(33957),i=t(58318),c=0,l=0;e.exports=function(e,n,t){var u=n&&t||0,s=n||[],p=(e=e||{}).node||r,f=void 0!==e.clockseq?e.clockseq:o;if(null==p||null==f){var d=a();null==p&&(p=r=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==f&&(f=o=16383&(d[6]<<8|d[7]))}var m=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:l+1,y=m-c+(v-l)/1e4;if(y<0&&void 0===e.clockseq&&(f=f+1&16383),(y<0||m>c)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=m,l=v,o=f;var g=(1e4*(268435455&(m+=122192928e5))+v)%4294967296;s[u++]=g>>>24&255,s[u++]=g>>>16&255,s[u++]=g>>>8&255,s[u++]=255&g;var _=m/4294967296*1e4&268435455;s[u++]=_>>>8&255,s[u++]=255&_,s[u++]=_>>>24&15|16,s[u++]=_>>>16&255,s[u++]=f>>>8|128,s[u++]=255&f;for(var b=0;b<6;++b)s[u+b]=p[b];return n||i(s)}},21515:function(e,n,t){var r=t(33957),o=t(58318);e.exports=function(e,n,t){var a=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n)for(var c=0;c<16;++c)n[a+c]=i[c];return n||o(i)}}}]);