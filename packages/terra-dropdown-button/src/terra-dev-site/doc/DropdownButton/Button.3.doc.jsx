/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/Button.md';
import { name } from '../../../../package.json';

// Component Source
import ButtonSrc from '!raw-loader!../../../../src/Button';

// Example Files
import ButtonExamples from '../example/Button';
import ButtonExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Button.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ButtonExamples />,
        source: ButtonExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Button',
        componentSrc: ButtonSrc,
      },
    ]}
  />
);

export default DocPage;
