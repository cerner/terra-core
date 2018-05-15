/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-heading/docs/README.md';
import HeadingLevelDocs from 'terra-heading/docs/heading-levels.md';
import HeadingSizeDocs from 'terra-heading/docs/heading-sizes.md';
import HeadingColorDocs from 'terra-heading/docs/heading-colors.md';
import HeadingWeightDocs from 'terra-heading/docs/heading-weights.md';
import HeadingVisuallyHiddenDocs from 'terra-heading/docs/heading-visually-hidden.md';
import HeadingVariationDocs from 'terra-heading/docs/heading-variations.md';
import { name } from 'terra-heading/package.json';

// Component Source
import HeadingSrc from '!raw-loader!terra-heading/src/Heading';

// Example Files
import HeadingColors from './HeadingColors';
import HeadingColorsSrc from '!raw-loader!./HeadingColors';
import HeadingLevels from './HeadingLevels';
import HeadingLevelsSrc from '!raw-loader!./HeadingLevels';
import HeadingSizes from './HeadingSizes';
import HeadingSizesSrc from '!raw-loader!./HeadingSizes';
import HeadingVisuallyHidden from './HeadingVisuallyHidden';
import HeadingVisuallyHiddenSrc from '!raw-loader!./HeadingVisuallyHidden';
import HeadingWeights from './HeadingWeights';
import HeadingWeightsSrc from '!raw-loader!./HeadingWeights';
import HeadingVariations from './HeadingVariations';
import HeadingVariationsSrc from '!raw-loader!./HeadingVariations';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        description: <Markdown id="heading-level-docs" src={HeadingLevelDocs} />,
        example: <HeadingLevels />,
        source: HeadingLevelsSrc,
      },
      {
        description: <Markdown id="heading-size-docs" src={HeadingSizeDocs} />,
        example: <HeadingSizes />,
        source: HeadingSizesSrc,
      },
      {
        description: <Markdown id="heading-color-docs" src={HeadingColorDocs} />,
        example: <HeadingColors />,
        source: HeadingColorsSrc,
      },
      {
        description: <Markdown id="heading-weights-docs" src={HeadingWeightDocs} />,
        example: <HeadingWeights />,
        source: HeadingWeightsSrc,
      },
      {
        description: <Markdown id="heading-visually-hidden-docs" src={HeadingVisuallyHiddenDocs} />,
        example: <HeadingVisuallyHidden />,
        source: HeadingVisuallyHiddenSrc,
      },
      {
        description: <Markdown id="heading-variation-docs" src={HeadingVariationDocs} />,
        example: <HeadingVariations />,
        source: HeadingVariationsSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Heading',
        componentSrc: HeadingSrc,
      },
    ]}
  />
);

export default DocPage;
