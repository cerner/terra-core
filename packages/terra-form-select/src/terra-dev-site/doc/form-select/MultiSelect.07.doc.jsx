import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
<<<<<<< HEAD
import MultiSelectPropsTable from '../../../../docs/MultiSelect-props-table.md';
import OptionPropsTable from '../../../../docs/Option-props-table.md';
import OptGroupPropsTable from '../../../../docs/OptGroup-props-table.md';
import { name, version } from '../../../../package.json';
=======
import { name, version } from '../../../../package.json';
>>>>>>> master

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import MultipleExample from '../example/multiple/MultiSelect';
import MultipleExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/MultiSelect';
import ControlledExample from '../example/multiple/Controlled';
import ControlledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/Controlled';
import DisabledExample from '../example/multiple/Disabled';
import DisabledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/Disabled';
import InvalidExample from '../example/multiple/Invalid';
import InvalidExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/Invalid';
import MaxHeightExample from '../example/multiple/MaxHeight';
import MaxHeightExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/MaxHeight';
import OptGroupExample from '../example/multiple/OptGroup';
import OptGroupExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/OptGroup';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const Index = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"
    propsTablesMarkdown={[MultiSelectPropsTable, OptionPropsTable, OptGroupPropsTable]}
    examples={[{
      title: 'MultiSelect',
      description: 'A MultiSelect allows searching and selecting multiple options.',
      example: <MultipleExample />,
      source: MultipleExampleSrc,
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
      description: 'An example of implementing a custom max height of the dropdown.',
      example: <MaxHeightExample />,
      source: MaxHeightExampleSrc,
    }, {
      title: 'Create a Controlled MultiSelect',
      description: 'An example of implementing a controlled MultiSelect.',
      example: <ControlledExample />,
      source: ControlledExampleSrc,
    }]}
  />
);

export default Index;
