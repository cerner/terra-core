import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Example Files
import MultiSelectPropsTable from '!terra-props-table-loader!../../../../src/MultiSelect';
import MultiSelectSrc from '!raw-loader!../../../../src/MultiSelect';
import OptionPropsTable from '!terra-props-table-loader!../../../../src/shared/_Option';
import OptionSrc from '!raw-loader!../../../../src/shared/_Option';
import OptGroupPropsTable from '!terra-props-table-loader!../../../../src/shared/_OptGroup';
import OptGroupSrc from '!raw-loader!../../../../src/shared/_OptGroup';
import MultipleExample from '../example/multiple/MultiSelect';
import MultipleExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/MultiSelect';
import ControlledExample from '../example/multiple/Controlled';
import ControlledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/Controlled';
import DisabledExample from '../example/multiple/Disabled';
import DisabledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/Disabled';
import IsTouchAccessibleExample from '../example/multiple/IsTouchAccessible';
import IsTouchAccessibleExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/IsTouchAccessible';
import InvalidExample from '../example/multiple/Invalid';
import InvalidExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/Invalid';
import IncompleteExample from '../example/multiple/Incomplete';
import IncompleteExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/Incomplete';
import MaxHeightExample from '../example/multiple/MaxHeight';
import MaxHeightExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/MaxHeight';
import OptGroupExample from '../example/multiple/OptGroup';
import OptGroupExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/multiple/OptGroup';

const Index = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"
    propsTables={[
      {
        componentName: 'Multi Select',
        componentSrc: MultiSelectSrc,
        componentProps: MultiSelectPropsTable,
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
      title: 'MultiSelect',
      description: 'A MultiSelect allows searching and selecting multiple options.',
      example: <MultipleExample />,
      source: MultipleExampleSrc,
    }, {
      title: 'Is Touch Accessible',
      description: 'Ensure accessibility on touch devices. Will render the dropdown menu in normal DOM flow with position absolute. By default, the menu renders in a portal, which is inaccessible on touch devices.',
      example: <IsTouchAccessibleExample />,
      source: IsTouchAccessibleExampleSrc,
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
      title: 'Incomplete',
      description: 'Applies theme-specific styling for incomplete.',
      example: <IncompleteExample />,
      source: IncompleteExampleSrc,
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
