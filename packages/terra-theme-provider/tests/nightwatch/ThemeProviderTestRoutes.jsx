/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ThemeProviderTests from './ThemeProviderTests';

// Test Cases
import DefaultThemeProvider from './DefaultThemeProvider';
import GlobalThemeProvider from './GlobalThemeProvider';
import SwitchThemes from './SwitchThemes';
import GlobalSwitchThemes from './GlobalSwitchThemes';
import ThemeProviderNoTheme from './ThemeProviderNoTheme';

const routes = (
  <div>
    <Route path="/tests/theme-provider-tests" component={ThemeProviderTests} />
    <Route path="/tests/theme-provider-tests/default" component={DefaultThemeProvider} />
    <Route path="/tests/theme-provider-tests/global-theme" component={GlobalThemeProvider} />
    <Route path="/tests/theme-provider-tests/theme-switching" component={SwitchThemes} />
    <Route path="/tests/theme-provider-tests/global-theme-switching" component={GlobalSwitchThemes} />
    <Route path="/tests/theme-provider-tests/theme-provider-no-theme" component={ThemeProviderNoTheme} />
  </div>
);

export default routes;
