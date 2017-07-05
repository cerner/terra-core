import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import Input from 'terra-form/lib/Input';
import DateUtil from './DateUtil';

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
  value: undefined,
};

// eslint-disable-next-line react/prefer-stateless-function
class DatePickerInput extends React.Component {
  render() {
    const {
      inputAttributes,
      name,
      onChange,
      onClick,
      onKeyDown,
      placeholder,
      value,
      ...customProps
    } = this.props;

    const additionalInputProps = Object.assign({}, inputAttributes, customProps);

    // react-datepicker by default will show the picker when the input has focus.
    // Since we want to show the picker only when the calendar button is clicked, we need to delete the onFocus handle that is passed in by react-datepicker.
    delete additionalInputProps.onFocus;

    const dateValue = DateUtil.convertToISO8601(value, 'MM/DD/YYYY');

    return (
      (<div className="terra-DatePicker-customInput">
        <input
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
          className="terra-hidden-date-input"
          type="hidden"
          name={name}
          value={dateValue}
        />
        <Input
          {...additionalInputProps} // TODO: When forms is available, this.props.inputAttributes should be passed to the attrs props in the TextField component (attrs={this.props.inputAttributes}) instead of destructuring the inputAttributes prop here.
          className="terra-DatePicker-input"
          type="text"
          name={'terra-date-'.concat(name)}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <Button
          className="terra-DatePicker-button"
          onClick={onClick}
          onKeyDown={onKeyDown}
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
