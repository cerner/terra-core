import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import StatusViewSrc from '!raw-loader!../../../../src/StatusView';

// Example Files
import ToggleVariants from '../example/ToggleVariants';
import ToggleVariantsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ToggleVariants';
import GlyphHiddenExample from '../example/GlyphHiddenExample';
import GlyphHiddenExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/GlyphHiddenExample';
import LargeContainerExample from '../example/LargeContainerExample';
import LargeContainerExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/LargeContainerExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Variants',
        example: <ToggleVariants />,
        source: ToggleVariantsSrc,
      },
      {
        title: 'Custom: Icon + message + buttons',
        example: LargeContainerExample,
        source: LargeContainerExampleSrc,
      },
      {
        title: 'Toggle Boolean Props',
        example: <GlyphHiddenExample />,
        source: GlyphHiddenExampleSrc,
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
