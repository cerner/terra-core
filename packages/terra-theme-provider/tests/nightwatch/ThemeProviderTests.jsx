/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ThemeProviderTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/theme-provider-tests/default">ThemeProvider - Default</Link></li>
      <li><Link to="/tests/theme-provider-tests/theme-switching">ThemeProvider - Theme Switching</Link></li>
    </ul>
  </div>
);

export default ThemeProviderTests;
