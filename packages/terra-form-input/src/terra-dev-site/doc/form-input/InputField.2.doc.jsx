import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/InputField.md';

import { name, version } from '../../../../package.json';

// Example Files
import FormInputFieldPropsTable from '!terra-props-table-loader!../../../../src/InputField';
import FormInputFieldSrc from '!raw-loader!../../../../src/InputField';
import InputFieldExample from '../example/InputField';
import InputFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/InputField';
import RequiredInputFieldExample from '../example/RequiredInputField';
import RequiredInputFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/RequiredInputField';
import IncompleteInputFieldExample from '../example/IncompleteInputField';
import IncompleteInputFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/IncompleteInputField';
import NumberInputFieldExample from '../example/NumberInputField';
import NumberInputFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NumberInputField';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'Form Input Field',
        componentSrc: FormInputFieldSrc,
        componentProps: FormInputFieldPropsTable,
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
        description: 'Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***',
        example: <IncompleteInputFieldExample />,
        source: IncompleteInputFieldExampleSrc,
      },
      {
        example: <NumberInputFieldExample />,
        source: NumberInputFieldExampleSrc,
      },
    ]}
  />
);

export default DocPage;
