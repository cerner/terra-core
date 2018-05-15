/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-signature/docs/README.md';
import { name } from 'terra-signature/package.json';

// Component Source
import SignatureSrc from '!raw-loader!terra-signature/src/Signature';

// Example Files
import SignatureExample from './SignatureExample';
import SignatureExampleSrc from '!raw-loader!./SignatureExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
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
