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
    _react2.default.createElement('path', { d: 'M48 48h-8V.1h8V48zm-14 0V0H0v48h34zM7 12.2L11.3 8 27 24 11.3 40 7 35.8 18.6 24 7 12.2z' })
  );
};

SvgIcon.displayName = "IconPanelRight";
SvgIcon.defaultProps = { "className": "is-themeable", "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "isBidi": true };

exports.default = SvgIcon;