/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-toggle/docs/README.md';
import { name } from 'terra-toggle/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ToggleSrc from '!raw-loader!terra-toggle/src/Toggle';

// Example Files
import DefaultToggle from './DefaultToggle';
import DefaultToggleSrc from '!raw-loader!./DefaultToggle';
import AnimatedToggle from './AnimatedToggle';
import AnimatedToggleSrc from '!raw-loader!./AnimatedToggle';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Toggle',
        example: <DefaultToggle />,
        source: DefaultToggleSrc,
      },
      {
        title: 'isAnimated Toggle',
        example: <AnimatedToggle />,
        source: AnimatedToggleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Toggle',
        componentSrc: ToggleSrc,
      },
    ]}
  />
);

export default DocPage;
