"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[88220],{88220:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(67294)),a=p(n(45697)),i=n(25387),l=p(n(48810)),u=p(n(4626)),s=p(n(97574)),c=p(n(17572)),d=p(n(12099)),f=["children","defaultValue","onChange","placeholder","required","value","intl","inputId"];function p(e){return e&&e.__esModule?e:{default:e}}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function m(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,g(o.key),o)}}function g(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:String(t)}function O(e,t,n){return t=S(t),function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}(e,w()?Reflect.construct(t,n||[],S(e).constructor):t.apply(e,n))}function w(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(w=function(){return!!e})()}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}var C={children:a.default.node,defaultValue:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),disabled:a.default.bool,dropdownAttrs:a.default.object,intl:a.default.shape({formatMessage:a.default.func}).isRequired,isIncomplete:a.default.bool,isInvalid:a.default.bool,isTouchAccessible:a.default.bool,maxHeight:a.default.number,maxSelectionCount:a.default.number,noResultContent:a.default.node,onBlur:a.default.func,onChange:a.default.func,onClick:a.default.func,onDeselect:a.default.func,onFocus:a.default.func,onSearch:a.default.func,onSelect:a.default.func,optionFilter:a.default.func,placeholder:a.default.string,required:a.default.bool,value:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),inputId:a.default.string},D={children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,inputId:void 0},k=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=O(this,t,[e]);var o=e.value,r=e.defaultValue;return n.state={value:d.default.defaultValue({defaultValue:r,value:o,multiple:!0})},n.display=n.display.bind(_(n)),n.handleChange=n.handleChange.bind(_(n)),n.handleDeselect=n.handleDeselect.bind(_(n)),n.handleSelect=n.handleSelect.bind(_(n)),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(t,e),n=t,(o=[{key:"handleChange",value:function(e){void 0===this.props.value&&this.setState({value:e}),this.props.onChange&&this.props.onChange(e)}},{key:"handleDeselect",value:function(e){this.handleChange(d.default.deselect(this.props,this.state,e)),this.props.onDeselect&&this.props.onDeselect(e)}},{key:"handleSelect",value:function(e,t){var n=[].concat(m(d.default.value(this.props,this.state)),[e]);this.handleChange(n),this.props.onSelect&&this.props.onSelect(e,t)}},{key:"display",value:function(){var e=this;return d.default.value(this.props,this.state).map((function(t){return r.default.createElement(c.default,{value:t,key:t,onDeselect:e.handleDeselect},d.default.valueDisplay(e.props,t))}))}},{key:"render",value:function(){var e=this.props,t=e.children,n=(e.defaultValue,e.onChange,e.placeholder),o=e.required,a=(e.value,e.intl),i=e.inputId,u=v(e,f),s=a.formatMessage({id:"Terra.form.select.defaultDisplay"}),c=void 0===n?s:n;return r.default.createElement(l.default,h({},u,{"data-terra-select":!0,value:d.default.value(this.props,this.state),display:this.display(),onDeselect:this.handleDeselect,onSelect:this.handleSelect,placeholder:c,required:o,totalOptions:d.default.getTotalNumberOfOptions(t),inputId:i}),t)}}])&&b(n.prototype,o),a&&b(n,a),Object.defineProperty(n,"prototype",{writable:!1}),t}(r.default.Component);k.Option=u.default,k.OptGroup=s.default,k.propTypes=C,k.defaultProps=D,k.isSelect=!0;t.default=(0,i.injectIntl)(k)},48810:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=g(n(67294)),a=g(n(45697)),i=g(n(93967)),l=g(n(19845)),u=g(n(50026)),s=n(25387),c=g(n(14461)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}(n(51051)),f=g(n(74861)),p=g(n(48660)),h=g(n(97813)),v=g(n(3913)),m=g(n(44334));n(98394),n(29540),n(44856);var y=["ariaLabel","children","disabled","display","dropdownAttrs","inputId","intl","isIncomplete","isTouchAccessible","isInvalid","maxHeight","maxSelectionCount","noResultContent","onDeselect","onSearch","onSelect","optionFilter","placeholder","required","totalOptions","value"];function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function g(e){return e&&e.__esModule?e:{default:e}}function O(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},w.apply(this,arguments)}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_(o.key),o)}}function _(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:String(t)}function T(e,t,n){return t=D(t),function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}(e,C()?Reflect.construct(t,n||[],D(e).constructor):t.apply(e,n))}function C(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(C=function(){return!!e})()}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}var j=l.default.bind(v.default),M={ariaLabel:a.default.string,children:a.default.node,disabled:a.default.bool,display:a.default.node,dropdownAttrs:a.default.object,inputId:a.default.string,intl:a.default.shape({formatMessage:a.default.func}).isRequired,isIncomplete:a.default.bool,isInvalid:a.default.bool,isTouchAccessible:a.default.bool,maxHeight:a.default.number,maxSelectionCount:a.default.number,noResultContent:a.default.node,onDeselect:a.default.func,onBlur:a.default.func,onClick:a.default.func,onFocus:a.default.func,onSearch:a.default.func,onSelect:a.default.func,optionFilter:a.default.func,placeholder:a.default.string,required:a.default.bool,totalOptions:a.default.number,value:a.default.oneOfType([a.default.string,a.default.number,a.default.array])},x={disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,totalOptions:void 0,value:void 0,inputId:void 0},P=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=T(this,t,[e])).state={focusedByTouch:!1,isOpen:!1,isFocused:!1,isInputFocused:!1,isPositioned:!1,hasSearchChanged:!1,searchValue:""},n.ariaLabel=n.ariaLabel.bind(k(n)),n.setInput=n.setInput.bind(k(n)),n.getDisplay=n.getDisplay.bind(k(n)),n.renderToggleButton=n.renderToggleButton.bind(k(n)),n.renderDescriptionText=n.renderDescriptionText.bind(k(n)),n.openDropdown=n.openDropdown.bind(k(n)),n.closeDropdown=n.closeDropdown.bind(k(n)),n.toggleDropdown=n.toggleDropdown.bind(k(n)),n.positionDropdown=n.positionDropdown.bind(k(n)),n.handleBlur=n.handleBlur.bind(k(n)),n.handleClick=n.handleClick.bind(k(n)),n.handleFocus=n.handleFocus.bind(k(n)),n.handleSelect=n.handleSelect.bind(k(n)),n.handleSearch=n.handleSearch.bind(k(n)),n.handleKeyDown=n.handleKeyDown.bind(k(n)),n.handleInputMouseDown=n.handleInputMouseDown.bind(k(n)),n.handleInputFocus=n.handleInputFocus.bind(k(n)),n.handleInputBlur=n.handleInputBlur.bind(k(n)),n.handleToggleClick=n.handleToggleClick.bind(k(n)),n.handleToggleButtonClick=n.handleToggleButtonClick.bind(k(n)),n.handleTouchStart=n.handleTouchStart.bind(k(n)),n.role=n.role.bind(k(n)),n.menuId="terra-select-menu-".concat((0,c.default)()),n.visuallyHiddenComponent=r.default.createRef(),n.setSelectMenuRef=n.setSelectMenuRef.bind(k(n)),n.shouldFocusDropdown=!1,n}var o,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(t,e),o=t,l=[{key:"handleMouseDown",value:function(e){e.preventDefault()}}],(a=[{key:"componentDidMount",value:function(){Element.prototype.hasOwnProperty("inert")||n(23458)}},{key:"componentDidUpdate",value:function(e,t){h.default.shouldPositionDropdown(t,this.state,this.dropdown)&&(clearTimeout(this.debounceTimer),this.dropdown.setAttribute("inert",""),this.debounceTimer=setTimeout(this.positionDropdown,t.isOpen?100:0))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.debounceTimer)}},{key:"handleBlur",value:function(e){var t=e.relatedTarget||document.activeElement;this.dropdown&&this.dropdown===document.activeElement&&this.dropdown.contains(document.activeElement)||t!==this.input&&t!==this.selectMenu&&(this.setState({isFocused:!1,focusedByTouch:!1}),this.closeDropdown(),this.props.onBlur&&this.props.onBlur(e))}},{key:"handleClick",value:function(e){this.openDropdown(e),this.props.onClick&&this.props.onClick(e)}},{key:"handleFocus",value:function(e){this.props.disabled||(this.props.onFocus&&!this.state.isFocused&&this.props.onFocus(e),this.setState({isFocused:!0}))}},{key:"handleKeyDown",value:function(e){var t=this.props,n=t.children,o=t.intl,r=t.onDeselect,a=t.value,i=e.keyCode,l=e.target;if(i===d.KEY_SPACE&&l!==this.input)e.preventDefault(),this.openDropdown(e);else if(i===d.KEY_UP||i===d.KEY_DOWN)e.preventDefault(),this.openDropdown(e);else if(i===d.KEY_BACK_SPACE&&!this.state.searchValue&&a.length>0){var u=a[a.length-1],s=m.default.findByValue(n,u),c=s?s.props.display:u;this.visuallyHiddenComponent&&this.visuallyHiddenComponent.current&&(this.visuallyHiddenComponent.current.innerText=o.formatMessage({id:"Terra.form.select.unselectedText"},{text:c})),r&&r(u)}else this.state.isOpen&&i===d.KEY_ESCAPE&&(e.stopPropagation(),this.closeDropdown())}},{key:"handleInputMouseDown",value:function(e){e.stopPropagation(),this.openDropdown(e)}},{key:"handleInputFocus",value:function(){this.setState({isInputFocused:!0})}},{key:"handleInputBlur",value:function(){this.setState({isInputFocused:!1})}},{key:"handleToggleClick",value:function(){this.state.isOpen&&this.closeDropdown()}},{key:"handleToggleButtonClick",value:function(){this.state.isOpen&&(this.closeDropdown(),this.input&&this.input.focus())}},{key:"handleTouchStart",value:function(){this.setState({focusedByTouch:!0})}},{key:"handleSearch",value:function(e){var t=e.target.value;this.setState({isOpen:!0,hasSearchChanged:!0,searchValue:t}),this.props.onSearch&&this.props.onSearch(t)}},{key:"handleSelect",value:function(e,t){this.setState({searchValue:"",hasSearchChanged:!1,isOpen:!0}),this.props.onSelect&&this.props.onSelect(e,t)}},{key:"setInput",value:function(e){this.input=e}},{key:"setSelectMenuRef",value:function(e){this.selectMenu=e}},{key:"getDisplay",value:function(e,t,n){var o=this.state,a=o.searchValue,i=o.isFocused,l=this.props,u=l.disabled,c=l.display,d=l.placeholder,f=l.required,p=l.value,h=l.inputId,v=!i&&p&&p.length>0,m={disabled:u,placeholder:d,ref:this.setInput,onChange:this.handleSearch,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,onMouseDown:this.handleInputMouseDown,"aria-label":this.ariaLabel(),"aria-describedby":"".concat(e," ").concat(t),"aria-disabled":u,"aria-owns":this.state.isOpen?n:void 0,type:"text",className:j("search-input",{"is-hidden":v}),required:!(!f||c.length)||void 0,id:h,"aria-required":f&&!c.length};return r.default.createElement("ul",{"data-terra-form-select-input":!0,className:j("content")},c&&c.length>0?r.default.createElement("li",null,r.default.createElement("ul",{id:e,className:j("display-content")},c,r.default.createElement("li",{className:j("visually-hidden-component")},r.default.createElement(s.FormattedMessage,{id:"Terra.form.select.selected"})))):null,r.default.createElement("li",{className:j("search-wrapper")},r.default.createElement("input",w({},m,{value:a}))))}},{key:"toggleDropdown",value:function(e){this.state.isOpen?this.closeDropdown():this.openDropdown(e)}},{key:"closeDropdown",value:function(){this.setState({isAbove:!1,isFocused:document.activeElement===this.input||document.activeElement===this.select,isOpen:!1,isPositioned:!1,hasSearchChanged:!1,searchValue:""})}},{key:"openDropdown",value:function(e){if(this.shouldFocusDropdown=!1,!this.state.isOpen&&!this.props.disabled){if(e&&e.target&&(e.target.hasAttribute("data-terra-form-select-toggle-button")||e.target.hasAttribute("data-terra-form-select-toggle-button-icon")))return this.setState({isOpen:!0,isPositioned:!1}),void(this.shouldFocusDropdown=!0);(e.target.hasAttribute("data-terra-form-select-toggle")||e.target.className.includes("arrow-icon"))&&this.input.focus(),this.input?this.input.focus():h.default.shiftFocusToMenu(this),this.setState({isOpen:!0,isPositioned:!1})}}},{key:"positionDropdown",value:function(){var e=this;if(this.state.isOpen){var t=this.props,n=t.dropdownAttrs,o=t.maxHeight,r=t.isTouchAccessible;this.setState(h.default.dropdownPosition(n,this.select,this.dropdown,o,r),(function(){e.state.isPositioned&&(e.dropdown.removeAttribute("inert"),e.dropdown.removeAttribute("aria-hidden"),e.selectMenu.setAttribute("tabIndex","0"),e.selectMenu&&e.shouldFocusDropdown&&e.selectMenu.focus())}))}}},{key:"ariaLabel",value:function(){var e=this.props,t=e.ariaLabel,n=e.disabled,o=e.intl,r=o.formatMessage({id:"Terra.form.select.ariaLabel"}),a=o.formatMessage({id:"Terra.form.select.dimmed"});return"ontouchstart"in window&&n?void 0===t?"".concat(r," ").concat(a):"".concat(t," ").concat(a):void 0===t?r:t}},{key:"role",value:function(){return this.props.disabled?void 0:"application"}},{key:"renderDescriptionText",value:function(){var e=this.props.intl,t=e.formatMessage({id:"Terra.form.select.listOfTotalOptions"}),n=e.formatMessage({id:"Terra.form.select.mobileUsageGuidance"}),o=e.formatMessage({id:"Terra.form.select.multiSelectUsageGuidance"});return"ontouchstart"in window?this.state.isInputFocused?"".concat(t):"".concat(t," ").concat(n):"".concat(t," ").concat(o)}},{key:"renderToggleButton",value:function(){var e=this.props,t=e.intl,n=e.isInvalid,o=t.formatMessage({id:"Terra.form.select.mobileButtonUsageGuidance"});if("ontouchstart"in window){if(this.state.isInputFocused){var a=j(["toggle",{"is-invalid":n}]);return r.default.createElement("div",{"data-terra-form-select-toggle":!0,className:a,onClick:this.handleToggleClick},r.default.createElement("span",{className:j("arrow-icon")}))}var i=j(["toggle","toggle-narrow",{"is-invalid":n}]);return r.default.createElement("div",{className:i},r.default.createElement("button",{type:"button",className:j("toggle-btn"),"aria-label":o,"data-terra-form-select-toggle-button":!0,onClick:this.handleToggleClick},r.default.createElement("span",{className:j("arrow-icon"),"data-terra-form-select-toggle-button-icon":!0})))}var l=j(["toggle",{"is-invalid":n}]);return r.default.createElement("div",{"data-terra-form-select-toggle":!0,className:l,onClick:this.toggleDropdown},r.default.createElement("span",{className:j("arrow-icon")}))}},{key:"render",value:function(){var e=this,n=this.props,o=(n.ariaLabel,n.children),a=n.disabled,l=(n.display,n.dropdownAttrs),u=(n.inputId,n.intl,n.isIncomplete),s=n.isTouchAccessible,d=n.isInvalid,v=(n.maxHeight,n.maxSelectionCount),m=n.noResultContent,b=n.onDeselect,g=(n.onSearch,n.onSelect,n.optionFilter),S=(n.placeholder,n.required),_=(n.totalOptions,n.value),T=O(n,y),C=this.context,D=(0,i.default)(j(["select","multiple",{"is-above":this.state.isAbove},{"is-disabled":a},{"is-focused":this.state.isFocused},{"is-invalid":d},{"is-incomplete":u&&S&&!d},{"is-open":this.state.isOpen},C.className]),T.className),k="terra-select-screen-reader-label-".concat((0,c.default)()),E="terra-select-screen-reader-display-".concat((0,c.default)()),M="terra-select-screen-reader-description-".concat((0,c.default)()),x=T["aria-describedby"],P=x?"".concat(M," ").concat(x):M,I={id:this.menuId,value:_,onDeselect:b,optionFilter:g,noResultContent:m,visuallyHiddenComponent:this.visuallyHiddenComponent,onSelect:this.handleSelect,onRequestClose:this.closeDropdown,searchValue:this.state.searchValue,input:this.input,select:this.select,maxSelectionCount:v,refCallback:this.setSelectMenuRef};return r.default.createElement("div",w({},T,{role:this.role(),"data-terra-select-combobox":!0,"aria-controls":!a&&this.state.isOpen?this.menuId:void 0,"aria-disabled":!!a,"aria-expanded":!!a&&!!this.state.isOpen,"aria-haspopup":a?void 0:"true","aria-describedby":P,"aria-owns":this.state.isOpen?this.menuId:void 0,className:D,onBlur:this.handleBlur,onClick:this.handleClick,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,onMouseDown:t.handleMouseDown,onTouchStart:this.handleTouchStart,tabIndex:"-1",ref:function(t){e.select=t}}),r.default.createElement("div",{className:j("visually-hidden-component"),hidden:!0},r.default.createElement("span",{id:k},this.ariaLabel()),r.default.createElement("span",{id:M},this.renderDescriptionText())),r.default.createElement("div",{className:j("display")},this.getDisplay(E,P,this.menuId)),this.renderToggleButton(),r.default.createElement("span",{"aria-atomic":"true","aria-live":"assertive","aria-relevant":"additions text",className:j("visually-hidden-component"),ref:this.visuallyHiddenComponent}),this.state.isOpen&&r.default.createElement(f.default,w({},l,{id:this.state.isOpen?"terra-select-dropdown":void 0,target:this.select,isAbove:this.state.isAbove,isTouchAccessible:s,isEnabled:this.state.isPositioned,onResize:this.positionDropdown,refCallback:function(t){e.dropdown=t},style:h.default.dropdownStyle(l,this.state)}),r.default.createElement(p.default,I,o)))}}])&&S(o.prototype,a),l&&S(o,l),Object.defineProperty(o,"prototype",{writable:!1}),t}(r.default.Component);P.propTypes=M,P.defaultProps=x,P.contextType=u.default;t.default=(0,s.injectIntl)(P)},48660:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(67294)),a=m(n(45697)),i=m(n(19845)),l=m(n(50026)),u=n(10752),s=n(25387),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}(n(51051)),d=m(n(50987)),f=m(n(40500)),p=m(n(44334)),h=m(n(28395));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}function m(e){return e&&e.__esModule?e:{default:e}}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},y.apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function g(e,t,n){return(t=w(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,w(o.key),o)}}function w(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:String(t)}function S(e,t,n){return t=T(t),function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}(e,_()?Reflect.construct(t,n||[],T(e).constructor):t.apply(e,n))}function _(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_=function(){return!!e})()}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}var k=i.default.bind(h.default),E={id:a.default.string,children:a.default.node,select:a.default.instanceOf(Element),intl:a.default.shape({formatMessage:a.default.func}).isRequired,input:a.default.instanceOf(Element),maxSelectionCount:a.default.number,noResultContent:a.default.node,onDeselect:a.default.func,onSelect:a.default.func.isRequired,optionFilter:a.default.func,searchValue:a.default.string,value:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),visuallyHiddenComponent:a.default.shape({current:a.default.instanceOf(Element)}),refCallback:a.default.func},j={id:void 0,children:void 0,input:void 0,maxSelectionCount:void 0,noResultContent:void 0,onDeselect:void 0,optionFilter:void 0,searchValue:void 0,select:void 0,visuallyHiddenComponent:void 0,value:void 0,refCallback:void 0},M=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=S(this,t,[e])).state={},n.clearScrollTimeout=n.clearScrollTimeout.bind(C(n)),n.handleKeyDown=n.handleKeyDown.bind(C(n)),n.handleMouseEnter=n.handleMouseEnter.bind(C(n)),n.handleOptionClick=n.handleOptionClick.bind(C(n)),n.scrollIntoView=n.scrollIntoView.bind(C(n)),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(t,e),n=t,o=[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.scrollIntoView(),"ontouchstart"in window||this.updateCurrentActiveScreenReader()}},{key:"componentDidUpdate",value:function(){this.updateNoResultsScreenReader(),this.updateCurrentActiveScreenReader()}},{key:"componentWillUnmount",value:function(){this.clearScrollTimeout(),this.state.closedViaKeyEvent&&this.props.input&&this.props.input.focus(),document.removeEventListener("keydown",this.handleKeyDown)}},{key:"handleKeyDown",value:function(e){var t=e.keyCode,n=this.state,o=n.active,r=n.children,a=this.props,i=a.intl,l=a.onSelect,u=a.onDeselect,s=a.value,d=a.visuallyHiddenComponent,f=p.default.flatten(this.state.children,!0),h=f.length,v=p.default.getIndex(f,this.state.active);if(t===c.KEY_UP)this.clearScrollTimeout(),this.scrollTimeout=setTimeout(this.clearScrollTimeout,500),this.setState({active:p.default.findPrevious(r,o)},this.scrollIntoView),this.updateCurrentActiveScreenReader();else if(t===c.KEY_DOWN)this.clearScrollTimeout(),this.scrollTimeout=setTimeout(this.clearScrollTimeout,500),this.setState({active:p.default.findNext(r,o)},this.scrollIntoView),this.updateCurrentActiveScreenReader();else if(t!==c.KEY_RETURN||null===o||p.default.includes(s,o))if(t===c.KEY_RETURN&&null!==o&&p.default.includes(s,o)){e.preventDefault();var m=p.default.findByValue(r,o);d&&d.current&&(d.current.innerHTML=i.formatMessage({id:"Terra.form.select.unselectedText"},{text:m.props.display})),u&&u(m.props.value,m)}else t===c.KEY_HOME?(e.preventDefault(),this.setState({active:p.default.findFirst(r)})):t===c.KEY_END&&(e.preventDefault(),this.setState({active:p.default.findLast(r)}));else{e.preventDefault();var y=p.default.findByValue(r,o);d&&d.current&&(d.current.innerHTML=i.formatMessage({id:"Terra.form.select.selectedText"},{text:y.props.display,index:v,totalOptions:h})),l&&l(y.props.value,y)}}},{key:"handleOptionClick",value:function(e,t){if(!t.props.disabled&&t===this.downOption){var n=p.default.flatten(this.state.children,!0),o=n.length,r=p.default.getIndex(n,this.state.active),a=this.props,i=a.input,l=a.onDeselect,u=a.onSelect,s=a.value,c=a.intl,d=a.visuallyHiddenComponent,f=p.default.includes(s,t.props.value),h=f?c.formatMessage({id:"Terra.form.select.unselectedText"},{text:t.props.display}):c.formatMessage({id:"Terra.form.select.selectedText"},{text:t.props.display,index:r,totalOptions:o});d&&d.current&&(d.current.innerHTML=h),f?l&&l(t.props.value,t):(u&&u(t.props.value,t),i&&i.focus())}}},{key:"handleMouseEnter",value:function(e,t){this.scrollTimeout||(t.props.disabled||this.setState({active:t.props.value}),t.props.onMouseEnter&&t.props.onMouseEnter(e))}},{key:"isActiveSelected",value:function(){return this.props.value.includes(this.state.active)}},{key:"updateNoResultsScreenReader",value:function(){var e=this;this.liveRegionTimeOut&&clearTimeout(this.liveRegionTimeOut),this.liveRegionTimeOut=setTimeout((function(){var t=e.state,n=t.hasMaxSelection,o=t.hasNoResults,r=e.props,a=r.intl,i=r.visuallyHiddenComponent,l=r.searchValue;i&&i.current&&(i.current.innerText=o?a.formatMessage({id:"Terra.form.select.noResults"},{text:l}):n?a.formatMessage({id:"Terra.form.select.maxSelectionOption"},{text:e.props.maxSelectionCount}):"")}),1e3)}},{key:"updateCurrentActiveScreenReader",value:function(){var e=this.props,t=e.intl,n=e.visuallyHiddenComponent,o=p.default.flatten(this.state.children,!0),r=o.length,a=t.formatMessage({id:"Terra.form.select.clearSelect"});if(null!==this.menu&&null!==this.state.active&&this.menu.setAttribute("aria-activedescendant","terra-select-option-".concat(this.state.active)),n&&n.current){var i,l=p.default.getOptGroupElement(this.props.children,this.state.active),u=p.default.findByValue(this.props.children,this.state.active);if(l?i=t.formatMessage({id:"Terra.form.select.optGroup"},{text:"".concat(l.props.label,", ").concat(u.props.display)}):u&&(i=u.props.display),u){var s=p.default.getIndex(o,this.state.active);""===u.props.display&&""===u.props.value?n.current.innerText=a:this.isActiveSelected()?n.current.innerText=t.formatMessage({id:"Terra.form.select.selectedText"},{text:i,index:s,totalOptions:r}):n.current.innerText=t.formatMessage({id:"Terra.form.select.activeOption"},{text:i,index:s,totalOptions:r})}}}},{key:"clearScrollTimeout",value:function(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null}},{key:"clone",value:function(e){var t=this;return r.default.Children.map(e,(function(e){return e.type.isOption?r.default.cloneElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:"terra-select-option-".concat(e.props.value),isActive:e.props.value===t.state.active,isCheckable:!0,isSelected:p.default.isSelected(t.props.value,e.props.value),variant:"multiple",onMouseDown:function(){t.downOption=e},onMouseUp:function(n){return t.handleOptionClick(n,e)},onMouseEnter:function(n){return t.handleMouseEnter(n,e)}},e.props.value===t.state.active&&{"data-select-active":!0})):e.type.isOptGroup?r.default.cloneElement(e,{},t.clone(e.props.children)):e}))}},{key:"scrollIntoView",value:function(){var e=this.menu.querySelector("[data-select-active]");if(this.state.active&&null!==e){var t=this.menu.parentNode.getBoundingClientRect(),n=e.getBoundingClientRect();n.top<t.top?this.menu.parentNode.scrollTop=e.offsetTop:n.bottom>t.bottom&&(this.menu.parentNode.scrollTop=e.offsetTop-t.height+n.height)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,o=t.intl,a=t.refCallback,i=this.context;return r.default.createElement("ul",y({id:n,role:"listbox",className:k("menu",i.className),"aria-label":o.formatMessage({id:"Terra.form.select.menu"}),ref:function(t){a&&a(t),e.menu=t}},null!==this.state.active?{"aria-activedescendant":"terra-select-option-".concat(this.state.active)}:{},{tabIndex:"0"}),this.clone(this.state.children))}}],a=[{key:"isMaxSelectionReached",value:function(e){var t=e.maxSelectionCount,n=e.value;return!!(void 0!==t&&n&&n.length>=t)}},{key:"getActiveOptionFromProps",value:function(e,t,n){var o=n.active,r=(e.searchValue,e.value),a=p.default.flatten(t,!0);if(0===a.length)return null;if(null!==o&&p.default.findByValue(a,o))return o;if(void 0===n.searchValue){var i=a.find((function(e){return p.default.includes(r,e.props.value)}));return void 0===i?a[0].props.value:i.props.value}return n.searchValue,a[0].props.value}},{key:"updateSelectionState",value:function(e,n){var o=t.isMaxSelectionReached(n);return r.default.Children.map(e,(function(e){return e.type.isOption?r.default.cloneElement(e,{disabled:e.props.disabled||o&&!p.default.isSelected(n.value,e.props.value)}):e.type.isOptGroup?r.default.cloneElement(e,{},t.updateSelectionState(e.props.children,n)):e}))}},{key:"getDerivedStateFromProps",value:function(e,n){var o,a=e.maxSelectionCount,i=e.searchValue,l=e.noResultContent,u=!1,s=!1;return i&&i.length>0&&t.isMaxSelectionReached(e)?(o=[r.default.createElement(d.default,{value:a})],s=!0):(o=p.default.filter(e.children,e.searchValue,e.optionFilter),(o=t.updateSelectionState(o,e)).length||(o.push(r.default.createElement(f.default,{noResultContent:l,value:i})),u=!0)),{children:o,searchValue:i,hasMaxSelection:s,hasNoResults:u,active:t.getActiveOptionFromProps(e,o,n)}}}],o&&O(n.prototype,o),a&&O(n,a),Object.defineProperty(n,"prototype",{writable:!1}),t}(r.default.Component);M.propTypes=E,M.defaultProps=j,M.contextType=l.default,(0,u.polyfill)(M);t.default=(0,s.injectIntl)(M)},50987:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(67294)),r=s(n(45697)),a=n(25387),i=s(n(19845)),l=s(n(50026)),u=s(n(6699));function s(e){return e&&e.__esModule?e:{default:e}}var c=i.default.bind(u.default),d={value:r.default.oneOfType([r.default.number,r.default.string])},f=function(e){var t=e.value,n=o.default.useContext(l.default);return o.default.createElement("div",{className:c("max-selection",n.className)},o.default.createElement(a.FormattedMessage,{id:"Terra.form.select.maxSelectionOption",values:{text:t}}))};f.propTypes=d;t.default=f},40500:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(67294)),r=s(n(45697)),a=s(n(19845)),i=s(n(50026)),l=n(25387),u=s(n(45981));function s(e){return e&&e.__esModule?e:{default:e}}var c=a.default.bind(u.default),d={noResultContent:r.default.node,value:r.default.oneOfType([r.default.number,r.default.string])},f=function(e){var t=e.noResultContent,n=e.value,r=o.default.useContext(i.default);return o.default.createElement("div",{role:"option",className:c("no-results",r.className),"aria-selected":"false"},t||o.default.createElement(l.FormattedMessage,{id:"Terra.form.select.noResults",values:{text:n}}))};f.propTypes=d;t.default=f},17572:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(67294)),r=u(n(45697)),a=u(n(19845)),i=u(n(50026)),l=u(n(23728));function u(e){return e&&e.__esModule?e:{default:e}}var s=a.default.bind(l.default),c={children:r.default.node.isRequired,onDeselect:r.default.func.isRequired,value:r.default.oneOfType([r.default.string,r.default.number]).isRequired},d=function(e){var t=e.children,n=e.onDeselect,r=e.value,a=o.default.useContext(i.default);return o.default.createElement("li",{className:s("tag",a.className)},o.default.createElement("span",{className:s("display")},t),o.default.createElement("span",{className:s("deselect"),onClick:function(){n(r)},role:"presentation"},o.default.createElement("span",{className:s("icon")})))};d.propTypes=c;t.default=d},6699:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_MaxSelection-module__clinical-lowlight-theme___Q9M6W","orion-fusion-theme":"_MaxSelection-module__orion-fusion-theme___qe7S4","max-selection":"_MaxSelection-module__max-selection___oDtiJ"}},45981:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_NoResults-module__clinical-lowlight-theme___-XlVf","orion-fusion-theme":"_NoResults-module__orion-fusion-theme___tnsoS","no-results":"_NoResults-module__no-results___u1T4I"}},23728:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_Tag-module__clinical-lowlight-theme___-m+je","orion-fusion-theme":"_Tag-module__orion-fusion-theme___Dk14i",tag:"_Tag-module__tag___gp7HT",display:"_Tag-module__display___2-rd4",deselect:"_Tag-module__deselect___-yUlo",icon:"_Tag-module__icon___O74EY"}}}]);