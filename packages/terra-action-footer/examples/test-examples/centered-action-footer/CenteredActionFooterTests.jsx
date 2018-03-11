/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const CenteredActionFooterTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/centered-action-footer/empty">CenteredActionFooter - Empty</Link></li>
      <li><Link to="/tests/centered-action-footer/multiple-actions">CenteredActionFooter - Multiple Actions</Link></li>
      <li><Link to="/tests/centered-action-footer/single-action">CenteredActionFooter - Single Action</Link></li>
    </ul>
  </div>
);

export default CenteredActionFooterTests;
