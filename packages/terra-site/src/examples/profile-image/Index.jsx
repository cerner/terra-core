/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-profile-image/docs/README.md';
import { name } from 'terra-profile-image/package.json';

// Component Source
import ImageSrc from '!raw-loader!terra-profile-image/src/ProfileImage';

// Example Files
import ProfileImageDefault from './ProfileImageDefault';
import ProfileImageDefaultSrc from '!raw-loader!./ProfileImageDefault';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Profile Image',
        example: <ProfileImageDefault />,
        source: ProfileImageDefaultSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Profile Image',
        componentSrc: ImageSrc,
      },
    ]}
  />
);

export default DocPage;
