'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classNamesToAttributes = function classNamesToAttributes(attributes) {
  var iconAttributes = _extends({}, attributes);

  if (iconAttributes.className) {
    // remove is-bidi css class and add isBidi as an attribute
    if (iconAttributes.className.includes('is-bidi')) {
      iconAttributes.className = iconAttributes.className.replace('is-bidi', '');
      iconAttributes.isBidi = true;
    }

    // remove is-spin css class and add isSpin as an attribute
    if (iconAttributes.className.includes('is-spin')) {
      iconAttributes.className = iconAttributes.className.replace('is-spin', '');
      iconAttributes.isSpin = true;
    }

    // remove trailing whitespace
    iconAttributes.className = iconAttributes.className.replace(/^\s+|\s+$/g, '');
  }

  return iconAttributes;
};

exports.default = classNamesToAttributes;