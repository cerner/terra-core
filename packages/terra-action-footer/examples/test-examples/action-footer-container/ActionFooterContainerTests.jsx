/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const ActionFooterContainerTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/action-footer-container/without-actions">ActionFooterContainer - Without Actions</Link></li>
      <li><Link to="/tests/action-footer-container/with-actions">ActionFooterContainer - With Actions</Link></li>
    </ul>
  </div>
);

export default ActionFooterContainerTests;
