import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/STATIC.md';
import { name, version } from '../../../../package.json';
import IconStatic from '../example/IconStatic';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Static Variants',
        example: <IconStatic />,
      },
    ]}
  />
);

export default DocPage;
