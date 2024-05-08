"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[47566],{47566:function(e,a,r){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=u(r(96540)),l=u(r(5556)),i=u(r(46942)),o=u(r(67967)),p=u(r(52103)),m=u(r(56819)),d=r(12405),g=r(23220),_=["margin","marginTop","marginBottom","marginLeft","marginRight","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","isInlineBlock","children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},c.apply(this,arguments)}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){S(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function S(e,a,r){var n;return n=function(e,a){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,a||"default");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(a,"string"),(a="symbol"==t(n)?n:n+"")in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function b(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r={};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){if(a.indexOf(t)>=0)continue;r[t]=e[t]}return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var h=o.default.bind(m.default),v=["none","small-2","small-1","small","medium","large","large+1","large+2","large+3","large+4"],y={children:l.default.node.isRequired,margin:d.shorthandValidator,marginTop:l.default.oneOf(v),marginBottom:l.default.oneOf(v),marginLeft:l.default.oneOf(v),marginRight:l.default.oneOf(v),padding:d.shorthandValidator,paddingTop:l.default.oneOf(v),paddingBottom:l.default.oneOf(v),paddingLeft:l.default.oneOf(v),paddingRight:l.default.oneOf(v),isInlineBlock:l.default.bool},O={margin:void 0,marginTop:g.SpacerSizes.NONE,marginBottom:g.SpacerSizes.NONE,marginRight:g.SpacerSizes.NONE,marginLeft:g.SpacerSizes.NONE,padding:void 0,paddingTop:g.SpacerSizes.NONE,paddingBottom:g.SpacerSizes.NONE,paddingLeft:g.SpacerSizes.NONE,paddingRight:g.SpacerSizes.NONE,isInlineBlock:!1},P=function(e){var a=e.margin,r=e.marginTop,t=e.marginBottom,l=e.marginLeft,o=e.marginRight,m=e.padding,u=e.paddingTop,s=e.paddingBottom,S=e.paddingLeft,v=e.paddingRight,y=e.isInlineBlock,O=e.children,P=b(e,_),E=n.default.useContext(p.default),N=a?(0,d.mapShorthandToObject)("margin",a):{},L=m?(0,d.mapShorthandToObject)("padding",m):{},R=f({marginTop:r,marginRight:o,marginBottom:t,marginLeft:l},N),T=f({paddingTop:u,paddingRight:v,paddingBottom:s,paddingLeft:S},L),j=(0,i.default)(h("margin-top-".concat(g.SpacerClassMappings[R.marginTop]),"margin-bottom-".concat(g.SpacerClassMappings[R.marginBottom]),"margin-left-".concat(g.SpacerClassMappings[R.marginLeft]),"margin-right-".concat(g.SpacerClassMappings[R.marginRight]),"padding-top-".concat(g.SpacerClassMappings[T.paddingTop]),"padding-bottom-".concat(g.SpacerClassMappings[T.paddingBottom]),"padding-left-".concat(g.SpacerClassMappings[T.paddingLeft]),"padding-right-".concat(g.SpacerClassMappings[T.paddingRight]),{"is-inline-block":y},E.className),P.className);return n.default.createElement("div",c({},P,{className:j}),O)},E={Sizes:g.SpacerSizes};P.propTypes=y,P.defaultProps=O,P.Opts=E;a.default=P},23220:function(e,a){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function t(e,a,t){var n;return n=function(e,a){if("object"!=r(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,a||"default");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(a,"string"),(a="symbol"==r(n)?n:n+"")in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}Object.defineProperty(a,"__esModule",{value:!0}),a.SpacerSizes=a.SpacerClassMappings=void 0;var n=a.SpacerSizes={NONE:"none","SMALL-2":"small-2","SMALL-1":"small-1",SMALL:"small",MEDIUM:"medium",LARGE:"large","LARGE+1":"large+1","LARGE+2":"large+2","LARGE+3":"large+3","LARGE+4":"large+4"};a.SpacerClassMappings=t(t(t(t(t(t(t(t(t(t({},n.NONE,"none"),n["SMALL-2"],"small-minus-2"),n["SMALL-1"],"small-minus-1"),n.SMALL,"small"),n.MEDIUM,"medium"),n.LARGE,"large"),n["LARGE+1"],"large-plus-1"),n["LARGE+2"],"large-plus-2"),n["LARGE+3"],"large-plus-3"),n["LARGE+4"],"large-plus-4")},12405:function(e,a,r){Object.defineProperty(a,"__esModule",{value:!0}),a.shorthandValidator=a.mapShorthandToObject=a.ShorthandPropErrors=void 0;var t=r(23220);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function l(e,a,r){var t;return t=function(e,a){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,a||"default");if("object"!=n(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(a,"string"),(a="symbol"==n(t)?t:t+"")in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}var i=1,o=4,p=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"<SUPPLY CONFLICTING PROP NAME>",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Spacer";return new Error("Expected only ".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"<SUPPLY SHORTHAND PROP NAME>"," or ").concat(e," to be supplied to ").concat(a," but both were provided. Validation failed."))},m=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"<SUPPLY RECEIVED ARGS LENGTH>",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o,t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Spacer";return new Error("Invalid number of argument substrings provided to ".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"<SUPPLY SHORTHAND PROP NAME>"," in ").concat(t,". Expected ").concat(a,"-").concat(r,". Received ").concat(e,". Validation failed."))},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"<SUPPLY SHORTHAND PROP NAME>",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.values(t.SpacerSizes),n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Spacer";return new Error("Expected ".concat(e," shorthand values to be one of ").concat(r,' but "').concat(a,'" supplied to ').concat(n,". Validation Failed."))};a.ShorthandPropErrors={conflictingPropName:p,invalidShorthandLength:m,invalidShorthandArg:d},a.mapShorthandToObject=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"").split(" "),r=function(a,r,t,n){return l(l(l(l({},"".concat(e,"Top"),a),"".concat(e,"Right"),r),"".concat(e,"Bottom"),t),"".concat(e,"Left"),n)};switch(a.length){case 1:return r(a[0],a[0],a[0],a[0]);case 2:return r(a[0],a[1],a[0],a[1]);case 3:return r(a[0],a[1],a[2],a[1]);case 4:return r(a[0],a[1],a[2],a[3]);default:return{}}},a.shorthandValidator=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=e[a];if(void 0===r||r===t.SpacerSizes.NONE)return null;var n,l=((n=function(r){return e["".concat(a).concat(r)]&&e["".concat(a).concat(r)]!==t.SpacerSizes.NONE})("Top")?"".concat(a,"Top"):void 0)||(n("Right")?"".concat(a,"Right"):void 0)||(n("Bottom")?"".concat(a,"Bottom"):void 0)||(n("Left")?"".concat(a,"Left"):void 0);if(l)return p(a,l);var g=r.split(" ").filter((function(e){return e}));if(!(g.length>=i&&g.length<=o))return m(a,g.length);var _,u,c=(_=Object.values(t.SpacerSizes),(u=g.filter((function(e){return-1===_.indexOf(e)}))).length>0?u:null);return c?d(a,c):null}},56819:function(e,a,r){r.r(a),a.default={"clinical-lowlight-theme":"Spacer-module__clinical-lowlight-theme___8Rq6e","orion-fusion-theme":"Spacer-module__orion-fusion-theme___0d8+h","margin-top-none":"Spacer-module__margin-top-none___hVeUB","margin-top-small-minus-2":"Spacer-module__margin-top-small-minus-2___WbwFm","margin-top-small-minus-1":"Spacer-module__margin-top-small-minus-1___RNkyY","margin-top-small":"Spacer-module__margin-top-small___KeQRE","margin-top-medium":"Spacer-module__margin-top-medium___k7WQY","margin-top-large":"Spacer-module__margin-top-large___wB1n0","margin-top-large-plus-1":"Spacer-module__margin-top-large-plus-1___GYS5y","margin-top-large-plus-2":"Spacer-module__margin-top-large-plus-2___Z9SmK","margin-top-large-plus-3":"Spacer-module__margin-top-large-plus-3___50JhA","margin-top-large-plus-4":"Spacer-module__margin-top-large-plus-4___waLOV","margin-bottom-none":"Spacer-module__margin-bottom-none___dxaM4","margin-bottom-small-minus-2":"Spacer-module__margin-bottom-small-minus-2___kxaiF","margin-bottom-small-minus-1":"Spacer-module__margin-bottom-small-minus-1___yusgS","margin-bottom-small":"Spacer-module__margin-bottom-small___nzqYc","margin-bottom-medium":"Spacer-module__margin-bottom-medium___GC7k3","margin-bottom-large":"Spacer-module__margin-bottom-large___TPYZP","margin-bottom-large-plus-1":"Spacer-module__margin-bottom-large-plus-1___ouECn","margin-bottom-large-plus-2":"Spacer-module__margin-bottom-large-plus-2___TLWOZ","margin-bottom-large-plus-3":"Spacer-module__margin-bottom-large-plus-3___PqTlb","margin-bottom-large-plus-4":"Spacer-module__margin-bottom-large-plus-4___+Cq-U","margin-left-none":"Spacer-module__margin-left-none___MzEe1","margin-left-small-minus-2":"Spacer-module__margin-left-small-minus-2___Dfgvq","margin-left-small-minus-1":"Spacer-module__margin-left-small-minus-1___HGPbk","margin-left-small":"Spacer-module__margin-left-small___-ZYmW","margin-left-medium":"Spacer-module__margin-left-medium___63TQR","margin-left-large":"Spacer-module__margin-left-large___EWYjd","margin-left-large-plus-1":"Spacer-module__margin-left-large-plus-1___vSoo+","margin-left-large-plus-2":"Spacer-module__margin-left-large-plus-2___bNeXc","margin-left-large-plus-3":"Spacer-module__margin-left-large-plus-3___6yABR","margin-left-large-plus-4":"Spacer-module__margin-left-large-plus-4___weNQG","margin-right-none":"Spacer-module__margin-right-none___re0LN","margin-right-small-minus-2":"Spacer-module__margin-right-small-minus-2___pHPmo","margin-right-small-minus-1":"Spacer-module__margin-right-small-minus-1___gyZ03","margin-right-small":"Spacer-module__margin-right-small___sqzoN","margin-right-medium":"Spacer-module__margin-right-medium___3UwFN","margin-right-large":"Spacer-module__margin-right-large___TAtPn","margin-right-large-plus-1":"Spacer-module__margin-right-large-plus-1___NQqMU","margin-right-large-plus-2":"Spacer-module__margin-right-large-plus-2___pGE3y","margin-right-large-plus-3":"Spacer-module__margin-right-large-plus-3___y8y54","margin-right-large-plus-4":"Spacer-module__margin-right-large-plus-4___llwCy","padding-top-none":"Spacer-module__padding-top-none___VtKhq","padding-top-small-minus-2":"Spacer-module__padding-top-small-minus-2___cV766","padding-top-small-minus-1":"Spacer-module__padding-top-small-minus-1___CMhTM","padding-top-small":"Spacer-module__padding-top-small___RJYFI","padding-top-medium":"Spacer-module__padding-top-medium___-8w1-","padding-top-large":"Spacer-module__padding-top-large___43xea","padding-top-large-plus-1":"Spacer-module__padding-top-large-plus-1___xITmh","padding-top-large-plus-2":"Spacer-module__padding-top-large-plus-2___whcEi","padding-top-large-plus-3":"Spacer-module__padding-top-large-plus-3___Wa+A3","padding-top-large-plus-4":"Spacer-module__padding-top-large-plus-4___vH-Fs","padding-bottom-none":"Spacer-module__padding-bottom-none___IRpjC","padding-bottom-small-minus-2":"Spacer-module__padding-bottom-small-minus-2___VfG4L","padding-bottom-small-minus-1":"Spacer-module__padding-bottom-small-minus-1___0dSpu","padding-bottom-small":"Spacer-module__padding-bottom-small___NkMYv","padding-bottom-medium":"Spacer-module__padding-bottom-medium___2XopA","padding-bottom-large":"Spacer-module__padding-bottom-large___rz+aD","padding-bottom-large-plus-1":"Spacer-module__padding-bottom-large-plus-1___dN6fw","padding-bottom-large-plus-2":"Spacer-module__padding-bottom-large-plus-2___SMnM+","padding-bottom-large-plus-3":"Spacer-module__padding-bottom-large-plus-3___3bgmF","padding-bottom-large-plus-4":"Spacer-module__padding-bottom-large-plus-4___xW3VQ","padding-left-none":"Spacer-module__padding-left-none___cUcVP","padding-left-small-minus-2":"Spacer-module__padding-left-small-minus-2___b6elj","padding-left-small-minus-1":"Spacer-module__padding-left-small-minus-1___+l3RS","padding-left-small":"Spacer-module__padding-left-small___XPP1a","padding-left-medium":"Spacer-module__padding-left-medium___IH2aV","padding-left-large":"Spacer-module__padding-left-large___aBpBx","padding-left-large-plus-1":"Spacer-module__padding-left-large-plus-1___dfCEW","padding-left-large-plus-2":"Spacer-module__padding-left-large-plus-2___ZC-sT","padding-left-large-plus-3":"Spacer-module__padding-left-large-plus-3___nVPzd","padding-left-large-plus-4":"Spacer-module__padding-left-large-plus-4___-XMnV","padding-right-none":"Spacer-module__padding-right-none___GERAJ","padding-right-small-minus-2":"Spacer-module__padding-right-small-minus-2___T7kcX","padding-right-small-minus-1":"Spacer-module__padding-right-small-minus-1___uG7Yz","padding-right-small":"Spacer-module__padding-right-small___bWTPv","padding-right-medium":"Spacer-module__padding-right-medium___PTKH-","padding-right-large":"Spacer-module__padding-right-large___rrvXZ","padding-right-large-plus-1":"Spacer-module__padding-right-large-plus-1___ltTsD","padding-right-large-plus-2":"Spacer-module__padding-right-large-plus-2___UcT6u","padding-right-large-plus-3":"Spacer-module__padding-right-large-plus-3___giQbZ","padding-right-large-plus-4":"Spacer-module__padding-right-large-plus-4___x+Kvg","is-inline-block":"Spacer-module__is-inline-block___A+6Dx"}}}]);