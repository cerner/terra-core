/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const ActionFooterTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/action-footer/empty">ActionFooter - Empty</Link></li>
      <li><Link to="/tests/action-footer/multiple-end-actions">ActionFooter - Multiple End Actions</Link></li>
      <li><Link to="/tests/action-footer/multiple-start-actions">ActionFooter - Multiple Start Actions</Link></li>
      <li><Link to="/tests/action-footer/multiple-start-end-actions">ActionFooter - Multiple Start & End Actions</Link></li>
      <li><Link to="/tests/action-footer/single-end-action">ActionFooter - Single End Action</Link></li>
      <li><Link to="/tests/action-footer/single-start-action">ActionFooter - Single Start Action</Link></li>
      <li><Link to="/tests/action-footer/single-start-end-action">ActionFooter - Single Start & End Actions</Link></li>
    </ul>
  </div>
);

export default ActionFooterTests;
