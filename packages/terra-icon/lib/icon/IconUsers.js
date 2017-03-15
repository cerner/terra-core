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
    _react2.default.createElement('path', { d: 'M15 0a8.7 8.7 0 1 1-8.7 8.7A8.71 8.71 0 0 1 15 0zm18 11a8.7 8.7 0 1 1-8.7 8.7A8.71 8.71 0 0 1 33 11zm15 37v-4.4a12.93 12.93 0 0 0-12.9-12.9h-4.2A12.93 12.93 0 0 0 18 43.6V48zM25.5 28.7a11.32 11.32 0 0 1-4.1-8.3 14.21 14.21 0 0 0-4.2-.7H13A13 13 0 0 0 0 32.6V37h16.4a15.52 15.52 0 0 1 9.1-8.3z' })
  );
};

SvgIcon.displayName = "IconUsers";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1" };

exports.default = SvgIcon;
/* eslint-enable */