"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[36994],{1626:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(r(67294)),o=p(r(45697)),u=p(r(94184)),l=p(r(47166)),i=p(r(50026)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(a,u,l):a[u]=e[u]}a.default=e,r&&r.set(e,a);return a}(r(51051)),f=p(r(37932)),s=["icon","text","href","onClick","onBlur","onFocus","onKeyUp","onTagClick"];function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function p(e){return e&&e.__esModule?e:{default:e}}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function g(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(o=a.key,u=void 0,u=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===n(u)?u:String(u)),a)}var o,u}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=_(e);if(t){var o=_(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,r)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var O=l.default.bind(f.default),w={href:o.default.string,icon:o.default.element,onClick:o.default.func,onBlur:o.default.func,onFocus:o.default.func,onKeyUp:o.default.func,onTagClick:o.default.func,text:o.default.string.isRequired},C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(l,e);var t,r,n,o=v(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=o.call(this,e)).state={focused:!1},t.handleKeyUp=t.handleKeyUp.bind(m(t)),t.handleOnBlur=t.handleOnBlur.bind(m(t)),t.handleClick=t.handleClick.bind(m(t)),t}return t=l,(r=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){new Set([c.KEY_TAB,c.KEY_LEFT,c.KEY_RIGHT,c.KEY_RETURN]).has(e.nativeEvent.keyCode)&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"handleClick",value:function(e){var t=this;this.props.onTagClick&&this.props.onTagClick(e.target.id),this.props.onClick&&this.props.onClick(),setTimeout((function(){t.setState({focused:!0})}),100)}},{key:"render",value:function(){var e=this.props,t=e.icon,r=e.text,n=e.href,o=e.onClick,l=(e.onBlur,e.onFocus),i=(e.onKeyUp,e.onTagClick,b(e,s)),c=this.context,f=(0,u.default)(O("tag",{"is-focused":this.state.focused},{"is-interactive":n||o},{"has-underline":n},c.className),i.className),d=O("icon"),p=t?a.default.createElement("span",{className:d},t):null,g=n||o?n?"a":"button":"span";return a.default.createElement(g,y({},i,{className:f,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:this.handleClick,onFocus:l,href:n,"data-terra-tag":!0}),p,r)}}])&&g(t.prototype,r),n&&g(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(a.default.Component);C.propTypes=w,C.contextType=i.default;t.default=C},50742:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(a,u,l):a[u]=e[u]}a.default=e,r&&r.set(e,a);return a}(r(67294)),o=r(51051),u=r(25387),l=v(r(94184)),i=v(r(47166)),c=v(r(45697)),f=v(r(32018)),s=r(55877),d=v(r(74754)),p=v(r(50026)),y=v(r(44729)),b=v(r(95506)),g=v(r(37932)),h=["ariaLabel","ariaLabelledBy","ariaDescribedBy","children","intl","isCollapsible"];function v(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}function O(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,u,l=[],i=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{if(!i&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw a}}return l}}(e,t)||C(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){if(e){if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var T=i.default.bind(g.default),k={ariaLabel:c.default.string.isRequired,ariaLabelledBy:c.default.string,ariaDescribedBy:c.default.string,children:c.default.node,isCollapsible:c.default.bool,intl:c.default.shape({formatMessage:c.default.func}).isRequired},P=function(e){var t=e.ariaLabel,r=e.ariaLabelledBy,n=e.ariaDescribedBy,u=e.children,i=e.intl,c=e.isCollapsible,g=S(e,h),v=a.default.useContext(p.default),m=w((0,a.useState)("-1"),2),C=m[0],j=m[1],k=w((0,a.useState)(a.default.Children.count(u)),2),P=k[0],E=k[1],M=w((0,a.useState)(a.default.Children.count(u)),2),A=M[0],R=M[1],x=w((0,a.useState)(c),2),B=x[0],K=x[1],D=(0,a.useRef)(),I=(0,a.useRef)(),N=(0,a.useRef)(0),U=(0,a.useRef)(!1),q=(0,a.useRef)(t),L=(0,a.useCallback)((function(){var e=y.default.getRollUpIndex(I);B?(E(e),R(a.default.Children.count(u)-e)):e===a.default.Children.count(u)&&R(0)}),[u,B]),W=function(e){var t=D.current?I.current.querySelector("#".concat(D.current)):null;t&&t.setAttribute("tabIndex",e)},Y=function(){var e=D.current?I.current.querySelector("#".concat(D.current)):null;e&&e.focus()},F=(0,a.useCallback)((function(){var e=O(I.current.querySelectorAll("[data-terra-tag]")),t=I.current.querySelector("[data-terra-rollup-tag]");t&&y.default.setRollUpTagTabIndex(t,"-1"),e.length>0&&N.current<e.length?(y.default.setTagsTabIndex(e,"-1"),D.current=e[N.current].id,W("0")):c&&B&&t&&(D.current=t.getAttribute("id"),W("0"))}),[B,c]),V=(0,a.useCallback)((function(){var e=O(I.current.querySelectorAll("[data-terra-tag]"));c&&!B&&e.length>0&&e.length===a.default.Children.count(u)&&(W("-1"),D.current=e[N.current].id,W("0"),U.current&&(Y(),U.current=!1))}),[u,B,c]),H=(0,a.useCallback)((function(e){Array.isArray(e)&&(E(a.default.Children.count(u)),R(a.default.Children.count(u)),c&&L(),F(),V())}),[u,c,F,V,L]);(0,a.useLayoutEffect)((function(){var e=new f.default((function(e){H(e)}));return e.observe(I.current.parentNode),function(){e.disconnect(),e=null}}),[u,H]);var G=function(e){var t=O(I.current.querySelectorAll("[data-terra-tag]"));W("-1"),N.current=t.findIndex((function(t){return t.id===e})),D.current=e,W("0"),Y()},Q={};Q.onKeyDown=function(e){var t=O(I.current.querySelectorAll("[data-terra-tag]")),r=I.current.querySelector("[data-terra-rollup-tag]");switch(e.keyCode){case o.KEY_RIGHT:e.preventDefault(),function(e,t){var r=t?t.getAttribute("id"):null;N.current+1<=e.length&&(W("-1"),t&&N.current+1===e.length?D.current=r:N.current+1<e.length&&(N.current+=1,D.current=u[N.current].props.id),W("0"),Y())}(t,r);break;case o.KEY_LEFT:e.preventDefault(),function(e,t){var r=t?t.getAttribute("id"):null;(D.current===r||N.current>=1)&&(W("-1"),t&&D.current===r?(N.current=e.length-1,D.current=u[N.current].props.id):(N.current-=1,D.current=u[N.current].props.id),W("0"),Y())}(t,r);break;case o.KEY_HOME:e.preventDefault(),W("-1"),N.current=0,D.current=t[N.current].id,W("0"),Y();break;case o.KEY_END:e.preventDefault(),W("-1"),N.current=t.length-1,D.current=t[N.current].id,W("0"),Y()}},Q.onBlur=function(){return j("-1")};var J=(0,l.default)(T(["tags-group",v.className]),g.className),X="terra-tags-group-interaction-hint-".concat((0,s.v4)()),$=n?"".concat(n," ").concat(X):X,z=i.formatMessage({id:"Terra.tags.hint.tagList"},{numberOfTags:a.default.Children.count(u)}),Z=i.formatMessage({id:"Terra.tags.tagList.navigation.hint"});z="".concat(z," ").concat(Z),c&&A>0&&B&&(z+=", ".concat(i.formatMessage({id:"Terra.tags.hint.rollupNotVisible"},{tagsNotVisibleCount:A})));var ee;return a.default.createElement("div",_({},g,Q,{"aria-label":r?void 0:"".concat(q.current),"aria-labelledby":r,"aria-describedby":$,className:J,ref:I,role:"group",tabIndex:C}),a.default.createElement(d.default,{id:X,text:z,"aria-hidden":"true"}),u?(ee=u,a.default.Children.map(ee,(function(e){if(a.default.isValidElement(e))return a.default.cloneElement(e,{onSelect:G,onTagClick:G})})).splice(0,P)):[],c&&A>0&&a.default.createElement(b.default,{isCollapsed:B,onSelectRollUp:function(e){var t=O(I.current.querySelectorAll("[data-terra-tag]"));c&&B&&("keydown"===e.type||"click"===e.type?(U.current=!0,N.current=t.length):(W("-1"),N.current=t.length)),K(!B)},rollupCount:A}))};P.defaultProps={isCollapsible:!1},P.propTypes=k;t.default=(0,u.injectIntl)(P)},95506:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(a,u,l):a[u]=e[u]}a.default=e,r&&r.set(e,a);return a}(r(67294)),o=r(25387),u=r(51051),l=r(55877),i=p(r(47166)),c=p(r(45697)),f=p(r(50026)),s=p(r(74754)),d=p(r(37932));function p(e){return e&&e.__esModule?e:{default:e}}function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}var b=i.default.bind(d.default),g={isCollapsed:c.default.bool,onSelectRollUp:c.default.func,rollupCount:c.default.number,intl:c.default.shape({formatMessage:c.default.func}).isRequired},h=function(e){var t=e.isCollapsed,r=e.onSelectRollUp,n=e.intl,o=e.rollupCount,i=(0,a.useRef)(),c=a.default.useContext(f.default),d=t&&o>0?n.formatMessage({id:"Terra.tags.label.rollupTag"},{tagsNotVisibleCount:o}):n.formatMessage({id:"Terra.tags.label.showLess"}),p=t?n.formatMessage({id:"Terra.tags.hint.rollupTag"},{tagsNotVisibleCount:o}):n.formatMessage({id:"Terra.tags.hint.showLess"}),y="terra-rollup-tag-".concat((0,l.v4)()),g="terra-rollup-tag-".concat((0,l.v4)());return a.default.createElement("div",{className:b("tag-list-item")},a.default.createElement("button",{id:y,className:b(["rollup-tag",c.className]),onClick:function(e){i.current.setAttribute("data-terra-rollup-tag-show-focus-styles","true"),e.preventDefault(),r&&r(e)},onKeyDown:function(e){i.current.setAttribute("data-terra-rollup-tag-show-focus-styles","true"),e.keyCode!==u.KEY_RETURN&&e.keyCode!==u.KEY_SPACE||(e.preventDefault(),r&&r(e))},onMouseDown:function(){i.current.setAttribute("data-terra-rollup-tag-show-focus-styles","false")},onBlur:function(){i.current.setAttribute("data-terra-rollup-tag-show-focus-styles","true")},ref:i,type:"button","aria-describedby":g,"data-terra-rollup-tag-show-focus-styles":!0,"data-terra-rollup-tag":!0},a.default.createElement("span",{className:b("rollup-tag-label")},d)),a.default.createElement(s.default,{"aria-atomic":"true","aria-relevant":"all","aria-live":"polite",id:g,text:p,"aria-hidden":"true"}))};h.propTypes=g;t.default=(0,o.injectIntl)(h)},44729:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={getRollUpIndex:function(e){var t,r=e.current.querySelector("[data-terra-rollup-tag]"),n=e.current.querySelectorAll("[data-terra-tag]"),a=e.current.offsetWidth,o=0,u=0,l=0;r&&(l=function(e){return e.parentElement.offsetWidth+parseFloat(window.getComputedStyle(e.parentElement,null).getPropertyValue("margin-right"),10)}(r));for(var i=0;i<n.length&&!(o>=a);i+=1){var c=(t=n[i]).offsetWidth+parseFloat(window.getComputedStyle(t,null).getPropertyValue("margin-right"),10);c+o+l<a&&(u=i+1),o+=c}return u},setTagsTabIndex:function(e,t){for(var r=0;r<e.length;r+=1)e[r].setAttribute("tabindex",t)},setRollUpTagTabIndex:function(e,t){e.setAttribute("tabindex",t)}};t.default=r},36994:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"TagList",{enumerable:!0,get:function(){return n.default}}),t.default=void 0;var n=o(r(50742)),a=o(r(1626));function o(e){return e&&e.__esModule?e:{default:e}}t.default=a.default},37932:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Tag-module__clinical-lowlight-theme___5sCDf","orion-fusion-theme":"Tag-module__orion-fusion-theme___1C0Ag",tag:"Tag-module__tag___nh+rs","is-interactive":"Tag-module__is-interactive___o8dLe","is-focused":"Tag-module__is-focused___BEB78","has-underline":"Tag-module__has-underline___jR7cO",icon:"Tag-module__icon___CoP6c","rollup-tag-label":"Tag-module__rollup-tag-label___9YdgQ","rollup-tag":"Tag-module__rollup-tag___XKbC2","tag-list-item":"Tag-module__tag-list-item___ed9vQ","tags-group":"Tag-module__tags-group___DoaMJ"}}}]);