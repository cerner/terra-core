'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraStatus = require('terra-status');

var _terraStatus2 = _interopRequireDefault(_terraStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simpleText = _react2.default.createElement(
  'div',
  { style: { padding: '5px' } },
  'Sample text'
);

var StatusDefault = function StatusDefault() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _terraStatus2.default,
      { color: '#ff0000' },
      simpleText
    )
  );
};

exports.default = StatusDefault;