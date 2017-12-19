/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const TabsTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/tabs-tests/default">Tabs - Default</Link></li>
      <li><Link to="/tests/tabs-tests/controlled">Tabs - Controlled</Link></li>
      <li><Link to="/tests/tabs-tests/icon-only">Tabs - IconOnly</Link></li>
      <li><Link to="/tests/tabs-tests/extended">Tabs - Extended</Link></li>
      <li><Link to="/tests/tabs-tests/fill-parent">Tabs - Fill parent container</Link></li>
    </ul>
  </div>
);

export default TabsTests;
