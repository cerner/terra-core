/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TagSelectField.md';
import PropsTable from '../../../../docs/TagSelectField-props-table.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import SelectFieldExample from '../example/tag/TagSelectField';
import SelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/tag/TagSelectField';
import RequiredTagSelectFieldExample from '../example/tag/RequiredTagSelectField';
import RequiredTagSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/tag/RequiredTagSelectField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTablesMarkdown={[PropsTable]}
    examples={[{
      title: 'Tag Select Field Example',
      example: <SelectFieldExample />,
      source: SelectFieldExampleSrc,
    }, {
      title: 'Required Tag Select Field Example',
      example: <RequiredTagSelectFieldExample />,
      source: RequiredTagSelectFieldExampleSrc,
    }]}
  />
);

export default DocPage;
