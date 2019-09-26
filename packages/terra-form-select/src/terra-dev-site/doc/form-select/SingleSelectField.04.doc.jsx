/* eslint-disable import/no-webpack-loader-syntax, import/first */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/SingleSelectField.md';

import { name, version } from '../../../../package.json';

// Example Files
import SingleSelectFieldPropsTable from '!terra-props-table-loader!../../../../src/SingleSelectField';
import SingleSelectFieldSrc from '!raw-loader!../../../../src/SingleSelectField';
import SelectFieldExample from '../example/single/SingleSelectField';
import SelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/single/SingleSelectField';
import RequiredSingleSelectFieldExample from '../example/single/RequiredSingleSelectField';
import RequiredSingleSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/single/RequiredSingleSelectField';
import IncompleteSelectFieldExample from '../example/single/IncompleteSingleSelectField';
import IncompleteSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/single/IncompleteSingleSelectField';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'Single Select Field',
        componentSrc: SingleSelectFieldSrc,
        componentProps: SingleSelectFieldPropsTable,
      },
    ]}
    examples={[{
      title: 'Single Select Field Example',
      example: <SelectFieldExample />,
      source: SelectFieldExampleSrc,
    }, {
      title: 'Required Single Select Field Example',
      example: <RequiredSingleSelectFieldExample />,
      source: RequiredSingleSelectFieldExampleSrc,
    }, {
      title: 'Incomplete Single Select Field Example',
      example: <IncompleteSelectFieldExample />,
      source: IncompleteSelectFieldExampleSrc,
    }]}
  />
);

export default DocPage;
