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
  defaultValue: _propTypes2.default.string,
  /**
   * Error message for when the input is invalid
   */
  error: _propTypes2.default.node,
  /**
   *  Help element to display with the input
   */
  help: _propTypes2.default.node,
  /**
   * Custom attributes to apply to the input
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
   * Maximum number of characters user can input in this field
   */
  maxLength: _propTypes2.default.number,
  /**
   * Minimum number of characters user must input in this field
   */
  minLength: _propTypes2.default.number,
  /**
   * Name of the input attribute
   */
  name: _propTypes2.default.string,
  /**
   * Function to trigger when user selects one of the radio buttons
   */
  onChange: _propTypes2.default.func,
  /**
   * Whether the input is required
   */
  required: _propTypes2.default.bool,
  /**
   * Type the input will be
   */
  type: _propTypes2.default.string,
  /**
   * The value of the input element
   */
  value: _propTypes2.default.string
};

var defaultProps = {
  defaultValue: undefined,
  error: null,
  help: null,
  inputAttrs: {},
  isInline: false,
  label: null,
  maxLength: null,
  minLength: null,
  name: null,
  onChange: undefined,
  required: false,
  type: 'text',
  value: undefined
};

var TextField = function TextField(_ref) {
  var defaultValue = _ref.defaultValue,
      error = _ref.error,
      help = _ref.help,
      inputAttrs = _ref.inputAttrs,
      isInline = _ref.isInline,
      label = _ref.label,
      maxLength = _ref.maxLength,
      minLength = _ref.minLength,
      name = _ref.name,
      onChange = _ref.onChange,
      required = _ref.required,
      type = _ref.type,
      value = _ref.value,
      customProps = _objectWithoutProperties(_ref, ['defaultValue', 'error', 'help', 'inputAttrs', 'isInline', 'label', 'maxLength', 'minLength', 'name', 'onChange', 'required', 'type', 'value']);

  return _react2.default.createElement(
    _Field2.default,
    _extends({
      label: label,
      error: error,
      help: help,
      isInline: isInline,
      required: required
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
    }, inputAttrs))
  );
};

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

exports.default = TextField;