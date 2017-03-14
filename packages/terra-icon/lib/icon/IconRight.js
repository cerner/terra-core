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
    _react2.default.createElement('path', { d: 'M24.5.1l-3.8 3.8L37.4 21H0v6h37.4L20.7 44.1l3.8 3.8L48 24z' })
  );
};

SvgIcon.displayName = "IconRight";
SvgIcon.defaultProps = { "className": "", "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1", "isBidi": true };

exports.default = SvgIcon;
/* eslint-enable */