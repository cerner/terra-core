'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraBadge = require('terra-badge');

var _terraBadge2 = _interopRequireDefault(_terraBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BadgeSize = function BadgeSize() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_terraBadge2.default, { size: 'tiny', text: 'Tiny' }),
    ' ',
    _react2.default.createElement(_terraBadge2.default, { size: 'small', text: 'Small' }),
    ' ',
    _react2.default.createElement(_terraBadge2.default, { size: 'medium', text: 'Medium' }),
    ' ',
    _react2.default.createElement(_terraBadge2.default, { size: 'large', text: 'Large' }),
    ' ',
    _react2.default.createElement(_terraBadge2.default, { size: 'huge', text: 'Huge' })
  );
};

exports.default = BadgeSize;