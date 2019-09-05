/* eslint-disable import/no-webpack-loader-syntax, import/first */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/SelectField.md';

import { name, version } from '../../../../package.json';

// Example Files
import SelectFieldPropsTable from '!terra-props-table-loader!../../../../src/SelectField';
import SelectFieldSrc from '!raw-loader!../../../../src/SelectField';
import MaxSelectionExample from '../example/legacy/MaxSelection';
import MaxSelectionExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/MaxSelection';
import SelectFieldExample from '../example/legacy/SelectField';
import SelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/SelectField';
import RequiredSelectFieldExample from '../example/legacy/RequiredSelectField';
import RequiredSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/RequiredSelectField';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'Select Field',
        componentSrc: SelectFieldSrc,
        componentProps: SelectFieldPropsTable,
      },
    ]}
    examples={[{
      title: 'Select Field Example',
      example: <SelectFieldExample />,
      source: SelectFieldExampleSrc,
    }, {
      title: 'Required Select Field Example',
      example: <RequiredSelectFieldExample />,
      source: RequiredSelectFieldExampleSrc,
    }, {
      title: 'Maximum Selection (applies to only \'multiple\' and \'tag\')',
      description: 'A multiple selection variant that allows up to a set number of selections. (Not applicable to  \'default\', \'combobox\', and \'search\' variants)',
      example: <MaxSelectionExample />,
      source: MaxSelectionExampleSrc,
    }]}
  />
);

export default DocPage;
