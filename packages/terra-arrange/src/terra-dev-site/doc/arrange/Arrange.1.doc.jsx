import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import PropsTable from '../../../../docs/Arrange-props-table.md';
import { name, version } from '../../../../package.json';

// Example Files
import ArrangeAlignAllContainers from '../example/ArrangeAlignAllContainers';
import ArrangeAlignAllContainersSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ArrangeAlignAllContainers';
import ArrangeAlignFill from '../example/ArrangeAlignFill';
import ArrangeAlignFillSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ArrangeAlignFill';
import ArrangeAlignFitEnd from '../example/ArrangeAlignFitEnd';
import ArrangeAlignFitEndSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ArrangeAlignFitEnd';
import ArrangeAlignFitStart from '../example/ArrangeAlignFitStart';
import ArrangeAlignFitStartSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ArrangeAlignFitStart';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
