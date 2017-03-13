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
    _react2.default.createElement('circle', { cx: '24', cy: '24', r: '24' }),
    _react2.default.createElement('path', { fill: '#FFF', d: 'M28.2 24l9.7-9.8-2.1-2.1-1.2-1.2-1-.9-9.6 9.7-9.6-9.7-2.2 2.1-1.1 1.1-1 1 9.7 9.8-9.7 9.8 1 1 1.1 1.1 2.2 2.1 9.6-9.7 9.6 9.7 1-.9 1.2-1.2 2.1-2.1z' })
  );
};

SvgIcon.displayName = "IconIncomplete";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */