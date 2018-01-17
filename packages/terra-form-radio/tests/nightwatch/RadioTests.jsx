/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const RadioTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/form-radio-tests/default">Radio - Default</Link></li>
      <li><Link to="/tests/form-radio-tests/disabled">Radio - Disabled</Link></li>
      <li><Link to="/tests/form-radio-tests/hidden">Radio - Hidden</Link></li>
      <li><Link to="/tests/form-radio-tests/populated">Radio - Populated</Link></li>
      <li><Link to="/tests/form-radio-tests/long-text">Radio - Long Text</Link></li>
      <li><Link to="/tests/form-radio-tests/multiple">Radio - Multiple</Link></li>
    </ul>
  </div>
);

export default RadioTests;
