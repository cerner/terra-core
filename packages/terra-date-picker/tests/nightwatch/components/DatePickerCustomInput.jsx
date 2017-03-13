import React, { PropTypes } from 'react';
import DatePicker from '../../../lib/DatePicker';

const CustomInputWithButton = (props) => {
  const customInput =
  (<div className="terra-DatePicker-custom">
    <input
      className="terra-DatePicker-custom-input react-datepicker-ignore-onclickoutside"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type="text"
    />
    <button
      className="terra-DatePicker-custom-button react-datepicker-ignore-onclickoutside"
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
    />
  </div>);

  return customInput;
};

CustomInputWithButton.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  value: PropTypes.string,
};

const DatePickerCustomInput = () => (
  <div>
    <DatePicker
      customInput={<CustomInputWithButton />}
    />
  </div>
);

export default DatePickerCustomInput;
