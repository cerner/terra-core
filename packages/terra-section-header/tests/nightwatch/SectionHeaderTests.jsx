/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const SectionHeaderTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/section-header-tests/default-section-header">SectionHeader - Default</Link></li>
      <li><Link to="/tests/section-header-tests/long-title-section-header">SectionHeader - Long</Link></li>
      <li><Link to="/tests/section-header-tests/closed-section-header">SectionHeader - Closed</Link></li>
      <li><Link to="/tests/section-header-tests/open-section-header">SectionHeader - Open</Link></li>
      <li><Link to="/tests/section-header-tests/long-title-accordion-section-header">Accordion SectionHeader - Long</Link></li>
      <li><Link to="/tests/section-header-tests/on-click-section-header">OnClick SectionHeader</Link></li>
    </ul>
  </div>
);

export default SectionHeaderTests;
