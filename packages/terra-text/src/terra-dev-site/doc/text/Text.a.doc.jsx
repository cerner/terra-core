import React from 'react';
import Markdown from 'terra-markdown';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import TextFontSizeDocs from '../../../../docs/text-font-sizes.md';
import TextColorDocs from '../../../../docs/text-colors.md';
import TextWeightDocs from '../../../../docs/text-weights.md';
import TextVariationsDocs from '../../../../docs/text-variations.md';
import TextVisuallyHiddenDocs from '../../../../docs/text-visually-hidden.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import TextSrc from '!raw-loader!../../../../src/Text';

// Example Files
import TextColors from '../example/TextColors';
import TextColorsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TextColors';
import TextDisplays from '../example/TextDisplays';
import TextDisplaysSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TextDisplays';
import TextFontSizes from '../example/TextFontSizes';
import TextFontSizesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TextFontSizes';
import TextVariations from '../example/TextVariations';
import TextVariationsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TextVariations';
import TextVisuallyHidden from '../example/TextVisuallyHidden';
import TextVisuallyHiddenSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TextVisuallyHidden';
import TextWeights from '../example/TextWeights';
import TextWeightsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TextWeights';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
