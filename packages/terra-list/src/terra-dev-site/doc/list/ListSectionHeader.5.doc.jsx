import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ListSectionHeader.md';

import { name, version } from '../../../../package.json';

// Example Files
import ListSectionHeaderExample from '../example/ListSectionHeader';
import ListSectionHeaderExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListSectionHeader';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ListSectionHeaderExample />,
        source: ListSectionHeaderExamplesSrc,
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
