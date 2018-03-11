/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const ToggleSectionHeaderTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/toggle-section-header-tests/default-toggle-section-header">ToggleSectionHeader - Default</Link></li>
      <li><Link to="/tests/toggle-section-header-tests/open-toggle-section-header">ToggleSectionHeader - Open</Link></li>
    </ul>
  </div>
);

export default ToggleSectionHeaderTests;
