import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Component Source
import FieldSrc from '!raw-loader!../../../../src/Field';

// Example Files
import FieldExamples from '../example/FieldExamples';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
