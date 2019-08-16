import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import PropsTable from '../../../../docs/Field-props-table.md';
import { name, version } from '../../../../package.json';

// Example Files
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
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
