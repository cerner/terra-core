/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/SelectField.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import SelectFieldSrc from '!raw-loader!../../../../src/SelectField';

// Example Files
import MaxSelectionExample from '../example/legacy/MaxSelection';
import MaxSelectionExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/MaxSelection';
import SelectFieldExample from '../example/legacy/SelectField';
import SelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/SelectField';
import RequiredSelectFieldExample from '../example/legacy/RequiredSelectField';
import RequiredSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/RequiredSelectField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[{
      componentName: 'Select Field',
      componentSrc: SelectFieldSrc,
    }]}
    examples={[{
      title: 'Select Field Example',
      example: <SelectFieldExample />,
      source: SelectFieldExampleSrc,
    }, {
      title: 'Required Select Field Example',
      example: <RequiredSelectFieldExample />,
      source: RequiredSelectFieldExampleSrc,
    }, {
      title: 'Maximum Selection (applies to only \'multiple\' and \'tag\')',
      description: 'A multiple selection variant that allows up to a set number of selections. (Not applicable to  \'default\', \'combobox\', and \'search\' variants)',
      example: <MaxSelectionExample />,
      source: MaxSelectionExampleSrc,
    }]}
  />
);

export default DocPage;
