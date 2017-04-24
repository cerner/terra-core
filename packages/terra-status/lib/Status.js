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

require('./Status.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Child node. Component to display next to the status indicator.
   */
  children: _react.PropTypes.node.isRequired,
  /**
   * The color of the status indicator. Accepts a CSS color value.
   */
  color: _react.PropTypes.string.isRequired
};

var Status = function Status(_ref) {
  var color = _ref.color,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['color', 'children']);

  var statusClassNames = (0, _classnames2.default)('terra-Status', _defineProperty({}, '' + customProps.className, customProps.className));
  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { style: { borderColor: color }, className: statusClassNames }),
    children
  );
};

Status.propTypes = propTypes;

exports.default = Status;