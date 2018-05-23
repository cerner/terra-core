/* eslint-disable  import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import TextareaSrc from '!raw-loader!../../../../src/Textarea';

// Example Files
import TextareaExamples from '../example/TextareaExamples';

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
