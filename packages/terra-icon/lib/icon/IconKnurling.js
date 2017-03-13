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
    _react2.default.createElement('path', { d: 'M15.4 18.5c3.1 0 5.5 2.5 5.6 5.5 0 3.1-2.5 5.5-5.5 5.6-3.1 0-5.5-2.5-5.6-5.5 0-3.1 2.4-5.6 5.5-5.6zm0-18.5c3.1 0 5.5 2.5 5.6 5.5 0 3.1-2.5 5.5-5.5 5.6-3.1 0-5.5-2.5-5.6-5.5 0-3.1 2.4-5.6 5.5-5.6zm0 36.9c3.1 0 5.5 2.5 5.6 5.5 0 3.1-2.5 5.5-5.5 5.6-3.1 0-5.5-2.5-5.6-5.5-.1-3.1 2.4-5.6 5.5-5.6zm17.2-18.4c3.1 0 5.5 2.5 5.5 5.5s-2.5 5.5-5.5 5.5-5.5-2.5-5.5-5.5 2.4-5.5 5.5-5.5zm0-18.5c3.1 0 5.5 2.5 5.5 5.5S35.6 11 32.6 11s-5.5-2.5-5.5-5.5S29.5 0 32.6 0zm0 36.9c3.1 0 5.5 2.5 5.5 5.5S35.7 48 32.6 48s-5.5-2.5-5.5-5.5c0-3.1 2.4-5.6 5.5-5.6z' })
  );
};

SvgIcon.displayName = "IconKnurling";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */