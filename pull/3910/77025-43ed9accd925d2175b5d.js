"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[77025],{77025:function(e,l,r){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=s(r(67294)),o=s(r(47166)),t=s(r(71272)),u=s(r(59880));function s(e){return e&&e.__esModule?e:{default:e}}var n=o.default.bind(u.default),_=function(){return a.default.createElement("div",null,a.default.createElement(t.default,{id:"progressbarWithNamedColor",valueText:"5%",value:5,max:10,colorClass:n(["color-bar-example-1"])}),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(t.default,{id:"progressbarWithHexColor",valueText:"7.5%",value:7.5,max:10,colorClass:n(["color-bar-example-2"])}),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(t.default,{id:"progressbarWithRGBColor",valueText:"10%",value:10,max:10,colorClass:n(["color-bar-example-3"])}))};l.default=_},71272:function(e,l,r){Object.defineProperty(l,"__esModule",{value:!0}),l.default=l.ProgressBarHeightSize=void 0;var a=m(r(67294)),o=m(r(45697)),t=m(r(94184)),u=m(r(47166)),s=r(25387),n=m(r(50026)),_=m(r(74754)),c=m(r(17653)),i=["heightSize","value","max","valueText","colorClass","intl"];function m(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},d.apply(this,arguments)}function f(e,l){if(null==e)return{};var r,a,o=function(e,l){if(null==e)return{};var r,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],l.indexOf(r)>=0||(o[r]=e[r]);return o}(e,l);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],l.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=u.default.bind(c.default);l.ProgressBarHeightSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var g={heightSize:o.default.oneOf(["tiny","small","medium","large","huge"]),value:o.default.number.isRequired,max:o.default.number,valueText:o.default.string,colorClass:o.default.string,intl:o.default.shape({formatMessage:o.default.func})},p={heightSize:"small",max:100,valueText:void 0,colorClass:"default-color"},x=function(e){var l=e.heightSize,r=e.value,o=e.max,u=e.valueText,s=e.colorClass,c=e.intl,m=f(e,i),g=a.default.useContext(n.default),p=(0,t.default)(b("progress-bar",l,s,g.className),m.className),x=r/o*100,v=u||c.formatMessage({id:"Terra.progress.bar.percentage"},{value:x});return a.default.createElement("div",null,a.default.createElement(_.default,{"aria-live":"polite",text:v}),a.default.createElement("progress",d({},m,{className:p,max:100,value:x,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":x,"aria-valuetext":v,tabIndex:"-1"})))};x.propTypes=g,x.defaultProps=p;var v=(0,s.injectIntl)(x);l.default=v},17653:function(e,l,r){r.r(l),l.default={"clinical-lowlight-theme":"ProgressBar-module__clinical-lowlight-theme___iVJSw","orion-fusion-theme":"ProgressBar-module__orion-fusion-theme___S-oHZ","progress-bar":"ProgressBar-module__progress-bar___TU3Pl","default-color":"ProgressBar-module__default-color___jLyvE",tiny:"ProgressBar-module__tiny___CzKr6",small:"ProgressBar-module__small___mZ2DL",medium:"ProgressBar-module__medium___5gI5v",large:"ProgressBar-module__large___QPQGB",huge:"ProgressBar-module__huge___8CXqQ"}},59880:function(e,l,r){r.r(l),l.default={"clinical-lowlight-theme":"colors-module__clinical-lowlight-theme___3nuaF","orion-fusion-theme":"colors-module__orion-fusion-theme___sqHHK","color-bar-example-1":"colors-module__color-bar-example-1___k9A5Q","color-bar-example-2":"colors-module__color-bar-example-2___Qc0MN","color-bar-example-3":"colors-module__color-bar-example-3___-ZRX8","two-colors-bar-2-colors-example-1":"colors-module__two-colors-bar-2-colors-example-1___xm5uK","two-colors-bar-2-colors-example-2":"colors-module__two-colors-bar-2-colors-example-2___+ri8P","two-colors-bar-2-colors-example-3":"colors-module__two-colors-bar-2-colors-example-3___Iq361","customized-color-bar-example-1":"colors-module__customized-color-bar-example-1___AIAbg","customized-color-bar-example-2":"colors-module__customized-color-bar-example-2___5hhxY"}}}]);