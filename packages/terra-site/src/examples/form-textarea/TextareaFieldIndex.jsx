/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-textarea/docs/TextareaField.md';
import { name } from 'terra-form-textarea/package.json';

// Component Source
import TextareaFieldSrc from '!raw-loader!terra-form-textarea/src/TextareaField';

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
