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
    _react2.default.createElement('path', { fill: '#0053E6', d: 'M47.7 23.2L24.8.3c-.5-.4-1.1-.4-1.6 0L.3 23.2c-.4.5-.4 1.1 0 1.6l22.9 22.9c.5.4 1.1.4 1.6 0l22.9-22.9c.4-.5.4-1.1 0-1.6zm-.7.9L24.1 47h-.2L1 24.1v-.2L23.9 1h.2L47 23.9v.2z' }),
    _react2.default.createElement('path', { fill: '#0053E6', d: 'M24 42l11-11h-8V8h-6v23h-8z' })
  );
};

SvgIcon.displayName = "IconLow";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */