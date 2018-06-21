import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import FieldSrc from '!raw-loader!../../../../src/Field';

// Example Files
import FieldExamples from '../example/FieldExamples';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
