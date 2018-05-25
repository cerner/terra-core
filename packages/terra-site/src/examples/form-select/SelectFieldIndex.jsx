/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-form-select/docs/SelectField.md';
import SelectFieldSrc from '!raw-loader!terra-form-select/src/SelectField';
import SelectFieldExample from './examples/SelectField';
import SelectFieldExampleSrc from '!raw-loader!./examples/SelectField';

const DocPage = () => (
  <DocTemplate
    packageName="terra-form-select"
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"
    propsTables={[{
      componentName: 'Select Field',
      componentSrc: SelectFieldSrc,
    }]}
    examples={[{
      title: 'Select Field Example',
      example: <SelectFieldExample />,
      source: SelectFieldExampleSrc,
    }]}
  />
);

export default DocPage;
