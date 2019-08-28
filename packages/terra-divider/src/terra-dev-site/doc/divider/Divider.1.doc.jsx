import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Example Files
import DividerExample from '../example/DividerExample';
import DividerExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DividerExample';
import DividerWithText from '../example/DividerWithText';
import DividerWithTextSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DividerWithText';
import DividerWithWrappingText from '../example/DividerWithWrappingText';
import DividerWithWrappingTextSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DividerWithWrappingText';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default',
        example: <DividerExample />,
        source: DividerExampleSrc,
      },
      {
        title: 'Custom Text',
        example: <DividerWithText />,
        source: DividerWithTextSrc,
      },
      {
        title: 'Custom Text',
        example: <DividerWithWrappingText />,
        source: DividerWithWrappingTextSrc,
      },
    ]}
    propsTables={[
      {
        componentName: '',
        componentSrc: '',
        componentProps: '',
      },
    ]}
  />
);

export default DocPage;
