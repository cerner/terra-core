/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const TimeInputTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/time-input-tests/default">TimeInput - Default</Link></li>
      <li><Link to="/tests/time-input-tests/default-time">TimeInput - Default Time</Link></li>
      <li><Link to="/tests/time-input-tests/on-change">TimeInput - OnChange</Link></li>
      <li><Link to="/tests/time-input-tests/invalid-time">TimeInput - Invalid Time</Link></li>
      <li><Link to="/tests/time-input-tests/twelve-hour">TimeInput - Twelve Hour</Link></li>
      <li><Link to="/tests/time-input-tests/twelve-hour-filled-morning">TimeInput - Twelve Hour Default Time Morning</Link></li>
      <li><Link to="/tests/time-input-tests/twelve-hour-filled-evening">TimeInput - Twelve Hour Default Time Evening</Link></li>
      <li><Link to="/tests/time-input-tests/twelve-hour-mobile">TimeInput - Twelve Hour Mobile</Link></li>
      <li><Link to="/tests/time-input-tests/twelve-hour-mobile-time-provided">TimeInput - Twelve Hour Mobile with Time Provided</Link></li>
      <li><Link to="/tests/time-input-tests/twelve-hour-mobile-ids">TimeInput - Twelve Hour with ids provided to inputs</Link></li>
      <li><Link to="/tests/time-input-tests/disabled">TimeInput - Disabled</Link></li>
      <li><Link to="/tests/time-input-tests/disabled-mobile">TimeInput - Disabled Mobile</Link></li>
    </ul>
  </div>
);

export default TimeInputTests;
