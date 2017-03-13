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
    _react2.default.createElement('path', { d: 'M47.4 43.3L33.8 29.6c2.2-3.1 3.6-6.8 3.6-10.9C37.3 8.4 29 0 18.7 0S0 8.4 0 18.7s8.4 18.6 18.7 18.6c4.1 0 7.9-1.3 10.9-3.6l13.6 13.6c.8.8 2 .8 2.8 0l1.4-1.4c.8-.6.8-1.9 0-2.6zM2.9 18.7C2.9 10 10 2.9 18.7 2.9S34.4 10 34.4 18.7s-7.1 15.8-15.8 15.8S2.9 27.4 2.9 18.7zM7 17h23v3H7v-3z' })
  );
};

SvgIcon.displayName = "IconZoomOut";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */