import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/InputField.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import FormInputFieldSrc from '!raw-loader!../../../../src/InputField';

// Example Files
import InputField from '../../../InputField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: (
          <InputField
            inputId="Profile Name"
            label="Profile Name"
            help="Note: This can not be changed in the future"
            inputAttrs={{
              placeholder: 'Profile Name',
              name: 'profile',
              type: 'text',
            }}
          />
        ),
      },
    ]}
    propsTables={[
      {
        componentName: 'Form Input Field',
        componentSrc: FormInputFieldSrc,
      },
    ]}
  />
);

export default DocPage;
