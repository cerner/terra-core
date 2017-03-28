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
    _react2.default.createElement('path', { d: 'M24 5.3l5.2 11 .7 1.4 1.6.2 11.9 1.8-8.7 8.9-1.1 1.1.2 1.5 2 12.4-10.4-5.7-1.4-.8-1.4.8-10.4 5.7 2-12.4.2-1.5-1.1-1.1-8.7-8.9L16.5 18l1.6-.2.7-1.4L24 5.3M24 0c-.6 0-1 .4-1.4 1.2L16.1 15 1.6 17.2c-1.1.2-1.6.7-1.6 1.4 0 .4.2.9.7 1.5l10.5 10.7-2.5 15.1c0 .3-.1.5-.1.6 0 .4.1.8.3 1.1.3.3.6.4 1 .4.3 0 .7-.1 1.2-.4l13-7.1 13 7.1c.4.2.8.4 1.2.4.4 0 .7-.1.9-.4.2-.3.3-.7.3-1.1v-.6L37 30.8l10.5-10.7c.5-.5.8-1 .8-1.5 0-.7-.5-1.2-1.6-1.4L31.9 15 25.4 1.2C25 .4 24.6 0 24 0z' })
  );
};

SvgIcon.displayName = "IconFeaturedOutline";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */