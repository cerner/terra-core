'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./compact-card-display.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var textStyles = ['secondary', 'attention', 'strikeThrough'];

var propTypes = {
  className: _react.PropTypes.string,
  text: _react.PropTypes.string,
  textStyle: _react.PropTypes.oneOf(textStyles),
  isTruncated: _react.PropTypes.bool,
  icon: _react.PropTypes.element
};

var defaultProps = {
  className: '',
  text: '',
  textStyle: undefined,
  isTruncated: false,
  icon: undefined
};

var Display = function Display(_ref) {
  var className = _ref.className,
      text = _ref.text,
      textStyle = _ref.textStyle,
      isTruncated = _ref.isTruncated,
      icon = _ref.icon,
      customProps = _objectWithoutProperties(_ref, ['className', 'text', 'textStyle', 'isTruncated', 'icon']);

  var displayClassNames = (0, _classnames2.default)(['terra-CompactCard-display', className]);

  var textClassNames = (0, _classnames2.default)(['terra-CompactCard-text', { 'terra-CompactCard-text--isTruncated': isTruncated }, _defineProperty({}, 'terra-CompactCard-text--' + textStyle, textStyle)]);

  var displayIcon = void 0;
  if (icon) {
    displayIcon = _react2.default.createElement(
      'div',
      { className: 'terra-CompactCard-text--inlineIcon' },
      icon
    );
  }

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: displayClassNames }),
    displayIcon,
    _react2.default.createElement(
      'div',
      { className: textClassNames },
      text
    )
  );
};

Display.propTypes = propTypes;
Display.defaultProps = defaultProps;

exports.default = Display;