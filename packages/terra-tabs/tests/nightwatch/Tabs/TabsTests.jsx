/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const TabsTests = () => (
  <div>
    <ul>
      <li>
        <div>Tabs with only required props set.</div>
        <Link to="/tests/tabs-tests/default">Tabs - Default</Link>
      </li>
      <li>
        <div>Controlled tabs use activeKey and onChange props to manage state. Initial selected tab should be Tab 2.</div>
        <Link to="/tests/tabs-tests/controlled">Tabs - Controlled</Link>
      </li>
      <li>
        <div>Tabs containing only icons as labels. Header text should be displayed in content for accessibility.</div>
        <Link to="/tests/tabs-tests/icon-only">Tabs - IconOnly</Link>
      </li>
      <li>
        <div>Extended tabs allow the tabs to strech to fill the space in the tab bar</div>
        <Link to="/tests/tabs-tests/extended">Tabs - Extended</Link>
      </li>
      <li>
        <div>Tabs can fill the height of the parent container instead of fitting to the size of the content.</div>
        <Link to="/tests/tabs-tests/fill-parent">Tabs - Fill parent container</Link>
      </li>
    </ul>
  </div>
);

export default TabsTests;
