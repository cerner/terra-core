import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TextareaField.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import TextareaFieldSrc from '!raw-loader!../../../../src/TextareaField';

// Example Source
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import TextareaField from 'terra-form-textarea/lib/TextareaField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
