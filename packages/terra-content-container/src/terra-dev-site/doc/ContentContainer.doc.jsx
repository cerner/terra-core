/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-content-container/docs/README.md';
import { name } from 'terra-content-container/package.json';

// Component Source
import ContentContainerSrc from '!raw-loader!terra-content-container/src/ContentContainer.jsx';

// Example Files
import ContentContainerStandard from './example/ContentContainerStandard';
import ContentContainerStandardSrc from '!raw-loader!./example/ContentContainerStandard';
import ContentContainerFill from './example/ContentContainerFill';
import ContentContainerFillSrc from '!raw-loader!./example/ContentContainerFill';

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
