(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[51806],{83107:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var r=c(e);if(r&&r.has(t))return r.get(t);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var a=u?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=t[i]}o.default=t,r&&r.set(t,o);return o}(r(67294)),u=a(r(43868)),i=a(r(92226));function a(t){return t&&t.__esModule?t:{default:t}}function c(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(c=function(t){return t?r:e})(t)}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,u,i,a=[],c=!0,l=!1;try{if(u=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=u.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s=function(){var t=l((0,o.useState)(0),2),e=t[0],r=t[1];return o.default.createElement(i.default,{id:"actionAlert",type:"warning",action:o.default.createElement(u.default,{text:"Action",id:"actionButtonClickCount",onClick:function(){r(e+1)}})},"This is a warning. It is configured with a custom Action button. Action button has been clicked ".concat(e," times."))};e.default=s},55877:function(t,e,r){var n=r(23570),o=r(71171),u=o;u.v1=n,u.v4=o,t.exports=u},23570:function(t,e,r){var n,o,u=r(85217),i=r(45327),a=0,c=0;t.exports=function(t,e,r){var l=e&&r||0,f=e||[],s=(t=t||{}).node||n,y=void 0!==t.clockseq?t.clockseq:o;if(null==s||null==y){var d=u();null==s&&(s=n=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==y&&(y=o=16383&(d[6]<<8|d[7]))}var p=void 0!==t.msecs?t.msecs:(new Date).getTime(),v=void 0!==t.nsecs?t.nsecs:c+1,b=p-a+(v-c)/1e4;if(b<0&&void 0===t.clockseq&&(y=y+1&16383),(b<0||p>a)&&void 0===t.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=p,c=v,o=y;var m=(1e4*(268435455&(p+=122192928e5))+v)%4294967296;f[l++]=m>>>24&255,f[l++]=m>>>16&255,f[l++]=m>>>8&255,f[l++]=255&m;var h=p/4294967296*1e4&268435455;f[l++]=h>>>8&255,f[l++]=255&h,f[l++]=h>>>24&15|16,f[l++]=h>>>16&255,f[l++]=y>>>8|128,f[l++]=255&y;for(var w=0;w<6;++w)f[l+w]=s[w];return e||i(f)}}}]);