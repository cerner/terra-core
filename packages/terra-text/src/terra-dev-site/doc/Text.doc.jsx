/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import Markdown from 'terra-markdown';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-text/docs/README.md';
import TextFontSizeDocs from 'terra-text/docs/text-font-sizes.md';
import TextColorDocs from 'terra-text/docs/text-colors.md';
import TextWeightDocs from 'terra-text/docs/text-weights.md';
import TextVariationsDocs from 'terra-text/docs/text-variations.md';
import TextVisuallyHiddenDocs from 'terra-text/docs/text-visually-hidden.md';
import { name } from 'terra-text/package.json';

// Component Source
import TextSrc from '!raw-loader!terra-text/src/Text';

// Example Files
import TextColors from './TextColors';
import TextColorsSrc from '!raw-loader!./TextColors';
import TextDisplays from './TextDisplays';
import TextDisplaysSrc from '!raw-loader!./TextDisplays';
import TextFontSizes from './TextFontSizes';
import TextFontSizesSrc from '!raw-loader!./TextFontSizes';
import TextVariations from './TextVariations';
import TextVariationsSrc from '!raw-loader!./TextVariations';
import TextVisuallyHidden from './TextVisuallyHidden';
import TextVisuallyHiddenSrc from '!raw-loader!./TextVisuallyHidden';
import TextWeights from './TextWeights';
import TextWeightsSrc from '!raw-loader!./TextWeights';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Displays',
        example: <TextDisplays />,
        source: TextDisplaysSrc,
      },
      {
        title: 'Font Sizes',
        description: <Markdown id="text-font-size-docs" src={TextFontSizeDocs} />,
        example: <TextFontSizes />,
        source: TextFontSizesSrc,
      },
      {
        title: 'Colors',
        description: <Markdown id="text-color-docs" src={TextColorDocs} />,
        example: <TextColors />,
        source: TextColorsSrc,
      },
      {
        title: 'Weight',
        description: <Markdown id="text-weight-docs" src={TextWeightDocs} />,
        example: <TextWeights />,
        source: TextWeightsSrc,
      },
      {
        title: 'Visually Hidden',
        description: <Markdown id="text-visually-hidden-docs" src={TextVisuallyHiddenDocs} />,
        example: <TextVisuallyHidden />,
        source: TextVisuallyHiddenSrc,
      },
      {
        title: 'Variations',
        description: <Markdown id="text-variations-docs" src={TextVariationsDocs} />,
        example: <TextVariations />,
        source: TextVariationsSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Text',
        componentSrc: TextSrc,
      },
    ]}
  />
);

export default DocPage;
