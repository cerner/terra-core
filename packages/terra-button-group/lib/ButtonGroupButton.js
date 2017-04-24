'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

require('./ButtonGroupButton.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Indicates if the button should be selected on initial render.
   */
  isSelected: _react.PropTypes.bool,
  /**
   * Sets the button text
   */
  text: _react.PropTypes.string,
  /**
   * An optional icon. Nested inline with the text when provided
   */
  icon: _react.PropTypes.element,
  /**
   * Callback function triggered when clicked
   */
  onClick: _react.PropTypes.func,
  /**
   * Reverses the position of the icon and text
   */
  isReversed: _react.PropTypes.bool,
  /**
   * Child Nodes
   */
  children: _react.PropTypes.node
};

var defaultProps = {
  isSelected: false,
  isReversed: false
};

var ButtonGroupButton = function ButtonGroupButton(_ref) {
  var isSelected = _ref.isSelected,
      customProps = _objectWithoutProperties(_ref, ['isSelected']);

  var attributes = _extends({}, customProps);

  var buttonClassName = (0, _classnames2.default)(['terra-ButtonGroupButton', { 'is-active': isSelected }, attributes.className]);
  attributes['aria-selected'] = isSelected;

  return _react2.default.createElement(_terraButton2.default, _extends({}, attributes, {
    className: buttonClassName
  }));
};

ButtonGroupButton.propTypes = propTypes;
ButtonGroupButton.defaultProps = defaultProps;

exports.default = ButtonGroupButton;