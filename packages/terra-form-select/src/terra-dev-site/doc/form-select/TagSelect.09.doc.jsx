import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import OptionSrc from '!raw-loader!../../../../src/shared/_Option';
import OptGroupSrc from '!raw-loader!../../../../src/shared/_OptGroup';
import TagSelectSrc from '!raw-loader!../../../../src/TagSelect';

// Example Files
import TagExample from '../example/tag/Tag';
import TagExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/tag/Tag';
import ControlledExample from '../example/tag/Controlled';
import ControlledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/tag/Controlled';
import DisabledExample from '../example/tag/Disabled';
import DisabledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/tag/Disabled';
import InvalidExample from '../example/tag/Invalid';
import InvalidExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/tag/Invalid';
import MaxHeightExample from '../example/tag/MaxHeight';
import MaxHeightExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/tag/MaxHeight';
import OptGroupExample from '../example/tag/OptGroup';
import OptGroupExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/tag/OptGroup';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const Index = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"
    propsTables={[{
      componentName: 'TagSelect',
      componentSrc: TagSelectSrc,
    }, {
      componentName: 'Option',
      componentSrc: OptionSrc,
    }, {
      componentName: 'OptGroup',
      componentSrc: OptGroupSrc,
    }]}
    examples={[{
      title: 'Tag',
      description: 'A Tag Select allows a user to enter multiple custom free text entries or select multiple options from the the dropdown.',
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
      title: 'Create a Controlled Tag Select',
      description: 'An example of implementing a controlled Tag Select.',
      example: <ControlledExample />,
      source: ControlledExampleSrc,
    }]}
  />
);

export default Index;
