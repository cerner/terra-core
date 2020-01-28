import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

import { name, version } from '../../../../package.json';

// Example Files
import ProfileImagePropsTable from '!terra-props-table-loader!../../../../src/ProfileImage';
import ProfileImageSrc from '!raw-loader!../../../../src/ProfileImage';
import ProfileImageDefault from '../example/ProfileImageDefault';
import ProfileImageDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ProfileImageDefault';
import ProfileImageFit from '../example/ProfileImageFitTypes';
import ProfileImageFitSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ProfileImageFitTypes';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Profile Image',
        example: <ProfileImageDefault />,
        source: ProfileImageDefaultSrc,
      },
      {
        title: 'Toggle Profile Image Fit',
        example: <ProfileImageFit />,
        source: ProfileImageFitSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Profile Image',
        componentSrc: ProfileImageSrc,
        componentProps: ProfileImagePropsTable,
      },
    ]}
  />
);

export default DocPage;
