/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-progress-bar/docs/README.md';
import { name } from 'terra-progress-bar/package.json';

// Component Source
import ProgressBarSrc from '!raw-loader!terra-progress-bar/src/ProgressBar';

// Example Files
import ProgressBarDefault from './ProgressBarDefault';
import ProgressBarDefaultSrc from '!raw-loader!./ProgressBarDefault';
import ProgressBarSize from './ProgressBarSize';
import ProgressBarSizeSrc from '!raw-loader!./ProgressBarSize';
import ProgressBarColor from './ProgressBarColor';
import ProgressBarColorSrc from '!raw-loader!./ProgressBarColor';
import ProgressBarGradient from './ProgressBarGradient';
import ProgressBarGradientSrc from '!raw-loader!./ProgressBarGradient';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default',
        example: <ProgressBarDefault />,
        source: ProgressBarDefaultSrc,
      },
      {
        title: 'Size',
        example: <ProgressBarSize />,
        source: ProgressBarSizeSrc,
      },
      {
        title: 'Color',
        example: <ProgressBarColor />,
        source: ProgressBarColorSrc,
      },
      {
        title: 'Gradient',
        example: <ProgressBarGradient />,
        source: ProgressBarGradientSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Progress Bar',
        componentSrc: ProgressBarSrc,
      },
    ]}
  />
);

export default DocPage;
