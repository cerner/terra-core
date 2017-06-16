/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-heading/docs/README.md';
import HeadingLevelDocs from 'terra-heading/docs/heading-levels.md';
import HeadingSizeDocs from 'terra-heading/docs/heading-sizes.md';
import HeadingColorDocs from 'terra-heading/docs/heading-colors.md';
import HeadingWeightDocs from 'terra-heading/docs/heading-weights.md';
import HeadingVisuallyHiddenDocs from 'terra-heading/docs/heading-visually-hidden.md';
import { version } from 'terra-heading/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import HeadingSrc from '!raw-loader!terra-heading/src/Heading';

// Example Files
import HeadingColors from './HeadingColors';
import HeadingLevels from './HeadingLevels';
import HeadingSizes from './HeadingSizes';
import HeadingVisuallyHidden from './HeadingVisuallyHidden';
import HeadingWeights from './HeadingWeights';

const HeadingExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={HeadingSrc} />
    <Markdown id="heading-level-docs" src={HeadingLevelDocs} />
    <HeadingLevels />
    <br />
    <br />
    <Markdown id="heading-level-docs" src={HeadingSizeDocs} />
    <HeadingSizes />
    <br />
    <br />
    <Markdown id="heading-level-docs" src={HeadingColorDocs} />
    <HeadingColors />
    <br />
    <br />
    <Markdown id="heading-level-docs" src={HeadingWeightDocs} />
    <HeadingWeights />
    <br />
    <br />
    <Markdown id="heading-level-docs" src={HeadingVisuallyHiddenDocs} />
    <HeadingVisuallyHidden />
  </div>
);

export default HeadingExamples;
