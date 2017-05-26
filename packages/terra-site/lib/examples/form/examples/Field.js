'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('terra-form/lib/Field');

var _Field2 = _interopRequireDefault(_Field);

var _Input = require('terra-form/lib/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldExamples = function FieldExamples() {
  return _react2.default.createElement(
    'form',
    null,
    _react2.default.createElement(
      _Field2.default,
      {
        type: 'checkbox',
        label: 'Where do you work',
        name: 'work_location',
        value: '',
        error: 'This field is required',
        help: 'We need to to verify if you work for a big or small company',
        required: true
      },
      _react2.default.createElement(_Input2.default, { type: 'text', defaultValue: 'Element' })
    )
  );
};

exports.default = FieldExamples;