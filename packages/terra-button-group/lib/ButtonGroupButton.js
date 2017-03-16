'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  isSelected: _react.PropTypes.bool
};

var ButtonGroupButton = function ButtonGroupButton(_ref) {
  var isSelected = _ref.isSelected,
      otherProps = _objectWithoutProperties(_ref, ['isSelected']);

  var attributes = _extends({}, otherProps);
  attributes.className = (0, _classnames2.default)(['terra-ButtonGroup-button', { 'is-active': isSelected }, attributes.className]);
  attributes['aria-selected'] = isSelected;

  return _react2.default.createElement(_terraButton2.default, attributes);
};

ButtonGroupButton.propTypes = propTypes;

exports.default = ButtonGroupButton;