/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const BadgeTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/badge-tests/default">Badge Default</Link></li>
      <li><Link to="/tests/badge-tests/intent">Badge Intent</Link></li>
      <li><Link to="/tests/badge-tests/size">Badge Size</Link></li>
      <li><Link to="/tests/badge-tests/icon">Badge Icon</Link></li>
    </ul>
  </div>
);

export default BadgeTests;
