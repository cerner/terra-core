import React from 'react';
import ThemeProvider from '../../src/ThemeProvider';
import MockThemeComponent from './MockThemeComponent';

const DefaultThemeProvider = () => (
  <ThemeProvider id="themeProvider" themeName={ThemeProvider.Opts.Themes.MOCK}>
    <MockThemeComponent id="themedComponent">
      Theme Provider Test
    </MockThemeComponent>
  </ThemeProvider>
);

export default DefaultThemeProvider;
