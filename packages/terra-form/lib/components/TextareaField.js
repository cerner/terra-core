'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('./Field');

var _Field2 = _interopRequireDefault(_Field);

var _Textarea = require('./Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // eslint-disable react/jsx-boolean-value

var propTypes = {
  /**
   * Custom attributes to apply to the input
   */
  attrs: _react.PropTypes.object,
  /**
   * How many columns the textarea should have
   */
  cols: _react.PropTypes.number,
  /**
   * Initial Value of the input
   */
  defaultValue: _react.PropTypes.string,
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
   * Maximum number of characters user can input in this field
   */
  maxLength: _react.PropTypes.number,
  /**
   * Minimum number of characters user must input in this field
   */
  minLength: _react.PropTypes.number,
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
   * How many rows the textarea should have.
   */
  rows: _react.PropTypes.number,
  /**
   * Initial Value of the input
   */
  value: _react.PropTypes.string
};

var defaultProps = {
  attrs: {},
  cols: null,
  defaultValue: undefined,
  error: null,
  help: null,
  isInline: false,
  label: null,
  maxLength: null,
  minLength: null,
  name: null,
  onChange: function onChange() {},
  required: false,
  rows: null,
  value: undefined
};

var TextareaField = function TextareaField(_ref) {
  var attrs = _ref.attrs,
      cols = _ref.cols,
      defaultValue = _ref.defaultValue,
      error = _ref.error,
      help = _ref.help,
      isInline = _ref.isInline,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      required = _ref.required,
      rows = _ref.rows,
      maxLength = _ref.maxLength,
      minLength = _ref.minLength,
      value = _ref.value,
      customProps = _objectWithoutProperties(_ref, ['attrs', 'cols', 'defaultValue', 'error', 'help', 'isInline', 'label', 'name', 'onChange', 'required', 'rows', 'maxLength', 'minLength', 'value']);

  return _react2.default.createElement(
    _Field2.default,
    _extends({
      label: label,
      error: error,
      help: help,
      isInline: isInline
    }, customProps),
    _react2.default.createElement(_Textarea2.default, _extends({
      cols: cols,
      maxLength: maxLength,
      minLength: minLength,
      name: name,
      required: required,
      rows: rows,
      value: value,
      defaultValue: defaultValue,
      onChange: onChange
    }, attrs))
  );
};

TextareaField.propTypes = propTypes;
TextareaField.defaultProps = defaultProps;

exports.default = TextareaField;