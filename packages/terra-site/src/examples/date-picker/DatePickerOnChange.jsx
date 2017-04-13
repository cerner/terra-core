import React from 'react';
import DatePicker from 'terra-date-picker';

const handleOnChange = (selectedDate) => {
  window.console.log('**handleOnChange** The selected date is: ', selectedDate);
};

const DatePickerOnChange = () => (
  <div>
    <DatePicker
      onChange={handleOnChange}
    />
  </div>
);

export default DatePickerOnChange;
