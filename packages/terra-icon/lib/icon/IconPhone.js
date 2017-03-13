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
    _react2.default.createElement('path', { d: 'M47.1 38L37 31c-.7-.5-1.6-.5-2.3-.1l-6 3.6c-2.4-1.7-5.2-4-8.2-7-3-3-5.4-5.9-7.1-8.4l3.5-6c.4-.7.4-1.6-.1-2.3L10 .9C9.2-.1 7.7-.3 6.8.6L1.2 5.8l-.4.4c-.7.9-1 2-.7 3.1.2 1.1 2.5 11.3 15 23.8C27.4 45.4 37.3 47.7 38.7 48c1.1.3 2.3 0 3.2-.7 0 0 .4-.3.4-.4l5.1-5.5c.9-1.1.7-2.6-.3-3.4z' })
  );
};

SvgIcon.displayName = "IconPhone";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */