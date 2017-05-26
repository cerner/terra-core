import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';

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
    return (
      (<div className="terra-DatePicker-customInput">
        <input
          {...this.props.inputAttributes} // TODO: When forms is available, this.props.inputAttributes should be passed to the attrs props in the TextField component (attrs={this.props.inputAttributes}) instead of destructuring the inputAttributes prop here.
          className="terra-DatePicker-input"
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
        />
        <Button
          className="terra-DatePicker-button"
          onClick={this.props.onClick}
          onKeyDown={this.props.onKeyDown}
          icon={Icon}
          type="button"
        />
      </div>)
    );
  }
}

DatePickerInput.propTypes = propTypes;

export default DatePickerInput;
