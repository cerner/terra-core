import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

import { name, version } from '../../../../package.json';

import IconBasePropsTable from '!terra-props-table-loader!../../../../src/IconBase';
import IconBaseSrc from '!raw-loader!../../../../src/IconBase';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'Icon',
        componentSrc: IconBaseSrc,
        componentProps: IconBasePropsTable,
      },
    ]}
  />
);

export default DocPage;
