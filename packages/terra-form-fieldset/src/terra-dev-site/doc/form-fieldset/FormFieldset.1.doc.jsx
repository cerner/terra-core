import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

import { name, version } from '../../../../package.json';

// Example Files
import FormFieldsetPropsTable from '!terra-props-table-loader!../../../../src/Fieldset';
import FormFieldsetSrc from '!raw-loader!../../../../src/Fieldset';
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
        componentName: 'Form Fieldset',
        componentSrc: FormFieldsetSrc,
        componentProps: FormFieldsetPropsTable,
      },
    ]}
  />
);

export default DocPage;
