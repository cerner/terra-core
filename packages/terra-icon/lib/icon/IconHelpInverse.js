'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('../IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIcon = function SvgIcon(customProps) {
  var attributes = _extends({}, customProps);
  attributes.className = (0, _classnames2.default)("is-static", attributes.className);

  return _react2.default.createElement(
    _IconBase2.default,
    attributes,
    _react2.default.createElement('path', { fill: '#FFF', d: 'M24.1 0H24C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24C48 10.8 37.3 0 24.1 0zM26 36h-4v-4h4v4zm4.6-12.8c-.6.7-1.4 1.4-2.2 1.9-1.2.8-2.4 1-2.4 1.8V28h-4v-.8c0-1.8.9-3.5 2.4-4.5.6-.3 1.1-.6 1.6-.9 1.6-.8 2.2-2.7 1.4-4.3-.6-1.1-1.7-1.7-2.9-1.7H24c-1.6 0-3 1.3-3.2 2.9v.3h-4c-.1-3.1 2.1-5.9 5.1-6.6.9-.3 1.9-.4 2.8-.4h.2c3.8-.2 7 2.8 7.2 6.6.1 1.7-.5 3.3-1.5 4.6z' })
  );
};

SvgIcon.displayName = "IconHelpInverse";
SvgIcon.defaultProps = { "className": "is-static", "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg" };

exports.default = SvgIcon;