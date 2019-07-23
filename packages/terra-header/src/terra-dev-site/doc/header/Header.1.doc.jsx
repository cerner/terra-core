import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import HeaderSrc from '!raw-loader!../../../../src/Header';

// Example Files
import DefaultHeader from '../example/DefaultHeader';
import DefaultHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultHeader';
import StartAndEndHeader from '../example/StartAndEndHeader';
import StartAndEndHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/StartAndEndHeader';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <DefaultHeader />,
        source: DefaultHeaderSrc,
      },
      {
        example: <StartAndEndHeader />,
        source: StartAndEndHeaderSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Action Header Container',
        componentSrc: HeaderSrc,
      },
    ]}
  />
);

export default DocPage;
