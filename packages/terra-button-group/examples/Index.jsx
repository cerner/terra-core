/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from '../../../packages/terra-site/src/PropsTable';
import Markdown from '../../../packages/terra-site/src/Markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ButtonGroupSrc from '!raw-loader!../src/ButtonGroup.jsx';

const ButtonGroupExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ButtonGroupSrc} />
  </div>
);

export default ButtonGroupExamples;
