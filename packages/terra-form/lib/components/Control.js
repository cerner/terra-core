'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // eslint-disable react/jsx-boolean-value

var propTypes = {
  /**
   * The input type
   */
  type: _react.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  /**
   * Additional attributes for the input object
   */
  attrs: _react.PropTypes.object,
  /**
   * id of the input field
   */
  id: _react.PropTypes.string,
  /**
   * Whether the form element is inline or not
   */
  isInline: _react.PropTypes.bool,
  /**
   * Label of the input
   */
  label: _react.PropTypes.node,
  /**
   * Name of the input attribute
   */
  name: _react.PropTypes.string,
  /**
   * Initial Value of the input
   */
  value: _react.PropTypes.string
};

var defaultProps = {
  type: null,
  attrs: {},
  id: undefined,
  isInline: false,
  label: null,
  name: null,
  value: undefined
};

var Control = function Control(_ref) {
  var type = _ref.type,
      attrs = _ref.attrs,
      id = _ref.id,
      isInline = _ref.isInline,
      label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      customProps = _objectWithoutProperties(_ref, ['type', 'attrs', 'id', 'isInline', 'label', 'name', 'value']);

  var labelClassNames = (0, _classnames2.default)('terra-Form-control', { 'terra-Form-control--inline': isInline }, customProps.className);

  return _react2.default.createElement(
    'label',
    _extends({ htmlFor: id }, customProps, { className: labelClassNames }),
    _react2.default.createElement(_Input2.default, _extends({
      id: id,
      name: name,
      value: value,
      type: type
    }, attrs)),
    label
  );
};

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

exports.default = Control;