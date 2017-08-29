import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import DatePicker from 'terra-date-picker/src/DatePicker';
import TimeInput from 'terra-time-input/src/TimeInput';
import DateUtil from 'terra-date-picker/lib/DateUtil';
import styles from './DateTimePicker.scss';
import DateTimeUtil from './DateTimeUtil';
import TimeClarification from './_TimeClarification';

const cx = classNames.bind(styles);

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
   * Custom input attributes to apply to the date and time inputs. Use the name prop to set the name for the input. Do not set the name in inputAttribute as it will be ignored.
   */
  inputAttributes: PropTypes.object,
  /**
   * An ISO 8601 string representation of the maximum date time.
   */
  maxDateTime: PropTypes.string,
  /**
   * An ISO 8601 string representation of the minimum date time.
   */
  minDateTime: PropTypes.string,
  /**
   * Name of the date input. The name should be unique.
   */
  name: PropTypes.string.isRequired,
  /**
   * A callback function to execute when a valid date is selected or entered. The first parameter is the event. The second parameter is the changed date time value.
   */
  onChange: PropTypes.func,
    /**
   * A callback function to execute when a change is made in the date input. The first parameter is the event. The second parameter is the changed date value.
   */
  onChangeRaw: PropTypes.func,
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: PropTypes.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: PropTypes.func,
  /**
   * An ISO 8601 string representation of the initial value to show in the date and time inputs.
   */
  value: PropTypes.string,
};

const defaultProps = {
  excludeDates: undefined,
  filterDate: undefined,
  includeDates: undefined,
  inputAttributes: undefined,
  maxDateTime: undefined,
  minDateTime: undefined,
  name: undefined,
  onChange: undefined,
  onChangeRaw: undefined,
  releaseFocus: undefined,
  requestFocus: undefined,
  value: undefined,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  },
};

const keyCodes = {
  ARROWDOWN: 40,
};

class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateTime: DateTimeUtil.createSafeDate(props.value),
      isAmbiguousTime: false,
      isTimeClarificationOpen: false,
    };

    // Track the dateValue and timeValue outside of the react state to limit the number of renderings that occur.
    this.dateValue = '';
    this.timeValue = '';

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateChangeRaw = this.handleDateChangeRaw.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnDateBlur = this.handleOnDateBlur.bind(this);
    this.handleOnTimeBlur = this.handleOnTimeBlur.bind(this);

    this.handleDaylightSavingButtonClick = this.handleDaylightSavingButtonClick.bind(this);
    this.handleStandardTimeButtonClick = this.handleStandardTimeButtonClick.bind(this);
  }

  componentWillMount() {
    const dateTime = DateTimeUtil.createSafeDate(this.props.value);
    const dateFormat = DateUtil.getFormatByLocale(this.context.intl.locale);

    this.dateValue = DateTimeUtil.formatMomentDateTime(dateTime, dateFormat);
    this.timeValue = DateTimeUtil.hasTime(this.props.value) ? DateTimeUtil.formatISODateTime(this.props.value, 'HH:mm') : '';
  }

  handleOnSelect(event, selectedDate) {
    // Our requirement is that ambiguous time should be checked when a date is selected from the picker.
    // If the date was entered manually, it should wait until losing focus to check for ambiguous time.
    // Due to react-datepicker invoking onSelect both when selecting a date from the picker as well as manually entering a valid date,
    // we need to check that the event type is not 'change' to indicate that onSelect was not invoked from a manual change.
    // See https://github.com/Hacker0x01/react-datepicker/issues/990
    if (event.type !== 'change') {
      const dateFormat = DateUtil.getFormatByLocale(this.context.intl.locale);
      this.dateValue = DateTimeUtil.formatISODateTime(selectedDate, dateFormat);
      const previousDateTime = this.state.dateTime ? this.state.dateTime.clone() : null;
      const updatedDateTime = DateTimeUtil.syncDateTime(previousDateTime, selectedDate, this.timeValue);
      if (!previousDateTime || previousDateTime.format() !== updatedDateTime.format()) {
        this.checkAmbiguousTime(updatedDateTime);
      }
    }
  }

  handleOnDateBlur(event) {
    const dateFormat = DateUtil.getFormatByLocale(this.context.intl.locale);
    const isDateTimeValid = DateTimeUtil.isValidDateTime(event.target.value, this.timeValue, dateFormat);
    const enteredDateTime = isDateTimeValid ? this.state.dateTime : null;

    this.checkAmbiguousTime(enteredDateTime);
  }

  handleOnTimeBlur() {
    const dateFormat = DateUtil.getFormatByLocale(this.context.intl.locale);
    const isDateTimeValid = DateTimeUtil.isValidDateTime(this.dateValue, this.timeValue, dateFormat);
    let updatedDateTime;

    if (isDateTimeValid) {
      updatedDateTime = DateTimeUtil.updateTime(this.state.dateTime, this.timeValue);
    }

    this.checkAmbiguousTime(updatedDateTime);
  }

  checkAmbiguousTime(dateTime) {
    // To prevent multiple time clarification dialogs from rendered, ensure that it is not open before checking for the ambiguous hour.
    // ONe situation is when using the right arrow key to move focus from the hour input to the minute input will invoke onBlur and check for ambiguous hour.
    // If the hour is ambiguous, the dialog would display and steals focus from the minute input, which again will invoke onBlur and check for ambiguous hour.
    if (this.state.isTimeClarificationOpen) {
      return;
    }

    let isDateTimeAmbiguous = false;
    const isOldTimeAmbiguous = this.state.isAmbiguousTime;
    if (dateTime && dateTime.isValid()) {
      const tempDateTime = dateTime.clone();
      isDateTimeAmbiguous = DateTimeUtil.checkAmbiguousTime(tempDateTime);
    }

    this.setState({
      isAmbiguousTime: isDateTimeAmbiguous,
      isTimeClarificationOpen: isDateTimeAmbiguous && !isOldTimeAmbiguous,
    });
  }

  handleDateChange(event, date) {
    if (event.type === 'change') {
      this.dateValue = event.target.value;
    }

    let updatedDateTime;

    if (DateTimeUtil.isValidDate(date, 'YYYY-MM-DD')) {
      const previousDateTime = this.state.dateTime ? this.state.dateTime.clone() : null;
      updatedDateTime = DateTimeUtil.syncDateTime(previousDateTime, date, this.timeValue);

      if (DateTimeUtil.isValidTime(this.timeValue)) {
        this.timeValue = DateTimeUtil.formatISODateTime(updatedDateTime.format(), 'HH:mm');
      }
    }

    this.handleChange(event, updatedDateTime);
  }

  handleDateChangeRaw(event, date) {
    this.dateValue = event.target.value;

    this.handleChangeRaw(event, date);
  }

  handleTimeChange(event, time) {
    this.timeValue = time;
    const dateFormat = DateUtil.getFormatByLocale(this.context.intl.locale);
    const validDate = DateTimeUtil.isValidDate(this.dateValue, dateFormat);
    const validTime = DateTimeUtil.isValidTime(this.timeValue);
    const previousDateTime = this.state.dateTime ? this.state.dateTime.clone() : null;

    // If both date and time are valid, check if the time is the missing hour and invoke onChange.
    // If the date is valid but time is invalid, the time in the dateTime state needs to be cleared and render.
    if (validDate && validTime) {
      const updatedDateTime = DateTimeUtil.updateTime(previousDateTime, time);

      if (event.keyCode === keyCodes.ARROWDOWN &&
        previousDateTime && updatedDateTime && previousDateTime.format() === updatedDateTime.format()) {
        updatedDateTime.add(-1, 'hours');
      }

      this.timeValue = DateTimeUtil.formatISODateTime(updatedDateTime.format(), 'HH:mm');
      this.handleChange(event, updatedDateTime);
    } else {
      if (validDate && !validTime) {
        const updatedDateTime = DateTimeUtil.updateTime(previousDateTime, '00:00');

        this.setState({
          dateTime: updatedDateTime,
        });

        this.handleChangeRaw(event, time);
      }

      this.handleChangeRaw(event, time);
    }
  }

  handleChange(event, newDateTime) {
    this.setState({
      dateTime: newDateTime,
    });

    if (this.props.onChange) {
      this.props.onChange(event, newDateTime && newDateTime.isValid() ? newDateTime.format() : '');
    }
  }

  handleChangeRaw(event, value) {
    if (this.props.onChangeRaw) {
      this.props.onChangeRaw(event, value);
    }
  }

  handleDaylightSavingButtonClick() {
    this.setState({ isTimeClarificationOpen: false });
    const newDateTime = this.state.dateTime.clone();

    if (!newDateTime.isDST()) {
      newDateTime.subtract(1, 'hour');
      this.handleChange(event, newDateTime);
    }
  }

  handleStandardTimeButtonClick(event) {
    this.setState({ isTimeClarificationOpen: false });
    const newDateTime = this.state.dateTime.clone();

    if (newDateTime.isDST()) {
      newDateTime.add(1, 'hour');
      this.handleChange(event, newDateTime);
    }
  }

  renderTimeClarification() {
    return (
      <TimeClarification
        isOpen={this.state.isTimeClarificationOpen}
        isOffsetButtonHidden={!this.state.isAmbiguousTime}
        onDaylightSavingButtonClick={this.handleDaylightSavingButtonClick}
        onStandardTimeButtonClick={this.handleStandardTimeButtonClick}
      />
    );
  }

  render() {
    const {
      inputAttributes,
      excludeDates,
      filterDate,
      includeDates,
      onChange,
      onChangeRaw,
      maxDateTime,
      minDateTime,
      name,
      requestFocus,
      releaseFocus,
      value,
      ...customProps
    } = this.props;

    const dateTime = this.state.dateTime ? this.state.dateTime.clone() : null;
    const dateValue = DateTimeUtil.formatMomentDateTime(dateTime, 'YYYY-MM-DD');

    return (
      <div {...customProps} className={cx('date-time-picker')}>
        <input
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
          data-class="hidden-date-time-input"
          type="hidden"
          name={name}
          value={dateTime && dateTime.isValid() ? dateTime.format() : ''}
        />

        <DatePicker
          onChange={this.handleDateChange}
          onChangeRaw={this.handleDateChangeRaw}
          onSelect={this.handleOnSelect}
          onClickOutside={this.handleOnClickOutside}
          onBlur={this.handleOnDateBlur}
          excludeDates={excludeDates}
          filterDate={filterDate}
          includeDates={includeDates}
          inputAttributes={inputAttributes}
          maxDate={maxDateTime}
          minDate={minDateTime}
          selectedDate={dateValue}
          name="hidden-date-input"
          releaseFocus={releaseFocus}
          requestFocus={requestFocus}
        />

        <div className={cx('time-facade')}>
          <TimeInput
            onBlur={this.handleOnTimeBlur}
            onChange={this.handleTimeChange}
            inputAttributes={inputAttributes}
            name="hidden-time-input"
            value={this.timeValue}
          />

          {this.state.isAmbiguousTime ? this.renderTimeClarification() : null }
        </div>
      </div>
    );
  }
}

// <TimeClarification
//  isOpen={this.state.isTimeClarificationOpen}
//  isOffsetButtonHidden={!this.state.isAmbiguousTime}
//  onDaylightSavingButtonClick={this.handleDaylightSavingButtonClick}
//  onStandardTimeButtonClick={this.handleStandardTimeButtonClick}
// />

DateTimePicker.propTypes = propTypes;
DateTimePicker.defaultProps = defaultProps;
DateTimePicker.contextTypes = contextTypes;

export default DateTimePicker;
