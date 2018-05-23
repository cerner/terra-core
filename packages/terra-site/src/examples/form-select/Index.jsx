/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import ReadMe from 'terra-form-select/docs/README.md';
import DocTemplate from 'terra-doc-template';
import OptionSrc from '!raw-loader!terra-form-select/src/_Option';
import OptGroupSrc from '!raw-loader!terra-form-select/src/_OptGroup';
import SelectSrc from '!raw-loader!terra-form-select/src/Select';
import ControlledExample from './examples/Controlled';
import ControlledExampleSrc from '!raw-loader!./examples/Controlled';
import ComboboxExample from './examples/Combobox';
import ComboboxExampleSrc from '!raw-loader!./examples/Combobox';
import DefaultExample from './examples/Default';
import DefaultExampleSrc from '!raw-loader!./examples/Default';
import DisabledExample from './examples/Disabled';
import DisabledExampleSrc from '!raw-loader!./examples/Disabled';
import InvalidExample from './examples/Invalid';
import InvalidExampleSrc from '!raw-loader!./examples/Invalid';
import MultipleExample from './examples/Multiple';
import MultipleExampleSrc from '!raw-loader!./examples/Multiple';
import OptGroupExample from './examples/OptGroup';
import OptGroupExampleSrc from '!raw-loader!./examples/OptGroup';
import SearchExample from './examples/Search';
import SearchExampleSrc from '!raw-loader!./examples/Search';
import TagExample from './examples/Tag';
import TagExampleSrc from '!raw-loader!./examples/Tag';

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
      title: 'Disabled',
      example: <DisabledExample />,
      source: DisabledExampleSrc,
    }, {
      title: 'Invalid',
      description: 'Applies theme-specific styling for invalid. Will also display error text when used with a Field.',
      example: <InvalidExample />,
      source: InvalidExampleSrc,
    }, {
      title: 'OptGroup',
      description: 'An OptGroup provides a way to group options together within the listbox. Can be applied to all select variants (default, search, combobox, multiple, tag).',
      example: <OptGroupExample />,
      source: OptGroupExampleSrc,
    }, {
      title: 'Controlled',
      description: 'An example of implementing a controlled Select.',
      example: <ControlledExample />,
      source: ControlledExampleSrc,
    }]}
  />
);

export default Index;
