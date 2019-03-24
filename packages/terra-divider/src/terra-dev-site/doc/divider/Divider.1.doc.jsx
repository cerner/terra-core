import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import DividerSrc from '!raw-loader!../../../../src/Divider';

// Example Files
import DividerExample from '../example/DividerExample';
import DividerExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DividerExample';
import DividerCustomExample from '../example/DividerCustomExample';
import DividerCustomExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DividerCustomExample';
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
        example: <DividerCustomExample />,
        source: DividerCustomExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Divider',
        componentSrc: DividerSrc,
      },
    ]}
  />
);

export default DocPage;
