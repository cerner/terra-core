"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[94565],{94565:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(67294)),r=i(t(10933));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){return n.default.createElement(r.default,{onPageChange:function(e){return console.log(e)},selectedPage:1,totalCount:2234,itemCountPerPage:20})};a.default=o},60672:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,t){if(t&&e)return{messageId:"Terra.paginator.pageCountWithLabel",messageAttributes:{pageLabel:e,pageNumber:a,pageNumberTotal:t}};if(t)return{messageId:"Terra.paginator.pageCount",messageAttributes:{pageNumber:a,pageNumberTotal:t}};if(e)return{messageId:"Terra.paginator.pageIndexWithLabel",messageAttributes:{pageLabel:e,pageNumber:a}};return{messageId:"Terra.paginator.pageIndex",messageAttributes:{pageNumber:a}}}},10933:function(e,a,t){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=h(t(67294)),i=h(t(45697)),o=h(t(47166)),l=h(t(50026)),s=t(25387),u=h(t(13266)),d=h(t(74754)),f=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=m(a);if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(t(51051)),c=h(t(80646)),g=t(86545),p=h(t(37980)),b=h(t(60672));function m(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,t=new WeakMap;return(m=function(e){return e?t:a})(e)}function h(e){return e&&e.__esModule?e:{default:e}}function v(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,o=function(e,a){if("object"!==n(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(i,"string"),"symbol"===n(o)?o:String(o)),r)}var i,o}function P(e,a){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e},P(e,a)}function y(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=E(e);if(a){var i=E(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return function(e,a){if(a&&("object"===n(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}(this,t)}}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var w=o.default.bind(c.default),k={onPageChange:i.default.func.isRequired,selectedPage:i.default.number,totalCount:i.default.number,itemCountPerPage:i.default.number,intl:i.default.shape({formatMessage:i.default.func}).isRequired,pageLabel:i.default.string},T=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&P(e,a)}(o,e);var a,t,n,i=y(o);function o(e){var a;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o);var t=(a=i.call(this,e)).props.selectedPage;return a.state={selectedPage:t||1,showReducedPaginator:!1},a.handlePageChange=a.handlePageChange.bind(C(a)),a.defaultProgressivePaginator=a.defaultProgressivePaginator.bind(C(a)),a.reducedProgressivePaginator=a.reducedProgressivePaginator.bind(C(a)),a.setPaginator=a.setPaginator.bind(C(a)),a}return a=o,(t=[{key:"handlePageChange",value:function(e){var a=this;return function(t){t.nativeEvent.keyCode!==f.KEY_RETURN&&t.nativeEvent.keyCode!==f.KEY_SPACE||t.preventDefault(),a.props.onPageChange(e),a.setState({selectedPage:e})}}},{key:"setPaginator",value:function(e){var a="tiny"===e;this.state.showReducedPaginator!==a&&this.setState({showReducedPaginator:a})}},{key:"defaultProgressivePaginator",value:function(){var e=this.context,a=this.props,t=a.intl,n=a.totalCount,i=a.itemCountPerPage,o=a.pageLabel,l=n?(0,g.calculatePages)(n,i):0,s=this.state.selectedPage,u=1===s?1:s-1,d=s===l?l:s+1,f=(0,b.default)(o,s,l),c=f.messageId,m=f.messageAttributes;return r.default.createElement("div",{className:w("paginator","progressive",e.className),role:"navigation","aria-label":"pagination"},r.default.createElement("div",null,t.formatMessage({id:c},m)),r.default.createElement("div",null,n&&r.default.createElement(p.default,{ariaDisabled:1===s,ariaLabel:t.formatMessage({id:"Terra.paginator.first"}),className:w(["nav-link",1===s?"is-disabled":null]),disabled:1===s,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},t.formatMessage({id:"Terra.paginator.first"})),r.default.createElement(p.default,{ariaDisabled:1===s,ariaLabel:t.formatMessage({id:"Terra.paginator.previous"}),className:w(["nav-link","previous",1===s?"is-disabled":null]),disabled:1===s,onClick:this.handlePageChange(u),onKeyDown:this.handlePageChange(u)},r.default.createElement("span",{className:w("icon")}),t.formatMessage({id:"Terra.paginator.previous"})),r.default.createElement(p.default,{ariaDisabled:s===l,ariaLabel:t.formatMessage({id:"Terra.paginator.next"}),className:w(["nav-link","next",s===l?"is-disabled":null]),disabled:s===l,onClick:this.handlePageChange(d),onKeyDown:this.handlePageChange(d)},t.formatMessage({id:"Terra.paginator.next"}),r.default.createElement("span",{className:w("icon")})),n&&r.default.createElement(p.default,{ariaDisabled:s===l,ariaLabel:t.formatMessage({id:"Terra.paginator.last"}),className:w(["nav-link",s===l?"is-disabled":null]),disabled:s===l,onClick:this.handlePageChange(l),onKeyDown:this.handlePageChange(l)},t.formatMessage({id:"Terra.paginator.last"}))))}},{key:"reducedProgressivePaginator",value:function(){var e=this.context,a=this.props,t=a.intl,n=a.totalCount,i=a.itemCountPerPage,o=a.pageLabel,l=n?(0,g.calculatePages)(n,i):0,s=this.state.selectedPage,u=1===s?1:s-1,f=s===l?l:s+1,c=(0,b.default)(o,s,l),m=c.messageId,h=c.messageAttributes;return r.default.createElement("div",{className:w("paginator",e.className),role:"navigation","aria-label":"pagination"},r.default.createElement("div",null,n&&r.default.createElement(p.default,{ariaDisabled:1===s,ariaLabel:t.formatMessage({id:"Terra.paginator.first"}),className:w(["nav-link",1===s?"is-disabled":null]),disabled:1===s,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},t.formatMessage({id:"Terra.paginator.first"})),r.default.createElement(p.default,{ariaDisabled:1===s,ariaLabel:t.formatMessage({id:"Terra.paginator.previous"}),className:w(["nav-link","previous","icon-only",1===s?"is-disabled":null]),disabled:1===s,onClick:this.handlePageChange(u),onKeyDown:this.handlePageChange(u)},r.default.createElement(d.default,{text:t.formatMessage({id:"Terra.paginator.previous"})}),r.default.createElement("span",{className:w("icon")}))),r.default.createElement("div",null,t.formatMessage({id:m},h)),r.default.createElement("div",null,r.default.createElement(p.default,{ariaDisabled:s===l,ariaLabel:t.formatMessage({id:"Terra.paginator.next"}),className:w(["nav-link","next","icon-only",s===l?"is-disabled":null]),disabled:s===l,onClick:this.handlePageChange(f),onKeyDown:this.handlePageChange(f)},r.default.createElement(d.default,{text:t.formatMessage({id:"Terra.paginator.next"})}),r.default.createElement("span",{className:w("icon")})),n&&r.default.createElement(p.default,{ariaDisabled:s===l,ariaLabel:t.formatMessage({id:"Terra.paginator.last"}),className:w(["nav-link",s===l?"is-disabled":null]),disabled:s===l,onClick:this.handlePageChange(l),onKeyDown:this.handlePageChange(l)},t.formatMessage({id:"Terra.paginator.last"}))))}},{key:"render",value:function(){return r.default.createElement(u.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedProgressivePaginator():this.defaultProgressivePaginator())}}])&&v(a.prototype,t),n&&v(a,n),Object.defineProperty(a,"prototype",{writable:!1}),o}(r.default.Component);T.propTypes=k,T.contextType=l.default;var M=(0,s.injectIntl)(T);a.default=M}}]);