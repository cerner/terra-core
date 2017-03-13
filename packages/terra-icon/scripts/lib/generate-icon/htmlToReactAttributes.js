'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * htmlToReactAttributes - Takes an html attribute and transforms it
 * into a jsx attribute
 * @param {string} attributeName Html attribute
 */
var htmlToReactAttributes = function htmlToReactAttributes(attributeName) {
  // https://facebook.github.io/react/docs/dom-elements.html#all-supported-html-attributes
  if (attributeName.indexOf('aria-') >= 0) {
    return attributeName;
  }

  // https://facebook.github.io/react/docs/dom-elements.html#all-supported-html-attributes
  if (attributeName.indexOf('data-') >= 0) {
    return attributeName;
  }

  // https://facebook.github.io/react/docs/dom-elements.html#classname
  if (attributeName === 'class') {
    return 'className';
  }

  // https://facebook.github.io/react/docs/dom-elements.html#htmlfor
  if (attributeName === 'for') {
    return 'htmlFor';
  }

  return _lodash2.default.camelCase(attributeName);
}; // eslint-disable-next-line import/no-extraneous-dependencies
exports.default = htmlToReactAttributes;