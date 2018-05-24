import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
import { name } from '../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved */
// Component Source
import ProgressBarSrc from '!raw-loader!../../../src/ProgressBar';

// Example Files
import ProgressBarDefault from './example/ProgressBarDefault';
import ProgressBarDefaultSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ProgressBarDefault';
import ProgressBarSize from './example/ProgressBarSize';
import ProgressBarSizeSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ProgressBarSize';
import ProgressBarColor from './example/ProgressBarColor';
import ProgressBarColorSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ProgressBarColor';
import ProgressBarGradient from './example/ProgressBarGradient';
import ProgressBarGradientSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ProgressBarGradient';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved */

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
