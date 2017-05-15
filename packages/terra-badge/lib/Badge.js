'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

require('./Badge.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Child Nodes.
   */
  children: _propTypes2.default.node,
  /**
   * An optional icon. Nested inline with the text when provided.
   */
  icon: _propTypes2.default.element,
  /**
   * Sets the badge color scheme. One of `primary`, `secondary`, `positive`, `negative`, `warning`, `info`.
   */
  intent: _propTypes2.default.oneOf(['default', 'primary', 'secondary', 'info', 'warning', 'positive', 'negative']),
  /**
   * Reverses the position of the icon and text.
   */
  isReversed: _propTypes2.default.bool,
  /**
   * Sets the badge size. One of tiny, small, medium, large, huge.
   * @type String
   */
  size: _propTypes2.default.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Sets the badge text.
   */
  text: _propTypes2.default.string
};

var defaultProps = {
  children: null,
  icon: null,
  intent: 'default',
  isReversed: false,
  size: 'small',
  text: null
};

var Badge = function Badge(_ref) {
  var size = _ref.size,
      intent = _ref.intent,
      isReversed = _ref.isReversed,
      text = _ref.text,
      icon = _ref.icon,
      additionalProps = _objectWithoutProperties(_ref, ['size', 'intent', 'isReversed', 'text', 'icon']);

  var classes = (0, _classnames2.default)(['terra-Badge', _defineProperty({}, 'terra-Badge--' + size, size), _defineProperty({}, 'terra-Badge--' + intent, intent), additionalProps.className]);

  var textContent = text ? _react2.default.createElement(
    'span',
    { className: 'terra-Badge-text' },
    text
  ) : null;

  var content = isReversed ? [textContent, icon, additionalProps.children] : [icon, textContent, additionalProps.children];

  return _react2.default.createElement.apply(_react2.default, ['span', _extends({}, additionalProps, { className: classes })].concat(content));
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

exports.default = Badge;