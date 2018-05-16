/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-avatar/docs/README.md';
import { name } from 'terra-avatar/package.json';

// Component Source
import AvatarSrc from '!raw-loader!terra-avatar/src/Avatar';

// Example Files
import AvatarUser from './example/AvatarUser';
import AvatarUserSrc from '!raw-loader!./example/AvatarUser';
import AvatarFacility from './example/AvatarFacility';
import AvatarFacilitySrc from '!raw-loader!./example/AvatarFacility';
import AvatarTwoInitials from './example/AvatarTwoInitials';
import AvatarTwoInitialsSrc from '!raw-loader!./example/AvatarTwoInitials';
import AvatarThreeInitials from './example/AvatarThreeInitials';
import AvatarThreeInitialsSrc from '!raw-loader!./example/AvatarThreeInitials';
import AvatarImage from './example/AvatarImage';
import AvatarImageSrc from '!raw-loader!./example/AvatarImage';

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
        title: 'Facility',
        example: <AvatarFacility />,
        source: AvatarFacilitySrc,
      },
      {
        title: 'Initials (2)',
        example: <AvatarTwoInitials />,
        source: AvatarTwoInitialsSrc,
      },
      {
        title: 'Initials (3)',
        example: <AvatarThreeInitials />,
        source: AvatarThreeInitialsSrc,
      },
      {
        title: 'Image',
        example: <AvatarImage />,
        source: AvatarImageSrc,
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
