/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const SelectTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/select-tests/default">Select - Default</Link></li>
      <li><Link to="/tests/select-tests/disabled">Select - Disabled</Link></li>
      <li><Link to="/tests/select-tests/invalid">Select - Invalid</Link></li>
      <li><Link to="/tests/select-tests/long-text">Select - Long Text</Link></li>
      <li><Link to="/tests/select-tests/controlled">Select - Controlled</Link></li>
    </ul>
  </div>
);

export default SelectTests;
