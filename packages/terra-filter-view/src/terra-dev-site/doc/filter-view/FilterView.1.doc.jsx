/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import FilterViewSrc from '!raw-loader!../../../../src/FilterView';
import OptGroupSrc from '!raw-loader!../../../../src/_FilterOptGroup';
import OptionSrc from '!raw-loader!../../../../src/_FilterOption';

// Example Files
import DefaultFilterView from '../example/DefaultFilterView';
import DefaultFilterViewSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultFilterView.jsx';
import ListFilterView from '../example/ListFilterView';
import ListFilterViewSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListFilterView.jsx';
import OptGroup from '../example/OptGroup';
import ExampleOptGroupSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/OptGroup.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Filter View',
        description: 'A default variant provides a dropdown to view results.',
        example: <DefaultFilterView />,
        source: DefaultFilterViewSrc,
      },
      {
        title: 'List Filter View',
        description: 'A list variant provides a list view to display results.',
        example: <ListFilterView />,
        source: ListFilterViewSrc,
      },
      {
        title: 'OptGroup',
        description: 'OptGroups may be used to group options together.',
        example: OptGroup,
        source: ExampleOptGroupSrc,
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
