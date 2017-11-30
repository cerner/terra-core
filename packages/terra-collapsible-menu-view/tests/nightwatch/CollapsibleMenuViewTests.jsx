/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const CollapsibleMenuViewTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/collapsible-menu-view-tests/default">CollapsibleMenuView - Default</Link></li>
      <li><Link to="/tests/collapsible-menu-view-tests/first-item-hidden">CollapsibleMenuView - First Hidden Item Is Icon Only</Link></li>
    </ul>
  </div>
);

export default CollapsibleMenuViewTests;
