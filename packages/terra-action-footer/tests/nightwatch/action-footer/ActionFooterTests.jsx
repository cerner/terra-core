/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const ActionFooterTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/action-footer/empty-action-footer">ActionFooter - Empty</Link></li>
      <li><Link to="/tests/action-footer/multiple-end-action-footer">ActionFooter - Mutliple End Action Footer</Link></li>
      <li><Link to="/tests/action-footer/multiple-start-action-footer">ActionFooter - Multiple Start Action Footer</Link></li>
      <li><Link to="/tests/action-footer/multiple-start-end-action-footer">ActionFooter - Multiple Start & End Action Footer</Link></li>
      <li><Link to="/tests/action-footer/single-end-action-footer">ActionFooter - Single End Action Footer</Link></li>
      <li><Link to="/tests/action-footer/single-start-action-footer">ActionFooter - Single Start Action Footer</Link></li>
      <li><Link to="/tests/action-footer/single-start-end-action-footer">ActionFooter - Single Start & End Action Footer</Link></li>
    </ul>
  </div>
);

export default ActionFooterTests;
