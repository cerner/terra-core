"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[59123],{93546:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(67294)),u=r(l(47166)),o=r(l(47319)),n=r(l(33548));function r(e){return e&&e.__esModule?e:{default:e}}var d=u.default.bind(n.default),f=function(){return a.default.createElement("div",{className:d("content-wrapper")},a.default.createElement(o.default,{placeholder:"Select a color",variant:"combobox",id:"combobox"},a.default.createElement(o.default.Option,{value:"blue",display:"Blue"}),a.default.createElement(o.default.Option,{value:"green",display:"Green"}),a.default.createElement(o.default.Option,{value:"purple",display:"Purple"}),a.default.createElement(o.default.Option,{value:"red",display:"Red"}),a.default.createElement(o.default.Option,{value:"violet",display:"Violet"})))};t.default=f},47319:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=h(l(67294)),u=h(l(45697)),o=h(l(54052)),n=h(l(4626)),r=h(l(97574)),d=h(l(74854)),f=h(l(28998)),i=h(l(88220)),c=h(l(67405)),s=h(l(1358)),p=["variant"],v=["maxSelectionCount"],b=["allowClear"],m=["maxSelectionCount"],C=["noResultContent","allowClear"],O=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function h(e){return e&&e.__esModule?e:{default:e}}function S(e,t){if(null==e)return{};var l,a,u=function(e,t){if(null==e)return{};var l,a,u={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||(u[l]=e[l]);return u}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(u[l]=e[l])}return u}var _={allowClear:u.default.bool,children:u.default.node,defaultValue:u.default.oneOfType([u.default.string,u.default.number,u.default.array]),disabled:u.default.bool,dropdownAttrs:u.default.object,isIncomplete:u.default.bool,isInvalid:u.default.bool,isTouchAccessible:u.default.bool,maxHeight:u.default.number,maxSelectionCount:u.default.number,noResultContent:u.default.node,onBlur:u.default.func,onChange:u.default.func,onClick:u.default.func,onDeselect:u.default.func,onFocus:u.default.func,onSearch:u.default.func,onSelect:u.default.func,optionFilter:u.default.func,placeholder:u.default.string,required:u.default.bool,value:u.default.oneOfType([u.default.string,u.default.number,u.default.array]),variant:u.default.oneOf([o.default.COMBOBOX,o.default.DEFAULT,o.default.MULTIPLE,o.default.SEARCH,o.default.TAG])},y={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function E(e){var t=e.variant,l=S(e,p);switch(t){case o.default.COMBOBOX:l.maxSelectionCount;var u=S(l,v);return a.default.createElement(d.default,u);case o.default.MULTIPLE:l.allowClear;var n=S(l,b);return a.default.createElement(i.default,n);case o.default.SEARCH:l.maxSelectionCount;var r=S(l,m);return a.default.createElement(c.default,r);case o.default.TAG:l.noResultContent,l.allowClear;var h=S(l,C);return a.default.createElement(s.default,h);case o.default.DEFAULT:default:l.isTouchAccessible,l.maxSelectionCount,l.onSearch,l.optionFilter;var _=S(l,O);return a.default.createElement(f.default,_)}}E.Option=n.default,E.OptGroup=r.default,E.propTypes=_,E.defaultProps=y,E.isSelect=!0;var w=E;t.default=w},33548:function(e,t,l){l.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}}}]);