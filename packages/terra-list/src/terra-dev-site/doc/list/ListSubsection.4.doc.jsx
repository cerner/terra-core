import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ListSubsection.md';
import { name, version } from '../../../../package.json';

// Component Source
import ListSubsectionSrc from '!raw-loader!../../../../src/ListSubsection';

// Example Files
import ListSubsectionExample from '../example/ListSubsection';
import ListSubsectionExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ListSubsection';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <ListSubsectionExample />,
        source: ListSubsectionExamplesSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'List-Subsection',
        componentSrc: ListSubsectionSrc,
      },
    ]}
  />
);

export default DocPage;
