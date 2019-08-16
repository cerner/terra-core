import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/InputField.md';
import { name, version } from '../../../../package.json';

// Component Source
import InputFieldSrc from '!raw-loader!../../../../src/InputField';

// Example Files
import InputFieldExample from '../example/InputField';
import InputFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/InputField';
import RequiredInputFieldExample from '../example/RequiredInputField';
import RequiredInputFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/RequiredInputField';
import NumberInputFieldExample from '../example/NumberInputField';
import NumberInputFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NumberInputField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-duplicates */
const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'InputField',
        componentSrc: InputFieldSrc,
      },
    ]}
    examples={[
      {
        example: <InputFieldExample />,
        source: InputFieldExampleSrc,
      },
      {
        example: <RequiredInputFieldExample />,
        source: RequiredInputFieldExampleSrc,
      },
      {
        example: <NumberInputFieldExample />,
        source: NumberInputFieldExampleSrc,
      },
    ]}
  />
);

export default DocPage;
