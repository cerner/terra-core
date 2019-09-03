import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

import { name, version } from '../../../../package.json';

// Example Files
import SignaturePropsTable from '!terra-props-table-loader!../../../../src/Signature';
import SignatureSrc from '!raw-loader!../../../../src/Signature';
import SignatureExample from '../example/SignatureExample';
import SignatureExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SignatureExample';

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
        componentProps: SignaturePropsTable,
      },
    ]}
  />
);

export default DocPage;
