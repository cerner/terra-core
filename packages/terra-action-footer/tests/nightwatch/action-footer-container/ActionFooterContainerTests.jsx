/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const ActionFooterContainerTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/action-footer-container/empty">ActionFooterContainer - Empty</Link></li>
      <li><Link to="/tests/action-footer-container/multiple-actions">ActionFooterContainer - Multiple Actions</Link></li>
      <li><Link to="/tests/action-footer-container/single-action">ActionFooterContainer - Single Action</Link></li>
    </ul>
  </div>
);

export default ActionFooterContainerTests;
