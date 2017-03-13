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
    _react2.default.createElement('path', { d: 'M44.4 13.2a3.59 3.59 0 0 0-3.6 3.6 2.77 2.77 0 0 0 .3 1.3l-9.8 9.8a3.65 3.65 0 0 0-1.5-.3 3.14 3.14 0 0 0-2.1.7L19.4 20a5 5 0 0 0 .2-1.2 3.6 3.6 0 0 0-7.2 0 3 3 0 0 0 .2 1l-7.9 7.9a3.59 3.59 0 0 0-1.1-.2 3.6 3.6 0 1 0 3.6 3.6 3.19 3.19 0 0 0-.3-1.4l7.7-7.7a3.19 3.19 0 0 0 1.4.3 2.77 2.77 0 0 0 1.3-.3l8.9 8.9v.2a3.61 3.61 0 1 0 7-1L43.3 20a4.25 4.25 0 0 0 1.1.2 3.59 3.59 0 0 0 3.6-3.6 3.55 3.55 0 0 0-3.6-3.4z' })
  );
};

SvgIcon.displayName = "IconAnalytics";
SvgIcon.defaultProps = { "className": "", "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1", "isBidi": true };

exports.default = SvgIcon;
/* eslint-enable */