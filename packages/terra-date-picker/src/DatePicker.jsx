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
   * An ISO 8601 string representation of the maximum date that can be selected.
   */
  maxDate: PropTypes.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected.
   */
  minDate: PropTypes.string,
  /**
   * Name of the date input. The name should be unique.
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
};

const defaultProps = {
  excludeDates: undefined,
  filterDate: undefined,
  includeDates: undefined,
  inputAttributes: undefined,
  maxDate: undefined,
  minDate: undefined,
  name: undefined,
  onChange: undefined,
  selectedDate: undefined,
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
      this.props.onChange(event, date ? date.format() : '');
    }
  }

  render() {
    const {
      inputAttributes,
      excludeDates,
      filterDate,
      includeDates,
      maxDate,
      minDate,
      name,
      selectedDate,
      ...customProps
    } = this.props;

    // TODO: Need translation from date_util
    const todayString = 'Today';

    const exludeMomentDates = DateUtil.filterInvalidDates(excludeDates);
    const includeMomentDates = DateUtil.filterInvalidDates(includeDates);
    const maxMomentDate = DateUtil.createSafeDate(maxDate);
    const minMomentDate = DateUtil.createSafeDate(minDate);

    const portalPicker =
      (<ReactDatePicker
        {...customProps}
        selected={this.state.selectedDate}
        onChange={this.handleChange}
        customInput={<DateInput inputAttributes={inputAttributes} />}
        excludeDates={exludeMomentDates}
        filterDate={filterDate}
        includeDates={includeMomentDates}
        maxDate={maxMomentDate}
        minDate={minMomentDate}
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
        selected={this.state.selectedDate}
        onChange={this.handleChange}
        customInput={<DateInput inputAttributes={inputAttributes} />}
        excludeDates={exludeMomentDates}
        filterDate={filterDate}
        includeDates={includeMomentDates}
        maxDate={maxMomentDate}
        minDate={minMomentDate}
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
