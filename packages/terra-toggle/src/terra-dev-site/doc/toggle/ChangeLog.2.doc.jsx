import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-toggle"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-toggle"
    readme={ChangeLog}
  />
);

export default DocPage;
