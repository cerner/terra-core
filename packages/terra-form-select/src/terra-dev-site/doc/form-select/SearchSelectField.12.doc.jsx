/* eslint-disable import/no-webpack-loader-syntax, import/first */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/SearchSelectField.md';

import { name, version } from '../../../../package.json';

// Example Files
import SearchSelectFieldPropsTable from '!terra-props-table-loader!../../../../src/SearchSelectField';
import SearchSelectFieldSrc from '!raw-loader!../../../../src/SearchSelectField';
import SelectFieldExample from '../example/search/SearchSelectField';
import SelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/search/SearchSelectField';
import RequiredSearchSelectFieldExample from '../example/search/RequiredSearchSelectField';
import RequiredSearchSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/search/RequiredSearchSelectField';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'Search Select Field',
        componentSrc: SearchSelectFieldSrc,
        componentProps: SearchSelectFieldPropsTable,
      },
    ]}
    examples={[{
      title: 'Search Select Field Example',
      example: <SelectFieldExample />,
      source: SelectFieldExampleSrc,
    }, {
      title: 'Required Search Select Field Example',
      example: <RequiredSearchSelectFieldExample />,
      source: RequiredSearchSelectFieldExampleSrc,
    }]}
  />
);

export default DocPage;
