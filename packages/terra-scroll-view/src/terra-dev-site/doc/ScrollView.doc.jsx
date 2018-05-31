import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
import { name } from '../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ScrollViewSrc from '!raw-loader!terra-scroll-view/src/ScrollView';

// Example Files
import ScrollViewVertical from './example/ScrollViewVertical';
import ScrollViewVerticalSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ScrollViewVertical';
import ScrollViewHorizontal from './example/ScrollViewHorizontal';
import ScrollViewHorizontalSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ScrollViewHorizontal';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ScrollViewVertical />,
        source: ScrollViewVerticalSrc,
      },
      {
        example: <ScrollViewHorizontal />,
        source: ScrollViewHorizontalSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Scroll View',
        componentSrc: ScrollViewSrc,
      },
    ]}
  />
);

export default DocPage;
