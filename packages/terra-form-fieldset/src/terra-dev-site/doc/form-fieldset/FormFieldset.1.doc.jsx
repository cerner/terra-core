import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

import { name, version } from '../../../../package.json';

// Example Files
import FieldsetExamples from '../example/FieldsetExamples';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <FieldsetExamples />,
      },
    ]}
    propsTables={[
      {
        componentName: '',
        componentSrc: '',
        componentProps: '',
      },
    ]}
  />
);

export default DocPage;
