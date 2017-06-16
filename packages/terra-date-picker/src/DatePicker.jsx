import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import 'terra-base/lib/baseStyles';
import ResponsiveElement from 'terra-responsive-element';
import DateInput from './DateInput';
import DateUtil from './DateUtil';
import './DatePicker.scss';

const propTypes = {
  /**
   * An ISO 8601 string representation of the end date for a date range.
   */
  endDate: PropTypes.string,
  /**
   * An array of ISO 8601 string representation of the dates to disable in the picker.
   */
  excludeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled. A return value of true will be enabled and false will be disabled.
   */
  filterDate: PropTypes.func,
  /**
   * An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled.
   */
  includeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * Custom input attributes to apply to the date input. Use the name prop to set the name for the input. Do not set the name in inputAttribute as it will be ignored.
   */
  inputAttributes: PropTypes.object,
  /**
   * Indicates the end date picker of a date range.
   */
  isEndDateRange: PropTypes.bool,
  /**
   * Indicates the start date picker of a date range.
   */
  isStartDateRange: PropTypes.bool,
  /**
   * An ISO 8601 string representation of the maximum date that can be selected.
   */
  maxDate: PropTypes.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected.
   */
  minDate: PropTypes.string,
  /**
   * Name of the date input. The name should be unique and is required.
   */
  name: PropTypes.string.isRequired,
  /**
   * A callback function to execute when a valid date is selected or entered. The first parameter is the event. The second parameter is the changed date value.
   */
  onChange: PropTypes.func,
  /**
   * An ISO 8601 string representation of the initial value to show in the date input. This prop name is derived from react-datepicker but is analogous to value in a form input field.
   */
  selectedDate: PropTypes.string,
  /**
   * An ISO 8601 string representation of the start date for a date range.
   */
  startDate: PropTypes.string,
};

const defaultProps = {
  endDate: undefined,
  excludeDates: undefined,
  filterDate: undefined,
  includeDates: undefined,
  inputAttributes: undefined,
  isEndDateRange: false,
  isStartDateRange: false,
  maxDate: undefined,
  minDate: undefined,
  name: undefined,
  onChange: undefined,
  selectedDate: undefined,
  startDate: undefined,
};

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: 'en-US', // TODO: Get the locale from i18n
      dateFormat: 'MM/DD/YYYY', // TODO: Get the locale from i18n
      selectedDate: DateUtil.createSafeDate(props.selectedDate),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date, event) {
    this.setState({
      selectedDate: date,
    });

    if (this.props.onChange) {
      const dateString = date && date.isValid() ? date.format(this.state.dateFormat) : '';
      this.props.onChange(event, dateString);
    }
  }

  render() {
    const {
      inputAttributes,
      endDate,
      excludeDates,
      filterDate,
      includeDates,
      isEndDateRange,
      isStartDateRange,
      maxDate,
      minDate,
      name,
      selectedDate,
      startDate,
      ...customProps
    } = this.props;

    // TODO: Need translation from date_util
    const todayString = 'Today';

    const exludeMomentDates = DateUtil.filterInvalidDates(excludeDates);
    const includeMomentDates = DateUtil.filterInvalidDates(includeDates);
    const endMomentDate = DateUtil.createSafeDate(endDate);
    const maxMomentDate = DateUtil.createSafeDate(maxDate);
    const minMomentDate = DateUtil.createSafeDate(minDate);
    const startMomentDate = DateUtil.createSafeDate(startDate);
    let selectedMomentDate = this.state.selectedDate;
    if (isStartDateRange || isEndDateRange) {
      selectedMomentDate = DateUtil.createSafeDate(selectedDate);
    }

    const portalPicker =
      (<ReactDatePicker
        {...customProps}
        selected={selectedMomentDate}
        onChange={this.handleChange}
        customInput={<DateInput inputAttributes={inputAttributes} />}
        endDate={endMomentDate}
        excludeDates={exludeMomentDates}
        filterDate={filterDate}
        includeDates={includeMomentDates}
        maxDate={maxMomentDate}
        minDate={minMomentDate}
        selectsEnd={isEndDateRange}
        selectsStart={isStartDateRange}
        startDate={startMomentDate}
        todayButton={todayString}
        withPortal
        dateFormatCalendar=" "
        dateFormat={this.state.dateFormat}
        fixedHeight
        locale={this.state.locale}
        placeholderText={this.state.dateFormat}
        dropdownMode={'select'}
        showMonthDropdown
        showYearDropdown
        name={name}
      />);

    const popupPicker =
      (<ReactDatePicker
        {...customProps}
        selected={selectedMomentDate}
        onChange={this.handleChange}
        customInput={<DateInput inputAttributes={inputAttributes} />}
        endDate={endMomentDate}
        excludeDates={exludeMomentDates}
        filterDate={filterDate}
        includeDates={includeMomentDates}
        maxDate={maxMomentDate}
        minDate={minMomentDate}
        selectsEnd={isEndDateRange}
        selectsStart={isStartDateRange}
        startDate={startMomentDate}
        todayButton={todayString}
        dateFormatCalendar=" "
        dateFormat={this.state.dateFormat}
        fixedHeight
        locale={this.state.locale}
        placeholderText={this.state.dateFormat}
        dropdownMode={'select'}
        showMonthDropdown
        showYearDropdown
        name={name}
      />);

    return (
      <ResponsiveElement
        className="terra-DatePicker"
        responsiveTo="window"
        defaultElement={portalPicker}
        small={popupPicker}
      />
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
