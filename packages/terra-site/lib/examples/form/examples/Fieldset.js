'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('terra-form/lib/Field');

var _Field2 = _interopRequireDefault(_Field);

var _Fieldset = require('terra-form/lib/Fieldset');

var _Fieldset2 = _interopRequireDefault(_Fieldset);

var _Input = require('terra-form/lib/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldsetExamples = function FieldsetExamples() {
  return _react2.default.createElement(
    'form',
    null,
    _react2.default.createElement(
      _Fieldset2.default,
      {
        type: 'checkbox',
        legend: 'Give your full name here',
        name: 'children_present',
        value: 'children_present',
        error: 'All fields must be filled out',
        help: 'Families are eligible for family package plans',
        required: true
      },
      _react2.default.createElement(
        _Field2.default,
        {
          label: 'First',
          isInline: true,
          required: true,
          htmlFor: 'test'
        },
        _react2.default.createElement(_Input2.default, { id: 'test', type: 'text', name: 'first', defaultValue: '' })
      ),
      _react2.default.createElement(
        _Field2.default,
        {
          label: 'Middle',
          isInline: true,
          required: true
        },
        _react2.default.createElement(_Input2.default, { type: 'text', name: 'middle', defaultValue: '' })
      ),
      _react2.default.createElement(
        _Field2.default,
        {
          label: 'Last',
          isInline: true,
          required: true
        },
        _react2.default.createElement(_Input2.default, { type: 'text', name: 'last', defaultValue: '' })
      )
    )
  );
};

exports.default = FieldsetExamples;