/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-form-textarea/docs/README.md';
import { name } from 'terra-form-textarea/package.json';

// Component Source
import TextareaSrc from '!raw-loader!terra-form-textarea/src/Textarea';

// Example Files
import TextareaExamples from './TextareaExamples';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <TextareaExamples />,
      },
    ]}
    propsTables={[
      {
        componentName: 'Textarea',
        componentSrc: TextareaSrc,
      },
    ]}
  />
);

export default DocPage;
