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

require('./Image.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The source for the image which will be displayed.
   */
  src: _react.PropTypes.string.isRequired,
  /**
   * Sets the style of the image from the following values; `default`, `rounded`, `circle`, `thumbnail`.
   */
  variant: _react.PropTypes.oneOf(['default', 'rounded', 'circle', 'thumbnail']),
  /**
   * Sets the fluid behavior of the image, which is `nonfluid` by default.
   */
  isFluid: _react.PropTypes.bool,
  /**
   * The text content that specifies an alternative text for an image.
   */
  alt: _react.PropTypes.string.isRequired,
  /**
   * Sets the height of the image.
   */
  height: _react.PropTypes.string,
  /**
   * Sets the width of the image.
   */
  width: _react.PropTypes.string
};

var defaultProps = {
  variant: 'default',
  isFluid: false,
  alt: ' '
};

var Image = function Image(_ref) {
  var src = _ref.src,
      variant = _ref.variant,
      isFluid = _ref.isFluid,
      alt = _ref.alt,
      height = _ref.height,
      width = _ref.width,
      customProps = _objectWithoutProperties(_ref, ['src', 'variant', 'isFluid', 'alt', 'height', 'width']);

  var classes = (0, _classnames2.default)(['terra-Image', _defineProperty({}, 'terra-Image--' + variant, variant), { 'terra-Image--fluid': isFluid }, customProps.className]);

  return _react2.default.createElement('img', _extends({
    src: src,
    alt: alt,
    height: height,
    width: width
  }, customProps, {
    className: classes
  }));
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

exports.default = Image;