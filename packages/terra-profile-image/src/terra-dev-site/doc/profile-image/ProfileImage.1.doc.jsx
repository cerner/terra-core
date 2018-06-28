import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ImageSrc from '!raw-loader!../../../../src/ProfileImage';

// Example Files
import ProfileImageDefault from '../example/ProfileImageDefault';
import ProfileImageDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ProfileImageDefault';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
