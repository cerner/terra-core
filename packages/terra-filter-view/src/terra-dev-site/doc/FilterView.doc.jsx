/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
import { version } from '../../../package.json';

// Component Source
import FilterViewSrc from '!raw-loader!../../../src/FilterView';

// Example Files
import DefaultFilterView from './example/DefaultFilterView';
import DefaultFilterViewSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/DefaultFilterView.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default FilterView',
        example: <DefaultFilterView />,
        source: DefaultFilterViewSrc,
      },
    ]}
    propsTables={[
        {
          componentName: 'FilterView',
          componentSrc: FilterViewSrc,
        },
    ]}
  />
);

export default DocPage;
