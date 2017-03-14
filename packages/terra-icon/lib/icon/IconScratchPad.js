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
    _react2.default.createElement('path', { d: 'M40.7 5H7.3c-.5 0-.9.3-1.1.7L0 20v21c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V20.1L41.8 5.7c-.2-.4-.6-.7-1.1-.7zm-11 15c0 3.1-2.6 5.6-5.7 5.6s-5.6-2.5-5.7-5.6h-15L8.5 8h31.1l5.2 12H29.7z' })
  );
};

SvgIcon.displayName = "IconScratchPad";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */