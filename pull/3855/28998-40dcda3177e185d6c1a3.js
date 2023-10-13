"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[28998],{28998:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(67294)),i=f(n(45697)),a=n(25387),l=f(n(52666)),s=f(n(97574)),u=f(n(4626)),c=f(n(12099)),d=["allowClear","children","defaultValue","onChange","placeholder","required","value","intl"];function f(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,a=void 0,a=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===o(a)?a:String(a)),r)}var i,a}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var i=O(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var g={allowClear:i.default.bool,children:i.default.node,defaultValue:i.default.oneOfType([i.default.string,i.default.number,i.default.array]),disabled:i.default.bool,dropdownAttrs:i.default.object,intl:i.default.shape({formatMessage:i.default.func}).isRequired,isIncomplete:i.default.bool,isInvalid:i.default.bool,maxHeight:i.default.number,noResultContent:i.default.node,onBlur:i.default.func,onChange:i.default.func,onClick:i.default.func,onDeselect:i.default.func,onFocus:i.default.func,onSelect:i.default.func,placeholder:i.default.string,required:i.default.bool,value:i.default.oneOfType([i.default.string,i.default.number,i.default.array])},w={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSelect:void 0,placeholder:void 0,required:!1,value:void 0},S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,e);var t,n,o,i=b(a);function a(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),t=i.call(this,e);var n=e.defaultValue,o=e.value;return t.state={value:c.default.defaultValue({defaultValue:n,value:o})},t.display=t.display.bind(m(t)),t.handleChange=t.handleChange.bind(m(t)),t.handleDeselect=t.handleDeselect.bind(m(t)),t.handleSelect=t.handleSelect.bind(m(t)),t}return t=a,(n=[{key:"handleChange",value:function(e){void 0===this.props.value&&this.setState({value:e}),this.props.onChange&&this.props.onChange(e)}},{key:"handleDeselect",value:function(e){this.handleChange(c.default.deselect(this.props,this.state,e)),this.props.onDeselect&&this.props.onDeselect(e)}},{key:"handleSelect",value:function(e,t){this.handleChange(c.default.select(this.props,this.state,e)),this.props.onSelect&&this.props.onSelect(e,t)}},{key:"display",value:function(){var e=c.default.value(this.props,this.state);return c.default.valueDisplay(this.props,e)}},{key:"render",value:function(){var e,t=this.props,n=t.allowClear,o=t.children,i=(t.defaultValue,t.onChange,t.placeholder),a=t.required,s=(t.value,t.intl),u=h(t,d),f=s.formatMessage({id:"Terra.form.select.defaultDisplay"}),v=void 0===i?f:i;return n&&(e=0===v.length?f:v),r.default.createElement(l.default,p({},u,{"data-terra-select":!0,value:c.default.value(this.props,this.state),display:this.display(),onDeselect:this.handleDeselect,onSelect:this.handleSelect,placeholder:v,required:a,totalOptions:c.default.getTotalNumberOfOptions(o),clearOptionDisplay:e}),o)}}])&&v(t.prototype,n),o&&v(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.default.Component);S.Option=u.default,S.OptGroup=s.default,S.propTypes=g,S.defaultProps=w,S.isSelect=!0;t.default=(0,a.injectIntl)(S)},52666:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=O(n(67294)),i=O(n(45697)),a=O(n(94184)),l=O(n(47166)),s=O(n(50026)),u=n(25387),c=O(n(14461)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(n(51051)),f=O(n(74861)),p=O(n(66762)),h=O(n(97813)),v=O(n(14267)),y=O(n(3913));n(98394),n(29540),n(44856);var b=["ariaLabel","clearOptionDisplay","children","disabled","display","dropdownAttrs","intl","isIncomplete","isInvalid","maxHeight","noResultContent","onDeselect","onSelect","placeholder","required","totalOptions","value"];function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function O(e){return e&&e.__esModule?e:{default:e}}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},g.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,a=void 0,a=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===o(a)?a:String(a)),r)}var i,a}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var i=P(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}(this,n)}}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var E=l.default.bind(y.default),k={ariaLabel:i.default.string,children:i.default.node,clearOptionDisplay:i.default.string,disabled:i.default.bool,display:i.default.node,dropdownAttrs:i.default.object,intl:i.default.shape({formatMessage:i.default.func}).isRequired,isIncomplete:i.default.bool,isInvalid:i.default.bool,maxHeight:i.default.number,noResultContent:i.default.node,onDeselect:i.default.func,onBlur:i.default.func,onFocus:i.default.func,onSelect:i.default.func,placeholder:i.default.string,required:i.default.bool,totalOptions:i.default.number,value:i.default.oneOfType([i.default.string,i.default.number,i.default.array])},C={clearOptionDisplay:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,noResultContent:void 0,onDeselect:void 0,onSelect:void 0,placeholder:void 0,required:!1,totalOptions:void 0,value:void 0},M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(s,e);var t,o,i,l=D(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=l.call(this,e)).state={isOpen:!1,isFocused:!1,isInputFocused:!1,isPositioned:!1,hasSearchChanged:!1},t.ariaLabel=t.ariaLabel.bind(j(t)),t.getDisplay=t.getDisplay.bind(j(t)),t.renderToggleButton=t.renderToggleButton.bind(j(t)),t.renderDescriptionText=t.renderDescriptionText.bind(j(t)),t.openDropdown=t.openDropdown.bind(j(t)),t.closeDropdown=t.closeDropdown.bind(j(t)),t.toggleDropdown=t.toggleDropdown.bind(j(t)),t.positionDropdown=t.positionDropdown.bind(j(t)),t.handleBlur=t.handleBlur.bind(j(t)),t.handleFocus=t.handleFocus.bind(j(t)),t.handleSelect=t.handleSelect.bind(j(t)),t.handleKeyDown=t.handleKeyDown.bind(j(t)),t.handleMouseDown=t.handleMouseDown.bind(j(t)),t.handleToggleMouseDown=t.handleToggleMouseDown.bind(j(t)),t.handleToggleButtonMouseDown=t.handleToggleButtonMouseDown.bind(j(t)),t.visuallyHiddenComponent=r.default.createRef(),t.setSelectMenuRef=t.setSelectMenuRef.bind(j(t)),t}return t=s,(o=[{key:"componentDidMount",value:function(){Element.prototype.hasOwnProperty("inert")||n(23458)}},{key:"componentDidUpdate",value:function(e,t){h.default.shouldPositionDropdown(t,this.state,this.dropdown)&&(clearTimeout(this.debounceTimer),this.dropdown.setAttribute("inert",""),this.debounceTimer=setTimeout(this.positionDropdown,t.isOpen?100:0))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.debounceTimer)}},{key:"handleBlur",value:function(e){var t=this;if(!this.dropdown||this.dropdown!==document.activeElement||!this.dropdown.contains(document.activeElement))if(e.relatedTarget!==this.select){var n=function(){t.setState({isFocused:!1}),t.closeDropdown(),t.props.onBlur&&t.props.onBlur(e)};null===e.relatedTarget?setTimeout((function(){t.selectMenu!==document.activeElement&&n()}),10):this.selectMenu!==e.relatedTarget&&n()}else this.closeDropdown()}},{key:"handleFocus",value:function(e){this.props.disabled||(this.props.onFocus&&!this.state.isFocused&&this.props.onFocus(e),this.setState({isFocused:!0}))}},{key:"handleKeyDown",value:function(e){var t=e.keyCode;t===d.KEY_SPACE||t===d.KEY_RETURN||t===d.KEY_UP||t===d.KEY_DOWN?(e.preventDefault(),this.openDropdown()):t===d.KEY_ESCAPE?(e.preventDefault(),this.select.focus(),this.closeDropdown()):this.state.isOpen&&t===d.KEY_TAB&&(this.select.focus(),this.closeDropdown())}},{key:"handleMouseDown",value:function(){this.openDropdown()}},{key:"handleToggleMouseDown",value:function(){this.state.isOpen&&this.closeDropdown()}},{key:"handleToggleButtonMouseDown",value:function(){this.state.isOpen&&this.closeDropdown()}},{key:"handleSelect",value:function(e,t){this.setState({isOpen:!1,isAbove:!1}),this.props.onSelect&&this.props.onSelect(e,t)}},{key:"setSelectMenuRef",value:function(e){this.selectMenu=e}},{key:"getDisplay",value:function(e,t){var n=this.props,o=n.display,i=n.placeholder;return o?r.default.createElement("span",{id:e,"aria-hidden":"true"},o):r.default.createElement("div",{id:t,className:E("placeholder"),"aria-hidden":"true"},i||" ")}},{key:"closeDropdown",value:function(){this.setState({isAbove:!1,isFocused:document.activeElement===this.select,isOpen:!1,isPositioned:!1})}},{key:"openDropdown",value:function(){this.state.isOpen||this.props.disabled||this.setState({isOpen:!0,isPositioned:!1})}},{key:"positionDropdown",value:function(){var e=this;if(this.state.isOpen){var t=this.props,n=t.dropdownAttrs,o=t.maxHeight;this.setState(h.default.dropdownPosition(n,this.select,this.dropdown,o),(function(){e.state.isPositioned&&(e.dropdown.removeAttribute("inert"),e.dropdown.removeAttribute("aria-hidden"),e.selectMenu.setAttribute("tabIndex","0")),e.selectMenu&&e.selectMenu.focus()}))}}},{key:"toggleDropdown",value:function(){this.state.isOpen?this.closeDropdown():this.openDropdown()}},{key:"ariaLabel",value:function(){var e=this.props,t=e.ariaLabel,n=e.disabled,o=e.intl.formatMessage({id:"Terra.form.select.dimmed"});return"ontouchstart"in window&&n?void 0===t?"":"".concat(t," ").concat(o):void 0===t?"":t}},{key:"mainLabel",value:function(){var e,t=this.props.intl.formatMessage({id:"Terra.form.select.selected"});return this.props.display?e="".concat(this.props.display," ").concat(t,", ").concat(this.ariaLabel()):this.props.placeholder&&(e="".concat(this.props.placeholder,", ").concat(this.ariaLabel())),e||this.ariaLabel()}},{key:"renderDescriptionText",value:function(){var e=this.props.intl,t=this.state.isOpen?e.formatMessage({id:"Terra.form.select.expanded"}):e.formatMessage({id:"Terra.form.select.collapsed"}),n=e.formatMessage({id:"Terra.form.select.listOfTotalOptions"}),o=e.formatMessage({id:"Terra.form.select.defaultUsageGuidance"});return"ontouchstart"in window?n:"".concat(t," ").concat(n," ").concat(o)}},{key:"renderToggleButton",value:function(){var e="ontouchstart"in window?void 0:this.toggleDropdown;return r.default.createElement("div",{"data-terra-form-select-toggle":!0,className:E("toggle"),onMouseDown:e},r.default.createElement("span",{className:E("arrow-icon")}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.ariaLabel,t.clearOptionDisplay),o=t.children,i=t.disabled,l=(t.display,t.dropdownAttrs),s=t.intl,u=t.isIncomplete,d=t.isInvalid,y=(t.maxHeight,t.noResultContent),m=t.onDeselect,O=(t.onSelect,t.placeholder,t.required),S=(t.totalOptions,t.value),T=w(t,b),D=this.context,j=(0,a.default)(E("select","default",{"is-above":this.state.isAbove},{"is-disabled":i},{"is-focused":this.state.isFocused},{"is-invalid":d},{"is-incomplete":u&&O&&!d},{"is-open":this.state.isOpen},D.className),T.className),P="terra-select-screen-reader-display-".concat((0,c.default)()),k="terra-select-screen-reader-placeholder-".concat((0,c.default)()),C="terra-select-screen-reader-description-".concat((0,c.default)()),M=T["aria-describedby"],R=M?"".concat(C," ").concat(M):C,x="terra-select-menu-".concat((0,c.default)()),_={id:x,value:S,onDeselect:m,noResultContent:y,visuallyHiddenComponent:this.visuallyHiddenComponent,onSelect:this.handleSelect,onRequestClose:this.closeDropdown,input:this.input,select:this.select,clearOptionDisplay:n,refCallback:this.setSelectMenuRef};return r.default.createElement("div",g({},T,{role:"combobox","data-terra-select-combobox":!0,"aria-controls":!i&&this.state.isOpen?x:void 0,"aria-disabled":!!i,"aria-expanded":!i&&this.state.isOpen,"aria-label":this.mainLabel(),"aria-haspopup":i?void 0:"true","aria-describedby":R,"aria-owns":this.state.isOpen?x:void 0,"aria-required":O,className:j,onBlur:this.handleBlur,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,onMouseDown:this.handleMouseDown,tabIndex:i?"-1":"0",ref:function(t){e.select=t},"aria-invalid":d}),r.default.createElement("label",{hidden:!0},r.default.createElement("input",{type:"text"})),r.default.createElement("div",{className:E("visually-hidden-component"),hidden:!0},r.default.createElement("span",{id:C},this.renderDescriptionText())),r.default.createElement("div",{className:E("display"),"aria-label":v.default.isSafari()?s.formatMessage({id:"Terra.form.select.optGroup"}):""},this.getDisplay(P,k)),this.renderToggleButton(),r.default.createElement("span",{"aria-live":v.default.isSafari()?"polite":"off",className:E("visually-hidden-component"),ref:this.visuallyHiddenComponent}),this.state.isOpen&&r.default.createElement(f.default,g({},l,{id:this.state.isOpen?"terra-select-dropdown":void 0,target:this.select,isAbove:this.state.isAbove,isEnabled:this.state.isPositioned,onResize:this.positionDropdown,refCallback:function(t){e.dropdown=t},style:h.default.dropdownStyle(l,this.state)}),r.default.createElement(p.default,_,o)))}}])&&S(t.prototype,o),i&&S(t,i),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.default.Component);M.propTypes=k,M.defaultProps=C,M.contextType=s.default;t.default=(0,u.injectIntl)(M)},66762:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=b(n(67294)),i=b(n(45697)),a=b(n(47166)),l=b(n(50026)),s=n(10752),u=n(25387),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(n(51051)),d=b(n(88623)),f=b(n(40500)),p=b(n(44334)),h=b(n(14267)),v=b(n(28395));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}function b(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},m.apply(this,arguments)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function g(e,t,n){return(t=S(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,S(o.key),o)}}function S(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var i=P(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}(this,n)}}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var E=a.default.bind(v.default),k={id:i.default.string,children:i.default.node,select:i.default.instanceOf(Element),intl:i.default.shape({formatMessage:i.default.func}).isRequired,clearOptionDisplay:i.default.string,noResultContent:i.default.node,onDeselect:i.default.func,onSelect:i.default.func.isRequired,value:i.default.oneOfType([i.default.string,i.default.number,i.default.array]),visuallyHiddenComponent:i.default.shape({current:i.default.instanceOf(Element)}),refCallback:i.default.func},C={id:void 0,children:void 0,clearOptionDisplay:void 0,noResultContent:void 0,onDeselect:void 0,select:void 0,visuallyHiddenComponent:void 0,value:void 0,refCallback:void 0},M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(a,e);var t,n,o,i=D(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={expandedStateText:t.props.intl.formatMessage({id:"Terra.form.select.expanded"})},t.searchString="",t.clearSearch=t.clearSearch.bind(j(t)),t.clearScrollTimeout=t.clearScrollTimeout.bind(j(t)),t.handleKeyDown=t.handleKeyDown.bind(j(t)),t.handleMouseEnter=t.handleMouseEnter.bind(j(t)),t.handleOptionClick=t.handleOptionClick.bind(j(t)),t.scrollIntoView=t.scrollIntoView.bind(j(t)),t}return t=a,n=[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.scrollIntoView(),"ontouchstart"in window||this.updateCurrentActiveScreenReader()}},{key:"componentDidUpdate",value:function(){this.updateNoResultsScreenReader(),this.updateCurrentActiveScreenReader()}},{key:"componentWillUnmount",value:function(){var e=this;this.clearSearch(),this.clearScrollTimeout(),this.state.closedViaKeyEvent&&(h.default.isSafari()?setTimeout((function(){e.props.select.focus()}),300):this.props.select.focus()),document.removeEventListener("keydown",this.handleKeyDown)}},{key:"handleKeyDown",value:function(e){var t=this,n=e.keyCode,o=e.key,r=this.state,i=r.active,a=r.children,l=this.props,s=l.intl,u=l.onSelect,d=l.visuallyHiddenComponent,f=s.formatMessage({id:"Terra.form.select.selected"});if(n===c.KEY_UP)this.clearScrollTimeout(),this.scrollTimeout=setTimeout(this.clearScrollTimeout,500),this.setState({active:p.default.findPrevious(a,i)},this.scrollIntoView),this.updateCurrentActiveScreenReader(),this.setState({expandedStateText:""});else if(n===c.KEY_DOWN)this.clearScrollTimeout(),this.scrollTimeout=setTimeout(this.clearScrollTimeout,500),this.setState({active:p.default.findNext(a,i)},this.scrollIntoView),this.updateCurrentActiveScreenReader(),this.setState({expandedStateText:""});else if(n!==c.KEY_RETURN&&n!==c.KEY_SPACE||null===i)n===c.KEY_HOME?(e.preventDefault(),this.setState({active:p.default.findFirst(a)})):n===c.KEY_END?(e.preventDefault(),this.setState({active:p.default.findLast(a)})):n>=48&&n<=90&&(this.searchString=this.searchString.concat(o),clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(this.clearSearch,500),this.setState((function(e){return{active:p.default.findWithStartString(e.children,t.searchString)||i}})));else{e.preventDefault(),this.setState({closedViaKeyEvent:!0});var v=p.default.findByValue(a,i);if(this.props.clearOptionDisplay){if(d&&d.current){var y=this.menu.querySelector("[data-select-active]");y&&y.hasAttribute("data-terra-select-clear-option")&&(d.current.innerText=s.formatMessage({id:"Terra.form.select.selectCleared"}))}h.default.isSafari()||(d.current.innerText="".concat(v.props.display," ").concat(f))}u(v.props.value,v)}}},{key:"handleOptionClick",value:function(e,t){if(!t.props.disabled&&t===this.downOption){var n=this.props,o=n.select,r=n.onSelect;r&&r(t.props.value,t),o&&(h.default.isSafari()?setTimeout((function(){o.focus()}),300):o.focus())}}},{key:"handleMouseEnter",value:function(e,t){this.scrollTimeout||(t.props.disabled||this.setState({active:t.props.value}),t.props.onMouseEnter&&t.props.onMouseEnter(e))}},{key:"isActiveSelected",value:function(){return this.state.active===this.props.value}},{key:"updateNoResultsScreenReader",value:function(){var e=this;this.liveRegionTimeOut&&clearTimeout(this.liveRegionTimeOut),this.liveRegionTimeOut=setTimeout((function(){var t=e.state.hasNoResults,n=e.props,o=n.intl,r=n.visuallyHiddenComponent;r&&r.current&&(r.current.innerText=t?o.formatMessage({id:"Terra.form.select.noResults"},{text:""}):"")}),1e3)}},{key:"updateCurrentActiveScreenReader",value:function(){var e=this.props,t=e.intl,n=e.clearOptionDisplay,o=e.visuallyHiddenComponent,r=t.formatMessage({id:"Terra.form.select.clearSelect"});if(this.menu&&null!==this.state.active&&this.menu.setAttribute("aria-activedescendant","terra-select-option-".concat(this.state.active)),o&&o.current){if(n){var i=this.menu.querySelector("[data-select-active]");i&&i.hasAttribute("data-terra-select-clear-option")&&(o.current.innerText=r)}var a,l=p.default.getOptGroupElement(this.props.children,this.state.active),s=p.default.findByValue(this.props.children,this.state.active);if(l?a=t.formatMessage({id:"Terra.form.select.optGroup"},{text:"".concat(l.props.label,", ").concat(s.props.display)}):s&&(a=s.props.display),s){var u=p.default.flatten(this.state.children,!0),c=u.length,d=p.default.getIndex(u,this.state.active);""===s.props.display&&""===s.props.value?o.current.innerText=r:this.isActiveSelected()?o.current.innerText=t.formatMessage({id:"Terra.form.select.selectedText"},{text:a,index:d,totalOptions:c}):o.current.innerText=t.formatMessage({id:"Terra.form.select.activeOption"},{text:a,index:d,totalOptions:c})}}}},{key:"clearSearch",value:function(){this.searchString="",clearTimeout(this.searchTimeout),this.searchTimeout=null}},{key:"clearScrollTimeout",value:function(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null}},{key:"clone",value:function(e){var t=this;return r.default.Children.map(e,(function(n){return n.type.isOption?r.default.cloneElement(n,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:"terra-select-option-".concat(n.props.value),isActive:n.props.value===t.state.active,isCheckable:!1,isSelected:p.default.isSelected(t.props.value,n.props.value),variant:"default",totalOptions:e.length,index:e.indexOf(n)+1,expandedStateText:t.state.expandedStateText,ofText:t.props.intl.formatMessage({id:"Terra.form.select.of"}),onMouseDown:function(){t.downOption=n},onMouseUp:function(e){return t.handleOptionClick(e,n)},onMouseEnter:function(e){return t.handleMouseEnter(e,n)}},n.props.value===t.state.active&&{"data-select-active":!0})):n.type.isOptGroup?r.default.cloneElement(n,{},t.clone(n.props.children)):n}))}},{key:"scrollIntoView",value:function(){var e=this.menu.querySelector("[data-select-active]");if(this.state.active&&null!==e){var t=this.menu.parentNode.getBoundingClientRect(),n=e.getBoundingClientRect();n.top<t.top?this.menu.parentNode.scrollTop=e.offsetTop:n.bottom>t.bottom&&(this.menu.parentNode.scrollTop=e.offsetTop-t.height+n.height)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,o=t.intl,i=t.refCallback,a=this.context;return r.default.createElement("ul",m({id:n,role:"listbox",className:E("menu",a.className),"aria-label":o.formatMessage({id:"Terra.form.select.menu"}),ref:function(t){i&&i(t),e.menu=t}},null!==this.state.active?{"aria-activedescendant":"terra-select-option-".concat(this.state.active)}:{},{tabIndex:"0"}),this.clone(this.state.children))}}],o=[{key:"getActiveOptionFromProps",value:function(e,t,n){var o=n.active,r=e.value,i=p.default.flatten(t,!0);if(0===i.length)return null;if(null!==o&&p.default.findByValue(i,o))return o;var a=i.find((function(e){return p.default.isEqual(r,e.props.value)}));return void 0===a?i[0].props.value:a.props.value}},{key:"getDerivedStateFromProps",value:function(e,t){var n=e.clearOptionDisplay,o=e.noResultContent,i=!1,l=p.default.filter(e.children,"");return l=p.default.updateSelectionState(l,e),p.default.shouldShowNoResults(e,l)&&(l.push(r.default.createElement(f.default,{noResultContent:o,value:""})),i=!0),p.default.shouldShowClearOption({clearOptionDisplay:n,hasAddOption:!1,hasNoResults:i})&&l.unshift(r.default.createElement(d.default,{display:n,value:""})),{children:l,hasNoResults:i,active:a.getActiveOptionFromProps(e,l,t)}}}],n&&w(t.prototype,n),o&&w(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.default.Component);M.propTypes=k,M.defaultProps=C,M.contextType=l.default,(0,s.polyfill)(M);t.default=(0,u.injectIntl)(M)}}]);