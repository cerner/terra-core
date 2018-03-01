/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-site/src/IndexPageTemplate';

import ReadMe from 'terra-action-footer/docs/README.md';
import { version } from 'terra-action-footer/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ActionFooterSrc from '!raw-loader!terra-action-footer/src/ActionFooter';

// Example Files
import DefaultActionFooter from './DefaultActionFooter';
import DefaultActionFooterSrc from '!raw-loader!./DefaultActionFooter.jsx';

const ActionFooterExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="ActionFooter - Default"
      example={<DefaultActionFooter />}
      exampleSrc={DefaultActionFooterSrc}
    />

    <PropsTable id="props" src={ActionFooterSrc} />
  </div>
);

export default ActionFooterExamples;
