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

require('terra-base/lib/baseStyles');

var _terraResponsiveElement = require('terra-responsive-element');

var _terraResponsiveElement2 = _interopRequireDefault(_terraResponsiveElement);

var _DateInput = require('./DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

var _DateUtil = require('./DateUtil');

var _DateUtil2 = _interopRequireDefault(_DateUtil);

require('./DatePicker.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * An ISO 8601 string representation of the end date for a date range.
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
   * An ISO 8601 string representation of the initial default date to show in the date input. This prop name is derived from react-datepicker but is analogous to defaultValue for a form input field.
   */
  selectedDate: _react.PropTypes.string,
  /**
   * An ISO 8601 string representation of the start date for a date range.
   */
  startDate: _react.PropTypes.string
};

var defaultProps = {
  isEndDateRange: false,
  isStartDateRange: false
};

var DatePicker = function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _this.state = {
      locale: 'en-US', // TODO: Get the locale from i18n
      dateFormat: 'MM/DD/YYYY', // TODO: Get the locale from i18n
      selectedDate: _DateUtil2.default.createSafeDate(props.selectedDate, 'MM/DD/YYYY')
    };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(DatePicker, [{
    key: 'handleChange',
    value: function handleChange(date) {
      this.setState({
        selectedDate: date
      });

      if (this.props.onChange) {
        var dateString = date && date.isValid() ? date.format(this.state.dateFormat) : '';
        this.props.onChange(dateString);
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
          selectedDate = _props.selectedDate,
          startDate = _props.startDate,
          customProps = _objectWithoutProperties(_props, ['endDate', 'excludeDates', 'filterDate', 'includeDates', 'maxDate', 'minDate', 'isEndDateRange', 'isStartDateRange', 'selectedDate', 'startDate']);

      // TODO: Need translation from date_util


      var todayString = 'Today';

      var exludeMomentDates = _DateUtil2.default.filterInvalidDates(excludeDates, this.state.dateFormat);
      var includeMomentDates = _DateUtil2.default.filterInvalidDates(includeDates, this.state.dateFormat);
      var endMomentDate = _DateUtil2.default.createSafeDate(endDate, this.state.dateFormat);
      var maxMomentDate = _DateUtil2.default.createSafeDate(maxDate, this.state.dateFormat);
      var minMomentDate = _DateUtil2.default.createSafeDate(minDate, this.state.dateFormat);
      var startMomentDate = _DateUtil2.default.createSafeDate(startDate, this.state.dateFormat);

      var selectedMomentDate = this.state.selectedDate;
      if (isStartDateRange || isEndDateRange) {
        selectedMomentDate = _DateUtil2.default.createSafeDate(selectedDate, this.state.dateFormat);
      }

      var portalPicker = _react2.default.createElement(_reactDatepicker2.default, _extends({}, customProps, {
        selected: selectedMomentDate,
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
        dateFormat: this.state.dateFormat,
        fixedHeight: true,
        locale: this.state.locale,
        placeholderText: this.state.dateFormat,
        dropdownMode: 'select',
        showMonthDropdown: true,
        showYearDropdown: true
      }));

      var popupPicker = _react2.default.createElement(_reactDatepicker2.default, _extends({}, customProps, {
        selected: selectedMomentDate,
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
        dateFormat: this.state.dateFormat,
        fixedHeight: true,
        locale: this.state.locale,
        placeholderText: this.state.dateFormat,
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