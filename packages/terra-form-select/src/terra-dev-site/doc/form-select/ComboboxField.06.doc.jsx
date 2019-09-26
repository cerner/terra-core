/* eslint-disable import/no-webpack-loader-syntax, import/first */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ComboboxField.md';

import { name, version } from '../../../../package.json';

// Example Files
import ComboboxFieldPropsTable from '!terra-props-table-loader!../../../../src/ComboboxField';
import ComboboxFieldSrc from '!raw-loader!../../../../src/ComboboxField';
import ComboboxFieldExample from '../example/combobox/ComboboxField';
import ComboboxFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/combobox/ComboboxField';
import RequiredComboboxFieldExample from '../example/combobox/RequiredComboboxField';
import RequiredComboboxFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/combobox/RequiredComboboxField';
import IncompleteComboboxFieldExample from '../example/combobox/IncompleteComboboxField';
import IncompleteComboboxFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/combobox/IncompleteComboboxField';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'Combobox Field',
        componentSrc: ComboboxFieldSrc,
        componentProps: ComboboxFieldPropsTable,
      },
    ]}
    examples={[{
      title: 'Combobox Field Example',
      example: <ComboboxFieldExample />,
      source: ComboboxFieldExampleSrc,
    }, {
      title: 'Required Combobobx Field Example',
      example: <RequiredComboboxFieldExample />,
      source: RequiredComboboxFieldExampleSrc,
    }, {
      title: 'Incomplete Combobobx Field Example',
      example: <IncompleteComboboxFieldExample />,
      source: IncompleteComboboxFieldExampleSrc,
    }]}
  />
);

export default DocPage;
