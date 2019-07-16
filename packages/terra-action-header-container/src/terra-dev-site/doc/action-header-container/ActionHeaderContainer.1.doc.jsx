import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ActionHeaderContainerSrc from '!raw-loader!../../../../src/ActionHeaderContainer';

// Example Files
import DefaultActionHeaderContainer from '../example/DefaultActionHeaderContainer';
import DefaultActionHeaderContainerSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultActionHeaderContainer';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <DefaultActionHeaderContainer />,
        source: DefaultActionHeaderContainerSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Action Header Container',
        componentSrc: ActionHeaderContainerSrc,
      },
    ]}
  />
);

export default DocPage;
