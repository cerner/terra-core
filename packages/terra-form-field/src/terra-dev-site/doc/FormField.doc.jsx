/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-form-field/docs/README.md';
import { name } from 'terra-form-field/package.json';

// Component Source
import FieldSrc from '!raw-loader!terra-form-field/src/Field';

// Example Files
import FieldExamples from './example/FieldExamples';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <FieldExamples />,
      },
    ]}
    propsTables={[
      {
        componentName: 'Field',
        componentSrc: FieldSrc,
      },
    ]}
  />
);

export default DocPage;
