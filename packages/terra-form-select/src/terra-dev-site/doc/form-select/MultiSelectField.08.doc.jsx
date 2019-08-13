/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/MultiSelectField.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import MultiSelectFieldSrc from '!raw-loader!../../../../src/MultiSelectField';

// Example Files
import SelectFieldExample from '../example/multiple/MultiSelectField';
import SelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/MultiSelectField';
import RequiredMultiSelectFieldExample from '../example/multiple/RequiredMultiSelectField';
import RequiredMultiSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/RequiredMultiSelectField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[{
      componentName: 'MultiSelect Field',
      componentSrc: MultiSelectFieldSrc,
    }]}
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
