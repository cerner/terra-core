/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-action-header/docs/README.md';
import { name } from 'terra-action-header/package.json';

// Component Source
import ActionHeaderSrc from '!raw-loader!terra-action-header/src/ActionHeader';

// Example Files
import DefaultActionHeader from './DefaultActionHeader';
import DefaultActionHeaderSrc from '!raw-loader!./DefaultActionHeader';
import BackActionHeader from './BackActionHeader';
import BackActionHeaderSrc from '!raw-loader!./BackActionHeader';
import BackCloseActionHeader from './BackCloseActionHeader';
import BackCloseActionHeaderSrc from '!raw-loader!./BackCloseActionHeader';
import CloseActionHeader from './CloseActionHeader';
import CloseActionHeaderSrc from '!raw-loader!./CloseActionHeader';
import MaximizeCloseActionHeader from './MaximizeCloseActionHeader';
import MaximizeCloseActionHeaderSrc from '!raw-loader!./MaximizeCloseActionHeader';
import MinimizeCustomButtonActionHeader from './MinimizeCustomButtonActionHeader';
import MinimizeCustomButtonActionHeaderSrc from '!raw-loader!./MinimizeCustomButtonActionHeader';
import BackPreviousNextCloseActionHeader from './BackPreviousNextCloseActionHeader';
import BackPreviousNextCloseActionHeaderSrc from '!raw-loader!./BackPreviousNextCloseActionHeader';

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
