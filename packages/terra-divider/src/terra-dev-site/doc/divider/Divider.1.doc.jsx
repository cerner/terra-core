import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import PropsTable from '../../../../docs/Divider-props-table.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import DividerExample from '../example/DividerExample';
import DividerExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DividerExample';
import DividerWithText from '../example/DividerWithText';
import DividerWithTextSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DividerWithText';
import DividerWithWrappingText from '../example/DividerWithWrappingText';
import DividerWithWrappingTextSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DividerWithWrappingText';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
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
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
