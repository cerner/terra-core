"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[36009],{36009:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(67294)),r=s(a(45697)),l=a(25387),i=s(a(50250)),o=["age","dateOfBirth","gender","intl","personName"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var f={applicationContent:r.default.node,age:r.default.string,dateOfBirth:r.default.string,deceasedDate:r.default.string,gender:r.default.string,gestationalAge:r.default.string,identifiers:r.default.object,identifiersLongForm:r.default.objectOf(r.default.string),intl:r.default.shape({formatMessage:r.default.func}).isRequired,personName:r.default.string,personNameLevel:r.default.oneOf([1,2,3,4,5,6]),photo:r.default.node,postMenstrualAge:r.default.string,preferredFirstName:r.default.string},c={applicationContent:null,age:void 0,dateOfBirth:void 0,deceasedDate:null,gender:void 0,gestationalAge:null,identifiers:{},identifiersLongForm:{},personName:void 0,personNameLevel:2,photo:null,postMenstrualAge:null,preferredFirstName:null},p=function(e){var t=e.age,a=e.dateOfBirth,r=e.gender,l=e.intl,s=e.personName,f=d(e,o),c=l.formatMessage({id:"Terra.demographicsBanner.noDataProvided"});return n.default.createElement(i.default,u({},f,{age:t||c,dateOfBirth:a||c,gender:r||c,personName:s||c,dateOfBirthLabel:l.formatMessage({id:"Terra.demographicsBanner.dateOfBirth"}),dateOfBirthFullText:l.formatMessage({id:"Terra.demographicsBanner.dateOfBirthFullText"}),deceasedDateLabel:l.formatMessage({id:"Terra.demographicsBanner.deceased"}),gestationalAgeLabel:l.formatMessage({id:"Terra.demographicsBanner.gestationalAge"}),gestationalAgeFullText:l.formatMessage({id:"Terra.demographicsBanner.gestationalAgeFullText"}),postMenstrualAgeLabel:l.formatMessage({id:"Terra.demographicsBanner.postMenstrualAge"}),postMenstrualAgeFullText:l.formatMessage({id:"Terra.demographicsBanner.postMenstrualAgeFullText"})}))};p.propTypes=f,p.defaultProps=c;var m=(0,l.injectIntl)(p);t.default=m},50250:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(67294)),r=s(a(45697)),l=s(a(13266));a(53158);var i=s(a(18855)),o=s(a(55412));function s(e){return e&&e.__esModule?e:{default:e}}var u={applicationContent:r.default.node,age:r.default.string,dateOfBirth:r.default.string,dateOfBirthLabel:r.default.string,dateOfBirthFullText:r.default.string,deceasedDate:r.default.string,deceasedDateLabel:r.default.string,gender:r.default.string,gestationalAge:r.default.string,gestationalAgeLabel:r.default.string,gestationalAgeFullText:r.default.string,identifiers:r.default.object,identifiersLongForm:r.default.objectOf(r.default.string),personName:r.default.string,personNameLevel:r.default.oneOf([1,2,3,4,5,6]),photo:r.default.node,postMenstrualAge:r.default.string,postMenstrualAgeLabel:r.default.string,postMenstrualAgeFullText:r.default.string,preferredFirstName:r.default.string},d=function(e){return n.default.createElement(l.default,{tiny:n.default.createElement(i.default,e),small:n.default.createElement(o.default,e)})};d.propTypes=u,d.defaultProps={applicationContent:null,age:"--",dateOfBirth:"--",dateOfBirthLabel:"DOB",dateOfBirthFullText:"Date of Birth",deceasedDate:null,deceasedDateLabel:"Deceased",gender:"--",gestationalAge:null,gestationalAgeLabel:"GA",gestationalAgeFullText:"Gestational Age",identifiers:{},identifiersLongForm:{},personName:"--",personNameLevel:2,photo:null,postMenstrualAge:null,postMenstrualAgeLabel:"PMA",postMenstrualAgeFullText:"Post Menstrual Age",preferredFirstName:null};var f=d;t.default=f},55412:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(67294)),r=d(a(94184)),l=d(a(47166)),i=d(a(50026)),o=d(a(53158)),s=d(a(14081)),u=["age","applicationContent","dateOfBirth","dateOfBirthFullText","dateOfBirthLabel","deceasedDate","deceasedDateLabel","gender","gestationalAge","gestationalAgeFullText","gestationalAgeLabel","identifiers","identifiersLongForm","personName","personNameLevel","photo","postMenstrualAge","postMenstrualAgeFullText","postMenstrualAgeLabel","preferredFirstName"];function d(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.default.bind(o.default);t.default=function(e){e.age;var t=e.applicationContent,a=(e.dateOfBirth,e.dateOfBirthFullText,e.dateOfBirthLabel,e.deceasedDate),l=(e.deceasedDateLabel,e.gender,e.gestationalAge,e.gestationalAgeFullText,e.gestationalAgeLabel,e.identifiers,e.identifiersLongForm,e.personName),o=e.personNameLevel,d=(e.photo,e.postMenstrualAge,e.postMenstrualAgeFullText,e.postMenstrualAgeLabel,e.preferredFirstName),m=c(e,u),g=n.default.useContext(i.default),h="h".concat(o||2),b=(0,r.default)(p("demographics-banner","large-demographics-banner",{deceased:a},g.className),m.className);return delete m.className,n.default.createElement("section",f({className:b},m),e.photo&&n.default.createElement("div",{className:p("profile-photo")},e.photo),n.default.createElement("div",{className:p("content")},n.default.createElement("div",{className:p("row")},n.default.createElement(h,{className:p("person-name")},l,d&&n.default.createElement("span",{className:p("preferred-first-name")},"(".concat(d,")"))),n.default.createElement("div",{className:p("application-content")},t)),n.default.createElement("div",{className:p("row")},n.default.createElement("div",{className:p("person-details")},s.default.personDetails(e)),n.default.createElement("div",{className:p("identifiers")},s.default.applicationIdentifiers(e)))))}},18855:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(67294)),r=d(a(94184)),l=d(a(47166)),i=d(a(50026)),o=d(a(53158)),s=d(a(14081)),u=["age","applicationContent","dateOfBirth","dateOfBirthFullText","dateOfBirthLabel","deceasedDate","deceasedDateLabel","gender","gestationalAge","gestationalAgeFullText","gestationalAgeLabel","identifiers","identifiersLongForm","personName","personNameLevel","photo","postMenstrualAge","postMenstrualAgeFullText","postMenstrualAgeLabel","preferredFirstName"];function d(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.default.bind(o.default);t.default=function(e){e.age;var t=e.applicationContent,a=(e.dateOfBirth,e.dateOfBirthFullText,e.dateOfBirthLabel,e.deceasedDate),l=(e.deceasedDateLabel,e.gender,e.gestationalAge,e.gestationalAgeFullText,e.gestationalAgeLabel,e.identifiers,e.identifiersLongForm,e.personName),o=e.personNameLevel,d=(e.photo,e.postMenstrualAge,e.postMenstrualAgeFullText,e.postMenstrualAgeLabel,e.preferredFirstName),m=c(e,u),g=n.default.useContext(i.default),h="h".concat(o||2),b=(0,r.default)(p("demographics-banner",{deceased:a},g.className),m.className);return delete m.className,n.default.createElement("section",f({className:b},m),n.default.createElement(h,{className:p("person-name")},n.default.createElement("span",null,l,d&&n.default.createElement("span",{className:p("preferred-first-name")},"(".concat(d,")")))),n.default.createElement("div",{className:p("person-details")},s.default.personDetails(e),s.default.applicationIdentifiers(e)),n.default.createElement("div",{className:p("application-content")},t))}},14081:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(47166)),r=o(a(67294)),l=o(a(74754)),i=o(a(53158));function o(e){return e&&e.__esModule?e:{default:e}}var s=n.default.bind(i.default),u=function(e){var t,a=e.label,n=e.value,i=e.abbrTitle;return a&&i?t=r.default.createElement("span",{className:s("value-label")},r.default.createElement("abbr",{className:s("abbreviation"),title:i,"aria-hidden":"true"},"".concat(a,":"))):a&&(t=r.default.createElement("span",{className:s("value-label")},"".concat(a,":"))),r.default.createElement("span",{className:s("value")},i&&r.default.createElement(l.default,{text:i}),t,r.default.createElement("span",{className:s("value-text")},n))},d={personDetails:function(e){var t=[r.default.createElement(u,{key:"age",value:e.age}),r.default.createElement(u,{key:"gender",value:e.gender}),r.default.createElement(u,{key:"dob",abbrTitle:e.dateOfBirthFullText,label:e.dateOfBirthLabel,value:e.dateOfBirth})];return e.gestationalAge&&t.push(r.default.createElement(u,{key:"ga",abbrTitle:e.gestationalAgeFullText,label:e.gestationalAgeLabel,value:e.gestationalAge})),e.postMenstrualAge&&t.push(r.default.createElement(u,{key:"pma",abbrTitle:e.postMenstrualAgeFullText,label:e.postMenstrualAgeLabel,value:e.postMenstrualAge})),e.deceasedDate&&t.push(r.default.createElement(u,{key:"deceased",label:e.deceasedDateLabel,value:e.deceasedDate})),t},applicationIdentifiers:function(e){var t=e.identifiers,a=e.identifiersLongForm;return t?Object.keys(t).map((function(e){return r.default.createElement(u,{abbrTitle:a&&a[e]?a[e]:void 0,key:"identifier-".concat(e),label:e,value:t[e]})})):null}};t.default=d},13266:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.DependentViewport=void 0;var r=u(a(67294)),l=u(a(45697)),i=u(a(32018)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=l?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,a&&a.set(e,r);return r}(a(31622));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(l=r.key,i=void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(l,"string"),"symbol"===n(i)?i:String(i)),r)}var l,i}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=m(e);if(t){var l=m(this).constructor;a=Reflect.construct(r,arguments,l)}else a=r.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,a)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var g={children:l.default.node,onChange:l.default.func,onResize:l.default.func,tiny:l.default.element,small:l.default.element,medium:l.default.element,large:l.default.element,huge:l.default.element,enormous:l.default.element,responsiveTo:l.default.oneOf(["window","parent"])},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(s,e);var t,a,n,l=c(s);function s(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(e=l.call(this)).state={element:null},e.setContainer=e.setContainer.bind(p(e)),e.handleResize=e.handleResize.bind(p(e)),e.handleWindowResize=e.handleWindowResize.bind(p(e)),e.animationFrameID=null,e}return t=s,(a=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new i.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleResize",value:function(e){var t=this.props,a=t.onChange,n=t.onResize,r=t.tiny,l=t.small,i=t.medium,s=t.large,u=t.huge,d=t.enormous;n&&n(e);var f,c=(0,o.activeBreakpointForSize)(e);a&&c!==this.breakpoint&&a(c),this.breakpoint=c,(r||l||i||s||u||d)&&(f=e>=o.default.enormous&&d?"enormous":e>=o.default.huge&&u?"huge":e>=o.default.large&&s?"large":e>=o.default.medium&&i?"medium":e>=o.default.small&&l?"small":"tiny",this.state.element!==f&&this.setState({element:f}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:r.default.createElement(r.default.Fragment,null,"parent"===a&&!this.container&&r.default.createElement("div",{ref:this.setContainer}),t)}}])&&d(t.prototype,a),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.default.Component);h.propTypes=g,h.defaultProps={responsiveTo:"parent"};var b=h;t.default=b},53158:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"DemographicsBanner-module__clinical-lowlight-theme___fOn3u","orion-fusion-theme":"DemographicsBanner-module__orion-fusion-theme___nvIM1","demographics-banner":"DemographicsBanner-module__demographics-banner___4LTT7","profile-photo":"DemographicsBanner-module__profile-photo___Y4ooV",value:"DemographicsBanner-module__value___0lnHo","value-text":"DemographicsBanner-module__value-text___sqNiU","value-label":"DemographicsBanner-module__value-label___rQTZV","person-name":"DemographicsBanner-module__person-name___NztXT",identifiers:"DemographicsBanner-module__identifiers___d3woJ","person-details":"DemographicsBanner-module__person-details___qUGmv","preferred-first-name":"DemographicsBanner-module__preferred-first-name___RCbR3",deceased:"DemographicsBanner-module__deceased___VBauq",abbreviation:"DemographicsBanner-module__abbreviation___4VtM3",row:"DemographicsBanner-module__row___b-ih7",content:"DemographicsBanner-module__content___vsQWT","application-content":"DemographicsBanner-module__application-content___Oo6eb","large-demographics-banner":"DemographicsBanner-module__large-demographics-banner___96yfF"}}}]);