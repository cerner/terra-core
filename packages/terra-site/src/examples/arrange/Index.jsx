/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-arrange/docs/README.md';
import { name } from 'terra-arrange/package.json';

// Component Source
import ArrangeSrc from '!raw-loader!terra-arrange/src/Arrange';

// Example Files
import AlignAllContainers from './AlignAllContainers';
import AlignAllContainersSrc from '!raw-loader!./AlignAllContainers';
import AlignIndividualContainers from './AlignIndividualContainers';
import AlignIndividualContainersSrc from '!raw-loader!./AlignIndividualContainers';
import AlignStretchMaxWidths from './AlignStretchMaxWidths';
import AlignStretchMaxWidthsSrc from '!raw-loader!./AlignStretchMaxWidths';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Align All Containers',
        example: <AlignAllContainers />,
        source: AlignAllContainersSrc,
      },
      {
        title: 'Align Individual Containers',
        example: <AlignIndividualContainers />,
        source: AlignIndividualContainersSrc,
      },
      {
        title: 'Align Using Attribute Props',
        description: 'Align stretch with 20% max-widths on containers using attribute props',
        example: <AlignStretchMaxWidths />,
        source: AlignStretchMaxWidthsSrc,
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
