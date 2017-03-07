/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from '../../../packages/terra-site/src/PropsTable';
import Markdown from '../../../packages/terra-site/src/Markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import MenuSrc from '!raw-loader!../src/Menu.jsx';

const MenuExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={MenuSrc} />
  </div>
);

export default MenuExamples;
