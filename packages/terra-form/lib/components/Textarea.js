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

require('./Textarea.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * How many columns the textarea should have
   */
  cols: _react.PropTypes.number,
  /**
   * Default Value of the input field. Use this to create a uncontrolled input.
   */
  defaultValue: _react.PropTypes.string,
  /**
   * Name of the input
   */
  name: _react.PropTypes.string,
  /**
   * Function to trigger when value of the textrea is changed.
   */
  onChange: _react.PropTypes.func,
  /**
   * Whether the input is required or not
   */
  required: _react.PropTypes.bool,
  /**
   * How many rows the textarea should have.
   */
  rows: _react.PropTypes.number,
  /**
   * The value of the input field. Use this to create a controlled input.
   */
  value: _react.PropTypes.string
};

var defaultProps = {
  cols: null,
  defaultValue: undefined,
  name: null,
  onChange: function onChange() {},
  required: false,
  rows: null,
  value: undefined
};

var Textarea = function Textarea(_ref) {
  var defaultValue = _ref.defaultValue,
      name = _ref.name,
      onChange = _ref.onChange,
      required = _ref.required,
      value = _ref.value,
      customProps = _objectWithoutProperties(_ref, ['defaultValue', 'name', 'onChange', 'required', 'value']);

  var additionalTextareaProps = _extends({}, customProps);

  if (required) {
    additionalTextareaProps['aria-required'] = 'true';
  }

  return _react2.default.createElement('textarea', _extends({
    defaultValue: defaultValue,
    name: name,
    onChange: onChange,
    value: value,
    required: required,
    'aria-required': required
  }, additionalTextareaProps, {
    className: (0, _classnames2.default)('terra-Form-textarea', additionalTextareaProps.className)
  }));
};

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

exports.default = Textarea;