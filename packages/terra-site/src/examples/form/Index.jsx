/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-form/docs/README.md';
import { name } from 'terra-form/package.json';

// Example Files
import ControlledInput from './examples/ControlledInput';
import ControlSrc from '!raw-loader!./examples/ControlledInput';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Controlled Form Example',
        example: <ControlledInput />,
        source: ControlSrc,
      },
    ]}
  />
);

export default DocPage;
