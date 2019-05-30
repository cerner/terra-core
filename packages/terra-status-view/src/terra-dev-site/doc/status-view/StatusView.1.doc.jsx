import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import StatusViewSrc from '!raw-loader!../../../../src/StatusView';

// Example Files
import AllPropsExample from '../example/AllPropsExample';
import AllPropsExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AllPropsExample';
import TextWrappingExample from '../example/TextWrappingExample';
import TextWrappingExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TextWrappingExample';
import GlyphHiddenExample from '../example/GlyphHiddenExample';
import GlyphHiddenExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/GlyphHiddenExample';
import LargeContainerExample from '../example/LargeContainerExample';
import LargeContainerExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/LargeContainerExample';
import AlignTopExample from '../example/AlignTopExample';
import AlignTopExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AlignTopExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Toggle Variants',
        example: AllPropsExample,
        source: AllPropsExampleSrc,
      },
      {
        title: 'Text Wrapping',
        example: TextWrappingExample,
        source: TextWrappingExampleSrc,
      },
      {
        title: 'Glyph Hidden',
        example: GlyphHiddenExample,
        source: GlyphHiddenExampleSrc,
      },
      {
        title: 'Large Container',
        example: LargeContainerExample,
        source: LargeContainerExampleSrc,
      },
      {
        title: 'Align Top',
        example: AlignTopExample,
        source: AlignTopExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Status View',
        componentSrc: StatusViewSrc,
      },
    ]}
  />
);

export default DocPage;
