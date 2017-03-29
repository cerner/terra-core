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
    _react2.default.createElement('path', { d: 'M48 18V3.4l-5.4 5.4C38.2 3.4 31.5 0 24 0 10.7 0 0 10.7 0 24s10.7 24 24 24c6.9 0 13.1-2.9 17.5-7.6L38 36.9c-3.5 3.8-8.4 6.1-14 6.1-10.5 0-19-8.5-19-19S13.5 5 24 5c6.1 0 11.5 2.9 15 7.4L33.4 18H48z' })
  );
};

SvgIcon.displayName = "IconReload";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */