import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/THEMEABLE.md';
import { name, version } from '../../../../package.json';
import IconThemeable from '../example/IconThemeable';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Themeable Variants',
        example: <IconThemeable />,
      },
    ]}
  />
);

export default DocPage;
