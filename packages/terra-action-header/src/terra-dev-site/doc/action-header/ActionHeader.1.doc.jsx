import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ActionHeaderSrc from '!raw-loader!../../../../src/ActionHeader';

// Example Files
import DefaultActionHeader from '../example/DefaultActionHeader';
import DefaultActionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultActionHeader';
import BackActionHeader from '../example/BackActionHeader';
import BackActionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BackActionHeader';
import BackCloseActionHeader from '../example/BackCloseActionHeader';
import BackCloseActionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BackCloseActionHeader';
import CloseActionHeader from '../example/CloseActionHeader';
import CloseActionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CloseActionHeader';
import MaximizeCloseActionHeader from '../example/MaximizeCloseActionHeader';
import MaximizeCloseActionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MaximizeCloseActionHeader';
import MinimizeCustomButtonActionHeader from '../example/MinimizeCustomButtonActionHeader';
import MinimizeCustomButtonActionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MinimizeCustomButtonActionHeader';
import BackPreviousNextCloseActionHeader from '../example/BackPreviousNextCloseActionHeader';
import BackPreviousNextCloseActionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BackPreviousNextCloseActionHeader';
import LongWrappingTextHeader from '../example/LongWrappingTextHeader';
import LongWrappingTextHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/LongWrappingTextHeader';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <DefaultActionHeader />,
        source: DefaultActionHeaderSrc,
      },
      {
        example: <BackActionHeader />,
        source: BackActionHeaderSrc,
      },
      {
        example: <CloseActionHeader />,
        source: CloseActionHeaderSrc,
      },
      {
        example: <BackCloseActionHeader />,
        source: BackCloseActionHeaderSrc,
      },
      {
        example: <BackPreviousNextCloseActionHeader />,
        source: BackPreviousNextCloseActionHeaderSrc,
      },
      {
        example: <MaximizeCloseActionHeader />,
        source: MaximizeCloseActionHeaderSrc,
      },
      {
        example: <MinimizeCustomButtonActionHeader />,
        source: MinimizeCustomButtonActionHeaderSrc,
      },
      {
        example: <LongWrappingTextHeader />,
        source: LongWrappingTextHeaderSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Action Header',
        componentSrc: ActionHeaderSrc,
      },
    ]}
  />
);

export default DocPage;
