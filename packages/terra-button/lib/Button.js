'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

require('./Button.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Child Nodes
   */
  children: _react.PropTypes.node,
  /**
   * Sets the href. When set will render the component as an anchor tag
   */
  href: _react.PropTypes.string,
  /**
   * An optional icon. Nested inline with the text when provided
   */
  icon: _react.PropTypes.element,
  /**
   * Whether or not the button should display as a block
   */
  isBlock: _react.PropTypes.bool,
  /**
   * Whether or not the button has reduced padding
   */
  isCompact: _react.PropTypes.bool,
  /**
   * Whether or not the button should be disabled
   */
  isDisabled: _react.PropTypes.bool,
  /**
   * Reverses the position of the icon and text
   */
  isReversed: _react.PropTypes.bool,
  /**
   * Callback function triggered when clicked
   */
  onClick: _react.PropTypes.func,
  /**
   * Sets the button size. One of tiny, small, medium, large, huge
   */
  size: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Sets the button text
   */
  text: _react.PropTypes.string,
  /**
   * Sets the button variant. One of primary, secondary, or link
   */
  variant: _react.PropTypes.oneOf(['default', 'link', 'primary', 'secondary'])
};

var defaultProps = {
  isBlock: false,
  isCompact: false,
  isDisabled: false,
  isReversed: false,
  variant: 'default'
};

var Button = function Button(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      isBlock = _ref.isBlock,
      isCompact = _ref.isCompact,
      isDisabled = _ref.isDisabled,
      isReversed = _ref.isReversed,
      size = _ref.size,
      text = _ref.text,
      variant = _ref.variant,
      customProps = _objectWithoutProperties(_ref, ['children', 'icon', 'isBlock', 'isCompact', 'isDisabled', 'isReversed', 'size', 'text', 'variant']);

  var attributes = _extends({}, customProps);
  var buttonText = text ? _react2.default.createElement(
    'span',
    { className: 'terra-Button-text' },
    text
  ) : null;

  attributes.className = (0, _classnames2.default)(['terra-Button', 'terra-Button--' + variant, { 'is-disabled': isDisabled }, _defineProperty({}, 'terra-Button--' + size, size), { 'terra-Button--block': isBlock }, { 'terra-Button--compact': isCompact }, attributes.className]);

  attributes.disabled = isDisabled;
  attributes.tabIndex = isDisabled ? '-1' : undefined;
  attributes['aria-disabled'] = isDisabled;

  var order = isReversed ? [buttonText, icon, children] : [icon, buttonText, children];

  return _react2.default.createElement.apply(_react2.default, [attributes.href ? 'a' : 'button', attributes].concat(order));
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;