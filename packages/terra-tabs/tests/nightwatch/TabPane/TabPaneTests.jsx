/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const TabPaneTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/tab-pane-tests/text-only">Tab Pane - Text Only</Link></li>
      <li><Link to="/tests/tab-pane-tests/icon-only">Tabs - Icon Only</Link></li>
      <li><Link to="/tests/tab-pane-tests/icon-and-text">Tabs - Icon and Text</Link></li>
      <li><Link to="/tests/tab-pane-tests/custom-display">Tabs - Custom Display</Link></li>
      <li><Link to="/tests/tab-pane-tests/long-text">Tabs - Long Text</Link></li>
    </ul>
  </div>
);

export default TabPaneTests;
