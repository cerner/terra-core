import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-arrange/docs/README.md';
import { version } from 'terra-arrange/package.json';
import Arrange from 'terra-arrange';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ArrangeSrc from '!raw-loader!terra-arrange/src/Arrange';

// Example Files
import { icon, image, simpleText } from './examplesetup';
import ArrangeAlignment from './ArrangeAlignment';

const ArrangeExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ArrangeSrc} />
    <h2 id="align-all">Align All Containers</h2>
    <ArrangeAlignment alignment="all" fitStart={image} fill={simpleText} />
    <br />
    <ArrangeAlignment alignment="all" fill={simpleText} fitEnd={icon} />
    <br />
    <ArrangeAlignment alignment="all" fitStart={image} fill={simpleText} fitEnd={icon} />
    <h2 id="align-individual">Align Individual Containers</h2>
    <ArrangeAlignment alignment="individual" fitStart={image} fill={simpleText} />
    <br />
    <ArrangeAlignment alignment="individual" fill={simpleText} fitEnd={icon} />
    <br />
    <ArrangeAlignment alignment="individual" fitStart={image} fill={simpleText} fitEnd={icon} />
    <br />
    <h2 id="align-custom-widths">Align stretch with 20% max-widths on containers using attribute props.</h2>
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
  </div>
);

export default ArrangeExamples;
