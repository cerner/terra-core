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
    _react2.default.createElement('path', { d: 'M24 0a24 24 0 1 0 24 24A23.94 23.94 0 0 0 24 0zM5.5 24A18.52 18.52 0 0 1 24 5.5a18.05 18.05 0 0 1 10.9 3.6L9.2 35a18.43 18.43 0 0 1-3.7-11zM24 42.5a18.05 18.05 0 0 1-10.9-3.6L38.8 13A18.42 18.42 0 0 1 24 42.5z' })
  );
};

SvgIcon.displayName = "IconCancel";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1" };

exports.default = SvgIcon;
/* eslint-enable */