/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ProgressBarTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/progress-bar-tests/default">Default</Link></li>
      <li><Link to="/tests/progress-bar-tests/color">Color</Link></li>
      <li><Link to="/tests/progress-bar-tests/size">Size</Link></li>
    </ul>
  </div>
);

export default ProgressBarTests;
