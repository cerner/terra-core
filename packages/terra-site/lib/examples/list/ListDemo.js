'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraList = require('terra-list');

var _terraList2 = _interopRequireDefault(_terraList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = function list() {
  return _react2.default.createElement(
    _terraList2.default,
    { isDivided: true },
    _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
        'p',
        null,
        'test'
      ), key: '123' }),
    _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
        'p',
        null,
        'test'
      ), key: '124' }),
    _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
        'p',
        null,
        'test'
      ), key: '125' })
  );
};

exports.default = list;