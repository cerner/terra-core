import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved */
// Component Source
import ArrangeSrc from '!raw-loader!../../../../src/Arrange';

// Example Files
import ArrangeAlignAllContainers from '../example/ArrangeAlignAllContainers';
import ArrangeAlignAllContainersSrc from '!raw-loader!../example/ArrangeAlignAllContainers';
import ArrangeAlignFill from '../example/ArrangeAlignFill';
import ArrangeAlignFillSrc from '!raw-loader!../example/ArrangeAlignFill';
import ArrangeAlignFitEnd from '../example/ArrangeAlignFitEnd';
import ArrangeAlignFitEndSrc from '!raw-loader!../example/ArrangeAlignFitEnd';
import ArrangeAlignFitStart from '../example/ArrangeAlignFitStart';
import ArrangeAlignFitStartSrc from '!raw-loader!../example/ArrangeAlignFitStart';
/* eslint-enable import/no-webpack-loader-syntax, import/no-unresolved */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Align Individual Containers - FitStart',
        example: <ArrangeAlignFitStart />,
        source: ArrangeAlignFitStartSrc,
      },
      {
        title: 'Align Individual Containers - Fill',
        example: <ArrangeAlignFill />,
        source: ArrangeAlignFillSrc,
      },
      {
        title: 'Align Individual Containers - FitEnd',
        example: <ArrangeAlignFitEnd />,
        source: ArrangeAlignFitEndSrc,
      },
      {
        title: 'Align All Containers',
        example: <ArrangeAlignAllContainers />,
        source: ArrangeAlignAllContainersSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Arrange',
        componentSrc: ArrangeSrc,
      },
    ]}
  />
);

export default DocPage;
