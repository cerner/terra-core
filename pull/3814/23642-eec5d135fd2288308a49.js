"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[23642],{78730:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(r(67294)),i=a(r(43868)),u=a(r(92226));function a(t){return t&&t.__esModule?t:{default:t}}function c(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(i=o.key,u=void 0,u=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===n(u)?u:String(u)),o)}var i,u}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=p(t);if(e){var i=p(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return s(t)}(this,r)}}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(p,t);var e,r,n,a=l(p);function p(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(e=a.call(this,t)).state={actionButtonClickCount:0,showAlert:!1},e.actionFunc=e.actionFunc.bind(s(e)),e.popAlert=e.popAlert.bind(s(e)),e}return e=p,(r=[{key:"actionFunc",value:function(){this.setState((function(t){return{actionButtonClickCount:t.actionButtonClickCount+1}})),this.setState({showAlert:!1})}},{key:"popAlert",value:function(){this.setState((function(t){return{showAlert:!t.showAlert}}))}},{key:"render",value:function(){return this.alert=o.default.createElement(u.default,{id:"actionAlert",type:"warning",action:o.default.createElement(i.default,{text:"Action",onClick:this.actionFunc})},"This is a warning. It is configured with a custom Action button. Action button has been clicked"," ",o.default.createElement("span",{id:"actionButtonClickCount"},this.state.actionButtonClickCount)," ","times."),o.default.createElement("div",null,o.default.createElement("p",null," This Test has been added to test the functionality on JAWS and Voice Over "),o.default.createElement(i.default,{text:"Trigger Alert",onClick:this.popAlert}),o.default.createElement("div",{"aria-live":"polite"},this.state.showAlert&&this.alert))}}])&&c(e.prototype,r),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),p}(o.default.Component);e.default=d},21614:function(t,e,r){var n;r.r(e),r.d(e,{NIL:function(){return P},parse:function(){return h},stringify:function(){return p},v1:function(){return y},v3:function(){return O},v4:function(){return S},v5:function(){return _},validate:function(){return a},version:function(){return T}});var o=new Uint8Array(16);function i(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var a=function(t){return"string"==typeof t&&u.test(t)},c=[],f=0;f<256;++f)c.push((f+256).toString(16).substr(1));var l,s,p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]).toLowerCase();if(!a(r))throw TypeError("Stringified UUID is invalid");return r},d=0,v=0;var y=function(t,e,r){var n=e&&r||0,o=e||new Array(16),u=(t=t||{}).node||l,a=void 0!==t.clockseq?t.clockseq:s;if(null==u||null==a){var c=t.random||(t.rng||i)();null==u&&(u=l=[1|c[0],c[1],c[2],c[3],c[4],c[5]]),null==a&&(a=s=16383&(c[6]<<8|c[7]))}var f=void 0!==t.msecs?t.msecs:Date.now(),y=void 0!==t.nsecs?t.nsecs:v+1,h=f-d+(y-v)/1e4;if(h<0&&void 0===t.clockseq&&(a=a+1&16383),(h<0||f>d)&&void 0===t.nsecs&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");d=f,v=y,s=a;var b=(1e4*(268435455&(f+=122192928e5))+y)%4294967296;o[n++]=b>>>24&255,o[n++]=b>>>16&255,o[n++]=b>>>8&255,o[n++]=255&b;var m=f/4294967296*1e4&268435455;o[n++]=m>>>8&255,o[n++]=255&m,o[n++]=m>>>24&15|16,o[n++]=m>>>16&255,o[n++]=a>>>8|128,o[n++]=255&a;for(var g=0;g<6;++g)o[n+g]=u[g];return e||p(o)};var h=function(t){if(!a(t))throw TypeError("Invalid UUID");var e,r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=255&e,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=255&e,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=255&e,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=255&e,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=255&e,r};function b(t,e,r){function n(t,n,o,i){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}(t)),"string"==typeof n&&(n=h(n)),16!==n.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var u=new Uint8Array(16+t.length);if(u.set(n),u.set(t,n.length),(u=r(u))[6]=15&u[6]|e,u[8]=63&u[8]|128,o){i=i||0;for(var a=0;a<16;++a)o[i+a]=u[a];return o}return p(u)}try{n.name=t}catch(t){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n}function m(t){return 14+(t+64>>>9<<4)+1}function g(t,e){var r=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}function w(t,e,r,n,o,i){return g((u=g(g(e,t),g(n,i)))<<(a=o)|u>>>32-a,r);var u,a}function A(t,e,r,n,o,i,u){return w(e&r|~e&n,t,e,o,i,u)}function C(t,e,r,n,o,i,u){return w(e&n|r&~n,t,e,o,i,u)}function k(t,e,r,n,o,i,u){return w(e^r^n,t,e,o,i,u)}function E(t,e,r,n,o,i,u){return w(r^(e|~n),t,e,o,i,u)}var I=function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var r=0;r<e.length;++r)t[r]=e.charCodeAt(r)}return function(t){for(var e=[],r=32*t.length,n="0123456789abcdef",o=0;o<r;o+=8){var i=t[o>>5]>>>o%32&255,u=parseInt(n.charAt(i>>>4&15)+n.charAt(15&i),16);e.push(u)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[m(e)-1]=e;for(var r=1732584193,n=-271733879,o=-1732584194,i=271733878,u=0;u<t.length;u+=16){var a=r,c=n,f=o,l=i;r=A(r,n,o,i,t[u],7,-680876936),i=A(i,r,n,o,t[u+1],12,-389564586),o=A(o,i,r,n,t[u+2],17,606105819),n=A(n,o,i,r,t[u+3],22,-1044525330),r=A(r,n,o,i,t[u+4],7,-176418897),i=A(i,r,n,o,t[u+5],12,1200080426),o=A(o,i,r,n,t[u+6],17,-1473231341),n=A(n,o,i,r,t[u+7],22,-45705983),r=A(r,n,o,i,t[u+8],7,1770035416),i=A(i,r,n,o,t[u+9],12,-1958414417),o=A(o,i,r,n,t[u+10],17,-42063),n=A(n,o,i,r,t[u+11],22,-1990404162),r=A(r,n,o,i,t[u+12],7,1804603682),i=A(i,r,n,o,t[u+13],12,-40341101),o=A(o,i,r,n,t[u+14],17,-1502002290),r=C(r,n=A(n,o,i,r,t[u+15],22,1236535329),o,i,t[u+1],5,-165796510),i=C(i,r,n,o,t[u+6],9,-1069501632),o=C(o,i,r,n,t[u+11],14,643717713),n=C(n,o,i,r,t[u],20,-373897302),r=C(r,n,o,i,t[u+5],5,-701558691),i=C(i,r,n,o,t[u+10],9,38016083),o=C(o,i,r,n,t[u+15],14,-660478335),n=C(n,o,i,r,t[u+4],20,-405537848),r=C(r,n,o,i,t[u+9],5,568446438),i=C(i,r,n,o,t[u+14],9,-1019803690),o=C(o,i,r,n,t[u+3],14,-187363961),n=C(n,o,i,r,t[u+8],20,1163531501),r=C(r,n,o,i,t[u+13],5,-1444681467),i=C(i,r,n,o,t[u+2],9,-51403784),o=C(o,i,r,n,t[u+7],14,1735328473),r=k(r,n=C(n,o,i,r,t[u+12],20,-1926607734),o,i,t[u+5],4,-378558),i=k(i,r,n,o,t[u+8],11,-2022574463),o=k(o,i,r,n,t[u+11],16,1839030562),n=k(n,o,i,r,t[u+14],23,-35309556),r=k(r,n,o,i,t[u+1],4,-1530992060),i=k(i,r,n,o,t[u+4],11,1272893353),o=k(o,i,r,n,t[u+7],16,-155497632),n=k(n,o,i,r,t[u+10],23,-1094730640),r=k(r,n,o,i,t[u+13],4,681279174),i=k(i,r,n,o,t[u],11,-358537222),o=k(o,i,r,n,t[u+3],16,-722521979),n=k(n,o,i,r,t[u+6],23,76029189),r=k(r,n,o,i,t[u+9],4,-640364487),i=k(i,r,n,o,t[u+12],11,-421815835),o=k(o,i,r,n,t[u+15],16,530742520),r=E(r,n=k(n,o,i,r,t[u+2],23,-995338651),o,i,t[u],6,-198630844),i=E(i,r,n,o,t[u+7],10,1126891415),o=E(o,i,r,n,t[u+14],15,-1416354905),n=E(n,o,i,r,t[u+5],21,-57434055),r=E(r,n,o,i,t[u+12],6,1700485571),i=E(i,r,n,o,t[u+3],10,-1894986606),o=E(o,i,r,n,t[u+10],15,-1051523),n=E(n,o,i,r,t[u+1],21,-2054922799),r=E(r,n,o,i,t[u+8],6,1873313359),i=E(i,r,n,o,t[u+15],10,-30611744),o=E(o,i,r,n,t[u+6],15,-1560198380),n=E(n,o,i,r,t[u+13],21,1309151649),r=E(r,n,o,i,t[u+4],6,-145523070),i=E(i,r,n,o,t[u+11],10,-1120210379),o=E(o,i,r,n,t[u+2],15,718787259),n=E(n,o,i,r,t[u+9],21,-343485551),r=g(r,a),n=g(n,c),o=g(o,f),i=g(i,l)}return[r,n,o,i]}(function(t){if(0===t.length)return[];for(var e=8*t.length,r=new Uint32Array(m(e)),n=0;n<e;n+=8)r[n>>5]|=(255&t[n/8])<<n%32;return r}(t),8*t.length))},O=b("v3",48,I);var S=function(t,e,r){var n=(t=t||{}).random||(t.rng||i)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var o=0;o<16;++o)e[r+o]=n[o];return e}return p(n)};function U(t,e,r,n){switch(t){case 0:return e&r^~e&n;case 1:case 3:return e^r^n;case 2:return e&r^e&n^r&n}}function j(t,e){return t<<e|t>>>32-e}var R=function(t){var e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var n=unescape(encodeURIComponent(t));t=[];for(var o=0;o<n.length;++o)t.push(n.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var i=t.length/4+2,u=Math.ceil(i/16),a=new Array(u),c=0;c<u;++c){for(var f=new Uint32Array(16),l=0;l<16;++l)f[l]=t[64*c+4*l]<<24|t[64*c+4*l+1]<<16|t[64*c+4*l+2]<<8|t[64*c+4*l+3];a[c]=f}a[u-1][14]=8*(t.length-1)/Math.pow(2,32),a[u-1][14]=Math.floor(a[u-1][14]),a[u-1][15]=8*(t.length-1)&4294967295;for(var s=0;s<u;++s){for(var p=new Uint32Array(80),d=0;d<16;++d)p[d]=a[s][d];for(var v=16;v<80;++v)p[v]=j(p[v-3]^p[v-8]^p[v-14]^p[v-16],1);for(var y=r[0],h=r[1],b=r[2],m=r[3],g=r[4],w=0;w<80;++w){var A=Math.floor(w/20),C=j(y,5)+U(A,h,b,m)+g+e[A]+p[w]>>>0;g=m,m=b,b=j(h,30)>>>0,h=y,y=C}r[0]=r[0]+y>>>0,r[1]=r[1]+h>>>0,r[2]=r[2]+b>>>0,r[3]=r[3]+m>>>0,r[4]=r[4]+g>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]},_=b("v5",80,R),P="00000000-0000-0000-0000-000000000000";var T=function(t){if(!a(t))throw TypeError("Invalid UUID");return parseInt(t.substr(14,1),16)}}}]);