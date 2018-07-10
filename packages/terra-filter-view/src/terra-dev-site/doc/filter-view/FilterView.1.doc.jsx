/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import FilterViewSrc from '!raw-loader!../../../../src/FilterView';
import OptGroupSrc from '!raw-loader!../../../../src/_OptGroup';
import OptionSrc from '!raw-loader!../../../../src/_Option';

// Example Files
import DefaultFilterView from '../example/DefaultFilterView';
import DefaultFilterViewSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultFilterView.jsx';
import ListFilterView from '../example/ListFilterView';
import ListFilterViewSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListFilterView.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Filter View',
        example: <DefaultFilterView />,
        source: DefaultFilterViewSrc,
      },
      {
        title: 'List Filter View',
        example: <ListFilterView />,
        source: ListFilterViewSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'FilterView',
        componentSrc: FilterViewSrc,
      },
      {
        componentName: 'OptGroup',
        componentSrc: OptGroupSrc,
      },
      {
        componentName: 'Option',
        componentSrc: OptionSrc,
      },
    ]}
  />
);

export default DocPage;
