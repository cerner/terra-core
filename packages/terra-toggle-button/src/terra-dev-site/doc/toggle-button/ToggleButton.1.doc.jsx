import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import PropsTable from '../../../../docs/ToggleButton-props-table.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import DefaultToggleButton from '../example/DefaultToggleButton';
import DefaultToggleButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultToggleButton';
import AnimatedToggleButton from '../example/AnimatedToggleButton';
import AnimatedToggleButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AnimatedToggleButton';
import ButtonAttrsToggleButton from '../example/ButtonAttrsToggleButton';
import ButtonAttrsToggleButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonAttrsToggleButton';
import IsInitiallyOpenToggleButton from '../example/IsInitiallyOpenToggleButton';
import IsInitiallyOpenToggleButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/IsInitiallyOpenToggleButton';
import IsIconOnlyToggleButton from '../example/IsIconOnlyToggleButton';
import IsIconOnlyToggleButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/IsIconOnlyToggleButton';
import OpenCloseEventToggleButton from '../example/OpenCloseEventToggleButton';
import OpenCloseEventToggleButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/OpenCloseEventToggleButton';
import OpenCloseTextToggleButton from '../example/OpenCloseTextToggleButton';
import OpenCloseTextToggleButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/OpenCloseTextToggleButton';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
