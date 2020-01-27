import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name, version } from '../../../../package.json';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    readme={ChangeLog}
  />
);

export default DocPage;
