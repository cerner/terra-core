/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const SelectTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/select-option-tests/default">SelectOption - Default</Link></li>
      <li><Link to="/tests/select-option-tests/selected">SelectOption - Selected</Link></li>
      <li><Link to="/tests/select-option-tests/disabled">SelectOption - Disabled</Link></li>
      <li><Link to="/tests/select-option-tests/children">SelectOption - Custom Display Layout</Link></li>
      <li><Link to="/tests/select-option-tests/long-text">SelectOption - Long Text Display</Link></li>
    </ul>
  </div>
);

export default SelectTests;
