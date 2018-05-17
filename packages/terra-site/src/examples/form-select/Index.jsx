/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import ReadMe from 'terra-form-select/docs/README.md';
import DocTemplate from 'terra-doc-template';
import OptionSrc from '!raw-loader!terra-form-select/src/_Option';
import OptGroupSrc from '!raw-loader!terra-form-select/src/_OptGroup';
import SelectSrc from '!raw-loader!terra-form-select/src/Select';
import ControlledExample from './examples/ControlledWrapper';
import ControlledExampleSrc from '!raw-loader!./examples/Controlled';
import ComboboxExample from './examples/ComboboxWrapper';
import ComboboxExampleSrc from '!raw-loader!./examples/Combobox';
import DefaultExample from './examples/DefaultWrapper';
import DefaultExampleSrc from '!raw-loader!./examples/Default';
import MultipleExample from './examples/MultipleWrapper';
import MultipleExampleSrc from '!raw-loader!./examples/Multiple';
import OptGroupExample from './examples/OptGroupWrapper';
import OptGroupExampleSrc from '!raw-loader!./examples/OptGroup';
import SearchExample from './examples/SearchWrapper';
import SearchExampleSrc from '!raw-loader!./examples/Search';
import TagExample from './examples/TagWrapper';
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
      title: 'Multiple',
      description: 'A multiple variant allows searching and selecting multiple options.',
      example: <MultipleExample />,
      source: MultipleExampleSrc,
    }, {
      title: 'Tag',
      description: 'A tag variant allows a user to enter multiple custom free text entries or select from the the dropdown.',
      example: <TagExample />,
      source: TagExampleSrc,
    }, {
      title: 'Combobox',
      description: 'A combobox variant allows a user to enter a single free text entry or select from the the dropdown.',
      example: <ComboboxExample />,
      source: ComboboxExampleSrc,
    }, {
      title: 'OptGroup',
      description: 'An OptGroup provides a way to group options together.',
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
