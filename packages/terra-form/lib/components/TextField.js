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
   * Custom attributes to apply to the input
   */
  attrs: _react.PropTypes.object,
  /**
   * The defaultValue of the input element
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
   * Type the input will be
   */
  type: _react.PropTypes.string,
  /**
   * The value of the input element
   */
  value: _react.PropTypes.string
};

var defaultProps = {
  attrs: {},
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
  type: 'text',
  value: undefined
};

var TextField = function TextField(_ref) {
  var attrs = _ref.attrs,
      defaultValue = _ref.defaultValue,
      error = _ref.error,
      help = _ref.help,
      isInline = _ref.isInline,
      label = _ref.label,
      maxLength = _ref.maxLength,
      minLength = _ref.minLength,
      name = _ref.name,
      onChange = _ref.onChange,
      required = _ref.required,
      type = _ref.type,
      value = _ref.value,
      customProps = _objectWithoutProperties(_ref, ['attrs', 'defaultValue', 'error', 'help', 'isInline', 'label', 'maxLength', 'minLength', 'name', 'onChange', 'required', 'type', 'value']);

  return _react2.default.createElement(
    _Field2.default,
    _extends({
      label: label,
      error: error,
      help: help,
      isInline: isInline
    }, customProps),
    _react2.default.createElement(_Input2.default, _extends({
      maxLength: maxLength,
      minLength: minLength,
      name: name,
      required: required,
      value: value,
      defaultValue: defaultValue,
      type: type,
      onChange: onChange
    }, attrs))
  );
};

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

exports.default = TextField;