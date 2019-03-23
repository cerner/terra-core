import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved */
// Component source
import DividerSrc from '!raw-loader!../../../Divider';

// Example Files
import DividerExample from '../example/DividerExample';
import DividerExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DividerExample';
import DividerCustomExample from '../example/DividerCustomExample';
import DividerCustomExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DividerCustomExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Divider - Default',
        example: <DividerExample />,
        source: DividerExampleSrc,
      },
      {
        title: 'Divider - Custom',
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
