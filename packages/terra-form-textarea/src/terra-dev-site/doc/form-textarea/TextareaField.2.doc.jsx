import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TextareaField.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import TextareaFieldSrc from '!raw-loader!../../../../src/TextareaField';

// Example Files
import TextareaFieldExample from '../example/TextareaField';
import TextareaFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TextareaField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'TextareaField',
        componentSrc: TextareaFieldSrc,
      },
    ]}
    examples={[
      {
        example: <TextareaFieldExample />,
        source: TextareaFieldExampleSrc,
      },
    ]}
  />
);

export default DocPage;
