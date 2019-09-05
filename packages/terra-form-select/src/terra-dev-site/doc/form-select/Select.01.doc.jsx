import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Example Files
import SelectPropsTable from '!terra-props-table-loader!../../../../src/Select';
import SelectSrc from '!raw-loader!../../../../src/Select';
import OptionPropsTable from '!terra-props-table-loader!../../../../src/shared/_Option';
import OptionSrc from '!raw-loader!../../../../src/shared/_Option';
import OptGroupPropsTable from '!terra-props-table-loader!../../../../src/shared/_OptGroup';
import OptGroupSrc from '!raw-loader!../../../../src/shared/_OptGroup';
import AllowClearExample from '../example/legacy/AllowClear';
import AllowClearExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/AllowClear';
import ControlledExample from '../example/legacy/Controlled';
import ControlledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/Controlled';
import ComboboxExample from '../example/legacy/Combobox';
import ComboboxExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/Combobox';
import DefaultExample from '../example/legacy/Default';
import DefaultExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/Default';
import DisabledExample from '../example/legacy/Disabled';
import DisabledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/Disabled';
import InvalidExample from '../example/legacy/Invalid';
import InvalidExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/Invalid';
import MaxHeightExample from '../example/legacy/MaxHeight';
import MaxHeightExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/MaxHeight';
import MultipleExample from '../example/legacy/Multiple';
import MultipleExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/Multiple';
import OptGroupExample from '../example/legacy/OptGroup';
import OptGroupExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/OptGroup';
import SearchExample from '../example/legacy/Search';
import SearchExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/Search';
import TagExample from '../example/legacy/Tag'; // eslint-disable-line
import TagExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/legacy/Tag'; // eslint-disable-line

const Index = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"
    propsTables={[
      {
        componentName: 'Select',
        componentSrc: SelectSrc,
        componentProps: SelectPropsTable,
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
      title: 'Default',
      description: 'A default variant allows selecting a single option.',
      example: <DefaultExample />,
      source: DefaultExampleSrc,
    }, {
      title: 'Search',
      description: 'A search variant provides a searchable single select.',
      example: <SearchExample />,
      source: SearchExampleSrc,
    }, {
      title: 'Combobox',
      description: 'A combobox variant allows a user to enter a single free text entry or select a single option from the the dropdown.',
      example: <ComboboxExample />,
      source: ComboboxExampleSrc,
    }, {
      title: 'Multiple',
      description: 'A multiple variant allows searching and selecting multiple options.',
      example: <MultipleExample />,
      source: MultipleExampleSrc,
    }, {
      title: 'Tag',
      description: 'A tag variant allows a user to enter multiple custom free text entries or select multiple options from the the dropdown.',
      example: <TagExample />,
      source: TagExampleSrc,
    }, {
      title: 'Disabled (applies to all)',
      example: <DisabledExample />,
      source: DisabledExampleSrc,
    }, {
      title: 'Invalid (applies to all)',
      description: 'Applies theme-specific styling for invalid. Will also display error text when used with a Field.',
      example: <InvalidExample />,
      source: InvalidExampleSrc,
    }, {
      title: 'Ability to add Option Groups (applies to all)',
      description: 'An OptGroup provides a way to group options together within the listbox. Can be applied to all select variants (default, search, combobox, multiple, tag).',
      example: <OptGroupExample />,
      source: OptGroupExampleSrc,
    }, {
      title: 'Ability to set a Maximum Height (applies to all)',
      description: 'An example of implementing a custom max height of the dropdown.',
      example: <MaxHeightExample />,
      source: MaxHeightExampleSrc,
    }, {
      title: 'Ability to Clear Selection (applies to only \'default\', \'combobox\', and \'search\')',
      description: 'An example with an option to clear the selected item. (Not applicable to \'multiple\' or \'tag\' variants)',
      example: <AllowClearExample />,
      source: AllowClearExampleSrc,
    }, {
      title: 'Create a Controlled Select (applies to all)',
      description: 'An example of implementing a controlled Select.',
      example: <ControlledExample />,
      source: ControlledExampleSrc,
    }]}
  />
);

export default Index;
