import React, { PropTypes } from 'react';
import classNames from 'classnames';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import './DatePicker.scss';
import ResponsiveElement from '../../../packages/terra-responsive-element/lib/ResponsiveElement';

const propTypes = {
  /**
   * A customized date input to use for entering and displaying the date.
   */
  customInput: PropTypes.node,
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
   * An array of moment objects that represent the dates to highlight in the picker.
   */
  highlightDates: PropTypes.arrayOf(PropTypes.object),
  /**
   * An array of moment objects that represent the dates to enable in the picker. All Other dates will be disabled.
   */
  includeDates: PropTypes.arrayOf(PropTypes.object),
  /**
   * A moment object to represents the maximum date that can be selected.
   */
  maxDate: PropTypes.object,
  /**
   * A moment object to represents the minimum date that can be selected.
   */
  minDate: PropTypes.object,
  /**
   * The number of adjacent months to display in the picker.
   */
  monthsShown: PropTypes.number,
  /**
   * When no date is selected the date picker will be opened to this moment object instead of defaulting to show the current month.
   */
  openToDate: PropTypes.object,
  /**
   * The selected date to show in the date input.
   */
  selectedDate: PropTypes.object,
  /**
   * Indicates the end date picker of a date range.
   */
  isEndDateRange: PropTypes.bool,
  /**
   * Indicates the start date picker of a date range.
   */
  isStartDateRange: PropTypes.bool,
  /**
   * Indicates to show a month dropdown for selecting other months of the year.
   */
  showMonthDropdown: PropTypes.bool,
  /**
   * Indicates to show a year dropdown for selecting a different year.
   */
  showYearDropdown: PropTypes.bool,
  /**
   * The default start date for a date range.
   */
  startDate: PropTypes.object,
  /**
   * Indicates to show the today button select selecting today's date.
   */
  todayButton: PropTypes.string,
  /**
   * Indicates to hide the today button.
   */
  hideTodayButton: PropTypes.bool,
  /**
   * Indicates to display the picker in a full screen overlay.
   */
  withPortal: PropTypes.bool,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  monthsShown: 1,
  isEndDateRange: false,
  isStartDateRange: false,
  showMonthDropdown: undefined,
  showYearDropdown: undefined,
  withPortal: undefined,
  todayButton: undefined,
  hideTodayButton: false,
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
      customInput,
      endDate,
      excludeDates,
      filterDate,
      highlightDates,
      includeDates,
      maxDate,
      minDate,
      monthsShown,
      openToDate,
      isEndDateRange,
      isStartDateRange,
      selectedDate,
      showMonthDropdown,
      showYearDropdown,
      startDate,
      todayButton,
      hideTodayButton,
      withPortal,
      ...customProps
    } = this.props;
    const classes = classNames(['terra-DatePicker-input']);

    // TODO: Set the locale using the local data file defined by i18n
    const userLocale = window.navigator.language;

    // TODO: The date format needs to be fetched from the locale data file when the i18n work is complete.
    const localMoment = moment();
    localMoment.locale(userLocale);
    const momentDateFormat = localMoment.localeData().longDateFormat('L');

    // Show the month drop down by default. Hide only if explicitly set to false.
    let defaultMonthDropdown = true;
    if (showMonthDropdown === false) {
      defaultMonthDropdown = false;
    }

    // Show the year drop down by default. Hide only if explicitly set to false.
    let defaultYearDropdown = true;
    if (showYearDropdown === false) {
      defaultYearDropdown = false;
    }

    // Show the month label only if the month drop down is hidden.
    // Show the year label only if the year drop down is hidden.
    // An empty space format will clear the month/year label.
    let dateFormatCalendar = ' ';
    if (!defaultMonthDropdown && !defaultYearDropdown) {
      dateFormatCalendar = 'MMMM YYYY';
    } else if (!defaultMonthDropdown && defaultYearDropdown) {
      dateFormatCalendar = 'MMMM';
    } else if (defaultMonthDropdown && !defaultYearDropdown) {
      dateFormatCalendar = 'YYYY';
    }

    let defaultTodayButton = todayButton;
    if (hideTodayButton) {
      defaultTodayButton = undefined;
    } else if (todayButton === undefined) {
      defaultTodayButton = 'Today'; // TODO: Need to translate
    }

    const portalPicker =
      (<div className="terra-DatePicker">
        <ReactDatePicker
          {...customProps}
          className={classes}
          selected={selectedDate || this.state.startDate}
          onChange={this.handleChange}
          customInput={customInput}
          endDate={endDate}
          excludeDates={excludeDates}
          filterDate={filterDate}
          highlightDates={highlightDates}
          includeDates={includeDates}
          maxDate={maxDate}
          minDate={minDate}
          monthsShown={monthsShown}
          openToDate={openToDate}
          selectsEnd={isEndDateRange}
          selectsStart={isStartDateRange}
          startDate={startDate}
          todayButton={defaultTodayButton}
          withPortal={withPortal === undefined ? true : withPortal}
          dateFormatCalendar={dateFormatCalendar}
          dateFormat={momentDateFormat}
          fixedHeight
          locale={userLocale}
          placeholderText={momentDateFormat}
          dropdownMode={'select'}
          showMonthDropdown={defaultMonthDropdown}
          showYearDropdown={defaultYearDropdown}
        />
      </div>);

    const popupPicker =
      (<div className="terra-DatePicker">
        <ReactDatePicker
          {...customProps}
          className={classes}
          selected={selectedDate || this.state.startDate}
          onChange={this.handleChange}
          customInput={customInput}
          endDate={endDate}
          excludeDates={excludeDates}
          filterDate={filterDate}
          highlightDates={highlightDates}
          includeDates={includeDates}
          maxDate={maxDate}
          minDate={minDate}
          monthsShown={monthsShown}
          openToDate={openToDate}
          selectsEnd={isEndDateRange}
          selectsStart={isStartDateRange}
          startDate={startDate}
          todayButton={defaultTodayButton}
          withPortal={withPortal === undefined ? false : withPortal}
          dateFormatCalendar={dateFormatCalendar}
          dateFormat={momentDateFormat}
          fixedHeight
          locale={userLocale}
          placeholderText={momentDateFormat}
          dropdownMode={'select'}
          showMonthDropdown={defaultMonthDropdown}
          showYearDropdown={defaultYearDropdown}
        />
      </div>);

    return (
      <ResponsiveElement
        responsiveTo="window"
        defaultElement={portalPicker}
        medium={popupPicker}
      />
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
