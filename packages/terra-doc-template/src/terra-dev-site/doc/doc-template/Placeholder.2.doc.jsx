import React from 'react';
import DocTemplate from '../../../DocTemplate';
import ReadMe from '../../../../docs/PLACEHOLDER.md';
import PropsTable from '../../../../docs/Placeholder-props-table.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import PlaceholderDefault from '../example/PlaceholderDefault';
import PlaceholderDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PlaceholderDefault';
import PlaceholderLight from '../example/PlaceholderLight';
import PlaceholderLightSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/PlaceholderLight';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
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
