'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../src/progress-bar.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  color: _react.PropTypes.string,
  height: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  value: _react.PropTypes.number.isRequired,
  max: _react.PropTypes.number
};

var defaultProps = {
  color: '#007cc3', // Default color of the ProgressBar fill
  height: 'small',
  max: 100,
  value: 0
};

var ProgressBar = function ProgressBar(_ref) {
  var height = _ref.height,
      value = _ref.value,
      max = _ref.max,
      customProps = _objectWithoutProperties(_ref, ['height', 'value', 'max']);

  var classes = (0, _classnames2.default)(['terra-ProgressBar', _defineProperty({}, 'terra-ProgressBar--' + height, height), customProps.className]);

  var normalizedValue = value / max * 100;

  return _react2.default.createElement('progress', _extends({}, customProps, {
    style: { color: customProps.color },
    className: classes,
    max: 100,
    value: normalizedValue,
    'aria-valuemax': 100,
    'aria-valuemin': 0,
    'aria-valuenow': normalizedValue,
    tabIndex: '-1'
  }));
};

ProgressBar.propTypes = propTypes;

ProgressBar.defaultProps = defaultProps;

exports.default = ProgressBar;