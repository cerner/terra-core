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

require('./Field.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable react/jsx-boolean-value, jsx-a11y/label-has-for */


var propTypes = {
  /**
   * Children the Field contains
   */
  children: _react.PropTypes.node,
  /**
   * Error message for when the input is invalid
   */
  error: _react.PropTypes.node,
  /**
   * Help element to display with the input
   */
  help: _react.PropTypes.node,
  /**
   * Determines whether the field in an inline field
   */
  isInline: _react.PropTypes.bool,
  /**
   * Label of the input
   */
  label: _react.PropTypes.node,
  /**
   * Determines whether the field is required
   */
  required: _react.PropTypes.bool
};

var defaultProps = {
  children: null,
  error: null,
  help: null,
  isInline: false,
  label: null,
  required: false
};

var Field = function Field(_ref) {
  var children = _ref.children,
      error = _ref.error,
      help = _ref.help,
      isInline = _ref.isInline,
      label = _ref.label,
      required = _ref.required,
      customProps = _objectWithoutProperties(_ref, ['children', 'error', 'help', 'isInline', 'label', 'required']);

  var fieldClasses = (0, _classnames2.default)('terra-Form-field', { 'terra-Form-field--inline': isInline }, { 'terra-Form-field--required': required }, customProps.className);

  return _react2.default.createElement(
    'p',
    _extends({}, customProps, { className: fieldClasses }),
    label && _react2.default.createElement(
      'label',
      { className: 'terra-Form-label' },
      label
    ),
    children,
    help && _react2.default.createElement(
      'small',
      { className: 'terra-Form-helpText' },
      help
    ),
    error && _react2.default.createElement(
      'small',
      { className: 'terra-Form-error', tabIndex: '-1' },
      error
    )
  );
};

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

exports.default = Field;