"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[84356],{84356:function(e,a,t){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=h(t(67294)),l=h(t(45697)),i=h(t(47166)),o=h(t(50026)),s=t(25387),u=h(t(13266)),d=h(t(74754)),c=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=b(a);if(t&&t.has(e))return t.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=l?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(t(51051)),f=h(t(80646)),g=t(86545),p=h(t(37980));function b(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,t=new WeakMap;return(b=function(e){return e?t:a})(e)}function h(e){return e&&e.__esModule?e:{default:e}}function m(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(l=r.key,i=void 0,i=function(e,a){if("object"!==n(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(l,"string"),"symbol"===n(i)?i:String(i)),r)}var l,i}function P(e,a){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e},P(e,a)}function y(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=C(e);if(a){var l=C(this).constructor;t=Reflect.construct(r,arguments,l)}else t=r.apply(this,arguments);return function(e,a){if(a&&("object"===n(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(this,t)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var E=i.default.bind(f.default),k={onPageChange:l.default.func.isRequired,selectedPage:l.default.number.isRequired,totalCount:l.default.number,itemCountPerPage:l.default.number,ariaLabelledBy:l.default.string,ariaLabel:l.default.string,intl:l.default.shape({formatMessage:l.default.func}).isRequired},w=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&P(e,a)}(i,e);var a,t,n,l=y(i);function i(e){var a;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,i),(a=l.call(this,e)).handlePageChange=a.handlePageChange.bind(v(a)),a.buildPageButtons=a.buildPageButtons.bind(v(a)),a.reducedPaginator=a.reducedPaginator.bind(v(a)),a.setPaginator=a.setPaginator.bind(v(a)),a.state={showReducedPaginator:!1,selectedPageMessage:""},a}return a=i,(t=[{key:"handlePageChange",value:function(e){var a=this,t=this.props,n=t.intl,r=t.itemCountPerPage,l=t.totalCount;return function(t){return t.nativeEvent.keyCode!==c.KEY_RETURN&&t.nativeEvent.keyCode!==c.KEY_SPACE||t.preventDefault(),Number.isNaN(Number(e))?(a.props.onPageChange(t.currentTarget.attributes["aria-label"].value),!1):(i=l&&r?n.formatMessage({id:"Terra.paginator.pageSelectedWithCount"},{pageNumber:e,pageNumberTotal:(0,g.calculatePages)(l,r)}):n.formatMessage({id:"Terra.paginator.pageSelected"},{pageNumber:e}),a.props.onPageChange(e),a.setState({selectedPageMessage:i}),!1);var i}}},{key:"setPaginator",value:function(e){var a="tiny"===e;this.state.showReducedPaginator!==a&&this.setState({showReducedPaginator:a})}},{key:"buildPageButtons",value:function(e,a){var t=this.props,n=t.intl,l=t.itemCountPerPage,i=t.selectedPage,o=t.totalCount,s=(0,g.pageSet)(i,(0,g.calculatePages)(o,l)),u=[];return s.forEach((function(t){var l=E(["nav-link",t===i?"is-selected":null]);t>e||u.push(r.default.createElement("li",null,r.default.createElement(p.default,{ariaLabel:n.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:t}),ariaCurrent:t===i,className:l,key:"pageButton_".concat(t),onClick:a(t),onKeyDown:a(t),tabIndex:t===i?"-1":"0"},t)))})),u}},{key:"defaultPaginator",value:function(){var e=this.context,a=this.props,t=a.selectedPage,n=a.intl,l=a.totalCount,i=a.itemCountPerPage,o=a.ariaLabelledBy,s=a.ariaLabel,u=(0,g.calculatePages)(l,i),c=1===t?1:t-1,f=t===u?u:t+1,b=s||"pagination",h=l>0,m=r.default.createElement("ul",{className:E("list")},h&&r.default.createElement("li",null,r.default.createElement(p.default,{ariaDisabled:1===t,ariaLabel:n.formatMessage({id:"Terra.paginator.first"}),className:E(["nav-link","left-controls",1===t&&"is-disabled"]),disabled:1===t,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},n.formatMessage({id:"Terra.paginator.first"}))),r.default.createElement("li",null,r.default.createElement(p.default,{ariaDisabled:1===t,ariaLabel:n.formatMessage({id:"Terra.paginator.previous"}),className:E(["nav-link","left-controls","previous",1===t&&"is-disabled"]),disabled:1===t,onClick:this.handlePageChange(c),onKeyDown:this.handlePageChange(c)},r.default.createElement("span",{className:E("icon")}),n.formatMessage({id:"Terra.paginator.previous"}))),l&&this.buildPageButtons(u,this.handlePageChange),r.default.createElement("li",null,r.default.createElement(p.default,{ariaDisabled:t===u,ariaLabel:n.formatMessage({id:"Terra.paginator.next"}),className:E(["nav-link","right-controls","next",t===u&&"is-disabled"]),disabled:t===u,onClick:this.handlePageChange(f),onKeyDown:this.handlePageChange(f)},n.formatMessage({id:"Terra.paginator.next"}),r.default.createElement("span",{className:E("icon")}))),h&&r.default.createElement("li",null,r.default.createElement(p.default,{ariaDisabled:t===u,ariaLabel:n.formatMessage({id:"Terra.paginator.last"}),className:E(["nav-link","right-controls",t===u&&"is-disabled"]),disabled:t===u,onClick:this.handlePageChange(u),onKeyDown:this.handlePageChange(u)},n.formatMessage({id:"Terra.paginator.last"})))),P=r.default.createElement(d.default,{"aria-live":"polite","aria-relevant":"all",text:this.state.selectedPageMessage});return r.default.createElement("nav",{className:E("paginator",!l&&"pageless",e.className),"aria-labelledby":o,"aria-label":o?void 0:b},P,m)}},{key:"reducedPaginator",value:function(){var e=this.context,a=this.props,t=a.selectedPage,n=a.intl,l=a.totalCount,i=a.itemCountPerPage,o=a.ariaLabelledBy,s=a.ariaLabel,u=(0,g.calculatePages)(l,i),c=1===t?1:t-1,f=t===u?u:t+1,b=s||"pagination",h=l>0,m=r.default.createElement(r.default.Fragment,null,r.default.createElement("div",null,l&&n.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:t})),r.default.createElement("ul",{className:E("list")},h&&r.default.createElement("li",null,r.default.createElement(p.default,{ariaDisabled:1===t,ariaLabel:n.formatMessage({id:"Terra.paginator.first"}),className:E(["nav-link","left-controls",1===t&&"is-disabled"]),disabled:1===t,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},n.formatMessage({id:"Terra.paginator.first"}))),r.default.createElement("li",null,r.default.createElement(p.default,{ariaDisabled:1===t,ariaLabel:n.formatMessage({id:"Terra.paginator.previous"}),className:E(["nav-link","left-controls","previous",1===t&&"is-disabled"]),disabled:1===t,onClick:this.handlePageChange(c),onKeyDown:this.handlePageChange(c)},r.default.createElement("span",{className:E("icon")}),n.formatMessage({id:"Terra.paginator.previous"}))),r.default.createElement("li",null,r.default.createElement(p.default,{ariaDisabled:t===u,ariaLabel:n.formatMessage({id:"Terra.paginator.next"}),className:E(["nav-link","right-controls","next","icon-only",t===u&&"is-disabled"]),disabled:t===u,onClick:this.handlePageChange(f),onKeyDown:this.handlePageChange(f)},r.default.createElement(d.default,{text:n.formatMessage({id:"Terra.paginator.next"})}),r.default.createElement("span",{className:E("icon")}))),h&&r.default.createElement("li",null,r.default.createElement(p.default,{ariaDisabled:t===u,ariaLabel:n.formatMessage({id:"Terra.paginator.last"}),className:E(["nav-link","right-controls",t===u&&"is-disabled"]),disabled:t===u,onClick:this.handlePageChange(u),onKeyDown:this.handlePageChange(u)},n.formatMessage({id:"Terra.paginator.last"}))))),P=r.default.createElement(d.default,{"aria-live":"polite","aria-relevant":"all",text:this.state.selectedPageMessage});return r.default.createElement("nav",{className:E("paginator",e.className),"aria-labelledby":o,"aria-label":o?void 0:b},P,m)}},{key:"render",value:function(){return r.default.createElement(u.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedPaginator():this.defaultPaginator())}}])&&m(a.prototype,t),n&&m(a,n),Object.defineProperty(a,"prototype",{writable:!1}),i}(r.default.Component);w.propTypes=k,w.contextType=o.default;a.default=(0,s.injectIntl)(w)}}]);