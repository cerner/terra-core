'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Display.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var textStyles = ['secondary', 'attention', 'strikeThrough'];

var propTypes = {
  /**
   * The text to be displayed for the comment.
   */
  text: _react.PropTypes.string,
  /**
   * The visual styles to be applied to the display element.
   */
  textStyle: _react.PropTypes.oneOf(textStyles),
  /**
   * Whether or not the text should be truncated.
   */
  isTruncated: _react.PropTypes.bool,
  /**
   * The icon react element to be displayed next to the display text.
   */
  icon: _react.PropTypes.element
};

var defaultProps = {
  text: '',
  textStyle: undefined,
  isTruncated: false,
  icon: undefined
};

var Display = function Display(_ref) {
  var text = _ref.text,
      textStyle = _ref.textStyle,
      isTruncated = _ref.isTruncated,
      icon = _ref.icon,
      customProps = _objectWithoutProperties(_ref, ['text', 'textStyle', 'isTruncated', 'icon']);

  var displayClassNames = (0, _classnames2.default)(['terra-ClinicalItemView-display', customProps.className]);

  var textClassNames = (0, _classnames2.default)(['terra-ClinicalItemView-text', { 'terra-ClinicalItemView-text--isTruncated': isTruncated }, _defineProperty({}, 'terra-ClinicalItemView-text--' + textStyle, textStyle)]);

  var displayIcon = void 0;
  if (icon) {
    displayIcon = _react2.default.createElement(
      'div',
      { className: 'terra-ClinicalItemView-text--inlineIcon' },
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