'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./AButton.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Whether or not the button should display as a block
   */
  isBlock: _react.PropTypes.bool,
  /**
   * Child Nodes
   */
  children: _react.PropTypes.node,
  /**
   * An optional icon. Nested inline with the text when provided
   */
  icon: _react.PropTypes.element,
  /**
   * Sets the button color scheme. One of `primary`, `secondary`, `positive`, `negative`, `warning`, `info`
   */
  intent: _react.PropTypes.oneOf(['default', 'primary', 'secondary', 'positive', 'negative', 'warning', 'info']),
  /**
   * Whether or not the button should be disabled
   */
  isDisabled: _react.PropTypes.bool,
  /**
   * Sets the href. When set will render the component as an anchor tag
   */
  href: _react.PropTypes.string,
  /**
   * Callback function triggered when clicked
   */
  onClick: _react.PropTypes.func,
  /**
   * Reverses the position of the icon and text
   */
  isReversed: _react.PropTypes.bool,
  /**
   * Sets the button size. One of tiny, small, medium, large, huge
   * @type String
   */
  size: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Sets the button text
   */
  text: _react.PropTypes.string,
  /**
   * Sets the button variant. One of link or outline
   */
  variant: _react.PropTypes.oneOf(['link', 'outline'])
};

var defaultProps = {
  isBlock: false,
  intent: 'default',
  isDisabled: false,
  isReversed: false
};

var Button = function Button(_ref) {
  var isBlock = _ref.isBlock,
      children = _ref.children,
      icon = _ref.icon,
      intent = _ref.intent,
      isDisabled = _ref.isDisabled,
      isReversed = _ref.isReversed,
      size = _ref.size,
      text = _ref.text,
      variant = _ref.variant,
      customProps = _objectWithoutProperties(_ref, ['isBlock', 'children', 'icon', 'intent', 'isDisabled', 'isReversed', 'size', 'text', 'variant']);

  var attributes = _extends({}, customProps);
  var buttonText = text ? _react2.default.createElement(
    'span',
    { className: 'terra-Button-text' },
    text
  ) : null;

  var style = intent;
  var titleize = function titleize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  if (variant) {
    style = '' + variant + titleize(intent);
  }

  attributes.className = (0, _classnames2.default)(['terra-Button', 'terra-Button--' + style, { 'is-disabled': isDisabled }, _defineProperty({}, 'terra-Button--' + size, size), { 'terra-Button--block': isBlock }, attributes.className]);

  attributes.disabled = isDisabled;
  attributes.tabIndex = isDisabled ? '-1' : undefined;
  attributes['aria-disabled'] = isDisabled;

  var order = isReversed ? [buttonText, icon, children] : [icon, buttonText, children];

  return _react2.default.createElement.apply(_react2.default, [attributes.href ? 'a' : 'button', attributes].concat(order));
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;