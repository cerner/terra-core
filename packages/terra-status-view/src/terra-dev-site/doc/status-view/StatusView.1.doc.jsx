import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import PropsTable from '../../../../docs/StatusView-props-table.md';
import { name, version } from '../../../../package.json';

// Example Files
import ToggleVariants from '../example/ToggleVariants';
import ToggleVariantsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ToggleVariants';
import ToggleAlignmentAndGlyph from '../example/ToggleAlignmentAndGlyph';
import ToggleAlignmentAndGlyphSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ToggleAlignmentAndGlyph';
import Custom from '../example/Custom';
import CustomSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Custom';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
        example: Custom,
        source: CustomSrc,
      },
      {
        title: 'Toggle Alignment and Glyph',
        example: <ToggleAlignmentAndGlyph />,
        source: ToggleAlignmentAndGlyphSrc,
      },
    ]}
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
