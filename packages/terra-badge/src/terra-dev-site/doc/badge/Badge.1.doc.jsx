import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import PropsTable from '../../../../docs/Badge-props-table.md';
import { name, version } from '../../../../package.json';

// Example Files
import BadgeIntent from '../example/BadgeIntent';
import BadgeIntentSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BadgeIntent';
import BadgeSize from '../example/BadgeSize';
import BadgeSizeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BadgeSize';
import BadgeIcon from '../example/BadgeIcon';
import BadgeIconSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BadgeIcon';
import BadgeVisuallyHiddenText from '../example/BadgeVisuallyHiddenText';
import BadgeVisuallyHiddenTextSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BadgeVisuallyHiddenText';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
      {
        title: 'Visually Hidden Text',
        example: <BadgeVisuallyHiddenText />,
        source: BadgeVisuallyHiddenTextSrc,
      },
    ]}
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
