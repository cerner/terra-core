/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/MultipleSelectField.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import MultipleSelectFieldSrc from '!raw-loader!../../../../src/MultipleSelectField';

// Example Files
import SelectFieldExample from '../example/multiple/MultipleSelectField';
import SelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/MultipleSelectField';
import RequiredMultipleSelectFieldExample from '../example/multiple/RequiredMultipleSelectField';
import RequiredMultipleSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/RequiredMultipleSelectField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[{
      componentName: 'Multiple Select Field',
      componentSrc: MultipleSelectFieldSrc,
    }]}
    examples={[{
      title: 'Multiple Select Field Example',
      example: <SelectFieldExample />,
      source: SelectFieldExampleSrc,
    }, {
      title: 'Required Multiple Select Field Example',
      example: <RequiredMultipleSelectFieldExample />,
      source: RequiredMultipleSelectFieldExampleSrc,
    }]}
  />
);

export default DocPage;
