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
    _react2.default.createElement('path', { d: 'M48 24c0 5.5-1.8 10.6-5.2 14.9C38.2 44.7 31.4 48 24 48 10.8 48 0 37.2 0 24S10.8 0 24 0c2.4 0 4.8.4 7.1 1.1C41.2 4.2 48 13.4 48 24zm-3 0c0-9.3-5.9-17.3-14.8-20.1-2-.6-4.1-.9-6.2-.9C12.4 3 3 12.4 3 24s9.4 21 21 21c6.5 0 12.5-2.9 16.5-8 2.9-3.7 4.5-8.2 4.5-13z' })
  );
};

SvgIcon.displayName = "IconUnavailable";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */