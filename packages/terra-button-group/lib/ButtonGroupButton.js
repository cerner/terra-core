'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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
      text = _ref.text,
      icon = _ref.icon,
      isReversed = _ref.isReversed,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ['isSelected', 'text', 'icon', 'isReversed', 'children']);

  var attributes = _extends({}, otherProps);
  var buttonText = text ? _react2.default.createElement(
    'span',
    { className: 'terra-ButtonGroupButton-text' },
    text
  ) : null;

  var order = isReversed ? [buttonText, icon, children] : [icon, buttonText, children];

  attributes.className = (0, _classnames2.default)(['terra-ButtonGroupButton', { 'is-selected': isSelected }, attributes.className]);
  attributes['aria-selected'] = isSelected;

  return _react2.default.createElement.apply(_react2.default, ['button', attributes].concat(order));
};

ButtonGroupButton.propTypes = propTypes;
ButtonGroupButton.defaultProps = defaultProps;

exports.default = ButtonGroupButton;