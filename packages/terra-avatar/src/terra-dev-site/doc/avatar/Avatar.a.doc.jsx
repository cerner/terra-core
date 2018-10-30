import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import AvatarSrc from '!raw-loader!../../../../src/avatar/Avatar.jsx';

// Example Files
import AvatarUser from '../example/AvatarUser';
import AvatarUserSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AvatarUser';
import AvatarOneInitial from '../example/AvatarOneInitial';
import AvatarOneInitialSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AvatarOneInitial';
import AvatarTwoInitials from '../example/AvatarTwoInitials';
import AvatarTwoInitialsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AvatarTwoInitials';
import AvatarImage from '../example/AvatarImage';
import AvatarImageSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AvatarImage';
import AvatarSize from '../example/AvatarSize';
import AvatarSizeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AvatarSize';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'User',
        example: <AvatarUser />,
        source: AvatarUserSrc,
      },
      {
        title: 'Initials (1)',
        example: <AvatarOneInitial />,
        source: AvatarOneInitialSrc,
      },
      {
        title: 'Initials (2)',
        example: <AvatarTwoInitials />,
        source: AvatarTwoInitialsSrc,
      },
      {
        title: 'Image',
        example: <AvatarImage />,
        source: AvatarImageSrc,
      },
      {
        title: 'Size',
        example: <AvatarSize />,
        source: AvatarSizeSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Avatar',
        componentSrc: AvatarSrc,
      },
    ]}
  />
);

export default DocPage;
