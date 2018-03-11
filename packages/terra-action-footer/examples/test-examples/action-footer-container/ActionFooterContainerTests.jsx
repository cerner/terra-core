/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const ActionFooterContainerTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/action-footer-container/no-children">ActionFooterContainer - No Children</Link></li>
      <li><Link to="/tests/action-footer-container/with-children">ActionFooterContainer - With Children</Link></li>
    </ul>
  </div>
);

export default ActionFooterContainerTests;
