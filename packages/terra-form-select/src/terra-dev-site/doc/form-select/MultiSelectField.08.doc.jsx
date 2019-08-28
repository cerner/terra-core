/* eslint-disable import/no-webpack-loader-syntax, import/first */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/MultiSelectField.md';

import { name, version } from '../../../../package.json';

// Example Files
import SelectFieldExample from '../example/multiple/MultiSelectField';
import SelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/MultiSelectField';
import RequiredMultiSelectFieldExample from '../example/multiple/RequiredMultiSelectField';
import RequiredMultiSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/RequiredMultiSelectField';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: '',
        componentSrc: '',
        componentProps: '',
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
    }]}
  />
);

export default DocPage;
