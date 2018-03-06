/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const ActionFooterTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/action-footer/empty-action-footer">ActionFooter - Empty</Link></li>
      <li><Link to="/tests/action-footer/multiple-action-action-footer">ActionFooter - Multiple Action</Link></li>
      <li><Link to="/tests/action-footer/single-action-centered-action-footer">ActionFooter - Single Action</Link></li>
    </ul>
  </div>
);

export default ActionFooterTests;
