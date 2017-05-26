'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconDue = require('terra-icon/lib/icon/IconDue');

var _IconDue2 = _interopRequireDefault(_IconDue);

var _terraStatus = require('terra-status');

var _terraStatus2 = _interopRequireDefault(_terraStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies
var icon = _react2.default.createElement(_IconDue2.default, { height: '60', width: '60' });

var StatusIcon = function StatusIcon() {
  return _react2.default.createElement(
    _terraStatus2.default,
    { color: '#ff0000' },
    icon
  );
};

exports.default = StatusIcon;