/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-spacer/docs/README.md';
import { name } from 'terra-spacer/package.json';

// Component Source
import SpacerSrc from '!raw-loader!terra-spacer/src/Spacer';

// Example Files
import Spacer from './SpacerExample';
import SpacerExampleSrc from '!raw-loader!./SpacerExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Spacer',
        description: 'Spacing default button with a padding value of large+4 and primary button with padding value of large+2',
        example: <Spacer />,
        source: SpacerExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Spacer',
        componentSrc: SpacerSrc,
      },
    ]}
  />
);

export default DocPage;
