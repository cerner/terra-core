import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ScrollSrc from '!raw-loader!terra-scroll/src/Scroll';

// Example Files
import ScrollVertical from '../example/ScrollVertical';
import ScrollVerticalSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ScrollVertical';
import ScrollHorizontal from '../example/ScrollHorizontal';
import ScrollHorizontalSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ScrollHorizontal';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ScrollVertical />,
        source: ScrollVerticalSrc,
      },
      {
        example: <ScrollHorizontal />,
        source: ScrollHorizontalSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Scroll',
        componentSrc: ScrollSrc,
      },
    ]}
  />
);

export default DocPage;
