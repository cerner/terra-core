import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
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
    const dateValue = DateUtil.convertToISO8601(this.props.value, 'MM/DD/YYYY');

    return (
      (<div className="terra-DatePicker-customInput">
        <input
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
          className="terra-hidden-date-input"
          type="hidden"
          name={this.props.name}
          value={dateValue}
        />
        <input
          {...this.props.inputAttributes} // TODO: When forms is available, this.props.inputAttributes should be passed to the attrs props in the TextField component (attrs={this.props.inputAttributes}) instead of destructuring the inputAttributes prop here.
          className="terra-DatePicker-input"
          type="text"
          name={'terra-date-'.concat(this.props.name)}
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
DatePickerInput.defaultProps = defaultProps;

export default DatePickerInput;
