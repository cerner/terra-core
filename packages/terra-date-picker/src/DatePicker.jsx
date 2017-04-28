import React, { PropTypes } from 'react';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import 'terra-base/lib/baseStyles';
import ResponsiveElement from 'terra-responsive-element';
import DateInput from './DateInput';
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

const locale = 'en-US'; // TODO: Get the locale from i18n
const dateFormat = 'MM/DD/YYYY'; // TODO: Get the locale from i18n

const defaultProps = {
  isEndDateRange: false,
  isStartDateRange: false,
};

class DatePicker extends React.Component {

  static safeMoment(date) {
    if (date && dateFormat) {
      const momentDate = moment(date, dateFormat);
      return momentDate.isValid() ? momentDate : date;
    }

    return date;
  }

  static createMomentsFromISO8601(dates) {
    const momentDates = [];

    if (dates) {
      let index = 0;
      for (index = 0; index < dates.length; index += 1) {
        const momentDate = moment(dates[index], dateFormat);
        if (momentDate.isValid()) {
          momentDates.push(momentDate);
        }
      }
    }

    return momentDates.length > 0 ? momentDates : dates;
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedDate: DatePicker.safeMoment(props.selectedDate),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      selectedDate: date,
    });

    if (this.props.onChange) {
      this.props.onChange(date.format(dateFormat));
    }
  }

  render() {
    const {
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

    const exludeMomentDates = DatePicker.createMomentsFromISO8601(excludeDates);
    const includeMomentDates = DatePicker.createMomentsFromISO8601(includeDates);
    const endMomentDate = DatePicker.safeMoment(endDate);
    const maxMomentDate = DatePicker.safeMoment(maxDate);
    const minMomentDate = DatePicker.safeMoment(minDate);
    const selectedMomentDate = DatePicker.safeMoment(selectedDate);
    const startMomentDate = DatePicker.safeMoment(startDate);

    const portalPicker =
      (<ReactDatePicker
        {...customProps}
        selected={selectedMomentDate || this.state.selectedDate}
        onChange={this.handleChange}
        customInput={<DateInput />}
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
        dateFormat={dateFormat}
        fixedHeight
        locale={locale}
        placeholderText={dateFormat}
        dropdownMode={'select'}
        showMonthDropdown
        showYearDropdown
      />);

    const popupPicker =
      (<ReactDatePicker
        {...customProps}
        selected={selectedMomentDate || this.state.selectedDate}
        onChange={this.handleChange}
        customInput={<DateInput />}
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
        dateFormat={dateFormat}
        fixedHeight
        locale={locale}
        placeholderText={dateFormat}
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
