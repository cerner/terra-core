import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import Input from 'terra-form/lib/Input';

const Icon = <IconCalendar />;

const propTypes = {
  /**
   * Custom input attributes to apply to the date input.
   */
  inputAttributes: PropTypes.object,
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

// eslint-disable-next-line react/prefer-stateless-function
class DatePickerInput extends React.Component {
  render() {
    const {
      inputAttributes,
      onChange,
      onClick,
      onKeyDown,
      placeholder,
      value,
      ...customProps
    } = this.props;

    const additionalInputProps = Object.assign({}, inputAttributes, customProps);

    return (
      (<div className="terra-DatePicker-customInput">
        <Input
          {...additionalInputProps} // TODO: When forms is available, this.props.inputAttributes should be passed to the attrs props in the TextField component (attrs={this.props.inputAttributes}) instead of destructuring the inputAttributes prop here.
          className="terra-DatePicker-input"
          type="text"
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

export default DatePickerInput;
