(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[71999],{24587:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(o(67294)),r=o(64177),u=s(o(47166)),a=s(o(92226)),n=s(o(20850));function s(e){return e&&e.__esModule?e:{default:e}}var c=u.default.bind(n.default);t.default=function(){return l.default.createElement("div",null,l.default.createElement(a.default,{id:"custom1",type:a.default.Opts.Types.CUSTOM},"Custom Alert with no icon, title or custom color"),l.default.createElement(a.default,{id:"custom2",type:a.default.Opts.Types.CUSTOM,title:"Custom_Alert:"},"Custom Alert with title but no icon or custom color"),l.default.createElement(a.default,{id:"custom3",type:a.default.Opts.Types.CUSTOM,customIcon:l.default.createElement(r.IconHelp,null)},"Custom Alert with icon but no title or custom color"),l.default.createElement(a.default,{id:"custom4",type:a.default.Opts.Types.CUSTOM,customColorClass:c(["my-app-alert-attention-example"])},"Custom Alert with custom color but no title or icon"),l.default.createElement(a.default,{id:"custom5",type:a.default.Opts.Types.CUSTOM,customColorClass:c(["my-app-alert-help-example"]),title:"Custom_Alert:"},"Custom Alert with custom color and title but no icon"),l.default.createElement(a.default,{id:"custom6",type:a.default.Opts.Types.CUSTOM,title:"Custom_Alert:",customIcon:l.default.createElement(r.IconHelp,null)},"Custom Alert with title and icon but no custom color"),l.default.createElement(a.default,{id:"custom7",type:a.default.Opts.Types.CUSTOM,customColorClass:c(["my-app-alert-dismiss-example"]),customIcon:l.default.createElement(r.IconHelp,null)},"Custom Alert with custom color and icon but no title"),l.default.createElement(a.default,{id:"custom8",type:a.default.Opts.Types.CUSTOM,title:"Custom_Alert:",customColorClass:c(["my-app-alert-help-example"]),customIcon:l.default.createElement(r.IconHelp,null)},"Custom Alert with title, custom color and icon"))}},20850:function(e,t,o){"use strict";o.r(t),t.default={"clinical-lowlight-theme":"colors-module__clinical-lowlight-theme___n7wvZ","orion-fusion-theme":"colors-module__orion-fusion-theme___SmDk5","my-app-alert-attention-example":"colors-module__my-app-alert-attention-example___LLEN-","my-app-alert-help-example":"colors-module__my-app-alert-help-example___l0ZAi","my-app-alert-dismiss-example":"colors-module__my-app-alert-dismiss-example___xR-qR"}},31540:function(e,t,o){var l=o(75271),r=o(58458),u=r;u.v1=l,u.v4=r,e.exports=u},41062:function(e){for(var t=[],o=0;o<256;++o)t[o]=(o+256).toString(16).substr(1);e.exports=function(e,o){var l=o||0,r=t;return[r[e[l++]],r[e[l++]],r[e[l++]],r[e[l++]],"-",r[e[l++]],r[e[l++]],"-",r[e[l++]],r[e[l++]],"-",r[e[l++]],r[e[l++]],"-",r[e[l++]],r[e[l++]],r[e[l++]],r[e[l++]],r[e[l++]],r[e[l++]]].join("")}},20695:function(e){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var o=new Uint8Array(16);e.exports=function(){return t(o),o}}else{var l=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),l[t]=e>>>((3&t)<<3)&255;return l}}},75271:function(e,t,o){var l,r,u=o(20695),a=o(41062),n=0,s=0;e.exports=function(e,t,o){var c=t&&o||0,i=t||[],m=(e=e||{}).node||l,p=void 0!==e.clockseq?e.clockseq:r;if(null==m||null==p){var d=u();null==m&&(m=l=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==p&&(p=r=16383&(d[6]<<8|d[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),y=void 0!==e.nsecs?e.nsecs:s+1,C=f-n+(y-s)/1e4;if(C<0&&void 0===e.clockseq&&(p=p+1&16383),(C<0||f>n)&&void 0===e.nsecs&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");n=f,s=y,r=p;var _=(1e4*(268435455&(f+=122192928e5))+y)%4294967296;i[c++]=_>>>24&255,i[c++]=_>>>16&255,i[c++]=_>>>8&255,i[c++]=255&_;var v=f/4294967296*1e4&268435455;i[c++]=v>>>8&255,i[c++]=255&v,i[c++]=v>>>24&15|16,i[c++]=v>>>16&255,i[c++]=p>>>8|128,i[c++]=255&p;for(var h=0;h<6;++h)i[c+h]=m[h];return t||a(i)}},58458:function(e,t,o){var l=o(20695),r=o(41062);e.exports=function(e,t,o){var u=t&&o||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||l)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var n=0;n<16;++n)t[u+n]=a[n];return t||r(a)}}}]);