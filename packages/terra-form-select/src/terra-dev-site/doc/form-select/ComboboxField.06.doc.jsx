/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ComboboxField.md';
import PropsTable from '../../../../docs/ComboboxField-props-table.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import ComboboxFieldExample from '../example/combobox/ComboboxField';
import ComboboxFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/combobox/ComboboxField';
import RequiredComboboxFieldExample from '../example/combobox/RequiredComboboxField';
import RequiredComboboxFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/combobox/RequiredComboboxField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTablesMarkdown={[PropsTable]}
    examples={[{
      title: 'Combobobx Field Example',
      example: <ComboboxFieldExample />,
      source: ComboboxFieldExampleSrc,
    }, {
      title: 'Required Combobobx Field Example',
      example: <RequiredComboboxFieldExample />,
      source: RequiredComboboxFieldExampleSrc,
    }]}
  />
);

export default DocPage;
