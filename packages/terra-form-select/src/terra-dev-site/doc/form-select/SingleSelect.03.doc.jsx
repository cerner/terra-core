import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
<<<<<<< HEAD
import SingleSelectPropsTable from '../../../../docs/SingleSelect-props-table.md';
import OptionPropsTable from '../../../../docs/Option-props-table.md';
import OptGroupPropsTable from '../../../../docs/OptGroup-props-table.md';
import { name, version } from '../../../../package.json';
=======
import { name, version } from '../../../../package.json';
>>>>>>> master

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import AllowClearExample from '../example/single/AllowClear';
import AllowClearExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/single/AllowClear';
import ControlledExample from '../example/single/Controlled';
import ControlledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/single/Controlled';
import SingleSelectExample from '../example/single/SingleSelect';
import SingleSelectExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/single/SingleSelect';
import DisabledExample from '../example/single/Disabled';
import DisabledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/single/Disabled';
import InvalidExample from '../example/single/Invalid';
import InvalidExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/single/Invalid';
import MaxHeightExample from '../example/single/MaxHeight';
import MaxHeightExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/single/MaxHeight';
import OptGroupExample from '../example/single/OptGroup';
import OptGroupExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/single/OptGroup';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const Index = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"
    propsTablesMarkdown={[SingleSelectPropsTable, OptionPropsTable, OptGroupPropsTable]}
    examples={[{
      title: 'Single Select',
      description: 'A Single Select allows selecting a single option.',
      example: <SingleSelectExample />,
      source: SingleSelectExampleSrc,
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
      title: 'Ability to Clear Selection',
      description: 'An example with an option to clear the selected item.',
      example: <AllowClearExample />,
      source: AllowClearExampleSrc,
    }, {
      title: 'Create a Controlled Single Select',
      description: 'An example of implementing a controlled Single Select.',
      example: <ControlledExample />,
      source: ControlledExampleSrc,
    }]}
  />
);

export default Index;
