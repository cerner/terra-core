"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[30590],{45318:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(67294)),o=i(n(19845)),a=i(n(1358)),r=i(n(33548));function i(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(r.default);t.default=function(){return l.default.createElement("div",{className:u("content-wrapper")},l.default.createElement(a.default,{placeholder:"Select a color",id:"tag",isTouchAccessible:!0},l.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),l.default.createElement(a.default.Option,{value:"green",display:"Green"}),l.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),l.default.createElement(a.default.Option,{value:"red",display:"Red"}),l.default.createElement(a.default.Option,{value:"violet",display:"Violet"})),l.default.createElement("p",null,"Anim ad nulla est ipsum mollit mollit cillum consectetur."))}},22112:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(67294)),o=u(n(45697)),a=n(25387),r=u(n(4626)),i=["value","intl"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f={intl:o.default.shape({formatMessage:o.default.func}).isRequired,value:o.default.oneOfType([o.default.number,o.default.string])},p=function(e){var t=e.value,n=e.intl,o=s(e,i);return l.default.createElement(r.default,c({},o,{isAddOption:!0,value:t,display:n.formatMessage({id:"Terra.form.select.add"},{text:t}),"data-terra-select-add-option":!0}))};p.propTypes=f,p.isOption=!0;t.default=(0,a.injectIntl)(p)},50987:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(n(67294)),o=c(n(45697)),a=n(25387),r=c(n(19845)),i=c(n(50026)),u=c(n(6699));function c(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(u.default),f={value:o.default.oneOfType([o.default.number,o.default.string])},p=function(e){var t=e.value,n=l.default.useContext(i.default);return l.default.createElement("div",{className:s("max-selection",n.className)},l.default.createElement(a.FormattedMessage,{id:"Terra.form.select.maxSelectionOption",values:{text:t}}))};p.propTypes=f;t.default=p},17572:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(67294)),o=u(n(45697)),a=u(n(19845)),r=u(n(50026)),i=u(n(23728));function u(e){return e&&e.__esModule?e:{default:e}}var c=a.default.bind(i.default),s={children:o.default.node.isRequired,onDeselect:o.default.func.isRequired,value:o.default.oneOfType([o.default.string,o.default.number]).isRequired},f=function(e){var t=e.children,n=e.onDeselect,o=e.value,a=l.default.useContext(r.default);return l.default.createElement("li",{className:c("tag",a.className)},l.default.createElement("span",{className:c("display")},t),l.default.createElement("span",{className:c("deselect"),onClick:function(){n(o)},role:"presentation"},l.default.createElement("span",{className:c("icon")})))};f.propTypes=s;t.default=f},33548:function(e,t,n){n.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}},6699:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_MaxSelection-module__clinical-lowlight-theme___Q9M6W","orion-fusion-theme":"_MaxSelection-module__orion-fusion-theme___qe7S4","max-selection":"_MaxSelection-module__max-selection___oDtiJ"}},23728:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_Tag-module__clinical-lowlight-theme___-m+je","orion-fusion-theme":"_Tag-module__orion-fusion-theme___Dk14i",tag:"_Tag-module__tag___gp7HT",display:"_Tag-module__display___2-rd4",deselect:"_Tag-module__deselect___-yUlo",icon:"_Tag-module__icon___O74EY"}},10752:function(e,t){function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function l(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function o(e,t){try{var n=this.props,l=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,l)}finally{this.props=n,this.state=l}}Object.defineProperty(t,"__esModule",{value:!0}),n.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var a=null,r=null,i=null;if("function"==typeof t.componentWillMount?a="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?i="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(i="UNSAFE_componentWillUpdate"),null!==a||null!==r||null!==i){var u=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+u+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==r?"\n  "+r:"")+(null!==i?"\n  "+i:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=l),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=o;var s=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var l=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;s.call(this,e,t,l)}}return e}}}]);