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
  attributes.className = (0, _classnames2.default)("is-themeable", attributes.className);

  return _react2.default.createElement(
    _IconBase2.default,
    attributes,
    _react2.default.createElement('path', { d: 'M45 16.7c2 0 3 2.6 3 3.5s-1 3.4-3 3.4V36a2.22 2.22 0 0 1-1 1.6 2.25 2.25 0 0 1-2.3-.3c-7.5-6.2-17.6-10-22.7-10-2.2 0-3.4.8-3.3 3.5a6.86 6.86 0 0 0 1.4 3.4 3.23 3.23 0 0 0-.6 1.8 2.85 2.85 0 0 0 .2 1.6 6 6 0 0 0 .9 1.5 17.88 17.88 0 0 0 1.3 1.4c.4.4 1 .8 1.6 1.4a4.46 4.46 0 0 1-3 2.2 8.64 8.64 0 0 1-4.5.3 6 6 0 0 1-3.5-1.5 19.66 19.66 0 0 0-.6-2.4c-.4-1.2-.7-2-.9-2.6a13.61 13.61 0 0 1-.6-2.4 17.62 17.62 0 0 1-.4-2.7c0-.8 0-1.6.1-2.7a15.44 15.44 0 0 1 .4-3H4.3a3.8 3.8 0 0 1-3-1.3 4 4 0 0 1-1.3-3v-5.2a4.16 4.16 0 0 1 1.3-3.1 4.34 4.34 0 0 1 3-1.3h12.8c9.4 0 20-4.6 24.5-9.2A1.63 1.63 0 0 1 44 4a5 5 0 0 1 1 3.3zm-25 8.2c6.7.8 15.1 4.1 22.1 9.5V7.1c-7 5.5-15.4 7.5-22.1 8.3z' })
  );
};

SvgIcon.displayName = "IconAnnouncement";
SvgIcon.defaultProps = { "className": "is-themeable", "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1" };

exports.default = SvgIcon;