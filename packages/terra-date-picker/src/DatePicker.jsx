import React, { PropTypes } from 'react';
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
   * Custom input attributes to apply to the date input.
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
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: PropTypes.func,
  /**
   * An ISO 8601 string representation of the initial default date to show in the date input. This prop name is derived from react-datepicker but is analogous to defaultValue for a form input field.
   */
  selectedDate: PropTypes.string,
  /**
   * An ISO 8601 string representation of the start date for a date range.
   */
  startDate: PropTypes.string,
};

const defaultProps = {
  isEndDateRange: false,
  isStartDateRange: false,
};

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: 'en-US', // TODO: Get the locale from i18n
      dateFormat: 'MM/DD/YYYY', // TODO: Get the locale from i18n
      selectedDate: DateUtil.createSafeDate(props.selectedDate, 'MM/DD/YYYY'),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      selectedDate: date,
    });

    if (this.props.onChange) {
      const dateString = date && date.isValid() ? date.format(this.state.dateFormat) : '';
      this.props.onChange(dateString);
    }
  }

  render() {
    const {
      inputAttributes,
      endDate,
      excludeDates,
      filterDate,
      includeDates,
      maxDate,
      minDate,
      isEndDateRange,
      isStartDateRange,
      selectedDate,
      startDate,
      ...customProps
    } = this.props;

    // TODO: Need translation from date_util
    const todayString = 'Today';

    const exludeMomentDates = DateUtil.filterInvalidDates(excludeDates, this.state.dateFormat);
    const includeMomentDates = DateUtil.filterInvalidDates(includeDates, this.state.dateFormat);
    const endMomentDate = DateUtil.createSafeDate(endDate, this.state.dateFormat);
    const maxMomentDate = DateUtil.createSafeDate(maxDate, this.state.dateFormat);
    const minMomentDate = DateUtil.createSafeDate(minDate, this.state.dateFormat);
    const startMomentDate = DateUtil.createSafeDate(startDate, this.state.dateFormat);

    let selectedMomentDate = this.state.selectedDate;
    if (isStartDateRange || isEndDateRange) {
      selectedMomentDate = DateUtil.createSafeDate(selectedDate, this.state.dateFormat);
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
