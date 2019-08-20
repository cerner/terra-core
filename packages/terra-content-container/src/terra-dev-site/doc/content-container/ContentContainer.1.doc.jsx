import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Component Source
import ContentContainerSrc from '!raw-loader!../../../../src/ContentContainer.jsx';

// Example Files
import ContentContainerStandard from '../example/ContentContainerStandard';
import ContentContainerStandardSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ContentContainerStandard';
import ContentContainerFill from '../example/ContentContainerFill';
import ContentContainerFillSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ContentContainerFill';
import ContentContainerScrollRef from '../example/ContentContainerScrollRef';
import ContentContainerScrollRefSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ContentContainerScrollRef';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
      {
        title: 'Scroll Ref Container',
        example: <ContentContainerScrollRef />,
        source: ContentContainerScrollRefSrc,
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
