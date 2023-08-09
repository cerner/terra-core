"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[68194],{68194:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(67294)),r=i(a(6997));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){return n.default.createElement(r.default,{onPageChange:function(e){return console.log(e)},selectedPage:1,totalCount:2234,itemCountPerPage:20})};t.default=o},6997:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=b(a(67294)),i=b(a(45697)),o=b(a(47166)),l=b(a(50026)),s=a(25387),u=b(a(13266)),c=b(a(74754)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=h(t);if(a&&a.has(e))return a.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}r.default=e,a&&a.set(e,r);return r}(a(51051)),f=b(a(80646)),g=a(86545),p=b(a(37980));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(h=function(e){return e?a:t})(e)}function b(e){return e&&e.__esModule?e:{default:e}}function m(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,o=function(e,t){if("object"!==n(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===n(o)?o:String(o)),r)}var i,o}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=C(e);if(t){var i=C(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(this,a)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var E=o.default.bind(f.default),k={onPageChange:i.default.func.isRequired,selectedPage:i.default.number,totalCount:i.default.number,itemCountPerPage:i.default.number,intl:i.default.shape({formatMessage:i.default.func}).isRequired},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(o,e);var t,a,n,i=y(o);function o(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var a=(t=i.call(this,e)).props,n=a.selectedPage,r=a.totalCount,l=a.itemCountPerPage;return t.state={selectedPage:n&&r?n:void 0,pageSequence:n&&r?(0,g.pageSet)(n,(0,g.calculatePages)(r,l)):void 0,showReducedPaginator:!1},t.handlePageChange=t.handlePageChange.bind(v(t)),t.buildPageButtons=t.buildPageButtons.bind(v(t)),t.reducedPaginator=t.reducedPaginator.bind(v(t)),t.setPaginator=t.setPaginator.bind(v(t)),t}return t=o,(a=[{key:"handlePageChange",value:function(e){var t=this;return function(a){return a.nativeEvent.keyCode!==d.KEY_RETURN&&a.nativeEvent.keyCode!==d.KEY_SPACE||a.preventDefault(),Number.isNaN(Number(e))?(t.props.onPageChange(a.currentTarget.attributes["aria-label"].value),!1):(t.props.onPageChange(e),t.setState({selectedPage:e,pageSequence:(0,g.pageSet)(e,(0,g.calculatePages)(t.props.totalCount,t.props.itemCountPerPage))}),!1)}}},{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"buildPageButtons",value:function(e,t){var a=this.props.intl,n=this.state,i=n.pageSequence,o=n.selectedPage,l=[];return i.forEach((function(n){var i=E(["nav-link",n===o?"is-selected":null]);n>e||l.push(r.default.createElement(p.default,{ariaLabel:a.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:n}),ariaCurrent:n===o,className:i,tabIndex:n===o?"-1":"0",key:"pageButton_".concat(n),onClick:t(n),onKeyDown:t(n)},n))})),l}},{key:"defaultPaginator",value:function(){var e=this.context,t=this.props,a=t.intl,n=t.totalCount,i=t.itemCountPerPage,o=n?(0,g.calculatePages)(n,i):0,l=this.state.selectedPage,s=1===l?1:l-1,u=l===o?o:l+1;return r.default.createElement("div",{className:E("paginator",!n&&"pageless",e.className)},r.default.createElement("ul",{className:E("list")},n&&r.default.createElement("li",null,r.default.createElement(p.default,{ariaDisabled:1===l,ariaLabel:a.formatMessage({id:"Terra.paginator.first"}),className:E(["nav-link","left-controls",1===l&&"is-disabled"]),disabled:1===l,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},a.formatMessage({id:"Terra.paginator.first"}))),r.default.createElement("li",null,r.default.createElement(p.default,{ariaDisabled:1===l,ariaLabel:a.formatMessage({id:"Terra.paginator.previous"}),className:E(["nav-link","left-controls","previous",1===l&&"is-disabled"]),disabled:1===l,onClick:this.handlePageChange(s),onKeyDown:this.handlePageChange(s)},r.default.createElement("span",{className:E("icon")}),a.formatMessage({id:"Terra.paginator.previous"}))),n&&this.buildPageButtons(o,this.handlePageChange),r.default.createElement("li",null,r.default.createElement(p.default,{ariaDisabled:l===o,ariaLabel:a.formatMessage({id:"Terra.paginator.next"}),className:E(["nav-link","right-controls","next",l===o&&"is-disabled"]),disabled:l===o,onClick:this.handlePageChange(u),onKeyDown:this.handlePageChange(u)},a.formatMessage({id:"Terra.paginator.next"}),r.default.createElement("span",{className:E("icon")}))),n&&r.default.createElement("li",null,r.default.createElement(p.default,{ariaDisabled:l===o,ariaLabel:a.formatMessage({id:"Terra.paginator.last"}),className:E(["nav-link","right-controls",l===o&&"is-disabled"]),disabled:l===o,onClick:this.handlePageChange(o),onKeyDown:this.handlePageChange(o)},a.formatMessage({id:"Terra.paginator.last"})))))}},{key:"reducedPaginator",value:function(){var e=this.context,t=this.props,a=t.intl,n=t.totalCount,i=t.itemCountPerPage,o=this.props.totalCount?(0,g.calculatePages)(n,i):0,l=this.state.selectedPage,s=1===l?1:l-1,u=l===o?o:l+1;return r.default.createElement("div",{className:E("paginator",!n&&"pageless",e.className),role:"navigation","aria-label":"pagination"},n&&r.default.createElement(p.default,{ariaDisabled:1===l,ariaLabel:a.formatMessage({id:"Terra.paginator.first"}),className:E(["nav-link","left-controls",1===l&&"is-disabled"]),disabled:1===l,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},a.formatMessage({id:"Terra.paginator.first"})),r.default.createElement(p.default,{ariaDisabled:1===l,ariaLabel:a.formatMessage({id:"Terra.paginator.previous"}),className:E(["nav-link","left-controls","previous","icon-only",1===l&&"is-disabled"]),disabled:1===l,onClick:this.handlePageChange(s),onKeyDown:this.handlePageChange(s)},r.default.createElement(c.default,{text:a.formatMessage({id:"Terra.paginator.previous"})}),r.default.createElement("span",{className:E("icon")})),n&&a.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:l}),r.default.createElement(p.default,{ariaDisabled:l===o,ariaLabel:a.formatMessage({id:"Terra.paginator.next"}),className:E(["nav-link","right-controls","next","icon-only",l===o&&"is-disabled"]),disabled:l===o,onClick:this.handlePageChange(u),onKeyDown:this.handlePageChange(u)},r.default.createElement(c.default,{text:a.formatMessage({id:"Terra.paginator.next"})}),r.default.createElement("span",{className:E("icon")})),n&&r.default.createElement(p.default,{ariaDisabled:l===o,ariaLabel:a.formatMessage({id:"Terra.paginator.last"}),className:E(["nav-link","right-controls",l===o&&"is-disabled"]),disabled:l===o,onClick:this.handlePageChange(o),onKeyDown:this.handlePageChange(o)},a.formatMessage({id:"Terra.paginator.last"})))}},{key:"render",value:function(){return r.default.createElement(u.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedPaginator():this.defaultPaginator())}}])&&m(t.prototype,a),n&&m(t,n),Object.defineProperty(t,"prototype",{writable:!1}),o}(r.default.Component);w.propTypes=k,w.contextType=l.default;var M=(0,s.injectIntl)(w);t.default=M}}]);