'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classNamesToAttributes = function classNamesToAttributes(attributes) {

  // remove is-bidi css class and add isBidi as an attribute
  if (attributes.className.includes('is-bidi')) {
    attributes.className = attributes.className.replace('is-bidi', '');
    attributes.isBidi = true;
  }

  // remove is-spin css class and add isSpin as an attribute
  if (attributes.className.includes('is-spin')) {
    attributes.className = attributes.className.replace('is-spin', '');
    attributes.isSpin = true;
  }

  // remove trailing whitespace
  attributes.className = attributes.className.replace(/^\s+|\s+$/g, "");

  return attributes;
};

exports.default = classNamesToAttributes;