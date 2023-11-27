"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[74854],{74854:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(67294)),a=f(n(45697)),i=n(25387),l=f(n(21361)),s=f(n(4626)),u=f(n(97574)),c=f(n(12099)),d=["allowClear","children","defaultValue","onChange","placeholder","required","value","intl","inputId"];function f(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function v(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(a=r.key,i=void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===o(i)?i:String(i)),r)}var a,i}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var a=w(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}(this,n)}}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S={allowClear:a.default.bool,children:a.default.node,defaultValue:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),disabled:a.default.bool,dropdownAttrs:a.default.object,intl:a.default.shape({formatMessage:a.default.func}).isRequired,isIncomplete:a.default.bool,isInvalid:a.default.bool,isTouchAccessible:a.default.bool,maxHeight:a.default.number,noResultContent:a.default.node,onBlur:a.default.func,onChange:a.default.func,onClick:a.default.func,onDeselect:a.default.func,onFocus:a.default.func,onSearch:a.default.func,onSelect:a.default.func,optionFilter:a.default.func,placeholder:a.default.string,required:a.default.bool,value:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),inputId:a.default.string},T={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,inputId:void 0},D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(i,e);var t,n,o,a=g(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),t=a.call(this,e);var n=e.value,o=e.defaultValue;return t.state={tags:[],value:c.default.defaultValue({defaultValue:o,value:n})},t.display=t.display.bind(O(t)),t.handleChange=t.handleChange.bind(O(t)),t.handleDeselect=t.handleDeselect.bind(O(t)),t.handleSelect=t.handleSelect.bind(O(t)),t.handleResetComboboxValue=t.handleResetComboboxValue.bind(O(t)),t}return t=i,(n=[{key:"handleChange",value:function(e){void 0===this.props.value&&this.setState({value:e}),this.props.onChange&&this.props.onChange(e)}},{key:"handleDeselect",value:function(e){this.handleChange(c.default.deselect(this.props,this.state,e)),this.props.onDeselect&&this.props.onDeselect(e)}},{key:"handleSelect",value:function(e,t){this.handleChange(c.default.select(this.props,this.state,e)),void 0!==this.props.value||c.default.findByValue(this.props,this.state,e)||this.setState((function(t){return{tags:[].concat(v(t.tags),[r.default.createElement(s.default,{key:e,display:e,value:e})])}})),this.props.onSelect&&this.props.onSelect(e,t)}},{key:"handleResetComboboxValue",value:function(){this.setState({value:""})}},{key:"display",value:function(){var e=c.default.value(this.props,this.state);return c.default.valueDisplay(this.props,e)}},{key:"render",value:function(){var e,t=this.props,n=t.allowClear,o=t.children,a=(t.defaultValue,t.onChange,t.placeholder),i=t.required,s=(t.value,t.intl),u=t.inputId,f=h(t,d),v=s.formatMessage({id:"Terra.form.select.defaultComboboxDisplay"}),y=void 0===a?v:a;return n&&(e=0===y.length?v:y),r.default.createElement(l.default,p({},f,{"data-terra-select":!0,value:c.default.value(this.props,this.state),display:this.display(),onDeselect:this.handleDeselect,onSelect:this.handleSelect,placeholder:y,required:i,totalOptions:c.default.getTotalNumberOfOptions(o),clearOptionDisplay:e,inputId:u,resetComboboxValue:this.handleResetComboboxValue,allowClear:n}),this.state.tags,o)}}])&&b(t.prototype,n),o&&b(t,o),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.default.Component);D.Option=s.default,D.OptGroup=u.default,D.propTypes=S,D.defaultProps=T,D.isSelect=!0;t.default=(0,i.injectIntl)(D)},21361:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(67294)),a=m(n(45697)),i=m(n(94184)),l=m(n(47166)),s=m(n(50026)),u=n(25387),c=m(n(14461)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}(n(51051)),f=m(n(74861)),p=m(n(11296)),h=m(n(97813)),v=m(n(3913));n(98394),n(29540),n(44856);var y=["ariaLabel","clearOptionDisplay","children","disabled","display","dropdownAttrs","inputId","intl","isIncomplete","isTouchAccessible","isInvalid","maxHeight","noResultContent","onDeselect","onSearch","onSelect","optionFilter","placeholder","required","totalOptions","value"];function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function m(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},O.apply(this,arguments)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(a=r.key,i=void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===o(i)?i:String(i)),r)}var a,i}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var a=j(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return D(e)}(this,n)}}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var _=l.default.bind(v.default),C={ariaLabel:a.default.string,children:a.default.node,clearOptionDisplay:a.default.string,disabled:a.default.bool,display:a.default.node,dropdownAttrs:a.default.object,inputId:a.default.string,intl:a.default.shape({formatMessage:a.default.func}).isRequired,isIncomplete:a.default.bool,isInvalid:a.default.bool,isTouchAccessible:a.default.bool,maxHeight:a.default.number,noResultContent:a.default.node,onDeselect:a.default.func,onBlur:a.default.func,onFocus:a.default.func,onSearch:a.default.func,onSelect:a.default.func,optionFilter:a.default.func,placeholder:a.default.string,required:a.default.bool,totalOptions:a.default.number,value:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),resetComboboxValue:a.default.func,allowClear:a.default.bool},E={clearOptionDisplay:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,noResultContent:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,totalOptions:void 0,value:void 0,inputId:void 0,allowClear:!1},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(s,e);var t,o,a,l=T(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=l.call(this,e)).state={focusedByTouch:!1,isOpen:!1,isFocused:!1,isInputFocused:!1,isPositioned:!1,hasSearchChanged:!1,searchValue:""},t.ariaLabel=t.ariaLabel.bind(D(t)),t.setInput=t.setInput.bind(D(t)),t.getDisplay=t.getDisplay.bind(D(t)),t.renderToggleButton=t.renderToggleButton.bind(D(t)),t.renderDescriptionText=t.renderDescriptionText.bind(D(t)),t.openDropdown=t.openDropdown.bind(D(t)),t.closeDropdown=t.closeDropdown.bind(D(t)),t.toggleDropdown=t.toggleDropdown.bind(D(t)),t.positionDropdown=t.positionDropdown.bind(D(t)),t.handleBlur=t.handleBlur.bind(D(t)),t.handleFocus=t.handleFocus.bind(D(t)),t.handleSelect=t.handleSelect.bind(D(t)),t.handleSearch=t.handleSearch.bind(D(t)),t.handleKeyDown=t.handleKeyDown.bind(D(t)),t.handleMouseDown=t.handleMouseDown.bind(D(t)),t.handleInputMouseDown=t.handleInputMouseDown.bind(D(t)),t.handleInputFocus=t.handleInputFocus.bind(D(t)),t.handleInputBlur=t.handleInputBlur.bind(D(t)),t.handleToggleMouseDown=t.handleToggleMouseDown.bind(D(t)),t.handleToggleButtonMouseDown=t.handleToggleButtonMouseDown.bind(D(t)),t.handleTouchStart=t.handleTouchStart.bind(D(t)),t.menuId="terra-select-menu-".concat((0,c.default)()),t.visuallyHiddenComponent=r.default.createRef(),t.setSelectMenuRef=t.setSelectMenuRef.bind(D(t)),t.shouldFocusDropdown=!1,t.hasEscPressed=!1,t}return t=s,a=[{key:"shouldAddOptionOnBlur",value:function(e,t){var n=e.onSelect,o=e.value,r=t.hasSearchChanged,a=t.searchValue;return!(!r||!n||o===a)}}],(o=[{key:"componentDidMount",value:function(){Element.prototype.hasOwnProperty("inert")||n(23458)}},{key:"componentDidUpdate",value:function(e,t){h.default.shouldPositionDropdown(t,this.state,this.dropdown)&&(clearTimeout(this.debounceTimer),this.dropdown.setAttribute("inert",""),this.debounceTimer=setTimeout(this.positionDropdown,t.isOpen?100:0))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.debounceTimer)}},{key:"handleBlur",value:function(e){var t=e.relatedTarget||document.activeElement;this.dropdown&&this.dropdown===document.activeElement&&this.dropdown.contains(document.activeElement)||t!==this.input&&t!==this.selectMenu&&(this.setState({isFocused:!1,focusedByTouch:!1}),this.closeDropdown(),this.props.onBlur&&this.props.onBlur(e))}},{key:"handleFocus",value:function(e){this.props.disabled||(this.props.onFocus&&!this.state.isFocused&&this.props.onFocus(e),this.setState({isFocused:!0}))}},{key:"handleKeyDown",value:function(e){var t=this.props.intl,n=e.keyCode,o=e.target;n===d.KEY_SPACE&&o!==this.input||n===d.KEY_UP||n===d.KEY_DOWN?(e.preventDefault(),this.openDropdown(e)):this.state.isOpen&&n===d.KEY_ESCAPE?(this.hasEscPressed=!0,e.stopPropagation(),this.closeDropdown()):!this.state.isOpen&&n===d.KEY_ESCAPE&&this.hasEscPressed?(this.hasEscPressed=!1,this.props.resetComboboxValue&&this.props.resetComboboxValue(),this.setState({hasSearchChanged:!1,searchValue:""}),e.stopPropagation()):n===d.KEY_ESCAPE&&this.props.allowClear&&(this.hasEscPressed=!1,this.props.resetComboboxValue&&this.props.resetComboboxValue(),this.setState({hasSearchChanged:!1,searchValue:""}),this.visuallyHiddenComponent.current.innerText=t.formatMessage({id:"Terra.form.select.selectCleared"}),e.stopPropagation())}},{key:"handleMouseDown",value:function(e){e.preventDefault(),this.openDropdown(e)}},{key:"handleInputMouseDown",value:function(e){e.stopPropagation(),this.openDropdown(e)}},{key:"handleInputFocus",value:function(){this.setState({isInputFocused:!0})}},{key:"handleInputBlur",value:function(){this.setState({isInputFocused:!1})}},{key:"handleToggleMouseDown",value:function(){this.state.isOpen&&this.closeDropdown()}},{key:"handleToggleButtonMouseDown",value:function(){this.state.isOpen&&(this.closeDropdown(),this.input&&this.input.focus())}},{key:"handleTouchStart",value:function(){this.setState({focusedByTouch:!0})}},{key:"handleSearch",value:function(e){var t=e.target.value;this.setState({isOpen:!0,hasSearchChanged:!0,searchValue:t}),this.props.onSearch&&this.props.onSearch(t)}},{key:"handleSelect",value:function(e,t){this.setState({searchValue:"",hasSearchChanged:!1,isOpen:!1,isAbove:!1}),this.props.onSelect&&this.props.onSelect(e,t)}},{key:"setInput",value:function(e){this.input=e}},{key:"setSelectMenuRef",value:function(e){this.selectMenu=e}},{key:"getDisplay",value:function(e,t){var n=this.state,o=n.hasSearchChanged,a=n.searchValue,i=this.props,l=i.disabled,s=i.display,u=i.placeholder,c=i.required,d=i.inputId,f={disabled:l,placeholder:u,ref:this.setInput,onChange:this.handleSearch,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,onMouseDown:this.handleInputMouseDown,"aria-label":this.ariaLabel(),"aria-describedby":e,"aria-disabled":l,"aria-owns":this.state.isOpen?t:void 0,"aria-expanded":!l&&this.state.isOpen,type:"text",className:_("search-input"),required:c,"aria-required":c,id:d,role:"combobox"},p=o?a:s;return r.default.createElement("div",{className:_("content")},r.default.createElement("input",O({},f,{value:p})))}},{key:"closeDropdown",value:function(){this.setState({isAbove:!1,isFocused:document.activeElement===this.input||document.activeElement===this.select,isOpen:!1,isPositioned:!1})}},{key:"openDropdown",value:function(e){if(this.shouldFocusDropdown=!1,!this.state.isOpen&&!this.props.disabled){if(e&&e.target&&(e.target.hasAttribute("data-terra-form-select-toggle-button")||e.target.hasAttribute("data-terra-form-select-toggle-button-icon")))return this.setState({isOpen:!0,isPositioned:!1}),void(this.shouldFocusDropdown=!0);(e.target.hasAttribute("data-terra-form-select-toggle")||e.target.className.includes("arrow-icon"))&&this.input.focus(),this.input?this.input.focus():h.default.shiftFocusToMenu(this),this.setState({isOpen:!0,isPositioned:!1})}}},{key:"positionDropdown",value:function(){var e=this;if(this.state.isOpen){var t=this.props,n=t.dropdownAttrs,o=t.maxHeight,r=t.isTouchAccessible;this.setState(h.default.dropdownPosition(n,this.select,this.dropdown,o,r),(function(){e.state.isPositioned&&(e.dropdown.removeAttribute("inert"),e.dropdown.removeAttribute("aria-hidden"),e.selectMenu.setAttribute("tabIndex","0"),e.selectMenu&&e.shouldFocusDropdown&&e.selectMenu.focus())}))}}},{key:"toggleDropdown",value:function(e){this.state.isOpen?this.closeDropdown():this.openDropdown(e)}},{key:"ariaLabel",value:function(){var e=this.props,t=e.ariaLabel,n=e.disabled,o=e.intl,r=o.formatMessage({id:"Terra.form.select.ariaLabel"}),a=o.formatMessage({id:"Terra.form.select.dimmed"});return"ontouchstart"in window&&n?void 0===t?"".concat(r," ").concat(a):"".concat(t," ").concat(a):void 0===t?r:t}},{key:"renderDescriptionText",value:function(){var e=this.props.intl,t=e.formatMessage({id:"Terra.form.select.listOfTotalOptions"}),n=e.formatMessage({id:"Terra.form.select.mobileUsageGuidance"}),o=e.formatMessage({id:"Terra.form.select.searchUsageGuidance"});return"ontouchstart"in window?this.state.isInputFocused?"".concat(t):"".concat(t," ").concat(n):"".concat(t," ").concat(o)}},{key:"renderToggleButton",value:function(){var e=this.props,t=e.intl,n=e.isInvalid,o=t.formatMessage({id:"Terra.form.select.mobileButtonUsageGuidance"});if("ontouchstart"in window){if(this.state.isInputFocused){var a=_(["toggle",{"is-invalid":n}]);return r.default.createElement("div",{"data-terra-form-select-toggle":!0,className:a,onMouseDown:this.handleToggleMouseDown},r.default.createElement("span",{className:_("arrow-icon")}))}var i=_(["toggle","toggle-narrow",{"is-invalid":n}]);return r.default.createElement("div",{className:i},r.default.createElement("button",{type:"button",className:_("toggle-btn"),"aria-label":o,"data-terra-form-select-toggle-button":!0,onMouseDown:this.handleToggleButtonMouseDown},r.default.createElement("span",{className:_("arrow-icon"),"data-terra-form-select-toggle-button-icon":!0})))}var l=_(["toggle",{"is-invalid":n}]);return r.default.createElement("div",{"data-terra-form-select-toggle":!0,className:l,onMouseDown:this.toggleDropdown},r.default.createElement("span",{className:_("arrow-icon")}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.ariaLabel,t.clearOptionDisplay),o=t.children,a=t.disabled,l=(t.display,t.dropdownAttrs),s=(t.inputId,t.intl,t.isIncomplete),u=t.isTouchAccessible,d=t.isInvalid,v=(t.maxHeight,t.noResultContent),b=t.onDeselect,m=(t.onSearch,t.onSelect,t.optionFilter),w=(t.placeholder,t.required),S=(t.totalOptions,t.value),T=g(t,y),D=this.context,j=(0,i.default)(_("select","combobox",{"is-above":this.state.isAbove},{"is-disabled":a},{"is-focused":this.state.isFocused},{"is-invalid":d},{"is-incomplete":s&&w&&!d},{"is-open":this.state.isOpen},D.className),T.className),C="terra-select-screen-reader-label-".concat((0,c.default)()),E="terra-select-screen-reader-description-".concat((0,c.default)()),P=T["aria-describedby"],M=P?"".concat(E," ").concat(P):E,k={id:this.menuId,value:S,onDeselect:b,optionFilter:m,noResultContent:v,visuallyHiddenComponent:this.visuallyHiddenComponent,onSelect:this.handleSelect,onRequestClose:this.closeDropdown,searchValue:this.state.searchValue,input:this.input,select:this.select,clearOptionDisplay:n,refCallback:this.setSelectMenuRef};return r.default.createElement("div",O({},T,{"data-terra-select-combobox":!0,"aria-controls":!a&&this.state.isOpen?this.menuId:void 0,"aria-disabled":!!a,"aria-haspopup":a?void 0:"true",className:j,onBlur:this.handleBlur,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart,tabIndex:"-1",ref:function(t){e.select=t}}),r.default.createElement("div",{className:_("visually-hidden-component"),hidden:!0},r.default.createElement("span",{id:C},this.ariaLabel()),r.default.createElement("span",{id:E},this.renderDescriptionText())),r.default.createElement("div",{className:_("display")},this.getDisplay(M,this.menuId)),this.renderToggleButton(),r.default.createElement("span",{"aria-atomic":"true","aria-live":"assertive","aria-relevant":"additions text",className:_("visually-hidden-component"),ref:this.visuallyHiddenComponent}),this.state.isOpen&&r.default.createElement(f.default,O({},l,{id:this.state.isOpen?"terra-select-dropdown":void 0,target:this.select,isAbove:this.state.isAbove,isTouchAccessible:u,isEnabled:this.state.isPositioned,onResize:this.positionDropdown,refCallback:function(t){e.dropdown=t},style:h.default.dropdownStyle(l,this.state)}),r.default.createElement(p.default,k,o)))}}])&&w(t.prototype,o),a&&w(t,a),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.default.Component);P.propTypes=C,P.defaultProps=E,P.contextType=s.default;t.default=(0,u.injectIntl)(P)},11296:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(67294)),a=m(n(45697)),i=m(n(47166)),l=m(n(50026)),s=n(10752),u=n(25387),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}(n(51051)),d=m(n(22112)),f=m(n(88623)),p=m(n(44334)),h=m(n(75581)),v=m(n(28395)),y=m(n(40500));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function m(e){return e&&e.__esModule?e:{default:e}}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},g.apply(this,arguments)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function w(e,t,n){return(t=T(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,T(o.key),o)}}function T(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var a=C(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}(this,n)}}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var E=i.default.bind(v.default),P={id:a.default.string,children:a.default.node,select:a.default.instanceOf(Element),intl:a.default.shape({formatMessage:a.default.func}).isRequired,input:a.default.instanceOf(Element),clearOptionDisplay:a.default.string,noResultContent:a.default.node,onDeselect:a.default.func,onSelect:a.default.func.isRequired,optionFilter:a.default.func,searchValue:a.default.string,value:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),visuallyHiddenComponent:a.default.shape({current:a.default.instanceOf(Element)}),refCallback:a.default.func},M={id:void 0,children:void 0,input:void 0,clearOptionDisplay:void 0,noResultContent:void 0,onDeselect:void 0,optionFilter:void 0,searchValue:void 0,select:void 0,visuallyHiddenComponent:void 0,value:void 0,refCallback:void 0},k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(i,e);var t,n,o,a=j(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).state={closedViaKeyEvent:!1},t.clearScrollTimeout=t.clearScrollTimeout.bind(_(t)),t.handleKeyDown=t.handleKeyDown.bind(_(t)),t.handleMouseEnter=t.handleMouseEnter.bind(_(t)),t.handleOptionClick=t.handleOptionClick.bind(_(t)),t.scrollIntoView=t.scrollIntoView.bind(_(t)),t}return t=i,n=[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.scrollIntoView(),"ontouchstart"in window||this.updateCurrentActiveScreenReader()}},{key:"componentDidUpdate",value:function(){this.updateCurrentActiveScreenReader()}},{key:"componentWillUnmount",value:function(){this.clearScrollTimeout(),this.state.closedViaKeyEvent&&this.props.input&&this.props.input.focus(),document.removeEventListener("keydown",this.handleKeyDown)}},{key:"handleKeyDown",value:function(e){var t=e.keyCode,n=this.state,o=n.active,r=n.children,a=this.props,i=a.intl,l=a.onSelect,s=a.visuallyHiddenComponent,u=i.formatMessage({id:"Terra.form.select.selected"});if(t===c.KEY_UP)this.clearScrollTimeout(),this.scrollTimeout=setTimeout(this.clearScrollTimeout,500),this.setState({active:p.default.findPrevious(r,o)},this.scrollIntoView),this.updateCurrentActiveScreenReader();else if(t===c.KEY_DOWN)this.clearScrollTimeout(),this.scrollTimeout=setTimeout(this.clearScrollTimeout,500),this.setState({active:p.default.findNext(r,o)},this.scrollIntoView),this.updateCurrentActiveScreenReader();else if(t===c.KEY_RETURN&&null!==o){e.preventDefault(),this.setState({closedViaKeyEvent:!0});var d=p.default.findByValue(r,o);if(s&&s.current){if(this.props.clearOptionDisplay){var f=this.menu.querySelector("[data-select-active]");f&&f.hasAttribute("data-terra-select-clear-option")&&(this.props.visuallyHiddenComponent.current.innerText=i.formatMessage({id:"Terra.form.select.selectCleared"}))}d.props.value&&(this.props.visuallyHiddenComponent.current.innerText="".concat(d.props.value," ").concat(u))}l(d.props.value,d)}else t===c.KEY_HOME?(e.preventDefault(),this.setState({active:p.default.findFirst(r)})):t===c.KEY_END&&(e.preventDefault(),this.setState({active:p.default.findLast(r)}))}},{key:"handleOptionClick",value:function(e,t){if(!t.props.disabled&&t===this.downOption){var n=this.props,o=n.input,r=n.onSelect;r&&r(t.props.value,t),o&&o.focus()}}},{key:"handleMouseEnter",value:function(e,t){this.scrollTimeout||(t.props.disabled||this.setState({active:t.props.value}),t.props.onMouseEnter&&t.props.onMouseEnter(e))}},{key:"isActiveSelected",value:function(){return this.state.active===this.props.value}},{key:"updateNoResultsScreenReader",value:function(e){var t=this;this.liveRegionTimeOut&&clearTimeout(this.liveRegionTimeOut),this.liveRegionTimeOut=setTimeout((function(){var n=t.props,o=n.intl,r=n.visuallyHiddenComponent,a=n.searchValue;if(r&&r.current){var i=o.formatMessage({id:"Terra.form.select.noResults"},{text:a});r.current.innerText="".concat(i,", ").concat(e)}}),1e3)}},{key:"updateCurrentActiveScreenReader",value:function(){var e=this.props,t=e.intl,n=e.clearOptionDisplay,o=e.visuallyHiddenComponent,r=t.formatMessage({id:"Terra.form.select.clearSelect"}),a=this.state.hasNoResults;if(null!==this.menu&&null!==this.state.active&&this.menu.setAttribute("aria-activedescendant","terra-select-option-".concat(this.state.active)),o&&o.current){if(n){var i=this.menu&&this.menu.querySelector("[data-select-active]");i&&i.hasAttribute("data-terra-select-clear-option")&&(o.current.innerText=r)}var l=this.menu&&this.menu.querySelector("[data-select-active]");if(l&&l.hasAttribute("data-terra-select-add-option")){var s=l.querySelector("[data-terra-add-option]")?l.querySelector("[data-terra-add-option]").innerText:null;a&&!this.state.closedViaKeyEvent?this.updateNoResultsScreenReader(s):o.current.innerText=s}var u,c=p.default.getOptGroupElement(this.props.children,this.state.active),d=p.default.findByValue(this.props.children,this.state.active);if(c?u=t.formatMessage({id:"Terra.form.select.optGroup"},{text:"".concat(c.props.label,", ").concat(d.props.display)}):d&&(u=d.props.display),d){var f=p.default.flatten(this.state.children,!0),h=f.length,v=p.default.getIndex(f,this.state.active);""===d.props.display&&""===d.props.value?o.current.innerText=r:this.isActiveSelected()?o.current.innerText=t.formatMessage({id:"Terra.form.select.selectedText"},{text:u,index:v,totalOptions:h}):o.current.innerText=t.formatMessage({id:"Terra.form.select.activeOption"},{text:u,index:v,totalOptions:h})}}}},{key:"clearScrollTimeout",value:function(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null}},{key:"clone",value:function(e){var t=this;return r.default.Children.map(e,(function(e){return e.type.isOption?r.default.cloneElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:"terra-select-option-".concat(e.props.value),isActive:e.props.value===t.state.active,isCheckable:!1,isSelected:p.default.isSelected(t.props.value,e.props.value),variant:"combobox",onMouseDown:function(){t.downOption=e},onMouseUp:function(n){return t.handleOptionClick(n,e)},onMouseEnter:function(n){return t.handleMouseEnter(n,e)}},e.props.value===t.state.active&&{"data-select-active":!0})):e.type.isOptGroup?r.default.cloneElement(e,{},t.clone(e.props.children)):e}))}},{key:"scrollIntoView",value:function(){var e=this.menu.querySelector("[data-select-active]");if(this.state.active&&null!==e){var t=this.menu.parentNode.getBoundingClientRect(),n=e.getBoundingClientRect();n.top<t.top?this.menu.parentNode.scrollTop=e.offsetTop:n.bottom>t.bottom&&(this.menu.parentNode.scrollTop=e.offsetTop-t.height+n.height)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,o=t.intl,a=t.refCallback,i=this.context;return r.default.createElement("ul",g({id:n,role:"listbox",className:E("menu",i.className),"aria-label":o.formatMessage({id:"Terra.form.select.menu"}),ref:function(t){a&&a(t),e.menu=t}},null!==this.state.active?{"aria-activedescendant":"terra-select-option-".concat(this.state.active)}:{},{tabIndex:"0"}),this.clone(this.state.children))}}],o=[{key:"shouldAllowFreeText",value:function(e,t){var n=e.searchValue,o=e.value,r=p.default.findByDisplay(t,n),a=p.default.isEqual(o,n);return!r&&!a&&(n||"").trim().length>0}},{key:"getDerivedStateFromProps",value:function(e,t){var n=e.clearOptionDisplay,o=e.searchValue,a=e.noResultContent,l=!1,s=!1,c=p.default.filter(e.children,e.searchValue,e.optionFilter);return(c=p.default.updateSelectionState(c,e)).length||(c.push(r.default.createElement(y.default,{noResultContent:a,value:o})),l=!0),i.shouldAllowFreeText(e,c)&&(c.push(r.default.createElement(d.default,{value:o})),s=!0),p.default.shouldShowClearOption({clearOptionDisplay:n,searchValue:o,hasAddOption:s,hasNoResults:l})&&c.unshift(r.default.createElement(f.default,{display:n,value:""})),c.map((function(e){return e.key})).filter((function(e){return null!=e})).length&&!l&&o.trim().length>0&&c.unshift(r.default.createElement(h.default,{searchResultContent:r.default.createElement(u.FormattedMessage,{id:"Terra.form.select.resultsText",values:{text:o}})})),{children:c,searchValue:o,hasMaxSelection:!1,hasNoResults:l,active:p.default.getActiveOptionFromProps(e,c,t)}}}],n&&S(t.prototype,n),o&&S(t,o),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.default.Component);k.propTypes=P,k.defaultProps=M,k.contextType=l.default,(0,s.polyfill)(k);t.default=(0,u.injectIntl)(k)},22112:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(67294)),r=s(n(45697)),a=n(25387),i=s(n(4626)),l=["value","intl"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={intl:r.default.shape({formatMessage:r.default.func}).isRequired,value:r.default.oneOfType([r.default.number,r.default.string])},f=function(e){var t=e.value,n=e.intl,r=c(e,l);return o.default.createElement(i.default,u({},r,{isAddOption:!0,value:t,display:n.formatMessage({id:"Terra.form.select.add"},{text:t}),"data-terra-select-add-option":!0}))};f.propTypes=d,f.isOption=!0;t.default=(0,a.injectIntl)(f)},88623:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(67294)),r=d(n(45697)),a=d(n(94184)),i=d(n(47166)),l=d(n(50026)),s=d(n(4626)),u=d(n(95667)),c=["display","value"];function d(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=i.default.bind(u.default),v={display:r.default.string,value:r.default.string},y=function(e){var t=e.display,n=e.value,r=p(e,c),i=o.default.useContext(l.default);return o.default.createElement(s.default,f({},r,{className:(0,a.default)(h("clear-option",i.className),r.className),display:t,value:n,isSelected:!1,"data-terra-select-clear-option":!0}))};y.propTypes=v,y.isOption=!0;t.default=y},75581:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(67294)),r=s(n(45697)),a=s(n(47166)),i=s(n(50026)),l=s(n(25818));function s(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(l.default),c={searchResultContent:r.default.node},d=function(e){var t=e.searchResultContent,n=o.default.useContext(i.default);return o.default.createElement("div",{role:"option",className:u("results-that-contain",n.className),"aria-selected":"false"},t)};d.propTypes=c;t.default=d},95667:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_ClearOption-module__clinical-lowlight-theme___HrMM9","orion-fusion-theme":"_ClearOption-module__orion-fusion-theme___jfjen","clear-option":"_ClearOption-module__clear-option___bd9b1"}},25818:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_SearchResults-module__clinical-lowlight-theme___WyPYd","orion-fusion-theme":"_SearchResults-module__orion-fusion-theme___lIc3+","results-that-contain":"_SearchResults-module__results-that-contain___1GIYt"}}}]);