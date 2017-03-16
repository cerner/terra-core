/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ClincalItemViewSrc from '!raw-loader!../src/ClincalItemView.jsx';
// Example Files
import ClincalItemViewStandard from './ClincalItemViewStandard';
import ClincalItemViewTwoColumn from './ClincalItemViewTwoColumn';
import ClincalItemViewTwoColumnLeft from './ClincalItemViewTwoColumnLeft';
import ClincalItemViewComment from './ClincalItemViewComment';
import ClincalItemViewAll from './ClincalItemViewAll';

const ClincalItemViewExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ClincalItemViewSrc} />
    <h2 id="standard">Standard Displays</h2>
    <ClincalItemViewStandard />
    <h2 id="outline-variant">Two Column ClincalItemView</h2>
    <ClincalItemViewTwoColumn />
    <h2 id="link-variant">Left Emphasis ClincalItemView</h2>
    <ClincalItemViewTwoColumnLeft />
    <h2 id="link-variant">Comment ClincalItemView</h2>
    <ClincalItemViewComment />
    <h2 id="link-variant">All Elements ClincalItemView</h2>
    <ClincalItemViewAll />
  </div>
);

export default ClincalItemViewExamples;
