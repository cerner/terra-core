"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[36994],{1626:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(r(67294)),a=s(r(45697)),u=s(r(94184)),l=s(r(47166)),i=s(r(50026)),c=s(r(37932)),f=["icon","text","href","onClick","onBlur","onFocus","onKeyUp"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(a=o.key,u=void 0,u=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===n(u)?u:String(u)),o)}var a,u}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=m(e);if(t){var a=m(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,r)}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var v=l.default.bind(c.default),_={href:a.default.string,icon:a.default.element,onClick:a.default.func,onBlur:a.default.func,onFocus:a.default.func,onKeyUp:a.default.func,text:a.default.string.isRequired},O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(l,e);var t,r,n,a=g(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=a.call(this,e)).handleKeyUp=t.handleKeyUp.bind(h(t)),t.handleOnBlur=t.handleOnBlur.bind(h(t)),t.handleClick=t.handleClick.bind(h(t)),t}return t=l,(r=[{key:"handleOnBlur",value:function(e){this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"handleClick",value:function(e){this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,r=e.text,n=e.href,a=e.onClick,l=(e.onBlur,e.onFocus),i=(e.onKeyUp,p(e,f)),c=this.context,s=(0,u.default)(v("tag",{"is-interactive":n||a},{"has-underline":n},c.className),i.className),y=v("icon"),b=t?o.default.createElement("span",{className:y},t):null,g=n||a?n?"a":"button":"span";return o.default.createElement(g,d({},i,{className:s,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:this.handleClick,onFocus:l,href:n,"data-terra-tag":!0}),b,r)}}])&&y(t.prototype,r),n&&y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.default.Component);O.propTypes=_,O.contextType=i.default;t.default=O},50742:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=v(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(o,u,l):o[u]=e[u]}return o.default=e,r&&r.set(e,o),o}(r(67294)),a=r(51051),u=r(25387),l=m(r(94184)),i=m(r(47166)),c=m(r(45697)),f=m(r(32018)),s=r(55877),d=m(r(74754)),p=m(r(50026)),y=m(r(44729)),b=m(r(95506)),g=m(r(37932)),h=["ariaLabel","ariaLabelledBy","ariaDescribedBy","children","intl","isCollapsible"];function m(e){return e&&e.__esModule?e:{default:e}}function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(v=function(e){return e?r:t})(e)}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}function O(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,u,l=[],i=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{if(!i&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return l}}(e,t)||C(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){if(e){if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var T=i.default.bind(g.default),k={ariaLabel:c.default.string.isRequired,ariaLabelledBy:c.default.string,ariaDescribedBy:c.default.string,children:c.default.node,isCollapsible:c.default.bool,intl:c.default.shape({formatMessage:c.default.func}).isRequired},P=function(e){var t=e.ariaLabel,r=e.ariaLabelledBy,n=e.ariaDescribedBy,u=e.children,i=e.intl,c=e.isCollapsible,g=S(e,h),m=o.default.useContext(p.default),v=w((0,o.useState)("-1"),2),C=v[0],j=v[1],k=w((0,o.useState)(o.default.Children.count(u)),2),P=k[0],R=k[1],E=w((0,o.useState)(o.default.Children.count(u)),2),M=E[0],x=E[1],A=w((0,o.useState)(c),2),B=A[0],U=A[1],D=(0,o.useRef)(),I=(0,o.useRef)(),K=(0,o.useRef)(0),N=(0,o.useRef)(!1),L=(0,o.useRef)(t),q=(0,o.useCallback)((function(){var e=y.default.getRollUpIndex(I);B?(R(e),x(o.default.Children.count(u)-e)):e===o.default.Children.count(u)&&x(0)}),[u,B]),W=function(e){D.current&&D.current.setAttribute("tabIndex",e)},V=function(){D.current&&D.current.focus()},F=(0,o.useCallback)((function(){var e=O(I.current.querySelectorAll("[data-terra-tag]")),t=I.current.querySelector("[data-terra-rollup-tag]");t&&y.default.setRollUpTagTabIndex(t,"-1"),e.length>0&&K.current<e.length?(y.default.setTagsTabIndex(e,"-1"),D.current=e[K.current],W("0")):c&&B&&t&&(D.current=t,W("0"))}),[B,c]),Y=(0,o.useCallback)((function(){var e=O(I.current.querySelectorAll("[data-terra-tag]"));c&&!B&&e.length>0&&e.length===o.default.Children.count(u)&&(W("-1"),D.current=e[K.current],W("0"),N.current&&(V(),N.current=!1))}),[u,B,c]),H=(0,o.useCallback)((function(e){Array.isArray(e)&&(R(o.default.Children.count(u)),x(o.default.Children.count(u)),c&&q(),F(),Y())}),[u,c,F,Y,q]);(0,o.useLayoutEffect)((function(){var e=new f.default((function(e){H(e)}));return e.observe(I.current.parentNode),function(){e.disconnect(),e=null}}),[u,H]);var Z=function(e){var t=O(I.current.querySelectorAll("[data-terra-tag]"));W("-1"),K.current=t.findIndex((function(t){return t.id===e.currentTarget.id})),D.current=t.find((function(t){return t.id===e.currentTarget.id})),W("0"),V()},z={};z.onKeyDown=function(e){var t=O(I.current.querySelectorAll("[data-terra-tag]")),r=I.current.querySelector("[data-terra-rollup-tag]");switch(e.keyCode){case a.KEY_RIGHT:e.preventDefault(),function(e,t){K.current+1<=e.length&&(W("-1"),t&&K.current+1===e.length?D.current=t:K.current+1<e.length&&(K.current+=1,D.current=e[K.current]),W("0"),V())}(t,r);break;case a.KEY_LEFT:e.preventDefault(),function(e,t){(D.current===t||K.current>=1)&&(W("-1"),t&&D.current===t?(K.current=e.length-1,D.current=e[K.current]):(K.current-=1,D.current=e[K.current]),W("0"),V())}(t,r);break;case a.KEY_HOME:e.preventDefault(),W("-1"),K.current=0,D.current=t[K.current],W("0"),V();break;case a.KEY_END:e.preventDefault(),W("-1"),K.current=t.length-1,D.current=t[K.current],W("0"),V()}},z.onBlur=function(){return j("-1")};var G=(0,l.default)(T(["tags-group",m.className]),g.className),X="terra-tags-group-interaction-hint-".concat((0,s.v4)()),$=n?"".concat(n," ").concat(X):X,J=i.formatMessage({id:"Terra.tags.hint.tagList"},{numberOfTags:o.default.Children.count(u)}),Q=i.formatMessage({id:"Terra.tags.tagList.navigation.hint"});J="".concat(J," ").concat(Q),c&&M>0&&B&&(J+=", ".concat(i.formatMessage({id:"Terra.tags.hint.rollupNotVisible"},{tagsNotVisibleCount:M})));var ee;return o.default.createElement("div",_({},g,z,{"aria-label":r?void 0:"".concat(L.current),"aria-labelledby":r,"aria-describedby":$,className:G,ref:I,role:"group",tabIndex:C}),o.default.createElement(d.default,{id:X,text:J,"aria-hidden":"true"}),u?(ee=u,o.default.Children.map(ee,(function(e){if(o.default.isValidElement(e))return o.default.cloneElement(e,{onSelect:Z})})).splice(0,P)):[],c&&M>0&&o.default.createElement(b.default,{isCollapsed:B,onSelectRollUp:function(e){var t=O(I.current.querySelectorAll("[data-terra-tag]"));c&&B&&("keydown"===e.type||"click"===e.type?(N.current=!0,K.current=t.length):(W("-1"),K.current=t.length)),U(!B)},rollupCount:M}))};P.defaultProps={isCollapsible:!1},P.propTypes=k;t.default=(0,u.injectIntl)(P)},95506:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(o,u,l):o[u]=e[u]}return o.default=e,r&&r.set(e,o),o}(r(67294)),a=r(25387),u=r(51051),l=r(55877),i=p(r(47166)),c=p(r(45697)),f=p(r(43868)),s=p(r(50026)),d=p(r(24480));function p(e){return e&&e.__esModule?e:{default:e}}function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}var b=i.default.bind(d.default),g={isCollapsed:c.default.bool,onSelectRollUp:c.default.func,rollupCount:c.default.number,intl:c.default.shape({formatMessage:c.default.func}).isRequired},h=function(e){var t=e.isCollapsed,r=e.onSelectRollUp,n=e.intl,a=e.rollupCount,i=(0,o.useRef)(),c=o.default.useContext(s.default),d=t&&a>0?n.formatMessage({id:"Terra.tags.label.rollupTag"},{tagsNotVisibleCount:a}):n.formatMessage({id:"Terra.tags.label.showLess"}),p=t?n.formatMessage({id:"Terra.tags.hint.rollupTag"},{tagsNotVisibleCount:a}):n.formatMessage({id:"Terra.tags.hint.showLess"}),y="terra-rollup-tag-".concat((0,l.v4)());return o.default.createElement(f.default,{id:y,className:b(["rollup-tag",c.className]),onClick:function(e){i.current.setAttribute("data-terra-rollup-tag-show-focus-styles","true"),e.preventDefault(),r&&r(e)},onKeyDown:function(e){i.current.setAttribute("data-terra-rollup-tag-show-focus-styles","true"),e.keyCode!==u.KEY_RETURN&&e.keyCode!==u.KEY_SPACE||(e.preventDefault(),r&&r(e))},onMouseDown:function(){i.current.setAttribute("data-terra-rollup-tag-show-focus-styles","false")},text:d,onBlur:function(){i.current.setAttribute("data-terra-rollup-tag-show-focus-styles","true")},refCallback:function(e){i.current=e},isCompact:!0,"aria-live":t?"polite":"off","aria-label":p,"aria-describedby":p,"aria-atomic":"true","data-terra-rollup-tag-show-focus-styles":!0,"data-terra-rollup-tag":!0})};h.propTypes=g;t.default=(0,a.injectIntl)(h)},44729:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={getRollUpIndex:function(e){var t,r=e.current.querySelector("[data-terra-rollup-tag]"),n=e.current.querySelectorAll("[data-terra-tag]"),o=e.current.offsetWidth,a=0,u=0,l=0;r&&(l=function(e){return e.offsetWidth+parseFloat(window.getComputedStyle(e,null).getPropertyValue("margin-right"),10)}(r));for(var i=0;i<n.length&&!(a>=o);i+=1){var c=(t=n[i]).offsetWidth+parseFloat(window.getComputedStyle(t,null).getPropertyValue("margin-right"),10);c+a+l<o&&(u=i+1),a+=c}return u},setTagsTabIndex:function(e,t){for(var r=0;r<e.length;r+=1)e[r].setAttribute("tabindex",t)},setRollUpTagTabIndex:function(e,t){e.setAttribute("tabindex",t)}};t.default=r},36994:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"TagList",{enumerable:!0,get:function(){return n.default}}),t.default=void 0;var n=a(r(50742)),o=a(r(1626));function a(e){return e&&e.__esModule?e:{default:e}}t.default=o.default},24480:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"RollupTag-module__clinical-lowlight-theme___kXw8z","orion-fusion-theme":"RollupTag-module__orion-fusion-theme___xHNsc","rollup-tag-label":"RollupTag-module__rollup-tag-label___fgev-","rollup-tag":"RollupTag-module__rollup-tag___gUTeZ","is-active":"RollupTag-module__is-active___hVp37","tags-group":"RollupTag-module__tags-group___Zdpg7"}},37932:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Tag-module__clinical-lowlight-theme___5sCDf","orion-fusion-theme":"Tag-module__orion-fusion-theme___1C0Ag",tag:"Tag-module__tag___nh+rs","is-interactive":"Tag-module__is-interactive___o8dLe","has-underline":"Tag-module__has-underline___jR7cO",icon:"Tag-module__icon___CoP6c"}}}]);