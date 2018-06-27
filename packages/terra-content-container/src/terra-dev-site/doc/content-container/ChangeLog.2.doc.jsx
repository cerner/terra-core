import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-content-container"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-content-container"
    readme={ChangeLog}
  />
);

export default DocPage;
