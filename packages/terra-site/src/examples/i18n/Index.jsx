import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-i18n/docs/README.md';
import { version } from 'terra-i18n/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import I18nProvider from '!raw-loader!terra-i18n/src/I18nProvider';

// Example Files
import I18nDemo from './I18nDemo';

const I18nExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={I18nProvider} />
    <h2 id="baseWithI18n">I18nProvider</h2>
    <I18nDemo />
  </div>
);

export default I18nExamples;
