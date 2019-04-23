import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates, object-curly-newline */
import Arrange from '../../../Arrange';

// Component Source
import ArrangeSrc from '!raw-loader!../../../../src/Arrange';

// Example Files
import { icon, image, simpleText } from '../common/examplesetup';
import ArrangeAlignAllContainers from '../example/ArrangeAlignAllContainers';
import ArrangeAlignAllContainersSrc from '!raw-loader!../example/ArrangeAlignAllContainers';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Align All Containers',
        example: <ArrangeAlignAllContainers />,
        source: ArrangeAlignAllContainersSrc,
      },
      {
        title: 'Align Individual Containers',
        example: (
          <div>
            <h4>Hello! There is nothing here yet, but make yourself at home.</h4>
          </div>
        ),
      },
      {
        title: 'Align Using Attribute Props',
        description: 'Align stretch with 20% max-widths on containers using attribute props',
        example: (
          <Arrange
            fitStart={image}
            fill={simpleText}
            fitEnd={icon}
            alignFitStart="stretch"
            alignFill="stretch"
            alignFitEnd="stretch"
            fitStartAttributes={{ style: { maxWidth: '20%', wordWrap: 'break-word', overflow: 'hidden' } }}
            fillAttributes={{ style: { wordWrap: 'break-word', maxWidth: '20%' } }}
            fitEndAttributes={{
              style: {
                maxWidth: '20%', wordWrap: 'break-word', overflow: 'hidden', backgroundColor: 'yellow',
              },
            }}
          />
        ),
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
