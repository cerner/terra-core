import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';
import { name, version } from '../../../../package.json';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-scroll"
    readme={ChangeLog}
  />
);

export default DocPage;
