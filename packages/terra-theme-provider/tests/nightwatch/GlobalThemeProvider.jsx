import React from 'react';
import ThemeProvider from '../../lib/ThemeProvider';
import MockThemeComponent from './MockThemeComponent';

const DefaultThemeProvider = () => (
  <ThemeProvider id="themeProvider" themeName="cerner-mock-theme" isGlobalTheme>
    <MockThemeComponent id="themedComponent">
      Theme Provider Test
    </MockThemeComponent>
  </ThemeProvider>
);

export default DefaultThemeProvider;
