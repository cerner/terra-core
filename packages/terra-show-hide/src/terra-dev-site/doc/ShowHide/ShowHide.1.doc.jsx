/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import ShowHideSrc from '!raw-loader!../../../../src/ShowHide';

// Example Files
import AnimatedShowHide from '../example/AnimatedShowHide';
import AnimatedShowHideSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AnimatedShowHide.jsx';
import CustomLinkTextShowHide from '../example/CustomLinkText';
import CustomLinkTextShowHideSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CustomLinkText.jsx';
import DefaultShowHide from '../example/DefaultShowHide';
import DefaultShowHideSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultShowHide.jsx';
import InitiallyOpenShowHide from '../example/InitiallyOpenShowHide';
import InitiallyOpenShowHideSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/InitiallyOpenShowHide.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Animated ShowHide',
        example: <AnimatedShowHide />,
        source: AnimatedShowHideSrc,
      },
      {
        title: 'Default ShowHide',
        example: <DefaultShowHide />,
        source: DefaultShowHideSrc,
      },
      {
        title: 'Initially Open ShowHide',
        example: <InitiallyOpenShowHide />,
        source: InitiallyOpenShowHideSrc,
      },
      {
        title: 'Custom Link Text ShowHide',
        example: <CustomLinkTextShowHide />,
        source: CustomLinkTextShowHideSrc,
      },
    ]}
    propsTables={[
        {
          componentName: 'ShowHide',
          componentSrc: ShowHideSrc,
        },
    ]}
  />
);

export default DocPage;
