(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[65557],{65708:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var t=i(n(67294)),o=i(n(47166)),a=i(n(36994)),u=i(n(87937));function i(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(u.default);r.default=function(){return t.default.createElement("div",{className:c("tag-wrapper")},t.default.createElement(a.default,{id:"on-click",text:"Clickable Tag",onClick:function(){return window.alert("Tag has been clicked!")}}))}},87937:function(e,r,n){"use strict";n.r(r),r.default={"tag-wrapper":"TagTestCommon-module__tag-wrapper___E6r6I"}},15698:function(e,r,n){var t=n(13929),o=n(96767),a=o;a.v1=t,a.v4=o,e.exports=a},88660:function(e){for(var r=[],n=0;n<256;++n)r[n]=(n+256).toString(16).substr(1);e.exports=function(e,n){var t=n||0,o=r;return[o[e[t++]],o[e[t++]],o[e[t++]],o[e[t++]],"-",o[e[t++]],o[e[t++]],"-",o[e[t++]],o[e[t++]],"-",o[e[t++]],o[e[t++]],"-",o[e[t++]],o[e[t++]],o[e[t++]],o[e[t++]],o[e[t++]],o[e[t++]]].join("")}},92095:function(e){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var n=new Uint8Array(16);e.exports=function(){return r(n),n}}else{var t=new Array(16);e.exports=function(){for(var e,r=0;r<16;r++)0==(3&r)&&(e=4294967296*Math.random()),t[r]=e>>>((3&r)<<3)&255;return t}}},13929:function(e,r,n){var t,o,a=n(92095),u=n(88660),i=0,c=0;e.exports=function(e,r,n){var s=r&&n||0,l=r||[],f=(e=e||{}).node||t,d=void 0!==e.clockseq?e.clockseq:o;if(null==f||null==d){var v=a();null==f&&(f=t=[1|v[0],v[1],v[2],v[3],v[4],v[5]]),null==d&&(d=o=16383&(v[6]<<8|v[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),m=void 0!==e.nsecs?e.nsecs:c+1,y=p-i+(m-c)/1e4;if(y<0&&void 0===e.clockseq&&(d=d+1&16383),(y<0||p>i)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");i=p,c=m,o=d;var w=(1e4*(268435455&(p+=122192928e5))+m)%4294967296;l[s++]=w>>>24&255,l[s++]=w>>>16&255,l[s++]=w>>>8&255,l[s++]=255&w;var g=p/4294967296*1e4&268435455;l[s++]=g>>>8&255,l[s++]=255&g,l[s++]=g>>>24&15|16,l[s++]=g>>>16&255,l[s++]=d>>>8|128,l[s++]=255&d;for(var k=0;k<6;++k)l[s+k]=f[k];return r||u(l)}},96767:function(e,r,n){var t=n(92095),o=n(88660);e.exports=function(e,r,n){var a=r&&n||0;"string"==typeof e&&(r="binary"===e?new Array(16):null,e=null);var u=(e=e||{}).random||(e.rng||t)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,r)for(var i=0;i<16;++i)r[a+i]=u[i];return r||o(u)}}}]);