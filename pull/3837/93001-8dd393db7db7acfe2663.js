"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[93001],{22863:function(e,a,r){var t=r(64836);a.Z=void 0;var n=t(r(67294)),i=t(r(45697)),l=t(r(47166)),d=t(r(17422)),m=l.default.bind(d.default),o={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},s=function(e){var a=e.src,r=e.name,t=e.url,i=e.version,l=n.default.createElement("a",{className:m("badge"),href:t||"https://www.npmjs.org/package/".concat(r,"/v/").concat(i)},n.default.createElement("span",{className:m("badge-name")},t?"package":"npm"),n.default.createElement("span",{className:m("badge-version")},"v".concat(i))),d=a?n.default.createElement("a",{className:m("badge"),href:a},n.default.createElement("span",{className:m("badge-name")},"github"),n.default.createElement("span",{className:m("badge-version")},"source")):void 0;return n.default.createElement("div",{className:m("badge-container")},l,d)};s.propTypes=o;var p=s;a.Z=p},93001:function(e,a,r){r.r(a),r.d(a,{default:function(){return s}});r(67294);var t=r(81254),n=r(53282),i=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},l.apply(this,arguments)}function d(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m={},o="wrapper";function s(e){var a=e.components,r=d(e,i);return(0,t.mdx)(o,l({},m,r,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)(n.C,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"terra-avatar-upgrade-guide"},"terra-avatar Upgrade Guide"),(0,t.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,t.mdx)("h3",{id:"reason-for-upgrade"},"Reason for upgrade"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"To group all user avatars in single variant ",(0,t.mdx)("inlineCode",{parentName:"li"},"shared-user")," has been replaced with ",(0,t.mdx)("inlineCode",{parentName:"li"},"generic")," sub-component"),(0,t.mdx)("li",{parentName:"ul"},"To keep adding new user avatars like ",(0,t.mdx)("inlineCode",{parentName:"li"},"provider")," easier new ",(0,t.mdx)("inlineCode",{parentName:"li"},"generic")," sub-component has been added with all user avatars as variants. "),(0,t.mdx)("li",{parentName:"ul"},"Providing more standard fallbacks")),(0,t.mdx)("h3",{id:"removed"},"Removed"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"Shared User")," subcomponent From Avatar"),(0,t.mdx)("li",{parentName:"ul"},"Default ",(0,t.mdx)("inlineCode",{parentName:"li"},"user")," icon as fallback icon for Avatar")),(0,t.mdx)("h3",{id:"added"},"Added"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"The ",(0,t.mdx)("inlineCode",{parentName:"li"},"generic")," subcomponent that replaces the ",(0,t.mdx)("inlineCode",{parentName:"li"},"sharedUser")," subcomponent with a new ",(0,t.mdx)("inlineCode",{parentName:"li"},"variant")," prop that can be ",(0,t.mdx)("inlineCode",{parentName:"li"},"single-user"),", ",(0,t.mdx)("inlineCode",{parentName:"li"},"shared-user"),", or ",(0,t.mdx)("inlineCode",{parentName:"li"},"provider"),"."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"variant")," prop will take values for sub-variants ",(0,t.mdx)("inlineCode",{parentName:"li"},"single-user"),", ",(0,t.mdx)("inlineCode",{parentName:"li"},"shared-user")," and ",(0,t.mdx)("inlineCode",{parentName:"li"},"provider"),"."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"user")," avatar has been moved into ",(0,t.mdx)("inlineCode",{parentName:"li"},"generic")," sub-comopnent with varaint name ",(0,t.mdx)("inlineCode",{parentName:"li"},"single-user"),"."),(0,t.mdx)("li",{parentName:"ul"},"the ",(0,t.mdx)("inlineCode",{parentName:"li"},"initials")," as fallback display for Avatar when image fails to load.")),(0,t.mdx)("h3",{id:"steps-to-uplift-to-v3"},"Steps to uplift to V3"),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},"Use a named export for Generic variant."),(0,t.mdx)("li",{parentName:"ol"},"Use variant prop of Generic to set sub-variant icons like ",(0,t.mdx)("inlineCode",{parentName:"li"},"single-user"),", ",(0,t.mdx)("inlineCode",{parentName:"li"},"shared-user")," and ",(0,t.mdx)("inlineCode",{parentName:"li"},"provider")," for Avatar.")),(0,t.mdx)("h4",{id:"v2-code"},"V2 Code"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"import { SharedUser} from 'terra-avatar';\n\n<SharedUser alt=\"Patient 1\" />\n")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},'import { Avatar} from \'terra-avatar\';\n\n<Avatar id="user-avatar" alt="user"/>\n')),(0,t.mdx)("h4",{id:"v3-code"},"V3 Code"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},'import { Generic } from \'terra-avatar\'\n\n<Generic variant="shared-user" alt="Patient 1" />\n')),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},'import { Generic} from \'terra-avatar\';\n\n<Generic variant="single-user" alt="Patient 1" />\n')),(0,t.mdx)("h2",{id:"changes-from-version-1-to-version-2"},"Changes from version 1 to version 2"),(0,t.mdx)("h3",{id:"props"},"Props"),(0,t.mdx)("h4",{id:"removed-1"},"Removed"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"variant")," prop. Avatar is now split into three sub components - ",(0,t.mdx)("inlineCode",{parentName:"li"},"Avatar"),", ",(0,t.mdx)("inlineCode",{parentName:"li"},"Facility"),", and ",(0,t.mdx)("inlineCode",{parentName:"li"},"SharedUser"),". ",(0,t.mdx)("inlineCode",{parentName:"li"},"Avatar")," is the default export, while ",(0,t.mdx)("inlineCode",{parentName:"li"},"Facility")," and ",(0,t.mdx)("inlineCode",{parentName:"li"},"SharedUser")," are named exports.")),(0,t.mdx)("h4",{id:"added-1"},"Added"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"alt")," prop. Represents alternative text. This is required on all variants for accessibility."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"color")," prop. This controls theme specific colors. By default, it is set to ",(0,t.mdx)("inlineCode",{parentName:"li"},"auto"),". ",(0,t.mdx)("inlineCode",{parentName:"li"},"auto")," hashes the ",(0,t.mdx)("inlineCode",{parentName:"li"},"alt")," prop to generate a color. See prop tables for accepted values."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"hashValue")," prop. This value will be used in place of ",(0,t.mdx)("inlineCode",{parentName:"li"},"alt")," to generate a color. Use this if ",(0,t.mdx)("inlineCode",{parentName:"li"},"alt")," should not be used to generate a color."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"isDeceased")," prop. Applies deceased styles to the ",(0,t.mdx)("inlineCode",{parentName:"li"},"avatar")," variant."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"isAriaHidden")," prop. This controls whether to hide the component from accessibility. Use this when avatar is purely decorative in nature."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"size")," prop.")),(0,t.mdx)("h4",{id:"updated"},"Updated"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"initials")," prop now only accepts one or two letters.")),(0,t.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,t.mdx)("h4",{id:"renamed"},"Renamed"),(0,t.mdx)("table",null,(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,t.mdx)("th",{parentName:"tr",align:null},"Updated"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-avatar-icon-facility"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-avatar-icon-facility-background-image")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-avatar-icon-user"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-avatar-icon-user-background-image")))),(0,t.mdx)("h4",{id:"removed-2"},"Removed"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-size"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-font-size-large"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-font-size-small")),(0,t.mdx)("h4",{id:"added-2"},"Added"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-height"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-width"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-icon-shared-user-background-image"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-initials-font-size"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-initials-font-weight"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-neutral-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-neutral-after-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-one-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-one-after-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-two-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-two-after-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-three-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-three-after-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-four-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-four-after-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-five-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-five-after-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-six-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-six-after-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-seven-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-seven-after-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-eight-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-eight-after-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-nine-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-nine-after-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-ten-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-ten-after-box-shadow"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-is-deceased-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-image-is-deceased-opacity"),(0,t.mdx)("li",{parentName:"ul"},"--terra-avatar-is-deceased-after-box-shadow")),(0,t.mdx)("h3",{id:"steps-to-uplift-to-v2"},"Steps to uplift to V2"),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},"Use the default export for the ",(0,t.mdx)("inlineCode",{parentName:"li"},"Avatar")," variant. Use a named export for ",(0,t.mdx)("inlineCode",{parentName:"li"},"Facility")," and ",(0,t.mdx)("inlineCode",{parentName:"li"},"SharedUser")," variants."),(0,t.mdx)("li",{parentName:"ol"},"Specify alternative text, using the ",(0,t.mdx)("inlineCode",{parentName:"li"},"alt")," prop."),(0,t.mdx)("li",{parentName:"ol"},"Profit.")),(0,t.mdx)("h4",{id:"v1-code"},"V1 Code"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},'import Avatar from \'terra-avatar\'\n\n<Avatar variant="Patient 1" initials="AAA" />\n<Avatar variant="facility" />\n')),(0,t.mdx)("h4",{id:"v2-code-1"},"V2 Code"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},'import Avatar, { Facility } from \'terra-avatar\'\n\n<Avatar alt="Patient 1" initials="AA" />\n<Facility alt="Location 1" />\n')))}s.isMDXComponent=!0},53282:function(e,a,r){r.d(a,{C:function(){return i}});var t=r(67294),n=r(22863),i=function(e){var a=e.url;return t.createElement(n.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-avatar",name:"terra-avatar",version:"3.17.0",url:a})}},17422:function(e,a,r){r.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);