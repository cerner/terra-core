/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const ThemeProviderTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/theme-provider-tests/default">ThemeProvider - Default</Link></li>
      <li><Link to="/tests/theme-provider-tests/global-theme">ThemeProvider - Global</Link></li>
      <li><Link to="/tests/theme-provider-tests/theme-switching">ThemeProvider - Theme Switching</Link></li>
      <li><Link to="/tests/theme-provider-tests/global-theme-switching">ThemeProvider - Global Theme Switching</Link></li>
      <li><Link to="/tests/theme-provider-tests/theme-provider-no-theme">ThemeProvider - No ThemeName</Link></li>
    </ul>
  </div>
);

export default ThemeProviderTests;
