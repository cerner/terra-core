'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('terra-form/lib/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

// remove eslint-disable once terra-form has been published
/* eslint-disable import/no-extraneous-dependencies */
var InputExamples = function InputExamples() {
  return _react2.default.createElement(
    'form',
    null,
    _react2.default.createElement(_Input2.default, {
      name: 'foo',
      defaultValue: 'bar'
    })
  );
};

exports.default = InputExamples;