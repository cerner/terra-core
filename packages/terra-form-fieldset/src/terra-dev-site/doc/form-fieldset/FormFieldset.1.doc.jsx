import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Component Source
import FieldsetSrc from '!raw-loader!../../../../src/Fieldset';

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
        componentName: 'Field Set',
        componentSrc: FieldsetSrc,
      },
    ]}
  />
);

export default DocPage;
