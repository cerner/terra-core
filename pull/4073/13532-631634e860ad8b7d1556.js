"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[13532],{13532:function(e,l,r){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=s(r(96540)),o=s(r(67967)),t=s(r(87239)),u=s(r(876));function s(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(u.default);l.default=function(){return a.default.createElement("div",null,a.default.createElement(t.default,{id:"progressbarWithNamedColor",value:5,max:10,colorClass:i(["color-bar-example-1"])}),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(t.default,{id:"progressbarWithHexColor",value:7.5,max:10,colorClass:i(["color-bar-example-2"])}),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(t.default,{id:"progressbarWithRGBColor",value:10,max:10,colorClass:i(["color-bar-example-3"])}))}},87239:function(e,l,r){Object.defineProperty(l,"__esModule",{value:!0}),l.default=l.ProgressBarHeightSize=void 0;var a=m(r(96540)),o=m(r(5556)),t=m(r(46942)),u=m(r(67967)),s=r(8604),i=m(r(52103)),n=m(r(56500)),_=m(r(40260)),c=["ariaLabel","heightSize","value","max","valueText","colorClass","intl"];function m(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},d.apply(this,arguments)}function f(e,l){if(null==e)return{};var r,a,o=function(e,l){if(null==e)return{};var r,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],l.indexOf(r)>=0||(o[r]=e[r]);return o}(e,l);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],l.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=u.default.bind(_.default),g=(l.ProgressBarHeightSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"},{ariaLabel:o.default.string,heightSize:o.default.oneOf(["tiny","small","medium","large","huge"]),value:o.default.number.isRequired,max:o.default.number,valueText:o.default.string,colorClass:o.default.string,intl:o.default.shape({formatMessage:o.default.func})}),p={heightSize:"small",max:100,valueText:void 0,colorClass:"default-color"},x=function(e){var l=e.ariaLabel,r=e.heightSize,o=e.value,u=e.max,s=e.valueText,_=e.colorClass,m=e.intl,g=f(e,c),p=a.default.useContext(i.default),x=(0,t.default)(b("progress-bar",r,_,p.className),g.className),h=o/u*100,v=s||m.formatMessage({id:"Terra.progress.bar.percentage"},{value:h});return a.default.createElement("div",null,a.default.createElement("progress",d({},g,{"aria-label":l,className:x,max:100,value:h,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":h,"aria-valuetext":v,tabIndex:"-1"})),s&&a.default.createElement(n.default,{"aria-live":"polite",text:v}))};x.propTypes=g,x.defaultProps=p;l.default=(0,s.injectIntl)(x)},40260:function(e,l,r){r.r(l),l.default={"clinical-lowlight-theme":"ProgressBar-module__clinical-lowlight-theme___iVJSw","orion-fusion-theme":"ProgressBar-module__orion-fusion-theme___S-oHZ","progress-bar":"ProgressBar-module__progress-bar___TU3Pl","default-color":"ProgressBar-module__default-color___jLyvE",tiny:"ProgressBar-module__tiny___CzKr6",small:"ProgressBar-module__small___mZ2DL",medium:"ProgressBar-module__medium___5gI5v",large:"ProgressBar-module__large___QPQGB",huge:"ProgressBar-module__huge___8CXqQ"}},876:function(e,l,r){r.r(l),l.default={"clinical-lowlight-theme":"colors-module__clinical-lowlight-theme___3nuaF","orion-fusion-theme":"colors-module__orion-fusion-theme___sqHHK","color-bar-example-1":"colors-module__color-bar-example-1___k9A5Q","color-bar-example-2":"colors-module__color-bar-example-2___Qc0MN","color-bar-example-3":"colors-module__color-bar-example-3___-ZRX8","two-colors-bar-2-colors-example-1":"colors-module__two-colors-bar-2-colors-example-1___xm5uK","two-colors-bar-2-colors-example-2":"colors-module__two-colors-bar-2-colors-example-2___+ri8P","two-colors-bar-2-colors-example-3":"colors-module__two-colors-bar-2-colors-example-3___Iq361","customized-color-bar-example-1":"colors-module__customized-color-bar-example-1___AIAbg","customized-color-bar-example-2":"colors-module__customized-color-bar-example-2___5hhxY"}}}]);