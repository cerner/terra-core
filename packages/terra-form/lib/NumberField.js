'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Field = require('./Field');

var _Field2 = _interopRequireDefault(_Field);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The defaultValue of the input element
   */
  defaultValue: _propTypes2.default.number,
  /**
   * Error message for when the input is invalid
   */
  error: _propTypes2.default.node,
  /**
   *  Help element to display with the input
   */
  help: _propTypes2.default.node,
  /**
   * Additional attributes to attach to the number input
   */
  inputAttrs: _propTypes2.default.object,
  /**
   * Whether the field is inline
   */
  isInline: _propTypes2.default.bool,
  /**
   * Label of the input
   */
  label: _propTypes2.default.node,
  /**
   * Maximum value allowed for the input
   */
  max: _propTypes2.default.number,
  /**
   * Minimum value allowed for the input
   */
  min: _propTypes2.default.number,
  /**
   * Name of the input attribute
   */
  name: _propTypes2.default.string,
  /**
   * Function to trigger when user changes the input value
   */
  onChange: _propTypes2.default.func,
  /**
   * Whether the input is required
   */
  required: _propTypes2.default.bool,
  /**
   * Incremental steps for increasing and descreasing the value
   */
  step: _propTypes2.default.number,
  /**
   * The value of the input element
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

var defaultProps = {
  defaultValue: undefined,
  error: null,
  help: null,
  inputAttrs: {},
  isInline: false,
  label: null,
  max: null,
  min: null,
  name: null,
  onChange: undefined,
  required: true,
  step: null,
  value: undefined
};

var NumberField = function NumberField(_ref) {
  var error = _ref.error,
      help = _ref.help,
      inputAttrs = _ref.inputAttrs,
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
      customProps = _objectWithoutProperties(_ref, ['error', 'help', 'inputAttrs', 'isInline', 'label', 'max', 'min', 'name', 'onChange', 'required', 'step', 'value', 'defaultValue']);

  return _react2.default.createElement(
    _Field2.default,
    _extends({
      error: error,
      label: label,
      help: help,
      isInline: isInline,
      required: required
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
    }, inputAttrs))
  );
};

NumberField.propTypes = propTypes;
NumberField.defaultProps = defaultProps;

exports.default = NumberField;