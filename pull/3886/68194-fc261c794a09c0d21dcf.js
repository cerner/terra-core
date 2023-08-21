"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[68194],{68194:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(67294)),r=l(t(6997));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){return n.default.createElement(r.default,{onPageChange:function(e){return console.log(e)},selectedPage:1,totalCount:2234,itemCountPerPage:20})};a.default=i},6997:function(e,a,t){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=b(t(67294)),l=b(t(45697)),i=b(t(47166)),o=b(t(50026)),s=t(25387),u=b(t(13266)),d=b(t(74754)),c=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=h(a);if(t&&t.has(e))return t.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=l?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(t(51051)),f=b(t(80646)),g=t(86545),p=b(t(37980));function h(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,t=new WeakMap;return(h=function(e){return e?t:a})(e)}function b(e){return e&&e.__esModule?e:{default:e}}function m(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(l=r.key,i=void 0,i=function(e,a){if("object"!==n(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(l,"string"),"symbol"===n(i)?i:String(i)),r)}var l,i}function P(e,a){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e},P(e,a)}function y(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=C(e);if(a){var l=C(this).constructor;t=Reflect.construct(r,arguments,l)}else t=r.apply(this,arguments);return function(e,a){if(a&&("object"===n(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(this,t)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var E=i.default.bind(f.default),k={onPageChange:l.default.func.isRequired,selectedPage:l.default.number,totalCount:l.default.number,itemCountPerPage:l.default.number,ariaLabelledBy:l.default.string,ariaLabel:l.default.string,intl:l.default.shape({formatMessage:l.default.func}).isRequired},w=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&P(e,a)}(i,e);var a,t,n,l=y(i);function i(e){var a;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,i);var t=(a=l.call(this,e)).props,n=t.selectedPage,r=t.totalCount,o=t.itemCountPerPage;return a.state={selectedPage:n&&r?n:void 0,pageSequence:n&&r?(0,g.pageSet)(n,(0,g.calculatePages)(r,o)):void 0,showReducedPaginator:!1,selectedPageMessage:""},a.handlePageChange=a.handlePageChange.bind(v(a)),a.buildPageButtons=a.buildPageButtons.bind(v(a)),a.reducedPaginator=a.reducedPaginator.bind(v(a)),a.setPaginator=a.setPaginator.bind(v(a)),a}return a=i,(t=[{key:"handlePageChange",value:function(e){var a=this,t=this.props.intl;return function(n){return n.nativeEvent.keyCode!==c.KEY_RETURN&&n.nativeEvent.keyCode!==c.KEY_SPACE||n.preventDefault(),Number.isNaN(Number(e))?(a.props.onPageChange(n.currentTarget.attributes["aria-label"].value),!1):(a.props.onPageChange(e),a.setState({selectedPage:e,pageSequence:(0,g.pageSet)(e,(0,g.calculatePages)(a.props.totalCount,a.props.itemCountPerPage)),selectedPageMessage:t.formatMessage({id:"Terra.paginator.pageSelected"},{pageNumber:e})}),!1)}}},{key:"setPaginator",value:function(e){var a="tiny"===e;this.state.showReducedPaginator!==a&&this.setState({showReducedPaginator:a})}},{key:"buildPageButtons",value:function(e,a){var t=this.props.intl,n=this.state,l=n.pageSequence,i=n.selectedPage,o=[];return l.forEach((function(n){var l=E(["nav-link",n===i?"is-selected":null]);n>e||o.push(r.default.createElement("li",null,r.default.createElement(p.default,{ariaLabel:t.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:n}),ariaCurrent:n===i,className:l,tabIndex:n===i?"-1":"0",key:"pageButton_".concat(n),onClick:a(n),onKeyDown:a(n)},n)))})),o}},{key:"defaultPaginator",value:function(){var e=this.context,a=this.props,t=a.intl,n=a.totalCount,l=a.itemCountPerPage,i=a.ariaLabelledBy,o=a.ariaLabel,s=n?(0,g.calculatePages)(n,l):0,u=this.state.selectedPage,c=1===u?1:u-1,f=u===s?s:u+1,h=o||"pagination",b=r.default.createElement("ul",{className:E("list")},n&&r.default.createElement("li",null,r.default.createElement(p.default,{ariaDisabled:1===u,ariaLabel:t.formatMessage({id:"Terra.paginator.first"}),className:E(["nav-link","left-controls",1===u&&"is-disabled"]),disabled:1===u,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},t.formatMessage({id:"Terra.paginator.first"}))),r.default.createElement("li",null,r.default.createElement(p.default,{ariaDisabled:1===u,ariaLabel:t.formatMessage({id:"Terra.paginator.previous"}),className:E(["nav-link","left-controls","previous",1===u&&"is-disabled"]),disabled:1===u,onClick:this.handlePageChange(c),onKeyDown:this.handlePageChange(c)},r.default.createElement("span",{className:E("icon")}),t.formatMessage({id:"Terra.paginator.previous"}))),n&&this.buildPageButtons(s,this.handlePageChange),r.default.createElement("li",null,r.default.createElement(p.default,{ariaDisabled:u===s,ariaLabel:t.formatMessage({id:"Terra.paginator.next"}),className:E(["nav-link","right-controls","next",u===s&&"is-disabled"]),disabled:u===s,onClick:this.handlePageChange(f),onKeyDown:this.handlePageChange(f)},t.formatMessage({id:"Terra.paginator.next"}),r.default.createElement("span",{className:E("icon")}))),n&&r.default.createElement("li",null,r.default.createElement(p.default,{ariaDisabled:u===s,ariaLabel:t.formatMessage({id:"Terra.paginator.last"}),className:E(["nav-link","right-controls",u===s&&"is-disabled"]),disabled:u===s,onClick:this.handlePageChange(s),onKeyDown:this.handlePageChange(s)},t.formatMessage({id:"Terra.paginator.last"})))),m=r.default.createElement(d.default,{"aria-live":"polite","aria-relevant":"all",text:this.state.selectedPageMessage});return i?r.default.createElement("nav",{className:E("paginator",!n&&"pageless",e.className),"aria-labelledby":i},m,b):r.default.createElement("nav",{className:E("paginator",!n&&"pageless",e.className),"aria-label":h},m,b)}},{key:"reducedPaginator",value:function(){var e=this.context,a=this.props,t=a.intl,n=a.totalCount,l=a.itemCountPerPage,i=a.ariaLabelledBy,o=a.ariaLabel,s=this.props.totalCount?(0,g.calculatePages)(n,l):0,u=this.state.selectedPage,c=1===u?1:u-1,f=u===s?s:u+1,h=o||"pagination",b=r.default.createElement(r.default.Fragment,null,n&&r.default.createElement(p.default,{ariaDisabled:1===u,ariaLabel:t.formatMessage({id:"Terra.paginator.first"}),className:E(["nav-link","left-controls",1===u&&"is-disabled"]),disabled:1===u,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},t.formatMessage({id:"Terra.paginator.first"})),r.default.createElement(p.default,{ariaDisabled:1===u,ariaLabel:t.formatMessage({id:"Terra.paginator.previous"}),className:E(["nav-link","left-controls","previous","icon-only",1===u&&"is-disabled"]),disabled:1===u,onClick:this.handlePageChange(c),onKeyDown:this.handlePageChange(c)},r.default.createElement(d.default,{text:t.formatMessage({id:"Terra.paginator.previous"})}),r.default.createElement("span",{className:E("icon")})),n&&t.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:u}),r.default.createElement(p.default,{ariaDisabled:u===s,ariaLabel:t.formatMessage({id:"Terra.paginator.next"}),className:E(["nav-link","right-controls","next","icon-only",u===s&&"is-disabled"]),disabled:u===s,onClick:this.handlePageChange(f),onKeyDown:this.handlePageChange(f)},r.default.createElement(d.default,{text:t.formatMessage({id:"Terra.paginator.next"})}),r.default.createElement("span",{className:E("icon")})),n&&r.default.createElement(p.default,{ariaDisabled:u===s,ariaLabel:t.formatMessage({id:"Terra.paginator.last"}),className:E(["nav-link","right-controls",u===s&&"is-disabled"]),disabled:u===s,onClick:this.handlePageChange(s),onKeyDown:this.handlePageChange(s)},t.formatMessage({id:"Terra.paginator.last"}))),m=r.default.createElement(d.default,{"aria-live":"polite","aria-relevant":"all",text:this.state.selectedPageMessage});return i?r.default.createElement("nav",{className:E("paginator",!n&&"pageless",e.className),"aria-labelledby":i},m,b):r.default.createElement("nav",{className:E("paginator",!n&&"pageless",e.className),"aria-label":h},m,b)}},{key:"render",value:function(){return r.default.createElement(u.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedPaginator():this.defaultPaginator())}}])&&m(a.prototype,t),n&&m(a,n),Object.defineProperty(a,"prototype",{writable:!1}),i}(r.default.Component);w.propTypes=k,w.contextType=o.default;var M=(0,s.injectIntl)(w);a.default=M}}]);