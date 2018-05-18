/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-toggle-section-header/docs/README.md';
import { name } from 'terra-toggle-section-header/package.json';

// Component Source
import ToggleSectionHeaderSrc from '!raw-loader!terra-toggle-section-header/src/ToggleSectionHeader';

// Example Files
import DefaultToggleSectionHeader from './DefaultToggleSectionHeader';
import DefaultToggleSectionHeaderSrc from '!raw-loader!./DefaultToggleSectionHeader';
import AnimatedToggleSectionHeader from './AnimatedToggleSectionHeader';
import AnimatedToggleSectionHeaderSrc from '!raw-loader!./AnimatedToggleSectionHeader';

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
