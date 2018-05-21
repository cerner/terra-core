/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
import { name } from '../../../package.json';

// Component Source
import ToggleSectionHeaderSrc from '!raw-loader!../../../src/ToggleSectionHeader';

// Example Files
import DefaultToggleSectionHeader from './example/DefaultToggleSectionHeader';
import DefaultToggleSectionHeaderSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/DefaultToggleSectionHeader';
import AnimatedToggleSectionHeader from './example/AnimatedToggleSectionHeader';
import AnimatedToggleSectionHeaderSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/AnimatedToggleSectionHeader';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default',
        example: <DefaultToggleSectionHeader />,
        source: DefaultToggleSectionHeaderSrc,
      },
      {
        title: 'Two Column',
        example: <AnimatedToggleSectionHeader />,
        source: AnimatedToggleSectionHeaderSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Toggle Section Header',
        componentSrc: ToggleSectionHeaderSrc,
      },
    ]}
  />
);

export default DocPage;
