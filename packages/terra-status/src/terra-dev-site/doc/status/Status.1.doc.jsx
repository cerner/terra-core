import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

import { name, version } from '../../../../package.json';

// Example Files
import StatusPropsTable from '!terra-props-table-loader!../../../../src/Status';
import StatusSrc from '!raw-loader!../../../../src/Status';
import StatusDefault from '../example/StatusDefault';
import StatusDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/StatusDefault';
import StatusImage from '../example/StatusImage';
import StatusImageSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/StatusImage';
import StatusIcon from '../example/StatusIcon';
import StatusIconSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/StatusIcon';
import StatusArrange from '../example/StatusArrange';
import StatusArrangeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/StatusArrange';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Status with text',
        example: <StatusDefault />,
        source: StatusDefaultSrc,
      },
      {
        title: 'Status with Image',
        example: <StatusImage />,
        source: StatusImageSrc,
      },
      {
        title: 'Status with Icon',
        example: <StatusIcon />,
        source: StatusIconSrc,
      },
      {
        title: 'Status with Arrange',
        example: <StatusArrange />,
        source: StatusArrangeSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Status',
        componentSrc: StatusSrc,
        componentProps: StatusPropsTable,
      },
    ]}
  />
);

export default DocPage;
