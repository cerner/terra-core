import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TextareaField.md';

import { name, version } from '../../../../package.json';

// Example Files
import FormTextareaFieldPropsTable from '!terra-props-table-loader!../../../../src/TextareaField';
import FormTextareaFieldSrc from '!raw-loader!../../../../src/TextareaField';
import TextareaFieldExample from '../example/TextareaField';
import TextareaFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TextareaField';
import RequiredTextareaFieldExample from '../example/RequiredTextareaField';
import RequiredTextareaFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/RequiredTextareaField';
import IncompleteTextareaFieldExample from '../example/IncompleteTextareaField';
import IncompleteTextareaFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/IncompleteTextareaField';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'Form Textarea Field',
        componentSrc: FormTextareaFieldSrc,
        componentProps: FormTextareaFieldPropsTable,
      },
    ]}
    examples={[
      {
        example: <TextareaFieldExample />,
        source: TextareaFieldExampleSrc,
      },
      {
        example: <RequiredTextareaFieldExample />,
        source: RequiredTextareaFieldExampleSrc,
      },
      {
        description: 'Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***',
        example: <IncompleteTextareaFieldExample />,
        source: IncompleteTextareaFieldExampleSrc,
      },
    ]}
  />
);

export default DocPage;
