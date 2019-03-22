import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved */
// Component source
import DividerSrc from '!raw-loader!../../../Divider';

// Example Files
import DividerExample from '../example/DividerExample';
import DividerExampleTemplate from '!raw-loader!../example/DividerExample';
import DividerCustomExample from '../example/DividerCustomExample';
import DividerCustomExampleTemplate from '!raw-loader!../example/DividerCustomExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Divider - Default',
        example: <DividerExample />,
        source: DividerExampleTemplate,
      },
      {
        title: 'Divider - Custom',
        example: <DividerCustomExample />,
        source: DividerCustomExampleTemplate,
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
