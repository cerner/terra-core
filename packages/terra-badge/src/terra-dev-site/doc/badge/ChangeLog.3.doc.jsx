import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-badge"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-badge"
    readme={ChangeLog}
  />
);

export default DocPage;
