import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
import { name } from '../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved */
// Component Source
import ContentContainerSrc from '!raw-loader!../../../src/ContentContainer.jsx';

// Example Files
import ContentContainerStandard from './example/ContentContainerStandard';
import ContentContainerStandardSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ContentContainerStandard';
import ContentContainerFill from './example/ContentContainerFill';
import ContentContainerFillSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ContentContainerFill';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Standard Container',
        example: <ContentContainerStandard />,
        source: ContentContainerStandardSrc,
      },
      {
        title: 'Fill Container',
        example: <ContentContainerFill />,
        source: ContentContainerFillSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Content Container',
        componentSrc: ContentContainerSrc,
      },
    ]}
  />
);

export default DocPage;
