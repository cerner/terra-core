import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
<<<<<<< HEAD
import PropsTable from '../../../../docs/Status-props-table.md';
import { name, version } from '../../../../package.json';
=======
import { name, version } from '../../../../package.json';
>>>>>>> master

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import StatusDefault from '../example/StatusDefault';
import StatusDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/StatusDefault';
import StatusImage from '../example/StatusImage';
import StatusImageSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/StatusImage';
import StatusIcon from '../example/StatusIcon';
import StatusIconSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/StatusIcon';
import StatusArrange from '../example/StatusArrange';
import StatusArrangeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/StatusArrange';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
