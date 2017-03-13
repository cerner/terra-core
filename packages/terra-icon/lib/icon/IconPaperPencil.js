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
    _react2.default.createElement('path', { d: 'M30.1 8.8l-7.5-7.4C21.8.6 20.3 0 19.2 0H4.5c-1.1 0-2 .9-2 2v34c0 1.1.9 2 2 2H25l3-3H5.5V3h13v9c0 1.1.9 2 2 2h8v20.5l3-3V12.2c0-1.1-.6-2.7-1.4-3.4zm-8.6-4.3l6.5 6.4s0 .1.1.1h-6.5V4.5z' }),
    _react2.default.createElement('path', { d: 'M21.5 48l2.8-6.4 3.5 3.5-6.3 2.9zm22.4-18.7l1.4-1.4c.3-.3.3-.9 0-1.2l-2.4-2.4c-.3-.3-.9-.3-1.2 0l-1.4 1.4 3.6 3.6zm-4.7-2.6L25.3 40.6l3.6 3.6 13.9-13.9-3.6-3.6z' })
  );
};

SvgIcon.displayName = "IconPaperPencil";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */