/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-arrange/docs/README.md';
import { name } from 'terra-arrange/package.json';

// Component Source
import ArrangeSrc from '!raw-loader!terra-arrange/src/Arrange';

// Example Files
import Arrange from 'terra-arrange';
import { icon, image, simpleText } from './examplesetup';
import ArrangeAlignment from './ArrangeAlignment';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Align All Containers',
        example: (
          <div>
            <ArrangeAlignment alignment="all" fitStart={image} fill={simpleText} />
            <ArrangeAlignment alignment="all" fill={simpleText} fitEnd={icon} />
            <ArrangeAlignment alignment="all" fitStart={image} fill={simpleText} fitEnd={icon} />
          </div>
        ),
      },
      {
        title: 'Align Individual Containers',
        example: (
          <div>
            <ArrangeAlignment alignment="individual" fitStart={image} fill={simpleText} />
            <ArrangeAlignment alignment="individual" fill={simpleText} fitEnd={icon} />
            <ArrangeAlignment alignment="individual" fitStart={image} fill={simpleText} fitEnd={icon} />
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
            alignFitStart={'stretch'}
            alignFill={'stretch'}
            alignFitEnd={'stretch'}
            fitStartAttributes={{ style: { maxWidth: '20%', wordWrap: 'break-word', overflow: 'hidden' } }}
            fillAttributes={{ style: { wordWrap: 'break-word', maxWidth: '20%' } }}
            fitEndAttributes={{ style: { maxWidth: '20%', wordWrap: 'break-word', overflow: 'hidden', backgroundColor: 'yellow' } }}
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
