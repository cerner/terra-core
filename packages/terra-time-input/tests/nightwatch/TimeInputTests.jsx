/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const TimeInputTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/time-input-tests/default">TimeInput - Default</Link></li>
      <li><Link to="/tests/time-input-tests/default-time">TimeInput - Default Time</Link></li>
      <li><Link to="/tests/time-input-tests/on-change">TimeInput - OnChange</Link></li>
    </ul>
  </div>
);

export default TimeInputTests;
