"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[42326],{22863:function(e,a,r){var t=r(64836);a.Z=void 0;var l=t(r(67294)),n=t(r(45697)),o=t(r(47166)),m=t(r(17422)),d=o.default.bind(m.default),i={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},s=function(e){var a=e.src,r=e.name,t=e.url,n=e.version,o=l.default.createElement("a",{className:d("badge"),href:t||"https://www.npmjs.org/package/".concat(r,"/v/").concat(n)},l.default.createElement("span",{className:d("badge-name")},t?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(n))),m=a?l.default.createElement("a",{className:d("badge"),href:a},l.default.createElement("span",{className:d("badge-name")},"github"),l.default.createElement("span",{className:d("badge-version")},"source")):void 0;return l.default.createElement("div",{className:d("badge-container")},o,m)};s.propTypes=i;var u=s;a.Z=u},42326:function(e,a,r){r.r(a),r.d(a,{default:function(){return s}});r(67294);var t=r(81254),l=r(85645),n=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function m(e,a){if(null==e)return{};var r,t,l=function(e,a){if(null==e)return{};var r,t,l={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(l[r]=e[r]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d={},i="wrapper";function s(e){var a=e.components,r=m(e,n);return(0,t.mdx)(i,o({},d,r,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)(l.C,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"terra-alert-upgrade-guide"},"Terra Alert Upgrade Guide"),(0,t.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),(0,t.mdx)("h3",{id:"props"},"Props"),(0,t.mdx)("h4",{id:"removed"},"Removed"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"customStatusColor")," prop. The prop was used to set the cutom alert color as inline style.")),(0,t.mdx)("h4",{id:"added"},"Added"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"customColorClass")," prop. This prop allows user to provide their own CSS and bind the className to that in CSS.")),(0,t.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,t.mdx)("h4",{id:"added-1"},"Added"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-custom-default-color")),(0,t.mdx)("h3",{id:"steps-to-uplift-to-v4"},"Steps to uplift to V4"),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},"import ",(0,t.mdx)("inlineCode",{parentName:"li"},"classNames/bind")," and ",(0,t.mdx)("inlineCode",{parentName:"li"},"CSS"),". "),(0,t.mdx)("li",{parentName:"ol"},"Use ",(0,t.mdx)("inlineCode",{parentName:"li"},"ClassNames.bind()")," function to bind ",(0,t.mdx)("inlineCode",{parentName:"li"},"CSS")," to the ",(0,t.mdx)("inlineCode",{parentName:"li"},"ClassName"),".")),(0,t.mdx)("h4",{id:"v3-code"},"V3 Code"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},'import Alert from \'terra-alert\';\n\n<Alert type="custom" customStatusColor="orange" />\n')),(0,t.mdx)("h4",{id:"v4-code"},"V4 Code"),(0,t.mdx)("h5",{id:"css"},"CSS"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-CSS"},":local {\n  .my-app-alert-attention-example {\n    color: var(--terra-alert-attention-example-color, #fa0000);\n  }\n")),(0,t.mdx)("h5",{id:"javascript"},"JavaScript"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"import Alert from 'terra-alert';\nimport classNames from 'ClassNames/bind';\nimport styles from './CSS';\n\nconst cx = classNames.bind(styles);\n\n<Alert type=\"custom\" customColorClass={cx(['my-app-alert-attention-example'])} />\n\n")),(0,t.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,t.mdx)("h3",{id:"changes-to-css-custom-properties-1"},"Changes to CSS Custom Properties"),(0,t.mdx)("h4",{id:"removed-1"},"Removed"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-alert-shadow-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-error-shadow-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-warning-shadow-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-advisory-shadow-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-info-shadow-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-success-shadow-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-custom-shadow-color")),(0,t.mdx)("h4",{id:"added-2"},"Added"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-min-height"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-icon-margin-left"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-icon-margin-right"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-icon-margin-top"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-body-margin-left"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-body-margin-right"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-body-margin-top"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-std-margin-bottom"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-std-margin-right"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-section-padding-bottom"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-section-padding-top"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-title-display"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-title-float"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-title-margin-bottom"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-title-margin-right"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-actions-margin-bottom"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-actions-margin-left"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-actions-margin-right"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-actions-margin-top"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-alert-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-error-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-warning-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-advisory-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-info-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-success-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-alert-custom-box-shadow")))}s.isMDXComponent=!0},85645:function(e,a,r){r.d(a,{C:function(){return n}});var t=r(67294),l=r(22863),n=function(e){var a=e.url;return t.createElement(l.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-alert",name:"terra-alert",version:"4.66.0",url:a})}},17422:function(e,a,r){r.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);