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

require('./Textarea.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The defaultValue of the textarea. Use this to create an uncontrolled input
   */
  defaultValue: _propTypes2.default.string,
  /**
   * Name of the input
   */
  name: _propTypes2.default.string,
  /**
   * Whether the input is required or not
   */
  required: _propTypes2.default.bool,
  /**
   * The value of the textarea. Use this to create a controlled input
   */
  value: _propTypes2.default.string
};

var defaultProps = {
  defaultValue: undefined,
  name: null,
  required: false,
  value: undefined
};

var Textarea = function Textarea(_ref) {
  var defaultValue = _ref.defaultValue,
      name = _ref.name,
      required = _ref.required,
      value = _ref.value,
      customProps = _objectWithoutProperties(_ref, ['defaultValue', 'name', 'required', 'value']);

  var additionalTextareaProps = _extends({}, customProps);

  if (required) {
    additionalTextareaProps['aria-required'] = 'true';
  }

  if (value !== undefined) {
    additionalTextareaProps.value = value;
  } else {
    additionalTextareaProps.defaultValue = defaultValue;
  }

  return _react2.default.createElement('textarea', _extends({
    name: name,
    required: required
  }, additionalTextareaProps, {
    className: (0, _classnames2.default)('terra-Form-textarea', additionalTextareaProps.className)
  }));
};

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

exports.default = Textarea;