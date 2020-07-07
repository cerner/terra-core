import React from 'react';
import DocTemplate from '../../../DocTemplate';
import ReadMe from '../../../../docs/PLACEHOLDER.md';

import { name, version } from '../../../../package.json';

// Example Files
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-duplicates
import PlaceholderPropsTable from '!terra-props-table-loader!../../../../src/Placeholder';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-duplicates
import PlaceholderSrc from '!raw-loader!../../../../src/Placeholder';
// eslint-disable-next-line import/no-duplicates
import PlaceholderDefault from '../example/PlaceholderDefault';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-duplicates
import PlaceholderDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PlaceholderDefault';
// eslint-disable-next-line import/no-duplicates
import PlaceholderLight from '../example/PlaceholderLight';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-duplicates
import PlaceholderLightSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PlaceholderLight';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/main/packages/${name}`}
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
    propsTables={[
      {
        componentName: 'Placeholder',
        componentSrc: PlaceholderSrc,
        componentProps: PlaceholderPropsTable,
      },
    ]}
  />
);

export default DocPage;
