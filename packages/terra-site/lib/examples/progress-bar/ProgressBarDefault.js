'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraProgressBar = require('terra-progress-bar');

var _terraProgressBar2 = _interopRequireDefault(_terraProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBarDefault = function ProgressBarDefault() {
  return _react2.default.createElement(_terraProgressBar2.default, { value: 15 });
};

exports.default = ProgressBarDefault;