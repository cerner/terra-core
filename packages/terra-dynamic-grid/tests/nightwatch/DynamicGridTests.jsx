/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const DynamicGridTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/dynamic-grid-tests/default">DynamicGrid - Default</Link></li>
      <li><Link to="/tests/dynamic-grid-tests/large">DynamicGrid - Large</Link></li>
    </ul>
  </div>
);

export default DynamicGridTests;
