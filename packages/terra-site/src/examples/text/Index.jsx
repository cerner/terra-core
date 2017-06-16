/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-text/docs/README.md';
import TextFontSizeDocs from 'terra-text/docs/text-font-sizes.md';
import TextColorDocs from 'terra-text/docs/text-colors.md';
import TextWeightDocs from 'terra-text/docs/text-weights.md';
import TextVariationsDocs from 'terra-text/docs/text-variations.md';
import TextVisuallyHiddenDocs from 'terra-text/docs/text-visually-hidden.md';
import { version } from 'terra-text/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TextSrc from '!raw-loader!terra-text/src/Text';

// Example Files
import TextColors from './TextColors';
import TextDisplays from './TextDisplays';
import TextFontSizes from './TextFontSizes';
import TextVariations from './TextVariations';
import TextVisuallyHidden from './TextVisuallyHidden';
import TextWeights from './TextWeights';

const TextExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TextSrc} />
    <TextDisplays />
    <br />
    <br />
    <Markdown id="text-font-size-docs" src={TextFontSizeDocs} />
    <TextFontSizes />
    <br />
    <br />
    <Markdown id="text-color-docs" src={TextColorDocs} />
    <TextColors />
    <br />
    <br />
    <Markdown id="text-weight-docs" src={TextWeightDocs} />
    <TextWeights />
    <br />
    <br />
    <Markdown id="text-visually-hidden-docs" src={TextVisuallyHiddenDocs} />
    <TextVisuallyHidden />
    <br />
    <br />
    <Markdown id="text-variations-docs" src={TextVariationsDocs} />
    <TextVariations />
  </div>
);

export default TextExamples;
