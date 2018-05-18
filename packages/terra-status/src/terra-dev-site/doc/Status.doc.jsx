/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-status/docs/README.md';
import { name } from 'terra-status/package.json';

// Component Source
import StatusSrc from '!raw-loader!terra-status/src/Status';

// Example Files
import StatusDefault from './StatusDefault';
import StatusDefaultSrc from '!raw-loader!./StatusDefault';
import StatusImage from './StatusImage';
import StatusImageSrc from '!raw-loader!./StatusImage';
import StatusIcon from './StatusIcon';
import StatusIconSrc from '!raw-loader!./StatusIcon';
import StatusArrange from './StatusArrange';
import StatusArrangeSrc from '!raw-loader!./StatusArrange';

const DocPage = () => (
  <DocTemplate
    packageName={name}
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
      },
    ]}
  />
);

export default DocPage;
