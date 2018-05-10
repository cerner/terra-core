/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-divider/docs/README.md';
import { name } from 'terra-divider/package.json';

// Example Files
import Divider from './DividerExample';
import DividerSrc from '!raw-loader!./DividerExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Dialog - Default',
        example: <Divider />,
        source: DividerSrc,
      },
    ]}
  />
);

export default DocPage;
