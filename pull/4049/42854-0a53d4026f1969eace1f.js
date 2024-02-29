"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[42854,82789,72746,50365,5170,27551,49932,72313,94694,17075,64968,42587,20206,97825],{55713:function(e,t,n){var a=n(24994);t.A=void 0;var i=a(n(96540)),o=a(n(5556)),l=a(n(67967)),r=a(n(25642)),s=l.default.bind(r.default),u={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.src,n=e.name,a=e.url,o=e.version,l=i.default.createElement("a",{className:s("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},i.default.createElement("span",{className:s("badge-name")},a?"package":"npm"),i.default.createElement("span",{className:s("badge-version")},"v".concat(o))),r=t?i.default.createElement("a",{className:s("badge"),href:t},i.default.createElement("span",{className:s("badge-name")},"github"),i.default.createElement("span",{className:s("badge-version")},"source")):void 0;return i.default.createElement("div",{className:s("badge-container")},l,r)};c.propTypes=u;t.A=c},201:function(e,t,n){var a=n(24994),i=n(73738);t.A=void 0;var o=a(n(85715)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(96540)),r=a(n(5556)),s=a(n(67967)),u=n(92912),c=a(n(27166)),d=a(n(62441)),f=n(25966),m=a(n(89986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var h=s.default.bind(m.default),g={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,i=e.title,r=e.description,s=e.isExpanded,m=(0,l.useState)(s),p=(0,o.default)(m,2),g=p[0],v=p[1],b=(0,l.useState)(!1),E=(0,o.default)(b,2),S=E[0],T=E[1],w=l.default.useContext(u.ThemeContext),C=void 0!==a,N=function(){T(!S),g&&v(!g)},P=function(){v(!g),S&&T(!S)},D=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:h("template",w.className)},l.default.createElement("div",{className:h("header")},i&&l.default.createElement("h2",{className:h("title")},i)),l.default.createElement("div",{className:h("content")},r&&l.default.createElement("div",{className:h("description")},r),t),l.default.createElement("div",{className:h("footer")},n?l.default.createElement("div",{className:h("button-container")},C&&l.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":S}),onClick:N,onKeyDown:function(e){return D(e,N)},onBlur:_,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:h("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(d.default,{className:h("chevron")})),l.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":g}),onClick:P,onKeyDown:function(e){return D(e,P)},onBlur:_,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:h("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(d.default,{className:h("chevron")}))):null,l.default.createElement("div",null,S&&l.default.createElement("div",{className:h("css")},a),g&&l.default.createElement("div",{className:h("code")},n))))};v.propTypes=g,v.defaultProps={isExpanded:!1};t.A=v},12883:function(e,t,n){var a=n(24994),i=n(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return u.Row}}),t.Ay=t.$d=void 0;var o=f(n(96540)),l=a(n(5556)),r=a(n(67967)),s=n(92912),u=f(n(17568)),c=a(n(89744));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}var m=r.default.bind(c.default),p={children:l.default.node},h={isRequired:l.default.bool};(t.dt=function(e){var t=e.children;return o.default.createElement(u.Cell,{className:m("bold")},t)}).propTypes=p,(t.$d=function(e){var t=e.children;return o.default.createElement(u.Cell,{className:m("code-block-override")},t)}).propTypes=p,(t.YZ=function(e){var t=e.isRequired;return o.default.createElement(u.Cell,{className:m([t?["required"]:[]])},t?"required":"optional")}).propTypes=h,(t.NZ=function(e){var t=e.children;return o.default.createElement(u.Cell,{className:m("code-block-override")},t)}).propTypes=p,(t.Hd=function(e){var t=e.children;return o.default.createElement(u.Cell,null,t)}).propTypes=p;var g=function(e){var t=e.children,n=(0,o.useContext)(s.ThemeContext);return o.default.createElement(u.default,{paddingStyle:"compact",className:m("table",n.className)},o.default.createElement(u.Header,{className:m("header")},o.default.createElement(u.HeaderCell,null,"Prop"),o.default.createElement(u.HeaderCell,null,"Type"),o.default.createElement(u.HeaderCell,null,"Required"),o.default.createElement(u.HeaderCell,null,"Default"),o.default.createElement(u.HeaderCell,null,"Description")),o.default.createElement(u.Body,null,t))};g.propTypes=p;t.Ay=g},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},89744:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},56650:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=u(n(96540)),r=u(n(5556)),s=u(n(46942));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},f=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function m(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];if(!n.length)return e;for(var i={},o=Object.keys(e),l=0;l<o.length;l++){var r=o[l];-1===n.indexOf(r)&&(i[r]=e[r])}return i}function p(e){e.forEach((function(e){return cancelAnimationFrame(e)}))}function h(e){return!isNaN(parseFloat(e))&&isFinite(e)}function g(e){return"string"==typeof e&&e.search("%")===e.length-1&&h(e.substr(0,e.length-1))}function _(e,t){e&&"function"==typeof e&&e(t)}var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.animationFrameIDs=[];var a="auto",o="visible";h(e.height)?(a=e.height<0||"0"===e.height?0:e.height,o="hidden"):g(e.height)&&(a="0%"===e.height?0:e.height,o="hidden"),n.animationStateClasses=i({},d,e.animationStateClasses);var l=n.getStaticStateClasses(a);return"undefined"!=typeof window&&window.matchMedia&&(n.prefersReducedMotion=window.matchMedia("(prefers-reduced-motion)").matches),n.state={animationStateClasses:l,height:a,overflow:o,shouldUseTransitions:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(e)}},{key:"componentDidUpdate",value:function(e,t){var n,a,i=this,o=this.props,l=o.height,r=o.onAnimationEnd,u=o.onAnimationStart,d=this.getTimings(),f=d.duration,m=d.delay;if(this.contentElement&&l!==e.height){var y;this.showContent(t.height),this.contentElement.style.overflow="hidden";var v=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var b=f+m,E=null,S={height:null,overflow:"hidden"},T="auto"===t.height;h(l)?(E=l<0||"0"===l?0:l,S.height=E):g(l)?(E="0%"===l?0:l,S.height=E):(E=v,S.height="auto",S.overflow=null),T&&(S.height=E,E=v);var w=(0,s.default)((c(y={},this.animationStateClasses.animating,!0),c(y,this.animationStateClasses.animatingUp,"auto"===e.height||l<e.height),c(y,this.animationStateClasses.animatingDown,"auto"===l||l>e.height),c(y,this.animationStateClasses.animatingToHeightZero,0===S.height),c(y,this.animationStateClasses.animatingToHeightAuto,"auto"===S.height),c(y,this.animationStateClasses.animatingToHeightSpecific,S.height>0),y)),C=this.getStaticStateClasses(S.height);this.setState({animationStateClasses:w,height:E,overflow:"hidden",shouldUseTransitions:!T}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),T?(S.shouldUseTransitions=!0,p(this.animationFrameIDs),this.animationFrameIDs=(n=function(){i.setState(S),_(u,{newHeight:S.height})},(a=[])[0]=requestAnimationFrame((function(){a[1]=requestAnimationFrame((function(){n()}))})),a),this.animationClassesTimeoutID=setTimeout((function(){i.setState({animationStateClasses:C,shouldUseTransitions:!1}),i.hideContent(S.height),_(r,{newHeight:S.height})}),b)):(_(u,{newHeight:E}),this.timeoutID=setTimeout((function(){S.animationStateClasses=C,S.shouldUseTransitions=!1,i.setState(S),"auto"!==l&&i.hideContent(E),_(r,{newHeight:E})}),b))}}},{key:"componentWillUnmount",value:function(){p(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null}},{key:"getTimings",value:function(){if(this.prefersReducedMotion)return{delay:0,duration:0};var e=this.props;return{delay:e.delay,duration:e.duration}}},{key:"showContent",value:function(e){0===e&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(e){0===e&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(e){var t;return(0,s.default)((c(t={},this.animationStateClasses.static,!0),c(t,this.animationStateClasses.staticHeightZero,0===e),c(t,this.animationStateClasses.staticHeightSpecific,e>0),c(t,this.animationStateClasses.staticHeightAuto,"auto"===e),t))}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.animateOpacity,o=n.applyInlineTransitions,r=n.children,u=n.className,d=n.contentClassName,p=n.easing,h=n.id,g=n.style,_=this.state,y=_.height,v=_.overflow,b=_.animationStateClasses,E=_.shouldUseTransitions,S=this.getTimings(),T=S.duration,w=S.delay,C=i({},g,{height:y,overflow:v||g.overflow});E&&o&&(C.transition="height "+T+"ms "+p+" "+w+"ms",g.transition&&(C.transition=g.transition+", "+C.transition),C.WebkitTransition=C.transition);var N={};a&&(N.transition="opacity "+T+"ms "+p+" "+w+"ms",N.WebkitTransition=N.transition,0===y&&(N.opacity=0));var P=(0,s.default)((c(e={},b,!0),c(e,u,u),e)),D="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===y;return l.default.createElement("div",i({},m.apply(void 0,[this.props].concat(f)),{"aria-hidden":D,className:P,id:h,style:C}),l.default.createElement("div",{className:d,style:N,ref:function(e){return t.contentElement=e}},r))}}]),t}(l.default.Component);y.propTypes={"aria-hidden":r.default.bool,animateOpacity:r.default.bool,animationStateClasses:r.default.object,applyInlineTransitions:r.default.bool,children:r.default.any.isRequired,className:r.default.string,contentClassName:r.default.string,delay:r.default.number,duration:r.default.number,easing:r.default.string,height:function(e,t,n){var i=e[t];return"number"==typeof i&&i>=0||g(i)||"auto"===i?null:new TypeError('value "'+i+'" of type "'+("undefined"==typeof i?"undefined":a(i))+'" is invalid type for '+t+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:r.default.string,onAnimationEnd:r.default.func,onAnimationStart:r.default.func,style:r.default.object},y.defaultProps={animateOpacity:!1,animationStateClasses:d,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},t.default=y},41843:function(e,t){function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function a(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function i(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}Object.defineProperty(t,"__esModule",{value:!0}),n.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,l=null,r=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?l="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(l="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?r="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==o||null!==l||null!==r){var s=e.displayName||e.name,u="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+s+" uses "+u+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==l?"\n  "+l:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=a),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var a=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,e,t,a)}}return e}}}]);