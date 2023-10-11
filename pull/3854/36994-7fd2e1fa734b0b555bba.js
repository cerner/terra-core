"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[36994],{1626:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(67294)),a=f(r(45697)),o=f(r(94184)),u=f(r(47166)),l=f(r(50026)),i=f(r(37932)),c=["icon","text","href","onClick","onBlur","onFocus","onKeyUp","onTagClick"];function f(e){return e&&e.__esModule?e:{default:e}}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,m(n.key),n)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v(e);if(t){var a=v(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,r)}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function m(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}var _=u.default.bind(i.default),O={href:a.default.string,icon:a.default.element,onClick:a.default.func,onBlur:a.default.func,onFocus:a.default.func,onKeyUp:a.default.func,onTagClick:a.default.func,text:a.default.string.isRequired},C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(l,e);var t,r,a,u=g(l);function l(e){var t,r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),t=u.call(this,e),r=h(t),a=function(e){t.tagNode=e},(n=m(n="setTagNode"))in r?Object.defineProperty(r,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[n]=a,t.handleKeyUp=t.handleKeyUp.bind(h(t)),t.handleOnBlur=t.handleOnBlur.bind(h(t)),t.handleClick=t.handleClick.bind(h(t)),t.tagNode=null,t}return t=l,(r=[{key:"handleOnBlur",value:function(e){this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"handleClick",value:function(e){if(this.props.onTagClick){var t=this.tagNode?this.tagNode.id:e.target.id;this.props.onTagClick(t)}this.props.onClick&&this.props.onClick()}},{key:"render",value:function(){var e=this.props,t=e.icon,r=e.text,a=e.href,u=e.onClick,l=(e.onBlur,e.onFocus),i=(e.onKeyUp,e.onTagClick,p(e,c)),f=this.context,s=(0,o.default)(_("tag",{"is-interactive":a||u},{"has-underline":a},f.className),i.className),y=_("icon"),b=t?n.default.createElement("span",{className:y},t):null,g=a||u?a?"a":"button":"span";return n.default.createElement(g,d({},i,{className:s,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:this.handleClick,onFocus:l,href:a,ref:this.setTagNode,"data-terra-tag":!0}),b,r)}}])&&y(t.prototype,r),a&&y(t,a),Object.defineProperty(t,"prototype",{writable:!1}),l}(n.default.Component);C.propTypes=O,C.contextType=l.default;t.default=C},50742:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(a,u,l):a[u]=e[u]}a.default=e,r&&r.set(e,a);return a}(r(67294)),o=r(51051),u=r(25387),l=v(r(94184)),i=v(r(47166)),c=v(r(45697)),f=v(r(32018)),s=r(55877),d=v(r(74754)),p=v(r(50026)),y=v(r(44729)),b=v(r(95506)),g=v(r(37932)),h=["ariaLabel","ariaLabelledBy","ariaDescribedBy","children","intl","isCollapsible"];function v(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}function O(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||w(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,u,l=[],i=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{if(!i&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw a}}return l}}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){if(e){if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var T=i.default.bind(g.default),k={ariaLabel:c.default.string.isRequired,ariaLabelledBy:c.default.string,ariaDescribedBy:c.default.string,children:c.default.node,isCollapsible:c.default.bool,intl:c.default.shape({formatMessage:c.default.func}).isRequired},P=function(e){var t=e.ariaLabel,r=e.ariaLabelledBy,n=e.ariaDescribedBy,u=e.children,i=e.intl,c=e.isCollapsible,g=S(e,h),v=a.default.useContext(p.default),m=C((0,a.useState)("-1"),2),w=m[0],j=m[1],k=C((0,a.useState)(a.default.Children.count(u)),2),P=k[0],E=k[1],R=C((0,a.useState)(a.default.Children.count(u)),2),A=R[0],M=R[1],x=C((0,a.useState)(c),2),N=x[0],B=x[1],U=(0,a.useRef)(),D=(0,a.useRef)(),I=(0,a.useRef)(0),K=(0,a.useRef)(!1),q=(0,a.useRef)(t),L=(0,a.useCallback)((function(){var e=y.default.getRollUpIndex(D);N?(E(e),M(a.default.Children.count(u)-e)):e===a.default.Children.count(u)&&M(0)}),[u,N]),W=function(e){var t=U.current?D.current.querySelector("#".concat(U.current)):null;t&&t.setAttribute("tabIndex",e)},V=function(){var e=U.current?D.current.querySelector("#".concat(U.current)):null;e&&e.focus()},F=(0,a.useCallback)((function(){var e=O(D.current.querySelectorAll("[data-terra-tag]")),t=D.current.querySelector("[data-terra-rollup-tag]");t&&y.default.setRollUpTagTabIndex(t,"-1"),e.length>0&&I.current<e.length?(y.default.setTagsTabIndex(e,"-1"),U.current=e[I.current].id,W("0")):c&&N&&t&&(U.current=t.getAttribute("id"),W("0"))}),[N,c]),Y=(0,a.useCallback)((function(){var e=O(D.current.querySelectorAll("[data-terra-tag]"));c&&!N&&e.length>0&&e.length===a.default.Children.count(u)&&(W("-1"),U.current=e[I.current].id,W("0"),K.current&&(V(),K.current=!1))}),[u,N,c]),H=(0,a.useCallback)((function(e){Array.isArray(e)&&(E(a.default.Children.count(u)),M(a.default.Children.count(u)),c&&L(),F(),Y())}),[u,c,F,Y,L]);(0,a.useLayoutEffect)((function(){var e=new f.default((function(e){H(e)}));return e.observe(D.current.parentNode),function(){e.disconnect(),e=null}}),[u,H]);var Z=function(e){var t=O(D.current.querySelectorAll("[data-terra-tag]"));W("-1"),I.current=t.findIndex((function(t){return t.id===e})),U.current=e,W("0"),V()},G={};G.onKeyDown=function(e){var t=O(D.current.querySelectorAll("[data-terra-tag]")),r=D.current.querySelector("[data-terra-rollup-tag]");switch(e.keyCode){case o.KEY_RIGHT:e.preventDefault(),function(e,t){var r=t?t.getAttribute("id"):null;I.current+1<=e.length&&(W("-1"),t&&I.current+1===e.length?U.current=r:I.current+1<e.length&&(I.current+=1,U.current=u[I.current].props.id),W("0"),V())}(t,r);break;case o.KEY_LEFT:e.preventDefault(),function(e,t){var r=t?t.getAttribute("id"):null;(U.current===r||I.current>=1)&&(W("-1"),t&&U.current===r?(I.current=e.length-1,U.current=u[I.current].props.id):(I.current-=1,U.current=u[I.current].props.id),W("0"),V())}(t,r);break;case o.KEY_HOME:e.preventDefault(),W("-1"),I.current=0,U.current=t[I.current].id,W("0"),V();break;case o.KEY_END:e.preventDefault(),W("-1"),I.current=t.length-1,U.current=t[I.current].id,W("0"),V()}},G.onBlur=function(){return j("-1")};var $=(0,l.default)(T(["tags-group",v.className]),g.className),z="terra-tags-group-interaction-hint-".concat((0,s.v4)()),J=n?"".concat(n," ").concat(z):z,Q=i.formatMessage({id:"Terra.tags.hint.tagList"},{numberOfTags:a.default.Children.count(u)}),X=i.formatMessage({id:"Terra.tags.tagList.navigation.hint"});Q="".concat(Q," ").concat(X),c&&A>0&&N&&(Q+=", ".concat(i.formatMessage({id:"Terra.tags.hint.rollupNotVisible"},{tagsNotVisibleCount:A})));var ee;return a.default.createElement("div",_({},g,G,{"aria-label":r?void 0:"".concat(q.current),"aria-labelledby":r,"aria-describedby":J,className:$,ref:D,role:"group",tabIndex:w}),a.default.createElement(d.default,{id:z,text:Q,"aria-hidden":"true"}),u?(ee=u,a.default.Children.map(ee,(function(e){if(a.default.isValidElement(e))return a.default.cloneElement(e,{onSelect:Z,onTagClick:Z})})).splice(0,P)):[],c&&A>0&&a.default.createElement(b.default,{isCollapsed:N,onSelectRollUp:function(e){var t=O(D.current.querySelectorAll("[data-terra-tag]"));c&&N&&("keydown"===e.type||"click"===e.type?(K.current=!0,I.current=t.length):(W("-1"),I.current=t.length)),B(!N)},rollupCount:A}))};P.defaultProps={isCollapsible:!1},P.propTypes=k;t.default=(0,u.injectIntl)(P)},95506:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(a,u,l):a[u]=e[u]}a.default=e,r&&r.set(e,a);return a}(r(67294)),o=r(25387),u=r(51051),l=r(55877),i=p(r(47166)),c=p(r(45697)),f=p(r(43868)),s=p(r(50026)),d=p(r(24480));function p(e){return e&&e.__esModule?e:{default:e}}function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}var b=i.default.bind(d.default),g={isCollapsed:c.default.bool,onSelectRollUp:c.default.func,rollupCount:c.default.number,intl:c.default.shape({formatMessage:c.default.func}).isRequired},h=function(e){var t=e.isCollapsed,r=e.onSelectRollUp,n=e.intl,o=e.rollupCount,i=(0,a.useRef)(),c=a.default.useContext(s.default),d=t&&o>0?n.formatMessage({id:"Terra.tags.label.rollupTag"},{tagsNotVisibleCount:o}):n.formatMessage({id:"Terra.tags.label.showLess"}),p=t?n.formatMessage({id:"Terra.tags.hint.rollupTag"},{tagsNotVisibleCount:o}):n.formatMessage({id:"Terra.tags.hint.showLess"}),y="terra-rollup-tag-".concat((0,l.v4)());return a.default.createElement("div",{className:b("tag-list-item")},a.default.createElement(f.default,{id:y,className:b(["rollup-tag",c.className]),onClick:function(e){i.current.setAttribute("data-terra-rollup-tag-show-focus-styles","true"),e.preventDefault(),r&&r(e)},onKeyDown:function(e){i.current.setAttribute("data-terra-rollup-tag-show-focus-styles","true"),e.keyCode!==u.KEY_RETURN&&e.keyCode!==u.KEY_SPACE||(e.preventDefault(),r&&r(e))},onMouseDown:function(){i.current.setAttribute("data-terra-rollup-tag-show-focus-styles","false")},text:d,onBlur:function(){i.current.setAttribute("data-terra-rollup-tag-show-focus-styles","true")},refCallback:i,isCompact:!0,"aria-live":t?"polite":"off","aria-label":p,"aria-describedby":p,"aria-atomic":"true","data-terra-rollup-tag-show-focus-styles":!0,"data-terra-rollup-tag":!0}))};h.propTypes=g;t.default=(0,o.injectIntl)(h)},44729:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={getRollUpIndex:function(e){var t,r=e.current.querySelector("[data-terra-rollup-tag]"),n=e.current.querySelectorAll("[data-terra-tag]"),a=e.current.offsetWidth,o=0,u=0,l=0;r&&(l=function(e){return e.parentElement.offsetWidth+parseFloat(window.getComputedStyle(e.parentElement,null).getPropertyValue("margin-right"),10)}(r));for(var i=0;i<n.length&&!(o>=a);i+=1){var c=(t=n[i]).offsetWidth+parseFloat(window.getComputedStyle(t,null).getPropertyValue("margin-right"),10);c+o+l<a&&(u=i+1),o+=c}return u},setTagsTabIndex:function(e,t){for(var r=0;r<e.length;r+=1)e[r].setAttribute("tabindex",t)},setRollUpTagTabIndex:function(e,t){e.setAttribute("tabindex",t)}};t.default=r},36994:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"TagList",{enumerable:!0,get:function(){return n.default}}),t.default=void 0;var n=o(r(50742)),a=o(r(1626));function o(e){return e&&e.__esModule?e:{default:e}}t.default=a.default},24480:function(e,t,r){r.r(t),t.default={"rollup-tag-label":"RollupTag-module__rollup-tag-label___fgev-","rollup-tag":"RollupTag-module__rollup-tag___gUTeZ","is-active":"RollupTag-module__is-active___hVp37","tag-list-item":"RollupTag-module__tag-list-item___PqYOB","tags-group":"RollupTag-module__tags-group___Zdpg7"}},37932:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Tag-module__clinical-lowlight-theme___5sCDf","orion-fusion-theme":"Tag-module__orion-fusion-theme___1C0Ag",tag:"Tag-module__tag___nh+rs","is-interactive":"Tag-module__is-interactive___o8dLe","has-underline":"Tag-module__has-underline___jR7cO",icon:"Tag-module__icon___CoP6c"}}}]);