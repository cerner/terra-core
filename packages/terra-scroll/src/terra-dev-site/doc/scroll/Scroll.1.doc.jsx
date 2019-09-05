import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

import { name, version } from '../../../../package.json';

// Example Files
import ScrollPropsTable from '!terra-props-table-loader!../../../../src/Scroll';
import ScrollSrc from '!raw-loader!../../../../src/Scroll';
import ScrollVertical from '../example/ScrollVertical';
import ScrollVerticalSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ScrollVertical';
import ScrollHorizontal from '../example/ScrollHorizontal';
import ScrollHorizontalSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ScrollHorizontal';

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
        componentProps: ScrollPropsTable,
      },
    ]}
  />
);

export default DocPage;
