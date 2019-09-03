import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Example Files
import SearchSelectPropsTable from '!terra-props-table-loader!../../../../src/SearchSelect';
import SearchSelectSrc from '!raw-loader!../../../../src/SearchSelect';
import OptionPropsTable from '!terra-props-table-loader!../../../../src/shared/_Option';
import OptionSrc from '!raw-loader!../../../../src/shared/_Option';
import OptGroupPropsTable from '!terra-props-table-loader!../../../../src/shared/_OptGroup';
import OptGroupSrc from '!raw-loader!../../../../src/shared/_OptGroup';
import AllowClearExample from '../example/search/AllowClear';
import AllowClearExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/search/AllowClear';
import ControlledExample from '../example/search/Controlled';
import ControlledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/search/Controlled';
import SearchExample from '../example/search/Search';
import SearchExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/search/Search';
import DisabledExample from '../example/search/Disabled';
import DisabledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/search/Disabled';
import InvalidExample from '../example/search/Invalid';
import InvalidExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/search/Invalid';
import MaxHeightExample from '../example/search/MaxHeight';
import MaxHeightExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/search/MaxHeight';
import OptGroupExample from '../example/search/OptGroup';
import OptGroupExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/search/OptGroup';

const Index = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"
    propsTables={[
      {
        componentName: 'Search Select',
        componentSrc: SearchSelectSrc,
        componentProps: SearchSelectPropsTable,
      },
      {
        componentName: 'Option',
        componentSrc: OptionSrc,
        componentProps: OptionPropsTable,
      },
      {
        componentName: 'OptGroup',
        componentSrc: OptGroupSrc,
        componentProps: OptGroupPropsTable,
      },
    ]}
    examples={[{
      title: 'Search',
      description: 'A Search Select allows selecting a single option.',
      example: <SearchExample />,
      source: SearchExampleSrc,
    }, {
      title: 'Disabled',
      example: <DisabledExample />,
      source: DisabledExampleSrc,
    }, {
      title: 'Invalid',
      description: 'Applies theme-specific styling for invalid. Will also display error text when used with a Field.',
      example: <InvalidExample />,
      source: InvalidExampleSrc,
    }, {
      title: 'Ability to add Option Groups',
      description: 'An OptGroup provides a way to group options together within the listbox.',
      example: <OptGroupExample />,
      source: OptGroupExampleSrc,
    }, {
      title: 'Ability to set a Maximum Height',
      description: 'An example of implementing a custom max height of the Search.',
      example: <MaxHeightExample />,
      source: MaxHeightExampleSrc,
    }, {
      title: 'Ability to Clear Selection',
      description: 'An example with an option to clear the selected item.',
      example: <AllowClearExample />,
      source: AllowClearExampleSrc,
    }, {
      title: 'Create a Controlled Search Select',
      description: 'An example of implementing a controlled Search Select.',
      example: <ControlledExample />,
      source: ControlledExampleSrc,
    }]}
  />
);

export default Index;
