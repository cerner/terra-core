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
    _react2.default.createElement('path', { d: 'M41 0H7v5h2.2v2.9c0 8.4 6.6 14.1 11.2 17C16.7 27 9.2 32.3 9.2 40.1V43H7v5h34v-5h-2.2v-2.9c0-7.9-7.5-13.1-11.2-15.2 4.6-2.9 11.2-8.6 11.2-17V5H41zm-6 40.1v.8A21.69 21.69 0 0 0 24 38a21.69 21.69 0 0 0-11 2.9v-.8c0-7.1 8.6-11.9 10.4-12.8l.7-.4.6.4C26.4 28.2 35 33 35 40.1zm.4-32.2a13.07 13.07 0 0 1-1.9 6.6 23.1 23.1 0 0 1-9.5 2 23.1 23.1 0 0 1-9.5-2 13.07 13.07 0 0 1-1.9-6.6V5h22.8z' })
  );
};

SvgIcon.displayName = "IconPending";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1" };

exports.default = SvgIcon;
/* eslint-enable */