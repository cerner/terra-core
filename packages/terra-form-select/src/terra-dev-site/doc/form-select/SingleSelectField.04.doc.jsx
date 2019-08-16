/* eslint-disable import/no-webpack-loader-syntax, import/first */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/SingleSelectField.md';
import PropsTable from '../../../../docs/SingleSelectField-props-table.md';
import { name, version } from '../../../../package.json';

// Example Files
import SelectFieldExample from '../example/single/SingleSelectField';
import SelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/single/SingleSelectField';
import RequiredSingleSelectFieldExample from '../example/single/RequiredSingleSelectField';
import RequiredSingleSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/single/RequiredSingleSelectField';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTablesMarkdown={[PropsTable]}
    examples={[{
      title: 'Single Select Field Example',
      example: <SelectFieldExample />,
      source: SelectFieldExampleSrc,
    }, {
      title: 'Required Single Select Field Example',
      example: <RequiredSingleSelectFieldExample />,
      source: RequiredSingleSelectFieldExampleSrc,
    }]}
  />
);

export default DocPage;
