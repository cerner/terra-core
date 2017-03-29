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
    _react2.default.createElement('path', { d: 'M47.3 24L38 15v6H22v-6.2C22 10 18 6 13.2 6H0v6h13.2c1.6 0 2.8 1.3 2.8 2.8v18.3c0 1.6-1.3 2.8-2.8 2.8H0v6h13.2c4.9 0 8.8-4 8.8-8.8V27h16v6l9.3-9z' })
  );
};

SvgIcon.displayName = "IconMerge";
SvgIcon.defaultProps = { "className": "", "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "isBidi": true };

exports.default = SvgIcon;
/* eslint-enable */