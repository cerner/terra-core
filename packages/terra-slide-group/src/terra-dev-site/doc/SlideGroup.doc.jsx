/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-slide-group/docs/README.md';
import { name } from 'terra-slide-group/package.json';

// Component Source
import SlideGroupSrc from '!raw-loader!terra-slide-group/src/SlideGroup.jsx';

// Example Files
import SlideGroupDemo from './SlideGroupDemo';
import SlideGroupDemoSrc from '!raw-loader!./SlideGroupDemo';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Non-Animated SlideGroup',
        example: <SlideGroupDemo />,
        source: SlideGroupDemoSrc,
      },
      {
        title: 'Animated SlideGroup',
        example: <SlideGroupDemo isAnimated />,
        source: SlideGroupDemoSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Slide Group',
        componentSrc: SlideGroupSrc,
      },
    ]}
  />
);

export default DocPage;
