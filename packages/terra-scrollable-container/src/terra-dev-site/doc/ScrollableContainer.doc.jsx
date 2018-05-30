import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
import { name } from '../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ScrollableContainerSrc from '!raw-loader!terra-scrollable-container/src/ScrollableContainer';

// Example Files
import ScrollableContainerDefault from './example/ScrollableContainerDefault';
import ScrollableContainerDefaultSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ScrollableContainerDefault';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ScrollableContainerDefault />,
        source: ScrollableContainerDefaultSrc,
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
