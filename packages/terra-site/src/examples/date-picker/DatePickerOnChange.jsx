import React from 'react';
import DatePicker from 'terra-date-picker';

const handleOnChange = (selectedDate) => {
  window.console.log('**handleOnChange** The selected date is: ', selectedDate);
};

const DatePickerOnChange = () => (
  <DatePicker
    onChange={handleOnChange}
  />
);

export default DatePickerOnChange;
