import React from 'react';
import DocTemplate from 'terra-doc-template';
import Markdown from 'terra-markdown';
import ReadMe from '../../../../docs/README.md';
import HeadingLevelDocs from '../../../../docs/heading-levels.md';
import HeadingSizeDocs from '../../../../docs/heading-sizes.md';
import HeadingColorDocs from '../../../../docs/heading-colors.md';
import HeadingWeightDocs from '../../../../docs/heading-weights.md';
import HeadingVisuallyHiddenDocs from '../../../../docs/heading-visually-hidden.md';
import HeadingVariationDocs from '../../../../docs/heading-variations.md';
import { name, version } from '../../../../package.json';

// Component Source
import HeadingSrc from '!raw-loader!../../../../src/Heading';

// Example Files
import HeadingColors from '../example/HeadingColors';
import HeadingColorsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/HeadingColors';
import HeadingLevels from '../example/HeadingLevels';
import HeadingLevelsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/HeadingLevels';
import HeadingSizes from '../example/HeadingSizes';
import HeadingSizesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/HeadingSizes';
import HeadingVisuallyHidden from '../example/HeadingVisuallyHidden';
import HeadingVisuallyHiddenSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/HeadingVisuallyHidden';
import HeadingWeights from '../example/HeadingWeights';
import HeadingWeightsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/HeadingWeights';
import HeadingVariations from '../example/HeadingVariations';
import HeadingVariationsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/HeadingVariations';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
