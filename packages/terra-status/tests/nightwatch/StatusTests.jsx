/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ResponsiveElementTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/status-tests/default">Status Default</Link></li>
      <li><Link to="/tests/status-tests/arrange">Status Arrange</Link></li>
      <li><Link to="/tests/status-tests/icon">Status Icon</Link></li>
      <li><Link to="/tests/status-tests/image">Status Image</Link></li>
      <li><Link to="/tests/status-tests/no-color">Status No Color</Link></li>
    </ul>
  </div>
);

export default ResponsiveElementTests;
