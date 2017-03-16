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
    _react2.default.createElement('path', { d: 'M24 0A14.94 14.94 0 0 0 9.1 14.9a15.52 15.52 0 0 0 1.5 6.5 14.69 14.69 0 0 0 4.1 5.1 12.06 12.06 0 0 1 4.3 6.7 2.19 2.19 0 0 0-1.1 1.8v7.8a2.11 2.11 0 0 0 2.1 2.1h1a3 3 0 1 0 6 0h.9a2.11 2.11 0 0 0 2.1-2.1V35a2.06 2.06 0 0 0-1.1-1.8 12.4 12.4 0 0 1 4.1-6.6 16.23 16.23 0 0 0 4.4-5.3 14.43 14.43 0 0 0 1.5-6.5A14.92 14.92 0 0 0 24 0zm7 24.4a15.76 15.76 0 0 0-3.9 5 11.75 11.75 0 0 0-1.2 3.6h-.2V20h2a1.54 1.54 0 0 0 1.5-1.5 1.56 1.56 0 0 0-1.6-1.5h-7a1.5 1.5 0 0 0 0 3h2v13h-.5a13.86 13.86 0 0 0-1.2-3.6 14.67 14.67 0 0 0-4.5-5.4h.1a12 12 0 0 1-4.3-9.1A11.78 11.78 0 0 1 24 3a11.93 11.93 0 0 1 11.9 11.9 12 12 0 0 1-4.9 9.5z' })
  );
};

SvgIcon.displayName = "IconLightbulb";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1" };

exports.default = SvgIcon;
/* eslint-enable */