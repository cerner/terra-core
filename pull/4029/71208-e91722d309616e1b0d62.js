"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[71208,3665,5968,9681,40934,68479],{22863:function(e,t,a){var n=a(64836);t.Z=void 0;var i=n(a(67294)),o=n(a(45697)),l=n(a(19845)),r=n(a(17422)),s=l.default.bind(r.default),u={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.src,a=e.name,n=e.url,o=e.version,l=i.default.createElement("a",{className:s("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},i.default.createElement("span",{className:s("badge-name")},n?"package":"npm"),i.default.createElement("span",{className:s("badge-version")},"v".concat(o))),r=t?i.default.createElement("a",{className:s("badge"),href:t},i.default.createElement("span",{className:s("badge-name")},"github"),i.default.createElement("span",{className:s("badge-version")},"source")):void 0;return i.default.createElement("div",{className:s("badge-container")},l,r)};c.propTypes=u;t.Z=c},49271:function(e,t,a){var n=a(64836),i=a(18698);t.Z=void 0;var o=n(a(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var a=h(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(n,l,r):n[l]=e[l]}return n.default=e,a&&a.set(e,n),n}(a(67294)),r=n(a(45697)),s=n(a(19845)),u=a(21538),c=n(a(13810)),d=n(a(40931)),m=a(51051),f=n(a(53560));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(h=function(e){return e?a:t})(e)}var p=s.default.bind(f.default),g={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,i=e.title,r=e.description,s=e.isExpanded,f=(0,l.useState)(s),h=(0,o.default)(f,2),g=h[0],y=h[1],b=(0,l.useState)(!1),E=(0,o.default)(b,2),T=E[0],C=E[1],w=l.default.useContext(u.ThemeContext),S=void 0!==n,N=function(){C(!T),g&&y(!g)},O=function(){y(!g),T&&C(!T)},x=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:p("template",w.className)},l.default.createElement("div",{className:p("header")},i&&l.default.createElement("h2",{className:p("title")},i)),l.default.createElement("div",{className:p("content")},r&&l.default.createElement("div",{className:p("description")},r),t),l.default.createElement("div",{className:p("footer")},a?l.default.createElement("div",{className:p("button-container")},S&&l.default.createElement("button",{type:"button",className:p("css-toggle","item",{"is-selected":T}),onClick:N,onKeyDown:function(e){return x(e,N)},onBlur:_,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:p("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(d.default,{className:p("chevron")})),l.default.createElement("button",{type:"button",className:p("code-toggle","item",{"is-selected":g}),onClick:O,onKeyDown:function(e){return x(e,O)},onBlur:_,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:p("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(d.default,{className:p("chevron")}))):null,l.default.createElement("div",null,T&&l.default.createElement("div",{className:p("css")},n),g&&l.default.createElement("div",{className:p("code")},a))))};y.propTypes=g,y.defaultProps={isExpanded:!1};t.Z=y},78530:function(e,t,a){var n=a(64836),i=a(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return u.Row}}),t.ZP=t.Di=void 0;var o=m(a(67294)),l=n(a(45697)),r=n(a(19845)),s=a(21538),u=m(a(37515)),c=n(a(54931));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(n,l,r):n[l]=e[l]}return n.default=e,a&&a.set(e,n),n}var f=r.default.bind(c.default),h={children:l.default.node},p={isRequired:l.default.bool};(t.O=function(e){var t=e.children;return o.default.createElement(u.Cell,{className:f("bold")},t)}).propTypes=h,(t.Di=function(e){var t=e.children;return o.default.createElement(u.Cell,{className:f("code-block-override")},t)}).propTypes=h,(t.dS=function(e){var t=e.isRequired;return o.default.createElement(u.Cell,{className:f([t?["required"]:[]])},t?"required":"optional")}).propTypes=p,(t.mW=function(e){var t=e.children;return o.default.createElement(u.Cell,{className:f("code-block-override")},t)}).propTypes=h,(t.Ex=function(e){var t=e.children;return o.default.createElement(u.Cell,null,t)}).propTypes=h;var g=function(e){var t=e.children,a=(0,o.useContext)(s.ThemeContext);return o.default.createElement(u.default,{paddingStyle:"compact",className:f("table",a.className)},o.default.createElement(u.Header,{className:f("header")},o.default.createElement(u.HeaderCell,null,"Prop"),o.default.createElement(u.HeaderCell,null,"Type"),o.default.createElement(u.HeaderCell,null,"Required"),o.default.createElement(u.HeaderCell,null,"Default"),o.default.createElement(u.HeaderCell,null,"Description")),o.default.createElement(u.Body,null,t))};g.propTypes=h;t.ZP=g},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},68133:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=u(a(67294)),r=u(a(45697)),s=u(a(93967));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},m=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function f(e){for(var t=arguments.length,a=Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];if(!a.length)return e;for(var i={},o=Object.keys(e),l=0;l<o.length;l++){var r=o[l];-1===a.indexOf(r)&&(i[r]=e[r])}return i}function h(e){e.forEach((function(e){return cancelAnimationFrame(e)}))}function p(e){return!isNaN(parseFloat(e))&&isFinite(e)}function g(e){return"string"==typeof e&&e.search("%")===e.length-1&&p(e.substr(0,e.length-1))}function _(e,t){e&&"function"==typeof e&&e(t)}var v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.animationFrameIDs=[];var n="auto",o="visible";p(e.height)?(n=e.height<0||"0"===e.height?0:e.height,o="hidden"):g(e.height)&&(n="0%"===e.height?0:e.height,o="hidden"),a.animationStateClasses=i({},d,e.animationStateClasses);var l=a.getStaticStateClasses(n);return"undefined"!=typeof window&&window.matchMedia&&(a.prefersReducedMotion=window.matchMedia("(prefers-reduced-motion)").matches),a.state={animationStateClasses:l,height:n,overflow:o,shouldUseTransitions:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(e)}},{key:"componentDidUpdate",value:function(e,t){var a,n,i=this,o=this.props,l=o.height,r=o.onAnimationEnd,u=o.onAnimationStart,d=this.getTimings(),m=d.duration,f=d.delay;if(this.contentElement&&l!==e.height){var v;this.showContent(t.height),this.contentElement.style.overflow="hidden";var y=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var b=m+f,E=null,T={height:null,overflow:"hidden"},C="auto"===t.height;p(l)?(E=l<0||"0"===l?0:l,T.height=E):g(l)?(E="0%"===l?0:l,T.height=E):(E=y,T.height="auto",T.overflow=null),C&&(T.height=E,E=y);var w=(0,s.default)((c(v={},this.animationStateClasses.animating,!0),c(v,this.animationStateClasses.animatingUp,"auto"===e.height||l<e.height),c(v,this.animationStateClasses.animatingDown,"auto"===l||l>e.height),c(v,this.animationStateClasses.animatingToHeightZero,0===T.height),c(v,this.animationStateClasses.animatingToHeightAuto,"auto"===T.height),c(v,this.animationStateClasses.animatingToHeightSpecific,T.height>0),v)),S=this.getStaticStateClasses(T.height);this.setState({animationStateClasses:w,height:E,overflow:"hidden",shouldUseTransitions:!C}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),C?(T.shouldUseTransitions=!0,h(this.animationFrameIDs),this.animationFrameIDs=(a=function(){i.setState(T),_(u,{newHeight:T.height})},(n=[])[0]=requestAnimationFrame((function(){n[1]=requestAnimationFrame((function(){a()}))})),n),this.animationClassesTimeoutID=setTimeout((function(){i.setState({animationStateClasses:S,shouldUseTransitions:!1}),i.hideContent(T.height),_(r,{newHeight:T.height})}),b)):(_(u,{newHeight:E}),this.timeoutID=setTimeout((function(){T.animationStateClasses=S,T.shouldUseTransitions=!1,i.setState(T),"auto"!==l&&i.hideContent(E),_(r,{newHeight:E})}),b))}}},{key:"componentWillUnmount",value:function(){h(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null}},{key:"getTimings",value:function(){if(this.prefersReducedMotion)return{delay:0,duration:0};var e=this.props;return{delay:e.delay,duration:e.duration}}},{key:"showContent",value:function(e){0===e&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(e){0===e&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(e){var t;return(0,s.default)((c(t={},this.animationStateClasses.static,!0),c(t,this.animationStateClasses.staticHeightZero,0===e),c(t,this.animationStateClasses.staticHeightSpecific,e>0),c(t,this.animationStateClasses.staticHeightAuto,"auto"===e),t))}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.animateOpacity,o=a.applyInlineTransitions,r=a.children,u=a.className,d=a.contentClassName,h=a.easing,p=a.id,g=a.style,_=this.state,v=_.height,y=_.overflow,b=_.animationStateClasses,E=_.shouldUseTransitions,T=this.getTimings(),C=T.duration,w=T.delay,S=i({},g,{height:v,overflow:y||g.overflow});E&&o&&(S.transition="height "+C+"ms "+h+" "+w+"ms",g.transition&&(S.transition=g.transition+", "+S.transition),S.WebkitTransition=S.transition);var N={};n&&(N.transition="opacity "+C+"ms "+h+" "+w+"ms",N.WebkitTransition=N.transition,0===v&&(N.opacity=0));var O=(0,s.default)((c(e={},b,!0),c(e,u,u),e)),x="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===v;return l.default.createElement("div",i({},f.apply(void 0,[this.props].concat(m)),{"aria-hidden":x,className:O,id:p,style:S}),l.default.createElement("div",{className:d,style:N,ref:function(e){return t.contentElement=e}},r))}}]),t}(l.default.Component);v.propTypes={"aria-hidden":r.default.bool,animateOpacity:r.default.bool,animationStateClasses:r.default.object,applyInlineTransitions:r.default.bool,children:r.default.any.isRequired,className:r.default.string,contentClassName:r.default.string,delay:r.default.number,duration:r.default.number,easing:r.default.string,height:function(e,t,a){var i=e[t];return"number"==typeof i&&i>=0||g(i)||"auto"===i?null:new TypeError('value "'+i+'" of type "'+("undefined"==typeof i?"undefined":n(i))+'" is invalid type for '+t+" in "+a+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:r.default.string,onAnimationEnd:r.default.func,onAnimationStart:r.default.func,style:r.default.object},v.defaultProps={animateOpacity:!1,animationStateClasses:d,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},t.default=v}}]);