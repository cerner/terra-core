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
    _react2.default.createElement('path', { d: 'M47 22.5L25.4.6a2.05 2.05 0 0 0-2.9 0L1 22.5c-.8.8-.6 1.5.6 1.5H6v22a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V35a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V24h4.4c1.2 0 1.4-.7.6-1.5z' })
  );
};

SvgIcon.displayName = "IconHouse";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1" };

exports.default = SvgIcon;
/* eslint-enable */