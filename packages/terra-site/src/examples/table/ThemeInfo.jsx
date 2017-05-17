import React from 'react';
import Markdown from 'terra-markdown';
import ThemeableVariables from 'terra-table/docs/themeable-variables.md';
import { version } from 'terra-table/package.json';

const TableThemeableVariables = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="themeable-variables" src={ThemeableVariables} />
  </div>
);

export default TableThemeableVariables;
