/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/SearchSelectField.md';
import PropsTable from '../../../../docs/SearchSelectField-props-table.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import SelectFieldExample from '../example/search/SearchSelectField';
import SelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/search/SearchSelectField';
import RequiredSearchSelectFieldExample from '../example/search/RequiredSearchSelectField';
import RequiredSearchSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/search/RequiredSearchSelectField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTablesMarkdown={[PropsTable]}
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
