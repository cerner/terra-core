/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from '../../../packages/terra-site/src/PropsTable';
import Markdown from '../../../packages/terra-site/src/Markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import CompactCardSrc from '!raw-loader!../src/CompactCard.jsx';
// Example Files
import CompactCardStandard from './CompactCardStandard';
import CompactCardTwoColumn from './CompactCardTwoColumn';
import CompactCardTwoColumnLeft from './CompactCardTwoColumnLeft';
import CompactCardComment from './CompactCardComment';
import CompactCardAll from './CompactCardAll';

const CompactCardExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={CompactCardSrc} />
    <h2 id="standard">Standard Displays</h2>
    <CompactCardStandard />
    <h2 id="outline-variant">Two Column CompactCard</h2>
    <CompactCardTwoColumn />
    <h2 id="link-variant">Left Emphasis CompactCard</h2>
    <CompactCardTwoColumnLeft />
    <h2 id="link-variant">Comment CompactCard</h2>
    <CompactCardComment />
    <h2 id="link-variant">All Elements CompactCard</h2>
    <CompactCardAll />
  </div>
);

export default CompactCardExamples;
