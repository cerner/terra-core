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
    _react2.default.createElement('path', { d: 'M34.6 13.6L22.4 1.4C21.5.6 20.3.1 19 0H2C.9 0 0 .9 0 2v44c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2V17c-.1-1.3-.6-2.5-1.4-3.4zm-2.1 2.1c.1.1.1.2.2.3H21V4.2l11.5 11.5zM3 45V3h15v14c0 1.1.9 2 2 2h13v26H3z' })
  );
};

SvgIcon.displayName = "IconPaperFolded";
SvgIcon.defaultProps = { "className": "", "viewBox": "0 0 36 48", "xmlns": "http://www.w3.org/2000/svg", "isBidi": true };

exports.default = SvgIcon;
/* eslint-enable */