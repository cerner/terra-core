/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-button-group/docs/README.md';
import { name } from 'terra-button-group/package.json';

// Component Source
import ButtonGroupSrc from '!raw-loader!terra-button-group/src/ButtonGroup.jsx';
import ButtonGroupButtonSrc from '!raw-loader!terra-button-group/src/ButtonGroupButton.jsx';

// Examples
import ButtonGroupWithIcons from './ButtonGroupWithIcons';
import ButtonGroupWithIconsSrc from '!raw-loader!./ButtonGroupWithIcons';
import ButtonGroupDisabledButtons from './ButtonGroupDisabledButtons';
import ButtonGroupDisabledButtonsSrc from '!raw-loader!./ButtonGroupDisabledButtons';
import ButtonGroupSingleSelect from './ButtonGroupSingleSelect';
import ButtonGroupSingleSelectSrc from '!raw-loader!./ButtonGroupSingleSelect';
import ButtonGroupMultiSelect from './ButtonGroupMultiSelect';
import ButtonGroupMultiSelectSrc from '!raw-loader!./ButtonGroupMultiSelect';


const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Text and Icon - Default, no selected state',
        example: <ButtonGroupWithIcons />,
        source: ButtonGroupWithIconsSrc,
      },
      {
        title: 'Single Select - Manage single button selection',
        example: <ButtonGroupSingleSelect />,
        source: ButtonGroupSingleSelectSrc,
      },
      {
        title: 'Multi Select - Manage multiple button selections',
        example: <ButtonGroupMultiSelect />,
        source: ButtonGroupMultiSelectSrc,
      },
      {
        title: 'Disabled Buttons - Default, no selected state',
        example: <ButtonGroupDisabledButtons />,
        source: ButtonGroupDisabledButtonsSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Button Group',
        componentSrc: ButtonGroupSrc,
      },
      {
        componentName: 'Button Group Button',
        componentSrc: ButtonGroupButtonSrc,
      },
    ]}
  />
);

export default DocPage;
