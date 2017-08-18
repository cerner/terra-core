/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-theme-provider/docs/README.md';
import { version } from 'terra-theme-provider/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ThemeProviderSrc from '!raw-loader!terra-theme-provider/src/ThemeProvider';

// Example Files
import DefaultThemeProvider from './DefaultThemeProvider';

const ThemeProviderExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ThemeProviderSrc} />
    <DefaultThemeProvider />
  </div>
);

export default ThemeProviderExamples;
