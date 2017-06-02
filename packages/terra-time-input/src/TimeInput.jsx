import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import Input from 'terra-form/lib/Input';
import TimeUtil from './TimeUtil';
import './TimeInput.scss';

const propTypes = {
  /**
   * Custom input attributes to apply to the time input.
   */
  inputAttributes: PropTypes.object,
    /**
   * A callback function to execute when a time value is entered.
   */
  onChange: PropTypes.func,
  /**
   * An ISO 8601 string representation of the time value in the input.
   */
  value: PropTypes.string,
};

const defaultProps = {
  inputAttributes: undefined,
  onChange: null,
  value: undefined,
};

const inputType = {
  HOUR: 0,
  MINUTE: 1,
};

const acceptableKeyCodes = {
  BACKSPACE: 8,
  TAB: 9,
  ARROWLEFT: 37,
  ARROWUP: 38,
  ARROWRIGHT: 39,
  ARROWDOWN: 40,
  DELETE: 46,
  DIGIT0: 48,
  DIGIT1: 49,
  DIGIT2: 50,
  DIGIT3: 51,
  DIGIT4: 52,
  DIGIT5: 53,
  DIGIT6: 54,
  DIGIT7: 55,
  DIGIT8: 56,
  DIGIT9: 57,
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
    this.handleBlur(inputType.HOUR, event);
  }

  handleMinuteBlur(event) {
    this.handleBlur(inputType.MINUTE, event);
  }

  handleBlur(type, event) {
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
    let inputValue = event.target.value;
    const stateValue = type === inputType.HOUR ? this.state.hour : this.state.minute;
    const maxValue = type === inputType.HOUR ? 23 : 59;

    // Ignore the entry if the value did not change or it is invalid.
    if (inputValue === stateValue || Number(inputValue) > maxValue) {
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

      this.props.onChange(enteredTime, event);
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
    if (Object.values(acceptableKeyCodes).indexOf(event.keyCode) < 0) {
      event.preventDefault();
      return;
    }

    let stateValue = type === inputType.HOUR ? this.state.hour : this.state.minute;
    const maxValue = type === inputType.HOUR ? 23 : 59;
    let updateStateValue = false;

    if (event.keyCode === acceptableKeyCodes.ARROWUP) {
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
    } else if (event.keyCode === acceptableKeyCodes.ARROWDOWN) {
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
    } else if (event.keyCode === acceptableKeyCodes.ARROWRIGHT) {
      if (type === inputType.HOUR) {
        // If the hour is empty or the cursor is after the value, move focus to the minute input when the right arrow is pressed.
        if (stateValue.length === 0 || stateValue.length === this.hourInput.textInput.selectionEnd) {
          this.minuteInput.textInput.focus();
          this.minuteInput.textInput.setSelectionRange(0, 0);
          event.preventDefault();
        }
      }
    } else if (event.keyCode === acceptableKeyCodes.ARROWLEFT || event.keyCode === acceptableKeyCodes.DELETE || event.keyCode === acceptableKeyCodes.BACKSPACE) {
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
      value,
      ...customProps
    } = this.props;

    const timeInputClassNames = classNames([
      'terra-TimeInput',
      { 'is-focused': this.state.isFocused },
      customProps.className,
    ]);

    return (
      <div {...customProps} className={timeInputClassNames}>
        <Input
          {...inputAttributes}
          ref={(inputRef) => { this.hourInput = inputRef; }}
          className="terra-TimeInput-hour"
          type="text"
          value={this.state.hour}
          placeholder={TimeUtil.splitHour(this.state.timeFormat)}
          maxLength="2"
          onChange={this.handleHourChange}
          onKeyDown={this.handleHourInputKeyDown}
          onFocus={this.handleFocus}
          onBlur={this.handleHourBlur}
        />
        <span>:</span>
        <Input
          {...inputAttributes}
          ref={(inputRef) => { this.minuteInput = inputRef; }}
          className="terra-TimeInput-minute"
          type="text"
          value={this.state.minute}
          placeholder={TimeUtil.splitMinute(this.state.timeFormat)}
          maxLength="2"
          onChange={this.handleMinuteChange}
          onKeyDown={this.handleMinuteInputKeyDown}
          onFocus={this.handleFocus}
          onBlur={this.handleMinuteBlur}
        />
      </div>
    );
  }
}

TimeInput.propTypes = propTypes;
TimeInput.defaultProps = defaultProps;

export default TimeInput;
