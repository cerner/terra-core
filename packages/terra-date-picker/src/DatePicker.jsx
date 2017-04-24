import React, { PropTypes } from 'react';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import 'terra-base/lib/baseStyles';
import ResponsiveElement from 'terra-responsive-element';
import DateInput from './DateInput';
import './DatePicker.scss';

const propTypes = {
  /**
   * A moment object to use as the default end date for a date range.
   */
  endDate: PropTypes.object,
  /**
   * An array of moment objects that represent the dates to disable in the picker.
   */
  excludeDates: PropTypes.arrayOf(PropTypes.object),
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled. A return value of true will be enabled and false will be disabled.
   */
  filterDate: PropTypes.func,
  /**
   * An array of moment objects that represent the dates to enable in the picker. All Other dates will be disabled.
   */
  includeDates: PropTypes.arrayOf(PropTypes.object),
  /**
   * Indicates the end date picker of a date range.
   */
  isEndDateRange: PropTypes.bool,
  /**
   * Indicates the start date picker of a date range.
   */
  isStartDateRange: PropTypes.bool,
  /**
   * A moment object to represents the maximum date that can be selected.
   */
  maxDate: PropTypes.object,
  /**
   * A moment object to represents the minimum date that can be selected.
   */
  minDate: PropTypes.object,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: PropTypes.func,
  /**
   * The selected date to show in the date input.
   */
  selectedDate: PropTypes.object,
  /**
   * A moment object to use as the default start date for a date range.
   */
  startDate: PropTypes.object,
};

const defaultProps = {
  isEndDateRange: false,
  isStartDateRange: false,
};

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: props.startDate,
      endDate: props.endDate,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });

    if (this.props.onChange) {
      this.props.onChange(date);
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

    // TODO: Get the locale from date_util
    const userLocale = 'en-US';

    // TODO: Get date format from date_util
    const localMoment = moment();
    localMoment.locale(userLocale);
    const momentDateFormat = localMoment.localeData().longDateFormat('L');

    const portalPicker =
      (<ReactDatePicker
        {...customProps}
        selected={selectedDate || this.state.startDate}
        onChange={this.handleChange}
        customInput={<DateInput />}
        endDate={endDate}
        excludeDates={excludeDates}
        filterDate={filterDate}
        includeDates={includeDates}
        maxDate={maxDate}
        minDate={minDate}
        selectsEnd={isEndDateRange}
        selectsStart={isStartDateRange}
        startDate={startDate}
        todayButton={todayString}
        withPortal
        dateFormatCalendar=" "
        dateFormat={momentDateFormat}
        fixedHeight
        locale={userLocale}
        placeholderText={momentDateFormat}
        dropdownMode={'select'}
        showMonthDropdown
        showYearDropdown
      />);

    const popupPicker =
      (<ReactDatePicker
        {...customProps}
        selected={selectedDate || this.state.startDate}
        onChange={this.handleChange}
        customInput={<DateInput />}
        endDate={endDate}
        excludeDates={excludeDates}
        filterDate={filterDate}
        includeDates={includeDates}
        maxDate={maxDate}
        minDate={minDate}
        selectsEnd={isEndDateRange}
        selectsStart={isStartDateRange}
        startDate={startDate}
        todayButton={todayString}
        dateFormatCalendar=" "
        dateFormat={momentDateFormat}
        fixedHeight
        locale={userLocale}
        placeholderText={momentDateFormat}
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
