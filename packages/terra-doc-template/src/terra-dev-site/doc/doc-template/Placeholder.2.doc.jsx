import React from 'react';
import DocTemplate from '../../../DocTemplate';
import ReadMe from '../../../../docs/PLACEHOLDER.md';
import PropsTable from '../../../../docs/Placeholder-props-table.md';
import { name, version } from '../../../../package.json';

// Example Files
import PlaceholderDefault from '../example/PlaceholderDefault';
import PlaceholderDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PlaceholderDefault';
import PlaceholderLight from '../example/PlaceholderLight';
import PlaceholderLightSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PlaceholderLight';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Dark Placeholder',
        example: <PlaceholderDefault />,
        source: PlaceholderDefaultSrc,
      },
      {
        title: 'Light Placeholder',
        example: <PlaceholderLight />,
        source: PlaceholderLightSrc,
      },
    ]}
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
