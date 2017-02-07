'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../src/button.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  attributes: _react.PropTypes.oneOfType([_react.PropTypes.object]),
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

var Button = function Button(props) {
  var attributes = _extends({}, props.attributes);
  var text = props.text ? _react2.default.createElement(
    'span',
    { className: 'terra-Button-text' },
    props.text
  ) : null;

  var style = props.intent;
  var titleize = function titleize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  if (props.variant) {
    style = '' + props.variant + titleize(props.intent);
  }

  attributes.className = (0, _classnames2.default)(['terra-Button', 'terra-Button--' + style, { 'is-disabled': props.isDisabled }, _defineProperty({}, 'terra-Button--' + props.size, props.size), { 'terra-Button--block': props.isBlock }, attributes.className]);

  attributes.disabled = props.isDisabled;
  attributes.href = props.href;
  attributes.onClick = props.onClick;
  attributes.tabIndex = props.isDisabled ? '-1' : undefined;
  attributes['aria-disabled'] = props.isDisabled;

  var order = props.isReversed ? [text, props.icon, props.children] : [props.icon, text, props.children];

  return _react2.default.createElement.apply(_react2.default, [props.href ? 'a' : 'button', attributes].concat(order));
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;