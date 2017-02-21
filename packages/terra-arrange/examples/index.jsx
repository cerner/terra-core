/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from '../../../site/PropsTable';
import Markdown from '../../../site/Markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ArrangeSrc from '!raw!../src/Arrange.jsx';
// Example Files
import ArrangeAlignAll from './ArrangeAlignAll';
import ArrangeAlignIndividual from './ArrangeAlignIndividual';
import ArrangeFitBgColor from './ArrangeFitBgColor';

const ArrangeExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ArrangeSrc} />
    <h2 id="align-all">Align All Containers</h2>
    <ArrangeAlignAll />
    <h2 id="align-individual">Align Individual Containers</h2>
    <ArrangeAlignIndividual />
    <h2 id="fit-bg-color">Background Color in Fit</h2>
    <ArrangeFitBgColor />
  </div>
);

export default ArrangeExamples;
