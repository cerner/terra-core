/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const ActionHeaderTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/action-header-tests/default-action-header">ActionHeader - Default</Link></li>
      <li><Link to="/tests/action-header-tests/back-action-header">ActionHeader - Back</Link></li>
      <li><Link to="/tests/action-header-tests/back-close-action-header">ActionHeader - Back Close</Link></li>
      <li><Link to="/tests/action-header-tests/keep-close-action-header">ActionHeader - Keep Closed</Link></li>
      <li><Link to="/tests/action-header-tests/custom-button-action-header">ActionHeader - Custom Button</Link></li>
    </ul>
  </div>
);

export default ActionHeaderTests;
