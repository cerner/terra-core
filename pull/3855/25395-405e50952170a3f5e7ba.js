"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[25395],{48817:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(l(67294)),u=o(l(47166)),n=o(l(47319)),d=o(l(33548));function o(e){return e&&e.__esModule?e:{default:e}}var r=u.default.bind(d.default),f=function(){return a.default.createElement("div",{className:r("content-wrapper")},a.default.createElement(n.default,{placeholder:"Select a number",id:"maxHeight",defaultValue:"1",maxHeight:300},a.default.createElement(n.default.Option,{value:"1",display:"One"}),a.default.createElement(n.default.Option,{value:"2",display:"Two"}),a.default.createElement(n.default.Option,{value:"3",display:"Three"}),a.default.createElement(n.default.Option,{value:"4",display:"Four"}),a.default.createElement(n.default.Option,{value:"5",display:"Five"}),a.default.createElement(n.default.Option,{value:"6",display:"Six"}),a.default.createElement(n.default.Option,{value:"7",display:"Seven"}),a.default.createElement(n.default.Option,{value:"8",display:"Eight"}),a.default.createElement(n.default.Option,{value:"9",display:"Nine"}),a.default.createElement(n.default.Option,{value:"10",display:"Ten"}),a.default.createElement(n.default.Option,{value:"11",display:"Eleven"}),a.default.createElement(n.default.Option,{value:"12",display:"Twelve"}),a.default.createElement(n.default.Option,{value:"13",display:"Thirteen"})))};t.default=f},47319:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=h(l(67294)),u=h(l(45697)),n=h(l(54052)),d=h(l(4626)),o=h(l(97574)),r=h(l(74854)),f=h(l(28998)),i=h(l(88220)),c=h(l(67405)),s=h(l(1358)),p=["variant"],v=["maxSelectionCount"],m=["allowClear"],O=["maxSelectionCount"],b=["noResultContent","allowClear"],E=["isTouchAccessible","maxSelectionCount","onSearch","optionFilter"];function h(e){return e&&e.__esModule?e:{default:e}}function y(e,t){if(null==e)return{};var l,a,u=function(e,t){if(null==e)return{};var l,a,u={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(u[l]=e[l]);return u}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(u[l]=e[l])}return u}var C={allowClear:u.default.bool,children:u.default.node,defaultValue:u.default.oneOfType([u.default.string,u.default.number,u.default.array]),disabled:u.default.bool,dropdownAttrs:u.default.object,isIncomplete:u.default.bool,isInvalid:u.default.bool,isTouchAccessible:u.default.bool,maxHeight:u.default.number,maxSelectionCount:u.default.number,noResultContent:u.default.node,onBlur:u.default.func,onChange:u.default.func,onClick:u.default.func,onDeselect:u.default.func,onFocus:u.default.func,onSearch:u.default.func,onSelect:u.default.func,optionFilter:u.default.func,placeholder:u.default.string,required:u.default.bool,value:u.default.oneOfType([u.default.string,u.default.number,u.default.array]),variant:u.default.oneOf([n.default.COMBOBOX,n.default.DEFAULT,n.default.MULTIPLE,n.default.SEARCH,n.default.TAG])},S={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,maxSelectionCount:void 0,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,value:void 0,variant:"default"};function _(e){var t=e.variant,l=y(e,p);switch(t){case n.default.COMBOBOX:l.maxSelectionCount;var u=y(l,v);return a.default.createElement(r.default,u);case n.default.MULTIPLE:l.allowClear;var d=y(l,m);return a.default.createElement(i.default,d);case n.default.SEARCH:l.maxSelectionCount;var o=y(l,O);return a.default.createElement(c.default,o);case n.default.TAG:l.noResultContent,l.allowClear;var h=y(l,b);return a.default.createElement(s.default,h);case n.default.DEFAULT:default:l.isTouchAccessible,l.maxSelectionCount,l.onSearch,l.optionFilter;var C=y(l,E);return a.default.createElement(f.default,C)}}_.Option=d.default,_.OptGroup=o.default,_.propTypes=C,_.defaultProps=S,_.isSelect=!0;var w=_;t.default=w},33548:function(e,t,l){l.r(t),t.default={"content-wrapper":"Select-test-module__content-wrapper___ib1qL","bottom-left":"Select-test-module__bottom-left___rabhi"}}}]);