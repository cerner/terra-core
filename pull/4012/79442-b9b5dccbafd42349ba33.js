"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[79442],{1372:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(67294)),u=d(l(47166)),n=d(l(47319)),o=d(l(33548));function d(e){return e&&e.__esModule?e:{default:e}}var r=u.default.bind(o.default);t.default=function(){return a.default.createElement(n.default,{className:r("bottom-left"),isTouchAccessible:!0,placeholder:"Select a color",variant:"tag",id:"tag"},a.default.createElement(n.default.Option,{value:"blue",display:"Blue"}),a.default.createElement(n.default.Option,{value:"green",display:"Green"}),a.default.createElement(n.default.Option,{value:"purple",display:"Purple"}),a.default.createElement(n.default.Option,{value:"red",display:"Red"}),a.default.createElement(n.default.Option,{value:"violet",display:"Violet"}))}},47319:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=h(l(67294)),u=h(l(45697)),n=h(l(54052)),o=h(l(4626)),d=h(l(97574)),r=h(l(74854)),f=h(l(28998)),i=h(l(88220)),c=h(l(67405)),s=h(l(1358)),p=["variant"],v=["maxSelectionCount"],b=["allowClear"],m=["maxSelectionCount"],C=["noResultContent","allowClear"],O=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function h(e){return e&&e.__esModule?e:{default:e}}function S(e,t){if(null==e)return{};var l,a,u=function(e,t){if(null==e)return{};var l,a,u={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(u[l]=e[l]);return u}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(u[l]=e[l])}return u}var _={allowClear:u.default.bool,children:u.default.node,defaultValue:u.default.oneOfType([u.default.string,u.default.number,u.default.array]),disabled:u.default.bool,dropdownAttrs:u.default.object,isIncomplete:u.default.bool,isInvalid:u.default.bool,isTouchAccessible:u.default.bool,maxHeight:u.default.number,maxSelectionCount:u.default.number,noResultContent:u.default.node,onBlur:u.default.func,onChange:u.default.func,onClick:u.default.func,onDeselect:u.default.func,onFocus:u.default.func,onSearch:u.default.func,onSelect:u.default.func,optionFilter:u.default.func,placeholder:u.default.string,required:u.default.bool,value:u.default.oneOfType([u.default.string,u.default.number,u.default.array]),variant:u.default.oneOf([n.default.COMBOBOX,n.default.DEFAULT,n.default.MULTIPLE,n.default.SEARCH,n.default.TAG])},y={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function E(e){var t=e.variant,l=S(e,p);switch(t){case n.default.COMBOBOX:l.maxSelectionCount;var u=S(l,v);return a.default.createElement(r.default,u);case n.default.MULTIPLE:l.allowClear;var o=S(l,b);return a.default.createElement(i.default,o);case n.default.SEARCH:l.maxSelectionCount;var d=S(l,m);return a.default.createElement(c.default,d);case n.default.TAG:l.noResultContent,l.allowClear;var h=S(l,C);return a.default.createElement(s.default,h);case n.default.DEFAULT:default:l.isTouchAccessible,l.maxSelectionCount,l.onSearch,l.optionFilter;var _=S(l,O);return a.default.createElement(f.default,_)}}E.Option=o.default,E.OptGroup=d.default,E.propTypes=_,E.defaultProps=y,E.isSelect=!0;t.default=E},33548:function(e,t,l){l.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}}}]);