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
    _react2.default.createElement('path', { d: 'M46.1 9.2H29.3a5.63 5.63 0 0 1-3.2-1.3l-3.3-3.3a5.12 5.12 0 0 0-3.2-1.3L9 3a1.9 1.9 0 0 0-1.9 1.9V9h9.5a5.63 5.63 0 0 1 3.2 1.3l3.3 3.3a5.12 5.12 0 0 0 3.2 1.3h16.9a1.9 1.9 0 0 1 1.9 1.9v18.9h1.1a1.9 1.9 0 0 0 1.9-1.9V11a2 2 0 0 0-2-1.8zM40 18a1.9 1.9 0 0 1 1.9 1.9V43a1.81 1.81 0 0 1-1.8 1.9L2 45a2 2 0 0 1-2-1.9V13.9A1.9 1.9 0 0 1 1.9 12H13a5.37 5.37 0 0 1 3.2 1.3l3.3 3.4a5.37 5.37 0 0 0 3.2 1.3z' })
  );
};

SvgIcon.displayName = "IconProjects";
SvgIcon.defaultProps = { "className": "", "viewBox": "0 0 48 48", "xmlns": "http://www.w3.org/2000/svg", "data-name": "Layer 1", "isBidi": true };

exports.default = SvgIcon;
/* eslint-enable */