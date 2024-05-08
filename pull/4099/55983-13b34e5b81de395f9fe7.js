"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[55983],{55983:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(l,a,u):l[a]=e[a]}return l.default=e,r&&r.set(e,l),l}(r(96540)),a=(l=r(44386))&&l.__esModule?l:{default:l};function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o,a,i=[],u=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){c=!0,l=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw l}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(){var e=u((0,o.useState)(!1),2),t=e[0],r=e[1];return o.default.createElement(a.default,{id:"defaultSwitch",isChecked:t,labelText:"Label",onChange:r})}},44386:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=_(t);if(r&&r.has(e))return r.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(l,a,i):l[a]=e[a]}return l.default=e,r&&r.set(e,l),l}(r(96540)),o=y(r(5556)),a=y(r(46942)),i=y(r(67967)),u=y(r(52103)),c=r(8604),s=r(25966),f=r(79120),d=y(r(15927)),b=["isChecked","isDisabled","isBlock","onChange","labelText"];function y(e){return e&&e.__esModule?e:{default:e}}function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_=function(e){return e?r:t})(e)}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var m=i.default.bind(d.default),v=Object.freeze({ON:l.default.createElement(c.FormattedMessage,{id:"Terra.switch.switchstatuslabel.on"}),OFF:l.default.createElement(c.FormattedMessage,{id:"Terra.switch.switchstatuslabel.off"})}),w={isChecked:o.default.bool,isDisabled:o.default.bool,labelText:o.default.string.isRequired,isBlock:o.default.bool,onChange:o.default.func},O={isChecked:!1,isDisabled:!1,isBlock:!1,onChange:void 0},S=function(e){var t,r=e.isChecked,n=e.isDisabled,o=e.isBlock,i=e.onChange,c=e.labelText,d=h(e,b),y=l.default.useContext(u.default),_=(0,l.useRef)(),w=(0,l.useCallback)((function(e){_.current.focus(),i&&i(!r,e)}),[r,i]),O=r?v.ON:v.OFF,S=(0,a.default)(m("switch",{"is-enabled":!n},{"is-disabled":n},{"is-selected":r},{"is-block":o},y.className),d.className),g=m(["label-container",{"is-block":o}]);return t=n?{"aria-disabled":!0}:{tabIndex:"0",onBlur:function(){(0,f.restoreFocusStyles)(_.current)},onClick:w,onMouseDown:function(e){e.preventDefault(),(0,f.removeFocusStyles)(_.current)},onKeyDown:function(e){e.nativeEvent.keyCode!==s.KEY_RETURN&&e.nativeEvent.keyCode!==s.KEY_SPACE||(e.preventDefault(),(0,f.restoreFocusStyles)(_.current),i&&i(!r,e))}},l.default.createElement("div",p({},d,t,{"aria-label":c,"aria-checked":r,role:"switch",className:S,"data-terra-switch-show-focus-styles":!0,ref:_}),l.default.createElement("div",{"aria-hidden":!0,className:g},l.default.createElement("div",{className:m("label-text")},c),l.default.createElement("div",{className:m("status-label-text")},O)),l.default.createElement("div",{"aria-hidden":!0,className:m("tray")},l.default.createElement("div",{className:m("slider")})))};S.propTypes=w,S.defaultProps=O;t.default=S},79120:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.restoreFocusStyles=t.removeFocusStyles=void 0;t.restoreFocusStyles=function(e){return e.setAttribute("data-terra-switch-show-focus-styles","true")},t.removeFocusStyles=function(e){return e.setAttribute("data-terra-switch-show-focus-styles","false")}},15927:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Switch-module__clinical-lowlight-theme___vntCY","orion-fusion-theme":"Switch-module__orion-fusion-theme___Ojm-R",switch:"Switch-module__switch___AaoIL","is-block":"Switch-module__is-block___SEd8B","label-container":"Switch-module__label-container___Frl8n","label-text":"Switch-module__label-text___hJPkq","status-label-text":"Switch-module__status-label-text___2tBRz",tray:"Switch-module__tray___OIN3-",slider:"Switch-module__slider___-4pDy","is-selected":"Switch-module__is-selected___GYfmI","is-disabled":"Switch-module__is-disabled___vZX42","is-enabled":"Switch-module__is-enabled___e1R7E"}}}]);