"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[33306],{7613:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(67294)),l=i(n(47166)),a=i(n(74854)),r=i(n(33548));function i(e){return e&&e.__esModule?e:{default:e}}var u=l.default.bind(r.default);t.default=function(){return o.default.createElement("div",{className:u("content-wrapper")},o.default.createElement(a.default,{placeholder:"Select a color",id:"combobox",isTouchAccessible:!0},o.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),o.default.createElement(a.default.Option,{value:"green",display:"Green"}),o.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),o.default.createElement(a.default.Option,{value:"red",display:"Red"}),o.default.createElement(a.default.Option,{value:"violet",display:"Violet"})),o.default.createElement("p",null,"Anim ad nulla est ipsum mollit mollit cillum consectetur."))}},22112:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(67294)),l=u(n(45697)),a=n(25387),r=u(n(4626)),i=["value","intl"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c={intl:l.default.shape({formatMessage:l.default.func}).isRequired,value:l.default.oneOfType([l.default.number,l.default.string])},f=function(e){var t=e.value,n=(e.intl,p(e,i));return o.default.createElement(r.default,s({},n,{isAddOption:!0,value:t,display:t,"data-terra-select-add-option":!0}))};f.propTypes=c,f.isOption=!0;t.default=(0,a.injectIntl)(f)},40500:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(67294)),l=s(n(45697)),a=s(n(47166)),r=s(n(50026)),i=n(25387),u=s(n(45981));function s(e){return e&&e.__esModule?e:{default:e}}var p=a.default.bind(u.default),c={noResultContent:l.default.node,value:l.default.oneOfType([l.default.number,l.default.string])},f=function(e){var t=e.noResultContent,n=e.value,l=o.default.useContext(r.default);return o.default.createElement("div",{role:"option",className:p("no-results",l.className),"aria-selected":"false"},t||o.default.createElement(i.FormattedMessage,{id:"Terra.form.select.noResults",values:{text:n}}))};f.propTypes=c;t.default=f},33548:function(e,t,n){n.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}},45981:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_NoResults-module__clinical-lowlight-theme___-XlVf","orion-fusion-theme":"_NoResults-module__orion-fusion-theme___tnsoS","no-results":"_NoResults-module__no-results___u1T4I"}},10752:function(e,t){function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function l(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}Object.defineProperty(t,"__esModule",{value:!0}),n.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var a=null,r=null,i=null;if("function"==typeof t.componentWillMount?a="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?i="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(i="UNSAFE_componentWillUpdate"),null!==a||null!==r||null!==i){var u=e.displayName||e.name,s="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+u+" uses "+s+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==r?"\n  "+r:"")+(null!==i?"\n  "+i:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=o),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=l;var p=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;p.call(this,e,t,o)}}return e}}}]);