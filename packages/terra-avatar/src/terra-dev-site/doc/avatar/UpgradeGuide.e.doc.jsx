import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/upgrade-guide.md';
import { name } from '../../../../package.json';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
  />
);

export default DocPage;
