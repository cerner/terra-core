import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import Input from 'terra-form/lib/Input';
import DateUtil from './DateUtil';
import styles from './DatePicker.scss';

const Icon = <IconCalendar />;

const propTypes = {
  /**
   * Custom input attributes to apply to the date input.
   */
  inputAttributes: PropTypes.object,
  /**
   * Name of the date input.
   */
  name: PropTypes.string,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: PropTypes.func,
  /**
   * The onInputClick callback function from react-datepicker to show the picker when clicked.
   */
  onClick: PropTypes.func,
  /**
   * The onInputKeyDown callback function from react-datepicker to handle keyboard navigation.
   */
  onKeyDown: PropTypes.func,
  /**
   * The placeholder text to display in the date input.
   */
  placeholder: PropTypes.string,
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: PropTypes.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: PropTypes.func,
  /**
   * The selected or entered date value to display in the date input.
   */
  value: PropTypes.string,
};

const defaultProps = {
  inputAttributes: undefined,
  name: undefined,
  onChange: undefined,
  onClick: undefined,
  onKeyDown: undefined,
  placeholder: undefined,
  releaseFocus: undefined,
  requestFocus: undefined,
  value: undefined,
};

// eslint-disable-next-line react/prefer-stateless-function
class DatePickerInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnButtonClick = this.handleOnButtonClick.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  handleOnButtonClick() {
    // The picker is about to display so request focus from the containing component (e.g. modal) if it has the focus trapped.
    if (this.props.requestFocus) {
      this.props.requestFocus();
    }

    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  handleOnKeyDown(event) {
    // The picker will be dismissed if one of these keys is pressed and the focus will be released so release the focus to the containing component.
    if (this.props.releaseFocus && (event.key === 'Enter' || event.key === 'Escape' || event.key === 'Tab')) {
      this.props.releaseFocus();

      if (event.key === 'Tab') {
        event.preventDefault();
      }
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

  render() {
    const {
      inputAttributes,
      name,
      onChange,
      onClick,
      onKeyDown,
      placeholder,
      releaseFocus,
      requestFocus,
      value,
      ...customProps
    } = this.props;

    const additionalInputProps = Object.assign({}, inputAttributes, customProps);

    // react-datepicker by default will show the picker when the input has focus.
    // Since we want to show the picker only when the calendar button is clicked, we need to delete the onFocus handle that is passed in by react-datepicker.
    delete additionalInputProps.onFocus;

    const dateValue = DateUtil.convertToISO8601(value, 'MM/DD/YYYY');

    return (
      (<div className={styles['custom-input']}>
        <input
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
          data-class="hidden-date-input"
          type="hidden"
          name={name}
          value={dateValue}
        />
        <Input
          {...additionalInputProps} // TODO: When forms is available, this.props.inputAttributes should be passed to the attrs props in the TextField component (attrs={this.props.inputAttributes}) instead of destructuring the inputAttributes prop here.
          className={styles.input}
          type="text"
          name={'terra-date-'.concat(name)}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <Button
          className={styles.button}
          onClick={this.handleOnButtonClick}
          onKeyDown={this.handleOnKeyDown}
          icon={Icon}
          isCompact
          type="button"
        />
      </div>)
    );
  }
}

DatePickerInput.propTypes = propTypes;
DatePickerInput.defaultProps = defaultProps;

export default DatePickerInput;
