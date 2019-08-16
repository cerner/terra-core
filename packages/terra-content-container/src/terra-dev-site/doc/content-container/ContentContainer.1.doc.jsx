import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import PropsTable from '../../../../docs/ContentContainer-props-table.md';
import { name, version } from '../../../../package.json';

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
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
