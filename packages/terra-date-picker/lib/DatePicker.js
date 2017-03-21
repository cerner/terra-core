'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('./DatePicker.scss');

var _ResponsiveElement = require('../../../packages/terra-responsive-element/lib/ResponsiveElement');

var _ResponsiveElement2 = _interopRequireDefault(_ResponsiveElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * A customized date input to use for entering and displaying the date.
   */
  customInput: _react.PropTypes.node,
  /**
   * A moment object to use as the default end date for a date range.
   */
  endDate: _react.PropTypes.object,
  /**
   * An array of moment objects that represent the dates to disable in the picker.
   */
  excludeDates: _react.PropTypes.arrayOf(_react.PropTypes.object),
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled. A return value of true will be enabled and false will be disabled.
   */
  filterDate: _react.PropTypes.func,
  /**
   * An array of moment objects that represent the dates to highlight in the picker.
   */
  highlightDates: _react.PropTypes.arrayOf(_react.PropTypes.object),
  /**
   * An array of moment objects that represent the dates to enable in the picker. All Other dates will be disabled.
   */
  includeDates: _react.PropTypes.arrayOf(_react.PropTypes.object),
  /**
   * A moment object to represents the maximum date that can be selected.
   */
  maxDate: _react.PropTypes.object,
  /**
   * A moment object to represents the minimum date that can be selected.
   */
  minDate: _react.PropTypes.object,
  /**
   * The number of adjacent months to display in the picker.
   */
  monthsShown: _react.PropTypes.number,
  /**
   * When no date is selected the date picker will be opened to this moment object instead of defaulting to show the current month.
   */
  openToDate: _react.PropTypes.object,
  /**
   * The selected date to show in the date input.
   */
  selectedDate: _react.PropTypes.object,
  /**
   * Indicates the end date picker of a date range.
   */
  isEndDateRange: _react.PropTypes.bool,
  /**
   * Indicates the start date picker of a date range.
   */
  isStartDateRange: _react.PropTypes.bool,
  /**
   * Indicates to show a month dropdown for selecting other months of the year.
   */
  showMonthDropdown: _react.PropTypes.bool,
  /**
   * Indicates to show a year dropdown for selecting a different year.
   */
  showYearDropdown: _react.PropTypes.bool,
  /**
   * The default start date for a date range.
   */
  startDate: _react.PropTypes.object,
  /**
   * Indicates to show the today button select selecting today's date.
   */
  todayButton: _react.PropTypes.string,
  /**
   * Indicates to hide the today button.
   */
  hideTodayButton: _react.PropTypes.bool,
  /**
   * Indicates to display the picker in a full screen overlay.
   */
  withPortal: _react.PropTypes.bool,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: _react.PropTypes.func
};

var defaultProps = {
  monthsShown: 1,
  isEndDateRange: false,
  isStartDateRange: false,
  showMonthDropdown: undefined,
  showYearDropdown: undefined,
  withPortal: undefined,
  todayButton: undefined,
  hideTodayButton: false
};

var DatePicker = function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _this.state = {
      startDate: props.startDate,
      endDate: props.endDate
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
        this.props.onChange(date);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          customInput = _props.customInput,
          endDate = _props.endDate,
          excludeDates = _props.excludeDates,
          filterDate = _props.filterDate,
          highlightDates = _props.highlightDates,
          includeDates = _props.includeDates,
          maxDate = _props.maxDate,
          minDate = _props.minDate,
          monthsShown = _props.monthsShown,
          openToDate = _props.openToDate,
          isEndDateRange = _props.isEndDateRange,
          isStartDateRange = _props.isStartDateRange,
          selectedDate = _props.selectedDate,
          showMonthDropdown = _props.showMonthDropdown,
          showYearDropdown = _props.showYearDropdown,
          startDate = _props.startDate,
          todayButton = _props.todayButton,
          hideTodayButton = _props.hideTodayButton,
          withPortal = _props.withPortal,
          customProps = _objectWithoutProperties(_props, ['customInput', 'endDate', 'excludeDates', 'filterDate', 'highlightDates', 'includeDates', 'maxDate', 'minDate', 'monthsShown', 'openToDate', 'isEndDateRange', 'isStartDateRange', 'selectedDate', 'showMonthDropdown', 'showYearDropdown', 'startDate', 'todayButton', 'hideTodayButton', 'withPortal']);

      var classes = (0, _classnames2.default)(['terra-DatePicker-input']);

      // TODO: Set the locale using the local data file defined by i18n
      var userLocale = window.navigator.language;

      // TODO: The date format needs to be fetched from the locale data file when the i18n work is complete.
      var localMoment = (0, _moment2.default)();
      localMoment.locale(userLocale);
      var momentDateFormat = localMoment.localeData().longDateFormat('L');

      // Show the month drop down by default. Hide only if explicitly set to false.
      var defaultMonthDropdown = true;
      if (showMonthDropdown === false) {
        defaultMonthDropdown = false;
      }

      // Show the year drop down by default. Hide only if explicitly set to false.
      var defaultYearDropdown = true;
      if (showYearDropdown === false) {
        defaultYearDropdown = false;
      }

      // Show the month label only if the month drop down is hidden.
      // Show the year label only if the year drop down is hidden.
      // An empty space format will clear the month/year label.
      var dateFormatCalendar = ' ';
      if (!defaultMonthDropdown && !defaultYearDropdown) {
        dateFormatCalendar = 'MMMM YYYY';
      } else if (!defaultMonthDropdown && defaultYearDropdown) {
        dateFormatCalendar = 'MMMM';
      } else if (defaultMonthDropdown && !defaultYearDropdown) {
        dateFormatCalendar = 'YYYY';
      }

      var defaultTodayButton = todayButton;
      if (hideTodayButton) {
        defaultTodayButton = undefined;
      } else if (todayButton === undefined) {
        defaultTodayButton = 'Today'; // TODO: Need to translate
      }

      var portalPicker = _react2.default.createElement(
        'div',
        { className: 'terra-DatePicker' },
        _react2.default.createElement(_reactDatepicker2.default, _extends({}, customProps, {
          className: classes,
          selected: selectedDate || this.state.startDate,
          onChange: this.handleChange,
          customInput: customInput,
          endDate: endDate,
          excludeDates: excludeDates,
          filterDate: filterDate,
          highlightDates: highlightDates,
          includeDates: includeDates,
          maxDate: maxDate,
          minDate: minDate,
          monthsShown: monthsShown,
          openToDate: openToDate,
          selectsEnd: isEndDateRange,
          selectsStart: isStartDateRange,
          startDate: startDate,
          todayButton: defaultTodayButton,
          withPortal: withPortal === undefined ? true : withPortal,
          dateFormatCalendar: dateFormatCalendar,
          dateFormat: momentDateFormat,
          fixedHeight: true,
          locale: userLocale,
          placeholderText: momentDateFormat,
          dropdownMode: 'select',
          showMonthDropdown: defaultMonthDropdown,
          showYearDropdown: defaultYearDropdown
        }))
      );

      var popupPicker = _react2.default.createElement(
        'div',
        { className: 'terra-DatePicker' },
        _react2.default.createElement(_reactDatepicker2.default, _extends({}, customProps, {
          className: classes,
          selected: selectedDate || this.state.startDate,
          onChange: this.handleChange,
          customInput: customInput,
          endDate: endDate,
          excludeDates: excludeDates,
          filterDate: filterDate,
          highlightDates: highlightDates,
          includeDates: includeDates,
          maxDate: maxDate,
          minDate: minDate,
          monthsShown: monthsShown,
          openToDate: openToDate,
          selectsEnd: isEndDateRange,
          selectsStart: isStartDateRange,
          startDate: startDate,
          todayButton: defaultTodayButton,
          withPortal: withPortal === undefined ? false : withPortal,
          dateFormatCalendar: dateFormatCalendar,
          dateFormat: momentDateFormat,
          fixedHeight: true,
          locale: userLocale,
          placeholderText: momentDateFormat,
          dropdownMode: 'select',
          showMonthDropdown: defaultMonthDropdown,
          showYearDropdown: defaultYearDropdown
        }))
      );

      return _react2.default.createElement(_ResponsiveElement2.default, {
        responsiveTo: 'window',
        defaultElement: portalPicker,
        medium: popupPicker
      });
    }
  }]);

  return DatePicker;
}(_react2.default.Component);

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

exports.default = DatePicker;