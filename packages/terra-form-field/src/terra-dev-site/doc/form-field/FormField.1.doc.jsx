import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

import { name, version } from '../../../../package.json';

// Example Files
import FormFieldPropsTable from '!terra-props-table-loader!../../../../src/Field';
import FormFieldSrc from '!raw-loader!../../../../src/Field';
import FieldExamples from '../example/FieldExamples';

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
        componentName: 'Form Field',
        componentSrc: FormFieldSrc,
        componentProps: FormFieldPropsTable,
      },
    ]}
  />
);

export default DocPage;
