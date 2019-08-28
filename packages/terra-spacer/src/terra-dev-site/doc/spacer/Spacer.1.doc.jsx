import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

import { name, version } from '../../../../package.json';

// Example Files
import Spacer from '../example/SpacerExample';
import SpacerExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SpacerExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Spacer',
        description: 'Spacing default button with a padding value of large+4 and primary button with padding value of large+2',
        example: <Spacer />,
        source: SpacerExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: '',
        componentSrc: '',
        componentProps: '',
      },
    ]}
  />
);

export default DocPage;
