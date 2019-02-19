/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/SelectField.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import SelectFieldSrc from '!raw-loader!../../../../src/SelectField';

// Example Files
import MaxSelectionExample from '../example/MaxSelection';
import MaxSelectionExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MaxSelection';
import SelectFieldExample from '../example/SelectField';
import SelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SelectField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
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
      title: 'Maximum Selection',
      description: 'A multiple variant that allows up to 3 selections',
      example: <MaxSelectionExample />,
      source: MaxSelectionExampleSrc,
    }]}
  />
);

export default DocPage;
