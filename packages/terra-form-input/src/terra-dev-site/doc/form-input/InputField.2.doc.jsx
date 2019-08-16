import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/InputField.md';
import PropsTable from '../../../../docs/InputField-props-table.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import InputFieldExample from '../example/InputField';
import InputFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/InputField';
import RequiredInputFieldExample from '../example/RequiredInputField';
import RequiredInputFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/RequiredInputField';
import NumberInputFieldExample from '../example/NumberInputField';
import NumberInputFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NumberInputField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTablesMarkdown={[PropsTable]}
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
