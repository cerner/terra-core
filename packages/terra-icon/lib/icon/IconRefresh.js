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
    _react2.default.createElement('path', { d: 'M48 23.8l-8.1-8-8 8h5.9v.3a13.72 13.72 0 0 1-13.7 13.7 18.59 18.59 0 0 1-3.3-.4l-3.9 3.9a17.07 17.07 0 0 0 7.1 1.5 18.67 18.67 0 0 0 18.7-18.7v-.3zM23.9 10.2a18.59 18.59 0 0 1 3.3.4l3.9-3.9A16.74 16.74 0 0 0 24 5.2 18.67 18.67 0 0 0 5.3 23.9H0L8.1 32l8-8.1h-5.9a13.72 13.72 0 0 1 13.7-13.7z' })
  );
};

SvgIcon.displayName = "IconRefresh";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1" };

exports.default = SvgIcon;
/* eslint-enable */