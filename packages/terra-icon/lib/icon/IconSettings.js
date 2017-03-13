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
    _react2.default.createElement('path', { d: 'M48 27v-6h-7.2a16.37 16.37 0 0 0-2.8-6.8l5-5L38.8 5l-5 5A18 18 0 0 0 27 7.1V0h-6v7.1a16.37 16.37 0 0 0-6.8 2.8l-5-5-4.3 4.3 5 5A17.82 17.82 0 0 0 7.1 21H0v6h7.2a16.37 16.37 0 0 0 2.8 6.8l-5.1 5.1 4.2 4.2 5.1-5.1a17.82 17.82 0 0 0 6.8 2.8V48h6v-7.2a16.37 16.37 0 0 0 6.8-2.8l5.1 5.1 4.2-4.2-5.1-5.1a16.37 16.37 0 0 0 2.8-6.8zm-35.1-3.1A11.1 11.1 0 1 1 24 35a11.14 11.14 0 0 1-11.1-11.1z' })
  );
};

SvgIcon.displayName = "IconSettings";
SvgIcon.defaultProps = { "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1" };

exports.default = SvgIcon;
/* eslint-enable */