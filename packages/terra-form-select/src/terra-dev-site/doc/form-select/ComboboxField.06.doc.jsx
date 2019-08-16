/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ComboboxField.md';
<<<<<<< HEAD:packages/terra-form-select/src/terra-dev-site/doc/form-select/ComboboxField.06.doc.jsx
import PropsTable from '../../../../docs/ComboboxField-props-table.md';
import { name, version } from '../../../../package.json';
=======
import { name, version } from '../../../../package.json';
>>>>>>> master:packages/terra-form-select/src/terra-dev-site/doc/form-select/ComoboboxField.06.doc.jsx

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
    packageVersion={version}
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
