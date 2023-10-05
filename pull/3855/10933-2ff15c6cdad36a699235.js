"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[10933],{60672:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,t){if(t&&e)return{messageId:"Terra.paginator.pageCountWithLabel",messageAttributes:{pageLabel:e,pageNumber:a,pageNumberTotal:t}};if(t)return{messageId:"Terra.paginator.pageCount",messageAttributes:{pageNumber:a,pageNumberTotal:t}};if(e)return{messageId:"Terra.paginator.pageIndexWithLabel",messageAttributes:{pageLabel:e,pageNumber:a}};return{messageId:"Terra.paginator.pageIndex",messageAttributes:{pageNumber:a}}}},10933:function(e,a,t){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=h(t(67294)),l=h(t(45697)),i=h(t(47166)),o=h(t(50026)),s=t(25387),u=h(t(13266)),d=h(t(74754)),f=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=b(a);if(t&&t.has(e))return t.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=l?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(t(51051)),c=h(t(80646)),g=t(86545),p=h(t(37980)),m=h(t(60672));function b(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,t=new WeakMap;return(b=function(e){return e?t:a})(e)}function h(e){return e&&e.__esModule?e:{default:e}}function P(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(l=n.key,i=void 0,i=function(e,a){if("object"!==r(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,a||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(l,"string"),"symbol"===r(i)?i:String(i)),n)}var l,i}function v(e,a){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e},v(e,a)}function y(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=E(e);if(a){var l=E(this).constructor;t=Reflect.construct(n,arguments,l)}else t=n.apply(this,arguments);return function(e,a){if(a&&("object"===r(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}(this,t)}}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var w=i.default.bind(c.default),M={onPageChange:l.default.func.isRequired,selectedPage:l.default.number,totalCount:l.default.number,itemCountPerPage:l.default.number,ariaLabelledBy:l.default.string,ariaLabel:l.default.string,intl:l.default.shape({formatMessage:l.default.func}).isRequired,pageLabel:l.default.string,hidePageCount:l.default.bool},T=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&v(e,a)}(i,e);var a,t,r,l=y(i);function i(e){var a;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,i);var t=(a=l.call(this,e)).props.selectedPage;return a.state={selectedPage:t||1,showReducedPaginator:!1,selectedPageMessage:""},a.handlePageChange=a.handlePageChange.bind(C(a)),a.defaultProgressivePaginator=a.defaultProgressivePaginator.bind(C(a)),a.reducedProgressivePaginator=a.reducedProgressivePaginator.bind(C(a)),a.setPaginator=a.setPaginator.bind(C(a)),a}return a=i,(t=[{key:"handlePageChange",value:function(e){var a=this,t=this.props,r=t.intl,n=t.itemCountPerPage,l=t.totalCount;return function(t){var i;t.nativeEvent.keyCode!==f.KEY_RETURN&&t.nativeEvent.keyCode!==f.KEY_SPACE||t.preventDefault(),a.props.onPageChange(e),i=l&&n?r.formatMessage({id:"Terra.paginator.pageSelectedWithCount"},{pageNumber:e,pageNumberTotal:(0,g.calculatePages)(l,n)}):r.formatMessage({id:"Terra.paginator.pageSelected"},{pageNumber:e}),a.setState({selectedPage:e,selectedPageMessage:i})}}},{key:"setPaginator",value:function(e){var a="tiny"===e;this.state.showReducedPaginator!==a&&this.setState({showReducedPaginator:a})}},{key:"defaultProgressivePaginator",value:function(){var e=this.context,a=this.props,t=a.intl,r=a.totalCount,l=a.itemCountPerPage,i=a.ariaLabelledBy,o=a.ariaLabel,s=a.pageLabel,u=a.hidePageCount,f=r?(0,g.calculatePages)(r,l):0,c=this.state.selectedPage,b=1===c?1:c-1,h=c===f?f:c+1,P=o||"pagination",v=r>0,y=(0,m.default)(s,c,f),C=y.messageId,E=y.messageAttributes,M=u&&s?n.default.createElement("div",null,s):n.default.createElement("div",null,t.formatMessage({id:C},E)),T=n.default.createElement(n.default.Fragment,null,M,n.default.createElement("ul",{className:w("progressive-list")},v&&n.default.createElement("li",null,n.default.createElement(p.default,{ariaDisabled:1===c,ariaLabel:t.formatMessage({id:"Terra.paginator.first"}),className:w(["nav-link",1===c?"is-disabled":null]),disabled:1===c,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},t.formatMessage({id:"Terra.paginator.first"}))),n.default.createElement("li",null,n.default.createElement(p.default,{ariaDisabled:1===c,ariaLabel:t.formatMessage({id:"Terra.paginator.previous"}),className:w(["nav-link","previous",1===c?"is-disabled":null]),disabled:1===c,onClick:this.handlePageChange(b),onKeyDown:this.handlePageChange(b)},n.default.createElement("span",{className:w("icon")}),t.formatMessage({id:"Terra.paginator.previous"}))),n.default.createElement("li",null,n.default.createElement(p.default,{ariaDisabled:c===f,ariaLabel:t.formatMessage({id:"Terra.paginator.next"}),className:w(["nav-link","next",c===f?"is-disabled":null]),disabled:c===f,onClick:this.handlePageChange(h),onKeyDown:this.handlePageChange(h)},t.formatMessage({id:"Terra.paginator.next"}),n.default.createElement("span",{className:w("icon")}))),v&&n.default.createElement("li",null,n.default.createElement(p.default,{ariaDisabled:c===f,ariaLabel:t.formatMessage({id:"Terra.paginator.last"}),className:w(["nav-link",c===f?"is-disabled":null]),disabled:c===f,onClick:this.handlePageChange(f),onKeyDown:this.handlePageChange(f)},t.formatMessage({id:"Terra.paginator.last"}))))),k=n.default.createElement(d.default,{"aria-live":"polite","aria-relevant":"all",text:this.state.selectedPageMessage});return n.default.createElement("nav",{className:w("paginator","progressive",e.className),"aria-labelledby":i,"aria-label":i?void 0:P},k,T)}},{key:"reducedProgressivePaginator",value:function(){var e=this.context,a=this.props,t=a.intl,r=a.totalCount,l=a.itemCountPerPage,i=a.ariaLabelledBy,o=a.ariaLabel,s=a.pageLabel,u=a.hidePageCount,f=r?(0,g.calculatePages)(r,l):0,c=this.state.selectedPage,b=1===c?1:c-1,h=c===f?f:c+1,P=o||"pagination",v=r>0,y=(0,m.default)(s,c,f),C=y.messageId,E=y.messageAttributes,M=u&&s?n.default.createElement("div",null,s):n.default.createElement("div",null,t.formatMessage({id:C},E)),T=n.default.createElement(n.default.Fragment,null,M,n.default.createElement("ul",{className:w("progressive-list")},v&&n.default.createElement("li",null,n.default.createElement(p.default,{ariaDisabled:1===c,ariaLabel:t.formatMessage({id:"Terra.paginator.first"}),className:w(["nav-link",1===c?"is-disabled":null]),disabled:1===c,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},t.formatMessage({id:"Terra.paginator.first"}))),n.default.createElement("li",null,n.default.createElement(p.default,{ariaDisabled:1===c,ariaLabel:t.formatMessage({id:"Terra.paginator.previous"}),className:w(["nav-link","previous","icon-only",1===c?"is-disabled":null]),disabled:1===c,onClick:this.handlePageChange(b),onKeyDown:this.handlePageChange(b)},n.default.createElement(d.default,{text:t.formatMessage({id:"Terra.paginator.previous"})}),n.default.createElement("span",{className:w("icon")}))),n.default.createElement("li",null,n.default.createElement(p.default,{ariaDisabled:c===f,ariaLabel:t.formatMessage({id:"Terra.paginator.next"}),className:w(["nav-link","next","icon-only",c===f?"is-disabled":null]),disabled:c===f,onClick:this.handlePageChange(h),onKeyDown:this.handlePageChange(h)},n.default.createElement(d.default,{text:t.formatMessage({id:"Terra.paginator.next"})}),n.default.createElement("span",{className:w("icon")}))),v&&n.default.createElement("li",null,n.default.createElement(p.default,{ariaDisabled:c===f,ariaLabel:t.formatMessage({id:"Terra.paginator.last"}),className:w(["nav-link",c===f?"is-disabled":null]),disabled:c===f,onClick:this.handlePageChange(f),onKeyDown:this.handlePageChange(f)},t.formatMessage({id:"Terra.paginator.last"}))))),k=n.default.createElement(d.default,{"aria-live":"polite","aria-relevant":"all",text:this.state.selectedPageMessage});return n.default.createElement("nav",{className:w("paginator","progressive",e.className),"aria-labelledby":i,"aria-label":i?void 0:P},k,T)}},{key:"render",value:function(){return n.default.createElement(u.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedProgressivePaginator():this.defaultProgressivePaginator())}}])&&P(a.prototype,t),r&&P(a,r),Object.defineProperty(a,"prototype",{writable:!1}),i}(n.default.Component);T.propTypes=M,T.contextType=o.default;a.default=(0,s.injectIntl)(T)}}]);