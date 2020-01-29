import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';
import { name } from '../../../../package.json';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    readme={ChangeLog}
  />
);

export default DocPage;
