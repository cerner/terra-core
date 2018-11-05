import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/shared-user.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import src from '!raw-loader!../../../../src/SharedUser.jsx';

import SharedUser from '../example/shared-user/SharedUser';
import SharedUserSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/shared-user/SharedUser';

import SharedUserSize from '../example/shared-user/SharedUserSize';
import SharedUserSizeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/shared-user/SharedUserSize';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default',
        example: <SharedUser />,
        source: SharedUserSrc,
      },
      {
        title: 'Override Size',
        example: <SharedUserSize />,
        source: SharedUserSizeSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Shared User',
        componentSrc: src,
      },
    ]}
  />
);

export default DocPage;
