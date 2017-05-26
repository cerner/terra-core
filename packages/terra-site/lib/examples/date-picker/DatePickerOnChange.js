'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDatePicker = require('terra-date-picker');

var _terraDatePicker2 = _interopRequireDefault(_terraDatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleOnChange = function handleOnChange(selectedDate) {
  window.console.log('**handleOnChange** The selected date is: ', selectedDate);
};

var DatePickerOnChange = function DatePickerOnChange() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_terraDatePicker2.default, {
      onChange: handleOnChange
    })
  );
};

exports.default = DatePickerOnChange;