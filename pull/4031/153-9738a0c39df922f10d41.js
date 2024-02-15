"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[153,100,63238,65059,70489,63635,64695],{22863:function(e,t,n){var l=n(64836);t.Z=void 0;var a=l(n(67294)),o=l(n(45697)),r=l(n(19845)),c=l(n(17422)),u=r.default.bind(c.default),i={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},s=function(e){var t=e.src,n=e.name,l=e.url,o=e.version,r=a.default.createElement("a",{className:u("badge"),href:l||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},a.default.createElement("span",{className:u("badge-name")},l?"package":"npm"),a.default.createElement("span",{className:u("badge-version")},"v".concat(o))),c=t?a.default.createElement("a",{className:u("badge"),href:t},a.default.createElement("span",{className:u("badge-name")},"github"),a.default.createElement("span",{className:u("badge-version")},"source")):void 0;return a.default.createElement("div",{className:u("badge-container")},r,c)};s.propTypes=i;t.Z=s},49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(67294)),c=l(n(45697)),u=l(n(19845)),i=n(21538),s=l(n(13810)),d=l(n(40931)),p=n(51051),m=l(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=u.default.bind(m.default),v={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,c=e.description,u=e.isExpanded,m=(0,r.useState)(u),f=(0,o.default)(m,2),v=f[0],g=f[1],E=(0,r.useState)(!1),y=(0,o.default)(E,2),N=y[0],T=y[1],P=r.default.useContext(i.ThemeContext),S=void 0!==l,w=function(){T(!N),v&&g(!v)},x=function(){g(!v),N&&T(!N)},C=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:_("template",P.className)},r.default.createElement("div",{className:_("header")},a&&r.default.createElement("h2",{className:_("title")},a)),r.default.createElement("div",{className:_("content")},c&&r.default.createElement("div",{className:_("description")},c),t),r.default.createElement("div",{className:_("footer")},n?r.default.createElement("div",{className:_("button-container")},S&&r.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":N}),onClick:w,onKeyDown:function(e){return C(e,w)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:_("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(d.default,{className:_("chevron")})),r.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":v}),onClick:x,onKeyDown:function(e){return C(e,x)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:_("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(d.default,{className:_("chevron")}))):null,r.default.createElement("div",null,N&&r.default.createElement("div",{className:_("css")},l),v&&r.default.createElement("div",{className:_("code")},n))))};g.propTypes=v,g.defaultProps={isExpanded:!1};t.Z=g},78530:function(e,t,n){var l=n(64836),a=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return i.Row}}),t.ZP=t.Di=void 0;var o=p(n(67294)),r=l(n(45697)),c=l(n(19845)),u=n(21538),i=p(n(37515)),s=l(n(54931));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}var m=c.default.bind(s.default),f={children:r.default.node},_={isRequired:r.default.bool};(t.O=function(e){var t=e.children;return o.default.createElement(i.Cell,{className:m("bold")},t)}).propTypes=f,(t.Di=function(e){var t=e.children;return o.default.createElement(i.Cell,{className:m("code-block-override")},t)}).propTypes=f,(t.dS=function(e){var t=e.isRequired;return o.default.createElement(i.Cell,{className:m([t?["required"]:[]])},t?"required":"optional")}).propTypes=_,(t.mW=function(e){var t=e.children;return o.default.createElement(i.Cell,{className:m("code-block-override")},t)}).propTypes=f,(t.Ex=function(e){var t=e.children;return o.default.createElement(i.Cell,null,t)}).propTypes=f;var v=function(e){var t=e.children,n=(0,o.useContext)(u.ThemeContext);return o.default.createElement(i.default,{paddingStyle:"compact",className:m("table",n.className)},o.default.createElement(i.Header,{className:m("header")},o.default.createElement(i.HeaderCell,null,"Prop"),o.default.createElement(i.HeaderCell,null,"Type"),o.default.createElement(i.HeaderCell,null,"Required"),o.default.createElement(i.HeaderCell,null,"Default"),o.default.createElement(i.HeaderCell,null,"Description")),o.default.createElement(i.Body,null,t))};v.propTypes=f;t.ZP=v},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},10752:function(e,t){function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function l(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function a(e,t){try{var n=this.props,l=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,l)}finally{this.props=n,this.state=l}}Object.defineProperty(t,"__esModule",{value:!0}),n.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,r=null,c=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?c="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(c="UNSAFE_componentWillUpdate"),null!==o||null!==r||null!==c){var u=e.displayName||e.name,i="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+u+" uses "+i+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==r?"\n  "+r:"")+(null!==c?"\n  "+c:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=l),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var s=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var l=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;s.call(this,e,t,l)}}return e}}}]);