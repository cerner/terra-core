'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraProgressBar = require('terra-progress-bar');

var _terraProgressBar2 = _interopRequireDefault(_terraProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBarSize = function ProgressBarSize() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_terraProgressBar2.default, { heightSize: 'tiny', value: 15, color: '#8ccc62' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_terraProgressBar2.default, { heightSize: 'small', value: 30, color: '#8ccc62' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_terraProgressBar2.default, { heightSize: 'medium', value: 45, color: '#8ccc62' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_terraProgressBar2.default, { heightSize: 'large', value: 60, color: '#8ccc62' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_terraProgressBar2.default, { heightSize: 'huge', value: 75, color: '#8ccc62' })
  );
};

exports.default = ProgressBarSize;