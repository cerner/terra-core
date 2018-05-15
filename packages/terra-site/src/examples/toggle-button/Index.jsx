/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-toggle-button/docs/README.md';
import { name } from 'terra-toggle-button/package.json';

// Component Source
import ToggleButtonSrc from '!raw-loader!terra-toggle-button/src/ToggleButton';

// Example Files
import DefaultToggleButton from './DefaultToggleButton';
import DefaultToggleButtonSrc from '!raw-loader!./DefaultToggleButton';
import AnimatedToggleButton from './AnimatedToggleButton';
import AnimatedToggleButtonSrc from '!raw-loader!./AnimatedToggleButton';
import ButtonAttrsToggleButton from './ButtonAttrsToggleButton';
import ButtonAttrsToggleButtonSrc from '!raw-loader!./ButtonAttrsToggleButton';
import IsInitiallyOpenToggleButton from './IsInitiallyOpenToggleButton';
import IsInitiallyOpenToggleButtonSrc from '!raw-loader!./IsInitiallyOpenToggleButton';
import IsIconOnlyToggleButton from './IsIconOnlyToggleButton';
import IsIconOnlyToggleButtonSrc from '!raw-loader!./IsIconOnlyToggleButton';
import OpenCloseEventToggleButton from './OpenCloseEventToggleButton';
import OpenCloseEventToggleButtonSrc from '!raw-loader!./OpenCloseEventToggleButton';
import OpenCloseTextToggleButton from './OpenCloseTextToggleButton';
import OpenCloseTextToggleButtonSrc from '!raw-loader!./OpenCloseTextToggleButton';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default ToggleButton',
        example: <DefaultToggleButton />,
        source: DefaultToggleButtonSrc,
      },
      {
        title: 'isAnimated ToggleButton',
        example: <AnimatedToggleButton />,
        source: AnimatedToggleButtonSrc,
      },
      {
        title: 'Open / Close Button Text ToggleButton',
        example: <OpenCloseTextToggleButton />,
        source: OpenCloseTextToggleButtonSrc,
      },
      {
        title: 'isIconOnly ToggleButton',
        example: <IsIconOnlyToggleButton />,
        source: IsIconOnlyToggleButtonSrc,
      },
      {
        title: 'isInitiallyOpen ToggleButton',
        example: <IsInitiallyOpenToggleButton />,
        source: IsInitiallyOpenToggleButtonSrc,
      },
      {
        title: 'Custom ToggleButton Button',
        example: <ButtonAttrsToggleButton />,
        source: ButtonAttrsToggleButtonSrc,
      },
      {
        title: 'OnOpen / OnClose Callback ToggleButton',
        example: <OpenCloseEventToggleButton />,
        source: OpenCloseEventToggleButtonSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Toggle Button',
        componentSrc: ToggleButtonSrc,
      },
    ]}
  />
);

export default DocPage;
