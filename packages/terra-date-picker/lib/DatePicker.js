'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('terra-base/lib/baseStyles');

var _terraResponsiveElement = require('terra-responsive-element');

var _terraResponsiveElement2 = _interopRequireDefault(_terraResponsiveElement);

var _DateInput = require('./DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

require('./DatePicker.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * An ISO 8601 string representation of the default date to show in the date input.
   */
  defaultDate: _react.PropTypes.string,
  /**
   * An ISO 8601 string representation of the default end date for a date range.
   */
  endDate: _react.PropTypes.string,
  /**
   * An array of ISO 8601 string representation of the dates to disable in the picker.
   */
  excludeDates: _react.PropTypes.arrayOf(_react.PropTypes.string),
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled. A return value of true will be enabled and false will be disabled.
   */
  filterDate: _react.PropTypes.func,
  /**
   * An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled.
   */
  includeDates: _react.PropTypes.arrayOf(_react.PropTypes.string),
  /**
   * Indicates the end date picker of a date range.
   */
  isEndDateRange: _react.PropTypes.bool,
  /**
   * Indicates the start date picker of a date range.
   */
  isStartDateRange: _react.PropTypes.bool,
  /**
   * An ISO 8601 string representation of the maximum date that can be selected.
   */
  maxDate: _react.PropTypes.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected.
   */
  minDate: _react.PropTypes.string,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: _react.PropTypes.func,
  /**
   * An ISO 8601 string representation of the selected start date. startDate represents the currently selected date after some change has been made where as defaultDate represents the initial default date that shows in the input before any change is made.
   */
  startDate: _react.PropTypes.string
};

var locale = 'en-US'; // TODO: Get the locale from i18n
var dateFormat = 'MM/DD/YYYY'; // TODO: Get the locale from i18n

var defaultProps = {
  isEndDateRange: false,
  isStartDateRange: false
};

var DatePicker = function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  _createClass(DatePicker, null, [{
    key: 'safeMoment',
    value: function safeMoment(date) {
      if (date && dateFormat) {
        var momentDate = _moment2.default.utc(date, dateFormat);
        return momentDate.isValid() ? momentDate : date;
      }

      return date;
    }
  }, {
    key: 'createMomentsFromISO8601',
    value: function createMomentsFromISO8601(dates) {
      var momentDates = [];

      if (dates) {
        var index = 0;
        for (index = 0; index < dates.length; index += 1) {
          var momentDate = _moment2.default.utc(dates[index], dateFormat);
          if (momentDate.isValid()) {
            momentDates.push(momentDate);
          }
        }
      }

      return momentDates.length > 0 ? momentDates : dates;
    }
  }]);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _this.state = {
      startDate: DatePicker.safeMoment(props.startDate),
      endDate: DatePicker.safeMoment(props.endDate)
    };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(DatePicker, [{
    key: 'handleChange',
    value: function handleChange(date) {
      this.setState({
        startDate: date
      });

      if (this.props.onChange) {
        this.props.onChange(date.format(dateFormat));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          endDate = _props.endDate,
          excludeDates = _props.excludeDates,
          filterDate = _props.filterDate,
          includeDates = _props.includeDates,
          maxDate = _props.maxDate,
          minDate = _props.minDate,
          isEndDateRange = _props.isEndDateRange,
          isStartDateRange = _props.isStartDateRange,
          defaultDate = _props.defaultDate,
          startDate = _props.startDate,
          customProps = _objectWithoutProperties(_props, ['endDate', 'excludeDates', 'filterDate', 'includeDates', 'maxDate', 'minDate', 'isEndDateRange', 'isStartDateRange', 'defaultDate', 'startDate']);

      // TODO: Need translation from date_util


      var todayString = 'Today';

      var exludeMomentDates = DatePicker.createMomentsFromISO8601(excludeDates);
      var includeMomentDates = DatePicker.createMomentsFromISO8601(includeDates);
      var endMomentDate = DatePicker.safeMoment(endDate);
      var maxMomentDate = DatePicker.safeMoment(maxDate);
      var minMomentDate = DatePicker.safeMoment(minDate);
      var defaultMomentDate = DatePicker.safeMoment(defaultDate);
      var startMomentDate = DatePicker.safeMoment(startDate);

      var portalPicker = _react2.default.createElement(_reactDatepicker2.default, _extends({}, customProps, {
        selected: defaultMomentDate || this.state.startDate,
        onChange: this.handleChange,
        customInput: _react2.default.createElement(_DateInput2.default, null),
        endDate: endMomentDate,
        excludeDates: exludeMomentDates,
        filterDate: filterDate,
        includeDates: includeMomentDates,
        maxDate: maxMomentDate,
        minDate: minMomentDate,
        selectsEnd: isEndDateRange,
        selectsStart: isStartDateRange,
        startDate: startMomentDate,
        todayButton: todayString,
        withPortal: true,
        dateFormatCalendar: ' ',
        dateFormat: dateFormat,
        fixedHeight: true,
        locale: locale,
        placeholderText: dateFormat,
        dropdownMode: 'select',
        showMonthDropdown: true,
        showYearDropdown: true
      }));

      var popupPicker = _react2.default.createElement(_reactDatepicker2.default, _extends({}, customProps, {
        selected: defaultMomentDate || this.state.startDate,
        onChange: this.handleChange,
        customInput: _react2.default.createElement(_DateInput2.default, null),
        endDate: endMomentDate,
        excludeDates: exludeMomentDates,
        filterDate: filterDate,
        includeDates: includeMomentDates,
        maxDate: maxMomentDate,
        minDate: minMomentDate,
        selectsEnd: isEndDateRange,
        selectsStart: isStartDateRange,
        startDate: startMomentDate,
        todayButton: todayString,
        dateFormatCalendar: ' ',
        dateFormat: dateFormat,
        fixedHeight: true,
        locale: locale,
        placeholderText: dateFormat,
        dropdownMode: 'select',
        showMonthDropdown: true,
        showYearDropdown: true
      }));

      return _react2.default.createElement(_terraResponsiveElement2.default, {
        className: 'terra-DatePicker',
        responsiveTo: 'window',
        defaultElement: portalPicker,
        small: popupPicker
      });
    }
  }]);

  return DatePicker;
}(_react2.default.Component);

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

exports.default = DatePicker;