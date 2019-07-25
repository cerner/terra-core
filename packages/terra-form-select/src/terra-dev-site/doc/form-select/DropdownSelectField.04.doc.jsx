/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/DropdownSelectField.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import DropdownSelectFieldSrc from '!raw-loader!../../../../src/DropdownSelectField';

// Example Files
import SelectFieldExample from '../example/dropdown/DropdownSelectField';
import SelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/dropdown/DropdownSelectField';
import RequiredDropdownSelectFieldExample from '../example/dropdown/RequiredDropdownSelectField';
import RequiredDropdownSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/dropdown/RequiredDropdownSelectField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[{
      componentName: 'Dropdown Select Field',
      componentSrc: DropdownSelectFieldSrc,
    }]}
    examples={[{
      title: 'Dropdown Select Field Example',
      example: <SelectFieldExample />,
      source: SelectFieldExampleSrc,
    }, {
      title: 'Required Dropdown Select Field Example',
      example: <RequiredDropdownSelectFieldExample />,
      source: RequiredDropdownSelectFieldExampleSrc,
    }]}
  />
);

export default DocPage;
