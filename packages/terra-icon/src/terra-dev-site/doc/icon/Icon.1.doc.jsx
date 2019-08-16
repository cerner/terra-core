import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Component Source
import IconSrc from '!raw-loader!../../../../src/IconBase';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'Icon',
        componentSrc: IconSrc,
      },
    ]}
  />
);

export default DocPage;
