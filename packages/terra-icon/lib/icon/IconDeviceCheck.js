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
    _react2.default.createElement('path', { d: 'M22 36c0-3 .9-5.7 2.5-8H9V8h19v16.5c.9-.6 1.9-1.2 3-1.6V2c0-1.1-.9-2-2-2H8C6.9 0 6 .9 6 2v34c0 1.1.9 2 2 2h14.2c-.1-.7-.2-1.3-.2-2zM15.5 3.9c0-.5.4-.9.9-.9h4.1c.5 0 .9.4.9.9V4c0 .5-.4.9-.9.9h-4.1c-.5 0-.9-.4-.9-1zm3 31.1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' }),
    _react2.default.createElement('path', { fill: '#78C346', d: 'M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z' }),
    _react2.default.createElement('path', { fill: '#FFF', d: 'M44.4 32.1L42.3 30l-8.1 8.1-4.4-4.4-2.1 2.1 6.5 6.5z' })
  );
};

SvgIcon.displayName = "IconDeviceCheck";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */