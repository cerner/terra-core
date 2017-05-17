import React from 'react';
import Markdown from 'terra-markdown';
import ThemeableVariables from 'terra-list/docs/themeable-variables.md';
import { version } from 'terra-list/package.json';

const ListThemeableVariables = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="themeable-variables" src={ThemeableVariables} />
  </div>
);

export default ListThemeableVariables;
