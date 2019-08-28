import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ListSubsectionHeader.md';

import { name, version } from '../../../../package.json';

// Example Files
import ListSubsectionHeaderExample from '../example/ListSubsectionHeader';
import ListSubsectionHeaderExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListSubsectionHeader';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ListSubsectionHeaderExample />,
        source: ListSubsectionHeaderExamplesSrc,
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
