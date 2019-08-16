import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Component Source
import SignatureSrc from '!raw-loader!../../../../src/Signature';

// Example Files
import SignatureExample from '../example/SignatureExample';
import SignatureExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SignatureExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Signature',
        example: <SignatureExample />,
        source: SignatureExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Signature',
        componentSrc: SignatureSrc,
      },
    ]}
  />
);

export default DocPage;
