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
    _react2.default.createElement('path', { d: 'M.6 7.2c-.8-.8-.8-2.1 0-2.9L2 3c.8-.8 2-.8 2.8 0l15 15h-8.5L.6 7.2zM48 21v10c0 8.3-6.7 15-15 15h-8c-8.3 0-15-6.7-15-15V21h38zM35 31h-4v-4h-4v4h-4v4h4v4h4v-4h4v-4z' })
  );
};

SvgIcon.displayName = "IconPharmacyReview";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */