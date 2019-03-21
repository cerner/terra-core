import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import OptionSrc from '!raw-loader!../../../../src/_Option';
import OptGroupSrc from '!raw-loader!../../../../src/_OptGroup';
import SelectSrc from '!raw-loader!../../../../src/Select';

// Example Files
import AllowClearExample from '../example/AllowClear';
import AllowClearExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AllowClear';
import ControlledExample from '../example/Controlled';
import ControlledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Controlled';
import ComboboxExample from '../example/Combobox';
import ComboboxExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Combobox';
import DefaultExample from '../example/Default';
import DefaultExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Default';
import DisabledExample from '../example/Disabled';
import DisabledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Disabled';
import InvalidExample from '../example/Invalid';
import InvalidExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Invalid';
import MaxHeightExample from '../example/MaxHeight';
import MaxHeightExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MaxHeight';
import MultipleExample from '../example/Multiple';
import MultipleExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Multiple';
import OptGroupExample from '../example/OptGroup';
import OptGroupExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/OptGroup';
import SearchExample from '../example/Search';
import SearchExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Search';
import TagExample from '../example/Tag';
import TagExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Tag';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const Index = () => (
  <DocTemplate
    packageName="terra-form-select"
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"
    propsTables={[{
      componentName: 'Select',
      componentSrc: SelectSrc,
    }, {
      componentName: 'Option',
      componentSrc: OptionSrc,
    }, {
      componentName: 'OptGroup',
      componentSrc: OptGroupSrc,
    }]}
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
