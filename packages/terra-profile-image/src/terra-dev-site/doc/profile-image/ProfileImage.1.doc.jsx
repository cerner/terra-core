import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import PropsTable from '../../../../docs/ProfileImage-props-table.md';
import { name, version } from '../../../../package.json';

// Example Files
import ProfileImageDefault from '../example/ProfileImageDefault';
import ProfileImageDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ProfileImageDefault';

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
    ]}
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
