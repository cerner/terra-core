import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/avatar.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import AvatarSrc from '!raw-loader!../../../../src/variants/Avatar.jsx';

// Example Files
import AvatarUser from '../example/avatar/AvatarUser';
import AvatarUserSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/avatar/AvatarUser';
import AvatarOneInitial from '../example/avatar/AvatarOneInitial';
import AvatarOneInitialSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/avatar/AvatarOneInitial';
import AvatarTwoInitials from '../example/avatar/AvatarTwoInitials';
import AvatarTwoInitialsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/avatar/AvatarTwoInitials';
import AvatarImage from '../example/avatar/AvatarImage';
import AvatarImageSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/avatar/AvatarImage';
import AvatarSize from '../example/avatar/AvatarSize';
import AvatarSizeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/avatar/AvatarSize';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default - Fallback Icon',
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
        title: 'Override Size',
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
