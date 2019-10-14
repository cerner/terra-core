/* eslint-disable import/no-webpack-loader-syntax, import/first */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/MultiSelectField.md';

import { name, version } from '../../../../package.json';

// Example Files
import MultiSelectFieldPropsTable from '!terra-props-table-loader!../../../../src/MultiSelectField';
import MultiSelectFieldSrc from '!raw-loader!../../../../src/MultiSelectField';
import SelectFieldExample from '../example/multiple/MultiSelectField';
import SelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/MultiSelectField';
import RequiredMultiSelectFieldExample from '../example/multiple/RequiredMultiSelectField';
import RequiredMultiSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/RequiredMultiSelectField';
import IncompleteMultiSelectFieldExample from '../example/multiple/IncompleteMultiSelectField';
import IncompleteMultiSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/IncompleteMultiSelectField';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'Multi Select Field',
        componentSrc: MultiSelectFieldSrc,
        componentProps: MultiSelectFieldPropsTable,
      },
    ]}
    examples={[{
      title: 'MultiSelect Field Example',
      example: <SelectFieldExample />,
      source: SelectFieldExampleSrc,
    }, {
      title: 'Required MultiSelect Field Example',
      example: <RequiredMultiSelectFieldExample />,
      source: RequiredMultiSelectFieldExampleSrc,
    }, {
      title: 'Incomplete MultiSelect Field Example',
      description: 'Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***',
      example: <IncompleteMultiSelectFieldExample />,
      source: IncompleteMultiSelectFieldExampleSrc,
    }]}
  />
);

export default DocPage;
