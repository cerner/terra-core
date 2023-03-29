"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[88220],{88220:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(67294)),i=p(n(45697)),a=n(25387),l=p(n(48810)),u=p(n(4626)),s=p(n(97574)),c=p(n(17572)),d=p(n(12099)),f=["children","defaultValue","onChange","placeholder","required","value","intl","inputId"];function p(e){return e&&e.__esModule?e:{default:e}}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function y(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,a=void 0,a=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===o(a)?a:String(a)),r)}var i,a}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var i=S(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(this,n)}}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var T={children:i.default.node,defaultValue:i.default.oneOfType([i.default.string,i.default.number,i.default.array]),disabled:i.default.bool,dropdownAttrs:i.default.object,intl:i.default.shape({formatMessage:i.default.func}).isRequired,isIncomplete:i.default.bool,isInvalid:i.default.bool,isTouchAccessible:i.default.bool,maxHeight:i.default.number,maxSelectionCount:i.default.number,noResultContent:i.default.node,onBlur:i.default.func,onChange:i.default.func,onClick:i.default.func,onDeselect:i.default.func,onFocus:i.default.func,onSearch:i.default.func,onSelect:i.default.func,optionFilter:i.default.func,placeholder:i.default.string,required:i.default.bool,value:i.default.oneOfType([i.default.string,i.default.number,i.default.array]),inputId:i.default.string},C={children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,inputId:void 0},D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,o,i=O(a);function a(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),t=i.call(this,e);var n=e.value,o=e.defaultValue;return t.state={value:d.default.defaultValue({defaultValue:o,value:n,multiple:!0})},t.display=t.display.bind(w(t)),t.handleChange=t.handleChange.bind(w(t)),t.handleDeselect=t.handleDeselect.bind(w(t)),t.handleSelect=t.handleSelect.bind(w(t)),t}return t=a,(n=[{key:"handleChange",value:function(e){void 0===this.props.value&&this.setState({value:e}),this.props.onChange&&this.props.onChange(e)}},{key:"handleDeselect",value:function(e){this.handleChange(d.default.deselect(this.props,this.state,e)),this.props.onDeselect&&this.props.onDeselect(e)}},{key:"handleSelect",value:function(e,t){var n=[].concat(y(d.default.value(this.props,this.state)),[e]);this.handleChange(n),this.props.onSelect&&this.props.onSelect(e,t)}},{key:"display",value:function(){var e=this;return d.default.value(this.props,this.state).map((function(t){return r.default.createElement(c.default,{value:t,key:t,onDeselect:e.handleDeselect},d.default.valueDisplay(e.props,t))}))}},{key:"render",value:function(){var e=this.props,t=e.children,n=(e.defaultValue,e.onChange,e.placeholder),o=e.required,i=(e.value,e.intl),a=e.inputId,u=v(e,f),s=i.formatMessage({id:"Terra.form.select.defaultDisplay"}),c=void 0===n?s:n;return r.default.createElement(l.default,h({},u,{"data-terra-select":!0,value:d.default.value(this.props,this.state),display:this.display(),onDeselect:this.handleDeselect,onSelect:this.handleSelect,placeholder:c,required:o,totalOptions:d.default.getTotalNumberOfOptions(t),inputId:a}),t)}}])&&b(t.prototype,n),o&&b(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.default.Component);D.Option=u.default,D.OptGroup=s.default,D.propTypes=T,D.defaultProps=C,D.isSelect=!0;var k=(0,a.injectIntl)(D);t.default=k},48810:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=g(n(67294)),i=g(n(45697)),a=g(n(94184)),l=g(n(47166)),u=g(n(50026)),s=n(25387),c=g(n(14461)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(51051)),f=g(n(74861)),p=g(n(48660)),h=g(n(97813)),v=g(n(3913)),y=g(n(44334));n(98394),n(29540),n(44856);var m=["ariaLabel","children","disabled","display","dropdownAttrs","inputId","intl","isIncomplete","isTouchAccessible","isInvalid","maxHeight","maxSelectionCount","noResultContent","onDeselect","onSearch","onSelect","optionFilter","placeholder","required","totalOptions","value"];function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function g(e){return e&&e.__esModule?e:{default:e}}function O(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},w.apply(this,arguments)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,a=void 0,a=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===o(a)?a:String(a)),r)}var i,a}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var i=k(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return D(e)}(this,n)}}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var E=l.default.bind(v.default),j={ariaLabel:i.default.string,children:i.default.node,disabled:i.default.bool,display:i.default.node,dropdownAttrs:i.default.object,inputId:i.default.string,intl:i.default.shape({formatMessage:i.default.func}).isRequired,isIncomplete:i.default.bool,isInvalid:i.default.bool,isTouchAccessible:i.default.bool,maxHeight:i.default.number,maxSelectionCount:i.default.number,noResultContent:i.default.node,onDeselect:i.default.func,onBlur:i.default.func,onClick:i.default.func,onFocus:i.default.func,onSearch:i.default.func,onSelect:i.default.func,optionFilter:i.default.func,placeholder:i.default.string,required:i.default.bool,totalOptions:i.default.number,value:i.default.oneOfType([i.default.string,i.default.number,i.default.array])},P={disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,totalOptions:void 0,value:void 0,inputId:void 0},x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(u,e);var t,o,i,l=C(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=l.call(this,e)).state={focusedByTouch:!1,isOpen:!1,isFocused:!1,isInputFocused:!1,isPositioned:!1,hasSearchChanged:!1,searchValue:""},t.ariaLabel=t.ariaLabel.bind(D(t)),t.setInput=t.setInput.bind(D(t)),t.getDisplay=t.getDisplay.bind(D(t)),t.renderToggleButton=t.renderToggleButton.bind(D(t)),t.renderDescriptionText=t.renderDescriptionText.bind(D(t)),t.openDropdown=t.openDropdown.bind(D(t)),t.closeDropdown=t.closeDropdown.bind(D(t)),t.toggleDropdown=t.toggleDropdown.bind(D(t)),t.positionDropdown=t.positionDropdown.bind(D(t)),t.handleBlur=t.handleBlur.bind(D(t)),t.handleClick=t.handleClick.bind(D(t)),t.handleFocus=t.handleFocus.bind(D(t)),t.handleSelect=t.handleSelect.bind(D(t)),t.handleSearch=t.handleSearch.bind(D(t)),t.handleKeyDown=t.handleKeyDown.bind(D(t)),t.handleInputMouseDown=t.handleInputMouseDown.bind(D(t)),t.handleInputFocus=t.handleInputFocus.bind(D(t)),t.handleInputBlur=t.handleInputBlur.bind(D(t)),t.handleToggleClick=t.handleToggleClick.bind(D(t)),t.handleToggleButtonClick=t.handleToggleButtonClick.bind(D(t)),t.handleTouchStart=t.handleTouchStart.bind(D(t)),t.role=t.role.bind(D(t)),t.menuId="terra-select-menu-".concat((0,c.default)()),t.visuallyHiddenComponent=r.default.createRef(),t.setSelectMenuRef=t.setSelectMenuRef.bind(D(t)),t.shouldFocusDropdown=!1,t}return t=u,i=[{key:"handleMouseDown",value:function(e){e.preventDefault()}}],(o=[{key:"componentDidMount",value:function(){Element.prototype.hasOwnProperty("inert")||n(59588)}},{key:"componentDidUpdate",value:function(e,t){h.default.shouldPositionDropdown(t,this.state,this.dropdown)&&(clearTimeout(this.debounceTimer),this.dropdown.setAttribute("inert",""),this.debounceTimer=setTimeout(this.positionDropdown,t.isOpen?100:0))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.debounceTimer)}},{key:"handleBlur",value:function(e){var t=e.relatedTarget||document.activeElement;this.dropdown&&this.dropdown===document.activeElement&&this.dropdown.contains(document.activeElement)||t!==this.input&&t!==this.selectMenu&&(this.setState({isFocused:!1,focusedByTouch:!1}),this.closeDropdown(),this.props.onBlur&&this.props.onBlur(e))}},{key:"handleClick",value:function(e){this.openDropdown(e),this.props.onClick&&this.props.onClick(e)}},{key:"handleFocus",value:function(e){this.props.disabled||(this.props.onFocus&&!this.state.isFocused&&this.props.onFocus(e),this.setState({isFocused:!0}))}},{key:"handleKeyDown",value:function(e){var t=this.props,n=t.children,o=t.intl,r=t.onDeselect,i=t.value,a=e.keyCode,l=e.target;if(a===d.KEY_SPACE&&l!==this.input)e.preventDefault(),this.openDropdown(e);else if(a===d.KEY_UP||a===d.KEY_DOWN)e.preventDefault(),this.openDropdown(e);else if(a===d.KEY_BACK_SPACE&&!this.state.searchValue&&i.length>0){var u=i[i.length-1],s=y.default.findByValue(n,u),c=s?s.props.display:u;this.visuallyHiddenComponent&&this.visuallyHiddenComponent.current&&(this.visuallyHiddenComponent.current.innerText=o.formatMessage({id:"Terra.form.select.unselectedText"},{text:c})),r&&r(u)}else this.state.isOpen&&a===d.KEY_ESCAPE&&(e.stopPropagation(),this.closeDropdown())}},{key:"handleInputMouseDown",value:function(e){e.stopPropagation(),this.openDropdown(e)}},{key:"handleInputFocus",value:function(){this.setState({isInputFocused:!0})}},{key:"handleInputBlur",value:function(){this.setState({isInputFocused:!1})}},{key:"handleToggleClick",value:function(){this.state.isOpen&&this.closeDropdown()}},{key:"handleToggleButtonClick",value:function(){this.state.isOpen&&(this.closeDropdown(),this.input&&this.input.focus())}},{key:"handleTouchStart",value:function(){this.setState({focusedByTouch:!0})}},{key:"handleSearch",value:function(e){var t=e.target.value;this.setState({isOpen:!0,hasSearchChanged:!0,searchValue:t}),this.props.onSearch&&this.props.onSearch(t)}},{key:"handleSelect",value:function(e,t){this.setState({searchValue:"",hasSearchChanged:!1,isOpen:!0}),this.props.onSelect&&this.props.onSelect(e,t)}},{key:"setInput",value:function(e){this.input=e}},{key:"setSelectMenuRef",value:function(e){this.selectMenu=e}},{key:"getDisplay",value:function(e,t,n){var o=this.state,i=o.searchValue,a=o.isFocused,l=this.props,u=l.disabled,c=l.display,d=l.placeholder,f=l.required,p=l.value,h=l.inputId,v=!a&&p&&p.length>0,y={disabled:u,placeholder:d,ref:this.setInput,onChange:this.handleSearch,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,onMouseDown:this.handleInputMouseDown,"aria-label":this.ariaLabel(),"aria-describedby":"".concat(e," ").concat(t),"aria-disabled":u,"aria-owns":this.state.isOpen?n:void 0,type:"text",className:E("search-input",{"is-hidden":v}),required:!(!f||c.length)||void 0,id:h,"aria-required":f&&!c.length};return r.default.createElement("ul",{"data-terra-form-select-input":!0,className:E("content")},c&&c.length>0?r.default.createElement("li",null,r.default.createElement("ul",{id:e,className:E("display-content")},c,r.default.createElement("li",{className:E("visually-hidden-component")},r.default.createElement(s.FormattedMessage,{id:"Terra.form.select.selected"})))):null,r.default.createElement("li",{className:E("search-wrapper")},r.default.createElement("input",w({},y,{value:i}))))}},{key:"toggleDropdown",value:function(e){this.state.isOpen?this.closeDropdown():this.openDropdown(e)}},{key:"closeDropdown",value:function(){this.setState({isAbove:!1,isFocused:document.activeElement===this.input||document.activeElement===this.select,isOpen:!1,isPositioned:!1,hasSearchChanged:!1,searchValue:""})}},{key:"openDropdown",value:function(e){if(this.shouldFocusDropdown=!1,!this.state.isOpen&&!this.props.disabled){if(e&&e.target&&(e.target.hasAttribute("data-terra-form-select-toggle-button")||e.target.hasAttribute("data-terra-form-select-toggle-button-icon")))return this.setState({isOpen:!0,isPositioned:!1}),void(this.shouldFocusDropdown=!0);(e.target.hasAttribute("data-terra-form-select-toggle")||e.target.className.includes("arrow-icon"))&&this.input.focus(),this.input?this.input.focus():h.default.shiftFocusToMenu(this),this.setState({isOpen:!0,isPositioned:!1})}}},{key:"positionDropdown",value:function(){var e=this;if(this.state.isOpen){var t=this.props,n=t.dropdownAttrs,o=t.maxHeight,r=t.isTouchAccessible;this.setState(h.default.dropdownPosition(n,this.select,this.dropdown,o,r),(function(){e.state.isPositioned&&(e.dropdown.removeAttribute("inert"),e.dropdown.removeAttribute("aria-hidden"),e.selectMenu.setAttribute("tabIndex","0"),e.selectMenu&&e.shouldFocusDropdown&&e.selectMenu.focus())}))}}},{key:"ariaLabel",value:function(){var e=this.props,t=e.ariaLabel,n=e.disabled,o=e.intl,r=o.formatMessage({id:"Terra.form.select.ariaLabel"}),i=o.formatMessage({id:"Terra.form.select.dimmed"});return"ontouchstart"in window&&n?void 0===t?"".concat(r," ").concat(i):"".concat(t," ").concat(i):void 0===t?r:t}},{key:"role",value:function(){return this.props.disabled?void 0:"application"}},{key:"renderDescriptionText",value:function(){var e=this.props.intl,t=e.formatMessage({id:"Terra.form.select.listOfTotalOptions"}),n=e.formatMessage({id:"Terra.form.select.mobileUsageGuidance"}),o=e.formatMessage({id:"Terra.form.select.multiSelectUsageGuidance"});return"ontouchstart"in window?this.state.isInputFocused?"".concat(t):"".concat(t," ").concat(n):"".concat(t," ").concat(o)}},{key:"renderToggleButton",value:function(){var e=this.props,t=e.intl,n=e.isInvalid,o=t.formatMessage({id:"Terra.form.select.mobileButtonUsageGuidance"});if("ontouchstart"in window){if(this.state.isInputFocused){var i=E(["toggle",{"is-invalid":n}]);return r.default.createElement("div",{"data-terra-form-select-toggle":!0,className:i,onClick:this.handleToggleClick},r.default.createElement("span",{className:E("arrow-icon")}))}var a=E(["toggle","toggle-narrow",{"is-invalid":n}]);return r.default.createElement("div",{className:a},r.default.createElement("button",{type:"button",className:E("toggle-btn"),"aria-label":o,"data-terra-form-select-toggle-button":!0,onClick:this.handleToggleClick},r.default.createElement("span",{className:E("arrow-icon"),"data-terra-form-select-toggle-button-icon":!0})))}var l=E(["toggle",{"is-invalid":n}]);return r.default.createElement("div",{"data-terra-form-select-toggle":!0,className:l,onClick:this.toggleDropdown},r.default.createElement("span",{className:E("arrow-icon")}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.ariaLabel,t.children),o=t.disabled,i=(t.display,t.dropdownAttrs),l=(t.inputId,t.intl,t.isIncomplete),s=t.isTouchAccessible,d=t.isInvalid,v=(t.maxHeight,t.maxSelectionCount),y=t.noResultContent,b=t.onDeselect,g=(t.onSearch,t.onSelect,t.optionFilter),S=(t.placeholder,t.required),T=(t.totalOptions,t.value),C=O(t,m),D=this.context,k=(0,a.default)(E(["select","multiple",{"is-above":this.state.isAbove},{"is-disabled":o},{"is-focused":this.state.isFocused},{"is-invalid":d},{"is-incomplete":l&&S&&!d},{"is-open":this.state.isOpen},D.className]),C.className),j="terra-select-screen-reader-label-".concat((0,c.default)()),P="terra-select-screen-reader-display-".concat((0,c.default)()),x="terra-select-screen-reader-description-".concat((0,c.default)()),M=C["aria-describedby"],_=M?"".concat(x," ").concat(M):x,I={id:this.menuId,value:T,onDeselect:b,optionFilter:g,noResultContent:y,visuallyHiddenComponent:this.visuallyHiddenComponent,onSelect:this.handleSelect,onRequestClose:this.closeDropdown,searchValue:this.state.searchValue,input:this.input,select:this.select,maxSelectionCount:v,refCallback:this.setSelectMenuRef};return r.default.createElement("div",w({},C,{role:this.role(),"data-terra-select-combobox":!0,"aria-controls":!o&&this.state.isOpen?this.menuId:void 0,"aria-disabled":!!o,"aria-expanded":!!o&&!!this.state.isOpen,"aria-haspopup":o?void 0:"true","aria-describedby":_,"aria-owns":this.state.isOpen?this.menuId:void 0,className:k,onBlur:this.handleBlur,onClick:this.handleClick,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,onMouseDown:u.handleMouseDown,onTouchStart:this.handleTouchStart,tabIndex:"-1",ref:function(t){e.select=t}}),r.default.createElement("div",{className:E("visually-hidden-component"),hidden:!0},r.default.createElement("span",{id:j},this.ariaLabel()),r.default.createElement("span",{id:x},this.renderDescriptionText())),r.default.createElement("div",{className:E("display")},this.getDisplay(P,_,this.menuId)),this.renderToggleButton(),r.default.createElement("span",{"aria-atomic":"true","aria-live":"assertive","aria-relevant":"additions text",className:E("visually-hidden-component"),ref:this.visuallyHiddenComponent}),this.state.isOpen&&r.default.createElement(f.default,w({},i,{id:this.state.isOpen?"terra-select-dropdown":void 0,target:this.select,isAbove:this.state.isAbove,isTouchAccessible:s,isEnabled:this.state.isPositioned,onResize:this.positionDropdown,refCallback:function(t){e.dropdown=t},style:h.default.dropdownStyle(i,this.state)}),r.default.createElement(p.default,I,n)))}}])&&S(t.prototype,o),i&&S(t,i),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.default.Component);x.propTypes=j,x.defaultProps=P,x.contextType=u.default;var M=(0,s.injectIntl)(x);t.default=M},48660:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=y(n(67294)),i=y(n(45697)),a=y(n(47166)),l=y(n(50026)),u=n(10752),s=n(25387),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(51051)),d=y(n(50987)),f=y(n(40500)),p=y(n(44334)),h=y(n(28395));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}function y(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},m.apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function g(e,t,n){return(t=w(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,w(o.key),o)}}function w(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=D(e);if(t){var i=D(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}(this,n)}}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var k=a.default.bind(h.default),E={id:i.default.string,children:i.default.node,select:i.default.instanceOf(Element),intl:i.default.shape({formatMessage:i.default.func}).isRequired,input:i.default.instanceOf(Element),maxSelectionCount:i.default.number,noResultContent:i.default.node,onDeselect:i.default.func,onSelect:i.default.func.isRequired,optionFilter:i.default.func,searchValue:i.default.string,value:i.default.oneOfType([i.default.string,i.default.number,i.default.array]),visuallyHiddenComponent:i.default.shape({current:i.default.instanceOf(Element)}),refCallback:i.default.func},j={id:void 0,children:void 0,input:void 0,maxSelectionCount:void 0,noResultContent:void 0,onDeselect:void 0,optionFilter:void 0,searchValue:void 0,select:void 0,visuallyHiddenComponent:void 0,value:void 0,refCallback:void 0},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,o,i=T(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={},t.clearScrollTimeout=t.clearScrollTimeout.bind(C(t)),t.handleKeyDown=t.handleKeyDown.bind(C(t)),t.handleMouseEnter=t.handleMouseEnter.bind(C(t)),t.handleOptionClick=t.handleOptionClick.bind(C(t)),t.scrollIntoView=t.scrollIntoView.bind(C(t)),t}return t=a,n=[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.scrollIntoView(),"ontouchstart"in window||this.updateCurrentActiveScreenReader()}},{key:"componentDidUpdate",value:function(){this.updateNoResultsScreenReader(),this.updateCurrentActiveScreenReader()}},{key:"componentWillUnmount",value:function(){this.clearScrollTimeout(),this.state.closedViaKeyEvent&&this.props.input&&this.props.input.focus(),document.removeEventListener("keydown",this.handleKeyDown)}},{key:"handleKeyDown",value:function(e){var t=e.keyCode,n=this.state,o=n.active,r=n.children,i=this.props,a=i.intl,l=i.onSelect,u=i.onDeselect,s=i.value,d=i.visuallyHiddenComponent,f=p.default.flatten(this.state.children,!0),h=f.length,v=p.default.getIndex(f,this.state.active);if(t===c.KEY_UP)this.clearScrollTimeout(),this.scrollTimeout=setTimeout(this.clearScrollTimeout,500),this.setState({active:p.default.findPrevious(r,o)},this.scrollIntoView),this.updateCurrentActiveScreenReader();else if(t===c.KEY_DOWN)this.clearScrollTimeout(),this.scrollTimeout=setTimeout(this.clearScrollTimeout,500),this.setState({active:p.default.findNext(r,o)},this.scrollIntoView),this.updateCurrentActiveScreenReader();else if(t!==c.KEY_RETURN||null===o||p.default.includes(s,o))if(t===c.KEY_RETURN&&null!==o&&p.default.includes(s,o)){e.preventDefault();var y=p.default.findByValue(r,o);d&&d.current&&(d.current.innerHTML=a.formatMessage({id:"Terra.form.select.unselectedText"},{text:y.props.display})),u&&u(y.props.value,y)}else t===c.KEY_HOME?(e.preventDefault(),this.setState({active:p.default.findFirst(r)})):t===c.KEY_END&&(e.preventDefault(),this.setState({active:p.default.findLast(r)}));else{e.preventDefault();var m=p.default.findByValue(r,o);d&&d.current&&(d.current.innerHTML=a.formatMessage({id:"Terra.form.select.selectedText"},{text:m.props.display,index:v,totalOptions:h})),l&&l(m.props.value,m)}}},{key:"handleOptionClick",value:function(e,t){if(!t.props.disabled&&t===this.downOption){var n=p.default.flatten(this.state.children,!0),o=n.length,r=p.default.getIndex(n,this.state.active),i=this.props,a=i.input,l=i.onDeselect,u=i.onSelect,s=i.value,c=i.intl,d=i.visuallyHiddenComponent,f=p.default.includes(s,t.props.value),h=f?c.formatMessage({id:"Terra.form.select.unselectedText"},{text:t.props.display}):c.formatMessage({id:"Terra.form.select.selectedText"},{text:t.props.display,index:r,totalOptions:o});d&&d.current&&(d.current.innerHTML=h),f?l&&l(t.props.value,t):(u&&u(t.props.value,t),a&&a.focus())}}},{key:"handleMouseEnter",value:function(e,t){this.scrollTimeout||(t.props.disabled||this.setState({active:t.props.value}),t.props.onMouseEnter&&t.props.onMouseEnter(e))}},{key:"isActiveSelected",value:function(){return this.props.value.includes(this.state.active)}},{key:"updateNoResultsScreenReader",value:function(){var e=this;this.liveRegionTimeOut&&clearTimeout(this.liveRegionTimeOut),this.liveRegionTimeOut=setTimeout((function(){var t=e.state,n=t.hasMaxSelection,o=t.hasNoResults,r=e.props,i=r.intl,a=r.visuallyHiddenComponent,l=r.searchValue;a&&a.current&&(a.current.innerText=o?i.formatMessage({id:"Terra.form.select.noResults"},{text:l}):n?i.formatMessage({id:"Terra.form.select.maxSelectionOption"},{text:e.props.maxSelectionCount}):"")}),1e3)}},{key:"updateCurrentActiveScreenReader",value:function(){var e=this.props,t=e.intl,n=e.visuallyHiddenComponent,o=p.default.flatten(this.state.children,!0),r=o.length,i=t.formatMessage({id:"Terra.form.select.clearSelect"});if(null!==this.menu&&null!==this.state.active&&this.menu.setAttribute("aria-activedescendant","terra-select-option-".concat(this.state.active)),n&&n.current){var a,l=p.default.getOptGroupElement(this.props.children,this.state.active),u=p.default.findByValue(this.props.children,this.state.active);if(l?a=t.formatMessage({id:"Terra.form.select.optGroup"},{text:"".concat(l.props.label,", ").concat(u.props.display)}):u&&(a=u.props.display),u){var s=p.default.getIndex(o,this.state.active);""===u.props.display&&""===u.props.value?n.current.innerText=i:this.isActiveSelected()?n.current.innerText=t.formatMessage({id:"Terra.form.select.selectedText"},{text:a,index:s,totalOptions:r}):n.current.innerText=t.formatMessage({id:"Terra.form.select.activeOption"},{text:a,index:s,totalOptions:r})}}}},{key:"clearScrollTimeout",value:function(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null}},{key:"clone",value:function(e){var t=this;return r.default.Children.map(e,(function(e){return e.type.isOption?r.default.cloneElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:"terra-select-option-".concat(e.props.value),isActive:e.props.value===t.state.active,isCheckable:!0,isSelected:p.default.isSelected(t.props.value,e.props.value),variant:"multiple",onMouseDown:function(){t.downOption=e},onMouseUp:function(n){return t.handleOptionClick(n,e)},onMouseEnter:function(n){return t.handleMouseEnter(n,e)}},e.props.value===t.state.active&&{"data-select-active":!0})):e.type.isOptGroup?r.default.cloneElement(e,{},t.clone(e.props.children)):e}))}},{key:"scrollIntoView",value:function(){var e=this.menu.querySelector("[data-select-active]");if(this.state.active&&null!==e){var t=this.menu.parentNode.getBoundingClientRect(),n=e.getBoundingClientRect();n.top<t.top?this.menu.parentNode.scrollTop=e.offsetTop:n.bottom>t.bottom&&(this.menu.parentNode.scrollTop=e.offsetTop-t.height+n.height)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,o=t.intl,i=t.refCallback,a=this.context;return r.default.createElement("ul",m({id:n,role:"listbox",className:k("menu",a.className),"aria-label":o.formatMessage({id:"Terra.form.select.menu"}),ref:function(t){i&&i(t),e.menu=t}},null!==this.state.active?{"aria-activedescendant":"terra-select-option-".concat(this.state.active)}:{},{tabIndex:"0"}),this.clone(this.state.children))}}],o=[{key:"isMaxSelectionReached",value:function(e){var t=e.maxSelectionCount,n=e.value;return!!(void 0!==t&&n&&n.length>=t)}},{key:"getActiveOptionFromProps",value:function(e,t,n){var o=n.active,r=(e.searchValue,e.value),i=p.default.flatten(t,!0);if(0===i.length)return null;if(null!==o&&p.default.findByValue(i,o))return o;if(void 0===n.searchValue){var a=i.find((function(e){return p.default.includes(r,e.props.value)}));return void 0===a?i[0].props.value:a.props.value}return n.searchValue,i[0].props.value}},{key:"updateSelectionState",value:function(e,t){var n=a.isMaxSelectionReached(t);return r.default.Children.map(e,(function(e){return e.type.isOption?r.default.cloneElement(e,{disabled:e.props.disabled||n&&!p.default.isSelected(t.value,e.props.value)}):e.type.isOptGroup?r.default.cloneElement(e,{},a.updateSelectionState(e.props.children,t)):e}))}},{key:"getDerivedStateFromProps",value:function(e,t){var n,o=e.maxSelectionCount,i=e.searchValue,l=e.noResultContent,u=!1,s=!1;return i&&i.length>0&&a.isMaxSelectionReached(e)?(n=[r.default.createElement(d.default,{value:o})],s=!0):(n=p.default.filter(e.children,e.searchValue,e.optionFilter),(n=a.updateSelectionState(n,e)).length||(n.push(r.default.createElement(f.default,{noResultContent:l,value:i})),u=!0)),{children:n,searchValue:i,hasMaxSelection:s,hasNoResults:u,active:a.getActiveOptionFromProps(e,n,t)}}}],n&&O(t.prototype,n),o&&O(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.default.Component);P.propTypes=E,P.defaultProps=j,P.contextType=l.default,(0,u.polyfill)(P);var x=(0,s.injectIntl)(P);t.default=x},40500:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(67294)),r=s(n(45697)),i=s(n(47166)),a=s(n(50026)),l=n(25387),u=s(n(45981));function s(e){return e&&e.__esModule?e:{default:e}}var c=i.default.bind(u.default),d={noResultContent:r.default.node,value:r.default.oneOfType([r.default.number,r.default.string])},f=function(e){var t=e.noResultContent,n=e.value,r=o.default.useContext(a.default);return o.default.createElement("div",{role:"option",className:c("no-results",r.className),"aria-selected":"false"},t||o.default.createElement(l.FormattedMessage,{id:"Terra.form.select.noResults",values:{text:n}}))};f.propTypes=d;var p=f;t.default=p},45981:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_NoResults-module__clinical-lowlight-theme___-XlVf","orion-fusion-theme":"_NoResults-module__orion-fusion-theme___tnsoS","no-results":"_NoResults-module__no-results___u1T4I"}}}]);