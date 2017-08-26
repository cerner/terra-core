/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ThemeProviderTests from './ThemeProviderTests';

// Test Cases
import DefaultThemeProvider from './DefaultThemeProvider';
import SwitchThemes from './SwitchThemes';

const routes = (
  <div>
    <Route path="/tests/theme-provider-tests" component={ThemeProviderTests} />
    <Route path="/tests/theme-provider-tests/default" component={DefaultThemeProvider} />
    <Route path="/tests/theme-provider-tests/theme-switching" component={SwitchThemes} />
  </div>
);

export default routes;
