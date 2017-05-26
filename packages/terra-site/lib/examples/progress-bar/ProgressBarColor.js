'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraProgressBar = require('terra-progress-bar');

var _terraProgressBar2 = _interopRequireDefault(_terraProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBarColor = function ProgressBarColor() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_terraProgressBar2.default, { value: 5, max: 10, color: 'Orange' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_terraProgressBar2.default, { value: 7.5, max: 10, color: '#8ccc62' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_terraProgressBar2.default, { value: 10, max: 10, color: 'rgb(255, 0, 0)' })
  );
};

exports.default = ProgressBarColor;