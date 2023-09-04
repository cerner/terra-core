"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[77107],{89346:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(67294)),o=a(r(21969));function a(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}var u=function(e){var t=l({},e);return n.default.createElement(o.default,t,n.default.createElement("path",{d:"M23.5 1.5C22.6.7 21.9 0 21.9 0H0v21.9l1.5 1.5 23.8 23.8c.8.8 2.2.8 3.1 0l18.9-18.9c.8-.8.8-2.2 0-3.1L23.5 1.5zm-9.8 16.7c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"}))};u.displayName="IconTag",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var i=u;t.default=i},1626:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(r(67294)),a=p(r(45697)),l=p(r(94184)),u=p(r(47166)),i=p(r(50026)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=a?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(o,l,u):o[l]=e[l]}o.default=e,r&&r.set(e,o);return o}(r(51051)),s=p(r(37932)),f=["icon","text","href","onClick","onBlur","onFocus","onKeyUp"];function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function p(e){return e&&e.__esModule?e:{default:e}}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g.apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function b(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(a=o.key,l=void 0,l=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===n(l)?l:String(l)),o)}var a,l}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=v(e);if(t){var a=v(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}(this,r)}}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var w=u.default.bind(s.default),O={href:a.default.string,icon:a.default.element,onClick:a.default.func,onBlur:a.default.func,onFocus:a.default.func,onKeyUp:a.default.func,text:a.default.string.isRequired},T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,r,n,a=m(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=a.call(this,e)).state={focused:!1},t.handleKeyUp=t.handleKeyUp.bind(_(t)),t.handleOnBlur=t.handleOnBlur.bind(_(t)),t}return t=u,(r=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){(e.nativeEvent.keyCode===c.KEY_TAB||e.nativeEvent.keyCode===c.KEY_RIGHT||e.nativeEvent.keyCode===c.KEY_LEFT||e.nativeEvent.keyCode===c.KEY_RETURN)&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,r=e.text,n=e.href,a=e.onClick,u=(e.onBlur,e.onFocus),i=(e.onKeyUp,y(e,f)),c=this.context,s=(0,l.default)(w("tag",{"is-focused":this.state.focused},{"is-interactive":n||a},{"has-underline":n},c.className),i.className),d=w("icon"),p=t?o.default.createElement("span",{className:d},t):null,b=n||a?n?"a":"button":"span";return o.default.createElement(b,g({},i,{className:s,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:a,onFocus:u,href:n,"data-terra-tag":!0,role:"listitem"}),p,r)}}])&&b(t.prototype,r),n&&b(t,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o.default.Component);T.propTypes=O,T.contextType=i.default;var C=T;t.default=C},1375:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n=r(67294),o=r(51051),a=r(94184),l=r.n(a),u=r(47166),i=r.n(u),c=r(45697),s=r.n(c),f=r(32018),d=r.n(f),p=r(50026),g=r(25387);var y={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let b;const h=new Uint8Array(16);function m(){if(!b&&(b="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!b))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(h)}const _=[];for(let e=0;e<256;++e)_.push((e+256).toString(16).slice(1));function v(e,t=0){return(_[e[t+0]]+_[e[t+1]]+_[e[t+2]]+_[e[t+3]]+"-"+_[e[t+4]]+_[e[t+5]]+"-"+_[e[t+6]]+_[e[t+7]]+"-"+_[e[t+8]]+_[e[t+9]]+"-"+_[e[t+10]]+_[e[t+11]]+_[e[t+12]]+_[e[t+13]]+_[e[t+14]]+_[e[t+15]]).toLowerCase()}var w=function(e,t,r){if(y.randomUUID&&!t&&!e)return y.randomUUID();const n=(e=e||{}).random||(e.rng||m)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t}return v(n)},O=r(74754),T={getRollUpIndex:function(e){var t,r=e.current.querySelector("[data-terra-rollup-tag]"),n=e.current.querySelectorAll("[data-terra-tag]"),o=e.current.offsetWidth,a=0,l=0,u=0;r&&(u=function(e){return e.parentElement.offsetWidth+parseFloat(window.getComputedStyle(e.parentElement,null).getPropertyValue("margin-right"),10)}(r));for(var i=0;i<n.length&&!(a>=o);i+=1){var c=(t=n[i]).offsetWidth+parseFloat(window.getComputedStyle(t,null).getPropertyValue("margin-right"),10);c+a+u<o&&(l=i+1),a+=c}return l},setTagsTabIndex:function(e,t){for(var r=0;r<e.length;r+=1)e[r].setAttribute("tabindex",t)},setRollUpTagTabIndex:function(e,t){e.setAttribute("tabindex",t)}},C={"clinical-lowlight-theme":"Tag-module__clinical-lowlight-theme___8fRE3","orion-fusion-theme":"Tag-module__orion-fusion-theme___81Hox",tag:"Tag-module__tag___e4-oI","is-interactive":"Tag-module__is-interactive___07dMa","is-focused":"Tag-module__is-focused___vWh3J","has-underline":"Tag-module__has-underline___FL18r",icon:"Tag-module__icon___Gl3Aq","rollup-tag-label":"Tag-module__rollup-tag-label___isTTS","rollup-tag":"Tag-module__rollup-tag___rgSod","tag-list-item":"Tag-module__tag-list-item___dBPIf","tags-group":"Tag-module__tags-group___WFBV5"},S=i().bind(C),E={isCollapsed:s().bool,onSelectRollUp:s().func,rollupCount:s().number,intl:s().shape({formatMessage:s().func}).isRequired},j=function(e){var t=e.isCollapsed,r=e.onSelectRollUp,a=e.intl,l=e.rollupCount,u=(0,n.useRef)(),i=n.useContext(p.default),c=t&&l>0?a.formatMessage({id:"Terra.tags.label.rollupTag"},{tagsNotVisibleCount:l}):a.formatMessage({id:"Terra.tags.label.showLess"}),s=t?a.formatMessage({id:"Terra.tags.hint.rollupTag"},{tagsNotVisibleCount:l}):a.formatMessage({id:"Terra.tags.hint.showLess"}),f="terra-rollup-tag-".concat(w()),d="terra-rollup-tag-".concat(w());return n.createElement("div",{role:"listitem",className:S("tag-list-item")},n.createElement("button",{id:f,className:S(["rollup-tag",i.className]),onClick:function(e){u.current.setAttribute("data-terra-rollup-tag-show-focus-styles","true"),e.preventDefault(),e.stopPropagation(),r(e)},onKeyDown:function(e){u.current.setAttribute("data-terra-rollup-tag-show-focus-styles","true"),e.keyCode!==o.KEY_RETURN&&e.keyCode!==o.KEY_SPACE||(e.preventDefault(),e.stopPropagation(),r(e))},onMouseDown:function(){u.current.setAttribute("data-terra-rollup-tag-show-focus-styles","false")},onBlur:function(){u.current.setAttribute("data-terra-rollup-tag-show-focus-styles","true")},ref:u,tabIndex:"0",type:"button","aria-describedby":d,"data-terra-rollup-tag-show-focus-styles":!0,"data-terra-rollup-tag":!0},n.createElement("span",{className:S("rollup-tag-label")},c)),n.createElement(O.default,{id:d,text:s,"aria-hidden":"true"}))};j.propTypes=E;var R=(0,g.injectIntl)(j),k=["ariaLabel","ariaLabelledBy","ariaDescribedBy","children","intl","isCollapsible"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(this,arguments)}function A(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||U(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,l,u=[],i=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{if(!i&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw o}}return u}}(e,t)||U(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function B(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var M=i().bind(C),D={ariaLabel:s().string.isRequired,ariaLabelledBy:s().string,ariaDescribedBy:s().string,children:s().node,isCollapsible:s().bool,intl:s().shape({formatMessage:s().func}).isRequired},K=function(e){var t=e.ariaLabel,r=e.ariaLabelledBy,a=e.ariaDescribedBy,u=e.children,i=e.intl,c=e.isCollapsible,s=B(e,k),f=n.useContext(p.default),g=x((0,n.useState)("-1"),2),y=g[0],b=g[1],h=x((0,n.useState)(n.Children.count(u)),2),m=h[0],_=h[1],v=x((0,n.useState)(n.Children.count(u)),2),C=v[0],S=v[1],E=x((0,n.useState)(c),2),j=E[0],U=E[1],I=x((0,n.useState)(!1),2),D=I[0],K=I[1],N=x((0,n.useState)(!1),2),L=N[0],q=N[1],V=(0,n.useRef)(),Y=(0,n.useRef)(),F=(0,n.useRef)(0),W=(0,n.useRef)(!1),H=(0,n.useRef)(t),G=(0,n.useCallback)((function(){var e=T.getRollUpIndex(Y);j?(_(e),S(n.Children.count(u)-e)):e===n.Children.count(u)&&S(0)}),[u,j]),z=function(e){var t=V.current?Y.current.querySelector("#".concat(V.current)):null;t&&t.setAttribute("tabIndex",e)},J=function(){var e=V.current?Y.current.querySelector("#".concat(V.current)):null;e&&e.focus()},Q=(0,n.useCallback)((function(){var e=A(Y.current.querySelectorAll("[data-terra-tag]")),t=Y.current.querySelector("[data-terra-rollup-tag]");t&&T.setRollUpTagTabIndex(t,"-1"),e.length>0&&F.current<e.length?(T.setTagsTabIndex(e,"-1"),V.current=e[F.current].id,z("0")):c&&j&&t&&(V.current=t.getAttribute("id"),z("0"))}),[j,c]),X=(0,n.useCallback)((function(){var e=A(Y.current.querySelectorAll("[data-terra-tag]"));c&&!j&&e.length>0&&e.length===n.Children.count(u)&&(z("-1"),V.current=e[F.current].id,z("0"),W.current&&(J(),W.current=!1))}),[u,j,c]),$=(0,n.useCallback)((function(e){Array.isArray(e)&&(_(n.Children.count(u)),S(n.Children.count(u)),c&&G(),Q(),X())}),[u,c,Q,X,G]);(0,n.useLayoutEffect)((function(){var e=new(d())((function(e){$(e)}));return e.observe(Y.current.parentNode),function(){e.disconnect(),e=null}}),[u,$]);var Z=function(e,t,r){var n=A(Y.current.querySelectorAll("[data-terra-tag]")),o=r.target.parentElement.getAttribute("id"),a=n.findIndex((function(e){return e.id===o}));"click"===r.type&&(n.length>1&&(z("-1"),F.current=0===a?0:a-1,z("0")),K(!0)),b("0"),Y.current.focus(),onRemove&&onRemove(e,t)},ee=function(e){e.current&&e.current.children.length>0&&(removedLabel.current=e.current.children[0].innerText)},te={};te.onKeyDown=function(e){var t=A(Y.current.querySelectorAll("[data-terra-tag]")),r=Y.current.querySelector("[data-terra-rollup-tag]");switch(q(!1),e.keyCode){case o.KEY_RIGHT:e.preventDefault(),function(e,t){var r=t?t.getAttribute("id"):null;F.current+1<=e.length&&(z("-1"),t&&F.current+1===e.length?V.current=r:F.current+1<e.length&&(F.current+=1,V.current=u[F.current].props.id),z("0"),J())}(t,r);break;case o.KEY_LEFT:e.preventDefault(),function(e,t){var r=t?t.getAttribute("id"):null;(V.current===r||F.current>=1)&&(z("-1"),t&&V.current===r?(F.current=e.length-1,V.current=u[F.current].props.id):(F.current-=1,V.current=u[F.current].props.id),z("0"),J())}(t,r);break;case o.KEY_HOME:e.preventDefault(),z("-1"),F.current=0,V.current=t[F.current].id,z("0"),J();break;case o.KEY_END:e.preventDefault(),z("-1"),F.current=t.length-1,V.current=t[F.current].id,z("0"),J()}},te.onBlur=function(){return b("-1")};var re=l()(M(["tags-group",f.className]),s.className),ne="terra-tags-group-interaction-hint-".concat(w()),oe="",ae=a?"".concat(a," ").concat(ne):ne,le=i.formatMessage({id:"Terra.tags.hint.tagList"},{numberOfTags:n.Children.count(u)});c&&C>0&&j?le+=", ".concat(i.formatMessage({id:"Terra.tags.hint.rollupNotVisible"},{tagsNotVisibleCount:C})):c&&!j&&L&&(oe=i.formatMessage({id:"Terra.tags.hint.rollupVisible"})),D&&(oe=i.formatMessage({id:"Terra.tags.hint.wasRemoved"},{tagLabelName:removedLabel.current}));var ue;return n.createElement("div",P({},s,te,{"aria-live":"assertive","aria-label":r?void 0:"".concat(oe," ").concat(H.current),"aria-labelledby":r,"aria-describedby":ae,className:re,ref:Y,role:"list",tabIndex:y}),n.createElement(O.default,{"aria-live":"polite",id:ne,text:le,"aria-hidden":"true"}),u?(ue=u,n.Children.map(ue,(function(e){if(n.isValidElement(e))return n.cloneElement(e,{onRemove:Z,onSelect:ee})})).splice(0,m)):[],c&&C>0&&n.createElement(R,{isCollapsed:j,onSelectRollUp:function(e){var t=A(Y.current.querySelectorAll("[data-terra-tag]"));c&&j?"keydown"===e.type?(W.current=!0,F.current=t.length):(z("-1"),F.current=t.length):q(!1),U(!j)},rollupCount:C}))};K.defaultProps={isCollapsible:!1},K.propTypes=D;var N=(0,g.injectIntl)(K)},37932:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Tag-module__clinical-lowlight-theme___5sCDf","orion-fusion-theme":"Tag-module__orion-fusion-theme___1C0Ag",tag:"Tag-module__tag___nh+rs","is-interactive":"Tag-module__is-interactive___o8dLe","is-focused":"Tag-module__is-focused___BEB78","has-underline":"Tag-module__has-underline___jR7cO",icon:"Tag-module__icon___CoP6c","rollup-tag-label":"Tag-module__rollup-tag-label___9YdgQ","rollup-tag":"Tag-module__rollup-tag___XKbC2","tag-list-item":"Tag-module__tag-list-item___ed9vQ","tags-group":"Tag-module__tags-group___DoaMJ"}}}]);