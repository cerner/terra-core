'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Image.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
  *
  */
  src: _react.PropTypes.string.isRequired,
  /**
   *
   */
  variant: _react.PropTypes.oneOf(['default', 'rounded', 'circle', 'thumbnail']),
  /**
   *
   */
  behavior: _react.PropTypes.oneOf(['fluid', 'nonfluid']),
  /**
   *
   */
  alt: _react.PropTypes.string,
  /**
   *
   */
  height: _react.PropTypes.number,
  /**
   *
   */
  width: _react.PropTypes.number
};

var defaultProps = {
  variant: 'default',
  behavior: 'nonfluid',
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

  var classes = (0, _classnames2.default)(['terra-Image', _defineProperty({}, 'terra-Image--' + variant, variant), _defineProperty({}, 'terra-Image--' + behavior, behavior), customProps.className]);

  return _react2.default.createElement('img', _extends({}, customProps, {
    className: classes
  }));
  // React.createNewElement('img', {...customProps, className: classes } );
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

exports.default = Image;