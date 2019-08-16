import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
<<<<<<< HEAD
import PropsTable from '../../../../docs/ContentContainer-props-table.md';
import { name, version } from '../../../../package.json';
=======
import { name, version } from '../../../../package.json';
>>>>>>> master

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import ContentContainerStandard from '../example/ContentContainerStandard';
import ContentContainerStandardSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ContentContainerStandard';
import ContentContainerFill from '../example/ContentContainerFill';
import ContentContainerFillSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ContentContainerFill';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
    ]}
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
