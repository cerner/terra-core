import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Example Files
import ComboboxPropsTable from '!terra-props-table-loader!../../../../src/Combobox';
import ComboboxSrc from '!raw-loader!../../../../src/Combobox';
import OptionPropsTable from '!terra-props-table-loader!../../../../src/shared/_Option';
import OptionSrc from '!raw-loader!../../../../src/shared/_Option';
import OptGroupPropsTable from '!terra-props-table-loader!../../../../src/shared/_OptGroup';
import OptGroupSrc from '!raw-loader!../../../../src/shared/_OptGroup';
import AllowClearExample from '../example/combobox/AllowClear';
import AllowClearExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/combobox/AllowClear';
import ControlledExample from '../example/combobox/Controlled';
import ControlledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/combobox/Controlled';
import ComboboxExample from '../example/combobox/Combobox';
import ComboboxExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/combobox/Combobox';
import DisabledExample from '../example/combobox/Disabled';
import DisabledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/combobox/Disabled';
import IsTouchAccessibleExample from '../example/combobox/IsTouchAccessible';
import IsTouchAccessibleExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/combobox/IsTouchAccessible';
import InvalidExample from '../example/combobox/Invalid';
import InvalidExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/combobox/Invalid';
import MaxHeightExample from '../example/combobox/MaxHeight';
import MaxHeightExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/combobox/MaxHeight';
import OptGroupExample from '../example/combobox/OptGroup';
import OptGroupExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/combobox/OptGroup';

const Index = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"
    propsTables={[
      {
        componentName: 'Combobox',
        componentSrc: ComboboxSrc,
        componentProps: ComboboxPropsTable,
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
      title: 'Combobox',
      description: 'A Combobox allows a user to enter a single free text entry or select a single option from the the dropdown.',
      example: <ComboboxExample />,
      source: ComboboxExampleSrc,
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
      title: 'Create a Controlled Combobox',
      description: 'An example of implementing a controlled Combobox.',
      example: <ControlledExample />,
      source: ControlledExampleSrc,
    }]}
  />
);

export default Index;
