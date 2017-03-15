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
    _react2.default.createElement('path', { d: 'M36 24a5.6 5.6 0 1 1-5.6 5.6A5.59 5.59 0 0 1 36 24zm9.8 24v-2.8a8.45 8.45 0 0 0-8.4-8.4h-2.7a8.45 8.45 0 0 0-8.4 8.4V48zM33 22.6V9h-5V0H9.1L9 9H4v29h12V28h5v10h6a12.68 12.68 0 0 1 3.9-2.6 6.9 6.9 0 0 1-1.8-2.4H25v-5h3.6a7.76 7.76 0 0 1 4.4-5.4zM12 33H8v-5h4zm0-10H8v-5h4zm8.5 0h-4v-5h4zM24 11h-4v4h-3v-4h-4V8h4V4h3v4h4zm5 12h-4v-5h4z' })
  );
};

SvgIcon.displayName = "IconPersonHospital";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1" };

exports.default = SvgIcon;
/* eslint-enable */