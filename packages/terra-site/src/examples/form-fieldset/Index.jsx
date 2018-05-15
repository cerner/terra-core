/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-form-fieldset/docs/README.md';
import { name } from 'terra-form-fieldset/package.json';

// Component Source
import FieldsetSrc from '!raw-loader!terra-form-fieldset/src/Fieldset';

// Example Files
import FieldsetExamples from './FieldsetExamples';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <FieldsetExamples />,
      },
    ]}
    propsTables={[
      {
        componentName: 'Field Set',
        componentSrc: FieldsetSrc,
      },
    ]}
  />
);

export default DocPage;
