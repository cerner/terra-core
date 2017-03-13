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
    _react2.default.createElement('path', { fill: '#007CC3', d: 'M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z' }),
    _react2.default.createElement('path', { fill: '#FFF', d: 'M24.1 32.7c.7-1.8 6.3-11 2.4-13.5-2.2-1.4-5.2-.5-7.6 1.2l-.2 1.6c1.4-.5 2.8-.5 3.2.7 1 2.9-2.5 8-3.5 10.7-2.6 7.2 3.7 8.1 8.1 5.1l.2-1.7c-2.3.6-4-.3-2.6-4.1zM26.5 8c1.9 0 3.5 1.6 3.5 3.5S28.4 15 26.5 15 23 13.4 23 11.5 24.6 8 26.5 8z' })
  );
};

SvgIcon.displayName = "IconInformation";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */