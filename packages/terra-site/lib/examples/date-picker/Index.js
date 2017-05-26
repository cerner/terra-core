'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _terraPropsTable = require('terra-props-table');

var _terraPropsTable2 = _interopRequireDefault(_terraPropsTable);

var _terraMarkdown = require('terra-markdown');

var _terraMarkdown2 = _interopRequireDefault(_terraMarkdown);

var _terraDatePicker = require('terra-date-picker');

var _terraDatePicker2 = _interopRequireDefault(_terraDatePicker);

var _DateRange = require('terra-date-picker/lib/DateRange');

var _DateRange2 = _interopRequireDefault(_DateRange);

var _README = require('terra-date-picker/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-date-picker/package.json');

var _DatePicker = require('!raw-loader!terra-date-picker/src/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _DatePickerFilterDates = require('./DatePickerFilterDates');

var _DatePickerFilterDates2 = _interopRequireDefault(_DatePickerFilterDates);

var _DatePickerOnChange = require('./DatePickerOnChange');

var _DatePickerOnChange2 = _interopRequireDefault(_DatePickerOnChange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Example Files
var dateFormat = 'MM/DD/YYYY';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions


var DatePickerExamples = function DatePickerExamples() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { id: 'version' },
      'Version: ',
      _package.version
    ),
    _react2.default.createElement(_terraMarkdown2.default, { id: 'readme', src: _README2.default }),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _DatePicker2.default }),
    _react2.default.createElement(
      'h2',
      { id: 'default' },
      'Default'
    ),
    _react2.default.createElement(_terraDatePicker2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'exclude-dates' },
      'ExcludeDates'
    ),
    _react2.default.createElement(_terraDatePicker2.default, {
      excludeDates: [(0, _moment2.default)().subtract(1, 'days').format(dateFormat), (0, _moment2.default)().add(1, 'days').format(dateFormat)]
    }),
    _react2.default.createElement(
      'h2',
      { id: 'filter-dates' },
      'FilterDates'
    ),
    _react2.default.createElement(_DatePickerFilterDates2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'include-dates' },
      'Include Dates'
    ),
    _react2.default.createElement(_terraDatePicker2.default, {
      includeDates: [(0, _moment2.default)().format(dateFormat), (0, _moment2.default)().subtract(1, 'days').format(dateFormat), (0, _moment2.default)().add(1, 'days').format(dateFormat)]
    }),
    _react2.default.createElement(
      'h2',
      { id: 'min-max' },
      'Min Max'
    ),
    _react2.default.createElement(_terraDatePicker2.default, {
      minDate: (0, _moment2.default)().format(dateFormat),
      maxDate: (0, _moment2.default)().add(6, 'days').format(dateFormat)
    }),
    _react2.default.createElement(
      'h2',
      { id: 'on-change' },
      'On Change'
    ),
    _react2.default.createElement(_DatePickerOnChange2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'start-date' },
      'Default Date'
    ),
    _react2.default.createElement(_terraDatePicker2.default, {
      selectedDate: (0, _moment2.default)().format(dateFormat)
    }),
    _react2.default.createElement(
      'h2',
      { id: 'date-range' },
      'Date Range'
    ),
    _react2.default.createElement(_DateRange2.default, {
      startDate: (0, _moment2.default)().add(1, 'days').format(dateFormat),
      endDate: (0, _moment2.default)().add(7, 'days').format(dateFormat)
    })
  );
};

exports.default = DatePickerExamples;