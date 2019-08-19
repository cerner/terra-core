/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Component Source
import VisuallyHiddenTextSrc from '!raw-loader!../../../../src/VisuallyHiddenText';

// Example Files
import DefaultVisuallyHiddenText from '../example/DefaultVisuallyHiddenText';
import DefaultVisuallyHiddenTextSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultVisuallyHiddenText.jsx';
import RefCallbackVisuallyHiddenText from '../example/RefCallbackVisuallyHiddenText';
import RefCallbackVisuallyHiddenTextSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/RefCallbackVisuallyHiddenText.jsx';


const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'VisuallyHiddenText with empty string',
        example: <DefaultVisuallyHiddenText />,
        source: DefaultVisuallyHiddenTextSrc,
      },
      {
        title: 'VisuallyHiddenText with ref Callback',
        example: <RefCallbackVisuallyHiddenText />,
        source: RefCallbackVisuallyHiddenTextSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'VisuallyHiddenText',
        componentSrc: VisuallyHiddenTextSrc,
      },
    ]}
  />
);

export default DocPage;
