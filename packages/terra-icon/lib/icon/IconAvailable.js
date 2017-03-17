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
    _react2.default.createElement('path', { fill: '#78C346', d: 'M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z' }),
    _react2.default.createElement('path', { fill: '#FFF', d: 'M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z' })
  );
};

SvgIcon.displayName = "IconAvailable";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */