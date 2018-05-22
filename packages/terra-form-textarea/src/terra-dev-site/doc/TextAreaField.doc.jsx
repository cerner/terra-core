/* eslint-disable  import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/TextareaField.md';
import { name } from '../../../package.json';

// Component Source
import TextareaFieldSrc from '!raw-loader!../../../src/TextareaField';

// Example Source
import TextareaField from 'terra-form-textarea/lib/TextareaField';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: (
          <TextareaField
            inputId="Profile Description"
            label="Profile Description"
            help="Every Profile Needs a Description"
            inputAttrs={{
              name: 'description',
              placeholder: 'Enter a profile Description',
            }}
          />
        ),
      },
    ]}
    propsTables={[
      {
        componentName: 'Textarea Field',
        componentSrc: TextareaFieldSrc,
      },
    ]}
  />
);

export default DocPage;
