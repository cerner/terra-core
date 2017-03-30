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
    _react2.default.createElement('path', { d: 'M38.1 36h-9.5c-.9 0-1.6-.7-1.6-1.6V13.6c0-.9.7-1.6 1.6-1.6h9.5v6l9.3-9-9.3-9v6h-9.5C24.4 6 21 9.4 21 13.6V21H0v6h21v7.4c0 4.2 3.4 7.6 7.6 7.6h9.5v6l9.3-9-9.3-9v6z' })
  );
};

SvgIcon.displayName = "IconSeparate";
SvgIcon.defaultProps = { "className": "", "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "isBidi": true };

exports.default = SvgIcon;
/* eslint-enable */