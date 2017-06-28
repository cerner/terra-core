/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ToggleTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/toggle-tests/default">Toggle - Default</Link></li>
      <li><Link to="/tests/toggle-tests/animated">Toggle - Animated</Link></li>
      <li><Link to="/tests/toggle-tests/open">Toggle - Open</Link></li>
    </ul>
  </div>
);

export default ToggleTests;
