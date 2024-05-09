"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[93172],{93172:function(e,t,l){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(l(96540)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=s(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}return n.default=e,l&&l.set(e,n),n}(l(79436)),r=o(l(14057));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(s=function(e){return e?l:t})(e)}function o(e){return e&&e.__esModule?e:{default:e}}var d=function(){return n.default.createElement(i.default,{role:"listbox","aria-label":"test-label",dividerStyle:"standard",isDraggable:!0},n.default.createElement(i.Item,{key:"selected",isSelected:!0,isSelectable:!0,id:"selectable-item"},n.default.createElement("p",null,"List item 1")),n.default.createElement(i.Item,{key:"selectable2",isSelectable:!0},n.default.createElement("p",null,"List item 2")),n.default.createElement(i.Item,{key:"selectable3",isSelectable:!0},n.default.createElement("p",null,"List item 3")),n.default.createElement(i.Item,{key:"selectable4",isSelectable:!0},n.default.createElement("p",null,"List item 4")))},u=function(){return n.default.createElement(i.default,{role:"listbox","aria-label":"test-label",dividerStyle:"standard",isDraggable:!0},n.default.createElement(i.Item,{key:"selected-1",isSelected:!0,isSelectable:!0,id:"selectable-item-1"},n.default.createElement("p",null,"List item 1")),n.default.createElement(i.Item,{key:"selectable-2",isSelectable:!0},n.default.createElement("p",null,"List item 2")),n.default.createElement(i.Item,{key:"selectable-3",isSelectable:!0},n.default.createElement("p",null,"List item 3")),n.default.createElement(i.Item,{key:"selectabl-e4",isSelectable:!0},n.default.createElement("p",null,"List item 4")))};t.default=function(){return n.default.createElement(r.default,{mainContent:n.default.createElement(d,null),panelContent:n.default.createElement(u,null),panelPosition:"start",isOpen:!0})}},69917:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___z5Dzy","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___hejSR","slide-panel":"SlidePanel-module__slide-panel___tbu3J",main:"SlidePanel-module__main___CjYDC",panel:"SlidePanel-module__panel___G1bnA","is-open":"SlidePanel-module__is-open___pYOkq","is-fullscreen":"SlidePanel-module__is-fullscreen___vCbZa",fill:"SlidePanel-module__fill___9PGCQ"}},14057:function(e,t,l){var a=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var n=a(l(94634)),i=a(l(91847)),r=a(l(17383)),s=a(l(34579)),o=a(l(28452)),d=a(l(63072)),u=a(l(29511)),f=a(l(96540)),c=a(l(5556)),p=a(l(46942)),m=a(l(67967)),b=a(l(52103)),_=a(l(56500)),y=l(8604),h=l(68414),v=a(l(69917)),P=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function S(e,t,l){return t=(0,d.default)(t),(0,o.default)(e,E()?Reflect.construct(t,l||[],(0,d.default)(e).constructor):t.apply(e,l))}function E(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(E=function(){return!!e})()}var g=m.default.bind(v.default),N=t.SlidePanelPositions={START:"start",END:"end"},O={panelAriaLabel:c.default.string,mainAriaLabel:c.default.string,mainContent:c.default.node,panelContent:c.default.node,panelBehavior:c.default.oneOf(["overlay","squish"]),panelPosition:c.default.oneOf(["start","end"]),panelSize:c.default.oneOf(["small","large"]),isFullscreen:c.default.bool,isOpen:c.default.bool,fill:c.default.bool,setSlidePanelRef:c.default.func,intl:c.default.shape({formatMessage:c.default.func,locale:c.default.string})},k={panelBehavior:"overlay",panelPosition:N.END,panelSize:"small"},D=function(e){function t(e){var l;return(0,r.default)(this,t),(l=S(this,t,[e])).setPanelNode=l.setPanelNode.bind(l),l.mainNode=f.default.createRef(),l.setDisclosingNode=l.setDisclosingNode.bind(l),l.mainAriaDescribedByID="detail-panel-warning-".concat((0,h.v4)()),l}return(0,u.default)(t,e),(0,s.default)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(document.activeElement),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var t,l;if(null!==(t=this.disclosingNode)&&void 0!==t&&t.focus)return void this.disclosingNode.focus();null!==(l=this.mainNode)&&void 0!==l&&l.current?this.mainNode.current.focus():document.body.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setDisclosingNode",value:function(e){e&&(this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.intl,l=e.isFullscreen,a=e.isOpen,r=e.fill,s=e.mainAriaLabel,o=e.mainContent,d=e.panelAriaLabel,u=e.panelContent,c=e.panelBehavior,m=e.panelPosition,b=e.panelSize,y=(e.setSlidePanelRef,(0,i.default)(e,P)),h=this.context,v=(0,p.default)(g("slide-panel",{"is-open":a},{"is-fullscreen":l},{fill:r},h.className),y.className),S=f.default.createElement("div",{className:g(["panel"]),key:"panel",tabIndex:"-1","aria-label":d||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":a?"false":"true",role:"region",ref:this.setPanelNode},f.default.createElement(_.default,{text:d||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),u),E=f.default.createElement("div",{className:g("main"),key:"main",tabIndex:"-1","aria-label":s,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":a&&l?"true":"false",ref:this.mainNode,role:"main"},f.default.createElement(_.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:t.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),o),O=m===N.START?f.default.createElement(f.default.Fragment,null,S,o&&E):f.default.createElement(f.default.Fragment,null,o&&E,S);return f.default.createElement("div",(0,n.default)({},y,{className:v,"data-slide-panel-panel-behavior":c,"data-slide-panel-panel-position":m,"data-slide-panel-panel-size":b}),O)}}])}(f.default.Component);D.propTypes=O,D.defaultProps=k,D.contextType=b.default;t.default=(0,y.injectIntl)(D)}}]);