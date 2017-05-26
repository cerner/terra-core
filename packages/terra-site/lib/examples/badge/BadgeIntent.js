'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraBadge = require('terra-badge');

var _terraBadge2 = _interopRequireDefault(_terraBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BadgeIntent = function BadgeIntent() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_terraBadge2.default, { text: 'Default' }),
    ' ',
    _react2.default.createElement(_terraBadge2.default, { intent: 'primary', text: 'Primary' }),
    ' ',
    _react2.default.createElement(_terraBadge2.default, { intent: 'secondary', text: 'Secondary' }),
    ' ',
    _react2.default.createElement(_terraBadge2.default, { intent: 'positive', text: 'Positive' }),
    ' ',
    _react2.default.createElement(_terraBadge2.default, { intent: 'negative', text: 'Negative' }),
    ' ',
    _react2.default.createElement(_terraBadge2.default, { intent: 'warning', text: 'Warning' }),
    ' ',
    _react2.default.createElement(_terraBadge2.default, { intent: 'info', text: 'Info' })
  );
};

exports.default = BadgeIntent;