/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const CheckboxTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/checkbox-tests/default">Checkbox - Default</Link></li>
      <li><Link to="/tests/checkbox-tests/disabled">Checkbox - Disabled</Link></li>
      <li><Link to="/tests/checkbox-tests/populated">Checkbox - Populated</Link></li>
      <li><Link to="/tests/checkbox-tests/longText">Checkbox - Long Text</Link></li>
      <li><Link to="/tests/checkbox-tests/multiple">Checkbox - Multiple</Link></li>
    </ul>
  </div>
);

export default CheckboxTests;
