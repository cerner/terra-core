/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-badge/docs/README.md';
import { name } from 'terra-badge/package.json';

// Component Source
import BadgeSrc from '!raw-loader!terra-badge/src/Badge';

// Example Files
import BadgeIntent from './BadgeIntent';
import BadgeIntentSrc from '!raw-loader!./BadgeIntent';
import BadgeSize from './BadgeSize';
import BadgeSizeSrc from '!raw-loader!./BadgeSize';
import BadgeIcon from './BadgeIcon';
import BadgeIconSrc from '!raw-loader!./BadgeIcon';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Intent',
        example: <BadgeIntent />,
        source: BadgeIntentSrc,
      },
      {
        title: 'Size',
        example: <BadgeSize />,
        source: BadgeSizeSrc,
      },
      {
        title: 'Icon',
        example: <BadgeIcon />,
        source: BadgeIconSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Badge',
        componentSrc: BadgeSrc,
      },
    ]}
  />
);

export default DocPage;
