import React from 'react';
import Markdown from 'terra-markdown';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import TextFontSizeDocs from '../../../../docs/text-font-sizes.md';
import TextColorDocs from '../../../../docs/text-colors.md';
import TextWeightDocs from '../../../../docs/text-weights.md';
import TextVariationsDocs from '../../../../docs/text-variations.md';
import TextVisuallyHiddenDocs from '../../../../docs/text-visually-hidden.md';
import TextWordWrappedDocs from '../../../../docs/text-word-wrapped.md';

import { name, version } from '../../../../package.json';

// Example Files
import TextPropsTable from '!terra-props-table-loader!../../../../src/Text';
import TextSrc from '!raw-loader!../../../../src/Text';
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
import TextWordWrapped from '../example/TextWordWrapped';
import TextWordWrappedSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TextWordWrapped';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
      {
        title: 'Word Wrapped',
        description: <Markdown id="text-word-wrapped-docs" src={TextWordWrappedDocs} />,
        example: <TextWordWrapped />,
        source: TextWordWrappedSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Text',
        componentSrc: TextSrc,
        componentProps: TextPropsTable,
      },
    ]}
  />
);

export default DocPage;
