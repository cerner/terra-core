'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDatePicker = require('terra-date-picker');

var _terraDatePicker2 = _interopRequireDefault(_terraDatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isWeekday = function isWeekday(date) {
  var day = date.day();
  return day !== 0 && day !== 6;
};

var DatePickerFilterDates = function DatePickerFilterDates() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_terraDatePicker2.default, {
      filterDate: isWeekday
    })
  );
};

exports.default = DatePickerFilterDates;