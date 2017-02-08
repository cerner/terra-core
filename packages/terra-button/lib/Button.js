'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../src/button.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  isBlock: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  icon: _react.PropTypes.element,
  intent: _react.PropTypes.oneOf(['default', 'primary', 'secondary', 'positive', 'negative', 'warning', 'info']),
  isDisabled: _react.PropTypes.bool,
  href: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  isReversed: _react.PropTypes.bool,
  size: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  text: _react.PropTypes.string,
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

  var attributes = Object.assign({}, customProps);
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
  // attributes.href = href;
  // attributes.onClick = onClick;
  attributes.tabIndex = isDisabled ? '-1' : undefined;
  attributes['aria-disabled'] = isDisabled;

  var order = isReversed ? [buttonText, icon, children] : [icon, buttonText, children];

  return _react2.default.createElement.apply(_react2.default, [attributes.href ? 'a' : 'button', attributes].concat(order));
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;