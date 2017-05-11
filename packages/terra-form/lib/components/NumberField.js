'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('./Field');

var _Field2 = _interopRequireDefault(_Field);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // eslint-disable react/jsx-boolean-value

var propTypes = {
  /**
   * Additional Attributes to attach to the number input
   */
  attrs: _react.PropTypes.object,
  /**
   * The defaultValue of the input element
   */
  defaultValue: _react.PropTypes.number,
  /**
   * Error message for when the input is invalid
   */
  error: _react.PropTypes.node,
  /**
   *  Help element to display with the input
   */
  help: _react.PropTypes.node,
  /**
   * Whether the field is inline
   */
  isInline: _react.PropTypes.bool,
  /**
   * Label of the input
   */
  label: _react.PropTypes.node,
  /**
   * Maximum value allowed for the input
   */
  max: _react.PropTypes.number,
  /**
   * Minimum value allowed for the input
   */
  min: _react.PropTypes.number,
  /**
   * Name of the input attribute
   */
  name: _react.PropTypes.string,
  /**
   * Function to trigger when user selects one of the radio buttons
   */
  onChange: _react.PropTypes.func,
  /**
   * Whether the input is required
   */
  required: _react.PropTypes.bool,
  /**
   * Incremental steps for increasing and descreasing the value
   */
  step: _react.PropTypes.number,
  /**
   * The value of the input element
   */
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

var defaultProps = {
  attrs: {},
  defaultValue: undefined,
  error: null,
  help: null,
  isInline: false,
  label: null,
  max: null,
  min: null,
  name: null,
  onChange: function onChange() {},
  required: true,
  step: null,
  value: undefined
};

var NumberField = function NumberField(_ref) {
  var attrs = _ref.attrs,
      error = _ref.error,
      help = _ref.help,
      isInline = _ref.isInline,
      label = _ref.label,
      max = _ref.max,
      min = _ref.min,
      name = _ref.name,
      onChange = _ref.onChange,
      required = _ref.required,
      step = _ref.step,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      customProps = _objectWithoutProperties(_ref, ['attrs', 'error', 'help', 'isInline', 'label', 'max', 'min', 'name', 'onChange', 'required', 'step', 'value', 'defaultValue']);

  return _react2.default.createElement(
    _Field2.default,
    _extends({
      error: error,
      label: label,
      help: help,
      isInline: isInline
    }, customProps),
    _react2.default.createElement(_Input2.default, _extends({
      type: 'number',
      step: step,
      max: max,
      min: min,
      required: required,
      name: name,
      value: value,
      defaultValue: defaultValue,
      onChange: onChange
    }, attrs))
  );
};

NumberField.propTypes = propTypes;
NumberField.defaultProps = defaultProps;

exports.default = NumberField;