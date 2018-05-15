/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-form-input/docs/InputField.md';

// Component Source
import FormInputFieldSrc from '!raw-loader!terra-form-input/src/InputField';

import InputField from 'terra-form-input/lib/InputField';

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
