import React from 'react';
import moment from 'moment';
import DatePicker from 'terra-date-picker';

const DatePickerHighlightDates = () => (
  <div>
    <DatePicker
      highlightDates={[moment().subtract(3, 'days'), moment().add(3, 'days')]}
    />
  </div>
);

export default DatePickerHighlightDates;
