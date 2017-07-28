/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const AlertTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/alert-tests/default">Alert Default</Link></li>
      <li><Link to="/tests/alert-tests/type">Alert Type</Link></li>
      <li><Link to="/tests/alert-tests/title">Alert Title</Link></li>
      <li><Link to="/tests/alert-tests/custom">Alert Custom</Link></li>
      <li><Link to="/tests/alert-tests/actionButton">Alert Action Button</Link></li>
      <li><Link to="/tests/alert-tests/dismissible">Alert Dismissible</Link></li>
      <li><Link to="/tests/alert-tests/responsive">Alert Responsive To Parent</Link></li>
    </ul>
  </div>
);

export default AlertTests;
