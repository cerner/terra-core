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
    _react2.default.createElement('path', { fill: '#E50000', d: 'M36 22c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm-9 12c0-5 4-9 9-9 1.9 0 3.7.6 5.2 1.7L28.7 39.2C27.6 37.7 27 35.9 27 34zm9 9c-1.9 0-3.7-.6-5.2-1.7l12.5-12.5c1 1.5 1.7 3.3 1.7 5.2 0 5-4 9-9 9z' }),
    _react2.default.createElement('path', { d: 'M.4 4.5c-.6-.6-.6-1.6 0-2.2l1.1-1.1c.6-.6 1.6-.6 2.2 0L15 12.6H8.6L.4 4.5zm22 29.3c0-3.2 1.1-6.1 2.9-8.4H23v3h-3v-3h-3v-3h3v-3h3v3h3v2.2c2.5-2.6 6-4.3 9.9-4.3V15H7.1v7.6c0 6.3 5.1 11.4 11.4 11.4h3.9v-.2z' })
  );
};

SvgIcon.displayName = "IconPharmacyReject";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;
/* eslint-enable */