import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
import { name } from '../../../package.json';

/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
// Component Source
import ScrollableContainerSrc from '!raw-loader!terra-scrollable-container/src/ScrollableContainer';

// Example Files
import ScrollableContainerExample from './ScrollableContainerExample';
import ScrollableContainerExampleSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ScrollableContainerExample';
/* eslint-enable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ScrollableContainerExample />,
        source: ScrollableContainerExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Scrollable Container',
        componentSrc: ScrollableContainerSrc,
      },
    ]}
  />
);

export default DocPage;
