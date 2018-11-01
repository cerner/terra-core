import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/multi-user.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import MultiUserSrc from '!raw-loader!../../../../src/multi-user/MultiUser.jsx';

import AvatarMultiUser from '../example/AvatarMultiUser';
import AvatarMultiUserSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AvatarMultiUser';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'MultiUser',
        example: <AvatarMultiUser />,
        source: AvatarMultiUserSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Avatar',
        componentSrc: MultiUserSrc,
      },
    ]}
  />
);

export default DocPage;
