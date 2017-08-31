/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const DateTimePickerTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/date-time-picker-tests/default">DateTimePicker - Default</Link></li>
      <li><Link to="/tests/date-time-picker-tests/date-only">DateTimePicker - Date Only</Link></li>
      <li><Link to="/tests/date-time-picker-tests/date-time">DateTimePicker - Date Time</Link></li>
      <li><Link to="/tests/date-time-picker-tests/dst">DateTimePicker - DST</Link></li>
      <li><Link to="/tests/date-time-picker-tests/exclude-dates">DateTimePicker - Exclude Dates</Link></li>
      <li><Link to="/tests/date-time-picker-tests/filter-dates">DateTimePicker - Filter Dates</Link></li>
      <li><Link to="/tests/date-time-picker-tests/include-dates">DateTimePicker - Include Dates</Link></li>
      <li><Link to="/tests/date-time-picker-tests/min-max">DateTimePicker - Min Max</Link></li>
      <li><Link to="/tests/date-time-picker-tests/inside-modal">DateTimePicker - Presented Inside Modal</Link></li>
      <li><Link to="/tests/date-time-picker-tests/on-change">DateTimePicker - On Change</Link></li>
      <li><Link to="/tests/date-time-picker-tests/on-change-raw">DateTimePicker - On Change Raw</Link></li>
    </ul>
  </div>
);

export default DateTimePickerTests;
