import React from 'react';
import ThemeProvider from '../../lib/ThemeProvider';
import MockThemeComponent from './MockThemeComponent';

const DefaultThemeProvider = () => (
  // Showing use of a default theme provider with a mock theme.
  // No theme switching in this example
  <ThemeProvider id="themeProvider" themeName="cerner-mock-theme">
    <MockThemeComponent id="themedComponent">
      Theme Provider Test
    </MockThemeComponent>
  </ThemeProvider>
);

export default DefaultThemeProvider;
