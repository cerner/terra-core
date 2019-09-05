import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ListSection.md';

import { name, version } from '../../../../package.json';

// Example Files
import ListSectionPropsTable from '!terra-props-table-loader!../../../../src/ListSection';
import ListSectionSrc from '!raw-loader!../../../../src/ListSection';
import ListSectionExample from '../example/ListSection';
import ListSectionExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListSection';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ListSectionExample />,
        source: ListSectionExamplesSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'List Section',
        componentSrc: ListSectionSrc,
        componentProps: ListSectionPropsTable,
      },
    ]}
  />
);

export default DocPage;
