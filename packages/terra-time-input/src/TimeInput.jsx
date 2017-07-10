import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Input from 'terra-form/lib/Input';
import TimeUtil from './TimeUtil';
import styles from './TimeInput.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Custom input attributes to apply to the time input.
   */
  inputAttributes: PropTypes.object,
  /**
   * Name of the time input. The name should be unique.
   */
  name: PropTypes.string.isRequired,
  /**
   * A callback function to execute when either the hour or minute has been changed. The first parameter is the event. The second parameter is the changed time value.
   */
  onChange: PropTypes.func,
  /**
   * An ISO 8601 string representation of the time value in the input.
   */
  value: PropTypes.string,
};

const defaultProps = {
  inputAttributes: undefined,
  name: null,
  onChange: null,
  value: undefined,
};

const inputType = {
  HOUR: 0,
  MINUTE: 1,
};

const keyCodes = {
  BACKSPACE: 8,
  ARROWLEFT: 37,
  ARROWUP: 38,
  ARROWRIGHT: 39,
  ARROWDOWN: 40,
  DELETE: 46,
};

class TimeInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeFormat: 'hh:mm',
      hour: TimeUtil.parseHourFromTime(props.value),
      minute: TimeUtil.parseMinuteFromTime(props.value),
      isFocused: false,
    };

    this.handleHourChange = this.handleHourChange.bind(this);
    this.handleMinuteChange = this.handleMinuteChange.bind(this);
    this.handleHourInputKeyDown = this.handleHourInputKeyDown.bind(this);
    this.handleMinuteInputKeyDown = this.handleMinuteInputKeyDown.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleHourBlur = this.handleHourBlur.bind(this);
    this.handleMinuteBlur = this.handleMinuteBlur.bind(this);
  }

  handleFocus() {
    this.setState({ isFocused: true });
  }

  handleHourBlur(event) {
    this.handleBlur(event, inputType.HOUR);
  }

  handleMinuteBlur(event) {
    this.handleBlur(event, inputType.MINUTE);
  }

  handleBlur(event, type) {
    let stateValue = event.target.value;

    // Prepend a 0 to the value when losing focus and the value is single digit.
    if (stateValue.length === 1) {
      stateValue = '0'.concat(stateValue);
    }

    if (type === inputType.HOUR) {
      this.setState({ hour: stateValue, isFocused: false });
    } else {
      this.setState({ minute: stateValue, isFocused: false });
    }
  }

  handleHourChange(event) {
    this.handleChange(event, inputType.HOUR);
  }

  handleMinuteChange(event) {
    this.handleChange(event, inputType.MINUTE);
  }

  handleChange(event, type) {
    // Ignore the input and don't update the state if the entered value is a non numeric character.
    if (event.target.value.length > 0) {
      const isNumeric = /^\d+$/.test(event.target.value);

      if (!isNumeric) {
        return;
      }
    }

    let inputValue = event.target.value;
    const stateValue = type === inputType.HOUR ? this.state.hour : this.state.minute;
    const maxValue = type === inputType.HOUR ? 23 : 59;

    // Ignore the entry if the value did not change or it is invalid.
    // When 'Predictive text' is enabled on Android the maxLength attribute on the input is ignored so we have to the length of inputValue to make sure that it is less then 2.
    if (inputValue === stateValue || inputValue.length > 2 || Number(inputValue) > maxValue) {
      return;
    }

    // If the change made was not a deletion of a digit,
    // then prepend '0' if the input value is a single digit value between 3 and 9 for hour or 6 and 9 for minute.
    if (inputValue.length >= stateValue.length) {
      const digitsToPrependZero = type === inputType.HOUR ? ['3', '4', '5', '6', '7', '8', '9'] : ['6', '7', '8', '9'];
      if (digitsToPrependZero.indexOf(inputValue) > -1) {
        inputValue = '0'.concat(inputValue);
      }
    }

    if (type === inputType.HOUR) {
      this.setState({ hour: inputValue });
    } else {
      this.setState({ minute: inputValue });
    }

    if (this.props.onChange) {
      let enteredTime;
      if (type === inputType.HOUR) {
        enteredTime = inputValue.concat(':', this.state.minute);
      } else {
        enteredTime = this.state.hour.concat(':', inputValue);
      }

      this.props.onChange(event, enteredTime);
    }

    // // Move focus to the minute input if the hour input has a valid and complete entry.
    if (type === inputType.HOUR && inputValue.length === 2) {
      this.minuteInput.textInput.focus();
    }
  }

  handleHourInputKeyDown(event) {
    this.handleInputKeyDown(event, inputType.HOUR);
  }

  handleMinuteInputKeyDown(event) {
    this.handleInputKeyDown(event, inputType.MINUTE);
  }

  handleInputKeyDown(event, type) {
    let stateValue = type === inputType.HOUR ? this.state.hour : this.state.minute;
    const maxValue = type === inputType.HOUR ? 23 : 59;
    let updateStateValue = false;

    if (event.keyCode === keyCodes.ARROWUP) {
      // Increment the value by 1 when arrow up is pressed.
      if (stateValue) {
        let numericMinute = Number(stateValue);

        if (numericMinute < maxValue) {
          numericMinute += 1;
          if (numericMinute < 10) {
            stateValue = '0'.concat(numericMinute.toString());
          } else {
            stateValue = numericMinute.toString();
          }
          updateStateValue = true;
        }
      } else {
        stateValue = '00';
        updateStateValue = true;
      }
    } else if (event.keyCode === keyCodes.ARROWDOWN) {
      // Decrement the value by 1 when arrow down is pressed.
      if (stateValue) {
        let numericMinute = Number(stateValue);

        if (numericMinute > 0) {
          numericMinute -= 1;
          if (numericMinute < 10) {
            stateValue = '0'.concat(numericMinute.toString());
          } else {
            stateValue = numericMinute.toString();
          }
          updateStateValue = true;
        }
      } else {
        stateValue = '00';
        updateStateValue = true;
      }
    } else if (event.keyCode === keyCodes.ARROWRIGHT) {
      if (type === inputType.HOUR) {
        // If the hour is empty or the cursor is after the value, move focus to the minute input when the right arrow is pressed.
        if (stateValue.length === 0 || stateValue.length === this.hourInput.textInput.selectionEnd) {
          this.minuteInput.textInput.focus();
          this.minuteInput.textInput.setSelectionRange(0, 0);
          event.preventDefault();
        }
      }
    } else if (event.keyCode === keyCodes.ARROWLEFT || event.keyCode === keyCodes.DELETE || event.keyCode === keyCodes.BACKSPACE) {
      if (type === inputType.MINUTE) {
        // When the DELETE, BACK, or LEFT ARROW key is pressed and tf the cusor is at the left most position in the minute input, is empty or the cursor is before the value, move focus to the hour input when the left arrow is pressed.
        if (this.minuteInput.textInput.selectionEnd === 0) {
          this.hourInput.textInput.focus();
          if (this.state.hour) {
            this.hourInput.textInput.setSelectionRange(this.state.hour.length, this.state.hour.length);
            event.preventDefault();
          }
        }
      }
    }

    if (updateStateValue) {
      if (type === inputType.HOUR) {
        this.setState({ hour: stateValue });
      } else {
        this.setState({ minute: stateValue });
      }
    }
  }

  render() {
    const {
      inputAttributes,
      onChange,
      name,
      value,
      ...customProps
    } = this.props;

    const timeInputClassNames = cx([
      'time-input',
      { 'is-focused': this.state.isFocused },
      customProps.className,
    ]);

    // Using the state of hour and minute create a time in UTC represented in ISO 8601 format.
    let timeValue = '';
    if (this.state.hour.length > 0 || this.state.minute.length > 0) {
      timeValue = 'T'.concat(this.state.hour, ':', this.state.minute);
    }

    return (
      <div {...customProps} className={timeInputClassNames}>
        <input
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
          type="hidden"
          name={name}
          value={timeValue}
        />
        <Input
          {...inputAttributes}
          ref={(inputRef) => { this.hourInput = inputRef; }}
          className={cx('time-input-hour')}
          type="text"
          value={this.state.hour}
          name={'terra-time-hour-'.concat(name)}
          placeholder={TimeUtil.splitHour(this.state.timeFormat)}
          maxLength="2"
          onChange={this.handleHourChange}
          onKeyDown={this.handleHourInputKeyDown}
          onFocus={this.handleFocus}
          onBlur={this.handleHourBlur}
          pattern="\d*"
        />
        <span>:</span>
        <Input
          {...inputAttributes}
          ref={(inputRef) => { this.minuteInput = inputRef; }}
          className={cx('time-input-minute')}
          type="text"
          value={this.state.minute}
          name={'terra-time-minute-'.concat(name)}
          placeholder={TimeUtil.splitMinute(this.state.timeFormat)}
          maxLength="2"
          onChange={this.handleMinuteChange}
          onKeyDown={this.handleMinuteInputKeyDown}
          onFocus={this.handleFocus}
          onBlur={this.handleMinuteBlur}
          pattern="\d*"
        />
      </div>
    );
  }
}

TimeInput.propTypes = propTypes;
TimeInput.defaultProps = defaultProps;

export default TimeInput;
