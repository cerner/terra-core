import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TextareaField.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-duplicates */
// Component Source
import TextareaFieldSrc from '!raw-loader!../../../../src/TextareaField';

// Example Files
import TextareaFieldExample from '../example/TextareaField';
import TextareaFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TextareaField';
import RequiredTextareaFieldExample from '../example/RequiredTextareaField';
import RequiredTextareaFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/RequiredTextareaField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-duplicates */
const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
      {
        example: <RequiredTextareaFieldExample />,
        source: RequiredTextareaFieldExampleSrc,
      },
    ]}
  />
);

export default DocPage;
