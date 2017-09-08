/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const MenuTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/menu-tests/default">Menu - Default</Link></li>
      <li><Link to="/tests/menu-tests/bounded">Menu - Bounded</Link></li>
      <li><Link to="/tests/menu-tests/small">Menu - Small Height</Link></li>
      <li><Link to="/tests/menu-tests/medium">Menu - Medium Height</Link></li>
      <li><Link to="/tests/menu-tests/large">Menu - Large Height</Link></li>
      <li><Link to="/tests/menu-tests/selectable">Menu - Selectable</Link></li>
      <li><Link to="/tests/menu-tests/non-selectable">Menu - Not Selectable</Link></li>
      <li><Link to="/tests/menu-tests/submenu">Menu - Submenu</Link></li>
    </ul>
  </div>
);

export default MenuTests;
