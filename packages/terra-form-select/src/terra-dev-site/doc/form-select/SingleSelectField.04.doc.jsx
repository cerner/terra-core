/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/SingleSelectField.md';
import PropsTable from '../../../../docs/SingleSelectField-props-table.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import SelectFieldExample from '../example/single/SingleSelectField';
import SelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/single/SingleSelectField';
import RequiredSingleSelectFieldExample from '../example/single/RequiredSingleSelectField';
import RequiredSingleSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/single/RequiredSingleSelectField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
