'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('../IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIcon = function SvgIcon(customProps) {
  var attributes = _extends({}, customProps);

  return _react2.default.createElement(
    _IconBase2.default,
    attributes,
    _react2.default.createElement('path', { d: 'M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19v-3H5V17h27v4h3V5h-4z' }),
    _react2.default.createElement('path', { d: 'M48 33v-7.3l-2.7 2.7C43.1 25.7 39.7 24 36 24c-6.6 0-12 5.4-12 12s5.4 12 12 12c3.5 0 6.6-1.5 8.7-3.8L43 42.4c-1.7 1.9-4.2 3.1-7 3.1-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5c3 0 5.8 1.5 7.5 3.7L40.7 33H48z' })
  );
};

SvgIcon.displayName = "IconRecurringEvent";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */